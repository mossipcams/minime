import { describe, it, expect, beforeEach } from 'vitest';
import { MiniMeCard } from '../src/minime-card';

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

  describe('Hass setter', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('extracts entity state from hass', () => {
      const mockHass = {
        states: {
          'device_tracker.bermuda_phone': {
            state: 'living_room',
            attributes: {},
            entity_id: 'device_tracker.bermuda_phone',
            last_changed: '2024-01-01',
            last_updated: '2024-01-01',
          },
        },
        themes: { darkMode: false },
      };

      card.hass = mockHass as any;
      expect((card as any)._entityState).toBe('living_room');
      expect((card as any)._error).toBeUndefined();
    });

    it('sets error when entity not found', () => {
      const mockHass = {
        states: {},
        themes: { darkMode: false },
      };

      card.hass = mockHass as any;
      expect((card as any)._error).toContain('Entity not found');
    });
  });
});
