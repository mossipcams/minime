import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AnimationEngine } from '../src/animation/engine';
import { AnimationPhase } from '../src/animation/states';

describe('AnimationEngine', () => {
  it('can be constructed and starts in IDLE with no room', () => {
    const engine = new AnimationEngine(() => {});
    expect(engine.getState().phase).toBe(AnimationPhase.IDLE);
    expect(engine.getState().currentRoom).toBeNull();
  });

  it('changeRoom triggers callback with updated state', () => {
    const cb = vi.fn();
    const engine = new AnimationEngine(cb);
    engine.changeRoom('office');
    // Should have called back with TRANSITION (null room → office skips exit walk)
    expect(cb).toHaveBeenCalled();
    expect(engine.getState().phase).toBe(AnimationPhase.TRANSITION);
    expect(engine.getState().targetRoom).toBe('office');
  });

  it('start begins rAF loop and tick advances state', () => {
    vi.useFakeTimers();
    // Mock requestAnimationFrame
    let rafCallback: ((ts: number) => void) | null = null;
    vi.stubGlobal('requestAnimationFrame', (cb: (ts: number) => void) => {
      rafCallback = cb;
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());

    const cb = vi.fn();
    const engine = new AnimationEngine(cb);
    engine.changeRoom('office'); // Start in TRANSITION phase
    cb.mockClear();

    engine.start();
    // Simulate first rAF call
    expect(rafCallback).not.toBeNull();
    rafCallback!(100);
    // Second call with delta
    rafCallback!(200);
    // Should have called back with progressed state
    expect(cb).toHaveBeenCalled();

    engine.stop();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('stop cancels rAF and prevents further callbacks', () => {
    const cancelFn = vi.fn();
    let rafCallback: ((ts: number) => void) | null = null;
    vi.stubGlobal('requestAnimationFrame', (cb: (ts: number) => void) => {
      rafCallback = cb;
      return 42;
    });
    vi.stubGlobal('cancelAnimationFrame', cancelFn);

    const cb = vi.fn();
    const engine = new AnimationEngine(cb);
    engine.changeRoom('office');
    cb.mockClear();

    engine.start();
    engine.stop();
    expect(cancelFn).toHaveBeenCalledWith(42);

    vi.unstubAllGlobals();
  });
});
