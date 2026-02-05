import { describe, it, expect } from 'vitest';
import { lofiRoomBackgrounds } from '../src/animated-presence/lofi-rooms';

describe('Lofi Room Backgrounds', () => {
  it('should export lofiRoomBackgrounds object', () => {
    expect(lofiRoomBackgrounds).toBeDefined();
    expect(typeof lofiRoomBackgrounds).toBe('object');
  });

  it('should have all four required rooms', () => {
    expect(lofiRoomBackgrounds).toHaveProperty('office');
    expect(lofiRoomBackgrounds).toHaveProperty('kitchen');
    expect(lofiRoomBackgrounds).toHaveProperty('living_room');
    expect(lofiRoomBackgrounds).toHaveProperty('bedroom');
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
      const hasFloorAt85 = svg.includes('y="85"') || svg.includes('y1="85"');
      expect(hasFloorAt85, `${room} should have floor at y=85`).toBe(true);
    }
  });
});
