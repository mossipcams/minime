/**
 * Avatar sprite pixel art asset
 * Inline SVG strings for self-contained bundle (avoids HACS resource loading)
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" shape-rendering="crispEdges">';
const SVG_CLOSE = '</svg>';
const SHADOW = '<ellipse cx="16" cy="46" rx="10" ry="2" fill="#00000033"/>';
const HEAD = `
  <rect x="13" y="14" width="6" height="4" fill="#FFA07A"/>
  <rect x="11" y="6" width="10" height="8" fill="#FFA07A"/>
  <rect x="11" y="4" width="10" height="2" fill="#654321"/>
  <rect x="10" y="6" width="1" height="4" fill="#654321"/>
  <rect x="21" y="6" width="1" height="4" fill="#654321"/>
  <rect x="13" y="9" width="2" height="2" fill="#000000"/>
  <rect x="17" y="9" width="2" height="2" fill="#000000"/>
  <rect x="14" y="12" width="1" height="1" fill="#000000"/>
  <rect x="15" y="13" width="2" height="1" fill="#000000"/>
  <rect x="17" y="12" width="1" height="1" fill="#000000"/>`;
const TORSO = '<rect x="9" y="18" width="14" height="14" fill="#DC143C"/>';
const ARMS_DOWN = `
  <rect x="6" y="20" width="3" height="10" fill="#FFD700"/>
  <rect x="23" y="20" width="3" height="10" fill="#FFD700"/>
  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="30" width="3" height="2" fill="#FFA07A"/>`;
const LEGS_STAND = `
  <rect x="10" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="17" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="10" y="44" width="5" height="2" fill="#2F4F4F"/>
  <rect x="17" y="44" width="5" height="2" fill="#2F4F4F"/>`;

function frame(...parts: string[]): string {
  return SVG_OPEN + parts.join('') + SVG_CLOSE;
}

// --- Idle: breathing bob (2 frames) ---
const idle0 = frame(SHADOW, LEGS_STAND, TORSO, ARMS_DOWN, HEAD);
// Frame 2: slight upward bob (-1px on upper body)
const idle1 = frame(
  SHADOW, LEGS_STAND, TORSO,
  ARMS_DOWN,
  `<rect x="13" y="13" width="6" height="4" fill="#FFA07A"/>
  <rect x="11" y="5" width="10" height="8" fill="#FFA07A"/>
  <rect x="11" y="3" width="10" height="2" fill="#654321"/>
  <rect x="10" y="5" width="1" height="4" fill="#654321"/>
  <rect x="21" y="5" width="1" height="4" fill="#654321"/>
  <rect x="13" y="8" width="2" height="2" fill="#000000"/>
  <rect x="17" y="8" width="2" height="2" fill="#000000"/>
  <rect x="14" y="11" width="1" height="1" fill="#000000"/>
  <rect x="15" y="12" width="2" height="1" fill="#000000"/>
  <rect x="17" y="11" width="1" height="1" fill="#000000"/>`,
);

// --- Walk Right (4 frames) ---
// Frame 0: right leg forward
const walkR0 = frame(SHADOW,
  `<rect x="10" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="19" y="34" width="5" height="10" fill="#4169E1"/>
  <rect x="10" y="44" width="5" height="2" fill="#2F4F4F"/>
  <rect x="19" y="44" width="5" height="2" fill="#2F4F4F"/>`,
  TORSO,
  `<rect x="6" y="19" width="3" height="10" fill="#FFD700"/>
  <rect x="23" y="21" width="3" height="10" fill="#FFD700"/>
  <rect x="6" y="29" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="31" width="3" height="2" fill="#FFA07A"/>`,
  HEAD);
// Frame 1: passing (legs together, body up)
const walkR1 = frame(SHADOW,
  `<rect x="12" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="15" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="12" y="44" width="5" height="2" fill="#2F4F4F"/>
  <rect x="15" y="44" width="5" height="2" fill="#2F4F4F"/>`,
  TORSO, ARMS_DOWN,
  `<rect x="13" y="13" width="6" height="4" fill="#FFA07A"/>
  <rect x="11" y="5" width="10" height="8" fill="#FFA07A"/>
  <rect x="11" y="3" width="10" height="2" fill="#654321"/>
  <rect x="10" y="5" width="1" height="4" fill="#654321"/>
  <rect x="21" y="5" width="1" height="4" fill="#654321"/>
  <rect x="13" y="8" width="2" height="2" fill="#000000"/>
  <rect x="17" y="8" width="2" height="2" fill="#000000"/>
  <rect x="14" y="11" width="1" height="1" fill="#000000"/>
  <rect x="15" y="12" width="2" height="1" fill="#000000"/>
  <rect x="17" y="11" width="1" height="1" fill="#000000"/>`);
// Frame 2: left leg forward
const walkR2 = frame(SHADOW,
  `<rect x="8" y="34" width="5" height="10" fill="#4169E1"/>
  <rect x="17" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="8" y="44" width="5" height="2" fill="#2F4F4F"/>
  <rect x="17" y="44" width="5" height="2" fill="#2F4F4F"/>`,
  TORSO,
  `<rect x="6" y="21" width="3" height="10" fill="#FFD700"/>
  <rect x="23" y="19" width="3" height="10" fill="#FFD700"/>
  <rect x="6" y="31" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="29" width="3" height="2" fill="#FFA07A"/>`,
  HEAD);
// Frame 3: passing again
const walkR3 = walkR1;

// --- Walk Left (mirrored: flip viewBox approach via transform) ---
function mirrorFrame(svgStr: string): string {
  return svgStr.replace(
    'viewBox="0 0 32 48"',
    'viewBox="0 0 32 48" style="transform: scaleX(-1)"',
  );
}
const walkL0 = mirrorFrame(walkR0);
const walkL1 = mirrorFrame(walkR1);
const walkL2 = mirrorFrame(walkR2);
const walkL3 = mirrorFrame(walkR3);

// --- Office Idle: typing at desk (3 frames) ---
const officeIdle0 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="6" y="20" width="3" height="8" fill="#FFD700"/>
  <rect x="23" y="20" width="3" height="8" fill="#FFD700"/>
  <rect x="6" y="28" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="28" width="3" height="2" fill="#FFA07A"/>`,
  HEAD);
// Typing frame: left hand up
const officeIdle1 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="5" y="19" width="3" height="8" fill="#FFD700"/>
  <rect x="23" y="20" width="3" height="8" fill="#FFD700"/>
  <rect x="5" y="27" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="28" width="3" height="2" fill="#FFA07A"/>`,
  HEAD);
// Typing frame: right hand up
const officeIdle2 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="6" y="20" width="3" height="8" fill="#FFD700"/>
  <rect x="24" y="19" width="3" height="8" fill="#FFD700"/>
  <rect x="6" y="28" width="3" height="2" fill="#FFA07A"/>
  <rect x="24" y="27" width="3" height="2" fill="#FFA07A"/>`,
  HEAD);

// --- Kitchen Idle: stirring at counter (3 frames) ---
// Arm extended right, holding spoon
const kitchenIdle0 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="6" y="20" width="3" height="10" fill="#FFD700"/>
  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="18" width="3" height="8" fill="#FFD700"/>
  <rect x="23" y="26" width="3" height="2" fill="#FFA07A"/>
  <rect x="26" y="24" width="2" height="6" fill="#808080"/>`,
  HEAD);
// Stirring position 2
const kitchenIdle1 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="6" y="20" width="3" height="10" fill="#FFD700"/>
  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="19" width="3" height="8" fill="#FFD700"/>
  <rect x="23" y="27" width="3" height="2" fill="#FFA07A"/>
  <rect x="27" y="25" width="2" height="6" fill="#808080"/>`,
  HEAD);
// Stirring position 3
const kitchenIdle2 = frame(SHADOW, LEGS_STAND, TORSO,
  `<rect x="6" y="20" width="3" height="10" fill="#FFD700"/>
  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="18" width="3" height="8" fill="#FFD700"/>
  <rect x="23" y="26" width="3" height="2" fill="#FFA07A"/>
  <rect x="25" y="23" width="2" height="6" fill="#808080"/>`,
  HEAD);

// --- Living Room Idle: relaxing on couch (2 frames) ---
// Seated pose
const LEGS_SEATED = `
  <rect x="10" y="32" width="5" height="8" fill="#4169E1"/>
  <rect x="17" y="32" width="5" height="8" fill="#4169E1"/>
  <rect x="8" y="40" width="7" height="4" fill="#4169E1"/>
  <rect x="17" y="40" width="7" height="4" fill="#4169E1"/>
  <rect x="8" y="44" width="7" height="2" fill="#2F4F4F"/>
  <rect x="17" y="44" width="7" height="2" fill="#2F4F4F"/>`;
const livingIdle0 = frame(SHADOW, LEGS_SEATED, TORSO,
  `<rect x="5" y="20" width="4" height="8" fill="#FFD700"/>
  <rect x="23" y="20" width="4" height="8" fill="#FFD700"/>
  <rect x="5" y="28" width="4" height="2" fill="#FFA07A"/>
  <rect x="23" y="28" width="4" height="2" fill="#FFA07A"/>`,
  HEAD);
// Slight lean
const livingIdle1 = frame(SHADOW, LEGS_SEATED, TORSO,
  `<rect x="4" y="21" width="4" height="8" fill="#FFD700"/>
  <rect x="24" y="21" width="4" height="8" fill="#FFD700"/>
  <rect x="4" y="29" width="4" height="2" fill="#FFA07A"/>
  <rect x="24" y="29" width="4" height="2" fill="#FFA07A"/>`,
  `<rect x="13" y="13" width="6" height="4" fill="#FFA07A"/>
  <rect x="11" y="5" width="10" height="8" fill="#FFA07A"/>
  <rect x="11" y="3" width="10" height="2" fill="#654321"/>
  <rect x="10" y="5" width="1" height="4" fill="#654321"/>
  <rect x="21" y="5" width="1" height="4" fill="#654321"/>
  <rect x="13" y="8" width="2" height="2" fill="#000000"/>
  <rect x="17" y="8" width="2" height="2" fill="#000000"/>
  <rect x="14" y="11" width="1" height="1" fill="#000000"/>
  <rect x="15" y="12" width="2" height="1" fill="#000000"/>
  <rect x="17" y="11" width="1" height="1" fill="#000000"/>`);

// --- Bedroom Idle: sleeping with Zzz (2 frames) ---
// Lying down / sleeping pose (eyes closed)
const CLOSED_EYES_HEAD = `
  <rect x="13" y="14" width="6" height="4" fill="#FFA07A"/>
  <rect x="11" y="6" width="10" height="8" fill="#FFA07A"/>
  <rect x="11" y="4" width="10" height="2" fill="#654321"/>
  <rect x="10" y="6" width="1" height="4" fill="#654321"/>
  <rect x="21" y="6" width="1" height="4" fill="#654321"/>
  <rect x="13" y="9" width="2" height="1" fill="#000000"/>
  <rect x="17" y="9" width="2" height="1" fill="#000000"/>`;
const bedroomIdle0 = frame(SHADOW, LEGS_STAND, TORSO, ARMS_DOWN, CLOSED_EYES_HEAD,
  `<text x="24" y="6" font-size="5" fill="#4169E1" font-family="monospace">Z</text>`);
const bedroomIdle1 = frame(SHADOW, LEGS_STAND, TORSO, ARMS_DOWN, CLOSED_EYES_HEAD,
  `<text x="25" y="4" font-size="4" fill="#4169E1" font-family="monospace">z</text>
  <text x="22" y="8" font-size="5" fill="#4169E1" font-family="monospace">Z</text>`);

// --- Legacy export (backwards compatible) ---
export const avatarSprite = {
  idle: idle0,
  width: 32,
  height: 48,
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
