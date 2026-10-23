# Accessibility and validation

The system targets WCAG 2.2 AA patterns. This document distinguishes measured token checks from manual application checks.

## Measured color pairs

Run `node design-system/scripts/check.mjs` from the repository root. `contrast-report.json` records the foreground, background, computed ratio, threshold and result for each specified pair.

- Normal text and link pairs: minimum 4.5:1.
- Interactive control boundaries and focus against the supplied neutral surfaces: minimum 3:1.
- Success, warning and error text is tested against its paired status background.
- Decorative card dividers use `subtleBorder`; they do not indicate control boundaries.
- Disabled controls are inactive and are not included in the conformance claim.
- Translucency, imagery, gradients, hover combinations outside the supplied pairs and chart palettes require separate checking.

## Manual acceptance checklist

1. Reach every control with Tab and Shift+Tab. Focus must remain visible and must not be covered by the sticky header.
2. In a tab list, use Left/Right, Home and End. Only the selected tab is in the normal Tab sequence. Panel relationships must remain valid.
3. Enable RTL preview and repeat arrow-key testing. Logical alignment and control order must remain understandable. English RTL preview checks layout, not linguistic translation.
4. Validate an empty form, an invalid email and a valid form. Errors must name the problem. A screen reader should announce the result. The gallery never sends or stores form entries.
5. Confirm that labels and required states are announced with each field. Placeholder text cannot replace a label.
6. Inspect both light and dark themes. Check focus on buttons, fields, links and disclosure summaries.
7. Test the guide at 200% zoom and narrow viewport widths. Body content must reflow; tables and code may scroll within their wrappers.
8. With reduced motion enabled, controls must remain usable without animated transitions.
9. Read headings, landmarks, table headers and dynamic status updates with a screen reader. Automated ID checks cannot establish screen-reader usability.
10. On production pages, test real translations, long names, long email addresses, multiline errors and larger text preferences.

## Evidence limits

The automated check covers tokens and markup relationships, not the complete accessibility tree, all assistive technologies or every future component composition. Browser verification should record the theme, viewport and tested interactions. A downstream page can fail even while using passing tokens, for example by placing text on an untested background or removing its accessible label.
