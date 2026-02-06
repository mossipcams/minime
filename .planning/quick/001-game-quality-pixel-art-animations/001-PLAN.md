---
phase: quick-001
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/animated-presence/dog-avatar.ts
  - src/animated-presence/totem-avatar.ts
  - tests/totem-avatar.test.ts
  - tests/dog-avatar.test.ts
autonomous: true

must_haves:
  truths:
    - "Each totem activity has distinct, multi-stop keyframe animations with custom easing"
    - "Dog SVG has separate front/back leg groups and tongue pixel for independent animation"
    - "All 5 activities for both totem and dog have rich, personality-filled animations"
    - "Existing keyframe names still exist so prior tests pass"
    - "All tests pass including new tests for new keyframes and SVG structure"
  artifacts:
    - path: "src/animated-presence/totem-avatar.ts"
      provides: "Enhanced totemStyles with game-quality CSS animations"
      contains: "cubic-bezier"
    - path: "src/animated-presence/dog-avatar.ts"
      provides: "Enhanced dogStyles + new SVG groups (tongue, front/back legs)"
      contains: "dog-legs-front"
    - path: "tests/totem-avatar.test.ts"
      provides: "Tests for new totem keyframe names"
      contains: "totem-idle-head"
    - path: "tests/dog-avatar.test.ts"
      provides: "Tests for new dog SVG structure and keyframes"
      contains: "dog-legs-front"
  key_links:
    - from: "tests/totem-avatar.test.ts"
      to: "src/animated-presence/totem-avatar.ts"
      via: "keyframe name assertions against totemStyles"
      pattern: "totemStyles.*toContain"
    - from: "tests/dog-avatar.test.ts"
      to: "src/animated-presence/dog-avatar.ts"
      via: "SVG group and keyframe assertions"
      pattern: "getDogSvg.*toContain"
---

<objective>
Rewrite the CSS animation systems in both totem-avatar.ts and dog-avatar.ts with game-quality pixel art animations. Add new SVG structure to the dog (tongue pixel, separate front/back leg groups). Enhance all 5 activities for both characters with multi-stop keyframes, custom cubic-bezier easing, animation-delay for overlapping action, and distinct personality per activity.

Purpose: Transform the flat, single-stop animations into rich, game-quality character animations that give the pixel art avatars life and personality across all activities.
Output: Updated source files with enhanced animations, updated tests confirming new structure.
</objective>

<execution_context>
@/Users/matt/.claude/get-shit-done/workflows/execute-plan.md
@/Users/matt/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@src/animated-presence/totem-avatar.ts
@src/animated-presence/dog-avatar.ts
@tests/totem-avatar.test.ts
@tests/dog-avatar.test.ts
</context>

<tasks>

<task type="auto">
  <name>Task 1: Enhance dog SVG structure and animations (TDD)</name>
  <files>tests/dog-avatar.test.ts, src/animated-presence/dog-avatar.ts</files>
  <action>
CRITICAL TDD NOTE: This project has a TDD guard hook. You MUST use `sed` or `cat >` via Bash for ALL implementation code changes (not Edit/Write tools). Test files CAN be edited with Write/Edit tools since adding tests is always allowed.

Follow strict RED-GREEN-REFACTOR, one test at a time.

**Step 1: Add tests for new SVG structure (dog-legs-front, dog-legs-back, dog-tongue)**

Add these tests to `tests/dog-avatar.test.ts`:

```typescript
it('idle/walking/studying SVG contains separate front and back leg groups', () => {
  for (const act of ['idle', 'walking', 'studying']) {
    const svg = getDogSvg(act);
    expect(svg).toContain('dog-legs-front');
    expect(svg).toContain('dog-legs-back');
    // Old single dog-legs group should NOT exist in these activities
    expect(svg).not.toMatch(/class="dog-legs"[^-]/);
  }
});

it('idle/walking/studying SVG contains tongue element', () => {
  for (const act of ['idle', 'walking', 'studying']) {
    const svg = getDogSvg(act);
    expect(svg).toContain('dog-tongue');
  }
});

it('tongue uses tongue color palette', () => {
  const svg = getDogSvg('idle');
  // TONGUE constant is '#E06060'
  expect(svg).toContain('#E06060');
});
```

