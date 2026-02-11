import { describe, it, expect } from 'vitest';
import { lofiRoomBackgrounds } from '../src/animated-presence/lofi-rooms';

describe('Lofi Room Backgrounds', () => {
  it('should export lofiRoomBackgrounds object', () => {
    expect(lofiRoomBackgrounds).toBeDefined();
    expect(typeof lofiRoomBackgrounds).toBe('object');
  });

  it('should have all four required rooms plus not_home and not_home_dog', () => {
    expect(lofiRoomBackgrounds).toHaveProperty('office');
    expect(lofiRoomBackgrounds).toHaveProperty('kitchen');
    expect(lofiRoomBackgrounds).toHaveProperty('living_room');
    expect(lofiRoomBackgrounds).toHaveProperty('bedroom');
    expect(lofiRoomBackgrounds).toHaveProperty('not_home');
    expect(lofiRoomBackgrounds).toHaveProperty('not_home_dog');
  });

  it('should use lofi-prefixed gradient IDs to avoid collision', () => {
    for (const svg of Object.values(lofiRoomBackgrounds)) {
      const gradientIds = svg.match(/id="([^"]+)"/g) || [];
      for (const match of gradientIds) {
        const id = match.replace('id="', '').replace('"', '');
        expect(id).toMatch(/^lofi/);
      }
    }
  });

  it('should have floor line at y=85 for proper avatar alignment', () => {
    for (const [room, svg] of Object.entries(lofiRoomBackgrounds)) {
      if (room === 'not_home' || room === 'not_home_dog') continue; // exterior scenes, no floor line
      const hasFloorAt85 = svg.includes('y="85"') || svg.includes('y1="85"');
      expect(hasFloorAt85, `${room} should have floor at y=85`).toBe(true);
    }
  });

  it('not_home_dog scene should have warm interior and dog bed', () => {
    const svg = lofiRoomBackgrounds.not_home_dog;
    expect(svg).toBeDefined();
    // Warm interior brown background
    expect(svg).toContain('#2A1C10');
    // Dog bed ellipse
    expect(svg).toContain('dog bed');
    // Should still have stars and moon (exterior unchanged)
    expect(svg).toContain('star');
    // Should NOT have left windows (wall is cut away) — check for window rects at those positions
    expect(svg).not.toMatch(/rect[^>]*x="148"[^>]*width="20"[^>]*height="15"/);
    expect(svg).not.toMatch(/rect[^>]*x="178"[^>]*width="20"[^>]*height="15"/);
  });

  it('not_home scene should show a dark house silhouette with moon and stars', () => {
    const svg = lofiRoomBackgrounds.not_home;
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('star');
    expect(svg).toContain('moon');
  });

  it('not_home scene should use visible colors, not near-black', () => {
    const svg = lofiRoomBackgrounds.not_home;
    // Sky background gradient should be a readable navy/indigo, not near-black
    // Old colors like #0C0C1E, #080818 are too dark to distinguish anything
    expect(svg).not.toContain('#0C0C1E');
    expect(svg).not.toContain('#080818');
    // Windows should have warm glow (amber/yellow tones) not dark fills
    expect(svg).not.toContain('fill="#0A0A14"');
    // Should have warm window glow color
    expect(svg).toMatch(/#[CDEcde][0-9A-Fa-f][89ABab][0-9A-Fa-f][234][0-9A-Fa-f]/);
  });

  it('indoor room furniture should be proportionally sized to avatar (person=45 viewBox units)', () => {
    // The avatar is ~45 viewBox units tall. A desk monitor should NOT be 40 units
    // tall (that's person-sized). Realistic: monitor ~10-12 units, desk at y>=62, etc.
    const indoorRooms = ['office', 'kitchen', 'living_room', 'bedroom'];
    for (const room of indoorRooms) {
      const svg = lofiRoomBackgrounds[room];
      // No furniture element should span more than 55 vertical units (bookshelf/fridge max)
      const rects = [...svg.matchAll(/rect[^>]*y="(\d+(?:\.\d+)?)"[^>]*height="(\d+(?:\.\d+)?)"/g)];
      for (const match of rects) {
        const y = parseFloat(match[1]);
        const h = parseFloat(match[2]);
        // Skip full-width background fills (height=100 or height=15 floor)
        if (h >= 90) continue;
        // No single furniture rect should be taller than 55 units
        expect(h, `${room}: rect at y=${y} has height=${h}, max allowed is 55`).toBeLessThanOrEqual(55);
      }
    }
  });

  it('no furniture rect should be wider than 80 units (realistic room scale)', () => {
    // Person shoulder width ≈ 14 units. A desk at 150cm = 46 units.
    // Nothing except full-width floor/bg should exceed 80 units wide.
    const indoorRooms = ['office', 'kitchen', 'living_room', 'bedroom'];
    for (const room of indoorRooms) {
      const svg = lofiRoomBackgrounds[room];
      const rects = [...svg.matchAll(/rect[^>]*width="(\d+(?:\.\d+)?)"/g)];
      for (const match of rects) {
        const w = parseFloat(match[1]);
        // Skip full-width background fills (width=400 or width=200+ for counter runs)
        if (w >= 400) continue;
        // No single furniture piece should be wider than 80 units
        expect(w, `${room}: rect with width=${w} exceeds 80 unit max`).toBeLessThanOrEqual(80);
      }
    }
  });

  it('living room TV has bright screen with visible content and strong glow', () => {
    const svg = lofiRoomBackgrounds.living_room;
    // TV screen glow gradient should have stop-opacity >= 0.3 (strong, visible glow)
    const tvGradient = svg.match(/id="lofiLivTV"[\s\S]*?<\/radialGradient>/);
    expect(tvGradient).not.toBeNull();
    const opacities = tvGradient![0].match(/stop-opacity="([^"]+)"/g) || [];
    const maxOpacity = Math.max(...opacities.map(o => parseFloat(o.replace('stop-opacity="', '').replace('"', ''))));
    expect(maxOpacity).toBeGreaterThanOrEqual(0.3);
    // TV screen area should have content bars/shapes
    expect(svg).toContain('screen-content');
    // TV glow on floor should exist and be noticeable
    expect(svg).toContain('TV glow on floor');
  });

  it('each room has rich ambient animations (15+ animated elements)', () => {
    for (const [room, svg] of Object.entries(lofiRoomBackgrounds)) {
      const animCount = (svg.match(/<animate /g) || []).length;
      const animTransformCount = (svg.match(/<animateTransform /g) || []).length;
      const total = animCount + animTransformCount;
      expect(total, `${room} should have at least 15 ambient animations`).toBeGreaterThanOrEqual(15);
    }
  });
});
