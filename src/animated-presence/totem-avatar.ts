export type Activity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: Activity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const P = 3;
const W = 16 * P;
const H = 24 * P;

const GOLD = '#E8B84B';
const DARK_GOLD = '#A67C2E';
const EMERALD = '#4CAF50';
const DARK = '#2D2D2D';
const WHITE = '#F5F5F0';

function r(x: number, y: number, fill: string): string {
  return `<rect x="${x * P}" y="${y * P}" width="${P}" height="${P}" fill="${fill}"/>`;
}

function headPixels(): string {
  const rows: string[] = [];
  for (let x = 4; x <= 11; x++) rows.push(r(x, 0, DARK_GOLD));
  for (let y = 1; y <= 6; y++) {
    rows.push(r(3, y, DARK_GOLD));
    rows.push(r(12, y, DARK_GOLD));
    for (let x = 4; x <= 11; x++) rows.push(r(x, y, GOLD));
  }
  for (let x = 4; x <= 11; x++) rows.push(r(x, 7, DARK_GOLD));
  rows.push(r(5, 3, DARK), r(6, 3, DARK), r(9, 3, DARK), r(10, 3, DARK));
  rows.push(r(7, 4, DARK_GOLD), r(8, 4, DARK_GOLD));
  rows.push(r(6, 5, DARK_GOLD), r(9, 5, DARK_GOLD));
  rows.push(r(7, 1, EMERALD), r(8, 1, EMERALD));
  return rows.join('');
}

function bodyPixels(): string {
  const rows: string[] = [];
  for (let y = 8; y <= 15; y++) {
    rows.push(r(5, y, DARK_GOLD));
    rows.push(r(10, y, DARK_GOLD));
    for (let x = 6; x <= 9; x++) rows.push(r(x, y, GOLD));
  }
  rows.push(r(7, 9, EMERALD), r(8, 9, EMERALD));
  rows.push(r(7, 10, EMERALD), r(8, 10, EMERALD));
  return rows.join('');
}

function leftArmPixels(): string {
  const rows: string[] = [];
  for (let y = 8; y <= 11; y++) {
    rows.push(r(3, y, DARK_GOLD));
    rows.push(r(4, y, GOLD));
  }
  return rows.join('');
}

function rightArmPixels(): string {
  const rows: string[] = [];
  for (let y = 8; y <= 11; y++) {
    rows.push(r(11, y, GOLD));
    rows.push(r(12, y, DARK_GOLD));
  }
  return rows.join('');
}

function leftLegPixels(): string {
  const rows: string[] = [];
  for (let y = 16; y <= 19; y++) {
    rows.push(r(6, y, DARK_GOLD));
    rows.push(r(7, y, GOLD));
  }
  return rows.join('');
}

function rightLegPixels(): string {
  const rows: string[] = [];
  for (let y = 16; y <= 19; y++) {
    rows.push(r(8, y, GOLD));
    rows.push(r(9, y, DARK_GOLD));
  }
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
