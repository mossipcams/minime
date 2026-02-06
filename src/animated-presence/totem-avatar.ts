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

// ViewBox: 50x75 (smooth SVG)
const W = 50;
const H = 75;

// Character palette — muted, realistic tones
const HAIR = '#3C2D1E';
const HAIR_DARK = '#2A1E12';
const HAIR_HI = '#4E3C2A';
const SKIN = '#E4B898';
const SKIN_SHADOW = '#C89870';
const SKIN_HI = '#F2D0B4';
const EYES = '#1C1C1C';
const EYE_WHITE = '#E0DDD8';
const BROW = '#2E2010';
const MOUTH = '#B87868';
const MOUTH_SLEEP = '#A87068';
const HOODIE = '#506878';
const HOODIE_DARK = '#3C5060';
const HOODIE_HI = '#627888';
const HOODIE_LOGO = '#B8A040';
const PANTS = '#3A3A4A';
const PANTS_DARK = '#2C2C3A';
const PANTS_HI = '#484860';
const SHOES = '#5A4030';
const SHOES_DARK = '#3C2A1C';
const SHOES_SOLE = '#2E1E12';
const LACE = '#C8C8C0';
const WHITE = '#F0EEE8';
const EYELID = '#C0A078';

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
const BLANKET_DARK = '#584C84';
const BLANKET_HI = '#7C6CA4';

// ===== SMOOTH BODY PARTS =====

function headShape(): string {
  const parts: string[] = [];
  // Back hair — extends behind and below the head for volume
  parts.push(`<path d="M11,14 C11,3 15,-1 25,-1 C35,-1 39,3 39,14 C39,18 37,20 35,21 L15,21 C13,20 11,18 11,14 Z" fill="${HAIR}" stroke="${HAIR_DARK}" stroke-width="0.6"/>`);
  // Hair volume/texture — side chunks
  parts.push(`<path d="M11,14 C10,10 11,6 14,4 C12,8 12,12 13,15 Z" fill="${HAIR_DARK}" opacity="0.5"/>`);
  parts.push(`<path d="M39,14 C40,10 39,6 36,4 C38,8 38,12 37,15 Z" fill="${HAIR_DARK}" opacity="0.5"/>`);
  // Hair top highlight
  parts.push(`<path d="M18,1 C22,-1 28,-1 32,1 C29,0 22,0 18,1 Z" fill="${HAIR_HI}" opacity="0.6"/>`);
  // Face
  parts.push(`<ellipse cx="25" cy="14" rx="10" ry="8.5" fill="${SKIN}"/>`);
  // Face highlight
  parts.push(`<ellipse cx="23" cy="12" rx="5" ry="4" fill="${SKIN_HI}" opacity="0.35"/>`);
  // Hair bangs — side-swept fringe overlaying forehead
  parts.push(`<g class="hair-bangs">`);
  parts.push(`<path d="M14,8 C15,4 18,2 22,1.5 C19,3 17,5.5 16,9 Z" fill="${HAIR}" stroke="${HAIR_DARK}" stroke-width="0.4"/>`);
  parts.push(`<path d="M22,1.5 C26,0.5 30,1 33,3 C30,2.5 26,3 23,5 C22,3 22,2 22,1.5 Z" fill="${HAIR}" stroke="${HAIR_DARK}" stroke-width="0.4"/>`);
  parts.push(`<path d="M33,3 C36,5 37,8 37,10 C36,7 34,5 31,4.5 Z" fill="${HAIR_HI}" stroke="${HAIR_DARK}" stroke-width="0.3"/>`);
  // Wispy bang tips on forehead
  parts.push(`<path d="M16,9 C17,7 19,6 21,6.5" fill="none" stroke="${HAIR}" stroke-width="1.2" stroke-linecap="round"/>`);
  parts.push(`<path d="M21,6 C23,5 26,5 28,5.5" fill="none" stroke="${HAIR}" stroke-width="0.8" stroke-linecap="round"/>`);
  parts.push(`</g>`);
  // Eyebrows
  parts.push(`<path d="M18,11 Q20,9.5 22,11" fill="none" stroke="${BROW}" stroke-width="1" stroke-linecap="round"/>`);
  parts.push(`<path d="M28,11 Q30,9.5 32,11" fill="none" stroke="${BROW}" stroke-width="1" stroke-linecap="round"/>`);
  // Open eyes
  parts.push(`<ellipse cx="20" cy="13" rx="2.2" ry="2" fill="${EYE_WHITE}"/>`);
  parts.push(`<circle cx="20.5" cy="13" r="1.2" fill="${EYES}"/>`);
  parts.push(`<ellipse cx="30" cy="13" rx="2.2" ry="2" fill="${EYE_WHITE}"/>`);
  parts.push(`<circle cx="30.5" cy="13" r="1.2" fill="${EYES}"/>`);
  // Eye highlights
  parts.push(`<circle cx="19.8" cy="12.3" r="0.5" fill="#FFF" opacity="0.7"/>`);
  parts.push(`<circle cx="29.8" cy="12.3" r="0.5" fill="#FFF" opacity="0.7"/>`);
  // Nose
  parts.push(`<ellipse cx="25" cy="16.5" rx="1" ry="0.6" fill="${SKIN_SHADOW}"/>`);
  // Mouth
  parts.push(`<path d="M22,19 Q25,20.5 28,19" fill="none" stroke="${MOUTH}" stroke-width="0.8" stroke-linecap="round"/>`);
  // Cheek blush
  parts.push(`<ellipse cx="17" cy="16" rx="2" ry="1.2" fill="#E8A090" opacity="0.2"/>`);
  parts.push(`<ellipse cx="33" cy="16" rx="2" ry="1.2" fill="#E8A090" opacity="0.2"/>`);
  return parts.join('');
}

