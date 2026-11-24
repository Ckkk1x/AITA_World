/* Aita site footer — one file for every page (structure from the Startups page, English for now).
   Usage: <script src="partials/footer.js" data-base="uk/" data-ext=".html"></script> at the end of <body>.
   data-base — prefix to the uk/ pages (default: live site https://www.aita.world/uk/); data-ext — ".html" for local copies. */
(function () {
  var me = document.currentScript, B = me.getAttribute('data-base');
  if (B === null) B = 'https://www.aita.world/uk/';
  var X = me.getAttribute('data-ext') || '';
  var L = function (p) { return B + p + X; };
  var D = function (p) { return B + p + (X ? '/index' + X : ''); };   // folder pages: legal/privacy/ → legal/privacy/index.html
  var off = function (t) { return '<span class="af-off" aria-disabled="true">' + t + '<span class="af-tg">soon</span></span>'; };
  var CSS = ''
  + '.af{background:#fafafa;border-top:1px solid #e6e6e6;padding:40px 0 48px;font:400 14px/20px "Golos Text",-apple-system,"Segoe UI",sans-serif;color:#5c5c5c}'
  + '.af .af-w{max-width:calc(1280px + 160px);margin:0 auto;padding:0 80px;display:flex;flex-wrap:wrap;align-items:center;gap:12px 28px}'
  + '.af b{color:#111;font-size:16px;line-height:24px;font-weight:500;margin-right:12px}'
  + '.af a{color:inherit;text-decoration:none;display:inline-flex;align-items:center;min-height:40px;transition:color .15s}.af a:hover{color:#111}'
  + '.af a:focus-visible{outline:2px solid #0060ff;outline-offset:2px}'
  + '.af-off{opacity:.55;cursor:default;white-space:nowrap}'
  + '.af-tg{margin-left:6px;font-size:11px;line-height:16px;font-weight:500;padding:2px 8px;border-radius:999px;background:#ececec;color:#8a8a8a;vertical-align:1px}'
  + '.af-br{flex-basis:100%;height:1px;background:#e6e6e6;margin:8px 0}'
  + '.af-lsw{margin-left:auto;position:relative;display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 12px;border:1px solid #d9d9d9;border-radius:999px;color:#111;background:transparent}'
  + '.af-lsw:hover{border-color:currentColor}.af-lsw:focus-within{outline:2px solid #0060ff;outline-offset:2px}'
  + '.af-lsw select{position:absolute;inset:0;width:100%;opacity:0;cursor:pointer;font-size:16px}'
  + '.af-lsw i{width:8px;height:8px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:translateY(-2px) rotate(45deg);margin-left:2px}'
  + '.af-copy{color:#8a8a8a}'
  + '@media (max-width:1024px){.af .af-w{padding:0 40px}}'
  + '@media (max-width:760px){.af .af-w{padding:0 20px;gap:4px 20px}.af-lsw{margin:16px 0 0;height:44px}}';
  var LANGS = [['uk','Українська'],['en','English'],['es','Español'],['pl','Polski'],['hu','Magyar'],['de','Deutsch']];
  // languages with a page are given as data-uk / data-en; the rest are shown as «soon»
  var CUR = me.getAttribute('data-lang') || 'uk';
  var opts = LANGS.map(function (l) { var h = me.getAttribute('data-' + l[0]); var on = h !== null || l[0] === CUR;
    return '<option value="' + (h || '') + '" lang="' + l[0] + '"' + (l[0] === CUR ? ' selected' : (on ? '' : ' disabled')) + '>' + l[1] + (on ? '' : ' — soon') + '</option>'; }).join('');
  var CURN = LANGS.filter(function (l) { return l[0] === CUR; })[0][1];
  var HTML = '<footer class="af"><div class="af-w"><b>Aita</b>'
  + off('Our solutions') + '<a href="' + L('modules') + '">Modules</a><a href="' + L('pricing') + '">Pricing</a>'
  + off('Partnership') + '<a href="' + L('blog') + '">Blog</a><a href="' + L('about') + '">About us</a>'
  + off('Investors') + '<a href="mailto:info@aita.world">Contact us</a>'
  + '<i class="af-br" aria-hidden="true"></i>'
  + '<a href="' + D('legal/aviso-legal') + '">Legal notice</a><a href="' + D('legal/privacy') + '">Privacy</a><a href="' + D('legal/cookies') + '">Cookies</a>'
  + '<a href="' + D('legal/terms') + '">Terms of use</a><a href="' + D('legal/delete-account') + '">Delete account</a><a href="' + D('legal/ens') + '">ENS</a><a href="' + D('security') + '">Security</a>'
  + '<a href="#" data-cookie-prefs>Cookie settings</a>'
  + '<label class="af-lsw"><span>' + CURN + '</span><i></i><select aria-label="Language">' + opts + '</select></label>'
  + '</div></footer>';
  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  me.insertAdjacentHTML('afterend', HTML);
  var f = me.nextElementSibling;
  f.querySelector('select').addEventListener('change', function () { var v = this.value; try { localStorage.setItem('aitaLang', this.selectedOptions[0].lang); } catch (e) {} if (v && this.selectedOptions[0].lang !== CUR) location.href = v; });
  var cp = f.querySelector('[data-cookie-prefs]');
  cp.addEventListener('click', function (e) { e.preventDefault(); if (window.AitaConsent && AitaConsent.openPreferences) AitaConsent.openPreferences(); });
  if (!window.AitaConsent) setTimeout(function () { if (!window.AitaConsent) cp.remove(); }, 1500);
})();
