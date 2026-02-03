# MiniMe - Animated Home Assistant Avatar Card

## What This Is

A custom Home Assistant card (HACS-compatible) that displays a pixel art avatar representing your location in your home. The avatar animates based on which room you're in, detected via Bermuda BLE tracking, and smoothly transitions between rooms with walking animations.

## Core Value

Bringing personality and life to home presence detection through delightful pixel art animations that make your dashboard fun to look at.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Display pixel art avatar in current room based on Bermuda BLE location
- [ ] Show room-specific animations: office (working at desk), living room (sitting on couch), kitchen (cooking), bedroom (sleeping)
- [ ] Animate transitions between rooms (avatar walks to edge, exits, enters new room from edge)
- [ ] Show last known room but empty when not detected in any tracked area
- [ ] Configurable device tracking (select which Bermuda device to monitor)
- [ ] Configurable areas (select which Home Assistant areas/rooms to display)
- [ ] AI-generated pixel art assets (avatar sprites and room background scenes)
- [ ] Card renders correctly in Home Assistant dashboard
- [ ] TypeScript implementation with Vitest test coverage

### Out of Scope

- Multi-person tracking — v1 tracks single person only
- Time-based animation variations — bedroom always shows sleeping regardless of time
- Real-time multiplayer features — not needed for personal use
- HACS publication/community distribution — personal project for now, may share later

## Context

**Technical Environment:**
- Home Assistant with Bermuda BLE integration already configured and working
- 4 tracked areas: office, living room, kitchen, bedroom
- Custom card will be installed locally (HACS-compatible structure for potential future sharing)

**Design Vision:**
- Retro game aesthetic with pixel art style
- Each room has unique background scene and avatar animation
- Smooth, delightful transitions that feel alive rather than robotic
- Single-view display showing only current room (not dollhouse/multi-room view)

**Why This Exists:**
- Personal fun project to add personality to Home Assistant dashboard
- Make location tracking visually interesting and enjoyable

## Constraints

- **Tech Stack**: TypeScript — preferred language
- **Testing**: Vitest — required for test coverage
- **Integration**: Must work with existing Bermuda BLE setup — no changes to BLE tracking infrastructure
- **Asset Creation**: AI-generated pixel art — developer not creating sprites manually
- **Compatibility**: Home Assistant custom card standards — must follow Lovelace card development patterns

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Pixel art style | Retro aesthetic fits well with sprite-based animations, easier to generate consistent assets | — Pending |
| Single room view (not dollhouse) | Keeps UI focused and simple, easier to animate transitions | — Pending |
| TypeScript + Vitest | Developer preference, better type safety for HA integrations | — Pending |
| AI-generated assets | Developer won't create pixel art manually, AI generation is feasible and fast | — Pending |
| Configurable device/areas | Makes card reusable even though v1 is personal use, minimal extra effort | — Pending |

---
*Last updated: 2026-02-03 after initialization*
