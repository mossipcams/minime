# Architecture Research

**Domain:** Home Assistant Custom Cards
**Researched:** February 3, 2026
**Confidence:** MEDIUM-HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Custom Card Element                       │
│                   (LitElement Web Component)                 │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Render     │  │  Animation   │  │    Editor    │      │
│  │   Layer      │  │   Engine     │  │  Component   │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                  │                  │              │
├─────────┴──────────────────┴──────────────────┴──────────────┤
│                     State Layer                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Reactive   │  │    Config    │  │   Derived    │      │
│  │  Properties  │  │    Store     │  │    State     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
├─────────────────────────────────────────────────────────────┤
│                  Home Assistant Integration                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │          HASS Object (entity states, services)      │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Custom Card Element** | Top-level Web Component that implements HA card lifecycle | LitElement class extending HTMLElement with @customElement decorator |
| **Render Layer** | DOM rendering and template management | Lit `render()` method with html template literals |
| **Animation Engine** | Frame-based animation or CSS animation control | RequestAnimationFrame loop, CSS classes, or canvas rendering |
| **Editor Component** | Visual configuration UI (optional but recommended) | Separate LitElement returned by `getConfigElement()` |
| **Reactive Properties** | Internal state that triggers re-renders | Lit `@state` decorator for private state, `@property` for public props |
| **Config Store** | User configuration from YAML/UI | Stored in `setConfig()`, validated on changes |
| **HASS Integration** | Connection to Home Assistant state and services | `set hass(hass)` setter receives state updates |

## Recommended Project Structure

```
src/
├── main.ts                  # Entry point, card registration
├── types.ts                 # TypeScript types and interfaces
├── minime-card.ts           # Main card element class
├── minime-card-editor.ts    # Visual editor component
├── components/              # Sub-components
│   ├── avatar-renderer.ts   # Pixel art rendering logic
│   ├── animation-engine.ts  # Animation state machine
│   └── room-transition.ts   # Walking/transition animations
├── utils/                   # Helper functions
│   ├── ha-helpers.ts        # Home Assistant integration helpers
│   └── config-validator.ts  # Configuration validation
└── styles/                  # CSS modules or Lit styles
    └── card-styles.ts       # Shared styles

dist/                        # Build output
├── minime-card.js           # Bundled card (for HACS)
└── minime-card.js.map       # Source map

tests/                       # Vitest tests
├── unit/                    # Component unit tests
├── integration/             # HA integration tests
└── fixtures/                # Test fixtures (mock hass objects)

.devcontainer/               # Development container config
rollup.config.js             # Build configuration
package.json                 # Dependencies and scripts
tsconfig.json                # TypeScript config
hacs.json                    # HACS metadata
README.md                    # Documentation
```

### Structure Rationale

- **main.ts as entry:** Rollup/Webpack entry point that registers the custom element with `customElements.define()`
- **Separate editor:** Editor component is only loaded when configuration UI is opened, reducing main bundle size
- **Components/ folder:** Isolate complex logic (animation, rendering) into testable modules
- **utils/ for helpers:** HA integration utilities and config validation separate from UI logic
- **Flat dist/:** HACS expects single `.js` file in root or `dist/` directory

## Architectural Patterns

### Pattern 1: Lifecycle Methods Implementation

**What:** Home Assistant custom cards follow a specific lifecycle with required and optional methods.

**When to use:** All custom cards must implement this pattern.

**Trade-offs:**
- Pro: Standardized integration with HA dashboard
- Con: `set hass()` is called frequently (every state change), requires careful optimization

