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
const P = 3;
const W = 16 * P;
const H = 24 * P;

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

// Prop palettes — natural tones
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
const EYELID = '#C0A078';

function r(x: number, y: number, fill: string): string {
  return `<rect x="${x * P}" y="${y * P}" width="${P}" height="${P}" fill="${fill}"/>`;
}

// ===== SHARED HEAD =====

function headPixels(): string {
  const rows: string[] = [];
  rows.push(r(5, 0, HAIR_DARK), r(6, 0, HAIR), r(7, 0, HAIR_HI), r(8, 0, HAIR_HI), r(9, 0, HAIR), r(10, 0, HAIR_DARK));
  rows.push(r(4, 1, HAIR_DARK), r(5, 1, HAIR), r(6, 1, HAIR_HI), r(7, 1, HAIR), r(8, 1, HAIR), r(9, 1, HAIR_HI), r(10, 1, HAIR), r(11, 1, HAIR_DARK));
  rows.push(r(3, 2, HAIR_DARK), r(4, 2, HAIR), r(5, 2, HAIR), r(6, 2, HAIR), r(7, 2, HAIR), r(8, 2, HAIR), r(9, 2, HAIR), r(10, 2, HAIR), r(11, 2, HAIR), r(12, 2, HAIR_DARK));
  rows.push(r(3, 3, HAIR_DARK), r(4, 3, HAIR), r(5, 3, SKIN_HI), r(6, 3, SKIN_HI), r(7, 3, SKIN), r(8, 3, SKIN), r(9, 3, SKIN_HI), r(10, 3, SKIN_HI), r(11, 3, HAIR), r(12, 3, HAIR_DARK));
  // Eyebrows
  rows.push(r(3, 4, HAIR_DARK), r(4, 4, SKIN_SHADOW));
  rows.push(r(5, 4, BROW), r(6, 4, BROW));
  rows.push(r(7, 4, SKIN), r(8, 4, SKIN));
  rows.push(r(9, 4, BROW), r(10, 4, BROW));
  rows.push(r(11, 4, SKIN_SHADOW), r(12, 4, HAIR_DARK));
  // Open eyes
  rows.push(r(3, 5, HAIR_DARK), r(4, 5, SKIN_SHADOW));
  rows.push(r(5, 5, EYE_WHITE), r(6, 5, EYES));
  rows.push(r(7, 5, SKIN), r(8, 5, SKIN));
  rows.push(r(9, 5, EYE_WHITE), r(10, 5, EYES));
  rows.push(r(11, 5, SKIN_SHADOW), r(12, 5, HAIR_DARK));
  // Nose/cheeks
  rows.push(r(3, 6, HAIR_DARK), r(4, 6, SKIN_SHADOW));
  rows.push(r(5, 6, SKIN), r(6, 6, SKIN));
  rows.push(r(7, 6, SKIN_SHADOW), r(8, 6, SKIN_SHADOW));
  rows.push(r(9, 6, SKIN), r(10, 6, SKIN));
  rows.push(r(11, 6, SKIN_SHADOW), r(12, 6, HAIR_DARK));
  // Mouth
  rows.push(r(4, 7, SKIN_SHADOW), r(5, 7, SKIN_SHADOW));
  rows.push(r(6, 7, SKIN), r(7, 7, MOUTH), r(8, 7, MOUTH), r(9, 7, SKIN));
  rows.push(r(10, 7, SKIN_SHADOW), r(11, 7, SKIN_SHADOW));
  return rows.join('');
}

function sleepingHeadPixels(): string {
  const rows: string[] = [];
  // Same hair
  rows.push(r(5, 0, HAIR_DARK), r(6, 0, HAIR), r(7, 0, HAIR_HI), r(8, 0, HAIR_HI), r(9, 0, HAIR), r(10, 0, HAIR_DARK));
  rows.push(r(4, 1, HAIR_DARK), r(5, 1, HAIR), r(6, 1, HAIR_HI), r(7, 1, HAIR), r(8, 1, HAIR), r(9, 1, HAIR_HI), r(10, 1, HAIR), r(11, 1, HAIR_DARK));
  rows.push(r(3, 2, HAIR_DARK), r(4, 2, HAIR), r(5, 2, HAIR), r(6, 2, HAIR), r(7, 2, HAIR), r(8, 2, HAIR), r(9, 2, HAIR), r(10, 2, HAIR), r(11, 2, HAIR), r(12, 2, HAIR_DARK));
  rows.push(r(3, 3, HAIR_DARK), r(4, 3, HAIR), r(5, 3, SKIN_HI), r(6, 3, SKIN_HI), r(7, 3, SKIN), r(8, 3, SKIN), r(9, 3, SKIN_HI), r(10, 3, SKIN_HI), r(11, 3, HAIR), r(12, 3, HAIR_DARK));
  // Relaxed brows
  rows.push(r(3, 4, HAIR_DARK), r(4, 4, SKIN_SHADOW));
  rows.push(r(5, 4, SKIN), r(6, 4, SKIN));
  rows.push(r(7, 4, SKIN), r(8, 4, SKIN));
  rows.push(r(9, 4, SKIN), r(10, 4, SKIN));
  rows.push(r(11, 4, SKIN_SHADOW), r(12, 4, HAIR_DARK));
  // Closed eyes — eyelid lines
  rows.push(r(3, 5, HAIR_DARK), r(4, 5, SKIN_SHADOW));
  rows.push(r(5, 5, SKIN), r(6, 5, EYELID));
  rows.push(r(7, 5, SKIN), r(8, 5, SKIN));
  rows.push(r(9, 5, SKIN), r(10, 5, EYELID));
  rows.push(r(11, 5, SKIN_SHADOW), r(12, 5, HAIR_DARK));
  // Nose/cheeks — same
  rows.push(r(3, 6, HAIR_DARK), r(4, 6, SKIN_SHADOW));
  rows.push(r(5, 6, SKIN), r(6, 6, SKIN));
  rows.push(r(7, 6, SKIN_SHADOW), r(8, 6, SKIN_SHADOW));
  rows.push(r(9, 6, SKIN), r(10, 6, SKIN));
  rows.push(r(11, 6, SKIN_SHADOW), r(12, 6, HAIR_DARK));
  // Peaceful mouth — slight smile
  rows.push(r(4, 7, SKIN_SHADOW), r(5, 7, SKIN_SHADOW));
  rows.push(r(6, 7, SKIN), r(7, 7, MOUTH_SLEEP), r(8, 7, MOUTH_SLEEP), r(9, 7, SKIN));
  rows.push(r(10, 7, SKIN_SHADOW), r(11, 7, SKIN_SHADOW));
  return rows.join('');
}

