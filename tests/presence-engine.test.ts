import { describe, it, expect, vi } from 'vitest';
import { PresenceEngine } from '../src/animated-presence/presence-engine';
import { PresencePhase } from '../src/animated-presence/presence-states';

describe('PresenceEngine', () => {
  it('can be constructed and starts in IDLE with no room', () => {
    const engine = new PresenceEngine(() => {});
    expect(engine.getState().phase).toBe(PresencePhase.IDLE);
    expect(engine.getState().currentRoom).toBeNull();
  });

  it('changeRoom triggers callback with updated state', () => {
    const cb = vi.fn();
    const engine = new PresenceEngine(cb);
    engine.changeRoom('office');
    expect(cb).toHaveBeenCalled();
    expect(engine.getState().phase).toBe(PresencePhase.CROSSFADE);
    expect(engine.getState().targetRoom).toBe('office');
  });

  it('start begins rAF loop and tick advances state', () => {
    let rafCallback: ((ts: number) => void) | null = null;
    vi.stubGlobal('requestAnimationFrame', (cb: (ts: number) => void) => {
      rafCallback = cb;
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());

    const cb = vi.fn();
    const engine = new PresenceEngine(cb);
    engine.changeRoom('office');
    cb.mockClear();

    engine.start();
    expect(rafCallback).not.toBeNull();
    rafCallback!(100);
    rafCallback!(200);
    expect(cb).toHaveBeenCalled();

    engine.stop();
    vi.unstubAllGlobals();
  });

  it('stop cancels rAF', () => {
    const cancelFn = vi.fn();
    vi.stubGlobal('requestAnimationFrame', (cb: (ts: number) => void) => {
      return 42;
    });
    vi.stubGlobal('cancelAnimationFrame', cancelFn);

    const engine = new PresenceEngine(() => {});
    engine.start();
    engine.stop();
    expect(cancelFn).toHaveBeenCalledWith(42);

    vi.unstubAllGlobals();
  });
});
