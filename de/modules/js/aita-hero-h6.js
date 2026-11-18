// Спільний файл сторінок модулів: шапка шаблону Б, контраст, значки, аватарки, шрифт. Шапка А збережена в aita-hero-h6_shapka_A.js.
(function () {
  var r = document.querySelector(".l4"); if (!r) return;
  // шапка шаблону Б: два стовпці, текст ліворуч, ролик або екран праворуч, без значка
  var st = document.createElement("style");
  st.textContent = '.h3row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:48px;align-items:start;margin:22px 0 111px}.h3row>div:first-child{padding-top:48px}.l4 .flow{margin-top:112px}'
    + '.l4 .h3row h1.mname{display:block;text-align:left;font-size:96px;line-height:100px;margin:0 0 22px}.l4 .h3row .promise{font-size:32px;line-height:36.8px;font-weight:500;letter-spacing:-.02em;color:#111}.l4 .h3row .lead{font-size:20px;line-height:28px;font-weight:400;letter-spacing:0;color:#737373}.l4 .h3row .promise,.l4 .h3row .lead{text-align:left;margin-left:0;margin-right:0}.l4 .h3row .lead{margin-top:12px;margin-bottom:0}'
    + '.l4 .h3row .film,.l4 .h3row .hero-s{margin-top:0;align-self:start}.l4 .h3row .hero-s{box-sizing:content-box;width:calc(100% - 2px);aspect-ratio:16/9;border-radius:18px}.l4 .h3row .film img{height:auto;min-height:0}'
    + '@media(max-width:900px){.l4.l4 .how{gap:20px}.h3row{grid-template-columns:minmax(0,1fr);gap:24px;margin-bottom:32px}.h3row>div:first-child{padding-top:0}.l4 .h3row h1.mname{font-size:42px;line-height:48px}.l4 .h3row .promise{font-size:24px;line-height:30px}.l4 .h3row .lead{font-size:16px;line-height:24px}}'
    /* відступи як на головній: контент 80 px від краю, між блоками 128 px */
    + '.mx-wrap{max-width:1440px;padding:0 80px;box-sizing:border-box}.l4 section{padding-top:128px}.final{margin-left:0;margin-right:0}.l4 .c3>div{min-width:0}@media(min-width:901px){.l4.l4 .how .hs:last-child{min-height:632px;padding-bottom:0}.l4.l4 .how .hl .hs:last-child{min-height:632px}}.l4 .c3 h3{white-space:normal;text-wrap:balance}'
    + '@media(max-width:1200px){.mx-wrap{padding:0 40px}}@media(max-width:760px){.mx-wrap{padding:0 16px}.l4 section{padding-top:72px}.l4 .nb a{min-width:0}.l4 .nb b{white-space:normal}}';
  document.body.appendChild(st);
  var h = r.querySelector("h1.mname"), p = r.querySelector(".promise"), l = r.querySelector(".lead"), f = r.querySelector(".film") || r.querySelector(".hero-s");
  var t = h.querySelector(".tile"); if (t) t.remove();
  var row = document.createElement("div"); row.className = "h3row";
  var a = document.createElement("div"); h.before(row); a.append(h, p, l); row.append(a, f);
  // довга назва не має вилазити за стовпчик: зменшуємо лише її
  var fitName = function () { h.style.fontSize = ""; var z = parseFloat(getComputedStyle(h).fontSize); while (h.scrollWidth > h.clientWidth && z > 40) { z -= 2; h.style.fontSize = z + "px"; } };
  fitName(); addEventListener("resize", fitName); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);
  dispatchEvent(new Event("resize")); dispatchEvent(new Event("scroll"));
  // контраст як на головній: кольори головної, картки з рамкою #E6E6E6, описи #737373
  var HOME = { "#DDF3DF": "#EEF8EE", "#DCE8FF": "#EEF4FF", "#FFECC2": "#FFF6E2", "#FBDCDC": "#FDEEEE" };
  r.querySelectorAll("[style]").forEach(function (x) { var v = x.getAttribute("style"); Object.keys(HOME).forEach(function (k) { v = v.split(k).join(HOME[k]); }); x.setAttribute("style", v); });
  var ct = document.createElement("style");
  ct.textContent = '.final{background:#EEF4FF!important}.l4 .c3>div{border-radius:24px}'
    + '.l4 .c3 p,.l4 .hs.on p,.l4 .ai p,.l4 .acc p,.l4 .go3 p,.l4 details p{color:#737373}'
    + '.l4 .rc,.l4 .ui,.l4 .w{box-shadow:none}.l4 .rc,.l4 .ui{border-radius:24px}.l4 .g6>div{background:#FAFAFA;border:1px solid #E6E6E6;border-radius:24px}.l4 .banner{background:#FAFAFA!important;border:1px solid #E6E6E6}.l4 .nb a{background:#FAFAFA;border:1px solid #E6E6E6}';
  document.body.appendChild(ct);
  r.querySelectorAll('a[href*="module_v"]').forEach(function (x) { var u = new URLSearchParams(x.getAttribute("href").split("?")[1] || "").get("m"); if (u) x.setAttribute("href", modUrl(u)); });
  // значки як на платформі (lucide) у копіях інтерфейсу
  var LU = { "Chat": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>', "Korrespondenz": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.970 5.700a1.940 1.940 0 0 1-2.060 0L2 7"/>', "Gespräche": '<path d="M22 16.900v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.3 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/>', "Verlauf": '<path d="M3 12a9 9 0 1 0 9-9 9.750 9.750 0 0 0-6.740 2.740L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>', "Labels": '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.420 0l6.580-6.580a2.426 2.426 0 0 0 0-3.420z"/><circle cx="7.500" cy="7.500" r=".5"/>', "Social Media und Web": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.500 14.500 0 0 0 0 20 14.500 14.500 0 0 0 0-20"/><path d="M2 12h20"/>', "Dokumente": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>', "Zeitschätzung": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', "Verknüpfungen": '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>' };
  var ico = function (d, c) { return '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="' + (c || "currentColor") + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px;flex:none" aria-hidden="true">' + d + '</svg>'; };
  r.querySelectorAll(".sc .tb span,.sc .sh,.sc .rc-tabs span").forEach(function (x) { var t = x.textContent.trim().replace(/\s*\(\d+\)$/, ""), d = LU[t]; if (d && !x.querySelector("svg")) x.insertAdjacentHTML("afterbegin", ico(d)); });
  r.querySelectorAll(".sc .cv,.sc .rc-mail").forEach(function (x) { var t = x.textContent.trim(); if (x.querySelector("svg")) return; if (/^\+\d/.test(t)) x.insertAdjacentHTML("afterbegin", ico(LU["Gespräche"], "#737373")); else if (/^\S+@\S+$/.test(t)) x.insertAdjacentHTML("afterbegin", ico(LU["Korrespondenz"], "#737373")); });
  // намальовані аватарки людей (вигадані персонажі)
  var FEM = { test: function (n) { return ["Iryna", "Kateryna", "Svitlana", "Nataliia", "Oksana", "Anna", "Tetiana", "Olena", "Yuliia", "Larysa"].some(function (x) { return n.indexOf(x) === 0; }); } };
  var face = function (n, size) {
    var h = 0; for (var i = 0; i < n.length; i++) h = (h * 31 + n.charCodeAt(i)) >>> 0;
    var pick = function (a, k) { return a[(h >>> k) % a.length]; };
    var bg = pick(["#DCE8FF", "#DDF3DF", "#FFECC2", "#FBDCDC", "#E9E0FB", "#D8F0F2"], 1);
    var skin = pick(["#F6D2B5", "#EFC09C", "#E5AE85", "#F9DCC4", "#C98F68"], 4);
    var hair = pick(["#3A2A20", "#6B4426", "#1F2328", "#A8652E", "#8C8C8C", "#C9A15A"], 7);
    var shirt = pick(["#0086CC", "#39B54A", "#7C3AED", "#E2691B", "#3F4A56", "#D62828", "#0E7490"], 10);
    var f = FEM.test(n), st = (h >>> 13) % 3, back = "", top = "", extra = "";
    if (f) {
      if (st === 0) { back = '<path d="M12.500 33c-1.500-14 1.500-26 11.500-26s13 12 11.500 26c-2.500 1.500-5 1-6-.5V17H18.500v15.500c-1 1.500-3.500 2-6 .5z" fill="' + hair + '"/>'; top = '<path d="M15 19c0-7 4-10.500 9-10.500S33 12 33 19c-2.500-3-6-4.500-9-5-1.500 2.500-5.500 4.500-9 5z" fill="' + hair + '"/>'; }
      else if (st === 1) { back = '<circle cx="24" cy="6.500" r="4.500" fill="' + hair + '"/>'; top = '<path d="M15 19c0-7 4-10.500 9-10.500S33 12 33 19c-2-3-5-5-9-5s-7 2-9 5z" fill="' + hair + '"/>'; }
      else { back = '<path d="M13.500 25c-1.500-11 2-18 10.500-18s12 7 10.500 18c-1.500 1-3.500 1-4.500 0V17H18v8c-1 1-3 1-4.500 0z" fill="' + hair + '"/>'; top = '<path d="M15 19c1-6 4-10.500 9-10.500S32 13 33 19c-4 0-9-1.500-11-5-1 2.500-4 5-7 5z" fill="' + hair + '"/>'; }
    } else {
      if (st === 0) top = '<path d="M15 18.500c-.5-7 4-11 9-11s9.500 4 9 11c-1.500-3-3-4.500-5-5-3 1-6.500 1-9 0-1.500.5-3 2-4 5z" fill="' + hair + '"/>';
      else if (st === 1) { top = '<path d="M15 18c0-7 4-10.500 9.500-10.500 5 0 8.500 3.500 8.500 10.500-1-2.500-2.500-4-4-4.500-4 1.500-9 1-11-.5-1.500 1-2.500 3-3 5z" fill="' + hair + '"/>'; extra = '<path d="M15.500 21c.5 6.500 4 10 8.500 10s8-3.500 8.500-10c-1 2-2.500 3-4 3-1.500-1-7.500-1-9 0-1.500 0-3-1-4-3z" fill="' + hair + '"/>'; }
      else { top = '<path d="M15.500 16c.5-5 4-8.500 8.500-8.500s8 3.500 8.500 8.500c-5-2.500-12-2.500-17 0z" fill="' + hair + '"/>'; extra = '<rect x="17.500" y="17.500" width="5.500" height="4" rx="1.800" fill="none" stroke="#333" stroke-width=".8"/><rect x="25" y="17.500" width="5.500" height="4" rx="1.800" fill="none" stroke="#333" stroke-width=".8"/><path d="M23 19h2" stroke="#333" stroke-width=".8"/>'; }
    }
    return '<svg viewBox="0 0 48 48" width="' + (size || 42) + '" height="' + (size || 42) + '" style="border-radius:50%;flex:none;display:block" role="img" aria-label="Gezeichneter Avatar"><circle cx="24" cy="24" r="24" fill="' + bg + '"/>' + back + '<path d="M7 48c0-10 7.500-15.500 17-15.500S41 38 41 48z" fill="' + shirt + '"/><rect x="20.500" y="25" width="7" height="9" rx="3" fill="' + skin + '"/><path d="M20.500 32.500c1 1.800 6 1.800 7 0l1 1.500c-2 2.500-7 2.500-9 0z" fill="#fff" opacity=".85"/><ellipse cx="24" cy="19.500" rx="9" ry="10" fill="' + skin + '"/>' + top + extra + '<circle cx="20.300" cy="19.700" r="1.100" fill="#2B2B2B"/><circle cx="27.700" cy="19.700" r="1.100" fill="#2B2B2B"/><path d="M21 24.300c1.700 1.500 4.300 1.500 6 0" fill="none" stroke="#9A4B3A" stroke-width="1.100" stroke-linecap="round"/></svg>';
  };
  var WHO = { "OM": "Oleh Martyniuk", "IT": "Iryna Tkach", "KR": "Kateryna Rudenko", "AM": "Andrii Melnyk", "NM": "Nataliia Melnyk", "IP": "Ihor Petrenko", "OL": "Oksana Lysenko", "VS": "Viktor Savchuk", "DT": "Dmytro Tkach", "SK": "Svitlana Koval", "RB": "Roman Boiko", "OS": "Olena Sydorenko", "PH": "Pavlo Hnatiuk" };
  r.querySelectorAll(".av").forEach(function (x) {
    var t = x.textContent.trim(), name = WHO[t];
    if (!name || x.querySelector("svg")) return;
    x.innerHTML = face(name, "100%"); x.style.background = "none"; x.style.overflow = "hidden"; x.style.color = "transparent";
  });
  // шрифт як на aita.world: заголовок модуля — Inter 600, решта вже Golos Text
  var fs = document.createElement("style");
  fs.textContent = '.l4 h1,.l4 h1.mname{font-family:"Inter",sans-serif!important;font-weight:600!important;letter-spacing:-.048em!important}';
  document.body.appendChild(fs);
})();

// Шаблон усіх модулів: схема йде одразу під шапкою, а панель із кнопками — під схемою.
// Відстань рахується від висоти екрана: панель завжди стартує нижче першого екрана,
// тому прилипає до низу по центру, а при прокрутці агент від'їжджає праворуч і висувається напис.
(function () {
  var r = document.querySelector(".l4"), bar = document.getElementById("hwBar"), mark = document.getElementById("hwBarS"), row = r && r.querySelector(".h3row"), fl = r && r.querySelector(".flow"); if (!bar || !fl || !row) return;
  bar.before(fl);
  var A = 128, B = 112, RUN = 24; // панель має власні 16 px зверху, тож візуально обидва відступи по 128 // звичайні відступи й скільки прокрутки до висування напису
  // одна система для всієї сторінки: шкала шрифтів головної 96/56/32/20/16/14, відступи кратні 8, між блоками 128
  var ds = document.createElement("style");
  ds.textContent = '@media(min-width:901px){'
    + '.l4.l4 .h3row{margin-top:24px}.l4.l4 #hwBar+#hwBarS+section{padding-top:112px}.l4.l4 h2{font-size:20px;line-height:28px;font-weight:500;letter-spacing:0;color:#737373;margin:0 0 32px}'
    + '.l4.l4 .hs h3{font-size:42px;line-height:46px;letter-spacing:-.03em}.l4.l4 .how{grid-template-columns:320px minmax(0,1fr);gap:48px}.l4.l4 .how .stage{height:auto;aspect-ratio:1240/860}.l4.l4 .how .rc{height:632px}.l4.l4 .how .hs{min-height:45vh}.l4.l4 .hs p{font-size:20px;line-height:28px}'
    + '.l4.l4 .c3 h3,.l4.l4 .ai h3,.l4.l4 .acc h3,.l4.l4 .go3 h3,.l4.l4 .banner h3{font-size:32px;line-height:36.8px;font-weight:500;letter-spacing:-.02em}'
    + '.l4.l4 .g6 h3{font-size:20px;line-height:25px;letter-spacing:-.01em}.l4.l4 .g6{gap:16px}'
    + '.l4.l4 .c3 p,.l4.l4 .ai p,.l4.l4 .acc p,.l4.l4 .go3 p,.l4.l4 .g6 p,.l4.l4 .banner p,.l4.l4 details p,.l4.l4 .limit{font-size:16px;line-height:24px}'
    + '.l4.l4 details summary{font-size:20px;line-height:28px}.l4.l4 .flow div{font-size:16px;line-height:24px}.l4.l4 #hwBar .hw-tx{line-height:24px}'
    + '.l4.l4 .go3 i{font-size:20px}.l4.l4 .nb-all .tile{font-size:20px}.l4.l4 .crumb,.l4.l4 .nb small{line-height:20px}'
    + '}';
  document.body.appendChild(ds);
  var fit = function () {
    if (innerWidth <= 900) { row.style.marginBottom = "32px"; fl.style.marginTop = "0"; fl.style.marginBottom = "32px"; return; }
    row.style.marginBottom = A + "px"; fl.style.marginTop = "0"; fl.style.marginBottom = B + "px";
    var end = mark.getBoundingClientRect().top + scrollY, extra = Math.max(0, innerHeight + RUN - end);
    row.style.marginBottom = A + extra / 2 + "px"; fl.style.marginBottom = B + extra / 2 + "px";
    dispatchEvent(new Event("scroll"));
  };
  fit(); addEventListener("resize", fit); addEventListener("load", fit); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  dispatchEvent(new Event("resize"));
})();
