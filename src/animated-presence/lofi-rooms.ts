/**
 * Lo-fi room backgrounds — Roku City inspired warm palette
 *
 * Proportion system (person ≈ 52 viewBox units tall, 170cm):
 *   1 viewBox unit = 3.27cm real
 *   Floor line: y=85 (avatar feet)
 *   Avatar idle position: ~x=145-155 (CSS left: 35%)
 *   ViewBox: 400x100, preserveAspectRatio="xMidYMid slice"
 *   Visible range: ~x=30 to x=370 depending on card width
 *   Gradient IDs prefixed with 'lofi' to avoid collision
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiOffBg" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0%" stop-color="#1E1438"/>
      <stop offset="100%" stop-color="#16102A"/>
    </linearGradient>
    <radialGradient id="lofiOffLamp" cx="0.52" cy="0.52" r="0.2">
      <stop offset="0%" stop-color="#FFD080" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#FFBA60" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#FFBA60" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiOffMonitor" cx="0.5" cy="0.48" r="0.18">
      <stop offset="0%" stop-color="#4A90D0" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#3A70A0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#3A70A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiOffWindow" cx="0.3" cy="0.22" r="0.2">
      <stop offset="0%" stop-color="#C0D0E0" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#C0D0E0" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + light layers -->
  <rect width="400" height="100" fill="url(#lofiOffBg)"/>
  <rect width="400" height="100" fill="url(#lofiOffWindow)"/>
  <rect width="400" height="100" fill="url(#lofiOffLamp)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiOffMonitor)">
    <animate attributeName="opacity" values="0.6;1;0.7;0.9;0.6" dur="4s" repeatCount="indefinite"/>
  </rect>

  <!-- wall shadow line -->
  <line x1="0" y1="55" x2="400" y2="55" stroke="#120C20" stroke-width="0.4" opacity="0.15"/>

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#1A1228" opacity="0.4"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#120E22" opacity="0.8"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A2848" stroke-width="0.5" opacity="0.5"/>
  <line x1="0" y1="89" x2="400" y2="89" stroke="#201838" stroke-width="0.3" opacity="0.2"/>
  <line x1="0" y1="93" x2="400" y2="93" stroke="#201838" stroke-width="0.3" opacity="0.15"/>
  <line x1="0" y1="97" x2="400" y2="97" stroke="#201838" stroke-width="0.3" opacity="0.12"/>
  <line x1="80" y1="85" x2="80" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="160" y1="85" x2="160" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="240" y1="85" x2="240" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="320" y1="85" x2="320" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>

  <!-- BOOKSHELF — 24W × 50H, x=40 -->
  <rect x="40" y="35" width="24" height="50" rx="1" fill="#3A2820" opacity="0.8"/>
  <rect x="42" y="38" width="20" height="10" fill="#2E2018" opacity="0.6"/>
  <rect x="42" y="51" width="20" height="10" fill="#2E2018" opacity="0.6"/>
  <rect x="42" y="64" width="20" height="10" fill="#2E2018" opacity="0.6"/>
  <rect x="42" y="77" width="20" height="6" fill="#2E2018" opacity="0.6"/>
  <!-- books -->
  <rect x="44" y="39" width="3" height="8" fill="#E85050" opacity="0.6"/>
  <rect x="48" y="40" width="2.5" height="7" fill="#40C060" opacity="0.55"/>
  <rect x="51.5" y="39" width="3.5" height="8" fill="#5090E0" opacity="0.55"/>
  <rect x="56" y="40.5" width="2.5" height="6.5" fill="#E8A830" opacity="0.5"/>
  <rect x="44" y="52" width="3" height="8" fill="#B060C0" opacity="0.5"/>
  <rect x="48" y="53" width="4" height="7" fill="#40B8B0" opacity="0.45"/>
  <rect x="53" y="52" width="2.5" height="8" fill="#D88030" opacity="0.45"/>
  <rect x="44" y="65" width="4" height="8" fill="#5090C0" opacity="0.4"/>
  <rect x="49" y="66" width="3" height="7" fill="#E06060" opacity="0.4"/>
  <rect x="53" y="65" width="3.5" height="8" fill="#40C060" opacity="0.35"/>

  <!-- WALL ART — x=78 -->
  <rect x="76" y="28" width="10" height="14" rx="0.8" fill="#2A1830" opacity="0.5"/>
  <rect x="77" y="29" width="8" height="12" fill="#3A2848" opacity="0.4"/>

  <!-- WALL CLOCK — x=98 -->
  <circle cx="98" cy="26" r="5" fill="#2A1830" opacity="0.6" stroke="#4A3858" stroke-width="0.5"/>
  <line x1="98" y1="26" x2="98" y2="23" stroke="#C0A880" stroke-width="0.4" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" from="0 98 26" to="360 98 26" dur="60s" repeatCount="indefinite"/>
  </line>
  <line x1="98" y1="26" x2="100" y2="25" stroke="#C0A880" stroke-width="0.3" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="0 98 26" to="360 98 26" dur="3600s" repeatCount="indefinite"/>
  </line>

  <!-- WINDOW — 32W × 32H, x=115 -->
  <rect x="115" y="14" width="32" height="32" rx="1.5" fill="#2A2040" opacity="0.6"/>
  <rect x="117" y="16" width="13" height="28" fill="#1E2A48" opacity="0.6"/>
  <rect x="132" y="16" width="13" height="28" fill="#1E2A48" opacity="0.6"/>
  <rect x="117" y="16" width="28" height="28" fill="#4A6A90" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.1;0.06;0.08;0.04" dur="6s" repeatCount="indefinite"/>
  </rect>
  <!-- rain -->
  <line x1="123" y1="18" x2="122" y2="24" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.3;0.15;0" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y1" from="16" to="42" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y2" from="22" to="48" dur="1.2s" repeatCount="indefinite"/>
  </line>
  <line x1="137" y1="20" x2="136" y2="25" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.12;0" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y1" from="16" to="42" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y2" from="21" to="47" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
  </line>
  <line x1="129" y1="17" x2="128" y2="22" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.22;0.1;0" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y1" from="16" to="42" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y2" from="21" to="47" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
  </line>
  <line x1="141" y1="19" x2="140" y2="24" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.28;0.14;0" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y1" from="16" to="42" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y2" from="21" to="47" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
  </line>
  <!-- sill + small plant -->
  <rect x="113" y="46" width="36" height="2" rx="0.5" fill="#3A2848" opacity="0.5"/>
  <rect x="125" y="42" width="4" height="4" rx="1" fill="#3A5040" opacity="0.55"/>
  <ellipse cx="127" cy="40" rx="4" ry="3" fill="#2A6838" opacity="0.5"/>

  <!-- CHAIR — x=143 (avatar sits here) -->
  <rect x="143" y="54" width="14" height="18" rx="3" fill="#3A2028" opacity="0.7"/>
  <rect x="146" y="72" width="8" height="13" rx="1.5" fill="#2E1820" opacity="0.6"/>

  <!-- DESK — 46W, surface at y=62, x=160 -->
  <rect x="160" y="62" width="46" height="2.5" rx="0.5" fill="#8B6840" opacity="0.85"/>
  <rect x="160" y="62" width="46" height="1" fill="#A07848" opacity="0.6"/>
  <rect x="163" y="64.5" width="2" height="20" fill="#6A5030" opacity="0.7"/>
  <rect x="202" y="64.5" width="2" height="20" fill="#6A5030" opacity="0.7"/>
  <rect x="163" y="76" width="41" height="1.2" rx="0.5" fill="#6A5030" opacity="0.35"/>

  <!-- MONITOR — 17W × 10H -->
  <rect x="174" y="50" width="17" height="10" rx="1" fill="#0E0E1E" opacity="0.95"/>
  <rect x="175.5" y="51.5" width="14" height="7" rx="0.8" fill="#1A3058">
    <animate attributeName="fill" values="#1A3058;#1E3860;#1A3058" dur="6s" repeatCount="indefinite"/>
  </rect>
  <line x1="177" y1="53.5" x2="185" y2="53.5" stroke="#7ABCE0" stroke-width="0.6" opacity="0.65">
    <animate attributeName="opacity" values="0.5;0.75;0.45;0.65;0.5" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="177" y1="55.5" x2="187" y2="55.5" stroke="#7ABCE0" stroke-width="0.6" opacity="0.55">
    <animate attributeName="opacity" values="0.4;0.65;0.45;0.6;0.4" dur="2.3s" repeatCount="indefinite" begin="0.3s"/>
  </line>
  <line x1="179" y1="57" x2="184" y2="57" stroke="#A0D070" stroke-width="0.6" opacity="0.5">
    <animate attributeName="opacity" values="0.35;0.6;0.4;0.55;0.35" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
  </line>
  <rect x="187.5" y="55" width="1" height="2" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- monitor stand -->
  <rect x="179" y="60" width="6" height="2" rx="0.5" fill="#0E0E1E" opacity="0.9"/>
  <rect x="177" y="61.5" width="10" height="1" rx="0.5" fill="#1A1A2E" opacity="0.8"/>
  <ellipse cx="182" cy="63.5" rx="14" ry="2.5" fill="#4A90D0" opacity="0.08">
    <animate attributeName="opacity" values="0.05;0.12;0.06;0.1;0.05" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- KEYBOARD + MUG -->
  <rect x="175" y="63" width="14" height="1.5" rx="0.5" fill="#1A1A2E" opacity="0.7"/>
  <rect x="195" y="59" width="2.5" height="3.5" rx="0.5" fill="#A05830" opacity="0.75"/>
  <rect x="197.5" y="60" width="1.2" height="1.5" rx="0.5" fill="#A05830" opacity="0.55"/>
  <path d="M196,57.5 Q195,54 197,50" fill="none" stroke="#FFF" stroke-width="0.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.12;0.06;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M196,57.5 Q195,54 197,50;M196,57.5 Q194,52 196.5,47;M196,57.5 Q197,53 195,49;M196,57.5 Q195,54 197,50" dur="3s" repeatCount="indefinite"/>
  </path>

  <!-- DESK LAMP -->
  <line x1="164" y1="62" x2="166" y2="50" stroke="#6A5A4A" stroke-width="1"/>
  <line x1="166" y1="50" x2="171" y2="47" stroke="#6A5A4A" stroke-width="0.8"/>
  <ellipse cx="170" cy="46" rx="3" ry="2" fill="#FFE4A0" opacity="0.35">
    <animate attributeName="opacity" values="0.3;0.42;0.32;0.4;0.3" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="170" cy="46" r="1.2" fill="#FFF5D0" opacity="0.45">
    <animate attributeName="opacity" values="0.4;0.55;0.42;0.5;0.4" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="170" cy="62" rx="10" ry="2" fill="#FFE4A0" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.07;0.04" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- CORKBOARD — x=260, 22W × 16H -->
  <rect x="260" y="26" width="22" height="16" rx="1" fill="#6A4828" opacity="0.5"/>
  <rect x="262" y="28" width="5" height="4" fill="#E8A830" opacity="0.35"/>
  <rect x="269" y="29" width="4" height="5" fill="#5090E0" opacity="0.3"/>
  <rect x="262" y="34" width="6" height="4" fill="#E06060" opacity="0.25"/>
  <rect x="274" y="28" width="5" height="3" fill="#40C060" opacity="0.25"/>

  <!-- FILING CABINET — 16W × 20H, x=262 -->
  <rect x="262" y="65" width="16" height="20" rx="1" fill="#3A2828" opacity="0.7"/>
  <rect x="264" y="67" width="12" height="8" rx="0.5" fill="#2E2020" opacity="0.55"/>
  <rect x="264" y="77" width="12" height="6" rx="0.5" fill="#2E2020" opacity="0.55"/>
  <rect x="268" y="70" width="4" height="0.8" rx="0.3" fill="#8A7860" opacity="0.5"/>
  <rect x="268" y="79" width="4" height="0.8" rx="0.3" fill="#8A7860" opacity="0.5"/>

  <!-- FLOOR LAMP — x=310 -->
  <line x1="310" y1="36" x2="310" y2="83" stroke="#4A3848" stroke-width="1" opacity="0.6"/>
  <ellipse cx="310" cy="34" rx="4.5" ry="3" fill="#FFE0A0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.13;0.18;0.12" dur="6s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="310" cy="34" r="1.8" fill="#FFF5D0" opacity="0.12">
    <animate attributeName="opacity" values="0.1;0.18;0.11;0.16;0.1" dur="6s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="310" cy="84" rx="3.5" ry="1" fill="#4A3848" opacity="0.4"/>

  <!-- POTTED PLANT — x=345 -->
  <rect x="343" y="74" width="7" height="11" rx="2" fill="#3A2820" opacity="0.6"/>
  <ellipse cx="346" cy="71" rx="6" ry="5" fill="#2A6838" opacity="0.55">
    <animateTransform attributeName="transform" type="rotate" values="-1,346,78;1,346,78;-1,346,78" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- rug under desk area -->
  <rect x="150" y="86" width="52" height="5" rx="2" fill="#4A2840" opacity="0.15"/>

  <!-- dust in lamp light -->
  <circle cx="168" cy="54" r="0.5" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.22;0.12;0.16;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="58" to="46" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="175" cy="58" r="0.35" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.16;0.08;0" dur="5s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#2A1810"/>
      <stop offset="100%" stop-color="#201208"/>
    </linearGradient>
    <radialGradient id="lofiKitFlame" cx="0.52" cy="0.55" r="0.2">
      <stop offset="0%" stop-color="#FF8040" stop-opacity="0.28"/>
      <stop offset="40%" stop-color="#E06020" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#E06020" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiKitOverhead" cx="0.5" cy="0.02" r="0.5">
      <stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiKitWindow" cx="0.14" cy="0.22" r="0.16">
      <stop offset="0%" stop-color="#C0D8E8" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#C0D8E8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + light layers -->
  <rect width="400" height="100" fill="url(#lofiKitBg)"/>
  <rect width="400" height="100" fill="url(#lofiKitOverhead)"/>
  <rect width="400" height="100" fill="url(#lofiKitWindow)"/>
  <rect width="400" height="100" fill="url(#lofiKitFlame)">
    <animate attributeName="opacity" values="0.5;1;0.6;0.9;0.55;0.85;0.5" dur="1.5s" repeatCount="indefinite"/>
  </rect>

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#2A1C10" opacity="0.35"/>

  <!-- floor — tile pattern -->
  <rect x="0" y="85" width="400" height="15" fill="#1A1208" opacity="0.75"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#4A3420" stroke-width="0.5" opacity="0.5"/>
  <line x1="0" y1="92" x2="400" y2="92" stroke="#2E2010" stroke-width="0.3" opacity="0.18"/>
  <line x1="50" y1="85" x2="50" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="100" y1="85" x2="100" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="150" y1="85" x2="150" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="200" y1="85" x2="200" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="250" y1="85" x2="250" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="300" y1="85" x2="300" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="350" y1="85" x2="350" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>

  <!-- WINDOW above sink — 26W × 26H, x=44 -->
  <rect x="44" y="14" width="26" height="26" rx="1.5" fill="#2A3A4A" opacity="0.55"/>
  <rect x="46" y="16" width="10" height="22" fill="#304858" opacity="0.5"/>
  <rect x="58" y="16" width="10" height="22" fill="#304858" opacity="0.5"/>
  <rect x="46" y="16" width="22" height="22" fill="#C0D8E8" opacity="0.05">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.06;0.04" dur="8s" repeatCount="indefinite"/>
  </rect>

  <!-- COUNTER RUN 1 — sink area, 68W, x=36, surface at y=57 -->
  <rect x="36" y="57" width="68" height="2.5" rx="0.5" fill="#A8A898" opacity="0.75"/>
  <rect x="36" y="57" width="68" height="1" fill="#B8B0A0" opacity="0.5"/>
  <rect x="36" y="59.5" width="68" height="22" rx="1" fill="#2D5540" opacity="0.65"/>
  <rect x="39" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="56" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="73" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="90" y="61.5" width="11" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="44" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>
  <rect x="61" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>
  <rect x="78" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>

  <!-- SINK — 15W -->
  <rect x="54" y="54.5" width="15" height="2.5" rx="1" fill="#788890" opacity="0.6"/>
  <line x1="61" y1="54" x2="61" y2="42" stroke="#909CA0" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  <line x1="61" y1="42" x2="64" y2="42" stroke="#909CA0" stroke-width="0.8" stroke-linecap="round" opacity="0.45"/>
  <circle cx="64" cy="55" r="0.5" fill="#6AAAD0" opacity="0">
    <animate attributeName="opacity" values="0;0;0.35;0.25;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="43" to="55" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- UPPER CABINETS (left) -->
  <rect x="36" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <rect x="82" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <!-- backsplash -->
  <g stroke="#4A3420" stroke-width="0.2" opacity="0.15">
    <line x1="36" y1="35" x2="104" y2="35"/>
    <line x1="36" y1="45" x2="104" y2="45"/>
  </g>

  <!-- PENDANT LIGHT — above gap between counters -->
  <line x1="135" y1="0" x2="135" y2="14" stroke="#5A5A50" stroke-width="0.5" opacity="0.45"/>
  <ellipse cx="135" cy="15" rx="4" ry="2.5" fill="#FFE8C0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.13;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="135" cy="15" r="1.5" fill="#FFF5D0" opacity="0.12">
    <animate attributeName="opacity" values="0.1;0.16;0.11;0.14;0.1" dur="5s" repeatCount="indefinite"/>
  </circle>

  <!-- COUNTER RUN 2 — stove area, 70W, x=172, surface at y=57 -->
  <rect x="172" y="57" width="70" height="2.5" rx="0.5" fill="#A8A898" opacity="0.75"/>
  <rect x="172" y="57" width="70" height="1" fill="#B8B0A0" opacity="0.5"/>
  <rect x="172" y="59.5" width="70" height="22" rx="1" fill="#2D5540" opacity="0.65"/>
  <rect x="175" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="217" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="234" y="61.5" width="5" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="180" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>
  <rect x="222" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>

  <!-- STOVE — 22W on counter -->
  <rect x="192" y="57" width="22" height="2.5" rx="0.5" fill="#484848" opacity="0.7"/>
  <ellipse cx="199" cy="56" rx="3" ry="1.5" fill="#302828" opacity="0.7"/>
  <ellipse cx="210" cy="56" rx="3" ry="1.5" fill="#302828" opacity="0.7"/>
  <ellipse cx="199" cy="55.5" rx="2.5" ry="1.2" fill="#FF8040">
    <animate attributeName="opacity" values="0.3;0.6;0.35;0.55;0.3" dur="0.5s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="2;3;2.2;2.8;2" dur="0.7s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="210" cy="55.5" rx="2.5" ry="1.2" fill="#FF8040">
    <animate attributeName="opacity" values="0.35;0.55;0.3;0.5;0.35" dur="0.6s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="rx" values="2.2;3;2;2.8;2.2" dur="0.8s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <rect x="187" y="32" width="30" height="18" fill="#FF8040" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="0.8s" repeatCount="indefinite"/>
  </rect>

  <!-- RANGE HOOD -->
  <rect x="190" y="22" width="26" height="8" rx="1" fill="#606868" opacity="0.55"/>
  <rect x="193" y="30" width="20" height="1.5" rx="0.5" fill="#585858" opacity="0.45"/>

  <!-- UPPER CABINETS (right) -->
  <rect x="172" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <rect x="220" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <!-- backsplash -->
  <g stroke="#4A3420" stroke-width="0.2" opacity="0.15">
    <line x1="172" y1="35" x2="242" y2="35"/>
    <line x1="172" y1="45" x2="242" y2="45"/>
  </g>

  <!-- POT on burner -->
  <rect x="196" y="48" width="6" height="7" rx="1.5" fill="#687078" opacity="0.75"/>
  <rect x="195" y="47" width="8" height="1.5" rx="0.6" fill="#788890" opacity="0.65"/>
  <rect x="195" y="46" width="8" height="1.2" rx="0.6" fill="#8898A0" opacity="0.55">
    <animate attributeName="y" values="46;45.3;46;45.6;46" dur="0.7s" repeatCount="indefinite"/>
  </rect>
  <!-- steam -->
  <path d="M198,44 Q197,39 199,34" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.22;0.15;0.08;0" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M198,44 Q197,39 199,34;M198,44 Q195,36 198,28;M198,44 Q200,38 197,32;M198,44 Q197,39 199,34" dur="2.5s" repeatCount="indefinite"/>
  </path>
  <path d="M200,44 Q201,38 199,32" fill="none" stroke="#FFF" stroke-width="0.6" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.12;0.05;0" dur="3s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="d" values="M200,44 Q201,38 199,32;M200,44 Q202,34 199,26;M200,44 Q199,36 201,30;M200,44 Q201,38 199,32" dur="3s" repeatCount="indefinite" begin="0.8s"/>
  </path>

  <!-- FRIDGE — 20W × 52H, x=258 -->
  <rect x="258" y="33" width="20" height="52" rx="1.5" fill="#607078" opacity="0.6"/>
  <line x1="258" y1="55" x2="278" y2="55" stroke="#505858" stroke-width="0.4" opacity="0.5"/>
  <rect x="274" y="39" width="1.5" height="8" rx="0.5" fill="#808888" opacity="0.5"/>
  <rect x="274" y="62" width="1.5" height="8" rx="0.5" fill="#808888" opacity="0.5"/>

  <!-- SMALL TABLE — 26W, x=300 -->
  <rect x="300" y="72" width="26" height="2" rx="0.5" fill="#8B6840" opacity="0.65"/>
  <rect x="303" y="74" width="2" height="11" rx="0.5" fill="#6A5030" opacity="0.5"/>
  <rect x="323" y="74" width="2" height="11" rx="0.5" fill="#6A5030" opacity="0.5"/>
  <!-- items on table -->
  <rect x="308" y="69" width="2" height="3" rx="0.5" fill="#A05830" opacity="0.55"/>
  <rect x="315" y="70" width="4" height="2.5" rx="0.5" fill="#788890" opacity="0.45"/>

  <!-- WALL SHELF with jars — x=298 -->
  <rect x="298" y="28" width="30" height="1.5" rx="0.5" fill="#6A5030" opacity="0.5"/>
  <rect x="301" y="20" width="4" height="8" rx="1" fill="#788890" opacity="0.35"/>
  <rect x="307" y="22" width="3.5" height="6" rx="0.8" fill="#A07838" opacity="0.35"/>
  <rect x="313" y="21" width="3" height="7" rx="0.8" fill="#689088" opacity="0.3"/>
  <rect x="319" y="23" width="4" height="5" rx="1" fill="#A05830" opacity="0.3"/>

  <!-- HANGING UTENSILS — x=350 -->
  <line x1="350" y1="20" x2="350" y2="34" stroke="#888888" stroke-width="0.5" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" values="-1,350,20;1,350,20;-1,350,20" dur="4s" repeatCount="indefinite"/>
  </line>
  <line x1="355" y1="20" x2="355" y2="36" stroke="#888888" stroke-width="0.5" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" values="0.8,355,20;-0.8,355,20;0.8,355,20" dur="3.5s" repeatCount="indefinite"/>
  </line>
  <line x1="360" y1="20" x2="360" y2="32" stroke="#888888" stroke-width="0.5" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" values="-0.6,360,20;1,360,20;-0.6,360,20" dur="4.5s" repeatCount="indefinite"/>
  </line>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#1C0E35"/>
      <stop offset="100%" stop-color="#140C28"/>
    </linearGradient>
    <radialGradient id="lofiLivTV" cx="0.6" cy="0.45" r="0.25">
      <stop offset="0%" stop-color="#5A90D0" stop-opacity="0.22"/>
      <stop offset="50%" stop-color="#5A90D0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#5A90D0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.47" cy="0.35" r="0.2">
      <stop offset="0%" stop-color="#FFD080" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#FFBA60" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#FFBA60" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiLivCandle" cx="0.28" cy="0.78" r="0.1">
      <stop offset="0%" stop-color="#FFD040" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#FFD040" stop-opacity="0"/>
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
  <rect width="400" height="100" fill="url(#lofiLivCandle)">
    <animate attributeName="opacity" values="0.4;0.8;0.3;0.7;0.5;0.9;0.4" dur="1.5s" repeatCount="indefinite"/>
  </rect>

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#180E28" opacity="0.35"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0E0A1E" opacity="0.75"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A2848" stroke-width="0.5" opacity="0.45"/>
  <line x1="0" y1="90" x2="400" y2="90" stroke="#201838" stroke-width="0.3" opacity="0.15"/>
  <line x1="0" y1="95" x2="400" y2="95" stroke="#201838" stroke-width="0.3" opacity="0.1"/>
  <line x1="70" y1="85" x2="70" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="150" y1="85" x2="150" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="230" y1="85" x2="230" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="310" y1="85" x2="310" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <!-- area rug -->
  <rect x="60" y="86" width="70" height="6" rx="2" fill="#8A3838" opacity="0.15"/>

  <!-- TALL BOOKSHELF — x=38, 18W × 46H -->
  <rect x="38" y="39" width="18" height="46" rx="1" fill="#3A2828" opacity="0.7"/>
  <rect x="40" y="42" width="14" height="9" fill="#2E2020" opacity="0.55"/>
  <rect x="40" y="54" width="14" height="9" fill="#2E2020" opacity="0.55"/>
  <rect x="40" y="66" width="14" height="9" fill="#2E2020" opacity="0.55"/>
  <rect x="40" y="78" width="14" height="5" fill="#2E2020" opacity="0.55"/>
  <rect x="42" y="43" width="3" height="7" fill="#E85050" opacity="0.5"/>
  <rect x="46" y="44" width="2.5" height="6" fill="#40C060" opacity="0.4"/>
  <rect x="49.5" y="43" width="3" height="7" fill="#5090E0" opacity="0.4"/>
  <rect x="42" y="55" width="3.5" height="7" fill="#E8A830" opacity="0.4"/>
  <rect x="46.5" y="56" width="2.5" height="6" fill="#B060C0" opacity="0.35"/>
  <rect x="42" y="67" width="4" height="7" fill="#D88030" opacity="0.35"/>
  <rect x="47" y="68" width="3" height="6" fill="#5090C0" opacity="0.3"/>

  <!-- SIDE TABLE + LAMP — x=62 -->
  <rect x="62" y="72" width="10" height="2" rx="0.5" fill="#5A3828" opacity="0.6"/>
  <rect x="64" y="74" width="2" height="11" rx="0.5" fill="#4A2818" opacity="0.45"/>
  <rect x="69" y="74" width="2" height="11" rx="0.5" fill="#4A2818" opacity="0.45"/>
  <rect x="65" y="68" width="4" height="4" rx="1" fill="#4A3050" opacity="0.55"/>
  <ellipse cx="67" cy="67" rx="3" ry="2" fill="#FFE0A0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.13;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- SOFA — 64W, x=80 -->
  <rect x="80" y="59" width="64" height="4" rx="2" fill="#8A4828" opacity="0.7"/>
  <rect x="77" y="63" width="70" height="18" rx="3" fill="#6A3418" opacity="0.7"/>
  <rect x="81" y="64" width="19" height="15" rx="3" fill="#7A4020" opacity="0.55"/>
  <rect x="103" y="64" width="19" height="15" rx="3" fill="#7A4020" opacity="0.55"/>
  <rect x="125" y="64" width="19" height="15" rx="3" fill="#7A4020" opacity="0.55"/>
  <rect x="81" y="81" width="2.5" height="5" rx="0.5" fill="#5A2810" opacity="0.55"/>
  <rect x="141" y="81" width="2.5" height="5" rx="0.5" fill="#5A2810" opacity="0.55"/>
  <rect x="74" y="60" width="7" height="22" rx="3" fill="#6A3418" opacity="0.6"/>
  <rect x="144" y="60" width="7" height="22" rx="3" fill="#6A3418" opacity="0.6"/>
  <rect x="84" y="57" width="9" height="7" rx="3" fill="#E8A830" opacity="0.45"/>
  <rect x="132" y="57" width="8" height="7" rx="3" fill="#5090E0" opacity="0.35"/>

  <!-- COFFEE TABLE — 30W, x=90 -->
  <rect x="90" y="79" width="30" height="2.5" rx="0.8" fill="#6A4828" opacity="0.6"/>
  <rect x="93" y="81.5" width="2" height="5" rx="0.5" fill="#5A3818" opacity="0.45"/>
  <rect x="117" y="81.5" width="2" height="5" rx="0.5" fill="#5A3818" opacity="0.45"/>
  <!-- candle -->
  <rect x="103" y="76.5" width="2" height="3" rx="0.3" fill="#E8D8B0" opacity="0.5"/>
  <ellipse cx="104" cy="75.5" rx="1.2" ry="1.5" fill="#FFD040" opacity="0">
    <animate attributeName="opacity" values="0.2;0.45;0.15;0.4;0.25;0.38;0.2" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="ry" values="1.5;2;1.2;1.8;1.5" dur="1.2s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="104" cy="75" r="0.6" fill="#FFF5D0" opacity="0">
    <animate attributeName="opacity" values="0.15;0.4;0.12;0.35;0.18;0.3;0.15" dur="1.5s" repeatCount="indefinite"/>
  </circle>

  <!-- WALL ART — above sofa -->
  <rect x="100" y="24" width="16" height="12" rx="1" fill="#241838" opacity="0.5"/>
  <rect x="101.5" y="25.5" width="13" height="9" fill="#342850" opacity="0.4"/>

  <!-- FLOOR LAMP — x=185 -->
  <line x1="185" y1="35" x2="185" y2="82" stroke="#4A3858" stroke-width="1" opacity="0.6"/>
  <ellipse cx="185" cy="33" rx="5" ry="3.5" fill="#FFE0A0" opacity="0.22">
    <animate attributeName="opacity" values="0.18;0.28;0.2;0.25;0.18" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="185" cy="33" r="2" fill="#FFF5D0" opacity="0.2">
    <animate attributeName="opacity" values="0.16;0.25;0.18;0.22;0.16" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="185" cy="84" rx="4" ry="1.5" fill="#4A3858" opacity="0.4"/>
  <ellipse cx="185" cy="88" rx="12" ry="3" fill="#FFE0A0" opacity="0.03">
    <animate attributeName="opacity" values="0.02;0.04;0.025;0.035;0.02" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- TV — 35W × 20H, x=225 -->
  <rect x="225" y="38" width="35" height="20" rx="1.5" fill="#0E0E1E" opacity="0.9"/>
  <rect x="227" y="40" width="31" height="16" rx="1" fill="#1A2A4A">
    <animate attributeName="fill" values="#1A2A4A;#2A1A4A;#1A4A3A;#3A2A1A;#1A2A4A" dur="12s" repeatCount="indefinite"/>
  </rect>
  <rect x="227" y="40" width="31" height="16" rx="1" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0.04;0.1;0.05;0.08;0.04" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall -->
  <rect x="215" y="14" width="55" height="28" rx="3" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="3s" repeatCount="indefinite"/>
  </rect>
  <rect x="220" y="85" width="50" height="8" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.008;0.02;0.01;0.015;0.008" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV console -->
  <rect x="223" y="58" width="38" height="5" rx="1" fill="#4A3020" opacity="0.65"/>
  <rect x="226" y="63" width="3" height="22" rx="0.8" fill="#3A2010" opacity="0.5"/>
  <rect x="255" y="63" width="3" height="22" rx="0.8" fill="#3A2010" opacity="0.5"/>

  <!-- WINDOW — 26W × 34H, x=275 -->
  <rect x="275" y="10" width="26" height="34" rx="1.5" fill="#2A2048" opacity="0.5"/>
  <rect x="277" y="12" width="10" height="30" fill="#302858" opacity="0.45"/>
  <rect x="289" y="12" width="10" height="30" fill="#302858" opacity="0.45"/>
  <rect x="275" y="10" width="3.5" height="34" fill="#382858" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="0,277,10;0.8,277,10;-0.4,277,10;0,277,10" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect x="297.5" y="10" width="3.5" height="34" fill="#382858" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="0,299,10;-0.6,299,10;0.5,299,10;0,299,10" dur="5.5s" repeatCount="indefinite"/>
  </rect>

  <!-- READING CHAIR — x=320, 16W -->
  <rect x="320" y="62" width="16" height="4" rx="2" fill="#5A3040" opacity="0.55"/>
  <rect x="318" y="66" width="20" height="16" rx="3" fill="#4A2030" opacity="0.55"/>
  <rect x="320" y="82" width="2" height="4" rx="0.5" fill="#3A1820" opacity="0.45"/>
  <rect x="334" y="82" width="2" height="4" rx="0.5" fill="#3A1820" opacity="0.45"/>
  <rect x="324" y="59" width="7" height="5" rx="2" fill="#6A4870" opacity="0.35"/>

  <!-- PLANT — x=352 -->
  <rect x="350" y="72" width="7" height="13" rx="2" fill="#3A2820" opacity="0.55"/>
  <ellipse cx="353" cy="69" rx="6" ry="5" fill="#2A6838" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" values="-1.5,353,78;1.5,353,78;-1.5,353,78" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dust in lamp light -->
  <circle cx="182" cy="48" r="0.4" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0.15;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="52" to="40" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="190" cy="54" r="0.35" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.16;0.08;0" dur="6s" repeatCount="indefinite" begin="2.5s"/>
    <animate attributeName="cy" from="58" to="46" dur="6s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedBg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#141035"/>
      <stop offset="100%" stop-color="#181240"/>
    </linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.14" cy="0.12" r="0.25">
      <stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.22"/>
      <stop offset="40%" stop-color="#C0B8A0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#C0B8A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.45" cy="0.55" r="0.15">
      <stop offset="0%" stop-color="#F0D080" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#F0D080" stop-opacity="0.06"/>
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
  <rect x="0" y="82" width="400" height="3" fill="#1A1235" opacity="0.35"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0E0A22" opacity="0.75"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#302850" stroke-width="0.3" opacity="0.4"/>
  <line x1="0" y1="90" x2="400" y2="90" stroke="#201840" stroke-width="0.3" opacity="0.14"/>
  <line x1="0" y1="95" x2="400" y2="95" stroke="#201840" stroke-width="0.3" opacity="0.1"/>
  <line x1="90" y1="85" x2="90" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <line x1="180" y1="85" x2="180" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <line x1="270" y1="85" x2="270" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <line x1="360" y1="85" x2="360" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <!-- bedside rug -->
  <rect x="160" y="86" width="40" height="5" rx="2" fill="#5A3858" opacity="0.15"/>

  <!-- WINDOW — 28W × 35H, x=38, night sky -->
  <rect x="38" y="10" width="28" height="35" rx="1.5" fill="#1A1448" opacity="0.7"/>
  <rect x="40" y="12" width="11" height="31" fill="#1E1850" opacity="0.7"/>
  <rect x="53" y="12" width="11" height="31" fill="#1E1850" opacity="0.7"/>
  <rect x="38" y="10" width="3.5" height="35" fill="#2E2060" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="0,40,10;0.5,40,10;-0.3,40,10;0,40,10" dur="7s" repeatCount="indefinite"/>
  </rect>
  <rect x="62.5" y="10" width="3.5" height="35" fill="#2E2060" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="0,64,10;-0.4,64,10;0.3,64,10;0,64,10" dur="7.5s" repeatCount="indefinite"/>
  </rect>
  <!-- stars -->
  <circle cx="44" cy="15" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.7;0.2;0.6;0.15" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="50" cy="22" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.6;0.15;0.5;0.2" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="57" cy="14" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.65;0.2;0.55;0.15" dur="4s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="62" cy="21" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.5;0.15;0.4;0.1" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="45" cy="28" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.4;0.12;0.3;0.08" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <!-- moon -->
  <circle cx="60" cy="17" r="3" fill="#E8E0C8" opacity="0.5">
    <animate attributeName="opacity" values="0.45;0.6;0.48;0.55;0.45" dur="6s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="55" cy="18" rx="6" ry="2.5" fill="#1E1850" opacity="0">
    <animate attributeName="opacity" values="0;0;0.45;0.55;0.45;0;0" dur="18s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="42" to="68" dur="18s" repeatCount="indefinite"/>
  </ellipse>
  <!-- moonbeam -->
  <polygon points="40,45 66,45 76,100 22,100" fill="#C8C0E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.035;0.02;0.03;0.015" dur="8s" repeatCount="indefinite"/>
  </polygon>

  <!-- NIGHTSTAND 1 — 12W, x=80 -->
  <rect x="80" y="67" width="12" height="18" rx="1" fill="#2E2040" opacity="0.65"/>
  <rect x="82" y="69" width="8" height="6" rx="0.5" fill="#3A2850" opacity="0.5"/>
  <rect x="82" y="77" width="8" height="6" rx="0.5" fill="#3A2850" opacity="0.5"/>

  <!-- BED — headboard 3W, mattress 61W, footboard 3W -->
  <rect x="92" y="48" width="3" height="37" rx="1" fill="#5A3828" opacity="0.8"/>
  <rect x="95" y="67" width="61" height="18" rx="2" fill="#2E2058" opacity="0.7"/>
  <rect x="97" y="64" width="58" height="18" rx="2.5" fill="#3E3070" opacity="0.65"/>
  <line x1="100" y1="70" x2="152" y2="70" stroke="#504888" stroke-width="0.4" opacity="0.3"/>
  <line x1="100" y1="76" x2="152" y2="76" stroke="#504888" stroke-width="0.3" opacity="0.2"/>
  <ellipse cx="105" cy="66" rx="8" ry="4" fill="#E0D8A8" opacity="0.3"/>
  <ellipse cx="105" cy="69" rx="7" ry="3.5" fill="#D8D0A0" opacity="0.25"/>
  <ellipse cx="117" cy="67" rx="7" ry="3.5" fill="#D8D0A0" opacity="0.22"/>
  <rect x="156" y="67" width="3" height="18" rx="1" fill="#5A3828" opacity="0.6"/>
  <rect x="93" y="84" width="2.5" height="4" rx="0.5" fill="#5A3828" opacity="0.55"/>
  <rect x="155" y="84" width="2.5" height="4" rx="0.5" fill="#5A3828" opacity="0.55"/>

  <!-- WALL ART above bed -->
  <rect x="115" y="24" width="16" height="12" rx="0.8" fill="#201840" opacity="0.45"/>
  <rect x="116.5" y="25.5" width="13" height="9" fill="#2A2050" opacity="0.35"/>

  <!-- NIGHTSTAND 2 + LAMP — x=168 -->
  <rect x="168" y="65" width="14" height="20" rx="1.5" fill="#2E2040" opacity="0.65"/>
  <rect x="170" y="67" width="10" height="7" rx="0.8" fill="#3A2850" opacity="0.5"/>
  <rect x="170" y="76" width="10" height="7" rx="0.8" fill="#3A2850" opacity="0.5"/>
  <rect x="172" y="58" width="6" height="7" rx="1.5" fill="#483868" opacity="0.65"/>
  <ellipse cx="175" cy="56" rx="4" ry="2.5" fill="#F0D080" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.32;0.22;0.28;0.2" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="175" cy="56" r="1.5" fill="#FFF5D0" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.32;0.22;0.28;0.2" dur="4s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="175" cy="65" rx="8" ry="2.5" fill="#F0D080" opacity="0.03">
    <animate attributeName="opacity" values="0.02;0.04;0.025;0.035;0.02" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- DRESSER — 30W × 24H, x=235 -->
  <rect x="235" y="61" width="30" height="24" rx="1.5" fill="#2E2040" opacity="0.6"/>
  <rect x="237" y="64" width="26" height="8" rx="0.8" fill="#3A2850" opacity="0.45"/>
  <rect x="237" y="75" width="26" height="8" rx="0.8" fill="#3A2850" opacity="0.45"/>
  <rect x="247" y="67" width="6" height="0.8" rx="0.3" fill="#5A4870" opacity="0.45"/>
  <rect x="247" y="78" width="6" height="0.8" rx="0.3" fill="#5A4870" opacity="0.45"/>

  <!-- MIRROR above dresser -->
  <rect x="242" y="24" width="16" height="22" rx="1" fill="#201840" opacity="0.5"/>
  <rect x="243.5" y="25.5" width="13" height="19" fill="#2A2058" opacity="0.4"/>
  <line x1="246" y1="30" x2="253" y2="30" stroke="#483870" stroke-width="0.3" opacity="0.2"/>

  <!-- WARDROBE — 24W × 52H, x=280 -->
  <rect x="280" y="33" width="24" height="52" rx="1.5" fill="#2E2040" opacity="0.65"/>
  <line x1="292" y1="33" x2="292" y2="85" stroke="#2A1E40" stroke-width="0.4" opacity="0.4"/>
  <rect x="289" y="55" width="1.5" height="5" rx="0.5" fill="#5A4870" opacity="0.45"/>
  <rect x="293.5" y="55" width="1.5" height="5" rx="0.5" fill="#5A4870" opacity="0.45"/>

  <!-- READING CHAIR — x=322, 16W -->
  <rect x="322" y="62" width="16" height="4" rx="2" fill="#402850" opacity="0.55"/>
  <rect x="320" y="66" width="20" height="16" rx="3" fill="#301840" opacity="0.55"/>
  <rect x="322" y="82" width="2" height="4" rx="0.5" fill="#201030" opacity="0.4"/>
  <rect x="336" y="82" width="2" height="4" rx="0.5" fill="#201030" opacity="0.4"/>
  <rect x="324" y="59" width="7" height="5" rx="2" fill="#6A4878" opacity="0.35"/>

  <!-- PLANT — x=355 -->
  <rect x="353" y="72" width="7" height="13" rx="2" fill="#2A3828" opacity="0.5"/>
  <ellipse cx="356" cy="69" rx="6" ry="5" fill="#1E5038" opacity="0.45">
    <animateTransform attributeName="transform" type="rotate" values="-1,356,78;1,356,78;-1,356,78" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dust in moonbeam -->
  <circle cx="55" cy="58" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0.15;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="48" cy="68" r="0.4" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.16;0.08;0.12;0" dur="6s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="72" to="55" dur="6s" repeatCount="indefinite" begin="2s"/>
  </circle>
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
