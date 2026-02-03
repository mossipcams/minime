/**
 * Avatar sprite pixel art asset
 *
 * Simple pixel art character for home presence visualization.
 * Using inline SVG string avoids HACS resource loading issues.
 */

export const avatarSprite = {
  idle: `<svg viewBox="0 0 32 48" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <!-- Shadow/ground indicator -->
    <ellipse cx="16" cy="46" rx="8" ry="2" fill="#000000" opacity="0.3"/>
    
    <!-- Legs -->
    <rect x="10" y="32" width="5" height="12" fill="#2C5AA0"/>
    <rect x="17" y="32" width="5" height="12" fill="#2C5AA0"/>
    
    <!-- Shoes -->
    <rect x="9" y="44" width="6" height="3" fill="#1A1A1A"/>
    <rect x="17" y="44" width="6" height="3" fill="#1A1A1A"/>
    
    <!-- Torso -->
    <rect x="10" y="18" width="12" height="14" fill="#FF6B6B"/>
    
    <!-- Arms -->
    <rect x="6" y="20" width="4" height="10" fill="#FFB86C"/>
    <rect x="22" y="20" width="4" height="10" fill="#FFB86C"/>
    
    <!-- Hands -->
    <rect x="6" y="30" width="4" height="3" fill="#FFB86C"/>
    <rect x="22" y="30" width="4" height="3" fill="#FFB86C"/>
    
    <!-- Neck -->
    <rect x="14" y="16" width="4" height="2" fill="#FFB86C"/>
    
    <!-- Head -->
    <rect x="12" y="8" width="8" height="8" fill="#FFB86C"/>
    
    <!-- Hair -->
    <rect x="12" y="6" width="8" height="3" fill="#4A2F1A"/>
    
    <!-- Eyes -->
    <rect x="14" y="11" width="1" height="2" fill="#1A1A1A"/>
    <rect x="17" y="11" width="1" height="2" fill="#1A1A1A"/>
    
    <!-- Smile -->
    <rect x="14" y="14" width="4" height="1" fill="#1A1A1A"/>
  </svg>`,
  width: 32,
  height: 48,
};
