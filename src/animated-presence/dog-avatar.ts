// Mini dachshund pixel art sprite
// 12x8 px grid, P=3 scale = 36x24px rendered
// Palette: Black (#1A1A1A), tan (#C8943C), dark tan (#A07830), nose (#2D2D2D), eye highlight (#FFF)

export type DogActivity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: DogActivity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const P = 3;
const W = 12 * P;
const H = 8 * P;

// Dachshund palette
const BLACK = '#1A1A1A';
const BLACK_HI = '#2D2D2D';
const TAN = '#C8943C';
const TAN_DARK = '#A07830';
const NOSE = '#2D2D2D';
const EYE_HI = '#FFF';
const TONGUE = '#E06060';

function r(x: number, y: number, fill: string): string {
  return `<rect x="${x * P}" y="${y * P}" width="${P}" height="${P}" fill="${fill}"/>`;
}

// === BODY PARTS ===

function bodyPixels(): string {
  const rows: string[] = [];
  // Long dachshund body (rows 3-5, cols 2-9)
  // Back line
  rows.push(r(3, 2, BLACK), r(4, 2, BLACK), r(5, 2, BLACK), r(6, 2, BLACK), r(7, 2, BLACK), r(8, 2, BLACK));
  // Upper body
  rows.push(r(2, 3, BLACK), r(3, 3, BLACK), r(4, 3, BLACK_HI), r(5, 3, BLACK_HI), r(6, 3, BLACK_HI), r(7, 3, BLACK), r(8, 3, BLACK), r(9, 3, BLACK));
  // Belly with tan
  rows.push(r(2, 4, BLACK), r(3, 4, TAN_DARK), r(4, 4, TAN), r(5, 4, TAN), r(6, 4, TAN), r(7, 4, TAN_DARK), r(8, 4, BLACK), r(9, 4, BLACK));
  // Lower belly
  rows.push(r(3, 5, TAN_DARK), r(4, 5, TAN), r(5, 5, TAN), r(6, 5, TAN), r(7, 5, TAN_DARK));
  return rows.join('');
}

function headPixels(): string {
  const rows: string[] = [];
  // Head (left side of body)
  rows.push(r(0, 2, BLACK), r(1, 2, BLACK));
  rows.push(r(0, 3, BLACK), r(1, 3, BLACK_HI));
  // Eye
  rows.push(r(0, 3, BLACK), r(1, 3, EYE_HI));
  // Snout
  rows.push(r(0, 4, NOSE), r(1, 4, TAN));
  return rows.join('');
}

function earPixels(): string {
  return `<g class="dog-ear">${r(1, 1, BLACK)}${r(2, 1, BLACK)}</g>`;
}

function tailPixels(): string {
  return `<g class="dog-tail">${r(10, 1, BLACK)}${r(10, 2, BLACK)}</g>`;
}

function tonguePixels(): string {
  // Two pink pixels at (0, 5) and (1, 5) for tongue
  return `<g class="dog-tongue" style="opacity: 0">${r(0, 5, TONGUE)}${r(1, 5, TONGUE)}</g>`;
}

function frontLegPixels(): string {
  const rows: string[] = [];
  // Front legs (cols 2-3)
  rows.push(r(2, 5, BLACK), r(3, 6, TAN_DARK), r(2, 6, BLACK));
  rows.push(r(2, 7, BLACK_HI), r(3, 7, BLACK_HI));
  return rows.join('');
}

function backLegPixels(): string {
  const rows: string[] = [];
  // Back legs (cols 8-9)
  rows.push(r(8, 5, BLACK), r(9, 5, BLACK));
  rows.push(r(8, 6, TAN_DARK), r(9, 6, BLACK));
  rows.push(r(8, 7, BLACK_HI), r(9, 7, BLACK_HI));
  return rows.join('');
}

function legPixels(): string {
  const rows: string[] = [];
  // Front legs
  rows.push(r(2, 5, BLACK), r(3, 6, TAN_DARK), r(2, 6, BLACK));
  rows.push(r(2, 7, BLACK_HI), r(3, 7, BLACK_HI));
  // Back legs
  rows.push(r(8, 5, BLACK), r(9, 5, BLACK));
  rows.push(r(8, 6, TAN_DARK), r(9, 6, BLACK));
  rows.push(r(8, 7, BLACK_HI), r(9, 7, BLACK_HI));
  return rows.join('');
}

// === SLEEPING POSE (curled up) ===

