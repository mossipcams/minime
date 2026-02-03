describe('MiniMe Card - Build Verification', () => {
  it('should have a working test environment', () => {
    expect(true).toBe(true);
  });

  it('should support DOM APIs via happy-dom', () => {
    const el = document.createElement('div');
    el.textContent = 'MiniMe';
    expect(el.textContent).toBe('MiniMe');
  });

  it('should support TypeScript features', () => {
    interface CardConfig {
      entity: string;
      name?: string;
    }

    const config: CardConfig = { entity: 'person.test' };
    expect(config.entity).toBe('person.test');
    expect(config.name).toBeUndefined();
  });
});
