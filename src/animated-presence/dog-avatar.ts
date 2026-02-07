// Minimal geometric dachshund avatar — viewBox 0 0 40 25
export type DogActivity = 'idle' | 'walking' | 'studying' | 'cooking' | 'sleeping';

const ACTIVITIES: DogActivity[] = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const W = 40;
const H = 25;

// Palette
const BLACK = '#1A1A1A';
const BLACK_HI = '#2D2D2D';
const TAN = '#C8943C';
const NOSE = '#2D2D2D';
const EYE_HI = '#FFF';
const TONGUE = '#D85858';

// ===== BODY PARTS =====

function groundShadow(): string {
  return `<ellipse class="dog-shadow" cx="20" cy="22.5" rx="11" ry="1.5" fill="#000" opacity="0.1"/>`;
}

function bodyShape(): string {
  const p: string[] = [];
  // Long capsule body
  p.push(`<rect x="8" y="8" width="24" height="9" rx="4.5" fill="${BLACK}"/>`);
  // Tan belly stripe
  p.push(`<rect x="10" y="14" width="20" height="3" rx="2" fill="${TAN}"/>`);
  return p.join('');
}

function headShape(): string {
  const p: string[] = [];
  p.push(`<circle cx="7" cy="10" r="5" fill="${BLACK}"/>`);
  // Snout
  p.push(`<ellipse cx="2.5" cy="12" rx="2.5" ry="1.5" fill="${BLACK}"/>`);
  // Nose
  p.push(`<circle cx="1" cy="11.5" r="1" fill="${NOSE}"/>`);
  // Eye
  p.push(`<circle cx="6" cy="8.5" r="1.2" fill="${EYE_HI}"/>`);
  return p.join('');
}

function earShape(): string {
  return `<g class="dog-ear"><ellipse cx="9" cy="5" rx="2.5" ry="3.5" transform="rotate(-15, 9, 5)" fill="${BLACK}"/></g>`;
}

function tailShape(): string {
  return `<g class="dog-tail"><path d="M32,10 Q35,5 35.5,7.5 Q35.5,9 33,11" fill="none" stroke="${BLACK}" stroke-width="2" stroke-linecap="round"/></g>`;
}

function tongueShape(): string {
  return `<g class="dog-tongue" style="opacity: 0"><path d="M1.5,13 Q1.5,15.5 2.5,15.5 Q3.5,15.5 3.5,13" fill="${TONGUE}"/></g>`;
}

function frontLegs(): string {
  const p: string[] = [];
  p.push(`<rect x="10" y="16" width="3" height="5" rx="1.5" fill="${BLACK}"/>`);
  p.push(`<rect x="14" y="16" width="3" height="5" rx="1.5" fill="${BLACK}"/>`);
  return p.join('');
}

function backLegs(): string {
  const p: string[] = [];
  p.push(`<rect x="25" y="16" width="3" height="5" rx="1.5" fill="${BLACK}"/>`);
  p.push(`<rect x="29" y="16" width="3" height="5" rx="1.5" fill="${BLACK}"/>`);
  return p.join('');
}

// ===== SLEEPING (curled up) =====

function sleepingShape(): string {
  const p: string[] = [];
  // Curled oval body
  p.push(`<ellipse cx="20" cy="14" rx="9" ry="7" fill="${BLACK}"/>`);
  // Tan belly inside curl
  p.push(`<ellipse cx="20" cy="16" rx="5" ry="3.5" fill="${TAN}"/>`);
  // Head tucked in
  p.push(`<circle cx="14" cy="12" r="4" fill="${BLACK}"/>`);
  // Closed eye arc
  p.push(`<path d="M13,11 Q15,12.5 17,11" fill="none" stroke="${BLACK_HI}" stroke-width="0.7" stroke-linecap="round"/>`);
  // Nose
  p.push(`<circle cx="11" cy="12.5" r="0.8" fill="${NOSE}"/>`);
  // Tail curled around
  p.push(`<path d="M28,10 Q30,8 29,12" fill="none" stroke="${BLACK}" stroke-width="1.5" stroke-linecap="round"/>`);
  return p.join('');
}

