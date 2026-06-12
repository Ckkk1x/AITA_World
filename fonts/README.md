# Self-hosted fonts

First-party copies of the brand fonts so the site renders correctly **without contacting Google**
(strictly-necessary state, before any cookie consent). Google Fonts is loaded additively only after
the visitor opts into "External resources" — see `../cookie-consent.js`.

- **Golos Text** — variable font, one `.woff2` per Unicode subset covers weights 400–800.
- **Inter** — italic only (the landing only ever used `Inter:ital@1`).
- Subsets included: `latin`, `latin-ext`, `cyrillic`, `cyrillic-ext` (covers en / es / uk).

Fetched from Google's `fonts.gstatic.com` CDN (the exact files the landing referenced), declared in
`../fonts.css` with the original `unicode-range`s. The designer may replace these with hand-optimized
subsets — keep the filenames in `fonts.css` in sync if so.
