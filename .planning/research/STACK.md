# Stack Research

**Domain:** Home Assistant Custom Cards (HACS)
**Researched:** 2026-02-03
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **Lit** | 3.3.2 | Web component framework | Official Home Assistant standard. Lightweight, native web components with TypeScript support. HA frontend uses Lit, ensuring API compatibility and best practices alignment. |
| **TypeScript** | 5.9.x | Type-safe development | Strongly recommended by HA community. Provides type definitions from custom-card-helpers, catches errors at compile time, and is the standard for professional HA card development. |
| **Rollup** | Latest | Module bundler | Community standard for HA custom cards. Lighter output than Webpack, better suited for single-file card bundles. Boilerplate-card and most HACS cards use Rollup. |
| **Vitest** | 4.0.17 | Testing framework | Per project requirements. Modern, fast, Vite-powered test runner with excellent TypeScript support. Native ESM support aligns with Lit's module structure. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **custom-card-helpers** | 1.9.0 | HA type definitions and helpers | Always. Provides HomeAssistant, LovelaceCardConfig, HassEntity types and handleClick helper. Community standard for card development. |
| **home-assistant-js-websocket** | 9.6.0 | WebSocket API client | Only if direct HA API calls needed beyond hass object. Provides HassEntity types for typing. MiniMe likely doesn't need this directly. |
| **card-mod** | Latest via HACS | CSS injection and styling | Optional. For advanced CSS animations and styling. Community standard for animated cards. Not a build dependency, users install separately. |

### Build and Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **@rollup/plugin-typescript** | 12.3.0 | TypeScript compilation | Official plugin. Requires tslib and typescript as peer dependencies. |
| **@rollup/plugin-node-resolve** | Latest | Resolve node_modules imports | Essential for bundling Lit and other dependencies. |
| **@rollup/plugin-babel** | Latest | Optional ES5 transpilation | Only needed for older browser support. Modern HA runs on evergreen browsers. |
| **@rollup/plugin-commonjs** | 29.0.0 | Convert CommonJS to ES6 | Needed if any dependencies use CommonJS. |
| **@rollup/plugin-terser** | Latest | Code minification | Essential. Minifies output bundle for production. Modern replacement for rollup-plugin-terser. |
| **rollup-plugin-serve** | Latest | Dev server with hot reload | Development convenience. Serves card to test HA instance. |
| **ESLint** | 9.x | Code linting | Use with typescript-eslint. Follow ESLint flat config pattern (2025 standard). |
| **Prettier** | Latest | Code formatting | Use with eslint-config-prettier to avoid conflicts. |

## Installation

```bash
# Core dependencies
npm install lit

# Supporting libraries
npm install custom-card-helpers home-assistant-js-websocket

# Dev dependencies - Build tools
npm install -D rollup @rollup/plugin-typescript @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-terser rollup-plugin-serve typescript tslib

# Dev dependencies - Testing
npm install -D vitest @vitest/ui happy-dom

# Dev dependencies - Linting and formatting
npm install -D eslint @eslint/js typescript-eslint eslint-config-prettier prettier

# Optional - Only if targeting older browsers
npm install -D @rollup/plugin-babel @babel/core @babel/preset-env
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| **Lit 3.x** | lit-element 4.2.2 | Never. lit-element is the old package name. Use `lit` package which includes LitElement. |
| **Rollup** | Vite | If you want faster dev builds and HMR. However, Rollup has better HACS community examples and simpler config for single-file output. |
| **Rollup** | Webpack | Never for HA cards. Webpack produces larger bundles and is overkill for single-file cards. |
| **Vitest** | Jest | If you have existing Jest experience. Vitest is faster and has better ESM/TypeScript support. |
| **custom-card-helpers 1.9.0** | Direct HA frontend imports | Never. custom-card-helpers provides stable API. Direct frontend imports break across HA versions. |
| **TypeScript 5.9.x** | TypeScript 6.0 (Q1 2026) | When 6.0 releases. Currently in RC. 5.9 is stable and well-supported. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **card-tools** | Deprecated and causes compatibility issues with modern HA versions (2025.x). Multiple breaking changes reported. | custom-card-helpers (official replacement) |
| **lit-element from CDN** | Unreachable/unstable unpkg imports reported in 2025. Not suitable for production. | Bundle lit via npm with Rollup |
| **React** | Explicitly not supported by HA for custom cards per official docs. Bundle size concerns. | Lit (official HA standard) |
| **Polymer** | Deprecated. HA moved from Polymer to Lit. Old example code still references it. | Lit 3.x |
| **rollup-plugin-terser** | No longer maintained. Official plugin available. | @rollup/plugin-terser |
| **rollup-plugin-commonjs** | Deprecated old version. | @rollup/plugin-commonjs |
| **ESLint formatting rules** | Deprecated in ESLint 8.53.0, removed in future versions. | Prettier for formatting |

## Stack Patterns by Variant

### For MiniMe (Animated Pixel Art Card)

**Animation Approach:**
- Use CSS animations via Lit's `css` template literal for performance
- Leverage card-mod for advanced state-based animations (users install this)
- Avoid heavy canvas libraries (Motion Canvas, Phaser) - overkill for simple pixel art
- Use CSS transforms and sprites for walking animations

**Recommended pattern:**
```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';

