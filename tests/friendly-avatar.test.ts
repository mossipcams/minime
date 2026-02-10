import { describe, it, expect } from 'vitest';
import { getFriendlyAvatarSvg, friendlyAvatarStyles } from '../src/animated-presence/friendly-avatar';

describe('Friendly Avatar', () => {
  it('exports getFriendlyAvatarSvg as a function', () => {
    expect(typeof getFriendlyAvatarSvg).toBe('function');
  });

  it('exports friendlyAvatarStyles as a non-empty string', () => {
    expect(typeof friendlyAvatarStyles).toBe('string');
    expect(friendlyAvatarStyles.length).toBeGreaterThan(0);
  });

  it('renders reusable base classes and idle activity class', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('friendly-avatar');
    expect(svg).toContain('friendly-idle');
    expect(svg).toContain('friendly-character');
    expect(svg).toContain('friendly-base');
    expect(svg).toContain('friendly-body');
    expect(svg).toContain('friendly-head');
    expect(svg).toContain('friendly-face');
  });

  it('uses a shared foundation and applies activity overlays', () => {
    const idleSvg = getFriendlyAvatarSvg('idle');
    const walkSvg = getFriendlyAvatarSvg('walking');
    const sleepSvg = getFriendlyAvatarSvg('sleeping');
    expect(idleSvg).toContain('friendly-base');
    expect(walkSvg).toContain('friendly-base');
    expect(sleepSvg).toContain('friendly-base');
    expect(walkSvg).toContain('friendly-overlay-walking');
    expect(sleepSvg).toContain('friendly-overlay-sleeping');
  });

  it('falls back to idle for unknown activity', () => {
    const svg = getFriendlyAvatarSvg('unknown');
    expect(svg).toContain('friendly-idle');
  });
});