**Example:**
```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

@customElement('minime-card')
export class MiniMeCard extends LitElement {
  // NEVER make hass a reactive @property - causes re-render on every HA state change
  public hass!: HomeAssistant;

  // Config should be reactive to trigger re-render on config changes
  @state() private config?: MiniMeCardConfig;

  // Required: Called when card is configured
  public setConfig(config: MiniMeCardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  // Required: HA updates this on every state change
  public set hass(hass: HomeAssistant) {
    const oldHass = this._hass;
    this._hass = hass;

    // CRITICAL: Only extract what you need, store in reactive properties
    if (this.config?.entity) {
      const newState = hass.states[this.config.entity];
      if (newState !== this._entityState) {
        this._entityState = newState;
        this.requestUpdate(); // Trigger render only when relevant state changes
      }
    }
  }

  // Required for masonry layout (1 unit = 50px height)
  public getCardSize(): number {
    return 3; // 150px tall
  }

  // Optional: For sections/grid view
  public getGridOptions() {
    return {
      columns: 2,
      rows: 2,
      min_columns: 2,
      min_rows: 2
    };
  }

  // Optional: Returns editor element for visual config
  public static getConfigElement() {
    return document.createElement('minime-card-editor');
  }

  // Optional: Returns default config for card picker
  public static getStubConfig() {
    return { entity: 'person.user' };
  }

  private _hass?: HomeAssistant;
  @state() private _entityState?: any;

  render() {
    return html`<div>Card content</div>`;
  }
}
```

### Pattern 2: Selective State Extraction (Critical Performance Pattern)

**What:** Extract only relevant data from the `hass` object into reactive `@state` properties instead of making `hass` itself reactive.

**When to use:** Always. This is the most important performance pattern for HA custom cards.

**Trade-offs:**
- Pro: Prevents unnecessary re-renders on unrelated HA state changes
- Pro: Reduces CPU/battery usage significantly
- Con: Requires manual extraction logic in `set hass()`

**Example:**
```typescript
// BAD: Don't do this!
@property() hass!: HomeAssistant; // Re-renders on EVERY entity change in entire HA

// GOOD: Do this instead
private _hass!: HomeAssistant;

@state() private _currentRoom?: string;
@state() private _deviceState?: string;
@state() private _lastChanged?: Date;

public set hass(hass: HomeAssistant) {
  const oldHass = this._hass;
  this._hass = hass;

  // Extract only what this card cares about
  if (this.config?.entity) {
    const entity = hass.states[this.config.entity];
    const newRoom = entity.attributes.area_id;
    const newState = entity.state;

    // Update reactive properties only when changed
    if (newRoom !== this._currentRoom) {
      this._currentRoom = newRoom;
      this._triggerAnimation('walk'); // Trigger animation on room change
    }

    if (newState !== this._deviceState) {
      this._deviceState = newState;
    }
  }
}
```

### Pattern 3: Lazy Editor Loading

**What:** Editor component is a separate custom element, loaded only when configuration UI opens.

**When to use:** For cards with complex configuration UI. Simple cards can use `getConfigForm()` instead.

**Trade-offs:**
- Pro: Reduces main bundle size
- Pro: Editor can have different dependencies than card
- Con: Requires separate component file

**Example:**
```typescript
// minime-card.ts
public static getConfigElement() {
  return document.createElement('minime-card-editor');
}

// minime-card-editor.ts
@customElement('minime-card-editor')
export class MiniMeCardEditor extends LitElement {
  @property() public hass!: HomeAssistant;
  @state() private _config?: MiniMeCardConfig;

  public setConfig(config: MiniMeCardConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as any;
    const configValue = target.configValue;

    if (this._config[configValue] === target.value) return;

    const newConfig = { ...this._config, [configValue]: target.value };

    // Dispatch config-changed event to notify HA
    const changeEvent = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changeEvent);
  }

  render() {
    return html`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${this._config?.entity}
        .configValue=${'entity'}
        @value-changed=${this._valueChanged}
      ></ha-entity-picker>
    `;
  }
}
```

### Pattern 4: Animation Architecture (For MiniMe)

**What:** Separate animation engine from rendering layer using requestAnimationFrame loop or CSS animations.

**When to use:** For cards with continuous or state-driven animations (like pixel art avatar).

**Trade-offs:**
- Pro: Smooth 60fps animations independent of HA state updates
- Pro: Can pause/resume based on visibility
- Con: Adds complexity compared to CSS-only animations

