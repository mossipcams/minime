export type Activity = 'idle' | 'walking'
  // Office
  | 'studying' | 'reading' | 'thinking' | 'coffee-break' | 'whiteboarding' | 'phone-call'
  // Kitchen
  | 'cooking' | 'eating' | 'coffee-making' | 'washing-dishes' | 'snacking' | 'baking'
  // Living room
  | 'watching' | 'gaming' | 'reading-couch' | 'relaxing' | 'stretching' | 'napping'
  // Bedroom
  | 'sleeping' | 'reading-bed' | 'meditating' | 'getting-dressed' | 'morning-stretch' | 'phone-bed';

const ACTIVITIES: Activity[] = [
  'idle', 'walking',
  'studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call',
  'cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking',
  'watching', 'gaming', 'reading-couch', 'relaxing', 'stretching', 'napping',
  'sleeping', 'reading-bed', 'meditating', 'getting-dressed', 'morning-stretch', 'phone-bed',
];

// ViewBox: 50x75
const W = 50;
const H = 75;

// ===== FLAT ILLUSTRATION PALETTE — same colors, polished shapes =====
const SKIN = '#F5C7A8';
const HAIR = '#3D2B1F';
const EYES = '#2B2B2B';
const BROW = '#3D2B1F';
const MOUTH = '#C27060';
const EYELID = '#D4A880';
const HOODIE = '#6C8EAD';
const PANTS = '#3A3A48';
const SHOES = '#E8E4DC';
const WHITE = '#F0EEE8';
const CHEEK = '#E8A090';

// Prop palettes
const PAN = '#787880';
const PAN_DARK = '#585868';
const PAN_HANDLE = '#5E4428';
const FOOD_EGG = '#E8D858';
const FOOD_YLK = '#D89828';
const LAPTOP_FRAME = '#282838';
const LAPTOP_SCREEN = '#344E78';
const LAPTOP_GLOW = '#4C7AA8';
const LAPTOP_KEY = '#404050';
const PHONE_BODY = '#282838';
const PHONE_SCREEN = '#4C7AA8';
const PILLOW_FILL = '#E0D4BC';
const PILLOW_SHADE = '#C8B898';
const BLANKET = '#6A5C94';
const BLANKET_HI = '#7C6CA4';

// ===== HEAD — slightly wider ellipse, asymmetric hair, rosy cheeks =====

function headShape(): string {
  const p: string[] = [];
  // Face — wider ellipse for a more designed feel
  p.push(`<ellipse cx="25" cy="18" rx="14" ry="12.5" fill="${SKIN}"/>`);
  // Hair — asymmetric side-swept style with part line
  p.push(`<g class="totem-hair">`);
  p.push(`<path d="M10,18 C10,3 16,-2 25,-2 C34,-2 40,3 40,18 Q36,8 25,8 Q14,8 10,18 Z" fill="${HAIR}"/>`);
  // Side sweep falling over right side
  p.push(`<path d="M25,-2 C30,-2 36,1 38,8 Q36,5 32,6 Q28,7 25,5 Z" fill="${HAIR}"/>`);
  p.push(`</g>`);
  // Brows — clean arcs with confident weight
  p.push(`<path d="M16,14 Q19.5,12 23,14" fill="none" stroke="${BROW}" stroke-width="1.6" stroke-linecap="round"/>`);
  p.push(`<path d="M27,14 Q30.5,12 34,14" fill="none" stroke="${BROW}" stroke-width="1.6" stroke-linecap="round"/>`);
  // Eyes — bold dots, spaced for wider head
  p.push(`<circle cx="19.5" cy="19" r="3.5" fill="${EYES}"/>`);
  p.push(`<circle cx="30.5" cy="19" r="3.5" fill="${EYES}"/>`);
  // Eye highlights
  p.push(`<circle cx="18.5" cy="18" r="1.2" fill="#FFF" opacity="0.9"/>`);
  p.push(`<circle cx="29.5" cy="18" r="1.2" fill="#FFF" opacity="0.9"/>`);
  // Rosy cheeks for warmth
  p.push(`<circle cx="14" cy="22" r="2.5" fill="${CHEEK}" opacity="0.3"/>`);
  p.push(`<circle cx="36" cy="22" r="2.5" fill="${CHEEK}" opacity="0.3"/>`);
  // Mouth — refined smile curve
  p.push(`<path d="M22,25 Q25,27.5 28,25" fill="none" stroke="${MOUTH}" stroke-width="1.4" stroke-linecap="round"/>`);
  return p.join('');
}

function sleepingHeadShape(): string {
  const p: string[] = [];
  p.push(`<ellipse cx="25" cy="18" rx="14" ry="12.5" fill="${SKIN}"/>`);
  p.push(`<g class="totem-hair">`);
  p.push(`<path d="M10,18 C10,3 16,-2 25,-2 C34,-2 40,3 40,18 Q36,8 25,8 Q14,8 10,18 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M25,-2 C30,-2 36,1 38,8 Q36,5 32,6 Q28,7 25,5 Z" fill="${HAIR}"/>`);
  p.push(`</g>`);
  // Closed eyes — soft curved arcs
  p.push(`<path d="M16,19 Q19.5,22 23,19" fill="none" stroke="${EYELID}" stroke-width="1.5" stroke-linecap="round"/>`);
  p.push(`<path d="M27,19 Q30.5,22 33,19" fill="none" stroke="${EYELID}" stroke-width="1.5" stroke-linecap="round"/>`);
  // Rosy cheeks
  p.push(`<circle cx="14" cy="22" r="2.5" fill="${CHEEK}" opacity="0.3"/>`);
  p.push(`<circle cx="36" cy="22" r="2.5" fill="${CHEEK}" opacity="0.3"/>`);
  // Peaceful mouth
  p.push(`<path d="M23,25 Q25,26.5 27,25" fill="none" stroke="${MOUTH}" stroke-width="1.2" stroke-linecap="round"/>`);
  return p.join('');
}

