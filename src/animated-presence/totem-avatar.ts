// Minimal geometric human avatar — viewBox 0 0 50 75
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

const W = 50;
const H = 75;

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

// ===== HEAD =====

function awakeHead(): string {
  const p: string[] = [];
  p.push(`<circle cx="25" cy="18" r="12" fill="${SKIN}"/>`);
  p.push(`<path class="totem-hair" d="M13,16 Q13,4 25,4 Q37,4 37,16 Q34,10 25,10 Q16,10 13,16 Z" fill="${HAIR}"/>`);
  p.push(`<circle cx="20" cy="20" r="1.8" fill="${EYES}"/>`);
  p.push(`<circle cx="30" cy="20" r="1.8" fill="${EYES}"/>`);
  return p.join('');
}

function sleepingHead(): string {
  const p: string[] = [];
  p.push(`<circle cx="25" cy="18" r="12" fill="${SKIN}"/>`);
  p.push(`<path class="totem-hair" d="M13,16 Q13,4 25,4 Q37,4 37,16 Q34,10 25,10 Q16,10 13,16 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M17,20 Q20,23 23,20" fill="none" stroke="${EYES}" stroke-width="1.5" stroke-linecap="round"/>`);
  p.push(`<path d="M27,20 Q30,23 33,20" fill="none" stroke="${EYES}" stroke-width="1.5" stroke-linecap="round"/>`);
  return p.join('');
}

// ===== BODY PARTS =====

function bodyRect(): string {
  return `<rect x="17" y="30" width="16" height="20" rx="5" fill="${HOODIE}"/>`;
}
function leftArm(): string {
  return `<rect x="9" y="32" width="8" height="5" rx="2.5" fill="${HOODIE}"/>`;
}
function rightArm(): string {
  return `<rect x="33" y="32" width="8" height="5" rx="2.5" fill="${HOODIE}"/>`;
}
function leftLeg(): string {
  return `<rect x="18" y="50" width="6" height="14" rx="2.5" fill="${PANTS}"/><rect x="17" y="62" width="7" height="4" rx="2" fill="${SHOES}"/>`;
}
function rightLeg(): string {
  return `<rect x="26" y="50" width="6" height="14" rx="2.5" fill="${PANTS}"/><rect x="26" y="62" width="7" height="4" rx="2" fill="${SHOES}"/>`;
}
function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="25" cy="68" rx="12" ry="2.5" fill="#000" opacity="0.12"/>`;
}

// ===== SLEEPING EXTRAS =====

function pillow(): string {
  return `<rect x="10" y="14" width="30" height="10" rx="5" fill="${PILLOW_FILL}"/>`;
}
function blanket(): string {
  return `<g class="totem-blanket"><rect x="10" y="32" width="30" height="28" rx="4" fill="${BLANKET_COLOR}"/><rect x="10" y="32" width="30" height="6" rx="3" fill="${BLANKET_HI}"/></g>`;
}
function sleepingZzz(): string {
  return `<g class="totem-zzz">
    <text x="38" y="5" fill="${WHITE}" font-size="7px" font-family="monospace" opacity="0">Z</text>
    <text x="40" y="13" fill="${WHITE}" font-size="6px" font-family="monospace" opacity="0">z</text>
    <text x="38" y="19" fill="${WHITE}" font-size="5px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

// ===== FLOAT EFFECTS =====

function codeFloat(): string {
  return `<g class="totem-code-float">
    <text x="3" y="6" fill="#7ABCE0" font-size="7px" font-family="monospace" opacity="0">&lt;/&gt;</text>
    <text x="38" y="10" fill="#A0D070" font-size="6px" font-family="monospace" opacity="0">{ }</text>
  </g>`;
}
function steamFloat(): string {
  return `<g class="totem-steam-float">
    <text x="38" y="10" fill="#E8E8E8" font-size="6px" font-family="sans-serif" opacity="0">~</text>
    <text x="40" y="16" fill="#D0D0D0" font-size="5px" font-family="sans-serif" opacity="0">~</text>
  </g>`;
}

