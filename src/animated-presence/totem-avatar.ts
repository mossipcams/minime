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

// Character palette
const HAIR = '#3C2D1E';
const HAIR_DARK = '#2A1E12';
const HAIR_HI = '#5A4430';
const SKIN = '#E4B898';
const SKIN_HI = '#F2D0B4';
const EYES = '#1C1C1C';
const BROW = '#2E2010';
const MOUTH = '#B87868';
const MOUTH_SLEEP = '#A87068';
const HOODIE = '#506878';
const HOODIE_DARK = '#3C5060';
const HOODIE_HI = '#627888';
const HOODIE_LOGO = '#B8A040';
const PANTS = '#3A3A4A';
const PANTS_DARK = '#2C2C3A';
const SHOES = '#5A4030';
const SHOES_DARK = '#3C2A1C';
const SHOES_SOLE = '#2E1E12';
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

// ===== CONNECTED BODY PARTS =====
// Design: Chibi style — overlapping shapes, no gaps, no separate neck
// Head ~30% height (y0-22), Body ~38% (y19-48), Legs ~32% (y46-68)

function headShape(): string {
  const p: string[] = [];
  // Hair back — wide silhouette extending beyond the face on all sides
  p.push(`<g class="hair-back">`);
  p.push(`<path d="M10,16 C10,2 15,-3 25,-3 C35,-3 40,2 40,16 C40,21 38,23 35,24 L15,24 C12,23 10,21 10,16 Z" fill="${HAIR}"/>`);
  // Hair volume on sides — extends past face edge
  p.push(`<path d="M10,16 C9,12 10,7 12,4 L13,16 Z" fill="${HAIR_DARK}" opacity="0.6"/>`);
  p.push(`<path d="M40,16 C41,12 40,7 38,4 L37,16 Z" fill="${HAIR_DARK}" opacity="0.6"/>`);
  p.push(`</g>`);
  // Face — inset within the hair silhouette
  p.push(`<ellipse cx="25" cy="15" rx="9" ry="8" fill="${SKIN}"/>`);
  p.push(`<ellipse cx="23" cy="13" rx="4" ry="3" fill="${SKIN_HI}" opacity="0.25"/>`);
  // Side hair pieces draping alongside face
  p.push(`<g class="hair-sides">`);
  p.push(`<path d="M10,10 C10,14 11,19 13,22 L14,22 C12,18 11,14 12,10 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M40,10 C40,14 39,19 37,22 L36,22 C38,18 39,14 38,10 Z" fill="${HAIR}"/>`);
  p.push(`</g>`);
  // Hair bangs — chunky, overlaying the forehead
  p.push(`<g class="hair-bangs">`);
  p.push(`<path d="M14,11 C15,5 18,1 22,0 C19,3 17,6 16,11 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M22,0 C26,-1 30,0 33,2 C30,1 26,2 24,5 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M33,2 C36,4 38,7 38,11 C37,8 35,5 32,4 Z" fill="${HAIR_DARK}"/>`);
  // Extra bang wisps for texture
  p.push(`<path d="M16,11 C17,8 19,6 21,6" fill="none" stroke="${HAIR}" stroke-width="1.5" stroke-linecap="round"/>`);
  p.push(`<path d="M21,5 C24,4 27,4 29,5" fill="none" stroke="${HAIR}" stroke-width="1" stroke-linecap="round"/>`);
  p.push(`</g>`);
  // Hair shine/highlight streak along the crown
  p.push(`<g class="hair-shine">`);
  p.push(`<path d="M18,-1 C22,-3 28,-3 32,-1 C29,-1.5 22,-1.5 18,-1 Z" fill="${HAIR_HI}" opacity="0.7"/>`);
  p.push(`<path d="M15,3 C18,1 22,0 26,0 C23,1 19,2 16,4 Z" fill="${HAIR_HI}" opacity="0.4"/>`);
  p.push(`</g>`);
  // Eyebrows — short arched strokes for expression
  p.push(`<path d="M17,10.5 Q19.5,9 22,10.5" fill="none" stroke="${BROW}" stroke-width="1" stroke-linecap="round"/>`);
  p.push(`<path d="M28,10.5 Q30.5,9 33,10.5" fill="none" stroke="${BROW}" stroke-width="1" stroke-linecap="round"/>`);
  // Eyes — compound shapes: outer eye, iris, double highlights
  p.push(`<ellipse cx="19.5" cy="14" rx="2.2" ry="2.8" fill="${EYES}"/>`);
  p.push(`<ellipse cx="20" cy="13.8" rx="1.2" ry="1.5" fill="#2C3848" opacity="0.6"/>`);
  p.push(`<circle cx="19" cy="13" r="0.9" fill="#FFF" opacity="0.9"/>`);
  p.push(`<circle cx="20.5" cy="15" r="0.4" fill="#FFF" opacity="0.5"/>`);
  p.push(`<ellipse cx="30.5" cy="14" rx="2.2" ry="2.8" fill="${EYES}"/>`);
  p.push(`<ellipse cx="31" cy="13.8" rx="1.2" ry="1.5" fill="#2C3848" opacity="0.6"/>`);
  p.push(`<circle cx="30" cy="13" r="0.9" fill="#FFF" opacity="0.9"/>`);
  p.push(`<circle cx="31.5" cy="15" r="0.4" fill="#FFF" opacity="0.5"/>`);
  // Cheek blush
  p.push(`<ellipse cx="16" cy="17" rx="2.2" ry="1.3" fill="#E88880" opacity="0.18"/>`);
  p.push(`<ellipse cx="34" cy="17" rx="2.2" ry="1.3" fill="#E88880" opacity="0.18"/>`);
  // Mouth
  p.push(`<path d="M22,20 Q25,22 28,20" fill="none" stroke="${MOUTH}" stroke-width="1" stroke-linecap="round"/>`);
  return p.join('');
}

