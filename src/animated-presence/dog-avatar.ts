// Pixel art dachshund avatar — viewBox 0 0 128 80, P=4 (32x20 logical grid)
export type DogActivity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: DogActivity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const W = 128;
const H = 80;
const P = 4;

// Extended palette
const COLORS: Record<string, string> = {
  'K': '#1A1A1A',   // black body
  'k': '#2D2D2D',   // dark highlight
  'T': '#C8943C',   // tan
  't': '#B08030',   // tan shadow
  'N': '#2D2D2D',   // nose
  'W': '#FFFFFF',   // eye white
  'R': '#D85858',   // tongue
};

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

// ===== STANDING BODY =====

const BODY_BMP = [
  '..kKKKKKKKKKKKk..',   // row 5: body top with highlights
  '.KKKKKKKKKKKKKKK..',   // row 6: full body
  '.KKKKKKKkKKKKKKK..',   // row 7: body with shading
  '.KKKKKKKKKKKKKkK..',   // row 8: body
  '..tTTTTTTTTTTTt..',   // row 9: belly stripe with shadow edges
  '..TTTTTTTTTTTTt..',   // row 10: belly stripe
];

function bodyShape(): string {
  return renderBitmap(5, 5, BODY_BMP);
}

// ===== HEAD =====

const HEAD_BMP = [
  '.KKkK.',   // row 4: head top with highlight
  'KKKKKK',   // row 5: head
  'KKWKKK',   // row 6: eye white
  'KKKKkK',   // row 7: head with shading
  'KKKKKK',   // row 8: head bottom
];

const SNOUT_BMP = [
  'NKK',   // row 7: nose + snout
  'KKK',   // row 8: snout
];

function headShape(): string {
  return renderBitmap(2, 4, HEAD_BMP) + renderBitmap(0, 7, SNOUT_BMP);
}

// ===== EAR =====

const EAR_BMP = [
  '.K',   // row 2: ear tip
  'KK',   // row 3: ear
  'Kk',   // row 4: ear with highlight
];

function earShape(): string {
  return `<g class="dog-ear">${renderBitmap(5, 2, EAR_BMP)}</g>`;
}

// ===== TAIL =====

const TAIL_BMP = [
  '.K.',   // row 3: tail top
  'KkK',   // row 4: tail with highlight
  '.K.',   // row 5: tail bottom
];

function tailShape(): string {
  return `<g class="dog-tail">${renderBitmap(22, 3, TAIL_BMP)}</g>`;
}

function tongueShape(): string {
  return `<g class="dog-tongue" style="opacity: 0">${px(1, 9, 1, 2, COLORS['R'])}</g>`;
}

// ===== LEGS =====

const FRONT_LEGS_BMP = [
  'KK.KK',   // row 11: upper legs
  'KK.KK',   // row 12: mid legs
  'KK.KK',   // row 13: lower legs
  'kk.kk',   // row 14: paws (highlight)
];

function frontLegs(): string {
  return renderBitmap(7, 11, FRONT_LEGS_BMP);
}

const BACK_LEGS_BMP = [
  'KK.KK',   // row 11
  'KK.KK',   // row 12
  'KK.KK',   // row 13
  'kk.kk',   // row 14: paws
];

function backLegs(): string {
  return renderBitmap(17, 11, BACK_LEGS_BMP);
}

function groundShadow(): string {
  return `<ellipse class="dog-shadow" cx="64" cy="68" rx="35" ry="4" fill="#000" opacity="0.1"/>`;
}

// ===== SLEEPING (curled up) =====

const SLEEPING_BMP = [
  '....KKK.....',   // row 4: head top
  '..KKKKKKK...',   // row 5: head + body start
  '.KKKKKKKKKK.',   // row 6: curled body
  'NKKKKKkKKKKK',   // row 7: nose, body with highlight
  '.KKtTTTTtKKK',   // row 8: belly
  '..KTTTTTTkK.',   // row 9: belly center
  '...kKKKKK...',   // row 10: body bottom
  '....KK......',   // row 11: tail
];

function sleepingShape(): string {
  return renderBitmap(8, 4, SLEEPING_BMP);
}

// ===== SITTING (cooking) =====

const SITTING_BMP = [
  '....KK..',   // row 1: ear
  '...KKKK.',   // row 2: ear + head top
  '.NKWKKKK',   // row 3: nose, eye, head
  '.KKKKKKK',   // row 4: head + body
  'RKKKKKKKK',  // WAIT this is 9 chars
];

