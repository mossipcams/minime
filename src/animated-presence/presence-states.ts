export enum PresencePhase {
  IDLE = 'IDLE',
  WALKING_OUT = 'WALKING_OUT',
  CROSSFADE = 'CROSSFADE',
  WALKING_IN = 'WALKING_IN',
}

const ROOM_ANIMATIONS: Record<string, string> = {
  office: 'studying',
  kitchen: 'cooking',
  bedroom: 'sleeping',
  living_room: 'idle',
};

const WALK_SPEED = 0.06;
const EXIT_EDGE = 110;
const ENTER_EDGE = -10;
const CROSSFADE_DURATION = 400;
const MAX_DELTA = 200;
const DEFAULT_X = 50;

function getRoomAnimation(room: string | null): string {
  if (!room) return 'idle';
  return ROOM_ANIMATIONS[room] ?? 'idle';
}

export type PresenceState = ReturnType<typeof createInitialState>;

export function createInitialState(room?: string) {
  const currentRoom = room ?? null as string | null;
  return {
    phase: PresencePhase.IDLE as PresencePhase,
    currentRoom,
    targetRoom: null as string | null,
    avatarX: DEFAULT_X,
    lottieAnimation: getRoomAnimation(currentRoom),
    crossfadeProgress: 0,
    outgoingRoom: null as string | null,
    visible: true,
  };
}

export function changeRoom(state: PresenceState, room: string): PresenceState {
  if (room === state.currentRoom) {
    return state;
  }

  if (!state.currentRoom) {
    return {
      ...state,
      targetRoom: room,
      phase: PresencePhase.CROSSFADE,
      crossfadeProgress: 0,
      visible: false,
    };
  }

  if (state.phase === PresencePhase.WALKING_OUT || state.phase === PresencePhase.CROSSFADE) {
    return { ...state, targetRoom: room };
  }

  return {
    ...state,
    targetRoom: room,
    phase: PresencePhase.WALKING_OUT,
    outgoingRoom: state.currentRoom,
    lottieAnimation: 'walking',
  };
}

export function tick(state: PresenceState, deltaMs: number): PresenceState {
  const dt = Math.min(deltaMs, MAX_DELTA);

  if (state.phase === PresencePhase.IDLE) {
    return state;
  }

  if (state.phase === PresencePhase.WALKING_OUT) {
    const newX = state.avatarX + WALK_SPEED * dt;

    if (newX >= EXIT_EDGE) {
      return {
        ...state,
        phase: PresencePhase.CROSSFADE,
        avatarX: EXIT_EDGE,
        visible: false,
        crossfadeProgress: 0,
        outgoingRoom: state.currentRoom,
      };
    }

    return { ...state, avatarX: newX };
  }

  if (state.phase === PresencePhase.CROSSFADE) {
    const newCrossfade = state.crossfadeProgress + dt / CROSSFADE_DURATION;
    if (newCrossfade >= 1) {
      return {
        ...state,
        phase: PresencePhase.WALKING_IN,
        currentRoom: state.targetRoom,
        crossfadeProgress: 1,
        avatarX: ENTER_EDGE,
        visible: true,
        lottieAnimation: 'walking',
      };
    }
    return { ...state, crossfadeProgress: newCrossfade };
  }

  if (state.phase === PresencePhase.WALKING_IN) {
    const newX = state.avatarX + WALK_SPEED * dt;

    if (newX >= DEFAULT_X) {
      const result: PresenceState = {
        ...state,
        phase: PresencePhase.IDLE,
        avatarX: DEFAULT_X,
        targetRoom: null,
        outgoingRoom: null,
        lottieAnimation: getRoomAnimation(state.currentRoom),
      };
      if (state.targetRoom && state.targetRoom !== state.currentRoom) {
        return changeRoom(result, state.targetRoom);
      }
      return result;
    }

    return { ...state, avatarX: newX };
  }

  return state;
}
