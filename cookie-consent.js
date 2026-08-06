/*
 * cookie-consent.js — AITA landing consent manager (vanilla, zero-dep).
 *
 * GDPR Art. 6(1)(a) + LSSI-CE Art. 22.2 / AEPD 2023 guide compliant:
 *   • First-visit banner with three EQUAL-weight actions: Accept all / Reject all / Configure.
 *   • Nothing non-essential loads before an explicit choice — Microsoft Clarity, marketing pixels
 *     and Google Fonts are injected ONLY after consent (strictly-necessary state uses fonts.css).
 *   • No pre-ticked boxes, no cookie wall, footer re-trigger, 24-month consent record + renewal,
 *     and GPC (Global Privacy Control) auto-reject.
 *
 * Consent categories: necessary (locked) | analytics | marketing | external.
 *
 * Per-page config (optional, set before this script):
 *   window.AITA_GFONTS = ["https://fonts.googleapis.com/css2?..."]  // Google Fonts hrefs to (re)inject on consent
 *   window.AITA_CLARITY_TAG = "v4y0cwaq68"                          // override default Clarity project tag
 *   window.AITA_LINKEDIN_PARTNER_ID = "1234567"                     // LinkedIn Insight Tag — omitted → never loads
 *   window.AITA_GADS_ID = "AW-123456789"                            // Google Ads tag — omitted → never loads
 *
 * Public API: window.AitaConsent.{ openPreferences, acceptAll, rejectAll, getConsent, reset }
 */
