export type Activity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: Activity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const P = 3;
const W = 16 * P;
const H = 24 * P;

// Detailed character palette
const HAIR = '#4A3728';
const HAIR_DARK = '#362618';
const HAIR_HI = '#5E4A38';
const SKIN = '#F0C8A0';
const SKIN_SHADOW = '#D4A878';
const SKIN_HI = '#FCE0C0';
const EYES = '#2D2D2D';
const EYE_WHITE = '#E8E8E8';
const BROW = '#3A2A1A';
const MOUTH = '#C48868';
const HOODIE = '#5B8DBE';
const HOODIE_DARK = '#3D6A94';
const HOODIE_HI = '#78A8D4';
const HOODIE_LOGO = '#F0C040';
const PANTS = '#4A4A5E';
const PANTS_DARK = '#363646';
const PANTS_HI = '#5A5A70';
const SHOES = '#6B4E37';
const SHOES_DARK = '#4A3525';
const SHOES_SOLE = '#3A2A1A';
const LACE = '#D0D0D0';
const WHITE = '#F5F5F0';

function r(x: number, y: number, fill: string): string {
  return `<rect x="${x * P}" y="${y * P}" width="${P}" height="${P}" fill="${fill}"/>`;
}

function headPixels(): string {
  const rows: string[] = [];
  // Hair top with highlight
  rows.push(r(5, 0, HAIR_DARK), r(6, 0, HAIR), r(7, 0, HAIR_HI), r(8, 0, HAIR_HI), r(9, 0, HAIR), r(10, 0, HAIR_DARK));
  // Hair row 1 — fuller with fringe
  rows.push(r(4, 1, HAIR_DARK), r(5, 1, HAIR), r(6, 1, HAIR_HI), r(7, 1, HAIR), r(8, 1, HAIR), r(9, 1, HAIR_HI), r(10, 1, HAIR), r(11, 1, HAIR_DARK));
  // Hair row 2 — sides frame face
  rows.push(r(3, 2, HAIR_DARK), r(4, 2, HAIR), r(5, 2, HAIR), r(6, 2, HAIR), r(7, 2, HAIR), r(8, 2, HAIR), r(9, 2, HAIR), r(10, 2, HAIR), r(11, 2, HAIR), r(12, 2, HAIR_DARK));
  // Forehead — skin shows under hair
  rows.push(r(3, 3, HAIR_DARK), r(4, 3, HAIR), r(5, 3, SKIN_HI), r(6, 3, SKIN_HI), r(7, 3, SKIN), r(8, 3, SKIN), r(9, 3, SKIN_HI), r(10, 3, SKIN_HI), r(11, 3, HAIR), r(12, 3, HAIR_DARK));
  // Eyebrows
  rows.push(r(3, 4, HAIR_DARK), r(4, 4, SKIN_SHADOW));
  rows.push(r(5, 4, BROW), r(6, 4, BROW));
  rows.push(r(7, 4, SKIN), r(8, 4, SKIN));
  rows.push(r(9, 4, BROW), r(10, 4, BROW));
  rows.push(r(11, 4, SKIN_SHADOW), r(12, 4, HAIR_DARK));
  // Eyes row
  rows.push(r(3, 5, HAIR_DARK), r(4, 5, SKIN_SHADOW));
  rows.push(r(5, 5, EYE_WHITE), r(6, 5, EYES));
  rows.push(r(7, 5, SKIN), r(8, 5, SKIN));
  rows.push(r(9, 5, EYE_WHITE), r(10, 5, EYES));
  rows.push(r(11, 5, SKIN_SHADOW), r(12, 5, HAIR_DARK));
  // Nose/cheeks
  rows.push(r(3, 6, HAIR_DARK), r(4, 6, SKIN_SHADOW));
  rows.push(r(5, 6, SKIN), r(6, 6, SKIN));
  rows.push(r(7, 6, SKIN_SHADOW), r(8, 6, SKIN_SHADOW));
  rows.push(r(9, 6, SKIN), r(10, 6, SKIN));
  rows.push(r(11, 6, SKIN_SHADOW), r(12, 6, HAIR_DARK));
  // Mouth/chin
  rows.push(r(4, 7, SKIN_SHADOW), r(5, 7, SKIN_SHADOW));
  rows.push(r(6, 7, SKIN), r(7, 7, MOUTH), r(8, 7, MOUTH), r(9, 7, SKIN));
  rows.push(r(10, 7, SKIN_SHADOW), r(11, 7, SKIN_SHADOW));
  return rows.join('');
}

