/**
 * Avatar sprite smooth vector art asset
 * Inline SVG strings for self-contained bundle (avoids HACS resource loading)
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 96">';
const SVG_CLOSE = '</svg>';
const SHADOW = '<ellipse cx="32" cy="92" rx="18" ry="4" fill="#00000033"/>';

// --- Shared body part constants (default standing pose) ---
const HEAD = `
  <ellipse cx="32" cy="20" rx="12" ry="13" fill="#FFCC99"/>
  <path d="M20 17 Q20 6 32 6 Q44 6 44 17 L44 14 Q44 4 32 4 Q20 4 20 14 Z" fill="#5C4033"/>
  <path d="M18 17 Q18 12 20 14 L20 20 Q18 20 18 17Z" fill="#5C4033"/>
  <path d="M46 17 Q46 12 44 14 L44 20 Q46 20 46 17Z" fill="#5C4033"/>
  <circle cx="27" cy="20" r="2" fill="#333333"/>
  <circle cx="37" cy="20" r="2" fill="#333333"/>
  <path d="M29 26 Q32 29 35 26" stroke="#333333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <rect x="22" y="30" width="20" height="8" rx="4" fill="#FFCC99"/>`;

const TORSO = '<rect x="18" y="36" width="28" height="24" rx="6" fill="#FF6B6B"/>';

const ARMS_DOWN = `
  <rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>
  <rect x="46" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>
  <circle cx="51" cy="60" r="4" fill="#FFCC99"/>`;

const LEGS_STAND = `
  <rect x="20" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>
  <rect x="34" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>
  <rect x="18" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>
  <rect x="32" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>`;

function frame(...parts: string[]): string {
  return SVG_OPEN + parts.join('') + SVG_CLOSE;
}

// --- Head shifted up 2px for breathing bob ---
const HEAD_UP = `
  <ellipse cx="32" cy="18" rx="12" ry="13" fill="#FFCC99"/>
  <path d="M20 15 Q20 4 32 4 Q44 4 44 15 L44 12 Q44 2 32 2 Q20 2 20 12 Z" fill="#5C4033"/>
  <path d="M18 15 Q18 10 20 12 L20 18 Q18 18 18 15Z" fill="#5C4033"/>
  <path d="M46 15 Q46 10 44 12 L44 18 Q46 18 46 15Z" fill="#5C4033"/>
  <circle cx="27" cy="18" r="2" fill="#333333"/>
  <circle cx="37" cy="18" r="2" fill="#333333"/>
  <path d="M29 24 Q32 27 35 24" stroke="#333333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <rect x="22" y="28" width="20" height="8" rx="4" fill="#FFCC99"/>`;

// --- Closed eyes head (sleeping) ---
const CLOSED_EYES_HEAD = `
  <ellipse cx="32" cy="20" rx="12" ry="13" fill="#FFCC99"/>
  <path d="M20 17 Q20 6 32 6 Q44 6 44 17 L44 14 Q44 4 32 4 Q20 4 20 14 Z" fill="#5C4033"/>
  <path d="M18 17 Q18 12 20 14 L20 20 Q18 20 18 17Z" fill="#5C4033"/>
  <path d="M46 17 Q46 12 44 14 L44 20 Q46 20 46 17Z" fill="#5C4033"/>
  <line x1="25" y1="20" x2="29" y2="20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
  <line x1="35" y1="20" x2="39" y2="20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
  <rect x="22" y="30" width="20" height="8" rx="4" fill="#FFCC99"/>`;

// --- Idle: breathing bob (2 frames) ---
const idle0 = frame(SHADOW, LEGS_STAND, TORSO, ARMS_DOWN, HEAD);
const idle1 = frame(SHADOW, LEGS_STAND, TORSO, ARMS_DOWN, HEAD_UP);

// --- Walk Right (4 frames) ---
// Frame 0: right leg forward
const walkR0 = frame(SHADOW,
  `<rect x="20" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>
  <rect x="38" y="64" width="10" height="20" rx="4" fill="#5B8DEF"/>
  <rect x="18" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>
  <rect x="36" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>`,
  TORSO,
  `<rect x="8" y="36" width="10" height="20" rx="5" fill="#FFB84D"/>
  <rect x="46" y="40" width="10" height="20" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="58" r="4" fill="#FFCC99"/>
  <circle cx="51" cy="62" r="4" fill="#FFCC99"/>`,
  HEAD);

// Frame 1: passing (legs together, body up)
const walkR1 = frame(SHADOW,
  `<rect x="24" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>
  <rect x="30" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>
  <rect x="22" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>
  <rect x="28" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>`,
  TORSO, ARMS_DOWN, HEAD_UP);

// Frame 2: left leg forward
const walkR2 = frame(SHADOW,
  `<rect x="16" y="64" width="10" height="20" rx="4" fill="#5B8DEF"/>
  <rect x="34" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>
  <rect x="14" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>
  <rect x="32" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>`,
  TORSO,
  `<rect x="8" y="40" width="10" height="20" rx="5" fill="#FFB84D"/>
  <rect x="46" y="36" width="10" height="20" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="62" r="4" fill="#FFCC99"/>
  <circle cx="51" cy="58" r="4" fill="#FFCC99"/>`,
  HEAD);

// Frame 3: passing again
const walkR3 = walkR1;

// --- Walk Left (mirrored via scaleX) ---
function mirrorFrame(svgStr: string): string {
  return svgStr.replace(
    'viewBox="0 0 64 96"',
    'viewBox="0 0 64 96" style="transform: scaleX(-1)"',
  );
}
const walkL0 = mirrorFrame(walkR0);
const walkL1 = mirrorFrame(walkR1);
const walkL2 = mirrorFrame(walkR2);
const walkL3 = mirrorFrame(walkR3);

// --- Office Idle: typing at desk (3 frames) ---
const officeIdle0 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="8" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>
  <rect x="46" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="56" r="4" fill="#FFCC99"/>
  <circle cx="51" cy="56" r="4" fill="#FFCC99"/>`,
  HEAD);

// Typing frame: left hand up
const officeIdle1 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="6" y="36" width="10" height="16" rx="5" fill="#FFB84D"/>
  <rect x="46" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="11" cy="54" r="4" fill="#FFCC99"/>
  <circle cx="51" cy="56" r="4" fill="#FFCC99"/>`,
  HEAD);

// Typing frame: right hand up
const officeIdle2 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="8" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>
  <rect x="48" y="36" width="10" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="56" r="4" fill="#FFCC99"/>
  <circle cx="53" cy="54" r="4" fill="#FFCC99"/>`,
  HEAD);

// --- Kitchen Idle: stirring at counter (3 frames) ---
const kitchenIdle0 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>
  <rect x="46" y="34" width="10" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="51" cy="52" r="4" fill="#FFCC99"/>
  <rect x="53" y="48" width="3" height="14" rx="1.5" fill="#808080"/>`,
  HEAD);

const kitchenIdle1 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>
  <rect x="46" y="36" width="10" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="51" cy="54" r="4" fill="#FFCC99"/>
  <rect x="55" y="50" width="3" height="14" rx="1.5" fill="#808080"/>`,
  HEAD);

const kitchenIdle2 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>
  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>
  <rect x="46" y="34" width="10" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="51" cy="52" r="4" fill="#FFCC99"/>
  <rect x="51" y="46" width="3" height="14" rx="1.5" fill="#808080"/>`,
  HEAD);

// --- Living Room Idle: relaxing on couch (2 frames) ---
const LEGS_SEATED = `
  <rect x="20" y="60" width="10" height="16" rx="4" fill="#5B8DEF"/>
  <rect x="34" y="60" width="10" height="16" rx="4" fill="#5B8DEF"/>
  <rect x="16" y="76" width="14" height="8" rx="4" fill="#5B8DEF"/>
  <rect x="34" y="76" width="14" height="8" rx="4" fill="#5B8DEF"/>
  <rect x="14" y="82" width="16" height="6" rx="3" fill="#3D3D3D"/>
  <rect x="34" y="82" width="16" height="6" rx="3" fill="#3D3D3D"/>`;

const livingIdle0 = frame(SHADOW, LEGS_SEATED, TORSO,
  `<rect x="6" y="38" width="12" height="16" rx="5" fill="#FFB84D"/>
  <rect x="46" y="38" width="12" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="12" cy="56" r="4" fill="#FFCC99"/>
  <circle cx="52" cy="56" r="4" fill="#FFCC99"/>`,
  HEAD);

// Slight lean
const livingIdle1 = frame(SHADOW, LEGS_SEATED, TORSO,
  `<rect x="4" y="40" width="12" height="16" rx="5" fill="#FFB84D"/>
  <rect x="48" y="40" width="12" height="16" rx="5" fill="#FFB84D"/>
  <circle cx="10" cy="58" r="4" fill="#FFCC99"/>
  <circle cx="54" cy="58" r="4" fill="#FFCC99"/>`,
  HEAD_UP);

// --- Bedroom Idle: sleeping with Zzz (2 frames) ---
const bedroomIdle0 = frame(SHADOW, LEGS_STAND, TORSO, ARMS_DOWN, CLOSED_EYES_HEAD,
  '<text x="48" y="12" font-size="10" fill="#5B8DEF" font-family="sans-serif" font-weight="bold">Z</text>');
const bedroomIdle1 = frame(SHADOW, LEGS_STAND, TORSO, ARMS_DOWN, CLOSED_EYES_HEAD,
  `<text x="50" y="8" font-size="8" fill="#5B8DEF" font-family="sans-serif" font-weight="bold">z</text>
  <text x="44" y="16" font-size="10" fill="#5B8DEF" font-family="sans-serif" font-weight="bold">Z</text>`);

// --- Legacy export (backwards compatible) ---
export const avatarSprite = {
  idle: idle0,
  width: 64,
  height: 96,
};

// --- Full animation frame sets ---
export const avatarFrames = {
  idle: [idle0, idle1],
  walkRight: [walkR0, walkR1, walkR2, walkR3],
  walkLeft: [walkL0, walkL1, walkL2, walkL3],
  officeIdle: [officeIdle0, officeIdle1, officeIdle2],
  kitchenIdle: [kitchenIdle0, kitchenIdle1, kitchenIdle2],
  livingRoomIdle: [livingIdle0, livingIdle1],
  bedroomIdle: [bedroomIdle0, bedroomIdle1],
};
