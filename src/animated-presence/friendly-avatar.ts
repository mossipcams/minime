// Terraria character recreation — 14×22 bitmap grid, P=4
// Proportions matched to actual Terraria: head 32%, body 27%, legs 41%
// Hair overlays face from above, body wider than head
export type FriendlyActivity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping' | 'relaxing';

const W = 96;
const H = 96;
const P = 4;  // pixel scale (4x4 SVG units per grid cell)
const OX = 20; // x offset to center 14*4=56 in 96
const OY = 4;  // y offset to center 22*4=88 in 96

const KNOWN = new Set([
  'idle', 'walking',
  'studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call',
  'cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking',
  'watching', 'gaming', 'reading-couch', 'relaxing', 'stretching',
  'napping', 'sleeping', 'reading-bed', 'meditating', 'getting-dressed', 'morning-stretch', 'phone-bed',
]);

// Terraria character palette — high contrast for pixel readability
const PAL: Record<string, string> = {
  'H': '#8B4513',   // hair (brown)
  'S': '#FFCBA4',   // skin (warm peach)
  's': '#D4AA88',   // skin shadow / arms
  'W': '#FFFFFF',   // eye white
  'E': '#2B1F14',   // eye pupil (dark brown)
  'T': '#AF2B1E',   // shirt (deep red)
  'U': '#E8C840',   // undershirt (yellow)
  'B': '#3D6EB5',   // pants (blue)
  'K': '#503820',   // shoes (dark brown)
};

function normalize(activity: string): FriendlyActivity {
  if (!KNOWN.has(activity)) return 'idle';
  if (activity === 'walking') return 'walking';
  if (activity === 'sleeping' || activity === 'napping' || activity === 'reading-bed' || activity === 'phone-bed') return 'sleeping';
  if (activity === 'studying' || activity === 'reading' || activity === 'thinking' || activity === 'whiteboarding' || activity === 'phone-call' || activity === 'coffee-break') return 'studying';
  if (activity === 'cooking' || activity === 'coffee-making' || activity === 'washing-dishes' || activity === 'snacking' || activity === 'baking' || activity === 'eating') return 'cooking';
  if (activity === 'watching' || activity === 'gaming' || activity === 'reading-couch' || activity === 'relaxing' || activity === 'stretching' || activity === 'meditating' || activity === 'morning-stretch' || activity === 'getting-dressed') return 'relaxing';
  return 'idle';
}

// Run-length encoded bitmap renderer
function renderBitmap(rows: string[], startRow: number): string {
  const rects: string[] = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    let c = 0;
    while (c < row.length) {
      const ch = row[c];
      if (ch === '.') { c++; continue; }
      let end = c + 1;
      while (end < row.length && row[end] === ch) end++;
      const fill = PAL[ch];
      if (fill) {
        rects.push(`<rect x="${OX + c * P}" y="${OY + (startRow + r) * P}" width="${(end - c) * P}" height="${P}" fill="${fill}"/>`);
      }
      c = end;
    }
  }
  return rects.join('');
}

// === Terraria character bitmap (14 cols × 22 rows) ===
// Head 32%, body 27%, legs 41% — matches actual Terraria proportions
// Body is wider than head (12 vs 10) like real Terraria

const HAIR = [
  '..HHHHHHHHHH..',   // row 0: hair top (10 wide, blocky)
  '..HHHHHHHHHH..',   // row 1: hair base (10 wide, flat)
];

const HEAD = [
  '..HHSSSSSSSS..',   // row 2:  hair hangs on left, face starts (8 skin)
  '..HHSSSSSSSS..',   // row 3:  hair on left side
  '....SSWSSWSS..',   // row 4:  eye whites (spaced 3 apart like Terraria)
  '....SSESSESS..',   // row 5:  eye pupils (dark, high contrast)
  '....SSSSSSSS..',   // row 6:  jaw (same width = square face)
];

const TORSO = [
  '......SS......',   // row 7:  thin neck (2 wide)
  '...ssTTTTss...',   // row 8:  shirt collar + shoulders (10 wide)
  '..sssTTTTsss..',   // row 9:  shirt + arms extended (12 wide — wider than head!)
  '..sssTTTTsss..',   // row 10: shirt + arms
  '...ssTTTTss...',   // row 11: lower shirt + arms taper
  '.....UUUU.....',   // row 12: undershirt (4 wide)
];

