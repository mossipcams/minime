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
 * Proportion system (person ≈ 45 viewBox units tall):
 *   Floor line: y=85 (avatar feet)
 *   Desk surface: y=65 (75cm real = 20 units from floor)
 *   Counter: y=61 (90cm real = 24 units from floor)
 *   Chair seat: y=73, back top: y=62
 *   Monitor: ~12 units tall (35cm real)
 *   Bookshelf: ~48 units tall (180cm real)
 *   Fridge: ~45 units tall (170cm real)
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
    <radialGradient id="lofiOffMonitor" cx="0.38" cy="0.55" r="0.3">
      <stop offset="0%" stop-color="#4A90D0" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#3A70A0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#3A70A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiOffLamp" cx="0.18" cy="0.48" r="0.22">
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

  <!-- wall texture -->
  <line x1="0" y1="30" x2="400" y2="30" stroke="#2A3A4E" stroke-width="0.2" opacity="0.1"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0F1822" opacity="0.7"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A3A4E" stroke-width="0.5" opacity="0.5"/>
  <line x1="0" y1="90" x2="400" y2="90" stroke="#1A2838" stroke-width="0.3" opacity="0.2"/>
  <line x1="0" y1="95" x2="400" y2="95" stroke="#1A2838" stroke-width="0.3" opacity="0.15"/>

  <!-- DESK — surface at y=65, realistic height -->
  <rect x="80" y="65" width="160" height="3" rx="0.5" fill="#6B5840" opacity="0.8"/>
  <rect x="80" y="65" width="160" height="1" fill="#7D6A50" opacity="0.5"/>
  <!-- desk legs -->
  <rect x="88" y="68" width="3" height="17" fill="#5A4830" opacity="0.5"/>
  <rect x="232" y="68" width="3" height="17" fill="#5A4830" opacity="0.5"/>
  <!-- under-desk crossbar -->
  <rect x="88" y="77" width="147" height="1.5" rx="0.5" fill="#5A4830" opacity="0.2"/>

  <!-- MONITOR — 12 units tall, realistic -->
  <rect x="140" y="51" width="32" height="12" rx="1.5" fill="#0E0E1E" opacity="0.9"/>
  <!-- screen -->
  <rect x="142" y="53" width="28" height="8" rx="1" fill="#1A3050">
    <animate attributeName="fill" values="#1A3050;#1E3558;#1A3050" dur="6s" repeatCount="indefinite"/>
  </rect>
  <!-- code lines -->
  <line x1="145" y1="55" x2="160" y2="55" stroke="#7ABCE0" stroke-width="0.8" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.35;0.55;0.4" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="145" y1="57" x2="164" y2="57" stroke="#7ABCE0" stroke-width="0.8" opacity="0.4">
    <animate attributeName="opacity" values="0.3;0.55;0.35;0.5;0.3" dur="2.3s" repeatCount="indefinite" begin="0.3s"/>
  </line>
  <line x1="148" y1="59" x2="158" y2="59" stroke="#A0D070" stroke-width="0.8" opacity="0.4">
    <animate attributeName="opacity" values="0.25;0.5;0.3;0.45;0.25" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
  </line>
  <!-- cursor -->
  <rect x="165" y="56.5" width="1.5" height="2.5" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.7;0.7;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- monitor stand -->
  <rect x="152" y="63" width="8" height="2" rx="0.5" fill="#0E0E1E" opacity="0.8"/>
  <rect x="148" y="64.5" width="16" height="1" rx="0.5" fill="#1A1A2E" opacity="0.7"/>
  <!-- monitor glow on desk -->
  <ellipse cx="156" cy="67" rx="22" ry="3" fill="#4A90D0" opacity="0.08">
    <animate attributeName="opacity" values="0.06;0.12;0.07;0.1;0.06" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- keyboard -->
  <rect x="143" y="66" width="22" height="2" rx="0.5" fill="#1A1A2E" opacity="0.6"/>

  <!-- CHAIR — seat at y=73, back to y=57, proportional -->
  <rect x="96" y="57" width="24" height="16" rx="3" fill="#2D3E50" opacity="0.5"/>
  <rect x="102" y="73" width="12" height="12" rx="1.5" fill="#243444" opacity="0.4"/>

  <!-- DESK LAMP — shade at y=52 -->
  <line x1="88" y1="65" x2="92" y2="52" stroke="#4A5A6A" stroke-width="1.2"/>
  <line x1="92" y1="52" x2="100" y2="48" stroke="#4A5A6A" stroke-width="1"/>
  <ellipse cx="99" cy="47" rx="5" ry="3" fill="#FFE4A0" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.3;0.22;0.28;0.2" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="99" cy="47" r="1.5" fill="#FFF5D0" opacity="0.35">
    <animate attributeName="opacity" values="0.3;0.4;0.32;0.38;0.3" dur="5s" repeatCount="indefinite"/>
  </circle>
  <!-- lamp light cone on desk -->
  <ellipse cx="95" cy="65" rx="12" ry="3" fill="#FFE4A0" opacity="0.05">
    <animate attributeName="opacity" values="0.04;0.07;0.045;0.065;0.04" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- COFFEE MUG on desk -->
  <rect x="178" y="61.5" width="4" height="4" rx="0.8" fill="#8B5030" opacity="0.6"/>
  <rect x="182" y="62.5" width="1.5" height="2" rx="0.5" fill="#8B5030" opacity="0.4"/>
  <!-- steam -->
  <path d="M179,60 Q178,56 181,52" fill="none" stroke="#FFF" stroke-width="0.6" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.1;0.05;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M179,60 Q178,56 181,52;M179,60 Q177,54 180,48;M179,60 Q180,55 178,50;M179,60 Q178,56 181,52" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M181,60 Q182,55 180,50" fill="none" stroke="#FFF" stroke-width="0.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.08;0.04;0" dur="3.5s" repeatCount="indefinite" begin="1s"/>
    <animate attributeName="d" values="M181,60 Q182,55 180,50;M181,60 Q183,53 181,46;M181,60 Q180,54 182,48;M181,60 Q182,55 180,50" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </path>

  <!-- BOOKSHELF — 48 units tall (person height), y=37 to y=85 -->
  <rect x="295" y="37" width="40" height="48" rx="1.5" fill="#2A3A4A" opacity="0.5"/>
  <rect x="298" y="40" width="34" height="10" fill="#223040" opacity="0.35"/>
  <rect x="298" y="53" width="34" height="10" fill="#223040" opacity="0.35"/>
  <rect x="298" y="66" width="34" height="10" fill="#223040" opacity="0.35"/>
  <!-- books -->
  <rect x="301" y="41" width="4" height="8" fill="#D06060" opacity="0.35"/>
  <rect x="306" y="42" width="3.5" height="7" fill="#50A058" opacity="0.3"/>
  <rect x="310" y="41" width="5" height="8" fill="#5090D0" opacity="0.3"/>
  <rect x="317" y="43" width="3.5" height="6" fill="#D0A040" opacity="0.25"/>
  <rect x="301" y="54" width="5" height="8" fill="#D0A040" opacity="0.25"/>
  <rect x="307" y="55" width="4" height="7" fill="#9060A0" opacity="0.25"/>
  <rect x="313" y="54" width="3.5" height="8" fill="#60A0A0" opacity="0.25"/>

  <!-- WINDOW — sill at y=50, top at y=20 -->
  <rect x="250" y="20" width="35" height="30" rx="1.5" fill="#243848" opacity="0.4"/>
  <rect x="252" y="22" width="14" height="26" fill="#2A4A60" opacity="0.35"/>
  <rect x="270" y="22" width="14" height="26" fill="#2A4A60" opacity="0.35"/>
  <!-- rain streaks -->
  <line x1="256" y1="24" x2="255" y2="30" stroke="#6AAAD0" stroke-width="0.4" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.15;0" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y1" from="22" to="46" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y2" from="28" to="52" dur="1.2s" repeatCount="indefinite"/>
  </line>
  <line x1="274" y1="26" x2="273" y2="32" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.12;0" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y1" from="22" to="46" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y2" from="28" to="52" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
  </line>
  <line x1="262" y1="23" x2="261" y2="28" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.1;0" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y1" from="22" to="46" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y2" from="27" to="51" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
  </line>
  <line x1="278" y1="25" x2="277" y2="30" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y1" from="22" to="46" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y2" from="27" to="51" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
  </line>

  <!-- dust in lamp light -->
  <circle cx="96" cy="55" r="0.5" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0.15;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="58" to="48" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="104" cy="60" r="0.4" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0" dur="5s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="62" to="50" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#2E2218"/>
      <stop offset="100%" stop-color="#241C12"/>
    </linearGradient>
    <radialGradient id="lofiKitFlame" cx="0.4" cy="0.6" r="0.3">
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
  <line x1="0" y1="92" x2="400" y2="92" stroke="#2A2010" stroke-width="0.3" opacity="0.15"/>

  <!-- COUNTER — surface at y=62 (90cm real, 24 units from floor) -->
  <rect x="60" y="62" width="200" height="3" rx="0.5" fill="#909898" opacity="0.6"/>
  <rect x="60" y="62" width="200" height="1" fill="#A0A8A8" opacity="0.4"/>
  <!-- lower cabinets -->
  <rect x="60" y="65" width="200" height="20" rx="1" fill="#3D5A40" opacity="0.45"/>
  <rect x="64" y="67" width="30" height="16" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="98" y="67" width="30" height="16" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="132" y="67" width="30" height="16" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="166" y="67" width="30" height="16" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="200" y="67" width="30" height="16" rx="1" fill="#456048" opacity="0.3"/>
  <rect x="234" y="67" width="22" height="16" rx="1" fill="#456048" opacity="0.3"/>
  <!-- handles -->
  <rect x="77" y="73" width="4" height="1.2" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="111" y="73" width="4" height="1.2" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="145" y="73" width="4" height="1.2" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="179" y="73" width="4" height="1.2" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="213" y="73" width="4" height="1.2" rx="0.5" fill="#708068" opacity="0.4"/>

  <!-- backsplash tiles -->
  <g stroke="#3A3020" stroke-width="0.3" opacity="0.15">
    <line x1="60" y1="35" x2="260" y2="35"/>
    <line x1="60" y1="48" x2="260" y2="48"/>
  </g>
  <!-- upper cabinets -->
  <rect x="60" y="14" width="40" height="14" rx="1" fill="#3D5A40" opacity="0.4"/>
  <rect x="108" y="14" width="40" height="14" rx="1" fill="#3D5A40" opacity="0.4"/>

  <!-- RANGE HOOD -->
  <rect x="156" y="20" width="48" height="10" rx="1" fill="#586060" opacity="0.35"/>
  <rect x="160" y="30" width="40" height="2" rx="0.5" fill="#505050" opacity="0.3"/>

  <!-- STOVE BURNERS on counter -->
  <ellipse cx="175" cy="60" rx="8" ry="3" fill="#282020" opacity="0.5"/>
  <ellipse cx="200" cy="60" rx="8" ry="3" fill="#282020" opacity="0.5"/>
  <!-- FLAMES -->
  <ellipse cx="175" cy="59.5" rx="4.5" ry="2" fill="#FF8040">
    <animate attributeName="opacity" values="0.2;0.5;0.25;0.45;0.2" dur="0.5s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="3.5;5;4;4.5;3.5" dur="0.7s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="200" cy="59.5" rx="4.5" ry="2" fill="#FF8040">
    <animate attributeName="opacity" values="0.25;0.45;0.2;0.4;0.25" dur="0.6s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="rx" values="4;5;3.5;4.5;4" dur="0.8s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <!-- flame glow on wall -->
  <rect x="150" y="32" width="60" height="20" fill="#FF8040" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="0.8s" repeatCount="indefinite"/>
  </rect>

  <!-- POT on burner — small, on counter -->
  <rect x="169" y="52" width="12" height="9" rx="2" fill="#5A6470" opacity="0.6"/>
  <rect x="168" y="50.5" width="14" height="2" rx="0.8" fill="#6A7280" opacity="0.5"/>
  <!-- pot lid bouncing -->
  <rect x="168" y="49.5" width="14" height="1.5" rx="0.8" fill="#7A8290" opacity="0.4">
    <animate attributeName="y" values="49.5;48.5;49.5;49;49.5" dur="0.7s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="-0.5,175,50;0.5,175,50;-0.5,175,50" dur="0.5s" repeatCount="indefinite"/>
  </rect>

  <!-- STEAM -->
  <path d="M173,48 Q171,42 175,36" fill="none" stroke="#FFF" stroke-width="1" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.12;0.06;0" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M173,48 Q171,42 175,36;M173,48 Q169,38 174,30;M173,48 Q175,41 171,34;M173,48 Q171,42 175,36" dur="2.5s" repeatCount="indefinite"/>
  </path>
  <path d="M177,48 Q179,41 175,34" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.14;0.1;0.04;0" dur="3s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="d" values="M177,48 Q179,41 175,34;M177,48 Q181,36 176,28;M177,48 Q176,40 179,32;M177,48 Q179,41 175,34" dur="3s" repeatCount="indefinite" begin="0.8s"/>
  </path>
  <path d="M180,48 Q178,43 181,37" fill="none" stroke="#FFF" stroke-width="0.6" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.06;0.03;0" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="d" values="M180,48 Q178,43 181,37;M180,48 Q177,39 182,31;M180,48 Q181,42 178,35;M180,48 Q178,43 181,37" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
  </path>

  <!-- FRIDGE — 45 units tall (person height), y=40 to y=85 -->
  <rect x="310" y="40" width="42" height="45" rx="2" fill="#586060" opacity="0.4"/>
  <line x1="310" y1="60" x2="352" y2="60" stroke="#505050" stroke-width="0.5" opacity="0.35"/>
  <rect x="345" y="46" width="2.5" height="10" rx="0.6" fill="#6A6A6A" opacity="0.35"/>
  <rect x="345" y="66" width="2.5" height="10" rx="0.6" fill="#6A6A6A" opacity="0.35"/>

  <!-- SINK -->
  <rect x="88" y="58.5" width="22" height="3.5" rx="1" fill="#6A7280" opacity="0.4"/>
  <line x1="99" y1="58" x2="99" y2="42" stroke="#808890" stroke-width="1.2" stroke-linecap="round" opacity="0.35"/>
  <!-- water drip -->
  <circle cx="99" cy="59" r="0.6" fill="#6AAAD0" opacity="0">
    <animate attributeName="opacity" values="0;0;0.3;0.2;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="59" to="62" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- HANGING UTENSILS -->
  <line x1="225" y1="32" x2="225" y2="48" stroke="#707070" stroke-width="0.6" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="-1,225,32;1,225,32;-1,225,32" dur="4s" repeatCount="indefinite"/>
  </line>
  <line x1="231" y1="32" x2="231" y2="50" stroke="#707070" stroke-width="0.6" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="0.8,231,32;-0.8,231,32;0.8,231,32" dur="3.5s" repeatCount="indefinite"/>
  </line>
  <line x1="237" y1="32" x2="237" y2="46" stroke="#707070" stroke-width="0.6" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="-0.6,237,32;1,237,32;-0.6,237,32" dur="4.5s" repeatCount="indefinite"/>
  </line>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#1C1A2A"/>
      <stop offset="100%" stop-color="#181628"/>
    </linearGradient>
    <radialGradient id="lofiLivTV" cx="0.78" cy="0.55" r="0.35">
      <stop offset="0%" stop-color="#5A90D0" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#5A90D0" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#5A90D0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.56" cy="0.42" r="0.25">
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
  <rect x="60" y="86" width="120" height="8" rx="2" fill="#7A4040" opacity="0.12"/>

  <!-- COUCH — seat at y=73, back at y=62 (realistic proportions) -->
  <rect x="50" y="62" width="130" height="5" rx="2" fill="#6A4028" opacity="0.6"/>
  <rect x="46" y="67" width="138" height="16" rx="3" fill="#5A3018" opacity="0.55"/>
  <!-- cushions -->
  <rect x="52" y="68" width="38" height="14" rx="3" fill="#6A3820" opacity="0.4"/>
  <rect x="94" y="68" width="38" height="14" rx="3" fill="#6A3820" opacity="0.4"/>
  <rect x="136" y="68" width="38" height="14" rx="3" fill="#6A3820" opacity="0.4"/>
  <!-- legs -->
  <rect x="52" y="83" width="3" height="5" rx="0.5" fill="#4A2810" opacity="0.4"/>
  <rect x="177" y="83" width="3" height="5" rx="0.5" fill="#4A2810" opacity="0.4"/>
  <!-- armrests -->
  <rect x="43" y="63" width="10" height="22" rx="3" fill="#5A3018" opacity="0.45"/>
  <rect x="180" y="63" width="10" height="22" rx="3" fill="#5A3018" opacity="0.45"/>
  <!-- throw pillows -->
  <rect x="56" y="60" width="12" height="8" rx="3" fill="#E0A040" opacity="0.3"/>
  <rect x="158" y="60" width="11" height="8" rx="3" fill="#5090D0" opacity="0.2"/>

  <!-- COFFEE TABLE — top at y=75 (45cm, 12 units from floor) -->
  <rect x="85" y="83" width="65" height="3" rx="0.8" fill="#5A4028" opacity="0.45"/>
  <rect x="89" y="86" width="2.5" height="5" rx="0.5" fill="#4A3018" opacity="0.3"/>
  <rect x="144" y="86" width="2.5" height="5" rx="0.5" fill="#4A3018" opacity="0.3"/>
  <!-- CANDLE on table -->
  <rect x="113" y="80" width="3" height="3.5" rx="0.3" fill="#E8D8B0" opacity="0.35"/>
  <ellipse cx="114.5" cy="79" rx="1.5" ry="2" fill="#FFD040" opacity="0">
    <animate attributeName="opacity" values="0.15;0.35;0.1;0.3;0.2;0.28;0.15" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="ry" values="2;2.5;1.5;2.2;2" dur="1.2s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="114.5" cy="78.5" r="0.8" fill="#FFF5D0" opacity="0">
    <animate attributeName="opacity" values="0.1;0.3;0.08;0.25;0.12;0.22;0.1" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <!-- candle glow pool -->
  <ellipse cx="114.5" cy="83" rx="8" ry="2" fill="#FFD040" opacity="0.015">
    <animate attributeName="opacity" values="0.01;0.03;0.012;0.025;0.01" dur="1.5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- TV — 18 units tall on console, realistic -->
  <rect x="290" y="45" width="48" height="18" rx="1.5" fill="#0E0E1E" opacity="0.8"/>
  <!-- screen -->
  <rect x="292" y="47" width="44" height="14" rx="1" fill="#1A2A4A">
    <animate attributeName="fill" values="#1A2A4A;#2A1A4A;#1A4A3A;#3A2A1A;#1A2A4A" dur="12s" repeatCount="indefinite"/>
  </rect>
  <!-- TV brightness pulse -->
  <rect x="292" y="47" width="44" height="14" rx="1" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0.03;0.08;0.04;0.06;0.03" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall -->
  <rect x="278" y="20" width="70" height="30" rx="3" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on floor -->
  <rect x="285" y="85" width="65" height="10" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.005;0.015;0.008;0.012;0.005" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV console — under TV -->
  <rect x="285" y="63" width="58" height="6" rx="1" fill="#3A2820" opacity="0.5"/>
  <rect x="289" y="69" width="4" height="16" rx="0.8" fill="#2A1810" opacity="0.35"/>
  <rect x="339" y="69" width="4" height="16" rx="0.8" fill="#2A1810" opacity="0.35"/>

  <!-- FLOOR LAMP — shade at y=45 (150cm) -->
  <line x1="220" y1="45" x2="220" y2="82" stroke="#3A3850" stroke-width="1.2" opacity="0.45"/>
  <ellipse cx="220" cy="43" rx="8" ry="5" fill="#FFE0A0" opacity="0.18">
    <animate attributeName="opacity" values="0.15;0.22;0.16;0.2;0.15" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="220" cy="43" r="2.5" fill="#FFF5D0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.14;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="220" cy="84" rx="5" ry="2" fill="#3A3850" opacity="0.3"/>
  <!-- lamp light pool on floor -->
  <ellipse cx="220" cy="88" rx="15" ry="4" fill="#FFE0A0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- WINDOW — sill at y=42, top at y=12 -->
  <rect x="130" y="12" width="38" height="30" rx="1.5" fill="#242240" opacity="0.35"/>
  <rect x="132" y="14" width="16" height="26" fill="#2E2C50" opacity="0.3"/>
  <rect x="150" y="14" width="16" height="26" fill="#2E2C50" opacity="0.3"/>
  <!-- curtain sway -->
  <rect x="130" y="12" width="4" height="30" fill="#302850" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0,132,12;0.8,132,12;-0.4,132,12;0,132,12" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect x="164" y="12" width="4" height="30" fill="#302850" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0,166,12;-0.6,166,12;0.5,166,12;0,166,12" dur="5.5s" repeatCount="indefinite"/>
  </rect>

  <!-- PLANT -->
  <rect x="360" y="70" width="8" height="15" rx="2" fill="#2A3828" opacity="0.4"/>
  <ellipse cx="364" cy="67" rx="8" ry="6" fill="#2A5030" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="-1.5,364,78;1.5,364,78;-1.5,364,78" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dust in lamp light -->
  <circle cx="216" cy="52" r="0.5" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0.12;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="56" to="44" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="226" cy="58" r="0.4" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0" dur="6s" repeatCount="indefinite" begin="2.5s"/>
    <animate attributeName="cy" from="62" to="50" dur="6s" repeatCount="indefinite" begin="2.5s"/>
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
    <radialGradient id="lofiBedLamp" cx="0.72" cy="0.62" r="0.2">
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

  <!-- BED — mattress top at y=69 (60cm), headboard top at y=53 (32 units) -->
  <!-- headboard -->
  <rect x="60" y="53" width="8" height="32" rx="2" fill="#4A3428" opacity="0.7"/>
  <rect x="62" y="56" width="5" height="10" rx="1" fill="#5A4438" opacity="0.4"/>
  <rect x="62" y="68" width="5" height="10" rx="1" fill="#5A4438" opacity="0.4"/>
  <!-- mattress + frame -->
  <rect x="68" y="69" width="170" height="16" rx="2" fill="#2A2050" opacity="0.55"/>
  <!-- duvet -->
  <rect x="70" y="66" width="166" height="16" rx="2.5" fill="#3A3068" opacity="0.5"/>
  <!-- duvet folds -->
  <line x1="74" y1="72" x2="232" y2="72" stroke="#4A4080" stroke-width="0.5" opacity="0.2"/>
  <line x1="74" y1="78" x2="232" y2="78" stroke="#4A4080" stroke-width="0.4" opacity="0.15"/>
  <!-- pillows -->
  <ellipse cx="88" cy="68" rx="14" ry="6" fill="#D8D0A8" opacity="0.22"/>
  <ellipse cx="88" cy="72" rx="12" ry="5" fill="#D0C8A0" opacity="0.18"/>
  <ellipse cx="108" cy="69" rx="12" ry="5.5" fill="#D0C8A0" opacity="0.15"/>
  <!-- footboard -->
  <rect x="238" y="69" width="4" height="16" rx="1" fill="#4A3428" opacity="0.5"/>
  <!-- legs -->
  <rect x="65" y="84" width="3.5" height="4" rx="0.5" fill="#4A3428" opacity="0.4"/>
  <rect x="236" y="84" width="3.5" height="4" rx="0.5" fill="#4A3428" opacity="0.4"/>

  <!-- NIGHTSTAND — 16 units tall, y=69 to y=85 -->
  <rect x="252" y="69" width="22" height="16" rx="1.5" fill="#2A2040" opacity="0.5"/>
  <rect x="254" y="71" width="18" height="6" rx="0.8" fill="#322850" opacity="0.35"/>
  <rect x="254" y="79" width="18" height="5" rx="0.8" fill="#322850" opacity="0.35"/>

  <!-- LAMP on nightstand — shade at y=60 -->
  <rect x="259" y="62" width="8" height="7" rx="1.5" fill="#403060" opacity="0.5"/>
  <ellipse cx="263" cy="60" rx="6" ry="3.5" fill="#F0D080" opacity="0.2">
    <animate attributeName="opacity" values="0.16;0.25;0.18;0.23;0.16" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="263" cy="60" r="2" fill="#FFF5D0" opacity="0.2">
    <animate attributeName="opacity" values="0.15;0.25;0.17;0.22;0.15" dur="4s" repeatCount="indefinite"/>
  </circle>
  <!-- lamp glow on nightstand -->
  <ellipse cx="263" cy="69" rx="10" ry="3" fill="#F0D080" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- WINDOW — night sky, sill at y=38, top at y=10 -->
  <rect x="310" y="10" width="38" height="28" rx="1.5" fill="#181640" opacity="0.6"/>
  <rect x="312" y="12" width="16" height="24" fill="#1A1848" opacity="0.6"/>
  <rect x="330" y="12" width="16" height="24" fill="#1A1848" opacity="0.6"/>
  <!-- curtains -->
  <rect x="310" y="10" width="4" height="28" fill="#2A2058" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="0,312,10;0.5,312,10;-0.3,312,10;0,312,10" dur="7s" repeatCount="indefinite"/>
  </rect>
  <rect x="344" y="10" width="4" height="28" fill="#2A2058" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="0,346,10;-0.4,346,10;0.3,346,10;0,346,10" dur="7.5s" repeatCount="indefinite"/>
  </rect>

  <!-- STARS -->
  <circle cx="316" cy="15" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.6;0.15;0.5;0.1" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="324" cy="22" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.5;0.1;0.4;0.15" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="334" cy="14" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.55;0.15;0.45;0.1" dur="4s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="341" cy="21" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.4;0.12;0.35;0.08" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="318" cy="28" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.35;0.1;0.25;0.05" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>

  <!-- MOON -->
  <circle cx="340" cy="17" r="4" fill="#E8E0C8" opacity="0.4">
    <animate attributeName="opacity" values="0.35;0.5;0.38;0.45;0.35" dur="6s" repeatCount="indefinite"/>
  </circle>
  <!-- cloud drift -->
  <ellipse cx="330" cy="18" rx="10" ry="3.5" fill="#1A1848" opacity="0">
    <animate attributeName="opacity" values="0;0;0.4;0.5;0.4;0;0" dur="18s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="318" to="352" dur="18s" repeatCount="indefinite"/>
  </ellipse>

  <!-- MOONBEAM on floor -->
  <polygon points="312,38 346,38 360,100 290,100" fill="#C8C0E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.035;0.02;0.03;0.015" dur="8s" repeatCount="indefinite"/>
  </polygon>
  <!-- dust in moonbeam -->
  <circle cx="330" cy="58" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0.12;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="322" cy="68" r="0.4" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0.1;0" dur="6s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="72" to="55" dur="6s" repeatCount="indefinite" begin="2s"/>
  </circle>

  <!-- DRESSER — 20 units tall, y=65 to y=85 -->
  <rect x="370" y="65" width="18" height="20" rx="1.5" fill="#2A2040" opacity="0.4"/>
  <rect x="372" y="67" width="14" height="8" rx="0.8" fill="#322850" opacity="0.25"/>
  <rect x="372" y="77" width="14" height="7" rx="0.8" fill="#322850" opacity="0.25"/>
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
