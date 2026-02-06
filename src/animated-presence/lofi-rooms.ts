/**
 * Lo-fi room backgrounds — cozy, visible, atmospheric
 *
 * Design principles:
 *   - Each room has a dominant light source that actually illuminates
 *   - Furniture is visible (not hidden in darkness)
 *   - Fewer animations but each one clearly readable
 *   - Distinct color temperature per room
 *   - Lo-fi beats aesthetic: warm, cozy, lived-in
 *
 * Layout constraints:
 *   Floor line: y=85 (avatar feet)
 *   Desk/counter surface: y=50-52 (avatar waist)
 *   ViewBox: 400x100, preserveAspectRatio="xMidYMid slice"
 *   Gradient IDs prefixed with 'lofi' to avoid collision
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiOffBg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#1E2D3D"/>
      <stop offset="100%" stop-color="#16202E"/>
    </linearGradient>
    <radialGradient id="lofiOffMonitor" cx="0.34" cy="0.35" r="0.4">
      <stop offset="0%" stop-color="#4A90D0" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#3A70A0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#3A70A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiOffLamp" cx="0.06" cy="0.28" r="0.22">
      <stop offset="0%" stop-color="#FFE4A0" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#FFD080" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#FFD080" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + light washes -->
  <rect width="400" height="100" fill="url(#lofiOffBg)"/>
  <rect width="400" height="100" fill="url(#lofiOffLamp)"/>
  <rect width="400" height="100" fill="url(#lofiOffMonitor)">
    <animate attributeName="opacity" values="0.7;1;0.8;0.95;0.7" dur="4s" repeatCount="indefinite"/>
  </rect>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0F1822" opacity="0.7"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A3A4E" stroke-width="0.5" opacity="0.5"/>
  <!-- floor boards -->
  <line x1="0" y1="90" x2="400" y2="90" stroke="#1A2838" stroke-width="0.3" opacity="0.2"/>
  <line x1="0" y1="95" x2="400" y2="95" stroke="#1A2838" stroke-width="0.3" opacity="0.15"/>

  <!-- DESK -->
  <rect x="0" y="50" width="240" height="5" rx="1" fill="#6B5840" opacity="0.8"/>
  <rect x="0" y="50" width="240" height="1.5" fill="#7D6A50" opacity="0.5"/>
  <rect x="12" y="55" width="4" height="30" fill="#5A4830" opacity="0.5"/>
  <rect x="228" y="55" width="4" height="30" fill="#5A4830" opacity="0.5"/>
  <rect x="12" y="72" width="220" height="2" rx="0.5" fill="#5A4830" opacity="0.25"/>

  <!-- MONITOR — the room's hero light source -->
  <rect x="105" y="8" width="62" height="40" rx="2.5" fill="#0E0E1E" opacity="0.9"/>
  <!-- screen -->
  <rect x="108" y="11" width="56" height="34" rx="1.5" fill="#1A3050">
    <animate attributeName="fill" values="#1A3050;#1E3558;#1A3050" dur="6s" repeatCount="indefinite"/>
  </rect>
  <!-- code lines — visible, colored -->
  <line x1="114" y1="18" x2="146" y2="18" stroke="#7ABCE0" stroke-width="1" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.35;0.55;0.4" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="114" y1="23" x2="156" y2="23" stroke="#7ABCE0" stroke-width="1" opacity="0.4">
    <animate attributeName="opacity" values="0.3;0.55;0.35;0.5;0.3" dur="2.3s" repeatCount="indefinite" begin="0.3s"/>
  </line>
  <line x1="118" y1="28" x2="142" y2="28" stroke="#A0D070" stroke-width="1" opacity="0.4">
    <animate attributeName="opacity" values="0.25;0.5;0.3;0.45;0.25" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
  </line>
  <line x1="114" y1="33" x2="150" y2="33" stroke="#E0A060" stroke-width="1" opacity="0.35">
    <animate attributeName="opacity" values="0.2;0.45;0.25;0.4;0.2" dur="2.5s" repeatCount="indefinite" begin="1s"/>
  </line>
  <line x1="118" y1="38" x2="138" y2="38" stroke="#C080C0" stroke-width="1" opacity="0.3">
    <animate attributeName="opacity" values="0.2;0.4;0.25;0.35;0.2" dur="2.1s" repeatCount="indefinite" begin="0.5s"/>
  </line>
  <!-- cursor -->
  <rect x="157" y="22" width="2" height="4" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.7;0.7;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- monitor stand -->
  <rect x="131" y="48" width="10" height="3" rx="0.5" fill="#0E0E1E" opacity="0.8"/>
  <rect x="125" y="50" width="22" height="1.5" rx="0.8" fill="#1A1A2E" opacity="0.7"/>
  <!-- monitor glow on desk — visible blue pool -->
  <ellipse cx="136" cy="53" rx="40" ry="5" fill="#4A90D0" opacity="0.08">
    <animate attributeName="opacity" values="0.06;0.12;0.07;0.1;0.06" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- keyboard -->
  <rect x="115" y="52" width="34" height="3" rx="0.5" fill="#1A1A2E" opacity="0.6"/>

  <!-- CHAIR -->
  <rect x="18" y="34" width="38" height="35" rx="5" fill="#2D3E50" opacity="0.5"/>
  <rect x="28" y="69" width="18" height="16" rx="2" fill="#243444" opacity="0.4"/>

  <!-- DESK LAMP — warm visible glow -->
  <line x1="8" y1="50" x2="15" y2="26" stroke="#4A5A6A" stroke-width="1.5"/>
  <line x1="15" y1="26" x2="26" y2="20" stroke="#4A5A6A" stroke-width="1.2"/>
  <ellipse cx="24" cy="19" rx="6" ry="4" fill="#FFE4A0" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.3;0.22;0.28;0.2" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="24" cy="19" r="2" fill="#FFF5D0" opacity="0.35">
    <animate attributeName="opacity" values="0.3;0.4;0.32;0.38;0.3" dur="5s" repeatCount="indefinite"/>
  </circle>
  <!-- lamp light cone on desk -->
  <ellipse cx="20" cy="50" rx="18" ry="4" fill="#FFE4A0" opacity="0.05">
    <animate attributeName="opacity" values="0.04;0.07;0.045;0.065;0.04" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- COFFEE MUG + steam -->
  <rect x="78" y="46" width="7" height="6" rx="1" fill="#8B5030" opacity="0.6"/>
  <rect x="85" y="48" width="2.5" height="3" rx="1" fill="#8B5030" opacity="0.4"/>
  <!-- steam — visible white wisps -->
  <path d="M80,44 Q79,38 82,34" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.1;0.05;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M80,44 Q79,38 82,34;M80,44 Q78,36 81,30;M80,44 Q81,37 79,32;M80,44 Q79,38 82,34" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M83,44 Q84,37 81,32" fill="none" stroke="#FFF" stroke-width="0.6" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.08;0.04;0" dur="3.5s" repeatCount="indefinite" begin="1s"/>
    <animate attributeName="d" values="M83,44 Q84,37 81,32;M83,44 Q85,35 82,28;M83,44 Q82,36 84,30;M83,44 Q84,37 81,32" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </path>

  <!-- BOOKSHELF -->
  <rect x="330" y="5" width="58" height="78" rx="2" fill="#2A3A4A" opacity="0.5"/>
  <rect x="334" y="10" width="50" height="15" fill="#223040" opacity="0.35"/>
  <rect x="334" y="29" width="50" height="15" fill="#223040" opacity="0.35"/>
  <rect x="334" y="48" width="50" height="15" fill="#223040" opacity="0.35"/>
  <rect x="334" y="67" width="50" height="13" fill="#223040" opacity="0.35"/>
  <!-- books — visible colors -->
  <rect x="338" y="12" width="6" height="11" fill="#D06060" opacity="0.35"/>
  <rect x="345" y="13" width="5" height="10" fill="#50A058" opacity="0.3"/>
  <rect x="351" y="12" width="7" height="11" fill="#5090D0" opacity="0.3"/>
  <rect x="360" y="14" width="5" height="9" fill="#D0A040" opacity="0.25"/>
  <rect x="338" y="31" width="7" height="11" fill="#D0A040" opacity="0.25"/>
  <rect x="346" y="32" width="6" height="10" fill="#9060A0" opacity="0.25"/>
  <rect x="354" y="31" width="5" height="11" fill="#60A0A0" opacity="0.25"/>

  <!-- WINDOW -->
  <rect x="262" y="5" width="48" height="38" rx="2" fill="#243848" opacity="0.4"/>
  <rect x="265" y="8" width="20" height="32" fill="#2A4A60" opacity="0.35"/>
  <rect x="288" y="8" width="20" height="32" fill="#2A4A60" opacity="0.35"/>
  <!-- rain streaks -->
  <line x1="270" y1="10" x2="269" y2="18" stroke="#6AAAD0" stroke-width="0.4" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.15;0" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y1" from="8" to="38" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y2" from="14" to="44" dur="1.2s" repeatCount="indefinite"/>
  </line>
  <line x1="278" y1="12" x2="277" y2="20" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.12;0" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y1" from="8" to="38" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y2" from="15" to="45" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
  </line>
  <line x1="293" y1="9" x2="292" y2="16" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.1;0" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y1" from="8" to="38" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y2" from="14" to="44" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
  </line>
  <line x1="302" y1="11" x2="301" y2="17" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y1" from="8" to="38" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y2" from="13" to="43" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
  </line>

  <!-- dust in lamp light -->
  <circle cx="28" cy="32" r="0.6" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0.15;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="35" to="25" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="18" cy="40" r="0.4" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0" dur="5s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="42" to="30" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#2E2218"/>
      <stop offset="100%" stop-color="#241C12"/>
    </linearGradient>
    <radialGradient id="lofiKitFlame" cx="0.4" cy="0.4" r="0.35">
      <stop offset="0%" stop-color="#FF8040" stop-opacity="0.2"/>
      <stop offset="40%" stop-color="#E06020" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#E06020" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiKitOverhead" cx="0.35" cy="0.02" r="0.45">
      <stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + light washes -->
  <rect width="400" height="100" fill="url(#lofiKitBg)"/>
  <rect width="400" height="100" fill="url(#lofiKitOverhead)"/>
  <rect width="400" height="100" fill="url(#lofiKitFlame)">
    <animate attributeName="opacity" values="0.6;1;0.7;0.9;0.65;0.95;0.6" dur="1.5s" repeatCount="indefinite"/>
  </rect>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#1A1508" opacity="0.6"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A3020" stroke-width="0.5" opacity="0.4"/>
  <!-- tile pattern -->
  <line x1="0" y1="92" x2="400" y2="92" stroke="#2A2010" stroke-width="0.3" opacity="0.15"/>

  <!-- COUNTER -->
  <rect x="0" y="50" width="280" height="5" rx="0.5" fill="#909898" opacity="0.6"/>
  <rect x="0" y="50" width="280" height="1.5" fill="#A0A8A8" opacity="0.4"/>
  <!-- lower cabinets -->
  <rect x="0" y="55" width="280" height="30" rx="1" fill="#3D5A40" opacity="0.45"/>
  <rect x="5" y="57" width="42" height="26" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="52" y="57" width="42" height="26" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="99" y="57" width="42" height="26" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="146" y="57" width="42" height="26" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="193" y="57" width="42" height="26" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="240" y="57" width="32" height="26" rx="1" fill="#456048" opacity="0.3"/>
  <!-- handles -->
  <rect x="24" y="68" width="5" height="1.5" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="71" y="68" width="5" height="1.5" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="118" y="68" width="5" height="1.5" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="165" y="68" width="5" height="1.5" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="212" y="68" width="5" height="1.5" rx="0.5" fill="#708068" opacity="0.4"/>

  <!-- backsplash tiles -->
  <g stroke="#3A3020" stroke-width="0.3" opacity="0.15">
    <line x1="0" y1="15" x2="280" y2="15"/>
    <line x1="0" y1="28" x2="280" y2="28"/>
    <line x1="0" y1="41" x2="280" y2="41"/>
  </g>
  <!-- upper cabinets -->
  <rect x="0" y="2" width="55" height="18" rx="1" fill="#3D5A40" opacity="0.4"/>
  <rect x="65" y="2" width="55" height="18" rx="1" fill="#3D5A40" opacity="0.4"/>

  <!-- RANGE HOOD -->
  <rect x="130" y="3" width="68" height="14" rx="1.5" fill="#586060" opacity="0.35"/>
  <rect x="135" y="17" width="58" height="3" rx="0.5" fill="#505050" opacity="0.3"/>

  <!-- STOVE BURNERS -->
  <ellipse cx="155" cy="47" rx="11" ry="4.5" fill="#282020" opacity="0.5"/>
  <ellipse cx="188" cy="47" rx="11" ry="4.5" fill="#282020" opacity="0.5"/>
  <!-- FLAMES — bright, visible orange glow -->
  <ellipse cx="155" cy="46" rx="6" ry="2.5" fill="#FF8040">
    <animate attributeName="opacity" values="0.2;0.5;0.25;0.45;0.2" dur="0.5s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="5;7;5.5;6.5;5" dur="0.7s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="188" cy="46" rx="6" ry="2.5" fill="#FF8040">
    <animate attributeName="opacity" values="0.25;0.45;0.2;0.4;0.25" dur="0.6s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="rx" values="5.5;7;5;6.5;5.5" dur="0.8s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <!-- flame glow dancing on wall — visible warm light -->
  <rect x="120" y="20" width="80" height="30" fill="#FF8040" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="0.8s" repeatCount="indefinite"/>
  </rect>
  <!-- flame glow on cabinets below -->
  <rect x="140" y="55" width="55" height="30" fill="#FF6020" opacity="0.01">
    <animate attributeName="opacity" values="0.008;0.025;0.012;0.02;0.008" dur="0.9s" repeatCount="indefinite"/>
  </rect>

  <!-- POT on burner -->
  <rect x="147" y="35" width="16" height="13" rx="2.5" fill="#5A6470" opacity="0.6"/>
  <rect x="145" y="33" width="20" height="3" rx="1" fill="#6A7280" opacity="0.5"/>
  <!-- pot lid bouncing -->
  <rect x="145" y="32" width="20" height="2" rx="1" fill="#7A8290" opacity="0.4">
    <animate attributeName="y" values="32;31;32;31.5;32" dur="0.7s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="-0.5,155,33;0.5,155,33;-0.5,155,33" dur="0.5s" repeatCount="indefinite"/>
  </rect>

  <!-- STEAM — thick visible wisps -->
  <path d="M152,30 Q150,22 154,14" fill="none" stroke="#FFF" stroke-width="1.2" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.12;0.06;0" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M152,30 Q150,22 154,14;M152,30 Q148,20 153,10;M152,30 Q154,21 150,12;M152,30 Q150,22 154,14" dur="2.5s" repeatCount="indefinite"/>
  </path>
  <path d="M157,30 Q159,21 155,12" fill="none" stroke="#FFF" stroke-width="1" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.14;0.1;0.04;0" dur="3s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="d" values="M157,30 Q159,21 155,12;M157,30 Q161,18 156,8;M157,30 Q156,20 159,10;M157,30 Q159,21 155,12" dur="3s" repeatCount="indefinite" begin="0.8s"/>
  </path>
  <path d="M160,30 Q158,24 161,16" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.06;0.03;0" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="d" values="M160,30 Q158,24 161,16;M160,30 Q157,20 162,10;M160,30 Q161,22 158,14;M160,30 Q158,24 161,16" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
  </path>

  <!-- FRIDGE -->
  <rect x="310" y="5" width="58" height="80" rx="2.5" fill="#586060" opacity="0.4"/>
  <line x1="310" y1="38" x2="368" y2="38" stroke="#505050" stroke-width="0.5" opacity="0.35"/>
  <rect x="360" y="16" width="3" height="14" rx="0.8" fill="#6A6A6A" opacity="0.35"/>
  <rect x="360" y="48" width="3" height="14" rx="0.8" fill="#6A6A6A" opacity="0.35"/>

  <!-- SINK -->
  <rect x="58" y="46" width="30" height="4.5" rx="1.5" fill="#6A7280" opacity="0.4"/>
  <line x1="73" y1="46" x2="73" y2="28" stroke="#808890" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
  <!-- water drip -->
  <circle cx="73" cy="47" r="0.7" fill="#6AAAD0" opacity="0">
    <animate attributeName="opacity" values="0;0;0.3;0.2;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="47" to="50.5" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- HANGING UTENSILS — visible sway -->
  <line x1="225" y1="20" x2="225" y2="38" stroke="#707070" stroke-width="0.8" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="-1,225,20;1,225,20;-1,225,20" dur="4s" repeatCount="indefinite"/>
  </line>
  <line x1="233" y1="20" x2="233" y2="40" stroke="#707070" stroke-width="0.8" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="0.8,233,20;-0.8,233,20;0.8,233,20" dur="3.5s" repeatCount="indefinite"/>
  </line>
  <line x1="240" y1="20" x2="240" y2="36" stroke="#707070" stroke-width="0.8" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="-0.6,240,20;1,240,20;-0.6,240,20" dur="4.5s" repeatCount="indefinite"/>
  </line>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#1C1A2A"/>
      <stop offset="100%" stop-color="#181628"/>
    </linearGradient>
    <radialGradient id="lofiLivTV" cx="0.78" cy="0.3" r="0.4">
      <stop offset="0%" stop-color="#5A90D0" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#5A90D0" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#5A90D0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.56" cy="0.18" r="0.25">
      <stop offset="0%" stop-color="#FFE0A0" stop-opacity="0.25"/>
      <stop offset="50%" stop-color="#FFD080" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#FFD080" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + dueling light sources -->
  <rect width="400" height="100" fill="url(#lofiLivBg)"/>
  <rect width="400" height="100" fill="url(#lofiLivLamp)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="6s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiLivTV)">
    <animate attributeName="opacity" values="0.5;1;0.6;0.9;0.5" dur="3s" repeatCount="indefinite"/>
  </rect>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0E0D1A" opacity="0.6"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A2840" stroke-width="0.5" opacity="0.4"/>
  <line x1="0" y1="92" x2="400" y2="92" stroke="#1A1830" stroke-width="0.3" opacity="0.12"/>
  <!-- rug -->
  <rect x="15" y="86" width="170" height="12" rx="3" fill="#7A4040" opacity="0.12"/>

  <!-- COUCH -->
  <rect x="3" y="40" width="195" height="8" rx="3" fill="#6A4028" opacity="0.6"/>
  <rect x="-2" y="48" width="205" height="25" rx="5" fill="#5A3018" opacity="0.55"/>
  <!-- cushions -->
  <rect x="6" y="49" width="55" height="22" rx="4" fill="#6A3820" opacity="0.4"/>
  <rect x="66" y="49" width="55" height="22" rx="4" fill="#6A3820" opacity="0.4"/>
  <rect x="126" y="49" width="55" height="22" rx="4" fill="#6A3820" opacity="0.4"/>
  <!-- legs -->
  <rect x="5" y="73" width="4" height="12" rx="1" fill="#4A2810" opacity="0.4"/>
  <rect x="192" y="73" width="4" height="12" rx="1" fill="#4A2810" opacity="0.4"/>
  <!-- armrests -->
  <rect x="-5" y="42" width="13" height="34" rx="4" fill="#5A3018" opacity="0.45"/>
  <rect x="193" y="42" width="13" height="34" rx="4" fill="#5A3018" opacity="0.45"/>
  <!-- throw pillows -->
  <rect x="10" y="39" width="18" height="12" rx="4" fill="#E0A040" opacity="0.3"/>
  <rect x="163" y="39" width="16" height="12" rx="4" fill="#5090D0" opacity="0.2"/>

  <!-- COFFEE TABLE -->
  <rect x="48" y="80" width="95" height="4.5" rx="1" fill="#5A4028" opacity="0.45"/>
  <rect x="53" y="84.5" width="3.5" height="10" rx="0.5" fill="#4A3018" opacity="0.3"/>
  <rect x="135" y="84.5" width="3.5" height="10" rx="0.5" fill="#4A3018" opacity="0.3"/>
  <!-- CANDLE — visible warm flicker -->
  <rect x="90" y="76.5" width="4" height="5" rx="0.5" fill="#E8D8B0" opacity="0.35"/>
  <ellipse cx="92" cy="75.5" rx="2" ry="2.5" fill="#FFD040" opacity="0">
    <animate attributeName="opacity" values="0.15;0.35;0.1;0.3;0.2;0.28;0.15" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="ry" values="2.5;3;2;2.8;2.5" dur="1.2s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="92" cy="75" r="1" fill="#FFF5D0" opacity="0">
    <animate attributeName="opacity" values="0.1;0.3;0.08;0.25;0.12;0.22;0.1" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <!-- candle glow pool -->
  <ellipse cx="92" cy="80" rx="12" ry="3" fill="#FFD040" opacity="0.015">
    <animate attributeName="opacity" values="0.01;0.03;0.012;0.025;0.01" dur="1.5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- TV — right side hero -->
  <rect x="283" y="10" width="68" height="42" rx="2" fill="#0E0E1E" opacity="0.8"/>
  <!-- screen with visible color -->
  <rect x="286" y="13" width="62" height="36" rx="1.5" fill="#1A2A4A">
    <animate attributeName="fill" values="#1A2A4A;#2A1A4A;#1A4A3A;#3A2A1A;#1A2A4A" dur="12s" repeatCount="indefinite"/>
  </rect>
  <!-- TV brightness pulse -->
  <rect x="286" y="13" width="62" height="36" rx="1.5" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0.03;0.08;0.04;0.06;0.03" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall — visible blue wash -->
  <rect x="270" y="0" width="100" height="55" rx="4" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on floor -->
  <rect x="280" y="85" width="90" height="15" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.005;0.015;0.008;0.012;0.005" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV console -->
  <rect x="278" y="54" width="82" height="8" rx="1.5" fill="#3A2820" opacity="0.5"/>
  <rect x="283" y="62" width="5" height="23" rx="1" fill="#2A1810" opacity="0.35"/>
  <rect x="352" y="62" width="5" height="23" rx="1" fill="#2A1810" opacity="0.35"/>

  <!-- FLOOR LAMP -->
  <line x1="225" y1="14" x2="225" y2="82" stroke="#3A3850" stroke-width="1.5" opacity="0.45"/>
  <ellipse cx="225" cy="12" rx="10" ry="6" fill="#FFE0A0" opacity="0.18">
    <animate attributeName="opacity" values="0.15;0.22;0.16;0.2;0.15" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="225" cy="12" r="3" fill="#FFF5D0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.14;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="225" cy="84" rx="6" ry="2.5" fill="#3A3850" opacity="0.3"/>
  <!-- lamp light pool on floor -->
  <ellipse cx="225" cy="88" rx="20" ry="5" fill="#FFE0A0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- WINDOW -->
  <rect x="138" y="3" width="52" height="32" rx="2" fill="#242240" opacity="0.35"/>
  <rect x="141" y="6" width="22" height="26" fill="#2E2C50" opacity="0.3"/>
  <rect x="166" y="6" width="22" height="26" fill="#2E2C50" opacity="0.3"/>
  <!-- curtain sway -->
  <rect x="138" y="3" width="5" height="32" fill="#302850" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0,140,3;0.8,140,3;-0.4,140,3;0,140,3" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect x="185" y="3" width="5" height="32" fill="#302850" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0,188,3;-0.6,188,3;0.5,188,3;0,188,3" dur="5.5s" repeatCount="indefinite"/>
  </rect>

  <!-- PLANT -->
  <rect x="370" y="56" width="11" height="28" rx="2.5" fill="#2A3828" opacity="0.4"/>
  <ellipse cx="375" cy="52" rx="10" ry="8" fill="#2A5030" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="-1.5,375,68;1.5,375,68;-1.5,375,68" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dust in lamp light -->
  <circle cx="220" cy="28" r="0.5" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0.12;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="32" to="20" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="232" cy="35" r="0.4" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0" dur="6s" repeatCount="indefinite" begin="2.5s"/>
    <animate attributeName="cy" from="38" to="26" dur="6s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedBg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#161030"/>
      <stop offset="100%" stop-color="#1A1438"/>
    </linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.88" cy="0.12" r="0.35">
      <stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.2"/>
      <stop offset="40%" stop-color="#C0B8A0" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#C0B8A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.72" cy="0.32" r="0.2">
      <stop offset="0%" stop-color="#F0D080" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#F0D080" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#F0D080" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + moonlight + lamp -->
  <rect width="400" height="100" fill="url(#lofiBedBg)"/>
  <rect width="400" height="100" fill="url(#lofiBedMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="8s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiBedLamp)">
    <animate attributeName="opacity" values="0.7;0.9;0.75;0.85;0.7" dur="4s" repeatCount="indefinite"/>
  </rect>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0C0A1E" opacity="0.6"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A2848" stroke-width="0.3" opacity="0.3"/>

  <!-- BED -->
  <!-- headboard -->
  <rect x="0" y="20" width="12" height="65" rx="2.5" fill="#4A3428" opacity="0.7"/>
  <rect x="2" y="24" width="8" height="16" rx="1.5" fill="#5A4438" opacity="0.4"/>
  <rect x="2" y="44" width="8" height="16" rx="1.5" fill="#5A4438" opacity="0.4"/>
  <rect x="2" y="64" width="8" height="14" rx="1.5" fill="#5A4438" opacity="0.4"/>
  <!-- mattress + frame -->
  <rect x="12" y="42" width="255" height="43" rx="3" fill="#2A2050" opacity="0.55"/>
  <!-- duvet -->
  <rect x="15" y="38" width="248" height="41" rx="3.5" fill="#3A3068" opacity="0.5"/>
  <!-- duvet folds -->
  <line x1="20" y1="53" x2="258" y2="53" stroke="#4A4080" stroke-width="0.6" opacity="0.2"/>
  <line x1="20" y1="66" x2="258" y2="66" stroke="#4A4080" stroke-width="0.5" opacity="0.15"/>
  <!-- pillows -->
  <ellipse cx="38" cy="46" rx="20" ry="11" fill="#D8D0A8" opacity="0.22"/>
  <ellipse cx="38" cy="53" rx="18" ry="10" fill="#D0C8A0" opacity="0.18"/>
  <ellipse cx="68" cy="48" rx="18" ry="10" fill="#D0C8A0" opacity="0.15"/>
  <!-- footboard -->
  <rect x="267" y="42" width="6" height="43" rx="1.5" fill="#4A3428" opacity="0.5"/>
  <!-- legs -->
  <rect x="5" y="83" width="5" height="8" rx="1" fill="#4A3428" opacity="0.4"/>
  <rect x="264" y="83" width="5" height="8" rx="1" fill="#4A3428" opacity="0.4"/>

  <!-- NIGHTSTAND -->
  <rect x="284" y="42" width="30" height="43" rx="2" fill="#2A2040" opacity="0.5"/>
  <rect x="287" y="46" width="24" height="15" rx="1" fill="#322850" opacity="0.35"/>
  <rect x="287" y="65" width="24" height="15" rx="1" fill="#322850" opacity="0.35"/>

  <!-- LAMP — warm visible glow -->
  <rect x="294" y="28" width="12" height="14" rx="2.5" fill="#403060" opacity="0.5"/>
  <ellipse cx="300" cy="26" rx="9" ry="5" fill="#F0D080" opacity="0.2">
    <animate attributeName="opacity" values="0.16;0.25;0.18;0.23;0.16" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="300" cy="26" r="3" fill="#FFF5D0" opacity="0.2">
    <animate attributeName="opacity" values="0.15;0.25;0.17;0.22;0.15" dur="4s" repeatCount="indefinite"/>
  </circle>
  <!-- lamp glow on nightstand -->
  <ellipse cx="300" cy="42" rx="14" ry="4" fill="#F0D080" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- WINDOW — night sky -->
  <rect x="330" y="5" width="48" height="40" rx="2" fill="#181640" opacity="0.6"/>
  <rect x="333" y="8" width="20" height="34" fill="#1A1848" opacity="0.6"/>
  <rect x="356" y="8" width="20" height="34" fill="#1A1848" opacity="0.6"/>
  <!-- curtains -->
  <rect x="330" y="5" width="5" height="40" fill="#2A2058" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="0,332,5;0.5,332,5;-0.3,332,5;0,332,5" dur="7s" repeatCount="indefinite"/>
  </rect>
  <rect x="373" y="5" width="5" height="40" fill="#2A2058" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="0,376,5;-0.4,376,5;0.3,376,5;0,376,5" dur="7.5s" repeatCount="indefinite"/>
  </rect>

  <!-- STARS — bright enough to twinkle -->
  <circle cx="338" cy="12" r="0.6" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.6;0.15;0.5;0.1" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="348" cy="22" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.5;0.1;0.4;0.15" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="361" cy="11" r="0.55" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.55;0.15;0.45;0.1" dur="4s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="370" cy="20" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.4;0.12;0.35;0.08" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="340" cy="30" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.35;0.1;0.25;0.05" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>

  <!-- MOON — visible crescent -->
  <circle cx="366" cy="15" r="5.5" fill="#E8E0C8" opacity="0.4">
    <animate attributeName="opacity" values="0.35;0.5;0.38;0.45;0.35" dur="6s" repeatCount="indefinite"/>
  </circle>
  <!-- cloud drift -->
  <ellipse cx="350" cy="16" rx="14" ry="4.5" fill="#1A1848" opacity="0">
    <animate attributeName="opacity" values="0;0;0.4;0.5;0.4;0;0" dur="18s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="338" to="382" dur="18s" repeatCount="indefinite"/>
  </ellipse>

  <!-- MOONBEAM on floor — visible light shaft -->
  <polygon points="333,45 373,45 395,100 305,100" fill="#C8C0E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.035;0.02;0.03;0.015" dur="8s" repeatCount="indefinite"/>
  </polygon>
  <!-- dust in moonbeam -->
  <circle cx="352" cy="58" r="0.6" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0.12;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="342" cy="68" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0.1;0" dur="6s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="72" to="55" dur="6s" repeatCount="indefinite" begin="2s"/>
  </circle>

  <!-- DRESSER -->
  <rect x="382" y="34" width="18" height="51" rx="2" fill="#2A2040" opacity="0.4"/>
  <rect x="384" y="38" width="14" height="18" rx="1" fill="#322850" opacity="0.25"/>
  <rect x="384" y="60" width="14" height="18" rx="1" fill="#322850" opacity="0.25"/>
</svg>`,

  not_home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiNhBg" x1="0" y1="0" x2="0.2" y2="1">
      <stop offset="0%" stop-color="#0C0C1E"/>
      <stop offset="100%" stop-color="#080818"/>
    </linearGradient>
    <radialGradient id="lofiNhMoon" cx="0.82" cy="0.15" r="0.3">
      <stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.25"/>
      <stop offset="50%" stop-color="#C0B8A0" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#C0B8A0" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- dark sky with moon wash -->
  <rect width="400" height="100" fill="url(#lofiNhBg)"/>
  <rect width="400" height="100" fill="url(#lofiNhMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="8s" repeatCount="indefinite"/>
  </rect>

  <!-- STARS — bright twinkling -->
  <circle class="star" cx="50" cy="12" r="0.7" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.7;0.2;0.6;0.15" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle class="star" cx="120" cy="8" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.5;0.15;0.4;0.1" dur="4s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle class="star" cx="180" cy="18" r="0.6" fill="#FFF">
    <animate attributeName="opacity" values="0.12;0.6;0.18;0.5;0.12" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle class="star" cx="250" cy="6" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.55;0.2;0.45;0.1" dur="4.5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle class="star" cx="290" cy="22" r="0.6" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.45;0.12;0.35;0.05" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle class="star" cx="370" cy="10" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.4;0.12;0.3;0.08" dur="3.8s" repeatCount="indefinite" begin="0.8s"/>
  </circle>
  <circle class="star" cx="30" cy="24" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.35;0.12;0.28;0.08" dur="5.5s" repeatCount="indefinite" begin="1.2s"/>
  </circle>
  <circle class="star" cx="155" cy="5" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.45;0.15;0.35;0.1" dur="4.2s" repeatCount="indefinite" begin="0.3s"/>
  </circle>

  <!-- MOON — bright visible crescent -->
  <circle cx="330" cy="18" r="8" fill="#E8E0C8" opacity="0.45">
    <animate attributeName="opacity" values="0.4;0.55;0.42;0.5;0.4" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="334" cy="15" r="7" fill="#0C0C1E" opacity="0.95"/>

  <!-- CLOUDS drifting -->
  <ellipse cx="100" cy="20" rx="22" ry="6" fill="#14142A" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.3;0.2;0" dur="22s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="-30" to="430" dur="22s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="260" cy="14" rx="18" ry="5" fill="#14142A" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.25;0.15;0" dur="28s" repeatCount="indefinite" begin="6s"/>
    <animate attributeName="cx" from="-20" to="420" dur="28s" repeatCount="indefinite" begin="6s"/>
  </ellipse>

  <!-- ground -->
  <rect x="0" y="78" width="400" height="22" fill="#0A0A16"/>
  <rect x="0" y="78" width="400" height="1" fill="#1A1A30" opacity="0.4"/>

  <!-- HOUSE silhouette — visible against sky -->
  <rect x="130" y="38" width="140" height="42" fill="#0C0C1A"/>
  <polygon points="118,38 200,6 282,38" fill="#0A0A16" stroke="#1A1A30" stroke-width="0.6"/>
  <!-- chimney -->
  <rect x="240" y="10" width="15" height="28" fill="#0C0C1A"/>
  <!-- CHIMNEY SMOKE — visible wisps -->
  <path d="M247,8 Q245,0 250,-6" fill="none" stroke="#2A2A40" stroke-width="1.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.15;0.08;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M247,8 Q245,0 250,-6;M247,8 Q243,-2 249,-10;M247,8 Q249,-1 245,-8;M247,8 Q245,0 250,-6" dur="4s" repeatCount="indefinite"/>
  </path>
  <path d="M250,8 Q252,1 248,-5" fill="none" stroke="#2A2A40" stroke-width="1.2" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.1;0.05;0" dur="5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="d" values="M250,8 Q252,1 248,-5;M250,8 Q254,-2 249,-9;M250,8 Q248,0 252,-7;M250,8 Q252,1 248,-5" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </path>

  <!-- windows -->
  <rect x="148" y="48" width="20" height="15" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6" opacity="0.85"/>
  <rect x="178" y="48" width="20" height="15" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6" opacity="0.85"/>
  <rect x="235" y="48" width="20" height="15" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6" opacity="0.85"/>
  <!-- door -->
  <rect x="205" y="55" width="18" height="25" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6"/>
  <circle cx="220" cy="68" r="1.2" fill="#2A2A40" opacity="0.5"/>
  <!-- attic window -->
  <rect x="190" y="22" width="14" height="11" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.5" opacity="0.8"/>
  <!-- path -->
  <rect x="208" y="80" width="12" height="20" fill="#080814" opacity="0.4"/>

  <!-- fence -->
  <g opacity="0.2" stroke="#1A1A30" stroke-width="0.8">
    <line x1="78" y1="78" x2="130" y2="78"/>
    <line x1="270" y1="78" x2="340" y2="78"/>
    <line x1="83" y1="72" x2="83" y2="78"/>
    <line x1="98" y1="72" x2="98" y2="78"/>
    <line x1="113" y1="72" x2="113" y2="78"/>
    <line x1="280" y1="72" x2="280" y2="78"/>
    <line x1="300" y1="72" x2="300" y2="78"/>
    <line x1="320" y1="72" x2="320" y2="78"/>
  </g>

  <!-- TREES — with visible sway -->
  <ellipse cx="58" cy="54" rx="20" ry="24" fill="#080E14" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" values="-1,58,75;1,58,75;-1,58,75" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="56" y="72" width="4" height="8" fill="#080E14" opacity="0.6"/>
  <ellipse cx="356" cy="56" rx="16" ry="20" fill="#080E14" opacity="0.6">
    <animateTransform attributeName="transform" type="rotate" values="0.6,356,74;-0.8,356,74;0.6,356,74" dur="6s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="354" y="72" width="4" height="7" fill="#080E14" opacity="0.5"/>

  <!-- FIREFLIES — visible green blinks -->
  <circle cx="88" cy="72" r="0.7" fill="#B0E050" opacity="0">
    <animate attributeName="opacity" values="0;0;0.3;0.5;0.3;0;0;0;0" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="88;92;86;90;88" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="72;69;74;68;72" dur="3.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="312" cy="74" r="0.6" fill="#B0E050" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0.25;0.45;0.2;0;0;0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cx" values="312;315;309;313;312" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cy" values="74;71;76;70;74" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="175" cy="76" r="0.5" fill="#B0E050" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0;0.35;0.2;0;0" dur="5.5s" repeatCount="indefinite" begin="3s"/>
    <animate attributeName="cx" values="175;178;172;176;175" dur="5.5s" repeatCount="indefinite" begin="3s"/>
    <animate attributeName="cy" values="76;73;77;72;76" dur="5.5s" repeatCount="indefinite" begin="3s"/>
  </circle>

  <!-- moonlight pool on ground -->
  <ellipse cx="332" cy="80" rx="35" ry="10" fill="#D0C8E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="8s" repeatCount="indefinite"/>
  </ellipse>
</svg>`,
};
