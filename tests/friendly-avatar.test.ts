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

  it('renders a terraria-like mini sprite structure with clear layer classes', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('friendly-avatar');
    expect(svg).toContain('mini-avatar');
    expect(svg).toContain('friendly-idle');
    expect(svg).toContain('mini-character');
    expect(svg).toContain('mini-base');
    expect(svg).toContain('mini-hair');
    expect(svg).toContain('mini-head');
    expect(svg).toContain('mini-face');
    expect(svg).toContain('mini-torso');
    expect(svg).toContain('mini-legs');
    expect(svg).not.toContain('totem-head');
    expect(svg).not.toContain('totem-body');
  });

  it('uses activity-specific overlays on top of a shared sprite base', () => {
    const idleSvg = getFriendlyAvatarSvg('idle');
    const walkSvg = getFriendlyAvatarSvg('walking');
    const studySvg = getFriendlyAvatarSvg('studying');
    const cookSvg = getFriendlyAvatarSvg('cooking');
    const sleepSvg = getFriendlyAvatarSvg('sleeping');
    const relaxSvg = getFriendlyAvatarSvg('relaxing');

    expect(idleSvg).toContain('mini-base');
    expect(walkSvg).toContain('mini-overlay-walking');
    expect(studySvg).toContain('mini-overlay-studying');
    expect(cookSvg).toContain('mini-overlay-cooking');
    expect(sleepSvg).toContain('mini-overlay-sleeping');
    expect(relaxSvg).toContain('mini-overlay-relaxing');
  });

  it('normalizes related activity aliases into canonical mini states', () => {
    expect(getFriendlyAvatarSvg('coffee-break')).toContain('friendly-studying');
    expect(getFriendlyAvatarSvg('washing-dishes')).toContain('friendly-cooking');
    expect(getFriendlyAvatarSvg('reading-couch')).toContain('friendly-relaxing');
    expect(getFriendlyAvatarSvg('reading-bed')).toContain('friendly-sleeping');
    expect(getFriendlyAvatarSvg('unknown')).toContain('friendly-idle');
  });

  it('uses compact terraria-like proportions with mirrored face anchors', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('viewBox="0 0 96 96"');
    expect(svg).toContain('<rect x="38" y="36" width="6" height="4" fill="#121722"/>');
    expect(svg).toContain('<rect x="52" y="36" width="6" height="4" fill="#121722"/>');
    expect(svg).toContain('<rect x="44" y="44" width="8" height="2" fill="#A24C3C"/>');
  });

  it('defines terraria sprite style tokens and reduced-motion fallback', () => {
    expect(friendlyAvatarStyles).toContain('--mini-avatar-size: 48px');
    expect(friendlyAvatarStyles).toContain('--mini-avatar-center-x: 48px');
    expect(friendlyAvatarStyles).toContain('--mini-outline: #121722');
    expect(friendlyAvatarStyles).toContain('.friendly-idle .mini-character { animation: mini-idle 2.4s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 64px; }');
    expect(friendlyAvatarStyles).toContain('@media (prefers-reduced-motion: reduce)');
  });
});
