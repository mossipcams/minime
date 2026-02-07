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
const P = 4; // pixel size in viewBox units

// Palette
const SKIN = '#FFD5B8';
const HAIR = '#3D2B1F';
const EYES = '#2B2B2B';
const HOODIE = '#5B8FB9';
const PANTS = '#3A3A48';
const SHOES = '#F0EEE8';
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

// ===== PIXEL HELPERS =====

/** Emit a rect at grid position (gx, gy) spanning gw x gh logical pixels */
function px(gx: number, gy: number, gw: number, gh: number, fill: string): string {
  return `<rect x="${gx * P}" y="${gy * P}" width="${gw * P}" height="${gh * P}" fill="${fill}"/>`;
}

// ===== HEAD =====

function hairPixels(): string {
  // Cap covering top of head, rows 2-5
  return [
    px(13, 2, 6, 1, HAIR),   // narrow top
    px(12, 3, 8, 1, HAIR),   // wider
    px(11, 4, 10, 1, HAIR),  // full cap
    px(11, 5, 10, 1, HAIR),  // full cap
  ].join('');
}

function headSkinPixels(): string {
  // Oval face, rows 5-13
  return [
    px(12, 6, 8, 1, SKIN),   // top of face
    px(11, 7, 10, 6, SKIN),  // main face block
    px(12, 13, 8, 1, SKIN),  // chin
  ].join('');
}

function awakeEyePixels(): string {
  return [
    px(13, 10, 1, 1, EYES),
    px(18, 10, 1, 1, EYES),
  ].join('');
}

function sleepingEyePixels(): string {
  // Closed eyes: horizontal dashes (2px wide each)
  return [
    px(13, 10, 2, 1, EYES),
    px(17, 10, 2, 1, EYES),
  ].join('');
}

function awakeHead(): string {
  return hairPixels() + headSkinPixels() + awakeEyePixels();
}

function sleepingHead(): string {
  return hairPixels() + headSkinPixels() + sleepingEyePixels();
}

// ===== BODY PARTS =====

function bodyRect(): string {
  return [
    px(12, 14, 8, 1, HOODIE),  // shoulders (narrow)
    px(11, 15, 10, 8, HOODIE), // torso
    px(12, 23, 8, 1, HOODIE),  // taper
  ].join('');
}

function leftArm(): string {
  return [
    px(8, 15, 3, 4, HOODIE),  // sleeve
    px(8, 19, 2, 1, SKIN),    // hand
  ].join('');
}

function rightArm(): string {
  return [
    px(21, 15, 3, 4, HOODIE),
    px(22, 19, 2, 1, SKIN),
  ].join('');
}

function leftLeg(): string {
  return [
    px(12, 24, 4, 10, PANTS),
    px(12, 34, 4, 2, SHOES),
  ].join('');
}

function rightLeg(): string {
  return [
    px(16, 24, 4, 10, PANTS),
    px(16, 34, 4, 2, SHOES),
  ].join('');
}

