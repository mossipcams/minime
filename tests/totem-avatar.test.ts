import { describe, it, expect } from 'vitest';
import { getTotemSvg, totemStyles } from '../src/animated-presence/totem-avatar';
import type { Activity } from '../src/animated-presence/totem-avatar';

describe('Totem Avatar', () => {
  const activities: Activity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];

  it('exports getTotemSvg as a function', () => {
    expect(typeof getTotemSvg).toBe('function');
  });

  it('exports totemStyles as a string', () => {
    expect(typeof totemStyles).toBe('string');
    expect(totemStyles.length).toBeGreaterThan(0);
  });

  for (const activity of activities) {
    it(`generates valid SVG for "${activity}" activity`, () => {
      const svg = getTotemSvg(activity);
      expect(svg).toContain('<svg');
      expect(svg).toContain('</svg>');
      expect(svg).toContain(`totem-${activity}`);
      expect(svg).toContain('totem-avatar');
    });
  }

  it('contains head, body, arms, and legs groups', () => {
    const svg = getTotemSvg('idle');
    expect(svg).toContain('totem-head');
    expect(svg).toContain('totem-body');
    expect(svg).toContain('totem-left-arm');
    expect(svg).toContain('totem-right-arm');
    expect(svg).toContain('totem-left-leg');
    expect(svg).toContain('totem-right-leg');
  });

  it('sleeping activity includes zzz elements', () => {
    const svg = getTotemSvg('sleeping');
    expect(svg).toContain('totem-zzz');
    expect(svg).toContain('Z');
  });

  it('non-sleeping activities do not include zzz', () => {
    for (const activity of ['idle', 'walking', 'studying', 'cooking'] as Activity[]) {
      const svg = getTotemSvg(activity);
      expect(svg).not.toContain('totem-zzz');
    }
  });

  it('falls back to idle for unknown activity', () => {
    const svg = getTotemSvg('unknown');
    expect(svg).toContain('totem-idle');
  });

  it('uses pixel art color palette', () => {
    const svg = getTotemSvg('idle');
    expect(svg).toContain('#E8B84B');
    expect(svg).toContain('#A67C2E');
    expect(svg).toContain('#4CAF50');
    expect(svg).toContain('#2D2D2D');
  });

  it('totemStyles contains keyframe animations for all activities', () => {
    expect(totemStyles).toContain('totem-bob');
    expect(totemStyles).toContain('totem-arm-swing');
    expect(totemStyles).toContain('totem-type');
    expect(totemStyles).toContain('totem-stir');
    expect(totemStyles).toContain('totem-zzz');
  });

  it('SVG uses crispEdges for pixel art rendering', () => {
    const svg = getTotemSvg('idle');
    expect(svg).toContain('crispEdges');
  });
});