function sleepingHeadShape(): string {
  const p: string[] = [];
  // Hair back
  p.push(`<g class="hair-back">`);
  p.push(`<path d="M10,16 C10,2 15,-3 25,-3 C35,-3 40,2 40,16 C40,21 38,23 35,24 L15,24 C12,23 10,21 10,16 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M10,16 C9,12 10,7 12,4 L13,16 Z" fill="${HAIR_DARK}" opacity="0.6"/>`);
  p.push(`<path d="M40,16 C41,12 40,7 38,4 L37,16 Z" fill="${HAIR_DARK}" opacity="0.6"/>`);
  p.push(`</g>`);
  // Face
  p.push(`<ellipse cx="25" cy="15" rx="9" ry="8" fill="${SKIN}"/>`);
  p.push(`<ellipse cx="23" cy="13" rx="4" ry="3" fill="${SKIN_HI}" opacity="0.25"/>`);
  // Side hair
  p.push(`<g class="hair-sides">`);
  p.push(`<path d="M10,10 C10,14 11,19 13,22 L14,22 C12,18 11,14 12,10 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M40,10 C40,14 39,19 37,22 L36,22 C38,18 39,14 38,10 Z" fill="${HAIR}"/>`);
  p.push(`</g>`);
  // Messy bangs
  p.push(`<g class="hair-bangs">`);
  p.push(`<path d="M14,11 C15,5 18,1 22,0 C19,3 17,6 16,11 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M22,0 C26,-1 30,0 33,2 C30,1 26,2 24,5 Z" fill="${HAIR}"/>`);
  p.push(`<path d="M33,2 C36,4 38,7 38,11 C37,8 35,5 32,4 Z" fill="${HAIR_DARK}"/>`);
  p.push(`<path d="M16,11 C17,8 19,6 21,6" fill="none" stroke="${HAIR}" stroke-width="1.5" stroke-linecap="round"/>`);
  p.push(`</g>`);
  // Hair shine
  p.push(`<g class="hair-shine">`);
  p.push(`<path d="M18,-1 C22,-3 28,-3 32,-1 C29,-1.5 22,-1.5 18,-1 Z" fill="${HAIR_HI}" opacity="0.7"/>`);
  p.push(`</g>`);
  // Closed eyes
  p.push(`<path d="M17,14 Q19.5,16 22,14" fill="none" stroke="${EYELID}" stroke-width="1.3" stroke-linecap="round"/>`);
  p.push(`<path d="M28,14 Q30.5,16 32,14" fill="none" stroke="${EYELID}" stroke-width="1.3" stroke-linecap="round"/>`);
  // Cheek blush (more visible when sleeping)
  p.push(`<ellipse cx="16" cy="17" rx="2.2" ry="1.3" fill="#E88880" opacity="0.22"/>`);
  p.push(`<ellipse cx="34" cy="17" rx="2.2" ry="1.3" fill="#E88880" opacity="0.22"/>`);
  // Peaceful mouth
  p.push(`<path d="M23,20 Q25,21 27,20" fill="none" stroke="${MOUTH_SLEEP}" stroke-width="0.8" stroke-linecap="round"/>`);
  return p.join('');
}

