# Pitfalls Research

**Domain:** Home Assistant Custom Cards (HACS)
**Researched:** 2026-02-03
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Invalid setConfig Implementation

**What goes wrong:**
Cards fail to load with "Custom element doesn't exist" or render error cards instead of the intended UI. This is the number one reason custom cards fail in production.

**Why it happens:**
Developers skip or incorrectly implement `setConfig(config)` validation. The Home Assistant frontend expects cards to throw exceptions for invalid configurations, but many developers either don't validate at all or fail to throw properly formatted errors.

**How to avoid:**
- Always implement `setConfig(config)` as the first method in your card class
- Throw exceptions with clear error messages for invalid configurations
- Validate entity IDs exist before accessing them: check `hass.states[entityId]` exists
- Test with invalid configs during development

**Warning signs:**
- Card works in development but fails when users configure it
- Error messages like "Cannot read property 'state' of undefined"
- Card renders blank instead of showing configuration errors

**Phase to address:**
Phase 1 (Core Card Infrastructure) - Establish robust config validation from day one

---

### Pitfall 2: Resource Path Mismatch Between HACS and Development

**What goes wrong:**
Card works perfectly in development but fails to load after HACS installation. Users see "Custom element doesn't exist" or get 404 errors for card resources.

**Why it happens:**
HACS has strict file discovery rules. Files must be in `dist/` directory or repository root, and the filename must match the repository name (or repository name without "lovelace-" prefix). Developers often configure paths differently for local testing vs. HACS deployment.

**How to avoid:**
- Place all built files in `dist/` directory
- Name your main JS file to match your repository name exactly
- If repo name is `lovelace-something-card`, the file can be either `lovelace-something-card.js` or `something-card.js`
- Update `.hass_dev/configuration.yaml` resource path to match production HACS path
- Test with actual HACS installation before releasing

**Warning signs:**
- Card works with local `www/` folder but not via HACS
- GitHub Actions builds succeed but users report loading failures
- Resource URL in browser devtools shows 404

**Phase to address:**
Phase 1 (Core Card Infrastructure) - Set up build configuration matching HACS requirements from the start

---

### Pitfall 3: Memory Leaks from Animation and State Subscriptions

**What goes wrong:**
Dashboard becomes progressively slower over time. Browser memory usage climbs steadily. Eventually browser tabs crash or Home Assistant becomes unresponsive.

**Why it happens:**
Custom cards with animations often use `requestAnimationFrame` or `setInterval` without cleanup. When cards are removed from DOM (switching dashboards, editing mode), these continue running. Making `hass` a reactive property causes continuous re-renders on every entity update in the entire system, not just relevant entities.

**How to avoid:**
- Implement `disconnectedCallback()` lifecycle method to cancel all timers, animations, and subscriptions
- Store animation frame IDs and cancel them: `cancelAnimationFrame(this._animationId)`
- Never make `hass` a reactive LitElement property - use `set hass(hass)` setter instead
- Only extract and store specific entity states you need as reactive properties
- Use CSS animations instead of JavaScript animations when possible (much better performance)

**Warning signs:**
- Browser DevTools memory profiler shows increasing heap size over time
- Dashboard feels sluggish after being open for hours
- Switching between dashboards doesn't free memory
- High CPU usage even when dashboard is idle

**Phase to address:**
Phase 2 (Animation System) - Build cleanup into animation architecture from the start, before implementing complex animations

---

### Pitfall 4: Shadow DOM Styling Isolation

**What goes wrong:**
Home Assistant theme variables don't apply to custom card content. Card looks wrong in dark mode or with custom themes. Users complain card "doesn't match" their dashboard.

**Why it happens:**
Web Components use Shadow DOM, which isolates styles. Theme CSS variables need to be explicitly accessed using `var(--theme-variable-name)`. Developers often write normal CSS assuming theme variables will "just work" like they do in regular HTML.

