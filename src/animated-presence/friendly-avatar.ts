// Reusable pixel avatar renderer with activity overlays.
export type FriendlyActivity =
  | 'idle'
  | 'walking'
  | 'studying'
  | 'cooking'
  | 'sleeping'
  | 'relaxing';

const W = 128;
const H = 176;
const P = 4;

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

const PALETTE: Record<string, string> = {
  B: '#2B2A33',
  b: '#3E3C49',
  S: '#D6B789',
  s: '#B99668',
  j: '#8E6D48',
  C: '#4D8A63',
  c: '#3F7151',
  E: '#13151D',
  e: '#2A2F3A',
  M: '#8A4F3B',
  H: '#5D4A2D',
  h: '#7A653E',
  d: '#6B5035',
  A: '#D4B25D',
};

function px(gx: number, gy: number, gw: number, gh: number, fill: string): string {
  return `<rect x="${gx * P}" y="${gy * P}" width="${gw * P}" height="${gh * P}" fill="${fill}"/>`;
}

function bitmap(gx: number, gy: number, rows: string[]): string {
  const rects: string[] = [];
  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === '.') {
        x++;
        continue;
      }
      let end = x + 1;
      while (end < row.length && row[end] === ch) end++;
      const fill = PALETTE[ch];
      if (fill) {
        rects.push(
          `<rect x="${(gx + x) * P}" y="${(gy + y) * P}" width="${(end - x) * P}" height="${P}" fill="${fill}"/>`,
        );
      }
      x = end;
    }
  }
  return rects.join('');
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
  return `<ellipse class="friendly-shadow" cx="64" cy="164" rx="28" ry="5" fill="#000" opacity="0.14"/>`;
}

function baseBody(): string {
  const torso = bitmap(10, 22, [
    '..bbbbbbbbbbbb..',
    '..bCCCCCCCCCCb..',
    '..bCCbbbbbbCCb..',
    '..bCCbCCCCbCCb..',
    '..bCCbCCCCbCCb..',
    '..bCCbbbbbbCCb..',
    '..bCCCCCCCCCCb..',
    '..bbCCCCCCCCbb..',
    '...bCCCCCCCCb...',
    '...bCCCCCCCCb...',
  ]);
  const arms = bitmap(7, 23, [
    's..............s',
    'S..............S',
    'S..............S',
    's..............s',
    's..............s',
    'S..............S',
    'S..............S',
  ]);
  const legs = bitmap(11, 32, [
    '..BBBB..BBBB..',
    '..BbbB..BbbB..',
    '..BbbB..BbbB..',
    '..BAAB..BAAB..',
    '..BAAB..BAAB..',
  ]);
  return `${torso}${arms}${legs}`;
}

function baseHead(): string {
  return bitmap(9, 10, [
    '..AAAAAAAAAAAA..',
    '.AAhhhhhhhhhhAA.',
    '.AhHHHHHHHHHHhA.',
    '.hHSSSSSSSSSSHh.',
    '.hHSSSSSSSSSSHh.',
    '.hHSSSSSSSSSSHh.',
    '.hHSSSSSSSSSSHh.',
    '.hHSSSSSSSSSSHh.',
    '.AhHjjjjjjjjHhA.',
    '.AAhhhhhhhhhhAA.',
  ]);
}

function baseFace(): string {
  return [
    px(12, 13, 8, 1, PALETTE.h),
    px(13, 15, 2, 1, PALETTE.E),
    px(17, 15, 2, 1, PALETTE.E),
    px(15, 16, 2, 2, PALETTE.s),
    px(14, 18, 4, 1, PALETTE.M),
    px(13, 19, 6, 1, PALETTE.d),
    px(12, 20, 8, 1, PALETTE.j),
  ].join('');
}