function blinkOverlay(): string {
  // Eyelid-colored arcs that cover the eyes when blinking
  return `<g class="totem-blink">
    <ellipse cx="19.5" cy="14" rx="2.8" ry="3.2" fill="${SKIN}"/>
    <ellipse cx="30.5" cy="14" rx="2.8" ry="3.2" fill="${SKIN}"/>
  </g>`;
}

function svgDefs(): string {
  return `<defs>
    <linearGradient id="hoodie-grad" x1="0.2" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="${HOODIE_HI}"/>
      <stop offset="100%" stop-color="${HOODIE_DARK}"/>
    </linearGradient>
    <linearGradient id="pants-grad" x1="0.3" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="${PANTS}"/>
      <stop offset="100%" stop-color="${PANTS_DARK}"/>
    </linearGradient>
  </defs>`;
}

// ===== BODY (connected torso — path extends up under head, no separate neck) =====

function bodyShape(): string {
  const p: string[] = [];
  // Torso — single path from shoulders up into neck/chin area, down to waist
  // Extends up to y=19 to overlap under the head (head bottom ~y=22)
  p.push(`<path d="M14,22 C14,19 18,18 25,18 C32,18 36,19 36,22 L36,46 C36,48 33,48 25,48 C17,48 14,48 14,46 Z" fill="url(#hoodie-grad)"/>`);
  // Hoodie collar at neck overlap zone
  p.push(`<path d="M18,21 Q25,24 32,21" fill="${HOODIE_HI}" stroke="none"/>`);
  // Side shading
  p.push(`<path d="M14,22 C14,19 16,18 19,18 L19,46 C17,46 14,46 14,46 Z" fill="${HOODIE_DARK}" opacity="0.4"/>`);
  p.push(`<path d="M36,22 C36,19 34,18 31,18 L31,46 C33,46 36,46 36,46 Z" fill="${HOODIE_DARK}" opacity="0.4"/>`);
  // Logo
  p.push(`<circle cx="25" cy="34" r="2" fill="${HOODIE_LOGO}"/>`);
  // Pants transition — overlaps bottom of hoodie
  p.push(`<rect x="15" y="44" width="20" height="6" rx="2" fill="url(#pants-grad)"/>`);
  p.push(`<rect x="15" y="44" width="5" height="6" rx="1" fill="${PANTS_DARK}" opacity="0.4"/>`);
  p.push(`<rect x="30" y="44" width="5" height="6" rx="1" fill="${PANTS_DARK}" opacity="0.4"/>`);
  return p.join('');
}

// ===== ARMS (paths that emerge from torso shoulders) =====

function leftArmShape(): string {
  const p: string[] = [];
  // Arm — path starting inside the torso at the shoulder, curving out
  p.push(`<path d="M16,22 C12,23 9,26 9,30 L9,39 C9,41 10,42 12,42 C14,42 15,41 15,39 L15,30 C15,27 16,25 16,22 Z" fill="${HOODIE}"/>`);
  // Inner shadow
  p.push(`<path d="M16,22 C12,23 9,26 9,30 L9,33 C10,31 12,29 15,28 L15,22 Z" fill="${HOODIE_DARK}" opacity="0.3"/>`);
  // Hand
  p.push(`<ellipse cx="12" cy="43" rx="3" ry="2.2" fill="${SKIN}"/>`);
  return p.join('');
}

function rightArmShape(): string {
  const p: string[] = [];
  p.push(`<path d="M34,22 C38,23 41,26 41,30 L41,39 C41,41 40,42 38,42 C36,42 35,41 35,39 L35,30 C35,27 34,25 34,22 Z" fill="${HOODIE}"/>`);
  p.push(`<path d="M34,22 C38,23 41,26 41,30 L41,33 C40,31 38,29 35,28 L35,22 Z" fill="${HOODIE_DARK}" opacity="0.3"/>`);
  p.push(`<ellipse cx="38" cy="43" rx="3" ry="2.2" fill="${SKIN}"/>`);
  return p.join('');
}

