// Сторінка модуля «Проєкти». Вигляд скопійовано зі справжньої платформи (проєкт marketing),
// дані — псевдопроєкт «СЕС + BESS, 8,5 МВт» (див. AITA_Site/Проєкти_псевдопроєкт_дані.md), решта демо.
(function () {
  var L = LU;
  var av = function (i, c) { return '<span class="av" style="width:22px;height:22px;font-size:9px;background:' + (c || "#E8F0F7") + '">' + i + "</span>"; };
  // Справжній інтерфейс платформи: копії сторінок у ui_pj/ (збирає energy_mockup/build_ui_pj.py),
  // дані псевдопроєкту підставлено у відкритій сторінці платформи, на платформі нічого не змінено.
  var B = window.PJBOX || {};
  var fr = function (st) { return '<iframe class="pjfr" src="ui_pj/' + st + '.html?v=1611" tabindex="-1" loading="eager"></iframe>'; };
  var hl = function (k, n) { var r = B[k]; return r ? '<div class="pjhl" data-hl="' + n + '" style="left:' + r[0] + 'px;top:' + r[1] + 'px;width:' + r[2] + 'px;height:' + r[3] + 'px"></div>' : ""; };
  // .pjz — обгортка екрана (наближення прибрано на прохання Ліни 16.11, як на інших модулях)
  var sc = function (n, st, h) { return '<div class="pop pg0" data-show="' + n + '"><div class="pjz">' + fr(st) + (h || "") + "</div></div>"; };
  var list = '<div class="pjz">' + fr("list") + hl("list", 0) + "</div>";
  var css = `
.l4 .pjfr{position:absolute;left:0;top:0;width:1240px;height:860px;border:0;background:#FAFAFA;pointer-events:none}
.l4 .pjhl{position:absolute;pointer-events:none;border-radius:12px}.l4 .pjhl.hon{background:rgba(0,80,214,.04)!important}
.l4 .pjz{position:absolute;left:0;top:0;width:1240px;height:860px;transform-origin:0 0;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.l4 .rcs .sc{overflow:hidden}.l4 .rcs .pop.pg0{overflow:hidden}
@media(prefers-reduced-motion:reduce){.l4 .pjz{transition:none}}
.l4 .pjin .nb{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
`;
  MP({
    name: "Projektek",
    promise: "Minden erőmű egy adatlapon: a teleptől az üzemeltetésig",
    lead: "A projekt szakaszai, pénze, feladatai és fájljai az adatlapon vannak, így a csapat és a befektető ugyanoda néz.",
    hero: list,
    flow: [["folder", "Projekt"], ["target", "Szakaszok"], ["chart", "Pénz"], ["check", "Működés"], ["lock", "Hozzáférés"]],
    diff: [["folder", "Egy adatlap", "A feladatok, fájlok, cél és chat a projektben vannak, nem öt különböző programban."], ["chart", "Pénz azonnal", "Az IRR-t, az NPV-t és a megtérülést a pénzügyi modell számolja, nem kézzel viszik be."], ["target", "Látszik az út", "A munkatérkép megmutatja, mi kész, és kinél akadt el."]],
    steps: [["Portfólió", "A cég összes erőműve típus, szakasz és ország szerinti szűrőkkel. Fent az összteljesítmény."], ["Szakaszok", "A sáv megmutatja, hol tart most a projekt, és mi jön: a leadtől az üzemeltetésig."], ["Áttekintés", "IRR, NPV, CAPEX és megtérülés az első képernyőn, alattuk pedig ami késésben van."], ["Feladatok", "A projekt feladatai felelőssel és határidővel, a késésben lévők rögtön látszanak."], ["DataRoom", "A projekt fájljai mappákban: kiinduló adatok, csatlakozási feltételek, szerződések, jegyzőkönyvek, 3D és dokumentáció."], ["Cél", "A projekt céljai határidővel és állapottal, a munka mellett."], ["Chat", "A projekt levelezése, amelyből az Aita feladatokat ad ki."], ["Munkatérkép", "Az erőmű receptje 52 lépésre bontja az utat a briefingtől az üzemeltetésig."], ["Hozzáférések", "A befektető, az alvállalkozó és a csapat pontosan azt látja, amit megnyitottak neki."]],
    dim: [],
    scene: list + sc(1, "ov", hl("stage", 1)) + sc(2, "ov", hl("kpi", 2)) + sc(3, "tasks", hl("tasks", 3)) + sc(4, "dr", hl("dr", 4)) + sc(5, "goal", hl("goal", 5)) + sc(6, "chat", hl("chat", 6)) + sc(7, "wm", hl("wm", 7)) + sc(8, "adm", hl("inv", 8)),
    css: css,
    ai: [["Projekt állapota", "Az ügynök elmondja, melyik szakaszban van az erőmű, és mi akasztja meg.", `<small>Kérés az ügynöknek</small><br>Mi akasztja most meg a projektet?<div class="msg">Nincs aláírva az EPC-szerződés. Felelős: Oleh Martyniuk.</div>`],
      ["Törzslap", "Az ügynök forrással együtt javasol értékeket a törzslapba, te pedig elfogadod.", `<small>Kérés az ügynöknek</small><br>Töltsd ki a törzslapot a csatlakozási feltételekből<div class="msg">Csatlakozási teljesítmény 7,2 MW. Forrás: Csatlakozási_feltételek.pdf</div>`],
      ["Portfólió", "Az ügynök áttekintést készít a cég összes erőművéről.", `<small>Kérés az ügynöknek</small><br>Hány MW-unk van RTB-n?<div class="msg">Egy projekt, 8,5 MW.</div>`]],
    more: `<div class="tall"><h3>Szűrők</h3><div class="w">${L.row("filter", "Típus")}${L.row("compass", "Szakasz")}${L.row("globe", "Ország")}${L.row("users", "Tulajdonos és menedzser")}${L.row("pin", "Címkék: PPA, 2026, portfólió")}</div></div>
      <div><h3>Pénznem</h3><div class="w">${L.row("dollar", "A projekt pénzneme vagy euró")}</div></div>
      <div><h3>Érettségi jelzők</h3><div class="w">${L.row("ccheck", "Föld, csatlakozás, értékesítés, EPC")}</div></div>
      <div class="tall"><h3>Az erőmű élő adatai</h3><div class="w">${L.row("cloud", "Deye")}${L.row("cloud", "Huawei FusionSolar")}${L.row("cloud", "Sungrow iSolarCloud")}${L.row("clock", "Frissítés 5 percenként")}</div></div>
      <div><h3>Bemutatás az ügyfélnek</h3><div class="w">${L.row("share", "3D-erőmű és CAPEX linken")}</div></div>
      <div><h3>Az ügynök javaslatai</h3><div class="w">${L.row("spark", "Törzslapértékek forrással")}</div></div>`,
    access: [["Cég", "A projekt a cégé, a hozzáférést projektenként külön adják."], ["Szerepek", "Tulajdonos, admin, írás és olvasás."], ["SPV", "A projekt hozzáférései átkerülnek az SPV-be, így a befektető látja a saját erőműveit."]],
    start: [["Projekt", "Hozz létre projektet, vagy alakítsd át a megnyert leadet."], ["Törzslap", "Töltsd ki a törzslapot magad, vagy bízd az ügynökre."], ["Csapat", "Adj hozzáférést a csapatnak, az alvállalkozónak és a befektetőnek."]],
    faq: [["Mi a „Projektek” modul?", "Minden erőmű adatlapja: szakaszok, törzslap, pénz, munka és hozzáférések."], ["Megmutatható a projekt az ügyfélnek?", "Igen, linken keresztül: 3D-erőmű, CAPEX és dokumentumok fiók nélkül."], ["Honnan jön az IRR és az NPV?", "A projekt pénzügyi modellje számolja őket, nem kézzel viszik be."], ["Mi a munkatérkép?", "Az erőmű útja a briefingtől az üzembe helyezésig. Ez alapján dolgozik a projekt ügynöke."], ["Kell külön fizetni a modulért?", "Nem. A „Projektek” minden csomagban benne vannak."]],
    final: "Megmutatjuk a projektedet egy Aita-adatlapon"
  });
  // Блок «Що входить у проєкт»: модулі, які відкриваються з картки, показуємо плитками-посиланнями
  var IN = ["Költségvetés", "Pénzügyi modell", "Energy Design (3D-tervezés)", "Egyvonalas séma", "BESS-szimulátor", "Tervdokumentáció", "Projektkonstruktor", "Megoldásdobozok", "SPV"];
  var addIn = function () {
    var how = [].slice.call(document.querySelectorAll(".l4 section")).filter(function (s) { var h = s.querySelector("h2"); return h && h.textContent.trim() === "Hogyan működik"; })[0];
    if (!how) return setTimeout(addIn, 60);
    if (document.querySelector(".l4 .pjin")) return;
    var s = document.createElement("section"); s.className = "pjin md-next";
    s.innerHTML = '<h2>Mi tartozik a projekthez</h2><div class="nb">' + IN.filter(function (k) { return typeof IDX !== "undefined" && IDX[k]; }).map(function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + "</span><span><b>" + k + "</b><small>" + (D[k] || IDX[k].g) + "</small></span></a>"; }).join("") + "</div>";
    how.parentNode.insertBefore(s, how.nextSibling);
  };
  addIn();

})();