function propFor(activity: FriendlyActivity): string {
  if (activity === 'studying') {
    return `<g class="friendly-overlay-studying">${px(10, 32, 12, 2, '#2A3342')}${px(11, 32, 10, 1, '#4E6788')}</g>`;
  }
  if (activity === 'cooking') {
    return `<g class="friendly-overlay-cooking">${px(21, 30, 4, 2, '#7A8799')}${px(25, 31, 3, 1, '#5F6A7A')}</g>`;
  }
  if (activity === 'walking') {
    return `<g class="friendly-overlay-walking">${px(3, 24, 2, 1, '#C9D8EA')}${px(27, 27, 2, 1, '#C9D8EA')}</g>`;
  }
  if (activity === 'sleeping') {
    return `<g class="friendly-overlay-sleeping">${px(8, 28, 16, 5, '#7A8DB2')}${px(9, 28, 14, 1, '#A6B8D5')}<text x="100" y="56" fill="#C9D8EA" font-size="10">z</text></g>`;
  }
  if (activity === 'relaxing') {
    return `<g class="friendly-overlay-relaxing">${px(23, 17, 3, 2, '#F2C9A7')}</g>`;
  }
  return '';
}

function renderBaseCharacter(): string {
  return [
    '<g class="friendly-character">',
    '<g class="friendly-base totem-base">',
    '<g class="friendly-body totem-body">',
    baseBody(),
    '</g>',
    '<g class="totem-shoulders">',
    px(10, 22, 2, 1, PALETTE.b),
    px(20, 22, 2, 1, PALETTE.b),
    px(12, 22, 8, 1, PALETTE.C),
    '</g>',
    '<g class="friendly-head totem-head">',
    '<g class="friendly-hair totem-crown">',
    baseHead(),
    '</g>',
    '<g class="friendly-face totem-face totem-mask">',
    baseFace(),
    '</g>',
    '<g class="totem-glyphs">',
    px(12, 16, 1, 1, PALETTE.A),
    px(20, 16, 1, 1, PALETTE.A),
    px(15, 18, 2, 1, PALETTE.A),
    '</g>',
    '<g class="totem-arms">',
    px(8, 24, 1, 7, PALETTE.s),
    px(23, 24, 1, 7, PALETTE.s),
    '</g>',
    '<g class="totem-legs">',
    px(13, 32, 2, 5, PALETTE.B),
    px(17, 32, 2, 5, PALETTE.B),
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
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" class="friendly-avatar friendly-${act}">`,
    baseShadow(),
    renderBaseCharacter(),
    propFor(act),
    '</svg>',
  ].join('');

  cache.set(act, svg);
  return svg;
}

export const friendlyAvatarStyles = `
  .friendly-avatar { width: 100%; height: auto; display: block; image-rendering: pixelated; image-rendering: crisp-edges; }
  .friendly-shadow { transform-origin: 64px 164px; }

  @keyframes friendly-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes friendly-walk {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  @keyframes friendly-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }
  @keyframes friendly-nod {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(2deg); }
  }
  @keyframes friendly-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-2deg); }
  }

  .friendly-idle .friendly-character { animation: friendly-bob 2.8s ease-in-out infinite; }
  .friendly-idle .friendly-body { animation: friendly-breathe 3s ease-in-out infinite; transform-origin: 64px 112px; }

  .friendly-walking .friendly-character { animation: friendly-walk 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) infinite; }
  .friendly-walking .friendly-overlay-walking { animation: friendly-breathe 0.45s ease-in-out infinite; }

  .friendly-studying .friendly-head { animation: friendly-nod 2.8s ease-in-out infinite; transform-origin: 64px 64px; }
  .friendly-cooking .friendly-head { animation: friendly-nod 1.8s ease-in-out infinite; transform-origin: 64px 64px; }
  .friendly-relaxing .friendly-character { animation: friendly-sway 3.2s ease-in-out infinite; transform-origin: 64px 96px; }

  .friendly-sleeping .friendly-character { transform: translateY(8px); }
  .friendly-sleeping .friendly-face { opacity: 0.6; }
`;
