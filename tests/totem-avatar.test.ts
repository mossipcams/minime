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

  it('head has a round shape — face rows are wide and taper gently to chin', () => {
    const svg = getTotemSvg('idle');
    const headMatch = svg.match(/class="totem-head">(.*?)<\/g>/);
    expect(headMatch).not.toBeNull();
    const headSvg = headMatch![1];
    // Extract all rects and find face extent per row (excluding hair rows)
    const rects = [...headSvg.matchAll(/<rect x="(\d+)" y="(\d+)" width="(\d+)" height="(\d+)" fill="([^"]+)"/g)];
    // Group rects by y, compute min-x and max-x+w per row
    const rowExtents = new Map<number, { min: number; max: number }>();
    for (const r of rects) {
      const x = parseInt(r[1]);
      const y = parseInt(r[2]);
      const w = parseInt(r[3]);
      const cur = rowExtents.get(y) || { min: Infinity, max: -Infinity };
      cur.min = Math.min(cur.min, x);
      cur.max = Math.max(cur.max, x + w);
      rowExtents.set(y, cur);
    }
    // Sort rows by y
    const rows = [...rowExtents.entries()].sort((a, b) => a[0] - b[0]);
    const widths = rows.map(([_, ext]) => ext.max - ext.min);
    // The widest row should be at least 56px wide (14 grid cells * P=4)
    const maxWidth = Math.max(...widths);
    expect(maxWidth).toBeGreaterThanOrEqual(56);
    // The face rows (bottom half of head) should maintain width —
    // the narrowest face row (chin) should be at least 5 grid cells (20px) wide
    const chinWidth = widths[widths.length - 1];
    expect(chinWidth).toBeGreaterThanOrEqual(20);
    // Roundness: check that the middle ~60% of rows are all within 80% of max width
    const midStart = Math.floor(rows.length * 0.2);
    const midEnd = Math.ceil(rows.length * 0.8);
    const midWidths = widths.slice(midStart, midEnd);
    for (const mw of midWidths) {
      expect(mw).toBeGreaterThanOrEqual(maxWidth * 0.75);
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
