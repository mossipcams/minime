# Requirements: MiniMe

**Defined:** 2026-02-03
**Core Value:** Bringing personality and life to home presence detection through delightful pixel art animations

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Build Infrastructure

- [ ] **SETUP-01**: Project outputs single bundle to dist/minime-card.js via Rollup
- [ ] **SETUP-02**: TypeScript configuration with strict mode and decorators enabled
- [ ] **SETUP-03**: HACS-compatible file structure (hacs.json, proper paths)
- [ ] **SETUP-04**: Dev environment with working watch mode
- [ ] **SETUP-05**: Vitest test framework configured and runnable

### Card Foundation

- [ ] **CORE-01**: LitElement card implements setConfig lifecycle method with validation
- [ ] **CORE-02**: LitElement card implements set hass lifecycle method with selective state extraction
- [ ] **CORE-03**: LitElement card implements getCardSize method for masonry layout
- [ ] **CORE-04**: LitElement card implements render method
- [ ] **CORE-05**: Config validation throws clear errors for invalid entity IDs
- [ ] **CORE-06**: Card integrates with Bermuda BLE device tracker entity
- [ ] **CORE-07**: Card uses theme-aware styling with CSS variables
- [ ] **CORE-08**: Card displays error state when device not found
- [ ] **CORE-09**: Card displays error state when Bermuda integration disabled
- [ ] **CORE-10**: Card implements disconnectedCallback with cleanup (cancel animations, prevent memory leaks)

### Visual Display & Editor

- [ ] **UI-01**: Card renders pixel art background for office room
- [ ] **UI-02**: Card renders pixel art background for kitchen room
- [ ] **UI-03**: Card renders pixel art background for living room room
- [ ] **UI-04**: Card renders pixel art background for bedroom room
- [ ] **UI-05**: Card renders pixel art avatar character
- [ ] **UI-06**: Card displays only current room (single-focus view, not multi-room)
- [ ] **UI-07**: Card is mobile responsive (works on tablets and phones)
- [ ] **UI-08**: Visual editor component allows entity picker for Bermuda device
- [ ] **UI-09**: Visual editor component allows area multi-select for rooms to track
- [ ] **UI-10**: Visual editor component lazy-loads (separate bundle)

### Animation System

- [ ] **ANIM-01**: Avatar displays idle animation when in office (working at desk)
- [ ] **ANIM-02**: Avatar displays idle animation when in kitchen (cooking)
- [ ] **ANIM-03**: Avatar displays idle animation when in living room (sitting on couch)
- [ ] **ANIM-04**: Avatar displays idle animation when in bedroom (sleeping)
- [ ] **ANIM-05**: Animation engine uses requestAnimationFrame for smooth 60fps
- [ ] **ANIM-06**: Animation engine uses CSS sprite sheets (not canvas)
- [ ] **ANIM-07**: Avatar walks to edge of screen when changing rooms
- [ ] **ANIM-08**: Card transitions to new room scene during room change
- [ ] **ANIM-09**: Avatar enters new room by walking from edge of screen
- [ ] **ANIM-10**: Card displays last known room but without avatar when device offline/not detected

### Asset Generation

- [ ] **ASSET-01**: Pixel art avatar sprite sheet generated (idle + walking animations)
- [ ] **ASSET-02**: Pixel art office background scene generated
- [ ] **ASSET-03**: Pixel art kitchen background scene generated
- [ ] **ASSET-04**: Pixel art living room background scene generated
- [ ] **ASSET-05**: Pixel art bedroom background scene generated

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhanced Animations

- **ANIM-V2-01**: Time-based animation variations (different bedroom animation day vs night)
- **ANIM-V2-02**: Activity-based animation variants (multiple kitchen animations)
- **ANIM-V2-03**: Animation speed control in configuration

### Visual Customization

- **UI-V2-01**: Multiple visual themes (different pixel art styles)
- **UI-V2-02**: Custom color palette support
- **UI-V2-03**: User-uploadable sprite sheets

### Multi-Person Support

- **CORE-V2-01**: Track multiple people simultaneously
- **CORE-V2-02**: Multiple avatars on same card
- **CORE-V2-03**: Per-person avatar customization

### Distribution

- **SETUP-V2-01**: HACS store publication
- **SETUP-V2-02**: Community documentation and examples
- **SETUP-V2-03**: Comprehensive README with screenshots

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Sound effects | Likely overkill, battery drain, user annoyance risk |
| Dollhouse/multi-room simultaneous view | Animations too small, loses personality impact, cluttered UI |
| Real-time XY positioning | Bermuda provides area-level only, over-engineering |
| Heavy JavaScript canvas animations | Battery drain, performance issues, CSS sprites sufficient |
| OAuth/external integrations | Not needed for HA card, adds complexity |
| Multi-language support | Personal project, English-only sufficient for v1 |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SETUP-01 | Phase 1 | Pending |
| SETUP-02 | Phase 1 | Pending |
| SETUP-03 | Phase 1 | Pending |
| SETUP-04 | Phase 1 | Pending |
| SETUP-05 | Phase 1 | Pending |
| CORE-01 | Phase 2 | Pending |
| CORE-02 | Phase 2 | Pending |
| CORE-03 | Phase 2 | Pending |
| CORE-04 | Phase 2 | Pending |
| CORE-05 | Phase 2 | Pending |
| CORE-06 | Phase 2 | Pending |
| CORE-07 | Phase 2 | Pending |
| CORE-08 | Phase 2 | Pending |
| CORE-09 | Phase 2 | Pending |
| CORE-10 | Phase 2 | Pending |
| UI-01 | Phase 3 | Pending |
| UI-02 | Phase 3 | Pending |
| UI-03 | Phase 3 | Pending |
| UI-04 | Phase 3 | Pending |
| UI-05 | Phase 3 | Pending |
| UI-06 | Phase 3 | Pending |
| UI-07 | Phase 3 | Pending |
| UI-08 | Phase 3 | Pending |
| UI-09 | Phase 3 | Pending |
| UI-10 | Phase 3 | Pending |
| ANIM-01 | Phase 4 | Pending |
| ANIM-02 | Phase 4 | Pending |
| ANIM-03 | Phase 4 | Pending |
| ANIM-04 | Phase 4 | Pending |
| ANIM-05 | Phase 4 | Pending |
| ANIM-06 | Phase 4 | Pending |
| ANIM-07 | Phase 4 | Pending |
| ANIM-08 | Phase 4 | Pending |
| ANIM-09 | Phase 4 | Pending |
| ANIM-10 | Phase 4 | Pending |
| ASSET-01 | Phase 3 | Pending |
| ASSET-02 | Phase 3 | Pending |
| ASSET-03 | Phase 3 | Pending |
| ASSET-04 | Phase 3 | Pending |
| ASSET-05 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 39 total
- Mapped to phases: 39
- Unmapped: 0

---
*Requirements defined: 2026-02-03*
*Last updated: 2026-02-03 after roadmap creation*
