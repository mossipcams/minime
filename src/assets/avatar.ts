/**
 * Avatar sprite pixel art asset
 * Inline SVG string for self-contained bundle (avoids HACS resource loading)
 */

export const avatarSprite = {
  idle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" shape-rendering="crispEdges">
  <!-- Shadow/ground indicator -->
  <ellipse cx="16" cy="46" rx="10" ry="2" fill="#00000033"/>

  <!-- Legs -->
  <rect x="10" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="17" y="32" width="5" height="12" fill="#4169E1"/>
  <rect x="10" y="44" width="5" height="2" fill="#2F4F4F"/>
  <rect x="17" y="44" width="5" height="2" fill="#2F4F4F"/>

  <!-- Body/torso -->
  <rect x="9" y="18" width="14" height="14" fill="#DC143C"/>
  
  <!-- Arms -->
  <rect x="6" y="20" width="3" height="10" fill="#FFD700"/>
  <rect x="23" y="20" width="3" height="10" fill="#FFD700"/>
  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>
  <rect x="23" y="30" width="3" height="2" fill="#FFA07A"/>

  <!-- Neck -->
  <rect x="13" y="14" width="6" height="4" fill="#FFA07A"/>

  <!-- Head -->
  <rect x="11" y="6" width="10" height="8" fill="#FFA07A"/>
  
  <!-- Hair -->
  <rect x="11" y="4" width="10" height="2" fill="#654321"/>
  <rect x="10" y="6" width="1" height="4" fill="#654321"/>
  <rect x="21" y="6" width="1" height="4" fill="#654321"/>

  <!-- Eyes -->
  <rect x="13" y="9" width="2" height="2" fill="#000000"/>
  <rect x="17" y="9" width="2" height="2" fill="#000000"/>

  <!-- Smile -->
  <rect x="14" y="12" width="1" height="1" fill="#000000"/>
  <rect x="15" y="13" width="2" height="1" fill="#000000"/>
  <rect x="17" y="12" width="1" height="1" fill="#000000"/>
</svg>`,
  width: 32,
  height: 48,
};
