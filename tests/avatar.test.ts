import { describe, it, expect } from 'vitest';
import { avatarSprite, avatarFrames } from '../src/assets/avatar';

describe('Avatar Sprite', () => {
  it('should export avatarSprite object', () => {
    expect(avatarSprite).toBeDefined();
    expect(typeof avatarSprite).toBe('object');
  });

  it('should have idle, width, and height properties', () => {
    expect(avatarSprite).toHaveProperty('idle');
    expect(avatarSprite).toHaveProperty('width');
    expect(avatarSprite).toHaveProperty('height');
    expect(typeof avatarSprite.idle).toBe('string');
    expect(typeof avatarSprite.width).toBe('number');
    expect(typeof avatarSprite.height).toBe('number');
  });

  it('should export avatarFrames with all required animation sets', () => {
    const requiredSets = [
      'idle', 'walkRight', 'walkLeft',
      'officeIdle', 'kitchenIdle', 'livingRoomIdle', 'bedroomIdle',
    ];
    for (const name of requiredSets) {
      expect(avatarFrames).toHaveProperty(name);
      const set = avatarFrames[name as keyof typeof avatarFrames];
      expect(Array.isArray(set)).toBe(true);
      expect(set.length).toBeGreaterThanOrEqual(2);
      for (const frame of set) {
        expect(typeof frame).toBe('string');
        expect(frame).toContain('<svg');
      }
    }
  });
});