**How to avoid:**
- Use CSS custom properties (variables) for all colors: `color: var(--primary-text-color)`
- Reference theme variables: `--ha-card-background`, `--primary-color`, `--accent-color`, `--text-primary-color`, etc.
- Test card with multiple themes (light, dark, custom)
- Use `:host` selector for shadow root styling
- Check card-mod documentation for complete theme variable list

**Warning signs:**
- Card looks fine in light theme but breaks in dark theme
- Colors are hardcoded instead of using CSS variables
- Users report card "doesn't respect my theme"
- Text becomes unreadable with certain themes

**Phase to address:**
Phase 1 (Core Card Infrastructure) - Establish theme-aware styling patterns in initial implementation

---

### Pitfall 5: Rollup Build Configuration Fragility

**What goes wrong:**
Build process silently produces broken output. Watch mode stops working after code changes. Card loads but critical features are missing. TypeScript errors don't stop invalid builds.

**Why it happens:**
Rollup watch mode "can be a little fickle" - major structural changes or TypeScript syntax errors cause it to stop entirely without clear error messages. If you change the output filename in `rollup.config.mjs` but forget to update `.hass_dev/configuration.yaml`, development and production diverge silently.

**How to avoid:**
- Keep `output.file` in `rollup.config.mjs` in sync with HACS requirements and dev config
- Restart rollup watch after major structural changes or TypeScript errors
- Use strict TypeScript configuration with `noImplicitAny: true`
- Add build verification in CI/CD (file exists, file size reasonable, no console errors on load)
- Never commit with rollup watch errors - restart and verify clean build

**Warning signs:**
- Watch mode stopped updating but no error message appeared
- Card loads but imported dependencies are missing
- Build output file has different name than expected
- Development works but production build fails

**Phase to address:**
Phase 0 (Project Setup) - Validate build configuration before writing any card code

---

### Pitfall 6: Missing or Incorrect HACS Metadata

**What goes wrong:**
HACS validation fails during repository submission. Users can't install card via HACS. Repository is rejected from HACS default repository list.

**Why it happens:**
HACS has strict validation requirements. Missing `hacs.json`, missing repository description, no releases, or incorrect file structure all cause validation failures. The validation only runs when you try to publish, not during development.

**How to avoid:**
- Create `hacs.json` with at minimum: `{"name": "Card Name"}`
- Add meaningful GitHub repository description
- Place JavaScript files in `dist/` directory or repository root
- Create GitHub releases (not just tags) with semantic versioning
- Use HACS GitHub Action for validation in CI/CD before release
- Run HACS action validation before submitting to default repository

**Warning signs:**
- Repository added as custom HACS repository but nothing appears
- HACS shows "No plugins found in this repository"
- Validation action fails in GitHub Actions
- Users report they can't find your card in HACS

**Phase to address:**
Phase 0 (Project Setup) - Configure HACS metadata before first commit

---

### Pitfall 7: LitElement Import and External Dependency Issues

**What goes wrong:**
Card fails to load with import errors. "LitElement is not defined" or similar errors appear in console. Card works sometimes but fails randomly when external CDN is down.

**Why it happens:**
Importing from external CDNs like unpkg.com works but is unreliable. The CDN can be "unreachable at times," making cards unavailable. Shorthand imports like `import { LitElement } from 'lit'` don't work - you need full URLs. Home Assistant's bundling expects specific import patterns.

**How to avoid:**
- Bundle dependencies with your card using Rollup, don't rely on external CDNs
- If you must use external imports, use full URLs with specific versions
- Import Lit from Home Assistant's provided dependencies when possible
- Add error boundaries to catch and report import failures gracefully
- Test card with network throttling to simulate CDN failures

**Warning signs:**
- Console shows "Failed to fetch" or "Module not found" errors
- Card works on fast connection but fails on slow/unreliable networks
- Card suddenly stops working when external CDN updates or goes down
- Import statements use relative paths or bare module specifiers