function blinkOverlay(): string {
  return `<g class="totem-blink">${r(5, 5, SKIN)}${r(6, 5, SKIN)}${r(9, 5, SKIN)}${r(10, 5, SKIN)}</g>`;
}

// ===== BODY =====

function bodyPixels(): string {
  const rows: string[] = [];
  rows.push(r(6, 8, SKIN_SHADOW), r(7, 8, SKIN), r(8, 8, SKIN), r(9, 8, SKIN_SHADOW));
  rows.push(r(5, 9, HOODIE_DARK), r(6, 9, HOODIE_HI), r(7, 9, HOODIE_DARK), r(8, 9, HOODIE_DARK), r(9, 9, HOODIE_HI), r(10, 9, HOODIE_DARK));
  for (let y = 10; y <= 14; y++) {
    rows.push(r(5, y, HOODIE_DARK));
    rows.push(r(6, y, HOODIE));
    rows.push(r(7, y, y === 11 ? HOODIE_HI : HOODIE));
    rows.push(r(8, y, y === 11 ? HOODIE_HI : HOODIE));
    rows.push(r(9, y, HOODIE));
    rows.push(r(10, y, HOODIE_DARK));
  }
  rows.push(r(7, 12, HOODIE_LOGO), r(8, 12, HOODIE_LOGO));
  rows.push(r(5, 15, PANTS_DARK), r(6, 15, PANTS_DARK), r(7, 15, PANTS_HI), r(8, 15, PANTS_HI), r(9, 15, PANTS_DARK), r(10, 15, PANTS_DARK));
  return rows.join('');
}

// ===== ARMS =====

function leftArmPixels(): string {
  const rows: string[] = [];
  rows.push(r(4, 9, HOODIE_DARK));
  rows.push(r(3, 10, HOODIE_DARK), r(4, 10, HOODIE));
  rows.push(r(3, 11, HOODIE_DARK), r(4, 11, HOODIE_HI));
  rows.push(r(3, 12, HOODIE_DARK), r(4, 12, HOODIE));
  rows.push(r(3, 13, HOODIE_DARK), r(4, 13, HOODIE_DARK));
  rows.push(r(3, 14, SKIN_SHADOW), r(4, 14, SKIN));
  return rows.join('');
}

function rightArmPixels(): string {
  const rows: string[] = [];
  rows.push(r(11, 9, HOODIE_DARK));
  rows.push(r(11, 10, HOODIE), r(12, 10, HOODIE_DARK));
  rows.push(r(11, 11, HOODIE_HI), r(12, 11, HOODIE_DARK));
  rows.push(r(11, 12, HOODIE), r(12, 12, HOODIE_DARK));
  rows.push(r(11, 13, HOODIE_DARK), r(12, 13, HOODIE_DARK));
  rows.push(r(11, 14, SKIN), r(12, 14, SKIN_SHADOW));
  return rows.join('');
}

function rightArmWithPanPixels(): string {
  const rows: string[] = [];
  // Standard arm
  rows.push(r(11, 9, HOODIE_DARK));
  rows.push(r(11, 10, HOODIE), r(12, 10, HOODIE_DARK));
  rows.push(r(11, 11, HOODIE_HI), r(12, 11, HOODIE_DARK));
  rows.push(r(11, 12, HOODIE), r(12, 12, HOODIE_DARK));
  rows.push(r(11, 13, HOODIE_DARK), r(12, 13, HOODIE_DARK));
  rows.push(r(11, 14, SKIN), r(12, 14, SKIN_SHADOW));
  // Frying pan — attached to hand, rotates with stir animation
  rows.push(r(13, 11, PAN_DARK), r(14, 11, PAN));
  rows.push(r(13, 12, PAN), r(14, 12, FOOD_EGG));
  rows.push(r(13, 13, PAN), r(14, 13, FOOD_YLK));
  rows.push(r(13, 14, PAN_DARK), r(14, 14, PAN));
  // Pan handle
  rows.push(r(15, 12, PAN_HANDLE), r(15, 13, PAN_HANDLE));
  return rows.join('');
}

function leftArmWithSpatulaPixels(): string {
  const rows: string[] = [];
  // Standard arm
  rows.push(r(4, 9, HOODIE_DARK));
  rows.push(r(3, 10, HOODIE_DARK), r(4, 10, HOODIE));
  rows.push(r(3, 11, HOODIE_DARK), r(4, 11, HOODIE_HI));
  rows.push(r(3, 12, HOODIE_DARK), r(4, 12, HOODIE));
  rows.push(r(3, 13, HOODIE_DARK), r(4, 13, HOODIE_DARK));
  rows.push(r(3, 14, SKIN_SHADOW), r(4, 14, SKIN));
  // Spatula — handle + flat end
  rows.push(r(2, 13, PAN_HANDLE));
  rows.push(r(2, 12, PAN_HANDLE));
  rows.push(r(1, 11, PAN), r(2, 11, PAN));
  return rows.join('');
}

// ===== LEGS =====

function leftLegPixels(): string {
  const rows: string[] = [];
  rows.push(r(6, 16, PANTS_DARK), r(7, 16, PANTS));
  rows.push(r(6, 17, PANTS_DARK), r(7, 17, PANTS_HI));
  rows.push(r(6, 18, PANTS_DARK), r(7, 18, PANTS));
  rows.push(r(6, 19, PANTS_DARK), r(7, 19, PANTS));
  rows.push(r(5, 20, SHOES_DARK), r(6, 20, SHOES), r(7, 20, SHOES));
  rows.push(r(6, 20, LACE));
  rows.push(r(5, 21, SHOES_SOLE), r(6, 21, SHOES_SOLE), r(7, 21, SHOES_SOLE));
  return rows.join('');
}

function rightLegPixels(): string {
  const rows: string[] = [];
  rows.push(r(8, 16, PANTS), r(9, 16, PANTS_DARK));
  rows.push(r(8, 17, PANTS_HI), r(9, 17, PANTS_DARK));
  rows.push(r(8, 18, PANTS), r(9, 18, PANTS_DARK));
  rows.push(r(8, 19, PANTS), r(9, 19, PANTS_DARK));
  rows.push(r(8, 20, SHOES), r(9, 20, SHOES), r(10, 20, SHOES_DARK));
  rows.push(r(9, 20, LACE));
  rows.push(r(8, 21, SHOES_SOLE), r(9, 21, SHOES_SOLE), r(10, 21, SHOES_SOLE));
  return rows.join('');
}

// ===== PROPS =====