function blinkOverlay(): string {
  // Skin-colored rects that cover eyes during blink animation
  return `<g class="totem-blink">${r(5, 5, SKIN)}${r(6, 5, SKIN)}${r(9, 5, SKIN)}${r(10, 5, SKIN)}</g>`;
}

function bodyPixels(): string {
  const rows: string[] = [];
  // Neck
  rows.push(r(6, 8, SKIN_SHADOW), r(7, 8, SKIN), r(8, 8, SKIN), r(9, 8, SKIN_SHADOW));
  // Hoodie collar
  rows.push(r(5, 9, HOODIE_DARK), r(6, 9, HOODIE_HI), r(7, 9, HOODIE_DARK), r(8, 9, HOODIE_DARK), r(9, 9, HOODIE_HI), r(10, 9, HOODIE_DARK));
  // Torso with detail
  for (let y = 10; y <= 14; y++) {
    rows.push(r(5, y, HOODIE_DARK));
    rows.push(r(6, y, HOODIE));
    rows.push(r(7, y, y === 11 ? HOODIE_HI : HOODIE));
    rows.push(r(8, y, y === 11 ? HOODIE_HI : HOODIE));
    rows.push(r(9, y, HOODIE));
    rows.push(r(10, y, HOODIE_DARK));
  }
  // Hoodie logo/emblem
  rows.push(r(7, 12, HOODIE_LOGO), r(8, 12, HOODIE_LOGO));
  // Belt/waistband
  rows.push(r(5, 15, PANTS_DARK), r(6, 15, PANTS_DARK), r(7, 15, PANTS_HI), r(8, 15, PANTS_HI), r(9, 15, PANTS_DARK), r(10, 15, PANTS_DARK));
  return rows.join('');
}

function leftArmPixels(): string {
  const rows: string[] = [];
  // Shoulder
  rows.push(r(4, 9, HOODIE_DARK));
  // Upper arm
  rows.push(r(3, 10, HOODIE_DARK), r(4, 10, HOODIE));
  rows.push(r(3, 11, HOODIE_DARK), r(4, 11, HOODIE_HI));
  rows.push(r(3, 12, HOODIE_DARK), r(4, 12, HOODIE));
  // Wrist
  rows.push(r(3, 13, HOODIE_DARK), r(4, 13, HOODIE_DARK));
  // Hand with detail
  rows.push(r(3, 14, SKIN_SHADOW), r(4, 14, SKIN));
  return rows.join('');
}

function rightArmPixels(): string {
  const rows: string[] = [];
  // Shoulder
  rows.push(r(11, 9, HOODIE_DARK));
  // Upper arm
  rows.push(r(11, 10, HOODIE), r(12, 10, HOODIE_DARK));
  rows.push(r(11, 11, HOODIE_HI), r(12, 11, HOODIE_DARK));
  rows.push(r(11, 12, HOODIE), r(12, 12, HOODIE_DARK));
  // Wrist
  rows.push(r(11, 13, HOODIE_DARK), r(12, 13, HOODIE_DARK));
  // Hand
  rows.push(r(11, 14, SKIN), r(12, 14, SKIN_SHADOW));
  return rows.join('');
}

function leftLegPixels(): string {
  const rows: string[] = [];
  // Upper leg
  rows.push(r(6, 16, PANTS_DARK), r(7, 16, PANTS));
  rows.push(r(6, 17, PANTS_DARK), r(7, 17, PANTS_HI));
  // Lower leg
  rows.push(r(6, 18, PANTS_DARK), r(7, 18, PANTS));
  rows.push(r(6, 19, PANTS_DARK), r(7, 19, PANTS));
  // Shoe with detail
  rows.push(r(5, 20, SHOES_DARK), r(6, 20, SHOES), r(7, 20, SHOES));
  rows.push(r(6, 20, LACE)); // lace accent
  rows.push(r(5, 21, SHOES_SOLE), r(6, 21, SHOES_SOLE), r(7, 21, SHOES_SOLE));
  return rows.join('');
}

