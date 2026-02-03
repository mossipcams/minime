/**
 * Room background pixel art assets
 * Inline SVG strings for self-contained bundle (avoids HACS resource loading)
 */

export const roomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="#87CEEB"/>
  <rect x="0" y="80" width="320" height="120" fill="#8B7355"/>

  <!-- Window with light -->
  <rect x="240" y="16" width="64" height="48" fill="#FFF8DC"/>
  <rect x="244" y="20" width="28" height="40" fill="#B0E0E6"/>
  <rect x="276" y="20" width="28" height="40" fill="#B0E0E6"/>
  <rect x="270" y="16" width="4" height="48" fill="#654321"/>
  <rect x="240" y="38" width="64" height="4" fill="#654321"/>

  <!-- Bookshelf -->
  <rect x="16" y="88" width="48" height="80" fill="#654321"/>
  <rect x="20" y="92" width="40" height="20" fill="#8B4513"/>
  <rect x="24" y="96" width="8" height="12" fill="#DC143C"/>
  <rect x="36" y="96" width="8" height="12" fill="#4169E1"/>
  <rect x="48" y="96" width="8" height="12" fill="#228B22"/>
  <rect x="20" y="116" width="40" height="20" fill="#8B4513"/>
  <rect x="24" y="120" width="8" height="12" fill="#FFD700"/>
  <rect x="36" y="120" width="8" height="12" fill="#8B4513"/>
  <rect x="48" y="120" width="8" height="12" fill="#4169E1"/>
  <rect x="20" y="140" width="40" height="24" fill="#8B4513"/>
  <rect x="24" y="144" width="8" height="16" fill="#228B22"/>
  <rect x="36" y="144" width="8" height="16" fill="#DC143C"/>
  <rect x="48" y="144" width="8" height="16" fill="#4169E1"/>

  <!-- Desk -->
  <rect x="112" y="112" width="96" height="8" fill="#8B4513"/>
  <rect x="112" y="120" width="8" height="48" fill="#654321"/>
  <rect x="200" y="120" width="8" height="48" fill="#654321"/>

  <!-- Monitor on desk -->
  <rect x="140" y="88" width="48" height="4" fill="#2F4F4F"/>
  <rect x="144" y="68" width="40" height="20" fill="#000080"/>
  <rect x="148" y="72" width="32" height="12" fill="#4169E1"/>
  <rect x="160" y="92" width="8" height="20" fill="#2F4F4F"/>

  <!-- Office chair -->
  <rect x="224" y="120" width="32" height="8" fill="#4169E1"/>
  <rect x="232" y="108" width="16" height="12" fill="#4169E1"/>
  <rect x="236" y="128" width="8" height="24" fill="#696969"/>
  <rect x="228" y="152" width="8" height="16" fill="#696969"/>
  <rect x="244" y="152" width="8" height="16" fill="#696969"/>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="#F5DEB3"/>
  <rect x="0" y="80" width="320" height="120" fill="#E8D5B7"/>

  <!-- Window -->
  <rect x="240" y="16" width="64" height="48" fill="#FFF8DC"/>
  <rect x="244" y="20" width="28" height="40" fill="#87CEEB"/>
  <rect x="276" y="20" width="28" height="40" fill="#87CEEB"/>
  <rect x="270" y="16" width="4" height="48" fill="#8B7355"/>
  <rect x="240" y="38" width="64" height="4" fill="#8B7355"/>

  <!-- Upper cabinets -->
  <rect x="16" y="16" width="160" height="48" fill="#90EE90"/>
  <rect x="20" y="20" width="36" height="40" fill="#98FB98"/>
  <rect x="24" y="36" width="4" height="8" fill="#DAA520"/>
  <rect x="60" y="20" width="36" height="40" fill="#98FB98"/>
  <rect x="64" y="36" width="4" height="8" fill="#DAA520"/>
  <rect x="100" y="20" width="36" height="40" fill="#98FB98"/>
  <rect x="104" y="36" width="4" height="8" fill="#DAA520"/>
  <rect x="140" y="20" width="32" height="40" fill="#98FB98"/>
  <rect x="144" y="36" width="4" height="8" fill="#DAA520"/>

  <!-- Counter -->
  <rect x="16" y="96" width="176" height="8" fill="#D3D3D3"/>
  <rect x="16" y="104" width="176" height="64" fill="#90EE90"/>
  <rect x="20" y="108" width="40" height="52" fill="#98FB98"/>
  <rect x="24" y="128" width="4" height="8" fill="#DAA520"/>
  <rect x="64" y="108" width="40" height="52" fill="#98FB98"/>
  <rect x="68" y="128" width="4" height="8" fill="#DAA520"/>
  <rect x="108" y="108" width="40" height="52" fill="#98FB98"/>
  <rect x="112" y="128" width="4" height="8" fill="#DAA520"/>
  <rect x="152" y="108" width="36" height="52" fill="#98FB98"/>
  <rect x="156" y="128" width="4" height="8" fill="#DAA520"/>

  <!-- Stove burners on counter -->
  <rect x="28" y="88" width="12" height="8" fill="#696969"/>
  <rect x="48" y="88" width="12" height="8" fill="#696969"/>
  <rect x="28" y="72" width="12" height="12" fill="#DC143C"/>
  <rect x="48" y="72" width="12" height="12" fill="#DC143C"/>

  <!-- Sink -->
  <rect x="120" y="88" width="32" height="8" fill="#C0C0C0"/>
  <rect x="124" y="84" width="8" height="4" fill="#C0C0C0"/>

  <!-- Fridge -->
  <rect x="224" y="88" width="64" height="80" fill="#DCDCDC"/>
  <rect x="228" y="92" width="56" height="36" fill="#F0F0F0"/>
  <rect x="248" y="108" width="4" height="8" fill="#696969"/>
  <rect x="228" y="132" width="56" height="32" fill="#F0F0F0"/>
  <rect x="248" y="144" width="4" height="8" fill="#696969"/>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="#FFE4B5"/>
  <rect x="0" y="80" width="320" height="120" fill="#CD853F"/>

  <!-- Window with curtains -->
  <rect x="240" y="16" width="64" height="64" fill="#FFF8DC"/>
  <rect x="240" y="20" width="16" height="56" fill="#8B4513"/>
  <rect x="260" y="20" width="24" height="56" fill="#87CEEB"/>
  <rect x="288" y="20" width="16" height="56" fill="#8B4513"/>

  <!-- Entertainment center -->
  <rect x="200" y="88" width="96" height="56" fill="#654321"/>
  <rect x="204" y="92" width="88" height="24" fill="#000000"/>
  <rect x="208" y="96" width="80" height="16" fill="#4169E1"/>
  <rect x="204" y="120" width="28" height="20" fill="#8B4513"/>
  <rect x="236" y="120" width="28" height="20" fill="#8B4513"/>
  <rect x="268" y="120" width="24" height="20" fill="#8B4513"/>

  <!-- Coffee table -->
  <rect x="88" y="120" width="80" height="8" fill="#8B4513"/>
  <rect x="92" y="128" width="8" height="24" fill="#654321"/>
  <rect x="156" y="128" width="8" height="24" fill="#654321"/>
  <rect x="100" y="124" width="56" height="4" fill="#DAA520"/>

  <!-- Couch -->
  <rect x="16" y="104" width="128" height="16" fill="#8B0000"/>
  <rect x="16" y="120" width="128" height="32" fill="#DC143C"/>
  <rect x="16" y="152" width="16" height="16" fill="#8B0000"/>
  <rect x="128" y="152" width="16" height="16" fill="#8B0000"/>
  <rect x="20" y="96" width="16" height="8" fill="#DC143C"/>
  <rect x="44" y="96" width="16" height="8" fill="#DC143C"/>
  <rect x="68" y="96" width="16" height="8" fill="#DC143C"/>
  <rect x="92" y="96" width="16" height="8" fill="#DC143C"/>
  <rect x="116" y="96" width="16" height="8" fill="#DC143C"/>

  <!-- Floor lamp -->
  <rect x="176" y="88" width="8" height="64" fill="#DAA520"/>
  <rect x="172" y="84" width="16" height="4" fill="#FFD700"/>
  <rect x="168" y="76" width="24" height="8" fill="#FFA500"/>
  <rect x="172" y="152" width="8" height="16" fill="#654321"/>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="#E6E6FA"/>
  <rect x="0" y="80" width="320" height="120" fill="#9370DB"/>

  <!-- Window with curtains -->
  <rect x="240" y="16" width="64" height="64" fill="#FFF8DC"/>
  <rect x="240" y="20" width="16" height="56" fill="#4B0082"/>
  <rect x="260" y="20" width="24" height="56" fill="#B0C4DE"/>
  <rect x="288" y="20" width="16" height="56" fill="#4B0082"/>

  <!-- Bed -->
  <rect x="16" y="104" width="128" height="16" fill="#4B0082"/>
  <rect x="16" y="120" width="128" height="40" fill="#6A5ACD"/>
  <rect x="24" y="92" width="16" height="12" fill="#F0E68C"/>
  <rect x="48" y="92" width="16" height="12" fill="#F0E68C"/>
  <rect x="72" y="92" width="16" height="12" fill="#F0E68C"/>
  <rect x="96" y="92" width="16" height="12" fill="#F0E68C"/>
  <rect x="120" y="92" width="16" height="12" fill="#F0E68C"/>
  <rect x="16" y="160" width="16" height="8" fill="#4B0082"/>
  <rect x="128" y="160" width="16" height="8" fill="#4B0082"/>

  <!-- Nightstand with lamp -->
  <rect x="160" y="120" width="32" height="40" fill="#654321"/>
  <rect x="164" y="124" width="24" height="12" fill="#8B4513"/>
  <rect x="172" y="128" width="2" height="4" fill="#DAA520"/>
  <rect x="164" y="140" width="24" height="16" fill="#8B4513"/>
  <rect x="172" y="148" width="2" height="4" fill="#DAA520"/>
  <rect x="172" y="108" width="8" height="12" fill="#DAA520"/>
  <rect x="168" y="104" width="16" height="4" fill="#FFD700"/>
  <rect x="164" y="96" width="24" height="8" fill="#FFA500"/>

  <!-- Dresser -->
  <rect x="208" y="96" width="80" height="64" fill="#654321"/>
  <rect x="212" y="100" width="72" height="20" fill="#8B4513"/>
  <rect x="240" y="108" width="4" height="4" fill="#DAA520"/>
  <rect x="256" y="108" width="4" height="4" fill="#DAA520"/>
  <rect x="212" y="124" width="72" height="20" fill="#8B4513"/>
  <rect x="240" y="132" width="4" height="4" fill="#DAA520"/>
  <rect x="256" y="132" width="4" height="4" fill="#DAA520"/>
  <rect x="212" y="148" width="72" height="8" fill="#8B4513"/>
</svg>`,
};