// ===== PROPS =====

function laptopProp(): string {
  return `<g class="totem-prop"><rect x="13" y="35" width="24" height="7" rx="1.5" fill="${LAPTOP_FRAME}"/><rect x="14.5" y="36" width="21" height="5" rx="1" fill="${LAPTOP_SCREEN}"/><rect x="12" y="42" width="26" height="3" rx="1.5" fill="${LAPTOP_FRAME}"/></g>`;
}
function panProp(): string {
  return `<g class="totem-prop"><ellipse cx="40" cy="40" rx="5" ry="3" fill="${PAN}"/><rect x="44" y="39" width="4" height="2.5" rx="1" fill="${PAN_HANDLE}"/></g>`;
}
function phoneProp(): string {
  return `<g class="totem-prop"><rect x="39" y="39" width="5" height="8" rx="1.2" fill="${PHONE_BODY}"/><rect x="40" y="40.5" width="3" height="5" rx="0.6" fill="${PHONE_SCREEN}"/></g>`;
}
function bookProp(): string {
  return `<g class="totem-prop"><rect x="6" y="35" width="8" height="10" rx="1.5" fill="#5A3020"/><rect x="7.5" y="36" width="5.5" height="8" rx="0.8" fill="#E8D8C0"/></g>`;
}
function mugProp(): string {
  return `<g class="totem-prop"><rect x="39" y="36" width="6" height="7" rx="2" fill="#A05830"/><path d="M45,38 Q48,39.5 45,41" fill="none" stroke="#8A4820" stroke-width="1.2" stroke-linecap="round"/></g>`;
}
function remoteProp(): string {
  return `<g class="totem-prop"><rect x="39" y="41" width="3.5" height="7" rx="1.2" fill="${PHONE_BODY}"/><circle cx="40.8" cy="43" r="0.7" fill="#E06060"/></g>`;
}
function controllerProp(): string {
  return `<g class="totem-prop"><rect x="13" y="42" width="10" height="5" rx="2" fill="${PHONE_BODY}"/><circle cx="16" cy="44.5" r="1" fill="#A04040"/><circle cx="20" cy="44.5" r="1" fill="#4060A0"/></g>`;
}
function plateProp(): string {
  return `<g class="totem-prop"><ellipse cx="12" cy="43" rx="6" ry="2" fill="${PAN}"/><ellipse cx="12" cy="42.5" rx="4.5" ry="1.5" fill="#E8E4DC"/></g>`;
}
function spongeProp(): string {
  return `<g class="totem-prop"><rect x="5" y="38" width="5.5" height="4" rx="1.5" fill="#E8D040"/></g>`;
}
function bowlProp(): string {
  return `<g class="totem-prop"><ellipse cx="19" cy="38" rx="6" ry="3" fill="${PAN}"/><ellipse cx="19" cy="37.5" rx="4" ry="2" fill="#C8A040" opacity="0.6"/></g>`;
}
function markerProp(): string {
  return `<g class="totem-prop"><rect x="40" y="14" width="2.2" height="6" rx="0.8" fill="#E06060"/></g>`;
}
function shirtProp(): string {
  return `<g class="totem-prop"><rect x="2" y="28" width="6" height="6" rx="1.5" fill="#6080A0"/><rect x="42" y="28" width="6" height="6" rx="1.5" fill="#6080A0"/></g>`;
}
function phoneUpProp(): string {
  return `<g class="totem-prop"><rect x="19" y="8" width="12" height="6" rx="1.5" fill="${PHONE_BODY}"/><rect x="20" y="9" width="10" height="4" rx="1" fill="${PHONE_SCREEN}"/></g>`;
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

export function getTotemSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as Activity) ? activity : 'idle') as Activity;
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

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="totem-avatar totem-${act}">${parts.join('')}</svg>`;
}

// ===== STYLES =====

export const totemStyles = `
  .totem-avatar { width: 100%; height: auto; display: block; }

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

  .totem-shadow { transform-origin: 25px 68px; }

  /* ===== IDLE ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .totem-idle .totem-head {
    animation: totem-head-tilt 6s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: 13px 32px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: 37px 32px;
  }
  .totem-idle .totem-shadow {
    animation: totem-shadow-idle 2.8s ease-in-out infinite;
  }
  @keyframes totem-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
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
    transform-origin: 13px 32px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: 37px 32px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-stride-l 0.4s ease-in-out infinite alternate;
    transform-origin: 21px 50px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-stride-r 0.4s ease-in-out infinite alternate;
    transform-origin: 29px 50px;
  }
  .totem-walking .totem-shadow {
    animation: totem-shadow-walk 0.4s ease-in-out infinite;
  }
  @keyframes totem-walk-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
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
    transform-origin: 25px 30px;
  }
  .totem-studying .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: 13px 32px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    animation-delay: 0.08s;
    transform-origin: 37px 32px;
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
    transform-origin: 37px 32px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 48px;
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
    15% { opacity: 0.9; transform: translate(1.5px, -2px); }
    85% { opacity: 0.5; transform: translate(3px, -10px); }
    100% { opacity: 0; transform: translate(4px, -13px); }
  }
  @keyframes totem-code-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.8; transform: translate(-1px, -1.5px); }
    85% { opacity: 0.4; transform: translate(-3px, -8px); }
    100% { opacity: 0; transform: translate(-4px, -10px); }
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
    15% { opacity: 0.7; transform: translate(1px, -2px); }
    85% { opacity: 0.2; transform: translate(-1.5px, -10px); }
    100% { opacity: 0; transform: translate(-2px, -13px); }
  }
  @keyframes totem-steam-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.6; transform: translate(1.5px, -1.5px); }
    85% { opacity: 0.15; transform: translate(3px, -8px); }
    100% { opacity: 0; transform: translate(4px, -10px); }
  }

  /* ===== SLEEPING ===== */
  .totem-sleeping {
    transform: rotate(-90deg) scale(0.9);
    transform-origin: center center;
  }
  .totem-sleeping .totem-shadow { opacity: 0; }
  .totem-sleeping .totem-blanket {
    animation: totem-blanket-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 25px 47px;
  }
  .totem-sleeping .totem-body {
    animation: totem-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 25px 38px;
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
    15% { opacity: 1; transform: translate(1px, -1.5px); }
    85% { opacity: 0.7; transform: translate(2px, -9px); }
    100% { opacity: 0; transform: translate(3px, -10px); }
  }
  @keyframes totem-zzz-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.9; transform: translate(-0.6px, -1px); }
    85% { opacity: 0.6; transform: translate(-2.5px, -7px); }
    100% { opacity: 0; transform: translate(-3px, -8px); }
  }
  @keyframes totem-zzz-3 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; transform: translate(0.3px, -0.6px); }
    85% { opacity: 0.5; transform: translate(1.2px, -5px); }
    100% { opacity: 0; transform: translate(1.5px, -6px); }
  }

  /* ===== NAPPING/MEDITATING ===== */
  .totem-napping .totem-body, .totem-meditating .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
  .totem-napping .totem-head, .totem-meditating .totem-head {
    animation: totem-head-tilt 8s ease-in-out infinite;
    transform-origin: 25px 30px;
  }

  /* ===== READING ===== */
  .totem-reading .totem-character, .totem-reading-couch .totem-character {
    animation: totem-bob 3.2s ease-in-out infinite;
  }
  .totem-reading .totem-head, .totem-reading-couch .totem-head {
    animation: totem-head-tilt 4s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-reading .totem-body, .totem-reading-couch .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 48px;
  }

  /* ===== WATCHING ===== */
  .totem-watching .totem-character {
    animation: totem-bob 4s ease-in-out infinite;
  }
  .totem-watching .totem-head {
    animation: totem-head-tilt 5s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-watching .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
`;