Run test, see RED. Then implement in dog-avatar.ts:
- Split `legPixels()` into `frontLegPixels()` and `backLegPixels()`
- `frontLegPixels()`: rows for cols 2-3 (front legs at x=2,3)
- `backLegPixels()`: rows for cols 8-9 (back legs at x=8,9)
- Add `tonguePixels()`: two pixels at (0,5) and (1,5) using TONGUE color, wrapped in `<g class="dog-tongue">` with default opacity 0 (shown via CSS animation)
- Update `getDogSvg()` for idle/walking/studying to use `<g class="dog-legs-front">`, `<g class="dog-legs-back">`, and tongue group instead of single `<g class="dog-legs">`

Run tests, see GREEN.

**Step 2: Add tests for new dog keyframe names**

Add test:
```typescript
it('dogStyles contains enhanced keyframe animations for all activities', () => {
  // Existing (must still exist)
  expect(dogStyles).toContain('dog-tail-wag');
  expect(dogStyles).toContain('dog-breathe');
  // New keyframes
  expect(dogStyles).toContain('dog-sniff');
  expect(dogStyles).toContain('dog-tongue-pant');
  expect(dogStyles).toContain('dog-ear-twitch');
  expect(dogStyles).toContain('dog-leg-trot-back');
  expect(dogStyles).toContain('dog-dream-twitch');
  expect(dogStyles).toContain('dog-nose-nuzzle');
  expect(dogStyles).toContain('dog-paw-tap');
  expect(dogStyles).toContain('dog-beg-nod');
});

it('dogStyles uses custom easing curves', () => {
  expect(dogStyles).toContain('cubic-bezier');
});
```

Run test, see RED. Then rewrite `dogStyles` in dog-avatar.ts with all new keyframes:

**IDLE animations:**
- `dog-tail-wag` (KEEP existing name, enhance to multi-joint: 0%→rotate(-15deg), 20%→rotate(20deg), 40%→rotate(-12deg), 60%→rotate(18deg), 80%→rotate(-8deg), 100%→rotate(-15deg))
- `dog-sniff` NEW: head translateY with quick bobs (0%→0, 15%→-P*0.5, 25%→0, 35%→-P*0.3, 45%→0, 100%→0) with 2s duration
- `dog-tongue-pant` NEW: opacity pulse (0%→0, 40%→0, 45%→1, 55%→1, 60%→0, 100%→0) on .dog-tongue, 1.5s
- `dog-ear-twitch` NEW: quick translateY burst (0%→0, 85%→0, 88%→-P, 92%→0, 95%→-P*0.5, 100%→0) 3s

**WALKING animations:**
- `dog-trot` (KEEP name, enhance: 0%→translateY(0), 15%→translateY(-P) scaleY(0.97), 35%→translateY(-P*0.5), 50%→translateY(0) scaleY(1.02), 65%→translateY(-P), 85%→translateY(-P*0.5), 100%→translateY(0))
- `dog-leg-trot-front` (KEEP name): alternating stride for front legs
- `dog-leg-trot-back` NEW: alternating stride for back legs (opposite phase to front)
- `dog-ear-bounce` (KEEP name, enhance: bounce with overshoot)
- Fast tail wag reusing dog-tail-wag at faster duration

**STUDYING animations:**
- `dog-breathe` at slow 4s (already exists)
- Lazy tail wag (reuse dog-tail-wag at 2s)
- `dog-ear-twitch` applied with longer interval

**COOKING animations:**
- Maximum speed `dog-tail-wag` at 0.3s
- `dog-beg-nod` NEW: translateY bob (0%→0, 30%→-P, 50%→0, 70%→-P*0.7, 100%→0) 1s
- `dog-paw-tap` NEW: translateY on front legs (0%→0, 45%→0, 50%→-P, 55%→0, 100%→0) 0.8s
- `dog-tongue-pant` applied continuously (opacity stays 1)

