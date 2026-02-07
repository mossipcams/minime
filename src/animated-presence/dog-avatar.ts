// Smooth SVG dachshund avatar — modern flat illustration style
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

// === POLISHED BODY PARTS ===

function bodyShape(): string {
  const parts: string[] = [];
  // Long dachshund body — smooth capsule with refined arch
  parts.push(`<path d="M8,12 Q8,7 14,7 L26,7 Q32,7 32,12 L32,14 Q32,17 26,17 L14,17 Q8,17 8,14 Z" fill="${BLACK}"/>`);
  // Belly underside — visible below body
  parts.push(`<path d="M10,14 Q10,17.5 14,17.5 L26,17.5 Q30,17.5 30,14" fill="${TAN_DARK}"/>`);
  // Tan belly center highlight
  parts.push(`<path d="M12,14.5 Q12,17 15,17 L25,17 Q28,17 28,14.5" fill="${TAN}"/>`);
  // Back highlight — subtle sheen
  parts.push(`<ellipse cx="20" cy="9" rx="8" ry="1.5" fill="${BLACK_HI}" opacity="0.35"/>`);
  return parts.join('');
}

function headShape(): string {
  const parts: string[] = [];
  // Head — slightly oblong, not a perfect circle
  parts.push(`<ellipse cx="6" cy="10" rx="4.5" ry="4" fill="${BLACK}"/>`);
  // Snout — cleaner transition from head
  parts.push(`<path d="M3.5,9.5 Q0.5,10.5 0.5,12 Q0.5,13 2,13.5 L5,13 Q6,12.5 6,11.5 Z" fill="${BLACK}"/>`);
  // Snout tan marking — refined shape
  parts.push(`<path d="M2,11.5 Q1.5,12 2,12.8 L4.5,12.5 Q5,12 4.5,11.5 Z" fill="${TAN}"/>`);
  // Nose — more defined
  parts.push(`<ellipse cx="1.2" cy="11" rx="1.1" ry="0.8" fill="${NOSE}"/>`);
  parts.push(`<ellipse cx="1.2" cy="10.8" rx="0.5" ry="0.3" fill="${BLACK}" opacity="0.4"/>`);
  // Eye — larger, more expressive
  parts.push(`<circle cx="5.5" cy="8.5" r="1.4" fill="${BLACK}"/>`);
  parts.push(`<circle cx="5.8" cy="8.2" r="0.6" fill="${EYE_HI}"/>`);
  return parts.join('');
}

function earShape(): string {
  // More defined floppy ear shapes with better curves
  return `<g class="dog-ear"><path d="M8,6 Q9.5,2 7.5,3 Q5,4.5 7,7.5 Z" fill="${BLACK}"/><path d="M10,6 Q11.5,2 9.5,3 Q7,4.5 9,7.5 Z" fill="${BLACK}"/></g>`;
}

function tailShape(): string {
  // More confident upward curve
  return `<g class="dog-tail"><path d="M32,10 Q34,5.5 35,7 Q35.5,9 33,11" fill="none" stroke="${BLACK}" stroke-width="2" stroke-linecap="round"/></g>`;
}

function tongueShape(): string {
  return `<g class="dog-tongue" style="opacity: 0"><path d="M1.5,13 Q1.5,15.5 2.5,15.5 Q3.5,15.5 3.5,13" fill="${TONGUE}"/></g>`;
}

function frontLegShape(): string {
  const parts: string[] = [];
  // Two front legs — tapered with cleaner paw shapes
  parts.push(`<path d="M10,15 L10,20 Q10,21 10.5,21 L12,21 Q12.5,21 12.5,20 L12.5,15 Z" fill="${BLACK}"/>`);
  parts.push(`<path d="M14,15 L14,20 Q14,21 14.5,21 L16,21 Q16.5,21 16.5,20 L16.5,15 Z" fill="${BLACK}"/>`);
  // Paws — slightly wider, rounded
  parts.push(`<ellipse cx="11.2" cy="21.2" rx="1.8" ry="0.8" fill="${BLACK_HI}"/>`);
  parts.push(`<ellipse cx="15.2" cy="21.2" rx="1.8" ry="0.8" fill="${BLACK_HI}"/>`);
  return parts.join('');
}

function backLegShape(): string {
  const parts: string[] = [];
  // Two back legs — tapered
  parts.push(`<path d="M25,15 L25,20 Q25,21 25.5,21 L27,21 Q27.5,21 27.5,20 L27.5,15 Z" fill="${BLACK}"/>`);
  parts.push(`<path d="M29,15 L29,20 Q29,21 29.5,21 L31,21 Q31.5,21 31.5,20 L31.5,15 Z" fill="${BLACK}"/>`);
  // Paws
  parts.push(`<ellipse cx="26.2" cy="21.2" rx="1.8" ry="0.8" fill="${BLACK_HI}"/>`);
  parts.push(`<ellipse cx="30.2" cy="21.2" rx="1.8" ry="0.8" fill="${BLACK_HI}"/>`);
  return parts.join('');
}

// === SLEEPING POSE (curled up) — tighter, more natural ===