// ===== SITTING (cooking) =====

function sittingShape(): string {
  const p: string[] = [];
  // Body angled up
  p.push(`<ellipse cx="18" cy="14" rx="6" ry="7" fill="${BLACK}" transform="rotate(-10, 18, 14)"/>`);
  // Belly
  p.push(`<ellipse cx="19" cy="16" rx="4" ry="4" fill="${TAN}" transform="rotate(-10, 19, 16)"/>`);
  // Head looking up
  p.push(`<circle cx="13" cy="7" r="4" fill="${BLACK}"/>`);
  // Eye
  p.push(`<circle cx="12.5" cy="5.5" r="1" fill="${EYE_HI}"/>`);
  // Nose
  p.push(`<circle cx="9.5" cy="6" r="0.8" fill="${NOSE}"/>`);
  // Ear
  p.push(`<ellipse cx="15" cy="3.5" rx="2" ry="3" transform="rotate(-10, 15, 3.5)" fill="${BLACK}"/>`);
  // Front legs tucked
  p.push(`<rect x="15" y="19" width="3" height="3.5" rx="1.5" fill="${BLACK}"/>`);
  p.push(`<rect x="19" y="19" width="3" height="3.5" rx="1.5" fill="${BLACK}"/>`);
  // Tongue (excited)
  p.push(`<path d="M9.5,8 Q9.5,10 10.5,10 Q11.5,10 11.5,8" fill="${TONGUE}"/>`);
  return p.join('');
}

// ===== MAIN EXPORT =====

export function getDogSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as DogActivity) ? activity : 'idle') as DogActivity;

  const parts: string[] = [groundShadow(), '<g class="dog-character">'];

  if (act === 'sleeping') {
    parts.push(`<g class="dog-body">${sleepingShape()}</g>`);
  } else if (act === 'cooking') {
    parts.push(`<g class="dog-body">${sittingShape()}</g>`);
    parts.push(`<g class="dog-tail"><path d="M22,10 Q24.5,7 24,9.5" fill="none" stroke="${BLACK}" stroke-width="1.5" stroke-linecap="round"/></g>`);
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

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="dog-avatar dog-${act}">${parts.join('')}</svg>`;
}

// ===== STYLES =====

export const dogStyles = `
  .dog-avatar { width: 100%; height: auto; display: block; }

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
    50% { transform: translateY(-2px); }
  }
  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-3px); }
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
    15% { transform: translateY(-1.5px); }
    35% { transform: translateY(-1px); }
  }
  @keyframes dog-tongue-pant {
    0%, 40%, 60%, 100% { opacity: 0; }
    45%, 55% { opacity: 1; }
  }
  @keyframes dog-ear-twitch {
    0%, 85%, 100% { transform: translateY(0); }
    88% { transform: translateY(-2px); }
    95% { transform: translateY(-1.5px); }
  }
  @keyframes dog-dream-twitch {
    0%, 88%, 100% { transform: translateX(0); }
    90% { transform: translateX(1px); }
    93% { transform: translateX(-0.6px); }
  }
  @keyframes dog-nose-nuzzle {
    0%, 92%, 100% { transform: rotate(0deg); }
    95% { transform: rotate(1deg); }
  }
  @keyframes dog-paw-tap {
    0%, 45%, 55%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }
  @keyframes dog-beg-nod {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-2px); }
    70% { transform: translateY(-1.5px); }
  }

  /* ===== IDLE ===== */
  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 32px 10px;
  }
  .dog-idle .dog-head {
    animation: dog-sniff 2s ease-in-out infinite;
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

  /* ===== WALKING ===== */
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

  /* ===== STUDYING ===== */
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

  /* ===== COOKING ===== */
  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 22px 10px;
  }
  .dog-cooking .dog-body {
    animation: dog-beg-nod 1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  /* ===== SLEEPING ===== */
  .dog-sleeping .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite, dog-dream-twitch 6s ease-in-out infinite, dog-nose-nuzzle 5s ease-in-out infinite;
    transform-origin: 20px 14px;
  }

  .dog-shadow { transform-origin: 20px 22.5px; }
`;