**Phase to address:**
Phase 0 (Project Setup) - Configure dependency bundling correctly from the start

---

### Pitfall 8: Inefficient DOM Updates on State Changes

**What goes wrong:**
Card becomes sluggish with many entities. Dashboard freezes briefly on every state update. Card causes performance issues for entire dashboard.

**Why it happens:**
Home Assistant calls `set hass(hass)` very frequently - on EVERY state change in the entire system, not just your entities. Developers rebuild entire card DOM on every hass update instead of updating only what changed. This causes excessive re-rendering.

**How to avoid:**
- Build DOM structure once in `setConfig()` or `firstUpdated()`
- In `set hass(hass)` setter, only update specific values that changed
- Check if relevant entity states actually changed before triggering updates
- Use LitElement's reactive properties only for card-specific state, not the entire hass object
- Implement `shouldUpdate()` to skip unnecessary renders
- For animations, decouple render loop from state updates

**Warning signs:**
- Card causes browser lag when any entity in HA updates
- DevTools performance profile shows constant re-rendering
- Dashboard with many instances of your card becomes unusable
- Card causes performance issues even when not visible

**Phase to address:**
Phase 1 (Core Card Infrastructure) - Establish efficient update patterns before adding features

---

## Technical Debt Patterns

Shortcuts that seem reasonable but create long-term problems.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcode theme colors instead of CSS variables | Faster initial development | Card breaks in dark mode, custom themes | Never - always use theme variables |
| Skip `disconnectedCallback` cleanup | Less code to write | Memory leaks, performance degradation | Never for cards with animations/timers |
| Use external CDN imports (unpkg, etc.) | Smaller bundle size | Random failures when CDN is down | Development/prototyping only, never production |
| Make entire `hass` object reactive | Simpler code structure | Continuous re-renders, performance issues | Never - always use setter with selective updates |
| Skip entity existence validation | Fewer lines of code | Runtime crashes for users | Never - always validate entities exist |
| Test only in light theme | Faster testing cycle | Dark theme users get broken UI | Never - test both themes minimum |
| Use `git add .` for staging | Faster commits | Risk committing secrets, large binaries | Only if .gitignore is comprehensive |
| Skip visual editor implementation | Less code to maintain | Users must hand-edit YAML, reduces adoption | Acceptable for MVP, needed for v1.0 |

## Integration Gotchas

Common mistakes when connecting to external services.

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Bermuda BLE entities | Assuming entity is always available | Check entity exists, handle undefined state gracefully |
| Bermuda BLE entities | Not handling disabled/hidden sensors | Enable sensor entities in UI before accessing, provide clear error messages |
| Home Assistant websocket | Subscribing to all state changes | Subscribe only to specific entities you need |
| Theme variables | Assuming variables exist in all themes | Provide fallback values: `var(--primary-color, #3498db)` |
| Card-mod | Relying on card-mod being installed | Make card work without card-mod, use it only as enhancement |

## Performance Traps

Patterns that work at small scale but fail as usage grows.

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Polling entity state instead of reactive updates | Works fine initially | Use LitElement reactive updates, not polling intervals | 10+ entities in card |
| Canvas animations without frame limiting | Smooth animations initially | Limit frame rate (30fps sufficient), use `requestAnimationFrame` properly | Multiple card instances on dashboard |
| Loading all entity history on render | Quick for recent data | Lazy-load historical data, paginate, cache | 7+ days of history |
| Re-creating entire DOM on every state change | Simple code structure | Build DOM once, update specific elements only | 5+ state updates per second |
| Making network requests on every hass update | Fresh data | Cache responses, debounce updates, check if entity actually changed | Any real-world usage |

## Security Mistakes

Domain-specific security issues beyond general web security.

