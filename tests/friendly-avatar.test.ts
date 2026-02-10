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

  it('renders new mini avatar semantic groups and idle activity class', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('<svg');
    expect(svg).toContain('friendly-avatar');
    expect(svg).toContain('mini-avatar');
    expect(svg).toContain('friendly-idle');
    expect(svg).toContain('mini-character');
    expect(svg).toContain('mini-head');
    expect(svg).toContain('mini-face');
    expect(svg).toContain('mini-body');
    expect(svg).not.toContain('totem-head');
    expect(svg).not.toContain('totem-body');
    expect(svg).not.toContain('totem-crown');
  });

  it('uses activity-specific overlays on top of a shared base', () => {
    const idleSvg = getFriendlyAvatarSvg('idle');
    const walkSvg = getFriendlyAvatarSvg('walking');
    const studySvg = getFriendlyAvatarSvg('studying');
    const cookSvg = getFriendlyAvatarSvg('cooking');
    const sleepSvg = getFriendlyAvatarSvg('sleeping');
    const relaxSvg = getFriendlyAvatarSvg('relaxing');

    expect(idleSvg).toContain('mini-base');
    expect(walkSvg).toContain('mini-base');
    expect(studySvg).toContain('mini-base');
    expect(cookSvg).toContain('mini-base');
    expect(sleepSvg).toContain('mini-base');
    expect(relaxSvg).toContain('mini-base');

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

  it('uses compact geometry and mirrored feature anchors for tiny-size readability', () => {
    const svg = getFriendlyAvatarSvg('idle');
    expect(svg).toContain('viewBox="0 0 96 96"');
    expect(svg).toContain('<rect x="34" y="34" width="6" height="4" fill="#121722"/>');
    expect(svg).toContain('<rect x="56" y="34" width="6" height="4" fill="#121722"/>');
    expect(svg).toContain('<rect x="44" y="42" width="8" height="4" fill="#A45B46"/>');
  });

  it('defines stable style tokens and reduced-motion fallback', () => {
    expect(friendlyAvatarStyles).toContain('--mini-avatar-size: 48px');
    expect(friendlyAvatarStyles).toContain('--mini-avatar-center-x: 48px');
    expect(friendlyAvatarStyles).toContain('--mini-avatar-contrast: #121722');
    expect(friendlyAvatarStyles).toContain('.friendly-idle .mini-character { animation: mini-bob 2.8s ease-in-out infinite; transform-origin: var(--mini-avatar-center-x) 62px; }');
    expect(friendlyAvatarStyles).toContain('@media (prefers-reduced-motion: reduce)');
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
