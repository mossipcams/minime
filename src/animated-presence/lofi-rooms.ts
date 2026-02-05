/**
 * Detailed pixel-art-style SVG room backgrounds
 * Warm muted palettes with recognizable furniture and wall/floor detail
 * Gradient IDs prefixed with 'lofi' to avoid collision
 * ViewBox: 320x200 — card header crops to roughly y=60–140
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiOffW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B6A6"/><stop offset="100%" stop-color="#B8A696"/></linearGradient>
    <linearGradient id="lofiOffF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#A89078"/><stop offset="100%" stop-color="#907860"/></linearGradient>
    <radialGradient id="lofiOffG" cx="0.65" cy="0.35" r="0.35"><stop offset="0%" stop-color="#FFF5E0" stop-opacity="0.25"/><stop offset="100%" stop-color="#FFF5E0" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiOffDesk" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B7355"/><stop offset="100%" stop-color="#7A6245"/></linearGradient>
    <linearGradient id="lofiOffScreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3A5A8A"/><stop offset="100%" stop-color="#2A4A6A"/></linearGradient>
  </defs>
  <!-- walls & floor -->
  <rect width="320" height="110" fill="url(#lofiOffW)"/>
  <rect y="110" width="320" height="90" fill="url(#lofiOffF)"/>
  <rect y="105" width="320" height="5" fill="#9A8A78" opacity="0.6"/>
  <line x1="0" y1="130" x2="320" y2="130" stroke="#806848" stroke-width="0.5" opacity="0.3"/>
  <line x1="0" y1="150" x2="320" y2="150" stroke="#806848" stroke-width="0.5" opacity="0.3"/>
  <line x1="0" y1="170" x2="320" y2="170" stroke="#806848" stroke-width="0.5" opacity="0.3"/>
  <line x1="0" y1="190" x2="320" y2="190" stroke="#806848" stroke-width="0.5" opacity="0.3"/>
  <rect width="320" height="200" fill="url(#lofiOffG)"/>
  <!-- window -->
  <rect x="20" y="15" width="55" height="50" rx="2" fill="#D4C4B0" stroke="#A09080" stroke-width="1.5"/>
  <rect x="23" y="18" width="23" height="44" rx="1" fill="#A8D8EA" opacity="0.5"/>
  <rect x="49" y="18" width="23" height="44" rx="1" fill="#A8D8EA" opacity="0.5"/>
  <line x1="47" y1="18" x2="47" y2="62" stroke="#B0A090" stroke-width="1.5"/>
  <line x1="23" y1="40" x2="72" y2="40" stroke="#B0A090" stroke-width="1"/>
  <rect x="15" y="12" width="10" height="56" rx="2" fill="#C87070" opacity="0.35"/>
  <rect x="73" y="12" width="10" height="56" rx="2" fill="#C87070" opacity="0.35"/>
  <!-- wall clock -->
  <circle cx="110" cy="35" r="12" fill="#D4C4B0" stroke="#8A7A68" stroke-width="1"/>
  <line x1="110" y1="35" x2="110" y2="27" stroke="#4A3A28" stroke-width="1"/>
  <line x1="110" y1="35" x2="116" y2="35" stroke="#4A3A28" stroke-width="0.8"/>
  <circle cx="110" cy="35" r="1.5" fill="#4A3A28"/>
  <!-- bookshelf -->
  <rect x="250" y="20" width="50" height="80" rx="2" fill="#7A6245" stroke="#6A5235" stroke-width="1"/>
  <rect x="253" y="24" width="44" height="14" rx="1" fill="#8B7355"/>
  <rect x="253" y="42" width="44" height="14" rx="1" fill="#8B7355"/>
  <rect x="253" y="60" width="44" height="14" rx="1" fill="#8B7355"/>
  <rect x="253" y="78" width="44" height="14" rx="1" fill="#8B7355"/>
  <!-- books -->
  <rect x="256" y="25" width="5" height="12" rx="0.5" fill="#C87070" opacity="0.7"/>
  <rect x="262" y="26" width="4" height="11" rx="0.5" fill="#5B8D5E" opacity="0.7"/>
  <rect x="267" y="25" width="6" height="12" rx="0.5" fill="#5B8DBE" opacity="0.7"/>
  <rect x="274" y="27" width="4" height="10" rx="0.5" fill="#D4A040" opacity="0.7"/>
  <rect x="279" y="25" width="5" height="12" rx="0.5" fill="#8B5E8B" opacity="0.7"/>
  <rect x="256" y="43" width="6" height="12" rx="0.5" fill="#D4A040" opacity="0.7"/>
  <rect x="263" y="44" width="4" height="11" rx="0.5" fill="#C87070" opacity="0.7"/>
  <rect x="268" y="43" width="5" height="12" rx="0.5" fill="#5B8DBE" opacity="0.7"/>
  <rect x="275" y="44" width="5" height="11" rx="0.5" fill="#5B8D5E" opacity="0.7"/>
  <rect x="256" y="62" width="5" height="11" rx="0.5" fill="#8B5E8B" opacity="0.6"/>
  <rect x="263" y="61" width="4" height="12" rx="0.5" fill="#C87070" opacity="0.6"/>
  <!-- plant on shelf -->
  <rect x="281" y="65" width="8" height="7" rx="1" fill="#8B6548"/>
  <ellipse cx="285" cy="63" rx="6" ry="4" fill="#5B8D5E" opacity="0.7"/>
  <!-- desk -->
  <rect x="110" y="100" width="120" height="6" rx="1" fill="url(#lofiOffDesk)"/>
  <rect x="115" y="106" width="6" height="40" rx="1" fill="#7A6245"/>
  <rect x="220" y="106" width="6" height="40" rx="1" fill="#7A6245"/>
  <rect x="118" y="130" width="105" height="3" rx="1" fill="#6A5235" opacity="0.5"/>
  <!-- monitor -->
  <rect x="145" y="70" width="50" height="30" rx="2" fill="#2A2A3E" stroke="#1A1A2E" stroke-width="1"/>
  <rect x="148" y="73" width="44" height="24" rx="1" fill="url(#lofiOffScreen)"/>
  <line x1="152" y1="80" x2="185" y2="80" stroke="#6A9AC0" stroke-width="1" opacity="0.5"/>
  <line x1="152" y1="84" x2="180" y2="84" stroke="#6A9AC0" stroke-width="1" opacity="0.4"/>
  <line x1="152" y1="88" x2="175" y2="88" stroke="#6A9AC0" stroke-width="1" opacity="0.3"/>
  <rect x="165" y="100" width="10" height="3" rx="0.5" fill="#2A2A3E"/>
  <rect x="160" y="101" width="20" height="2" rx="1" fill="#3A3A4E"/>
  <!-- keyboard & mouse -->
  <rect x="152" y="104" width="36" height="4" rx="1" fill="#3A3A4E" opacity="0.7"/>
  <rect x="154" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <rect x="158" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <rect x="162" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <rect x="166" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <rect x="170" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <rect x="174" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <rect x="178" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <rect x="182" y="105" width="3" height="2" rx="0.3" fill="#4A4A5E" opacity="0.5"/>
  <ellipse cx="198" cy="105" rx="4" ry="3" fill="#3A3A4E" opacity="0.6"/>
  <!-- desk lamp -->
  <line x1="130" y1="100" x2="135" y2="78" stroke="#4A4A5E" stroke-width="1.5"/>
  <line x1="135" y1="78" x2="142" y2="74" stroke="#4A4A5E" stroke-width="1.5"/>
  <path d="M139 70 Q142 68 148 72 L145 76 Q140 74 138 73 Z" fill="#F0C040" opacity="0.6"/>
  <circle cx="143" cy="73" r="2" fill="#FFF5D0" opacity="0.4"/>
  <!-- chair -->
  <rect x="155" y="115" width="30" height="25" rx="4" fill="#4A4A5E" opacity="0.5"/>
  <rect x="168" y="140" width="4" height="10" rx="1" fill="#3A3A4E" opacity="0.4"/>
  <ellipse cx="170" cy="165" rx="35" ry="8" fill="#C87070" opacity="0.2"/>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiKitW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D4C8B0"/><stop offset="100%" stop-color="#C4B8A0"/></linearGradient>
    <linearGradient id="lofiKitF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B898"/><stop offset="100%" stop-color="#B0A078"/></linearGradient>
    <radialGradient id="lofiKitG" cx="0.4" cy="0.4" r="0.35"><stop offset="0%" stop-color="#FFF8E8" stop-opacity="0.2"/><stop offset="100%" stop-color="#FFF8E8" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiKitCab" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8BA88B"/><stop offset="100%" stop-color="#6A886A"/></linearGradient>
    <linearGradient id="lofiKitCounter" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C0C0C0"/><stop offset="100%" stop-color="#A8A8A8"/></linearGradient>
  </defs>
  <!-- walls & floor -->
  <rect width="320" height="110" fill="url(#lofiKitW)"/>
  <rect y="110" width="320" height="90" fill="url(#lofiKitF)"/>
  <!-- tile backsplash -->
  <rect y="55" width="200" height="45" fill="#D8D0C0" opacity="0.4"/>
  <g stroke="#C8C0B0" stroke-width="0.5" opacity="0.4">
    <line x1="0" y1="62" x2="200" y2="62"/><line x1="0" y1="70" x2="200" y2="70"/>
    <line x1="0" y1="78" x2="200" y2="78"/><line x1="0" y1="86" x2="200" y2="86"/>
    <line x1="0" y1="94" x2="200" y2="94"/>
    <line x1="15" y1="55" x2="15" y2="100"/><line x1="30" y1="55" x2="30" y2="100"/>
    <line x1="45" y1="55" x2="45" y2="100"/><line x1="60" y1="55" x2="60" y2="100"/>
    <line x1="75" y1="55" x2="75" y2="100"/><line x1="90" y1="55" x2="90" y2="100"/>
    <line x1="105" y1="55" x2="105" y2="100"/><line x1="120" y1="55" x2="120" y2="100"/>
    <line x1="135" y1="55" x2="135" y2="100"/><line x1="150" y1="55" x2="150" y2="100"/>
    <line x1="165" y1="55" x2="165" y2="100"/><line x1="180" y1="55" x2="180" y2="100"/>
    <line x1="195" y1="55" x2="195" y2="100"/>
  </g>
  <!-- floor tiles -->
  <g stroke="#A09070" stroke-width="0.5" opacity="0.25">
    <line x1="0" y1="130" x2="320" y2="130"/><line x1="0" y1="150" x2="320" y2="150"/>
    <line x1="0" y1="170" x2="320" y2="170"/><line x1="0" y1="190" x2="320" y2="190"/>
    <line x1="40" y1="110" x2="40" y2="200"/><line x1="80" y1="110" x2="80" y2="200"/>
    <line x1="120" y1="110" x2="120" y2="200"/><line x1="160" y1="110" x2="160" y2="200"/>
    <line x1="200" y1="110" x2="200" y2="200"/><line x1="240" y1="110" x2="240" y2="200"/>
    <line x1="280" y1="110" x2="280" y2="200"/>
  </g>
  <rect width="320" height="200" fill="url(#lofiKitG)"/>
  <!-- upper cabinets -->
  <rect x="10" y="10" width="55" height="40" rx="2" fill="url(#lofiKitCab)" stroke="#5A785A" stroke-width="1"/>
  <rect x="12" y="12" width="24" height="36" rx="1" fill="#7A987A" opacity="0.5"/>
  <rect x="39" y="12" width="24" height="36" rx="1" fill="#7A987A" opacity="0.5"/>
  <circle cx="34" cy="30" r="1.5" fill="#B0B0A0"/>
  <circle cx="41" cy="30" r="1.5" fill="#B0B0A0"/>
  <rect x="75" y="10" width="55" height="40" rx="2" fill="url(#lofiKitCab)" stroke="#5A785A" stroke-width="1"/>
  <rect x="77" y="12" width="24" height="36" rx="1" fill="#7A987A" opacity="0.5"/>
  <rect x="104" y="12" width="24" height="36" rx="1" fill="#7A987A" opacity="0.5"/>
  <circle cx="99" cy="30" r="1.5" fill="#B0B0A0"/>
  <circle cx="106" cy="30" r="1.5" fill="#B0B0A0"/>
  <!-- range hood -->
  <rect x="140" y="15" width="50" height="20" rx="2" fill="#B0B0B0" opacity="0.5"/>
  <rect x="145" y="35" width="40" height="5" rx="1" fill="#A0A0A0" opacity="0.4"/>
  <!-- counter -->
  <rect x="5" y="98" width="195" height="6" rx="1" fill="url(#lofiKitCounter)"/>
  <!-- lower cabinets -->
  <rect x="5" y="104" width="195" height="50" rx="2" fill="url(#lofiKitCab)" opacity="0.7" stroke="#5A785A" stroke-width="0.5"/>
  <rect x="10" y="107" width="40" height="44" rx="1" fill="#7A987A" opacity="0.4"/>
  <rect x="55" y="107" width="40" height="44" rx="1" fill="#7A987A" opacity="0.4"/>
  <rect x="100" y="107" width="40" height="44" rx="1" fill="#7A987A" opacity="0.4"/>
  <rect x="145" y="107" width="50" height="44" rx="1" fill="#7A987A" opacity="0.4"/>
  <rect x="28" y="125" width="6" height="2" rx="1" fill="#B0B0A0" opacity="0.6"/>
  <rect x="73" y="125" width="6" height="2" rx="1" fill="#B0B0A0" opacity="0.6"/>
  <rect x="118" y="125" width="6" height="2" rx="1" fill="#B0B0A0" opacity="0.6"/>
  <rect x="168" y="125" width="6" height="2" rx="1" fill="#B0B0A0" opacity="0.6"/>
  <!-- stove burners -->
  <ellipse cx="155" cy="94" rx="10" ry="4" fill="#3A3A3E" opacity="0.4"/>
  <ellipse cx="175" cy="94" rx="10" ry="4" fill="#3A3A3E" opacity="0.4"/>
  <ellipse cx="155" cy="93" rx="5" ry="2" fill="#E08040" opacity="0.3"/>
  <ellipse cx="175" cy="93" rx="5" ry="2" fill="#E08040" opacity="0.3"/>
  <!-- pot -->
  <rect x="147" y="84" width="16" height="10" rx="2" fill="#6A6A7E" opacity="0.6"/>
  <rect x="145" y="82" width="20" height="3" rx="1" fill="#7A7A8E" opacity="0.5"/>
  <!-- sink -->
  <rect x="50" y="96" width="30" height="6" rx="2" fill="#8A8A9A" opacity="0.5"/>
  <ellipse cx="58" cy="99" rx="3" ry="2" fill="#6A6A7A" opacity="0.4"/>
  <ellipse cx="72" cy="99" rx="3" ry="2" fill="#6A6A7A" opacity="0.4"/>
  <line x1="65" y1="98" x2="65" y2="86" stroke="#A0A0B0" stroke-width="2" stroke-linecap="round"/>
  <line x1="65" y1="86" x2="60" y2="88" stroke="#A0A0B0" stroke-width="2" stroke-linecap="round"/>
  <!-- fridge -->
  <rect x="230" y="25" width="55" height="130" rx="3" fill="#C8C8C8" stroke="#A8A8A8" stroke-width="1"/>
  <line x1="230" y1="85" x2="285" y2="85" stroke="#B0B0B0" stroke-width="1"/>
  <rect x="278" y="50" width="3" height="15" rx="1" fill="#A0A0A0"/>
  <rect x="278" y="95" width="3" height="15" rx="1" fill="#A0A0A0"/>
  <rect x="240" y="35" width="8" height="8" rx="1" fill="#E0A040" opacity="0.5"/>
  <rect x="255" y="40" width="6" height="6" rx="1" fill="#C87070" opacity="0.4"/>
  <rect x="265" y="35" width="7" height="7" rx="1" fill="#5B8DBE" opacity="0.4"/>
  <!-- window -->
  <rect x="220" y="10" width="45" height="40" rx="2" fill="#D4C4B0" stroke="#A09080" stroke-width="1"/>
  <rect x="222" y="12" width="19" height="36" rx="1" fill="#A8D8EA" opacity="0.45"/>
  <rect x="244" y="12" width="19" height="36" rx="1" fill="#A8D8EA" opacity="0.45"/>
  <line x1="242" y1="12" x2="242" y2="48" stroke="#B0A090" stroke-width="1"/>
  <!-- hanging utensils -->
  <line x1="15" y1="55" x2="15" y2="68" stroke="#A0A0A0" stroke-width="1" opacity="0.5"/>
  <line x1="25" y1="55" x2="25" y2="72" stroke="#A0A0A0" stroke-width="1" opacity="0.5"/>
  <line x1="35" y1="55" x2="35" y2="66" stroke="#A0A0A0" stroke-width="1" opacity="0.5"/>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiLivW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D8C8A8"/><stop offset="100%" stop-color="#C8B898"/></linearGradient>
    <linearGradient id="lofiLivF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B09068"/><stop offset="100%" stop-color="#987850"/></linearGradient>
    <radialGradient id="lofiLivG" cx="0.5" cy="0.5" r="0.4"><stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.25"/><stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiLivCouch" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B5040"/><stop offset="100%" stop-color="#6A3830"/></linearGradient>
    <linearGradient id="lofiLivTV" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2A2A40"/><stop offset="100%" stop-color="#1A1A30"/></linearGradient>
  </defs>
  <!-- walls & floor -->
  <rect width="320" height="110" fill="url(#lofiLivW)"/>
  <rect y="110" width="320" height="90" fill="url(#lofiLivF)"/>
  <rect y="107" width="320" height="3" fill="#9A8A70" opacity="0.5"/>
  <line x1="0" y1="130" x2="320" y2="130" stroke="#8A7048" stroke-width="0.5" opacity="0.25"/>
  <line x1="0" y1="150" x2="320" y2="150" stroke="#8A7048" stroke-width="0.5" opacity="0.25"/>
  <line x1="0" y1="170" x2="320" y2="170" stroke="#8A7048" stroke-width="0.5" opacity="0.25"/>
  <line x1="0" y1="190" x2="320" y2="190" stroke="#8A7048" stroke-width="0.5" opacity="0.25"/>
  <rect width="320" height="200" fill="url(#lofiLivG)"/>
  <!-- window with curtains -->
  <rect x="120" y="10" width="80" height="60" rx="2" fill="#D4C4B0" stroke="#A09080" stroke-width="1.5"/>
  <rect x="123" y="13" width="35" height="54" rx="1" fill="#A8D8EA" opacity="0.4"/>
  <rect x="162" y="13" width="35" height="54" rx="1" fill="#A8D8EA" opacity="0.4"/>
  <line x1="160" y1="13" x2="160" y2="67" stroke="#B0A090" stroke-width="1.5"/>
  <line x1="123" y1="40" x2="197" y2="40" stroke="#B0A090" stroke-width="1"/>
  <rect x="110" y="7" width="15" height="66" rx="2" fill="#C87060" opacity="0.3"/>
  <rect x="197" y="7" width="15" height="66" rx="2" fill="#C87060" opacity="0.3"/>
  <line x1="110" y1="7" x2="212" y2="7" stroke="#B06050" stroke-width="2" opacity="0.4"/>
  <!-- wall art -->
  <rect x="30" y="25" width="35" height="28" rx="1" fill="#D4C4B0" stroke="#8A7A68" stroke-width="1.5"/>
  <rect x="33" y="28" width="29" height="22" rx="0.5" fill="#7A9A7A" opacity="0.4"/>
  <ellipse cx="48" cy="42" rx="10" ry="5" fill="#5B8D5E" opacity="0.3"/>
  <circle cx="55" cy="33" r="3" fill="#F0C040" opacity="0.3"/>
  <!-- couch -->
  <rect x="15" y="100" width="130" height="10" rx="3" fill="#7A4030" opacity="0.6"/>
  <rect x="10" y="110" width="140" height="30" rx="5" fill="url(#lofiLivCouch)" opacity="0.65"/>
  <rect x="15" y="112" width="40" height="26" rx="3" fill="#9A6050" opacity="0.4"/>
  <rect x="60" y="112" width="40" height="26" rx="3" fill="#9A6050" opacity="0.4"/>
  <rect x="105" y="112" width="40" height="26" rx="3" fill="#9A6050" opacity="0.4"/>
  <rect x="5" y="105" width="12" height="38" rx="4" fill="#7A4030" opacity="0.5"/>
  <rect x="148" y="105" width="12" height="38" rx="4" fill="#7A4030" opacity="0.5"/>
  <!-- cushions -->
  <rect x="20" y="104" width="18" height="12" rx="4" fill="#D4A040" opacity="0.5"/>
  <rect x="125" y="104" width="16" height="12" rx="4" fill="#5B8DBE" opacity="0.4"/>
  <!-- coffee table -->
  <rect x="45" y="150" width="70" height="6" rx="2" fill="#6A5035"/>
  <rect x="50" y="156" width="4" height="12" rx="1" fill="#5A4025"/>
  <rect x="106" y="156" width="4" height="12" rx="1" fill="#5A4025"/>
  <rect x="55" y="146" width="12" height="4" rx="1" fill="#D4C4B0" opacity="0.5"/>
  <ellipse cx="85" cy="148" rx="5" ry="3" fill="#C87070" opacity="0.4"/>
  <!-- TV on stand -->
  <rect x="220" y="55" width="70" height="42" rx="2" fill="url(#lofiLivTV)" stroke="#1A1A2E" stroke-width="1"/>
  <rect x="223" y="58" width="64" height="36" rx="1" fill="#3A4A6A" opacity="0.5"/>
  <rect x="226" y="61" width="58" height="30" rx="0.5" fill="#4A6A9A" opacity="0.2"/>
  <rect x="210" y="100" width="90" height="12" rx="3" fill="#5A4030" opacity="0.6"/>
  <rect x="215" y="112" width="8" height="20" rx="2" fill="#4A3020" opacity="0.5"/>
  <rect x="282" y="112" width="8" height="20" rx="2" fill="#4A3020" opacity="0.5"/>
  <rect x="220" y="94" width="12" height="6" rx="1" fill="#4A4A5E" opacity="0.4"/>
  <rect x="278" y="92" width="10" height="8" rx="1" fill="#8B7355" opacity="0.4"/>
  <!-- plant -->
  <rect x="270" y="80" width="10" height="14" rx="2" fill="#8B6548" opacity="0.6"/>
  <ellipse cx="275" cy="78" rx="8" ry="6" fill="#5B8D5E" opacity="0.5"/>
  <ellipse cx="271" cy="76" rx="5" ry="4" fill="#6A9A6A" opacity="0.4"/>
  <!-- rug -->
  <rect x="25" y="155" width="120" height="30" rx="4" fill="#C87060" opacity="0.15"/>
  <rect x="30" y="158" width="110" height="24" rx="3" fill="#D4A060" opacity="0.1"/>
  <!-- floor lamp -->
  <line x1="175" y1="75" x2="175" y2="140" stroke="#4A4A5E" stroke-width="2"/>
  <ellipse cx="175" cy="73" rx="10" ry="7" fill="#F0D080" opacity="0.3"/>
  <circle cx="175" cy="73" r="4" fill="#FFF5D0" opacity="0.2"/>
  <ellipse cx="175" cy="142" rx="8" ry="3" fill="#4A4A5E" opacity="0.4"/>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiBedW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C0B8D0"/><stop offset="100%" stop-color="#B0A8C0"/></linearGradient>
    <linearGradient id="lofiBedF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8878A8"/><stop offset="100%" stop-color="#786898"/></linearGradient>
    <radialGradient id="lofiBedG" cx="0.3" cy="0.4" r="0.35"><stop offset="0%" stop-color="#E8D8F0" stop-opacity="0.25"/><stop offset="100%" stop-color="#E8D8F0" stop-opacity="0"/></radialGradient>
    <linearGradient id="lofiBedFrame" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6A5240"/><stop offset="100%" stop-color="#5A4230"/></linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#F0E8C0" stop-opacity="0.6"/><stop offset="70%" stop-color="#F0E8C0" stop-opacity="0.2"/><stop offset="100%" stop-color="#F0E8C0" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- walls & floor -->
  <rect width="320" height="110" fill="url(#lofiBedW)"/>
  <rect y="110" width="320" height="90" fill="url(#lofiBedF)"/>
  <rect y="107" width="320" height="3" fill="#9A90B0" opacity="0.4"/>
  <rect y="110" width="320" height="90" fill="#887898" opacity="0.15"/>
  <rect width="320" height="200" fill="url(#lofiBedG)"/>
  <!-- window with moon -->
  <rect x="230" y="10" width="55" height="55" rx="2" fill="#B0A8C0" stroke="#9A90B0" stroke-width="1.5"/>
  <rect x="233" y="13" width="23" height="49" rx="1" fill="#B0B8D0" opacity="0.45"/>
  <rect x="259" y="13" width="23" height="49" rx="1" fill="#B0B8D0" opacity="0.45"/>
  <line x1="257" y1="13" x2="257" y2="62" stroke="#A098B0" stroke-width="1.5"/>
  <line x1="233" y1="37" x2="282" y2="37" stroke="#A098B0" stroke-width="1"/>
  <circle cx="270" cy="25" r="8" fill="url(#lofiBedMoon)"/>
  <circle cx="270" cy="25" r="5" fill="#F0E8C0" opacity="0.4"/>
  <rect x="224" y="7" width="12" height="62" rx="2" fill="#8070A0" opacity="0.3"/>
  <rect x="284" y="7" width="12" height="62" rx="2" fill="#8070A0" opacity="0.3"/>
  <!-- wall art -->
  <rect x="75" y="15" width="50" height="35" rx="1" fill="#D4C4B0" stroke="#8A7A68" stroke-width="1"/>
  <rect x="78" y="18" width="44" height="29" rx="0.5" fill="#9088B0" opacity="0.3"/>
  <ellipse cx="100" cy="38" rx="15" ry="6" fill="#7068A0" opacity="0.2"/>
  <!-- bed -->
  <rect x="20" y="68" width="160" height="20" rx="3" fill="url(#lofiBedFrame)"/>
  <rect x="24" y="70" width="36" height="16" rx="2" fill="#7A6250" opacity="0.5"/>
  <rect x="64" y="70" width="36" height="16" rx="2" fill="#7A6250" opacity="0.5"/>
  <rect x="104" y="70" width="36" height="16" rx="2" fill="#7A6250" opacity="0.5"/>
  <rect x="144" y="70" width="32" height="16" rx="2" fill="#7A6250" opacity="0.5"/>
  <rect x="20" y="88" width="160" height="45" rx="4" fill="#7B6AAE" opacity="0.45"/>
  <rect x="24" y="90" width="152" height="40" rx="3" fill="#9888C0" opacity="0.35"/>
  <line x1="30" y1="105" x2="170" y2="105" stroke="#8A78B0" stroke-width="1" opacity="0.3"/>
  <!-- pillows -->
  <ellipse cx="45" cy="92" rx="16" ry="7" fill="#E8D8A0" opacity="0.5"/>
  <ellipse cx="80" cy="93" rx="14" ry="6" fill="#E8D8A0" opacity="0.45"/>
  <ellipse cx="120" cy="92" rx="15" ry="7" fill="#D8C8E0" opacity="0.5"/>
  <ellipse cx="155" cy="93" rx="14" ry="6" fill="#D8C8E0" opacity="0.45"/>
  <rect x="18" y="133" width="164" height="4" rx="1" fill="#5A4230" opacity="0.5"/>
  <rect x="22" y="137" width="6" height="15" rx="1" fill="#5A4230" opacity="0.4"/>
  <rect x="172" y="137" width="6" height="15" rx="1" fill="#5A4230" opacity="0.4"/>
  <!-- nightstand -->
  <rect x="195" y="90" width="30" height="35" rx="2" fill="#6A5240" opacity="0.55"/>
  <rect x="197" y="94" width="26" height="12" rx="1" fill="#7A6250" opacity="0.4"/>
  <rect x="197" y="110" width="26" height="12" rx="1" fill="#7A6250" opacity="0.4"/>
  <rect x="207" y="99" width="8" height="2" rx="0.5" fill="#A09080" opacity="0.5"/>
  <rect x="207" y="115" width="8" height="2" rx="0.5" fill="#A09080" opacity="0.5"/>
  <!-- lamp -->
  <rect x="206" y="82" width="10" height="8" rx="2" fill="#D4C4B0" opacity="0.5"/>
  <ellipse cx="211" cy="80" rx="8" ry="5" fill="#F0D080" opacity="0.35"/>
  <circle cx="211" cy="80" r="3" fill="#FFF5D0" opacity="0.25"/>
  <circle cx="211" cy="80" r="20" fill="#F0D080" opacity="0.08"/>
  <!-- dresser -->
  <rect x="250" y="85" width="50" height="45" rx="3" fill="#6A5240" opacity="0.5"/>
  <rect x="253" y="89" width="44" height="17" rx="1" fill="#7A6250" opacity="0.4"/>
  <rect x="253" y="110" width="44" height="17" rx="1" fill="#7A6250" opacity="0.4"/>
  <rect x="272" y="96" width="8" height="2" rx="0.5" fill="#A09080" opacity="0.5"/>
  <rect x="272" y="117" width="8" height="2" rx="0.5" fill="#A09080" opacity="0.5"/>
  <rect x="258" y="79" width="10" height="6" rx="1" fill="#5B8DBE" opacity="0.35"/>
  <ellipse cx="283" cy="82" rx="5" ry="3" fill="#C87070" opacity="0.3"/>
  <!-- rug & slippers -->
  <ellipse cx="100" cy="160" rx="40" ry="10" fill="#9888C0" opacity="0.2"/>
  <ellipse cx="88" cy="158" rx="5" ry="3" fill="#D4A878" opacity="0.35"/>
  <ellipse cx="96" cy="159" rx="5" ry="3" fill="#D4A878" opacity="0.35"/>
</svg>`,
};
