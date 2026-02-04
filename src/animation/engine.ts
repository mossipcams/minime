import { createInitialState, changeRoom as stateChangeRoom, tick, type AnimState } from './states';

export type StateCallback = (state: AnimState) => void;

export class AnimationEngine {
  private _state: AnimState;
  private _onStateChange: StateCallback;
  private _rafId: number | null = null;
  private _lastTimestamp: number | null = null;

  constructor(onStateChange: StateCallback) {
    this._state = createInitialState();
    this._onStateChange = onStateChange;
  }

  getState(): AnimState {
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
      // Only call back when state actually changed
      if (this._state !== prevState) {
        this._onStateChange(this._state);
      }
    }
    this._lastTimestamp = timestamp;
    this._rafId = requestAnimationFrame((ts) => this._loop(ts));
  }
}
