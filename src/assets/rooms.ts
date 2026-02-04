/**
 * Room background smooth vector art assets
 * Inline SVG strings for self-contained bundle (avoids HACS resource loading)
 */

export const roomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="offWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#A8D8EA"/>
      <stop offset="100%" stop-color="#8BBDD4"/>
    </linearGradient>
    <linearGradient id="offFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C4A882"/>
      <stop offset="100%" stop-color="#A8906E"/>
    </linearGradient>
  </defs>
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="url(#offWall)"/>
  <rect x="0" y="80" width="320" height="120" fill="url(#offFloor)"/>

  <!-- Window -->
  <rect x="238" y="14" width="68" height="52" rx="4" fill="#F5ECD7"/>
  <rect x="243" y="19" width="28" height="42" rx="3" fill="#B8D4E3"/>
  <rect x="275" y="19" width="28" height="42" rx="3" fill="#B8D4E3"/>
  <rect x="269" y="14" width="5" height="52" rx="2" fill="#7A5C3E"/>
  <rect x="238" y="37" width="68" height="5" rx="2" fill="#7A5C3E"/>

  <!-- Bookshelf -->
  <rect x="14" y="86" width="52" height="82" rx="4" fill="#7A5C3E"/>
  <rect x="18" y="90" width="44" height="22" rx="3" fill="#A0764A"/>
  <rect x="22" y="94" width="10" height="14" rx="2" fill="#E85D5D"/>
  <rect x="36" y="94" width="10" height="14" rx="2" fill="#5B8DEF"/>
  <rect x="48" y="94" width="10" height="14" rx="2" fill="#4CAF7D"/>
  <rect x="18" y="116" width="44" height="22" rx="3" fill="#A0764A"/>
  <rect x="22" y="120" width="10" height="14" rx="2" fill="#F0C040"/>
  <rect x="36" y="120" width="10" height="14" rx="2" fill="#A0764A"/>
  <rect x="48" y="120" width="10" height="14" rx="2" fill="#5B8DEF"/>
  <rect x="18" y="142" width="44" height="22" rx="3" fill="#A0764A"/>
  <rect x="22" y="146" width="10" height="14" rx="2" fill="#4CAF7D"/>
  <rect x="36" y="146" width="10" height="14" rx="2" fill="#E85D5D"/>
  <rect x="48" y="146" width="10" height="14" rx="2" fill="#5B8DEF"/>

  <!-- Desk -->
  <rect x="110" y="110" width="100" height="10" rx="4" fill="#A0764A"/>
  <rect x="112" y="120" width="10" height="48" rx="3" fill="#7A5C3E"/>
  <rect x="198" y="120" width="10" height="48" rx="3" fill="#7A5C3E"/>

  <!-- Monitor -->
  <rect x="138" y="86" width="52" height="6" rx="3" fill="#4A4A4A"/>
  <rect x="142" y="66" width="44" height="22" rx="4" fill="#2D2D5E"/>
  <rect x="146" y="70" width="36" height="14" rx="2" fill="#5B8DEF"/>
  <rect x="160" y="92" width="8" height="18" rx="3" fill="#4A4A4A"/>

  <!-- Office chair -->
  <rect x="222" y="118" width="36" height="10" rx="5" fill="#5B8DEF"/>
  <rect x="230" y="106" width="20" height="14" rx="4" fill="#5B8DEF"/>
  <rect x="236" y="128" width="8" height="24" rx="3" fill="#808080"/>
  <circle cx="232" cy="158" r="5" fill="#808080"/>
  <circle cx="248" cy="158" r="5" fill="#808080"/>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="kitWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFF3E0"/>
      <stop offset="100%" stop-color="#F0DCC0"/>
    </linearGradient>
    <linearGradient id="kitFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F5E6D0"/>
      <stop offset="100%" stop-color="#E0CCAE"/>
    </linearGradient>
  </defs>
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="url(#kitWall)"/>
  <rect x="0" y="80" width="320" height="120" fill="url(#kitFloor)"/>

  <!-- Window -->
  <rect x="238" y="14" width="68" height="52" rx="4" fill="#F5ECD7"/>
  <rect x="243" y="19" width="28" height="42" rx="3" fill="#A8D8EA"/>
  <rect x="275" y="19" width="28" height="42" rx="3" fill="#A8D8EA"/>
  <rect x="269" y="14" width="5" height="52" rx="2" fill="#A0886E"/>
  <rect x="238" y="37" width="68" height="5" rx="2" fill="#A0886E"/>

  <!-- Upper cabinets -->
  <rect x="14" y="14" width="164" height="50" rx="6" fill="#81C784"/>
  <rect x="18" y="18" width="38" height="42" rx="4" fill="#A5D6A7"/>
  <rect x="26" y="34" width="6" height="10" rx="3" fill="#D4A844"/>
  <rect x="60" y="18" width="38" height="42" rx="4" fill="#A5D6A7"/>
  <rect x="68" y="34" width="6" height="10" rx="3" fill="#D4A844"/>
  <rect x="102" y="18" width="38" height="42" rx="4" fill="#A5D6A7"/>
  <rect x="110" y="34" width="6" height="10" rx="3" fill="#D4A844"/>
  <rect x="144" y="18" width="30" height="42" rx="4" fill="#A5D6A7"/>
  <rect x="152" y="34" width="6" height="10" rx="3" fill="#D4A844"/>

  <!-- Counter -->
  <rect x="14" y="94" width="180" height="10" rx="4" fill="#E0E0E0"/>
  <rect x="14" y="104" width="180" height="64" rx="6" fill="#81C784"/>
  <rect x="18" y="108" width="42" height="56" rx="4" fill="#A5D6A7"/>
  <rect x="26" y="130" width="6" height="10" rx="3" fill="#D4A844"/>
  <rect x="64" y="108" width="42" height="56" rx="4" fill="#A5D6A7"/>
  <rect x="72" y="130" width="6" height="10" rx="3" fill="#D4A844"/>
  <rect x="110" y="108" width="42" height="56" rx="4" fill="#A5D6A7"/>
  <rect x="118" y="130" width="6" height="10" rx="3" fill="#D4A844"/>
  <rect x="156" y="108" width="34" height="56" rx="4" fill="#A5D6A7"/>
  <rect x="164" y="130" width="6" height="10" rx="3" fill="#D4A844"/>

  <!-- Stove burners -->
  <rect x="26" y="86" width="16" height="10" rx="4" fill="#808080"/>
  <rect x="48" y="86" width="16" height="10" rx="4" fill="#808080"/>
  <ellipse cx="34" cy="78" rx="8" ry="6" fill="#E85D5D"/>
  <ellipse cx="56" cy="78" rx="8" ry="6" fill="#E85D5D"/>

  <!-- Sink -->
  <rect x="118" y="86" width="36" height="10" rx="5" fill="#D0D0D0"/>
  <rect x="126" y="80" width="8" height="8" rx="3" fill="#D0D0D0"/>

  <!-- Fridge -->
  <rect x="222" y="86" width="68" height="82" rx="6" fill="#E8E8E8"/>
  <rect x="226" y="90" width="60" height="36" rx="4" fill="#F5F5F5"/>
  <rect x="250" y="106" width="6" height="10" rx="3" fill="#808080"/>
  <rect x="226" y="130" width="60" height="34" rx="4" fill="#F5F5F5"/>
  <rect x="250" y="144" width="6" height="10" rx="3" fill="#808080"/>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="livWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFE8C8"/>
      <stop offset="100%" stop-color="#F0D4A8"/>
    </linearGradient>
    <linearGradient id="livFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D4A06A"/>
      <stop offset="100%" stop-color="#BF8C56"/>
    </linearGradient>
  </defs>
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="url(#livWall)"/>
  <rect x="0" y="80" width="320" height="120" fill="url(#livFloor)"/>

  <!-- Window with curtains -->
  <rect x="238" y="14" width="68" height="66" rx="4" fill="#F5ECD7"/>
  <rect x="238" y="18" width="18" height="58" rx="3" fill="#A0764A"/>
  <rect x="258" y="18" width="28" height="58" rx="3" fill="#A8D8EA"/>
  <rect x="288" y="18" width="18" height="58" rx="3" fill="#A0764A"/>

  <!-- Entertainment center -->
  <rect x="198" y="86" width="100" height="58" rx="6" fill="#7A5C3E"/>
  <rect x="202" y="90" width="92" height="26" rx="4" fill="#1A1A2E"/>
  <rect x="206" y="94" width="84" height="18" rx="3" fill="#5B8DEF"/>
  <rect x="202" y="120" width="30" height="20" rx="3" fill="#A0764A"/>
  <rect x="236" y="120" width="30" height="20" rx="3" fill="#A0764A"/>
  <rect x="270" y="120" width="24" height="20" rx="3" fill="#A0764A"/>

  <!-- Coffee table -->
  <rect x="86" y="118" width="84" height="10" rx="5" fill="#A0764A"/>
  <rect x="90" y="128" width="10" height="24" rx="4" fill="#7A5C3E"/>
  <rect x="154" y="128" width="10" height="24" rx="4" fill="#7A5C3E"/>

  <!-- Couch -->
  <rect x="14" y="102" width="132" height="18" rx="8" fill="#A01A1A"/>
  <rect x="14" y="120" width="132" height="34" rx="6" fill="#D94444"/>
  <rect x="14" y="154" width="18" height="14" rx="4" fill="#A01A1A"/>
  <rect x="128" y="154" width="18" height="14" rx="4" fill="#A01A1A"/>
  <ellipse cx="30" cy="98" rx="10" ry="5" fill="#D94444"/>
  <ellipse cx="54" cy="98" rx="10" ry="5" fill="#D94444"/>
  <ellipse cx="78" cy="98" rx="10" ry="5" fill="#D94444"/>
  <ellipse cx="102" cy="98" rx="10" ry="5" fill="#D94444"/>
  <ellipse cx="126" cy="98" rx="10" ry="5" fill="#D94444"/>

  <!-- Floor lamp -->
  <rect x="176" y="88" width="6" height="64" rx="3" fill="#D4A844"/>
  <ellipse cx="179" cy="84" rx="10" ry="4" fill="#F0C040"/>
  <ellipse cx="179" cy="78" rx="14" ry="6" fill="#FFA940"/>
  <rect x="174" y="152" width="10" height="16" rx="3" fill="#7A5C3E"/>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="bedWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E8E0F0"/>
      <stop offset="100%" stop-color="#D6CCE4"/>
    </linearGradient>
    <linearGradient id="bedFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#A07CD8"/>
      <stop offset="100%" stop-color="#8A68C0"/>
    </linearGradient>
  </defs>
  <!-- Floor and walls -->
  <rect x="0" y="0" width="320" height="80" fill="url(#bedWall)"/>
  <rect x="0" y="80" width="320" height="120" fill="url(#bedFloor)"/>

  <!-- Window with curtains -->
  <rect x="238" y="14" width="68" height="66" rx="4" fill="#F5ECD7"/>
  <rect x="238" y="18" width="18" height="58" rx="3" fill="#4B2080"/>
  <rect x="258" y="18" width="28" height="58" rx="3" fill="#C0CCE0"/>
  <rect x="288" y="18" width="18" height="58" rx="3" fill="#4B2080"/>

  <!-- Bed -->
  <rect x="14" y="102" width="132" height="18" rx="8" fill="#4B2080"/>
  <rect x="14" y="120" width="132" height="42" rx="6" fill="#7B6AAE"/>
  <ellipse cx="32" cy="97" rx="10" ry="6" fill="#F0E4A0"/>
  <ellipse cx="56" cy="97" rx="10" ry="6" fill="#F0E4A0"/>
  <ellipse cx="80" cy="97" rx="10" ry="6" fill="#F0E4A0"/>
  <ellipse cx="104" cy="97" rx="10" ry="6" fill="#F0E4A0"/>
  <ellipse cx="128" cy="97" rx="10" ry="6" fill="#F0E4A0"/>
  <rect x="14" y="160" width="18" height="8" rx="4" fill="#4B2080"/>
  <rect x="128" y="160" width="18" height="8" rx="4" fill="#4B2080"/>

  <!-- Nightstand with lamp -->
  <rect x="158" y="118" width="36" height="42" rx="5" fill="#7A5C3E"/>
  <rect x="162" y="122" width="28" height="14" rx="3" fill="#A0764A"/>
  <rect x="173" y="128" width="4" height="4" rx="2" fill="#D4A844"/>
  <rect x="162" y="140" width="28" height="16" rx="3" fill="#A0764A"/>
  <rect x="173" y="148" width="4" height="4" rx="2" fill="#D4A844"/>
  <rect x="172" y="106" width="8" height="12" rx="3" fill="#D4A844"/>
  <ellipse cx="176" cy="104" rx="10" ry="4" fill="#F0C040"/>
  <ellipse cx="176" cy="98" rx="14" ry="6" fill="#FFA940"/>

  <!-- Dresser -->
  <rect x="206" y="94" width="84" height="66" rx="6" fill="#7A5C3E"/>
  <rect x="210" y="98" width="76" height="22" rx="4" fill="#A0764A"/>
  <rect x="242" y="106" width="6" height="6" rx="3" fill="#D4A844"/>
  <rect x="258" y="106" width="6" height="6" rx="3" fill="#D4A844"/>
  <rect x="210" y="124" width="76" height="22" rx="4" fill="#A0764A"/>
  <rect x="242" y="132" width="6" height="6" rx="3" fill="#D4A844"/>
  <rect x="258" y="132" width="6" height="6" rx="3" fill="#D4A844"/>
  <rect x="210" y="150" width="76" height="8" rx="3" fill="#A0764A"/>
</svg>`,
};
