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
    promise: "Właściciele, osoby podpisujące, licencje i wypłaty każdej SPV na jednej karcie",
    lead: "Gdy kupujący lub bank prosi o dokumenty, firma wysyła je z karty, zamiast zbierać je tygodniami u prawników i księgowych.",
    hero: first,
    flow: [["folder", "Firma"], ["chart", "Kapitał"], ["check", "Decyzje"], ["shield", "Licencje"], ["lock", "Inwestor"]],
    diff: [["shield", "Licencje w obliczeniach", "Symulator BESS uwzględnia licencje SPV. Bez prekwalifikacji u OSP obliczenie nie obejmuje przychodu z rynku FCR."],
      ["check", "Wiadomo, kto podpisuje", "Karta pokazuje osoby podpisujące i okres ich umocowania, więc kontrahent dowiaduje się tego przed umową, a nie po niej."],
      ["lock", "Portfel inwestora", "Dostępy powiązanych projektów przechodzą do SPV, więc inwestor widzi swoje stacje, wypłaty i dokumenty."]],
    steps: [["Fazy", "Pasek faz pokazuje, gdzie jest teraz SPV: utworzenie, pozyskiwanie kapitału, działalność czy likwidacja."],
      ["Stacje", "Stacje należące do SPV z mocą i etapem. U góry łączna moc, CAPEX i IRR."],
      ["Właściciele", "Udziały właścicieli platforma wylicza na podstawie rund inwestycyjnych, nie wpisuje się ich ręcznie. Tu widać też transakcję sprzedaży udziału."],
      ["Wypłaty", "Dywidendy, spłaty pożyczek i odsetki z datami i kwotami."],
      ["Sygnatariusze", "Kto ma prawo podpisu i do jakiej kwoty. Gdy umocowanie wygasa, wpis zostaje w historii."],
      ["Decyzje", "Dziennik uchwał rady i zgromadzenia wspólników. Głosy rozkładają się proporcjonalnie do udziałów, a duże zmiany wymagają 75%."],
      ["Licencje", "Licencje i prekwalifikacje u OSP z numerem i okresem ważności. Statut i odpis z rejestru leżą obok."],
      ["Dostęp", "Inwestor i audytor przeglądają SPV bez prawa zmiany danych. Podwykonawca dostaje dostęp do edycji."]],
    dim: [],
    scene: first + sc(1, "pf", hl("pf", 1)) + sc(2, "fin", hl("own", 2)) + sc(3, "find", hl("dist", 3)) + sc(4, "gov", hl("sign", 4)) + sc(5, "gov", hl("dec", 5)) + sc(6, "cmp", hl("lic", 6)) + sc(7, "adm", hl("inv", 7)),
    css: css,
    ai: [["Kto podpisuje", "Agent mówi, kto dziś ma prawo podpisu i do jakiej kwoty.", `<small>Zapytanie do agenta</small><br>Kto może podpisać umowę EPC?<div class="msg">Oleh Martyniuk, dyrektor, jednoosobowo. Rada podjęła uchwałę 05.11.</div>`],
      ["Dokumenty dla kupującego", "Agent zbiera statut, odpis, skład właścicieli i licencje, żeby kupujący mógł sprawdzić SPV.", `<small>Zapytanie do agenta</small><br>Zbierz dokumenty SPV do weryfikacji przez kupującego<div class="msg">Statut, odpis z rejestru, umowa wspólników i cztery licencje. Brakuje aktualnej wyceny.</div>`],
      ["Rynek FCR", "Agent sprawdza licencje SPV, zanim policzy przychód magazynu energii.", `<small>Zapytanie do agenta</small><br>Czy BESS 2 MW może pracować na rynku FCR?<div class="msg">Tak, prekwalifikacja u OSP na FCR jest ważna, 2 MW.</div>`]],
    more: `<div class="tall"><h3>Typ SPV</h3><div class="w">${L.row("folder", "Finansowanie projektowe")}${L.row("users", "Joint venture")}${L.row("building", "Inne przeznaczenie")}</div></div>
      <div><h3>Wirtualna SPV</h3><div class="w">${L.row("filepen", "Szkic spółki przed rejestracją")}</div></div>
      <div><h3>Wycena</h3><div class="w">${L.row("trendup", "Każda wycena jest zapisywana osobno")}</div></div>
      <div class="tall"><h3>Licencje</h3><div class="w">${L.row("ccheck", "Wytwórca, sprzedawca, trader")}${L.row("ccheck", "Operator magazynu energii")}${L.row("shield", "Prekwalifikacja u OSP: FCR, aFRR, mFRR")}${L.row("ccheck", "Agregator i gwarancje pochodzenia")}</div></div>
      <div><h3>Dokumenty założycielskie</h3><div class="w">${L.row("folder", "Statut i odpis w Magazynie")}</div></div>
      <div><h3>Przez agenta</h3><div class="w">${L.row("spark", "Agent prowadzi właścicieli, rundy i osoby podpisujące")}</div></div>`,
    access: [["Firma", "SPV należy do firmy, która ją utworzyła. Można ją przenieść do innej firmy razem z właścicielami."], ["Role", "Cztery poziomy dostępu: od właściciela do podglądu bez zmian. Podgląd nadaje się dla audytorów i inwestorów."], ["Projekty", "Gdy projekt zostaje powiązany z SPV, jego dostępy przechodzą do SPV."]],
    start: [["SPV", "Utwórz SPV lub wirtualny szkic przed rejestracją spółki."], ["Stacje", "Powiąż projekty, które należą do SPV."], ["Właściciele", "Dodaj właścicieli, rundy inwestycyjne i osoby podpisujące."]],
    faq: [["Czym jest moduł „SPV”?", "To karta spółki celowej, do której należą stacje. Jest w niej wszystko, o co pytają bank, inwestor i kupujący."],
      ["Czym jest wirtualna SPV?", "Szkic spółki, której jeszcze nie zarejestrowano. Rundy i osoby podpisujące oznaczają w niej zamiar, a nie fakt prawny."],
      ["Czy można pokazać SPV inwestorowi?", "Tak. Z dostępem „Odczyt” inwestor widzi stacje, wypłaty i dokumenty, ale niczego nie zmienia."],
      ["Po co licencje na karcie?", "Symulator BESS uwzględnia je w obliczeniach. Bez prekwalifikacji u OSP przychód z rynku FCR nie jest liczony."],
      ["Czy za moduł trzeba dopłacać?", "Nie. „SPV” jest w każdym pakiecie."]],
    final: "Pokażemy, jak prowadzić SPV Twojej firmy w Aita"
  });
})();
