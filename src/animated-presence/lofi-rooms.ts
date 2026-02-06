/**
 * Atmospheric room backgrounds with properly-scaled furniture
 * Each scene has key furniture that matches the avatar's activity:
 *   office → desk + monitor (avatar studies at desk)
 *   kitchen → counter + stove (avatar cooks at counter)
 *   living_room → couch + TV (avatar idles on couch)
 *   bedroom → bed + pillow (avatar sleeps in bed)
 *
 * Proportions calibrated to avatar overlay:
 *   Floor line: y=85 (matches avatar feet position)
 *   Desk/counter surface: y=50-52 (matches avatar waist/forearm height)
 *   Furniture fills y=5 to y=85 (full visible scene)
 *
 * Dark moody atmosphere so pixel art avatar pops on top.
 * ViewBox: 400x100, preserveAspectRatio="xMidYMid slice"
 * Gradient IDs prefixed with 'lofi' to avoid collision
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiOffBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A2A3A"/><stop offset="100%" stop-color="#222E40"/></linearGradient>
    <radialGradient id="lofiOffGlow" cx="0.35" cy="0.3" r="0.35"><stop offset="0%" stop-color="#4A8ABE" stop-opacity="0.22"/><stop offset="100%" stop-color="#4A8ABE" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiOffLamp" cx="0.06" cy="0.3" r="0.2"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.15"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiOffBg)"/>
  <rect width="400" height="100" fill="url(#lofiOffLamp)"/>
  <rect width="400" height="100" fill="url(#lofiOffGlow)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#152030" opacity="0.5"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A3A4A" stroke-width="0.5" opacity="0.4"/>
  <!-- DESK — surface at y=50, spans left-center -->
  <rect x="0" y="50" width="230" height="5" rx="1" fill="#5A4A38" opacity="0.7"/>
  <rect x="0" y="50" width="230" height="1.5" fill="#6A5A48" opacity="0.4"/>
  <!-- desk legs -->
  <rect x="10" y="55" width="4" height="30" fill="#4A3A28" opacity="0.4"/>
  <rect x="220" y="55" width="4" height="30" fill="#4A3A28" opacity="0.4"/>
  <!-- desk crossbar -->
  <rect x="10" y="72" width="214" height="2" rx="0.5" fill="#4A3A28" opacity="0.2"/>
  <!-- MONITOR — on desk, prominent -->
  <rect x="105" y="10" width="60" height="38" rx="2" fill="#1A1A2E" opacity="0.8"/>
  <rect x="108" y="13" width="54" height="32" rx="1" fill="#2A4A6A" opacity="0.55">
    <animate attributeName="opacity" values="0.5;0.6;0.52;0.58;0.5" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- code lines on screen -->
  <line x1="113" y1="20" x2="143" y2="20" stroke="#6AAAC0" stroke-width="0.8" opacity="0.3">
    <animate attributeName="opacity" values="0.2;0.4;0.25;0.35;0.2" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="113" y1="26" x2="153" y2="26" stroke="#6AAAC0" stroke-width="0.8" opacity="0.25">
    <animate attributeName="opacity" values="0.15;0.35;0.2;0.3;0.15" dur="2.3s" repeatCount="indefinite" begin="0.3s"/>
  </line>
  <line x1="113" y1="32" x2="138" y2="32" stroke="#9AC06A" stroke-width="0.8" opacity="0.2">
    <animate attributeName="opacity" values="0.12;0.28;0.16;0.24;0.12" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
  </line>
  <line x1="113" y1="38" x2="148" y2="38" stroke="#C0906A" stroke-width="0.8" opacity="0.2">
    <animate attributeName="opacity" values="0.12;0.28;0.16;0.24;0.12" dur="2.5s" repeatCount="indefinite" begin="1s"/>
  </line>
  <!-- cursor blink -->
  <rect x="154" y="25" width="2" height="3" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.3;0.3;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- monitor stand -->
  <rect x="131" y="48" width="8" height="3" rx="0.5" fill="#1A1A2E" opacity="0.7"/>
  <rect x="126" y="50" width="18" height="1.5" rx="0.8" fill="#2A2A3E" opacity="0.6"/>
  <!-- screen glow on desk -->
  <ellipse cx="135" cy="53" rx="30" ry="4" fill="#4A7AAA" opacity="0.05">
    <animate attributeName="opacity" values="0.03;0.07;0.04;0.06;0.03" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- keyboard on desk -->
  <rect x="115" y="52" width="32" height="3" rx="0.5" fill="#2A2A3E" opacity="0.5"/>
  <!-- CHAIR silhouette -->
  <rect x="20" y="36" width="35" height="32" rx="4" fill="#2A3444" opacity="0.4"/>
  <rect x="30" y="68" width="15" height="17" rx="1.5" fill="#222E3E" opacity="0.3"/>
  <!-- desk lamp left -->
  <line x1="8" y1="50" x2="14" y2="28" stroke="#3A4A5A" stroke-width="1.2"/>
  <line x1="14" y1="28" x2="24" y2="23" stroke="#3A4A5A" stroke-width="1"/>
  <circle cx="22" cy="22" r="4" fill="#FFF0C0" opacity="0.15">
    <animate attributeName="opacity" values="0.1;0.2;0.12;0.18;0.1" dur="5s" repeatCount="indefinite"/>
  </circle>
  <!-- bookshelf far right -->
  <rect x="330" y="5" width="55" height="78" rx="1.5" fill="#253545" opacity="0.35"/>
  <rect x="334" y="10" width="47" height="14" fill="#2A3A4A" opacity="0.25"/>
  <rect x="334" y="28" width="47" height="14" fill="#2A3A4A" opacity="0.25"/>
  <rect x="334" y="46" width="47" height="14" fill="#2A3A4A" opacity="0.25"/>
  <rect x="334" y="64" width="47" height="14" fill="#2A3A4A" opacity="0.25"/>
  <!-- books -->
  <rect x="338" y="12" width="5" height="10" fill="#C87070" opacity="0.18"/>
  <rect x="344" y="13" width="4" height="9" fill="#5B8D5E" opacity="0.18"/>
  <rect x="349" y="12" width="6" height="10" fill="#5B8DBE" opacity="0.18"/>
  <rect x="338" y="30" width="6" height="10" fill="#D4A040" opacity="0.15"/>
  <rect x="345" y="31" width="5" height="9" fill="#8B5E8B" opacity="0.15"/>
  <!-- window hint -->
  <rect x="260" y="5" width="45" height="35" rx="1.5" fill="#2A3A4A" opacity="0.3"/>
  <rect x="263" y="8" width="18" height="29" fill="#3A5060" opacity="0.22"/>
  <rect x="284" y="8" width="18" height="29" fill="#3A5060" opacity="0.22"/>
  <!-- ambient dust -->
  <circle cx="80" cy="30" r="0.6" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.05;0" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="40" r="0.5" fill="#8AB0E0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="6s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2A2018"/><stop offset="100%" stop-color="#302418"/></linearGradient>
    <radialGradient id="lofiKitFlame" cx="0.42" cy="0.45" r="0.3"><stop offset="0%" stop-color="#E08040" stop-opacity="0.18"/><stop offset="100%" stop-color="#E08040" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiKitOverhead" cx="0.4" cy="0.05" r="0.5"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.1"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiKitBg)"/>
  <rect width="400" height="100" fill="url(#lofiKitOverhead)"/>
  <rect width="400" height="100" fill="url(#lofiKitFlame)">
    <animate attributeName="opacity" values="0.7;1;0.8;0.95;0.7" dur="1.2s" repeatCount="indefinite"/>
  </rect>
  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#1A1810" opacity="0.4"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A3020" stroke-width="0.5" opacity="0.3"/>
  <!-- COUNTER + STOVETOP — surface at y=50 -->
  <rect x="0" y="50" width="280" height="5" rx="0.5" fill="#808888" opacity="0.5"/>
  <rect x="0" y="50" width="280" height="1.5" fill="#909898" opacity="0.35"/>
  <!-- lower cabinets -->
  <rect x="0" y="55" width="280" height="30" rx="1" fill="#3A5038" opacity="0.35"/>
  <rect x="5" y="57" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="50" y="57" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="95" y="57" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="140" y="57" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="185" y="57" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <rect x="230" y="57" width="40" height="26" rx="1" fill="#3A5838" opacity="0.2"/>
  <!-- cabinet handles -->
  <rect x="23" y="68" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="68" y="68" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="113" y="68" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="158" y="68" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="203" y="68" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <rect x="248" y="68" width="5" height="1.2" rx="0.5" fill="#606858" opacity="0.3"/>
  <!-- tile backsplash -->
  <g stroke="#3A3020" stroke-width="0.3" opacity="0.12">
    <line x1="0" y1="15" x2="280" y2="15"/>
    <line x1="0" y1="28" x2="280" y2="28"/>
    <line x1="0" y1="41" x2="280" y2="41"/>
  </g>
  <!-- upper cabinets -->
  <rect x="0" y="2" width="55" height="18" rx="1" fill="#3A5038" opacity="0.3"/>
  <rect x="65" y="2" width="55" height="18" rx="1" fill="#3A5038" opacity="0.3"/>
  <!-- range hood above stove -->
  <rect x="130" y="3" width="65" height="14" rx="1" fill="#505858" opacity="0.25"/>
  <rect x="135" y="17" width="55" height="3" rx="0.5" fill="#484848" opacity="0.2"/>
  <!-- STOVE BURNERS — on counter surface -->
  <ellipse cx="155" cy="47" rx="10" ry="4" fill="#2A2020" opacity="0.4"/>
  <ellipse cx="185" cy="47" rx="10" ry="4" fill="#2A2020" opacity="0.4"/>
  <!-- flame glow -->
  <ellipse cx="155" cy="46" rx="5" ry="2" fill="#E08040">
    <animate attributeName="opacity" values="0.15;0.4;0.2;0.35;0.15" dur="0.6s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="4;5.5;4.5;5;4" dur="0.8s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="185" cy="46" rx="5" ry="2" fill="#E08040">
    <animate attributeName="opacity" values="0.2;0.35;0.15;0.3;0.2" dur="0.7s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="rx" values="4.5;5.5;4;5;4.5" dur="0.9s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <!-- pot on burner -->
  <rect x="147" y="36" width="16" height="12" rx="2" fill="#505868" opacity="0.5"/>
  <rect x="145" y="34" width="20" height="3" rx="1" fill="#606870" opacity="0.4"/>
  <!-- steam wisps -->
  <circle cx="153" cy="30" r="1.8" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="30" to="5" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.08;0.06;0" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="153;150;155;152" dur="2.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="157" cy="28" r="1.5" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="28" to="3" dur="3.2s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="opacity" values="0;0.06;0.04;0" dur="3.2s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="cx" values="157;160;156;159" dur="3.2s" repeatCount="indefinite" begin="0.8s"/>
  </circle>
  <circle cx="160" cy="29" r="1.3" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="29" to="8" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="opacity" values="0;0.06;0.04;0" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cx" values="160;158;162;159" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <!-- flame glow on wall -->
  <ellipse cx="170" cy="32" rx="25" ry="12" fill="#E08040" opacity="0.025">
    <animate attributeName="opacity" values="0.02;0.04;0.025;0.035;0.02" dur="1s" repeatCount="indefinite"/>
  </ellipse>
  <!-- FRIDGE far right -->
  <rect x="310" y="5" width="55" height="80" rx="2" fill="#505858" opacity="0.3"/>
  <line x1="310" y1="38" x2="365" y2="38" stroke="#484848" stroke-width="0.5" opacity="0.3"/>
  <rect x="358" y="15" width="2.5" height="12" rx="0.5" fill="#606060" opacity="0.25"/>
  <rect x="358" y="48" width="2.5" height="12" rx="0.5" fill="#606060" opacity="0.25"/>
  <!-- sink area -->
  <rect x="60" y="46" width="28" height="4" rx="1.2" fill="#606870" opacity="0.3"/>
  <line x1="74" y1="46" x2="74" y2="30" stroke="#707880" stroke-width="1.2" stroke-linecap="round" opacity="0.25"/>
  <!-- hanging utensils -->
  <line x1="225" y1="20" x2="225" y2="36" stroke="#606060" stroke-width="0.6" opacity="0.18">
    <animateTransform attributeName="transform" type="rotate" values="-0.8,225,20;0.8,225,20;-0.8,225,20" dur="5s" repeatCount="indefinite"/>
  </line>
  <line x1="233" y1="20" x2="233" y2="38" stroke="#606060" stroke-width="0.6" opacity="0.18">
    <animateTransform attributeName="transform" type="rotate" values="0.5,233,20;-0.5,233,20;0.5,233,20" dur="4.5s" repeatCount="indefinite"/>
  </line>
  <!-- warm dust -->
  <circle cx="100" cy="30" r="0.5" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="5s" repeatCount="indefinite"/>
  </circle>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A1828"/><stop offset="100%" stop-color="#222030"/></linearGradient>
    <radialGradient id="lofiLivTV" cx="0.78" cy="0.3" r="0.35"><stop offset="0%" stop-color="#5A8ABE" stop-opacity="0.18"/><stop offset="100%" stop-color="#5A8ABE" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.55" cy="0.25" r="0.25"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.15"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiLivBg)"/>
  <rect width="400" height="100" fill="url(#lofiLivLamp)">
    <animate attributeName="opacity" values="0.7;0.9;0.75;0.85;0.7" dur="6s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiLivTV)">
    <animate attributeName="opacity" values="0.6;1;0.7;0.9;0.6" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#151420" opacity="0.4"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A2838" stroke-width="0.5" opacity="0.3"/>
  <!-- wood floor hints -->
  <line x1="0" y1="92" x2="400" y2="92" stroke="#2A2838" stroke-width="0.3" opacity="0.08"/>
  <!-- rug -->
  <rect x="20" y="85" width="160" height="12" rx="3" fill="#6A4040" opacity="0.08"/>
  <!-- COUCH — back at y=40, seat at y=48, full height furniture -->
  <rect x="5" y="40" width="190" height="8" rx="2.5" fill="#5A3828" opacity="0.5"/>
  <rect x="0" y="48" width="200" height="24" rx="4" fill="#4A2818" opacity="0.45"/>
  <!-- cushions -->
  <rect x="8" y="49" width="50" height="21" rx="3" fill="#5A3020" opacity="0.3"/>
  <rect x="63" y="49" width="50" height="21" rx="3" fill="#5A3020" opacity="0.3"/>
  <rect x="118" y="49" width="50" height="21" rx="3" fill="#5A3020" opacity="0.3"/>
  <!-- couch legs -->
  <rect x="5" y="72" width="4" height="13" rx="1" fill="#3A2010" opacity="0.3"/>
  <rect x="190" y="72" width="4" height="13" rx="1" fill="#3A2010" opacity="0.3"/>
  <!-- armrests -->
  <rect x="-3" y="42" width="12" height="32" rx="3.5" fill="#4A2818" opacity="0.35"/>
  <rect x="191" y="42" width="12" height="32" rx="3.5" fill="#4A2818" opacity="0.35"/>
  <!-- throw pillows -->
  <rect x="12" y="40" width="16" height="10" rx="3.5" fill="#D4A040" opacity="0.2"/>
  <rect x="160" y="40" width="14" height="10" rx="3.5" fill="#5B8DBE" opacity="0.15"/>
  <!-- coffee table -->
  <rect x="50" y="80" width="90" height="4" rx="1" fill="#4A3828" opacity="0.35"/>
  <rect x="55" y="84" width="3" height="10" rx="0.5" fill="#3A2818" opacity="0.25"/>
  <rect x="132" y="84" width="3" height="10" rx="0.5" fill="#3A2818" opacity="0.25"/>
  <!-- TV — right side, prominent -->
  <rect x="285" y="12" width="65" height="40" rx="1.5" fill="#1A1A2E" opacity="0.65"/>
  <rect x="288" y="15" width="59" height="34" rx="1" fill="#2A3A5A" opacity="0.4">
    <animate attributeName="opacity" values="0.35;0.5;0.38;0.45;0.35" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV color shift -->
  <rect x="291" y="18" width="53" height="28" rx="0.5" fill="#4A6A9A" opacity="0.12">
    <animate attributeName="fill" values="#4A6A9A;#6A5A9A;#4A8A6A;#7A6A4A;#4A6A9A" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.08;0.18;0.1;0.15;0.08" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall -->
  <rect x="275" y="2" width="95" height="50" rx="3" fill="#5A8ABE" opacity="0.015">
    <animate attributeName="fill" values="#5A8ABE;#8A5ABE;#5ABE7A;#BE8A5A;#5A8ABE" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.01;0.03;0.015;0.025;0.01" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV console -->
  <rect x="280" y="54" width="80" height="8" rx="1.5" fill="#3A2820" opacity="0.4"/>
  <rect x="285" y="62" width="5" height="23" rx="1" fill="#2A1810" opacity="0.3"/>
  <rect x="350" y="62" width="5" height="23" rx="1" fill="#2A1810" opacity="0.3"/>
  <!-- floor lamp -->
  <line x1="225" y1="16" x2="225" y2="82" stroke="#3A3848" stroke-width="1.2" opacity="0.35"/>
  <ellipse cx="225" cy="14" rx="8" ry="5" fill="#F0D080" opacity="0.12"/>
  <circle cx="225" cy="14" r="2.5" fill="#FFF5D0" opacity="0.08"/>
  <ellipse cx="225" cy="84" rx="5" ry="2" fill="#3A3848" opacity="0.25"/>
  <!-- window hint -->
  <rect x="140" y="3" width="50" height="30" rx="1.5" fill="#2A2840" opacity="0.25"/>
  <rect x="143" y="6" width="20" height="24" fill="#3A3858" opacity="0.2"/>
  <rect x="167" y="6" width="20" height="24" fill="#3A3858" opacity="0.2"/>
  <!-- plant silhouette -->
  <rect x="370" y="55" width="10" height="28" rx="2" fill="#2A3828" opacity="0.3"/>
  <ellipse cx="375" cy="52" rx="8" ry="6" fill="#2A4828" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="-1,375,65;1,375,65;-1,375,65" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <!-- ambient dust -->
  <circle cx="100" cy="30" r="0.5" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="5.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="320" cy="25" r="0.4" fill="#8AB0E0" opacity="0">
    <animate attributeName="opacity" values="0;0.06;0.03;0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedBg" x1="0" y1="0" x2="0.5" y2="1"><stop offset="0%" stop-color="#141028"/><stop offset="100%" stop-color="#1C1838"/></linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.85" cy="0.12" r="0.3"><stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.15"/><stop offset="100%" stop-color="#E0D8C0" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.68" cy="0.35" r="0.2"><stop offset="0%" stop-color="#F0D080" stop-opacity="0.1"/><stop offset="100%" stop-color="#F0D080" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- base atmosphere -->
  <rect width="400" height="100" fill="url(#lofiBedBg)"/>
  <rect width="400" height="100" fill="url(#lofiBedMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="6s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiBedLamp)">
    <animate attributeName="opacity" values="0.6;0.8;0.65;0.75;0.6" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0E0C20" opacity="0.5"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A2840" stroke-width="0.3" opacity="0.2"/>
  <!-- BED — headboard on LEFT, spans most of scene -->
  <!-- headboard (LEFT side) — tall decorative piece -->
  <rect x="0" y="22" width="10" height="63" rx="2" fill="#3A2820" opacity="0.65"/>
  <rect x="2" y="25" width="6" height="14" rx="1" fill="#4A3830" opacity="0.35"/>
  <rect x="2" y="43" width="6" height="14" rx="1" fill="#4A3830" opacity="0.35"/>
  <rect x="2" y="61" width="6" height="14" rx="1" fill="#4A3830" opacity="0.35"/>
  <!-- bed frame + mattress -->
  <rect x="10" y="42" width="255" height="43" rx="3" fill="#2A2048" opacity="0.5"/>
  <!-- sheets/duvet -->
  <rect x="14" y="38" width="247" height="40" rx="3" fill="#3A3060" opacity="0.4"/>
  <!-- duvet texture lines -->
  <line x1="20" y1="52" x2="255" y2="52" stroke="#4A4070" stroke-width="0.5" opacity="0.15"/>
  <line x1="20" y1="65" x2="255" y2="65" stroke="#4A4070" stroke-width="0.5" opacity="0.1"/>
  <!-- pillows at LEFT end (near headboard) -->
  <ellipse cx="35" cy="46" rx="18" ry="10" fill="#D0C8A0" opacity="0.18"/>
  <ellipse cx="35" cy="52" rx="16" ry="9" fill="#C8C098" opacity="0.14"/>
  <!-- second pillow -->
  <ellipse cx="65" cy="47" rx="16" ry="9" fill="#C8C098" opacity="0.12"/>
  <!-- footboard (RIGHT side of bed) -->
  <rect x="265" y="42" width="6" height="43" rx="1.5" fill="#3A2820" opacity="0.45"/>
  <!-- bed legs -->
  <rect x="5" y="83" width="5" height="8" rx="1" fill="#3A2820" opacity="0.35"/>
  <rect x="263" y="83" width="5" height="8" rx="1" fill="#3A2820" opacity="0.35"/>
  <!-- NIGHTSTAND with lamp -->
  <rect x="282" y="42" width="28" height="42" rx="1.5" fill="#2A2038" opacity="0.4"/>
  <rect x="285" y="46" width="22" height="14" rx="1" fill="#302848" opacity="0.3"/>
  <rect x="285" y="64" width="22" height="14" rx="1" fill="#302848" opacity="0.3"/>
  <!-- lamp on nightstand -->
  <rect x="292" y="30" width="10" height="12" rx="2" fill="#383050" opacity="0.4"/>
  <ellipse cx="297" cy="28" rx="7" ry="4" fill="#F0D080" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.14;0.18;0.12" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="297" cy="28" r="2.5" fill="#FFF5D0" opacity="0.1">
    <animate attributeName="opacity" values="0.08;0.14;0.1;0.12;0.08" dur="4s" repeatCount="indefinite"/>
  </circle>
  <!-- WINDOW with night sky -->
  <rect x="330" y="5" width="45" height="38" rx="1.5" fill="#1A1838" opacity="0.5"/>
  <rect x="333" y="8" width="18" height="32" fill="#181640" opacity="0.5"/>
  <rect x="355" y="8" width="18" height="32" fill="#181640" opacity="0.5"/>
  <!-- stars -->
  <circle cx="338" cy="12" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.4;0.1;0.3;0.05" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="346" cy="20" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.3;0.05;0.25;0.1" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="360" cy="11" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.35;0.12;0.28;0.08" dur="4.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="368" cy="19" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.25;0.1;0.2;0.05" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="340" cy="28" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0;0.2;0.05;0.15;0" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <!-- moon -->
  <circle cx="365" cy="15" r="5" fill="#E0D8C0" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.35;0.25;0.3;0.2" dur="6s" repeatCount="indefinite"/>
  </circle>
  <!-- moonlight beam on floor -->
  <polygon points="333,43 373,43 390,100 310,100" fill="#D0C8E0" opacity="0.015">
    <animate attributeName="opacity" values="0.01;0.025;0.015;0.02;0.01" dur="6s" repeatCount="indefinite"/>
  </polygon>
  <!-- dresser far right -->
  <rect x="380" y="35" width="18" height="50" rx="1.5" fill="#2A2038" opacity="0.3"/>
  <rect x="382" y="38" width="14" height="18" rx="0.8" fill="#302848" opacity="0.2"/>
  <rect x="382" y="60" width="14" height="18" rx="0.8" fill="#302848" opacity="0.2"/>
  <!-- floating dust in moonlight -->
  <circle cx="350" cy="55" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="58" to="45" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="360" cy="70" r="0.4" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.06;0.03;0" dur="7s" repeatCount="indefinite" begin="2.5s"/>
    <animate attributeName="cy" from="72" to="55" dur="7s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,

  not_home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiNhBg" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0%" stop-color="#0A0A18"/><stop offset="100%" stop-color="#0E0E20"/></linearGradient>
    <radialGradient id="lofiNhMoon" cx="0.8" cy="0.15" r="0.25"><stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.2"/><stop offset="100%" stop-color="#E0D8C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- dark sky -->
  <rect width="400" height="100" fill="url(#lofiNhBg)"/>
  <rect width="400" height="100" fill="url(#lofiNhMoon)"/>
  <!-- stars -->
  <circle class="star" cx="50" cy="12" r="0.6" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.6;0.2;0.5;0.1" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle class="star" cx="120" cy="8" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.4;0.1;0.3;0.05" dur="4s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle class="star" cx="180" cy="18" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.5;0.15;0.4;0.08" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle class="star" cx="250" cy="6" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.45;0.15;0.35;0.1" dur="4.5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle class="star" cx="290" cy="22" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0;0.35;0.1;0.25;0" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle class="star" cx="370" cy="10" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.3;0.08;0.2;0.05" dur="3.8s" repeatCount="indefinite" begin="0.8s"/>
  </circle>
  <!-- moon -->
  <circle cx="330" cy="18" r="7" fill="#E0D8C0" opacity="0.3">
    <animate attributeName="opacity" values="0.25;0.4;0.3;0.35;0.25" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="333" cy="16" r="6" fill="#0A0A18" opacity="0.9"/>
  <!-- ground -->
  <rect x="0" y="78" width="400" height="22" fill="#0C0C1A"/>
  <rect x="0" y="78" width="400" height="1" fill="#1A1A30" opacity="0.3"/>
  <!-- house silhouette -->
  <!-- main structure -->
  <rect x="130" y="38" width="140" height="42" fill="#0E0E1E"/>
  <!-- roof -->
  <polygon points="120,38 200,8 280,38" fill="#0C0C1A" stroke="#1A1A2E" stroke-width="0.5"/>
  <!-- chimney -->
  <rect x="240" y="12" width="14" height="26" fill="#0E0E1E"/>
  <!-- dark windows -->
  <rect x="148" y="48" width="18" height="14" rx="1" fill="#0A0A16" stroke="#1A1A2E" stroke-width="0.5" opacity="0.8"/>
  <rect x="178" y="48" width="18" height="14" rx="1" fill="#0A0A16" stroke="#1A1A2E" stroke-width="0.5" opacity="0.8"/>
  <rect x="235" y="48" width="18" height="14" rx="1" fill="#0A0A16" stroke="#1A1A2E" stroke-width="0.5" opacity="0.8"/>
  <!-- door -->
  <rect x="205" y="55" width="16" height="25" rx="1" fill="#0A0A16" stroke="#1A1A2E" stroke-width="0.5"/>
  <circle cx="218" cy="68" r="1" fill="#2A2A3E" opacity="0.4"/>
  <!-- upper window (in roof) -->
  <rect x="190" y="22" width="12" height="10" rx="1" fill="#0A0A16" stroke="#1A1A2E" stroke-width="0.5" opacity="0.7"/>
  <!-- path to door -->
  <rect x="208" y="80" width="10" height="20" fill="#0A0A16" opacity="0.3"/>
  <!-- fence -->
  <g opacity="0.15" stroke="#1A1A30" stroke-width="0.8">
    <line x1="80" y1="78" x2="130" y2="78"/>
    <line x1="270" y1="78" x2="340" y2="78"/>
    <line x1="85" y1="72" x2="85" y2="78"/>
    <line x1="100" y1="72" x2="100" y2="78"/>
    <line x1="115" y1="72" x2="115" y2="78"/>
    <line x1="280" y1="72" x2="280" y2="78"/>
    <line x1="300" y1="72" x2="300" y2="78"/>
    <line x1="320" y1="72" x2="320" y2="78"/>
  </g>
  <!-- tree silhouette -->
  <ellipse cx="60" cy="55" rx="18" ry="22" fill="#0A0E14" opacity="0.6"/>
  <rect x="58" y="70" width="4" height="10" fill="#0A0E14" opacity="0.5"/>
  <ellipse cx="355" cy="58" rx="14" ry="18" fill="#0A0E14" opacity="0.5"/>
  <rect x="353" y="72" width="4" height="8" fill="#0A0E14" opacity="0.4"/>
  <!-- moonlight on ground -->
  <ellipse cx="330" cy="80" rx="30" ry="8" fill="#D0C8E0" opacity="0.012">
    <animate attributeName="opacity" values="0.008;0.018;0.01;0.015;0.008" dur="6s" repeatCount="indefinite"/>
  </ellipse>
</svg>`,
};
