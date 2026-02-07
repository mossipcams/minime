// Pixel art dachshund avatar — viewBox 0 0 128 80, P=4 (32x20 logical grid)
export type DogActivity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: DogActivity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const W = 128;
const H = 80;
const P = 4; // pixel size in viewBox units

// Palette
const BLACK = '#1A1A1A';
const TAN = '#C8943C';
const NOSE = '#2D2D2D';
const EYE_HI = '#FFF';
const TONGUE = '#D85858';

// ===== PIXEL HELPERS =====

function px(gx: number, gy: number, gw: number, gh: number, fill: string): string {
  return `<rect x="${gx * P}" y="${gy * P}" width="${gw * P}" height="${gh * P}" fill="${fill}"/>`;
}

// ===== STANDING BODY PARTS =====

function groundShadow(): string {
  return `<ellipse class="dog-shadow" cx="64" cy="72" rx="35" ry="5" fill="#000" opacity="0.1"/>`;
}

function bodyShape(): string {
  return [
    px(6, 5, 16, 4, BLACK),   // long capsule body
    px(7, 9, 14, 2, TAN),     // tan belly stripe
  ].join('');
}

function headShape(): string {
  return [
    px(2, 4, 5, 5, BLACK),    // head block
    px(0, 7, 3, 2, BLACK),    // snout
    px(0, 7, 1, 1, NOSE),     // nose
    px(4, 5, 1, 1, EYE_HI),   // eye
  ].join('');
}

function earShape(): string {
  return `<g class="dog-ear">${px(5, 2, 2, 3, BLACK)}</g>`;
}

function tailShape(): string {
  return `<g class="dog-tail">${px(22, 4, 1, 1, BLACK)}${px(23, 3, 1, 2, BLACK)}${px(24, 4, 1, 1, BLACK)}</g>`;
}

function tongueShape(): string {
  return `<g class="dog-tongue" style="opacity: 0">${px(1, 9, 1, 2, TONGUE)}</g>`;
}

function frontLegs(): string {
  return [
    px(7, 10, 2, 4, BLACK),
    px(10, 10, 2, 4, BLACK),
  ].join('');
}

function backLegs(): string {
  return [
    px(17, 10, 2, 4, BLACK),
    px(20, 10, 2, 4, BLACK),
  ].join('');
}

// ===== SLEEPING (curled up) =====

function sleepingShape(): string {
  return [
    px(10, 5, 8, 6, BLACK),   // curled oval body
    px(11, 8, 6, 3, TAN),     // tan belly inside curl
    px(8, 5, 4, 4, BLACK),    // head tucked
    px(7, 7, 1, 1, NOSE),     // nose
    px(19, 4, 2, 1, BLACK),   // tail curled
    px(20, 5, 1, 1, BLACK),
  ].join('');
}

// ===== SITTING (cooking) =====

function sittingShape(): string {
  return [
    px(10, 5, 5, 6, BLACK),   // body angled up
    px(11, 8, 4, 3, TAN),     // belly
    px(8, 2, 4, 4, BLACK),    // head looking up
    px(9, 3, 1, 1, EYE_HI),   // eye
    px(7, 3, 1, 1, NOSE),     // nose
    px(11, 1, 2, 3, BLACK),   // ear
    px(11, 12, 2, 2, BLACK),  // front leg tucked
    px(14, 12, 2, 2, BLACK),  // back leg tucked
    px(7, 5, 2, 2, TONGUE),   // tongue (excited)
  ].join('');
}

// ===== MAIN EXPORT =====

const svgCache = new Map<DogActivity, string>();

export function getDogSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as DogActivity) ? activity : 'idle') as DogActivity;

  const cached = svgCache.get(act);
  if (cached) return cached;

  const parts: string[] = [groundShadow(), '<g class="dog-character">'];

  if (act === 'sleeping') {
    parts.push(`<g class="dog-body">${sleepingShape()}</g>`);
  } else if (act === 'cooking') {
    parts.push(`<g class="dog-body">${sittingShape()}</g>`);
    parts.push(`<g class="dog-tail">${px(15, 4, 1, 1, BLACK)}${px(16, 3, 1, 2, BLACK)}</g>`);
  } else {
    // idle, walking, studying — standing pose
    parts.push(`<g class="dog-body">${bodyShape()}</g>`);
    parts.push(`<g class="dog-head">${headShape()}</g>`);
    parts.push(earShape());
    parts.push(tailShape());
    parts.push(tongueShape());
    parts.push(`<g class="dog-legs-front">${frontLegs()}</g>`);
    parts.push(`<g class="dog-legs-back">${backLegs()}</g>`);
  }

  parts.push('</g>');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" class="dog-avatar dog-${act}">${parts.join('')}</svg>`;
  svgCache.set(act, svg);
  return svg;
}

