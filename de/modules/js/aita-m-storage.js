// Сторінка модуля «Сховище». Вигляд скопійовано зі справжньої платформи, демо-дані вигадані.
// Весь текст тут, у коді, щоб сторінку можна було перекласти.
(function () {
  // значки lucide, як у платформі
  var FD = "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z";
  var I = {
    folder: '<path d="' + FD + '"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    filetext: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    down: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    up: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    pen: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    dots: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
    fup: '<path d="' + FD + '"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/>',
    fplus: '<path d="' + FD + '"/><path d="M12 10v6"/><path d="M9 13h6"/>',
    finput: '<path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"/><path d="M2 13h10"/><path d="m9 16 3-3-3-3"/>',
    sort: '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
    aup: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    aright: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    chev: '<path d="m9 18 6-6-6-6"/>',
    ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    minus: '<path d="M5 12h14"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    print: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.750 9.750 0 0 0-6.740 2.740L3 8"/><path d="M3 3v5h5"/>',
    fit: '<rect width="14" height="18" x="5" y="3" rx="2"/><path d="M12 8v8"/><path d="m9.500 10 2.500-2 2.500 2"/><path d="m9.500 14 2.500 2 2.500-2"/>',
    spark: '<path d="M9.937 15.500A2 2 0 0 0 8.500 14.063l-6.135-1.582a.500.500 0 0 1 0-.962L8.500 9.936A2 2 0 0 0 9.937 8.500l1.582-6.135a.500.500 0 0 1 .963 0L14.063 8.500A2 2 0 0 0 15.500 9.937l6.135 1.581a.500.500 0 0 1 0 .964L15.500 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.500.500 0 0 1-.963 0z"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    chat: '<path d="M7.900 20A9 9 0 1 0 4 16.100L2 22Z"/>',
    zip: '<path d="M10 12v-1"/><path d="M10 18v-2"/><path d="M10 7V6"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15.500 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.010"/><circle cx="10" cy="20" r="2"/>'
  };
  var L = function (n, s, st) { return '<svg class="lu" width="' + (s || 16) + '" height="' + (s || 16) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' + (st ? ' style="' + st + '"' : "") + ' aria-hidden="true">' + I[n] + "</svg>"; };

  // Демо-документи: усі відкриваються так, як PDF у платформі
  var h1 = function (t) { return '<h4>' + t + '</h4>'; };
  var hero = function (a, b) { return '<div class="dvlogo">Soniachni Systemy</div><h3>' + a + '</h3><p class="dvs">' + b + '</p>'; };
  var tb = function (rows) { return '<table>' + rows.map(function (r, i) { var c = i ? "td" : "th"; return "<tr>" + r.map(function (x) { return "<" + c + ">" + x + "</" + c + ">"; }).join("") + "</tr>"; }).join("") + "</table>"; };
  var DOCS = {
    "Über_das_Unternehmen.pdf": { d: "14. Okt. 2026", s: "2.1 MB", p: [
      hero("Über das Unternehmen", "Wir planen und bauen Solaranlagen für Unternehmen.") + '<div class="dvband"></div>' + h1("Wer wir sind") + "<p>12 Jahre am Markt, über 40 realisierte Objekte und ein eigenes Montageteam.</p>" + h1("Was wir tun") + tb([["Leistung", "Was enthalten ist"], ["Verbrauchsaudit", "Lastprofil, Tarif, Einsparpotenzial"], ["Planung", "Belegung, Schema, Spezifikation"], ["Montage", "Eigenes Team, Inbetriebnahme"], ["Service", "Monitoring und planmäßige Wartung"]]),
      h1("Unser Team") + "<p>Ingenieure, Planer und Monteure arbeiten in einem Büro, deshalb führt ein Team das Projekt vom Aufmaß bis zum Start.</p>" + h1("Wo wir arbeiten") + "<p>Kyjiw, Brovary, Winnyzja, Lwiw und Umgebung.</p>",
      h1("Kontakt") + "<p>Kyjiw, vul. Soniachna 12<br>hello@sonyachni.example</p>"
    ] },
    "Referenzen_PV.pdf": { d: "09. Okt. 2026", s: "3.2 MB", p: [
      hero("PV-Referenzen", "Drei Objekte, die wir dieses Jahr übergeben haben.") + '<div class="dvband"></div>' + tb([["Objekt", "Leistung", "Amortisation"], ["Lager in Brovary", "150 kW", "4,2 Jahre"], ["Agrarkomplex", "320 kW", "4,8 Jahre"], ["Bürozentrum", "90 kW", "5,1 Jahre"]]) + h1("Lager in Brovary") + "<p>Die Anlage kam in sechs Wochen aufs Lagerdach, der Lagerbetrieb lief ohne Unterbrechung weiter.</p>",
      h1("Agrarkomplex") + "<p>Die Anlage deckt in der Saison die Tageslast der Kühlanlagen.</p>"
    ] },
    "Brandbook.pdf": { d: "20. Sept. 2026", s: "6.4 MB", p: [
      hero("Brandbook", "Logo, Farben und Schriften des Unternehmens.") + '<div class="dvband"></div>' + h1("Farben") + '<div class="dvsw"><i style="background:#0086CC"></i><i style="background:#39B54A"></i><i style="background:#FFB800"></i><i style="background:#D62828"></i></div>' + h1("Schrift") + "<p>Eine Schrift für alle Dokumente: Überschriften fett, Fließtext normal.</p>"
    ] },
    "Preisliste_Leistungen_2026.pdf": { d: "11. Okt. 2026", s: "96 KB", p: [
      hero("Preisliste Leistungen 2026", "Preise ohne MwSt., gültig bis Jahresende.") + '<div class="dvband"></div>' + tb([["Leistung", "Preis"], ["Verbrauchsaudit", "12.000 UAH"], ["PV-Planung bis 100 kW", "45.000 UAH"], ["PV-Planung über 100 kW", "nach Berechnung"], ["Service, pro Jahr", "ab 30.000 UAH"]])
    ] },
    "Firmendaten.pdf": { d: "02. Okt. 2026", s: "48 KB", p: [
      hero("Firmendaten", "Für Verträge und Rechnungen.") + '<div class="dvband"></div>' + tb([["Feld", "Wert"], ["Name", "TOV „Soniachni Systemy“"], ["Adresse", "Kyjiw, vul. Soniachna 12"], ["Direktor", "Kateryna Rudenko"]])
    ] },
    "Vertrag_Termobud_v3.pdf": { d: "21. Okt. 2026", s: "1.4 MB", p: [
      hero("Werkvertrag", "Bau einer 150-kW-Solaranlage auf dem Lager in Brovary.") + '<div class="dvband"></div>' + h1("1. Vertragsgegenstand") + "<p>Der Auftragnehmer plant und baut die Anlage, der Auftraggeber nimmt die Arbeiten ab und bezahlt sie.</p>" + h1("2. Fristen") + "<p>Die Montage dauert sechs Wochen ab dem Datum der Anzahlung.</p>" + h1("3. Zahlung") + tb([["Phase", "Anteil"], ["Anzahlung", "50%"], ["Lieferung der Ausrüstung", "30%"], ["Start", "20%"]]),
      h1("4. Gewährleistung") + "<p>Gewährleistung auf die Arbeiten: 5 Jahre. Auf die Ausrüstung: nach Herstellerbedingungen.</p>" + h1("5. Parteien") + "<p>Soniachni Systemy, Termobud.</p>"
    ] },
    "Präsentation_Termobud.pdf": { d: "heute", s: "4.8 MB", p: [
      hero("Solaranlage für Termobud", "Zwei Varianten für das Lager in Brovary.") + '<div class="dvband"></div>' + tb([["", "Variante A", "Variante B"], ["Leistung", "150 kW", "150 kW + Speicher"], ["Amortisation", "4,2 Jahre", "5,0 Jahre"]]) + h1("Warum wir") + "<p>Über 40 Objekte, ein eigenes Team und Service nach dem Start.</p>",
      h1("Nächster Schritt") + "<p>Termin vor Ort am Donnerstag um 10:00.</p>"
    ] },
    "Amortisation_PV_150kW.pdf": { d: "18. Okt. 2026", s: "210 KB", p: [
      hero("Amortisation PV 150 kW", "Berechnung für das Lager in Brovary.") + '<div class="dvband"></div>' + tb([["Kennzahl", "Wert"], ["Ertrag pro Jahr", "172.000 kWh"], ["Einsparung pro Jahr", "1,1 Mio. UAH"], ["Amortisation", "4,2 Jahre"]])
    ] }
  };

  // Вікно перегляду: те саме в карусельці й на екрані після кліку
  var viewer = function (n, pageNo) {
    var d = DOCS[n], k = pageNo || 0, total = d.p.length;
    var thumbs = d.p.map(function (p, i) { return '<div class="dvt' + (i === k ? " on" : "") + '" data-pg="' + i + '"><div class="dvth"><div class="dvmini dvpage">' + p + '</div></div><span>' + (i + 1) + '</span></div>'; }).join("");
    return '<div class="dvm" role="dialog" aria-label="' + n + '"><div class="dvh"><div class="dvn"><b>' + n + '</b><small>Vorschau der hochgeladenen Datei</small></div>'
      + '<span class="dvix"><i></i>Nicht indexiert</span><span class="dvd">' + L("filetext", 15) + 'Dokumente</span><span class="dvo" data-newtab>In neuem Tab öffnen' + L("ext", 15) + '</span><span class="dvx" data-close title="Schließen">' + L("x", 18) + '</span></div>'
      + '<div class="dvv"><div class="dvbar">' + L("menu", 17) + '<b>' + n.replace(/\.pdf$/, "").replace(/_/g, " ") + '</b><span class="dvpn"><u>' + (k + 1) + '</u> / ' + total + '</span><s></s>' + L("minus", 16) + '<span class="dvz"><u>66%</u></span>' + L("plus", 16) + '<s></s>' + L("fit", 16) + L("rotate", 16) + '<em>' + L("down", 16) + L("print", 16) + L("dots", 16) + '</em></div>'
      + '<div class="dvb"><div class="dvside">' + thumbs + '</div><div class="dvmain"><div class="dvpage">' + d.p[k] + '</div></div></div></div></div>';
  };

  // Рядки списку
  var acts = '<em class="ac">' + L("share") + L("down") + L("pen") + L("dots") + "</em>";
  var folder = function (n, tag) { return '<div class="fr2">' + L("folder") + "<span>" + n + "</span>" + (tag ? '<small class="ln">per Link</small>' : "") + acts + "</div>"; };
  var file = function (n) { var d = DOCS[n]; return '<div class="fr2" data-doc="' + n + '">' + L("file") + "<span>" + n + '</span><i class="ix" title="Nicht indexiert"></i><small>' + d.d + " (" + d.s + ")</small>" + acts + "</div>"; };
  var bar = function (crumb) { return '<div class="bh"><b>Speicher</b><span class="cmp">Soniachni Systemy</span></div><div class="pg st"><div class="tbr"><span class="cr">' + crumb + '</span><span class="so">' + L("sort", 14) + 'Sortierung: <b>Zuletzt aktualisiert</b></span>' + L("aup", 15) + '<span class="b2">' + L("up", 15) + 'Dateien hochladen</span><span class="b2">' + L("fup", 15) + 'Ordner hochladen</span><span class="b2">' + L("fplus", 15) + "Neuer Ordner</span></div>"; };
  var sep = L("chev", 14, "margin:0 6px;vertical-align:-2px;color:#737373");

  var root = bar("Stammordner") + folder("01_Unternehmen") + folder("02_Verträge", 1) + folder("03_Finanzen") + folder("04_Vertrieb") + folder("05_Projekte") + folder("06_Vorlagen") + folder("07_Meetings") + folder("08_Team") + folder("Gegenparteien") + "</div>";
  var files = '<div class="ly" data-show="1 2 3 4" style="left:0;right:0;top:0;bottom:0;border:0;border-radius:0;box-shadow:none;display:block;background:#FAFAFA">' + bar("Stammordner" + sep + "01_Unternehmen")
    + '<div data-hl="1">' + file("Über_das_Unternehmen.pdf") + file("Referenzen_PV.pdf") + file("Brandbook.pdf") + file("Preisliste_Leistungen_2026.pdf") + file("Firmendaten.pdf") + "</div></div></div>";
  var prev = '<div class="pop full" data-show="2"><div class="dvwrap" data-doc="Über_das_Unternehmen.pdf">' + viewer("Über_das_Unternehmen.pdf") + "</div></div>";
  var mi = function (ic, t, x) { return '<div class="mi' + (x || "") + '">' + L(ic, 15) + "<span>" + t + "</span></div>"; };
  var menu = '<div class="pop" data-show="3" style="right:22px;top:176px;width:230px;padding:6px;box-shadow:0 12px 34px -10px rgba(0,0,0,.3);border:1px solid #E6E6E6"><div data-hl="3">' + mi("down", "Herunterladen") + mi("pen", "Umbenennen") + mi("share", "Teilen") + '<hr class="mh">' + mi("finput", "Verschieben") + '<div class="mi">' + L("tag", 15) + "<span>Fürs Gedächtnis markieren</span>" + L("chev", 14, "margin-left:auto") + '</div><hr class="mh">' + mi("trash", "Löschen", " rd") + "</div></div>";
  var shHead = function (n) { return '<div class="shh"><b>Teilen: „' + n + '“</b>' + L("x", 17) + '</div><div class="shs">Wer den Ordner sieht und wie du ihn an jemanden ohne Aita-Konto schickst.</div>'; };
  var share = '<div class="pop full" data-show="4"><div class="shd">' + shHead("01_Unternehmen") + '<b class="sht">Personen mit Zugriff</b><div class="shv" data-hl="4">' + L("lock", 16) + '<span><b>Sichtbarkeit</b><small>Offen: Den Ordner sehen alle, die Zugriff auf dieses Unternehmen, Projekt oder diese SPV haben.</small></span><span class="b2">Einschränken</span></div><p class="shn">Der Ordner ist offen, daher wird der Zugriff vom Unternehmen, Projekt oder der SPV geerbt, zu dem er gehört. Schränk ihn ein, um bestimmten Teams oder Personen Zugriff zu geben.</p><hr class="mh"><b class="sht">Allgemeiner Zugriff</b><div class="seg"><span class="on">Nur Personen mit Zugriff</span><span>Jeder mit dem Link</span></div><p class="shn">Öffnen können nur Personen, denen in Aita Zugriff gegeben wurde.</p><div class="shf"><span class="b2 g">Fertig</span></div></div></div>';
  var link = '<div class="pop full" data-show="5"><div class="shd">' + shHead("02_Verträge") + '<b class="sht">Allgemeiner Zugriff</b><div class="seg"><span>Nur Personen mit Zugriff</span><span class="on">Jeder mit dem Link</span></div><div class="shg"><label>Was der Empfänger darf<span>Ansehen und herunterladen</span></label><label>Gültig<span>30 Tage</span></label></div><div class="shl" data-hl="5"><span>Link 4-mal geöffnet</span><span class="b2 g">Link kopieren</span></div><div class="shf"><span class="b2 g">Fertig</span></div></div></div>';
  var hit = function (n, w) { return '<div class="kr" data-doc="' + n + '">' + L("aright", 15) + "<b>" + n + "</b><small>" + w + "</small></div>"; };
  var find = '<div class="pop full" data-show="6"><div class="kd"><div class="kt"><span class="kc">' + L("folder", 13) + 'Speicher</span><small>Ctrl+K sucht hier und auf der Plattform</small>' + L("x", 16, "margin-left:auto") + '</div><div class="ki">' + L("search", 17) + 'Amortisation</div><div class="kl"><small>Gefunden: 3</small><div class="kg">Dateien</div><div data-hl="6">' + hit("Amortisation_PV_150kW.pdf", "in „Termobud“") + hit("Referenzen_PV.pdf", "in „01_Unternehmen“") + '</div><div class="kg">Ordner</div><div class="kr">' + L("aright", 15) + '<b>Amortisation</b></div><div class="kg">Agent</div><div class="kr ag">' + L("spark", 15, "color:#7C3AED") + "<b>Agenten fragen: Amortisation</b></div></div></div></div>";
  var en = function (n, w) { return '<div class="en2" data-doc="' + n + '"><span><b>' + n + "</b><small>" + w + "</small></span>" + L("ext", 14) + "</div>"; };
  var ai = '<div class="pop" data-show="7" style="right:24px;top:24px;bottom:24px;width:470px;display:flex;flex-direction:column;overflow:hidden;border:1px solid #E6E6E6"><div class="agh"><i>' + L("spark", 16) + '</i><span><b>Bereite eine Präsentation über uns vor…</b><small>Aita</small></span></div><div class="agb"><div class="agq">Bereite eine Präsentation über uns für Termobud vor</div><div class="ags">' + L("check", 15) + "Suche Unternehmensdaten</div><div class=\"ags\">" + L("check", 15) + 'Lese Dateien</div><div class="agc" data-hl="7"><div class="agt"><code>file.create</code>Datei erstellt</div>' + en("Präsentation_Termobud.pdf", "04_Vertrieb · 8 Folien") + en("Über_das_Unternehmen.pdf", "Quelle · 01_Unternehmen") + en("Referenzen_PV.pdf", "Quelle · 01_Unternehmen") + '</div><p>Die Präsentation wurde aus den Unternehmensdateien zusammengestellt. Klick auf die Datei, und sie öffnet sich.</p></div></div>';

  var css = `
.l4 .pg.st,.dvwrap{font-family:inherit}
.l4 .pg.st{padding:18px 22px;background:#FAFAFA;min-height:800px}
.l4 .bh .cmp{background:#F2F2F2;border-radius:999px;padding:2px 10px;font-size:12px;font-weight:500}
.l4 .tbr{display:flex;align-items:center;gap:8px;margin-bottom:14px;font-size:13.5px;color:#171717}.l4 .tbr .cr{margin-right:auto;font-size:14px}.l4 .tbr .so{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;color:#555;margin-right:8px}.l4 .tbr .so b{font-weight:500;color:#171717}
.l4 .b2{display:inline-flex;align-items:center;gap:7px;border:1px solid #E6E6E6;border-radius:8px;padding:6px 12px;font-size:13.5px;font-weight:500;background:#fff;white-space:nowrap}.l4 .b2.g{background:#EEF8EE;border-color:#9FDCAE;color:#14532D}
.l4 .fr2{display:flex;align-items:center;gap:9px;height:40px;padding:0 6px;border-radius:8px;font-size:15px;color:#111827}.l4 .fr2 small{color:#737373;font-size:12.5px}.l4 .fr2 small.ln{background:#EEF8EE;color:#14532D;border-radius:999px;padding:1px 9px;font-size:12px}.l4 .fr2 .ix{width:9px;height:9px;border:1.5px solid #BDBDBD;border-radius:50%;flex:none}.l4 .fr2 .ac{margin-left:auto;display:flex;gap:17px;font-style:normal;color:#111}
.l4 [data-doc],.dvwrap{pointer-events:auto;cursor:pointer}.l4 .fr2[data-doc]:hover{background:#F0F4FA}
.l4 .pop.full{left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.42);box-shadow:none;border-radius:0;display:flex;justify-content:center;align-items:flex-start;padding-top:44px}
.l4 .mi{display:flex;align-items:center;gap:9px;padding:7px 9px;font-size:14px;border-radius:6px}.l4 .mi.rd{color:#D62828}.l4 .mh,.dvx-none{border:0;border-top:1px solid #EDEDED;margin:6px 0}
.l4 .shd{width:556px;background:#fff;border-radius:10px;padding:20px 20px 16px;font-size:14px;line-height:1.4}.l4 .shh{display:flex;justify-content:space-between;align-items:center}.l4 .shh b{font-size:17px;font-weight:600}.l4 .shs{color:#555;font-size:13px;margin:3px 0 14px}.l4 .sht{display:block;font-weight:600;margin:0 0 8px;font-size:13.5px}.l4 .shv{display:flex;gap:10px;align-items:center;border:1px solid #E6E6E6;border-radius:8px;padding:9px 12px;color:#555}.l4 .shv span:first-of-type{flex:1;min-width:0}.l4 .shv b{display:block;color:#111;font-weight:500;font-size:13.5px}.l4 .shv small{color:#555;font-size:12px}.l4 .shn{color:#737373;font-size:12px;margin:7px 0 10px}.l4 .seg{display:grid;grid-template-columns:1fr 1fr;background:#F2F2F2;border-radius:8px;padding:3px;font-size:13.5px;text-align:center;color:#555}.l4 .seg span{padding:6px;border-radius:6px}.l4 .seg .on{background:#fff;color:#111;font-weight:500}.l4 .shf{text-align:right;margin-top:12px}.l4 .shg{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0}.l4 .shg label{font-size:12.5px;color:#555}.l4 .shg span{display:block;border:1px solid #E6E6E6;border-radius:8px;padding:7px 10px;color:#111;font-size:13.5px;margin-top:4px}.l4 .shl{display:flex;justify-content:space-between;align-items:center;padding:7px 10px;color:#555;font-size:13.5px}
.l4 .kd{width:420px;background:#fff;border-radius:10px;overflow:hidden;font-size:14px}.l4 .kt{display:flex;align-items:center;gap:7px;padding:10px 12px 4px;color:#737373}.l4 .kt small{font-size:11.5px}.l4 .kc{display:inline-flex;align-items:center;gap:4px;border:1px solid #CDEBD2;background:#EEF8EE;color:#14532D;border-radius:999px;padding:1px 8px;font-size:11.5px}.l4 .ki{display:flex;align-items:center;gap:9px;padding:6px 12px 10px;border-bottom:1px solid #EDEDED;font-size:14.5px}.l4 .kl{padding:8px}.l4 .kl>small{color:#737373;font-size:11.5px;padding:0 6px}.l4 .kg{color:#737373;font-size:12px;padding:8px 6px 3px}.l4 .kr{display:flex;align-items:center;gap:9px;padding:7px 8px;border-radius:6px;color:#555}.l4 .kr b{font-weight:500;color:#171717;font-size:13.5px}.l4 .kr small{margin-left:auto;font-size:11.5px;color:#737373}.l4 .kr.ag{background:#F5F5F5}
.l4 .agh{display:flex;gap:10px;align-items:center;padding:12px 14px;border-bottom:1px solid #EDEDED}.l4 .agh i{width:30px;height:30px;border-radius:8px;background:#EEF8EE;color:#14532D;display:grid;place-items:center}.l4 .agh b{display:block;font-size:14px;font-weight:600}.l4 .agh small{color:#737373;font-size:12px}.l4 .agb{padding:14px;font-size:14px;line-height:1.45;flex:1;overflow:hidden}.l4 .agq{background:#F2F2F2;border-radius:12px;padding:8px 12px;margin:0 0 12px auto;width:fit-content;max-width:85%}.l4 .ags{display:flex;align-items:center;gap:8px;border:1px solid #E6E6E6;border-radius:8px;padding:6px 10px;margin-bottom:6px;font-size:13px;color:#555}.l4 .ags svg{color:#39B54A}.l4 .agc{border:1px solid #E6E6E6;border-radius:10px;padding:8px 10px;margin:8px 0 12px}.l4 .agt{font-size:12.5px;color:#555;margin-bottom:4px}.l4 .agt code{font:11.5px ui-monospace,Menlo,monospace;background:#F2F2F2;border-radius:4px;padding:1px 5px;margin-right:6px}.l4 .en2{display:flex;justify-content:space-between;align-items:center;padding:6px 4px;border-radius:6px;color:#737373}.l4 .en2:hover{background:#F0F4FA}.l4 .en2 b{display:block;color:#171717;font-weight:500;font-size:13.5px}.l4 .en2 small{font-size:12px}
.l4 .w .row{display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13px}.l4 .w .row small{color:#737373;margin-left:auto;font-size:11.5px}.l4 .w .row[data-doc]:hover{color:#0050D6}
.dvm{width:732px;height:700px;background:#fff;border-radius:10px;padding:18px 20px 20px;display:flex;flex-direction:column;box-sizing:border-box;color:#111;font:14px/1.4 "Golos Text",system-ui,sans-serif;text-align:left}
.dvh{display:flex;align-items:center;gap:12px;margin-bottom:14px}.dvn{margin-right:auto;min-width:0}.dvn b{display:block;font-size:14.5px;font-weight:600}.dvn small{color:#737373;font-size:11.5px}.dvix{display:inline-flex;align-items:center;gap:5px;border:1.5px solid #39B54A;border-radius:999px;padding:1px 8px;font-size:11.5px;color:#555;white-space:nowrap}.dvix i{width:7px;height:7px;border:1px solid #9E9E9E;border-radius:50%}.dvd{display:inline-flex;align-items:center;gap:3px;font-size:12.5px;white-space:nowrap}.dvo{display:inline-flex;align-items:center;gap:6px;border:1px solid #E6E6E6;border-radius:6px;padding:6px 10px;font-size:13px;white-space:nowrap;cursor:pointer}.dvx{cursor:pointer;display:grid;place-items:center}
.dvv{flex:1;min-height:0;display:flex;flex-direction:column;background:#525659}.dvbar{height:46px;flex:none;background:#323639;color:#F1F1F1;display:flex;align-items:center;gap:11px;padding:0 14px;font-size:12.5px}.dvbar b{max-width:120px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:500}.dvbar u{text-decoration:none;background:#1F2224;padding:1px 7px;border-radius:2px}.dvbar s{width:1px;height:20px;background:#5F6368}.dvbar em{margin-left:auto;font-style:normal;display:flex;gap:13px}
.dvb{flex:1;min-height:0;display:flex}.dvside{width:230px;flex:none;background:#282A2D;overflow:hidden;padding:14px 0;display:flex;flex-direction:column;align-items:center;gap:12px}.dvt{text-align:center;color:#E8EAED;font-size:12px;cursor:pointer}.dvth{width:88px;height:124px;background:#fff;overflow:hidden;margin:0 auto 5px;outline:4px solid transparent}.dvt.on .dvth{outline-color:#8AB4F8}.dvmini{transform:scale(.2);transform-origin:0 0;width:440px!important;height:620px;box-shadow:none!important}
.dvmain{flex:1;min-width:0;overflow:auto;background:#525659;padding:8px;display:flex;justify-content:center}.dvpage{background:#fff;color:#171717;width:100%;max-width:440px;min-height:620px;padding:28px 32px;box-sizing:border-box;font:11.5px/1.5 "Golos Text",system-ui,sans-serif;box-shadow:0 1px 4px rgba(0,0,0,.4)}.dvpage h3{font-size:20px;font-weight:700;margin:12px 0 4px}.dvpage h4{font-size:13px;font-weight:700;margin:14px 0 4px}.dvpage p{margin:0 0 7px}.dvpage .dvs{color:#555}.dvlogo{font-weight:700;font-size:11px;letter-spacing:.02em}.dvband{height:52px;border-radius:6px;background:linear-gradient(100deg,#EEF4FF,#EEF8EE 55%,#FFF6E2);margin:10px 0}.dvpage table{width:100%;border-collapse:collapse;margin:6px 0}.dvpage th{background:#F5F5F5;text-align:left;font-weight:600;padding:4px 7px}.dvpage td{border-bottom:1px solid #EDEDED;padding:4px 7px}.dvsw{display:flex;gap:6px}.dvsw i{width:60px;height:28px;border-radius:5px}
.dvov{position:fixed;inset:0;z-index:2147483600;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box}.dvov .dvm{max-width:100%;max-height:100%}
@media(max-width:700px){.dvside{display:none}.dvd,.dvix{display:none}.dvbar b,.dvbar s{display:none}}
`;
  var st = document.createElement("style"); st.textContent = css; document.body.appendChild(st);

  // Відкрити документ на весь екран
  var ov = null;
  var close = function () { if (ov) { ov.remove(); ov = null; } };
  var open = function (n, k) { if (!DOCS[n]) return; close(); ov = document.createElement("div"); ov.className = "dvov"; ov.dataset.name = n; ov.innerHTML = viewer(n, k); document.body.appendChild(ov); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (ov && ov.contains(t)) {
      if (t === ov || t.closest("[data-close]")) return close();
      var pg = t.closest("[data-pg]"); if (pg) return open(ov.dataset.name, +pg.dataset.pg);
      if (t.closest("[data-newtab]")) { var d = DOCS[ov.dataset.name], u = URL.createObjectURL(new Blob(['<!doctype html><meta charset="utf-8"><title>' + ov.dataset.name + '</title><body style="font:15px/1.5 system-ui;max-width:640px;margin:32px auto;padding:0 16px">' + d.p.join("<hr>")], { type: "text/html" })); window.open(u, "_blank"); }
      return;
    }
    var a = t.closest('a[href^="#doc="]');
    if (a) { e.preventDefault(); e.stopPropagation(); return open(decodeURIComponent(a.getAttribute("href").slice(5))); }
    var s = t.closest('a[href^="#step="]');
    if (s) { e.preventDefault(); var h = document.querySelector('.hs[data-i="' + s.getAttribute("href").slice(6) + '"]'); if (h) { h.scrollIntoView({ block: "center" }); h.click(); } return; }
    var el = t.closest("[data-doc]");
    if (el) { e.preventDefault(); open(el.getAttribute("data-doc")); }
  }, true);

  var row = function (ic, n, s, doc) { return '<div class="row"' + (doc ? ' data-doc="' + doc + '"' : "") + ">" + L(ic, 15) + "<span>" + n + "</span>" + (s ? "<small>" + s + "</small>" : "") + "</div>"; };
  MP({
    name: "Speicher",
    promise: "Alle Dokumente des Unternehmens an einem Ort",
    lead: "Dateien liegen dort, wo das Team sie sucht, und der KI-Agent nimmt von hier Daten für Dokumente und Präsentationen.",
    hero: root,
    flow: [["file", "Datei"], ["folder", "Ordner"], ["lock", "Zugriff"], ["link", "Link"], ["star", "AI"]],
    diff: [["star", "Daten für die KI", "Der Agent nimmt Unternehmensdaten aus dem Speicher, wenn er Dokumente vorbereitet."], ["link", "Ohne Konto", "Einen Ordner kannst du per Link mit einem Auftragnehmer oder der Bank teilen."], ["lock", "Ordnerzugriff", "Die Einschränkung gilt für den ganzen Ordner, und der Link öffnet keine Finanzdokumente."]],
    steps: [["Ordner", "Eigene Ordner gibt es im Unternehmen, in jedem Projekt und in jeder Projektgesellschaft (SPV)."], ["Dateien", "Neben dem Namen stehen Datum und Größe. Klick auf die Datei, und sie öffnet sich."], ["Ansicht", "Die Datei öffnet sich in einem Plattformfenster, mit Seiten und Zoom."], ["Aktionen", "Herunterladen, umbenennen, verschieben oder fürs Plattformgedächtnis markieren."], ["Zugriff", "Ein Ordner lässt sich auf einzelne Teams und Personen einschränken."], ["Link", "Die Person öffnet den Ordner per Link ohne Registrierung, und du entscheidest, wie lange er gilt."], ["Suche", "Ctrl+K sucht in Dateinamen und in ihrem Text."], ["KI-Agent", "Der Agent nimmt Daten aus dem Speicher und bereitet eine Präsentation oder ein Dokument vor."]],
    dim: [],
    scene: root + files + menu + prev + share + link + find + ai,
    ai: [["Gedächtnis", "Dateien, die fürs Gedächtnis markiert sind, berücksichtigt der Assistent in seinen Antworten.", `<small>Preisliste_Leistungen_2026.pdf</small><div class="msg">Fürs Plattformgedächtnis indexiert.</div>`],
      ["Dokumente", "Der Agent bereitet aus den Unternehmensdaten eine Präsentation oder ein Angebot vor.", `<small>Anfrage an den Agenten</small><br>Erstell ein Angebot für Termobud<div class="msg">Ich nehme Daten aus dem Ordner 01_Unternehmen.</div>`],
      ["Suche", "Frag, wo eine Datei liegt, und der Assistent zeigt den Ordner.", `<small>Anfrage</small><br>Wo ist der Vertrag mit Termobud?<div class="msg">02_Verträge / Termobud.</div>`]],
    more: `<div class="tall"><h3>Hochladen</h3><div class="w">${row("up", "Zieh Dateien und Ordner ins Fenster")}<hr>${row("file", "Ersetzen (neue Version)")}${row("file", "Beide behalten")}${row("file", "Überspringen")}</div></div>
      <div><h3>Versionen</h3><div class="w">${row("file", "Vertrag_Termobud_v3.pdf", "neue Version", "Vertrag_Termobud_v3.pdf")}</div></div>
      <div><h3>ZIP-Archiv</h3><div class="w">${row("zip", "Ordner als ein Archiv herunterladen")}</div></div>
      <div class="tall"><h3>Telefon</h3><div class="w">${row("phone", "Referenzen_PV.pdf", "3 von 12", "Referenzen_PV.pdf")}<hr>${row("down", "Herunterladen")}${row("share", "Teilen")}${row("ext", "Öffnen")}</div></div>
      <div><h3>Dateien aus dem Chat</h3><div class="w">${row("chat", "Ordner Chat", "12")}${row("folder", "Werden automatisch abgelegt")}</div></div>
      <div><h3>Projekte und SPVs</h3><div class="w">${row("folder", "Termobud", "24")}${row("folder", "SPV Skhid", "9")}</div></div>`,
    access: [["Offener Ordner", "Standardmäßig sehen ihn alle, die Zugriff auf das Unternehmen oder Projekt haben."], ["Eingeschränkter Ordner", "Die Einschränkung gilt für den Ordner und seinen ganzen Inhalt."], ["Link", "Eingeschränkte Unterordner und Finanzdokumente bleiben geschlossen."]],
    start: [["Ordner", "Leg Ordner für dein Unternehmen an."], ["Dateien", "Lade Dokumente und Daten über das Unternehmen hoch."], ["Zugriff", "Schränk Ordner ein, die nicht alle sehen sollen."]],
    faq: [["Was ist das Modul „Speicher“ und wozu braucht es ein Unternehmen?", "Das ist der Ort für alle Dateien des Unternehmens, der Projekte und SPVs, mit Ordnern, Zugriffen und Volltextsuche."], ["Wie nutzt der KI-Agent den Speicher?", "Der Agent liest die Dateien, auf die er Zugriff hat, und nimmt daraus Daten für Dokumente und Präsentationen."], ["Kann ich einen Ordner mit jemandem ohne Konto teilen?", "Ja. Der Link funktioniert ohne Anmeldung, die Gültigkeit legst du fest."], ["Was passiert, wenn ich eine Datei an eine Aufgabe anhänge?", "Es entsteht keine Kopie: Die Aufgabe verweist auf die Datei im Speicher."], ["Kostet das Modul extra?", "Nein. „Speicher“ ist in jedem Paket enthalten."]],
    final: "Wir zeigen, wie du die Dokumente des Unternehmens an einem Ort sammelst"
  });
})();
