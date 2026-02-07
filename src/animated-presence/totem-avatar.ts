// Pixel art human avatar — viewBox 0 0 128 192, P=4 (32x48 logical grid)
export type Activity = 'idle' | 'walking'
  | 'studying' | 'reading' | 'thinking' | 'coffee-break' | 'whiteboarding' | 'phone-call'
  | 'cooking' | 'eating' | 'coffee-making' | 'washing-dishes' | 'snacking' | 'baking'
  | 'watching' | 'gaming' | 'reading-couch' | 'relaxing' | 'stretching' | 'napping'
  | 'sleeping' | 'reading-bed' | 'meditating' | 'getting-dressed' | 'morning-stretch' | 'phone-bed';

const ACTIVITIES: Activity[] = [
  'idle', 'walking',
  'studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call',
  'cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking',
  'watching', 'gaming', 'reading-couch', 'relaxing', 'stretching', 'napping',
  'sleeping', 'reading-bed', 'meditating', 'getting-dressed', 'morning-stretch', 'phone-bed',
];

const W = 128;
const H = 192;
const P = 4;

// Extended palette for detailed pixel art
const COLORS: Record<string, string> = {
  'S': '#FFD5B8',   // skin
  's': '#E8B898',   // skin shadow
  'H': '#3D2B1F',   // hair
  'h': '#5A4030',   // hair highlight
  'E': '#2B2B2B',   // eyes/pupils
  'W': '#F8F8F8',   // eye whites
  'B': '#5B8FB9',   // hoodie
  'b': '#4A7898',   // hoodie shadow
  'c': '#6BA0C8',   // hoodie highlight
  'P': '#3A3A48',   // pants
  'p': '#4A4A58',   // pants highlight
  'F': '#F0EEE8',   // shoes
  'f': '#D8D4CC',   // shoe sole
};

const BLANKET_COLOR = '#6A5C94';
const BLANKET_HI = '#7C6CA4';
const PILLOW_FILL = '#E0D4BC';
const WHITE = '#F0EEE8';
const LAPTOP_FRAME = '#282838';
const LAPTOP_SCREEN = '#4C7AA8';
const PAN = '#787880';
const PAN_HANDLE = '#5E4428';
const PHONE_BODY = '#282838';
const PHONE_SCREEN = '#4C7AA8';

// ===== BITMAP RENDERER =====

function renderBitmap(gx: number, gy: number, rows: string[]): string {
  const rects: string[] = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    let c = 0;
    while (c < row.length) {
      const ch = row[c];
      if (ch === '.') { c++; continue; }
      let end = c + 1;
      while (end < row.length && row[end] === ch) end++;
      const fill = COLORS[ch];
      if (fill) {
        rects.push(`<rect x="${(gx + c) * P}" y="${(gy + r) * P}" width="${(end - c) * P}" height="${P}" fill="${fill}"/>`);
      }
      c = end;
    }
  }
  return rects.join('');
}

function px(gx: number, gy: number, gw: number, gh: number, fill: string): string {
  return `<rect x="${gx * P}" y="${gy * P}" width="${gw * P}" height="${gh * P}" fill="${fill}"/>`;
}

// ===== HEAD (hair + face + eyes) at grid (12, 3), 8 wide =====

const AWAKE_HEAD = [
  '..HHHH..',   // row 3: hair narrow crown
  '.HHhHHH.',   // row 4: hair with highlight
  'HHhHHhHH',   // row 5: hair textured
  'HHHHHHHH',   // row 6: hair bottom fringe
  '.SSSSSS.',   // row 7: forehead
  'SSSSSSSS',   // row 8: upper face
  'SWESSWES',   // row 9: eyes (white + pupil)
  'SSSSSSSS',   // row 10: mid face
  '.sSSSSs.',   // row 11: jaw shadow edges
  '..SSSS..',   // row 12: chin
];

const SLEEP_HEAD = [
  '..HHHH..',
  '.HHhHHH.',
  'HHhHHhHH',
  'HHHHHHHH',
  '.SSSSSS.',
  'SSSSSSSS',
  'SEESSEES',   // closed eyes: 2px dashes
  'SSSSSSSS',
  '.sSSSSs.',
  '..SSSS..',
];

function awakeHead(): string {
  return renderBitmap(12, 3, AWAKE_HEAD);
}
function sleepingHead(): string {
  return renderBitmap(12, 3, SLEEP_HEAD);
}