// ===== STYLES =====
// Coordinates scaled by 3.2x from old 40x25 viewBox to 128x80

export const dogStyles = `
  .dog-avatar { width: 100%; height: auto; display: block; image-rendering: pixelated; image-rendering: crisp-edges; }

  @keyframes dog-tail-wag {
    0%, 100% { transform: rotate(-15deg); }
    20% { transform: rotate(20deg); }
    40% { transform: rotate(-12deg); }
    60% { transform: rotate(18deg); }
    80% { transform: rotate(-8deg); }
  }
  @keyframes dog-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }
  @keyframes dog-trot {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
  }
  @keyframes dog-leg-trot-front {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }
  @keyframes dog-leg-trot-back {
    0% { transform: rotate(15deg); }
    100% { transform: rotate(-15deg); }
  }
  @keyframes dog-sniff {
    0%, 100% { transform: translateY(0); }
    15% { transform: translateY(-5px); }
    35% { transform: translateY(-3px); }
  }
  @keyframes dog-tongue-pant {
    0%, 40%, 60%, 100% { opacity: 0; }
    45%, 55% { opacity: 1; }
  }
  @keyframes dog-ear-twitch {
    0%, 85%, 100% { transform: translateY(0); }
    88% { transform: translateY(-6px); }
    95% { transform: translateY(-5px); }
  }
  @keyframes dog-dream-twitch {
    0%, 88%, 100% { transform: translateX(0); }
    90% { transform: translateX(3px); }
    93% { transform: translateX(-2px); }
  }
  @keyframes dog-nose-nuzzle {
    0%, 92%, 100% { transform: rotate(0deg); }
    95% { transform: rotate(1deg); }
  }
  @keyframes dog-paw-tap {
    0%, 45%, 55%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes dog-beg-nod {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-6px); }
    70% { transform: translateY(-5px); }
  }

  /* ===== IDLE ===== */
  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 102px 32px;
  }
  .dog-idle .dog-head {
    animation: dog-sniff 2s ease-in-out infinite;
    transform-origin: 26px 32px;
  }
  .dog-idle .dog-tongue {
    animation: dog-tongue-pant 1.5s ease-in-out infinite;
  }
  .dog-idle .dog-ear {
    animation: dog-ear-twitch 3s ease-in-out infinite;
    transform-origin: 26px 16px;
  }
  .dog-idle .dog-body {
    animation: dog-breathe 3s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 64px 51px;
  }

  /* ===== WALKING ===== */
  .dog-walking .dog-character {
    animation: dog-trot 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .dog-walking .dog-ear {
    animation: dog-ear-bounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 26px 16px;
  }
  .dog-walking .dog-tail {
    animation: dog-tail-wag 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 102px 32px;
  }
  .dog-walking .dog-tongue {
    animation: dog-tongue-pant 0.8s ease-in-out infinite;
  }
  .dog-walking .dog-legs-front {
    animation: dog-leg-trot-front 0.3s ease-in-out infinite alternate;
    transform-origin: 38px 51px;
  }
  .dog-walking .dog-legs-back {
    animation: dog-leg-trot-back 0.3s ease-in-out infinite alternate;
    transform-origin: 90px 51px;
  }

  /* ===== STUDYING ===== */
  .dog-studying .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 64px 51px;
  }
  .dog-studying .dog-tail {
    animation: dog-tail-wag 2s ease-in-out infinite;
    transform-origin: 102px 32px;
  }
  .dog-studying .dog-ear {
    animation: dog-ear-twitch 4s ease-in-out infinite;
    animation-delay: 1s;
    transform-origin: 26px 16px;
  }

  /* ===== COOKING ===== */
  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 70px 32px;
  }
  .dog-cooking .dog-body {
    animation: dog-beg-nod 1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  /* ===== SLEEPING ===== */
  .dog-sleeping .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite, dog-dream-twitch 6s ease-in-out infinite, dog-nose-nuzzle 5s ease-in-out infinite;
    transform-origin: 64px 45px;
  }

  .dog-shadow { transform-origin: 64px 72px; }
`;
