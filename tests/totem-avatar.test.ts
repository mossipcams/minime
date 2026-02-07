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

  it('renders a perfectly symmetric face (left-right mirror)', () => {
    const svg = getTotemSvg('idle');
    // Extract all rects from the head group
    const headMatch = svg.match(/class="totem-head">(.*?)<\/g>/);
    expect(headMatch).not.toBeNull();
    const headSvg = headMatch![1];
    const rects = [...headSvg.matchAll(/<rect x="(\d+)" y="(\d+)" width="(\d+)" height="(\d+)" fill="([^"]+)"/g)];
    // Head center is at x=64 (grid 8 + half of 16-wide = 16, times P=4 = 64)
    // For each rect, there should be a matching rect mirrored around x=64
    const rectSet = new Set(rects.map(r => `${r[1]},${r[2]},${r[3]},${r[4]},${r[5]}`));
    let asymmetric = 0;
    for (const r of rects) {
      const x = parseInt(r[1]);
      const y = parseInt(r[2]);
      const w = parseInt(r[3]);
      const fill = r[5];
      // Mirror: new_x = 128 - (x + w), where 128 = (8 + 16) * P = center*2
      const mx = 128 - (x + w);
      // The mirrored rect should exist with same y, width, height, fill (or symmetric color)
      const mirrorKey = `${mx},${r[2]},${r[3]},${r[4]},${fill}`;
      if (!rectSet.has(mirrorKey)) {
        asymmetric++;
      }
    }
    // Allow 0 asymmetric rects — face must be perfectly symmetric
    expect(asymmetric).toBe(0);
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
