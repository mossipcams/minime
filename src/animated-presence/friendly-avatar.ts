// Reusable mini pixel avatar renderer with activity overlays.
export type FriendlyActivity =
  | 'idle'
  | 'walking'
  | 'studying'
  | 'cooking'
  | 'sleeping'
  | 'relaxing';

const W = 96;
const H = 96;
const P = 2;

const KNOWN = new Set([
  'idle',
  'walking',
  'studying',
  'reading',
  'thinking',
  'coffee-break',
  'whiteboarding',
  'phone-call',
  'cooking',
  'eating',
  'coffee-making',
  'washing-dishes',
  'snacking',
  'baking',
  'watching',
  'gaming',
  'reading-couch',
  'relaxing',
  'stretching',
  'napping',
  'sleeping',
  'reading-bed',
  'meditating',
  'getting-dressed',
  'morning-stretch',
  'phone-bed',
]);

const COLORS = {
  outline: '#121722',
  skin: '#E8C7A4',
  skinShade: '#D3AE88',
  hair: '#5A3D2A',
  shirt: '#4E7B9D',
  shirtShade: '#3B6484',
  pants: '#2F3A55',
  accent: '#A45B46',
  softShadow: '#000000',
};

function px(x: number, y: number, w: number, h: number, fill: string): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`;
}

function normalize(activity: string): FriendlyActivity {
  if (!KNOWN.has(activity)) return 'idle';
  if (activity === 'walking') return 'walking';

  if (activity === 'sleeping' || activity === 'napping' || activity === 'reading-bed' || activity === 'phone-bed') {
    return 'sleeping';
  }

  if (
    activity === 'studying' ||
    activity === 'reading' ||
    activity === 'thinking' ||
    activity === 'whiteboarding' ||
    activity === 'phone-call' ||
    activity === 'coffee-break'
  ) {
    return 'studying';
  }

  if (
    activity === 'cooking' ||
    activity === 'coffee-making' ||
    activity === 'washing-dishes' ||
    activity === 'snacking' ||
    activity === 'baking' ||
    activity === 'eating'
  ) {
    return 'cooking';
  }

  if (
    activity === 'watching' ||
    activity === 'gaming' ||
    activity === 'reading-couch' ||
    activity === 'relaxing' ||
    activity === 'stretching' ||
    activity === 'meditating' ||
    activity === 'morning-stretch' ||
    activity === 'getting-dressed'
  ) {
    return 'relaxing';
  }

  return 'idle';
}

function baseShadow(): string {
  return '<ellipse class="mini-shadow" cx="48" cy="86" rx="18" ry="4" fill="#000" opacity="0.14"/>';
}

function body(): string {
  return [
    px(34, 52, 28, 18, COLORS.shirt),
    px(34, 68, 28, 2, COLORS.shirtShade),
    px(34, 70, 12, 12, COLORS.pants),
    px(50, 70, 12, 12, COLORS.pants),
    px(30, 56, 4, 16, COLORS.skin),
    px(62, 56, 4, 16, COLORS.skin),
  ].join('');
}

function head(): string {
  return [
    px(30, 24, 36, 4, COLORS.hair),
    px(28, 28, 40, 4, COLORS.hair),
    px(28, 32, 40, 20, COLORS.skin),
    px(30, 32, 36, 2, COLORS.skinShade),
  ].join('');
}

function face(): string {
  return [
    px(34, 34, 6, 4, COLORS.outline),
    px(56, 34, 6, 4, COLORS.outline),
    px(46, 38, 4, 6, COLORS.skinShade),
    px(44, 42, 8, 4, COLORS.accent),
  ].join('');
}

function overlay(activity: FriendlyActivity): string {
  if (activity === 'walking') {
    return `<g class="mini-overlay-walking">${px(28, 72, 6, 2, '#BDD7F0')}${px(62, 72, 6, 2, '#BDD7F0')}</g>`;
  }

  if (activity === 'studying') {
    return `<g class="mini-overlay-studying">${px(30, 72, 36, 4, '#2E415A')}${px(34, 70, 28, 2, '#6F8EAA')}</g>`;
  }

  if (activity === 'cooking') {
    return `<g class="mini-overlay-cooking">${px(62, 58, 4, 10, '#D1DCE8')}${px(66, 60, 3, 2, '#A6B7C8')}</g>`;
  }

  if (activity === 'sleeping') {
    return `<g class="mini-overlay-sleeping">${px(28, 66, 40, 12, '#8CA5C3')}${px(30, 66, 36, 2, '#C3D2E2')}<text x="72" y="28" fill="#DDE9F8" font-size="8">z</text></g>`;
  }

  if (activity === 'relaxing') {
    return `<g class="mini-overlay-relaxing">${px(66, 46, 4, 4, '#F3C6A3')}</g>`;
  }

  return '';
}

function character(): string {
  return [
    '<g class="mini-character">',
    '<g class="mini-base">',
    '<g class="mini-body">',
    body(),
    '</g>',
    '<g class="mini-head">',
    head(),
    '<g class="mini-face">',
    face(),
    '</g>',
    '</g>',
    '</g>',
    '</g>',
  ].join('');
}

const cache = new Map<FriendlyActivity, string>();

export function getFriendlyAvatarSvg(activity: string): string {
  const act = normalize(activity);
  const cached = cache.get(act);
  if (cached) return cached;

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" class="friendly-avatar mini-avatar friendly-${act}">`,
    baseShadow(),
    character(),
    overlay(act),
    '</svg>',
  ].join('');

  cache.set(act, svg);
  return svg;
}

export const friendlyAvatarStyles = `
  .friendly-avatar,
  .mini-avatar {
    --mini-avatar-size: 48px;
    --mini-avatar-center-x: 48px;
    --mini-avatar-contrast: #121722;
    width: 100%;
    height: auto;
    display: block;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }

  .mini-shadow { transform-origin: var(--mini-avatar-center-x) 86px; }

  @keyframes mini-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  @keyframes mini-walk {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  @keyframes mini-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.02); }
  }

  @keyframes mini-nod {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(1.5deg); }
  }

  @keyframes mini-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-1.5deg); }
  }

  .friendly-idle .mini-character { animation: mini-bob 2.8s ease-in-out infinite; transform-origin: var(--mini-avatar-center-x) 62px; }
  .friendly-idle .mini-body { animation: mini-breathe 3.2s ease-in-out infinite; transform-origin: var(--mini-avatar-center-x) 70px; }

  .friendly-walking .mini-character { animation: mini-walk 0.65s ease-in-out infinite; transform-origin: var(--mini-avatar-center-x) 66px; }
  .friendly-walking .mini-overlay-walking { animation: mini-breathe 0.65s ease-in-out infinite; }

  .friendly-studying .mini-head { animation: mini-nod 2.6s ease-in-out infinite; transform-origin: var(--mini-avatar-center-x) 42px; }
  .friendly-cooking .mini-head { animation: mini-nod 2.2s ease-in-out infinite; transform-origin: var(--mini-avatar-center-x) 42px; }
  .friendly-relaxing .mini-character { animation: mini-sway 3.4s ease-in-out infinite; transform-origin: var(--mini-avatar-center-x) 64px; }

  .friendly-sleeping .mini-character { transform: translateY(4px); }
  .friendly-sleeping .mini-face { opacity: 0.7; }

  @media (prefers-reduced-motion: reduce) {
    .mini-character,
    .mini-body,
    .mini-head,
    .mini-overlay-walking {
      animation: none !important;
    }
  }
`;
