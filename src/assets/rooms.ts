/**
 * Room background pixel art assets
 *
 * Each room is a 320x200 pixel art style SVG with simple geometric shapes.
 * Using inline SVG strings avoids HACS resource loading issues.
 */

export const roomBackgrounds: Record<string, string> = {
  office: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <!-- Floor -->
    <rect width="320" height="80" y="120" fill="#8B7355"/>
    <!-- Wall -->
    <rect width="320" height="120" fill="#D4C4B0"/>

    <!-- Window (back wall) -->
    <rect x="220" y="20" width="60" height="60" fill="#87CEEB"/>
    <rect x="220" y="20" width="60" height="2" fill="#5A4A3A"/>
    <rect x="220" y="78" width="60" height="2" fill="#5A4A3A"/>
    <rect x="220" y="20" width="2" height="60" fill="#5A4A3A"/>
    <rect x="278" y="20" width="2" height="60" fill="#5A4A3A"/>
    <rect x="248" y="20" width="2" height="60" fill="#5A4A3A"/>

    <!-- Bookshelf -->
    <rect x="20" y="40" width="48" height="80" fill="#6B4423"/>
    <rect x="20" y="40" width="48" height="2" fill="#4A2F1A"/>
    <rect x="20" y="64" width="48" height="2" fill="#4A2F1A"/>
    <rect x="20" y="88" width="48" height="2" fill="#4A2F1A"/>
    <rect x="20" y="118" width="48" height="2" fill="#4A2F1A"/>
    <!-- Books -->
    <rect x="24" y="44" width="8" height="16" fill="#C41E3A"/>
    <rect x="34" y="44" width="6" height="16" fill="#2E5090"/>
    <rect x="42" y="44" width="10" height="16" fill="#228B22"/>
    <rect x="24" y="68" width="12" height="16" fill="#8B4513"/>
    <rect x="38" y="68" width="8" height="16" fill="#4B0082"/>

    <!-- Desk -->
    <rect x="100" y="100" width="100" height="8" fill="#8B6F47"/>
    <rect x="100" y="108" width="8" height="32" fill="#6B5436"/>
    <rect x="192" y="108" width="8" height="32" fill="#6B5436"/>

    <!-- Monitor on desk -->
    <rect x="130" y="68" width="40" height="30" fill="#2F2F2F"/>
    <rect x="134" y="72" width="32" height="22" fill="#87CEEB"/>
    <rect x="146" y="98" width="8" height="8" fill="#4A4A4A"/>

    <!-- Office chair -->
    <rect x="136" y="124" width="24" height="8" fill="#1E3A8A"/>
    <rect x="144" y="116" width="8" height="8" fill="#1E3A8A"/>
    <rect x="144" y="132" width="8" height="16" fill="#4A4A4A"/>
  </svg>`,

  kitchen: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <!-- Floor -->
    <rect width="320" height="80" y="120" fill="#E8DCC8"/>
    <!-- Wall -->
    <rect width="320" height="120" fill="#F5F5DC"/>

    <!-- Upper cabinets -->
    <rect x="20" y="30" width="120" height="40" fill="#8FBC8F"/>
    <rect x="20" y="30" width="2" height="40" fill="#556B2F"/>
    <rect x="138" y="30" width="2" height="40" fill="#556B2F"/>
    <rect x="78" y="30" width="2" height="40" fill="#556B2F"/>
    <rect x="20" y="68" width="120" height="2" fill="#556B2F"/>

    <!-- Window above counter -->
    <rect x="180" y="30" width="60" height="60" fill="#ADD8E6"/>
    <rect x="180" y="30" width="60" height="2" fill="#696969"/>
    <rect x="180" y="88" width="60" height="2" fill="#696969"/>
    <rect x="180" y="30" width="2" height="60" fill="#696969"/>
    <rect x="238" y="30" width="2" height="60" fill="#696969"/>
    <rect x="208" y="30" width="2" height="60" fill="#696969"/>

    <!-- Counter -->
    <rect x="20" y="90" width="220" height="8" fill="#A0A0A0"/>
    <rect x="20" y="98" width="220" height="32" fill="#8FBC8F"/>

    <!-- Stove burners -->
    <rect x="40" y="84" width="16" height="16" fill="#2F2F2F"/>
    <rect x="44" y="88" width="8" height="8" fill="#FF4500"/>
    <rect x="70" y="84" width="16" height="16" fill="#2F2F2F"/>
    <rect x="74" y="88" width="8" height="8" fill="#696969"/>

    <!-- Sink -->
    <rect x="160" y="86" width="40" height="24" fill="#C0C0C0"/>
    <rect x="164" y="90" width="32" height="16" fill="#4682B4"/>
    <rect x="178" y="84" width="8" height="6" fill="#B8B8B8"/>

    <!-- Fridge -->
    <rect x="260" y="60" width="50" height="80" fill="#E0E0E0"/>
    <rect x="260" y="60" width="50" height="2" fill="#A9A9A9"/>
    <rect x="260" y="138" width="50" height="2" fill="#A9A9A9"/>
    <rect x="260" y="100" width="50" height="2" fill="#A9A9A9"/>
    <rect x="274" y="92" width="4" height="6" fill="#696969"/>
    <rect x="274" y="110" width="4" height="6" fill="#696969"/>
  </svg>`,

  living_room: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <!-- Floor -->
    <rect width="320" height="80" y="120" fill="#A0826D"/>
    <!-- Wall -->
    <rect width="320" height="120" fill="#D2B48C"/>

    <!-- TV Entertainment center -->
    <rect x="110" y="70" width="100" height="60" fill="#4A2F1A"/>
    <!-- TV screen -->
    <rect x="130" y="78" width="60" height="40" fill="#1A1A1A"/>
    <rect x="134" y="82" width="52" height="32" fill="#4682B4"/>

    <!-- Couch -->
    <rect x="40" y="120" width="80" height="40" fill="#8B4513"/>
    <!-- Couch back -->
    <rect x="40" y="110" width="80" height="10" fill="#A0522D"/>
    <!-- Couch cushions -->
    <rect x="44" y="124" width="18" height="16" fill="#CD853F"/>
    <rect x="66" y="124" width="18" height="16" fill="#CD853F"/>
    <rect x="88" y="124" width="18" height="16" fill="#CD853F"/>
    <!-- Armrests -->
    <rect x="36" y="120" width="4" height="20" fill="#A0522D"/>
    <rect x="120" y="120" width="4" height="20" fill="#A0522D"/>

    <!-- Coffee table -->
    <rect x="140" y="140" width="60" height="8" fill="#8B6F47"/>
    <rect x="144" y="148" width="6" height="12" fill="#6B5436"/>
    <rect x="190" y="148" width="6" height="12" fill="#6B5436"/>

    <!-- Floor lamp -->
    <rect x="260" y="140" width="16" height="4" fill="#DAA520"/>
    <rect x="266" y="60" width="4" height="80" fill="#2F2F2F"/>
    <rect x="258" y="54" width="20" height="6" fill="#FFD700"/>
    <rect x="254" y="48" width="28" height="6" fill="#F4A460"/>

    <!-- Rug -->
    <rect x="120" y="150" width="80" height="40" fill="#8B0000" opacity="0.6"/>
  </svg>`,

  bedroom: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <!-- Floor -->
    <rect width="320" height="80" y="120" fill="#A89B8F"/>
    <!-- Wall -->
    <rect width="320" height="120" fill="#B0C4DE"/>

    <!-- Window with curtains -->
    <rect x="220" y="30" width="60" height="60" fill="#E6F3FF"/>
    <rect x="220" y="30" width="60" height="2" fill="#4A4A4A"/>
    <rect x="220" y="88" width="60" height="2" fill="#4A4A4A"/>
    <rect x="220" y="30" width="2" height="60" fill="#4A4A4A"/>
    <rect x="278" y="30" width="2" height="60" fill="#4A4A4A"/>
    <rect x="248" y="30" width="2" height="60" fill="#4A4A4A"/>
    <!-- Curtains -->
    <rect x="210" y="30" width="8" height="70" fill="#6A5ACD" opacity="0.8"/>
    <rect x="282" y="30" width="8" height="70" fill="#6A5ACD" opacity="0.8"/>

    <!-- Bed -->
    <rect x="40" y="100" width="120" height="60" fill="#6B4E71"/>
    <!-- Pillows -->
    <rect x="48" y="96" width="24" height="12" fill="#E6E6FA"/>
    <rect x="76" y="96" width="24" height="12" fill="#E6E6FA"/>
    <!-- Blanket -->
    <rect x="48" y="112" width="104" height="40" fill="#483D8B"/>
    <!-- Blanket pattern -->
    <rect x="56" y="120" width="20" height="2" fill="#6A5ACD"/>
    <rect x="80" y="120" width="20" height="2" fill="#6A5ACD"/>
    <rect x="104" y="120" width="20" height="2" fill="#6A5ACD"/>
    <rect x="56" y="132" width="20" height="2" fill="#6A5ACD"/>
    <rect x="80" y="132" width="20" height="2" fill="#6A5ACD"/>
    <rect x="104" y="132" width="20" height="2" fill="#6A5ACD"/>

    <!-- Nightstand -->
    <rect x="170" y="110" width="32" height="32" fill="#8B6F47"/>
    <rect x="170" y="110" width="32" height="2" fill="#6B5436"/>
    <rect x="170" y="126" width="32" height="2" fill="#6B5436"/>
    <!-- Lamp on nightstand -->
    <rect x="180" y="106" width="12" height="4" fill="#FFD700"/>
    <rect x="184" y="94" width="4" height="12" fill="#4A4A4A"/>
    <rect x="180" y="90" width="12" height="4" fill="#F4A460"/>

    <!-- Dresser -->
    <rect x="220" y="110" width="60" height="50" fill="#8B6F47"/>
    <rect x="220" y="110" width="60" height="2" fill="#6B5436"/>
    <rect x="220" y="134" width="60" height="2" fill="#6B5436"/>
    <rect x="220" y="158" width="60" height="2" fill="#6B5436"/>
    <!-- Drawer handles -->
    <rect x="246" y="120" width="8" height="4" fill="#A9A9A9"/>
    <rect x="246" y="144" width="8" height="4" fill="#A9A9A9"/>
  </svg>`,
};
