import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import type { MiniMeConfig, HomeAssistant } from './types';

export class MiniMeCard extends LitElement {
  // Internal config and hass storage (NOT reactive)
  private _config?: MiniMeConfig;
  private _hass?: HomeAssistant;

  // Reactive state for rendering
  @state() private _entityState?: string;
  @state() private _error?: string;

  /**
   * Set the card configuration
   * Validates that entity is present and is a device_tracker entity
   */
  public setConfig(config: MiniMeConfig): void {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }

    if (!config.entity.startsWith('device_tracker.')) {
      throw new Error('Entity must be a device_tracker entity (e.g., device_tracker.bermuda_xxx)');
    }

    this._config = config;
  }

  /**
   * Set Home Assistant instance
   * Extracts entity state selectively to avoid re-renders on every HA state change
   */
  public set hass(hass: HomeAssistant) {
    this._hass = hass;

    if (!this._config) {
      return;
    }

    const entity = hass.states[this._config.entity];

    // Entity not found in hass.states (device not configured in Bermuda)
    if (!entity) {
      if (this._error !== `Entity not found: ${this._config.entity}`) {
        this._error = `Entity not found: ${this._config.entity}`;
      }
      if (this._entityState !== undefined) {
        this._entityState = undefined;
      }
      return;
    }

    // Entity state is 'unavailable' (Bermuda integration disabled)
    if (entity.state === 'unavailable') {
      if (this._error !== 'Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled.') {
        this._error = 'Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled.';
      }
      if (this._entityState !== undefined) {
        this._entityState = undefined;
      }
      return;
    }

    // Entity state is 'unknown' (Bermuda running but device not detected in any area)
    if (entity.state === 'unknown') {
      if (this._error !== undefined) {
        this._error = undefined;
      }
      if (this._entityState !== 'Not detected') {
        this._entityState = 'Not detected';
      }
      return;
    }

    // Normal case: entity state is a valid area name
    if (this._error !== undefined) {
      this._error = undefined;
    }
    if (this._entityState !== entity.state) {
      this._entityState = entity.state;
    }
  }

  /**
   * Get card size for masonry layout
   * Returns height in units of ~50px per unit
   */
  public getCardSize(): number {
    return 3;
  }

  /**
   * Get the configuration editor element
   * Returns the editor custom element for Home Assistant UI
   */
  public static getConfigElement(): HTMLElement {
    return document.createElement('minime-card-editor');
  }

  /**
   * Get default stub configuration for card picker
   * Provides sensible defaults when adding card to dashboard
   */
  public static getStubConfig(): MiniMeConfig {
    return {
      type: 'minime-card',
      entity: '',
      name: 'MiniMe',
      areas: ['office', 'kitchen', 'living_room', 'bedroom'],
    };
  }


  /**
   * Render the card
   */
  protected render() {
    if (!this._config) {
      return html``;
    }

    const name = this._config.name || 'MiniMe';

    if (this._error) {
      return html`
        <ha-card header="${name}">
          <div class="card-content">
            <div class="error">
              <span class="error-icon">!</span>
              <span class="error-message">${this._error}</span>
            </div>
          </div>
        </ha-card>
      `;
    }

    const location = this._entityState || 'Unknown';

    return html`
      <ha-card header="${name}">
        <div class="card-content">
          <div class="room-display">
            <div class="room-label">${location}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  /**
   * Cleanup when card is removed
   */
  public disconnectedCallback(): void {
    super.disconnectedCallback();
    // Future cleanup: animation frames, timers (Phase 4)
  }

  static styles = css`
    :host {
      --minime-bg: var(--card-background-color, #fff);
      --minime-text: var(--primary-text-color, #333);
      --minime-secondary: var(--secondary-text-color, #666);
      --minime-error: var(--error-color, #db4437);
      --minime-accent: var(--accent-color, #03a9f4);
    }

    ha-card {
      background: var(--minime-bg);
      color: var(--minime-text);
      overflow: hidden;
    }

    .card-content {
      padding: 16px;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .room-display {
      text-align: center;
      width: 100%;
    }

    .room-label {
      font-size: 1.4em;
      color: var(--minime-text);
      text-transform: capitalize;
    }

    .error {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--minime-error);
      padding: 8px;
    }

    .error-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--minime-error);
      color: white;
      font-weight: bold;
      font-size: 14px;
      flex-shrink: 0;
    }

    .error-message {
      font-size: 0.9em;
      line-height: 1.3;
    }
  `;
}
