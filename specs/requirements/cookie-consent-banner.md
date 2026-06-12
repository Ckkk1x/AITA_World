# Requirements — Cookie consent banner (aita.world landing)

**Task:** [b6b8b2ca](https://app.aita.world/tasks/b6b8b2ca-466e-4af0-850d-9197cae68da9) · Priority: Critical
**Phase:** SDLC / requirements

## Problem / why (critical)

Today `aita.world` loads, with no consent gate:

- **Microsoft Clarity** (analytics + session replay, tag `v4y0cwaq68`) — sets `_clck`, `_clsk`,
  `CLID`, `MUID`, `MR`, `ANONCHK`, `SM`; data flows to the US.
- **Google Fonts** (`fonts.googleapis.com`) — the visitor's IP is sent to Google US on every
  page load (Golos Text + Inter).

This is an active breach of **GDPR Art. 6(1)(a) + LSSI-CE Art. 22.2**. AEPD sanction risk
€30k–€150k. Until the banner ships, Legal (Yulia) cannot publish the updated
Privacy/Cookie/Terms policies, because those texts promise a consent-flow that does not yet exist.

## Functional requirements

1. **First-visit banner** with three buttons of **equal weight**: **Accept all**, **Reject all**,
   **Configure**. AEPD 2023 guide (mandatory):
   - "Reject all" must not be smaller / lighter than "Accept all".
   - No pre-ticked checkboxes in "Configure".
   - No cookie wall (refusal must not block the site).
   - Before any click → load **only** strictly-necessary (Clarity and Google Fonts must NOT load).
2. **Categories in "Configure":**
   - Strictly necessary — always on, no toggle.
   - Analytics → Microsoft Clarity.
   - External resources → Google Fonts.
3. **Reject fallback:**
   - Google Fonts rejected → use self-hosted Golos Text + Inter.
   - Clarity rejected → script simply not injected.
4. **Footer re-trigger** — a permanent "Cookie preferences" link opens the configuration modal so
   the user can change their choice at any time.
5. **Consent log** — retain 24 months (categories, date, policy version) for evidentiary purposes
   on an AEPD request.
6. **Renewal logic** — consent older than 24 months, or a changed cookie inventory, re-shows the banner.
7. **GPC (Global Privacy Control)** — if the browser sends a GPC signal, treat it as Reject all
   automatically (optional, good practice).

### Parallel (manual, out of code): Clarity dashboard
In `clarity.microsoft.com` → project `v4y0cwaq68` → Settings, enable **Mask Sensitive Content**
and **Mask Form Inputs**. Requires a Clarity login → cannot be done from this repo. Flagged as a
manual follow-up; code adds `data-clarity-mask` on contact-form inputs as defence-in-depth.

## Acceptance criteria

- [ ] Banner appears on first visit.
- [ ] Reject all and Accept all are visually equivalent.
- [ ] Before accept, Clarity and Google Fonts do not load (verify in DevTools → Network).
- [ ] "Cookie preferences" in the footer opens settings.
- [ ] Consent record persists ≥ 24 months.
- [ ] Clarity PII masking on (dashboard — manual; code adds input masking).

## Decisions & assumptions (no blocking questions — acted on best judgment)

- **Build vs buy → BUILD.** Custom vanilla-JS consent manager, no third-party SaaS. The repo is a
  hand-coded static site (no build, no deps); a SaaS banner injects another external script that
  itself sets cookies and phones home — counterproductive for a privacy banner. Custom code is the
  task's "full control" option and reuses our central i18n.
- **Self-hosted fonts are the default.** Strictly-necessary state renders brand fonts from
  first-party `/fonts/*.woff2` (no consent needed). Google Fonts is loaded *only* after "External
  resources" consent. ⇒ by default zero IP leak to Google.
- **Consent log is client-side** (localStorage record + `aita_consent` cookie, 24-month max-age,
  versioned, timestamped) — satisfies persistence + renewal. A server-side evidentiary endpoint
  (`/api/consent-log`) is left as a documented, ready-to-wire stub (needs a datastore + deploy,
  out of scope for a local-only change). This is the one partially-met AC and is called out.
- **Scope = every page that loads Clarity or Google Fonts**, via one shared component:
  `index.html`, `privacy.html`, `thank-you.html`, `platform/index.html`, `powerconnect2026/index.html`.
- **GPC** auto-applies Reject all, suppresses the banner (unambiguous signal), keeps the footer link
  working so the user can override.
