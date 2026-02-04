import { createInitialState, changeRoom as stateChangeRoom, tick, type PresenceState } from './presence-states';

export type StateCallback = (state: PresenceState) => void;

export class PresenceEngine {
  private _state: PresenceState;
  private _onStateChange: StateCallback;
  private _rafId: number | null = null;
  private _lastTimestamp: number | null = null;

  constructor(onStateChange: StateCallback) {
    this._state = createInitialState();
    this._onStateChange = onStateChange;
  }

  getState(): PresenceState {
    return this._state;
  }

  changeRoom(room: string): void {
    this._state = stateChangeRoom(this._state, room);
    this._onStateChange(this._state);
  }

  start(): void {
    if (this._rafId !== null) return;
    this._lastTimestamp = null;
    this._rafId = requestAnimationFrame((ts) => this._loop(ts));
  }

  stop(): void {
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    this._lastTimestamp = null;
  }

  private _loop(timestamp: number): void {
    if (this._lastTimestamp !== null) {
      const delta = timestamp - this._lastTimestamp;
      const prevState = this._state;
      this._state = tick(this._state, delta);
      if (this._state !== prevState) {
        this._onStateChange(this._state);
      }
    }
    this._lastTimestamp = timestamp;
    this._rafId = requestAnimationFrame((ts) => this._loop(ts));
  }
}
