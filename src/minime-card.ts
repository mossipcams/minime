import { LitElement, html, css, unsafeCSS } from 'lit';
import { state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { MiniMeConfig, HomeAssistant } from './types';
import { lofiRoomBackgrounds } from './animated-presence/lofi-rooms';
import { PresenceEngine } from './animated-presence/presence-engine';
import { PresencePhase, type PresenceState } from './animated-presence/presence-states';
import { getTotemSvg, totemStyles } from './animated-presence/totem-avatar';
import { getDogSvg, dogStyles } from './animated-presence/dog-avatar';

export class MiniMeCard extends LitElement {
  private _config?: MiniMeConfig;
  private _hass?: HomeAssistant;
  private _engine?: PresenceEngine;
  private _dogEngine?: PresenceEngine;

  @state() private _entityState?: string;
  @state() private _dogEntityState?: string;
  @state() private _error?: string;
  @state() private _presenceState?: PresenceState;
  @state() private _dogPresenceState?: PresenceState;

  public setConfig(config: MiniMeConfig): void {
    if (!config.entity) {
      throw new Error("Please define an entity");
    }
    this._config = config;
  }

  public set hass(hass: HomeAssistant) {
    this._hass = hass;

    if (!this._config) return;

    // --- Human entity ---
    const entity = hass.states[this._config.entity];

    if (!entity) {
      if (this._error !== `Entity not found: ${this._config.entity}`) {
        this._error = `Entity not found: ${this._config.entity}`;
      }
      if (this._entityState !== undefined) {
        this._entityState = undefined;
      }
      return;
    }

    if (entity.state === "unavailable") {
      if (this._error !== "Entity is unavailable") {
        this._error = "Entity is unavailable";
      }
      if (this._entityState !== undefined) {
        this._entityState = undefined;
      }
      return;
    }

    // Bermuda device_tracker: state is home/not_home, area is in attributes
    if (entity.state === "not_home") {
      if (this._entityState !== "not_home") {
        this._entityState = "not_home";
      }
      if (this._error !== undefined) {
        this._error = undefined;
      }
      return;
    }

    if (this._error !== undefined) {
      this._error = undefined;
    }

    // Read area from attributes (Bermuda BLE) with fallback to entity state
    const areaName = (entity.attributes?.area as string) || entity.state;
    const roomKey = areaName.toLowerCase().replace(/\s+/g, "_");

    if (this._entityState !== roomKey) {
      this._entityState = roomKey;
      if (this._engine) {
        this._engine.changeRoom(roomKey);
      }
    }

    // --- Dog entity ---
    if (this._config.dog_entity) {
      const dogEntity = hass.states[this._config.dog_entity];
      if (dogEntity && dogEntity.state !== "unavailable" && dogEntity.state !== "not_home") {
        const dogArea = (dogEntity.attributes?.area as string) || dogEntity.state;
        const dogRoomKey = dogArea.toLowerCase().replace(/\s+/g, "_");
        if (this._dogEntityState !== dogRoomKey) {
          this._dogEntityState = dogRoomKey;
          if (this._dogEngine) {
            this._dogEngine.changeRoom(dogRoomKey);
          }
        }
      } else {
        if (this._dogEntityState !== undefined) {
          this._dogEntityState = undefined;
        }
      }
    }
  }

  public getCardSize(): number {
    return 1;
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement("minime-card-editor");
  }

  public static getStubConfig(): Omit<MiniMeConfig, "type"> {
    return {
      entity: "",
      name: "Presence",
    };
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this._engine = new PresenceEngine((presenceState) => {
      this._presenceState = presenceState;
    });
    this._engine.start();
    // hass is set before connectedCallback, so sync the engine with current room
    if (this._entityState && this._entityState !== "not_home") {
      this._engine.changeRoom(this._entityState);
    }

    // Dog engine
    if (this._config?.dog_entity) {
      this._dogEngine = new PresenceEngine((dogState) => {
        this._dogPresenceState = dogState;
      });
      this._dogEngine.start();
      if (this._dogEntityState) {
        this._dogEngine.changeRoom(this._dogEntityState);
      }
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._engine) {
      this._engine.stop();
    }
    if (this._dogEngine) {
      this._dogEngine.stop();
    }
  }

  protected render() {
    if (!this._config) {
      return html``;
    }

    if (this._error) {
      return html`
        <ha-card>
          <div class="header error-header">
            <span class="error-icon">!</span>
            <span class="error-message">${this._error}</span>
          </div>
        </ha-card>
      `;
    }

    // Not-home state: show dark house
    const isNotHome = this._entityState === "not_home";
    if (isNotHome) {
      const notHomeSvg = lofiRoomBackgrounds["not_home"];
      return html`
        <ha-card>
          <div class="header">
            <div class="room-bg-wrap">
              ${notHomeSvg
                ? html`<div class="room-bg">${unsafeHTML(notHomeSvg)}</div>`
                : html`<div class="room-bg-fallback"></div>`}
            </div>
          </div>
        </ha-card>
      `;
    }

    const anim = this._presenceState;
    const currentRoom = anim?.currentRoom;
    const outgoingRoom = anim?.outgoingRoom;

    const toKey = (name: string) => name.toLowerCase().replace(/\s+/g, "_");
    const currentRoomSvg = currentRoom ? lofiRoomBackgrounds[toKey(currentRoom)] : undefined;
    const outgoingRoomSvg = outgoingRoom ? lofiRoomBackgrounds[toKey(outgoingRoom)] : undefined;

    const isCrossfading = anim?.phase === PresencePhase.CROSSFADE;
    const crossfadeOpacity = anim ? 1 - anim.crossfadeProgress : 1;
    const showAvatar = anim?.visible ?? false;
    const avatarX = anim?.avatarX ?? 35;
    const activity = anim?.animation ?? 'idle';

    // Dog positioning
    const dogAnim = this._dogPresenceState;
    const showDog = this._config.dog_entity &&
      this._dogEntityState &&
      dogAnim?.visible &&
      dogAnim?.currentRoom === currentRoom;
    const dogX = showDog ? (dogAnim?.avatarX ?? 35) + 12 : 0;
    const dogActivity = dogAnim?.animation ?? 'idle';

    return html`
      <ha-card>
        <div class="header">
          <div class="room-bg-wrap">
            ${outgoingRoomSvg && isCrossfading
              ? html`<div class="room-bg outgoing" style="opacity: ${crossfadeOpacity}">${unsafeHTML(outgoingRoomSvg)}</div>`
              : ""}
            ${currentRoomSvg
              ? html`<div class="room-bg ${isCrossfading ? "incoming" : ""}">${unsafeHTML(currentRoomSvg)}</div>`
              : html`<div class="room-bg-fallback"></div>`}
          </div>

          ${showAvatar
            ? html`<div class="avatar" style="left: ${avatarX}%">${unsafeHTML(getTotemSvg(activity))}</div>`
            : ""}
          ${showDog
            ? html`<div class="dog-avatar-wrap" style="left: ${dogX}%">${unsafeHTML(getDogSvg(dogActivity))}</div>`
            : ""}
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    :host {
      --minime-bg: var(--card-background-color, #1c1c1c);
      --minime-text: var(--primary-text-color, #fff);
      --minime-secondary: var(--secondary-text-color, #aaa);
      --minime-error: var(--error-color, #db4437);
    }

    ha-card {
      overflow: hidden;
      padding: 0;
      border: none;
    }

    .header {
      position: relative;
      height: 120px;
      overflow: hidden;
    }

    .room-bg-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .room-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .room-bg svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .room-bg.outgoing {
      z-index: 0;
    }

    .room-bg.incoming {
      z-index: 0;
    }

    .room-bg-fallback {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%);
    }

    .avatar {
      position: absolute;
      bottom: 13px;
      width: 36px;
      z-index: 2;
      transform: translateX(-50%);
    }

    .dog-avatar-wrap {
      position: absolute;
      bottom: 15px;
      width: 24px;
      z-index: 2;
      transform: translateX(-50%);
    }

    .error-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 16px;
      background: var(--minime-bg);
    }

    .error-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--minime-error);
      color: white;
      font-weight: bold;
      font-size: 12px;
      flex-shrink: 0;
    }

    .error-message {
      font-size: 0.85em;
      color: var(--minime-error);
    }

    ${unsafeCSS(totemStyles)}
    ${unsafeCSS(dogStyles)}
  `;
}
