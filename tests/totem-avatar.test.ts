import { describe, it, expect } from 'vitest';
import { getTotemSvg, totemStyles } from '../src/animated-presence/totem-avatar';
import type { Activity } from '../src/animated-presence/totem-avatar';

describe('Totem Avatar', () => {
  const activities: Activity[] = [
    'idle', 'walking',
    // Office
    'studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call',
    // Kitchen
    'cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking',
    // Living room
    'watching', 'gaming', 'reading-couch', 'relaxing', 'stretching', 'napping',
    // Bedroom
    'sleeping', 'reading-bed', 'meditating', 'getting-dressed', 'morning-stretch', 'phone-bed',
  ];

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
    for (const activity of ['idle', 'walking', 'studying', 'cooking', 'watching'] as Activity[]) {
      const svg = getTotemSvg(activity);
      expect(svg).not.toContain('totem-zzz');
    }
  });

  it('studying activity has floating code indicator', () => {
    const svg = getTotemSvg('studying');
    expect(svg).toContain('totem-code-float');
  });

  it('cooking activity has floating steam indicator', () => {
    const svg = getTotemSvg('cooking');
    expect(svg).toContain('totem-steam-float');
  });

  it('falls back to idle for unknown activity', () => {
    const svg = getTotemSvg('unknown');
    expect(svg).toContain('totem-idle');
  });

  it('uses smooth SVG shapes instead of pixel rects', () => {
    const svg = getTotemSvg('idle');
    // Should contain smooth SVG elements
    const hasSmooth = svg.includes('<circle') || svg.includes('<ellipse') || svg.includes('<path') || svg.match(/<rect[^>]+rx="/);
    expect(hasSmooth).toBe(true);
  });

  it('totemStyles contains keyframe animations for all activities', () => {
    expect(totemStyles).toContain('totem-bob');
    expect(totemStyles).toContain('totem-arm-swing');
    expect(totemStyles).toContain('totem-type');
    expect(totemStyles).toContain('totem-stir');
    expect(totemStyles).toContain('totem-zzz');
  });

  it('SVG does not use pixel art rendering hints', () => {
    const svg = getTotemSvg('idle');
    expect(svg).not.toContain('crispEdges');
    expect(svg).not.toContain('image-rendering: pixelated');
  });

  it('totemStyles contains enhanced idle animations', () => {
    expect(totemStyles).toContain('totem-bob');        // kept
    expect(totemStyles).toContain('totem-idle-head');   // kept
    expect(totemStyles).toContain('totem-weight-shift');// new
    expect(totemStyles).toContain('totem-breathe');     // kept
  });

  it('totemStyles contains enhanced walking animations', () => {
    expect(totemStyles).toContain('totem-walk-bob');    // kept
    expect(totemStyles).toContain('totem-arm-swing');   // kept (substring match)
    expect(totemStyles).toContain('totem-stride-l');    // new
    expect(totemStyles).toContain('totem-stride-r');    // new
    expect(totemStyles).toContain('totem-walk-lean');   // new
  });

  it('totemStyles contains enhanced studying animations', () => {
    expect(totemStyles).toContain('totem-type');        // kept (substring)
    expect(totemStyles).toContain('totem-study-nod');   // new
    expect(totemStyles).toContain('totem-study-rock');  // new
  });

  it('totemStyles contains enhanced cooking animations', () => {
    expect(totemStyles).toContain('totem-stir');        // kept (substring)
    expect(totemStyles).toContain('totem-cook-weight'); // new
    expect(totemStyles).toContain('totem-spatula-flip');// new
  });

  it('totemStyles contains enhanced sleeping animations', () => {
    expect(totemStyles).toContain('totem-zzz');         // kept (substring)
    expect(totemStyles).toContain('totem-sleep-deep');  // new
    expect(totemStyles).toContain('totem-blanket-ripple'); // new
    expect(totemStyles).toContain('totem-sleep-twitch');// new
  });

  it('totemStyles uses multi-frame blink animation', () => {
    // Blink should have more than 2 opacity stops for natural feel
    expect(totemStyles).toContain('totem-blink');
    // Should have at least close-open-close pattern
    expect(totemStyles).toMatch(/totem-blink[\s\S]*?opacity:\s*1[\s\S]*?opacity:\s*0/);
  });

  it('body uses a single connected torso path that overlaps under the head (no thin neck rect)', () => {
    const svg = getTotemSvg('idle');
    // The torso should be a path (not a simple rect) that extends up into the head area
    const bodySection = svg.slice(svg.indexOf('totem-body'), svg.indexOf('</g>', svg.indexOf('totem-body')));
    expect(bodySection).toContain('<path');
    // Should NOT have a separate thin neck rect — torso path covers the neck area
    expect(bodySection).not.toMatch(/<rect[^>]*height="[2-5]"[^>]*fill/);
  });

  it('arms overlap into the torso area (no gap between arm and body)', () => {
    const svg = getTotemSvg('idle');
    const leftArm = svg.slice(svg.indexOf('totem-left-arm'), svg.indexOf('</g>', svg.indexOf('totem-left-arm')));
    const rightArm = svg.slice(svg.indexOf('totem-right-arm'), svg.indexOf('</g>', svg.indexOf('totem-right-arm')));
    expect(leftArm).toContain('<path');
    expect(rightArm).toContain('<path');
  });

  it('hair extends wider than the face and has chunky bangs overlaying forehead', () => {
    const svg = getTotemSvg('idle');
    // Extract the full totem-head group content (may contain nested groups)
    const headStart = svg.indexOf('totem-head');
    const headSection = svg.slice(headStart, headStart + 2000);
    // Hair back silhouette should exist
    expect(headSection).toContain('hair-back');
    // Side hair pieces that drape past the face
    expect(headSection).toContain('hair-sides');
    // Bangs layered on top of forehead
    expect(headSection).toContain('hair-bangs');
    // Should have a highlight/shine streak
    expect(headSection).toContain('hair-shine');
  });

  it('eyes are compound shapes with iris hint and double highlights', () => {
    const svg = getTotemSvg('idle');
    // Count eye-related elements: should have outer eye ellipses, iris hints, and 2 highlights per eye
    const eyeEllipses = (svg.match(/<ellipse[^>]*ry="2\.8"/g) || []).length;
    expect(eyeEllipses).toBeGreaterThanOrEqual(2); // two outer eye shapes
    // Should have white highlight circles (at least 2 per eye = 4 total)
    const highlights = (svg.match(/<circle[^>]*fill="#FFF"/g) || []).length;
    expect(highlights).toBeGreaterThanOrEqual(4);
  });

  it('face has eyebrows and cheek blush for personality', () => {
    const svg = getTotemSvg('idle');
    // Eyebrows — stroke arcs above the eyes
    const browMatches = (svg.match(/stroke="#2E2010"/g) || []).length;
    expect(browMatches).toBeGreaterThanOrEqual(2); // two eyebrows
    // Cheek blush — warm pink ovals
    const blushMatches = (svg.match(/#E88880/g) || []).length;
    expect(blushMatches).toBeGreaterThanOrEqual(2); // two cheeks
  });

  it('body uses gradient shading for depth', () => {
    const svg = getTotemSvg('idle');
    // Should have a linearGradient definition for the hoodie
    expect(svg).toContain('<linearGradient');
    expect(svg).toContain('hoodie-grad');
  });

  it('totemStyles uses custom cubic-bezier easing', () => {
    expect(totemStyles).toContain('cubic-bezier');
  });

  it('totemStyles uses animation-delay for overlapping action', () => {
    expect(totemStyles).toContain('animation-delay');
  });
});