(function () {
  'use strict';

  // ---- Config -------------------------------------------------------------
  var CONSENT_KEY = 'aita-consent';        // localStorage record (source of truth)
  var CONSENT_LOG_KEY = 'aita-consent-log';// localStorage append-only audit log
  var CONSENT_COOKIE = 'aita_consent';     // mirror cookie (server-readable, 24m)
  var SCHEMA_VERSION = 1;
  // Bump POLICY_VERSION whenever the cookie inventory changes → forces re-consent (renewal).
  // 2026-08-06: added the `marketing` category (LinkedIn / Google Ads) to the inventory.
  var POLICY_VERSION = '2026-08-06';
  var MAX_AGE_DAYS = 730;                  // 24 months
  var CLARITY_TAG = window.AITA_CLARITY_TAG || 'v4y0cwaq68';
  var GFONTS = window.AITA_GFONTS || [];
  // Marketing tags stay unconfigured until a campaign actually needs them — an unset id means the
  // pixel is never injected, consent or not. Consent alone is necessary but not sufficient.
  var LINKEDIN_PARTNER_ID = window.AITA_LINKEDIN_PARTNER_ID || '';
  var GADS_ID = window.AITA_GADS_ID || '';
  // Root-absolute so the link resolves from sub-directory pages (platform/, powerconnect2026/) too.
  var POLICY_URL = window.AITA_POLICY_URL || '/legal/cookies';
  var BEACON_ENABLED = false;              // server-side evidentiary log (see maybeBeacon) — off until /api/consent-log exists
  var BEACON_URL = '/api/consent-log';
  // Clarity cookies to clear when analytics consent is withdrawn.
  var CLARITY_COOKIES = ['_clck', '_clsk', 'CLID', 'ANONCHK', 'MR', 'MUID', 'SM'];
  // LinkedIn Insight Tag + Google Ads cookies to clear when marketing consent is withdrawn.
  var MARKETING_COOKIES = ['li_sugr', 'UserMatchHistory', 'bcookie', 'bscookie', 'lidc', 'li_gc', '_gcl_au', '_gcl_aw', '_gcl_dc'];

  var SUPPORTED_LANGS = ['en', 'uk', 'es'];

  // ---- i18n (self-contained so the component works on pages without translations.js) ----
  var I18N = {
    en: {
      title: 'We value your privacy',
      desc: 'We use strictly necessary cookies to run this site. With your consent we also use analytics, marketing measurement, and load external resources. You can accept, reject, or choose per category.',
      policy: 'Cookie Policy',
      accept: 'Accept all',
      reject: 'Reject all',
      configure: 'Configure',
      save: 'Save preferences',
      close: 'Close',
      prefsTitle: 'Cookie preferences',
      prefsDesc: 'Choose which cookies to allow. Strictly necessary cookies are always on. Nothing else loads until you save your choice.',
      alwaysOn: 'Always active',
      footerLink: 'Cookie preferences',
      catNecessary: 'Strictly necessary',
      catNecessaryDesc: 'Required for the site to work (consent storage, security). Cannot be switched off.',
      catAnalytics: 'Analytics',
      catAnalyticsDesc: 'Microsoft Clarity — anonymous usage analytics and session replay. Sets _clck, _clsk, CLID, MUID, ANONCHK; data is processed in the US.',
      catMarketing: 'Marketing and attribution',
      catMarketingDesc: 'LinkedIn Insight Tag and Google Ads — measure B2B campaign performance and conversion attribution. Sets li_sugr, UserMatchHistory, _gcl_au; data is processed in the US.',
      catExternal: 'External resources',
      catExternalDesc: 'Google Fonts — loads Golos Text and Inter from Google’s CDN, which receives your IP. If off, fonts are served from our own server.'
    },
    uk: {
      title: 'Ми поважаємо вашу приватність',
      desc: 'Ми використовуємо лише суворо необхідні куки для роботи сайту. За вашою згодою ми також застосовуємо аналітику, маркетингову аналітику та завантажуємо зовнішні ресурси. Можна прийняти, відхилити або обрати по категоріях.',
      policy: 'Політика куків',
      accept: 'Прийняти все',
      reject: 'Відхилити все',
      configure: 'Налаштувати',
      save: 'Зберегти вибір',
      close: 'Закрити',
      prefsTitle: 'Налаштування куків',
      prefsDesc: 'Оберіть, які куки дозволити. Суворо необхідні куки завжди увімкнені. Решта не завантажується, доки ви не збережете вибір.',
      alwaysOn: 'Завжди активні',
      footerLink: 'Налаштування куків',
      catNecessary: 'Суворо необхідні',
      catNecessaryDesc: 'Потрібні для роботи сайту (зберігання згоди, безпека). Не можна вимкнути.',
      catAnalytics: 'Аналітика',
      catAnalyticsDesc: 'Microsoft Clarity — анонімна аналітика та запис сесій. Ставить _clck, _clsk, CLID, MUID, ANONCHK; дані обробляються у США.',
      catMarketing: 'Маркетинг та атрибуція',
      catMarketingDesc: 'LinkedIn Insight Tag та Google Ads — вимірювання ефективності B2B-кампаній і атрибуція конверсій. Ставить li_sugr, UserMatchHistory, _gcl_au; дані обробляються у США.',
      catExternal: 'Зовнішні ресурси',
      catExternalDesc: 'Google Fonts — завантажує Golos Text та Inter з CDN Google, який отримує вашу IP-адресу. Якщо вимкнено — шрифти віддаються з нашого сервера.'
    },
    es: {
      title: 'Valoramos tu privacidad',
      desc: 'Usamos cookies estrictamente necesarias para el funcionamiento del sitio. Con tu consentimiento también usamos analítica, medición de marketing y cargamos recursos externos. Puedes aceptar, rechazar o elegir por categoría.',
      policy: 'Política de cookies',
      accept: 'Aceptar todo',
      reject: 'Rechazar todo',
      configure: 'Configurar',
      save: 'Guardar preferencias',
      close: 'Cerrar',
      prefsTitle: 'Preferencias de cookies',
      prefsDesc: 'Elige qué cookies permitir. Las estrictamente necesarias están siempre activas. Nada más se carga hasta que guardes tu elección.',
      alwaysOn: 'Siempre activas',
      footerLink: 'Preferencias de cookies',
      catNecessary: 'Estrictamente necesarias',
      catNecessaryDesc: 'Necesarias para que el sitio funcione (almacenamiento del consentimiento, seguridad). No se pueden desactivar.',
      catAnalytics: 'Analítica',
      catAnalyticsDesc: 'Microsoft Clarity — analítica de uso anónima y repetición de sesiones. Establece _clck, _clsk, CLID, MUID, ANONCHK; los datos se procesan en EE. UU.',
      catMarketing: 'Marketing y atribución',
      catMarketingDesc: 'LinkedIn Insight Tag y Google Ads — miden el rendimiento de las campañas B2B y la atribución de conversiones. Establece li_sugr, UserMatchHistory, _gcl_au; los datos se procesan en EE. UU.',
      catExternal: 'Recursos externos',
      catExternalDesc: 'Google Fonts — carga Golos Text e Inter desde la CDN de Google, que recibe tu IP. Si está desactivado, las fuentes se sirven desde nuestro servidor.'
    }
  };

  function currentLang() {
    var l;
    try { l = localStorage.getItem('aita-lang'); } catch (e) { l = null; }
    if (!l) {
      var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
      l = SUPPORTED_LANGS.indexOf(nav) !== -1 ? nav : 'en';
    }
    return SUPPORTED_LANGS.indexOf(l) !== -1 ? l : 'en';
  }
  function t(key) { return (I18N[currentLang()] || I18N.en)[key] || I18N.en[key] || key; }

  // ---- Storage ------------------------------------------------------------
  function readConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function writeConsent(categories, gpc) {
    var record = {
      v: SCHEMA_VERSION,
      policyVersion: POLICY_VERSION,
      categories: {
        necessary: true,
        analytics: !!categories.analytics,
        marketing: !!categories.marketing,
        external: !!categories.external
      },
      ts: new Date().toISOString(),
      gpc: !!gpc
    };
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(record)); } catch (e) {}
    mirrorCookie(record);
    appendLog(record);
    maybeBeacon(record);
    return record;
  }

  // Mirror the record to a cookie so a future server-side endpoint can read the proof.
  // NOTE: Chrome caps cookie lifetime at 400 days, so we refresh this on every visit
  // (see init) to keep the mirror alive. The authoritative 24-month record + audit log
  // live in localStorage, which is not subject to that cap.
  function mirrorCookie(record) {
    try {
      var secure = location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = CONSENT_COOKIE + '=' + encodeURIComponent(JSON.stringify(record)) +
        '; path=/; Max-Age=' + (MAX_AGE_DAYS * 86400) + '; SameSite=Lax' + secure;
    } catch (e) {}
  }

  // Append-only audit log, pruned to the 24-month retention window.
  function appendLog(record) {
    try {
      var log = JSON.parse(localStorage.getItem(CONSENT_LOG_KEY) || '[]');
      log.push({ categories: record.categories, ts: record.ts, policyVersion: record.policyVersion, gpc: record.gpc });
      var cutoff = Date.now() - MAX_AGE_DAYS * 86400 * 1000;
      log = log.filter(function (e) { return new Date(e.ts).getTime() >= cutoff; });
      localStorage.setItem(CONSENT_LOG_KEY, JSON.stringify(log));
    } catch (e) {}
  }

  // Server-side evidentiary log (off until the endpoint + datastore exist). Documented stub.
  function maybeBeacon(record) {
    if (!BEACON_ENABLED) return;
    try {
      var body = JSON.stringify(record);
      if (navigator.sendBeacon) navigator.sendBeacon(BEACON_URL, body);
      else fetch(BEACON_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body, keepalive: true });
    } catch (e) {}
  }

  function isStale(record) {
    if (!record) return true;
    if (record.policyVersion !== POLICY_VERSION) return true; // inventory changed → renew
    var age = Date.now() - new Date(record.ts).getTime();
    return age > MAX_AGE_DAYS * 86400 * 1000;                  // older than 24 months → renew
  }

  // ---- Effects (idempotent) ----------------------------------------------
  var clarityLoaded = false;
  function loadClarity() {
    if (clarityLoaded || window.clarity) return;
    clarityLoaded = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_TAG);
  }

  function clearCookies(names) {
    var domains = ['', '; domain=.' + location.hostname.replace(/^www\./, '')];
    names.forEach(function (name) {
      domains.forEach(function (d) {
        document.cookie = name + '=; path=/; Max-Age=0' + d;
      });
    });
  }

  // Marketing pixels. Both tags are opt-in AND opt-in-configured: without an id nothing is injected,
  // so the site ships consent-ready while no campaign is running.
  var marketingLoaded = false;
  function loadMarketing() {
    if (marketingLoaded) return;
    if (!LINKEDIN_PARTNER_ID && !GADS_ID) return;
    marketingLoaded = true;
    if (LINKEDIN_PARTNER_ID) loadLinkedIn();
    if (GADS_ID) loadGoogleAds();
  }

  function loadLinkedIn() {
    window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);
    addScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }

  function loadGoogleAds() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    addScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GADS_ID));
    window.gtag('js', new Date());
    window.gtag('config', GADS_ID);
  }

  function addScript(src) {
    if (document.querySelector('script[data-cc-tag][src="' + src + '"]')) return;
    var s = document.createElement('script');
    s.async = true; s.src = src; s.setAttribute('data-cc-tag', '');
    document.head.appendChild(s);
  }

  var gfontsLoaded = false;
  function loadGoogleFonts() {
    if (gfontsLoaded || !GFONTS.length) return;
    gfontsLoaded = true;
    addLink('preconnect', 'https://fonts.googleapis.com');
    addLink('preconnect', 'https://fonts.gstatic.com', true);
    GFONTS.forEach(function (href) { addLink('stylesheet', href); });
  }
  function addLink(rel, href, crossorigin) {
    if (document.querySelector('link[data-cc-font][href="' + href + '"]')) return;
    var link = document.createElement('link');
    link.rel = rel; link.href = href; link.setAttribute('data-cc-font', '');
    if (crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }

  // Apply the granted categories. `priorActive` lets us detect a withdrawal that needs a reload.
  function applyConsent(categories, priorActive) {
    if (categories.analytics) {
      loadClarity();
    } else if (priorActive && priorActive.analytics) {
      // Withdrawn after being active this session → purge cookies and reload for a clean state.
      clearCookies(CLARITY_COOKIES);
      reloadSoon();
      return;
    }
    if (categories.marketing) {
      loadMarketing();
    } else if (priorActive && priorActive.marketing) {
      clearCookies(MARKETING_COOKIES);
      reloadSoon();
      return;
    }
    if (categories.external) {
      loadGoogleFonts();
    } else if (priorActive && priorActive.external && gfontsLoaded) {
      reloadSoon();
      return;
    }
  }
  var reloadScheduled = false;
  function reloadSoon() {
    if (reloadScheduled) return;
    reloadScheduled = true;
    setTimeout(function () { location.reload(); }, 150);
  }

  // ---- DOM ----------------------------------------------------------------
  var bannerEl = null, modalEl = null, lastFocus = null;

  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') el.textContent = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else if (k.indexOf('data-') === 0 || k === 'role' || k.indexOf('aria-') === 0) el.setAttribute(k, attrs[k]);
      else el[k] = attrs[k];
    });
    (children || []).forEach(function (c) { if (c) el.appendChild(c); });
    return el;
  }

  function buildBanner() {
    var title = h('h2', { className: 'cc-banner__title', id: 'cc-banner-title', text: t('title') });
    var desc = h('p', { className: 'cc-banner__desc', id: 'cc-banner-desc' });
    desc.appendChild(document.createTextNode(t('desc') + ' '));
    desc.appendChild(h('a', { className: 'cc-link', href: POLICY_URL, text: t('policy') }));

    var actions = h('div', { className: 'cc-banner__actions' }, [
      h('button', { className: 'cc-btn cc-btn--accept', type: 'button', text: t('accept'), 'data-cc-action': 'accept' }),
      h('button', { className: 'cc-btn cc-btn--reject', type: 'button', text: t('reject'), 'data-cc-action': 'reject' }),
      h('button', { className: 'cc-btn cc-btn--configure', type: 'button', text: t('configure'), 'data-cc-action': 'configure' })
    ]);

    var inner = h('div', { className: 'cc-banner__inner' }, [
      h('div', { className: 'cc-banner__text' }, [title, desc]), actions
    ]);
    var el = h('div', {
      className: 'cc-banner', role: 'dialog', 'aria-modal': 'false',
      'aria-labelledby': 'cc-banner-title', 'aria-describedby': 'cc-banner-desc'
    }, [inner]);
    el.addEventListener('click', onAction);
    return el;
  }

  function category(id, nameKey, descKey, checked, locked) {
    var head = h('div', { className: 'cc-cat__head' }, [
      h('span', { className: 'cc-cat__name', text: t(nameKey) })
    ]);
    if (locked) {
      head.appendChild(h('span', { className: 'cc-cat__always', text: t('alwaysOn') }));
    } else {
      var input = h('input', { type: 'checkbox', 'data-cc-cat': id });
      input.checked = !!checked;
      head.appendChild(h('label', { className: 'cc-switch', 'aria-label': t(nameKey) }, [
        input, h('span', { className: 'cc-switch__slider' })
      ]));
    }
    return h('li', { className: 'cc-cat' }, [
      head, h('p', { className: 'cc-cat__desc', text: t(descKey) })
    ]);
  }

  function buildModal(prefs) {
    var cats = h('ul', { className: 'cc-cats' }, [
      category('necessary', 'catNecessary', 'catNecessaryDesc', true, true),
      category('analytics', 'catAnalytics', 'catAnalyticsDesc', prefs.analytics, false),
      category('marketing', 'catMarketing', 'catMarketingDesc', prefs.marketing, false),
      category('external', 'catExternal', 'catExternalDesc', prefs.external, false)
    ]);
    var panel = h('div', { className: 'cc-modal__panel', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'cc-modal-title' }, [
      h('button', { className: 'cc-modal__close', type: 'button', 'aria-label': t('close'), html: '&times;', 'data-cc-action': 'close' }),
      h('h2', { className: 'cc-modal__title', id: 'cc-modal-title', text: t('prefsTitle') }),
      h('p', { className: 'cc-modal__desc', text: t('prefsDesc') }),
      cats,
      h('div', { className: 'cc-modal__actions' }, [
        h('button', { className: 'cc-btn cc-btn--accept', type: 'button', text: t('accept'), 'data-cc-action': 'accept' }),
        h('button', { className: 'cc-btn cc-btn--reject', type: 'button', text: t('reject'), 'data-cc-action': 'reject' }),
        h('button', { className: 'cc-btn cc-btn--save', type: 'button', text: t('save'), 'data-cc-action': 'save' })
      ])
    ]);
    var el = h('div', { className: 'cc-modal', hidden: true }, [
      h('div', { className: 'cc-modal__backdrop', 'data-cc-action': 'close' }), panel
    ]);
    el.addEventListener('click', onAction);
    el.addEventListener('keydown', onModalKeydown);
    return el;
  }

  // ---- Behaviour ----------------------------------------------------------
  function showBanner() {
    if (bannerEl) return;
    bannerEl = buildBanner();
    document.body.appendChild(bannerEl);
    // reveal on next frame for the CSS transition
    requestAnimationFrame(function () { bannerEl.classList.add('cc-banner--in'); });
  }
  function hideBanner() {
    if (!bannerEl) return;
    var el = bannerEl; bannerEl = null;
    el.classList.remove('cc-banner--in');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
  }

  function openPreferences() {
    var record = readConsent();
    var prefs = record ? record.categories : { analytics: false, marketing: false, external: false };
    if (modalEl && modalEl.parentNode) modalEl.parentNode.removeChild(modalEl);
    modalEl = buildModal(prefs);
    document.body.appendChild(modalEl);
    lastFocus = document.activeElement;
    modalEl.hidden = false;
    requestAnimationFrame(function () { modalEl.classList.add('cc-modal--in'); });
    document.body.style.overflow = 'hidden';
    focusFirst(modalEl);
  }
  function closeModal() {
    if (!modalEl) return;
    var el = modalEl; modalEl = null;
    el.classList.remove('cc-modal--in');
    document.body.style.overflow = '';
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 250);
    if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
  }

  function decide(categories, gpc) {
    var prior = readConsent();
    var priorActive = prior && !isStale(prior) ? prior.categories : null;
    writeConsent(categories, gpc);
    applyConsent({
      analytics: !!categories.analytics,
      marketing: !!categories.marketing,
      external: !!categories.external
    }, priorActive);
    hideBanner();
    closeModal();
  }

  function acceptAll(gpc) { decide({ analytics: true, marketing: true, external: true }, gpc); }
  function rejectAll(gpc) { decide({ analytics: false, marketing: false, external: false }, gpc); }
  function savePreferences() {
    var get = function (id) {
      var box = modalEl && modalEl.querySelector('[data-cc-cat="' + id + '"]');
      return !!(box && box.checked);
    };
    decide({ analytics: get('analytics'), marketing: get('marketing'), external: get('external') }, false);
  }

  function onAction(e) {
    var btn = e.target.closest('[data-cc-action]');
    if (!btn) return;
    var action = btn.getAttribute('data-cc-action');
    if (action === 'accept') acceptAll(false);
    else if (action === 'reject') rejectAll(false);
    else if (action === 'configure') { hideBanner(); openPreferences(); }
    else if (action === 'save') savePreferences();
    else if (action === 'close') closeModal();
  }

  // Focus trap + Esc for the modal (banner is intentionally not Esc-dismissible).
  function onModalKeydown(e) {
    if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
    if (e.key !== 'Tab' || !modalEl) return;
    var f = modalEl.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function focusFirst(root) {
    var el = root.querySelector('button, [href], input');
    if (el) try { el.focus(); } catch (e) {}
  }

  // ---- Footer "Cookie preferences" link wiring ----------------------------
  function wireFooterLinks() {
    document.querySelectorAll('[data-cc-open]').forEach(function (link) {
      if (!link.textContent.trim()) link.textContent = t('footerLink');
      link.addEventListener('click', function (e) { e.preventDefault(); openPreferences(); });
    });
  }

  // ---- Live language switch (reuse the landing's existing event) ----------
  function onLangChange() {
    var hadBanner = !!bannerEl, hadModal = !!modalEl;
    if (hadBanner) { hideBanner(); showBanner(); }
    if (hadModal) { closeModal(); openPreferences(); }
    document.querySelectorAll('[data-cc-open]').forEach(function (link) { link.textContent = t('footerLink'); });
  }

  // ---- Init ---------------------------------------------------------------
  function init() {
    wireFooterLinks();
    document.addEventListener('aita:langchange', onLangChange);

    var record = readConsent();

    // GPC: an explicit browser signal → treat as Reject all, record it, suppress the banner.
    if (navigator.globalPrivacyControl === true && isStale(record)) {
      rejectAll(true);
      return;
    }

    if (isStale(record)) {
      showBanner();           // first visit / expired / inventory changed
    } else {
      mirrorCookie(record);   // refresh the server-readable mirror (Chrome 400-day cap)
      applyConsent(record.categories, null); // returning visitor → honour stored choice silently
    }
  }

  // ---- Public API ---------------------------------------------------------
  window.AitaConsent = {
    openPreferences: openPreferences,
    acceptAll: function () { acceptAll(false); },
    rejectAll: function () { rejectAll(false); },
    getConsent: readConsent,
    reset: function () {
      try { localStorage.removeItem(CONSENT_KEY); } catch (e) {}
      try { document.cookie = CONSENT_COOKIE + '=; path=/; Max-Age=0'; } catch (e) {}
      location.reload();
    },
    POLICY_VERSION: POLICY_VERSION
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
