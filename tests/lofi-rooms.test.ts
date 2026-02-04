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
});
