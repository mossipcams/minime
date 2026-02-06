import { describe, it, expect } from 'vitest';
import { lofiRoomBackgrounds } from '../src/animated-presence/lofi-rooms';

describe('Lofi Room Backgrounds', () => {
  it('should export lofiRoomBackgrounds object', () => {
    expect(lofiRoomBackgrounds).toBeDefined();
    expect(typeof lofiRoomBackgrounds).toBe('object');
  });

  it('should have all four required rooms plus not_home', () => {
    expect(lofiRoomBackgrounds).toHaveProperty('office');
    expect(lofiRoomBackgrounds).toHaveProperty('kitchen');
    expect(lofiRoomBackgrounds).toHaveProperty('living_room');
    expect(lofiRoomBackgrounds).toHaveProperty('bedroom');
    expect(lofiRoomBackgrounds).toHaveProperty('not_home');
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
      if (room === 'not_home') continue; // not_home is a house silhouette, no floor line
      const hasFloorAt85 = svg.includes('y="85"') || svg.includes('y1="85"');
      expect(hasFloorAt85, `${room} should have floor at y=85`).toBe(true);
    }
  });

  it('not_home scene should show a dark house silhouette with moon and stars', () => {
    const svg = lofiRoomBackgrounds.not_home;
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('star');
    expect(svg).toContain('moon');
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

  it('each room has rich ambient animations (15+ animated elements)', () => {
    for (const [room, svg] of Object.entries(lofiRoomBackgrounds)) {
      const animCount = (svg.match(/<animate /g) || []).length;
      const animTransformCount = (svg.match(/<animateTransform /g) || []).length;
      const total = animCount + animTransformCount;
      expect(total, `${room} should have at least 15 ambient animations`).toBeGreaterThanOrEqual(15);
    }
  });
});
