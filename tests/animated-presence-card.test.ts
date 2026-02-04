import { describe, it, expect, beforeEach } from 'vitest';
import { AnimatedPresenceCard } from '../src/animated-presence-card';

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

describe('AnimatedPresenceCard', () => {
  let card: AnimatedPresenceCard;

  beforeEach(() => {
    if (!customElements.get('animated-presence-card')) {
      customElements.define('animated-presence-card', AnimatedPresenceCard);
    }
    card = document.createElement('animated-presence-card') as AnimatedPresenceCard;
  });

  it('can be constructed', () => {
    expect(card).toBeInstanceOf(AnimatedPresenceCard);
  });

  it('throws when entity is missing', () => {
    expect(() => card.setConfig({} as any)).toThrow('Please define an entity');
  });

  it('accepts any entity type (no domain restriction)', () => {
    expect(() => card.setConfig({ type: 'custom:animated-presence-card', entity: 'sensor.room' })).not.toThrow();
    expect(() => card.setConfig({ type: 'custom:animated-presence-card', entity: 'input_select.location' })).not.toThrow();
    expect(() => card.setConfig({ type: 'custom:animated-presence-card', entity: 'device_tracker.phone' })).not.toThrow();
  });

  it('reads entity.state directly as room name', () => {
    card.setConfig({ type: 'custom:animated-presence-card', entity: 'sensor.room' });
    card.hass = mockHass({ 'sensor.room': { state: 'Office' } });
    expect((card as any)._entityState).toBe('office');
  });

  it('sets error when entity not found', () => {
    card.setConfig({ type: 'custom:animated-presence-card', entity: 'sensor.room' });
    card.hass = mockHass({});
    expect((card as any)._error).toContain('Entity not found');
  });

  it('sets error when entity is unavailable', () => {
    card.setConfig({ type: 'custom:animated-presence-card', entity: 'sensor.room' });
    card.hass = mockHass({ 'sensor.room': { state: 'unavailable' } });
    expect((card as any)._error).toContain('unavailable');
  });

  it('normalizes room name with spaces to underscore key', () => {
    card.setConfig({ type: 'custom:animated-presence-card', entity: 'sensor.room' });
    card.hass = mockHass({ 'sensor.room': { state: 'Living Room' } });
    expect((card as any)._entityState).toBe('living_room');
  });

  it('returns card size of 3', () => {
    expect(card.getCardSize()).toBe(3);
  });

  it('returns stub config without type', () => {
    const stub = AnimatedPresenceCard.getStubConfig();
    expect(stub).not.toHaveProperty('type');
    expect(stub).toHaveProperty('entity');
  });

  it('returns config element', () => {
    const el = AnimatedPresenceCard.getConfigElement();
    expect(el.tagName.toLowerCase()).toBe('animated-presence-card-editor');
  });
});
