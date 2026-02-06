import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import type { MiniMeConfig, HomeAssistant } from './types';

export class MiniMeCardEditor extends LitElement {
  public hass?: HomeAssistant;

  @state() private _config?: MiniMeConfig;

  public setConfig(config: MiniMeConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: Event): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as any;
    const configValue = target.configValue;
    const value = target.value;

    if (!configValue) return;

    const newConfig = {
      ...this._config,
      [configValue]: value,
    };

    this._dispatchConfigChanged(newConfig);
  }

  private _dispatchConfigChanged(config: MiniMeConfig): void {
    const event = new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  protected render() {
    if (!this._config) {
      return html``;
    }

    return html`
      <div class="editor">
        <div class="editor-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity || ''}
            .configValue=${'entity'}
            @value-changed=${this._valueChanged}
            label="Entity"
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="editor-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.dog_entity || ''}
            .configValue=${'dog_entity'}
            @value-changed=${this._valueChanged}
            label="Dog Entity (optional)"
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
  `;
}
