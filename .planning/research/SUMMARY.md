# Project Research Summary

**Project:** MiniMe - Home Assistant Custom Card
**Domain:** Home Assistant Custom Cards (HACS) with Pixel Art Animation
**Researched:** 2026-02-03
**Confidence:** HIGH

## Executive Summary

MiniMe is a Home Assistant custom card that transforms Bermuda BLE presence detection into an animated pixel art avatar experience. The card displays a game-like character that "lives" in different rooms of your home, with room-specific idle animations (working in office, cooking in kitchen) and smooth walking transitions between rooms. This project sits at the intersection of three well-documented domains: Home Assistant custom card development (Lit + TypeScript), CSS sprite animation, and Bermuda BLE integration.

The recommended approach is to build using Lit 3.x and TypeScript with Rollup bundling, following Home Assistant's official patterns. Start with a minimal viable card showing one static room scene and basic entity integration, then layer on animations incrementally. This validates the core concept before investing heavily in pixel art asset generation. The architecture is straightforward: a LitElement card component with selective state extraction from the hass object, CSS-based sprite animations (avoiding heavy JavaScript animation engines), and a separate editor component for visual configuration.

The highest risks are performance issues from inefficient state updates (making hass reactive causes continuous re-renders) and memory leaks from animation cleanup. Both are entirely preventable with established patterns: use a hass setter to extract only relevant entity state into reactive properties, and implement disconnectedCallback to cancel animation frames. Other critical pitfalls include HACS resource path mismatches (prevented by matching rollup output to HACS naming conventions from day one) and missing theme support (prevented by using CSS variables instead of hardcoded colors).

## Key Findings

### Recommended Stack

Home Assistant custom card development has a clear standard stack. Lit 3.x is the official framework (used by HA frontend itself), providing lightweight web components with excellent TypeScript support. TypeScript is strongly recommended by the community for type safety with custom-card-helpers library. Rollup is the bundler of choice for HACS cards, producing smaller bundles than Webpack and having extensive community examples. Vitest for testing aligns with project requirements while providing modern ESM support.

**Core technologies:**
- **Lit 3.3.2**: Web component framework — Official HA standard, ensures API compatibility and best practices alignment
- **TypeScript 5.9.x**: Type-safe development — Provides type definitions from custom-card-helpers, catches errors at compile time
- **Rollup (latest)**: Module bundler — Community standard, lighter output than Webpack, better suited for single-file card bundles
- **Vitest 4.0.17**: Testing framework — Per project requirements, modern ESM support aligns with Lit's module structure

**Supporting libraries:**
- **custom-card-helpers 1.9.0**: Provides HomeAssistant, LovelaceCardConfig, HassEntity types and handleClick helper — community standard
- **CSS animations via Lit's css template**: For pixel art sprite animations — more performant than canvas for simple animations

**What NOT to use:**
- card-tools (deprecated, breaks in modern HA)
- React (explicitly not supported by HA for custom cards)
- Canvas animation libraries like Motion Canvas or Phaser (overkill for pixel art sprites)
- External CDN imports for Lit (unreliable, unpkg reported unreachable in 2025)

### Expected Features

MiniMe's feature landscape divides clearly into three tiers: table stakes that all HA cards need, differentiators that provide the unique "personality and delight" value proposition, and anti-features that seem good but create problems.

**Must have (table stakes):**
- Entity state integration — Core HA contract, cards must react to state changes
- Visual editor configuration — HA standard, YAML-only is poor UX
- Proper card sizing — Implement getCardSize() for masonry layout
- Theme compatibility — Respect dark/light mode and custom themes
- Graceful error states — When device not found or integration disabled
- Mobile responsive — Must work on tablets and phones

**Should have (competitive advantage):**
- **Smooth animated transitions** — Avatar walks between rooms vs instant teleport (HIGH value, HIGH complexity)
- **Room-specific idle animations** — Each room shows contextual activity (cooking, working, sleeping) vs generic avatar (MEDIUM-HIGH value)
- **Personality through pixel art style** — Nostalgic game-like feel creates emotional connection (MEDIUM complexity)
- **Single-focus room view** — Shows only current room with full detail vs cluttered dollhouse view (LOW complexity, design decision)
- **Empty room "ghost" state** — Shows last known location when device offline (MEDIUM complexity)

**Defer (v2+):**
- Activity-based animation variants (time-of-day driven animations)
- Multiple visual themes (different art styles/palettes)
- Animation speed control
- Sound effects (likely overkill)
- HACS community publication (polish needed first)