// ===== BODY (hoodie torso) at grid (12, 13), 8 wide =====

const BODY_BMP = [
  'cBBBBBBc',   // row 13: collar highlights
  'BBBBBBBB',   // row 14: upper torso
  'BBBbBBBB',   // row 15: center shadow (zip)
  'BBBbBBBB',   // row 16
  'BBBBbBBB',   // row 17: off-center detail
  'BBBBBBBB',   // row 18
  'bBBBBBBb',   // row 19: side shadows
  '.bBBBBb.',   // row 20: bottom taper
];

function bodyRect(): string {
  return renderBitmap(12, 13, BODY_BMP);
}

// ===== LEFT ARM at grid (9, 14), 3 wide =====

const LEFT_ARM_BMP = [
  'BBb',   // row 14: sleeve shadow edge
  'BBb',   // row 15
  'BBb',   // row 16
  'BBb',   // row 17
  'Ss.',   // row 18: hand
];

function leftArm(): string {
  return renderBitmap(9, 14, LEFT_ARM_BMP);
}

// ===== RIGHT ARM at grid (20, 14), 3 wide =====

const RIGHT_ARM_BMP = [
  'bBB',   // row 14: shadow on inner edge
  'bBB',   // row 15
  'bBB',   // row 16
  'bBB',   // row 17
  '.sS',   // row 18: hand
];

function rightArm(): string {
  return renderBitmap(20, 14, RIGHT_ARM_BMP);
}

// ===== LEFT LEG at grid (12, 21), 3 wide =====

const LEFT_LEG_BMP = [
  'pPP',   // row 21: waist highlight
  'PPP',   // row 22
  'PPP',   // row 23
  'PPP',   // row 24
  'PPP',   // row 25
  'PPP',   // row 26
  'PPP',   // row 27
  'FFF',   // row 28: shoe
  'FFf',   // row 29: shoe sole shadow
];

function leftLeg(): string {
  return renderBitmap(12, 21, LEFT_LEG_BMP);
}

// ===== RIGHT LEG at grid (17, 21), 3 wide =====

const RIGHT_LEG_BMP = [
  'PPp',   // row 21: highlight on other side
  'PPP',   // row 22
  'PPP',   // row 23
  'PPP',   // row 24
  'PPP',   // row 25
  'PPP',   // row 26
  'PPP',   // row 27
  'FFF',   // row 28: shoe
  'fFF',   // row 29: sole shadow other side
];

function rightLeg(): string {
  return renderBitmap(17, 21, RIGHT_LEG_BMP);
}

function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="64" cy="128" rx="24" ry="5" fill="#000" opacity="0.12"/>`;
}

// ===== SLEEPING EXTRAS =====

function pillow(): string {
  return px(8, 10, 16, 3, PILLOW_FILL);
}

function blanket(): string {
  return `<g class="totem-blanket">${px(8, 20, 16, 12, BLANKET_COLOR)}${px(8, 20, 16, 2, BLANKET_HI)}</g>`;
}

function sleepingZzz(): string {
  return `<g class="totem-zzz">
    <text x="100" y="12" fill="${WHITE}" font-size="18px" font-family="monospace" opacity="0">Z</text>
    <text x="104" y="32" fill="${WHITE}" font-size="15px" font-family="monospace" opacity="0">z</text>
    <text x="100" y="48" fill="${WHITE}" font-size="12px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

// ===== FLOAT EFFECTS =====

function codeFloat(): string {
  return `<g class="totem-code-float">
    <text x="8" y="15" fill="#7ABCE0" font-size="18px" font-family="monospace" opacity="0">&lt;/&gt;</text>
    <text x="97" y="25" fill="#A0D070" font-size="15px" font-family="monospace" opacity="0">{ }</text>
  </g>`;
}

function steamFloat(): string {
  return `<g class="totem-steam-float">
    <text x="97" y="25" fill="#E8E8E8" font-size="15px" font-family="sans-serif" opacity="0">~</text>
    <text x="102" y="40" fill="#D0D0D0" font-size="12px" font-family="sans-serif" opacity="0">~</text>
  </g>`;
}

// ===== PROPS =====

