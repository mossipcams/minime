---
phase: 02-card-foundation
plan: 02
subsystem: ui
tags: [home-assistant, integration, theming, error-handling, bermuda-ble]

# Dependency graph
requires:
  - phase: 02-card-foundation
    plan: 01
    provides: Basic card component with lifecycle methods
provides:
  - Bermuda BLE entity state handling (unavailable, unknown, area name)
  - Theme-aware styling using HA CSS custom properties
  - Error state rendering with visual feedback
  - Re-render optimization to prevent unnecessary updates
affects: [03-state-management, ui, error-handling]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Conditional state updates with equality checks prevent Lit re-renders"
    - "HA theme CSS custom properties with fallback values for light/dark mode"
    - "Error state differentiation (not found vs unavailable vs unknown)"

key-files:
  created: []
  modified:
    - src/minime-card.ts
    - tests/minime-card.test.ts

key-decisions:
  - "Treat 'unavailable' as Bermuda integration disabled (user-facing error)"
  - "Treat 'unknown' as normal state meaning 'not detected in any area'"
  - "Use equality checks before setting @state properties to prevent unnecessary re-renders"
  - "Define CSS custom properties in :host for HA theme integration"
  - "Show error states inside ha-card with icon and descriptive message"

patterns-established:
  - "Pattern 1: Check current value before setting @state property (optimization)"
  - "Pattern 2: Use HA theme variables with fallbacks --minime-* = var(--ha-*, default)"
  - "Pattern 3: Render errors inside card with visual indicator (error-icon)"

# Metrics
duration: 3.8min
completed: 2026-02-03
---

# Phase 02 Plan 02: Home Assistant Integration Summary

**Complete HA integration with Bermuda entity handling, theme-aware styling, and error states**

## Performance

- **Duration:** 3.8 min (228 seconds)
- **Started:** 2026-02-03T22:36:05Z
- **Completed:** 2026-02-03T22:39:53Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Enhanced hass setter to handle all Bermuda entity states (not found, unavailable, unknown, area name)
- Added re-render optimization with equality checks before setting @state properties
- Implemented theme-aware styling using HA CSS custom properties (--primary-text-color, --card-background-color, --error-color)
- Enhanced render() to display error states with icon and descriptive message
- Added mockHass helper function for cleaner test setup
- Comprehensive test coverage: 10 tests passing (error states, optimization, normal flow)

## Task Commits

Each task was committed atomically:

1. **Task 1: Enhance entity handling with error states** - `2e47f91` (feat)
2. **Task 2: Add comprehensive tests for error states** - `e6d8992` (test)

## Files Created/Modified

- `src/minime-card.ts` - Enhanced hass setter with Bermuda state handling, theme-aware CSS, error rendering
- `tests/minime-card.test.ts` - Added mockHass helper, 4 new tests for error states and optimization

## Decisions Made

**1. Bermuda state interpretation**
- Rationale: Bermuda uses standard HA entity states with specific meanings. 'unavailable' means integration disabled, 'unknown' means device exists but not detected, area name is normal state.
- Implementation: Separate conditionals in hass setter for each state type with appropriate error/state assignment

**2. Re-render optimization with equality checks**
- Rationale: Lit re-renders when @state properties change. Checking if new value differs from current prevents unnecessary renders when hass updates but tracked entity hasn't changed.
- Implementation: `if (this._error !== newError)` before assignment

**3. HA theme integration via CSS custom properties**
- Rationale: HA provides theme CSS variables that change with light/dark mode. Using var(--primary-text-color) etc makes card automatically theme-aware.
- Implementation: Define --minime-* properties in :host that reference var(--ha-theme-*, fallback)

**4. Error rendering inside card**
- Rationale: Errors should be visible within card context, not replace the card entirely. User still sees card header with entity name.
- Implementation: Render error div inside ha-card with icon and message

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None - all tests passed first try after implementation.

## User Setup Required

None - card will automatically use theme from Home Assistant's current theme.

## Next Phase Readiness

- Card fully integrated with Home Assistant
- Reads Bermuda entity state and handles all error modes
- Theme-aware styling works in light and dark modes
- Ready for Phase 3 (State Management) to add animation state machine and room transitions
- UI foundation complete - Phase 4 will replace skeleton render with pixel art canvas

---
*Phase: 02-card-foundation*
*Completed: 2026-02-03*
