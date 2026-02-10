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
  skin: '#E8C8A3',
  skinShade: '#D6B28B',
  hairDark: '#3E2A1E',
  hairLight: '#6B4A36',
  shirt: '#4F7098',
  shirtLight: '#7293BD',
  pants: '#2A3350',
  boots: '#1B2336',
  mouth: '#A24C3C',
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
  return '<ellipse class="mini-shadow" cx="48" cy="86" rx="16" ry="4" fill="#000" opacity="0.16"/>';
}

function hair(): string {
  return [
    px(34, 24, 28, 4, COLORS.hairDark),
    px(32, 28, 32, 4, COLORS.hairLight),
    px(32, 32, 6, 6, COLORS.hairDark),
    px(58, 32, 6, 6, COLORS.hairDark),
  ].join('');
}

function head(): string {
  return [
    px(34, 30, 28, 24, COLORS.skin),
    px(36, 32, 24, 2, COLORS.skinShade),
  ].join('');
}

function face(): string {
  return [
    px(38, 36, 6, 4, COLORS.outline),
    px(52, 36, 6, 4, COLORS.outline),
    px(46, 40, 4, 4, COLORS.skinShade),
    px(44, 44, 8, 2, COLORS.mouth),
  ].join('');
}

function torso(): string {
  return [
    px(36, 54, 24, 16, COLORS.shirt),
    px(38, 56, 20, 4, COLORS.shirtLight),
    px(32, 56, 4, 12, COLORS.skin),
    px(60, 56, 4, 12, COLORS.skin),
  ].join('');
}

function legs(): string {
  return [
    px(38, 70, 8, 12, COLORS.pants),
    px(50, 70, 8, 12, COLORS.pants),
    px(38, 80, 8, 2, COLORS.boots),
    px(50, 80, 8, 2, COLORS.boots),
  ].join('');
}

function overlay(activity: FriendlyActivity): string {
  if (activity === 'walking') {
    return `<g class="mini-overlay-walking">${px(32, 82, 6, 2, '#BFD9EF')}${px(58, 82, 6, 2, '#BFD9EF')}</g>`;
  }

  if (activity === 'studying') {
    return `<g class="mini-overlay-studying">${px(30, 72, 36, 4, '#2C435E')}${px(34, 70, 28, 2, '#5E7E9C')}</g>`;
  }

  if (activity === 'cooking') {
    return `<g class="mini-overlay-cooking">${px(62, 56, 4, 10, '#D8E3EE')}${px(66, 58, 3, 2, '#9EB3C8')}</g>`;
  }

  if (activity === 'sleeping') {
    return `<g class="mini-overlay-sleeping">${px(32, 66, 32, 12, '#8FA7C2')}${px(34, 66, 28, 2, '#C8D5E4')}<text x="70" y="28" fill="#E3EDF8" font-size="8">z</text></g>`;
  }

  if (activity === 'relaxing') {
    return `<g class="mini-overlay-relaxing">${px(64, 46, 4, 4, '#F2C8A7')}</g>`;
  }

  return '';
}

function character(): string {
  return [
    '<g class="mini-character">',
    '<g class="mini-base">',
    '<g class="mini-hair">',
    hair(),
    '</g>',
    '<g class="mini-head">',
    head(),
    '<g class="mini-face">',
    face(),
    '</g>',
    '</g>',
    '<g class="mini-body">',
    '<g class="mini-torso">',
    torso(),
    '</g>',
    '<g class="mini-legs">',
    legs(),
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
    --mini-outline: #121722;
    width: 100%;
    height: auto;
    display: block;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }

  .mini-shadow { transform-origin: var(--mini-avatar-center-x) 86px; }

  @keyframes mini-idle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
  }

  @keyframes mini-walk {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  @keyframes mini-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }

  @keyframes mini-nod {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(1deg); }
  }

  @keyframes mini-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-1.2deg); }
  }

  .friendly-idle .mini-character { animation: mini-idle 2.4s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 64px; }
  .friendly-idle .mini-torso { animation: mini-breathe 3.1s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 70px; }

  .friendly-walking .mini-character { animation: mini-walk 0.55s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 66px; }
  .friendly-walking .mini-overlay-walking { animation: mini-breathe 0.55s steps(2, end) infinite; }

  .friendly-studying .mini-head { animation: mini-nod 2.4s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 42px; }
  .friendly-cooking .mini-head { animation: mini-nod 2s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 42px; }
  .friendly-relaxing .mini-character { animation: mini-sway 3.2s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 64px; }

  .friendly-sleeping .mini-character { transform: translateY(4px); }
  .friendly-sleeping .mini-face { opacity: 0.65; }

  @media (prefers-reduced-motion: reduce) {
    .mini-character,
    .mini-torso,
    .mini-head,
    .mini-overlay-walking {
      animation: none !important;
    }
  }
`;
