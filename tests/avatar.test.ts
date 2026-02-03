import { describe, it, expect } from 'vitest';
import { avatarSprite } from '../src/assets/avatar';

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
});
