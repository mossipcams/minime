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

  it('uses realistic character palette', () => {
    const svg = getTotemSvg('idle');
    // Skin, hair, hoodie, eyes — muted natural tones
    expect(svg).toContain('#E4B898');
    expect(svg).toContain('#3C2D1E');
    expect(svg).toContain('#506878');
    expect(svg).toContain('#1C1C1C');
  });

  it('totemStyles contains keyframe animations for all activities', () => {
    expect(totemStyles).toContain('totem-bob');
    expect(totemStyles).toContain('totem-arm-swing');
    expect(totemStyles).toContain('totem-type');
    expect(totemStyles).toContain('totem-stir');
    expect(totemStyles).toContain('totem-zzz');
  });

  it('SVG uses crispEdges for pixel art rendering', () => {
    const svg = getTotemSvg('idle');
    expect(svg).toContain('crispEdges');
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

  it('totemStyles uses custom cubic-bezier easing', () => {
    expect(totemStyles).toContain('cubic-bezier');
  });

  it('totemStyles uses animation-delay for overlapping action', () => {
    expect(totemStyles).toContain('animation-delay');
  });
});
