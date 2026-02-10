import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('release artifact', () => {
  it('ships friendly avatar and not legacy totem avatar', () => {
    const bundlePath = resolve(process.cwd(), 'dist/minime-card.js');
    const bundle = readFileSync(bundlePath, 'utf8');

    expect(bundle).toContain('friendly-avatar');
    expect(bundle).toContain('mini-avatar');
    expect(bundle).toContain('mini-hair');
    expect(bundle).toContain('mini-head');
    expect(bundle).toContain('mini-torso');
    expect(bundle).toContain('mini-legs');
    expect(bundle).not.toContain('totem-head');
    expect(bundle).not.toContain('totem-body');
    expect(bundle).not.toContain('totem-avatar');
  });
});
