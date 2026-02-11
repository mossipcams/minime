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

  it('renders valid SVG with terraria avatar structure', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('viewBox="0 0 96 96"');
    expect(svg).toContain('crispEdges');
    expect(svg).toContain('friendly-avatar');
    expect(svg).toContain('mini-avatar');
    expect(svg).toContain('friendly-idle');
  });

  it('has separate SVG groups for each body part', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('mini-character');
    expect(svg).toContain('mini-hair');
    expect(svg).toContain('mini-head');
    expect(svg).toContain('mini-face');
    expect(svg).toContain('mini-torso');
    expect(svg).toContain('mini-legs');
    expect(svg).toContain('mini-tool');
    expect(svg).toContain('mini-tool-pickaxe');
  });

  it('uses terraria default character colors', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('#8B4513'); // hair (brown)
    expect(svg).toContain('#AF2B1E'); // shirt (deep red)
    expect(svg).toContain('#3D6EB5'); // pants (blue)
    expect(svg).toContain('#FFCBA4'); // skin (peach)
    expect(svg).toContain('#FFFFFF'); // eye white
    expect(svg).toContain('#E8C840'); // undershirt (yellow)
    expect(svg).toContain('#503820'); // shoes (dark brown)
  });

  it('uses activity-specific overlays on top of the character', () => {
    expect(getFriendlyAvatarSvg('idle')).not.toContain('mini-overlay');
    expect(getFriendlyAvatarSvg('walking')).toContain('mini-overlay-walking');
    expect(getFriendlyAvatarSvg('studying')).toContain('mini-overlay-studying');
    expect(getFriendlyAvatarSvg('cooking')).toContain('mini-overlay-cooking');
    expect(getFriendlyAvatarSvg('sleeping')).toContain('mini-overlay-sleeping');
    expect(getFriendlyAvatarSvg('relaxing')).toContain('mini-overlay-relaxing');
  });

  it('normalizes activity aliases to canonical terraria states', () => {
    expect(getFriendlyAvatarSvg('coffee-break')).toContain('friendly-studying');
    expect(getFriendlyAvatarSvg('washing-dishes')).toContain('friendly-cooking');
    expect(getFriendlyAvatarSvg('reading-couch')).toContain('friendly-relaxing');
    expect(getFriendlyAvatarSvg('reading-bed')).toContain('friendly-sleeping');
    expect(getFriendlyAvatarSvg('unknown-activity')).toContain('friendly-idle');
  });

  it('includes a ground shadow ellipse', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('mini-shadow');
    expect(svg).toContain('<ellipse');
  });

  it('renders with bitmap pixel grid using run-length encoding', () => {
    const svg = getFriendlyAvatarSvg('idle');
    // RLE produces wider rects for consecutive same-color pixels
    const rects = svg.match(/<rect[^/]*\/>/g) || [];
    const wideRects = rects.filter(r => {
      const w = r.match(/width="(\d+)"/);
      return w && parseInt(w[1]) > 4;
    });
    expect(wideRects.length).toBeGreaterThan(0);
  });

  it('defines animation keyframes and reduced-motion fallback', () => {
    expect(friendlyAvatarStyles).toContain('mini-idle');
    expect(friendlyAvatarStyles).toContain('mini-walk');
    expect(friendlyAvatarStyles).toContain('mini-breathe');
    expect(friendlyAvatarStyles).toContain('mini-nod');
    expect(friendlyAvatarStyles).toContain('mini-sway');
    expect(friendlyAvatarStyles).toContain('image-rendering');
    expect(friendlyAvatarStyles).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('falls back to idle for unknown activities', () => {
    const svg = getFriendlyAvatarSvg('totally-unknown');
    expect(svg).toContain('friendly-idle');
    expect(svg).not.toContain('mini-overlay');
  });
});
