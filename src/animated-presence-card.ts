import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { AnimatedPresenceConfig, HomeAssistant } from './types';
import { lofiRoomBackgrounds } from './animated-presence/lofi-rooms';
import { PresenceEngine } from './animated-presence/presence-engine';
import { PresencePhase, type PresenceState } from './animated-presence/presence-states';
import { loadLottie } from './animated-presence/lottie-loader';
import { bundledAnimations } from './animated-presence/bundled-animations';
import type { LottiePlayer, LottieAnimationItem } from './animated-presence/lottie-types';

export class AnimatedPresenceCard extends LitElement {
  private _config?: AnimatedPresenceConfig;
  private _hass?: HomeAssistant;
  private _engine?: PresenceEngine;
  private _lottiePlayer?: LottiePlayer;
  private _lottieAnim?: LottieAnimationItem;
  private _currentLottieFile?: string;

  @state() private _entityState?: string;
  @state() private _error?: string;
  @state() private _presenceState?: PresenceState;
  @state() private _lottieReady = false;

  public setConfig(config: AnimatedPresenceConfig): void {
    if (!config.entity) {
      throw new Error("Please define an entity");
    }
    this._config = config;
  }

  public set hass(hass: HomeAssistant) {
    this._hass = hass;

    if (!this._config) return;

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

    if (this._error !== undefined) {
      this._error = undefined;
    }

    const roomKey = entity.state.toLowerCase().replace(/\s+/g, "_");

    if (this._entityState !== roomKey) {
      this._entityState = roomKey;
      if (this._engine) {
        this._engine.changeRoom(roomKey);
      }
    }
  }

  public getCardSize(): number {
    return 3;
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement("animated-presence-card-editor");
  }

  public static getStubConfig(): Omit<AnimatedPresenceConfig, "type"> {
    return {
      entity: "",
      name: "Presence",
    };
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this._engine = new PresenceEngine((presenceState) => {
      this._presenceState = presenceState;
      this._syncLottieAnimation(presenceState);
    });
    this._engine.start();
    this._initLottie();
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._engine) {
      this._engine.stop();
    }
    if (this._lottieAnim) {
      this._lottieAnim.destroy();
      this._lottieAnim = undefined;
    }
  }

  private async _initLottie(): Promise<void> {
    try {
      this._lottiePlayer = await loadLottie();
      this._lottieReady = true;
    } catch {
      this._lottieReady = false;
    }
  }

  private _syncLottieAnimation(presenceState: PresenceState): void {
    if (!this._lottiePlayer || !this._lottieReady) return;

    const animFile = presenceState.lottieAnimation;
    if (animFile === this._currentLottieFile) return;

    if (this._lottieAnim) {
      this._lottieAnim.destroy();
      this._lottieAnim = undefined;
    }

    this._currentLottieFile = animFile;

    const container = this.shadowRoot?.querySelector(".lottie-container") as HTMLElement | null;
    if (!container) return;

    const animationData = bundledAnimations[animFile];
    if (!animationData) return;

    try {
      this._lottieAnim = this._lottiePlayer.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    } catch {
      this._currentLottieFile = undefined;
    }
  }

  protected render() {
    if (!this._config) {
      return html``;
    }

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

    const anim = this._presenceState;
    const currentRoom = anim?.currentRoom;
    const outgoingRoom = anim?.outgoingRoom;

    const toKey = (name: string) => name.toLowerCase().replace(/\s+/g, "_");
    const currentRoomSvg = currentRoom ? lofiRoomBackgrounds[toKey(currentRoom)] : undefined;
    const outgoingRoomSvg = outgoingRoom ? lofiRoomBackgrounds[toKey(outgoingRoom)] : undefined;

    const isCrossfading = anim?.phase === PresencePhase.CROSSFADE;
    const crossfadeOpacity = anim ? 1 - anim.crossfadeProgress : 1;
    const showAvatar = anim?.visible ?? false;
    const avatarX = anim?.avatarX ?? 50;
    const displayName = this._config.name || this._entityState?.replace(/_/g, " ") || "Unknown";

    return html`
      <ha-card>
        <div class="scene-container">
          ${outgoingRoomSvg && isCrossfading
            ? html`
                <div class="room-background outgoing" style="opacity: ${crossfadeOpacity}">
                  ${unsafeHTML(outgoingRoomSvg)}
                </div>
              `
            : ""}

          ${currentRoomSvg
            ? html`
                <div class="room-background ${isCrossfading ? "incoming" : ""}">
                  ${unsafeHTML(currentRoomSvg)}
                </div>
              `
            : html`
                <div class="no-room-background">
                  <div class="placeholder-text">No room background</div>
                </div>
              `}

          ${showAvatar
            ? html`
                <div class="avatar" style="left: ${avatarX}%">
                  <div class="lottie-container"></div>
                </div>
              `
            : ""}

          <div class="room-label">${displayName}</div>
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    :host {
      --ap-bg: var(--card-background-color, #fff);
      --ap-text: var(--primary-text-color, #333);
      --ap-secondary: var(--secondary-text-color, #666);
      --ap-error: var(--error-color, #db4437);
    }

    ha-card {
      background: var(--ap-bg);
      color: var(--ap-text);
      overflow: hidden;
      padding: 0;
    }

    .scene-container {
      position: relative;
      width: 100%;
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

    .room-background.outgoing {
      z-index: 1;
    }

    .room-background.incoming {
      z-index: 0;
    }

    .no-room-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #8B7355 0%, #6B5335 100%);
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
      transform: translateX(-50%);
      width: 15%;
      z-index: 2;
    }

    .lottie-container {
      width: 100%;
      height: auto;
    }

    .lottie-container svg {
      width: 100%;
      height: auto;
      display: block;
    }

    .room-label {
      position: absolute;
      bottom: 4px;
      right: 8px;
      font-size: 0.75em;
      text-transform: capitalize;
      background: rgba(0, 0, 0, 0.3);
      padding: 2px 6px;
      border-radius: 3px;
      color: white;
      z-index: 3;
    }

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
      color: var(--ap-error);
      padding: 8px;
    }

    .error-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--ap-error);
      color: white;
      font-weight: bold;
      font-size: 14px;
      flex-shrink: 0;
    }

    .error-message {
      font-size: 0.9em;
      line-height: 1.3;
    }

    @media (min-width: 600px) {
      .scene-container {
        max-height: 300px;
        padding-bottom: 0;
        height: 250px;
      }
    }
  `;
}
