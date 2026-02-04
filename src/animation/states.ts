export enum AnimationPhase {
  IDLE = 'IDLE',
  EXIT_WALK = 'EXIT_WALK',
  TRANSITION = 'TRANSITION',
  ENTER_WALK = 'ENTER_WALK',
}

const ROOM_POSITIONS: Record<string, number> = {
  office: 55,
  kitchen: 40,
  living_room: 25,
  bedroom: 28,
};

const DEFAULT_X = 50;
const FRAME_DURATION = 125; // 8 FPS
const MAX_DELTA = 200;
const WALK_SPEED = 0.06; // % per ms (~60% per second)
const EXIT_EDGE = 110; // off-screen right
const ENTER_EDGE = -10; // off-screen left
const CROSSFADE_DURATION = 400; // ms
const WALK_FRAMES = 4;

// Number of idle frames per room animation
const IDLE_FRAME_COUNTS: Record<string, number> = {
  office: 3,
  kitchen: 3,
  living_room: 2,
  bedroom: 2,
};
const DEFAULT_IDLE_FRAMES = 2;

export type AnimState = ReturnType<typeof createInitialState>;

export function getRoomX(room: string | null): number {
  if (!room) return DEFAULT_X;
  return ROOM_POSITIONS[room] ?? DEFAULT_X;
}

function getIdleFrameCount(room: string | null): number {
  if (!room) return DEFAULT_IDLE_FRAMES;
  return IDLE_FRAME_COUNTS[room] ?? DEFAULT_IDLE_FRAMES;
}

export function createInitialState(room?: string) {
  return {
    phase: AnimationPhase.IDLE as AnimationPhase,
    currentRoom: room ?? null as string | null,
    targetRoom: null as string | null,
    avatarX: getRoomX(room ?? null),
    progress: 0,
    frameIndex: 0,
    facingRight: true,
    visible: true,
    outgoingRoom: null as string | null,
    crossfadeProgress: 0,
  };
}

export function changeRoom(state: AnimState, room: string): AnimState {
  if (room === state.currentRoom) {
    return state;
  }

  // No current room - skip exit walk, go straight to transition
  if (!state.currentRoom) {
    return {
      ...state,
      targetRoom: room,
      phase: AnimationPhase.TRANSITION,
      progress: 0,
      crossfadeProgress: 0,
      visible: false,
    };
  }

  // Already in exit walk or transition - just update target
  if (state.phase === AnimationPhase.EXIT_WALK || state.phase === AnimationPhase.TRANSITION) {
    return { ...state, targetRoom: room };
  }

  // Has a current room - start exit walk
  return {
    ...state,
    targetRoom: room,
    phase: AnimationPhase.EXIT_WALK,
    progress: 0,
    frameIndex: 0,
    outgoingRoom: state.currentRoom,
    facingRight: true,
  };
}

export function tick(state: AnimState, deltaMs: number): AnimState {
  const dt = Math.min(deltaMs, MAX_DELTA);

  if (state.phase === AnimationPhase.IDLE) {
    const frameCount = getIdleFrameCount(state.currentRoom);
    const elapsed = state.progress + dt;
    if (elapsed >= FRAME_DURATION) {
      return {
        ...state,
        frameIndex: (state.frameIndex + 1) % frameCount,
        progress: elapsed - FRAME_DURATION,
      };
    }
    return { ...state, progress: elapsed };
  }

  if (state.phase === AnimationPhase.EXIT_WALK) {
    const newX = state.avatarX + WALK_SPEED * dt;
    const elapsed = state.progress + dt;
    const newFrame = elapsed >= FRAME_DURATION
      ? (state.frameIndex + 1) % WALK_FRAMES
      : state.frameIndex;
    const newProgress = elapsed >= FRAME_DURATION ? elapsed - FRAME_DURATION : elapsed;

    if (newX >= EXIT_EDGE) {
      // Reached edge - transition to crossfade
      return {
        ...state,
        phase: AnimationPhase.TRANSITION,
        avatarX: EXIT_EDGE,
        visible: false,
        progress: 0,
        crossfadeProgress: 0,
        frameIndex: 0,
        outgoingRoom: state.currentRoom,
      };
    }

    return {
      ...state,
      avatarX: newX,
      frameIndex: newFrame,
      progress: newProgress,
      facingRight: true,
    };
  }

  if (state.phase === AnimationPhase.TRANSITION) {
    const newCrossfade = state.crossfadeProgress + dt / CROSSFADE_DURATION;
    if (newCrossfade >= 1) {
      // Crossfade complete - start enter walk
      return {
        ...state,
        phase: AnimationPhase.ENTER_WALK,
        currentRoom: state.targetRoom,
        crossfadeProgress: 1,
        avatarX: ENTER_EDGE,
        visible: true,
        progress: 0,
        frameIndex: 0,
        facingRight: true,
      };
    }
    return { ...state, crossfadeProgress: newCrossfade };
  }

  if (state.phase === AnimationPhase.ENTER_WALK) {
    const targetX = getRoomX(state.currentRoom);
    const newX = state.avatarX + WALK_SPEED * dt;
    const elapsed = state.progress + dt;
    const newFrame = elapsed >= FRAME_DURATION
      ? (state.frameIndex + 1) % WALK_FRAMES
      : state.frameIndex;
    const newProgress = elapsed >= FRAME_DURATION ? elapsed - FRAME_DURATION : elapsed;

    if (newX >= targetX) {
      // Reached destination
      const result: AnimState = {
        ...state,
        phase: AnimationPhase.IDLE,
        avatarX: targetX,
        progress: 0,
        frameIndex: 0,
        targetRoom: null,
        outgoingRoom: null,
      };
      // If a new target arrived during enter walk, start exit
      if (state.targetRoom && state.targetRoom !== state.currentRoom) {
        return changeRoom(result, state.targetRoom);
      }
      return result;
    }

    return {
      ...state,
      avatarX: newX,
      frameIndex: newFrame,
      progress: newProgress,
      facingRight: true,
    };
  }

  return state;
}
