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
    name: "Projekty",
    promise: "Każda stacja na jednej karcie: od działki do eksploatacji",
    lead: "Etapy, pieniądze, zadania i pliki projektu są zebrane na karcie, więc zespół i inwestor patrzą w jedno miejsce.",
    hero: list,
    flow: [["folder", "Projekt"], ["target", "Etapy"], ["chart", "Pieniądze"], ["check", "Praca"], ["lock", "Dostęp"]],
    diff: [["folder", "Jedna karta", "Zadania, pliki, cel i czat są w projekcie, a nie w pięciu programach."], ["chart", "Pieniądze od razu", "IRR, NPV i zwrot liczy model finansowy, nikt nie wpisuje ich ręcznie."], ["target", "Widać drogę", "Mapa prac pokazuje, co jest gotowe i na kim się zatrzymało."]],
    steps: [["Portfel", "Wszystkie stacje firmy z filtrami według typu, etapu i kraju. U góry łączna moc."], ["Etapy", "Pasek pokazuje, gdzie projekt jest teraz i co dalej: od leada do eksploatacji."], ["Przegląd", "IRR, NPV, CAPEX i zwrot na pierwszym ekranie, a pod nimi to, co jest po terminie."], ["Zadania", "Zadania projektu z wykonawcą i terminem, przeterminowane widać od razu."], ["DataRoom", "Pliki projektu w folderach: dane wyjściowe, WP, umowy, protokoły, 3D i dokumentacja."], ["Cel", "Cele projektu z terminami i statusem obok pracy."], ["Czat", "Korespondencja projektu, a Aita tworzy z niej zadania."], ["Mapa prac", "Receptura stacji rozkłada drogę od briefu do eksploatacji na 52 kroki."], ["Uprawnienia", "Inwestor, podwykonawca i zespół widzą dokładnie to, co im udostępniono."]],
    dim: [],
    scene: list + sc(1, "ov", hl("stage", 1)) + sc(2, "ov", hl("kpi", 2)) + sc(3, "tasks", hl("tasks", 3)) + sc(4, "dr", hl("dr", 4)) + sc(5, "goal", hl("goal", 5)) + sc(6, "chat", hl("chat", 6)) + sc(7, "wm", hl("wm", 7)) + sc(8, "adm", hl("inv", 8)),
    css: css,
    ai: [["Stan projektu", "Agent mówi, na jakim etapie jest stacja i co ją blokuje.", `<small>Zapytanie do agenta</small><br>Co teraz blokuje projekt?<div class="msg">Umowa EPC nie jest podpisana. Odpowiedzialny: Oleh Martyniuk.</div>`],
      ["Paszport", "Agent proponuje wartości paszportu ze źródłem, a Ty je akceptujesz.", `<small>Zapytanie do agenta</small><br>Uzupełnij paszport z WP<div class="msg">Moc przyłączeniowa 7,2 MW. Źródło: WP.pdf</div>`],
      ["Portfel", "Agent zbiera przekrój wszystkich stacji firmy.", `<small>Zapytanie do agenta</small><br>Ile MW mamy na etapie RTB?<div class="msg">Jeden projekt, 8,5 MW.</div>`]],
    more: `<div class="tall"><h3>Filtry</h3><div class="w">${L.row("filter", "Typ")}${L.row("compass", "Etap")}${L.row("globe", "Kraj")}${L.row("users", "Właściciel i menedżer")}${L.row("pin", "Tagi: PPA, 2026, portfel")}</div></div>
      <div><h3>Waluta</h3><div class="w">${L.row("dollar", "Waluta projektu lub euro")}</div></div>
      <div><h3>Flagi dojrzałości</h3><div class="w">${L.row("ccheck", "Grunt, przyłączenie, sprzedaż energii, EPC")}</div></div>
      <div class="tall"><h3>Dane stacji na żywo</h3><div class="w">${L.row("cloud", "Deye")}${L.row("cloud", "Huawei FusionSolar")}${L.row("cloud", "Sungrow iSolarCloud")}${L.row("clock", "Aktualizacja co 5 minut")}</div></div>
      <div><h3>Pokaz dla klienta</h3><div class="w">${L.row("share", "Stacja 3D i CAPEX przez link")}</div></div>
      <div><h3>Propozycje agenta</h3><div class="w">${L.row("spark", "Wartości paszportu ze źródłem")}</div></div>`,
    access: [["Firma", "Projekt należy do firmy, dostęp nadaje się do każdego projektu osobno."], ["Role", "Właściciel, admin, zapis i odczyt."], ["SPV", "Dostępy projektu przechodzą do SPV, więc inwestor widzi swoje stacje."]],
    start: [["Projekt", "Utwórz projekt lub przenieś wygrany lead."], ["Paszport", "Uzupełnij paszport sam albo zleć to agentowi."], ["Zespół", "Udostępnij projekt zespołowi, podwykonawcy i inwestorowi."]],
    faq: [["Czym jest moduł „Projekty”?", "To karta każdej stacji: etapy, paszport, pieniądze, praca i dostępy."], ["Czy można pokazać projekt klientowi?", "Tak, przez link: stacja 3D, CAPEX i dokumenty bez konta."], ["Skąd biorą się IRR i NPV?", "Liczy je model finansowy projektu, nie wpisuje się ich ręcznie."], ["Czym jest mapa prac?", "Droga stacji od briefu do oddania do eksploatacji. Według niej pracuje agent projektu."], ["Czy za moduł trzeba dopłacać?", "Nie. „Projekty” są w każdym pakiecie."]],
    final: "Pokażemy Twój projekt na karcie Aita"
  });
  // Блок «Що входить у проєкт»: модулі, які відкриваються з картки, показуємо плитками-посиланнями
  var IN = ["Kosztorys", "Model finansowy", "Energy Design (projekt 3D)", "Schemat jednokreskowy", "Symulator BESS", "Dokumentacja projektowa", "Kreator projektów", "Zestawy rozwiązań", "SPV"];
  var addIn = function () {
    var how = [].slice.call(document.querySelectorAll(".l4 section")).filter(function (s) { var h = s.querySelector("h2"); return h && h.textContent.trim() === "Jak to działa"; })[0];
    if (!how) return setTimeout(addIn, 60);
    if (document.querySelector(".l4 .pjin")) return;
    var s = document.createElement("section"); s.className = "pjin md-next";
    s.innerHTML = '<h2>Co zawiera projekt</h2><div class="nb">' + IN.filter(function (k) { return typeof IDX !== "undefined" && IDX[k]; }).map(function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + "</span><span><b>" + k + "</b><small>" + (D[k] || IDX[k].g) + "</small></span></a>"; }).join("") + "</div>";
    how.parentNode.insertBefore(s, how.nextSibling);
  };
  addIn();

})();
