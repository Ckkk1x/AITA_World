# Design — Cookie consent banner (aita.world landing)

**Task:** [b6b8b2ca](https://app.aita.world/tasks/b6b8b2ca-466e-4af0-850d-9197cae68da9)
**Classification:** feature (frontend, compliance) · **Complexity:** medium
**Phase:** SDLC / design

## Architecture

Two new shared, dependency-free files at repo root, plus self-hosted fonts:

| File | Role |
|---|---|
| `cookie-consent.js` | IIFE consent manager: state, gating, UI, i18n, GPC, log |
| `cookie-consent.css` | Banner + modal styling, matches the design system (black bg, pill buttons, Golos Text) |
| `fonts.css` | First-party `@font-face` for Golos Text + Inter (self-hosted, no consent needed) |
| `fonts/*.woff2` | Self-hosted font binaries (Golos Text 400–800, Inter italic) |

Each in-scope page: remove the **eager** Clarity snippet and Google Fonts `<link>`s, add
`fonts.css` + `cookie-consent.css` + `cookie-consent.js` (defer) + a per-page Google-Fonts config,
and a footer "Cookie preferences" link.

## Consent model

```js
// localStorage['aita-consent']  (source of truth) + cookie 'aita_consent' (Max-Age 730d, Lax, Secure)
{
  v: 1,                       // schema version
  policyVersion: "2026-06-12",// CONSENT_POLICY_VERSION — bump on cookie-inventory change → re-consent
  categories: { necessary: true, analytics: false, external: false },
  ts: "2026-06-12T12:00:00Z", // decision timestamp (ISO)
  gpc: false                  // whether GPC drove this decision
}
// localStorage['aita-consent-log'] : append-only [ {action, categories, ts, policyVersion} ], pruned > 730d
```

**Show-banner predicate (on init):** no record · OR `record.policyVersion !== CONSENT_POLICY_VERSION`
· OR `age(record.ts) > 730d`. Else apply stored prefs silently.

## Categories → effects (idempotent)

| Category | Default | Granted effect | Denied effect |
|---|---|---|---|
| Strictly necessary | on (locked) | — | — |
| Analytics (Clarity) | off | inject Clarity loader with tag `v4y0cwaq68` | not injected |
| External resources (Google Fonts) | off | inject Google Fonts `<link>` (+preconnect) from page config | self-hosted fonts only |

- Fonts: self-hosted is always present (first-party). Google Fonts is **additive** on consent.
- Withdrawing a previously-active category (e.g. accept→reject in the same session): clear known
  Clarity cookies and `location.reload()` to guarantee scripts/cookies are gone. First-visit
  decisions need no reload (nothing was loaded yet).

## UI

- **Banner** — fixed bottom, `role="dialog"` `aria-modal="false"` `aria-label`, short text + link to
  Cookie Policy, three **equal** pill buttons (Accept all / Reject all / Configure). Reject and
  Accept share identical size/contrast (AEPD). Not Esc-dismissible (a choice is required), but the
  page stays usable (no cookie wall).
- **Configure modal** — `role="dialog"` `aria-modal="true"`, focus-trap, Esc closes. Rows:
  Strictly necessary (locked "Always active"), Analytics, External resources — all **unchecked** by
  default. Footer actions: Save preferences / Accept all / Reject all.
- Styling mirrors `styles.css`: `#000` surfaces, white text, pill buttons w/ gradient border,
  `:focus-visible` white outline, Golos Text.

## i18n

Self-contained `I18N = { en, uk, es }` inside the component (so it works on pages without
`translations.js`). Current language = `localStorage['aita-lang']` (clamped to en/uk/es, default en).
Re-renders on the existing `aita:langchange` event. Footer link text also driven by this table.
For pages that have `translations.js`, the `cookie.preferences` footer key is also added there so the
existing `setLanguage` keeps the DOM consistent — but the component is authoritative.

## GPC

`navigator.globalPrivacyControl === true` && no stored record → auto Reject all, record `gpc:true`,
suppress banner. Footer link still opens preferences to override.

## Server-side evidentiary log (documented stub)

`maybeBeacon(record)` POSTs to `/api/consent-log` only when `CONSENT_BEACON_ENABLED` is true
(default false). Wiring a Vercel function + datastore is a separate, deploy-time change.

## Test strategy

1. `node --check` on JS.
2. Static: served initial HTML contains **no** `clarity.ms` / `fonts.googleapis.com`.
3. Playwright (headless, no deps beyond npx): load page → assert zero requests to
   `clarity.ms` / `fonts.googleapis` pre-consent; click Accept all → assert both now load; reload →
   banner suppressed; Reject all path → neither loads, self-hosted fonts present; footer link
   reopens modal; GPC emulation → auto-reject.
4. Manual DevTools checklist in the report.

## Out of scope

- Clarity dashboard masking toggles (manual, needs login) — flagged.
- Server-side consent datastore/endpoint — stub only.
- Designer-final `.woff2` (self-hosted set fetched from Google's CDN as a working default; designer
  may replace with optimized subsets).