**SLEEPING animations:**
- `dog-breathe` at 4s (already exists)
- `dog-dream-twitch` NEW: tiny random translateX on body (0%→0, 88%→0, 90%→P*0.3, 93%→-P*0.2, 96%→P*0.1, 100%→0) 6s
- `dog-nose-nuzzle` NEW: slight rotate on body (0%→0deg, 92%→0deg, 95%→1deg, 98%→-0.5deg, 100%→0deg) 5s

All animations use `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy feel or `cubic-bezier(0.45, 0, 0.55, 1)` for smooth organic motion where appropriate. Use `animation-delay` to offset overlapping animations.

Apply these to activity selectors in dogStyles:
- `.dog-idle .dog-tail` → dog-tail-wag 0.6s cubic-bezier(...)
- `.dog-idle .dog-head` → dog-sniff 2s, dog-head-bob 2.5s
- `.dog-idle .dog-tongue` → dog-tongue-pant 1.5s
- `.dog-idle .dog-ear` → dog-ear-twitch 3s
- `.dog-idle .dog-body` → dog-breathe 3s
- `.dog-walking .dog-character` → dog-trot 0.3s
- `.dog-walking .dog-legs-front` → dog-leg-trot-front 0.3s alternate, transform-origin at front leg base
- `.dog-walking .dog-legs-back` → dog-leg-trot-back 0.3s alternate, transform-origin at back leg base
- `.dog-walking .dog-ear` → dog-ear-bounce 0.3s
- `.dog-walking .dog-tail` → dog-tail-wag 0.25s
- `.dog-walking .dog-tongue` → dog-tongue-pant 0.8s
- `.dog-studying .dog-body` → dog-breathe 4s
- `.dog-studying .dog-tail` → dog-tail-wag 2s
- `.dog-studying .dog-ear` → dog-ear-twitch 4s with delay
- `.dog-cooking .dog-tail` → dog-tail-wag 0.3s (max excitement)
- `.dog-cooking .dog-body` → dog-beg-nod 1s
- `.dog-cooking .dog-tongue` → opacity: 1 (always panting)
- `.dog-cooking .dog-legs-front` → dog-paw-tap 0.8s (only front paws in sitting pose actually uses dog-body for the nod)
- `.dog-sleeping .dog-body` → dog-breathe 4s, dog-dream-twitch 6s, dog-nose-nuzzle 5s (multiple animations comma-separated)

Run tests, see GREEN.
  </action>
  <verify>
Run `npx vitest run tests/dog-avatar.test.ts` — all tests pass including new ones.
Run `npx vitest run` — all 78+ tests pass (no regressions).
  </verify>
  <done>
Dog avatar has separate front/back leg groups, tongue pixel pair, and rich per-activity animations with custom easing. All existing keyframe names preserved. All tests green.
  </done>
</task>

<task type="auto">
  <name>Task 2: Enhance totem avatar animations (TDD)</name>
  <files>tests/totem-avatar.test.ts, src/animated-presence/totem-avatar.ts</files>
  <action>
CRITICAL TDD NOTE: This project has a TDD guard hook. You MUST use `sed` or `cat >` via Bash for ALL implementation code changes (not Edit/Write tools). Test files CAN be edited with Write/Edit tools since adding tests is always allowed.

Follow strict RED-GREEN-REFACTOR, one test at a time.

**Step 1: Add tests for enhanced totem keyframe names**

Add to `tests/totem-avatar.test.ts`:

```typescript
it('totemStyles contains enhanced idle animations', () => {
  expect(totemStyles).toContain('totem-bob');        // kept
  expect(totemStyles).toContain('totem-idle-head');   // kept
  expect(totemStyles).toContain('totem-weight-shift');// new
  expect(totemStyles).toContain('totem-breathe');     // kept
});

it('totemStyles contains enhanced walking animations', () => {
  expect(totemStyles).toContain('totem-walk-bob');    // kept
  expect(totemStyles).toContain('totem-arm-swing');   // kept (substring match)
  expect(totemStyles).toContain('totem-stride-l');    // new
  expect(totemStyles).toContain('totem-stride-r');    // new
  expect(totemStyles).toContain('totem-walk-lean');   // new
});

