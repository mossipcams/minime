import { describe, it, expect } from 'vitest';
import { getDogSvg, dogStyles } from '../src/animated-presence/dog-avatar';

describe('Dog Avatar', () => {
  it('exports getDogSvg as a function', () => {
    expect(typeof getDogSvg).toBe('function');
  });

  it('exports dogStyles as a non-empty string', () => {
    expect(typeof dogStyles).toBe('string');
    expect(dogStyles.length).toBeGreaterThan(0);
  });

  it('generates valid SVG for idle with dog-avatar and dog-idle classes', () => {
    const svg = getDogSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('dog-avatar');
    expect(svg).toContain('dog-idle');
  });

  it('uses pixel art viewBox 128x80 with crispEdges rendering', () => {
    const svg = getDogSvg('idle');
    expect(svg).toContain('viewBox="0 0 128 80"');
    expect(svg).toContain('shape-rendering="crispEdges"');
  });

  it('standing poses have separate body, head, legs-front, legs-back, ear, tail, tongue groups', () => {
    for (const act of ['idle', 'walking', 'studying']) {
      const svg = getDogSvg(act);
      expect(svg).toContain('dog-body');
      expect(svg).toContain('dog-head');
      expect(svg).toContain('dog-legs-front');
      expect(svg).toContain('dog-legs-back');
      expect(svg).toContain('dog-ear');
      expect(svg).toContain('dog-tail');
      expect(svg).toContain('dog-tongue');
      expect(svg).toContain('dog-shadow');
      expect(svg).toContain('dog-character');
    }
  });

  it('sleeping dog uses curled shape without CSS rotation', () => {
    const svg = getDogSvg('sleeping');
    expect(svg).toContain('dog-sleeping');
    expect(dogStyles).not.toContain('.dog-sleeping { transform: rotate');
  });

  it('has black and tan dachshund coloring with tan chest/belly markings', () => {
    const svg = getDogSvg('idle');
    // Black and tan: body has both black (#1A1A1A) and tan/orange fills
    expect(svg).toMatch(/fill="#1A1A1A"/);  // black
    // Tan chest color should be warm orange-ish (R > 180, G > 100, B < 100)
    const fills = [...svg.matchAll(/fill="(#[0-9A-Fa-f]{6})"/g)].map(m => m[1].toUpperCase());
    const tanColors = fills.filter(f => {
      const r = parseInt(f.slice(1, 3), 16);
      const g = parseInt(f.slice(3, 5), 16);
      const b = parseInt(f.slice(5, 7), 16);
      return r > 180 && g > 100 && b < 100;
    });
    // Should have multiple tan-colored rects for chest/belly
    expect(tanColors.length).toBeGreaterThanOrEqual(3);
  });

  it('falls back to idle for unknown activity', () => {
    const svg = getDogSvg('unknown');
    expect(svg).toContain('dog-idle');
  });

  it('dogStyles contains all required keyframe animations', () => {
    expect(dogStyles).toContain('dog-tail-wag');
    expect(dogStyles).toContain('dog-breathe');
    expect(dogStyles).toContain('dog-trot');
    expect(dogStyles).toContain('dog-leg-trot-front');
    expect(dogStyles).toContain('dog-leg-trot-back');
    expect(dogStyles).toContain('dog-ear-bounce');
    expect(dogStyles).toContain('dog-sniff');
    expect(dogStyles).toContain('dog-dream-twitch');
    expect(dogStyles).toContain('dog-tongue-pant');
    expect(dogStyles).toContain('dog-ear-twitch');
    expect(dogStyles).toContain('dog-nose-nuzzle');
    expect(dogStyles).toContain('dog-paw-tap');
    expect(dogStyles).toContain('dog-beg-nod');
    expect(dogStyles).toContain('cubic-bezier');
  });
});