**Anti-features to avoid:**
- Multi-person tracking on one card (cluttered, loses personality focus)
- Dollhouse/floorplan multi-room view (animations too small, loses impact)
- Real-time XY positioning (Bermuda provides area-level only, over-engineering)
- Extensive sprite customization (scope creep, file management nightmare)
- Heavy JavaScript canvas animations (battery drain, performance issues)

**MVP scope:** Entity integration + basic visual editor + ONE room-specific animation + 4 static room backgrounds + card sizing + basic errors + theme support. This validates "animated presence detection" concept without over-investing in polish.

### Architecture Approach

Home Assistant custom cards follow a standardized architecture built on LitElement web components. The most critical architectural pattern is selective state extraction: never make the hass object reactive (causes re-renders on every entity change in entire HA), instead use a hass setter to extract only relevant entity states into reactive properties. This single pattern is the difference between performant and unusable cards.

**Major components:**
1. **Card Element (LitElement)** — Top-level web component implementing required lifecycle methods (setConfig, set hass, getCardSize, render)
2. **Editor Element (separate LitElement)** — Visual configuration UI loaded lazily only when config opens, reducing main bundle size
3. **Animation Engine** — RequestAnimationFrame loop or CSS animation control, decoupled from HA state updates for smooth 60fps
4. **Reactive State Layer** — @state decorators for card-specific state (current room, animation frame), NOT for entire hass object

**Key architectural patterns:**
- **Lifecycle methods**: setConfig validates config and throws on errors, set hass extracts entity state selectively, getCardSize returns units for masonry layout
- **Selective state extraction (CRITICAL)**: Extract only relevant entities from hass into reactive properties, prevents continuous re-renders
- **Lazy editor loading**: Editor is separate custom element, loaded only when configuration UI opens
- **CSS-based animations for sprites**: Use Lit's css template literal and sprite sheets vs heavy canvas operations
- **Cleanup in disconnectedCallback**: Cancel all requestAnimationFrame, clear intervals, prevent memory leaks

**Project structure:**
```
src/
  main.ts                  # Entry point, card registration
  minime-card.ts           # Main card element class
  minime-card-editor.ts    # Visual editor component
  components/
    avatar-renderer.ts     # Pixel art rendering logic
    animation-engine.ts    # Animation state machine
  utils/
    ha-helpers.ts          # HA integration helpers
    config-validator.ts    # Configuration validation
  styles/
    card-styles.ts         # Shared styles with CSS variables

dist/minime-card.js        # Single bundled file for HACS
```

### Critical Pitfalls

Research identified 8 critical pitfalls, with the top 5 being:

1. **Making hass a reactive property** — Causes card to re-render on EVERY entity change in entire HA system, kills performance. ALWAYS use `set hass(hass)` setter and extract only relevant state. (Phase 1: Address in core infrastructure)

2. **Memory leaks from animations** — RequestAnimationFrame continues running when card removed from DOM, causes progressive slowdown and crashes. ALWAYS implement disconnectedCallback to cancel animation frames and intervals. (Phase 2: Address when building animation system)

3. **Resource path mismatch** — Card works in dev but fails after HACS installation due to file discovery rules. HACS expects dist/ directory and filename matching repo name. Set up build config matching HACS requirements from day one. (Phase 0: Address in project setup)

4. **Missing theme support** — Shadow DOM isolates styles, theme variables don't "just work". Use CSS custom properties for all colors: `var(--primary-text-color)`, test with dark mode. (Phase 1: Address in core infrastructure)

5. **Invalid setConfig implementation** — Most common reason cards fail in production. Always validate entity IDs, throw clear errors, test with invalid configs. (Phase 1: Address in core infrastructure)

**Other important pitfalls:**
- Rollup watch mode fragility (stops on TS errors without clear messages, restart after major changes)
- Missing HACS metadata (validation fails on submission)
- Inefficient DOM updates (rebuilding entire DOM on every state change)

## Implications for Roadmap

Based on research, the roadmap should follow a dependency-driven structure with early focus on avoiding critical pitfalls before building complex features.

### Phase 0: Project Setup & Build Infrastructure
**Rationale:** Critical pitfalls around HACS paths, build config, and Rollup must be addressed before any card code is written. These issues are hard to retrofit.

**Delivers:**
- Rollup config outputting to `dist/minime-card.js` matching HACS naming
- TypeScript with strict mode, decorators enabled
- HACS metadata (hacs.json) with correct structure
- Dev environment with working watch mode
- Build verification (file exists, loads without errors)

**Avoids:**
- Pitfall #3: Resource path mismatch (address before first line of card code)
- Pitfall #6: Missing HACS metadata
- Pitfall #5: Rollup config fragility

