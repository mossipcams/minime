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

  it('renders reusable base classes and idle activity class', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('friendly-avatar');
    expect(svg).toContain('friendly-idle');
    expect(svg).toContain('friendly-character');
    expect(svg).toContain('friendly-base');
    expect(svg).toContain('friendly-body');
    expect(svg).toContain('friendly-head');
    expect(svg).toContain('friendly-face');
  });

  it('uses a shared foundation and applies activity overlays', () => {
    const idleSvg = getFriendlyAvatarSvg('idle');
    const walkSvg = getFriendlyAvatarSvg('walking');
    const sleepSvg = getFriendlyAvatarSvg('sleeping');
    expect(idleSvg).toContain('friendly-base');
    expect(walkSvg).toContain('friendly-base');
    expect(sleepSvg).toContain('friendly-base');
    expect(walkSvg).toContain('friendly-overlay-walking');
    expect(sleepSvg).toContain('friendly-overlay-sleeping');
  });

  it('falls back to idle for unknown activity', () => {
    const svg = getFriendlyAvatarSvg('unknown');
    expect(svg).toContain('friendly-idle');
  });

  it('renders a blocky totem-style structure', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('totem-head');
    expect(svg).toContain('totem-face');
    expect(svg).toContain('totem-body');
    expect(svg).toContain('totem-arms');
    expect(svg).toContain('totem-legs');
    expect(svg).toContain('totem-crown');
    expect(svg).toContain('totem-mask');
    expect(svg).toContain('totem-glyphs');
    expect(svg).toContain('totem-shoulders');
  });

  it('sets explicit geometry tokens for proportion and alignment guardrails', () => {
    expect(friendlyAvatarStyles).toContain('--friendly-head-width: 64px');
    expect(friendlyAvatarStyles).toContain('--friendly-body-width: 56px');
    expect(friendlyAvatarStyles).toContain('--friendly-center-x: 64px');
    expect(friendlyAvatarStyles).toContain('--friendly-eye-gap: 18px');
    expect(friendlyAvatarStyles).toContain('--friendly-stroke: 4px');
  });

  it('keeps facial features mirrored around centerline and aligned vertically', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('<rect x="46" y="58" width="8" height="4" fill="#1A1F2B"/>');
    expect(svg).toContain('<rect x="74" y="58" width="8" height="4" fill="#1A1F2B"/>');
    expect(svg).toContain('<rect x="62" y="66" width="4" height="8" fill="#C89566"/>');
    expect(svg).toContain('<rect x="54" y="78" width="20" height="4" fill="#8D4D3D"/>');
  });

  it('uses calmer motion with stable transform origins for all activities', () => {
    expect(friendlyAvatarStyles).toContain('.friendly-idle .friendly-character { animation: friendly-bob 3.4s ease-in-out infinite; transform-origin: var(--friendly-center-x) 96px; }');
    expect(friendlyAvatarStyles).toContain('.friendly-walking .friendly-character { animation: friendly-walk 0.7s ease-in-out infinite; transform-origin: var(--friendly-center-x) 100px; }');
    expect(friendlyAvatarStyles).toContain('.friendly-studying .friendly-head { animation: friendly-nod 3s ease-in-out infinite; transform-origin: var(--friendly-center-x) 64px; }');
    expect(friendlyAvatarStyles).toContain('.friendly-relaxing .friendly-character { animation: friendly-sway 3.8s ease-in-out infinite; transform-origin: var(--friendly-center-x) 104px; }');
  });

  it('maintains visual readability with stronger facial contrast colors', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('fill="#1A1F2B"');
    expect(svg).toContain('fill="#8D4D3D"');
    expect(svg).toContain('fill="#5B3B25"');
  });
});