function blinkOverlay(): string {
  return `<g class="totem-blink">
    <circle cx="19.5" cy="19" r="5" fill="${SKIN}"/>
    <circle cx="30.5" cy="19" r="5" fill="${SKIN}"/>
  </g>`;
}

// ===== BODY — rounded shoulders, collar detail, proper proportions =====

function bodyShape(): string {
  const p: string[] = [];
  // Torso — rounded shoulders that flow naturally, slightly wider
  p.push(`<path d="M16,28 C16,24 20,22 25,22 C30,22 34,24 34,28 L34,48 C34,49.5 30,50 25,50 C20,50 16,49.5 16,48 Z" fill="${HOODIE}"/>`);
  // Collar/neckline detail
  p.push(`<path d="M21,23 Q25,26 29,23" fill="none" stroke="${SKIN}" stroke-width="1" stroke-linecap="round" opacity="0.6"/>`);
  // Pants with hip curve
  p.push(`<path d="M17,46 C17,45 20,44 25,44 C30,44 33,45 33,46 L33,52 C33,53 30,53 25,53 C20,53 17,53 17,52 Z" fill="${PANTS}"/>`);
  return p.join('');
}

// ===== ARMS — smoother curves, tapered forearms, rounded-rect hands =====

function leftArmShape(): string {
  const p: string[] = [];
  p.push(`<path d="M16,28 C12,29.5 9,33 9,37 L9,41 C9,42.5 10.5,43.5 12.5,43.5 C14,43.5 15.5,42.5 15.5,41 L15.5,36 C15.5,33 16,31 16,28 Z" fill="${HOODIE}"/>`);
  // Rounded-rect hand
  p.push(`<rect x="9" y="42" width="5.5" height="4" rx="2" fill="${SKIN}"/>`);
  return p.join('');
}

function rightArmShape(): string {
  const p: string[] = [];
  p.push(`<path d="M34,28 C38,29.5 41,33 41,37 L41,41 C41,42.5 39.5,43.5 37.5,43.5 C36,43.5 34.5,42.5 34.5,41 L34.5,36 C34.5,33 34,31 34,28 Z" fill="${HOODIE}"/>`);
  // Rounded-rect hand
  p.push(`<rect x="35.5" y="42" width="5.5" height="4" rx="2" fill="${SKIN}"/>`);
  return p.join('');
}

function rightArmWithPanShape(): string {
  const p: string[] = [];
  p.push(`<path d="M34,28 C38,29.5 41,33 41,37 L41,41 C41,42.5 39.5,43.5 37.5,43.5 C36,43.5 34.5,42.5 34.5,41 L34.5,36 C34.5,33 34,31 34,28 Z" fill="${HOODIE}"/>`);
  p.push(`<rect x="35.5" y="42" width="5.5" height="4" rx="2" fill="${SKIN}"/>`);
  // Pan — cleaner shapes with consistent stroke
  p.push(`<ellipse cx="43" cy="39" rx="5.5" ry="3.5" fill="${PAN}"/>`);
  p.push(`<ellipse cx="43" cy="39" rx="4.5" ry="2.5" fill="${PAN_DARK}"/>`);
  p.push(`<ellipse cx="43" cy="38.5" rx="2.5" ry="1.8" fill="${FOOD_EGG}"/>`);
  p.push(`<circle cx="43" cy="38.5" r="1" fill="${FOOD_YLK}"/>`);
  p.push(`<rect x="47.5" y="37.5" width="2" height="3.5" rx="1" fill="${PAN_HANDLE}"/>`);
  return p.join('');
}

function leftArmWithSpatulaShape(): string {
  const p: string[] = [];
  p.push(`<path d="M16,28 C12,29.5 9,33 9,37 L9,41 C9,42.5 10.5,43.5 12.5,43.5 C14,43.5 15.5,42.5 15.5,41 L15.5,36 C15.5,33 16,31 16,28 Z" fill="${HOODIE}"/>`);
  p.push(`<rect x="9" y="42" width="5.5" height="4" rx="2" fill="${SKIN}"/>`);
  // Spatula
  p.push(`<rect x="6" y="33" width="2" height="9" rx="1" fill="${PAN_HANDLE}"/>`);
  p.push(`<path d="M4,28 L10,28 L10,33 Q7,34 4,33 Z" fill="${PAN}" rx="1.5"/>`);
  return p.join('');
}

// ===== LEGS — tapered paths + proper shoe shapes =====

