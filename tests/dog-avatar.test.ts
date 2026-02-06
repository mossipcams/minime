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

  it('uses dachshund color palette (black and tan)', () => {
    const svg = getDogSvg('idle');
    expect(svg).toContain('#1A1A1A');
    expect(svg).toContain('#C8943C');
  });

  it('SVG uses crispEdges for pixel art rendering', () => {
    const svg = getDogSvg('idle');
    expect(svg).toContain('crispEdges');
  });

  it('dogStyles contains keyframe animations', () => {
    expect(dogStyles).toContain('dog-tail-wag');
    expect(dogStyles).toContain('dog-breathe');
  });

  it('sleeping dog curls up naturally without rotation', () => {
    expect(dogStyles).not.toContain('.dog-sleeping { transform: rotate');
  });
});