// Let me redo sitting more carefully
function sittingShape(): string {
  const parts: string[] = [];
  // Head looking up
  parts.push(renderBitmap(8, 2, [
    '..KK.',   // row 2: ear tip
    '.KKKK',   // row 3: ear + head
    'KWKKK',   // row 4: eye, head
    'KKKKK',   // row 5: head
  ]));
  // Nose
  parts.push(px(7, 4, 1, 1, COLORS['N']));
  // Body angled
  parts.push(renderBitmap(10, 5, [
    'KKKkK',   // row 5: body top with highlight
    'KKKKK',   // row 6: body
    'KKkKK',   // row 7: body shading
    'tTTTt',   // row 8: belly
    'TTTTt',   // row 9: belly
    'KKKKK',   // row 10: body bottom
  ]));
  // Front legs tucked
  parts.push(renderBitmap(11, 11, [
    'KK.KK',   // row 11: tucked legs
    'kk.kk',   // row 12: paws
  ]));
  // Tongue
  parts.push(px(7, 5, 1, 2, COLORS['R']));
  return parts.join('');
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
    parts.push(`<g class="dog-tail">${renderBitmap(15, 3, ['.K', 'Kk', '.K'])}</g>`);
  } else {
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
    50% { transform: translateY(-4px); }
  }
  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-6px); }
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
    15% { transform: translateY(-3px); }
    35% { transform: translateY(-2px); }
  }
  @keyframes dog-tongue-pant {
    0%, 40%, 60%, 100% { opacity: 0; }
    45%, 55% { opacity: 1; }
  }
  @keyframes dog-ear-twitch {
    0%, 85%, 100% { transform: translateY(0); }
    88% { transform: translateY(-4px); }
    95% { transform: translateY(-3px); }
  }
  @keyframes dog-dream-twitch {
    0%, 88%, 100% { transform: translateX(0); }
    90% { transform: translateX(2px); }
    93% { transform: translateX(-1px); }
  }
  @keyframes dog-nose-nuzzle {
    0%, 92%, 100% { transform: rotate(0deg); }
    95% { transform: rotate(1deg); }
  }
  @keyframes dog-paw-tap {
    0%, 45%, 55%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  @keyframes dog-beg-nod {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-4px); }
    70% { transform: translateY(-3px); }
  }

  /* ===== IDLE ===== */
  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 92px 20px;
  }
  .dog-idle .dog-head {
    animation: dog-sniff 2s ease-in-out infinite;
    transform-origin: 20px 28px;
  }
  .dog-idle .dog-tongue {
    animation: dog-tongue-pant 1.5s ease-in-out infinite;
  }
  .dog-idle .dog-ear {
    animation: dog-ear-twitch 3s ease-in-out infinite;
    transform-origin: 24px 12px;
  }
  .dog-idle .dog-body {
    animation: dog-breathe 3s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 56px 40px;
  }

  /* ===== WALKING ===== */
  .dog-walking .dog-character {
    animation: dog-trot 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .dog-walking .dog-ear {
    animation: dog-ear-bounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 24px 12px;
  }
  .dog-walking .dog-tail {
    animation: dog-tail-wag 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 92px 20px;
  }
  .dog-walking .dog-tongue {
    animation: dog-tongue-pant 0.8s ease-in-out infinite;
  }
  .dog-walking .dog-legs-front {
    animation: dog-leg-trot-front 0.3s ease-in-out infinite alternate;
    transform-origin: 36px 44px;
  }
  .dog-walking .dog-legs-back {
    animation: dog-leg-trot-back 0.3s ease-in-out infinite alternate;
    transform-origin: 76px 44px;
  }

  /* ===== STUDYING ===== */
  .dog-studying .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 56px 40px;
  }
  .dog-studying .dog-tail {
    animation: dog-tail-wag 2s ease-in-out infinite;
    transform-origin: 92px 20px;
  }
  .dog-studying .dog-ear {
    animation: dog-ear-twitch 4s ease-in-out infinite;
    animation-delay: 1s;
    transform-origin: 24px 12px;
  }

  /* ===== COOKING ===== */
  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 64px 20px;
  }
  .dog-cooking .dog-body {
    animation: dog-beg-nod 1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  /* ===== SLEEPING ===== */
  .dog-sleeping .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite, dog-dream-twitch 6s ease-in-out infinite, dog-nose-nuzzle 5s ease-in-out infinite;
    transform-origin: 56px 36px;
  }

  .dog-shadow { transform-origin: 64px 68px; }
`;
