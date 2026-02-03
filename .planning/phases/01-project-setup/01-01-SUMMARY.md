---
phase: 01-project-setup
plan: 01
subsystem: infra
tags: [rollup, typescript, lit, hacs, build-pipeline]

# Dependency graph
requires:
  - phase: none
    provides: "Fresh project"
provides:
  - "Rollup build pipeline outputting dist/minime-card.js"
  - "TypeScript configuration with strict mode and decorators for Lit"
  - "HACS metadata with correct filename alignment"
  - "npm build script producing ES module bundle"
affects: [02-card-shell, 03-character-rendering, 04-behavior-engine]

# Tech tracking
tech-stack:
  added: [lit@3.3.2, custom-card-helpers@1.9.0, rollup@4.57.1, typescript@5.9.3, @rollup/plugin-typescript, @rollup/plugin-terser]
  patterns: ["ES modules for Home Assistant compatibility", "Rollup bundler with TypeScript", "Strict TypeScript with decorators for Lit web components"]

key-files:
  created: [package.json, tsconfig.json, rollup.config.mjs, hacs.json, src/main.ts, .gitignore]
  modified: []

key-decisions:
  - "ES module output format for modern Home Assistant compatibility"
  - "TypeScript strict mode enabled for type safety"
  - "useDefineForClassFields: false required for Lit decorators with experimentalDecorators"
  - "Terser minification only in production builds for faster dev iteration"
  - "HACS content_in_root: false with dist/ directory structure"

patterns-established:
  - "Build output: dist/minime-card.js matches hacs.json filename field"
  - "Sourcemaps in dev mode only (ROLLUP_WATCH=true)"
  - "Entry point: src/main.ts with version console logging"

# Metrics
duration: 2m
completed: 2026-02-03
---

# Phase 1 Plan 01: Project Initialization Summary

**Rollup build pipeline producing dist/minime-card.js from TypeScript with Lit decorators and HACS-compatible metadata**

## Performance

- **Duration:** 2m 5s
- **Started:** 2026-02-03T21:59:34Z
- **Completed:** 2026-02-03T22:01:39Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments
- npm run build successfully produces dist/minime-card.js ES module bundle
- TypeScript strict mode compilation with zero errors
- HACS metadata filename correctly aligned with build output
- Lit and custom-card-helpers dependencies installed and ready for Phase 2

## Task Commits

Each task was committed atomically:

1. **Task 1: Initialize project with dependencies and TypeScript config** - `bbeb0fe` (chore)
2. **Task 2: Create Rollup config and entry point, verify build** - `f3f918a` (feat)

## Files Created/Modified
- `package.json` - Project manifest with Rollup build script and Lit dependencies
- `tsconfig.json` - TypeScript config with strict mode, decorators, ES2021 target
- `rollup.config.mjs` - Rollup bundler config with TypeScript, terser, ES module output
- `hacs.json` - HACS metadata pointing to minime-card.js in dist/
- `src/main.ts` - Minimal entry point stub with version logging
- `.gitignore` - Excludes node_modules/, dist/, source maps

## Decisions Made

**Build output alignment:** The hacs.json filename field ("minime-card.js") matches the Rollup output exactly (dist/minime-card.js). This prevents Pitfall #3 (resource path mismatch) which would cause Home Assistant to fail loading the card.

**TypeScript decorator configuration:** Set useDefineForClassFields: false alongside experimentalDecorators: true. This is required for Lit's @property and @state decorators to work correctly with the experimentalDecorators flag.

**Conditional minification:** Terser only runs in production builds (!dev). This keeps development builds fast while ensuring production bundles are optimized.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

**Rollup sourcemap warning:** Build emits warning "(!) @rollup/plugin-typescript: Rollup 'sourcemap' option must be set to generate source maps." This is expected for production builds where sourcemap: dev evaluates to false. Sourcemaps are correctly generated in dev mode. No action needed.

## Next Phase Readiness

Build foundation complete. Phase 2 can now:
- Import Lit's LitElement and decorators
- Use custom-card-helpers for Home Assistant integration
- Define custom element and register with customElements.define()
- Bundle code with `npm run build` and test in Home Assistant

**No blockers.** All dependencies installed, build verified working, HACS paths aligned.

---
*Phase: 01-project-setup*
*Completed: 2026-02-03*
