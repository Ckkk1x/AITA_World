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
    en: {sol:'Our solutions',st:'Startups',oth:'Other industries',soon:'soon',mod:'Modules',res:'Resources',part:'Partnership',dev:'in development',blog:'Blog',guides:'Guides',news:'What’s new',about:'About us',price:'Pricing',cta:'Get started free',menu:'Menu',main:'Main menu',home:'Aita — home',plat:'Platform'},
    uk: {sol:'Наші рішення',st:'Стартапи',oth:'Інші галузі',soon:'згодом',mod:'Модулі',res:'Ресурси',part:'Партнерство',dev:'в розробці',blog:'Блог',guides:'Гайди',news:'Що нового',about:'Про нас',price:'Ціни',cta:'Почати безкоштовно',menu:'Меню',main:'Головне меню',home:'Aita — на головну',plat:'Платформа'},
    es: {sol:'Nuestras soluciones',st:'Startups',oth:'Otros sectores',soon:'pronto',mod:'Módulos',res:'Recursos',part:'Alianzas',dev:'en desarrollo',blog:'Blog',guides:'Guías',news:'Novedades',about:'Sobre nosotros',price:'Precios',cta:'Prueba gratis',menu:'Menú',main:'Menú principal',home:'Aita — inicio',plat:'Plataforma'},
    pl: {sol:'Nasze rozwiązania',st:'Startupy',oth:'Inne branże',soon:'wkrótce',mod:'Moduły',res:'Zasoby',part:'Partnerstwo',dev:'w budowie',blog:'Blog',guides:'Poradniki',news:'Co nowego',about:'O nas',price:'Ceny',cta:'Wypróbuj za darmo',menu:'Menu',main:'Menu główne',home:'Aita — strona główna',plat:'Platforma'},
    hu: {sol:'Megoldásaink',st:'Startupok',oth:'Más iparágak',soon:'hamarosan',mod:'Modulok',res:'Források',part:'Partnerség',dev:'készül',blog:'Blog',guides:'Útmutatók',news:'Újdonságok',about:'Rólunk',price:'Árak',cta:'Próbáld ki ingyen',menu:'Menü',main:'Főmenü',home:'Aita — kezdőlap',plat:'Platform'},
    de: {sol:'Unsere Lösungen',st:'Startups',oth:'Weitere Branchen',soon:'bald',mod:'Module',res:'Ressourcen',part:'Partnerschaft',dev:'in Arbeit',blog:'Blog',guides:'Guides',news:'Neuigkeiten',about:'Über uns',price:'Preise',cta:'Kostenlos testen',menu:'Menü',main:'Hauptmenü',home:'Aita — Startseite',plat:'Plattform'}
  };
  var T = TT[LG] || TT.uk, EN = LG !== 'uk';
  var L = function (p) { return B + (p ? p + X : (X ? 'index' + X : '')); };
  var MARK = '<svg viewBox="0.024 0.017 91.449 82.571" aria-hidden="true"><path fill="currentColor" d="M34.896,8.778C35.933,3.677 40.434,0.017 45.639,0.017C50.844,0.016 55.345,3.676 56.371,8.779C60.448,28.946 70.592,47.364 85.450,61.528C89.522,63.609 91.881,67.981 91.415,72.530C90.950,77.079 87.754,80.883 83.353,82.126C78.953,83.369 74.239,81.799 71.462,78.166C62.659,70.929 52.739,65.292 41.976,61.426C40.196,60.763 38.875,59.235 38.567,57.362C38.258,55.488 39.004,53.597 40.507,52.437C42.011,51.278 44.028,51.042 45.763,51.812C52.007,54.566 58.458,56.680 65.062,58.140C60.642,46.435 54.059,35.645 45.639,26.345C33.568,39.678 25.282,56.076 21.716,73.833C20.751,78.493 16.885,82.006 12.154,82.523C7.424,83.040 2.901,80.441 0.967,76.093C-0.967,71.745 0.142,66.657 3.682,63.478C19.731,49.106 30.642,29.896 34.896,8.778Z"/></svg>';
  var CSS = ''
  + '.ah{position:fixed;left:0;right:0;top:0;z-index:50;color:#111;background:rgba(255,255,255,.94);-webkit-backdrop-filter:saturate(180%) blur(12px);backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid #e6e6e6;transition:background-color .2s,border-color .2s,color .2s;font-family:"Golos Text",-apple-system,"Segoe UI",sans-serif}'
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
  + '.ah-cta{justify-self:end;display:inline-flex;align-items:center;height:36px;padding:0 14px;border-radius:8px;background:#111;color:#fff;font-size:14px;font-weight:500;text-decoration:none;transition:background-color .15s,color .15s}'
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
  + '@media (max-width:760px){.ah .ah-w{padding:0 20px}}';
  // start in the right state (no white flash over the hero on reload) and without transitions until the first frame
  var startOver = hero && (window.scrollY || 0) < (window.innerHeight || 800) / 2;
  var HTML = '<header class="ah ah-init' + (startOver ? ' ah-over' : '') + '" role="banner"><div class="ah-w">'
  + '<a class="ah-logo" href="' + (hero ? '#top' : HOME) + '" aria-label="'+T.home+'">' + MARK + '</a>'
  + '<nav class="ah-links" aria-label="'+T.main+'">'
  +   '<span class="ah-dd" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">'+T.sol+'<span class="ah-pop">'
  +     '<a href="' + L('') + '">'+T.st+'</a><a class="off">'+T.oth+'<span class="ah-tg">'+T.soon+'</span></a></span></span>'
  +   '<a href="' + L('modules') + '">'+T.mod+'</a>'
  +   '<span class="ah-dd" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">'+T.res+'<span class="ah-pop two">'
  +     '<a class="off">'+T.part+'<span class="ah-tg">'+T.dev+'</span></a><a href="' + L('blog') + '">'+T.blog+'</a>'
  +     '<a class="off">'+T.guides+'<span class="ah-tg">'+T.dev+'</span></a><a class="off">'+T.news+'<span class="ah-tg">'+T.dev+'</span></a>'
  +     '<a href="' + L('about') + '">'+T.about+'</a></span></span>'
  +   '<a href="' + L('pricing') + '">'+T.price+'</a>'
  + '</nav>'
  + '<a class="ah-cta" href="https://app.aita.world/auth/register" data-signup>'+T.cta+'</a>'
  + '<button class="ah-bg" type="button" aria-label="'+T.menu+'" aria-expanded="false"><i></i></button>'
  + '</div><div class="ah-m" role="dialog" aria-label="'+T.menu+'">'
  +   '<b>'+T.sol+'</b><a href="' + L('') + '">'+T.st+'</a><a class="off">'+T.oth+'<span class="ah-tg">'+T.soon+'</span></a>'
  +   '<b>'+T.plat+'</b><a href="' + L('modules') + '">'+T.mod+'</a><a href="' + L('pricing') + '">'+T.price+'</a>'
  +   '<b>'+T.res+'</b><a href="' + L('blog') + '">'+T.blog+'</a><a href="' + L('about') + '">'+T.about+'</a><a class="off">'+T.part+'<span class="ah-tg">'+T.dev+'</span></a>'
  + '</div></header>' + (hero ? '' : '<div class="ah-sp" aria-hidden="true"></div>');
  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  me.insertAdjacentHTML('afterend', HTML);
  var h = me.nextElementSibling;
  // dropdowns: hover with a short close delay, click, Esc, outside click
  [].forEach.call(h.querySelectorAll('.ah-dd'), function (b) {
    var p = b.querySelector('.ah-pop'), t = null;
    var set = function (on) { b.classList.toggle('on', on); b.setAttribute('aria-expanded', on ? 'true' : 'false'); };
    b.addEventListener('mouseenter', function () { clearTimeout(t); set(true); });
    b.addEventListener('mouseleave', function () { clearTimeout(t); t = setTimeout(function () { set(false); }, 180); });
    b.addEventListener('click', function (e) { if (!p.contains(e.target)) set(!b.classList.contains('on')); });
    b.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!b.classList.contains('on')); } });
    document.addEventListener('click', function (e) { if (!b.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  });
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