function laptopProp(): string {
  return `<g class="totem-prop">${px(10, 20, 12, 2, LAPTOP_FRAME)}${px(11, 20, 10, 1, LAPTOP_SCREEN)}${px(9, 22, 14, 1, LAPTOP_FRAME)}</g>`;
}
function panProp(): string {
  return `<g class="totem-prop">${px(21, 17, 4, 2, PAN)}${px(25, 17, 2, 1, PAN_HANDLE)}</g>`;
}
function phoneProp(): string {
  return `<g class="totem-prop">${px(21, 16, 2, 4, PHONE_BODY)}${px(21, 17, 2, 2, PHONE_SCREEN)}</g>`;
}
function bookProp(): string {
  return `<g class="totem-prop">${px(6, 16, 3, 4, '#5A3020')}${px(7, 17, 2, 3, '#E8D8C0')}</g>`;
}
function mugProp(): string {
  return `<g class="totem-prop">${px(21, 15, 3, 3, '#A05830')}${px(24, 16, 1, 1, '#8A4820')}</g>`;
}
function remoteProp(): string {
  return `<g class="totem-prop">${px(21, 18, 2, 3, PHONE_BODY)}${px(21, 19, 1, 1, '#E06060')}</g>`;
}
function controllerProp(): string {
  return `<g class="totem-prop">${px(10, 20, 5, 2, PHONE_BODY)}${px(11, 20, 1, 1, '#A04040')}${px(13, 20, 1, 1, '#4060A0')}</g>`;
}
function plateProp(): string {
  return `<g class="totem-prop">${px(6, 20, 5, 1, PAN)}${px(7, 19, 3, 1, '#E8E4DC')}</g>`;
}
function spongeProp(): string {
  return `<g class="totem-prop">${px(6, 17, 3, 2, '#E8D040')}</g>`;
}
function bowlProp(): string {
  return `<g class="totem-prop">${px(11, 18, 5, 2, PAN)}${px(12, 18, 3, 1, '#C8A040')}</g>`;
}
function markerProp(): string {
  return `<g class="totem-prop">${px(23, 6, 1, 3, '#E06060')}</g>`;
}
function shirtProp(): string {
  return `<g class="totem-prop">${px(4, 15, 3, 3, '#6080A0')}${px(25, 15, 3, 3, '#6080A0')}</g>`;
}
function phoneUpProp(): string {
  return `<g class="totem-prop">${px(13, 1, 5, 2, PHONE_BODY)}${px(14, 1, 3, 1, PHONE_SCREEN)}</g>`;
}

// ===== POSE BUILDER =====

function standardPose(head: string): string {
  const p: string[] = [];
  p.push(`<g class="totem-left-leg">${leftLeg()}</g>`);
  p.push(`<g class="totem-right-leg">${rightLeg()}</g>`);
  p.push(`<g class="totem-body">${bodyRect()}</g>`);
  p.push(`<g class="totem-left-arm">${leftArm()}</g>`);
  p.push(`<g class="totem-right-arm">${rightArm()}</g>`);
  p.push(`<g class="totem-head">${head}</g>`);
  return p.join('');
}

// ===== MAIN EXPORT =====

const PROP_MAP: Partial<Record<Activity, () => string>> = {
  studying: laptopProp, cooking: panProp, idle: phoneProp,
  reading: bookProp, 'reading-couch': bookProp, 'reading-bed': bookProp,
  'coffee-break': mugProp, 'coffee-making': mugProp,
  watching: remoteProp, gaming: controllerProp,
  eating: plateProp, 'washing-dishes': spongeProp,
  baking: bowlProp, whiteboarding: markerProp,
  'phone-call': phoneProp, 'phone-bed': phoneUpProp,
  'getting-dressed': shirtProp, snacking: plateProp,
};

const svgCache = new Map<Activity, string>();

export function getTotemSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as Activity) ? activity : 'idle') as Activity;

  const cached = svgCache.get(act);
  if (cached) return cached;

  const parts: string[] = [groundShadow(), '<g class="totem-character">'];

  if (act === 'sleeping') {
    parts.push(pillow());
    parts.push(standardPose(sleepingHead()));
    parts.push(blanket());
  } else if (act === 'napping' || act === 'meditating') {
    parts.push(standardPose(sleepingHead()));
  } else {
    parts.push(standardPose(awakeHead()));
    const propFn = PROP_MAP[act];
    if (propFn) parts.push(propFn());
  }

  parts.push('</g>');

  if (act === 'sleeping') parts.push(sleepingZzz());
  if (act === 'studying') parts.push(codeFloat());
  if (act === 'cooking' || act === 'coffee-making') parts.push(steamFloat());

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" class="totem-avatar totem-${act}">${parts.join('')}</svg>`;
  svgCache.set(act, svg);
  return svg;
}

