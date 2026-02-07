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
  'S': '#FFD5B8',   // skin base
  's': '#E8B898',   // skin shadow
  'L': '#FFE4CC',   // skin highlight
  'l': '#F5C8A0',   // skin mid-shadow
  'H': '#3D2B1F',   // hair dark
  'h': '#5A4030',   // hair highlight
  'g': '#4A3528',   // hair mid
  'E': '#2B2B2B',   // eyes/pupils
  'W': '#F8F8F8',   // eye whites
  'w': '#E8E0D8',   // eye shadow
  'M': '#E89888',   // mouth/lips
  'N': '#D8A890',   // nose shadow
  'B': '#5B8FB9',   // hoodie base
  'b': '#4A7898',   // hoodie shadow
  'c': '#6BA0C8',   // hoodie highlight
  'd': '#3D6080',   // hoodie deep shadow
  'Z': '#5080A0',   // hoodie zip
  'P': '#3A3A48',   // pants base
  'p': '#4A4A58',   // pants highlight
  'q': '#2E2E3A',   // pants shadow
  'F': '#F0EEE8',   // shoes
  'f': '#D8D4CC',   // shoe sole
  'e': '#C8C4BC',   // shoe shadow
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

// ===== HEAD at grid (8, 2), 16 wide =====

const AWAKE_HEAD = [
  '......HHHH......',   // hair tip
  '....HHHHHHHH....',   // hair crown
  '...HHHhHHhHHH...',   // hair texture
  '..HHhHHHHHHhHH..',   // hair full
  '.HHgHHHHHHHHgHH.',   // hair widest
  'HgHHHHHHHHHHHHgH',   // hair full width
  'HHHHhHHHHHHhHHHH',   // hair bottom
  'HHHHHHHHHHHHHHHH',   // fringe
  '.HLSSSSSSSSSSLH.',   // forehead + sideburns
  '.lSSSSSSSSSSSSl.',   // upper face round
  '.lSHHHSSSSHHHSl.',   // eyebrows
  '.lSWEEWSSWEEWSl.',   // eyes
  '.lSLSSSSSSSSLSl.',   // cheeks
  '..SSSSSNNSSSSS..',   // nose
  '..SSSSSMMSSSSS..',   // mouth
  '..sSSSSSSSSSSs..',   // lower face
  '...sSSSSSSSSs...',   // jaw
  '....sSSSSSSs....',   // lower jaw
  '.....sSSSSs.....',   // chin
];

const SLEEP_HEAD = [
  '......HHHH......',   // hair tip
  '....HHHHHHHH....',   // hair crown
  '...HHHhHHhHHH...',   // hair texture
  '..HHhHHHHHHhHH..',   // hair full
  '.HHgHHHHHHHHgHH.',   // hair widest
  'HgHHHHHHHHHHHHgH',   // hair full width
  'HHHHhHHHHHHhHHHH',   // hair bottom
  'HHHHHHHHHHHHHHHH',   // fringe
  '.HLSSSSSSSSSSLH.',   // forehead + sideburns
  '.lSSSSSSSSSSSSl.',   // upper face round
  '.lSHHHSSSSHHHSl.',   // eyebrows
  '.lSSEESSSSEESSl.',   // closed eyes
  '.lSLSSSSSSSSLSl.',   // cheeks
  '..SSSSSNNSSSSS..',   // nose
  '..SSSSSMMSSSSS..',   // mouth
  '..sSSSSSSSSSSs..',   // lower face
  '...sSSSSSSSSs...',   // jaw
  '....sSSSSSSs....',   // lower jaw
  '.....sSSSSs.....',   // chin
];

function awakeHead(): string {
  return renderBitmap(8, 2, AWAKE_HEAD);
}
function sleepingHead(): string {
  return renderBitmap(8, 2, SLEEP_HEAD);
}

// ===== NECK at grid (12, 19), 8 wide =====

const NECK_BMP = [
  '..LSSL..',   // row 19: neck highlight
  '..SLLs..',   // row 20: neck mid
  '..lSSl..',   // row 21: neck shadow
];

function neck(): string {
  return renderBitmap(12, 19, NECK_BMP);
}

// ===== BODY (hoodie torso) at grid (10, 21), 12 wide =====

