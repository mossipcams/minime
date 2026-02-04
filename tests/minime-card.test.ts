import { describe, it, expect, beforeEach } from 'vitest';
import { MiniMeCard } from '../src/minime-card';

/**
 * Helper to create a mock HomeAssistant object
 */
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
    // Register the custom element if not already registered
    if (!customElements.get('minime-card')) {
      customElements.define('minime-card', MiniMeCard);
    }
    // Create card instance via createElement to properly initialize custom element
    card = document.createElement('minime-card') as MiniMeCard;
  });

  describe('Config validation', () => {
    it('throws when entity is missing', () => {
      expect(() => card.setConfig({} as any)).toThrow('Please define an entity');
    });

    it('throws when entity is not device_tracker', () => {
      expect(() => card.setConfig({ entity: 'sensor.foo' } as any)).toThrow('device_tracker');
    });

    it('accepts valid config', () => {
      expect(() => card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' })).not.toThrow();
    });
  });

  describe('Card size', () => {
    it('returns card size for masonry layout', () => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
      expect(card.getCardSize()).toBe(3);
    });
  });

  describe('Hass setter - Basic functionality', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('extracts area name from entity state', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'office' } });
      expect((card as any)._entityState).toBe('office');
      expect((card as any)._error).toBeUndefined();
    });

    it('sets error when entity not found', () => {
      card.hass = mockHass({});
      expect((card as any)._error).toContain('Entity not found');
    });
  });

  describe('Hass setter - Error states', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('shows error when entity state is unavailable', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'unavailable' } });
      expect((card as any)._error).toContain('unavailable');
      expect((card as any)._error).toContain('Bermuda');
    });

    it('shows error when entity does not exist in hass', () => {
      card.hass = mockHass({});
      expect((card as any)._error).toContain('not found');
    });

    it('shows not detected when entity state is unknown', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'unknown' } });
      expect((card as any)._entityState).toBe('Not detected');
      expect((card as any)._error).toBeUndefined();
    });
  });

  describe('Hass setter - Re-render optimization', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('does not update state when entity value unchanged', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'office' } });
      const firstState = (card as any)._entityState;
      // Set hass again with same entity state
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'office' } });
      // State value should be unchanged
      expect((card as any)._entityState).toBe(firstState);
    });
  });

  describe('Room display', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('tracks last known room', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'office' } });
      expect((card as any)._lastRoom).toBe('office');
    });

    it('preserves last room when not detected', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'office' } });
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'unknown' } });
      expect((card as any)._lastRoom).toBe('office');
      expect((card as any)._entityState).toBe('Not detected');
    });

    it('updates last room on room change', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'office' } });
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'kitchen' } });
      expect((card as any)._lastRoom).toBe('kitchen');
    });
  });

  describe('Editor integration', () => {
    it('returns stub config with default areas', () => {
      const stub = MiniMeCard.getStubConfig();
      expect(stub).toHaveProperty('areas');
      expect(stub.areas).toContain('office');
    });

    it('stub config must not include type (HA sets custom: prefix)', () => {
      const stub = MiniMeCard.getStubConfig();
      expect(stub).not.toHaveProperty('type');
    });

    it('returns config element', () => {
      const el = MiniMeCard.getConfigElement();
      expect(el.tagName.toLowerCase()).toBe('minime-card-editor');
    });
  });
});
