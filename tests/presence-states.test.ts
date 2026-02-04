import { describe, it, expect } from 'vitest';
import { createInitialState, changeRoom, tick, PresencePhase } from '../src/animated-presence/presence-states';

describe('Presence State Machine', () => {
  it('creates state in IDLE phase with no room', () => {
    const state = createInitialState();
    expect(state.phase).toBe(PresencePhase.IDLE);
    expect(state.currentRoom).toBeNull();
    expect(state.targetRoom).toBeNull();
    expect(state.visible).toBe(true);
    expect(state.avatarX).toBe(50);
    expect(state.animation).toBe('idle');
    expect(state.crossfadeProgress).toBe(0);
    expect(state.outgoingRoom).toBeNull();
  });

  it('creates state with initial room and room-specific animation', () => {
    const state = createInitialState('office');
    expect(state.currentRoom).toBe('office');
    expect(state.animation).toBe('studying');
  });

  it('changeRoom does nothing when target is same as current room', () => {
    const state = createInitialState('office');
    const next = changeRoom(state, 'office');
    expect(next.phase).toBe(PresencePhase.IDLE);
    expect(next.targetRoom).toBeNull();
  });

  it('changeRoom from null room skips walking out and goes to CROSSFADE', () => {
    const state = createInitialState();
    const next = changeRoom(state, 'kitchen');
    expect(next.targetRoom).toBe('kitchen');
    expect(next.phase).toBe(PresencePhase.CROSSFADE);
  });

  it('changeRoom starts WALKING_OUT when changing between rooms', () => {
    const state = createInitialState('office');
    const next = changeRoom(state, 'kitchen');
    expect(next.phase).toBe(PresencePhase.WALKING_OUT);
    expect(next.targetRoom).toBe('kitchen');
    expect(next.currentRoom).toBe('office');
  });

  it('tick in WALKING_OUT moves avatar toward screen edge', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    const startX = state.avatarX;
    const next = tick(state, 100);
    expect(next.avatarX).toBeGreaterThan(startX);
    expect(next.phase).toBe(PresencePhase.WALKING_OUT);
  });

  it('WALKING_OUT transitions to CROSSFADE when avatar reaches edge', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    while (state.phase === PresencePhase.WALKING_OUT) {
      state = tick(state, 16);
    }
    expect(state.phase).toBe(PresencePhase.CROSSFADE);
    expect(state.visible).toBe(false);
  });

  it('CROSSFADE completes and enters WALKING_IN with new room', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    while (state.phase === PresencePhase.WALKING_OUT) {
      state = tick(state, 16);
    }
    expect(state.phase).toBe(PresencePhase.CROSSFADE);
    while (state.phase === PresencePhase.CROSSFADE) {
      state = tick(state, 16);
    }
    expect(state.phase).toBe(PresencePhase.WALKING_IN);
    expect(state.currentRoom).toBe('kitchen');
    expect(state.visible).toBe(true);
  });

  it('full cycle: office to kitchen ends in IDLE with kitchen animation', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    while (state.phase !== PresencePhase.IDLE) {
      state = tick(state, 16);
    }
    expect(state.currentRoom).toBe('kitchen');
    expect(state.animation).toBe('cooking');
    expect(state.targetRoom).toBeNull();
  });

  it('clamps large delta times to 200ms max', () => {
    let state1 = createInitialState('office');
    state1 = changeRoom(state1, 'kitchen');
    let state2 = createInitialState('office');
    state2 = changeRoom(state2, 'kitchen');
    const normal = tick(state1, 200);
    const huge = tick(state2, 5000);
    expect(huge.avatarX).toBe(normal.avatarX);
  });

  it('rapid room change during WALKING_OUT updates target without resetting phase', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    expect(state.phase).toBe(PresencePhase.WALKING_OUT);
    state = changeRoom(state, 'bedroom');
    expect(state.phase).toBe(PresencePhase.WALKING_OUT);
    expect(state.targetRoom).toBe('bedroom');
  });

  it('uses walking.json animation during walk phases', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    expect(state.animation).toBe('walking');
  });
});
