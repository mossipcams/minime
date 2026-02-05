export type Activity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: Activity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const P = 3;
const W = 16 * P;
const H = 24 * P;

// Character palette — pixel person in totem art style
const HAIR = '#4A3728';
const HAIR_DARK = '#362618';
const SKIN = '#F0C8A0';
const SKIN_SHADOW = '#D4A878';
const EYES = '#2D2D2D';
const HOODIE = '#5B8DBE';
const HOODIE_DARK = '#3D6A94';
const PANTS = '#4A4A5E';
const PANTS_DARK = '#363646';
const SHOES = '#6B4E37';
const WHITE = '#F5F5F0';

function r(x: number, y: number, fill: string): string {
  return `<rect x="${x * P}" y="${y * P}" width="${P}" height="${P}" fill="${fill}"/>`;
}

function headPixels(): string {
  const rows: string[] = [];
  // Hair top row
  for (let x = 4; x <= 11; x++) rows.push(r(x, 0, HAIR));
  // Hair sides + face fill (rows 1-6)
  for (let y = 1; y <= 2; y++) {
    rows.push(r(3, y, HAIR_DARK));
    rows.push(r(12, y, HAIR_DARK));
    rows.push(r(4, y, HAIR));
    rows.push(r(11, y, HAIR));
    for (let x = 5; x <= 10; x++) rows.push(r(x, y, HAIR));
  }
  // Face rows
  for (let y = 3; y <= 6; y++) {
    rows.push(r(3, y, HAIR_DARK));
    rows.push(r(12, y, HAIR_DARK));
    rows.push(r(4, y, SKIN_SHADOW));
    rows.push(r(11, y, SKIN_SHADOW));
    for (let x = 5; x <= 10; x++) rows.push(r(x, y, SKIN));
  }
  // Chin row
  for (let x = 5; x <= 10; x++) rows.push(r(x, 7, SKIN_SHADOW));
  rows.push(r(4, 7, HAIR_DARK));
  rows.push(r(11, 7, HAIR_DARK));
  // Eyes
  rows.push(r(6, 4, EYES), r(9, 4, EYES));
  // Mouth
  rows.push(r(7, 6, SKIN_SHADOW), r(8, 6, SKIN_SHADOW));
  return rows.join('');
}

function bodyPixels(): string {
  const rows: string[] = [];
  // Hoodie torso (rows 8-15)
  for (let y = 8; y <= 15; y++) {
    rows.push(r(5, y, HOODIE_DARK));
    rows.push(r(10, y, HOODIE_DARK));
    for (let x = 6; x <= 9; x++) rows.push(r(x, y, HOODIE));
  }
  // Hoodie pocket detail
  rows.push(r(7, 13, HOODIE_DARK), r(8, 13, HOODIE_DARK));
  return rows.join('');
}

function leftArmPixels(): string {
  const rows: string[] = [];
  for (let y = 8; y <= 12; y++) {
    rows.push(r(3, y, HOODIE_DARK));
    rows.push(r(4, y, HOODIE));
  }
  // Hand
  rows.push(r(3, 13, SKIN_SHADOW), r(4, 13, SKIN));
  return rows.join('');
}

function rightArmPixels(): string {
  const rows: string[] = [];
  for (let y = 8; y <= 12; y++) {
    rows.push(r(11, y, HOODIE));
    rows.push(r(12, y, HOODIE_DARK));
  }
  // Hand
  rows.push(r(11, 13, SKIN), r(12, 13, SKIN_SHADOW));
  return rows.join('');
}

function leftLegPixels(): string {
  const rows: string[] = [];
  for (let y = 16; y <= 19; y++) {
    rows.push(r(6, y, PANTS_DARK));
    rows.push(r(7, y, PANTS));
  }
  // Shoe
  rows.push(r(5, 20, SHOES), r(6, 20, SHOES), r(7, 20, SHOES));
  return rows.join('');
}

function rightLegPixels(): string {
  const rows: string[] = [];
  for (let y = 16; y <= 19; y++) {
    rows.push(r(8, y, PANTS));
    rows.push(r(9, y, PANTS_DARK));
  }
  // Shoe
  rows.push(r(8, 20, SHOES), r(9, 20, SHOES), r(10, 20, SHOES));
  return rows.join('');
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
    `<g class="totem-head">${headPixels()}</g>`,
    `<g class="totem-body">${bodyPixels()}</g>`,
    `<g class="totem-left-arm">${leftArmPixels()}</g>`,
    `<g class="totem-right-arm">${rightArmPixels()}</g>`,
    `<g class="totem-left-leg">${leftLegPixels()}</g>`,
    `<g class="totem-right-leg">${rightLegPixels()}</g>`,
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

  .totem-idle {
    animation: totem-bob 1.5s ease-in-out infinite;
  }
  @keyframes totem-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  .totem-walking .totem-left-arm {
    animation: totem-arm-swing-l 0.4s ease-in-out infinite alternate;
    transform-origin: ${4 * P}px ${8 * P}px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: ${11 * P}px ${8 * P}px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-leg-l 0.4s ease-in-out infinite alternate;
  }
  .totem-walking .totem-right-leg {
    animation: totem-leg-r 0.4s ease-in-out infinite alternate;
  }
  @keyframes totem-arm-swing-l {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }
  @keyframes totem-arm-swing-r {
    0% { transform: rotate(15deg); }
    100% { transform: rotate(-15deg); }
  }
  @keyframes totem-leg-l {
    0% { transform: translateY(-2px); }
    100% { transform: translateY(2px); }
  }
  @keyframes totem-leg-r {
    0% { transform: translateY(2px); }
    100% { transform: translateY(-2px); }
  }

  .totem-studying .totem-left-leg,
  .totem-studying .totem-right-leg {
    transform: rotate(90deg) translateX(${2 * P}px);
    transform-origin: ${7 * P}px ${16 * P}px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 0.6s ease-in-out infinite alternate;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 0.6s ease-in-out infinite alternate;
    animation-delay: 0.15s;
  }
  @keyframes totem-type-l {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P}px); }
  }
  @keyframes totem-type-r {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P}px); }
  }

  .totem-cooking .totem-right-arm {
    animation: totem-stir 0.8s ease-in-out infinite;
    transform-origin: ${11 * P}px ${8 * P}px;
  }
  @keyframes totem-stir {
    0%, 100% { transform: rotate(0deg) translateY(-${P}px); }
    25% { transform: rotate(10deg) translateY(-${P * 2}px); }
    50% { transform: rotate(0deg) translateY(-${P}px); }
    75% { transform: rotate(-10deg) translateY(-${P * 2}px); }
  }
  .totem-cooking {
    animation: totem-bob 1.5s ease-in-out infinite;
  }

  .totem-sleeping {
    transform: rotate(90deg) scale(0.8);
    transform-origin: center center;
  }
  .totem-sleeping .totem-zzz text:nth-child(1) {
    animation: totem-zzz 2s ease-in-out infinite;
  }
  .totem-sleeping .totem-zzz text:nth-child(2) {
    animation: totem-zzz 2s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  .totem-sleeping .totem-zzz text:nth-child(3) {
    animation: totem-zzz 2s ease-in-out infinite;
    animation-delay: 1s;
  }
  @keyframes totem-zzz {
    0% { opacity: 0; transform: translateY(0); }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-${P * 3}px); }
  }
`;
