import { describe, it, expect, vi, beforeEach } from 'vitest';
import { loadLottie, resetLottieLoader } from '../src/animated-presence/lottie-loader';

describe('Lottie Loader', () => {
  it('exports loadLottie as a function', () => {
    expect(typeof loadLottie).toBe('function');
  });

  it('creates a script element pointing to CDN', () => {
    resetLottieLoader();
    const appendSpy = vi.spyOn(document.head, 'appendChild');
    loadLottie().catch(() => {});
    expect(appendSpy).toHaveBeenCalled();
    const script = appendSpy.mock.calls[0][0] as HTMLScriptElement;
    expect(script.src).toContain('lottie');
    appendSpy.mockRestore();
  });

  it('returns same promise on multiple calls (singleton)', () => {
    resetLottieLoader();
    vi.spyOn(document.head, 'appendChild').mockImplementation(() => document.head);
    const p1 = loadLottie();
    const p2 = loadLottie();
    expect(p1).toBe(p2);
    vi.restoreAllMocks();
  });

  it('resolves immediately if window.lottie already exists', async () => {
    resetLottieLoader();
    const fakeLottie = { loadAnimation: vi.fn() };
    (window as any).lottie = fakeLottie;
    const result = await loadLottie();
    expect(result).toBe(fakeLottie);
    delete (window as any).lottie;
  });
});