function rightArmWithPanShape(): string {
  const p: string[] = [];
  // Arm
  p.push(`<path d="M34,22 C38,23 41,26 41,30 L41,39 C41,41 40,42 38,42 C36,42 35,41 35,39 L35,30 C35,27 34,25 34,22 Z" fill="${HOODIE}"/>`);
  p.push(`<path d="M34,22 C38,23 41,26 41,30 L41,33 C40,31 38,29 35,28 L35,22 Z" fill="${HOODIE_DARK}" opacity="0.3"/>`);
  p.push(`<ellipse cx="38" cy="43" rx="3" ry="2.2" fill="${SKIN}"/>`);
  // Frying pan
  p.push(`<ellipse cx="43" cy="39" rx="5" ry="4" fill="${PAN}"/>`);
  p.push(`<ellipse cx="43" cy="39" rx="4" ry="3" fill="${PAN_DARK}"/>`);
  p.push(`<ellipse cx="43" cy="38" rx="2.5" ry="2" fill="${FOOD_EGG}"/>`);
  p.push(`<circle cx="43" cy="38" r="1" fill="${FOOD_YLK}"/>`);
  p.push(`<rect x="47" y="37" width="2" height="4" rx="1" fill="${PAN_HANDLE}"/>`);
  return p.join('');
}

function leftArmWithSpatulaShape(): string {
  const p: string[] = [];
  p.push(`<path d="M16,22 C12,23 9,26 9,30 L9,39 C9,41 10,42 12,42 C14,42 15,41 15,39 L15,30 C15,27 16,25 16,22 Z" fill="${HOODIE}"/>`);
  p.push(`<path d="M16,22 C12,23 9,26 9,30 L9,33 C10,31 12,29 15,28 L15,22 Z" fill="${HOODIE_DARK}" opacity="0.3"/>`);
  p.push(`<ellipse cx="12" cy="43" rx="3" ry="2.2" fill="${SKIN}"/>`);
  // Spatula
  p.push(`<rect x="6" y="33" width="2" height="8" rx="1" fill="${PAN_HANDLE}"/>`);
  p.push(`<rect x="4" y="29" width="6" height="5" rx="2" fill="${PAN}"/>`);
  return p.join('');
}

// ===== LEGS (overlap into pants area) =====

function leftLegShape(): string {
  const p: string[] = [];
  // Pants leg — starts inside pants zone for overlap
  p.push(`<rect x="16" y="47" width="8" height="15" rx="3" fill="${PANTS}"/>`);
  p.push(`<rect x="16" y="47" width="3" height="15" rx="1" fill="${PANTS_DARK}" opacity="0.3"/>`);
  // Shoe — connected to leg bottom
  p.push(`<path d="M15,62 L24,62 C26,62 26,66 23,66 L16,66 C14,66 14,62 15,62 Z" fill="${SHOES}"/>`);
  p.push(`<rect x="14" y="64.5" width="12" height="1.5" rx="0.5" fill="${SHOES_SOLE}"/>`);
  return p.join('');
}

function rightLegShape(): string {
  const p: string[] = [];
  p.push(`<rect x="26" y="47" width="8" height="15" rx="3" fill="${PANTS}"/>`);
  p.push(`<rect x="31" y="47" width="3" height="15" rx="1" fill="${PANTS_DARK}" opacity="0.3"/>`);
  p.push(`<path d="M25,62 L34,62 C36,62 36,66 34,66 L27,66 C25,66 25,62 25,62 Z" fill="${SHOES}"/>`);
  p.push(`<rect x="25" y="64.5" width="12" height="1.5" rx="0.5" fill="${SHOES_SOLE}"/>`);
  return p.join('');
}

// ===== PROPS =====