**Example:**
```typescript
// animation-engine.ts
export class AnimationEngine {
  private frameId?: number;
  private currentFrame = 0;
  private animations: Map<string, Animation> = new Map();

  start() {
    const loop = () => {
      this.currentFrame++;
      this.update();
      this.frameId = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }

  playAnimation(name: string) {
    const anim = this.animations.get(name);
    if (anim) {
      anim.play();
    }
  }
}

// In card component
@state() private _animationState = { frame: 0, animation: 'idle' };

connectedCallback() {
  super.connectedCallback();
  this._animationEngine.start();
  this._animationEngine.onFrameUpdate = (state) => {
    this._animationState = state; // Triggers Lit re-render
  };
}

disconnectedCallback() {
  super.disconnectedCallback();
  this._animationEngine.stop();
}
```

### Pattern 5: Using custom-card-helpers

**What:** Leverage the `custom-card-helpers` library for HA integration utilities and TypeScript types.

**When to use:** Always. Provides essential types and helper functions.

**Trade-offs:**
- Pro: Type safety with HomeAssistant interface
- Pro: Utility functions like `hasConfigOrEntityChanged`, `fireEvent`, `handleClick`
- Con: Library last updated 4 years ago (but still works)

**Example:**
```typescript
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  fireEvent
} from 'custom-card-helpers';

protected shouldUpdate(changedProps: PropertyValues): boolean {
  // Only update if config or relevant entity changed
  return hasConfigOrEntityChanged(this, changedProps, false);
}

private _handleClick(): void {
  // Use helper to fire standard HA events
  fireEvent(this, 'hass-more-info', { entityId: this.config.entity });
}
```

## Data Flow

### Card Lifecycle Flow

```
User adds card to dashboard
    ↓
HA calls setConfig(config)
    ↓
Card validates config, stores it
    ↓
HA sets hass property (initial state)
    ↓
Card extracts relevant entity states
    ↓
Card renders with initial data
    ↓
─────── Runtime Loop ────────
    ↓
Entity state changes in HA
    ↓
HA sets hass property (new state)
    ↓
Card compares old vs new state
    ↓
If relevant: update reactive properties
    ↓
Lit triggers re-render
    ↓
render() method produces new DOM
```

### Configuration Flow

```
User opens card editor
    ↓
HA creates editor element (getConfigElement)
    ↓
HA calls editor.setConfig(currentConfig)
    ↓
Editor renders config UI
    ↓
User changes configuration value
    ↓
Editor dispatches 'config-changed' event
    ↓
HA receives event, updates config
    ↓
HA calls card.setConfig(newConfig)
    ↓
Card re-renders with new config
```

### Animation Flow (MiniMe-specific)

```
Entity state change (person moved to new room)
    ↓
set hass() detects room change
    ↓
Update _currentRoom reactive property
    ↓
Animation engine triggered with 'walk' animation
    ↓
RequestAnimationFrame loop updates frame number
    ↓
Each frame: update _animationState
    ↓
Lit re-renders avatar with new frame
    ↓
Avatar displays walking animation
    ↓
Animation completes, transitions to 'idle'
```

### Key Data Flows

1. **State subscription:** HA pushes state via `hass` setter → Card extracts entities → Reactive properties update → Lit re-renders
2. **Configuration:** Editor UI change → `config-changed` event → HA updates config → Card `setConfig()` called → Re-render
3. **User interaction:** Click on card → Fire HA event (more-info, navigate, call-service) → HA handles action
4. **Animation:** State change triggers animation → RequestAnimationFrame loop → Update frame state → Re-render canvas/DOM

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Single card | Simple component, inline styles, minimal abstraction |
| Multiple cards (1-10) | Shared utilities in utils/, reusable animation engine |
| Large dashboard (50+ cards) | Critical to optimize `set hass()` - only update on relevant changes, debounce expensive operations |
| Complex animations | Consider Canvas API instead of DOM for performance, use OffscreenCanvas for heavy computations |

### Scaling Priorities

1. **First bottleneck:** Inefficient `set hass()` implementation causes all cards to re-render on every HA state change
   - **Fix:** Extract only relevant entities into reactive state, use `shouldUpdate()` lifecycle method

