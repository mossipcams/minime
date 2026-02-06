/**
 * Lo-fi room backgrounds — cozy, visible, atmospheric
 *
 * Proportion system (person ≈ 52 viewBox units tall, 170cm):
 *   1 viewBox unit = 3.27cm real
 *   Floor line: y=85 (avatar feet)
 *   Desk: 46W × 23H, surface at y=62
 *   Monitor: 17W × 10H
 *   Counter: 76W × 28H, surface at y=57
 *   Fridge: 21W × 52H
 *   Sofa: 64W × 26H
 *   Queen bed (side): 61W, mattress at y=67
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
    <radialGradient id="lofiOffMonitor" cx="0.38" cy="0.5" r="0.25">
      <stop offset="0%" stop-color="#4A90D0" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#3A70A0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#3A70A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiOffLamp" cx="0.3" cy="0.5" r="0.2">
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

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#1A2838" opacity="0.3"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0F1822" opacity="0.7"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A3A4E" stroke-width="0.5" opacity="0.5"/>
  <line x1="0" y1="90" x2="400" y2="90" stroke="#1A2838" stroke-width="0.3" opacity="0.2"/>
  <line x1="0" y1="95" x2="400" y2="95" stroke="#1A2838" stroke-width="0.3" opacity="0.15"/>

  <!-- DESK — 46W, surface at y=62 (75cm H) -->
  <rect x="130" y="62" width="46" height="2.5" rx="0.5" fill="#6B5840" opacity="0.8"/>
  <rect x="130" y="62" width="46" height="1" fill="#7D6A50" opacity="0.5"/>
  <!-- desk legs -->
  <rect x="133" y="64.5" width="2" height="20" fill="#5A4830" opacity="0.5"/>
  <rect x="172" y="64.5" width="2" height="20" fill="#5A4830" opacity="0.5"/>
  <rect x="133" y="76" width="41" height="1.2" rx="0.5" fill="#5A4830" opacity="0.2"/>

  <!-- MONITOR — 17W × 10H, on desk -->
  <rect x="144" y="50" width="17" height="10" rx="1" fill="#0E0E1E" opacity="0.9"/>
  <rect x="145.5" y="51.5" width="14" height="7" rx="0.8" fill="#1A3050">
    <animate attributeName="fill" values="#1A3050;#1E3558;#1A3050" dur="6s" repeatCount="indefinite"/>
  </rect>
  <!-- code lines -->
  <line x1="147" y1="53.5" x2="155" y2="53.5" stroke="#7ABCE0" stroke-width="0.6" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.35;0.55;0.4" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="147" y1="55.5" x2="157" y2="55.5" stroke="#7ABCE0" stroke-width="0.6" opacity="0.4">
    <animate attributeName="opacity" values="0.3;0.55;0.35;0.5;0.3" dur="2.3s" repeatCount="indefinite" begin="0.3s"/>
  </line>
  <line x1="149" y1="57" x2="154" y2="57" stroke="#A0D070" stroke-width="0.6" opacity="0.4">
    <animate attributeName="opacity" values="0.25;0.5;0.3;0.45;0.25" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
  </line>
  <!-- cursor blink -->
  <rect x="157.5" y="55" width="1" height="2" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.7;0.7;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- monitor stand -->
  <rect x="149" y="60" width="6" height="2" rx="0.5" fill="#0E0E1E" opacity="0.8"/>
  <rect x="147" y="61.5" width="10" height="1" rx="0.5" fill="#1A1A2E" opacity="0.7"/>
  <!-- monitor glow on desk -->
  <ellipse cx="152" cy="63.5" rx="14" ry="2.5" fill="#4A90D0" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.1;0.05;0.08;0.04" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- KEYBOARD — 14W -->
  <rect x="145" y="63" width="14" height="1.5" rx="0.5" fill="#1A1A2E" opacity="0.6"/>

  <!-- CHAIR — 15W, seat y=72, back top y=54 -->
  <rect x="108" y="54" width="15" height="18" rx="3" fill="#2D3E50" opacity="0.5"/>
  <rect x="112" y="72" width="8" height="13" rx="1.5" fill="#243444" opacity="0.4"/>

  <!-- DESK LAMP — shade 6W at y=50 -->
  <line x1="134" y1="62" x2="136" y2="50" stroke="#4A5A6A" stroke-width="1"/>
  <line x1="136" y1="50" x2="141" y2="47" stroke="#4A5A6A" stroke-width="0.8"/>
  <ellipse cx="140" cy="46" rx="3" ry="2" fill="#FFE4A0" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.3;0.22;0.28;0.2" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="140" cy="46" r="1.2" fill="#FFF5D0" opacity="0.35">
    <animate attributeName="opacity" values="0.3;0.4;0.32;0.38;0.3" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="138" cy="62" rx="8" ry="2" fill="#FFE4A0" opacity="0.04">
    <animate attributeName="opacity" values="0.03;0.06;0.035;0.055;0.03" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- COFFEE MUG — 2.5W on desk -->
  <rect x="164" y="59" width="2.5" height="3.5" rx="0.5" fill="#8B5030" opacity="0.6"/>
  <rect x="166.5" y="60" width="1.2" height="1.5" rx="0.5" fill="#8B5030" opacity="0.4"/>
  <!-- steam -->
  <path d="M165,57.5 Q164,54 166,50" fill="none" stroke="#FFF" stroke-width="0.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.1;0.05;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M165,57.5 Q164,54 166,50;M165,57.5 Q163,52 165.5,47;M165,57.5 Q166,53 164,49;M165,57.5 Q164,54 166,50" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M166.5,57.5 Q167,53 165,49" fill="none" stroke="#FFF" stroke-width="0.4" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.08;0.04;0" dur="3.5s" repeatCount="indefinite" begin="1s"/>
    <animate attributeName="d" values="M166.5,57.5 Q167,53 165,49;M166.5,57.5 Q168,51 166,46;M166.5,57.5 Q165.5,52 167,47;M166.5,57.5 Q167,53 165,49" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </path>

  <!-- BOOKSHELF — 28W × 55H, y=30 to y=85 -->
  <rect x="220" y="30" width="28" height="55" rx="1.5" fill="#2A3A4A" opacity="0.5"/>
  <rect x="222" y="33" width="24" height="11" fill="#223040" opacity="0.35"/>
  <rect x="222" y="47" width="24" height="11" fill="#223040" opacity="0.35"/>
  <rect x="222" y="61" width="24" height="11" fill="#223040" opacity="0.35"/>
  <rect x="222" y="75" width="24" height="8" fill="#223040" opacity="0.35"/>
  <!-- books -->
  <rect x="224" y="34" width="3" height="9" fill="#D06060" opacity="0.35"/>
  <rect x="228" y="35" width="2.5" height="8" fill="#50A058" opacity="0.3"/>
  <rect x="231" y="34" width="3.5" height="9" fill="#5090D0" opacity="0.3"/>
  <rect x="236" y="36" width="2.5" height="7" fill="#D0A040" opacity="0.25"/>
  <rect x="224" y="48" width="3.5" height="9" fill="#D0A040" opacity="0.25"/>
  <rect x="228.5" y="49" width="3" height="8" fill="#9060A0" opacity="0.25"/>
  <rect x="232.5" y="48" width="2.5" height="9" fill="#60A0A0" opacity="0.25"/>
  <rect x="224" y="62" width="4" height="9" fill="#C06050" opacity="0.25"/>
  <rect x="229" y="63" width="3" height="8" fill="#5080A0" opacity="0.2"/>

  <!-- WINDOW — 28W × 37H, sill y=20 top y=57 -->
  <rect x="270" y="20" width="28" height="37" rx="1.5" fill="#243848" opacity="0.4"/>
  <rect x="272" y="22" width="11" height="33" fill="#2A4A60" opacity="0.35"/>
  <rect x="285" y="22" width="11" height="33" fill="#2A4A60" opacity="0.35"/>
  <!-- rain -->
  <line x1="276" y1="24" x2="275" y2="30" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.15;0" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y1" from="22" to="53" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y2" from="28" to="59" dur="1.2s" repeatCount="indefinite"/>
  </line>
  <line x1="289" y1="26" x2="288" y2="31" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.12;0" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y1" from="22" to="53" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y2" from="27" to="58" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
  </line>
  <line x1="282" y1="23" x2="281" y2="28" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.1;0" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y1" from="22" to="53" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y2" from="27" to="58" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
  </line>
  <line x1="293" y1="25" x2="292" y2="30" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y1" from="22" to="53" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y2" from="27" to="58" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
  </line>

  <!-- WALL ART — small frame -->
  <rect x="190" y="32" width="12" height="16" rx="1" fill="#1A2838" opacity="0.3"/>
  <rect x="191" y="33" width="10" height="14" fill="#2A3A50" opacity="0.2"/>

  <!-- dust in lamp light -->
  <circle cx="138" cy="54" r="0.5" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0.15;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="58" to="46" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="145" cy="58" r="0.35" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0" dur="5s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#2E2218"/>
      <stop offset="100%" stop-color="#241C12"/>
    </linearGradient>
    <radialGradient id="lofiKitFlame" cx="0.45" cy="0.55" r="0.25">
      <stop offset="0%" stop-color="#FF8040" stop-opacity="0.2"/>
      <stop offset="40%" stop-color="#E06020" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#E06020" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiKitOverhead" cx="0.4" cy="0.02" r="0.45">
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

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#2A2010" opacity="0.25"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#1A1508" opacity="0.6"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A3020" stroke-width="0.5" opacity="0.4"/>
  <line x1="0" y1="92" x2="400" y2="92" stroke="#2A2010" stroke-width="0.3" opacity="0.15"/>

  <!-- COUNTER — 76W, surface at y=57 (90cm, 28 from floor) -->
  <rect x="115" y="57" width="76" height="2.5" rx="0.5" fill="#909898" opacity="0.6"/>
  <rect x="115" y="57" width="76" height="1" fill="#A0A8A8" opacity="0.4"/>
  <!-- lower cabinets -->
  <rect x="115" y="59.5" width="76" height="22" rx="1" fill="#3D5A40" opacity="0.45"/>
  <rect x="118" y="61.5" width="16" height="18" rx="0.8" fill="#456048" opacity="0.3"/>
  <rect x="137" y="61.5" width="16" height="18" rx="0.8" fill="#456048" opacity="0.3"/>
  <rect x="156" y="61.5" width="16" height="18" rx="0.8" fill="#456048" opacity="0.3"/>
  <rect x="175" y="61.5" width="13" height="18" rx="0.8" fill="#456048" opacity="0.3"/>
  <!-- handles -->
  <rect x="124" y="69" width="3" height="1" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="143" y="69" width="3" height="1" rx="0.5" fill="#708068" opacity="0.4"/>
  <rect x="162" y="69" width="3" height="1" rx="0.5" fill="#708068" opacity="0.4"/>

  <!-- backsplash tiles -->
  <g stroke="#3A3020" stroke-width="0.2" opacity="0.15">
    <line x1="115" y1="38" x2="191" y2="38"/>
    <line x1="115" y1="48" x2="191" y2="48"/>
  </g>

  <!-- upper cabinets — 24W × 12H each -->
  <rect x="115" y="16" width="24" height="12" rx="1" fill="#3D5A40" opacity="0.4"/>
  <rect x="145" y="16" width="24" height="12" rx="1" fill="#3D5A40" opacity="0.4"/>

  <!-- RANGE HOOD — 18W above stove -->
  <rect x="200" y="22" width="18" height="8" rx="1" fill="#586060" opacity="0.35"/>
  <rect x="202" y="30" width="14" height="1.5" rx="0.5" fill="#505050" opacity="0.3"/>

  <!-- STOVE area — separate from counter, 20W -->
  <rect x="198" y="57" width="24" height="2.5" rx="0.5" fill="#404040" opacity="0.5"/>
  <!-- burners — 6W each -->
  <ellipse cx="205" cy="56" rx="3" ry="1.5" fill="#282020" opacity="0.5"/>
  <ellipse cx="216" cy="56" rx="3" ry="1.5" fill="#282020" opacity="0.5"/>
  <!-- flames -->
  <ellipse cx="205" cy="55.5" rx="2.5" ry="1.2" fill="#FF8040">
    <animate attributeName="opacity" values="0.2;0.5;0.25;0.45;0.2" dur="0.5s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="2;3;2.2;2.8;2" dur="0.7s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="216" cy="55.5" rx="2.5" ry="1.2" fill="#FF8040">
    <animate attributeName="opacity" values="0.25;0.45;0.2;0.4;0.25" dur="0.6s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="rx" values="2.2;3;2;2.8;2.2" dur="0.8s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <!-- flame glow on wall -->
  <rect x="195" y="32" width="30" height="18" fill="#FF8040" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="0.8s" repeatCount="indefinite"/>
  </rect>

  <!-- POT — 6W on burner -->
  <rect x="202" y="48" width="6" height="7" rx="1.5" fill="#5A6470" opacity="0.6"/>
  <rect x="201" y="47" width="8" height="1.5" rx="0.6" fill="#6A7280" opacity="0.5"/>
  <rect x="201" y="46" width="8" height="1.2" rx="0.6" fill="#7A8290" opacity="0.4">
    <animate attributeName="y" values="46;45.3;46;45.6;46" dur="0.7s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="-0.5,205,46.5;0.5,205,46.5;-0.5,205,46.5" dur="0.5s" repeatCount="indefinite"/>
  </rect>

  <!-- STEAM -->
  <path d="M204,44 Q203,39 205,34" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.12;0.06;0" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M204,44 Q203,39 205,34;M204,44 Q201,36 204,28;M204,44 Q206,38 203,32;M204,44 Q203,39 205,34" dur="2.5s" repeatCount="indefinite"/>
  </path>
  <path d="M206,44 Q207,38 205,32" fill="none" stroke="#FFF" stroke-width="0.6" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.14;0.1;0.04;0" dur="3s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="d" values="M206,44 Q207,38 205,32;M206,44 Q208,34 205,26;M206,44 Q205,36 207,30;M206,44 Q207,38 205,32" dur="3s" repeatCount="indefinite" begin="0.8s"/>
  </path>
  <path d="M208,44 Q207,40 209,35" fill="none" stroke="#FFF" stroke-width="0.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.06;0.03;0" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="d" values="M208,44 Q207,40 209,35;M208,44 Q206,36 209,29;M208,44 Q209,38 207,33;M208,44 Q207,40 209,35" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
  </path>

  <!-- FRIDGE — 21W × 52H, y=33 to y=85 -->
  <rect x="260" y="33" width="21" height="52" rx="1.5" fill="#586060" opacity="0.4"/>
  <line x1="260" y1="55" x2="281" y2="55" stroke="#505050" stroke-width="0.4" opacity="0.35"/>
  <rect x="276" y="39" width="2" height="8" rx="0.5" fill="#6A6A6A" opacity="0.35"/>
  <rect x="276" y="62" width="2" height="8" rx="0.5" fill="#6A6A6A" opacity="0.35"/>

  <!-- SINK — 17W on counter -->
  <rect x="125" y="54.5" width="17" height="2.5" rx="1" fill="#6A7280" opacity="0.4"/>
  <line x1="133" y1="54" x2="133" y2="38" stroke="#808890" stroke-width="1" stroke-linecap="round" opacity="0.35"/>
  <!-- water drip -->
  <circle cx="133" cy="55" r="0.5" fill="#6AAAD0" opacity="0">
    <animate attributeName="opacity" values="0;0;0.3;0.2;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="55" to="57.5" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- HANGING UTENSILS — near stove -->
  <line x1="235" y1="32" x2="235" y2="44" stroke="#707070" stroke-width="0.5" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="-1,235,32;1,235,32;-1,235,32" dur="4s" repeatCount="indefinite"/>
  </line>
  <line x1="240" y1="32" x2="240" y2="46" stroke="#707070" stroke-width="0.5" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="0.8,240,32;-0.8,240,32;0.8,240,32" dur="3.5s" repeatCount="indefinite"/>
  </line>
  <line x1="245" y1="32" x2="245" y2="42" stroke="#707070" stroke-width="0.5" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="-0.6,245,32;1,245,32;-0.6,245,32" dur="4.5s" repeatCount="indefinite"/>
  </line>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#1C1A2A"/>
      <stop offset="100%" stop-color="#181628"/>
    </linearGradient>
    <radialGradient id="lofiLivTV" cx="0.72" cy="0.5" r="0.3">
      <stop offset="0%" stop-color="#5A90D0" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#5A90D0" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#5A90D0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.5" cy="0.4" r="0.2">
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

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#1A1830" opacity="0.2"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0E0D1A" opacity="0.6"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A2840" stroke-width="0.5" opacity="0.4"/>
  <line x1="0" y1="92" x2="400" y2="92" stroke="#1A1830" stroke-width="0.3" opacity="0.12"/>
  <!-- rug -->
  <rect x="100" y="86" width="60" height="6" rx="2" fill="#7A4040" opacity="0.12"/>

  <!-- SOFA — 64W × 26H, back top at y=59, seat at y=71 -->
  <rect x="85" y="59" width="64" height="4" rx="2" fill="#6A4028" opacity="0.6"/>
  <rect x="82" y="63" width="70" height="18" rx="3" fill="#5A3018" opacity="0.55"/>
  <!-- cushions -->
  <rect x="86" y="64" width="19" height="15" rx="3" fill="#6A3820" opacity="0.4"/>
  <rect x="108" y="64" width="19" height="15" rx="3" fill="#6A3820" opacity="0.4"/>
  <rect x="130" y="64" width="19" height="15" rx="3" fill="#6A3820" opacity="0.4"/>
  <!-- legs -->
  <rect x="86" y="81" width="2.5" height="5" rx="0.5" fill="#4A2810" opacity="0.4"/>
  <rect x="146" y="81" width="2.5" height="5" rx="0.5" fill="#4A2810" opacity="0.4"/>
  <!-- armrests -->
  <rect x="79" y="60" width="7" height="22" rx="3" fill="#5A3018" opacity="0.45"/>
  <rect x="149" y="60" width="7" height="22" rx="3" fill="#5A3018" opacity="0.45"/>
  <!-- throw pillows -->
  <rect x="89" y="57" width="9" height="7" rx="3" fill="#E0A040" opacity="0.3"/>
  <rect x="137" y="57" width="8" height="7" rx="3" fill="#5090D0" opacity="0.2"/>

  <!-- COFFEE TABLE — 31W × 14H, top at y=79 -->
  <rect x="100" y="79" width="31" height="2.5" rx="0.8" fill="#5A4028" opacity="0.45"/>
  <rect x="103" y="81.5" width="2" height="5" rx="0.5" fill="#4A3018" opacity="0.3"/>
  <rect x="127" y="81.5" width="2" height="5" rx="0.5" fill="#4A3018" opacity="0.3"/>
  <!-- CANDLE -->
  <rect x="113" y="76.5" width="2" height="3" rx="0.3" fill="#E8D8B0" opacity="0.35"/>
  <ellipse cx="114" cy="75.5" rx="1.2" ry="1.5" fill="#FFD040" opacity="0">
    <animate attributeName="opacity" values="0.15;0.35;0.1;0.3;0.2;0.28;0.15" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="ry" values="1.5;2;1.2;1.8;1.5" dur="1.2s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="114" cy="75" r="0.6" fill="#FFF5D0" opacity="0">
    <animate attributeName="opacity" values="0.1;0.3;0.08;0.25;0.12;0.22;0.1" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="114" cy="79" rx="6" ry="1.5" fill="#FFD040" opacity="0.015">
    <animate attributeName="opacity" values="0.01;0.03;0.012;0.025;0.01" dur="1.5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- TV — 37W × 21H on console -->
  <rect x="250" y="42" width="37" height="21" rx="1.5" fill="#0E0E1E" opacity="0.8"/>
  <rect x="252" y="44" width="33" height="17" rx="1" fill="#1A2A4A">
    <animate attributeName="fill" values="#1A2A4A;#2A1A4A;#1A4A3A;#3A2A1A;#1A2A4A" dur="12s" repeatCount="indefinite"/>
  </rect>
  <rect x="252" y="44" width="33" height="17" rx="1" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0.03;0.08;0.04;0.06;0.03" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall -->
  <rect x="240" y="18" width="55" height="28" rx="3" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on floor -->
  <rect x="245" y="85" width="50" height="10" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.005;0.015;0.008;0.012;0.005" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV console — 37W × 15H -->
  <rect x="250" y="63" width="37" height="5" rx="1" fill="#3A2820" opacity="0.5"/>
  <rect x="253" y="68" width="3" height="17" rx="0.8" fill="#2A1810" opacity="0.35"/>
  <rect x="281" y="68" width="3" height="17" rx="0.8" fill="#2A1810" opacity="0.35"/>

  <!-- FLOOR LAMP — shade 9W at y=39 (150cm) -->
  <line x1="195" y1="39" x2="195" y2="82" stroke="#3A3850" stroke-width="1" opacity="0.45"/>
  <ellipse cx="195" cy="37" rx="5" ry="3.5" fill="#FFE0A0" opacity="0.18">
    <animate attributeName="opacity" values="0.15;0.22;0.16;0.2;0.15" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="195" cy="37" r="2" fill="#FFF5D0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.14;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="195" cy="84" rx="4" ry="1.5" fill="#3A3850" opacity="0.3"/>
  <ellipse cx="195" cy="88" rx="10" ry="3" fill="#FFE0A0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- WINDOW — 28W × 37H -->
  <rect x="170" y="10" width="28" height="37" rx="1.5" fill="#242240" opacity="0.35"/>
  <rect x="172" y="12" width="11" height="33" fill="#2E2C50" opacity="0.3"/>
  <rect x="185" y="12" width="11" height="33" fill="#2E2C50" opacity="0.3"/>
  <!-- curtains -->
  <rect x="170" y="10" width="3.5" height="37" fill="#302850" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0,172,10;0.8,172,10;-0.4,172,10;0,172,10" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect x="194.5" y="10" width="3.5" height="37" fill="#302850" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0,196,10;-0.6,196,10;0.5,196,10;0,196,10" dur="5.5s" repeatCount="indefinite"/>
  </rect>

  <!-- PLANT — 7W pot -->
  <rect x="305" y="72" width="7" height="13" rx="2" fill="#2A3828" opacity="0.4"/>
  <ellipse cx="308" cy="69" rx="6" ry="5" fill="#2A5030" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="-1.5,308,78;1.5,308,78;-1.5,308,78" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dust in lamp light -->
  <circle cx="192" cy="48" r="0.4" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0.12;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="52" to="40" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="54" r="0.35" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0" dur="6s" repeatCount="indefinite" begin="2.5s"/>
    <animate attributeName="cy" from="58" to="46" dur="6s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedBg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#161030"/>
      <stop offset="100%" stop-color="#1A1438"/>
    </linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.85" cy="0.12" r="0.35">
      <stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.2"/>
      <stop offset="40%" stop-color="#C0B8A0" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#C0B8A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.62" cy="0.62" r="0.18">
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

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#1A1430" opacity="0.2"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0C0A1E" opacity="0.6"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#2A2848" stroke-width="0.3" opacity="0.3"/>

  <!-- BED (side view) — 61W, mattress top y=67, headboard top y=48 -->
  <!-- headboard (side: 3W thick, 37H) -->
  <rect x="110" y="48" width="3" height="37" rx="1" fill="#4A3428" opacity="0.7"/>
  <!-- mattress + frame -->
  <rect x="113" y="67" width="61" height="18" rx="2" fill="#2A2050" opacity="0.55"/>
  <!-- duvet -->
  <rect x="115" y="64" width="58" height="18" rx="2.5" fill="#3A3068" opacity="0.5"/>
  <!-- duvet folds -->
  <line x1="118" y1="70" x2="170" y2="70" stroke="#4A4080" stroke-width="0.4" opacity="0.2"/>
  <line x1="118" y1="76" x2="170" y2="76" stroke="#4A4080" stroke-width="0.3" opacity="0.15"/>
  <!-- pillows -->
  <ellipse cx="123" cy="66" rx="8" ry="4" fill="#D8D0A8" opacity="0.22"/>
  <ellipse cx="123" cy="69" rx="7" ry="3.5" fill="#D0C8A0" opacity="0.18"/>
  <ellipse cx="135" cy="67" rx="7" ry="3.5" fill="#D0C8A0" opacity="0.15"/>
  <!-- footboard (side: 3W) -->
  <rect x="174" y="67" width="3" height="18" rx="1" fill="#4A3428" opacity="0.5"/>
  <!-- legs -->
  <rect x="111" y="84" width="2.5" height="4" rx="0.5" fill="#4A3428" opacity="0.4"/>
  <rect x="173" y="84" width="2.5" height="4" rx="0.5" fill="#4A3428" opacity="0.4"/>

  <!-- NIGHTSTAND — 14W × 20H, y=65 to y=85 -->
  <rect x="185" y="65" width="14" height="20" rx="1.5" fill="#2A2040" opacity="0.5"/>
  <rect x="187" y="67" width="10" height="7" rx="0.8" fill="#322850" opacity="0.35"/>
  <rect x="187" y="76" width="10" height="7" rx="0.8" fill="#322850" opacity="0.35"/>

  <!-- LAMP on nightstand — shade 5W at y=57 -->
  <rect x="189" y="58" width="6" height="7" rx="1.5" fill="#403060" opacity="0.5"/>
  <ellipse cx="192" cy="56" rx="4" ry="2.5" fill="#F0D080" opacity="0.2">
    <animate attributeName="opacity" values="0.16;0.25;0.18;0.23;0.16" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="192" cy="56" r="1.5" fill="#FFF5D0" opacity="0.2">
    <animate attributeName="opacity" values="0.15;0.25;0.17;0.22;0.15" dur="4s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="192" cy="65" rx="8" ry="2.5" fill="#F0D080" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- WINDOW — 28W × 37H, night sky -->
  <rect x="280" y="10" width="28" height="37" rx="1.5" fill="#181640" opacity="0.6"/>
  <rect x="282" y="12" width="11" height="33" fill="#1A1848" opacity="0.6"/>
  <rect x="295" y="12" width="11" height="33" fill="#1A1848" opacity="0.6"/>
  <!-- curtains -->
  <rect x="280" y="10" width="3.5" height="37" fill="#2A2058" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="0,282,10;0.5,282,10;-0.3,282,10;0,282,10" dur="7s" repeatCount="indefinite"/>
  </rect>
  <rect x="304.5" y="10" width="3.5" height="37" fill="#2A2058" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" values="0,306,10;-0.4,306,10;0.3,306,10;0,306,10" dur="7.5s" repeatCount="indefinite"/>
  </rect>

  <!-- STARS -->
  <circle cx="286" cy="15" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.6;0.15;0.5;0.1" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="292" cy="22" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.5;0.1;0.4;0.15" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="299" cy="14" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.55;0.15;0.45;0.1" dur="4s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="304" cy="21" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.4;0.12;0.35;0.08" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="287" cy="28" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.35;0.1;0.25;0.05" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>

  <!-- MOON -->
  <circle cx="302" cy="17" r="3.5" fill="#E8E0C8" opacity="0.4">
    <animate attributeName="opacity" values="0.35;0.5;0.38;0.45;0.35" dur="6s" repeatCount="indefinite"/>
  </circle>
  <!-- cloud drift -->
  <ellipse cx="295" cy="18" rx="8" ry="3" fill="#1A1848" opacity="0">
    <animate attributeName="opacity" values="0;0;0.4;0.5;0.4;0;0" dur="18s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="284" to="312" dur="18s" repeatCount="indefinite"/>
  </ellipse>

  <!-- MOONBEAM on floor -->
  <polygon points="282,47 306,47 318,100 264,100" fill="#C8C0E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.035;0.02;0.03;0.015" dur="8s" repeatCount="indefinite"/>
  </polygon>
  <!-- dust in moonbeam -->
  <circle cx="295" cy="58" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0.12;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="288" cy="68" r="0.4" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0.1;0" dur="6s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="72" to="55" dur="6s" repeatCount="indefinite" begin="2s"/>
  </circle>

  <!-- DRESSER — 31W × 26H, y=59 to y=85 -->
  <rect x="330" y="59" width="31" height="26" rx="1.5" fill="#2A2040" opacity="0.4"/>
  <rect x="332" y="62" width="27" height="9" rx="0.8" fill="#322850" opacity="0.25"/>
  <rect x="332" y="74" width="27" height="9" rx="0.8" fill="#322850" opacity="0.25"/>
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

  <!-- STARS -->
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

  <!-- MOON -->
  <circle cx="330" cy="18" r="8" fill="#E8E0C8" opacity="0.45">
    <animate attributeName="opacity" values="0.4;0.55;0.42;0.5;0.4" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="334" cy="15" r="7" fill="#0C0C1E" opacity="0.95"/>

  <!-- CLOUDS -->
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

  <!-- HOUSE silhouette -->
  <rect x="130" y="38" width="140" height="42" fill="#0C0C1A"/>
  <polygon points="118,38 200,6 282,38" fill="#0A0A16" stroke="#1A1A30" stroke-width="0.6"/>
  <rect x="240" y="10" width="15" height="28" fill="#0C0C1A"/>
  <!-- chimney smoke -->
  <path d="M247,8 Q245,0 250,-6" fill="none" stroke="#2A2A40" stroke-width="1.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.15;0.08;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M247,8 Q245,0 250,-6;M247,8 Q243,-2 249,-10;M247,8 Q249,-1 245,-8;M247,8 Q245,0 250,-6" dur="4s" repeatCount="indefinite"/>
  </path>
  <path d="M250,8 Q252,1 248,-5" fill="none" stroke="#2A2A40" stroke-width="1.2" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.1;0.05;0" dur="5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="d" values="M250,8 Q252,1 248,-5;M250,8 Q254,-2 249,-9;M250,8 Q248,0 252,-7;M250,8 Q252,1 248,-5" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </path>

  <!-- windows & door -->
  <rect x="148" y="48" width="20" height="15" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6" opacity="0.85"/>
  <rect x="178" y="48" width="20" height="15" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6" opacity="0.85"/>
  <rect x="235" y="48" width="20" height="15" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6" opacity="0.85"/>
  <rect x="205" y="55" width="18" height="25" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.6"/>
  <circle cx="220" cy="68" r="1.2" fill="#2A2A40" opacity="0.5"/>
  <rect x="190" y="22" width="14" height="11" rx="1" fill="#0A0A14" stroke="#1A1A30" stroke-width="0.5" opacity="0.8"/>
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

  <!-- trees -->
  <ellipse cx="58" cy="54" rx="20" ry="24" fill="#080E14" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" values="-1,58,75;1,58,75;-1,58,75" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="56" y="72" width="4" height="8" fill="#080E14" opacity="0.6"/>
  <ellipse cx="356" cy="56" rx="16" ry="20" fill="#080E14" opacity="0.6">
    <animateTransform attributeName="transform" type="rotate" values="0.6,356,74;-0.8,356,74;0.6,356,74" dur="6s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="354" y="72" width="4" height="7" fill="#080E14" opacity="0.5"/>

  <!-- fireflies -->
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

  <!-- moonlight pool -->
  <ellipse cx="332" cy="80" rx="35" ry="10" fill="#D0C8E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.03;0.018;0.025;0.015" dur="8s" repeatCount="indefinite"/>
  </ellipse>
</svg>`,
};