| Mistake | Risk | Prevention |
|---------|------|------------|
| Eval or innerHTML with user-provided config | XSS attacks via dashboard config | Use `textContent` or sanitize with DOMPurify, never eval |
| Exposing sensitive entity attributes in card | Location data, API keys visible in frontend | Filter sensitive attributes, provide opt-in for data display |
| Making external requests without CORS validation | Data leaks, CSRF attacks | Use Home Assistant's built-in fetch, validate origins |
| Storing secrets in localStorage | Secrets accessible to all dashboard cards | Never store secrets client-side, use HA configuration |

## UX Pitfalls

Common user experience mistakes in this domain.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| No visual editor, YAML-only config | Users must manually edit YAML, increases errors | Implement `getConfigElement()` with form inputs |
| Card renders blank on config errors | Users don't know what's wrong | Show error message in card with helpful hints |
| No loading state for async data | Card appears broken during load | Show skeleton or spinner while loading |
| Animations can't be disabled | Accessibility issues, performance problems on low-end devices | Add `animation: false` config option |
| Card uses non-standard entity picker | Inconsistent UX across dashboard | Use HA's built-in `ha-entity-picker` component |
| No visual feedback for state changes | Users don't notice when state updates | Add subtle animations or color changes on updates |
| Missing `getCardSize()` implementation | Card causes layout issues in masonry view | Return appropriate height in card units (50px per unit) |

## "Looks Done But Isn't" Checklist

Things that appear complete but are missing critical pieces.

- [ ] **Config validation:** Card works in dev but verify throws exceptions for invalid configs in production
- [ ] **Entity validation:** Card displays entity but verify handles missing/renamed entities gracefully
- [ ] **Theme support:** Card looks good in light theme but verify works in dark mode and custom themes
- [ ] **Cleanup implementation:** Card works but verify `disconnectedCallback()` cancels all timers/animations/subscriptions
- [ ] **HACS structure:** Build succeeds but verify files in `dist/` directory match HACS naming requirements
- [ ] **Size methods:** Card displays but verify `getCardSize()` implemented for masonry layout
- [ ] **Error states:** Card works with good data but verify shows helpful errors for bad config
- [ ] **Loading states:** Card works but verify shows loading state for async operations
- [ ] **Visual editor:** Card configurable via YAML but verify implements `getConfigElement()` for GUI editing
- [ ] **Release workflow:** Code committed but verify GitHub release created (not just tag) for HACS versioning
- [ ] **Resource registration:** Card loads in dev but verify resource path matches HACS convention for production
- [ ] **Performance testing:** Card works with one entity but verify performs well with many entities/instances

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Memory leak from missing cleanup | MEDIUM | Add `disconnectedCallback()`, track all intervals/animations, test with memory profiler |
| HACS path mismatch | LOW | Update `rollup.config.mjs` output path, rebuild, create new release |
| Making `hass` reactive property | HIGH | Refactor to use `set hass(hass)` setter, extract specific properties to reactive state |
| Hardcoded colors (no theme support) | MEDIUM | Replace all colors with CSS variables, test with themes, may need UI redesign |
| Missing config validation | MEDIUM | Add `setConfig()` validation, handle all error cases, test with invalid configs |
| Inefficient DOM updates | HIGH | Refactor to build DOM once, update selectively - may require significant restructuring |
| Missing visual editor | HIGH | Create editor element, implement form inputs, wire up events - significant new feature |
| External CDN dependencies | MEDIUM | Bundle dependencies with Rollup, update import statements, test bundled version |

## Pitfall-to-Phase Mapping