const BODY_BMP = [
  '..cBBBBBBc..',   // row 21: hood rim
  '.cBBBBBBBBc.',   // row 22: collar
  'cBBBBZZBBBBc',   // row 23: upper torso + zip
  'BBBcBZZBcBBd',   // row 24: highlights + zip
  'BBcBBZZBBcBd',   // row 25: more highlights + zip
  'BBBBBZZBBBBd',   // row 26: mid torso + zip
  'bBcBBBBBBcBb',   // row 27: pocket highlights
  'bBBcBBBBcBBb',   // row 28: pocket detail
  'bBBBBBBBBBBb',   // row 29: lower torso
  '.dBBcBBcBBd.',   // row 30: taper with detail
  '..dBBBBBBd..',   // row 31: waist
];

const BELT_BMP = [
  '.qPPPPPPPPq.',   // row 32: belt/waistband
];

function bodyRect(): string {
  return renderBitmap(10, 21, BODY_BMP) + renderBitmap(10, 32, BELT_BMP);
}

// ===== LEFT ARM at grid (5, 22), 5 wide =====

const LEFT_ARM_BMP = [
  '.cBBB',   // row 22: shoulder cap
  'BBcBb',   // row 23: upper arm highlight
  'BBBBb',   // row 24: mid arm
  'bBcBb',   // row 25: elbow highlight
  'bBBBd',   // row 26: elbow shadow
  'bBcBd',   // row 27: lower arm highlight
  'bBBBd',   // row 28: forearm
  'bBBBd',   // row 29: wrist
  '.LSsl',   // row 30: hand highlight + shadow
];

function leftArm(): string {
  return renderBitmap(5, 22, LEFT_ARM_BMP);
}

// ===== RIGHT ARM at grid (22, 22), 5 wide =====

const RIGHT_ARM_BMP = [
  'BBBc.',   // row 22: shoulder cap
  'bBcBB',   // row 23: upper arm highlight
  'bBBBB',   // row 24: mid arm
  'bBcBb',   // row 25: elbow highlight
  'dBBBb',   // row 26: elbow shadow
  'dBcBb',   // row 27: lower arm highlight
  'dBBBb',   // row 28: forearm
  'dBBBb',   // row 29: wrist
  'lsSL.',   // row 30: hand shadow + highlight
];

function rightArm(): string {
  return renderBitmap(22, 22, RIGHT_ARM_BMP);
}

// ===== LEFT LEG at grid (11, 31), 5 wide =====

const LEFT_LEG_BMP = [
  'pPPPP',   // row 33: waistband highlight
  'PPPPq',   // row 34: upper thigh
  'PPPPq',   // row 35: thigh shadow
  'pPPPq',   // row 36: knee highlight + shadow
  'pPPPP',   // row 37: shin highlight
  'PPPPq',   // row 38: lower shin
  'PPPPq',   // row 39: mid shin shadow
  'pPPPP',   // row 40: lower shin highlight
  'PPPPq',   // row 41: ankle shadow
  'PPPPP',   // row 42: ankle
  'FFFFF',   // row 43: shoe upper
  'FFFfe',   // row 44: shoe mid
  'FFFFe',   // row 45: shoe detail
  'fffee',   // row 46: sole
];

function leftLeg(): string {
  return renderBitmap(11, 33, LEFT_LEG_BMP);
}

// ===== RIGHT LEG at grid (17, 31), 5 wide =====

const RIGHT_LEG_BMP = [
  'PPPPp',   // row 33: waistband
  'qPPPP',   // row 34: upper thigh shadow
  'qPPPP',   // row 35: thigh shadow
  'qPPPp',   // row 36: knee
  'PPPPp',   // row 37: shin highlight
  'qPPPP',   // row 38: lower shin
  'qPPPP',   // row 39: mid shin shadow
  'PPPPp',   // row 40: lower shin highlight
  'qPPPP',   // row 41: ankle shadow
  'PPPPP',   // row 42: ankle
  'FFFFF',   // row 43: shoe upper
  'efFFe',   // row 44: shoe mid
  'eFFFe',   // row 45: shoe detail
  'eefff',   // row 46: sole
];

function rightLeg(): string {
  return renderBitmap(17, 33, RIGHT_LEG_BMP);
}