const LEGS = [
  '....BBBBBB....',   // row 13: pants hips (6 wide)
  '....BBBBBB....',   // row 14: pants
  '....BBBBBB....',   // row 15: pants
  '....BB..BB....',   // row 16: legs separate (2+2, 2 gap)
  '....BB..BB....',   // row 17: legs
  '....BB..BB....',   // row 18: legs
  '....BB..BB....',   // row 19: legs
  '....KK..KK....',   // row 20: shoes
  '....KK..KK....',   // row 21: shoe soles
];

function tool(): string {
  // Copper pickaxe held on right side past the arm
  return [
    `<rect x="${OX + 12 * P}" y="${OY + 8 * P}" width="${2 * P}" height="${P}" fill="#B87333"/>`,
    `<rect x="${OX + 13 * P}" y="${OY + 9 * P}" width="${P}" height="${4 * P}" fill="#6B4226"/>`,
  ].join('');
}

function shadow(): string {
  return '<ellipse class="mini-shadow" cx="48" cy="91" rx="14" ry="3" fill="#000" opacity="0.16"/>';
}

function overlay(activity: FriendlyActivity): string {
  if (activity === 'walking') {
    return '<g class="mini-overlay-walking"><rect x="28" y="90" width="8" height="4" fill="#BFD9EF"/><rect x="56" y="90" width="8" height="4" fill="#BFD9EF"/></g>';
  }
  if (activity === 'studying') {
    return '<g class="mini-overlay-studying"><rect x="24" y="52" width="40" height="4" fill="#2C435E"/><rect x="28" y="48" width="32" height="4" fill="#5E7E9C"/></g>';
  }
  if (activity === 'cooking') {
    return '<g class="mini-overlay-cooking"><rect x="68" y="36" width="4" height="16" fill="#D8E3EE"/><rect x="72" y="40" width="4" height="4" fill="#9EB3C8"/></g>';
  }
  if (activity === 'sleeping') {
    return '<g class="mini-overlay-sleeping"><rect x="24" y="40" width="40" height="20" fill="#8FA7C2"/><rect x="28" y="40" width="32" height="4" fill="#C8D5E4"/><text x="64" y="12" fill="#E3EDF8" font-size="8">z</text></g>';
  }
  if (activity === 'relaxing') {
    return '<g class="mini-overlay-relaxing"><rect x="56" y="28" width="4" height="4" fill="#D4AA88"/></g>';
  }
  return '';
}

function character(): string {
  return [
    '<g class="mini-character">',
    '<g class="mini-base">',
    `<g class="mini-hair">${renderBitmap(HAIR, 0)}</g>`,
    '<g class="mini-head">',
    `<g class="mini-face">${renderBitmap(HEAD, 2)}</g>`,
    '</g>',
    '<g class="mini-body">',
    `<g class="mini-torso">${renderBitmap(TORSO, 7)}</g>`,
    `<g class="mini-legs">${renderBitmap(LEGS, 13)}</g>`,
    '</g>',
    `<g class="mini-tool mini-tool-pickaxe">${tool()}</g>`,
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
    shadow(),
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
    width: 100%;
    height: auto;
    display: block;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }

  .mini-shadow { transform-origin: var(--mini-avatar-center-x) 91px; }

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

  .friendly-idle .mini-character { animation: mini-idle 2.4s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 60px; }
  .friendly-idle .mini-torso { animation: mini-breathe 3.1s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 40px; }

  .friendly-walking .mini-character { animation: mini-walk 0.55s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 52px; }
  .friendly-walking .mini-overlay-walking { animation: mini-breathe 0.55s steps(2, end) infinite; }

  .friendly-studying .mini-head { animation: mini-nod 2.4s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 20px; }
  .friendly-cooking .mini-head { animation: mini-nod 2s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 20px; }
  .friendly-relaxing .mini-character { animation: mini-sway 3.2s steps(2, end) infinite; transform-origin: var(--mini-avatar-center-x) 44px; }

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