function sleepingShape(): string {
  const parts: string[] = [];
  // Curled body — tighter oval for natural curl
  parts.push(`<path d="M14,9 Q28,6 28,14 Q28,20 20,20 Q12,20 12,14 Q12,9 14,9 Z" fill="${BLACK}"/>`);
  // Belly visible inside curl
  parts.push(`<ellipse cx="20" cy="15.5" rx="5" ry="3.5" fill="${TAN_DARK}"/>`);
  parts.push(`<ellipse cx="20" cy="16" rx="3.5" ry="2.5" fill="${TAN}"/>`);
  // Head tucked in close — nose toward belly
  parts.push(`<ellipse cx="14" cy="12" rx="3.8" ry="3.3" fill="${BLACK}"/>`);
  // Snout tucked
  parts.push(`<path d="M11,12.5 Q10,13.5 11.5,14 L13,13.5 Q13.5,13 13,12.5 Z" fill="${TAN}"/>`);
  parts.push(`<ellipse cx="10.8" cy="12.5" rx="0.9" ry="0.6" fill="${NOSE}"/>`);
  // Closed eye — gentle arc
  parts.push(`<path d="M14,11 Q15.5,12.2 17,11" fill="none" stroke="${BLACK_HI}" stroke-width="0.7" stroke-linecap="round"/>`);
  // Tail curled around body
  parts.push(`<path d="M26,10 Q29,8 28,11 Q27,14 26,12" fill="none" stroke="${BLACK}" stroke-width="1.5" stroke-linecap="round"/>`);
  return parts.join('');
}

// === COOKING POSE (sitting, looking up) — better posture ===

function sittingShape(): string {
  const parts: string[] = [];
  // Body angled up — more natural sit
  parts.push(`<ellipse cx="18" cy="15" rx="5.5" ry="6.5" fill="${BLACK}" transform="rotate(-12, 18, 15)"/>`);
  // Belly
  parts.push(`<ellipse cx="19" cy="16" rx="4" ry="4.5" fill="${TAN_DARK}" transform="rotate(-12, 19, 16)"/>`);
  parts.push(`<ellipse cx="19.5" cy="16.5" rx="3" ry="3.5" fill="${TAN}" transform="rotate(-12, 19.5, 16.5)"/>`);
  // Head looking up — bigger, more expressive
  parts.push(`<ellipse cx="13" cy="7.5" rx="4" ry="3.5" fill="${BLACK}"/>`);
  // Snout pointing up
  parts.push(`<path d="M10.5,6 Q8.5,5.5 9,7 L11,8 Q11.5,7 11,6 Z" fill="${BLACK}"/>`);
  parts.push(`<path d="M10,6.8 Q9.5,7 10,7.5 L11,7.3 Q11.2,7 10.8,6.8 Z" fill="${TAN}"/>`);
  // Nose
  parts.push(`<ellipse cx="9.3" cy="6.5" rx="0.9" ry="0.6" fill="${NOSE}"/>`);
  // Eye — big and eager
  parts.push(`<circle cx="12.5" cy="6" r="1.2" fill="${BLACK}"/>`);
  parts.push(`<circle cx="12.8" cy="5.7" r="0.5" fill="${EYE_HI}"/>`);
  // Ears flopping — more character
  parts.push(`<path d="M14,4.5 Q15.5,1.5 13.5,2.5 Q11.5,3.5 13,6 Z" fill="${BLACK}"/>`);
  // Seated legs — tucked under
  parts.push(`<path d="M15,19 L15,21.5 Q15,22.2 15.5,22.2 L17.5,22.2 Q18,22.2 18,21.5 L18,19 Z" fill="${BLACK}"/>`);
  parts.push(`<path d="M19,19 L19,21.5 Q19,22.2 19.5,22.2 L21.5,22.2 Q22,22.2 22,21.5 L22,19 Z" fill="${BLACK}"/>`);
  // Paws
  parts.push(`<ellipse cx="16.5" cy="22.3" rx="1.6" ry="0.7" fill="${BLACK_HI}"/>`);
  parts.push(`<ellipse cx="20.5" cy="22.3" rx="1.6" ry="0.7" fill="${BLACK_HI}"/>`);
  // Tongue (visible in cooking — excited panting)
  parts.push(`<path d="M9.5,8.5 Q9.5,10 10.5,10 Q11.5,10 11.5,8.5" fill="${TONGUE}"/>`);
  return parts.join('');
}

function groundShadow(): string {
  return `<ellipse class="dog-shadow" cx="20" cy="22.5" rx="11" ry="1.5" fill="#000" opacity="0.1"/>`;
}

// === MAIN EXPORT ===

export function getDogSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as DogActivity) ? activity : 'idle') as DogActivity;

  const parts: string[] = [groundShadow(), '<g class="dog-character">'];

  if (act === 'sleeping') {
    parts.push(`<g class="dog-body">${sleepingShape()}</g>`);
  } else if (act === 'cooking') {
    parts.push(`<g class="dog-body">${sittingShape()}</g>`);
    parts.push(`<g class="dog-tail"><path d="M22,10 Q24.5,6.5 24,9 Q23.5,11 22,11" fill="none" stroke="${BLACK}" stroke-width="1.5" stroke-linecap="round"/></g>`);
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