@customElement('minime-card')
export class MiniMeCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config?: LovelaceCardConfig;

  static styles = css`
    /* Pixel art and animations here */
    @keyframes walk { /* ... */ }
  `;
}
```

**Asset Strategy:**
- Inline small pixel art as SVG or base64 data URIs in the bundle
- For larger assets, reference from `/local/` directory (user installs)
- CSS sprite sheets for animation frames (more efficient than canvas)

### For HACS Distribution

**Required files:**
- `hacs.json` in root
- `dist/minime-card.js` (bundled output)
- `README.md` with installation instructions
- GitHub releases for versioning

**hacs.json structure:**
```json
{
  "name": "MiniMe Card",
  "content_in_root": false,
  "filename": "minime-card.js",
  "render_readme": true,
  "homeassistant": "2025.1.0"
}
```

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| **Lit 3.3.2** | TypeScript 5.9.x | Full TypeScript support with decorators |
| **custom-card-helpers 1.9.0** | HA 2025.x | Last updated 2021 but still compatible. Types may lag behind HA features. |
| **Rollup 4.x** | @rollup/plugin-* latest | All official @rollup plugins require Rollup 2.68.0+. Use Rollup 4.x for best experience. |
| **Vitest 4.x** | happy-dom or jsdom | happy-dom is lighter. Needed for DOM testing in Lit components. |
| **ESLint 9.x** | typescript-eslint 8.x | Use flat config format. Old .eslintrc.js deprecated. |
| **TypeScript 5.9.x** | Rollup via @rollup/plugin-typescript 12.3.0+ | Plugin requires TS 3.7+, but use latest 5.9.x for best experience. |

## Architecture Decisions

### Bundle Strategy
**Single-file output:** Rollup configured to produce one `dist/minime-card.js` file containing all dependencies (Lit, custom-card-helpers) for HACS compatibility.

### Module Format
**ESM (ES Modules):** Output as `es` format. Modern HA supports ES modules natively. No need for UMD/IIFE.

### TypeScript Configuration
**Target:** ES2021 or higher. HA runs on evergreen browsers (Chrome, Safari, Firefox).
**Module:** ESNext. Let Rollup handle module bundling.
**Decorators:** Enable `experimentalDecorators` for Lit's @customElement and @property.

### Testing Strategy
**Unit tests:** Vitest for component logic
**Integration tests:** Optional. ha-card-workbench for live dev testing.
**E2E tests:** Optional. hass-taste-test for automated HA instance testing.

For MiniMe, focus on unit tests for animation logic and state changes. E2E testing is overkill for a single card.

## Sources

**HIGH Confidence (Official/Community Standard):**
- [Home Assistant Custom Card Documentation](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/) - Official framework requirements
- [custom-card-helpers on npm](https://www.npmjs.com/package/custom-card-helpers) - Type definitions library
- [Lit on npm](https://www.npmjs.com/package/lit) - Version 3.3.2 confirmed
- [home-assistant-js-websocket on npm](https://www.npmjs.com/package/home-assistant-js-websocket) - Version 9.6.0 confirmed
- [Vitest on npm](https://www.npmjs.com/package/vitest) - Version 4.0.17 confirmed
- [HACS Plugin Documentation](https://www.hacs.xyz/docs/publish/plugin/) - HACS repository structure

**MEDIUM Confidence (Community Resources):**
- [custom-cards/boilerplate-card](https://github.com/custom-cards/boilerplate-card) - Community standard template using Rollup + TypeScript + Lit
- [ha-custom-card-rollup-ts-lit-starter](https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter) - Recent 2025 starter template
- [Sergio Carracedo's Custom Cards Guide](https://sergiocarracedo.es/ha-custom-cards/) - Development best practices
- [HA-Animated-cards Project](https://github.com/Anashost/HA-Animated-cards) - CSS animation patterns for cards
- [XDA: Animated Cards for HA](https://www.xda-developers.com/spruce-up-home-assistant-dashboard-with-these-animated-cards/) - Animation best practices 2025

**MEDIUM Confidence (Package Versions):**
- [@rollup/plugin-typescript on npm](https://www.npmjs.com/package/@rollup/plugin-typescript) - Version 12.3.0 confirmed
- [@rollup/plugin-commonjs on npm](https://www.npmjs.com/package/@rollup/plugin-commonjs) - Version 29.0.0 confirmed
- [@rollup/plugin-terser on npm](https://www.npmjs.com/package/@rollup/plugin-terser) - Latest minification plugin
- [Effective TypeScript 2025 Retrospective](https://effectivetypescript.com/2025/12/19/ts-2025/) - TypeScript 5.9 current, 6.0 Q1 2026

**LOW Confidence (Needs Verification):**
- Canvas libraries for pixel art - Researched but not recommended for MiniMe. CSS animations are lighter and sufficient.
- Babel configuration - Optional for HA cards. Modern browsers support ES2021 natively.

---
*Stack research for: MiniMe - Home Assistant Custom Card*
*Researched: 2026-02-03*
*Confidence: HIGH for core stack, MEDIUM for supporting tools*