// ===== STYLES =====

export const totemStyles = `
  .totem-avatar { width: 100%; height: auto; display: block; image-rendering: pixelated; image-rendering: crisp-edges; }

  /* ===== EYE BLINK ===== */
  .totem-blink { opacity: 0; }
  .totem-avatar:not(.totem-sleeping) .totem-blink {
    animation: totem-blink 5s step-end infinite;
  }
  @keyframes totem-blink {
    0%, 82%, 100% { opacity: 0; }
    84% { opacity: 1; }
    86% { opacity: 0; }
    90% { opacity: 1; }
    94% { opacity: 0; }
  }

  .totem-shadow { transform-origin: 64px 128px; }

  /* ===== IDLE ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .totem-idle .totem-head {
    animation: totem-head-tilt 6s ease-in-out infinite;
    transform-origin: 64px 52px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: 44px 56px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: 80px 56px;
  }
  .totem-idle .totem-shadow {
    animation: totem-shadow-idle 2.8s ease-in-out infinite;
  }
  @keyframes totem-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  @keyframes totem-head-tilt {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    50% { transform: rotate(-2.5deg); }
    75% { transform: rotate(1.5deg); }
  }
  @keyframes totem-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.02); }
  }
  @keyframes totem-idle-arm-l {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-3deg); }
  }
  @keyframes totem-idle-arm-r {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(3deg); }
  }
  @keyframes totem-shadow-idle {
    0%, 100% { transform: scaleX(1); opacity: 0.12; }
    50% { transform: scaleX(0.9); opacity: 0.08; }
  }

  /* ===== WALKING ===== */
  .totem-walking .totem-character {
    animation: totem-walk-bounce 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .totem-walking .totem-left-arm {
    animation: totem-arm-swing-l 0.4s ease-in-out infinite alternate;
    transform-origin: 44px 56px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: 80px 56px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-stride-l 0.4s ease-in-out infinite alternate;
    transform-origin: 52px 84px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-stride-r 0.4s ease-in-out infinite alternate;
    transform-origin: 72px 84px;
  }
  .totem-walking .totem-shadow {
    animation: totem-shadow-walk 0.4s ease-in-out infinite;
  }
  @keyframes totem-walk-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  @keyframes totem-arm-swing-l {
    0% { transform: rotate(-25deg); }
    100% { transform: rotate(25deg); }
  }
  @keyframes totem-arm-swing-r {
    0% { transform: rotate(25deg); }
    100% { transform: rotate(-25deg); }
  }
  @keyframes totem-stride-l {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(18deg); }
  }
  @keyframes totem-stride-r {
    0% { transform: rotate(18deg); }
    100% { transform: rotate(-18deg); }
  }
  @keyframes totem-shadow-walk {
    0%, 100% { transform: scaleX(1); opacity: 0.12; }
    50% { transform: scaleX(0.8); opacity: 0.06; }
  }

  /* ===== STUDYING ===== */
  .totem-studying .totem-character {
    animation: totem-bob 3s ease-in-out infinite;
  }
  .totem-studying .totem-head {
    animation: totem-head-tilt 4s ease-in-out infinite;
    transform-origin: 64px 52px;
  }
  .totem-studying .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: 44px 56px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    animation-delay: 0.08s;
    transform-origin: 80px 56px;
  }
  @keyframes totem-type-l {
    0%, 55%, 100% { transform: rotate(-5deg); }
    10% { transform: rotate(5deg); }
    30% { transform: rotate(6deg); }
    50% { transform: rotate(5deg); }
  }
  @keyframes totem-type-r {
    0%, 55%, 100% { transform: rotate(5deg); }
    10% { transform: rotate(-4deg); }
    30% { transform: rotate(-5deg); }
    50% { transform: rotate(-6deg); }
  }

  /* ===== COOKING ===== */
  .totem-cooking .totem-character {
    animation: totem-bob 2s ease-in-out infinite;
  }
  .totem-cooking .totem-right-arm {
    animation: totem-stir 1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 80px 56px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
  @keyframes totem-stir {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-15deg); }
    75% { transform: rotate(15deg); }
  }

  /* ===== CODE FLOAT ===== */
  .totem-studying .totem-code-float text:nth-child(1) {
    animation: totem-code-1 3s ease-in-out infinite;
  }
  .totem-studying .totem-code-float text:nth-child(2) {
    animation: totem-code-2 3s ease-in-out infinite;
    animation-delay: 0.8s;
  }
  @keyframes totem-code-1 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.9; transform: translate(4px, -5px); }
    85% { opacity: 0.5; transform: translate(8px, -26px); }
    100% { opacity: 0; transform: translate(10px, -33px); }
  }
  @keyframes totem-code-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.8; transform: translate(-3px, -4px); }
    85% { opacity: 0.4; transform: translate(-8px, -20px); }
    100% { opacity: 0; transform: translate(-10px, -26px); }
  }

  /* ===== STEAM FLOAT ===== */
  .totem-cooking .totem-steam-float text:nth-child(1),
  .totem-coffee-making .totem-steam-float text:nth-child(1) {
    animation: totem-steam-1 2.5s ease-in-out infinite;
  }
  .totem-cooking .totem-steam-float text:nth-child(2),
  .totem-coffee-making .totem-steam-float text:nth-child(2) {
    animation: totem-steam-2 2.5s ease-in-out infinite;
    animation-delay: 0.7s;
  }
  @keyframes totem-steam-1 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; transform: translate(3px, -5px); }
    85% { opacity: 0.2; transform: translate(-4px, -26px); }
    100% { opacity: 0; transform: translate(-5px, -33px); }
  }
  @keyframes totem-steam-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.6; transform: translate(4px, -4px); }
    85% { opacity: 0.15; transform: translate(8px, -20px); }
    100% { opacity: 0; transform: translate(10px, -26px); }
  }

  /* ===== SLEEPING ===== */
  .totem-sleeping {
    transform: rotate(-90deg) scale(0.9);
    transform-origin: center center;
  }
  .totem-sleeping .totem-shadow { opacity: 0; }
  .totem-sleeping .totem-blanket {
    animation: totem-blanket-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 64px 104px;
  }
  .totem-sleeping .totem-body {
    animation: totem-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 64px 80px;
  }
  .totem-sleeping .totem-zzz text:nth-child(1) {
    animation: totem-zzz 2.5s ease-in-out infinite;
  }
  .totem-sleeping .totem-zzz text:nth-child(2) {
    animation: totem-zzz-2 2.5s ease-in-out infinite;
    animation-delay: 0.6s;
  }
  .totem-sleeping .totem-zzz text:nth-child(3) {
    animation: totem-zzz-3 2.5s ease-in-out infinite;
    animation-delay: 1.2s;
  }
  @keyframes totem-blanket-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.02); }
  }
  @keyframes totem-zzz {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 1; transform: translate(3px, -4px); }
    85% { opacity: 0.7; transform: translate(5px, -23px); }
    100% { opacity: 0; transform: translate(8px, -26px); }
  }
  @keyframes totem-zzz-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.9; transform: translate(-2px, -3px); }
    85% { opacity: 0.6; transform: translate(-6px, -18px); }
    100% { opacity: 0; transform: translate(-8px, -20px); }
  }
  @keyframes totem-zzz-3 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; transform: translate(1px, -2px); }
    85% { opacity: 0.5; transform: translate(3px, -13px); }
    100% { opacity: 0; transform: translate(4px, -15px); }
  }

  /* ===== NAPPING/MEDITATING ===== */
  .totem-napping .totem-body, .totem-meditating .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
  .totem-napping .totem-head, .totem-meditating .totem-head {
    animation: totem-head-tilt 8s ease-in-out infinite;
    transform-origin: 64px 52px;
  }

  /* ===== READING ===== */
  .totem-reading .totem-character, .totem-reading-couch .totem-character {
    animation: totem-bob 3.2s ease-in-out infinite;
  }
  .totem-reading .totem-head, .totem-reading-couch .totem-head {
    animation: totem-head-tilt 4s ease-in-out infinite;
    transform-origin: 64px 52px;
  }
  .totem-reading .totem-body, .totem-reading-couch .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 64px 80px;
  }

  /* ===== WATCHING ===== */
  .totem-watching .totem-character {
    animation: totem-bob 4s ease-in-out infinite;
  }
  .totem-watching .totem-head {
    animation: totem-head-tilt 5s ease-in-out infinite;
    transform-origin: 64px 52px;
  }
  .totem-watching .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
`;