function phoneProp(): string {
  const p: string[] = [];
  p.push(`<rect x="39" y="39" width="5" height="8" rx="1" fill="${PHONE_BODY}"/>`);
  p.push(`<rect x="40" y="40.5" width="3" height="5" rx="0.5" fill="${PHONE_SCREEN}"/>`);
  p.push(`<rect x="40" y="40.5" width="3" height="5" rx="0.5" fill="${PHONE_SCREEN}" opacity="0.2"><animate attributeName="opacity" values="0.15;0.3;0.18;0.25;0.15" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function laptopProp(): string {
  const p: string[] = [];
  p.push(`<rect x="14" y="33" width="22" height="8" rx="1.5" fill="${LAPTOP_FRAME}"/>`);
  p.push(`<rect x="15.5" y="34" width="19" height="6" rx="1" fill="${LAPTOP_SCREEN}"/>`);
  p.push(`<rect x="17" y="35.5" width="8" height="0.8" rx="0.4" fill="${LAPTOP_GLOW}" opacity="0.6"/>`);
  p.push(`<rect x="17" y="37.5" width="12" height="0.8" rx="0.4" fill="${LAPTOP_GLOW}" opacity="0.4"/>`);
  p.push(`<rect x="14" y="41" width="22" height="3" rx="1" fill="${LAPTOP_FRAME}"/>`);
  p.push(`<rect x="16" y="41.5" width="18" height="2" rx="0.5" fill="${LAPTOP_KEY}"/>`);
  p.push(`<rect x="15.5" y="34" width="19" height="6" rx="1" fill="${LAPTOP_GLOW}" opacity="0.12"><animate attributeName="opacity" values="0.08;0.18;0.1;0.15;0.08" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function pillowProp(): string {
  const p: string[] = [];
  p.push(`<rect x="8" y="18" width="34" height="8" rx="4" fill="${PILLOW_FILL}"/>`);
  p.push(`<rect x="8" y="18" width="6" height="8" rx="3" fill="${PILLOW_SHADE}" opacity="0.5"/>`);
  p.push(`<rect x="36" y="18" width="6" height="8" rx="3" fill="${PILLOW_SHADE}" opacity="0.5"/>`);
  return p.join('');
}

function blanketProp(): string {
  const p: string[] = [];
  p.push(`<rect x="12" y="32" width="26" height="28" rx="3" fill="${BLANKET}"/>`);
  for (let y = 35; y < 58; y += 4) {
    p.push(`<rect x="14" y="${y}" width="22" height="1.5" rx="0.5" fill="${(y % 8 === 3) ? BLANKET_HI : BLANKET_DARK}" opacity="0.4"/>`);
  }
  p.push(`<rect x="13" y="32" width="24" height="3" rx="1.5" fill="${BLANKET_HI}"/>`);
  return p.join('');
}

function remoteProp(): string {
  const p: string[] = [];
  p.push(`<rect x="39" y="41" width="3" height="7" rx="1" fill="${PHONE_BODY}"/>`);
  p.push(`<circle cx="40.5" cy="43" r="0.6" fill="#E06060"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function drinkProp(): string {
  const p: string[] = [];
  p.push(`<rect x="4" y="54" width="5" height="7" rx="1" fill="${PAN}"/>`);
  p.push(`<path d="M9,56 Q12,57 9,59" fill="none" stroke="${PAN_DARK}" stroke-width="1"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function bookProp(): string {
  const p: string[] = [];
  p.push(`<rect x="7" y="34" width="8" height="10" rx="1" fill="#5A3020"/>`);
  p.push(`<rect x="8" y="35" width="6" height="8" rx="0.5" fill="#E8D8C0"/>`);
  p.push(`<line x1="11" y1="35" x2="11" y2="43" stroke="#5A3020" stroke-width="0.5"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function mugProp(): string {
  const p: string[] = [];
  p.push(`<rect x="39" y="35" width="5" height="6" rx="1" fill="#A05830"/>`);
  p.push(`<path d="M44,36.5 Q47,37.5 44,39.5" fill="none" stroke="#8A4820" stroke-width="1.2"/>`);
  p.push(`<path d="M40,34 Q39,30 41,27" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;0.2;0.12;0.06;0" dur="2.5s" repeatCount="indefinite"/></path>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function markerProp(): string {
  const p: string[] = [];
  p.push(`<rect x="40" y="14" width="2" height="6" rx="0.8" fill="#E06060"/>`);
  p.push(`<rect x="40" y="20" width="2" height="3" rx="0.8" fill="#C0C0C0"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function plateProp(): string {
  const p: string[] = [];
  p.push(`<ellipse cx="12" cy="43" rx="6" ry="2" fill="${PAN}"/>`);
  p.push(`<ellipse cx="11" cy="42" rx="2" ry="1" fill="#C8A040"/>`);
  p.push(`<ellipse cx="14" cy="42" rx="1.5" ry="0.8" fill="#80B060"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function spongeProp(): string {
  const p: string[] = [];
  p.push(`<rect x="6" y="38" width="5" height="4" rx="1.5" fill="#E8D040"/>`);
  p.push(`<rect x="7" y="39" width="3" height="2" rx="0.8" fill="#D8C030"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function bowlProp(): string {
  const p: string[] = [];
  p.push(`<path d="M13,36 Q13,42 19,42 Q25,42 25,36" fill="${PAN}"/>`);
  p.push(`<ellipse cx="19" cy="36" rx="6" ry="1.5" fill="${PAN_DARK}"/>`);
  p.push(`<ellipse cx="19" cy="35.5" rx="4.5" ry="1" fill="#E8D8C0"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function controllerProp(): string {
  const p: string[] = [];
  p.push(`<rect x="13" y="43" width="10" height="4" rx="2" fill="${PHONE_BODY}"/>`);
  p.push(`<circle cx="16" cy="44.5" r="1" fill="#A04040"/>`);
  p.push(`<circle cx="20" cy="44.5" r="1" fill="#4060A0"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function shirtProp(): string {
  const p: string[] = [];
  p.push(`<rect x="3" y="28" width="5" height="6" rx="1" fill="#6080A0"/>`);
  p.push(`<rect x="42" y="28" width="5" height="6" rx="1" fill="#6080A0"/>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
}

function phoneUpProp(): string {
  const p: string[] = [];
  p.push(`<rect x="20" y="8" width="10" height="6" rx="1.5" fill="${PHONE_BODY}"/>`);
  p.push(`<rect x="21" y="9" width="8" height="4" rx="1" fill="${PHONE_SCREEN}"/>`);
  p.push(`<rect x="21" y="9" width="8" height="4" rx="1" fill="${PHONE_SCREEN}" opacity="0.25"><animate attributeName="opacity" values="0.2;0.35;0.22;0.3;0.2" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${p.join('')}</g>`;
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

  const parts: string[] = [svgDefs(), groundShadow(), `<g class="totem-character">`];
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
    transform-origin: 25px 69px;
  }

  /* ===== IDLE ===== */
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
    transform-origin: 25px 48px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: 16px 22px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: 34px 22px;
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

  /* ===== WALKING ===== */
  .totem-walking .totem-character {
    animation: totem-walk-bob 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .totem-walking .totem-head {
    animation: totem-walk-lean 0.4s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-walking .totem-left-arm {
    animation: totem-arm-swing-l 0.4s ease-in-out infinite alternate;
    transform-origin: 16px 22px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: 34px 22px;
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

  /* ===== STUDYING ===== */
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
    transform-origin: 25px 48px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: 16px 22px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    transform-origin: 34px 22px;
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

  /* ===== COOKING ===== */
  .totem-cooking .totem-character {
    animation: totem-cook-weight 2s ease-in-out infinite;
  }
  .totem-cooking .totem-head {
    animation: totem-cook-head 2s ease-in-out infinite;
    transform-origin: 25px 22px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: 25px 48px;
  }
  .totem-cooking .totem-right-arm {
    animation: totem-stir 0.9s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 34px 22px;
  }
  .totem-cooking .totem-left-arm {
    animation: totem-spatula-flip 2.5s ease-in-out infinite;
    transform-origin: 16px 22px;
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
    transform-origin: 25px 48px;
  }
  .totem-watching .totem-left-arm {
    animation: totem-watch-arm-l 5s ease-in-out infinite;
    transform-origin: 16px 22px;
  }
  .totem-watching .totem-right-arm {
    animation: totem-watch-arm-r 7s ease-in-out infinite;
    transform-origin: 34px 22px;
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
    transform-origin: 16px 22px;
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
    transform-origin: 25px 22px;
  }
  .totem-reading .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: 16px 22px;
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
    transform-origin: 25px 22px;
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
