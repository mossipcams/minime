import { describe, it, expect } from 'vitest';
import { getTotemSvg, totemStyles } from '../src/animated-presence/totem-avatar';
import type { Activity } from '../src/animated-presence/totem-avatar';

const activities: Activity[] = [
  'idle', 'walking',
  'studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call',
  'cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking',
  'watching', 'gaming', 'reading-couch', 'relaxing', 'stretching', 'napping',
  'sleeping', 'reading-bed', 'meditating', 'getting-dressed', 'morning-stretch', 'phone-bed',
];

describe('Totem Avatar', () => {
  it('exports getTotemSvg as a function', () => {
    expect(typeof getTotemSvg).toBe('function');
  });

  it('generates valid SVG with correct classes for idle activity', () => {
    const svg = getTotemSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('totem-idle');
    expect(svg).toContain('totem-avatar');
  });

  it('exports totemStyles as a non-empty string', () => {
    expect(typeof totemStyles).toBe('string');
    expect(totemStyles.length).toBeGreaterThan(0);
  });

  it('contains head, body, arms, and legs groups', () => {
    const svg = getTotemSvg('idle');
    expect(svg).toContain('totem-head');
    expect(svg).toContain('totem-body');
    expect(svg).toContain('totem-left-arm');
    expect(svg).toContain('totem-right-arm');
    expect(svg).toContain('totem-left-leg');
    expect(svg).toContain('totem-right-leg');
    expect(svg).toContain('totem-shadow');
    expect(svg).toContain('totem-character');
  });

  it('uses geometric shapes (circles and rounded rects) for body parts', () => {
    const svg = getTotemSvg('idle');
    // Head is a circle
    expect(svg).toMatch(/<circle[^>]+cx="25"[^>]+cy="18"[^>]+r="12"/);
    // Body, arms, legs use rounded rects
    const roundedRects = svg.match(/<rect[^>]+rx="/g) || [];
    expect(roundedRects.length).toBeGreaterThanOrEqual(5);
    // No pixel art hints
    expect(svg).not.toContain('crispEdges');
    expect(svg).not.toContain('image-rendering');
  });

  it('sleeping activity includes zzz and blanket elements', () => {
    const svg = getTotemSvg('sleeping');
    expect(svg).toContain('totem-zzz');
    expect(svg).toContain('totem-blanket');
    expect(svg).toContain('totem-sleeping');
  });

  it('studying activity has floating code indicator', () => {
    const svg = getTotemSvg('studying');
    expect(svg).toContain('totem-code-float');
  });

  it('cooking activity has floating steam indicator', () => {
    const svg = getTotemSvg('cooking');
    expect(svg).toContain('totem-steam-float');
  });

  it('non-sleeping activities do not include zzz', () => {
    const svg = getTotemSvg('idle');
    expect(svg).not.toContain('totem-zzz');
  });

  it('studying activity includes a laptop prop', () => {
    const svg = getTotemSvg('studying');
    expect(svg).toContain('totem-prop');
  });

  it('napping and meditating use closed-eye arcs instead of dots', () => {
    for (const act of ['napping', 'meditating']) {
      const svg = getTotemSvg(act);
      // Should have closed-eye arc paths, not circle dots for eyes
      expect(svg).toContain('stroke-linecap="round"');
      // Should NOT have the normal eye dots (r="1.8" circles)
      expect(svg).not.toMatch(/r="1\.8".*fill="#2B2B2B"/);
    }
  });

  it('falls back to idle for unknown activity', () => {
    const svg = getTotemSvg('unknown');
    expect(svg).toContain('totem-idle');
  });

  it('totemStyles contains core keyframe animations', () => {
    expect(totemStyles).toContain('totem-bob');
    expect(totemStyles).toContain('totem-breathe');
    expect(totemStyles).toContain('totem-blink');
    expect(totemStyles).toContain('totem-walk-bounce');
    expect(totemStyles).toContain('totem-arm-swing');
    expect(totemStyles).toContain('totem-stride');
    expect(totemStyles).toContain('totem-type');
    expect(totemStyles).toContain('totem-stir');
    expect(totemStyles).toContain('totem-zzz');
    expect(totemStyles).toContain('totem-head-tilt');
    expect(totemStyles).toContain('cubic-bezier');
    expect(totemStyles).toContain('animation-delay');
  });
});
