# Feature Research

**Domain:** Home Assistant Custom Cards (Location-Aware/Animated)
**Researched:** 2026-02-03
**Confidence:** MEDIUM-HIGH

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = product feels incomplete or broken.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Visual editor configuration | HA standard for user-friendly cards; YAML-only is considered poor UX | MEDIUM | Custom config element with form fields for device/area selection. Built-in form editor via `getConfigForm()` may suffice initially |
| Entity state integration | Core HA contract — cards must react to state changes via `hass` property setter | LOW | Standard HA card requirement, well-documented pattern |
| Proper card sizing | Required for dashboard layout (masonry/sections) | LOW | Implement `getCardSize()` or `getGridOptions()` for proper grid placement |
| Resource loading reliability | Users expect HACS-installed cards to "just work" without manual resource paths | MEDIUM | Follow standard HACS structure with `/local/` paths; common pain point if wrong |
| Works in all dashboard view modes | Must render correctly in masonry, sections, and panel views | MEDIUM | Test grid sizing, responsive behavior across view types |
| Shows graceful error states | When device not found, Bermuda integration disabled, or invalid config | MEDIUM | Display helpful error messages vs breaking dashboard |
| Theme compatibility | Card respects HA themes (dark/light mode, accent colors) | LOW | Use CSS variables from HA design tokens vs hardcoded colors |
| Mobile responsive | Must work on tablets and phones, not just desktop | MEDIUM | Pixel art scales cleanly, but touch targets and sizing need consideration |

### Differentiators (Competitive Advantage)

Features that set the product apart. Not required, but valuable for MiniMe's "personality and delight" core value.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Smooth animated transitions** | Differentiates from static location cards; avatar "walks" between rooms vs instant teleport | HIGH | State machine for transition sequences (exit → walk → enter). Sprite animation timing, position interpolation |
| **Room-specific idle animations** | Each room shows contextual activity (working, cooking, sleeping) vs generic avatar | MEDIUM-HIGH | Multiple sprite sheets per room, animation loop logic, asset generation effort |
| **Personality through pixel art style** | Nostalgic, game-like feel creates emotional connection vs clinical location display | MEDIUM | Asset quality depends on AI generation consistency; unique visual identity |
| **Single-focus room view** | Shows only current room with full detail vs overwhelming dollhouse view | LOW | Design simplification that enhances focus and animation visibility |
| **Empty room "ghost" state** | Shows last known location when device untracked, maintains context | MEDIUM | Requires state tracking (last seen room), visual differentiation (opacity/grayscale) |
| **Configurable room selection** | Users choose which areas display (4 rooms vs entire home) | LOW | Standard HA area picker in config, filters which rooms render |
| **Activity-based animations** | Future: Room animation changes based on time of day or other sensors | HIGH | Out of scope for v1, but architecture should allow animation state extensibility |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems in this domain.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| **Multi-person tracking** | "Show whole family on one card" | Becomes cluttered, loses personality focus; coordination complexity for multiple sprites | Create multiple card instances, one per person — clean separation |
| **Dollhouse/floorplan multi-room view** | "See all rooms at once" | Animations too small to appreciate, loses focus and impact of transitions | Single focused room view — bigger, more delightful animations |
| **Real-time exact positioning** | "Show precise XY coordinates in room" | Bermuda provides area-level tracking, not pixel-perfect positioning; over-engineering | Predefined sprite positions per room — good enough and simpler |
| **Extensive animation customization** | "Let me upload custom sprites" | Massive scope creep, file management complexity, breaks cohesive aesthetic | AI-generated asset set with optional theme variants (light/dark) |
| **Status bar with detailed info** | "Show signal strength, last updated time, battery" | Clutters the visual focus, turns delightful card into data dashboard | Keep card purely visual; users can add separate entity cards for data |
| **Auto-generated room layouts** | "Detect my home layout automatically" | Impossible to generate good pixel art programmatically; requires manual design | Curated room scenes with configurable area mapping |
| **Heavy JavaScript animations** | "Use canvas/WebGL for smooth effects" | Performance issues on tablets, battery drain, complexity | CSS animations with sprite sheets — lightweight, performant |
| **Live configuration preview** | "See changes in real-time while editing" | Complex to implement for animated cards, not standard in HA card editors | Standard "save and close" pattern — acceptable UX |

## Feature Dependencies