2. **Second bottleneck:** Animation frame drops when many cards animate simultaneously
   - **Fix:** Use IntersectionObserver to pause animations for off-screen cards, throttle animation updates

3. **Third bottleneck:** Large bundle size increases dashboard load time
   - **Fix:** Code splitting for editor component, lazy load animation assets, tree-shake unused code

## Anti-Patterns

### Anti-Pattern 1: Making `hass` a Reactive Property

**What people do:**
```typescript
@property() hass!: HomeAssistant; // DON'T DO THIS
```

**Why it's wrong:**
The `hass` object is updated by HA on every entity state change across the entire system. Making it reactive causes the card to re-render continuously, even when nothing relevant to the card changed. This kills performance and drains battery on mobile devices.

**Do this instead:**
```typescript
private _hass!: HomeAssistant;
@state() private _relevantEntityState?: any;

public set hass(hass: HomeAssistant) {
  this._hass = hass;
  // Extract only what you need
  const newState = hass.states[this.config.entity];
  if (newState !== this._relevantEntityState) {
    this._relevantEntityState = newState;
  }
}
```

### Anti-Pattern 2: Not Implementing getCardSize()

**What people do:** Omit the `getCardSize()` method entirely.

**Why it's wrong:** HA masonry layout won't distribute cards properly, leading to visual gaps or overlapping cards.

**Do this instead:**
```typescript
public getCardSize(): number {
  // Calculate based on content, 1 unit = 50px
  return this.config.show_details ? 4 : 2;
}
```

### Anti-Pattern 3: Complex Rendering in set hass()

**What people do:**
```typescript
public set hass(hass: HomeAssistant) {
  this._hass = hass;
  // DON'T: Complex calculations, API calls, DOM manipulation
  this.shadowRoot.querySelector('.avatar').style.left = calculatePosition();
}
```

**Why it's wrong:** `set hass()` is called frequently (potentially multiple times per second). Heavy operations here block the main thread and cause lag.

**Do this instead:**
```typescript
public set hass(hass: HomeAssistant) {
  this._hass = hass;
  // Only update lightweight state
  this._entityState = hass.states[this.config.entity];
  // Let render() handle DOM updates efficiently
}

render() {
  const position = this._calculatePosition();
  return html`<div class="avatar" style="left: ${position}px"></div>`;
}
```

### Anti-Pattern 4: Not Validating Configuration

**What people do:** Accept any config without validation.

**Why it's wrong:** Runtime errors when user provides invalid config, poor user experience.

**Do this instead:**
```typescript
public setConfig(config: MiniMeCardConfig): void {
  if (!config.entity) {
    throw new Error('entity is required');
  }

  if (config.entity && !config.entity.startsWith('person.')) {
    throw new Error('entity must be a person entity');
  }

  this.config = config;
}
```

### Anti-Pattern 5: Blocking the Main Thread with Animations

**What people do:** Run heavy canvas operations or calculations synchronously in render loop.

**Why it's wrong:** Causes frame drops, stuttering animations, unresponsive UI.

**Do this instead:**
```typescript
// Use OffscreenCanvas for heavy rendering
private async _renderAnimationFrame(frame: number) {
  if (this._offscreenCanvas) {
    const bitmap = await this._offscreenCanvas.transferToImageBitmap();
    const ctx = this.canvas.getContext('bitmaprenderer');
    ctx?.transferFromImageBitmap(bitmap);
  }
}

// Or debounce expensive operations
private _debouncedUpdate = debounce(() => {
  // Expensive calculation
}, 100);
```

### Anti-Pattern 6: Registering Card Multiple Times

**What people do:** Call `customElements.define()` multiple times or don't check if element is already defined.

**Why it's wrong:** Throws error "Custom element already defined" when card is loaded multiple times.

**Do this instead:**
```typescript
// main.ts
if (!customElements.get('minime-card')) {
  customElements.define('minime-card', MiniMeCard);
}

// Register card in window.customCards for card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'minime-card',
  name: 'MiniMe Card',
  description: 'Pixel art avatar with room-specific animations'
});
```