function rightLegPixels(): string {
  const rows: string[] = [];
  // Upper leg
  rows.push(r(8, 16, PANTS), r(9, 16, PANTS_DARK));
  rows.push(r(8, 17, PANTS_HI), r(9, 17, PANTS_DARK));
  // Lower leg
  rows.push(r(8, 18, PANTS), r(9, 18, PANTS_DARK));
  rows.push(r(8, 19, PANTS), r(9, 19, PANTS_DARK));
  // Shoe with detail
  rows.push(r(8, 20, SHOES), r(9, 20, SHOES), r(10, 20, SHOES_DARK));
  rows.push(r(9, 20, LACE)); // lace accent
  rows.push(r(8, 21, SHOES_SOLE), r(9, 21, SHOES_SOLE), r(10, 21, SHOES_SOLE));
  return rows.join('');
}

function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="${8 * P}" cy="${22.5 * P}" rx="${3.5 * P}" ry="${0.8 * P}" fill="#000" opacity="0.15"/>`;
}

function sleepingZzz(): string {
  return `<g class="totem-zzz">
    <text x="${13 * P}" y="${2 * P}" fill="${WHITE}" font-size="${P * 2.5}px" font-family="monospace" opacity="0">Z</text>
    <text x="${14 * P}" y="${5 * P}" fill="${WHITE}" font-size="${P * 2}px" font-family="monospace" opacity="0">z</text>
    <text x="${13 * P}" y="${7 * P}" fill="${WHITE}" font-size="${P * 1.5}px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

