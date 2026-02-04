import { describe, it, expect } from 'vitest';
import { bundledAnimations } from '../src/animated-presence/bundled-animations';

describe('bundledAnimations', () => {
  it('exports all five required animations', () => {
    expect(Object.keys(bundledAnimations)).toEqual(
      expect.arrayContaining(['studying', 'cooking', 'sleeping', 'idle', 'walking'])
    );
    expect(Object.keys(bundledAnimations)).toHaveLength(5);
  });

  it('each animation is valid Lottie JSON with required fields', () => {
    for (const [name, data] of Object.entries(bundledAnimations)) {
      const anim = data as Record<string, unknown>;
      expect(anim, `${name} should have version`).toHaveProperty('v');
      expect(anim, `${name} should have framerate`).toHaveProperty('fr');
      expect(anim, `${name} should have frames`).toHaveProperty('op');
      expect(anim, `${name} should have width`).toHaveProperty('w');
      expect(anim, `${name} should have height`).toHaveProperty('h');
    }
  });
});