function sleepingPixels(): string {
  const rows: string[] = [];
  // Curled up dachshund — circular shape
  rows.push(r(3, 1, BLACK), r(4, 1, BLACK), r(5, 1, BLACK), r(6, 1, BLACK));
  rows.push(r(2, 2, BLACK), r(3, 2, BLACK_HI), r(4, 2, BLACK_HI), r(5, 2, BLACK_HI), r(6, 2, BLACK), r(7, 2, BLACK));
  rows.push(r(2, 3, BLACK), r(3, 3, TAN), r(4, 3, TAN), r(5, 3, TAN_DARK), r(6, 3, BLACK_HI), r(7, 3, BLACK));
  // Head tucked in
  rows.push(r(2, 4, NOSE), r(3, 4, BLACK), r(4, 4, TAN), r(5, 4, TAN_DARK), r(6, 4, BLACK), r(7, 4, BLACK));
  rows.push(r(3, 5, BLACK), r(4, 5, BLACK), r(5, 5, BLACK), r(6, 5, BLACK));
  // Tail curled around
  rows.push(r(7, 3, BLACK), r(7, 4, BLACK));
  return rows.join('');
}

// === COOKING POSE (sitting, looking up) ===

function sittingPixels(): string {
  const rows: string[] = [];
  // Sitting upright, looking up — begging pose
  rows.push(r(1, 1, BLACK), r(2, 1, BLACK));
  rows.push(r(0, 2, BLACK), r(1, 2, BLACK_HI), r(2, 2, BLACK));
  // Eye looking up
  rows.push(r(0, 2, EYE_HI));
  rows.push(r(0, 3, NOSE), r(1, 3, TAN));
  // Body angled up
  rows.push(r(1, 4, BLACK), r(2, 3, BLACK), r(3, 3, BLACK), r(4, 3, BLACK));
  rows.push(r(2, 4, TAN), r(3, 4, TAN_DARK), r(4, 4, BLACK));
  rows.push(r(2, 5, BLACK), r(3, 5, BLACK), r(4, 5, BLACK));
  // Seated legs
  rows.push(r(2, 6, TAN_DARK), r(3, 6, TAN_DARK), r(4, 6, BLACK));
  rows.push(r(2, 7, BLACK_HI), r(3, 7, BLACK_HI));
  return rows.join('');
}

function groundShadow(): string {
  return `<ellipse class="dog-shadow" cx="${6 * P}" cy="${7.5 * P}" rx="${4 * P}" ry="${0.6 * P}" fill="#000" opacity="0.12"/>`;
}

// === MAIN EXPORT ===

export function getDogSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as DogActivity) ? activity : 'idle') as DogActivity;

  const parts: string[] = [groundShadow(), '<g class="dog-character">'];

  if (act === 'sleeping') {
    parts.push(`<g class="dog-body">${sleepingPixels()}</g>`);
  } else if (act === 'cooking') {
    parts.push(`<g class="dog-body">${sittingPixels()}</g>`);
    parts.push(`<g class="dog-tail">${r(4, 2, BLACK)}</g>`);
  } else {
    // idle, walking, studying — standing pose with separate leg groups and tongue
    parts.push(`<g class="dog-body">${bodyPixels()}</g>`);
    parts.push(`<g class="dog-head">${headPixels()}</g>`);
    parts.push(earPixels());
    parts.push(tailPixels());
    parts.push(tonguePixels());
    parts.push(`<g class="dog-legs-front">${frontLegPixels()}</g>`);
    parts.push(`<g class="dog-legs-back">${backLegPixels()}</g>`);
  }

  parts.push('</g>');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="dog-avatar dog-${act}" shape-rendering="crispEdges">
  ${parts.join('')}
