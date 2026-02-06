// Smooth SVG dachshund avatar
// ViewBox: 40x25

export type DogActivity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: DogActivity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const W = 40;
const H = 25;

// Dachshund palette
const BLACK = '#1A1A1A';
const BLACK_HI = '#2D2D2D';
const TAN = '#C8943C';
const TAN_DARK = '#A07830';
const NOSE = '#2D2D2D';
const EYE_HI = '#FFF';
const TONGUE = '#D85858';

// === SMOOTH BODY PARTS ===

function bodyShape(): string {
  const parts: string[] = [];
  // Long dachshund body — elongated ellipse
  parts.push(`<ellipse cx="20" cy="12" rx="12" ry="5" fill="${BLACK}"/>`);
  // Belly highlight
  parts.push(`<ellipse cx="20" cy="14" rx="10" ry="3" fill="${TAN_DARK}"/>`);
  // Tan belly center
  parts.push(`<ellipse cx="20" cy="14.5" rx="8" ry="2" fill="${TAN}"/>`);
  // Back highlight
  parts.push(`<ellipse cx="20" cy="9.5" rx="8" ry="2" fill="${BLACK_HI}" opacity="0.4"/>`);
  return parts.join('');
}

function headShape(): string {
  const parts: string[] = [];
  // Head
  parts.push(`<circle cx="6" cy="10" r="4" fill="${BLACK}"/>`);
  // Snout
  parts.push(`<ellipse cx="3" cy="11.5" rx="3" ry="2" fill="${BLACK}"/>`);
  // Snout tan
  parts.push(`<ellipse cx="3.5" cy="12" rx="2" ry="1.2" fill="${TAN}"/>`);
  // Nose
  parts.push(`<ellipse cx="1.5" cy="11" rx="1" ry="0.7" fill="${NOSE}"/>`);
  // Eye
  parts.push(`<circle cx="5.5" cy="9" r="1.2" fill="${BLACK}"/>`);
  parts.push(`<circle cx="5.8" cy="8.7" r="0.5" fill="${EYE_HI}"/>`);
  return parts.join('');
}

function earShape(): string {
  return `<g class="dog-ear"><path d="M8,6 Q9,3 7,4 Q5,5 7,7 Z" fill="${BLACK}"/><path d="M10,6 Q11,3 9,4 Q7,5 9,7 Z" fill="${BLACK}"/></g>`;
}

function tailShape(): string {
  return `<g class="dog-tail"><path d="M32,9 Q35,5 34,8 Q33,11 32,10" fill="${BLACK}" stroke="${BLACK}" stroke-width="1.5" stroke-linecap="round"/></g>`;
}

function tongueShape(): string {
  return `<g class="dog-tongue" style="opacity: 0"><ellipse cx="2" cy="14" rx="1.2" ry="1.8" fill="${TONGUE}"/></g>`;
}

function frontLegShape(): string {
  const parts: string[] = [];
  // Two front legs
  parts.push(`<rect x="9" y="15" width="2.5" height="6" rx="1.2" fill="${BLACK}"/>`);
  parts.push(`<rect x="13" y="15" width="2.5" height="6" rx="1.2" fill="${BLACK}"/>`);
  // Paws
  parts.push(`<ellipse cx="10.2" cy="21" rx="1.5" ry="0.8" fill="${BLACK_HI}"/>`);
  parts.push(`<ellipse cx="14.2" cy="21" rx="1.5" ry="0.8" fill="${BLACK_HI}"/>`);
  return parts.join('');
}

function backLegShape(): string {
  const parts: string[] = [];
  // Two back legs
  parts.push(`<rect x="25" y="15" width="2.5" height="6" rx="1.2" fill="${BLACK}"/>`);
  parts.push(`<rect x="29" y="15" width="2.5" height="6" rx="1.2" fill="${BLACK}"/>`);
  // Paws
  parts.push(`<ellipse cx="26.2" cy="21" rx="1.5" ry="0.8" fill="${BLACK_HI}"/>`);
  parts.push(`<ellipse cx="30.2" cy="21" rx="1.5" ry="0.8" fill="${BLACK_HI}"/>`);
  return parts.join('');
}

// === SLEEPING POSE (curled up) ===

