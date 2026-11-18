// Сторінка модуля «SPV». Вигляд — копія справжньої картки SPV платформи (ui_spv/, збирає energy_mockup/build_ui_spv.py),
// дані вигадані: SPV «Термобуд Енерджі», власник станції СЕС + BESS 8,5 МВт з модуля «Проєкти». На платформі нічого не змінено.
(function () {
  var L = LU, B = window.SPVBOX || {};
  var fr = function (st) { return '<iframe class="pjfr" src="ui_spv/' + st + '.html?v=1611b" tabindex="-1" loading="eager"></iframe>'; };
  var hl = function (k, n) { var r = B[k]; return r ? '<div class="pjhl" data-hl="' + n + '" style="left:' + r[0] + 'px;top:' + r[1] + 'px;width:' + r[2] + 'px;height:' + r[3] + 'px"></div>' : ""; };
  var sc = function (n, st, h) { return '<div class="pop pg0" data-show="' + n + '"><div class="pjz">' + fr(st) + (h || "") + "</div></div>"; };
  var first = '<div class="pjz">' + fr("ov") + hl("stage", 0) + "</div>";
  var css = `
.l4 .pjfr{position:absolute;left:0;top:0;width:1240px;height:860px;border:0;background:#FAFAFA;pointer-events:none}
.l4 .pjhl{position:absolute;pointer-events:none;border-radius:12px}.l4 .pjhl.hon{background:rgba(0,80,214,.04)!important}
.l4 .pjz{position:absolute;left:0;top:0;width:1240px;height:860px;transform-origin:0 0;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.l4 .rcs .sc{overflow:hidden}.l4 .rcs .pop.pg0{overflow:hidden}
@media(prefers-reduced-motion:reduce){.l4 .pjz{transition:none}}
`;
  MP({
    name: "SPV",
    promise: "Minden SPV tulajdonosai, aláírói, engedélyei és kifizetései egy adatlapon",
    lead: "Ha a vevő vagy a bank dokumentumokat kér, a cég az adatlapról küldi el őket, nem hetekig gyűjti a jogászoktól és a könyvelőktől.",
    hero: first,
    flow: [["folder", "Cég"], ["chart", "Tőke"], ["check", "Döntések"], ["shield", "Engedélyek"], ["lock", "Befektető"]],
    diff: [["shield", "Engedélyek a számításban", "A BESS-szimulátor figyelembe veszi az SPV engedélyeit. A rendszerirányítónál szerzett előminősítés nélkül a számítás nem tartalmazza az FCR-piaci bevételt."],
      ["check", "Tudni, ki ír alá", "Az adatlap mutatja az aláírókat és meghatalmazásuk idejét, így a partner ezt a szerződés előtt tudja meg, nem utána."],
      ["lock", "A befektető portfóliója", "A hozzárendelt projektek hozzáférései átkerülnek az SPV-be, így a befektető látja a saját erőműveit, kifizetéseit és dokumentumait."]],
    steps: [["Fázisok", "A fázissáv megmutatja, hol tart most az SPV: alapítás, tőkebevonás, működés vagy felszámolás."],
      ["Erőművek", "Az SPV tulajdonában lévő erőművek teljesítménnyel és szakasszal. Fent az összteljesítmény, a CAPEX és az IRR."],
      ["Tulajdonosok", "A tulajdonosi részesedéseket a platform a befektetési körök alapján számolja, nem kézzel viszik be. Itt látszik a részesedés eladásáról szóló ügylet is."],
      ["Kifizetések", "Osztalékok, kölcsön-visszafizetések és kamatok dátummal és összeggel."],
      ["Aláírók", "Kinek van aláírási joga, és milyen összeghatárig. Amikor a meghatalmazás lejár, a bejegyzés az előzményekben marad."],
      ["Döntések", "Az igazgatóság és a taggyűlés határozatainak naplója. A szavazatok a részesedések arányában oszlanak meg, nagyobb változásokhoz 75% kell."],
      ["Engedélyek", "Engedélyek és rendszerirányítói előminősítések számmal és érvényességi idővel. Az alapító okirat és a cégkivonat mellettük van."],
      ["Hozzáférés", "A befektető és a könyvvizsgáló módosítási jog nélkül nézi az SPV-t. Az alvállalkozó szerkesztési hozzáférést kap."]],
    dim: [],
    scene: first + sc(1, "pf", hl("pf", 1)) + sc(2, "fin", hl("own", 2)) + sc(3, "find", hl("dist", 3)) + sc(4, "gov", hl("sign", 4)) + sc(5, "gov", hl("dec", 5)) + sc(6, "cmp", hl("lic", 6)) + sc(7, "adm", hl("inv", 7)),
    css: css,
    ai: [["Ki ír alá", "Az ügynök megmondja, kinek van ma aláírási joga, és milyen összeghatárig.", `<small>Kérés az ügynöknek</small><br>Ki írhatja alá az EPC-szerződést?<div class="msg">Oleh Martyniuk igazgató, önállóan. Az igazgatóság határozata: nov. 5.</div>`],
      ["Dokumentumok a vevőnek", "Az ügynök összegyűjti az alapító okiratot, a cégkivonatot, a tulajdonosi kört és az engedélyeket, hogy a vevő ellenőrizhesse az SPV-t.", `<small>Kérés az ügynöknek</small><br>Gyűjtsd össze az SPV dokumentumait a vevői átvilágításhoz<div class="msg">Alapító okirat, cégkivonat, szindikátusi szerződés és négy engedély. Hiányzik egy friss értékbecslés.</div>`],
      ["FCR-piac", "Az ügynök ellenőrzi az SPV engedélyeit, mielőtt kiszámolja a tároló bevételét.", `<small>Kérés az ügynöknek</small><br>Működhet a 2 MW-os BESS az FCR-piacon?<div class="msg">Igen, az FCR-re szóló rendszerirányítói előminősítés érvényes, 2 MW.</div>`]],
    more: `<div class="tall"><h3>SPV típusa</h3><div class="w">${L.row("folder", "Projektfinanszírozás")}${L.row("users", "Közös vállalat")}${L.row("building", "Egyéb cél")}</div></div>
      <div><h3>Virtuális SPV</h3><div class="w">${L.row("filepen", "Cégpiszkozat bejegyzés előtt")}</div></div>
      <div><h3>Értékbecslés</h3><div class="w">${L.row("trendup", "Minden értékbecslés külön tárolódik")}</div></div>
      <div class="tall"><h3>Engedélyek</h3><div class="w">${L.row("ccheck", "Termelő, kereskedő, energiakereskedő")}${L.row("ccheck", "Tárolóüzemeltető")}${L.row("shield", "Rendszerirányítói előminősítés: FCR, aFRR, mFRR")}${L.row("ccheck", "Aggregátor és származási garanciák")}</div></div>
      <div><h3>Alapító dokumentumok</h3><div class="w">${L.row("folder", "Alapító okirat és cégkivonat az Adattárban")}</div></div>
      <div><h3>Az ügynökön keresztül</h3><div class="w">${L.row("spark", "Az ügynök kezeli a tulajdonosokat, a köröket és az aláírókat")}</div></div>`,
    access: [["Cég", "Az SPV azé a cégé, amely létrehozta. A tulajdonosokkal együtt áthelyezhető egy másik cégbe."], ["Szerepek", "Négy hozzáférési szint: a tulajdonostól a módosítás nélküli megtekintésig. A megtekintés könyvvizsgálóknak és befektetőknek való."], ["Projektek", "Amikor egy projektet SPV-hez rendelnek, a hozzáférései átkerülnek az SPV-be."]],
    start: [["SPV", "Hozz létre SPV-t vagy virtuális piszkozatot a cég bejegyzése előtt."], ["Erőművek", "Rendeld hozzá az SPV tulajdonában lévő projekteket."], ["Tulajdonosok", "Add hozzá a tulajdonosokat, a befektetési köröket és az aláírókat."]],
    faq: [["Mi az „SPV” modul?", "Az erőműveket birtokló különleges célú társaság adatlapja. Benne van minden, amire a bank, a befektető és a vevő rákérdez."],
      ["Mi a virtuális SPV?", "Egy még be nem jegyzett cég piszkozata. A benne lévő körök és aláírók szándékot jelölnek, nem jogi tényt."],
      ["Megmutatható az SPV a befektetőnek?", "Igen. „Olvasás” hozzáféréssel a befektető látja az erőműveket, a kifizetéseket és a dokumentumokat, de semmit sem módosít."],
      ["Miért vannak engedélyek az adatlapon?", "A BESS-szimulátor figyelembe veszi őket a számításban. Rendszerirányítói előminősítés nélkül az FCR-piaci bevétel nem számít bele."],
      ["Kell külön fizetni a modulért?", "Nem. Az „SPV” minden csomagban benne van."]],
    final: "Megmutatjuk, hogyan kezeld a céged SPV-it az Aitában"
  });
})();
