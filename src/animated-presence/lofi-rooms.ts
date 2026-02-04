/**
 * Lofi-style SVG room backgrounds for animated presence card
 * Muted warm pastels, minimal furniture silhouettes, radial gradient glows
 * Gradient IDs prefixed with 'lofi' to avoid collision with existing rooms.ts
 */

export const lofiRoomBackgrounds: Record<string, string> = {
  office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiOffW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B6A6"/><stop offset="100%" stop-color="#B8A696"/></linearGradient>
    <linearGradient id="lofiOffF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#A89078"/><stop offset="100%" stop-color="#987860"/></linearGradient>
    <radialGradient id="lofiOffG" cx="0.7" cy="0.3" r="0.4"><stop offset="0%" stop-color="#FFF5E0" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFF5E0" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="320" height="100" fill="url(#lofiOffW)"/>
  <rect y="100" width="320" height="100" fill="url(#lofiOffF)"/>
  <rect width="320" height="200" fill="url(#lofiOffG)"/>
  <rect x="220" y="20" width="60" height="45" rx="8" fill="#D4C4B0"/>
  <rect x="225" y="25" width="50" height="35" rx="6" fill="#B8D4E3" opacity="0.6"/>
  <rect x="100" y="105" width="90" height="8" rx="4" fill="#8B7355"/>
  <rect x="105" y="113" width="8" height="40" rx="4" fill="#7A6245"/>
  <rect x="180" y="113" width="8" height="40" rx="4" fill="#7A6245"/>
  <rect x="130" y="80" width="35" height="20" rx="8" fill="#4A4A5E" opacity="0.7"/>
  <rect x="141" y="100" width="12" height="8" rx="4" fill="#4A4A5E" opacity="0.5"/>
  <rect x="20" y="90" width="45" height="68" rx="10" fill="#8B7355" opacity="0.6"/>
  <rect x="25" y="96" width="35" height="18" rx="6" fill="#7A6245" opacity="0.5"/>
  <rect x="25" y="120" width="35" height="18" rx="6" fill="#7A6245" opacity="0.5"/>
</svg>`,

  kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiKitW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D4C8B0"/><stop offset="100%" stop-color="#C4B8A0"/></linearGradient>
    <linearGradient id="lofiKitF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B898"/><stop offset="100%" stop-color="#B8A880"/></linearGradient>
    <radialGradient id="lofiKitG" cx="0.5" cy="0.4" r="0.35"><stop offset="0%" stop-color="#FFF8E8" stop-opacity="0.25"/><stop offset="100%" stop-color="#FFF8E8" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="320" height="100" fill="url(#lofiKitW)"/>
  <rect y="100" width="320" height="100" fill="url(#lofiKitF)"/>
  <rect width="320" height="200" fill="url(#lofiKitG)"/>
  <rect x="15" y="20" width="140" height="40" rx="10" fill="#8BA88B" opacity="0.6"/>
  <rect x="20" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>
  <rect x="55" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>
  <rect x="90" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>
  <rect x="15" y="95" width="160" height="8" rx="4" fill="#B0B0B0" opacity="0.6"/>
  <rect x="15" y="103" width="160" height="55" rx="10" fill="#8BA88B" opacity="0.5"/>
  <ellipse cx="45" cy="88" rx="10" ry="6" fill="#C87070" opacity="0.4"/>
  <ellipse cx="75" cy="88" rx="10" ry="6" fill="#C87070" opacity="0.4"/>
  <rect x="230" y="90" width="60" height="68" rx="10" fill="#C8C8C8" opacity="0.5"/>
  <rect x="220" y="20" width="60" height="45" rx="8" fill="#D4C4B0"/>
  <rect x="225" y="25" width="50" height="35" rx="6" fill="#A8D8EA" opacity="0.5"/>
</svg>`,

  living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiLivW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D8C8A8"/><stop offset="100%" stop-color="#C8B898"/></linearGradient>
    <linearGradient id="lofiLivF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B09068"/><stop offset="100%" stop-color="#A08058"/></linearGradient>
    <radialGradient id="lofiLivG" cx="0.6" cy="0.5" r="0.4"><stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="320" height="100" fill="url(#lofiLivW)"/>
  <rect y="100" width="320" height="100" fill="url(#lofiLivF)"/>
  <rect width="320" height="200" fill="url(#lofiLivG)"/>
  <rect x="15" y="100" width="120" height="14" rx="8" fill="#8B4040" opacity="0.5"/>
  <rect x="15" y="114" width="120" height="30" rx="10" fill="#B06060" opacity="0.5"/>
  <rect x="200" y="90" width="85" height="50" rx="10" fill="#5A4030" opacity="0.5"/>
  <rect x="205" y="95" width="75" height="22" rx="8" fill="#2A2A4E" opacity="0.5"/>
  <rect x="160" y="118" width="70" height="8" rx="4" fill="#8B7355" opacity="0.5"/>
  <rect x="240" y="20" width="55" height="55" rx="8" fill="#D4C4B0"/>
  <rect x="245" y="25" width="45" height="45" rx="6" fill="#A8D8EA" opacity="0.4"/>
  <rect x="240" y="25" width="14" height="45" rx="4" fill="#8B4040" opacity="0.3"/>
  <rect x="281" y="25" width="14" height="45" rx="4" fill="#8B4040" opacity="0.3"/>
</svg>`,

  bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="lofiBedW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8C0D8"/><stop offset="100%" stop-color="#B8B0C8"/></linearGradient>
    <linearGradient id="lofiBedF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9080B0"/><stop offset="100%" stop-color="#8070A0"/></linearGradient>
    <radialGradient id="lofiBedG" cx="0.5" cy="0.5" r="0.45"><stop offset="0%" stop-color="#E8D8F0" stop-opacity="0.3"/><stop offset="100%" stop-color="#E8D8F0" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="320" height="100" fill="url(#lofiBedW)"/>
  <rect y="100" width="320" height="100" fill="url(#lofiBedF)"/>
  <rect width="320" height="200" fill="url(#lofiBedG)"/>
  <rect x="15" y="100" width="120" height="14" rx="8" fill="#4B2080" opacity="0.4"/>
  <rect x="15" y="114" width="120" height="35" rx="10" fill="#7B6AAE" opacity="0.4"/>
  <ellipse cx="40" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>
  <ellipse cx="70" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>
  <ellipse cx="100" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>
  <rect x="150" y="110" width="32" height="38" rx="8" fill="#7A5C3E" opacity="0.5"/>
  <ellipse cx="159" cy="98" rx="10" ry="4" fill="#F0C040" opacity="0.3"/>
  <rect x="210" y="95" width="75" height="55" rx="10" fill="#6A4C30" opacity="0.5"/>
  <rect x="240" y="20" width="55" height="55" rx="8" fill="#D4C4B0"/>
  <rect x="245" y="25" width="45" height="45" rx="6" fill="#B0B8D0" opacity="0.4"/>
</svg>`,
};