function sleepingShape(): string {
  const parts: string[] = [];
  // Curled body — circular shape
  parts.push(`<ellipse cx="20" cy="14" rx="8" ry="6" fill="${BLACK}"/>`);
  // Belly visible inside curl
  parts.push(`<ellipse cx="19" cy="15" rx="5" ry="3.5" fill="${TAN_DARK}"/>`);
  parts.push(`<ellipse cx="19" cy="15.5" rx="3.5" ry="2.5" fill="${TAN}"/>`);
  // Head tucked in
  parts.push(`<circle cx="14" cy="12" r="3.5" fill="${BLACK}"/>`);
  // Snout tucked
  parts.push(`<ellipse cx="12" cy="13" rx="2" ry="1.2" fill="${TAN}"/>`);
  parts.push(`<ellipse cx="11" cy="12.5" rx="0.8" ry="0.5" fill="${NOSE}"/>`);
  // Closed eye
  parts.push(`<path d="M14,11 Q15,12 16,11" fill="none" stroke="${BLACK_HI}" stroke-width="0.6" stroke-linecap="round"/>`);
  // Tail curled around
  parts.push(`<path d="M27,10 Q30,8 28,12 Q26,15 27,11" fill="${BLACK}" stroke="${BLACK}" stroke-width="1" stroke-linecap="round"/>`);
  return parts.join('');
}

// === COOKING POSE (sitting, looking up) ===

function sittingShape(): string {
  const parts: string[] = [];
  // Body angled up
  parts.push(`<ellipse cx="18" cy="15" rx="5" ry="6" fill="${BLACK}" transform="rotate(-15, 18, 15)"/>`);
  // Belly
  parts.push(`<ellipse cx="19" cy="16" rx="3.5" ry="4" fill="${TAN_DARK}" transform="rotate(-15, 19, 16)"/>`);
  parts.push(`<ellipse cx="19.5" cy="16.5" rx="2.5" ry="3" fill="${TAN}" transform="rotate(-15, 19.5, 16.5)"/>`);
  // Head looking up
  parts.push(`<circle cx="13" cy="8" r="3.5" fill="${BLACK}"/>`);
  // Snout up
  parts.push(`<ellipse cx="11" cy="7" rx="2.5" ry="1.5" fill="${BLACK}"/>`);
  parts.push(`<ellipse cx="11.5" cy="7.5" rx="1.5" ry="0.8" fill="${TAN}"/>`);
  // Nose
  parts.push(`<ellipse cx="9.5" cy="6.8" rx="0.8" ry="0.5" fill="${NOSE}"/>`);
  // Eye looking up
  parts.push(`<circle cx="12.5" cy="6.5" r="1" fill="${BLACK}"/>`);
  parts.push(`<circle cx="12.8" cy="6.2" r="0.4" fill="${EYE_HI}"/>`);
  // Ears flopping
  parts.push(`<path d="M14,5 Q15,2 13,3 Q11,4 13,6 Z" fill="${BLACK}"/>`);
  // Seated legs
  parts.push(`<rect x="15" y="19" width="2.5" height="3" rx="1" fill="${BLACK}"/>`);
  parts.push(`<rect x="19" y="19" width="2.5" height="3" rx="1" fill="${BLACK}"/>`);
  // Paws
  parts.push(`<ellipse cx="16.2" cy="22" rx="1.5" ry="0.7" fill="${BLACK_HI}"/>`);
  parts.push(`<ellipse cx="20.2" cy="22" rx="1.5" ry="0.7" fill="${BLACK_HI}"/>`);
  // Tongue (visible in cooking)
  parts.push(`<ellipse cx="10" cy="9" rx="0.8" ry="1.2" fill="${TONGUE}"/>`);
  return parts.join('');
}

function groundShadow(): string {
  return `<ellipse class="dog-shadow" cx="20" cy="22.5" rx="10" ry="1.5" fill="#000" opacity="0.12"/>`;
}

// === MAIN EXPORT ===

export function getDogSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as DogActivity) ? activity : 'idle') as DogActivity;

  const parts: string[] = [groundShadow(), '<g class="dog-character">'];

  if (act === 'sleeping') {
    parts.push(`<g class="dog-body">${sleepingShape()}</g>`);
  } else if (act === 'cooking') {
    parts.push(`<g class="dog-body">${sittingShape()}</g>`);
    parts.push(`<g class="dog-tail"><path d="M22,10 Q24,7 23,11" fill="${BLACK}" stroke="${BLACK}" stroke-width="1" stroke-linecap="round"/></g>`);
  } else {
    // idle, walking, studying — standing pose
    parts.push(`<g class="dog-body">${bodyShape()}</g>`);
    parts.push(`<g class="dog-head">${headShape()}</g>`);
    parts.push(earShape());
    parts.push(tailShape());
    parts.push(tongueShape());
    parts.push(`<g class="dog-legs-front">${frontLegShape()}</g>`);
    parts.push(`<g class="dog-legs-back">${backLegShape()}</g>`);
  }

  parts.push('</g>');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="dog-avatar dog-${act}">
  ${parts.join('')}
