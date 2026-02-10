import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('release artifact', () => {
  it('ships friendly avatar and not legacy totem avatar', () => {
    const bundlePath = resolve(process.cwd(), 'dist/minime-card.js');
    const bundle = readFileSync(bundlePath, 'utf8');

    expect(bundle).toContain('friendly-avatar');
    expect(bundle).toContain('totem-head');
    expect(bundle).toContain('totem-body');
    expect(bundle).toContain('totem-crown');
    expect(bundle).not.toContain('totem-avatar');
  });
});