function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="64" cy="176" rx="30" ry="5" fill="#000" opacity="0.12"/>`;
}

// ===== SLEEPING EXTRAS =====

function pillow(): string {
  return px(4, 14, 24, 3, PILLOW_FILL);
}

function blanket(): string {
  return `<g class="totem-blanket">${px(4, 28, 24, 16, BLANKET_COLOR)}${px(4, 28, 24, 2, BLANKET_HI)}</g>`;
}

function sleepingZzz(): string {
  return `<g class="totem-zzz">
    <text x="104" y="12" fill="${WHITE}" font-size="18px" font-family="monospace" opacity="0">Z</text>
    <text x="108" y="32" fill="${WHITE}" font-size="15px" font-family="monospace" opacity="0">z</text>
    <text x="104" y="48" fill="${WHITE}" font-size="12px" font-family="monospace" opacity="0">z</text>
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
  return `<g class="totem-prop">${px(8, 28, 16, 2, LAPTOP_FRAME)}${px(9, 28, 14, 1, LAPTOP_SCREEN)}${px(7, 30, 18, 1, LAPTOP_FRAME)}</g>`;
}
function panProp(): string {
  return `<g class="totem-prop">${px(25, 25, 4, 2, PAN)}${px(29, 25, 2, 1, PAN_HANDLE)}</g>`;
}
function phoneProp(): string {
  return `<g class="totem-prop">${px(25, 24, 2, 4, PHONE_BODY)}${px(25, 25, 2, 2, PHONE_SCREEN)}</g>`;
}
function bookProp(): string {
  return `<g class="totem-prop">${px(2, 24, 3, 4, '#5A3020')}${px(3, 25, 2, 3, '#E8D8C0')}</g>`;
}
function mugProp(): string {
  return `<g class="totem-prop">${px(25, 23, 3, 3, '#A05830')}${px(28, 24, 1, 1, '#8A4820')}</g>`;
}
function remoteProp(): string {
  return `<g class="totem-prop">${px(25, 26, 2, 3, PHONE_BODY)}${px(25, 27, 1, 1, '#E06060')}</g>`;
}
function controllerProp(): string {
  return `<g class="totem-prop">${px(8, 28, 6, 2, PHONE_BODY)}${px(9, 28, 1, 1, '#A04040')}${px(12, 28, 1, 1, '#4060A0')}</g>`;
}
function plateProp(): string {
  return `<g class="totem-prop">${px(2, 28, 5, 1, PAN)}${px(3, 27, 3, 1, '#E8E4DC')}</g>`;
}
function spongeProp(): string {
  return `<g class="totem-prop">${px(2, 25, 3, 2, '#E8D040')}</g>`;
}
function bowlProp(): string {
  return `<g class="totem-prop">${px(9, 26, 5, 2, PAN)}${px(10, 26, 3, 1, '#C8A040')}</g>`;
}
function markerProp(): string {
  return `<g class="totem-prop">${px(27, 8, 1, 3, '#E06060')}</g>`;
}
function shirtProp(): string {
  return `<g class="totem-prop">${px(1, 23, 3, 3, '#6080A0')}${px(28, 23, 3, 3, '#6080A0')}</g>`;
}
function phoneUpProp(): string {
  return `<g class="totem-prop">${px(13, 1, 5, 2, PHONE_BODY)}${px(14, 1, 3, 1, PHONE_SCREEN)}</g>`;
}

// ===== POSE BUILDER =====

function standardPose(head: string): string {
  const p: string[] = [];
  p.push(`<g class="totem-left-leg">${leftLeg()}</g>`);
  p.push(`<g class="totem-right-leg">${rightLeg()}</g>`);
  p.push(`<g class="totem-body">${bodyRect()}${neck()}</g>`);
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

  .totem-shadow { transform-origin: 64px 176px; }

  /* ===== IDLE ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .totem-idle .totem-head {
    animation: totem-head-tilt 6s ease-in-out infinite;
    transform-origin: 64px 56px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: 32px 92px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: 96px 92px;
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
    transform-origin: 32px 92px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: 96px 92px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-stride-l 0.4s ease-in-out infinite alternate;
    transform-origin: 52px 128px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-stride-r 0.4s ease-in-out infinite alternate;
    transform-origin: 76px 128px;
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
    transform-origin: 64px 56px;
  }
  .totem-studying .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: 32px 92px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    animation-delay: 0.08s;
    transform-origin: 96px 92px;
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
    transform-origin: 96px 92px;
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
    transform-origin: 64px 144px;
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
    transform-origin: 64px 56px;
  }

  /* ===== READING ===== */
  .totem-reading .totem-character, .totem-reading-couch .totem-character {
    animation: totem-bob 3.2s ease-in-out infinite;
  }
  .totem-reading .totem-head, .totem-reading-couch .totem-head {
    animation: totem-head-tilt 4s ease-in-out infinite;
    transform-origin: 64px 56px;
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
    transform-origin: 64px 56px;
  }
  .totem-watching .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 64px 80px;
  }
`;