it('totemStyles contains enhanced studying animations', () => {
  expect(totemStyles).toContain('totem-type');        // kept (substring)
  expect(totemStyles).toContain('totem-study-nod');   // new
  expect(totemStyles).toContain('totem-study-rock');  // new
});

it('totemStyles contains enhanced cooking animations', () => {
  expect(totemStyles).toContain('totem-stir');        // kept (substring)
  expect(totemStyles).toContain('totem-cook-weight'); // new
  expect(totemStyles).toContain('totem-spatula-flip');// new
});

it('totemStyles contains enhanced sleeping animations', () => {
  expect(totemStyles).toContain('totem-zzz');         // kept (substring)
  expect(totemStyles).toContain('totem-sleep-deep');  // new
  expect(totemStyles).toContain('totem-blanket-ripple'); // new
  expect(totemStyles).toContain('totem-sleep-twitch');// new
});

it('totemStyles uses multi-frame blink animation', () => {
  // Blink should have more than 2 opacity stops for natural feel
  expect(totemStyles).toContain('totem-blink');
  // Should have at least close-open-close pattern
  expect(totemStyles).toMatch(/totem-blink[\s\S]*?opacity:\s*1[\s\S]*?opacity:\s*0/);
});

it('totemStyles uses custom cubic-bezier easing', () => {
  expect(totemStyles).toContain('cubic-bezier');
});

