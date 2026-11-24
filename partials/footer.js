/* Aita site footer — one file for every page (structure from the Startups page; labels in six languages via data-lang).
   Usage: <script src="partials/footer.js" data-base="uk/" data-ext=".html"></script> at the end of <body>.
   data-base — prefix to the uk/ pages (default: live site https://www.aita.world/uk/); data-ext — ".html" for local copies. */
(function () {
  var me = document.currentScript, B = me.getAttribute('data-base');
  if (B === null) B = 'https://www.aita.world/uk/';
  var X = me.getAttribute('data-ext') || '';
  var L = function (p) { return B + p + X; };
  var D = function (p) { return B + p + (X ? '/index' + X : ''); };   // folder pages: legal/privacy/ → legal/privacy/index.html
  var CUR = me.getAttribute('data-lang') || 'uk';
  var FT = {
    uk: {sol:'Наші рішення',mod:'Модулі',price:'Ціни',part:'Партнерство',blog:'Блог',about:'Про нас',inv:'Інвестори',contact:'Написати нам',legal:'Юридичне',priv:'Конфіденційність',cook:'Файли cookie',terms:'Умови використання',del:'Видалення акаунта',sec:'Безпека',cset:'Налаштування cookie',dev:'в розробці'},
    en: {sol:'Our solutions',mod:'Modules',price:'Pricing',part:'Partnership',blog:'Blog',about:'About us',inv:'Investors',contact:'Contact us',legal:'Legal notice',priv:'Privacy',cook:'Cookies',terms:'Terms of use',del:'Delete account',sec:'Security',cset:'Cookie settings',dev:'in development'},
    es: {sol:'Nuestras soluciones',mod:'Módulos',price:'Precios',part:'Alianzas',blog:'Blog',about:'Sobre nosotros',inv:'Inversores',contact:'Escríbenos',legal:'Legal',priv:'Privacidad',cook:'Cookies',terms:'Condiciones de uso',del:'Eliminar cuenta',sec:'Seguridad',cset:'Configurar cookies',dev:'en desarrollo'},
    pl: {sol:'Nasze rozwiązania',mod:'Moduły',price:'Ceny',part:'Partnerstwo',blog:'Blog',about:'O nas',inv:'Inwestorzy',contact:'Napisz do nas',legal:'Prawne',priv:'Prywatność',cook:'Pliki cookie',terms:'Warunki korzystania',del:'Usunięcie konta',sec:'Bezpieczeństwo',cset:'Ustawienia cookie',dev:'w budowie'},
    hu: {sol:'Megoldásaink',mod:'Modulok',price:'Árak',part:'Partnerség',blog:'Blog',about:'Rólunk',inv:'Befektetők',contact:'Írj nekünk',legal:'Jogi információk',priv:'Adatvédelem',cook:'Sütik',terms:'Felhasználási feltételek',del:'Fiók törlése',sec:'Biztonság',cset:'Süti-beállítások',dev:'készül'},
    de: {sol:'Unsere Lösungen',mod:'Module',price:'Preise',part:'Partnerschaft',blog:'Blog',about:'Über uns',inv:'Investoren',contact:'Schreib uns',legal:'Rechtliches',priv:'Datenschutz',cook:'Cookies',terms:'Nutzungsbedingungen',del:'Konto löschen',sec:'Sicherheit',cset:'Cookie-Einstellungen',dev:'in Arbeit'}
  };
  var F = FT[CUR] || FT.en;
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
  var opts = LANGS.map(function (l) { var h = me.getAttribute('data-' + l[0]); var on = h !== null || l[0] === CUR;
    return '<option value="' + (h || '') + '" lang="' + l[0] + '"' + (l[0] === CUR ? ' selected' : (on ? '' : ' disabled')) + '>' + l[1] + (on ? '' : ' — ' + F.dev) + '</option>'; }).join('');
  var CURN = LANGS.filter(function (l) { return l[0] === CUR; })[0][1];
  var HTML = '<footer class="af"><div class="af-w"><b>Aita</b>'
  + off(F.sol) + '<a href="' + L('modules') + '">' + F.mod + '</a><a href="' + L('pricing') + '">' + F.price + '</a>'
  + off(F.part) + '<a href="' + L('blog') + '">' + F.blog + '</a><a href="' + L('about') + '">' + F.about + '</a>'
  + off(F.inv) + '<a href="mailto:info@aita.world">' + F.contact + '</a>'
  + '<i class="af-br" aria-hidden="true"></i>'
  + '<a href="' + D('legal/aviso-legal') + '">' + F.legal + '</a><a href="' + D('legal/privacy') + '">' + F.priv + '</a><a href="' + D('legal/cookies') + '">' + F.cook + '</a>'
  + '<a href="' + D('legal/terms') + '">' + F.terms + '</a><a href="' + D('legal/delete-account') + '">' + F.del + '</a><a href="' + D('legal/ens') + '">ENS</a><a href="' + D('security') + '">' + F.sec + '</a>'
  + '<a href="#" data-cookie-prefs>' + F.cset + '</a>'
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