## Integration Points

### Home Assistant Elements

| Element | Usage | Notes |
|---------|-------|-------|
| `ha-icon` | Display Material Design icons | Available globally in HA, no import needed |
| `ha-card` | Standard card container | Provides consistent card styling |
| `ha-entity-picker` | Entity selection in editor | Used in configuration UI |
| `ha-icon-picker` | Icon selection in editor | For customizable icons |
| `ha-formfield` | Form field wrapper | Proper label/input pairing |
| `hui-error-card` | Error display | Standard error presentation |

### Custom Card Helpers Library

| Helper | Purpose | Usage |
|--------|---------|-------|
| `hasConfigOrEntityChanged()` | Optimize shouldUpdate() | Prevent unnecessary re-renders |
| `fireEvent()` | Dispatch HA events | Trigger actions, more-info dialogs |
| `handleClick()` | Process tap actions | Standard click handling with action configs |
| `computeStateName()` | Get entity friendly name | Display entity names |
| `applyThemesOnElement()` | Apply HA themes | Theme-aware styling |

### HACS Distribution

| File | Required | Purpose |
|------|----------|---------|
| `hacs.json` | Yes | HACS metadata (name, version, render_readme) |
| `README.md` | Yes | Installation and usage documentation |
| `dist/minime-card.js` | Yes | Bundled card JavaScript |
| `LICENSE` | Recommended | Open source license |
| GitHub releases | Yes | HACS uses release tags for versioning |
| GitHub topics | Recommended | Searchability in HACS store |

**HACS Requirements:**
- Repository must be public on GitHub
- Must have repository description
- Must use GitHub releases (not just tags)
- Must have `hacs.json` in repository root
- Card file should be single bundled `.js` file in root or `dist/`

### Internal Component Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Card ↔ Editor | `config-changed` event (editor → card) | Editor dispatches event, HA routes to card |
| Card ↔ Animation Engine | Method calls + callbacks | Engine updates frame state, card requests animations |
| Card ↔ HA | `hass` property (HA → card) | One-way data flow, card reads, never writes |
| Card → HA Services | `this.hass.callService()` | Call HA services (lights, switches, etc.) |
| Card → User | Events (`hass-more-info`, `hass-action`) | Fire events for HA to handle |

## Build Configuration

### Rollup Setup (Recommended)

Rollup is the standard bundler for HA custom cards, providing efficient tree-shaking and ES module output.

**Key Configuration:**
```javascript
// rollup.config.js
export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/minime-card.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    terser() // Minification for production
  ]
};
```

**Important Notes:**
- Entry point should be `src/main.ts` (or `src/index.ts`)
- Output format must be ES modules (not UMD or CommonJS)
- Single bundled file in `dist/` for HACS
- Include source maps for debugging
- Terser for production minification

### Alternative: Vite/Webpack

Vite is becoming popular for faster development, but requires careful configuration:
- Must output single ES module file
- Configure for library mode, not application mode
- Ensure external dependencies aren't bundled (custom-card-helpers should be external)

## Testing Strategy (MiniMe-specific with Vitest)

### Testing Pyramid

1. **Unit tests (70%):** Test individual components, utilities, animation logic
2. **Integration tests (20%):** Test card with mock HASS object
3. **E2E tests (10%):** Test in actual HA environment (manual or with hass-taste-test)

### Vitest + Lit Component Testing

Vitest provides excellent support for Lit web components with Browser Mode:

```typescript
// tests/unit/minime-card.test.ts
import { fixture, expect, html } from '@open-wc/testing';
import { MiniMeCard } from '../../src/minime-card';
import { createMockHass } from '../fixtures/mock-hass';

describe('MiniMeCard', () => {
  it('renders with entity', async () => {
    const el = await fixture<MiniMeCard>(html`
      <minime-card .hass=${createMockHass()} .config=${{ entity: 'person.test' }}></minime-card>
    `);

    expect(el.shadowRoot?.querySelector('.avatar')).to.exist;
  });

  it('triggers animation on room change', async () => {
    const el = await fixture<MiniMeCard>(html`<minime-card></minime-card>`);
    const hass = createMockHass();

    el.setConfig({ entity: 'person.test' });
    el.hass = hass;

    // Simulate room change
    hass.states['person.test'].attributes.area_id = 'living_room';
    el.hass = { ...hass }; // Trigger update

    await el.updateComplete;

    expect(el._animationState.animation).to.equal('walk');
  });
});
```