</svg>`;
}

export const dogStyles = `
  .dog-avatar {
    width: 100%;
    height: auto;
    display: block;
  }

  /* ===== KEYFRAMES ===== */

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
    15% { transform: translateY(-2px) scaleY(0.97); }
    35% { transform: translateY(-1px); }
    50% { transform: translateY(0) scaleY(1.02); }
    65% { transform: translateY(-2px); }
    85% { transform: translateY(-1px); }
  }

  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-3px); }
    60% { transform: translateY(-2px); }
  }

  @keyframes dog-head-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  @keyframes dog-leg-trot-front {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  @keyframes dog-sniff {
    0%, 100% { transform: translateY(0); }
    15% { transform: translateY(-1.5px); }
    25%, 45%, 100% { transform: translateY(0); }
    35% { transform: translateY(-1px); }
  }

  @keyframes dog-tongue-pant {
    0%, 40%, 60%, 100% { opacity: 0; }
    45%, 55% { opacity: 1; }
  }

  @keyframes dog-ear-twitch {
    0%, 85%, 100% { transform: translateY(0); }
    88% { transform: translateY(-2px); }
    92%, 95% { transform: translateY(0); }
    95% { transform: translateY(-1.5px); }
  }

  @keyframes dog-leg-trot-back {
    0% { transform: rotate(15deg); }
    100% { transform: rotate(-15deg); }
  }

  @keyframes dog-dream-twitch {
    0%, 88%, 100% { transform: translateX(0); }
    90% { transform: translateX(1px); }
    93% { transform: translateX(-0.6px); }
    96% { transform: translateX(0.3px); }
  }

  @keyframes dog-nose-nuzzle {
    0%, 92%, 100% { transform: rotate(0deg); }
    95% { transform: rotate(1deg); }
    98% { transform: rotate(-0.5deg); }
  }

  @keyframes dog-paw-tap {
    0%, 45%, 55%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  @keyframes dog-beg-nod {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-2px); }
    50%, 70% { transform: translateY(0); }
    70% { transform: translateY(-1.5px); }
  }

  /* ===== IDLE ANIMATIONS ===== */
  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 32px 10px;
  }
  .dog-idle .dog-head {
    animation: dog-sniff 2s ease-in-out infinite, dog-head-bob 2.5s ease-in-out infinite;
    transform-origin: 8px 10px;
  }
  .dog-idle .dog-tongue {
    animation: dog-tongue-pant 1.5s ease-in-out infinite;
  }
  .dog-idle .dog-ear {
    animation: dog-ear-twitch 3s ease-in-out infinite;
    transform-origin: 8px 5px;
  }
  .dog-idle .dog-body {
    animation: dog-breathe 3s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 20px 16px;
  }

  /* ===== WALKING ANIMATIONS ===== */
  .dog-walking .dog-character {
    animation: dog-trot 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .dog-walking .dog-ear {
    animation: dog-ear-bounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 8px 5px;
  }
  .dog-walking .dog-tail {
    animation: dog-tail-wag 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 32px 10px;
  }
  .dog-walking .dog-tongue {
    animation: dog-tongue-pant 0.8s ease-in-out infinite;
  }
  .dog-walking .dog-legs-front {
    animation: dog-leg-trot-front 0.3s ease-in-out infinite alternate;
    transform-origin: 12px 16px;
  }
  .dog-walking .dog-legs-back {
    animation: dog-leg-trot-back 0.3s ease-in-out infinite alternate;
    transform-origin: 28px 16px;
  }

  /* ===== STUDYING ANIMATIONS ===== */
  .dog-studying .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 20px 16px;
  }
  .dog-studying .dog-tail {
    animation: dog-tail-wag 2s ease-in-out infinite;
    transform-origin: 32px 10px;
  }
  .dog-studying .dog-ear {
    animation: dog-ear-twitch 4s ease-in-out infinite;
    animation-delay: 1s;
    transform-origin: 8px 5px;
  }

  /* ===== COOKING ANIMATIONS ===== */
  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 22px 10px;
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
    transform-origin: 20px 14px;
  }

  .dog-shadow {
    transform-origin: 20px 22.5px;
  }
`;
