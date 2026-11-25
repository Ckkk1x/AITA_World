/* Aita site header — one file for every page.
   Usage: <script src="partials/header.js" data-base="https://www.aita.world/uk/" data-hero></script>
   placed where the header should appear (top of <body>).
   data-base  — prefix for links (default: live site /uk/); use "" or "../" for cloned local pages.
   data-hero  — header is transparent over a dark .hero and turns white after half of it scrolls away;
                without it the header is always white. */
(function () {
  var me = document.currentScript, B = me.getAttribute('data-base');
  if (B === null) B = 'https://www.aita.world/uk/';
  var hero = me.hasAttribute('data-hero');
  var X = me.getAttribute('data-ext') || '';   // ".html" for local copies without clean URLs
  // logo → the new landing at the site root (one level above uk/)
  var HOME = me.getAttribute('data-home') || (B + '../' + (X ? 'index' + X : ''));
  var LG = me.getAttribute('data-lang') || 'uk';
  var TT = {
    en: {sol:'Our solutions',en:'Energy',st:'Startups',oth:'Other industries',soon:'soon',mod:'Modules',res:'Resources',part:'Partnership',dev:'in development',blog:'Blog',guides:'Guides',news:'What’s new',about:'About us',dl:'Download',price:'Pricing',cta:'Sign up',menu:'Menu',main:'Main menu',home:'Aita — home',plat:'Platform'},
    uk: {sol:'Наші рішення',en:'Енергетика',st:'Стартапи',oth:'Інші галузі',soon:'згодом',mod:'Модулі',res:'Ресурси',part:'Партнерство',dev:'в розробці',blog:'Блог',guides:'Гайди',news:'Що нового',about:'Про нас',dl:'Завантажити',price:'Ціни',cta:'Зареєструватися',menu:'Меню',main:'Головне меню',home:'Aita — на головну',plat:'Платформа'},
    es: {sol:'Nuestras soluciones',en:'Energía',st:'Startups',oth:'Otros sectores',soon:'pronto',mod:'Módulos',res:'Recursos',part:'Alianzas',dev:'en desarrollo',blog:'Blog',guides:'Guías',news:'Novedades',about:'Sobre nosotros',dl:'Descargar',price:'Precios',cta:'Regístrate',menu:'Menú',main:'Menú principal',home:'Aita — inicio',plat:'Plataforma'},
    pl: {sol:'Nasze rozwiązania',en:'Energetyka',st:'Startupy',oth:'Inne branże',soon:'wkrótce',mod:'Moduły',res:'Zasoby',part:'Partnerstwo',dev:'w budowie',blog:'Blog',guides:'Poradniki',news:'Co nowego',about:'O nas',dl:'Pobierz',price:'Ceny',cta:'Zarejestruj się',menu:'Menu',main:'Menu główne',home:'Aita — strona główna',plat:'Platforma'},
    hu: {sol:'Megoldásaink',en:'Energetika',st:'Startupok',oth:'Más iparágak',soon:'hamarosan',mod:'Modulok',res:'Források',part:'Partnerség',dev:'készül',blog:'Blog',guides:'Útmutatók',news:'Újdonságok',about:'Rólunk',dl:'Letöltés',price:'Árak',cta:'Regisztráció',menu:'Menü',main:'Főmenü',home:'Aita — kezdőlap',plat:'Platform'},
    de: {sol:'Unsere Lösungen',en:'Energie',st:'Startups',oth:'Weitere Branchen',soon:'bald',mod:'Module',res:'Ressourcen',part:'Partnerschaft',dev:'in Arbeit',blog:'Blog',guides:'Guides',news:'Neuigkeiten',about:'Über uns',dl:'Download',price:'Preise',cta:'Registrieren',menu:'Menü',main:'Hauptmenü',home:'Aita — Startseite',plat:'Plattform'}
  };
  var T = TT[LG] || TT.uk, EN = LG !== 'uk';
  // language switch: data-<l> on this tag wins; otherwise /<cur>/page → /<l>/page, landing: / ↔ /<l>/energy
  var LANGS = [['uk','UA','Українська'],['en','EN','English'],['es','ES','Español'],['pl','PL','Polski'],['hu','HU','Magyar'],['de','DE','Deutsch']];
  var LNAME = {uk:'Мова',en:'Language',es:'Idioma',pl:'Język',hu:'Nyelv',de:'Sprache'}[LG] || 'Мова';
  var lurl = function (l) {
    var a = me.getAttribute('data-' + l); if (a !== null) return a;
    if (X) return null;
    var p = location.pathname, m = p.match(/^\/(uk|en|es|pl|hu|de)(\/.*)?$/);
    if (p === '/' || p === '/index.html' || (m && /^\/energy(\.html)?$/.test(m[2] || ''))) return l === 'uk' ? '/' : '/' + l + '/energy';
    if (m) return '/' + l + (m[2] || '/');
    return null;
  };
  var CURL = LANGS.filter(function (l) { return l[0] === LG; })[0] || LANGS[0];
  var langItems = LANGS.map(function (l) { var u = l[0] === LG ? null : lurl(l[0]);
    return '<a' + (l[0] === LG ? ' class="ah-cur" aria-current="true"' : (u ? ' href="' + u + '"' : ' class="off"')) + ' lang="' + l[0] + '" hreflang="' + l[0] + '">' + l[2] + '</a>'; }).join('');
  var GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>';
  // «Наші рішення → Енергетика»: the energy solution page (not the landing): /<l>/energy-solution
  var ENH = X ? HOME : '/' + LG + '/energy-solution';
  var L = function (p) { return B + (p ? p + X : (X ? 'index' + X : '')); };
  var MARK = '<svg viewBox="0.024 0.017 91.449 82.571" aria-hidden="true"><path fill="currentColor" d="M34.896,8.778C35.933,3.677 40.434,0.017 45.639,0.017C50.844,0.016 55.345,3.676 56.371,8.779C60.448,28.946 70.592,47.364 85.450,61.528C89.522,63.609 91.881,67.981 91.415,72.530C90.950,77.079 87.754,80.883 83.353,82.126C78.953,83.369 74.239,81.799 71.462,78.166C62.659,70.929 52.739,65.292 41.976,61.426C40.196,60.763 38.875,59.235 38.567,57.362C38.258,55.488 39.004,53.597 40.507,52.437C42.011,51.278 44.028,51.042 45.763,51.812C52.007,54.566 58.458,56.680 65.062,58.140C60.642,46.435 54.059,35.645 45.639,26.345C33.568,39.678 25.282,56.076 21.716,73.833C20.751,78.493 16.885,82.006 12.154,82.523C7.424,83.040 2.901,80.441 0.967,76.093C-0.967,71.745 0.142,66.657 3.682,63.478C19.731,49.106 30.642,29.896 34.896,8.778Z"/></svg>';
  var CSS = ''
  + '.ah{position:fixed;left:0;right:0;top:0;z-index:50;color:#111;background:#fff;border-bottom:1px solid #e6e6e6;transition:background-color .2s,border-color .2s,color .2s;font-family:"Golos Text",-apple-system,"Segoe UI",sans-serif}'
  + '.ah-sp{height:60px}'
  + '.ah .ah-w{max-width:calc(1280px + 160px);margin:0 auto;padding:0 80px;height:60px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center}'
  + '.ah-logo{display:flex;align-items:center;color:inherit;text-decoration:none}.ah-logo svg{height:20px;width:auto;display:block}'
  + '.ah-links{display:flex;gap:32px;align-items:center;font-size:14px;line-height:20px}'
  + '.ah-links>*{color:#5c5c5c;text-decoration:none;position:relative;cursor:pointer;transition:color .15s;background:none;border:0;padding:0;font:inherit}'
  + '.ah-links>*:hover,.ah-dd.on{color:#111}'
  + '.ah-dd:after{content:"";display:inline-block;width:14px;height:14px;margin-left:4px;vertical-align:-2px;background:currentColor;-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000\' stroke-width=\'2.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000\' stroke-width=\'2.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E") center/contain no-repeat;transition:transform .2s}'
  + '.ah-dd.on:after{transform:rotate(180deg)}'
  + '.ah-pop{position:absolute;left:50%;top:calc(100% + 18px);transform:translate(-50%,6px);padding:12px;border-radius:16px;background:#fff;box-shadow:0 18px 50px rgba(0,0,0,.12),0 0 0 1px rgba(0,0,0,.05);opacity:0;pointer-events:none;transition:opacity .15s,transform .15s;cursor:default;z-index:60;white-space:nowrap}'
  + '.ah-pop:before{content:"";position:absolute;left:0;right:0;top:-20px;height:20px}'
  + '.ah-dd.on .ah-pop{opacity:1;transform:translate(-50%,0);pointer-events:auto}'
  + '.ah-pop.two{display:grid;grid-template-columns:max-content max-content;gap:4px 8px}'
  + '.ah-pop a{display:block;white-space:nowrap;padding:5px 10px;border-radius:8px;font-size:17px;line-height:24px;font-weight:500;color:#111;text-decoration:none}'
  + '.ah-pop a:hover{background:#f4f4f4}.ah-pop a.off{opacity:.45;pointer-events:none}'
  + '.ah-tg{margin-left:8px;font-size:11px;font-weight:500;padding:2px 8px;border-radius:999px;background:#f2f2f2;color:#8a8a8a;vertical-align:2px}'
  + '.ah-r{justify-self:end;display:flex;align-items:center;gap:20px}'
  + '.ah-lang{display:inline-flex;align-items:center;gap:4px;position:relative;cursor:pointer;font-size:14px;line-height:20px;color:#5c5c5c;transition:color .15s}'
  + '.ah-lang:hover,.ah-lang.on{color:#111}.ah-lang>svg{width:16px;height:16px;display:block}'
  + '.ah-lang:after{margin-left:0!important}'
  + '.ah-lang .ah-pop{left:auto;right:-8px;transform:translate(0,6px);padding:6px;border-radius:12px}.ah-lang.on .ah-pop{transform:translate(0,0)}'
  + '.ah-lang .ah-pop a{padding:4px 10px;font-size:14px;line-height:20px;border-radius:6px}'
  + '.ah-pop a.ah-cur{color:#111;background:#f4f4f4;cursor:default}'
  + '.ah.ah-over .ah-lang{color:rgba(255,255,255,.85)}.ah.ah-over .ah-lang:hover,.ah.ah-over .ah-lang.on{color:#fff}'
  + '.ah.open .ah-lang{color:#5c5c5c}'
  + '.ah-m .ah-ml{display:flex;flex-wrap:wrap;gap:8px;padding-top:6px}.ah-m .ah-ml a{min-height:40px;padding:0 14px;border:1px solid #e6e6e6;border-radius:999px;font-size:16px}.ah-m .ah-ml a.ah-cur{background:#111;color:#fff;border-color:#111}'
  + '.ah-lb{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px 12px;padding:10px 52px 10px 20px;position:relative;background:#f5f5f7;border-bottom:1px solid #e6e6e6;font-size:14px;line-height:1.4;color:#1d1d1f}'
  + '.ah-lb-c{display:flex;align-items:center;gap:8px}'
  + '.ah-lb-s{position:relative;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px;border:1px solid #d2d2d7;border-radius:999px;background:#fff;font-weight:500;white-space:nowrap}'
  + '.ah-lb-s select{position:absolute;inset:0;width:100%;opacity:0;cursor:pointer;font-size:16px}'
  + '.ah-lb-s i{width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:translateY(-2px) rotate(45deg)}'
  + '.ah-lb-s:focus-within{outline:2px solid #0060ff;outline-offset:2px}'
  + '.ah-lb a{display:inline-flex;align-items:center;height:32px;padding:0 14px;border-radius:999px;background:#111;color:#fff;text-decoration:none;font-weight:500;white-space:nowrap}'
  + '.ah-lb button{all:unset;box-sizing:border-box;position:absolute;right:8px;top:50%;transform:translateY(-50%);width:36px;height:36px;display:grid;place-items:center;border-radius:50%;color:#6e6e73;cursor:pointer}'
  + '.ah-lb button:hover{background:rgba(0,0,0,.06);color:#1d1d1f}.ah-lb button svg{display:block;width:14px;height:14px}'
  + '@media(max-width:760px){.ah-lb{justify-content:flex-start;padding:10px 52px 12px 20px}.ah-lb-t{flex-basis:100%}.ah-lb-c{flex:1;gap:8px}.ah-lb-s{flex:1;justify-content:space-between;height:44px;padding:0 16px}.ah-lb a{height:44px;padding:0 18px}.ah-lb button{width:44px;height:44px;top:10px;transform:none;right:4px}}'
  + '.ah-cta{display:inline-flex;align-items:center;height:36px;padding:0 14px;border-radius:8px;background:#111;color:#fff;font-size:14px;font-weight:500;text-decoration:none;transition:background-color .15s,color .15s}'
  + '.ah-cta:hover{background:#333}'
  + '.ah a:focus-visible,.ah-links>*:focus-visible{outline:2px solid #0060ff;outline-offset:2px}'
  /* transparent over the hero */
  + '.ah.ah-over{background:transparent;border-bottom-color:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;color:#fff}'
  + '.ah.ah-over .ah-links>*{color:rgba(255,255,255,.85)}.ah.ah-over .ah-links>*:hover,.ah.ah-over .ah-dd.on{color:#fff}'
  + '.ah.ah-over .ah-cta{background:#fff;color:#111}.ah.ah-over .ah-cta:hover{background:#ececec}'
  + '.ah.ah-init,.ah.ah-init *{transition:none!important}'
  + '.ah-bg{display:none;appearance:none;border:0;background:none;width:44px;height:44px;margin-left:8px;cursor:pointer;color:inherit;align-items:center;justify-content:center}'
  + '.ah-bg i{display:block;width:20px;height:1.5px;background:currentColor;position:relative;transition:transform .2s}.ah-bg i:before,.ah-bg i:after{content:"";position:absolute;left:0;width:20px;height:1.5px;background:currentColor;transition:transform .2s,top .2s}.ah-bg i:before{top:-6px}.ah-bg i:after{top:6px}'
  + '.ah.open .ah-bg i{background:transparent}.ah.open .ah-bg i:before{top:0;transform:rotate(45deg)}.ah.open .ah-bg i:after{top:0;transform:rotate(-45deg)}'
  + '.ah-m{display:none;position:absolute;left:0;right:0;top:60px;height:calc(100vh - 60px);height:calc(100dvh - 60px);background:#fff;color:#111;padding:16px 20px 32px;overflow:auto}'
  + '.ah.open .ah-m{display:block}.ah.open{background:#fff;color:#111;border-bottom-color:#e6e6e6}.ah.open .ah-cta{background:#111;color:#fff}'
  + '.ah-m b{display:block;margin:20px 0 6px;font-size:12px;font-weight:500;color:#8a8a8a}'
  + '.ah-m a{display:flex;align-items:center;min-height:48px;font-size:20px;line-height:28px;font-weight:500;color:#111;text-decoration:none;border-bottom:1px solid #eee}.ah-m a.off{color:#aaa;pointer-events:none}'
  + '@media (max-width:1024px){.ah .ah-w{padding:0 40px;grid-template-columns:1fr auto auto}.ah-links{display:none}.ah-bg{display:inline-flex}}'
  + '@media (max-width:760px){.ah .ah-w{padding:0 20px}.ah-r>.ah-lang{display:none}}';
  // start in the right state (no white flash over the hero on reload) and without transitions until the first frame
  var startOver = hero && (window.scrollY || 0) < (window.innerHeight || 800) / 2;
  var HTML = '<header class="ah ah-init' + (startOver ? ' ah-over' : '') + '" role="banner"><div class="ah-w">'
  + '<a class="ah-logo" href="' + (hero ? '#top' : HOME) + '" aria-label="'+T.home+'">' + MARK + '</a>'
  + '<nav class="ah-links" aria-label="'+T.main+'">'
  +   '<span class="ah-dd" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">'+T.sol+'<span class="ah-pop">'
  +     '<a href="' + ENH + '">'+T.en+'</a><a href="' + L('') + '">'+T.st+'</a><a class="off">'+T.oth+'<span class="ah-tg">'+T.soon+'</span></a></span></span>'
  +   '<a href="' + L('modules') + '">'+T.mod+'</a>'
  +   '<span class="ah-dd" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">'+T.res+'<span class="ah-pop two">'
  +     '<a class="off">'+T.part+'<span class="ah-tg">'+T.dev+'</span></a><a href="' + L('blog') + '">'+T.blog+'</a>'
  +     '<a class="off">'+T.guides+'<span class="ah-tg">'+T.dev+'</span></a><a class="off">'+T.news+'<span class="ah-tg">'+T.dev+'</span></a>'
  +     '<a href="' + L('about') + '">'+T.about+'</a><a href="' + L('download') + '">'+T.dl+'</a></span></span>'
  +   '<a href="' + L('pricing') + '">'+T.price+'</a>'
  + '</nav>'
  + '<div class="ah-r">'
  +   '<span class="ah-dd ah-lang" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="'+LNAME+': '+CURL[2]+'">' + GLOBE + CURL[1] + '<span class="ah-pop">' + langItems + '</span></span>'
  +   '<a class="ah-cta" href="https://app.aita.world/auth/register" data-signup>'+T.cta+'</a>'
  + '</div>'
  + '<button class="ah-bg" type="button" aria-label="'+T.menu+'" aria-expanded="false"><i></i></button>'
  + '</div><div class="ah-m" role="dialog" aria-label="'+T.menu+'">'
  +   '<b>'+T.sol+'</b><a href="' + ENH + '">'+T.en+'</a><a href="' + L('') + '">'+T.st+'</a><a class="off">'+T.oth+'<span class="ah-tg">'+T.soon+'</span></a>'
  +   '<b>'+T.plat+'</b><a href="' + L('modules') + '">'+T.mod+'</a><a href="' + L('pricing') + '">'+T.price+'</a>'
  +   '<b>'+T.res+'</b><a href="' + L('blog') + '">'+T.blog+'</a><a href="' + L('about') + '">'+T.about+'</a><a href="' + L('download') + '">'+T.dl+'</a><a class="off">'+T.part+'<span class="ah-tg">'+T.dev+'</span></a>'
  +   '<b>'+LNAME+'</b><div class="ah-ml">' + langItems + '</div>'
  + '</div></header>' + (hero ? '' : '<div class="ah-sp" aria-hidden="true"></div>');
  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  me.insertAdjacentHTML('afterend', HTML);
  var h = me.nextElementSibling;
  // dropdowns: hover with a short close delay, click, Esc, outside click
  [].forEach.call(h.querySelectorAll('.ah-dd'), function (b) {
    var p = b.querySelector('.ah-pop'), t = null, hv = 0;
    var set = function (on) { b.classList.toggle('on', on); b.setAttribute('aria-expanded', on ? 'true' : 'false'); };
    b.addEventListener('mouseenter', function () { clearTimeout(t); hv = Date.now(); set(true); });
    b.addEventListener('mouseleave', function () { clearTimeout(t); t = setTimeout(function () { set(false); }, 180); });
    b.addEventListener('click', function (e) { if (!p.contains(e.target)) set(Date.now() - hv < 600 || !b.classList.contains('on')); });
    b.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!b.classList.contains('on')); } });
    document.addEventListener('click', function (e) { if (!b.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  });
  [].forEach.call(h.querySelectorAll('a[hreflang]'), function (a) { a.addEventListener('click', function () { try { localStorage.setItem('aitaLang', a.lang); } catch (e) {} }); });
  // «view this page in …» bar: offers the browser language (ru → uk, unknown → en), unless this page's language was chosen before; lives at the top of the fixed header
  var LB = {uk:['Переглянути сторінку мовою','Перейти'],en:['View this page in','Switch'],es:['Ver esta página en','Cambiar'],pl:['Zobacz stronę w języku','Przejdź'],hu:['Oldal megtekintése:','Váltás'],de:['Seite anzeigen auf','Wechseln']};
  var killOld = function () { [].forEach.call(document.querySelectorAll('.lbar'), function (x) { x.remove(); }); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', killOld); else killOld();
  var sp = h.nextElementSibling && h.nextElementSibling.classList.contains('ah-sp') ? h.nextElementSibling : null;
  var fit = function () { if (sp) sp.style.height = h.offsetHeight + 'px'; };
  (function () {
    var sv = null; try { sv = localStorage.getItem('aitaLang'); } catch (e) {}
    if (sv === LG) return;   // the visitor already chose this page's language
    var c = String(navigator.language || (navigator.languages || [''])[0]).slice(0, 2).toLowerCase();
    if (c === 'ru') c = 'uk'; if (!LB[c]) c = 'en';
    if (c === LG || !lurl(c)) return;
    try { if (!sv && localStorage.getItem('aitaLangBar')) return; } catch (e) {}
    var b = document.createElement('div'); b.className = 'ah-lb'; b.setAttribute('role', 'region');
    b.innerHTML = '<span class="ah-lb-t"></span><span class="ah-lb-c"><label class="ah-lb-s"><span></span><i></i><select></select></label><a></a></span>'
      + '<button type="button" aria-label="Close"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 2l10 10M12 2L2 12"/></svg></button>';
    var t = b.querySelector('.ah-lb-t'), sel = b.querySelector('select'), nm = b.querySelector('.ah-lb-s span'), a = b.querySelector('a');
    var full = {}; LANGS.forEach(function (l) { full[l[0]] = l[2]; });
    [c].concat(LANGS.map(function (l) { return l[0]; }).filter(function (l) { return l !== c && l !== LG && lurl(l); })).forEach(function (l) {
      var o = document.createElement('option'); o.value = l; o.lang = l; o.textContent = full[l]; sel.appendChild(o); });
    var upd = function (l) { b.setAttribute('lang', l); t.textContent = LB[l][0]; nm.textContent = full[l]; a.textContent = LB[l][1]; a.href = lurl(l); a.hreflang = l; sel.setAttribute('aria-label', LB[l][0]); };
    upd(c); sel.onchange = function () { upd(sel.value); };
    a.onclick = function () { try { localStorage.setItem('aitaLang', sel.value); } catch (e) {} };
    var close = function () { b.remove(); h.classList.remove('ah-hasbar'); fit(); };
    b.querySelector('button').onclick = function () { try { localStorage.setItem('aitaLang', LG); } catch (e) {} close(); };
    h.insertBefore(b, h.firstChild); h.classList.add('ah-hasbar'); fit();
    addEventListener('resize', fit);
    h.querySelector('.ah-bg').addEventListener('click', close);   // the phone menu is positioned from a 60 px header
  })();
  // phone menu
  var bg = h.querySelector('.ah-bg');
  bg.addEventListener('click', function () { var o = h.classList.toggle('open'); bg.setAttribute('aria-expanded', o ? 'true' : 'false'); document.documentElement.style.overflow = o ? 'hidden' : ''; });
  h.querySelectorAll('.ah-m a').forEach(function (a) { a.addEventListener('click', function () { h.classList.remove('open'); document.documentElement.style.overflow = ''; }); });
  addEventListener('resize', function () { if (innerWidth > 1024 && h.classList.contains('open')) bg.click(); });
  // over the hero: transparent until half of the hero has scrolled away
  if (hero) {
    var f = function () { var x = document.querySelector('.hero'); if (!x) return; var r = x.getBoundingClientRect(); h.classList.toggle('ah-over', r.bottom > r.height / 2); };
    addEventListener('scroll', f, { passive: true }); addEventListener('resize', f);
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', f); else f();
    f();
  }
  requestAnimationFrame(function () { requestAnimationFrame(function () { h.classList.remove('ah-init'); }); });
})();