**Testing Best Practices:**
- Use `@open-wc/testing` for Lit component fixtures
- Use `@vitest/browser` for real browser testing
- Mock the HASS object with fixtures
- Test animation state transitions without waiting for actual frame timing
- Snapshot test rendered DOM with `getDiffableHTML` from `@open-wc/semantic-dom-diff`

## Build Order Recommendations for MiniMe

Based on dependencies between components:

### Phase 1: Core Structure
1. **TypeScript types and interfaces** - Define `MiniMeCardConfig`, state interfaces
2. **Basic card shell** - LitElement component with lifecycle methods
3. **Config validation** - `setConfig()` implementation
4. **HASS integration basics** - `set hass()` with entity extraction

### Phase 2: Rendering
5. **Avatar renderer component** - Pixel art rendering (static first)
6. **Card styling** - CSS for layout and theming
7. **Basic render** - Display static avatar based on entity state

### Phase 3: Animation
8. **Animation engine** - RequestAnimationFrame loop, state machine
9. **Animation assets** - Sprite sheets or frame data
10. **Animation integration** - Connect engine to card, trigger on state changes

### Phase 4: Polish
11. **Room-specific animations** - Different animations per room
12. **Transition animations** - Walking between rooms
13. **Card editor** - Visual configuration UI
14. **HACS packaging** - Build config, hacs.json, documentation

**Critical Path Dependencies:**
- Animation engine depends on: Basic render + Avatar renderer
- Editor depends on: Core structure + Config validation
- Room animations depend on: Animation engine + HASS integration

## Sources

### Official Documentation (HIGH confidence)
- [Custom card | Home Assistant Developer Docs](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/)
- [Lit - Reactive properties](https://lit.dev/docs/components/properties/)
- [Lit - Decorators](https://lit.dev/docs/api/decorators/)
- [Vitest - Component Testing](https://vitest.dev/guide/browser/component-testing)

### Community Resources (MEDIUM confidence)
- [Sergio Carracedo | Creating custom cards for Home Assistant](https://sergiocarracedo.es/ha-custom-cards/)
- [custom-cards/boilerplate-card - GitHub](https://github.com/custom-cards/boilerplate-card)
- [custom-cards/custom-card-helpers - GitHub](https://github.com/custom-cards/custom-card-helpers)
- [Tutorials: How to develop a custom card and ship HACS repositories](https://community.home-assistant.io/t/tutorials-how-to-develop-a-custom-card-and-ship-hacs-repositories/526566)
- [Custom Repositories - HACS](https://www.hacs.xyz/docs/faq/custom_repositories/)

### Example Implementations (MEDIUM confidence)
- [custom-cards/button-card - GitHub](https://github.com/custom-cards/button-card)
- [home-assistant-tutorials/09.toggle-card-lit - GitHub](https://github.com/home-assistant-tutorials/09.toggle-card-lit)
- [ha-custom-card-rollup-ts-lit-starter - GitHub](https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter)

### Testing Resources (MEDIUM confidence)
- [Testing Lit with Vitest Browser and Playwright - GitHub](https://github.com/oscarmarina/lit-vitest-testing-comparison)
- [vitest-lit-browser - GitHub](https://github.com/userquin/vitest-lit-browser)
- [hass-taste-test: E2E testing for HA cards - GitHub](https://github.com/rianadon/hass-taste-test)

---
*Architecture research for: MiniMe - Home Assistant Custom Card*
*Researched: February 3, 2026*
*Confidence: MEDIUM-HIGH (official docs verified, community patterns surveyed, some patterns extrapolated from general Lit/web components best practices)*
