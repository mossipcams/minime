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

  it('should use smooth vector viewBox (64x96) instead of pixel art (32x48)', () => {
    expect(avatarSprite.width).toBe(64);
    expect(avatarSprite.height).toBe(96);
    expect(avatarSprite.idle).toContain('viewBox="0 0 64 96"');
  });

  it('should use smooth shapes (circles, rounded rects) instead of pixel rects', () => {
    const idleFrame = avatarSprite.idle;
    // Smooth vector art uses circles/ellipses for head and eyes
    expect(idleFrame).toMatch(/<circle\s/);
    // Uses rounded rects (rx attribute) for body parts
    expect(idleFrame).toMatch(/\brx="/);
  });

  it('should not use crispEdges shape-rendering', () => {
    const allFrames = Object.values(avatarFrames).flat();
    for (const frame of allFrames) {
      expect(frame).not.toContain('crispEdges');
    }
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
