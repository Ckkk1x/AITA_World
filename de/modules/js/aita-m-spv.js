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
    promise: "Eigentümer, Zeichnungsberechtigte, Lizenzen und Ausschüttungen jeder SPV in einer Karte",
    lead: "Wenn ein Käufer oder die Bank Dokumente anfordert, schickt das Unternehmen sie aus der Karte, statt sie wochenlang bei Juristen und Buchhaltern zu sammeln.",
    hero: first,
    flow: [["folder", "Unternehmen"], ["chart", "Kapital"], ["check", "Entscheidungen"], ["shield", "Lizenzen"], ["lock", "Investor"]],
    diff: [["shield", "Lizenzen in der Berechnung", "Der BESS-Simulator berücksichtigt die Lizenzen der SPV. Ohne Präqualifikation beim ÜNB enthält die Berechnung keine Erlöse aus dem FCR-Markt."],
      ["check", "Klar, wer unterschreibt", "Die Karte zeigt die Zeichnungsberechtigten und die Laufzeit ihrer Vollmachten, so erfährt der Vertragspartner das vor dem Vertrag, nicht danach."],
      ["lock", "Investorenportfolio", "Die Zugriffe verknüpfter Projekte gehen auf die SPV über, so sieht der Investor seine Anlagen, Ausschüttungen und Dokumente."]],
    steps: [["Stadien", "Der Stadienbalken zeigt, wo die SPV gerade steht: Gründung, Kapitalbeschaffung, Betrieb oder Liquidation."],
      ["Anlagen", "Anlagen im Besitz der SPV, mit Leistung und Phase. Oben Gesamtleistung, CAPEX und IRR."],
      ["Eigentümer", "Die Anteile der Eigentümer berechnet die Plattform aus den Finanzierungsrunden, von Hand gibt sie niemand ein. Hier ist auch der Deal zum Anteilsverkauf sichtbar."],
      ["Ausschüttungen", "Dividenden, Darlehensrückzahlungen und Zinsen mit Daten und Beträgen."],
      ["Zeichnungsberechtigte", "Wer zeichnungsberechtigt ist und bis zu welchem Betrag. Wenn eine Vollmacht endet, bleibt der Eintrag im Verlauf."],
      ["Entscheidungen", "Log der Beschlüsse von Aufsichtsrat und Gesellschafterversammlung. Stimmen verteilen sich nach Anteilen, für große Änderungen braucht es 75%."],
      ["Lizenzen", "Lizenzen und Präqualifikationen beim ÜNB mit Nummer und Gültigkeit. Satzung und Registerauszug liegen daneben."],
      ["Zugriff", "Investor und Prüfer sehen die SPV ohne Recht, Daten zu ändern. Ein Auftragnehmer bekommt Bearbeitungszugriff."]],
    dim: [],
    scene: first + sc(1, "pf", hl("pf", 1)) + sc(2, "fin", hl("own", 2)) + sc(3, "find", hl("dist", 3)) + sc(4, "gov", hl("sign", 4)) + sc(5, "gov", hl("dec", 5)) + sc(6, "cmp", hl("lic", 6)) + sc(7, "adm", hl("inv", 7)),
    css: css,
    ai: [["Wer unterschreibt", "Der Agent nennt, wer heute zeichnungsberechtigt ist und bis zu welchem Betrag.", `<small>Anfrage an den Agenten</small><br>Wer darf den EPC-Vertrag unterschreiben?<div class="msg">Oleh Martyniuk, Direktor, allein. Der Aufsichtsrat hat am 05.11. entschieden.</div>`],
      ["Unterlagen für den Käufer", "Der Agent sammelt Satzung, Registerauszug, Eigentümerstruktur und Lizenzen, damit der Käufer die SPV prüfen kann.", `<small>Anfrage an den Agenten</small><br>Sammle die SPV-Dokumente für die Prüfung durch den Käufer<div class="msg">Satzung, Registerauszug, Gesellschaftervereinbarung und vier Lizenzen. Es fehlt eine aktuelle Unternehmensbewertung.</div>`],
      ["FCR-Markt", "Der Agent prüft die Lizenzen der SPV, bevor er die Erlöse des Speichers berechnet.", `<small>Anfrage an den Agenten</small><br>Kann ein BESS mit 2 MW am FCR-Markt teilnehmen?<div class="msg">Ja, die Präqualifikation beim ÜNB für FCR ist gültig, 2 MW.</div>`]],
    more: `<div class="tall"><h3>SPV-Typ</h3><div class="w">${L.row("folder", "Projektfinanzierung")}${L.row("users", "Joint Venture")}${L.row("building", "Anderer Zweck")}</div></div>
      <div><h3>Virtuelle SPV</h3><div class="w">${L.row("filepen", "Unternehmensentwurf vor der Registrierung")}</div></div>
      <div><h3>Bewertung</h3><div class="w">${L.row("trendup", "Jede Bewertung wird separat gespeichert")}</div></div>
      <div class="tall"><h3>Lizenzen</h3><div class="w">${L.row("ccheck", "Erzeuger, Versorger, Händler")}${L.row("ccheck", "Speicherbetreiber")}${L.row("shield", "Präqualifikation beim ÜNB: FCR, aFRR, mFRR")}${L.row("ccheck", "Aggregator und Herkunftsnachweise")}</div></div>
      <div><h3>Gründungsdokumente</h3><div class="w">${L.row("folder", "Satzung und Registerauszug im Speicher")}</div></div>
      <div><h3>Über den Agenten</h3><div class="w">${L.row("spark", "Der Agent führt Eigentümer, Runden und Zeichnungsberechtigte")}</div></div>`,
    access: [["Unternehmen", "Die SPV gehört dem Unternehmen, das sie angelegt hat. Sie lässt sich samt Eigentümern in ein anderes Unternehmen übertragen."], ["Rollen", "Vier Zugriffsstufen: vom Eigentümer bis zur Ansicht ohne Änderungen. Die Ansicht passt für Prüfer und Investoren."], ["Projekte", "Wenn ein Projekt an eine SPV gebunden wird, gehen seine Zugriffe auf die SPV über."]],
    start: [["SPV", "Leg eine SPV an oder einen virtuellen Entwurf vor der Registrierung des Unternehmens."], ["Anlagen", "Verknüpfe die Projekte, die der SPV gehören."], ["Eigentümer", "Füge Eigentümer, Finanzierungsrunden und Zeichnungsberechtigte hinzu."]],
    faq: [["Was ist das Modul „SPV“?", "Das ist die Karte einer Zweckgesellschaft, der die Anlagen gehören. Darin steht alles, wonach Bank, Investor und Käufer fragen."],
      ["Was ist eine virtuelle SPV?", "Der Entwurf eines Unternehmens, das noch nicht registriert ist. Runden und Zeichnungsberechtigte darin bezeichnen eine Absicht, keine rechtliche Tatsache."],
      ["Kann ich die SPV einem Investor zeigen?", "Ja. Mit dem Zugriff „Lesen“ sieht der Investor Anlagen, Ausschüttungen und Dokumente, ändert aber nichts."],
      ["Wozu Lizenzen in der Karte?", "Der BESS-Simulator berücksichtigt sie in der Berechnung. Ohne Präqualifikation beim ÜNB werden Erlöse aus dem FCR-Markt nicht gerechnet."],
      ["Kostet das Modul extra?", "Nein. „SPV“ ist in jedem Paket enthalten."]],
    final: "Wir zeigen, wie du die SPVs deines Unternehmens in Aita führst"
  });
})();
