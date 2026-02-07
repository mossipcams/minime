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

  it('uses geometric shapes (circles, rects, ellipses) and no pixel art', () => {
    const svg = getDogSvg('idle');
    const hasSmooth = svg.includes('<circle') || svg.includes('<ellipse') || (/<rect[^>]+rx="/.test(svg));
    expect(hasSmooth).toBe(true);
    expect(svg).not.toContain('crispEdges');
    expect(svg).not.toContain('image-rendering');
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