function sleepingHeadShape(): string {
  const parts: string[] = [];
  // Back hair
  parts.push(`<path d="M11,14 C11,3 15,-1 25,-1 C35,-1 39,3 39,14 C39,18 37,20 35,21 L15,21 C13,20 11,18 11,14 Z" fill="${HAIR}" stroke="${HAIR_DARK}" stroke-width="0.6"/>`);
  parts.push(`<path d="M11,14 C10,10 11,6 14,4 C12,8 12,12 13,15 Z" fill="${HAIR_DARK}" opacity="0.5"/>`);
  parts.push(`<path d="M39,14 C40,10 39,6 36,4 C38,8 38,12 37,15 Z" fill="${HAIR_DARK}" opacity="0.5"/>`);
  parts.push(`<path d="M18,1 C22,-1 28,-1 32,1 C29,0 22,0 18,1 Z" fill="${HAIR_HI}" opacity="0.6"/>`);
  // Face
  parts.push(`<ellipse cx="25" cy="14" rx="10" ry="8.5" fill="${SKIN}"/>`);
  parts.push(`<ellipse cx="23" cy="12" rx="5" ry="4" fill="${SKIN_HI}" opacity="0.35"/>`);
  // Messy sleep bangs
  parts.push(`<g class="hair-bangs">`);
  parts.push(`<path d="M14,8 C15,4 18,2 22,1.5 C19,3 17,5.5 16,9 Z" fill="${HAIR}" stroke="${HAIR_DARK}" stroke-width="0.4"/>`);
  parts.push(`<path d="M22,1.5 C26,0.5 30,1 33,3 C30,2.5 26,3 23,5 C22,3 22,2 22,1.5 Z" fill="${HAIR}" stroke="${HAIR_DARK}" stroke-width="0.4"/>`);
  parts.push(`<path d="M33,3 C36,5 37,8 37,10 C36,7 34,5 31,4.5 Z" fill="${HAIR_HI}" stroke="${HAIR_DARK}" stroke-width="0.3"/>`);
  parts.push(`<path d="M16,9 C17,7 19,6 21,6.5" fill="none" stroke="${HAIR}" stroke-width="1.2" stroke-linecap="round"/>`);
  parts.push(`<path d="M21,6 C23,5 26,5 28,5.5" fill="none" stroke="${HAIR}" stroke-width="0.8" stroke-linecap="round"/>`);
  parts.push(`</g>`);
  // Closed eyes
  parts.push(`<path d="M18,13 Q20,14.5 22,13" fill="none" stroke="${EYELID}" stroke-width="1.2" stroke-linecap="round"/>`);
  parts.push(`<path d="M28,13 Q30,14.5 32,13" fill="none" stroke="${EYELID}" stroke-width="1.2" stroke-linecap="round"/>`);
  // Nose
  parts.push(`<ellipse cx="25" cy="16.5" rx="1" ry="0.6" fill="${SKIN_SHADOW}"/>`);
  // Peaceful mouth
  parts.push(`<path d="M23,19 Q25,20 27,19" fill="none" stroke="${MOUTH_SLEEP}" stroke-width="0.7" stroke-linecap="round"/>`);
  // Cheek blush
  parts.push(`<ellipse cx="17" cy="16" rx="2" ry="1.2" fill="#E8A090" opacity="0.25"/>`);
  parts.push(`<ellipse cx="33" cy="16" rx="2" ry="1.2" fill="#E8A090" opacity="0.25"/>`);
  return parts.join('');
}

function blinkOverlay(): string {
  // Skin-colored shapes over the eye area
  return `<g class="totem-blink">
    <ellipse cx="20" cy="13" rx="2.5" ry="2.2" fill="${SKIN}"/>
    <ellipse cx="30" cy="13" rx="2.5" ry="2.2" fill="${SKIN}"/>
  </g>`;
}

// ===== BODY =====

function bodyShape(): string {
  const parts: string[] = [];
  // Neck
  parts.push(`<rect x="22" y="21" width="6" height="4" rx="2" fill="${SKIN_SHADOW}"/>`);
  // Hoodie body — rounded rect
  parts.push(`<rect x="15" y="25" width="20" height="22" rx="4" fill="${HOODIE}"/>`);
  // Hoodie collar
  parts.push(`<path d="M18,25 Q25,28 32,25" fill="${HOODIE_HI}" stroke="none"/>`);
  // Hoodie side shading
  parts.push(`<rect x="15" y="25" width="4" height="22" rx="2" fill="${HOODIE_DARK}" opacity="0.5"/>`);
  parts.push(`<rect x="31" y="25" width="4" height="22" rx="2" fill="${HOODIE_DARK}" opacity="0.5"/>`);
  // Hoodie logo
  parts.push(`<circle cx="25" cy="35" r="2" fill="${HOODIE_LOGO}"/>`);
  // Belt/pants transition
  parts.push(`<rect x="16" y="44" width="18" height="5" rx="2" fill="${PANTS}"/>`);
  parts.push(`<rect x="16" y="44" width="4" height="5" rx="1" fill="${PANTS_DARK}" opacity="0.5"/>`);
  parts.push(`<rect x="30" y="44" width="4" height="5" rx="1" fill="${PANTS_DARK}" opacity="0.5"/>`);
  return parts.join('');
}

