import { describe, it, expect } from 'vitest';
import {
  createInitialState,
  changeRoom,
  tick,
  AnimationPhase,
} from '../src/animation/states';

describe('Animation State Machine', () => {
  it('creates state in IDLE phase with no room', () => {
    const state = createInitialState();
    expect(state.phase).toBe(AnimationPhase.IDLE);
    expect(state.currentRoom).toBeNull();
    expect(state.targetRoom).toBeNull();
    expect(state.visible).toBe(true);
    expect(state.progress).toBe(0);
  });

  it('creates state with an initial room and room-specific position', () => {
    const state = createInitialState('office');
    expect(state.phase).toBe(AnimationPhase.IDLE);
    expect(state.currentRoom).toBe('office');
    expect(state.avatarX).toBe(55);
  });

  it('changeRoom does nothing when target is same as current room', () => {
    const state = createInitialState('office');
    const next = changeRoom(state, 'office');
    expect(next.phase).toBe(AnimationPhase.IDLE);
    expect(next.targetRoom).toBeNull();
  });

  it('changeRoom from null room skips exit walk and goes to TRANSITION', () => {
    const state = createInitialState();
    const next = changeRoom(state, 'kitchen');
    expect(next.targetRoom).toBe('kitchen');
    expect(next.phase).toBe(AnimationPhase.TRANSITION);
  });

  it('changeRoom starts EXIT_WALK when changing between rooms', () => {
    const state = createInitialState('office');
    const next = changeRoom(state, 'kitchen');
    expect(next.phase).toBe(AnimationPhase.EXIT_WALK);
    expect(next.targetRoom).toBe('kitchen');
    expect(next.currentRoom).toBe('office');
  });

  it('rapid room change during EXIT_WALK updates target without resetting phase', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    expect(state.phase).toBe(AnimationPhase.EXIT_WALK);
    state = changeRoom(state, 'bedroom');
    expect(state.phase).toBe(AnimationPhase.EXIT_WALK);
    expect(state.targetRoom).toBe('bedroom');
  });

  it('tick in IDLE advances frame index at 8 FPS', () => {
    const state = createInitialState('office');
    const next = tick(state, 125); // 8 FPS = 125ms per frame
    expect(next.frameIndex).toBe(1);
  });

  it('tick in EXIT_WALK moves avatar toward screen edge', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    const startX = state.avatarX;
    const next = tick(state, 100);
    expect(next.avatarX).not.toBe(startX);
    expect(next.phase).toBe(AnimationPhase.EXIT_WALK);
  });

  it('EXIT_WALK transitions to TRANSITION when avatar reaches edge', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    while (state.phase === AnimationPhase.EXIT_WALK) {
      state = tick(state, 16);
    }
    expect(state.phase).toBe(AnimationPhase.TRANSITION);
    expect(state.visible).toBe(false);
  });

  it('TRANSITION completes crossfade and enters ENTER_WALK with new room', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    // Walk to edge
    while (state.phase === AnimationPhase.EXIT_WALK) {
      state = tick(state, 16);
    }
    expect(state.phase).toBe(AnimationPhase.TRANSITION);
    // Complete crossfade
    while (state.phase === AnimationPhase.TRANSITION) {
      state = tick(state, 16);
    }
    expect(state.phase).toBe(AnimationPhase.ENTER_WALK);
    expect(state.currentRoom).toBe('kitchen');
    expect(state.visible).toBe(true);
  });

  it('full cycle: office to kitchen ends in IDLE at kitchen position', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    // Run full animation to completion
    while (state.phase !== AnimationPhase.IDLE) {
      state = tick(state, 16);
    }
    expect(state.currentRoom).toBe('kitchen');
    expect(state.avatarX).toBe(40); // kitchen position
    expect(state.targetRoom).toBeNull();
  });

  it('clamps large delta times to 200ms max', () => {
    const state = createInitialState('office');
    const normalTick = tick(state, 200);
    const hugeTick = tick(state, 5000);
    // Both should produce same result since 5000 gets clamped to 200
    expect(hugeTick.frameIndex).toBe(normalTick.frameIndex);
    expect(hugeTick.progress).toBe(normalTick.progress);
  });

  it('idle frame index wraps for office (3 frames)', () => {
    let state = createInitialState('office');
    const frames: number[] = [];
    for (let i = 0; i < 4; i++) {
      frames.push(state.frameIndex);
      state = tick(state, 125);
    }
    expect(frames).toEqual([0, 1, 2, 0]);
  });
});
