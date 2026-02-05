/**
 * Atmospheric room backgrounds with contextual furniture
 * Each scene has key furniture that matches the avatar's activity:
 *   office → desk + monitor (avatar studies at desk)
 *   kitchen → counter + stove (avatar cooks at counter)
 *   living_room → couch + TV (avatar idles on couch)
 *   bedroom → bed + pillow (avatar sleeps in bed)
 *
 * Dark moody atmosphere so pixel art avatar pops on top.
 * ViewBox: 400x100, preserveAspectRatio="xMidYMid slice"
 * Gradient IDs prefixed with 'lofi' to avoid collision
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiOffBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A2A3A"/><stop offset="100%" stop-color="#222E40"/></linearGradient>
    <radialGradient id="lofiOffGlow" cx="0.45" cy="0.35" r="0.4"><stop offset="0%" stop-color="#4A8ABE" stop-opacity="0.25"/><stop offset="100%" stop-color="#4A8ABE" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiOffLamp" cx="0.12" cy="0.4" r="0.25"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.18"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiOffBg)"/>
  <rect width="400" height="100" fill="url(#lofiOffLamp)"/>
  <rect width="400" height="100" fill="url(#lofiOffGlow)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- wall/floor divide -->
  <line x1="0" y1="62" x2="400" y2="62" stroke="#2A3A4A" stroke-width="0.5" opacity="0.3"/>
  <!-- DESK — spans left-to-center, avatar sits at it -->
  <rect x="0" y="56" width="240" height="4" rx="1" fill="#5A4A38" opacity="0.7"/>
  <rect x="0" y="56" width="240" height="1" fill="#6A5A48" opacity="0.5"/>
  <!-- desk legs -->
  <rect x="10" y="60" width="3" height="20" fill="#4A3A28" opacity="0.4"/>
  <rect x="230" y="60" width="3" height="20" fill="#4A3A28" opacity="0.4"/>
  <rect x="10" y="72" width="225" height="2" rx="0.5" fill="#4A3A28" opacity="0.25"/>
  <!-- MONITOR — behind desk, center-right area -->
  <rect x="130" y="18" width="55" height="35" rx="2" fill="#1A1A2E" opacity="0.8"/>
  <rect x="133" y="21" width="49" height="29" rx="1" fill="#2A4A6A" opacity="0.6">
    <animate attributeName="opacity" values="0.55;0.65;0.58;0.62;0.55" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- code lines on screen -->
  <line x1="137" y1="27" x2="162" y2="27" stroke="#6AAAC0" stroke-width="0.8" opacity="0.3">
    <animate attributeName="opacity" values="0.2;0.4;0.25;0.35;0.2" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="137" y1="32" x2="172" y2="32" stroke="#6AAAC0" stroke-width="0.8" opacity="0.25">
    <animate attributeName="opacity" values="0.15;0.35;0.2;0.3;0.15" dur="2.3s" repeatCount="indefinite" begin="0.3s"/>
  </line>
  <line x1="137" y1="37" x2="158" y2="37" stroke="#9AC06A" stroke-width="0.8" opacity="0.2">
    <animate attributeName="opacity" values="0.12;0.28;0.16;0.24;0.12" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
  </line>
  <line x1="137" y1="42" x2="168" y2="42" stroke="#C0906A" stroke-width="0.8" opacity="0.2">
    <animate attributeName="opacity" values="0.12;0.28;0.16;0.24;0.12" dur="2.5s" repeatCount="indefinite" begin="1s"/>
  </line>
  <!-- cursor blink -->
  <rect x="169" y="31" width="2" height="3" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.3;0.3;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- monitor stand -->
  <rect x="153" y="53" width="9" height="3" rx="0.5" fill="#1A1A2E" opacity="0.7"/>
  <rect x="148" y="55" width="19" height="1.5" rx="0.8" fill="#2A2A3E" opacity="0.6"/>
  <!-- screen glow on desk -->
  <ellipse cx="157" cy="57" rx="30" ry="3" fill="#4A7AAA" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.07;0.04" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- keyboard on desk -->
  <rect x="140" y="57.5" width="30" height="2.5" rx="0.5" fill="#2A2A3E" opacity="0.5"/>
  <!-- CHAIR — silhouette behind avatar position -->
  <rect x="30" y="48" width="30" height="25" rx="4" fill="#2A3444" opacity="0.4"/>
  <rect x="40" y="73" width="10" height="12" rx="1" fill="#222E3E" opacity="0.3"/>
  <!-- desk lamp left -->
  <line x1="15" y1="56" x2="20" y2="38" stroke="#3A4A5A" stroke-width="1"/>
  <line x1="20" y1="38" x2="28" y2="34" stroke="#3A4A5A" stroke-width="1"/>
  <circle cx="26" cy="33" r="3" fill="#FFF0C0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.14;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </circle>
  <!-- bookshelf far right -->
  <rect x="340" y="8" width="45" height="52" rx="1" fill="#253545" opacity="0.4"/>
  <rect x="343" y="12" width="39" height="10" fill="#2A3A4A" opacity="0.3"/>
  <rect x="343" y="26" width="39" height="10" fill="#2A3A4A" opacity="0.3"/>
  <rect x="343" y="40" width="39" height="10" fill="#2A3A4A" opacity="0.3"/>
  <!-- book shapes -->
  <rect x="346" y="13" width="4" height="8" fill="#C87070" opacity="0.2"/>
  <rect x="351" y="14" width="3" height="7" fill="#5B8D5E" opacity="0.2"/>
  <rect x="355" y="13" width="5" height="8" fill="#5B8DBE" opacity="0.2"/>
  <rect x="346" y="27" width="5" height="8" fill="#D4A040" opacity="0.18"/>
  <rect x="352" y="28" width="4" height="7" fill="#8B5E8B" opacity="0.18"/>
  <!-- window hint top-right -->
  <rect x="275" y="5" width="40" height="28" rx="1.5" fill="#2A3A4A" opacity="0.3"/>
  <rect x="278" y="8" width="15" height="22" fill="#3A5060" opacity="0.25"/>
  <rect x="297" y="8" width="15" height="22" fill="#3A5060" opacity="0.25"/>
  <!-- ambient dust -->
  <circle cx="90" cy="30" r="0.6" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.05;0" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="250" cy="45" r="0.5" fill="#8AB0E0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="6s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2A2018"/><stop offset="100%" stop-color="#302418"/></linearGradient>
    <radialGradient id="lofiKitFlame" cx="0.4" cy="0.55" r="0.3"><stop offset="0%" stop-color="#E08040" stop-opacity="0.18"/><stop offset="100%" stop-color="#E08040" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiKitOverhead" cx="0.4" cy="0.05" r="0.5"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.1"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiKitBg)"/>
  <rect width="400" height="100" fill="url(#lofiKitOverhead)"/>
  <rect width="400" height="100" fill="url(#lofiKitFlame)">
    <animate attributeName="opacity" values="0.7;1;0.8;0.95;0.7" dur="1.2s" repeatCount="indefinite"/>
  </rect>
  <!-- COUNTER + STOVETOP — spans width, waist height for standing avatar -->
  <rect x="0" y="56" width="280" height="4" rx="0.5" fill="#808888" opacity="0.5"/>
  <rect x="0" y="56" width="280" height="1" fill="#909898" opacity="0.35"/>
  <!-- lower cabinets -->
  <rect x="0" y="60" width="280" height="30" rx="1" fill="#3A5038" opacity="0.35"/>
  <rect x="5" y="62" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="50" y="62" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="95" y="62" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="140" y="62" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="185" y="62" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="230" y="62" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <!-- cabinet handles -->
  <rect x="23" y="73" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="68" y="73" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="113" y="73" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="158" y="73" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="203" y="73" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="248" y="73" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <!-- tile backsplash hint -->
  <g stroke="#3A3020" stroke-width="0.3" opacity="0.12">
    <line x1="0" y1="20" x2="280" y2="20"/>
    <line x1="0" y1="32" x2="280" y2="32"/>
    <line x1="0" y1="44" x2="280" y2="44"/>
  </g>
  <!-- upper cabinets -->
  <rect x="0" y="2" width="55" height="16" rx="1" fill="#3A5038" opacity="0.3"/>
  <rect x="65" y="2" width="55" height="16" rx="1" fill="#3A5038" opacity="0.3"/>
  <!-- range hood above stove -->
  <rect x="130" y="3" width="60" height="12" rx="1" fill="#505858" opacity="0.25"/>
  <rect x="135" y="15" width="50" height="3" rx="0.5" fill="#484848" opacity="0.2"/>
  <!-- STOVE BURNERS — on counter, where avatar cooks -->
  <ellipse cx="150" cy="53" rx="10" ry="4" fill="#2A2020" opacity="0.4"/>
  <ellipse cx="180" cy="53" rx="10" ry="4" fill="#2A2020" opacity="0.4"/>
  <!-- flame glow -->
  <ellipse cx="150" cy="52" rx="5" ry="2" fill="#E08040">
    <animate attributeName="opacity" values="0.15;0.4;0.2;0.35;0.15" dur="0.6s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="4;5.5;4.5;5;4" dur="0.8s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="180" cy="52" rx="5" ry="2" fill="#E08040">
    <animate attributeName="opacity" values="0.2;0.35;0.15;0.3;0.2" dur="0.7s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="rx" values="4.5;5.5;4;5;4.5" dur="0.9s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <!-- pot on burner -->
  <rect x="143" y="45" width="14" height="8" rx="1.5" fill="#505868" opacity="0.5"/>
  <rect x="141" y="43" width="18" height="2.5" rx="0.8" fill="#606870" opacity="0.4"/>
  <!-- steam wisps from pot -->
  <circle cx="148" cy="40" r="1.8" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="40" to="12" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.08;0.06;0" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="148;145;150;147" dur="2.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="152" cy="38" r="1.5" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="38" to="8" dur="3.2s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="opacity" values="0;0.06;0.04;0" dur="3.2s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="cx" values="152;155;151;154" dur="3.2s" repeatCount="indefinite" begin="0.8s"/>
  </circle>
  <circle cx="155" cy="39" r="1.3" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="39" to="14" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="opacity" values="0;0.06;0.04;0" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cx" values="155;153;157;154" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <!-- flame glow on wall -->
  <ellipse cx="165" cy="38" rx="25" ry="12" fill="#E08040" opacity="0.025">
    <animate attributeName="opacity" values="0.02;0.04;0.025;0.035;0.02" dur="1s" repeatCount="indefinite"/>
  </ellipse>
  <!-- FRIDGE far right -->
  <rect x="310" y="5" width="50" height="80" rx="2" fill="#505858" opacity="0.3"/>
  <line x1="310" y1="40" x2="360" y2="40" stroke="#484848" stroke-width="0.5" opacity="0.3"/>
  <rect x="354" y="18" width="2" height="10" rx="0.5" fill="#606060" opacity="0.25"/>
  <rect x="354" y="50" width="2" height="10" rx="0.5" fill="#606060" opacity="0.25"/>
  <!-- sink area left of stove -->
  <rect x="60" y="53" width="25" height="3" rx="1" fill="#606870" opacity="0.3"/>
  <line x1="72" y1="53" x2="72" y2="40" stroke="#707880" stroke-width="1.2" stroke-linecap="round" opacity="0.25"/>
  <!-- hanging utensils -->
  <line x1="220" y1="18" x2="220" y2="32" stroke="#606060" stroke-width="0.6" opacity="0.18">
    <animateTransform attributeName="transform" type="rotate" values="-0.8,220,18;0.8,220,18;-0.8,220,18" dur="5s" repeatCount="indefinite"/>
  </line>
  <line x1="228" y1="18" x2="228" y2="35" stroke="#606060" stroke-width="0.6" opacity="0.18">
    <animateTransform attributeName="transform" type="rotate" values="0.5,228,18;-0.5,228,18;0.5,228,18" dur="4.5s" repeatCount="indefinite"/>
  </line>
  <!-- warm dust -->
  <circle cx="100" cy="35" r="0.5" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="5s" repeatCount="indefinite"/>
  </circle>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A1828"/><stop offset="100%" stop-color="#222030"/></linearGradient>
    <radialGradient id="lofiLivTV" cx="0.75" cy="0.35" r="0.35"><stop offset="0%" stop-color="#5A8ABE" stop-opacity="0.18"/><stop offset="100%" stop-color="#5A8ABE" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.55" cy="0.3" r="0.25"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.15"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiLivBg)"/>
  <rect width="400" height="100" fill="url(#lofiLivLamp)">
    <animate attributeName="opacity" values="0.7;0.9;0.75;0.85;0.7" dur="6s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiLivTV)">
    <animate attributeName="opacity" values="0.6;1;0.7;0.9;0.6" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- floor line -->
  <line x1="0" y1="68" x2="400" y2="68" stroke="#2A2838" stroke-width="0.5" opacity="0.25"/>
  <!-- wood floor hints -->
  <line x1="0" y1="80" x2="400" y2="80" stroke="#2A2838" stroke-width="0.3" opacity="0.1"/>
  <line x1="0" y1="92" x2="400" y2="92" stroke="#2A2838" stroke-width="0.3" opacity="0.08"/>
  <!-- COUCH — low and wide, left-center where avatar stands/sits -->
  <rect x="5" y="52" width="160" height="6" rx="2" fill="#5A3828" opacity="0.5"/>
  <rect x="0" y="58" width="170" height="18" rx="4" fill="#4A2818" opacity="0.45"/>
  <!-- cushions -->
  <rect x="8" y="59" width="42" height="15" rx="3" fill="#5A3020" opacity="0.3"/>
  <rect x="55" y="59" width="42" height="15" rx="3" fill="#5A3020" opacity="0.3"/>
  <rect x="102" y="59" width="42" height="15" rx="3" fill="#5A3020" opacity="0.3"/>
  <!-- armrests -->
  <rect x="-3" y="54" width="10" height="24" rx="3" fill="#4A2818" opacity="0.35"/>
  <rect x="163" y="54" width="10" height="24" rx="3" fill="#4A2818" opacity="0.35"/>
  <!-- throw pillows -->
  <rect x="12" y="52" width="14" height="8" rx="3" fill="#D4A040" opacity="0.2"/>
  <rect x="140" y="52" width="12" height="8" rx="3" fill="#5B8DBE" opacity="0.15"/>
  <!-- coffee table -->
  <rect x="40" y="82" width="80" height="3.5" rx="1" fill="#4A3828" opacity="0.35"/>
  <rect x="45" y="85.5" width="3" height="8" rx="0.5" fill="#3A2818" opacity="0.25"/>
  <rect x="112" y="85.5" width="3" height="8" rx="0.5" fill="#3A2818" opacity="0.25"/>
  <!-- rug under table -->
  <rect x="20" y="80" width="130" height="16" rx="3" fill="#6A4040" opacity="0.08"/>
  <!-- TV — right side on console -->
  <rect x="280" y="16" width="62" height="36" rx="1.5" fill="#1A1A2E" opacity="0.65"/>
  <rect x="283" y="19" width="56" height="30" rx="1" fill="#2A3A5A" opacity="0.4">
    <animate attributeName="opacity" values="0.35;0.5;0.38;0.45;0.35" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV color shift -->
  <rect x="286" y="22" width="50" height="24" rx="0.5" fill="#4A6A9A" opacity="0.12">
    <animate attributeName="fill" values="#4A6A9A;#6A5A9A;#4A8A6A;#7A6A4A;#4A6A9A" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.08;0.18;0.1;0.15;0.08" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall -->
  <rect x="270" y="5" width="90" height="50" rx="3" fill="#5A8ABE" opacity="0.015">
    <animate attributeName="fill" values="#5A8ABE;#8A5ABE;#5ABE7A;#BE8A5A;#5A8ABE" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.01;0.03;0.015;0.025;0.01" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV console -->
  <rect x="275" y="54" width="75" height="6" rx="1.5" fill="#3A2820" opacity="0.4"/>
  <rect x="280" y="60" width="5" height="12" rx="1" fill="#2A1810" opacity="0.3"/>
  <rect x="344" y="60" width="5" height="12" rx="1" fill="#2A1810" opacity="0.3"/>
  <!-- floor lamp -->
  <line x1="210" y1="22" x2="210" y2="72" stroke="#3A3848" stroke-width="1.2" opacity="0.35"/>
  <ellipse cx="210" cy="20" rx="7" ry="5" fill="#F0D080" opacity="0.12"/>
  <circle cx="210" cy="20" r="2.5" fill="#FFF5D0" opacity="0.08"/>
  <ellipse cx="210" cy="74" rx="5" ry="2" fill="#3A3848" opacity="0.25"/>
  <!-- window hint -->
  <rect x="140" y="3" width="50" height="30" rx="1.5" fill="#2A2840" opacity="0.25"/>
  <rect x="143" y="6" width="20" height="24" fill="#3A3858" opacity="0.2"/>
  <rect x="167" y="6" width="20" height="24" fill="#3A3858" opacity="0.2"/>
  <!-- plant silhouette -->
  <rect x="365" y="48" width="8" height="14" rx="1.5" fill="#2A3828" opacity="0.3"/>
  <ellipse cx="369" cy="46" rx="7" ry="5" fill="#2A4828" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="-1,369,55;1,369,55;-1,369,55" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <!-- ambient dust -->
  <circle cx="100" cy="40" r="0.5" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="5.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="320" cy="30" r="0.4" fill="#8AB0E0" opacity="0">
    <animate attributeName="opacity" values="0;0.06;0.03;0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedBg" x1="0" y1="0" x2="0.5" y2="1"><stop offset="0%" stop-color="#141028"/><stop offset="100%" stop-color="#1C1838"/></linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.82" cy="0.15" r="0.3"><stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.15"/><stop offset="100%" stop-color="#E0D8C0" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.6" cy="0.45" r="0.2"><stop offset="0%" stop-color="#F0D080" stop-opacity="0.1"/><stop offset="100%" stop-color="#F0D080" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiBedBg)"/>
  <rect width="400" height="100" fill="url(#lofiBedMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="6s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiBedLamp)">
    <animate attributeName="opacity" values="0.6;0.8;0.65;0.75;0.6" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- BED — wide, spans left-center where avatar sleeps -->
  <!-- headboard -->
  <rect x="0" y="28" width="8" height="40" rx="2" fill="#3A2820" opacity="0.6"/>
  <rect x="2" y="30" width="4" height="10" rx="1" fill="#4A3830" opacity="0.35"/>
  <rect x="2" y="44" width="4" height="10" rx="1" fill="#4A3830" opacity="0.35"/>
  <!-- mattress + bedding — the main sleeping surface -->
  <rect x="8" y="32" width="220" height="36" rx="3" fill="#2A2048" opacity="0.5"/>
  <!-- sheets/duvet -->
  <rect x="12" y="35" width="212" height="30" rx="2.5" fill="#3A3060" opacity="0.4"/>
  <!-- duvet texture -->
  <line x1="20" y1="50" x2="218" y2="50" stroke="#4A4070" stroke-width="0.5" opacity="0.2"/>
  <!-- pillow area near headboard -->
  <ellipse cx="30" cy="44" rx="16" ry="8" fill="#D0C8A0" opacity="0.15"/>
  <ellipse cx="30" cy="50" rx="14" ry="7" fill="#C8C098" opacity="0.12"/>
  <!-- foot of bed -->
  <rect x="228" y="32" width="5" height="36" rx="1.5" fill="#3A2820" opacity="0.45"/>
  <!-- bed legs -->
  <rect x="4" y="68" width="4" height="12" rx="0.8" fill="#3A2820" opacity="0.35"/>
  <rect x="226" y="68" width="4" height="12" rx="0.8" fill="#3A2820" opacity="0.35"/>
  <!-- NIGHTSTAND with lamp -->
  <rect x="245" y="40" width="25" height="28" rx="1.5" fill="#2A2038" opacity="0.4"/>
  <rect x="248" y="43" width="19" height="10" rx="0.8" fill="#302848" opacity="0.3"/>
  <rect x="248" y="56" width="19" height="10" rx="0.8" fill="#302848" opacity="0.3"/>
  <!-- lamp on nightstand -->
  <rect x="254" y="32" width="8" height="8" rx="1.5" fill="#383050" opacity="0.4"/>
  <ellipse cx="258" cy="30" rx="6" ry="3.5" fill="#F0D080" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.14;0.18;0.12" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="258" cy="30" r="2" fill="#FFF5D0" opacity="0.1">
    <animate attributeName="opacity" values="0.08;0.14;0.1;0.12;0.08" dur="4s" repeatCount="indefinite"/>
  </circle>
  <!-- WINDOW with night sky -->
  <rect x="310" y="5" width="45" height="35" rx="1.5" fill="#1A1838" opacity="0.5"/>
  <rect x="313" y="8" width="18" height="29" fill="#181640" opacity="0.5"/>
  <rect x="335" y="8" width="18" height="29" fill="#181640" opacity="0.5"/>
  <!-- stars -->
  <circle cx="318" cy="12" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.4;0.1;0.3;0.05" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="326" cy="18" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.3;0.05;0.25;0.1" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="340" cy="11" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.35;0.12;0.28;0.08" dur="4.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="348" cy="17" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.25;0.1;0.2;0.05" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="320" cy="26" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0;0.2;0.05;0.15;0" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <!-- moon -->
  <circle cx="345" cy="14" r="4.5" fill="#E0D8C0" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.35;0.25;0.3;0.2" dur="6s" repeatCount="indefinite"/>
  </circle>
  <!-- moonlight beam on floor -->
  <polygon points="313,40 353,40 370,100 295,100" fill="#D0C8E0" opacity="0.015">
    <animate attributeName="opacity" values="0.01;0.025;0.015;0.02;0.01" dur="6s" repeatCount="indefinite"/>
  </polygon>
  <!-- dresser far right -->
  <rect x="365" y="35" width="30" height="35" rx="1.5" fill="#2A2038" opacity="0.35"/>
  <rect x="368" y="38" width="24" height="13" rx="0.8" fill="#302848" opacity="0.25"/>
  <rect x="368" y="55" width="24" height="13" rx="0.8" fill="#302848" opacity="0.25"/>
  <!-- floating dust in moonlight -->
  <circle cx="330" cy="55" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="58" to="45" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="340" cy="70" r="0.4" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.06;0.03;0" dur="7s" repeatCount="indefinite" begin="2.5s"/>
    <animate attributeName="cy" from="72" to="55" dur="7s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,
};