function phoneProp(): string {
  // Phone held by right hand — small screen glow
  const rows: string[] = [];
  rows.push(r(12, 15, PHONE_BODY), r(13, 15, PHONE_BODY));
  rows.push(r(12, 16, PHONE_SCREEN), r(13, 16, PHONE_SCREEN));
  rows.push(r(12, 17, PHONE_BODY), r(13, 17, PHONE_BODY));
  // Screen glow animation
  rows.push(`<rect x="${12*P}" y="${16*P}" width="${2*P}" height="${P}" fill="${PHONE_SCREEN}" opacity="0.2"><animate attributeName="opacity" values="0.15;0.3;0.18;0.25;0.15" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function laptopProp(): string {
  // Laptop in front of body — screen + keyboard
  const rows: string[] = [];
  // Screen (bright, stands out against hoodie)
  rows.push(r(4, 12, LAPTOP_FRAME));
  rows.push(r(5, 12, LAPTOP_GLOW), r(6, 12, LAPTOP_SCREEN), r(7, 12, LAPTOP_GLOW), r(8, 12, LAPTOP_SCREEN), r(9, 12, LAPTOP_GLOW), r(10, 12, LAPTOP_SCREEN));
  rows.push(r(11, 12, LAPTOP_FRAME));
  rows.push(r(4, 13, LAPTOP_FRAME));
  rows.push(r(5, 13, LAPTOP_SCREEN), r(6, 13, LAPTOP_GLOW), r(7, 13, LAPTOP_SCREEN), r(8, 13, LAPTOP_GLOW), r(9, 13, LAPTOP_SCREEN), r(10, 13, LAPTOP_GLOW));
  rows.push(r(11, 13, LAPTOP_FRAME));
  // Keyboard
  rows.push(r(4, 14, LAPTOP_FRAME), r(5, 14, LAPTOP_KEY), r(6, 14, LAPTOP_KEY), r(7, 14, LAPTOP_KEY), r(8, 14, LAPTOP_KEY), r(9, 14, LAPTOP_KEY), r(10, 14, LAPTOP_KEY), r(11, 14, LAPTOP_FRAME));
  // Screen glow effect
  rows.push(`<rect x="${5*P}" y="${12*P}" width="${6*P}" height="${2*P}" fill="${LAPTOP_GLOW}" opacity="0.12"><animate attributeName="opacity" values="0.08;0.18;0.1;0.15;0.08" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function pillowProp(): string {
  // Wide pillow behind head — visible on sides when character overlays
  const rows: string[] = [];
  rows.push(r(2, 7, PILLOW_SHADE), r(3, 7, PILLOW_FILL), r(4, 7, PILLOW_FILL), r(5, 7, PILLOW_FILL), r(6, 7, PILLOW_FILL), r(7, 7, PILLOW_FILL), r(8, 7, PILLOW_FILL), r(9, 7, PILLOW_FILL), r(10, 7, PILLOW_FILL), r(11, 7, PILLOW_FILL), r(12, 7, PILLOW_FILL), r(13, 7, PILLOW_SHADE));
  rows.push(r(3, 8, PILLOW_SHADE), r(4, 8, PILLOW_FILL), r(5, 8, PILLOW_FILL), r(6, 8, PILLOW_FILL), r(7, 8, PILLOW_FILL), r(8, 8, PILLOW_FILL), r(9, 8, PILLOW_FILL), r(10, 8, PILLOW_FILL), r(11, 8, PILLOW_FILL), r(12, 8, PILLOW_SHADE));
  return rows.join('');
}

function blanketProp(): string {
  // Blanket covering body from mid-torso to ankles
  const rows: string[] = [];
  for (let y = 11; y <= 19; y++) {
    rows.push(r(4, y, BLANKET_DARK));
    for (let x = 5; x <= 10; x++) {
      rows.push(r(x, y, (x + y) % 3 === 0 ? BLANKET_HI : BLANKET));
    }
    rows.push(r(11, y, BLANKET_DARK));
  }
  // Top edge highlight
  rows.push(r(5, 11, BLANKET_HI), r(6, 11, BLANKET_HI), r(7, 11, BLANKET_HI), r(8, 11, BLANKET_HI), r(9, 11, BLANKET_HI), r(10, 11, BLANKET_HI));
  return rows.join('');
}


function remoteProp(): string {
  // TV remote held loosely in right hand
  const rows: string[] = [];
  rows.push(r(12, 14, PHONE_BODY), r(13, 14, PHONE_BODY));
  rows.push(r(12, 15, PHONE_BODY), r(13, 15, PHONE_BODY));
  rows.push(r(12, 16, PHONE_BODY));
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function drinkProp(): string {
  // Small drink/cup on the left side
  const rows: string[] = [];
  rows.push(r(1, 18, PAN), r(2, 18, PAN_DARK));
  rows.push(r(1, 19, PAN), r(2, 19, PAN));
  rows.push(r(1, 20, PAN_DARK), r(2, 20, PAN));
  return `<g class="totem-prop">${rows.join('')}</g>`;
}


// ===== NEW PROPS =====

function bookProp(): string {
  // Book held in front — open pages visible
  const rows: string[] = [];
  rows.push(r(3, 12, '#5A3020'), r(4, 12, '#E8D8C0'), r(5, 12, '#E0D0B0'));
  rows.push(r(3, 13, '#5A3020'), r(4, 13, '#E8D8C0'), r(5, 13, '#E0D0B0'));
  rows.push(r(3, 14, '#5A3020'), r(4, 14, '#E8D8C0'), r(5, 14, '#E0D0B0'));
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function mugProp(): string {
  // Coffee mug with steam
  const rows: string[] = [];
  rows.push(r(12, 12, '#A05830'), r(13, 12, '#A05830'));
  rows.push(r(12, 13, '#A05830'), r(13, 13, '#A05830'));
  rows.push(r(14, 12, '#8A4820')); // handle
  // steam
  rows.push(`<path d="M${12*P},${11*P} Q${11*P},${8*P} ${13*P},${6*P}" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;0.2;0.12;0.06;0" dur="2.5s" repeatCount="indefinite"/></path>`);
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function markerProp(): string {
  // Whiteboard marker held up
  const rows: string[] = [];
  rows.push(r(12, 6, '#E06060'));
  rows.push(r(12, 7, '#E06060'));
  rows.push(r(12, 8, '#C0C0C0'));
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function plateProp(): string {
  // Plate with food
  const rows: string[] = [];
  rows.push(r(3, 14, PAN), r(4, 14, PAN), r(5, 14, PAN), r(6, 14, PAN));
  rows.push(r(4, 13, '#C8A040'), r(5, 13, '#80B060')); // food colors
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function spongeProp(): string {
  // Sponge held forward
  const rows: string[] = [];
  rows.push(r(3, 13, '#E8D040'), r(4, 13, '#D8C030'));
  rows.push(r(3, 14, '#E8D040'), r(4, 14, '#D8C030'));
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function bowlProp(): string {
  // Mixing bowl
  const rows: string[] = [];
  rows.push(r(4, 12, PAN), r(5, 12, '#E8D8C0'), r(6, 12, '#E8D8C0'), r(7, 12, PAN));
  rows.push(r(4, 13, PAN_DARK), r(5, 13, PAN), r(6, 13, PAN), r(7, 13, PAN_DARK));
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function controllerProp(): string {
  // Game controller
  const rows: string[] = [];
  rows.push(r(4, 14, PHONE_BODY), r(5, 14, PHONE_BODY), r(6, 14, PHONE_BODY));
  rows.push(r(5, 13, '#4060A0')); // button
  rows.push(r(4, 13, '#A04040')); // button
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function shirtProp(): string {
  // Shirt being put on
  const rows: string[] = [];
  rows.push(r(2, 10, '#6080A0'), r(3, 10, '#6080A0'));
  rows.push(r(2, 11, '#5070A0'), r(3, 11, '#5070A0'));
  rows.push(r(13, 10, '#6080A0'), r(14, 10, '#6080A0'));
  rows.push(r(13, 11, '#5070A0'), r(14, 11, '#5070A0'));
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function phoneUpProp(): string {
  // Phone held above face (for phone-bed)
  const rows: string[] = [];
  rows.push(r(6, 4, PHONE_BODY), r(7, 4, PHONE_BODY), r(8, 4, PHONE_BODY));
  rows.push(r(6, 5, PHONE_SCREEN), r(7, 5, PHONE_SCREEN), r(8, 5, PHONE_SCREEN));
  rows.push(r(6, 6, PHONE_BODY), r(7, 6, PHONE_BODY), r(8, 6, PHONE_BODY));
  rows.push(`<rect x="${6*P}" y="${5*P}" width="${3*P}" height="${P}" fill="${PHONE_SCREEN}" opacity="0.25"><animate attributeName="opacity" values="0.2;0.35;0.22;0.3;0.2" dur="3s" repeatCount="indefinite"/></rect>`);
  return `<g class="totem-prop">${rows.join('')}</g>`;
}

function nappingZzz(): string {
  return `<g class="totem-nap-zzz">
    <text x="${13 * P}" y="${3 * P}" fill="${WHITE}" font-size="${P * 2}px" font-family="monospace" opacity="0">z</text>
    <text x="${14 * P}" y="${5 * P}" fill="${WHITE}" font-size="${P * 1.5}px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

function groundShadow(): string {
  return `<ellipse class="totem-shadow" cx="${8 * P}" cy="${22.5 * P}" rx="${3.5 * P}" ry="${0.8 * P}" fill="#000" opacity="0.15"/>`;
}


function codeFloat(): string {
  return `<g class="totem-code-float">
    <text x="${1 * P}" y="${2 * P}" fill="#7ABCE0" font-size="${P * 2.5}px" font-family="monospace" font-weight="bold" opacity="0">&lt;/&gt;</text>
    <text x="${12 * P}" y="${4 * P}" fill="#A0D070" font-size="${P * 2}px" font-family="monospace" font-weight="bold" opacity="0">{ }</text>
    <text x="${2 * P}" y="${6 * P}" fill="#D0A0E0" font-size="${P * 1.5}px" font-family="monospace" font-weight="bold" opacity="0">( )</text>
  </g>`;
}


function steamFloat(): string {
  return `<g class="totem-steam-float">
    <text x="${13 * P}" y="${4 * P}" fill="#E8E8E8" font-size="${P * 2}px" font-family="sans-serif" opacity="0">~</text>
    <text x="${14 * P}" y="${6 * P}" fill="#D0D0D0" font-size="${P * 1.5}px" font-family="sans-serif" opacity="0">~</text>
    <text x="${12 * P}" y="${8 * P}" fill="#C0C0C0" font-size="${P * 1.8}px" font-family="sans-serif" opacity="0">~</text>
  </g>`;
}

function sleepingZzz(): string {
  return `<g class="totem-zzz">
    <text x="${13 * P}" y="${2 * P}" fill="${WHITE}" font-size="${P * 2.5}px" font-family="monospace" opacity="0">Z</text>
    <text x="${14 * P}" y="${5 * P}" fill="${WHITE}" font-size="${P * 2}px" font-family="monospace" opacity="0">z</text>
    <text x="${13 * P}" y="${7 * P}" fill="${WHITE}" font-size="${P * 1.5}px" font-family="monospace" opacity="0">z</text>
  </g>`;
}

// ===== MAIN EXPORT =====

export function getTotemSvg(activity: string): string {
  const act = (ACTIVITIES.includes(activity as Activity) ? activity : 'idle') as Activity;

  const parts: string[] = [groundShadow(), `<g class="totem-character">`];

  if (act === 'sleeping') {
    // Pillow behind character
    parts.push(pillowProp());
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${sleepingHeadPixels()}</g>`);
    // Blanket over body (on top of everything)
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'cooking') {
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmWithSpatulaPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmWithPanPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'studying') {
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    // Laptop between body and arms — screen visible, arms type on top
    parts.push(laptopProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'watching') {
    // Sitting relaxed, remote in hand, looking toward TV
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    parts.push(remoteProp());
    parts.push(drinkProp());
  } else if (act === 'reading') {
    // Standing, holding book
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(bookProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'thinking') {
    // Standing, hand on chin
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'coffee-break') {
    // Standing, holding mug
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    parts.push(mugProp());
  } else if (act === 'whiteboarding') {
    // Standing, arm raised with marker
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    parts.push(markerProp());
  } else if (act === 'phone-call') {
    // Standing, hand at ear
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    parts.push(phoneProp());
  } else if (act === 'eating') {
    // Sitting, eating from plate
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(plateProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'coffee-making') {
    // Standing, holding mug
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    parts.push(mugProp());
  } else if (act === 'washing-dishes') {
    // Standing, arms forward with sponge
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(spongeProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'snacking') {
    // Standing, hand to mouth
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'baking') {
    // Standing, stirring bowl
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(bowlProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'gaming') {
    // Sitting, leaning forward with controller
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(controllerProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'reading-couch') {
    // Sitting, book in lap
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(bookProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'relaxing') {
    // Sitting, arms behind head
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'stretching') {
    // Standing, arms up
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'napping') {
    // Sitting, head tilted, Zzz
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${sleepingHeadPixels()}</g>`);
  } else if (act === 'reading-bed') {
    // Propped up with book
    parts.push(pillowProp());
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(bookProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'meditating') {
    // Cross-legged, calm
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${sleepingHeadPixels()}</g>`);
  } else if (act === 'getting-dressed') {
    // Standing, arms out with shirt
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(shirtProp());
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'morning-stretch') {
    // Standing, arms up
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
  } else if (act === 'phone-bed') {
    // Lying down with phone above
    parts.push(pillowProp());
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    parts.push(phoneUpProp());
    parts.push(`<g class="totem-blanket">${blanketProp()}</g>`);
  } else if (act === 'idle') {
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
    // Phone in hand
    parts.push(phoneProp());
  } else {
    // walking — clean character, animation does the rest
    parts.push(`<g class="totem-left-leg">${leftLegPixels()}</g>`);
    parts.push(`<g class="totem-right-leg">${rightLegPixels()}</g>`);
    parts.push(`<g class="totem-body">${bodyPixels()}</g>`);
    parts.push(`<g class="totem-left-arm">${leftArmPixels()}</g>`);
    parts.push(`<g class="totem-right-arm">${rightArmPixels()}</g>`);
    parts.push(`<g class="totem-head">${headPixels()}${blinkOverlay()}</g>`);
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

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="totem-avatar totem-${act}" shape-rendering="crispEdges">
  ${parts.join('')}
</svg>`;
}

export const totemStyles = `
  .totem-avatar {
    width: 100%;
    height: auto;
    display: block;
    image-rendering: pixelated;
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
    transform-origin: ${8 * P}px ${22.5 * P}px;
  }

  /* ===== IDLE - Enhanced bob + breathe + weight shift + look around ===== */
  .totem-idle .totem-character {
    animation: totem-bob 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
  .totem-idle .totem-head {
    animation: totem-idle-head 6s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-idle .totem-body {
    animation: totem-breathe 3s ease-in-out infinite, totem-weight-shift 4s ease-in-out infinite;
    animation-delay: 0s, 0.5s;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-idle .totem-left-arm {
    animation: totem-idle-arm-l 3.2s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-idle .totem-right-arm {
    animation: totem-idle-arm-r 2.8s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-idle .totem-shadow {
    animation: totem-shadow-idle 2.8s ease-in-out infinite;
  }
  @keyframes totem-bob {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-0.5px); }
    50% { transform: translateY(-${P}px); }
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
    40% { transform: translateX(${P * 0.3}px); }
    60% { transform: translateX(-${P * 0.2}px); }
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
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-walking .totem-left-arm {
    animation: totem-arm-swing-l 0.4s ease-in-out infinite alternate;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-walking .totem-right-arm {
    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-walking .totem-left-leg {
    animation: totem-stride-l 0.4s ease-in-out infinite alternate;
    transform-origin: ${7 * P}px ${16 * P}px;
  }
  .totem-walking .totem-right-leg {
    animation: totem-stride-r 0.4s ease-in-out infinite alternate;
    transform-origin: ${8 * P}px ${16 * P}px;
  }
  .totem-walking .totem-shadow {
    animation: totem-shadow-walk 0.4s ease-in-out infinite;
  }
  @keyframes totem-walk-bob {
    0%, 100% { transform: translateY(0) scaleY(1); }
    20% { transform: translateY(${P * 0.3}px) scaleY(0.97); }
    50% { transform: translateY(-${P}px) scaleY(1.02); }
    80% { transform: translateY(${P * 0.2}px) scaleY(0.98); }
  }
  @keyframes totem-walk-lean {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    50% { transform: rotate(3deg) translateY(-${P * 0.3}px); }
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
    30% { transform: rotate(0deg) translateY(-${P * 0.5}px); }
    50% { transform: rotate(18deg) translateY(0); }
    80% { transform: rotate(0deg) translateY(${P * 0.3}px); }
    100% { transform: rotate(-18deg) translateY(0); }
  }
  @keyframes totem-stride-r {
    0% { transform: rotate(18deg) translateY(0); }
    30% { transform: rotate(0deg) translateY(-${P * 0.5}px); }
    50% { transform: rotate(-18deg) translateY(0); }
    80% { transform: rotate(0deg) translateY(${P * 0.3}px); }
    100% { transform: rotate(18deg) translateY(0); }
  }
  /* Keep old keyframes for backward compat */
  @keyframes totem-leg-l {
    0% { transform: rotate(-14deg); }
    100% { transform: rotate(14deg); }
  }
  @keyframes totem-leg-r {
    0% { transform: rotate(14deg); }
    100% { transform: rotate(-14deg); }
  }
  @keyframes totem-shadow-walk {
    0%, 100% { transform: scaleX(1); opacity: 0.15; }
    50% { transform: scaleX(0.8); opacity: 0.08; }
  }

  /* ===== STUDYING - Enhanced burst/pause typing + nod + rock ===== */
  .totem-studying .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-studying .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-studying .totem-character {
    animation: totem-study-settle 3s ease-in-out infinite;
  }
  .totem-studying .totem-head {
    animation: totem-study-head 2.5s ease-in-out infinite, totem-study-nod 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-studying .totem-body {
    animation: totem-study-lean 4s ease-in-out infinite, totem-study-rock 5s ease-in-out infinite;
    animation-delay: 0s, 1s;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-studying .totem-left-arm {
    animation: totem-type-l 2s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-studying .totem-right-arm {
    animation: totem-type-r 2s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
    animation-delay: 0.08s;
  }
  .totem-studying .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-study-settle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(${Math.round(P * 0.3)}px); }
  }
  @keyframes totem-study-head {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    30% { transform: rotate(-2deg) translateY(${Math.round(P * 0.5)}px); }
    70% { transform: rotate(1deg) translateY(0); }
  }
  @keyframes totem-study-nod {
    0%, 100% { transform: translateY(0); }
    20% { transform: translateY(${P * 0.3}px); }
    25%, 45% { transform: translateY(0); }
    45% { transform: translateY(${P * 0.5}px); }
    55% { transform: translateY(${P * 0.2}px); }
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
    10% { transform: rotate(5deg) translateY(-${P}px); }
    20% { transform: rotate(-4deg) translateY(0); }
    30% { transform: rotate(6deg) translateY(-${P}px); }
    40% { transform: rotate(-3deg) translateY(0); }
    50% { transform: rotate(5deg) translateY(-${P}px); }
    80% { transform: rotate(-5deg) translateY(0); }
    90% { transform: rotate(4deg) translateY(-${P}px); }
  }
  @keyframes totem-type-r {
    0%, 55%, 75%, 100% { transform: rotate(6deg) translateY(0); }
    10% { transform: rotate(-4deg) translateY(-${P}px); }
    20% { transform: rotate(5deg) translateY(0); }
    30% { transform: rotate(-5deg) translateY(-${P}px); }
    40% { transform: rotate(4deg) translateY(0); }
    50% { transform: rotate(-6deg) translateY(-${P}px); }
    80% { transform: rotate(6deg) translateY(0); }
    90% { transform: rotate(-5deg) translateY(-${P}px); }
  }

  /* ===== COOKING - Enhanced wind-up stir + weight shift + spatula flip ===== */
  .totem-cooking .totem-character {
    animation: totem-cook-weight 2s ease-in-out infinite;
  }
  .totem-cooking .totem-head {
    animation: totem-cook-head 2s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-cooking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-cooking .totem-right-arm {
    animation: totem-stir 0.9s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-cooking .totem-left-arm {
    animation: totem-spatula-flip 2.5s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-cooking .totem-shadow {
    animation: totem-shadow-idle 2s ease-in-out infinite;
  }
  @keyframes totem-cook-weight {
    0%, 100% { transform: translateX(0); }
    30% { transform: translateX(${P * 0.5}px); }
    70% { transform: translateX(-${P * 0.3}px); }
  }
  @keyframes totem-cook-head {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-4deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(3deg); }
  }
  @keyframes totem-stir {
    0%, 100% { transform: rotate(0deg) translateY(-${P}px); }
    15% { transform: rotate(-8deg) translateY(-${P * 1.5}px); }
    30% { transform: rotate(-16deg) translateY(-${P * 2}px); }
    45% { transform: rotate(-8deg) translateY(-${P * 2.5}px); }
    60% { transform: rotate(16deg) translateY(-${P * 1.5}px); }
    75% { transform: rotate(10deg) translateY(-${P}px); }
    85% { transform: rotate(4deg) translateY(-${P * 0.5}px); }
  }
  @keyframes totem-spatula-flip {
    0%, 100% { transform: rotate(-10deg) translateY(-${P}px); }
    40% { transform: rotate(-8deg) translateY(-${P * 0.5}px); }
    45% { transform: rotate(-20deg) translateY(-${P * 2}px); }
    55% { transform: rotate(-15deg) translateY(-${P * 1.5}px); }
  }
  /* Keep old keyframes for backward compat */
  @keyframes totem-cook-sway {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${Math.round(P * 0.5)}px); }
  }
  @keyframes totem-cook-hold {
    0%, 100% { transform: rotate(-10deg) translateY(-${P}px); }
    50% { transform: rotate(-6deg) translateY(-${Math.round(P * 0.5)}px); }
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
    15% { opacity: 0.9; transform: translate(${P * 0.5}px, -${P}px); }
    85% { opacity: 0.5; transform: translate(${P}px, -${P * 4}px); }
    100% { opacity: 0; transform: translate(${P * 1.2}px, -${P * 5}px); }
  }
  @keyframes totem-code-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.8; transform: translate(-${P * 0.3}px, -${P * 0.5}px); }
    85% { opacity: 0.4; transform: translate(-${P}px, -${P * 3}px); }
    100% { opacity: 0; transform: translate(-${P * 1.2}px, -${P * 4}px); }
  }
  @keyframes totem-code-3 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; transform: translate(${P * 0.2}px, -${P * 0.3}px); }
    85% { opacity: 0.35; transform: translate(${P * 0.5}px, -${P * 2.5}px); }
    100% { opacity: 0; transform: translate(${P * 0.7}px, -${P * 3}px); }
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
    15% { opacity: 0.7; transform: translate(${P * 0.3}px, -${P}px) scaleX(1.1); }
    85% { opacity: 0.2; transform: translate(-${P * 0.5}px, -${P * 4}px) scaleX(1.4); }
    100% { opacity: 0; transform: translate(-${P * 0.7}px, -${P * 5}px) scaleX(1.5); }
  }
  @keyframes totem-steam-2 {
    0% { opacity: 0; transform: translate(0, 0) scaleX(1); }
    15% { opacity: 0.6; transform: translate(${P * 0.5}px, -${P * 0.5}px) scaleX(1.1); }
    85% { opacity: 0.15; transform: translate(${P}px, -${P * 3}px) scaleX(1.3); }
    100% { opacity: 0; transform: translate(${P * 1.2}px, -${P * 4}px) scaleX(1.5); }
  }
  @keyframes totem-steam-3 {
    0% { opacity: 0; transform: translate(0, 0) scaleX(1); }
    15% { opacity: 0.5; transform: translate(-${P * 0.2}px, -${P * 0.3}px) scaleX(1.05); }
    85% { opacity: 0.1; transform: translate(${P * 0.3}px, -${P * 2.5}px) scaleX(1.3); }
    100% { opacity: 0; transform: translate(${P * 0.5}px, -${P * 3}px) scaleX(1.4); }
  }

  /* ===== WATCHING - Relaxed sitting, occasional reactions ===== */
  .totem-watching .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-watching .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-watching .totem-character {
    animation: totem-watch-settle 4s ease-in-out infinite;
  }
  .totem-watching .totem-head {
    animation: totem-watch-head 5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-watching .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite, totem-watch-lean 6s ease-in-out infinite;
    animation-delay: 0s, 0.5s;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-watching .totem-left-arm {
    animation: totem-watch-arm-l 5s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-watching .totem-right-arm {
    animation: totem-watch-arm-r 7s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-watching .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-watch-settle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(${Math.round(P * 0.2)}px); }
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
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-sleeping .totem-body {
    animation: totem-sleep-deep 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: ${8 * P}px ${12 * P}px;
  }
  .totem-sleeping .totem-left-arm {
    animation: totem-sleep-arm 4s ease-in-out infinite, totem-sleep-twitch 7s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
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
    30% { transform: scaleY(1.02) translateY(-${P * 0.2}px); }
    60% { transform: scaleY(0.99) translateY(${P * 0.1}px); }
  }
  @keyframes totem-sleep-twitch {
    0%, 90%, 100% { transform: translate(0, 0); }
    93% { transform: translate(${P * 0.3}px, -${P * 0.2}px); }
    96% { transform: translate(-${P * 0.2}px, ${P * 0.1}px); }
  }
  @keyframes totem-sleep-arm {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-3deg); }
  }
  /* Keep old breathing for backward compat */
  @keyframes totem-sleep-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.04); }
  }
  @keyframes totem-zzz {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 1; transform: translate(${P * 0.3}px, -${P * 0.5}px); }
    85% { opacity: 0.7; transform: translate(${P * 0.7}px, -${P * 3.5}px); }
    100% { opacity: 0; transform: translate(${P}px, -${P * 4}px); }
  }
  @keyframes totem-zzz-2 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.9; transform: translate(-${P * 0.2}px, -${P * 0.3}px); }
    85% { opacity: 0.6; transform: translate(-${P * 0.8}px, -${P * 2.7}px); }
    100% { opacity: 0; transform: translate(-${P}px, -${P * 3}px); }
  }
  @keyframes totem-zzz-3 {
    0% { opacity: 0; transform: translate(0, 0); }
    15% { opacity: 0.7; transform: translate(${P * 0.1}px, -${P * 0.2}px); }
    85% { opacity: 0.5; transform: translate(${P * 0.4}px, -${P * 1.8}px); }
    100% { opacity: 0; transform: translate(${Math.round(P * 0.5)}px, -${P * 2}px); }
  }

  /* ===== READING - Gentle page turn + slight sway ===== */
  .totem-reading .totem-character {
    animation: totem-bob 3.2s ease-in-out infinite;
  }
  .totem-reading .totem-head {
    animation: totem-read-head 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-reading .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-reading .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-read-head {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    25% { transform: rotate(-3deg) translateY(${P * 0.2}px); }
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
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-thinking .totem-right-arm {
    animation: totem-think-arm 3s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-thinking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite, totem-weight-shift 5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-think-shift {
    0%, 100% { transform: translateX(0); }
    30% { transform: translateX(${P * 0.4}px); }
    70% { transform: translateX(-${P * 0.3}px); }
  }
  @keyframes totem-think-head {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(4deg); }
    50% { transform: rotate(-3deg); }
    80% { transform: rotate(2deg); }
  }
  @keyframes totem-think-arm {
    0%, 100% { transform: rotate(-15deg) translateY(-${P}px); }
    50% { transform: rotate(-12deg) translateY(-${P * 1.5}px); }
  }

  /* ===== COFFEE-BREAK - Sip motion ===== */
  .totem-coffee-break .totem-character {
    animation: totem-bob 3s ease-in-out infinite;
  }
  .totem-coffee-break .totem-head {
    animation: totem-coffee-sip 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-coffee-break .totem-right-arm {
    animation: totem-coffee-arm 4s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-coffee-break .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-coffee-sip {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    30% { transform: rotate(-4deg) translateY(${P * 0.3}px); }
    50% { transform: rotate(0deg) translateY(0); }
  }
  @keyframes totem-coffee-arm {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg) translateY(-${P}px); }
    35% { transform: rotate(-15deg) translateY(-${P * 1.5}px); }
    50% { transform: rotate(-8deg) translateY(-${P}px); }
  }

  /* ===== WHITEBOARDING - Drawing strokes ===== */
  .totem-whiteboarding .totem-character {
    animation: totem-bob 3.5s ease-in-out infinite;
  }
  .totem-whiteboarding .totem-right-arm {
    animation: totem-wb-arm 1.5s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-whiteboarding .totem-head {
    animation: totem-wb-head 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-whiteboarding .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-wb-arm {
    0%, 100% { transform: rotate(-30deg) translateY(-${P * 2}px); }
    25% { transform: rotate(-25deg) translateY(-${P * 2.5}px); }
    50% { transform: rotate(-35deg) translateY(-${P * 1.5}px); }
    75% { transform: rotate(-28deg) translateY(-${P * 2}px); }
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
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-phone-call .totem-right-arm {
    animation: totem-call-arm 2s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-phone-call .totem-left-leg {
    animation: totem-pace-leg-l 2.5s ease-in-out infinite;
    transform-origin: ${7 * P}px ${16 * P}px;
  }
  .totem-phone-call .totem-right-leg {
    animation: totem-pace-leg-r 2.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${16 * P}px;
  }
  .totem-phone-call .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-pace {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(${P * 2}px); }
    75% { transform: translateX(-${P * 2}px); }
  }
  @keyframes totem-call-nod {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(5deg); }
    60% { transform: rotate(-2deg); }
  }
  @keyframes totem-call-arm {
    0%, 100% { transform: rotate(-20deg) translateY(-${P * 2}px); }
    50% { transform: rotate(-18deg) translateY(-${P * 1.8}px); }
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
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-eating .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-eating .totem-character {
    animation: totem-eat-settle 3s ease-in-out infinite;
  }
  .totem-eating .totem-right-arm {
    animation: totem-eat-arm 2s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-eating .totem-head {
    animation: totem-eat-head 2s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-eating .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-eating .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-eat-settle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(${Math.round(P * 0.2)}px); }
  }
  @keyframes totem-eat-arm {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(-15deg) translateY(-${P}px); }
    35% { transform: rotate(-20deg) translateY(-${P * 2}px); }
    50% { transform: rotate(-10deg) translateY(-${P}px); }
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
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-coffee-making .totem-right-arm {
    animation: totem-coffee-arm 4.5s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-coffee-making .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }

  /* ===== WASHING-DISHES - Scrubbing motion ===== */
  .totem-washing-dishes .totem-character {
    animation: totem-bob 2.5s ease-in-out infinite;
  }
  .totem-washing-dishes .totem-left-arm {
    animation: totem-scrub-l 0.6s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-washing-dishes .totem-right-arm {
    animation: totem-scrub-r 0.6s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-washing-dishes .totem-head {
    animation: totem-cook-head 2.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-washing-dishes .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-scrub-l {
    0%, 100% { transform: rotate(-5deg) translateX(-${P * 0.5}px); }
    50% { transform: rotate(5deg) translateX(${P * 0.5}px); }
  }
  @keyframes totem-scrub-r {
    0%, 100% { transform: rotate(5deg) translateX(${P * 0.5}px); }
    50% { transform: rotate(-5deg) translateX(-${P * 0.5}px); }
  }

  /* ===== SNACKING - Hand to mouth ===== */
  .totem-snacking .totem-character {
    animation: totem-bob 3s ease-in-out infinite;
  }
  .totem-snacking .totem-right-arm {
    animation: totem-snack-arm 2s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-snacking .totem-head {
    animation: totem-eat-head 2.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-snacking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-snack-arm {
    0%, 60%, 100% { transform: rotate(0deg); }
    15% { transform: rotate(-12deg) translateY(-${P}px); }
    25% { transform: rotate(-18deg) translateY(-${P * 1.5}px); }
    40% { transform: rotate(-8deg) translateY(-${P * 0.5}px); }
  }

  /* ===== BAKING - Stirring bowl ===== */
  .totem-baking .totem-character {
    animation: totem-cook-weight 2.5s ease-in-out infinite;
  }
  .totem-baking .totem-right-arm {
    animation: totem-stir 1s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-baking .totem-head {
    animation: totem-cook-head 2.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-baking .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }

  /* ===== GAMING - Sitting, leaning forward, button mashing ===== */
  .totem-gaming .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-gaming .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-gaming .totem-character {
    animation: totem-game-lean 2s ease-in-out infinite;
  }
  .totem-gaming .totem-left-arm {
    animation: totem-game-mash-l 0.3s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-gaming .totem-right-arm {
    animation: totem-game-mash-r 0.3s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
    animation-delay: 0.05s;
  }
  .totem-gaming .totem-head {
    animation: totem-game-head 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-gaming .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-gaming .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }
  @keyframes totem-game-lean {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    30% { transform: translateY(-${P * 0.3}px) rotate(2deg); }
    70% { transform: translateY(${P * 0.2}px) rotate(-1deg); }
  }
  @keyframes totem-game-mash-l {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg) translateY(-${P * 0.3}px); }
  }
  @keyframes totem-game-mash-r {
    0%, 100% { transform: rotate(3deg); }
    50% { transform: rotate(-3deg) translateY(-${P * 0.3}px); }
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
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-reading-couch .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-reading-couch .totem-character {
    animation: totem-watch-settle 4s ease-in-out infinite;
  }
  .totem-reading-couch .totem-head {
    animation: totem-read-head 4.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-reading-couch .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-reading-couch .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-reading-couch .totem-shadow {
    transform: scaleX(1.2);
    opacity: 0.12;
  }

  /* ===== RELAXING - Sitting, slow breathing ===== */
  .totem-relaxing .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-relaxing .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-relaxing .totem-character {
    animation: totem-watch-settle 5s ease-in-out infinite;
  }
  .totem-relaxing .totem-head {
    animation: totem-relax-head 6s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-relaxing .totem-left-arm {
    animation: totem-relax-arm-l 4s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-relaxing .totem-right-arm {
    animation: totem-relax-arm-r 4s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-relaxing .totem-body {
    animation: totem-breathe 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
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
    0%, 100% { transform: rotate(-10deg) translateY(-${P}px); }
    50% { transform: rotate(-8deg) translateY(-${P * 0.8}px); }
  }
  @keyframes totem-relax-arm-r {
    0%, 100% { transform: rotate(10deg) translateY(-${P}px); }
    50% { transform: rotate(8deg) translateY(-${P * 0.8}px); }
  }

  /* ===== STRETCHING - Standing, arms up cycle ===== */
  .totem-stretching .totem-character {
    animation: totem-stretch-body 3s ease-in-out infinite;
  }
  .totem-stretching .totem-left-arm {
    animation: totem-stretch-arm-l 3s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-stretching .totem-right-arm {
    animation: totem-stretch-arm-r 3s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-stretching .totem-head {
    animation: totem-stretch-head 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-stretching .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-stretch-body {
    0%, 100% { transform: translateY(0) scaleY(1); }
    50% { transform: translateY(-${P}px) scaleY(1.03); }
  }
  @keyframes totem-stretch-arm-l {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-80deg) translateY(-${P * 2}px); }
  }
  @keyframes totem-stretch-arm-r {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(80deg) translateY(-${P * 2}px); }
  }
  @keyframes totem-stretch-head {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P * 0.5}px); }
  }

  /* ===== NAPPING - Sitting, head tilted, slow breathing ===== */
  .totem-napping .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-napping .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-napping .totem-character {
    animation: totem-watch-settle 5s ease-in-out infinite;
  }
  .totem-napping .totem-head {
    animation: totem-nap-head 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-napping .totem-body {
    animation: totem-sleep-deep 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
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
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-reading-bed .totem-left-arm {
    animation: totem-read-arm 5s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-reading-bed .totem-body {
    animation: totem-breathe 3.5s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-reading-bed .totem-blanket {
    animation: totem-blanket-ripple 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }

  /* ===== MEDITATING - Cross-legged, slow breathing ===== */
  .totem-meditating .totem-left-leg {
    transform: rotate(80deg);
    transform-origin: ${6.5 * P}px ${16 * P}px;
  }
  .totem-meditating .totem-right-leg {
    transform: rotate(80deg);
    transform-origin: ${8.5 * P}px ${16 * P}px;
  }
  .totem-meditating .totem-character {
    animation: totem-med-float 5s ease-in-out infinite;
  }
  .totem-meditating .totem-body {
    animation: totem-sleep-deep 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${12 * P}px;
  }
  .totem-meditating .totem-left-arm {
    transform: rotate(15deg);
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-meditating .totem-right-arm {
    transform: rotate(-15deg);
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  @keyframes totem-med-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P * 0.5}px); }
  }

  /* ===== GETTING-DRESSED - Putting on shirt ===== */
  .totem-getting-dressed .totem-character {
    animation: totem-dress-body 2s ease-in-out infinite;
  }
  .totem-getting-dressed .totem-left-arm {
    animation: totem-dress-arm-l 2s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-getting-dressed .totem-right-arm {
    animation: totem-dress-arm-r 2s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-getting-dressed .totem-head {
    animation: totem-stretch-head 2s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-getting-dressed .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-dress-body {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-${P * 0.5}px); }
  }
  @keyframes totem-dress-arm-l {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(-50deg) translateY(-${P}px); }
    70% { transform: rotate(-30deg); }
  }
  @keyframes totem-dress-arm-r {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(50deg) translateY(-${P}px); }
    70% { transform: rotate(30deg); }
  }

  /* ===== MORNING-STRETCH - Standing, big stretch ===== */
  .totem-morning-stretch .totem-character {
    animation: totem-stretch-body 4s ease-in-out infinite;
  }
  .totem-morning-stretch .totem-left-arm {
    animation: totem-mstretch-arm-l 4s ease-in-out infinite;
    transform-origin: ${4 * P}px ${9 * P}px;
  }
  .totem-morning-stretch .totem-right-arm {
    animation: totem-mstretch-arm-r 4s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-morning-stretch .totem-head {
    animation: totem-stretch-head 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${8 * P}px;
  }
  .totem-morning-stretch .totem-body {
    animation: totem-breathe 3s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-mstretch-arm-l {
    0%, 20%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-90deg) translateY(-${P * 2}px); }
    80% { transform: rotate(-40deg) translateY(-${P}px); }
  }
  @keyframes totem-mstretch-arm-r {
    0%, 20%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(90deg) translateY(-${P * 2}px); }
    80% { transform: rotate(40deg) translateY(-${P}px); }
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
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  .totem-phone-bed .totem-right-arm {
    animation: totem-phone-scroll 3s ease-in-out infinite;
    transform-origin: ${11 * P}px ${9 * P}px;
  }
  .totem-phone-bed .totem-blanket {
    animation: totem-blanket-ripple 4s ease-in-out infinite;
    transform-origin: ${8 * P}px ${15 * P}px;
  }
  @keyframes totem-phone-scroll {
    0%, 100% { transform: rotate(-5deg); }
    30% { transform: rotate(-8deg) translateY(${P * 0.3}px); }
    70% { transform: rotate(-3deg) translateY(-${P * 0.3}px); }
  }

`;
