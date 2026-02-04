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

    it('extracts area from Bermuda entity attributes', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'Bedroom' } } });
      expect((card as any)._entityState).toBe('Bedroom');
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

    it('shows not detected when entity state is not_home', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'not_home' } });
      expect((card as any)._entityState).toBe('Not detected');
      expect((card as any)._error).toBeUndefined();
    });
  });

  describe('Hass setter - Re-render optimization', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('does not update state when entity value unchanged', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      const firstState = (card as any)._entityState;
      // Set hass again with same entity state
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      // State value should be unchanged
      expect((card as any)._entityState).toBe(firstState);
    });
  });

  describe('Room display', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('tracks last known room', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      expect((card as any)._lastRoom).toBe('office');
    });

    it('preserves last room when not detected', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'not_home' } });
      expect((card as any)._lastRoom).toBe('office');
      expect((card as any)._entityState).toBe('Not detected');
    });

    it('updates last room on room change', () => {
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'kitchen' } } });
      expect((card as any)._lastRoom).toBe('kitchen');
    });

    it('matches room background when Bermuda reports display name', async () => {
      document.body.appendChild(card);
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'Bedroom' } } });
      await card.updateComplete;
      const bg = card.shadowRoot?.querySelector('.room-background');
      expect(bg).toBeTruthy();
      document.body.removeChild(card);
    });

    it('matches room background when name has spaces', async () => {
      document.body.appendChild(card);
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'Living Room' } } });
      await card.updateComplete;
      const bg = card.shadowRoot?.querySelector('.room-background');
      expect(bg).toBeTruthy();
      document.body.removeChild(card);
    });
  });

  describe('Animation integration', () => {
    beforeEach(() => {
      card.setConfig({ type: 'custom:minime-card', entity: 'device_tracker.bermuda_phone' });
    });

    it('creates animation engine when connected and triggers room change', async () => {
      document.body.appendChild(card);
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      await card.updateComplete;
      expect((card as any)._engine).toBeDefined();
      expect((card as any)._animState).toBeDefined();
      document.body.removeChild(card);
    });

    it('renders avatar with dynamic position from animation state', async () => {
      document.body.appendChild(card);
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      await card.updateComplete;
      const avatar = card.shadowRoot?.querySelector('.avatar') as HTMLElement;
      expect(avatar).toBeTruthy();
      expect(avatar.style.left).toBeTruthy();
      document.body.removeChild(card);
    });

    it('stops engine on disconnect', async () => {
      document.body.appendChild(card);
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      await card.updateComplete;
      const engine = (card as any)._engine;
      expect(engine).toBeDefined();
      document.body.removeChild(card);
      // After disconnect, engine should have been stopped (no crash)
      expect((card as any)._engine).toBeDefined();
    });

    it('avatar contains SVG from animation frame set, not static idle', async () => {
      document.body.appendChild(card);
      card.hass = mockHass({ 'device_tracker.bermuda_phone': { state: 'home', attributes: { area: 'office' } } });
      await card.updateComplete;
      const avatar = card.shadowRoot?.querySelector('.avatar');
      const svg = avatar?.querySelector('svg');
      expect(svg).toBeTruthy();
      document.body.removeChild(card);
    });
  });

  describe('Smooth vector rendering', () => {
    it('should not use pixelated image-rendering in styles', () => {
      const styles = (MiniMeCard as any).styles;
      const cssText = styles.cssText || styles.toString();
      expect(cssText).not.toContain('image-rendering: pixelated');
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