function leftLegShape(): string {
  const p: string[] = [];
  // Tapered leg — wider at thigh, narrower at ankle
  p.push(`<path d="M19,51 C19,50 20,49 22,49 C24,49 25,50 25,51 L24.5,62 C24.5,63 23.5,63.5 22,63.5 C20.5,63.5 19.5,63 19.5,62 Z" fill="${PANTS}"/>`);
  // Shoe — proper shape with flat bottom and rounded toe
  p.push(`<path d="M18,62 C18,61 19.5,60.5 22,60.5 C24,60.5 25,61 25.5,62 L25.5,64 C25.5,65.5 24,66 22,66 C19,66 17,65.5 17,64 Z" fill="${SHOES}"/>`);
  return p.join('');
}

function rightLegShape(): string {
  const p: string[] = [];
  // Tapered leg
  p.push(`<path d="M25,51 C25,50 26,49 28,49 C30,49 31,50 31,51 L30.5,62 C30.5,63 29.5,63.5 28,63.5 C26.5,63.5 25.5,63 25.5,62 Z" fill="${PANTS}"/>`);
  // Shoe
  p.push(`<path d="M24.5,62 C24.5,61 26,60.5 28,60.5 C30,60.5 31.5,61 32,62 L32,64 C32,65.5 30.5,66 28,66 C25.5,66 24,65.5 24,64 Z" fill="${SHOES}"/>`);
  return p.join('');
}

// ===== PROPS — cleaned up with consistent proportions =====