```
[Entity State Integration]
    └──required for──> [Location Detection]
                           └──required for──> [Room-Specific Animations]
                                                   └──required for──> [Animated Transitions]

[Visual Editor Configuration]
    └──required for──> [Configurable Device Selection]
    └──required for──> [Configurable Room Selection]

[Proper Card Sizing]
    └──required for──> [Dashboard Layout]
                           └──enables──> [Mobile Responsive]

[Sprite Animation System]
    └──required for──> [Room-Specific Animations]
    └──required for──> [Animated Transitions]
    └──required for──> [Empty Room Ghost State]

[Theme Compatibility]
    ──independent──> (no dependencies, but enhances all visual features)

[Graceful Error States]
    ──independent──> (defensive feature, orthogonal to core functionality)
```

### Dependency Notes

- **Entity State Integration → Location Detection:** Cannot detect room without reading Bermuda device tracker entity state
- **Location Detection → Room Animations:** Room-specific animations require knowing current room
- **Room Animations → Transitions:** Transitions are sequences between two room animation states
- **Visual Editor → Device/Room Selection:** Config editor is how users select which device and rooms to track
- **Sprite System → All Animations:** Common animation engine powers idle, transitions, and ghost state
- **Theme Compatibility is parallel:** Not blocking any feature, but should be built in from start for polish

## MVP Definition

### Launch With (v1)

Minimum viable product to validate "personality through animated presence detection" concept.

- [x] **Entity state integration** — Read Bermuda device tracker state, react to changes
- [x] **Basic visual editor** — Device selector (entity picker) and area multi-select
- [x] **Single room-specific animation** — Office scene with idle "working" animation (prove the concept)
- [x] **Static room scenes** — 4 room backgrounds (office, living room, kitchen, bedroom) without full animations initially
- [x] **Proper card sizing** — Implements `getCardSize()` for layout
- [x] **Basic error states** — "Device not found" and "No location" messages
- [x] **Theme compatibility** — Uses HA CSS variables for colors

**Rationale:** These 7 features prove the core concept (animated avatar + location tracking) without over-investing in polish. Ship to validate if the idea is delightful.

### Add After Validation (v1.x)

Features to add once core is validated as valuable.

- [ ] **Full room animation suite** — Complete idle animations for all 4 rooms (kitchen cooking, bedroom sleeping, living room sitting)
- [ ] **Smooth animated transitions** — Avatar walks to edge, exits, enters new room (the "wow" factor)
- [ ] **Empty room ghost state** — Visual indication of last known room when device offline
- [ ] **Mobile responsive refinements** — Touch target sizing, orientation handling
- [ ] **Advanced error states** — Bermuda integration check, helpful troubleshooting hints

**Triggers for adding:**
- User feedback confirms animated presence is delightful
- Personal use shows it's worth the asset generation effort
- No major architectural issues found in v1

### Future Consideration (v2+)

Features to defer until product-market fit is established.

- [ ] **Activity-based animation variants** — Time-of-day or sensor-based animation changes (sleeping at night only)
- [ ] **Multiple visual themes** — Different art styles or color palettes
- [ ] **Animation speed control** — User-configurable animation playback speed
- [ ] **Sound effects** — Optional audio for transitions (likely overkill)
- [ ] **HACS community publication** — Polish for public distribution (docs, examples, support)

**Why defer:**
- v1/v1.x proves if anyone wants this beyond personal use
- These add polish but not core value validation
- Scope creep risk if built too early

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Entity state integration | HIGH | LOW | P1 (MVP) |
| Basic visual editor | HIGH | MEDIUM | P1 (MVP) |
| Single room animation | HIGH | MEDIUM | P1 (MVP) |
| Static room scenes | MEDIUM | LOW | P1 (MVP) |
| Proper card sizing | HIGH | LOW | P1 (MVP) |
| Basic error states | HIGH | LOW | P1 (MVP) |
| Theme compatibility | MEDIUM | LOW | P1 (MVP) |
| Full room animations | HIGH | MEDIUM-HIGH | P2 (v1.x) |
| Animated transitions | HIGH | HIGH | P2 (v1.x) |
| Empty room ghost state | MEDIUM | MEDIUM | P2 (v1.x) |
| Mobile responsive polish | MEDIUM | MEDIUM | P2 (v1.x) |
| Activity-based variants | LOW | HIGH | P3 (v2+) |
| Multiple themes | LOW | HIGH | P3 (v2+) |
| Sound effects | LOW | MEDIUM | P3 (v2+) |
| HACS publication | LOW | HIGH | P3 (v2+) |

**Priority key:**
- **P1:** Must have for launch — validates core concept
- **P2:** Should have after validation — adds delight and polish
- **P3:** Nice to have — deferred until PMF established

## Competitor Feature Analysis

