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

    if (!entity) {
      this._error = `Entity not found: ${this._config.entity}`;
      this._entityState = undefined;
      return;
    }

    // Clear error and extract state
    this._error = undefined;
    this._entityState = entity.state;
  }

  /**
   * Get card size for masonry layout
   * Returns height in units of ~50px per unit
   */
  public getCardSize(): number {
    return 3;
  }

  /**
   * Render the card
   */
  protected render() {
    if (!this._config) {
      return html``;
    }

    if (this._error) {
      return html`
        <ha-card>
          <div class="error">${this._error}</div>
        </ha-card>
      `;
    }

    const name = this._config.name || 'MiniMe';
    const location = this._entityState || 'Unknown';

    return html`
      <ha-card header="${name}">
        <div class="card-content">
          <div class="room-label">${location}</div>
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
    .card-content {
      padding: 16px;
    }

    .room-label {
      font-size: 1.2em;
      text-align: center;
      color: var(--primary-text-color);
    }

    .error {
      color: var(--error-color, red);
      padding: 16px;
    }

    ha-card {
      background: var(--card-background-color);
    }
  `;
}