**Research flag:** SKIP RESEARCH — Build setup is well-documented with boilerplate templates

### Phase 1: Core Card Infrastructure
**Rationale:** Must establish patterns for state management, config validation, and theme support before adding features. These are architectural foundations that are expensive to refactor later.

**Delivers:**
- LitElement card shell with lifecycle methods (setConfig, set hass, getCardSize, render)
- Config validation with clear error throwing
- Selective state extraction (hass setter pattern)
- Theme-aware styling with CSS variables
- Basic error states ("Device not found", "Invalid config")
- Entity state integration (read Bermuda device tracker)

**Addresses:**
- Table stakes: Entity state integration, proper card sizing, theme compatibility, graceful errors
- Pitfall #1: Making hass reactive (establish correct pattern)
- Pitfall #4: Missing theme support (use CSS variables from start)
- Pitfall #5: Invalid setConfig (validate early)
- Pitfall #8: Inefficient DOM updates (build pattern correctly)

**Research flag:** SKIP RESEARCH — Standard HA card patterns, well-documented in official docs

### Phase 2: Static Room Rendering
**Rationale:** Validate visual design and Bermuda integration before investing in animation complexity. Proves the concept works end-to-end.

**Delivers:**
- 4 static room backgrounds (office, kitchen, living room, bedroom)
- Static pixel art avatar positioned in current room
- Room detection from Bermuda area_id attribute
- Visual editor with entity picker and area multi-select
- Layout and responsive design

**Addresses:**
- Table stakes: Visual editor configuration, mobile responsive
- Differentiators: Personality through pixel art, single-focus room view
- Validates Bermuda integration works as expected

**Research flag:** POSSIBLE RESEARCH on Bermuda entity structure (quick verification of area_id attribute, state values)

### Phase 3: Animation System Foundation
**Rationale:** Animation engine is complex and has critical memory leak pitfalls. Build cleanup architecture first, then add animations.

**Delivers:**
- Animation engine with requestAnimationFrame loop
- State machine for animation states (idle, walking)
- disconnectedCallback cleanup (cancel frames, prevent leaks)
- ONE room-specific idle animation (office "working") to prove concept
- CSS sprite sheet rendering

**Addresses:**
- Differentiators: Room-specific idle animations (start with one)
- Pitfall #2: Memory leaks from animations (build cleanup from start)
- Pitfall #7: Inefficient animations blocking main thread

**Research flag:** SKIP RESEARCH — CSS sprite animation patterns are standard, requestAnimationFrame is well-documented

### Phase 4: Complete Room Animations
**Rationale:** Once animation engine is proven, expand to full room set. This is asset generation heavy but low technical risk.

**Delivers:**
- Idle animations for all 4 rooms (kitchen cooking, bedroom sleeping, living room sitting)
- Asset generation workflow (AI tools, sprite sheets)
- Animation variety and polish

**Addresses:**
- Differentiators: Complete room-specific animations suite

**Research flag:** SKIP RESEARCH — Asset generation, no new technical patterns

### Phase 5: Animated Transitions
**Rationale:** Most complex animation feature, requires room change detection and multi-stage animation sequences. Build after core animations proven.

**Delivers:**
- Walking animation between rooms (exit → walk → enter sequence)
- State machine for transition states
- Position interpolation
- Smooth room change experience

**Addresses:**
- Differentiators: Smooth animated transitions (the "wow" factor)

**Research flag:** SKIP RESEARCH — State machine patterns are standard

### Phase 6: Polish & Edge Cases
**Rationale:** Final details after core features work. Some features may be deferred to v1.x based on time.

**Delivers:**
- Empty room "ghost" state (last known location when offline)
- Advanced error states (Bermuda integration check, troubleshooting)
- Mobile responsive refinements
- Performance testing with multiple card instances
- Documentation for HACS

**Addresses:**
- Differentiators: Empty room ghost state
- Table stakes: Full mobile responsive
- Preparation for HACS publication (v2+ feature)

**Research flag:** SKIP RESEARCH — Standard patterns

### Phase Ordering Rationale

- **Phase 0 first**: Build config issues are impossible to debug later, HACS paths must be correct from day one
- **Phase 1 before features**: Performance pitfalls (reactive hass) and theme support are architectural, expensive to retrofit
- **Static rendering before animation**: Validates Bermuda integration and visual design before animation complexity
- **Animation foundation before variety**: Build cleanup pattern once, then safely add more animations
- **Transitions last**: Most complex animation, depends on all prior animation work

