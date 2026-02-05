/**
 * Panoramic SVG room backgrounds designed for 80px-tall card header
 * ViewBox: 400x100 — wide aspect ratio fills header without cropping
 * preserveAspectRatio="xMidYMid slice" ensures full coverage
 * Gradient IDs prefixed with 'lofi' to avoid collision
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiOffW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B6A6"/><stop offset="100%" stop-color="#B8A696"/></linearGradient>
    <linearGradient id="lofiOffF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#A89078"/><stop offset="100%" stop-color="#907860"/></linearGradient>
    <radialGradient id="lofiOffG" cx="0.6" cy="0.3" r="0.5"><stop offset="0%" stop-color="#FFF5E0" stop-opacity="0.2"/><stop offset="100%" stop-color="#FFF5E0" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiOffDesk" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B7355"/><stop offset="100%" stop-color="#7A6245"/></linearGradient>
    <linearGradient id="lofiOffScreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3A5A8A"/><stop offset="100%" stop-color="#2A4A6A"/></linearGradient>
    <radialGradient id="lofiOffLamp" cx="0.5" cy="0.4" r="0.5"><stop offset="0%" stop-color="#FFF5D0" stop-opacity="0.35"/><stop offset="100%" stop-color="#FFF5D0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- wall & floor -->
  <rect width="400" height="58" fill="url(#lofiOffW)"/>
  <rect y="58" width="400" height="42" fill="url(#lofiOffF)"/>
  <rect y="56" width="400" height="3" fill="#9A8A78" opacity="0.5"/>
  <line x1="0" y1="70" x2="400" y2="70" stroke="#806848" stroke-width="0.5" opacity="0.2"/>
  <line x1="0" y1="82" x2="400" y2="82" stroke="#806848" stroke-width="0.5" opacity="0.2"/>
  <line x1="0" y1="94" x2="400" y2="94" stroke="#806848" stroke-width="0.5" opacity="0.2"/>
  <rect width="400" height="100" fill="url(#lofiOffG)"/>
  <!-- window -->
  <rect x="15" y="5" width="50" height="42" rx="2" fill="#D4C4B0" stroke="#A09080" stroke-width="1.2"/>
  <rect x="18" y="8" width="20" height="36" rx="1" fill="#A8D8EA" opacity="0.5"/>
  <rect x="42" y="8" width="20" height="36" rx="1" fill="#A8D8EA" opacity="0.5"/>
  <line x1="40" y1="8" x2="40" y2="44" stroke="#B0A090" stroke-width="1.2"/>
  <line x1="18" y1="26" x2="62" y2="26" stroke="#B0A090" stroke-width="0.8"/>
  <!-- curtains -->
  <rect x="10" y="3" width="8" height="46" rx="1.5" fill="#C87070" opacity="0.3"/>
  <rect x="63" y="3" width="8" height="46" rx="1.5" fill="#C87070" opacity="0.3"/>
  <!-- window light beam -->
  <polygon points="18,47 62,47 80,100 0,100" fill="#FFF5D0" opacity="0.04">
    <animate attributeName="opacity" values="0.03;0.06;0.04;0.05;0.03" dur="6s" repeatCount="indefinite"/>
  </polygon>
  <!-- wall clock -->
  <circle cx="100" cy="20" r="10" fill="#D4C4B0" stroke="#8A7A68" stroke-width="0.8"/>
  <line x1="100" y1="20" x2="100" y2="13" stroke="#4A3A28" stroke-width="0.8"/>
  <line x1="100" y1="20" x2="105" y2="20" stroke="#4A3A28" stroke-width="0.6">
    <animateTransform attributeName="transform" type="rotate" from="0 100 20" to="360 100 20" dur="60s" repeatCount="indefinite"/>
  </line>
  <circle cx="100" cy="20" r="1.2" fill="#4A3A28"/>
  <!-- bookshelf -->
  <rect x="325" y="4" width="55" height="50" rx="2" fill="#7A6245" stroke="#6A5235" stroke-width="0.8"/>
  <rect x="328" y="7" width="49" height="13" rx="1" fill="#8B7355"/>
  <rect x="328" y="23" width="49" height="13" rx="1" fill="#8B7355"/>
  <rect x="328" y="39" width="49" height="13" rx="1" fill="#8B7355"/>
  <!-- books -->
  <rect x="331" y="8" width="4" height="11" rx="0.5" fill="#C87070" opacity="0.7"/>
  <rect x="336" y="9" width="3.5" height="10" rx="0.5" fill="#5B8D5E" opacity="0.7"/>
  <rect x="340" y="8" width="5" height="11" rx="0.5" fill="#5B8DBE" opacity="0.7"/>
  <rect x="346" y="9" width="3.5" height="10" rx="0.5" fill="#D4A040" opacity="0.7"/>
  <rect x="350" y="8" width="4" height="11" rx="0.5" fill="#8B5E8B" opacity="0.7"/>
  <rect x="356" y="9" width="5" height="10" rx="0.5" fill="#C87070" opacity="0.6"/>
  <rect x="331" y="24" width="5" height="11" rx="0.5" fill="#D4A040" opacity="0.7"/>
  <rect x="337" y="25" width="3.5" height="10" rx="0.5" fill="#5B8DBE" opacity="0.6"/>
  <rect x="341" y="24" width="4" height="11" rx="0.5" fill="#8B5E8B" opacity="0.6"/>
  <rect x="346" y="25" width="5" height="10" rx="0.5" fill="#5B8D5E" opacity="0.6"/>
  <!-- plant on shelf -->
  <rect x="362" y="43" width="7" height="8" rx="1" fill="#8B6548"/>
  <ellipse cx="365" cy="41" rx="6" ry="4" fill="#5B8D5E" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" values="-1,365,47;1,365,47;-1,365,47" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- desk spanning center -->
  <rect x="120" y="52" width="170" height="5" rx="1" fill="url(#lofiOffDesk)"/>
  <rect x="125" y="57" width="5" height="30" rx="1" fill="#7A6245"/>
  <rect x="280" y="57" width="5" height="30" rx="1" fill="#7A6245"/>
  <rect x="128" y="72" width="155" height="2.5" rx="1" fill="#6A5235" opacity="0.4"/>
  <!-- monitor -->
  <rect x="185" y="22" width="52" height="30" rx="2" fill="#2A2A3E" stroke="#1A1A2E" stroke-width="0.8"/>
  <rect x="188" y="25" width="46" height="24" rx="1" fill="url(#lofiOffScreen)">
    <animate attributeName="opacity" values="0.95;1;0.92;1;0.97;1;0.95" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- code lines on screen -->
  <g opacity="0.5">
    <line x1="191" y1="30" x2="215" y2="30" stroke="#6A9AC0" stroke-width="0.8">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
    </line>
    <line x1="191" y1="34" x2="225" y2="34" stroke="#6A9AC0" stroke-width="0.8">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.3s" repeatCount="indefinite"/>
    </line>
    <line x1="191" y1="38" x2="210" y2="38" stroke="#9AC06A" stroke-width="0.8">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.8s" repeatCount="indefinite"/>
    </line>
    <line x1="191" y1="42" x2="220" y2="42" stroke="#C0906A" stroke-width="0.8">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite"/>
    </line>
    <rect x="221" y="33" width="2" height="2.5" fill="#FFF" opacity="0">
      <animate attributeName="opacity" values="0;0.8;0.8;0" dur="1s" repeatCount="indefinite"/>
    </rect>
  </g>
  <!-- monitor stand -->
  <rect x="206" y="52" width="10" height="2.5" rx="0.5" fill="#2A2A3E"/>
  <rect x="201" y="53" width="20" height="1.5" rx="0.8" fill="#3A3A4E"/>
  <!-- screen glow on desk -->
  <ellipse cx="211" cy="55" rx="30" ry="4" fill="#4A7AAA" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.07;0.04" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- keyboard & mouse -->
  <rect x="192" y="55" width="36" height="3.5" rx="0.8" fill="#3A3A4E" opacity="0.7"/>
  <ellipse cx="238" cy="56" rx="3.5" ry="2.5" fill="#3A3A4E" opacity="0.6"/>
  <!-- desk lamp -->
  <line x1="145" y1="52" x2="150" y2="35" stroke="#4A4A5E" stroke-width="1.2"/>
  <line x1="150" y1="35" x2="157" y2="32" stroke="#4A4A5E" stroke-width="1.2"/>
  <path d="M154 28 Q157 26 162 30 L160 33 Q155 31 153 30 Z" fill="#F0C040" opacity="0.5"/>
  <circle cx="157" cy="31" r="1.5" fill="#FFF5D0" opacity="0.4"/>
  <circle cx="155" cy="38" r="14" fill="url(#lofiOffLamp)">
    <animate attributeName="opacity" values="0.7;1;0.8;0.9;0.7" dur="5s" repeatCount="indefinite"/>
  </circle>
  <!-- chair -->
  <rect x="195" y="62" width="28" height="20" rx="3" fill="#4A4A5E" opacity="0.4"/>
  <rect x="207" y="82" width="4" height="8" rx="1" fill="#3A3A4E" opacity="0.35"/>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D4C8B0"/><stop offset="100%" stop-color="#C4B8A0"/></linearGradient>
    <linearGradient id="lofiKitF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B898"/><stop offset="100%" stop-color="#B0A078"/></linearGradient>
    <radialGradient id="lofiKitG" cx="0.4" cy="0.35" r="0.4"><stop offset="0%" stop-color="#FFF8E8" stop-opacity="0.15"/><stop offset="100%" stop-color="#FFF8E8" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiKitCab" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8BA88B"/><stop offset="100%" stop-color="#6A886A"/></linearGradient>
    <linearGradient id="lofiKitCounter" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C0C0C0"/><stop offset="100%" stop-color="#A8A8A8"/></linearGradient>
  </defs>
  <!-- wall & floor -->
  <rect width="400" height="58" fill="url(#lofiKitW)"/>
  <rect y="58" width="400" height="42" fill="url(#lofiKitF)"/>
  <!-- tile backsplash -->
  <rect y="25" width="260" height="28" fill="#D8D0C0" opacity="0.35"/>
  <g stroke="#C8C0B0" stroke-width="0.4" opacity="0.35">
    <line x1="0" y1="30" x2="260" y2="30"/><line x1="0" y1="36" x2="260" y2="36"/>
    <line x1="0" y1="42" x2="260" y2="42"/><line x1="0" y1="48" x2="260" y2="48"/>
    <line x1="15" y1="25" x2="15" y2="53"/><line x1="30" y1="25" x2="30" y2="53"/>
    <line x1="45" y1="25" x2="45" y2="53"/><line x1="60" y1="25" x2="60" y2="53"/>
    <line x1="75" y1="25" x2="75" y2="53"/><line x1="90" y1="25" x2="90" y2="53"/>
    <line x1="105" y1="25" x2="105" y2="53"/><line x1="120" y1="25" x2="120" y2="53"/>
    <line x1="135" y1="25" x2="135" y2="53"/><line x1="150" y1="25" x2="150" y2="53"/>
    <line x1="165" y1="25" x2="165" y2="53"/><line x1="180" y1="25" x2="180" y2="53"/>
    <line x1="195" y1="25" x2="195" y2="53"/><line x1="210" y1="25" x2="210" y2="53"/>
    <line x1="225" y1="25" x2="225" y2="53"/><line x1="240" y1="25" x2="240" y2="53"/>
    <line x1="255" y1="25" x2="255" y2="53"/>
  </g>
  <!-- floor tiles -->
  <g stroke="#A09070" stroke-width="0.4" opacity="0.2">
    <line x1="0" y1="72" x2="400" y2="72"/><line x1="0" y1="86" x2="400" y2="86"/>
    <line x1="40" y1="58" x2="40" y2="100"/><line x1="80" y1="58" x2="80" y2="100"/>
    <line x1="120" y1="58" x2="120" y2="100"/><line x1="160" y1="58" x2="160" y2="100"/>
    <line x1="200" y1="58" x2="200" y2="100"/><line x1="240" y1="58" x2="240" y2="100"/>
    <line x1="280" y1="58" x2="280" y2="100"/><line x1="320" y1="58" x2="320" y2="100"/>
    <line x1="360" y1="58" x2="360" y2="100"/>
  </g>
  <rect width="400" height="100" fill="url(#lofiKitG)"/>
  <!-- upper cabinets -->
  <rect x="10" y="3" width="50" height="20" rx="1.5" fill="url(#lofiKitCab)" stroke="#5A785A" stroke-width="0.8"/>
  <rect x="12" y="5" width="22" height="16" rx="1" fill="#7A987A" opacity="0.4"/>
  <rect x="36" y="5" width="22" height="16" rx="1" fill="#7A987A" opacity="0.4"/>
  <circle cx="32" cy="13" r="1" fill="#B0B0A0"/><circle cx="38" cy="13" r="1" fill="#B0B0A0"/>
  <rect x="70" y="3" width="50" height="20" rx="1.5" fill="url(#lofiKitCab)" stroke="#5A785A" stroke-width="0.8"/>
  <rect x="72" y="5" width="22" height="16" rx="1" fill="#7A987A" opacity="0.4"/>
  <rect x="96" y="5" width="22" height="16" rx="1" fill="#7A987A" opacity="0.4"/>
  <circle cx="92" cy="13" r="1" fill="#B0B0A0"/><circle cx="98" cy="13" r="1" fill="#B0B0A0"/>
  <!-- range hood -->
  <rect x="175" y="5" width="50" height="14" rx="1.5" fill="#B0B0B0" opacity="0.45"/>
  <rect x="180" y="19" width="40" height="3" rx="1" fill="#A0A0A0" opacity="0.35"/>
  <!-- counter -->
  <rect x="5" y="52" width="255" height="4" rx="1" fill="url(#lofiKitCounter)"/>
  <!-- lower cabinets -->
  <rect x="5" y="56" width="255" height="32" rx="1.5" fill="url(#lofiKitCab)" opacity="0.6" stroke="#5A785A" stroke-width="0.4"/>
  <rect x="10" y="58" width="38" height="28" rx="1" fill="#7A987A" opacity="0.35"/>
  <rect x="52" y="58" width="38" height="28" rx="1" fill="#7A987A" opacity="0.35"/>
  <rect x="94" y="58" width="38" height="28" rx="1" fill="#7A987A" opacity="0.35"/>
  <rect x="136" y="58" width="38" height="28" rx="1" fill="#7A987A" opacity="0.35"/>
  <rect x="178" y="58" width="38" height="28" rx="1" fill="#7A987A" opacity="0.35"/>
  <rect x="220" y="58" width="38" height="28" rx="1" fill="#7A987A" opacity="0.35"/>
  <!-- cabinet handles -->
  <rect x="27" y="70" width="5" height="1.5" rx="0.5" fill="#B0B0A0" opacity="0.5"/>
  <rect x="69" y="70" width="5" height="1.5" rx="0.5" fill="#B0B0A0" opacity="0.5"/>
  <rect x="111" y="70" width="5" height="1.5" rx="0.5" fill="#B0B0A0" opacity="0.5"/>
  <rect x="153" y="70" width="5" height="1.5" rx="0.5" fill="#B0B0A0" opacity="0.5"/>
  <rect x="195" y="70" width="5" height="1.5" rx="0.5" fill="#B0B0A0" opacity="0.5"/>
  <rect x="237" y="70" width="5" height="1.5" rx="0.5" fill="#B0B0A0" opacity="0.5"/>
  <!-- stove with flame -->
  <rect x="180" y="48" width="40" height="4" rx="0.5" fill="#3A3A3E" opacity="0.35"/>
  <ellipse cx="192" cy="49" rx="8" ry="3" fill="#3A3A3E" opacity="0.35"/>
  <ellipse cx="212" cy="49" rx="8" ry="3" fill="#3A3A3E" opacity="0.35"/>
  <ellipse cx="192" cy="48" rx="4" ry="1.5" fill="#E08040">
    <animate attributeName="opacity" values="0.2;0.45;0.25;0.4;0.2" dur="0.6s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="3.5;4.5;4;4.5;3.5" dur="0.8s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="212" cy="48" rx="4" ry="1.5" fill="#E08040">
    <animate attributeName="opacity" values="0.25;0.4;0.2;0.35;0.25" dur="0.7s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="4;4.5;3.5;4;4" dur="0.9s" repeatCount="indefinite"/>
  </ellipse>
  <!-- flame glow on wall -->
  <ellipse cx="202" cy="38" rx="20" ry="10" fill="#E08040" opacity="0.03">
    <animate attributeName="opacity" values="0.02;0.05;0.03;0.04;0.02" dur="1s" repeatCount="indefinite"/>
  </ellipse>
  <!-- pot with steam -->
  <rect x="186" y="42" width="13" height="7" rx="1.5" fill="#6A6A7E" opacity="0.55"/>
  <rect x="184" y="40" width="17" height="2.5" rx="0.8" fill="#7A7A8E" opacity="0.45"/>
  <!-- steam wisps -->
  <circle cx="190" cy="38" r="1.5" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="38" to="22" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.12;0.1;0" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="190;187;191;188" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="193" cy="36" r="1.3" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="36" to="20" dur="2.8s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="opacity" values="0;0.1;0.08;0" dur="2.8s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="cx" values="193;196;192;195" dur="2.8s" repeatCount="indefinite" begin="0.7s"/>
  </circle>
  <circle cx="196" cy="37" r="1" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="37" to="24" dur="2.2s" repeatCount="indefinite" begin="1.3s"/>
    <animate attributeName="opacity" values="0;0.08;0.06;0" dur="2.2s" repeatCount="indefinite" begin="1.3s"/>
    <animate attributeName="cx" values="196;194;198;195" dur="2.2s" repeatCount="indefinite" begin="1.3s"/>
  </circle>
  <!-- sink -->
  <rect x="55" y="49" width="28" height="4" rx="1.5" fill="#8A8A9A" opacity="0.4"/>
  <line x1="69" y1="50" x2="69" y2="40" stroke="#A0A0B0" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="69" y1="40" x2="65" y2="42" stroke="#A0A0B0" stroke-width="1.5" stroke-linecap="round"/>
  <!-- fridge -->
  <rect x="300" y="5" width="50" height="82" rx="2" fill="#C8C8C8" stroke="#A8A8A8" stroke-width="0.8"/>
  <line x1="300" y1="42" x2="350" y2="42" stroke="#B0B0B0" stroke-width="0.8"/>
  <rect x="344" y="20" width="2.5" height="12" rx="0.8" fill="#A0A0A0"/>
  <rect x="344" y="50" width="2.5" height="12" rx="0.8" fill="#A0A0A0"/>
  <rect x="302" y="7" width="46" height="33" rx="1" fill="#E0F0FF" opacity="0.02">
    <animate attributeName="opacity" values="0.01;0.03;0.02;0.03;0.01" dur="8s" repeatCount="indefinite"/>
  </rect>
  <!-- fridge magnets -->
  <rect x="308" y="15" width="6" height="6" rx="0.8" fill="#E0A040" opacity="0.45"/>
  <rect x="320" y="18" width="5" height="5" rx="0.8" fill="#C87070" opacity="0.35"/>
  <rect x="330" y="14" width="5.5" height="5.5" rx="0.8" fill="#5B8DBE" opacity="0.35"/>
  <!-- window -->
  <rect x="280" y="3" width="40" height="30" rx="1.5" fill="#D4C4B0" stroke="#A09080" stroke-width="0.8"/>
  <rect x="282" y="5" width="16" height="26" rx="0.8" fill="#A8D8EA" opacity="0.4"/>
  <rect x="302" y="5" width="16" height="26" rx="0.8" fill="#A8D8EA" opacity="0.4"/>
  <line x1="300" y1="5" x2="300" y2="31" stroke="#B0A090" stroke-width="0.8"/>
  <!-- hanging utensils -->
  <g>
    <line x1="135" y1="25" x2="135" y2="38" stroke="#A0A0A0" stroke-width="0.8" opacity="0.45">
      <animateTransform attributeName="transform" type="rotate" values="-1,135,25;1,135,25;-1,135,25" dur="5s" repeatCount="indefinite"/>
    </line>
    <line x1="143" y1="25" x2="143" y2="40" stroke="#A0A0A0" stroke-width="0.8" opacity="0.45">
      <animateTransform attributeName="transform" type="rotate" values="1,143,25;-1,143,25;1,143,25" dur="4.5s" repeatCount="indefinite"/>
    </line>
    <line x1="151" y1="25" x2="151" y2="36" stroke="#A0A0A0" stroke-width="0.8" opacity="0.45">
      <animateTransform attributeName="transform" type="rotate" values="-0.5,151,25;0.5,151,25;-0.5,151,25" dur="5.5s" repeatCount="indefinite"/>
    </line>
  </g>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D8C8A8"/><stop offset="100%" stop-color="#C8B898"/></linearGradient>
    <linearGradient id="lofiLivF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B09068"/><stop offset="100%" stop-color="#987850"/></linearGradient>
    <radialGradient id="lofiLivG" cx="0.5" cy="0.45" r="0.45"><stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.2"/><stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiLivCouch" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B5040"/><stop offset="100%" stop-color="#6A3830"/></linearGradient>
    <linearGradient id="lofiLivTV" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2A2A40"/><stop offset="100%" stop-color="#1A1A30"/></linearGradient>
    <radialGradient id="lofiLivLamp" cx="0.5" cy="0.3" r="0.5"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- wall & floor -->
  <rect width="400" height="58" fill="url(#lofiLivW)"/>
  <rect y="58" width="400" height="42" fill="url(#lofiLivF)"/>
  <rect y="56" width="400" height="2.5" fill="#9A8A70" opacity="0.4"/>
  <line x1="0" y1="72" x2="400" y2="72" stroke="#8A7048" stroke-width="0.4" opacity="0.2"/>
  <line x1="0" y1="86" x2="400" y2="86" stroke="#8A7048" stroke-width="0.4" opacity="0.2"/>
  <rect width="400" height="100" fill="url(#lofiLivG)"/>
  <!-- window -->
  <rect x="130" y="3" width="70" height="42" rx="2" fill="#D4C4B0" stroke="#A09080" stroke-width="1"/>
  <rect x="133" y="6" width="30" height="36" rx="1" fill="#A8D8EA" opacity="0.4"/>
  <rect x="167" y="6" width="30" height="36" rx="1" fill="#A8D8EA" opacity="0.4"/>
  <line x1="165" y1="6" x2="165" y2="42" stroke="#B0A090" stroke-width="1.2"/>
  <line x1="133" y1="24" x2="197" y2="24" stroke="#B0A090" stroke-width="0.8"/>
  <!-- curtains -->
  <rect x="122" y="1" width="12" height="46" rx="1.5" fill="#C87060" opacity="0.25"/>
  <rect x="198" y="1" width="12" height="46" rx="1.5" fill="#C87060" opacity="0.25"/>
  <line x1="122" y1="1" x2="212" y2="1" stroke="#B06050" stroke-width="1.5" opacity="0.35"/>
  <!-- window light beam -->
  <polygon points="133,45 197,45 220,100 110,100" fill="#FFF5D0" opacity="0.03">
    <animate attributeName="opacity" values="0.02;0.05;0.03;0.04;0.02" dur="8s" repeatCount="indefinite"/>
  </polygon>
  <!-- wall art -->
  <rect x="30" y="10" width="32" height="22" rx="1" fill="#D4C4B0" stroke="#8A7A68" stroke-width="1"/>
  <rect x="33" y="13" width="26" height="16" rx="0.5" fill="#7A9A7A" opacity="0.35"/>
  <ellipse cx="46" cy="23" rx="8" ry="4" fill="#5B8D5E" opacity="0.25"/>
  <circle cx="52" cy="16" r="2.5" fill="#F0C040" opacity="0.25"/>
  <!-- couch -->
  <rect x="15" y="52" width="120" height="8" rx="2.5" fill="#7A4030" opacity="0.55"/>
  <rect x="10" y="60" width="130" height="22" rx="4" fill="url(#lofiLivCouch)" opacity="0.6"/>
  <rect x="14" y="62" width="36" height="18" rx="2.5" fill="#9A6050" opacity="0.35"/>
  <rect x="54" y="62" width="36" height="18" rx="2.5" fill="#9A6050" opacity="0.35"/>
  <rect x="94" y="62" width="36" height="18" rx="2.5" fill="#9A6050" opacity="0.35"/>
  <!-- armrests -->
  <rect x="5" y="55" width="10" height="30" rx="3" fill="#7A4030" opacity="0.45"/>
  <rect x="137" y="55" width="10" height="30" rx="3" fill="#7A4030" opacity="0.45"/>
  <!-- cushions -->
  <rect x="18" y="53" width="16" height="9" rx="3" fill="#D4A040" opacity="0.45"/>
  <rect x="115" y="53" width="14" height="9" rx="3" fill="#5B8DBE" opacity="0.35"/>
  <!-- coffee table -->
  <rect x="55" y="88" width="60" height="4.5" rx="1.5" fill="#6A5035"/>
  <rect x="59" y="92.5" width="3" height="7" rx="0.8" fill="#5A4025"/>
  <rect x="108" y="92.5" width="3" height="7" rx="0.8" fill="#5A4025"/>
  <rect x="65" y="85" width="10" height="3" rx="0.8" fill="#D4C4B0" opacity="0.4"/>
  <ellipse cx="90" cy="87" rx="4" ry="2.5" fill="#C87070" opacity="0.35"/>
  <!-- TV on console -->
  <rect x="270" y="18" width="65" height="36" rx="1.5" fill="url(#lofiLivTV)" stroke="#1A1A2E" stroke-width="0.8"/>
  <rect x="273" y="21" width="59" height="30" rx="1" fill="#3A4A6A" opacity="0.45"/>
  <rect x="276" y="24" width="53" height="24" rx="0.5" fill="#4A6A9A" opacity="0.2">
    <animate attributeName="fill" values="#4A6A9A;#6A5A9A;#4A8A6A;#7A6A4A;#4A6A9A" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.15;0.25;0.18;0.22;0.15" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall -->
  <rect x="260" y="8" width="90" height="45" rx="3" fill="#5A8ABE" opacity="0.02">
    <animate attributeName="fill" values="#5A8ABE;#8A5ABE;#5ABE7A;#BE8A5A;#5A8ABE" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.02;0.04;0.025;0.035;0.02" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV console -->
  <rect x="265" y="56" width="80" height="8" rx="2" fill="#5A4030" opacity="0.55"/>
  <rect x="270" y="64" width="6" height="14" rx="1.5" fill="#4A3020" opacity="0.4"/>
  <rect x="334" y="64" width="6" height="14" rx="1.5" fill="#4A3020" opacity="0.4"/>
  <!-- console items -->
  <rect x="274" y="51" width="10" height="5" rx="0.8" fill="#4A4A5E" opacity="0.35"/>
  <rect x="336" y="50" width="8" height="6" rx="0.8" fill="#8B7355" opacity="0.35"/>
  <!-- plant -->
  <rect x="355" y="42" width="8" height="12" rx="1.5" fill="#8B6548" opacity="0.55"/>
  <ellipse cx="359" cy="40" rx="7" ry="5" fill="#5B8D5E" opacity="0.45">
    <animateTransform attributeName="transform" type="rotate" values="-2,359,49;2,359,49;-2,359,49" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="356" cy="38" rx="4.5" ry="3.5" fill="#6A9A6A" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="1,356,49;-1,356,49;1,356,49" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- rug -->
  <rect x="30" y="86" width="100" height="14" rx="3" fill="#C87060" opacity="0.12"/>
  <rect x="34" y="88" width="92" height="10" rx="2" fill="#D4A060" opacity="0.08"/>
  <!-- floor lamp -->
  <line x1="220" y1="30" x2="220" y2="82" stroke="#4A4A5E" stroke-width="1.5"/>
  <ellipse cx="220" cy="28" rx="8" ry="5.5" fill="#F0D080" opacity="0.25"/>
  <circle cx="220" cy="28" r="3" fill="#FFF5D0" opacity="0.18"/>
  <circle cx="220" cy="42" r="22" fill="url(#lofiLivLamp)">
    <animate attributeName="opacity" values="0.6;0.8;0.65;0.75;0.6" dur="6s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="220" cy="84" rx="6" ry="2.5" fill="#4A4A5E" opacity="0.35"/>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C0B8D0"/><stop offset="100%" stop-color="#B0A8C0"/></linearGradient>
    <linearGradient id="lofiBedF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8878A8"/><stop offset="100%" stop-color="#786898"/></linearGradient>
    <radialGradient id="lofiBedG" cx="0.3" cy="0.4" r="0.4"><stop offset="0%" stop-color="#E8D8F0" stop-opacity="0.2"/><stop offset="100%" stop-color="#E8D8F0" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiBedFrame" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6A5240"/><stop offset="100%" stop-color="#5A4230"/></linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#F0E8C0" stop-opacity="0.6"/><stop offset="70%" stop-color="#F0E8C0" stop-opacity="0.2"/><stop offset="100%" stop-color="#F0E8C0" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#F0D080" stop-opacity="0.25"/><stop offset="100%" stop-color="#F0D080" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- wall & floor -->
  <rect width="400" height="58" fill="url(#lofiBedW)"/>
  <rect y="58" width="400" height="42" fill="url(#lofiBedF)"/>
  <rect y="56" width="400" height="2.5" fill="#9A90B0" opacity="0.35"/>
  <rect y="58" width="400" height="42" fill="#887898" opacity="0.12"/>
  <rect width="400" height="100" fill="url(#lofiBedG)"/>
  <!-- window with night sky -->
  <rect x="295" y="3" width="50" height="42" rx="2" fill="#B0A8C0" stroke="#9A90B0" stroke-width="1"/>
  <rect x="298" y="6" width="20" height="36" rx="0.8" fill="#2A2848" opacity="0.55"/>
  <rect x="322" y="6" width="20" height="36" rx="0.8" fill="#2A2848" opacity="0.55"/>
  <line x1="320" y1="6" x2="320" y2="42" stroke="#A098B0" stroke-width="1.2"/>
  <line x1="298" y1="24" x2="342" y2="24" stroke="#A098B0" stroke-width="0.8"/>
  <!-- stars -->
  <circle cx="303" cy="10" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.6;0.2;0.5;0.1" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="311" cy="14" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.5;0.1;0.4;0.2" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="306" cy="20" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0;0.4;0.1;0.3;0" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle cx="327" cy="10" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.55;0.2;0.45;0.15" dur="4.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="336" cy="13" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.4;0.15;0.35;0.1" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <!-- moon -->
  <circle cx="333" cy="16" r="9" fill="url(#lofiBedMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="333" cy="16" r="4" fill="#F0E8C0" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.45;0.55;0.4" dur="6s" repeatCount="indefinite"/>
  </circle>
  <!-- moonlight beam -->
  <polygon points="298,45 342,45 360,100 280,100" fill="#E0D8F0" opacity="0.03">
    <animate attributeName="opacity" values="0.02;0.05;0.03;0.04;0.02" dur="6s" repeatCount="indefinite"/>
  </polygon>
  <!-- curtains -->
  <rect x="289" y="1" width="10" height="46" rx="1.5" fill="#8070A0" opacity="0.25"/>
  <rect x="344" y="1" width="10" height="46" rx="1.5" fill="#8070A0" opacity="0.25"/>
  <!-- wall art -->
  <rect x="85" y="6" width="42" height="28" rx="1" fill="#D4C4B0" stroke="#8A7A68" stroke-width="0.8"/>
  <rect x="88" y="9" width="36" height="22" rx="0.5" fill="#9088B0" opacity="0.25"/>
  <ellipse cx="106" cy="24" rx="12" ry="5" fill="#7068A0" opacity="0.18"/>
  <!-- bed frame headboard -->
  <rect x="20" y="32" width="175" height="14" rx="2.5" fill="url(#lofiBedFrame)"/>
  <!-- headboard slats -->
  <rect x="24" y="34" width="34" height="10" rx="1.5" fill="#7A6250" opacity="0.45"/>
  <rect x="62" y="34" width="34" height="10" rx="1.5" fill="#7A6250" opacity="0.45"/>
  <rect x="100" y="34" width="34" height="10" rx="1.5" fill="#7A6250" opacity="0.45"/>
  <rect x="138" y="34" width="52" height="10" rx="1.5" fill="#7A6250" opacity="0.45"/>
  <!-- bed -->
  <rect x="20" y="46" width="175" height="32" rx="3" fill="#7B6AAE" opacity="0.4"/>
  <rect x="24" y="48" width="167" height="28" rx="2.5" fill="#9888C0" opacity="0.3"/>
  <line x1="30" y1="60" x2="185" y2="60" stroke="#8A78B0" stroke-width="0.8" opacity="0.25"/>
  <!-- pillows -->
  <ellipse cx="42" cy="50" rx="14" ry="5.5" fill="#E8D8A0" opacity="0.45"/>
  <ellipse cx="72" cy="51" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>
  <ellipse cx="105" cy="50" rx="13" ry="5.5" fill="#D8C8E0" opacity="0.45"/>
  <ellipse cx="138" cy="51" rx="12" ry="5" fill="#D8C8E0" opacity="0.4"/>
  <!-- bed legs -->
  <rect x="18" y="78" width="179" height="3" rx="0.8" fill="#5A4230" opacity="0.45"/>
  <rect x="22" y="81" width="5" height="10" rx="0.8" fill="#5A4230" opacity="0.35"/>
  <rect x="188" y="81" width="5" height="10" rx="0.8" fill="#5A4230" opacity="0.35"/>
  <!-- nightstand -->
  <rect x="210" y="48" width="28" height="28" rx="1.5" fill="#6A5240" opacity="0.5"/>
  <rect x="212" y="51" width="24" height="10" rx="0.8" fill="#7A6250" opacity="0.35"/>
  <rect x="212" y="63" width="24" height="10" rx="0.8" fill="#7A6250" opacity="0.35"/>
  <rect x="221" y="55" width="7" height="1.5" rx="0.5" fill="#A09080" opacity="0.45"/>
  <rect x="221" y="67" width="7" height="1.5" rx="0.5" fill="#A09080" opacity="0.45"/>
  <!-- lamp on nightstand -->
  <rect x="221" y="40" width="8" height="8" rx="1.5" fill="#D4C4B0" opacity="0.45"/>
  <ellipse cx="225" cy="38" rx="7" ry="4" fill="#F0D080" opacity="0.3">
    <animate attributeName="opacity" values="0.25;0.35;0.27;0.33;0.25" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="225" cy="38" r="2.5" fill="#FFF5D0" opacity="0.22">
    <animate attributeName="opacity" values="0.18;0.26;0.2;0.24;0.18" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="225" cy="40" r="18" fill="url(#lofiBedLamp)">
    <animate attributeName="opacity" values="0.5;0.7;0.55;0.65;0.5" dur="4s" repeatCount="indefinite"/>
  </circle>
  <!-- dresser -->
  <rect x="255" y="42" width="45" height="35" rx="2" fill="#6A5240" opacity="0.45"/>
  <rect x="258" y="45" width="39" height="13" rx="0.8" fill="#7A6250" opacity="0.35"/>
  <rect x="258" y="61" width="39" height="13" rx="0.8" fill="#7A6250" opacity="0.35"/>
  <rect x="274" y="50" width="7" height="1.5" rx="0.5" fill="#A09080" opacity="0.45"/>
  <rect x="274" y="66" width="7" height="1.5" rx="0.5" fill="#A09080" opacity="0.45"/>
  <!-- items on dresser -->
  <rect x="262" y="37" width="8" height="5" rx="0.8" fill="#5B8DBE" opacity="0.3"/>
  <ellipse cx="285" cy="39" rx="4" ry="2.5" fill="#C87070" opacity="0.25"/>
  <!-- rug & slippers -->
  <ellipse cx="110" cy="90" rx="35" ry="8" fill="#9888C0" opacity="0.15"/>
  <ellipse cx="98" cy="88" rx="4" ry="2.5" fill="#D4A878" opacity="0.3"/>
  <ellipse cx="105" cy="89" rx="4" ry="2.5" fill="#D4A878" opacity="0.3"/>
</svg>`,
};
