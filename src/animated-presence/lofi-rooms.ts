/**
 * Atmospheric SVG room backgrounds for 80px card header
 * Mood-based: color, lighting, and subtle texture — not literal furniture
 * ViewBox: 400x100, preserveAspectRatio="xMidYMid slice"
 * Gradient IDs prefixed with 'lofi' to avoid collision
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiOffBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A2A3A"/><stop offset="50%" stop-color="#1E2E40"/><stop offset="100%" stop-color="#24344A"/></linearGradient>
    <radialGradient id="lofiOffMonitor" cx="0.7" cy="0.4" r="0.4"><stop offset="0%" stop-color="#4A8ABE" stop-opacity="0.3"/><stop offset="100%" stop-color="#4A8ABE" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiOffLamp" cx="0.25" cy="0.3" r="0.3"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.25"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="400" height="100" fill="url(#lofiOffBg)"/>
  <!-- warm lamp glow left -->
  <rect width="400" height="100" fill="url(#lofiOffLamp)"/>
  <!-- cool monitor glow right -->
  <rect width="400" height="100" fill="url(#lofiOffMonitor)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- subtle horizontal wood grain -->
  <line x1="0" y1="65" x2="400" y2="65" stroke="#3A4A5A" stroke-width="0.5" opacity="0.15"/>
  <line x1="0" y1="75" x2="400" y2="75" stroke="#3A4A5A" stroke-width="0.4" opacity="0.1"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A4A5A" stroke-width="0.4" opacity="0.08"/>
  <!-- floating code-line accents in monitor glow area -->
  <line x1="260" y1="30" x2="310" y2="30" stroke="#6AAAC0" stroke-width="1" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.12;0" dur="3s" repeatCount="indefinite"/>
  </line>
  <line x1="265" y1="38" x2="330" y2="38" stroke="#6AAAC0" stroke-width="1" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.1;0" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
  </line>
  <line x1="270" y1="46" x2="315" y2="46" stroke="#9AC06A" stroke-width="1" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.08;0" dur="2.8s" repeatCount="indefinite" begin="1s"/>
  </line>
  <line x1="262" y1="54" x2="325" y2="54" stroke="#C0906A" stroke-width="1" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.08;0" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
  </line>
  <!-- cursor blink -->
  <rect x="326" y="36" width="2" height="5" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.2;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- subtle bookshelf silhouette far right -->
  <rect x="365" y="10" width="30" height="55" rx="1" fill="#253545" opacity="0.5"/>
  <rect x="368" y="14" width="24" height="8" fill="#2A3A4A" opacity="0.4"/>
  <rect x="368" y="26" width="24" height="8" fill="#2A3A4A" opacity="0.4"/>
  <rect x="368" y="38" width="24" height="8" fill="#2A3A4A" opacity="0.4"/>
  <!-- window light hint top-left -->
  <rect x="30" y="5" width="40" height="30" rx="1.5" fill="#3A5060" opacity="0.25"/>
  <rect x="33" y="8" width="16" height="24" fill="#4A6878" opacity="0.2"/>
  <rect x="51" y="8" width="16" height="24" fill="#4A6878" opacity="0.2"/>
  <!-- ambient particles -->
  <circle cx="100" cy="25" r="0.8" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.15;0.08;0" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="45" r="0.6" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.06;0" dur="6s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle cx="150" cy="60" r="0.5" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.05;0" dur="7s" repeatCount="indefinite" begin="3.5s"/>
  </circle>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2A2018"/><stop offset="50%" stop-color="#302418"/><stop offset="100%" stop-color="#382820"/></linearGradient>
    <radialGradient id="lofiKitWarm" cx="0.5" cy="0.5" r="0.45"><stop offset="0%" stop-color="#E08040" stop-opacity="0.2"/><stop offset="100%" stop-color="#E08040" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiKitOverhead" cx="0.5" cy="0.1" r="0.6"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.12"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="400" height="100" fill="url(#lofiKitBg)"/>
  <!-- warm overhead light -->
  <rect width="400" height="100" fill="url(#lofiKitOverhead)"/>
  <!-- warm stove glow center -->
  <rect width="400" height="100" fill="url(#lofiKitWarm)">
    <animate attributeName="opacity" values="0.7;1;0.8;0.95;0.7" dur="1.5s" repeatCount="indefinite"/>
  </rect>
  <!-- subtle tile pattern on upper wall -->
  <g stroke="#483828" stroke-width="0.3" opacity="0.15">
    <line x1="0" y1="15" x2="400" y2="15"/><line x1="0" y1="30" x2="400" y2="30"/>
    <line x1="0" y1="45" x2="400" y2="45"/>
    <line x1="20" y1="0" x2="20" y2="50"/><line x1="40" y1="0" x2="40" y2="50"/>
    <line x1="60" y1="0" x2="60" y2="50"/><line x1="80" y1="0" x2="80" y2="50"/>
    <line x1="100" y1="0" x2="100" y2="50"/><line x1="120" y1="0" x2="120" y2="50"/>
    <line x1="140" y1="0" x2="140" y2="50"/><line x1="160" y1="0" x2="160" y2="50"/>
    <line x1="180" y1="0" x2="180" y2="50"/><line x1="200" y1="0" x2="200" y2="50"/>
    <line x1="220" y1="0" x2="220" y2="50"/><line x1="240" y1="0" x2="240" y2="50"/>
    <line x1="260" y1="0" x2="260" y2="50"/><line x1="280" y1="0" x2="280" y2="50"/>
    <line x1="300" y1="0" x2="300" y2="50"/><line x1="320" y1="0" x2="320" y2="50"/>
    <line x1="340" y1="0" x2="340" y2="50"/><line x1="360" y1="0" x2="360" y2="50"/>
    <line x1="380" y1="0" x2="380" y2="50"/>
  </g>
  <!-- counter line -->
  <line x1="0" y1="58" x2="400" y2="58" stroke="#504030" stroke-width="1.5" opacity="0.3"/>
  <!-- stove flame glows -->
  <ellipse cx="180" cy="54" rx="6" ry="3" fill="#E08040" opacity="0">
    <animate attributeName="opacity" values="0;0.35;0.2;0.4;0" dur="0.6s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="210" cy="54" rx="6" ry="3" fill="#E08040" opacity="0">
    <animate attributeName="opacity" values="0;0.3;0.15;0.35;0" dur="0.7s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <!-- steam wisps rising -->
  <circle cx="185" cy="48" r="2" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="48" to="15" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.08;0.06;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="185;182;187;183" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="190" cy="46" r="1.5" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="46" to="10" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="opacity" values="0;0.06;0.04;0" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="cx" values="190;193;188;191" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
  </circle>
  <circle cx="195" cy="47" r="1.8" fill="#FFF" opacity="0">
    <animate attributeName="cy" from="47" to="12" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="opacity" values="0;0.07;0.05;0" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cx" values="195;192;197;194" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <!-- hanging utensil silhouettes -->
  <line x1="50" y1="8" x2="50" y2="22" stroke="#504030" stroke-width="0.8" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="-1,50,8;1,50,8;-1,50,8" dur="5s" repeatCount="indefinite"/>
  </line>
  <line x1="60" y1="8" x2="60" y2="26" stroke="#504030" stroke-width="0.8" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0.5,60,8;-0.5,60,8;0.5,60,8" dur="4.5s" repeatCount="indefinite"/>
  </line>
  <line x1="70" y1="8" x2="70" y2="20" stroke="#504030" stroke-width="0.8" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="-0.5,70,8;0.5,70,8;-0.5,70,8" dur="5.5s" repeatCount="indefinite"/>
  </line>
  <!-- ambient warm dust -->
  <circle cx="120" cy="35" r="0.6" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="300" cy="50" r="0.5" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="6.5s" repeatCount="indefinite" begin="2s"/>
  </circle>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A1828"/><stop offset="50%" stop-color="#201E30"/><stop offset="100%" stop-color="#262438"/></linearGradient>
    <radialGradient id="lofiLivTV" cx="0.7" cy="0.4" r="0.45"><stop offset="0%" stop-color="#5A8ABE" stop-opacity="0.2"/><stop offset="100%" stop-color="#5A8ABE" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.2" cy="0.35" r="0.3"><stop offset="0%" stop-color="#FFF0C0" stop-opacity="0.2"/><stop offset="100%" stop-color="#FFF0C0" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="400" height="100" fill="url(#lofiLivBg)"/>
  <!-- warm lamp glow left -->
  <rect width="400" height="100" fill="url(#lofiLivLamp)">
    <animate attributeName="opacity" values="0.7;0.9;0.75;0.85;0.7" dur="6s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow right — color shifts -->
  <rect width="400" height="100" fill="url(#lofiLivTV)">
    <animate attributeName="opacity" values="0.6;1;0.7;0.9;0.6" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV color shift overlay -->
  <rect x="240" y="10" width="120" height="60" rx="2" fill="#5A8ABE" opacity="0.03">
    <animate attributeName="fill" values="#5A8ABE;#8A5ABE;#5ABE7A;#BE8A5A;#5A8ABE" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.02;0.06;0.03;0.05;0.02" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- subtle floor line -->
  <line x1="0" y1="68" x2="400" y2="68" stroke="#3A3848" stroke-width="0.5" opacity="0.2"/>
  <!-- wood floor hints -->
  <line x1="0" y1="78" x2="400" y2="78" stroke="#3A3848" stroke-width="0.3" opacity="0.1"/>
  <line x1="0" y1="88" x2="400" y2="88" stroke="#3A3848" stroke-width="0.3" opacity="0.08"/>
  <!-- window light hint center-top -->
  <rect x="150" y="3" width="55" height="30" rx="1.5" fill="#2A2840" opacity="0.3"/>
  <rect x="153" y="6" width="22" height="24" fill="#3A3858" opacity="0.25"/>
  <rect x="180" y="6" width="22" height="24" fill="#3A3858" opacity="0.25"/>
  <!-- ambient light spill from window -->
  <polygon points="153,33 202,33 220,80 135,80" fill="#E0D8F0" opacity="0.015">
    <animate attributeName="opacity" values="0.01;0.025;0.015;0.02;0.01" dur="8s" repeatCount="indefinite"/>
  </polygon>
  <!-- ambient dust in light -->
  <circle cx="80" cy="30" r="0.7" fill="#FFF0C0" opacity="0">
    <animate attributeName="opacity" values="0;0.12;0.06;0" dur="5.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="180" cy="50" r="0.5" fill="#E0D8F0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="6s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle cx="320" cy="35" r="0.6" fill="#8AB0E0" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.05;0" dur="4.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedBg" x1="0" y1="0" x2="0.5" y2="1"><stop offset="0%" stop-color="#141028"/><stop offset="50%" stop-color="#181430"/><stop offset="100%" stop-color="#1C1838"/></linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.8" cy="0.2" r="0.35"><stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.2"/><stop offset="100%" stop-color="#E0D8C0" stop-opacity="0"/></radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.15" cy="0.5" r="0.25"><stop offset="0%" stop-color="#F0D080" stop-opacity="0.12"/><stop offset="100%" stop-color="#F0D080" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="400" height="100" fill="url(#lofiBedBg)"/>
  <!-- moonlight glow -->
  <rect width="400" height="100" fill="url(#lofiBedMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="6s" repeatCount="indefinite"/>
  </rect>
  <!-- dim bedside lamp -->
  <rect width="400" height="100" fill="url(#lofiBedLamp)">
    <animate attributeName="opacity" values="0.6;0.8;0.65;0.75;0.6" dur="4s" repeatCount="indefinite"/>
  </rect>
  <!-- window silhouette -->
  <rect x="290" y="5" width="42" height="32" rx="1.5" fill="#1E1A38" opacity="0.4"/>
  <rect x="293" y="8" width="16" height="26" fill="#202048" opacity="0.5"/>
  <rect x="313" y="8" width="16" height="26" fill="#202048" opacity="0.5"/>
  <!-- stars through window -->
  <circle cx="298" cy="12" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.4;0.1;0.3;0.05" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="306" cy="17" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.35;0.05;0.25;0.1" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="301" cy="24" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0;0.25;0.08;0.2;0" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle cx="318" cy="11" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.4;0.12;0.3;0.08" dur="4.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="325" cy="16" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0.05;0.3;0.1;0.2;0.05" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <!-- moon through window -->
  <circle cx="322" cy="14" r="4" fill="#E0D8C0" opacity="0.3">
    <animate attributeName="opacity" values="0.25;0.4;0.3;0.35;0.25" dur="6s" repeatCount="indefinite"/>
  </circle>
  <!-- moonlight beam on floor -->
  <polygon points="293,37 329,37 345,100 275,100" fill="#D0C8E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.035;0.02;0.03;0.015" dur="6s" repeatCount="indefinite"/>
  </polygon>
  <!-- ambient floating dust in moonlight -->
  <circle cx="310" cy="50" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.1;0.05;0" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="55" to="40" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="320" cy="65" r="0.4" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.08;0.04;0" dur="7s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="70" to="50" dur="7s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle cx="300" cy="72" r="0.6" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.06;0.03;0" dur="8s" repeatCount="indefinite" begin="4s"/>
    <animate attributeName="cy" from="75" to="58" dur="8s" repeatCount="indefinite" begin="4s"/>
  </circle>
</svg>`,
};
