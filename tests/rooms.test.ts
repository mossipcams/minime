import { describe, it, expect } from 'vitest';
import { roomBackgrounds } from '../src/assets/rooms';

describe('Room Backgrounds', () => {
  it('should export roomBackgrounds object', () => {
    expect(roomBackgrounds).toBeDefined();
    expect(typeof roomBackgrounds).toBe('object');
  });

  it('should have all four required rooms', () => {
    expect(roomBackgrounds).toHaveProperty('office');
    expect(roomBackgrounds).toHaveProperty('kitchen');
    expect(roomBackgrounds).toHaveProperty('living_room');
    expect(roomBackgrounds).toHaveProperty('bedroom');
  });
});