This ordering follows dependency chains from ARCHITECTURE.md (entity integration → location detection → room animations → transitions) and addresses pitfalls in their prevention phases from PITFALLS.md.

### Research Flags

**Phases needing research during planning:**
- **Phase 2:** Quick verification of Bermuda entity structure (area_id attribute format, possible state values) — 15 minutes max, likely skippable if Bermuda docs are clear

**Phases with standard patterns (skip research-phase):**
- **Phase 0:** Build setup — boilerplate-card template provides everything
- **Phase 1:** Core card — official HA docs cover all lifecycle methods
- **Phase 3:** Animation engine — requestAnimationFrame and CSS sprites are standard web APIs
- **Phase 4-6:** Feature expansion — no new technical unknowns

Overall: Very low research needs. Domain is well-documented, patterns are standardized.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Lit + TypeScript + Rollup is verified HA standard from official docs and community consensus. Versions confirmed from npm. |
| Features | MEDIUM-HIGH | Table stakes identified from HA card standards. Differentiators based on animated card examples and Bermuda use cases. Anti-features inferred from community pain points. |
| Architecture | HIGH | Official HA docs provide clear lifecycle patterns. Boilerplate-card and multiple community cards demonstrate proven structure. Performance patterns well-documented. |
| Pitfalls | HIGH | Verified from official docs, HACS validation rules, community forum discussions, and GitHub issues. Memory leak and hass reactivity patterns confirmed across multiple sources. |

**Overall confidence:** HIGH

Research benefited from excellent official documentation (HA developer docs, HACS publish docs), active community forums with specific pitfall discussions, and recent 2025 boilerplate templates. The domain is mature with established best practices.

### Gaps to Address

**Bermuda entity structure**: Research assumed Bermuda device trackers expose area_id in attributes based on general HA device tracker patterns. Should verify during Phase 2 planning:
- Exact attribute name (area_id vs area vs room)
- Possible state values (home/away/not_home vs area name)
- How "unknown" or "unavailable" states are represented

**Sprite animation complexity**: Research assumed CSS sprite sheets are sufficient for pixel art. Should validate during Phase 3:
- Whether Lit's css template can handle dynamic sprite position updates efficiently
- Frame rate requirements (30fps vs 60fps) for smooth perception
- Sprite sheet file size constraints for HACS bundle

**HACS bundle size limits**: Research didn't identify specific bundle size constraints. Should verify before Phase 6 HACS prep:
- Recommended max bundle size for custom cards
- Whether sprite assets should be inlined as base64 or referenced externally

These gaps are minor and don't block roadmap creation. They're normal implementation details to resolve during respective phases.

## Sources

### Primary (HIGH confidence)
- [Home Assistant Custom Card Documentation](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/) — Lifecycle methods, requirements, best practices
- [HACS Plugin Documentation](https://www.hacs.xyz/docs/publish/plugin/) — File structure, naming conventions, validation rules
- [Lit Documentation](https://lit.dev/docs/) — Reactive properties, decorators, lifecycle
- [custom-card-helpers on npm](https://www.npmjs.com/package/custom-card-helpers) — Type definitions, helper functions
- [Vitest on npm](https://www.npmjs.com/package/vitest) — Version 4.0.17 confirmed

### Secondary (MEDIUM confidence)
- [custom-cards/boilerplate-card](https://github.com/custom-cards/boilerplate-card) — Standard template with Rollup + TypeScript + Lit
- [ha-custom-card-rollup-ts-lit-starter](https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter) — Recent 2025 starter
- [Sergio Carracedo's Custom Cards Guide](https://sergiocarracedo.es/ha-custom-cards/) — Development best practices
- [HA-Animated-cards Project](https://github.com/Anashost/HA-Animated-cards) — CSS animation patterns
- [Bermuda BLE Community Thread](https://community.home-assistant.io/t/bermuda-bluetooth-ble-room-presence-and-tracking-custom-integration/625780) — Integration usage patterns
- [Home Assistant Community: Custom Cards GUI Editor](https://community.home-assistant.io/t/custom-cards-with-gui-editor-as-of-2023/542254) — Editor patterns
- [Home Assistant Community: Lit-html import issues](https://community.home-assistant.io/t/lit-html-import-not-reachable-lately-in-custom-card/863814) — CDN unreliability
- [GitHub Issues: HA Frontend](https://github.com/home-assistant/frontend/issues) — Pitfall verification from real bugs

### Tertiary (LOW confidence)
- Animation performance assumptions based on general web performance principles
- Sprite sheet complexity estimates (will validate during implementation)

---
*Research completed: 2026-02-03*
*Ready for roadmap: yes*
