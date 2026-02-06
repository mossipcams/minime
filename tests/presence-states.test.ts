import { describe, it, expect } from 'vitest';
import { createInitialState, changeRoom, tick, PresencePhase } from '../src/animated-presence/presence-states';

describe('Presence State Machine', () => {
  it('creates state in IDLE phase with no room', () => {
    const state = createInitialState();
    expect(state.phase).toBe(PresencePhase.IDLE);
    expect(state.currentRoom).toBeNull();
    expect(state.targetRoom).toBeNull();
    expect(state.visible).toBe(true);
    expect(state.avatarX).toBe(35);
    expect(state.animation).toBe('idle');
    expect(state.crossfadeProgress).toBe(0);
    expect(state.outgoingRoom).toBeNull();
  });

  it('creates state with initial room and room-specific animation', () => {
    const validOfficeActivities = ['studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call'];
    const state = createInitialState('office');
    expect(state.currentRoom).toBe('office');
    expect(validOfficeActivities).toContain(state.animation);
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

  it('full cycle: office to kitchen ends in IDLE with a valid kitchen animation', () => {
    const validKitchenActivities = ['cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking'];
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    while (state.phase !== PresencePhase.IDLE) {
      state = tick(state, 16);
    }
    expect(state.currentRoom).toBe('kitchen');
    expect(validKitchenActivities).toContain(state.animation);
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

  it('full room transition takes at least 4 seconds of simulated time', () => {
    let state = createInitialState('office');
    state = changeRoom(state, 'kitchen');
    // Simulate 3 seconds of 16ms frames
    for (let i = 0; i < Math.floor(3000 / 16); i++) {
      state = tick(state, 16);
    }
    // Should still be transitioning, not idle yet
    expect(state.phase).not.toBe(PresencePhase.IDLE);
  });

  it('living_room uses a valid living room animation', () => {
    const validActivities = ['watching', 'gaming', 'reading-couch', 'relaxing', 'stretching', 'napping'];
    const state = createInitialState('living_room');
    expect(validActivities).toContain(state.animation);
  });

  it('getRoomAnimation returns one of the room activity arrays', () => {
    const officeActivities = ['studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call'];
    const kitchenActivities = ['cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking'];
    const livingActivities = ['watching', 'gaming', 'reading-couch', 'relaxing', 'stretching', 'napping'];
    const bedroomActivities = ['sleeping', 'reading-bed', 'meditating', 'getting-dressed', 'morning-stretch', 'phone-bed'];

    // Run multiple times to verify randomness coverage
    const officeResults = new Set<string>();
    const kitchenResults = new Set<string>();
    const livingResults = new Set<string>();
    const bedroomResults = new Set<string>();

    for (let i = 0; i < 100; i++) {
      officeResults.add(createInitialState('office').animation);
      kitchenResults.add(createInitialState('kitchen').animation);
      livingResults.add(createInitialState('living_room').animation);
      bedroomResults.add(createInitialState('bedroom').animation);
    }

    // Each result should be within the valid set
    for (const a of officeResults) expect(officeActivities).toContain(a);
    for (const a of kitchenResults) expect(kitchenActivities).toContain(a);
    for (const a of livingResults) expect(livingActivities).toContain(a);
    for (const a of bedroomResults) expect(bedroomActivities).toContain(a);

    // With 100 rolls and 6 options, we should see at least 2 different values
    expect(officeResults.size).toBeGreaterThanOrEqual(2);
    expect(kitchenResults.size).toBeGreaterThanOrEqual(2);
    expect(livingResults.size).toBeGreaterThanOrEqual(2);
    expect(bedroomResults.size).toBeGreaterThanOrEqual(2);
  });
});