export function getTotemSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as Activity) ? activity : 'idle') as Activity;

  const parts = [
    groundShadow(),
    `<g class="totem-character">`,
    `<g class="totem-left-leg">${leftLegPixels()}</g>`,
    `<g class="totem-right-leg">${rightLegPixels()}</g>`,
    `<g class="totem-body">${bodyPixels()}</g>`,
    `<g class="totem-left-arm">${leftArmPixels()}</g>`,
    `<g class="totem-right-arm">${rightArmPixels()}</g>`,
    `<g class="totem-head">${headPixels()}${act !== 'sleeping' ? blinkOverlay() : ''}</g>`,
    `</g>`,
  ];

  if (act === 'sleeping') {
    parts.push(sleepingZzz());
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="totem-avatar totem-${act}" shape-rendering="crispEdges">
  ${parts.join('')}
</svg>`;
}

export const totemStyles = `
  .totem-avatar {
    width: 100%;
    height: auto;
    display: block;
    image-rendering: pixelated;
  }

  /* ===== EYE BLINK ===== */
  .totem-blink {
    opacity: 0;
  }
  .totem-avatar:not(.totem-sleeping) .totem-blink {
    animation: totem-blink 4s step-end infinite;
  }
  @keyframes totem-blink {
    0%, 90%, 100% { opacity: 0; }
    93%, 97% { opacity: 1; }
  }

  /* ===== GROUND SHADOW ===== */
  .totem-shadow {
    transform-origin: ${8 * P}px ${22.5 * P}px;
  }

  /* ===== IDLE — bob + breathe + gentle sway ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.5s ease-in-out infinite;
  }
  .totem-idle .totem-head {
    animation: totem-idle-head 5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 3s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-idle .totem-shadow {
    animation: totem-shadow-idle 2.5s ease-in-out infinite;
  }
  @keyframes totem-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P}px); }
  }
  @keyframes totem-idle-head {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(1.5deg); }
    70% { transform: rotate(-1.5deg); }
  }
  @keyframes totem-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.018); }
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
    0%, 100% { transform: scaleX(1); opacity: 0.15; }
    50% { transform: scaleX(0.9); opacity: 0.1; }
  }

  /* ===== WALKING — full walk cycle ===== */
  .totem-walking .totem-character {
    animation: totem-walk-bob 0.35s ease-in-out infinite;
  }
  .totem-walking .totem-head {
    animation: totem-walk-head 0.35s ease-in-out infinite;
  }
  .totem-walking .totem-left-arm {
    animation: totem-arm-swing-l 0.35s ease-in-out infinite alternate;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.35s ease-in-out infinite alternate;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-leg-l 0.35s ease-in-out infinite alternate;
    transform-origin: ${7 * P}px ${16 * P}px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-leg-r 0.35s ease-in-out infinite alternate;
    transform-origin: ${8 * P}px ${16 * P}px;
  }
  .totem-walking .totem-shadow {
    animation: totem-shadow-walk 0.35s ease-in-out infinite;
  }
  @keyframes totem-walk-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P}px); }
  }
  @keyframes totem-walk-head {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${Math.round(P * 0.5)}px); }
  }
  @keyframes totem-arm-swing-l {
    0% { transform: rotate(-22deg); }
    100% { transform: rotate(22deg); }
  }
  @keyframes totem-arm-swing-r {
    0% { transform: rotate(22deg); }
    100% { transform: rotate(-22deg); }
  }
  @keyframes totem-leg-l {
    0% { transform: rotate(-14deg); }
    100% { transform: rotate(14deg); }
  }
  @keyframes totem-leg-r {
    0% { transform: rotate(14deg); }
    100% { transform: rotate(-14deg); }
  }
  @keyframes totem-shadow-walk {
    0%, 100% { transform: scaleX(1); opacity: 0.15; }
    50% { transform: scaleX(0.8); opacity: 0.08; }
  }

  /* ===== STUDYING — seated, typing ===== */
  .totem-studying .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-studying .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-studying .totem-character {
    animation: totem-study-settle 3s ease-in-out infinite;
  }
  .totem-studying .totem-head {
    animation: totem-study-head 2.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-studying .totem-body {
    animation: totem-study-lean 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 0.25s ease-in-out infinite alternate;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 0.25s ease-in-out infinite alternate;
    transform-origin: ${11 * P}px ${9 * P}px;
    animation-delay: 0.08s;
  }
  .totem-studying .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-study-settle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(${Math.round(P * 0.3)}px); }
  }
  @keyframes totem-study-head {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    30% { transform: rotate(-2deg) translateY(${Math.round(P * 0.5)}px); }
    70% { transform: rotate(1deg) translateY(0); }
  }
  @keyframes totem-study-lean {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(1.5deg); }
  }
  @keyframes totem-type-l {
    0% { transform: rotate(-6deg) translateY(0); }
    100% { transform: rotate(4deg) translateY(-${P}px); }
  }
  @keyframes totem-type-r {
    0% { transform: rotate(6deg) translateY(0); }
    100% { transform: rotate(-4deg) translateY(-${P}px); }
  }

  /* ===== COOKING — stir + hold + sway ===== */
  .totem-cooking .totem-character {
    animation: totem-cook-sway 1.5s ease-in-out infinite;
  }
  .totem-cooking .totem-head {
    animation: totem-cook-head 2s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-cooking .totem-right-arm {
    animation: totem-stir 0.7s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-cooking .totem-left-arm {
    animation: totem-cook-hold 1.2s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-cooking .totem-shadow {
    animation: totem-shadow-idle 1.5s ease-in-out infinite;
  }
  @keyframes totem-cook-sway {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${Math.round(P * 0.5)}px); }
  }
  @keyframes totem-cook-head {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-4deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(3deg); }
  }
  @keyframes totem-stir {
    0% { transform: rotate(0deg) translateY(-${P}px); }
    25% { transform: rotate(14deg) translateY(-${P * 2}px); }
    50% { transform: rotate(0deg) translateY(-${P}px); }
    75% { transform: rotate(-14deg) translateY(-${P * 2}px); }
  }
  @keyframes totem-cook-hold {
    0%, 100% { transform: rotate(-10deg) translateY(-${P}px); }
    50% { transform: rotate(-6deg) translateY(-${Math.round(P * 0.5)}px); }
  }

  /* ===== SLEEPING — lay down + breathe + zzz ===== */
  .totem-sleeping {
    transform: rotate(90deg) scale(0.8);
    transform-origin: center center;
  }
  .totem-sleeping .totem-shadow {
    opacity: 0;
  }
  .totem-sleeping .totem-body {
    animation: totem-sleep-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${12 * P}px;
  }
  .totem-sleeping .totem-left-arm {
    animation: totem-sleep-arm 4s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
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
  @keyframes totem-sleep-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.04); }
  }
  @keyframes totem-sleep-arm {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-3deg); }
  }
  @keyframes totem-zzz {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 1; }
    85% { opacity: 0.7; }
    100% { opacity: 0; transform: translate(${P}px, -${P * 4}px); }
  }
  @keyframes totem-zzz-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.9; }
    85% { opacity: 0.6; }
    100% { opacity: 0; transform: translate(-${P}px, -${P * 3}px); }
  }
  @keyframes totem-zzz-3 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; }
    85% { opacity: 0.5; }
    100% { opacity: 0; transform: translate(${Math.round(P * 0.5)}px, -${P * 2}px); }
  }
`;
