# Quick Task 001: Game-Quality Pixel Art Animations

## Summary

Rewrote CSS animation systems in both totem-avatar.ts and dog-avatar.ts with game-quality pixel art animations. Added new SVG structure to the dog avatar (tongue pixel, separate front/back leg groups). Enhanced all 5 activities for both characters with multi-stop keyframes, custom cubic-bezier easing, animation-delay for overlapping action, and distinct personality per activity.

## Changes

### Dog Avatar (`src/animated-presence/dog-avatar.ts`)
- **SVG structure**: Split `dog-legs` into `dog-legs-front` and `dog-legs-back` for independent animation. Added `dog-tongue` pixel pair with opacity-based panting.
- **New keyframes**: `dog-sniff`, `dog-tongue-pant`, `dog-ear-twitch`, `dog-leg-trot-back`, `dog-dream-twitch`, `dog-nose-nuzzle`, `dog-paw-tap`, `dog-beg-nod`
- **Enhanced existing**: `dog-tail-wag` (multi-joint 6-stop), `dog-trot` (squash/stretch), `dog-ear-bounce` (overshoot)
- **Per-activity**: Idle sniffing/panting, walking with front/back leg alternation, studying ear twitches, cooking max-speed begging, sleeping dream twitches

### Totem Avatar (`src/animated-presence/totem-avatar.ts`)
- **Blink**: Multi-frame double-blink pattern (5s cycle with open→close→open→close sequence)
- **New keyframes**: `totem-weight-shift`, `totem-walk-lean`, `totem-stride-l`, `totem-stride-r`, `totem-study-nod`, `totem-study-rock`, `totem-cook-weight`, `totem-spatula-flip`, `totem-sleep-deep`, `totem-blanket-ripple`, `totem-sleep-twitch`
- **Enhanced existing**: `totem-bob` (4-stop weight shift), `totem-idle-head` (7-stop look-around), `totem-walk-bob` (squash/stretch), `totem-arm-swing` (overshoot), `totem-type` (burst/pause rhythm), `totem-stir` (wind-up circular), Z animations (sinusoidal float paths)
- **Per-activity**: Idle weight-shift sway, walking squash/stretch, studying burst/pause typing, cooking wind-up stir, sleeping deep breathing + blanket ripple

### Tests
- `tests/dog-avatar.test.ts`: 6 new tests (13 total) — SVG structure, tongue, keyframe names, custom easing
- `tests/totem-avatar.test.ts`: 8 new tests (22 total) — per-activity keyframes, multi-frame blink, cubic-bezier, animation-delay

## Commits
- `d9f787b` feat(quick-001): enhance dog avatar with game-quality animations
- `c3f3442` feat(quick-001): enhance totem avatar with game-quality animations

## Verification
- 91 tests passing
- Build succeeds cleanly
- Awaiting visual verification (Task 3 checkpoint)