| Feature | Standard HA Cards | HA Animated Cards | Picture-Elements | Bermuda Default | MiniMe Approach |
|---------|-------------------|-------------------|------------------|-----------------|------------------|
| **Visual Configuration** | Built-in editor | Often YAML-only | Built-in editor | N/A (integration) | Custom form editor (device + area pickers) |
| **Animation Support** | None | CSS animations when state active | Static images, some CSS | N/A | Sprite-based animations, state-driven |
| **Location Awareness** | N/A | N/A | Manual positioning | Text-based area name | Visual room scenes with animated avatar |
| **State-Based Visuals** | Icon/text changes | Icon spin/glow on state | Conditional visibility | Badge with area | Room-specific idle animations |
| **Transitions** | Instant | None | None | Instant state change | Animated walking between rooms |
| **Personality/Delight** | None (functional) | Subtle (spinning fan) | Static aesthetics | None (data display) | **Core focus** — retro game character |
| **Multi-entity Display** | One entity per card | One entity | Many entities overlaid | Multiple devices | Single device focus for personality |
| **Error Handling** | "Unavailable" text | Often breaks visually | Empty card | Entity badge unavailable | Graceful messages + ghost state |

### Key Differentiators vs Existing Solutions

**vs Standard HA Cards:**
- MiniMe adds personality and narrative (character in a world) vs clinical entity state display
- Animated presence feels alive vs static icon changes

**vs HA Animated Cards (Mushroom, etc):**
- Those animate the card itself (icon spins); MiniMe animates a character *within* a scene
- Focus on storytelling (room activities) vs functional state indication

**vs Picture-Elements Cards:**
- Static images with overlaid elements vs animated sprite character
- MiniMe is location-aware without manual coordinate mapping

**vs Bermuda Default Display:**
- Visual storytelling vs text-based "office" area name
- Delightful daily interaction vs troubleshooting/debugging tool

**Unique Value Proposition:**
MiniMe is the only card combining location tracking with narrative pixel art animations — turning presence detection into a playful game-like experience.

## Sources

### Home Assistant Custom Cards (General)
- [5 must-have custom cards to transform your Home Assistant dashboard](https://www.xda-developers.com/new-custom-cards-for-home-assistant-dashboard/)
- [4 Home Assistant cards that actually make dashboards usable](https://www.xda-developers.com/home-assistant-cards-that-actually-make-dashboards-usable/)
- [Top HACS Integrations and custom cards for Home Assistant](https://www.mostlychris.com/top-hacs-add-ons-for-home-assistant/)
- [8 Best Home Assistant Dashboard Ideas for Any Skill Level](https://www.seeedstudio.com/blog/2026/01/09/best-home-assistant-dashboards/)
- [Custom card | Home Assistant Developer Docs](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/)

### Animated Cards Research
- [Bored of your Home Assistant dashboard? Spruce it up with these animated cards](https://www.xda-developers.com/spruce-up-home-assistant-dashboard-with-these-animated-cards/)
- [HA-Animated-cards: The Home Assistant Tweak that Changes Everything](https://www.maison-et-domotique.com/en/167393-%F0%9F%94%A5-ha-animated-cards-the-home-assistant-tweak-that-changes-everything-without-heavy-javascript/)
- [GitHub - Anashost/HA-Animated-cards](https://github.com/Anashost/HA-Animated-cards)
- [GitHub - tikel1/HA-isometric-animated-picture-card](https://github.com/tikel1/HA-isometric-animated-picture-card)

### Location/Presence Detection
- [Bermuda - Bluetooth/BLE Room Presence and tracking](https://community.home-assistant.io/t/bermuda-bluetooth-ble-room-presence-and-tracking-custom-integration/625780)
- [GitHub - agittins/bermuda](https://github.com/agittins/bermuda)
- [ESPHome room presence detection with Bermuda BLE Trilateration](https://www.homeautomationguy.io/blog/room-location-detection-with-bermuda-and-home-assistant-8f94b)
- [Home Assistant: Track Who's in Each Room with ESPHome + Bermuda BLE](https://www.derekseaman.com/2025/12/home-assistant-track-whos-in-each-room-with-esphome-bermuda-ble.html)

### Visual Customization & Configuration
- [Custom Cards with GUI editor as of 2023](https://community.home-assistant.io/t/custom-cards-with-gui-editor-as-of-2023/542254)
- [Picture elements card - Home Assistant](https://www.home-assistant.io/dashboards/picture-elements/)
- [How to Make a Home Assistant Floorplan Dashboard with Pixel Art and Animated Lighting](https://strawberrysec.net/homelab/Home-Assistant-Pixel-Floorplan/)

### Common Problems Research
- [Custom card problems - Home Assistant Community](https://community.home-assistant.io/t/custom-card-problems/935740)
- [Some HACS installed Custom Cards not working](https://community.home-assistant.io/t/some-hacs-installed-custom-cards-not-working/323226)

---
*Feature research for: MiniMe - Animated Home Assistant Avatar Card*
*Researched: 2026-02-03*
