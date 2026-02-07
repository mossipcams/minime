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

  it('uses pixel art viewBox 128x192 with crispEdges rendering', () => {
    const svg = getTotemSvg('idle');
    expect(svg).toContain('viewBox="0 0 128 192"');
    expect(svg).toContain('shape-rendering="crispEdges"');
  });

  it('has high-detail pixel art with 180+ rects for rich shading and wide proportions', () => {
    const svg = getTotemSvg('idle');
    // Dramatically detailed pixel art: wider head (12px), wider body (10px),
    // wider arms (4px), wider legs (4px) with rich shading throughout
    const rectCount = (svg.match(/<rect /g) || []).length;
    expect(rectCount).toBeGreaterThanOrEqual(180);
    // Should NOT have smooth circles for head (pixel art uses rects)
    expect(svg).not.toMatch(/<circle[^>]+r="12"/);
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

  it('napping and meditating use wider closed-eye rects instead of single-pixel dots', () => {
    for (const act of ['napping', 'meditating']) {
      const svg = getTotemSvg(act);
      // Sleeping eyes are 2px-wide rects (width="8" at P=4), not 1px dots (width="4")
      expect(svg).toMatch(/width="8" height="4" fill="#2B2B2B"/);
      // Should NOT have the single-pixel awake eye dots
      expect(svg).not.toMatch(/<circle[^>]+r="1\.8"/);
    }
  });

  it('uses at least 3 distinct skin fill colors for face depth', () => {
    const svg = getTotemSvg('idle');
    // Extract fill colors from rects inside totem-head group
    const headMatch = svg.match(/class="totem-head">(.*?)<\/g>/);
    expect(headMatch).not.toBeNull();
    const headSvg = headMatch![1];
    const fills = [...headSvg.matchAll(/fill="(#[0-9A-Fa-f]{6})"/g)].map(m => m[1].toUpperCase());
    // Filter to warm skin-range colors (peach/tan hues, not grays/whites/browns)
    // Skin colors have high R, medium-high G, lower B
    const skinTones = new Set(fills.filter(f => {
      const r = parseInt(f.slice(1, 3), 16);
      const g = parseInt(f.slice(3, 5), 16);
      const b = parseInt(f.slice(5, 7), 16);
      return r > 180 && g > 140 && b > 100 && r > g && g > b;
    }));
    // Need base skin, skin shadow, and skin highlight = 3 distinct warm tones
    expect(skinTones.size).toBeGreaterThanOrEqual(3);
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
