// Pixel art dachshund avatar — viewBox 0 0 128 80, P=4 (32x20 logical grid)
// Black and tan dachshund: long body, short legs, floppy ears
export type DogActivity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: DogActivity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const W = 128;
const H = 80;
const P = 4;

// Black and tan dachshund palette
const COLORS: Record<string, string> = {
  'K': '#1A1A1A',   // black body
  'k': '#2D2D2D',   // black highlight
  'T': '#D4943C',   // tan (rich reddish-brown)
  't': '#C07830',   // tan shadow
  'O': '#E0A848',   // tan highlight (bright)
  'N': '#1A1A1A',   // nose (black)
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

// ===== STANDING BODY (very long, low) =====
// 20 wide at grid (5, 5) — elongated sausage shape

const BODY_BMP = [
  '.kKKKKKKKKKKKKKKKKk.',   // row 5: body top highlights
  'KKKKKKKKKKKKKKKKKKKK',   // row 6: full body black
  'KKKKKkKKKKKKKKkKKKKK',   // row 7: body with shading
  'KKKKKKKKKKKKKKKKKKkK',   // row 8: body black
  'tTOTTTTTTTTTTTTOTTt.',   // row 9: tan belly with orange highlights
  '.OTTTTTTTTTTTTTTTOt.',   // row 10: tan belly bright edges
];

function bodyShape(): string {
  return renderBitmap(5, 5, BODY_BMP);
}

// ===== HEAD (side profile, facing left) =====
// 7 wide at grid (0, 3)

const HEAD_BMP = [
  '..kKK..',   // row 3: top of head
  '.KKKKKK',   // row 4: head wide (connects to body)
  'KKTKKWK',   // row 5: tan eyebrow dot + eye white
  'KKKKKKK',   // row 6: face
  'NTTKKkK',   // row 7: nose + tan muzzle + highlight
  '.TKKk..',   // row 8: tan jaw
];

const SNOUT_BMP = [
  'NK',   // row 7: nose detail
];

function headShape(): string {
  return renderBitmap(0, 3, HEAD_BMP) + renderBitmap(0, 8, SNOUT_BMP);
}

// ===== FLOPPY EAR (hangs down from top of head) =====
// 2 wide at grid (5, 1) — long dachshund ear

const EAR_BMP = [
  '.K',   // row 1: ear top
  'KK',   // row 2: ear upper
  'KK',   // row 3: ear mid
  'Kk',   // row 4: ear with highlight
  '.k',   // row 5: ear tip (hanging down)
];

function earShape(): string {
  return `<g class="dog-ear">${renderBitmap(5, 1, EAR_BMP)}</g>`;
}

// ===== TAIL (curves up from rear) =====
// 3 wide at grid (24, 3)

const TAIL_BMP = [
  '..K',   // row 3: tail tip up
  '.KK',   // row 4: tail mid
  'KkK',   // row 5: tail base with highlight
];

function tailShape(): string {
  return `<g class="dog-tail">${renderBitmap(24, 3, TAIL_BMP)}</g>`;
}

function tongueShape(): string {
  return `<g class="dog-tongue" style="opacity: 0">${px(0, 9, 1, 1, COLORS['R'])}</g>`;
}

// ===== LEGS (very short — dachshund!) =====
// Only 2 rows tall: black upper, tan paws

const FRONT_LEGS_BMP = [
  'KK.KK',   // row 11: upper legs black
  'Tt.tT',   // row 12: tan paws
];

function frontLegs(): string {
  return renderBitmap(8, 11, FRONT_LEGS_BMP);
}

const BACK_LEGS_BMP = [
  'KK.KK',   // row 11: upper legs black
  'tT.Tt',   // row 12: tan paws
];

function backLegs(): string {
  return renderBitmap(19, 11, BACK_LEGS_BMP);
}

function groundShadow(): string {
  return `<ellipse class="dog-shadow" cx="64" cy="56" rx="40" ry="4" fill="#000" opacity="0.1"/>`;
}

// ===== SLEEPING (curled up into oval) =====

const SLEEPING_BMP = [
  '.....KKK........',   // row 4: head top
  '...KKKKKKKK.....',   // row 5: head + body curve
  '..KKTKKKKKKKKK..',   // row 6: tan brow, curled body
  '.NKKKKKKKKKKKKK.',   // row 7: nose, body
  '.TKKtOTTTOtKKKK.',   // WAIT wrong width
];

// Let me redo sleeping more carefully as inline
function sleepingShape(): string {
  const parts: string[] = [];
  // Curled oval body
  parts.push(renderBitmap(6, 4, [
    '...KKKK.....',   // row 4: head top
    '.KKKKKKKKKK.',   // row 5: head + body
    'KKTKKKKKKKKK',   // row 6: tan brow, body
    'KKWKKKKKKKKKK'.slice(0,12),   // row 7: eye, body
    'KKKtOTTOtKKK',   // row 8: tan belly
    '.KOTTTTTOkK.',   // row 9: orange belly
    '..kKKKKKKK..',   // row 10: body bottom
    '...KK.......',   // row 11: tail
  ]));
  // Nose
  parts.push(px(6, 7, 1, 1, COLORS['N']));
  return parts.join('');
}

// ===== SITTING (begging pose for cooking) =====

function sittingShape(): string {
  const parts: string[] = [];
  // Head looking up
  parts.push(renderBitmap(8, 2, [
    '..KKK.',   // row 2: ear + top
    '.KKKKK',   // row 3: head
    'KKTWKK',   // row 4: tan brow + eye
    'KKKKKK',   // row 5: face
  ]));
  // Nose
  parts.push(px(7, 4, 1, 1, COLORS['N']));
  // Body angled down
  parts.push(renderBitmap(10, 5, [
    'KKKkKK',   // row 5: body top
    'KKKKKK',   // row 6: body
    'KKkKKK',   // row 7: body shading
    'tOTTOt',   // row 8: tan belly
    'OTTTOt',   // row 9: belly
    'KKKKKK',   // row 10: body bottom
  ]));
  // Front legs tucked
  parts.push(renderBitmap(11, 11, [
    'KK.KK',   // row 11: tucked legs
    'Tt.tT',   // row 12: tan paws
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
    parts.push(`<g class="dog-tail">${renderBitmap(16, 3, ['.K', 'Kk', '.K'])}</g>`);
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
    50% { transform: translateY(-3px); }
  }
  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-4px); }
  }
  @keyframes dog-leg-trot-front {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(12deg); }
  }
  @keyframes dog-leg-trot-back {
    0% { transform: rotate(12deg); }
    100% { transform: rotate(-12deg); }
  }
  @keyframes dog-sniff {
    0%, 100% { transform: translateY(0); }
    15% { transform: translateY(-2px); }
    35% { transform: translateY(-1px); }
  }
  @keyframes dog-tongue-pant {
    0%, 40%, 60%, 100% { opacity: 0; }
    45%, 55% { opacity: 1; }
  }
  @keyframes dog-ear-twitch {
    0%, 85%, 100% { transform: translateY(0); }
    88% { transform: translateY(-3px); }
    95% { transform: translateY(-2px); }
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
    50% { transform: translateY(-3px); }
  }
  @keyframes dog-beg-nod {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-4px); }
    70% { transform: translateY(-3px); }
  }

  /* ===== IDLE ===== */
  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 100px 20px;
  }
  .dog-idle .dog-head {
    animation: dog-sniff 2s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .dog-idle .dog-tongue {
    animation: dog-tongue-pant 1.5s ease-in-out infinite;
  }
  .dog-idle .dog-ear {
    animation: dog-ear-twitch 3s ease-in-out infinite;
    transform-origin: 24px 8px;
  }
  .dog-idle .dog-body {
    animation: dog-breathe 3s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 56px 36px;
  }

  /* ===== WALKING ===== */
  .dog-walking .dog-character {
    animation: dog-trot 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .dog-walking .dog-ear {
    animation: dog-ear-bounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 24px 8px;
  }
  .dog-walking .dog-tail {
    animation: dog-tail-wag 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 100px 20px;
  }
  .dog-walking .dog-tongue {
    animation: dog-tongue-pant 0.8s ease-in-out infinite;
  }
  .dog-walking .dog-legs-front {
    animation: dog-leg-trot-front 0.3s ease-in-out infinite alternate;
    transform-origin: 40px 44px;
  }
  .dog-walking .dog-legs-back {
    animation: dog-leg-trot-back 0.3s ease-in-out infinite alternate;
    transform-origin: 84px 44px;
  }

  /* ===== STUDYING ===== */
  .dog-studying .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 56px 36px;
  }
  .dog-studying .dog-tail {
    animation: dog-tail-wag 2s ease-in-out infinite;
    transform-origin: 100px 20px;
  }
  .dog-studying .dog-ear {
    animation: dog-ear-twitch 4s ease-in-out infinite;
    animation-delay: 1s;
    transform-origin: 24px 8px;
  }

  /* ===== COOKING ===== */
  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 68px 16px;
  }
  .dog-cooking .dog-body {
    animation: dog-beg-nod 1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  /* ===== SLEEPING ===== */
  .dog-sleeping .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite, dog-dream-twitch 6s ease-in-out infinite, dog-nose-nuzzle 5s ease-in-out infinite;
    transform-origin: 56px 36px;
  }

  .dog-shadow { transform-origin: 64px 56px; }
`;
