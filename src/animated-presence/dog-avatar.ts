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
    // idle, walking, studying — standing pose
    parts.push(`<g class="dog-body">${bodyPixels()}</g>`);
    parts.push(`<g class="dog-head">${headPixels()}</g>`);
    parts.push(earPixels());
    parts.push(tailPixels());
    parts.push(`<g class="dog-legs">${legPixels()}</g>`);
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

  @keyframes dog-tail-wag {
    0%, 100% { transform: rotate(-15deg); }
    50% { transform: rotate(15deg); }
  }

  @keyframes dog-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }

  @keyframes dog-trot {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P}px); }
  }

  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P}px); }
  }

  @keyframes dog-head-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${Math.round(P * 0.5)}px); }
  }

  @keyframes dog-leg-trot-front {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.8s ease-in-out infinite;
    transform-origin: ${10 * P}px ${2 * P}px;
  }
  .dog-idle .dog-body {
    animation: dog-breathe 3s ease-in-out infinite;
    transform-origin: ${6 * P}px ${5 * P}px;
  }
  .dog-idle .dog-head {
    animation: dog-head-bob 2.5s ease-in-out infinite;
  }

  .dog-walking .dog-character {
    animation: dog-trot 0.3s ease-in-out infinite;
  }
  .dog-walking .dog-ear {
    animation: dog-ear-bounce 0.3s ease-in-out infinite;
  }
  .dog-walking .dog-tail {
    animation: dog-tail-wag 0.3s ease-in-out infinite;
    transform-origin: ${10 * P}px ${2 * P}px;
  }

  .dog-studying .dog-body {
    animation: dog-breathe 4s ease-in-out infinite;
    transform-origin: ${6 * P}px ${5 * P}px;
  }

  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.5s ease-in-out infinite;
    transform-origin: ${4 * P}px ${2 * P}px;
  }
  .dog-cooking .dog-body {
    animation: dog-head-bob 1.5s ease-in-out infinite;
  }

  .dog-sleeping .dog-body {
    animation: dog-breathe 4s ease-in-out infinite;
    transform-origin: ${5 * P}px ${4 * P}px;
  }

  .dog-shadow {
    transform-origin: ${6 * P}px ${7.5 * P}px;
  }
`;