function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="64" cy="180" rx="30" ry="6" fill="#000" opacity="0.12"/>`;
}

// ===== SLEEPING EXTRAS =====

function pillow(): string {
  return px(8, 11, 16, 3, PILLOW_FILL);
}

function blanket(): string {
  return `<g class="totem-blanket">${px(8, 22, 16, 10, BLANKET_COLOR)}${px(8, 22, 16, 2, BLANKET_HI)}</g>`;
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
  return `<g class="totem-prop">${px(10, 22, 12, 2, LAPTOP_FRAME)}${px(11, 22, 10, 1, LAPTOP_SCREEN)}${px(9, 24, 14, 1, LAPTOP_FRAME)}</g>`;
}
function panProp(): string {
  return `<g class="totem-prop">${px(22, 20, 4, 2, PAN)}${px(26, 20, 2, 1, PAN_HANDLE)}</g>`;
}
function phoneProp(): string {
  return `<g class="totem-prop">${px(22, 18, 2, 4, PHONE_BODY)}${px(22, 19, 2, 2, PHONE_SCREEN)}</g>`;
}
function bookProp(): string {
  return `<g class="totem-prop">${px(5, 18, 3, 4, '#5A3020')}${px(6, 19, 2, 3, '#E8D8C0')}</g>`;
}
function mugProp(): string {
  return `<g class="totem-prop">${px(22, 17, 3, 3, '#A05830')}${px(25, 18, 1, 1, '#8A4820')}</g>`;
}
function remoteProp(): string {
  return `<g class="totem-prop">${px(22, 20, 2, 3, PHONE_BODY)}${px(22, 21, 1, 1, '#E06060')}</g>`;
}
function controllerProp(): string {
  return `<g class="totem-prop">${px(10, 22, 5, 2, PHONE_BODY)}${px(11, 22, 1, 1, '#A04040')}${px(13, 22, 1, 1, '#4060A0')}</g>`;
}
function plateProp(): string {
  return `<g class="totem-prop">${px(6, 22, 5, 1, PAN)}${px(7, 21, 3, 1, '#E8E4DC')}</g>`;
}
function spongeProp(): string {
  return `<g class="totem-prop">${px(5, 19, 3, 2, '#E8D040')}</g>`;
}
function bowlProp(): string {
  return `<g class="totem-prop">${px(11, 19, 5, 2, PAN)}${px(12, 19, 3, 1, '#C8A040')}</g>`;
}
function markerProp(): string {
  return `<g class="totem-prop">${px(23, 7, 1, 3, '#E06060')}</g>`;
}
function shirtProp(): string {
  return `<g class="totem-prop">${px(3, 16, 3, 3, '#6080A0')}${px(26, 16, 3, 3, '#6080A0')}</g>`;
}
function phoneUpProp(): string {
  return `<g class="totem-prop">${px(12, 4, 5, 2, PHONE_BODY)}${px(13, 4, 3, 1, PHONE_SCREEN)}</g>`;
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
// Coordinates scaled by 2.56x from old 50x75 viewBox to 128x192

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

  .totem-shadow { transform-origin: 64px 180px; }

  /* ===== IDLE ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .totem-idle .totem-head {
    animation: totem-head-tilt 6s ease-in-out infinite;
    transform-origin: 64px 77px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 123px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: 33px 82px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: 95px 82px;
  }
  .totem-idle .totem-shadow {
    animation: totem-shadow-idle 2.8s ease-in-out infinite;
  }
  @keyframes totem-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
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
    transform-origin: 33px 82px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: 95px 82px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-stride-l 0.4s ease-in-out infinite alternate;
    transform-origin: 54px 128px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-stride-r 0.4s ease-in-out infinite alternate;
    transform-origin: 74px 128px;
  }
  .totem-walking .totem-shadow {
    animation: totem-shadow-walk 0.4s ease-in-out infinite;
  }
  @keyframes totem-walk-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
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
    transform-origin: 64px 77px;
  }
  .totem-studying .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 123px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: 33px 82px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    animation-delay: 0.08s;
    transform-origin: 95px 82px;
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
    transform-origin: 95px 82px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 64px 123px;
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
    transform-origin: 64px 120px;
  }
  .totem-sleeping .totem-body {
    animation: totem-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 64px 97px;
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
    transform-origin: 64px 123px;
  }
  .totem-napping .totem-head, .totem-meditating .totem-head {
    animation: totem-head-tilt 8s ease-in-out infinite;
    transform-origin: 64px 77px;
  }

  /* ===== READING ===== */
  .totem-reading .totem-character, .totem-reading-couch .totem-character {
    animation: totem-bob 3.2s ease-in-out infinite;
  }
  .totem-reading .totem-head, .totem-reading-couch .totem-head {
    animation: totem-head-tilt 4s ease-in-out infinite;
    transform-origin: 64px 77px;
  }
  .totem-reading .totem-body, .totem-reading-couch .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 64px 123px;
  }

  /* ===== WATCHING ===== */
  .totem-watching .totem-character {
    animation: totem-bob 4s ease-in-out infinite;
  }
  .totem-watching .totem-head {
    animation: totem-head-tilt 5s ease-in-out infinite;
    transform-origin: 64px 77px;
  }
  .totem-watching .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 64px 123px;
  }
`;
