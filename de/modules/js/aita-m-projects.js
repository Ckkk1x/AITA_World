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
    name: "Projekte",
    promise: "Jede Anlage in einer Karte: vom Grundstück bis zum Betrieb",
    lead: "Phasen, Geld, Aufgaben und Dateien des Projekts liegen in der Karte, also schauen Team und Investor auf denselben Ort.",
    hero: list,
    flow: [["folder", "Projekt"], ["target", "Phasen"], ["chart", "Geld"], ["check", "Arbeit"], ["lock", "Zugriff"]],
    diff: [["folder", "Eine Karte", "Aufgaben, Dateien, Ziel und Chat liegen im Projekt, nicht in fünf Programmen."], ["chart", "Geld sofort", "IRR, NPV und Amortisation berechnet das Finanzmodell, von Hand gibt sie niemand ein."], ["target", "Der Weg ist sichtbar", "Die Arbeitskarte zeigt, was fertig ist und bei wem es hängt."]],
    steps: [["Portfolio", "Alle Anlagen des Unternehmens mit Filtern nach Typ, Phase und Land. Oben die Gesamtleistung."], ["Phasen", "Der Balken zeigt, wo das Projekt gerade steht und was als Nächstes kommt: vom Lead bis zum Betrieb."], ["Übersicht", "IRR, NPV, CAPEX und Amortisation auf dem ersten Bildschirm, darunter das Überfällige."], ["Aufgaben", "Projektaufgaben mit Verantwortlichem und Frist, überfällige sind sofort sichtbar."], ["DataRoom", "Projektdateien in Ordnern: Ausgangsdaten, Anschlussbedingungen, Verträge, Protokolle, 3D und Dokumentation."], ["Ziel", "Projektziele mit Fristen und Status direkt neben der Arbeit."], ["Chat", "Die Projektkorrespondenz, und Aita macht daraus Aufgaben."], ["Arbeitskarte", "Das Anlagenrezept zerlegt den Weg vom Briefing bis zum Betrieb in 52 Schritte."], ["Zugriffe", "Investor, Auftragnehmer und Team sehen genau das, was für sie freigegeben ist."]],
    dim: [],
    scene: list + sc(1, "ov", hl("stage", 1)) + sc(2, "ov", hl("kpi", 2)) + sc(3, "tasks", hl("tasks", 3)) + sc(4, "dr", hl("dr", 4)) + sc(5, "goal", hl("goal", 5)) + sc(6, "chat", hl("chat", 6)) + sc(7, "wm", hl("wm", 7)) + sc(8, "adm", hl("inv", 8)),
    css: css,
    ai: [["Projektstatus", "Der Agent sagt, in welcher Phase die Anlage ist und was sie blockiert.", `<small>Anfrage an den Agenten</small><br>Was blockiert das Projekt gerade?<div class="msg">Der EPC-Vertrag ist nicht unterschrieben. Verantwortlich: Oleh Martyniuk.</div>`],
      ["Projektpass", "Der Agent schlägt Werte für den Projektpass mit Quelle vor, und du übernimmst sie.", `<small>Anfrage an den Agenten</small><br>Füll den Projektpass aus den Anschlussbedingungen aus<div class="msg">Anschlussleistung 7,2 MW. Quelle: Anschlussbedingungen.pdf</div>`],
      ["Portfolio", "Der Agent erstellt einen Überblick über alle Anlagen des Unternehmens.", `<small>Anfrage an den Agenten</small><br>Wie viele MW haben wir im Status RTB?<div class="msg">Ein Projekt, 8,5 MW.</div>`]],
    more: `<div class="tall"><h3>Filter</h3><div class="w">${L.row("filter", "Typ")}${L.row("compass", "Phase")}${L.row("globe", "Land")}${L.row("users", "Eigentümer und Manager")}${L.row("pin", "Tags: PPA, 2026, Portfolio")}</div></div>
      <div><h3>Währung</h3><div class="w">${L.row("dollar", "Projektwährung oder Euro")}</div></div>
      <div><h3>Reifegrad-Flags</h3><div class="w">${L.row("ccheck", "Grundstück, Netzanschluss, Absatz, EPC")}</div></div>
      <div class="tall"><h3>Live-Daten der Anlage</h3><div class="w">${L.row("cloud", "Deye")}${L.row("cloud", "Huawei FusionSolar")}${L.row("cloud", "Sungrow iSolarCloud")}${L.row("clock", "Aktualisierung alle 5 Minuten")}</div></div>
      <div><h3>Kundenansicht</h3><div class="w">${L.row("share", "3D-Anlage und CAPEX per Link")}</div></div>
      <div><h3>Vorschläge des Agenten</h3><div class="w">${L.row("spark", "Projektpass-Werte mit Quelle")}</div></div>`,
    access: [["Unternehmen", "Das Projekt gehört dem Unternehmen, Zugriff wird für jedes Projekt einzeln vergeben."], ["Rollen", "Eigentümer, Admin, Schreiben und Lesen."], ["SPV", "Projektzugriffe gehen auf die SPV über, so sieht der Investor seine Anlagen."]],
    start: [["Projekt", "Erstell ein Projekt oder wandle einen gewonnenen Lead um."], ["Projektpass", "Füll den Projektpass selbst aus oder übergib ihn dem Agenten."], ["Team", "Gib Team, Auftragnehmer und Investor Zugriff."]],
    faq: [["Was ist das Modul „Projekte“?", "Das ist die Karte jeder Anlage: Phasen, Projektpass, Geld, Arbeit und Zugriffe."], ["Kann ich das Projekt einem Kunden zeigen?", "Ja, per Link: 3D-Anlage, CAPEX und Dokumente ohne Konto."], ["Woher kommen IRR und NPV?", "Sie berechnet das Finanzmodell des Projekts, von Hand werden sie nicht eingegeben."], ["Was ist die Arbeitskarte?", "Der Weg der Anlage vom Briefing bis zur Inbetriebnahme. Danach arbeitet der Projektagent."], ["Kostet das Modul extra?", "Nein. „Projekte“ ist in jedem Paket enthalten."]],
    final: "Wir zeigen dein Projekt in einer Aita-Karte"
  });
  // Блок «Що входить у проєкт»: модулі, які відкриваються з картки, показуємо плитками-посиланнями
  var IN = ["Kostenplan", "Finanzmodell", "Energy Design (3D-Design)", "Einliniendiagramm", "BESS-Simulator", "Projektunterlagen", "Projektbaukasten", "Lösungsboxen", "SPV"];
  var addIn = function () {
    var how = [].slice.call(document.querySelectorAll(".l4 section")).filter(function (s) { var h = s.querySelector("h2"); return h && h.textContent.trim() === "So funktioniert es"; })[0];
    if (!how) return setTimeout(addIn, 60);
    if (document.querySelector(".l4 .pjin")) return;
    var s = document.createElement("section"); s.className = "pjin md-next";
    s.innerHTML = '<h2>Was zum Projekt gehört</h2><div class="nb">' + IN.filter(function (k) { return typeof IDX !== "undefined" && IDX[k]; }).map(function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + "</span><span><b>" + k + "</b><small>" + (D[k] || IDX[k].g) + "</small></span></a>"; }).join("") + "</div>";
    how.parentNode.insertBefore(s, how.nextSibling);
  };
  addIn();

})();