// ===== ARMS =====

function leftArmShape(): string {
  const parts: string[] = [];
  // Hoodie sleeve
  parts.push(`<rect x="7" y="26" width="8" height="14" rx="4" fill="${HOODIE}"/>`);
  parts.push(`<rect x="7" y="26" width="3" height="14" rx="1.5" fill="${HOODIE_DARK}" opacity="0.4"/>`);
  // Hand
  parts.push(`<ellipse cx="11" cy="42" rx="3" ry="2.5" fill="${SKIN}"/>`);
  return parts.join('');
}

function rightArmShape(): string {
  const parts: string[] = [];
  parts.push(`<rect x="35" y="26" width="8" height="14" rx="4" fill="${HOODIE}"/>`);
  parts.push(`<rect x="40" y="26" width="3" height="14" rx="1.5" fill="${HOODIE_DARK}" opacity="0.4"/>`);
  // Hand
  parts.push(`<ellipse cx="39" cy="42" rx="3" ry="2.5" fill="${SKIN}"/>`);
  return parts.join('');
}

function rightArmWithPanShape(): string {
  const parts: string[] = [];
  // Arm
  parts.push(`<rect x="35" y="26" width="8" height="14" rx="4" fill="${HOODIE}"/>`);
  parts.push(`<rect x="40" y="26" width="3" height="14" rx="1.5" fill="${HOODIE_DARK}" opacity="0.4"/>`);
  parts.push(`<ellipse cx="39" cy="42" rx="3" ry="2.5" fill="${SKIN}"/>`);
  // Frying pan
  parts.push(`<ellipse cx="44" cy="38" rx="5" ry="4" fill="${PAN}"/>`);
  parts.push(`<ellipse cx="44" cy="38" rx="4" ry="3" fill="${PAN_DARK}"/>`);
  // Food
  parts.push(`<ellipse cx="44" cy="37" rx="2.5" ry="2" fill="${FOOD_EGG}"/>`);
  parts.push(`<circle cx="44" cy="37" r="1" fill="${FOOD_YLK}"/>`);
  // Handle
  parts.push(`<rect x="48" y="36" width="2" height="4" rx="1" fill="${PAN_HANDLE}"/>`);
  return parts.join('');
}

function leftArmWithSpatulaShape(): string {
  const parts: string[] = [];
  // Arm
  parts.push(`<rect x="7" y="26" width="8" height="14" rx="4" fill="${HOODIE}"/>`);
  parts.push(`<rect x="7" y="26" width="3" height="14" rx="1.5" fill="${HOODIE_DARK}" opacity="0.4"/>`);
  parts.push(`<ellipse cx="11" cy="42" rx="3" ry="2.5" fill="${SKIN}"/>`);
  // Spatula
  parts.push(`<rect x="5" y="32" width="2" height="8" rx="1" fill="${PAN_HANDLE}"/>`);
  parts.push(`<rect x="3" y="28" width="6" height="5" rx="2" fill="${PAN}"/>`);
  return parts.join('');
}

// ===== LEGS =====

function leftLegShape(): string {
  const parts: string[] = [];
  // Pants leg
  parts.push(`<rect x="17" y="48" width="7" height="14" rx="3" fill="${PANTS}"/>`);
  parts.push(`<rect x="17" y="48" width="2.5" height="14" rx="1" fill="${PANTS_DARK}" opacity="0.4"/>`);
  // Shoe
  parts.push(`<path d="M15,63 Q15,60 18,60 L23,60 Q25,60 25,62 L25,64 Q25,66 22,66 L17,66 Q15,66 15,64 Z" fill="${SHOES}"/>`);
  parts.push(`<rect x="15" y="64.5" width="10" height="1.5" rx="0.5" fill="${SHOES_SOLE}"/>`);
  parts.push(`<line x1="18" y1="61" x2="23" y2="61" stroke="${LACE}" stroke-width="0.5"/>`);
  return parts.join('');
}

function rightLegShape(): string {
  const parts: string[] = [];
  parts.push(`<rect x="26" y="48" width="7" height="14" rx="3" fill="${PANTS}"/>`);
  parts.push(`<rect x="30.5" y="48" width="2.5" height="14" rx="1" fill="${PANTS_DARK}" opacity="0.4"/>`);
  // Shoe
  parts.push(`<path d="M25,63 Q25,60 27,60 L32,60 Q35,60 35,62 L35,64 Q35,66 33,66 L27,66 Q25,66 25,64 Z" fill="${SHOES}"/>`);
  parts.push(`<rect x="25" y="64.5" width="10" height="1.5" rx="0.5" fill="${SHOES_SOLE}"/>`);
  parts.push(`<line x1="27" y1="61" x2="32" y2="61" stroke="${LACE}" stroke-width="0.5"/>`);
  return parts.join('');
}

// ===== PROPS =====

function phoneProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="40" y="38" width="5" height="8" rx="1" fill="${PHONE_BODY}"/>`);
  parts.push(`<rect x="41" y="39.5" width="3" height="5" rx="0.5" fill="${PHONE_SCREEN}"/>`);
  parts.push(`<rect x="41" y="39.5" width="3" height="5" rx="0.5" fill="${PHONE_SCREEN}" opacity="0.2"><animate attributeName="opacity" values="0.15;0.3;0.18;0.25;0.15" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function laptopProp(): string {
  const parts: string[] = [];
  // Screen
  parts.push(`<rect x="14" y="33" width="22" height="8" rx="1.5" fill="${LAPTOP_FRAME}"/>`);
  parts.push(`<rect x="15.5" y="34" width="19" height="6" rx="1" fill="${LAPTOP_SCREEN}"/>`);
  // Screen glow lines
  parts.push(`<rect x="17" y="35.5" width="8" height="0.8" rx="0.4" fill="${LAPTOP_GLOW}" opacity="0.6"/>`);
  parts.push(`<rect x="17" y="37.5" width="12" height="0.8" rx="0.4" fill="${LAPTOP_GLOW}" opacity="0.4"/>`);
  // Keyboard
  parts.push(`<rect x="14" y="41" width="22" height="3" rx="1" fill="${LAPTOP_FRAME}"/>`);
  parts.push(`<rect x="16" y="41.5" width="18" height="2" rx="0.5" fill="${LAPTOP_KEY}"/>`);
  // Glow effect
  parts.push(`<rect x="15.5" y="34" width="19" height="6" rx="1" fill="${LAPTOP_GLOW}" opacity="0.12"><animate attributeName="opacity" values="0.08;0.18;0.1;0.15;0.08" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function pillowProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="8" y="18" width="34" height="8" rx="4" fill="${PILLOW_FILL}"/>`);
  parts.push(`<rect x="8" y="18" width="6" height="8" rx="3" fill="${PILLOW_SHADE}" opacity="0.5"/>`);
  parts.push(`<rect x="36" y="18" width="6" height="8" rx="3" fill="${PILLOW_SHADE}" opacity="0.5"/>`);
  return parts.join('');
}

function blanketProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="12" y="32" width="26" height="28" rx="3" fill="${BLANKET}"/>`);
  // Blanket texture stripes
  for (let y = 35; y < 58; y += 4) {
    parts.push(`<rect x="14" y="${y}" width="22" height="1.5" rx="0.5" fill="${(y % 8 === 3) ? BLANKET_HI : BLANKET_DARK}" opacity="0.4"/>`);
  }
  // Top fold
  parts.push(`<rect x="13" y="32" width="24" height="3" rx="1.5" fill="${BLANKET_HI}"/>`);
  return parts.join('');
}

function remoteProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="40" y="40" width="3" height="7" rx="1" fill="${PHONE_BODY}"/>`);
  parts.push(`<circle cx="41.5" cy="42" r="0.6" fill="#E06060"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function drinkProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="4" y="54" width="5" height="7" rx="1" fill="${PAN}"/>`);
  parts.push(`<path d="M9,56 Q12,57 9,59" fill="none" stroke="${PAN_DARK}" stroke-width="1"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function bookProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="7" y="34" width="8" height="10" rx="1" fill="#5A3020"/>`);
  parts.push(`<rect x="8" y="35" width="6" height="8" rx="0.5" fill="#E8D8C0"/>`);
  parts.push(`<line x1="11" y1="35" x2="11" y2="43" stroke="#5A3020" stroke-width="0.5"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function mugProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="39" y="35" width="5" height="6" rx="1" fill="#A05830"/>`);
  parts.push(`<path d="M44,36.5 Q47,37.5 44,39.5" fill="none" stroke="#8A4820" stroke-width="1.2"/>`);
  // Steam
  parts.push(`<path d="M40,34 Q39,30 41,27" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;0.2;0.12;0.06;0" dur="2.5s" repeatCount="indefinite"/></path>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function markerProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="40" y="14" width="2" height="6" rx="0.8" fill="#E06060"/>`);
  parts.push(`<rect x="40" y="20" width="2" height="3" rx="0.8" fill="#C0C0C0"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function plateProp(): string {
  const parts: string[] = [];
  parts.push(`<ellipse cx="12" cy="42" rx="6" ry="2" fill="${PAN}"/>`);
  parts.push(`<ellipse cx="11" cy="41" rx="2" ry="1" fill="#C8A040"/>`);
  parts.push(`<ellipse cx="14" cy="41" rx="1.5" ry="0.8" fill="#80B060"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function spongeProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="6" y="38" width="5" height="4" rx="1.5" fill="#E8D040"/>`);
  parts.push(`<rect x="7" y="39" width="3" height="2" rx="0.8" fill="#D8C030"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function bowlProp(): string {
  const parts: string[] = [];
  parts.push(`<path d="M13,36 Q13,42 19,42 Q25,42 25,36" fill="${PAN}"/>`);
  parts.push(`<ellipse cx="19" cy="36" rx="6" ry="1.5" fill="${PAN_DARK}"/>`);
  parts.push(`<ellipse cx="19" cy="35.5" rx="4.5" ry="1" fill="#E8D8C0"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function controllerProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="13" y="42" width="10" height="4" rx="2" fill="${PHONE_BODY}"/>`);
  parts.push(`<circle cx="16" cy="43.5" r="1" fill="#A04040"/>`);
  parts.push(`<circle cx="20" cy="43.5" r="1" fill="#4060A0"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function shirtProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="3" y="28" width="5" height="6" rx="1" fill="#6080A0"/>`);
  parts.push(`<rect x="42" y="28" width="5" height="6" rx="1" fill="#6080A0"/>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function phoneUpProp(): string {
  const parts: string[] = [];
  parts.push(`<rect x="20" y="8" width="10" height="6" rx="1.5" fill="${PHONE_BODY}"/>`);
  parts.push(`<rect x="21" y="9" width="8" height="4" rx="1" fill="${PHONE_SCREEN}"/>`);
  parts.push(`<rect x="21" y="9" width="8" height="4" rx="1" fill="${PHONE_SCREEN}" opacity="0.25"><animate attributeName="opacity" values="0.2;0.35;0.22;0.3;0.2" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${parts.join('')}</g>`;
}

function nappingZzz(): string {
  return `<g class="totem-nap-zzz">
    <text x="38" y="8" fill="${WHITE}" font-size="6px" font-family="monospace" opacity="0">z</text>
    <text x="40" y="14" fill="${WHITE}" font-size="5px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="25" cy="69" rx="11" ry="2" fill="#000" opacity="0.15"/>`;
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

export function getTotemSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as Activity) ? activity : 'idle') as Activity;

  const parts: string[] = [groundShadow(), `<g class="totem-character">`];

  if (act === 'sleeping') {
    parts.push(pillowProp());
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${sleepingHeadShape()}</g>`);
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'cooking') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmWithSpatulaShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmWithPanShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'studying') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(laptopProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'watching') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(remoteProp());
    parts.push(drinkProp());
  } else if (act === 'reading') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(bookProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'thinking') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'coffee-break') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(mugProp());
  } else if (act === 'whiteboarding') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(markerProp());
  } else if (act === 'phone-call') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(phoneProp());
  } else if (act === 'eating') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(plateProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'coffee-making') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(mugProp());
  } else if (act === 'washing-dishes') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(spongeProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'snacking') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'baking') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(bowlProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'gaming') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(controllerProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'reading-couch') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(bookProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'relaxing') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'stretching') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'napping') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${sleepingHeadShape()}</g>`);
  } else if (act === 'reading-bed') {
    parts.push(pillowProp());
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(bookProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'meditating') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${sleepingHeadShape()}</g>`);
  } else if (act === 'getting-dressed') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(shirtProp());
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'morning-stretch') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  } else if (act === 'phone-bed') {
    parts.push(pillowProp());
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(phoneUpProp());
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'idle') {
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
    parts.push(phoneProp());
  } else {
    // walking
    parts.push(`<g class="totem-left-leg">${leftLegShape()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegShape()}</g>`);
    parts.push(`<g class="totem-body">${bodyShape()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmShape()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmShape()}</g>`);
    parts.push(`<g class="totem-head">${headShape()}${blinkOverlay()}</g>`);
  }

  parts.push(`</g>`);

  if (act === 'sleeping') {
    parts.push(sleepingZzz());
  }

  if (act === 'napping') {
    parts.push(nappingZzz());
  }

  if (act === 'studying') {
    parts.push(codeFloat());
  }

  if (act === 'cooking' || act === 'coffee-making') {
    parts.push(steamFloat());
  }

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

  /* ===== EYE BLINK - Enhanced multi-frame ===== */
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
    transform-origin: 25px 69px;
  }

  /* ===== IDLE - Enhanced bob + breathe + weight shift + look around ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .totem-idle .totem-head {
    animation: totem-idle-head 6s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite, totem-weight-shift 4s ease-in-out infinite;
    animation-delay: 0s, 0.5s;
    transform-origin: 25px 47px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: 35px 27px;
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
    0%, 100% { transform: scaleX(1); opacity: 0.15; }
    50% { transform: scaleX(0.9); opacity: 0.1; }
  }

  /* ===== WALKING - Enhanced squash/stretch bob + lean + overshoot swing + stride ===== */
  .totem-walking .totem-character {
    animation: totem-walk-bob 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .totem-walking .totem-head {
    animation: totem-walk-lean 0.4s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-walking .totem-left-arm {
    animation: totem-arm-swing-l 0.4s ease-in-out infinite alternate;
    transform-origin: 15px 27px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: 35px 27px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-stride-l 0.4s ease-in-out infinite alternate;
    transform-origin: 20px 50px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-stride-r 0.4s ease-in-out infinite alternate;
    transform-origin: 30px 50px;
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
    0%, 100% { transform: scaleX(1); opacity: 0.15; }
    50% { transform: scaleX(0.8); opacity: 0.08; }
  }

  /* ===== STUDYING - Enhanced burst/pause typing + nod + rock ===== */
  .totem-studying .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-studying .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-studying .totem-character {
    animation: totem-study-settle 3s ease-in-out infinite;
  }
  .totem-studying .totem-head {
    animation: totem-study-head 2.5s ease-in-out infinite, totem-study-nod 3s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-studying .totem-body {
    animation: totem-study-lean 4s ease-in-out infinite, totem-study-rock 5s ease-in-out infinite;
    animation-delay: 0s, 1s;
    transform-origin: 25px 47px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    transform-origin: 35px 27px;
    animation-delay: 0.08s;
  }
  .totem-studying .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
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

  /* ===== COOKING - Enhanced wind-up stir + weight shift + spatula flip ===== */
  .totem-cooking .totem-character {
    animation: totem-cook-weight 2s ease-in-out infinite;
  }
  .totem-cooking .totem-head {
    animation: totem-cook-head 2s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-cooking .totem-right-arm {
    animation: totem-stir 0.9s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 35px 27px;
  }
  .totem-cooking .totem-left-arm {
    animation: totem-spatula-flip 2.5s ease-in-out infinite;
    transform-origin: 15px 27px;
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

  /* ===== WATCHING - Relaxed sitting, occasional reactions ===== */
  .totem-watching .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-watching .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-watching .totem-character {
    animation: totem-watch-settle 4s ease-in-out infinite;
  }
  .totem-watching .totem-head {
    animation: totem-watch-head 5s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-watching .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite, totem-watch-lean 6s ease-in-out infinite;
    animation-delay: 0s, 0.5s;
    transform-origin: 25px 47px;
  }
  .totem-watching .totem-left-arm {
    animation: totem-watch-arm-l 5s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-watching .totem-right-arm {
    animation: totem-watch-arm-r 7s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-watching .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
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

  /* ===== SLEEPING - Enhanced deep breathing + blanket ripple + twitch + sinusoidal Z ===== */
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
    transform-origin: 15px 27px;
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

  /* ===== READING - Gentle page turn + slight sway ===== */
  .totem-reading .totem-character {
    animation: totem-bob 3.2s ease-in-out infinite;
  }
  .totem-reading .totem-head {
    animation: totem-read-head 4s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-reading .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-reading .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-read-head {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    25% { transform: rotate(-3deg) translateY(0.6px); }
    75% { transform: rotate(2deg) translateY(0); }
  }
  @keyframes totem-read-arm {
    0%, 100% { transform: rotate(0deg); }
    40% { transform: rotate(-2deg); }
    50% { transform: rotate(3deg); }
    60% { transform: rotate(-1deg); }
  }

  /* ===== THINKING - Weight shift + chin scratch ===== */
  .totem-thinking .totem-character {
    animation: totem-think-shift 4s ease-in-out infinite;
  }
  .totem-thinking .totem-head {
    animation: totem-think-head 3.5s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-thinking .totem-right-arm {
    animation: totem-think-arm 3s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-thinking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite, totem-weight-shift 5s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-think-shift {
    0%, 100% { transform: translateX(0); }
    30% { transform: translateX(1.2px); }
    70% { transform: translateX(-1px); }
  }
  @keyframes totem-think-head {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(4deg); }
    50% { transform: rotate(-3deg); }
    80% { transform: rotate(2deg); }
  }
  @keyframes totem-think-arm {
    0%, 100% { transform: rotate(-15deg) translateY(-2px); }
    50% { transform: rotate(-12deg) translateY(-4px); }
  }

  /* ===== COFFEE-BREAK - Sip motion ===== */
  .totem-coffee-break .totem-character {
    animation: totem-bob 3s ease-in-out infinite;
  }
  .totem-coffee-break .totem-head {
    animation: totem-coffee-sip 4s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-coffee-break .totem-right-arm {
    animation: totem-coffee-arm 4s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-coffee-break .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-coffee-sip {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    30% { transform: rotate(-4deg) translateY(1px); }
    50% { transform: rotate(0deg) translateY(0); }
  }
  @keyframes totem-coffee-arm {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg) translateY(-2px); }
    35% { transform: rotate(-15deg) translateY(-4px); }
    50% { transform: rotate(-8deg) translateY(-2px); }
  }

  /* ===== WHITEBOARDING - Drawing strokes ===== */
  .totem-whiteboarding .totem-character {
    animation: totem-bob 3.5s ease-in-out infinite;
  }
  .totem-whiteboarding .totem-right-arm {
    animation: totem-wb-arm 1.5s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-whiteboarding .totem-head {
    animation: totem-wb-head 3s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-whiteboarding .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-wb-arm {
    0%, 100% { transform: rotate(-30deg) translateY(-5px); }
    25% { transform: rotate(-25deg) translateY(-6px); }
    50% { transform: rotate(-35deg) translateY(-4px); }
    75% { transform: rotate(-28deg) translateY(-5px); }
  }
  @keyframes totem-wb-head {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(3deg); }
    70% { transform: rotate(-2deg); }
  }

  /* ===== PHONE-CALL - Pacing + head nod ===== */
  .totem-phone-call .totem-character {
    animation: totem-pace 2.5s ease-in-out infinite;
  }
  .totem-phone-call .totem-head {
    animation: totem-call-nod 1.8s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-phone-call .totem-right-arm {
    animation: totem-call-arm 2s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-phone-call .totem-left-leg {
    animation: totem-pace-leg-l 2.5s ease-in-out infinite;
    transform-origin: 20px 50px;
  }
  .totem-phone-call .totem-right-leg {
    animation: totem-pace-leg-r 2.5s ease-in-out infinite;
    transform-origin: 30px 50px;
  }
  .totem-phone-call .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-pace {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
  }
  @keyframes totem-call-nod {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(5deg); }
    60% { transform: rotate(-2deg); }
  }
  @keyframes totem-call-arm {
    0%, 100% { transform: rotate(-20deg) translateY(-5px); }
    50% { transform: rotate(-18deg) translateY(-4.5px); }
  }
  @keyframes totem-pace-leg-l {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-8deg); }
    75% { transform: rotate(8deg); }
  }
  @keyframes totem-pace-leg-r {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(8deg); }
    75% { transform: rotate(-8deg); }
  }

  /* ===== EATING - Sitting, fork to mouth ===== */
  .totem-eating .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-eating .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-eating .totem-character {
    animation: totem-eat-settle 3s ease-in-out infinite;
  }
  .totem-eating .totem-right-arm {
    animation: totem-eat-arm 2s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-eating .totem-head {
    animation: totem-eat-head 2s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-eating .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-eating .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-eat-settle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(0.6px); }
  }
  @keyframes totem-eat-arm {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(-15deg) translateY(-2px); }
    35% { transform: rotate(-20deg) translateY(-5px); }
    50% { transform: rotate(-10deg) translateY(-2px); }
  }
  @keyframes totem-eat-head {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(-3deg); }
    60% { transform: rotate(2deg); }
  }

  /* ===== COFFEE-MAKING - Pour + sip ===== */
  .totem-coffee-making .totem-character {
    animation: totem-bob 3s ease-in-out infinite;
  }
  .totem-coffee-making .totem-head {
    animation: totem-coffee-sip 4.5s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-coffee-making .totem-right-arm {
    animation: totem-coffee-arm 4.5s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-coffee-making .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }

  /* ===== WASHING-DISHES - Scrubbing motion ===== */
  .totem-washing-dishes .totem-character {
    animation: totem-bob 2.5s ease-in-out infinite;
  }
  .totem-washing-dishes .totem-left-arm {
    animation: totem-scrub-l 0.6s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-washing-dishes .totem-right-arm {
    animation: totem-scrub-r 0.6s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-washing-dishes .totem-head {
    animation: totem-cook-head 2.5s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-washing-dishes .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-scrub-l {
    0%, 100% { transform: rotate(-5deg) translateX(-1.5px); }
    50% { transform: rotate(5deg) translateX(1.5px); }
  }
  @keyframes totem-scrub-r {
    0%, 100% { transform: rotate(5deg) translateX(1.5px); }
    50% { transform: rotate(-5deg) translateX(-1.5px); }
  }

  /* ===== SNACKING - Hand to mouth ===== */
  .totem-snacking .totem-character {
    animation: totem-bob 3s ease-in-out infinite;
  }
  .totem-snacking .totem-right-arm {
    animation: totem-snack-arm 2s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-snacking .totem-head {
    animation: totem-eat-head 2.5s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-snacking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-snack-arm {
    0%, 60%, 100% { transform: rotate(0deg); }
    15% { transform: rotate(-12deg) translateY(-2px); }
    25% { transform: rotate(-18deg) translateY(-4px); }
    40% { transform: rotate(-8deg) translateY(-1.5px); }
  }

  /* ===== BAKING - Stirring bowl ===== */
  .totem-baking .totem-character {
    animation: totem-cook-weight 2.5s ease-in-out infinite;
  }
  .totem-baking .totem-right-arm {
    animation: totem-stir 1s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-baking .totem-head {
    animation: totem-cook-head 2.5s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-baking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }

  /* ===== GAMING - Sitting, leaning forward, button mashing ===== */
  .totem-gaming .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-gaming .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-gaming .totem-character {
    animation: totem-game-lean 2s ease-in-out infinite;
  }
  .totem-gaming .totem-left-arm {
    animation: totem-game-mash-l 0.3s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-gaming .totem-right-arm {
    animation: totem-game-mash-r 0.3s ease-in-out infinite;
    transform-origin: 35px 27px;
    animation-delay: 0.05s;
  }
  .totem-gaming .totem-head {
    animation: totem-game-head 3s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-gaming .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-gaming .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-game-lean {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    30% { transform: translateY(-1px) rotate(2deg); }
    70% { transform: translateY(0.6px) rotate(-1deg); }
  }
  @keyframes totem-game-mash-l {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg) translateY(-1px); }
  }
  @keyframes totem-game-mash-r {
    0%, 100% { transform: rotate(3deg); }
    50% { transform: rotate(-3deg) translateY(-1px); }
  }
  @keyframes totem-game-head {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(4deg); }
    50% { transform: rotate(-3deg); }
    80% { transform: rotate(2deg); }
  }

  /* ===== READING-COUCH - Sitting, page turns ===== */
  .totem-reading-couch .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-reading-couch .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-reading-couch .totem-character {
    animation: totem-watch-settle 4s ease-in-out infinite;
  }
  .totem-reading-couch .totem-head {
    animation: totem-read-head 4.5s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-reading-couch .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-reading-couch .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-reading-couch .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }

  /* ===== RELAXING - Sitting, slow breathing ===== */
  .totem-relaxing .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-relaxing .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-relaxing .totem-character {
    animation: totem-watch-settle 5s ease-in-out infinite;
  }
  .totem-relaxing .totem-head {
    animation: totem-relax-head 6s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-relaxing .totem-left-arm {
    animation: totem-relax-arm-l 4s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-relaxing .totem-right-arm {
    animation: totem-relax-arm-r 4s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-relaxing .totem-body {
    animation: totem-breathe 4s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-relaxing .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-relax-head {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(-3deg); }
    70% { transform: rotate(2deg); }
  }
  @keyframes totem-relax-arm-l {
    0%, 100% { transform: rotate(-10deg) translateY(-2px); }
    50% { transform: rotate(-8deg) translateY(-1.5px); }
  }
  @keyframes totem-relax-arm-r {
    0%, 100% { transform: rotate(10deg) translateY(-2px); }
    50% { transform: rotate(8deg) translateY(-1.5px); }
  }

  /* ===== STRETCHING - Standing, arms up cycle ===== */
  .totem-stretching .totem-character {
    animation: totem-stretch-body 3s ease-in-out infinite;
  }
  .totem-stretching .totem-left-arm {
    animation: totem-stretch-arm-l 3s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-stretching .totem-right-arm {
    animation: totem-stretch-arm-r 3s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-stretching .totem-head {
    animation: totem-stretch-head 3s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-stretching .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-stretch-body {
    0%, 100% { transform: translateY(0) scaleY(1); }
    50% { transform: translateY(-2px) scaleY(1.03); }
  }
  @keyframes totem-stretch-arm-l {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-80deg) translateY(-5px); }
  }
  @keyframes totem-stretch-arm-r {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(80deg) translateY(-5px); }
  }
  @keyframes totem-stretch-head {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  /* ===== NAPPING - Sitting, head tilted, slow breathing ===== */
  .totem-napping .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-napping .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-napping .totem-character {
    animation: totem-watch-settle 5s ease-in-out infinite;
  }
  .totem-napping .totem-head {
    animation: totem-nap-head 4s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-napping .totem-body {
    animation: totem-sleep-deep 4s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-napping .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  .totem-napping .totem-nap-zzz text:nth-child(1) {
    animation: totem-zzz 2.5s ease-in-out infinite;
  }
  .totem-napping .totem-nap-zzz text:nth-child(2) {
    animation: totem-zzz-2 2.5s ease-in-out infinite;
    animation-delay: 0.6s;
  }
  @keyframes totem-nap-head {
    0%, 100% { transform: rotate(12deg); }
    50% { transform: rotate(15deg); }
  }

  /* ===== READING-BED - Propped up, page turn ===== */
  .totem-reading-bed {
    transform: rotate(-90deg) scale(0.9);
    transform-origin: center center;
  }
  .totem-reading-bed .totem-shadow {
    opacity: 0;
  }
  .totem-reading-bed .totem-head {
    animation: totem-read-head 4s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-reading-bed .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-reading-bed .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-reading-bed .totem-blanket {
    animation: totem-blanket-ripple 4s ease-in-out infinite;
    transform-origin: 25px 47px;
  }

  /* ===== MEDITATING - Cross-legged, slow breathing ===== */
  .totem-meditating .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: 20px 50px;
  }
  .totem-meditating .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: 30px 50px;
  }
  .totem-meditating .totem-character {
    animation: totem-med-float 5s ease-in-out infinite;
  }
  .totem-meditating .totem-body {
    animation: totem-sleep-deep 4s ease-in-out infinite;
    transform-origin: 25px 38px;
  }
  .totem-meditating .totem-left-arm {
    transform: rotate(15deg);
    transform-origin: 15px 27px;
  }
  .totem-meditating .totem-right-arm {
    transform: rotate(-15deg);
    transform-origin: 35px 27px;
  }
  @keyframes totem-med-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  /* ===== GETTING-DRESSED - Putting on shirt ===== */
  .totem-getting-dressed .totem-character {
    animation: totem-dress-body 2s ease-in-out infinite;
  }
  .totem-getting-dressed .totem-left-arm {
    animation: totem-dress-arm-l 2s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-getting-dressed .totem-right-arm {
    animation: totem-dress-arm-r 2s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-getting-dressed .totem-head {
    animation: totem-stretch-head 2s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-getting-dressed .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-dress-body {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }
  @keyframes totem-dress-arm-l {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(-50deg) translateY(-2px); }
    70% { transform: rotate(-30deg); }
  }
  @keyframes totem-dress-arm-r {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(50deg) translateY(-2px); }
    70% { transform: rotate(30deg); }
  }

  /* ===== MORNING-STRETCH - Standing, big stretch ===== */
  .totem-morning-stretch .totem-character {
    animation: totem-stretch-body 4s ease-in-out infinite;
  }
  .totem-morning-stretch .totem-left-arm {
    animation: totem-mstretch-arm-l 4s ease-in-out infinite;
    transform-origin: 15px 27px;
  }
  .totem-morning-stretch .totem-right-arm {
    animation: totem-mstretch-arm-r 4s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-morning-stretch .totem-head {
    animation: totem-stretch-head 4s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-morning-stretch .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-mstretch-arm-l {
    0%, 20%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-90deg) translateY(-5px); }
    80% { transform: rotate(-40deg) translateY(-2px); }
  }
  @keyframes totem-mstretch-arm-r {
    0%, 20%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(90deg) translateY(-5px); }
    80% { transform: rotate(40deg) translateY(-2px); }
  }

  /* ===== PHONE-BED - Lying, scrolling phone ===== */
  .totem-phone-bed {
    transform: rotate(-90deg) scale(0.9);
    transform-origin: center center;
  }
  .totem-phone-bed .totem-shadow {
    opacity: 0;
  }
  .totem-phone-bed .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  .totem-phone-bed .totem-right-arm {
    animation: totem-phone-scroll 3s ease-in-out infinite;
    transform-origin: 35px 27px;
  }
  .totem-phone-bed .totem-blanket {
    animation: totem-blanket-ripple 4s ease-in-out infinite;
    transform-origin: 25px 47px;
  }
  @keyframes totem-phone-scroll {
    0%, 100% { transform: rotate(-5deg); }
    30% { transform: rotate(-8deg) translateY(1px); }
    70% { transform: rotate(-3deg) translateY(-1px); }
  }

`;
