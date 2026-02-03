import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { MiniMeConfig, HomeAssistant } from './types';
import { roomBackgrounds } from './assets/rooms';
import { avatarSprite } from './assets/avatar';

export class MiniMeCard extends LitElement {
  // Internal config and hass storage (NOT reactive)
  private _config?: MiniMeConfig;
  private _hass?: HomeAssistant;

  // Reactive state for rendering
  @state() private _entityState?: string;
  @state() private _error?: string;
  
  // Track last known room for "not detected" state
  private _lastRoom?: string;

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
      // Save last room before switching to "Not detected"
      if (this._entityState && this._entityState !== 'Not detected') {
        this._lastRoom = this._entityState;
      }
      
      if (this._error !== undefined) {
        this._error = undefined;
      }
      if (this._entityState !== 'Not detected') {
        this._entityState = 'Not detected';
      }
      return;
    }

    // Normal case: entity state is a valid area name
    // Save as last room
    if (entity.state !== 'Not detected') {
      this._lastRoom = entity.state;
    }
    
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

    // Error rendering - keep existing error display
    if (this._error) {
      return html`
        <ha-card>
          <div class="card-content error-content">
            <div class="error">
              <span class="error-icon">!</span>
              <span class="error-message">${this._error}</span>
            </div>
          </div>
        </ha-card>
      `;
    }

    // Determine which room to display
    const currentRoom = this._entityState;
    const isNotDetected = currentRoom === 'Not detected';
    
    // Get room background
    let roomSvg: string | undefined;
    let roomName: string;
    let isFaded = false;

    if (isNotDetected) {
      // Show last known room faded, or show "not detected" message if no last room
      if (this._lastRoom && roomBackgrounds[this._lastRoom]) {
        roomSvg = roomBackgrounds[this._lastRoom];
        roomName = this._lastRoom;
        isFaded = true;
      } else {
        roomName = 'Not detected';
      }
    } else if (currentRoom && roomBackgrounds[currentRoom]) {
      // Room background exists
      roomSvg = roomBackgrounds[currentRoom];
      roomName = currentRoom;
    } else if (currentRoom) {
      // Room doesn't have a background - show with placeholder
      roomName = currentRoom;
    } else {
      roomName = 'Unknown';
    }

    return html`
      <ha-card>
        <div class="scene-container">
          ${roomSvg
            ? html`
                <div class="room-background ${isFaded ? 'faded' : ''}">
                  ${unsafeHTML(roomSvg)}
                </div>
              `
            : html`
                <div class="no-room-background">
                  <div class="placeholder-text">No room background</div>
                </div>
              `}
          
          ${!isNotDetected && roomSvg
            ? html`
                <div class="avatar">
                  ${unsafeHTML(avatarSprite.idle)}
                </div>
              `
            : ''}
          
          ${isNotDetected && !roomSvg
            ? html`
                <div class="not-detected">
                  <div>Not detected</div>
                </div>
              `
            : ''}
          
          <div class="room-label">${roomName.replace(/_/g, ' ')}</div>
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
      padding: 0;
    }

    .scene-container {
      position: relative;
      width: 100%;
      /* 16:10 aspect ratio for pixel art scene */
      padding-bottom: 62.5%;
      overflow: hidden;
    }

    .room-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .room-background svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .room-background.faded {
      opacity: 0.3;
      filter: grayscale(0.5);
    }

    .no-room-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .placeholder-text {
      color: white;
      font-size: 1.2em;
      opacity: 0.7;
    }

    .avatar {
      position: absolute;
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%);
      width: 15%;
      /* Avatar scales proportionally */
    }

    .avatar svg {
      width: 100%;
      height: auto;
      display: block;
      image-rendering: pixelated;
    }

    .room-label {
      position: absolute;
      bottom: 4px;
      right: 8px;
      font-size: 0.75em;
      color: var(--minime-secondary);
      text-transform: capitalize;
      background: rgba(0, 0, 0, 0.3);
      padding: 2px 6px;
      border-radius: 3px;
      color: white;
    }

    .not-detected {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.9em;
      color: var(--minime-secondary);
      text-align: center;
    }

    /* Error styles */
    .card-content.error-content {
      padding: 16px;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
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

    /* Responsive: ensure scene doesn't get too tall on wide screens */
    @media (min-width: 600px) {
      .scene-container {
        max-height: 300px;
        padding-bottom: 0;
        height: 250px;
      }
    }
  `;
}