function phoneProp(): string {
  const p: string[] = [];
  p.push(`<rect x="39" y="39" width="5" height="8" rx="1.2" fill="${PHONE_BODY}"/>`);
  p.push(`<rect x="40" y="40.5" width="3" height="5" rx="0.6" fill="${PHONE_SCREEN}"/>`);
  p.push(`<rect x="40" y="40.5" width="3" height="5" rx="0.6" fill="${PHONE_SCREEN}" opacity="0.2"><animate attributeName="opacity" values="0.15;0.3;0.18;0.25;0.15" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function laptopProp(): string {
  const p: string[] = [];
  // Screen
  p.push(`<rect x="13" y="33" width="24" height="8" rx="1.5" fill="${LAPTOP_FRAME}"/>`);
  p.push(`<rect x="14.5" y="34" width="21" height="6" rx="1" fill="${LAPTOP_SCREEN}"/>`);
  // Base
  p.push(`<rect x="12" y="41" width="26" height="3" rx="1.5" fill="${LAPTOP_FRAME}"/>`);
  p.push(`<rect x="14" y="41.5" width="22" height="2" rx="0.5" fill="${LAPTOP_KEY}"/>`);
  // Glow
  p.push(`<rect x="14.5" y="34" width="21" height="6" rx="1" fill="${LAPTOP_GLOW}" opacity="0.12"><animate attributeName="opacity" values="0.08;0.18;0.1;0.15;0.08" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function pillowProp(): string {
  const p: string[] = [];
  p.push(`<path d="M8,18 Q8,16 12,16 L38,16 Q42,16 42,18 L42,24 Q42,26 38,26 L12,26 Q8,26 8,24 Z" fill="${PILLOW_FILL}"/>`);
  p.push(`<path d="M8,18 Q8,16 12,16 L14,16 Q10,16 10,18 L10,24 Q10,26 14,26 L12,26 Q8,26 8,24 Z" fill="${PILLOW_SHADE}" opacity="0.5"/>`);
  p.push(`<path d="M36,16 L38,16 Q42,16 42,18 L42,24 Q42,26 38,26 L36,26 Q40,26 40,24 L40,18 Q40,16 36,16 Z" fill="${PILLOW_SHADE}" opacity="0.5"/>`);
  return p.join('');
}

function blanketProp(): string {
  const p: string[] = [];
  p.push(`<path d="M10,32 Q10,30 13,30 L37,30 Q40,30 40,32 L40,58 Q40,60 37,60 L13,60 Q10,60 10,58 Z" fill="${BLANKET}"/>`);
  p.push(`<path d="M11,32 Q11,30 14,30 L36,30 Q39,30 39,32 L39,35 Q39,36 36,36 L14,36 Q11,36 11,35 Z" fill="${BLANKET_HI}"/>`);
  return p.join('');
}

function remoteProp(): string {
  const p: string[] = [];
  p.push(`<rect x="39" y="41" width="3.5" height="7" rx="1.2" fill="${PHONE_BODY}"/>`);
  p.push(`<circle cx="40.8" cy="43" r="0.7" fill="#E06060"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function drinkProp(): string {
  const p: string[] = [];
  p.push(`<path d="M4,54 L4,60 Q4,61 5,61 L8,61 Q9,61 9,60 L9,54 Z" fill="${PAN}"/>`);
  p.push(`<path d="M9,56 Q12,57 9,59" fill="none" stroke="${PAN_DARK}" stroke-width="1" stroke-linecap="round"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function bookProp(): string {
  const p: string[] = [];
  p.push(`<rect x="6" y="34" width="8" height="10" rx="1.5" fill="#5A3020"/>`);
  p.push(`<rect x="7.5" y="35" width="5.5" height="8" rx="0.8" fill="#E8D8C0"/>`);
  p.push(`<path d="M10.2,37 L11.5,37 M10.2,38.5 L12,38.5 M10.2,40 L11,40" stroke="#C0B090" stroke-width="0.5"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function mugProp(): string {
  const p: string[] = [];
  p.push(`<path d="M39,35 L39,41 Q39,42 40,42 L43,42 Q44,42 44,41 L44,35 Z" fill="#A05830"/>`);
  p.push(`<path d="M44,36.5 Q47,37.5 44,39.5" fill="none" stroke="#8A4820" stroke-width="1.2" stroke-linecap="round"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function markerProp(): string {
  const p: string[] = [];
  p.push(`<rect x="40" y="14" width="2.2" height="6" rx="0.8" fill="#E06060"/>`);
  p.push(`<path d="M40.3,20 L42,20 L41.1,23 Z" fill="#C0C0C0"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function plateProp(): string {
  const p: string[] = [];
  p.push(`<ellipse cx="12" cy="43" rx="6.5" ry="2" fill="${PAN}"/>`);
  p.push(`<ellipse cx="12" cy="42.5" rx="5" ry="1.5" fill="#E8E4DC"/>`);
  p.push(`<ellipse cx="12" cy="42" rx="3" ry="1.2" fill="#C8A040"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function spongeProp(): string {
  return `<g class="totem-prop"><rect x="5" y="38" width="5.5" height="4" rx="1.5" fill="#E8D040"/><rect x="5" y="38" width="5.5" height="1.5" rx="0.8" fill="#D0C030"/></g>`;
}

function bowlProp(): string {
  const p: string[] = [];
  p.push(`<path d="M13,36 Q13,43 19,43 Q25,43 25,36" fill="${PAN}"/>`);
  p.push(`<ellipse cx="19" cy="36" rx="6" ry="1.5" fill="${PAN_DARK}"/>`);
  p.push(`<ellipse cx="19" cy="36.5" rx="4" ry="1" fill="#C8A040" opacity="0.6"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function controllerProp(): string {
  const p: string[] = [];
  p.push(`<path d="M13,43 Q13,41 15,41 L21,41 Q23,41 23,43 L23,46 Q23,47 21,47 L15,47 Q13,47 13,46 Z" fill="${PHONE_BODY}"/>`);
  p.push(`<circle cx="16" cy="44" r="1.2" fill="#A04040"/>`);
  p.push(`<circle cx="20" cy="44" r="1.2" fill="#4060A0"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function shirtProp(): string {
  const p: string[] = [];
  p.push(`<path d="M2,28 L7,28 Q8,28 8,29 L8,33 Q8,34 7,34 L2,34 Q1,34 1,33 L1,29 Q1,28 2,28 Z" fill="#6080A0"/>`);
  p.push(`<path d="M42,28 L47,28 Q48,28 48,29 L48,33 Q48,34 47,34 L42,34 Q41,34 41,33 L41,29 Q41,28 42,28 Z" fill="#6080A0"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function phoneUpProp(): string {
  const p: string[] = [];
  p.push(`<rect x="19" y="8" width="12" height="6" rx="1.5" fill="${PHONE_BODY}"/>`);
  p.push(`<rect x="20" y="9" width="10" height="4" rx="1" fill="${PHONE_SCREEN}"/>`);
  p.push(`<rect x="20" y="9" width="10" height="4" rx="1" fill="${PHONE_SCREEN}" opacity="0.25"><animate attributeName="opacity" values="0.2;0.35;0.22;0.3;0.2" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function nappingZzz(): string {
  return `<g class="totem-nap-zzz">
    <text x="38" y="8" fill="${WHITE}" font-size="6px" font-family="monospace" opacity="0">z</text>
    <text x="40" y="14" fill="${WHITE}" font-size="5px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="25" cy="68" rx="12" ry="2.5" fill="#000" opacity="0.12"/>`;
}

function codeFloat(): string {
  return `<g class="totem-code-float">
    <text x="3" y="6" fill="#7ABCE0" font-size="7px" font-family="monospace" font-weight="bold" opacity="0">&lt;/&gt;</text>
    <text x="38" y="10" fill="#A0D070" font-size="6px" font-family="monospace" font-weight="bold" opacity="0">{ }</text>
    <text x="5" y="16" fill="#D0A0E0" font-size="5px" font-family="monospace" font-weight="bold" opacity="0">( )</text>
  </g>`;
}

function steamFloat(): string {
  return `<g class="totem-steam-float">
    <text x="38" y="10" fill="#E8E8E8" font-size="6px" font-family="sans-serif" opacity="0">~</text>
    <text x="40" y="16" fill="#D0D0D0" font-size="5px" font-family="sans-serif" opacity="0">~</text>
    <text x="36" y="22" fill="#C0C0C0" font-size="5.5px" font-family="sans-serif" opacity="0">~</text>
  </g>`;
}

function sleepingZzz(): string {
  return `<g class="totem-zzz">
    <text x="38" y="5" fill="${WHITE}" font-size="7px" font-family="monospace" opacity="0">Z</text>
    <text x="40" y="13" fill="${WHITE}" font-size="6px" font-family="monospace" opacity="0">z</text>
    <text x="38" y="19" fill="${WHITE}" font-size="5px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

// ===== MAIN EXPORT =====

function standardPose(head: string, leftArm: string, rightArm: string): string {
  const p: string[] = [];
  p.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
  p.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
  p.push(`<g class="totem-body">${bodyShape()}</g>`);
  p.push(leftArm);
  p.push(rightArm);
  p.push(`<g class="totem-head">${head}</g>`);
  return p.join('');
}

export function getTotemSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as Activity) ? activity : 'idle') as Activity;

  const parts: string[] = [groundShadow(), `<g class="totem-character">`];
  const awakeHead = `${headShape()}${blinkOverlay()}`;
  const sleepHead = sleepingHeadShape();
  const lArm = `<g class="totem-left-arm">${leftArmShape()}</g>`;
  const rArm = `<g class="totem-right-arm">${rightArmShape()}</g>`;

  if (act === 'sleeping') {
    parts.push(pillowProp());
    parts.push(standardPose(sleepHead, lArm, rArm));
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'cooking') {
    parts.push(standardPose(awakeHead,
      `<g class="totem-left-arm">${leftArmWithSpatulaShape()}</g>`,
      `<g class="totem-right-arm">${rightArmWithPanShape()}</g>`));
  } else if (act === 'studying') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(laptopProp());
    parts.push(lArm);
    parts.push(rArm);
    parts.push(`<g class="totem-head">${awakeHead}</g>`);
  } else if (act === 'watching') {
    parts.push(standardPose(awakeHead, lArm, rArm));
    parts.push(remoteProp());
    parts.push(drinkProp());
  } else if (act === 'reading' || act === 'reading-couch') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(bookProp());
    parts.push(lArm);
    parts.push(rArm);
    parts.push(`<g class="totem-head">${awakeHead}</g>`);
  } else if (act === 'coffee-break' || act === 'coffee-making') {
    parts.push(standardPose(awakeHead, lArm, rArm));
    parts.push(mugProp());
  } else if (act === 'whiteboarding') {
    parts.push(standardPose(awakeHead, lArm, rArm));
    parts.push(markerProp());
  } else if (act === 'phone-call') {
    parts.push(standardPose(awakeHead, lArm, rArm));
    parts.push(phoneProp());
  } else if (act === 'eating') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(plateProp());
    parts.push(lArm);
    parts.push(rArm);
    parts.push(`<g class="totem-head">${awakeHead}</g>`);
  } else if (act === 'washing-dishes') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(spongeProp());
    parts.push(lArm);
    parts.push(rArm);
    parts.push(`<g class="totem-head">${awakeHead}</g>`);
  } else if (act === 'baking') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(bowlProp());
    parts.push(lArm);
    parts.push(rArm);
    parts.push(`<g class="totem-head">${awakeHead}</g>`);
  } else if (act === 'gaming') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(controllerProp());
    parts.push(lArm);
    parts.push(rArm);
    parts.push(`<g class="totem-head">${awakeHead}</g>`);
  } else if (act === 'napping' || act === 'meditating') {
    parts.push(standardPose(sleepHead, lArm, rArm));
  } else if (act === 'reading-bed' || act === 'phone-bed') {
    parts.push(pillowProp());
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    if (act === 'reading-bed') parts.push(bookProp());
    parts.push(lArm);
    parts.push(rArm);
    parts.push(`<g class="totem-head">${awakeHead}</g>`);
    if (act === 'phone-bed') parts.push(phoneUpProp());
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'getting-dressed') {
    parts.push(standardPose(awakeHead, lArm, rArm));
    parts.push(shirtProp());
  } else if (act === 'idle') {
    parts.push(standardPose(awakeHead, lArm, rArm));
    parts.push(phoneProp());
  } else {
    // walking + thinking + relaxing + stretching + morning-stretch + snacking
    parts.push(standardPose(awakeHead, lArm, rArm));
  }

  parts.push(`</g>`);

  if (act === 'sleeping') parts.push(sleepingZzz());
  if (act === 'napping') parts.push(nappingZzz());
  if (act === 'studying') parts.push(codeFloat());
  if (act === 'cooking' || act === 'coffee-making') parts.push(steamFloat());

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="totem-avatar totem-${act}">
  ${parts.join('')}
</svg>`;
}

export const totemStyles = `
  .totem-avatar {
    width: 100%;
    height: auto;
    display: block;
  }

  /* ===== EYE BLINK ===== */
  .totem-blink {
    opacity: 0;
  }
  .totem-avatar:not(.totem-sleeping) .totem-blink {
    animation: totem-blink 5s step-end infinite;
  }
  @keyframes totem-blink {
    0%, 82%, 100% { opacity: 0; }
    84% { opacity: 1; }
    86% { opacity: 0; }
    88% { opacity: 0.3; }
    90% { opacity: 1; }
    94% { opacity: 0; }
  }

  /* ===== GROUND SHADOW ===== */
  .totem-shadow {
    transform-origin: 25px 68px;
  }

  /* ===== IDLE ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .totem-idle .totem-head {
    animation: totem-idle-head 6s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite, totem-weight-shift 4s ease-in-out infinite;
    animation-delay: 0s, 0.5s;
    transform-origin: 25px 48px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: 34px 28px;
  }
  .totem-idle .totem-shadow {
    animation: totem-shadow-idle 2.8s ease-in-out infinite;
  }
  @keyframes totem-bob {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-0.5px); }
    50% { transform: translateY(-2px); }
    75% { transform: translateY(-0.5px); }
  }
  @keyframes totem-idle-head {
    0%, 100% { transform: rotate(0deg); }
    15% { transform: rotate(2deg); }
    35% { transform: rotate(1deg); }
    50% { transform: rotate(-2.5deg); }
    70% { transform: rotate(-1deg); }
    85% { transform: rotate(1.5deg); }
  }
  @keyframes totem-weight-shift {
    0%, 100% { transform: translateX(0); }
    40% { transform: translateX(1px); }
    60% { transform: translateX(-0.7px); }
  }
  @keyframes totem-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.018); }
  }
  @keyframes totem-idle-arm-l {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-3deg); }
  }
  @keyframes totem-idle-arm-r {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(3deg); }
  }
  @keyframes totem-shadow-idle {
    0%, 100% { transform: scaleX(1); opacity: 0.12; }
    50% { transform: scaleX(0.9); opacity: 0.08; }
  }

  /* ===== WALKING ===== */
  .totem-walking .totem-character {
    animation: totem-walk-bob 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .totem-walking .totem-head {
    animation: totem-walk-lean 0.4s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-walking .totem-left-arm {
    animation: totem-arm-swing-l 0.4s ease-in-out infinite alternate;
    transform-origin: 16px 28px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: 34px 28px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-stride-l 0.4s ease-in-out infinite alternate;
    transform-origin: 22px 50px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-stride-r 0.4s ease-in-out infinite alternate;
    transform-origin: 28px 50px;
  }
  .totem-walking .totem-shadow {
    animation: totem-shadow-walk 0.4s ease-in-out infinite;
  }
  @keyframes totem-walk-bob {
    0%, 100% { transform: translateY(0) scaleY(1); }
    20% { transform: translateY(1px) scaleY(0.97); }
    50% { transform: translateY(-2px) scaleY(1.02); }
    80% { transform: translateY(0.6px) scaleY(0.98); }
  }
  @keyframes totem-walk-lean {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    50% { transform: rotate(3deg) translateY(-1px); }
  }
  @keyframes totem-arm-swing-l {
    0% { transform: rotate(-25deg); }
    70% { transform: rotate(28deg); }
    100% { transform: rotate(22deg); }
  }
  @keyframes totem-arm-swing-r {
    0% { transform: rotate(25deg); }
    70% { transform: rotate(-28deg); }
    100% { transform: rotate(-22deg); }
  }
  @keyframes totem-stride-l {
    0% { transform: rotate(-18deg) translateY(0); }
    30% { transform: rotate(0deg) translateY(-1.5px); }
    50% { transform: rotate(18deg) translateY(0); }
    80% { transform: rotate(0deg) translateY(1px); }
    100% { transform: rotate(-18deg) translateY(0); }
  }
  @keyframes totem-stride-r {
    0% { transform: rotate(18deg) translateY(0); }
    30% { transform: rotate(0deg) translateY(-1.5px); }
    50% { transform: rotate(-18deg) translateY(0); }
    80% { transform: rotate(0deg) translateY(1px); }
    100% { transform: rotate(18deg) translateY(0); }
  }
  @keyframes totem-shadow-walk {
    0%, 100% { transform: scaleX(1); opacity: 0.12; }
    50% { transform: scaleX(0.8); opacity: 0.06; }
  }

  /* ===== STUDYING ===== */
  .totem-studying .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 22px 50px;
  }
  .totem-studying .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 28px 50px;
  }
  .totem-studying .totem-character {
    animation: totem-study-settle 3s ease-in-out infinite;
  }
  .totem-studying .totem-head {
    animation: totem-study-head 2.5s ease-in-out infinite, totem-study-nod 3s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-studying .totem-body {
    animation: totem-study-lean 4s ease-in-out infinite, totem-study-rock 5s ease-in-out infinite;
    animation-delay: 0s, 1s;
    transform-origin: 25px 48px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    transform-origin: 34px 28px;
    animation-delay: 0.08s;
  }
  .totem-studying .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.1;
  }
  @keyframes totem-study-settle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(1px); }
  }
  @keyframes totem-study-head {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    30% { transform: rotate(-2deg) translateY(1.5px); }
    70% { transform: rotate(1deg) translateY(0); }
  }
  @keyframes totem-study-nod {
    0%, 100% { transform: translateY(0); }
    20% { transform: translateY(1px); }
    25%, 45% { transform: translateY(0); }
    45% { transform: translateY(1.5px); }
    55% { transform: translateY(0.6px); }
  }
  @keyframes totem-study-rock {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(1deg); }
    70% { transform: rotate(-0.8deg); }
  }
  @keyframes totem-study-lean {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(1.5deg); }
  }
  @keyframes totem-type-l {
    0%, 55%, 75%, 100% { transform: rotate(-6deg) translateY(0); }
    10% { transform: rotate(5deg) translateY(-2px); }
    20% { transform: rotate(-4deg) translateY(0); }
    30% { transform: rotate(6deg) translateY(-2px); }
    40% { transform: rotate(-3deg) translateY(0); }
    50% { transform: rotate(5deg) translateY(-2px); }
    80% { transform: rotate(-5deg) translateY(0); }
    90% { transform: rotate(4deg) translateY(-2px); }
  }
  @keyframes totem-type-r {
    0%, 55%, 75%, 100% { transform: rotate(6deg) translateY(0); }
    10% { transform: rotate(-4deg) translateY(-2px); }
    20% { transform: rotate(5deg) translateY(0); }
    30% { transform: rotate(-5deg) translateY(-2px); }
    40% { transform: rotate(4deg) translateY(0); }
    50% { transform: rotate(-6deg) translateY(-2px); }
    80% { transform: rotate(6deg) translateY(0); }
    90% { transform: rotate(-5deg) translateY(-2px); }
  }

  /* ===== COOKING ===== */
  .totem-cooking .totem-character {
    animation: totem-cook-weight 2s ease-in-out infinite;
  }
  .totem-cooking .totem-head {
    animation: totem-cook-head 2s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
  .totem-cooking .totem-right-arm {
    animation: totem-stir 0.9s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 34px 28px;
  }
  .totem-cooking .totem-left-arm {
    animation: totem-spatula-flip 2.5s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .totem-cooking .totem-shadow {
    animation: totem-shadow-idle 2s ease-in-out infinite;
  }
  @keyframes totem-cook-weight {
    0%, 100% { transform: translateX(0); }
    30% { transform: translateX(1.5px); }
    70% { transform: translateX(-1px); }
  }
  @keyframes totem-cook-head {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-4deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(3deg); }
  }
  @keyframes totem-stir {
    0%, 100% { transform: rotate(0deg) translateY(-2px); }
    15% { transform: rotate(-8deg) translateY(-4px); }
    30% { transform: rotate(-16deg) translateY(-5px); }
    45% { transform: rotate(-8deg) translateY(-6px); }
    60% { transform: rotate(16deg) translateY(-4px); }
    75% { transform: rotate(10deg) translateY(-2px); }
    85% { transform: rotate(4deg) translateY(-1px); }
  }
  @keyframes totem-spatula-flip {
    0%, 100% { transform: rotate(-10deg) translateY(-2px); }
    40% { transform: rotate(-8deg) translateY(-1px); }
    45% { transform: rotate(-20deg) translateY(-5px); }
    55% { transform: rotate(-15deg) translateY(-4px); }
  }

  /* ===== STUDYING CODE FLOAT ===== */
  .totem-studying .totem-code-float text:nth-child(1) {
    animation: totem-code-1 3s ease-in-out infinite;
  }
  .totem-studying .totem-code-float text:nth-child(2) {
    animation: totem-code-2 3s ease-in-out infinite;
    animation-delay: 0.8s;
  }
  .totem-studying .totem-code-float text:nth-child(3) {
    animation: totem-code-3 3s ease-in-out infinite;
    animation-delay: 1.6s;
  }
  @keyframes totem-code-1 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.9; transform: translate(1.5px, -2px); }
    85% { opacity: 0.5; transform: translate(3px, -10px); }
    100% { opacity: 0; transform: translate(4px, -13px); }
  }
  @keyframes totem-code-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.8; transform: translate(-1px, -1.5px); }
    85% { opacity: 0.4; transform: translate(-3px, -8px); }
    100% { opacity: 0; transform: translate(-4px, -10px); }
  }
  @keyframes totem-code-3 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; transform: translate(0.6px, -1px); }
    85% { opacity: 0.35; transform: translate(1.5px, -6px); }
    100% { opacity: 0; transform: translate(2px, -8px); }
  }

  /* ===== COOKING STEAM FLOAT ===== */
  .totem-cooking .totem-steam-float text:nth-child(1) {
    animation: totem-steam-1 2.5s ease-in-out infinite;
  }
  .totem-cooking .totem-steam-float text:nth-child(2) {
    animation: totem-steam-2 2.5s ease-in-out infinite;
    animation-delay: 0.7s;
  }
  .totem-cooking .totem-steam-float text:nth-child(3) {
    animation: totem-steam-3 2.5s ease-in-out infinite;
    animation-delay: 1.4s;
  }
  @keyframes totem-steam-1 {
    0% { opacity: 0; transform: translate(0, 0) scaleX(1); }
    15% { opacity: 0.7; transform: translate(1px, -2px) scaleX(1.1); }
    85% { opacity: 0.2; transform: translate(-1.5px, -10px) scaleX(1.4); }
    100% { opacity: 0; transform: translate(-2px, -13px) scaleX(1.5); }
  }
  @keyframes totem-steam-2 {
    0% { opacity: 0; transform: translate(0, 0) scaleX(1); }
    15% { opacity: 0.6; transform: translate(1.5px, -1.5px) scaleX(1.1); }
    85% { opacity: 0.15; transform: translate(3px, -8px) scaleX(1.3); }
    100% { opacity: 0; transform: translate(4px, -10px) scaleX(1.5); }
  }
  @keyframes totem-steam-3 {
    0% { opacity: 0; transform: translate(0, 0) scaleX(1); }
    15% { opacity: 0.5; transform: translate(-0.6px, -1px) scaleX(1.05); }
    85% { opacity: 0.1; transform: translate(1px, -6px) scaleX(1.3); }
    100% { opacity: 0; transform: translate(1.5px, -8px) scaleX(1.4); }
  }

  /* ===== WATCHING ===== */
  .totem-watching .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 22px 50px;
  }
  .totem-watching .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 28px 50px;
  }
  .totem-watching .totem-character {
    animation: totem-watch-settle 4s ease-in-out infinite;
  }
  .totem-watching .totem-head {
    animation: totem-watch-head 5s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-watching .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite, totem-watch-lean 6s ease-in-out infinite;
    animation-delay: 0s, 0.5s;
    transform-origin: 25px 48px;
  }
  .totem-watching .totem-left-arm {
    animation: totem-watch-arm-l 5s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .totem-watching .totem-right-arm {
    animation: totem-watch-arm-r 7s ease-in-out infinite;
    transform-origin: 34px 28px;
  }
  .totem-watching .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.1;
  }
  @keyframes totem-watch-settle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(0.6px); }
  }
  @keyframes totem-watch-head {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(3deg); }
    50% { transform: rotate(1deg); }
    70% { transform: rotate(-2deg); }
    90% { transform: rotate(4deg); }
  }
  @keyframes totem-watch-lean {
    0%, 100% { transform: rotate(0deg); }
    40% { transform: rotate(2deg); }
    60% { transform: rotate(-1deg); }
  }
  @keyframes totem-watch-arm-l {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(-2deg); }
    60% { transform: rotate(1deg); }
  }
  @keyframes totem-watch-arm-r {
    0%, 85%, 100% { transform: rotate(0deg); }
    88% { transform: rotate(-8deg); }
    92% { transform: rotate(0deg); }
  }

  /* ===== SLEEPING ===== */
  .totem-sleeping {
    transform: rotate(-90deg) scale(0.9);
    transform-origin: center center;
  }
  .totem-sleeping .totem-shadow {
    opacity: 0;
  }
  .totem-sleeping .totem-blanket {
    animation: totem-blanket-ripple 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    animation-delay: 0.5s;
    transform-origin: 25px 47px;
  }
  .totem-sleeping .totem-body {
    animation: totem-sleep-deep 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 25px 38px;
  }
  .totem-sleeping .totem-left-arm {
    animation: totem-sleep-arm 4s ease-in-out infinite, totem-sleep-twitch 7s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .totem-sleeping .totem-zzz text:nth-child(1) {
    animation: totem-zzz 2.5s ease-in-out infinite;
  }
  .totem-sleeping .totem-zzz text:nth-child(2) {
    animation: totem-zzz-2 2.5s ease-in-out infinite;
    animation-delay: 0.6s;
  }
  .totem-sleeping .totem-zzz text:nth-child(3) {
    animation: totem-zzz-3 2.5s ease-in-out infinite;
    animation-delay: 1.2s;
  }
  @keyframes totem-sleep-deep {
    0%, 100% { transform: scaleY(1) scaleX(1); }
    20% { transform: scaleY(1.05) scaleX(0.98); }
    40% { transform: scaleY(1.06) scaleX(0.97); }
    60% { transform: scaleY(1.03) scaleX(0.99); }
  }
  @keyframes totem-blanket-ripple {
    0%, 100% { transform: scaleY(1) translateY(0); }
    30% { transform: scaleY(1.02) translateY(-0.6px); }
    60% { transform: scaleY(0.99) translateY(0.3px); }
  }
  @keyframes totem-sleep-twitch {
    0%, 90%, 100% { transform: translate(0, 0); }
    93% { transform: translate(1px, -0.6px); }
    96% { transform: translate(-0.6px, 0.3px); }
  }
  @keyframes totem-sleep-arm {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-3deg); }
  }
  @keyframes totem-zzz {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 1; transform: translate(1px, -1.5px); }
    85% { opacity: 0.7; transform: translate(2px, -9px); }
    100% { opacity: 0; transform: translate(3px, -10px); }
  }
  @keyframes totem-zzz-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.9; transform: translate(-0.6px, -1px); }
    85% { opacity: 0.6; transform: translate(-2.5px, -7px); }
    100% { opacity: 0; transform: translate(-3px, -8px); }
  }
  @keyframes totem-zzz-3 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; transform: translate(0.3px, -0.6px); }
    85% { opacity: 0.5; transform: translate(1.2px, -5px); }
    100% { opacity: 0; transform: translate(1.5px, -6px); }
  }

  /* ===== READING ===== */
  .totem-reading .totem-character {
    animation: totem-bob 3.2s ease-in-out infinite;
  }
  .totem-reading .totem-head {
    animation: totem-read-head 4s ease-in-out infinite;
    transform-origin: 25px 30px;
  }
  .totem-reading .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .totem-reading .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
  @keyframes totem-read-head {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    25% { transform: rotate(-3deg) translateY(0.6px); }
    75% { transform: rotate(2deg) translateY(0); }
  }
  @keyframes totem-read-arm {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-2deg); }
  }

  /* ===== NAP ZZZ ===== */
  .totem-napping .totem-nap-zzz text:nth-child(1) {
    animation: totem-zzz 3s ease-in-out infinite;
  }
  .totem-napping .totem-nap-zzz text:nth-child(2) {
    animation: totem-zzz-2 3s ease-in-out infinite;
    animation-delay: 0.8s;
  }
  .totem-napping .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
  .totem-napping .totem-head {
    animation: totem-idle-head 8s ease-in-out infinite;
    transform-origin: 25px 30px;
  }

  /* ===== COFFEE-MAKING STEAM ===== */
  .totem-coffee-making .totem-steam-float text:nth-child(1) {
    animation: totem-steam-1 2.5s ease-in-out infinite;
  }
  .totem-coffee-making .totem-steam-float text:nth-child(2) {
    animation: totem-steam-2 2.5s ease-in-out infinite;
    animation-delay: 0.7s;
  }
  .totem-coffee-making .totem-steam-float text:nth-child(3) {
    animation: totem-steam-3 2.5s ease-in-out infinite;
    animation-delay: 1.4s;
  }
`;
