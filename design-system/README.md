# XFact Research Design System

Version **1.0.0** · 23 October 2026

A reusable visual and interface system built from XFact Research’s existing charcoal, gold, Nexa and Inter identity. The component gallery demonstrates accessible light and true-black dark themes, native HTML components, research patterns and measured color contrast.

## Open the visual guide

Open `design-system/index.html` through any static HTTP server. When GitHub Pages publishes the repository root, the guide is available at `/design-system/`.

For local work, run from the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/design-system/`. No package installation or build framework is required.

## Files

| File | Purpose |
| --- | --- |
| `tokens.json` | Authoritative primitive and semantic design tokens |
| `tokens.css` | Generated CSS custom properties |
| `fonts.css` | Local brand font declarations |
| `components.css` | Opt-in, framework-independent components |
| `components.js` | Optional accessible tabs behavior |
| `index.html` | Visual guide and interactive component examples |
| `gallery.css`, `gallery.js` | Documentation-specific presentation and demos |
| `ACCESSIBILITY.md` | Accessibility requirements and manual checks |
| `contrast-report.json` | Machine-generated results for supported color pairs |
| `assets/` | Existing XFact wordmarks, symbol and font files |
| `scripts/` | Token generation and validation |

## Quick start

```html
<link rel="stylesheet" href="/design-system/fonts.css">
<link rel="stylesheet" href="/design-system/tokens.css">
<link rel="stylesheet" href="/design-system/components.css">

<section class="xf-root" data-xf-theme="light">
  <div class="xf-container">
    <p class="xf-eyebrow">Research recruitment and fieldwork</p>
    <h1>Ask with <span class="xf-highlight">purpose.</span></h1>
    <p class="xf-lead xf-reading">Connect the question with the right audience.</p>
    <a class="xf-button" href="/contact">Start a project</a>
  </div>
</section>
```

Do not import `gallery.css` or `gallery.js` into a production website. They belong to the visual documentation.

For tabs, copy the complete ARIA relationships from the gallery and initialize the optional module:

```js
import { initTabs } from '/design-system/components.js';
initTabs();
```

Tab IDs must be unique per instance. The module supports Arrow Left/Right, Home/End, roving focus and RTL direction. If your application removes and recreates tab markup, initialize the new container after rendering it.

## Foundations

**Brand:** precise, human and grounded. Lead with the research question and the next decision. Use restrained color, clear hierarchy and concrete language.

**Color:** charcoal `#27292D`, gold `#C6A02E`, highlight `#EAD897`, paper `#F6F5F1`. Gold is an accent, not small text on a white surface. Light-mode links use darker ochre `#72580B`. Semantic tokens handle text, surface, border, focus, action and feedback roles separately.

**Dark theme:** canvas `#000000`, surface `#121212`, elevated surface `#1D1D1D`. Bright text, warm gold actions and visible neutral boundaries provide hierarchy. Use `data-xf-theme="dark"` on the root or an isolated specimen. The same component markup works in both themes.

**Typography:** Nexa for headings; Inter for body and controls; native system fonts for uncovered scripts. Keep body text at 16px or larger, supporting text at 14px, and reading width around 65ch. Avoid all-caps paragraphs and fully justified body text. Use language-appropriate fonts for substantial Arabic or Chinese production content and test wrapping with real copy.

**Layout:** 4px base scale; 76rem content maximum; fluid 20–64px page gutters; 44px minimum controls. Use grid and logical properties (`padding-inline`, `border-inline-start`) to support responsive and RTL layouts.

**Shape:** 6px small, 12px controls, 20px cards, pill tabs. Borders and spacing carry hierarchy; shadows are optional, not the default.

**Motion:** 120ms quick, 180ms standard. Respect reduced-motion preferences. No important information should depend on an entrance animation.

## Component rules

- **Buttons:** one primary action per decision area. Use anchors for navigation and buttons for state changes. Include accessible names for icon-only controls. Pair any loading spinner with visible “Working…” text and an appropriate status announcement.
- **Forms:** persistent labels, correct input types and autocomplete, visible required instructions, field-level errors connected by `aria-describedby`. Use a status message that reflects the actual result. Never say “sent” until delivery has been confirmed by the application.
- **Cards:** group related content. Avoid placing a clickable card around additional nested buttons or links.
- **Tabs:** maintain selected state, focus order and panel relationships. Use disclosure instead when users need to inspect all content at once.
- **Feedback:** combine status text with color. Use `role="status"` for nonurgent dynamic confirmations and `role="alert"` only for urgent dynamic errors. Static example notices do not need live regions.
- **Tables:** provide captions, column/row headers and an overflow wrapper. Do not shrink text to make a large table fit a phone.
- **Research insight:** observation → evidence → implication → limitation. Examples in the gallery are illustrative, not study results.
- **Charts:** label directly, include units and sources, and use shapes or patterns in addition to color. Gold should identify the focal series, not every series. Validate chart-specific color combinations separately.

## Content and truthfulness

Use the contact address **hello@xfactresearch.com**. Do not invent client outcomes, sample sizes, owned panels, office locations, facilities or compliance certifications. Qualify feasibility, timelines and privacy obligations at the project level. Describe the action accurately: opening an email draft is different from submitting a message.

## Update and validate

Edit `tokens.json`, then run:

```sh
node design-system/scripts/build-tokens.mjs
node design-system/scripts/check.mjs
```

The check measures 46 light/dark color pairs, verifies local gallery resources and checks HTML ID/label/tab relationships. Follow `ACCESSIBILITY.md` for manual keyboard, zoom and screen-reader testing. Passing token contrast checks is not full WCAG certification.

Use patch versions for fixes, minor versions for additive tokens/components and major versions for renamed or removed public tokens. Update this version and the gallery label together.

## Integration scope

This release adds a reusable system and reference gallery. It does not automatically replace the existing website’s compiled CSS or application code. Adopt tokens and components deliberately when updating that website.

## Assets and rights

Wordmarks and fonts were copied unchanged from this repository’s existing website assets. This package does not grant a new license to third-party fonts. Confirm your existing Nexa and Inter usage rights before wider redistribution; no open-source license is asserted for the entire package.
