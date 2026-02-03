import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import type { MiniMeConfig, HomeAssistant } from './types';

export class MiniMeCardEditor extends LitElement {
  public hass?: HomeAssistant;

  @state() private _config?: MiniMeConfig;

  /**
   * Set the card configuration
   */
  public setConfig(config: MiniMeConfig): void {
    this._config = config;
  }

  /**
   * Handle entity or name input changes
   */
  private _valueChanged(ev: Event): void {
    if (!this._config || !this.hass) {
      return;
    }

    const target = ev.target as any;
    const configValue = target.configValue;
    const value = target.value;

    if (!configValue) {
      return;
    }

    const newConfig = {
      ...this._config,
      [configValue]: value,
    };

    this._dispatchConfigChanged(newConfig);
  }

  /**
   * Handle area checkbox changes
   */
  private _areaChanged(ev: Event): void {
    if (!this._config) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const areaId = target.value;
    const checked = target.checked;

    const currentAreas = this._config.areas || [];
    let newAreas: string[];

    if (checked) {
      // Add area if not present
      newAreas = currentAreas.includes(areaId)
        ? currentAreas
        : [...currentAreas, areaId];
    } else {
      // Remove area
      newAreas = currentAreas.filter(id => id !== areaId);
    }

    const newConfig = {
      ...this._config,
      areas: newAreas,
    };

    this._dispatchConfigChanged(newConfig);
  }

  /**
   * Dispatch config-changed event
   */
  private _dispatchConfigChanged(config: MiniMeConfig): void {
    const event = new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  /**
   * Render the configuration editor
   */
  protected render() {
    if (!this._config) {
      return html``;
    }

    // Known areas from the project spec (office, kitchen, living_room, bedroom)
    const knownAreas = [
      { id: 'office', label: 'Office' },
      { id: 'kitchen', label: 'Kitchen' },
      { id: 'living_room', label: 'Living Room' },
      { id: 'bedroom', label: 'Bedroom' },
    ];

    const selectedAreas = this._config.areas || [];

    return html`
      <div class="editor">
        <div class="editor-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity || ''}
            .configValue=${'entity'}
            .includeDomains=${['device_tracker']}
            @value-changed=${this._valueChanged}
            label="Bermuda Device Tracker"
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="editor-row">
          <label>
            Card Name
            <input
              type="text"
              .value=${this._config.name || ''}
              @input=${(ev: Event) => {
                const target = ev.target as HTMLInputElement;
                const newConfig = {
                  ...this._config!,
                  name: target.value,
                };
                this._dispatchConfigChanged(newConfig);
              }}
            />
          </label>
        </div>

        <div class="editor-row">
          <div class="area-selector">
            <label class="section-label">Rooms to Track</label>
            ${knownAreas.map(
              area => html`
                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    .value=${area.id}
                    .checked=${selectedAreas.includes(area.id)}
                    @change=${this._areaChanged}
                  />
                  ${area.label}
                </label>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    .editor {
      padding: 16px;
    }

    .editor-row {
      padding: 8px 0;
    }

    label {
      display: block;
      margin-bottom: 4px;
      font-weight: 500;
    }

    input[type='text'] {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    .section-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .area-selector {
      padding: 8px 0;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      font-weight: normal;
      cursor: pointer;
    }

    .checkbox-label input[type='checkbox'] {
      cursor: pointer;
    }
  `;
}
