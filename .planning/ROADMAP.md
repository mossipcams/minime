# Roadmap: MiniMe

## Overview

This roadmap transforms Bermuda BLE presence detection into a delightful animated pixel art experience. We'll build a Home Assistant custom card that displays a game-like avatar living in your home, starting with solid build infrastructure, then establishing the card foundation with entity integration, adding static room visuals with an editor, and finally bringing it to life with smooth animations and room transitions.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Project Setup** - Build infrastructure and development environment
- [ ] **Phase 2: Card Foundation** - Core LitElement implementation with entity integration
- [ ] **Phase 3: Static Visual Display** - Room backgrounds, avatar, and visual editor
- [ ] **Phase 4: Animation System** - Idle animations and room transitions

## Phase Details

### Phase 1: Project Setup
**Goal**: Establish build infrastructure and development environment with HACS-compatible structure
**Depends on**: Nothing (first phase)
**Requirements**: SETUP-01, SETUP-02, SETUP-03, SETUP-04, SETUP-05
**Success Criteria** (what must be TRUE):
  1. Rollup successfully builds project and outputs dist/minime-card.js
  2. TypeScript compiles without errors with strict mode enabled
  3. HACS validation passes with correct file structure and metadata
  4. Dev environment runs with working watch mode and hot reload
  5. Vitest test framework runs successfully with sample test passing
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md -- Project initialization, TypeScript, Rollup build, HACS metadata
- [x] 01-02-PLAN.md -- Vitest testing framework and dev watch mode

### Phase 2: Card Foundation
**Goal**: Implement LitElement card with Home Assistant integration and proper lifecycle
**Depends on**: Phase 1
**Requirements**: CORE-01, CORE-02, CORE-03, CORE-04, CORE-05, CORE-06, CORE-07, CORE-08, CORE-09, CORE-10
**Success Criteria** (what must be TRUE):
  1. Card displays in Home Assistant dashboard without errors
  2. Card reads Bermuda BLE device tracker entity and shows current area
  3. Card validates configuration and displays clear error messages for invalid configs
  4. Card respects Home Assistant theme colors in both light and dark modes
  5. Card properly cleans up resources when removed from dashboard
**Plans**: TBD

Plans:
- [ ] 02-01: TBD

### Phase 3: Static Visual Display
**Goal**: Display pixel art room backgrounds and avatar with visual configuration editor
**Depends on**: Phase 2
**Requirements**: UI-01, UI-02, UI-03, UI-04, UI-05, UI-06, UI-07, UI-08, UI-09, UI-10, ASSET-01, ASSET-02, ASSET-03, ASSET-04, ASSET-05
**Success Criteria** (what must be TRUE):
  1. Card displays correct static pixel art background for each of 4 rooms (office, kitchen, living room, bedroom)
  2. Card displays pixel art avatar positioned appropriately in current room
  3. Card switches room backgrounds immediately when Bermuda detects room change
  4. Visual editor allows selection of Bermuda device and Home Assistant areas to track
  5. Card layout is responsive and works on mobile devices
**Plans**: TBD

Plans:
- [ ] 03-01: TBD

### Phase 4: Animation System
**Goal**: Bring avatar to life with room-specific idle animations and smooth walking transitions
**Depends on**: Phase 3
**Requirements**: ANIM-01, ANIM-02, ANIM-03, ANIM-04, ANIM-05, ANIM-06, ANIM-07, ANIM-08, ANIM-09, ANIM-10
**Success Criteria** (what must be TRUE):
  1. Avatar displays unique idle animation for each room (working at desk in office, cooking in kitchen, sitting in living room, sleeping in bedroom)
  2. Animations run smoothly at 60fps using requestAnimationFrame
  3. Avatar walks to edge of screen, exits, and enters new room from edge during room transitions
  4. Card displays empty room with last known location when device is offline or not detected
  5. Animation system properly cancels frames and prevents memory leaks when card is removed
**Plans**: TBD

Plans:
- [ ] 04-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Project Setup | 2/2 | Complete | 2026-02-03 |
| 2. Card Foundation | 0/TBD | Not started | - |
| 3. Static Visual Display | 0/TBD | Not started | - |
| 4. Animation System | 0/TBD | Not started | - |
