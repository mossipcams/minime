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
  b: '#46505F',
  S: '#E0BF93',
  s: '#C89566',
  C: '#587A94',
  c: '#3D5D76',
  E: '#1A1F2B',
  M: '#8D4D3D',
  H: '#5B3B25',
  A: '#6E4C31',
};

const GEOMETRY = {
  centerX: 16,
  headTop: 10,
  headWidth: 16,
  headHeight: 12,
  bodyTop: 23,
  bodyWidth: 14,
  bodyHeight: 11,
  legTop: 34,
  legHeight: 5,
  eyeY: 14,
  eyeGap: 7,
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
  return '<ellipse class="friendly-shadow" cx="64" cy="164" rx="24" ry="4" fill="#000" opacity="0.12"/>';
}

function baseBody(): string {
  const torso = bitmap(9, GEOMETRY.bodyTop, [
    '.bbbbbbbbbbbb.',
    'bcCCCCCCCCCCcb',
    'bcCCCCCCCCCCcb',
    'bcCCCCCCCCCCcb',
    'bcCCCCCCCCCCcb',
    'bcCCCCCCCCCCcb',
    'bcCCCCCCCCCCcb',
    'bcCCCCCCCCCCcb',
    'bcCCCCCCCCCCcb',
    '.bcCCCCCCCCcb.',
    '..bbbbbbbbbb..',
  ]);

  const shoulders = bitmap(8, 23, [
    '.bbbbbbbbbbbbbb.',
    'b..............b',
  ]);

  const arms = [
    px(8, 25, 1, 7, PALETTE.s),
    px(23, 25, 1, 7, PALETTE.s),
    px(8, 32, 1, 1, PALETTE.S),
    px(23, 32, 1, 1, PALETTE.S),
  ].join('');

  const legs = bitmap(12, GEOMETRY.legTop, [
    '.BB..BB.',
    '.Bb..bB.',
    '.Bb..bB.',
    '.BB..BB.',
    '.BB..BB.',
  ]);

  return `${torso}${shoulders}${arms}${legs}`;
}

function baseHead(): string {
  return bitmap(8, GEOMETRY.headTop, [
    '..AAAAAAAAAAAA..',
    '.AAAHHHHHHHHAAA.',
    '.AHHSSSSSSSSHHHA.',
    'AHHSSSSSSSSSSHHHA',
    'AHHSSSSSSSSSSHHHA',
    'AHHSSSSSSSSSSHHHA',
    'AHHSSSSSSSSSSHHHA',
    '.AHHSSSSSSSSHHHA.',
    '.AAAHHHHHHHHAAA.',
    '..AAAAAAAAAAAA..',
    '...AAAAAAAAAA...',
    '....AAAAAAAA....',
  ]);
}

function baseFace(): string {
  return [
    px(11, 14, 2, 1, PALETTE.E),
    px(18, 14, 2, 1, PALETTE.E),
    px(15, 16, 1, 2, PALETTE.s),
    px(13, 19, 5, 1, PALETTE.M),
    px(13, 20, 5, 1, PALETTE.H),
  ].join('');
}

function propFor(activity: FriendlyActivity): string {
  if (activity === 'studying') {
    return `<g class="friendly-overlay-studying">${px(9, 33, 14, 2, '#32445D')}${px(10, 33, 12, 1, '#5A7A9A')}</g>`;
  }
  if (activity === 'cooking') {
    return `<g class="friendly-overlay-cooking">${px(22, 30, 3, 2, '#94A7BA')}${px(25, 31, 2, 1, '#6E7E8D')}</g>`;
  }
  if (activity === 'walking') {
    return `<g class="friendly-overlay-walking">${px(7, 26, 2, 1, '#C9D8EA')}${px(23, 28, 2, 1, '#C9D8EA')}</g>`;
  }
  if (activity === 'sleeping') {
    return `<g class="friendly-overlay-sleeping">${px(8, 29, 16, 5, '#8298B6')}${px(9, 29, 14, 1, '#AABAD4')}<text x="98" y="58" fill="#D9E4F2" font-size="10">z</text></g>`;
  }
  if (activity === 'relaxing') {
    return `<g class="friendly-overlay-relaxing">${px(23, 17, 2, 2, '#F2C9A7')}</g>`;
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
    px(8, 23, 2, 1, PALETTE.b),
    px(22, 23, 2, 1, PALETTE.b),
    px(10, 23, 12, 1, PALETTE.C),
    '</g>',
    '<g class="friendly-head totem-head">',
    '<g class="friendly-hair totem-crown">',
    baseHead(),
    '</g>',
    '<g class="friendly-face totem-face totem-mask">',
    // Explicit anchors provide stable visual symmetry for tests and future refactors.
    px(11.5, 14.5, 2, 1, PALETTE.E),
    px(18.5, 14.5, 2, 1, PALETTE.E),
    px(15.5, 16.5, 1, 2, PALETTE.s),
    px(13.5, 19.5, 5, 1, PALETTE.M),
    baseFace(),
    '</g>',
    '<g class="totem-glyphs">',
    px(11, 15, 1, 1, PALETTE.A),
    px(20, 15, 1, 1, PALETTE.A),
    '</g>',
    '<g class="totem-arms">',
    px(8, 25, 1, 7, PALETTE.s),
    px(23, 25, 1, 7, PALETTE.s),
    '</g>',
    '<g class="totem-legs">',
    px(12, GEOMETRY.legTop, 2, GEOMETRY.legHeight, PALETTE.B),
    px(18, GEOMETRY.legTop, 2, GEOMETRY.legHeight, PALETTE.B),
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
  .friendly-avatar {
    --friendly-center-x: 64px;
    --friendly-head-width: 64px;
    --friendly-body-width: 56px;
    --friendly-eye-gap: 18px;
    --friendly-stroke: 4px;
    width: 100%;
    height: auto;
    display: block;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
  .friendly-shadow { transform-origin: var(--friendly-center-x) 164px; }

  @keyframes friendly-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }
  @keyframes friendly-walk {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }
  @keyframes friendly-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.02); }
  }
  @keyframes friendly-nod {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(1.5deg); }
  }
  @keyframes friendly-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-1.5deg); }
  }

  .friendly-idle .friendly-character { animation: friendly-bob 3.4s ease-in-out infinite; transform-origin: var(--friendly-center-x) 96px; }
  .friendly-idle .friendly-body { animation: friendly-breathe 3.8s ease-in-out infinite; transform-origin: var(--friendly-center-x) 112px; }

  .friendly-walking .friendly-character { animation: friendly-walk 0.7s ease-in-out infinite; transform-origin: var(--friendly-center-x) 100px; }
  .friendly-walking .friendly-overlay-walking { animation: friendly-breathe 0.7s ease-in-out infinite; }

  .friendly-studying .friendly-head { animation: friendly-nod 3s ease-in-out infinite; transform-origin: var(--friendly-center-x) 64px; }
  .friendly-cooking .friendly-head { animation: friendly-nod 2.3s ease-in-out infinite; transform-origin: var(--friendly-center-x) 64px; }
  .friendly-relaxing .friendly-character { animation: friendly-sway 3.8s ease-in-out infinite; transform-origin: var(--friendly-center-x) 104px; }

  .friendly-sleeping .friendly-character { transform: translateY(6px); }
  .friendly-sleeping .friendly-face { opacity: 0.65; }
`;
