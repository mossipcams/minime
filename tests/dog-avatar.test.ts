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

  it('generates valid SVG for idle activity with dog-avatar and dog-idle classes', () => {
    const svg = getDogSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('dog-avatar');
    expect(svg).toContain('dog-idle');
  });

  it('falls back to idle for unknown activity', () => {
    const svg = getDogSvg('unknown');
    expect(svg).toContain('dog-idle');
  });

  it('uses smooth SVG shapes instead of pixel rects', () => {
    const svg = getDogSvg('idle');
    const hasSmooth = svg.includes('<circle') || svg.includes('<ellipse') || svg.includes('<path') || (/<rect[^>]+rx="/.test(svg));
    expect(hasSmooth).toBe(true);
  });

  it('SVG does not use pixel art rendering hints', () => {
    const svg = getDogSvg('idle');
    expect(svg).not.toContain('crispEdges');
    expect(svg).not.toContain('image-rendering: pixelated');
  });

  it('dogStyles contains keyframe animations', () => {
    expect(dogStyles).toContain('dog-tail-wag');
    expect(dogStyles).toContain('dog-breathe');
  });

  it('sleeping dog curls up naturally without rotation', () => {
    expect(dogStyles).not.toContain('.dog-sleeping { transform: rotate');
  });

  it('idle/walking/studying SVG contains separate front and back leg groups', () => {
    for (const act of ['idle', 'walking', 'studying']) {
      const svg = getDogSvg(act);
      expect(svg).toContain('dog-legs-front');
      expect(svg).toContain('dog-legs-back');
      // Old single dog-legs group should NOT exist in these activities
      expect(svg).not.toMatch(/class="dog-legs"[^-]/);
    }
  });

  it('idle/walking/studying SVG contains tongue element', () => {
    for (const act of ['idle', 'walking', 'studying']) {
      const svg = getDogSvg(act);
      expect(svg).toContain('dog-tongue');
    }
  });

  it('tongue element exists in standing poses', () => {
    const svg = getDogSvg('idle');
    expect(svg).toContain('dog-tongue');
  });

  it('dogStyles contains enhanced keyframe animations for all activities', () => {
    // Existing (must still exist)
    expect(dogStyles).toContain('dog-tail-wag');
    expect(dogStyles).toContain('dog-breathe');
    // New keyframes
    expect(dogStyles).toContain('dog-sniff');
    expect(dogStyles).toContain('dog-tongue-pant');
    expect(dogStyles).toContain('dog-ear-twitch');
    expect(dogStyles).toContain('dog-leg-trot-back');
    expect(dogStyles).toContain('dog-dream-twitch');
    expect(dogStyles).toContain('dog-nose-nuzzle');
    expect(dogStyles).toContain('dog-paw-tap');
    expect(dogStyles).toContain('dog-beg-nod');
  });

  it('dogStyles uses custom easing curves', () => {
    expect(dogStyles).toContain('cubic-bezier');
  });
});
