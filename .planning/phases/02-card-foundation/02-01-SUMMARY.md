---
phase: 02-card-foundation
plan: 01
subsystem: ui
tags: [lit, web-components, custom-elements, home-assistant, card]

# Dependency graph
requires:
  - phase: 01-project-setup
    provides: TypeScript config, Rollup build system, Vitest test infrastructure
provides:
  - Registered custom element 'minime-card' discoverable by Home Assistant
  - MiniMeCard LitElement class with lifecycle methods (setConfig, hass setter, render, getCardSize)
  - Config validation for device_tracker entities
  - Type definitions (MiniMeConfig, HomeAssistant, HassEntity)
  - Comprehensive test suite covering validation and state management
affects: [03-state-management, 04-pixel-art, ui, rendering]

# Tech tracking
tech-stack:
  added: []
  patterns: 
    - "Selective hass state extraction to prevent re-renders on every HA state change"
    - "Custom element registration via document.createElement in tests for proper initialization"
    - "Config validation at setConfig time before hass is available"

key-files:
  created: 
    - src/types.ts
    - src/minime-card.ts
    - tests/minime-card.test.ts
  modified:
    - src/main.ts

key-decisions:
  - "Store hass reference non-reactively, extract only needed entity state to @state property"
  - "Validate entity is device_tracker prefix at config time"
  - "Return card size 3 for masonry layout (standard size for visual cards)"
  - "Define HomeAssistant types locally to avoid heavy custom-card-helpers dependencies"

patterns-established:
  - "Pattern 1: Non-reactive _hass storage with selective state extraction prevents full re-renders"
  - "Pattern 2: Test custom elements via document.createElement after customElements.define"
  - "Pattern 3: Config validation throws descriptive errors for missing/invalid entity"

# Metrics
duration: 2.9min
completed: 2026-02-03
---

# Phase 02 Plan 01: Card Foundation Summary

**LitElement card component with config validation, selective hass state extraction, and custom element registration**

## Performance

- **Duration:** 2.9 min (173 seconds)
- **Started:** 2026-02-03T22:10:20Z
- **Completed:** 2026-02-03T22:13:13Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Created MiniMeCard LitElement class with full lifecycle (setConfig, hass setter, render, disconnectedCallback, getCardSize)
- Implemented config validation rejecting missing entities and non-device_tracker entities
- Registered 'minime-card' custom element with Home Assistant card picker
- Established selective hass state extraction pattern to prevent unnecessary re-renders
- Added comprehensive test suite (6 tests) covering all validation and state logic

## Task Commits

Each task was committed atomically:

1. **Task 1: Create types and card component with lifecycle methods** - `cdc4f74` (feat)
2. **Task 2: Wire registration in main.ts and add tests** - `7b42f1f` (feat)

## Files Created/Modified
- `src/types.ts` - MiniMeConfig interface, HomeAssistant and HassEntity type declarations
- `src/minime-card.ts` - LitElement card class with setConfig validation, selective hass setter, render, getCardSize, disconnectedCallback
- `src/main.ts` - Custom element registration and window.customCards integration
- `tests/minime-card.test.ts` - 6 tests covering config validation, card size, and hass state extraction

## Decisions Made

**1. Non-reactive hass storage with selective extraction**
- Rationale: Storing hass as @state/@property causes re-render on every HA entity change (hundreds of times per minute). Extracting only the tracked entity's state to a reactive property limits re-renders to when location actually changes.
- Implementation: `_hass` is private class field, `_entityState` is @state property

**2. Local HomeAssistant type definitions**
- Rationale: custom-card-helpers has heavy dependencies and full HA types cause bundling issues. Define minimal interface with only what we use.
- Implementation: HomeAssistant interface with states and themes, HassEntity with required fields

**3. Test initialization via document.createElement**
- Rationale: Web components can't be instantiated with `new` outside browser without proper custom element registration. happy-dom supports customElements.define.
- Implementation: Register element once, use document.createElement in tests

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Fixed test initialization for custom elements**
- **Found during:** Task 2 (Running tests)
- **Issue:** Tests failed with "Illegal constructor" when using `new MiniMeCard()` - custom elements must be created via createElement after registration
- **Fix:** Added `customElements.define('minime-card', MiniMeCard)` check and switched to `document.createElement('minime-card')`
- **Files modified:** tests/minime-card.test.ts
- **Verification:** All 6 tests pass
- **Committed in:** 7b42f1f (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Fix was necessary for tests to run. Standard pattern for testing web components. No scope creep.

## Issues Encountered
None - plan executed smoothly after test initialization fix.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Card foundation complete and testable
- Ready for Phase 3 (state management) to add Bermuda entity parsing and room tracking logic
- Custom element registration working, can be loaded in Home Assistant dashboard
- Render method is skeleton only - Phase 3 adds real room state, Phase 4 adds pixel art visuals

---
*Phase: 02-card-foundation*
*Completed: 2026-02-03*