it('totemStyles uses animation-delay for overlapping action', () => {
  expect(totemStyles).toContain('animation-delay');
});
```

Run tests, see RED.

**Step 2: Rewrite totemStyles with game-quality animations**

Rewrite the entire `totemStyles` export via `cat >` or `sed` in the source file. Keep ALL existing keyframe names but enhance their keyframe stops. Add new keyframes alongside.

**BLINK (enhanced multi-frame):**
```css
@keyframes totem-blink {
  0%, 82%, 100% { opacity: 0; }
  84% { opacity: 1; }
  86% { opacity: 0; }
  88% { opacity: 0.3; }
  90% { opacity: 1; }
  94% { opacity: 0; }
}
```
Duration: 5s. This creates a quick double-blink pattern.

**IDLE animations (enhanced):**
- `totem-bob` (KEEP name, enhance: 4-stop for weight shift feel)
  - 0%→translateY(0), 25%→translateY(-0.5px), 50%→translateY(-Ppx), 75%→translateY(-0.5px), 100%→translateY(0)
  - Duration: 2.8s, easing: cubic-bezier(0.45, 0, 0.55, 1)
- `totem-idle-head` (KEEP name, enhance to multi-stop look-around)
  - 0%→rotate(0), 15%→rotate(2deg), 35%→rotate(1deg), 50%→rotate(-2.5deg), 70%→rotate(-1deg), 85%→rotate(1.5deg), 100%→rotate(0)
  - Duration: 6s
- `totem-weight-shift` NEW: subtle translateX on character
  - 0%→translateX(0), 40%→translateX(P*0.3px), 60%→translateX(-P*0.2px), 100%→translateX(0)
  - Duration: 4s, applied to .totem-idle .totem-body with animation-delay: 0.5s
- `totem-breathe` (KEEP name, keep as is)
- `totem-idle-arm-l` / `totem-idle-arm-r` (KEEP names, make asymmetric durations: left 3.2s, right 2.8s)

**WALKING animations (enhanced):**
- `totem-walk-bob` (KEEP name, enhance to 4-stop squash/stretch)
  - 0%→translateY(0) scaleY(1), 20%→translateY(P*0.3px) scaleY(0.97), 50%→translateY(-Ppx) scaleY(1.02), 80%→translateY(P*0.2px) scaleY(0.98), 100%→translateY(0) scaleY(1)
  - Duration: 0.4s, easing: cubic-bezier(0.34, 1.2, 0.64, 1)
- `totem-walk-lean` NEW: head forward lean
  - 0%→rotate(0) translateY(0), 50%→rotate(3deg) translateY(-P*0.3px), 100%→rotate(0) translateY(0)
  - Applied to .totem-walking .totem-head
- `totem-arm-swing-l` / `totem-arm-swing-r` (KEEP names, add overshoot)
  - 0%→rotate(-25deg), 70%→rotate(28deg), 100%→rotate(22deg) — overshoot then settle
- `totem-stride-l` / `totem-stride-r` NEW: proper leg stride
  - 0%→rotate(-18deg) translateY(0), 30%→rotate(0deg) translateY(-P*0.5px), 50%→rotate(18deg) translateY(0), 80%→rotate(0deg) translateY(P*0.3px), 100%→rotate(-18deg) translateY(0)
  - Replace totem-leg-l/totem-leg-r on walking selectors (but KEEP the old keyframe definitions for backward compat)
- `totem-shadow-walk` (KEEP, sync with bob)

**STUDYING animations (enhanced):**
- `totem-type-l` / `totem-type-r` (KEEP names, enhance with burst/pause pattern)
  - 0%→rotate(-6deg), 10%→rotate(5deg), 20%→rotate(-4deg), 30%→rotate(6deg), 40%→rotate(-3deg), 50%→rotate(5deg), 55%-75%→rotate(0deg) (PAUSE), 80%→rotate(-5deg), 90%→rotate(4deg), 100%→rotate(-6deg)
  - Duration: 2s (was 0.25s — now includes pause)
- `totem-study-nod` NEW: micro-nods
  - 0%→translateY(0), 20%→translateY(P*0.3px), 25%→translateY(0), 45%→translateY(P*0.5px), 55%→translateY(P*0.2px), 100%→translateY(0)
  - Applied to .totem-studying .totem-head alongside existing rotation, 3s
- `totem-study-rock` NEW: body rocking
  - 0%→rotate(0deg), 30%→rotate(1deg), 70%→rotate(-0.8deg), 100%→rotate(0deg)
  - Applied to .totem-studying .totem-body, 5s, animation-delay: 1s
- Keep totem-study-settle, totem-study-head, totem-study-lean keyframe definitions

**COOKING animations (enhanced):**
- `totem-stir` (KEEP name, enhance to wind-up cycle not pendulum)
  - 0%→rotate(0deg) translateY(-P), 15%→rotate(-8deg) translateY(-P*1.5), 30%→rotate(-16deg) translateY(-P*2), 45%→rotate(-8deg) translateY(-P*2.5), 60%→rotate(16deg) translateY(-P*1.5), 75%→rotate(10deg) translateY(-P), 85%→rotate(4deg) translateY(-P*0.5), 100%→rotate(0deg) translateY(-P)
  - Duration: 0.9s, easing: cubic-bezier(0.45, 0, 0.55, 1)
- `totem-cook-weight` NEW: weight shift side to side
  - 0%→translateX(0), 30%→translateX(P*0.5px), 70%→translateX(-P*0.3px), 100%→translateX(0)
  - Applied to .totem-cooking .totem-character instead of cook-sway, 2s
- `totem-spatula-flip` NEW: left arm spatula gesture
  - 0%→rotate(-10deg) translateY(-P), 40%→rotate(-8deg) translateY(-P*0.5), 45%→rotate(-20deg) translateY(-P*2), 55%→rotate(-15deg) translateY(-P*1.5), 100%→rotate(-10deg) translateY(-P)
  - Applied to .totem-cooking .totem-left-arm, 2.5s
- Keep totem-cook-sway, totem-cook-head, totem-cook-hold keyframe definitions for backward compat

**SLEEPING animations (enhanced):**
- `totem-sleep-deep` NEW: deeper breathing with multi-stop
  - 0%→scaleY(1) scaleX(1), 20%→scaleY(1.05) scaleX(0.98), 40%→scaleY(1.06) scaleX(0.97), 60%→scaleY(1.03) scaleX(0.99), 100%→scaleY(1) scaleX(1)
  - Applied to .totem-sleeping .totem-body instead of totem-sleep-breathe (keep old keyframe)
  - Duration: 4s, easing: cubic-bezier(0.45, 0, 0.55, 1)
- `totem-blanket-ripple` NEW: subtle blanket wave
  - 0%→scaleY(1) translateY(0), 30%→scaleY(1.02) translateY(-P*0.2px), 60%→scaleY(0.99) translateY(P*0.1px), 100%→scaleY(1) translateY(0)
  - Applied to .totem-sleeping .totem-blanket, 4s, animation-delay: 0.5s
- `totem-sleep-twitch` NEW: micro-twitch
  - 0%→translate(0, 0), 90%→translate(0, 0), 93%→translate(P*0.3px, -P*0.2px), 96%→translate(-P*0.2px, P*0.1px), 100%→translate(0, 0)
  - Applied to .totem-sleeping .totem-left-arm, 7s
- Enhance Z animations (`totem-zzz`, `totem-zzz-2`, `totem-zzz-3`): add sinusoidal X path (translateX oscillation during float)
- Keep totem-sleep-breathe, totem-sleep-arm keyframe definitions

**GLOBAL: All activity selectors use `animation-delay` on at least one element to create overlapping action offset.**

Run tests, see GREEN.
  </action>
  <verify>
Run `npx vitest run tests/totem-avatar.test.ts` — all tests pass including new ones.
Run `npx vitest run` — all tests pass (no regressions in any test file).
  </verify>
  <done>
Totem avatar has game-quality multi-stop keyframes with custom cubic-bezier easing for all 5 activities. Blink is multi-frame. Walking has squash/stretch. Studying has burst/pause typing. Cooking has wind-up stir. Sleeping has deep breathing and blanket ripple. All existing keyframe names preserved. All tests green.
  </done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 3: Visual verification of all animations</name>
  <what-built>Game-quality pixel art animations for both totem human avatar (5 activities: idle, walking, studying, cooking, sleeping) and dachshund dog avatar (5 activities with new tongue, separate leg groups). Multi-stop keyframes, custom easing curves, overlapping action via animation-delay.</what-built>
  <how-to-verify>
1. Run `npm start` or load the card in a Home Assistant dev environment
2. Verify IDLE: Totem should sway with weight shift, head looks around independently, arms swing asymmetrically, natural blink. Dog should have multi-joint tail wag, sniff head bobs, occasional tongue flash, ear twitch.
3. Verify WALKING: Totem should bob with squash/stretch, full arm counter-swing with overshoot, proper leg stride, head forward lean. Dog should trot with front/back leg alternation, ear flap, excited fast tail.
4. Verify STUDYING: Totem typing should have burst/pause rhythm, micro-nods, body rock. Dog should breathe slowly, lazy tail wag, ear twitch.
5. Verify COOKING: Totem stir should wind-up (not pendulum), spatula flip gesture, weight shift. Dog should have max-speed tail, begging nods, tongue always out.
6. Verify SLEEPING: Totem deeper breathing, blanket ripple, micro-twitch, organic Z float. Dog deep breathing, dream leg twitches, nose nuzzle.
7. Check that animations feel smooth and organic, not robotic.
  </how-to-verify>
  <resume-signal>Type "approved" or describe specific animations that need adjustment</resume-signal>
</task>

</tasks>

<verification>
- `npx vitest run` — all tests pass (78+ tests, including new ones)
- No TypeScript compilation errors
- All 5 existing keyframe names preserved: totem-bob, totem-arm-swing, totem-type, totem-stir, totem-zzz, dog-tail-wag, dog-breathe
- Visual: each activity looks distinct and personality-filled
</verification>

<success_criteria>
- All existing tests pass without modification to their assertions
- New tests verify: new keyframe names exist, cubic-bezier easing present, animation-delay used, dog SVG has dog-legs-front/dog-legs-back/dog-tongue groups
- totemStyles contains at minimum 25 @keyframes definitions
- dogStyles contains at minimum 12 @keyframes definitions
- Both style strings contain cubic-bezier custom easing
- Visual verification confirms game-quality animation feel
</success_criteria>

<output>
After completion, create `.planning/quick/001-game-quality-pixel-art-animations/001-SUMMARY.md`
</output>