How roadmap phases should address these pitfalls.

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Invalid setConfig implementation | Phase 1: Core Infrastructure | Test with invalid configs, verify error cards render |
| Resource path mismatch | Phase 0: Project Setup | Install via HACS, verify loads correctly |
| Memory leaks from animations | Phase 2: Animation System | Monitor memory with DevTools over 30 minutes |
| Shadow DOM styling issues | Phase 1: Core Infrastructure | Test with 3+ themes (light, dark, custom) |
| Rollup config fragility | Phase 0: Project Setup | CI/CD builds successfully, output matches expectations |
| Missing HACS metadata | Phase 0: Project Setup | HACS validation action passes |
| LitElement import issues | Phase 0: Project Setup | Card loads offline, network throttling tests pass |
| Inefficient DOM updates | Phase 1: Core Infrastructure | Performance profile shows minimal re-renders |
| Missing visual editor | Phase 4+: Polish & UX | Visual editor available in card config UI |
| No loading states | Phase 3+: Location Integration | Skeleton/spinner shows during data load |

## Home Assistant-Specific Anti-Patterns

| Anti-Pattern | Why It Fails | Correct Pattern |
|--------------|--------------|-----------------|
| Assuming HA components are immediately available | Components are lazy-loaded | Use `customElements.whenDefined()` before accessing |
| Using React for custom elements | React doesn't work well with Web Components | Use Lit, vanilla JS, or other WC-friendly frameworks |
| Restarting HA to test `www/` folder changes | Inefficient development cycle | Use proper dev server with live reload |
| Hardcoding port 8123 | Fails for users with custom HA port | Use relative URLs or read from location.hostname |
| Using deprecated "paper" elements | Elements may be removed in future HA versions | Use current HA design system elements (mwc-, ha-) |
| Not implementing size methods | Breaks masonry and section layouts | Implement `getCardSize()` and `getGridOptions()` |

## Sources

**Official Documentation:**
- [Custom card | Home Assistant Developer Docs](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/)
- [Plugin (Dashboard) - HACS](https://www.hacs.xyz/docs/publish/plugin/)
- [Include default repositories - HACS](https://www.hacs.xyz/docs/publish/include/)

**Community Discussions:**
- [Custom Cards with GUI editor as of 2023 - Development](https://community.home-assistant.io/t/custom-cards-with-gui-editor-as-of-2023/542254)
- [Custom Cards? These instructions don't make sense](https://community.home-assistant.io/t/custom-cards-these-instructions-dont-make-sense/223549)
- [Lit-html import not reachable lately in custom card](https://community.home-assistant.io/t/lit-html-import-not-reachable-lately-in-custom-card/863814)
- [Handling imports in custom cards](https://community.home-assistant.io/t/handling-imports-in-custom-cards/857667)
- [Card-mod - Super-charge your themes!](https://community.home-assistant.io/t/card-mod-super-charge-your-themes/212176)
- [Card-mod unusable? It slows everything down](https://community.home-assistant.io/t/card-mod-unusable-it-slows-everything-down-so-much/846808)

**GitHub Resources:**
- [ha-custom-card-rollup-ts-lit-starter](https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter)
- [hacs-taste-test (Testing framework)](https://github.com/rianadon/hass-taste-test)
- [HACS GitHub Action](https://www.hacs.xyz/docs/publish/action/)

**Issue Reports:**
- [Stack Card height issues - 2026.1 update](https://github.com/home-assistant/frontend/issues/28860)
- [Home Assistant 2026.1 breaks the card](https://github.com/Clooos/Bubble-Card/issues/2088)
- [Custom cards sometimes not displayed in Edit mode](https://github.com/home-assistant/frontend/issues/17266)

**Tutorial/Guides:**
- [Creating custom cards for Home Assistant](https://sergiocarracedo.es/ha-custom-cards/)
- [Automated testing for custom cards](https://community.home-assistant.io/t/automated-testing-for-custom-cards/320878)
- [Bermuda BLE integration community thread](https://community.home-assistant.io/t/bermuda-bluetooth-ble-room-presence-and-tracking-custom-integration/625780)

---
*Pitfalls research for: MiniMe - Home Assistant Custom Card with Pixel Art Animations*
*Researched: 2026-02-03*
*Confidence: HIGH (verified with official HA docs, HACS docs, community experience, and GitHub issues)*