</svg>`;
}

export const dogStyles = `
  .dog-avatar {
    width: 100%;
    height: auto;
    display: block;
    image-rendering: pixelated;
  }

  /* ===== KEYFRAMES ===== */

  /* EXISTING - Enhanced multi-joint tail wag */
  @keyframes dog-tail-wag {
    0%, 100% { transform: rotate(-15deg); }
    20% { transform: rotate(20deg); }
    40% { transform: rotate(-12deg); }
    60% { transform: rotate(18deg); }
    80% { transform: rotate(-8deg); }
  }

  /* EXISTING - Keep breathe as is */
  @keyframes dog-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }

  /* EXISTING - Enhanced trot with squash/stretch */
  @keyframes dog-trot {
    0%, 100% { transform: translateY(0); }
    15% { transform: translateY(-${P}px) scaleY(0.97); }
    35% { transform: translateY(-${P * 0.5}px); }
    50% { transform: translateY(0) scaleY(1.02); }
    65% { transform: translateY(-${P}px); }
    85% { transform: translateY(-${P * 0.5}px); }
  }

  /* EXISTING - Enhanced ear bounce with overshoot */
  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-${P * 1.2}px); }
    60% { transform: translateY(-${P * 0.8}px); }
  }

  /* EXISTING - Keep head bob */
  @keyframes dog-head-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${Math.round(P * 0.5)}px); }
  }

  /* EXISTING - Keep front leg trot */
  @keyframes dog-leg-trot-front {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* NEW - Sniff animation (quick head bobs) */
  @keyframes dog-sniff {
    0%, 100% { transform: translateY(0); }
    15% { transform: translateY(-${P * 0.5}px); }
    25%, 45%, 100% { transform: translateY(0); }
    35% { transform: translateY(-${P * 0.3}px); }
  }

  /* NEW - Tongue pant (opacity pulse) */
  @keyframes dog-tongue-pant {
    0%, 40%, 60%, 100% { opacity: 0; }
    45%, 55% { opacity: 1; }
  }

  /* NEW - Ear twitch (quick burst) */
  @keyframes dog-ear-twitch {
    0%, 85%, 100% { transform: translateY(0); }
    88% { transform: translateY(-${P}px); }
    92%, 95% { transform: translateY(0); }
    95% { transform: translateY(-${P * 0.5}px); }
  }

  /* NEW - Back leg trot (opposite phase to front) */
  @keyframes dog-leg-trot-back {
    0% { transform: rotate(15deg); }
    100% { transform: rotate(-15deg); }
  }

  /* NEW - Dream twitch (tiny random movement) */
  @keyframes dog-dream-twitch {
    0%, 88%, 100% { transform: translateX(0); }
    90% { transform: translateX(${P * 0.3}px); }
    93% { transform: translateX(-${P * 0.2}px); }
    96% { transform: translateX(${P * 0.1}px); }
  }

  /* NEW - Nose nuzzle (slight rotate) */
  @keyframes dog-nose-nuzzle {
    0%, 92%, 100% { transform: rotate(0deg); }
    95% { transform: rotate(1deg); }
    98% { transform: rotate(-0.5deg); }
  }

  /* NEW - Paw tap (front legs only) */
  @keyframes dog-paw-tap {
    0%, 45%, 55%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P}px); }
  }

  /* NEW - Beg nod (body bob for sitting pose) */
  @keyframes dog-beg-nod {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-${P}px); }
    50%, 70% { transform: translateY(0); }
    70% { transform: translateY(-${P * 0.7}px); }
  }

  /* ===== IDLE ANIMATIONS ===== */
  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: ${10 * P}px ${2 * P}px;
  }
  .dog-idle .dog-head {
    animation: dog-sniff 2s ease-in-out infinite, dog-head-bob 2.5s ease-in-out infinite;
    transform-origin: ${1 * P}px ${3 * P}px;
  }
  .dog-idle .dog-tongue {
    animation: dog-tongue-pant 1.5s ease-in-out infinite;
  }
  .dog-idle .dog-ear {
    animation: dog-ear-twitch 3s ease-in-out infinite;
    transform-origin: ${2 * P}px ${1 * P}px;
  }
  .dog-idle .dog-body {
    animation: dog-breathe 3s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: ${6 * P}px ${5 * P}px;
  }

  /* ===== WALKING ANIMATIONS ===== */
  .dog-walking .dog-character {
    animation: dog-trot 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .dog-walking .dog-ear {
    animation: dog-ear-bounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: ${2 * P}px ${1 * P}px;
  }
  .dog-walking .dog-tail {
    animation: dog-tail-wag 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: ${10 * P}px ${2 * P}px;
  }
  .dog-walking .dog-tongue {
    animation: dog-tongue-pant 0.8s ease-in-out infinite;
  }
  .dog-walking .dog-legs-front {
    animation: dog-leg-trot-front 0.3s ease-in-out infinite alternate;
    transform-origin: ${2.5 * P}px ${6 * P}px;
  }
  .dog-walking .dog-legs-back {
    animation: dog-leg-trot-back 0.3s ease-in-out infinite alternate;
    transform-origin: ${8.5 * P}px ${6 * P}px;
  }

  /* ===== STUDYING ANIMATIONS ===== */
  .dog-studying .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: ${6 * P}px ${5 * P}px;
  }
  .dog-studying .dog-tail {
    animation: dog-tail-wag 2s ease-in-out infinite;
    transform-origin: ${10 * P}px ${2 * P}px;
  }
  .dog-studying .dog-ear {
    animation: dog-ear-twitch 4s ease-in-out infinite;
    animation-delay: 1s;
    transform-origin: ${2 * P}px ${1 * P}px;
  }

  /* ===== COOKING ANIMATIONS ===== */
  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: ${4 * P}px ${2 * P}px;
  }
  .dog-cooking .dog-body {
    animation: dog-beg-nod 1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .dog-cooking .dog-tongue {
    opacity: 1;
  }

  /* ===== SLEEPING ANIMATIONS ===== */
  .dog-sleeping .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite, dog-dream-twitch 6s ease-in-out infinite, dog-nose-nuzzle 5s ease-in-out infinite;
    transform-origin: ${5 * P}px ${4 * P}px;
  }

  .dog-shadow {
    transform-origin: ${6 * P}px ${7.5 * P}px;
  }
`;
