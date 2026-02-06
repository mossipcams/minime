import { describe, it, expect, beforeEach } from 'vitest';
import { MiniMeCard } from '../src/minime-card';

function mockHass(states: Record<string, { state: string; attributes?: Record<string, unknown> }>): any {
  const fullStates: Record<string, any> = {};
  for (const [id, s] of Object.entries(states)) {
    fullStates[id] = {
      entity_id: id,
      state: s.state,
      attributes: s.attributes || {},
      last_changed: new Date().toISOString(),
      last_updated: new Date().toISOString(),
    };
  }
  return { states: fullStates, themes: { darkMode: false }, areas: {} };
}

describe('MiniMeCard', () => {
  let card: MiniMeCard;

  beforeEach(() => {
    if (!customElements.get('minime-card')) {
      customElements.define('minime-card', MiniMeCard);
    }
    card = document.createElement('minime-card') as MiniMeCard;
  });

  it('can be constructed', () => {
    expect(card).toBeInstanceOf(MiniMeCard);
  });

  it('throws when entity is missing', () => {
    expect(() => card.setConfig({} as any)).toThrow('Please define an entity');
  });

  it('accepts any entity type (no domain restriction)', () => {
    expect(() => card.setConfig({ type: 'custom:minime-card', entity: 'sensor.room' })).not.toThrow();
    expect(() => card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.phone' })).not.toThrow();
  });

  it('reads area from Bermuda attributes', () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.phone' });
    card.hass = mockHass({ 'device_tracker.phone': { state: 'home', attributes: { area: 'Office' } } });
    expect((card as any)._entityState).toBe('office');
  });

  it('falls back to entity.state when no area attribute', () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'sensor.room' });
    card.hass = mockHass({ 'sensor.room': { state: 'Office' } });
    expect((card as any)._entityState).toBe('office');
  });

  it('sets error when entity not found', () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'sensor.room' });
    card.hass = mockHass({});
    expect((card as any)._error).toContain('Entity not found');
  });

  it('sets error when entity is unavailable', () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'sensor.room' });
    card.hass = mockHass({ 'sensor.room': { state: 'unavailable' } });
    expect((card as any)._error).toContain('unavailable');
  });

  it('sets not_home entity state when entity state is not_home', () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.phone' });
    card.hass = mockHass({ 'device_tracker.phone': { state: 'not_home' } });
    expect((card as any)._entityState).toBe('not_home');
  });

  it('normalizes room name with spaces to underscore key', () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.phone' });
    card.hass = mockHass({ 'device_tracker.phone': { state: 'home', attributes: { area: 'Living Room' } } });
    expect((card as any)._entityState).toBe('living_room');
  });

  it('returns card size of 3', () => {
    expect(card.getCardSize()).toBe(1);
  });

  it('returns stub config without type', () => {
    const stub = MiniMeCard.getStubConfig();
    expect(stub).not.toHaveProperty('type');
    expect(stub).toHaveProperty('entity');
  });

  it('returns config element', () => {
    const el = MiniMeCard.getConfigElement();
    expect(el.tagName.toLowerCase()).toBe('minime-card-editor');
  });

  it('accepts dog_entity config', () => {
    expect(() => card.setConfig({
      type: 'custom:minime-card',
      entity: 'device_tracker.phone',
      dog_entity: 'device_tracker.rocky',
    })).not.toThrow();
  });

  it('avatar is proportionally sized for the scene (not oversized)', async () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.phone' });
    card.hass = mockHass({ 'device_tracker.phone': { state: 'home', attributes: { area: 'Office' } } });
    document.body.appendChild(card);
    await (card as any).updateComplete;
    const shadow = card.shadowRoot!;
    const header = shadow.querySelector('.header') as HTMLElement;
    const avatar = shadow.querySelector('.avatar') as HTMLElement;
    // Header should be tall enough for a scene (at least 100px)
    const headerStyle = getComputedStyle(header);
    expect(parseInt(headerStyle.height)).toBeGreaterThanOrEqual(100);
    // Avatar should not fill more than 60% of the header height
    if (avatar) {
      const avatarStyle = getComputedStyle(avatar);
      const avatarWidth = parseInt(avatarStyle.width);
      expect(avatarWidth).toBeLessThanOrEqual(40);
    }
    document.body.removeChild(card);
  });

  it('does not render info or name elements in layout', async () => {
    card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.phone' });
    card.hass = mockHass({ 'device_tracker.phone': { state: 'home', attributes: { area: 'Office' } } });
    document.body.appendChild(card);
    await (card as any).updateComplete;
    const shadow = card.shadowRoot!;
    expect(shadow.querySelector('.info')).toBeNull();
    expect(shadow.querySelector('.name')).toBeNull();
    expect(shadow.querySelector('.header-content')).toBeNull();
    expect(shadow.querySelector('.avatar-zone')).toBeNull();
    document.body.removeChild(card);
  });
});
