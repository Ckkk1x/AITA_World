// AI-агент у правому нижньому куті сторінок модулів: кодова копія вікна з платформи.
// Запитання й відповіді готові, із сервером нічого не обмінюється. Демо-дані вигадані.
(function () {
  var mod = window.AITA_M || "";
  var P = { pg: "plugins", gp: "user-groups", pr: "products", od: "orders", sl: "contractor", mk: "work-market", fn: "finance", ct: "contracts", pl: "planning", st2: "weekly-summary", sb: "business-plans", sr: "progress-review", sv: "vision", so: "overview", ml: "mail", ib: "queue", cl: "calendar", db: "dashboard", kb: "knowledge-base", gl: "goals", dc: "decisions", ch: "chat", dr: "drafts", as: "my-questions", nt: "notes", mt: "meeting-notes", leads: "leads", tasks: "tasks", cont: "contacts", org: "organizations", st: "storage", cp: "competitors", net: "network", co: "companies" };

  // chip: підпис кнопки; q: повне запитання; mem: скільки спогадів; steps: дії агента; tool: картки-посилання; a: відповідь блоками
  var QA = {
    "SPV": [
      { chip: "Wer unterschreibt", ic: "s", q: "Wer darf den EPC-Vertrag für Termobud Enerdzhi unterschreiben?", mem: 4, steps: ["Lese die SPV-Karte", "Prüfe die Beschlüsse des Vorstands"], tool: { k: "spv.signatories", t: "Zeichnungsberechtigte", e: [["Oleh Martyniuk", "Geschäftsführer · allein · seit 01.02.2026", "#step=4"], ["Iryna Tkach", "Finanzdirektorin · bis 50.000 €", "#step=4"]] }, a: ["Es unterschreibt <b>Oleh Martyniuk</b>, Geschäftsführer, allein. Der Vorstand hat den EPC-Vertrag am 05.11. beschlossen.", "Iryna Tkach unterschreibt Dokumente nur bis 50.000 €, deshalb kann sie den EPC-Vertrag nicht unterschreiben."] },
      { chip: "Unterlagen für den Käufer", ic: "z", q: "Stell die SPV-Unterlagen für die Prüfung durch den Käufer zusammen", mem: 9, steps: ["Lese die Gründungsunterlagen", "Prüfe die Lizenzen", "Lese die Cap Table"], tool: { k: "spv.documents", t: "SPV-Unterlagen", e: [["Satzung", "Fassung Nr. 2 · 30.09.2026", "#step=6"], ["Registerauszug", "Stand 01.11.2026", "#step=6"], ["Gesellschaftervereinbarung", "Termobud · Green Invest Fund", "#step=6"]] }, a: ["Ich habe Satzung, Registerauszug, Gesellschaftervereinbarung, Eigentümerstruktur (70 und 30 %) und vier Lizenzen zusammengestellt.", "<b>Es fehlt</b> eine aktuelle Unternehmensbewertung: Die letzte wurde vor der Series-A-Runde gemacht."] },
      { chip: "FCR-Markt", ic: "c", q: "Kann ein BESS mit 2 MW am FCR-Markt teilnehmen?", mem: 3, steps: ["Lese die SPV-Lizenzen"], tool: { k: "spv.licenses", t: "Lizenzen", e: [["Präqualifikation ÜNB · FCR", "Aktiv · 2 MW", "#step=6"], ["Präqualifikation ÜNB · aFRR", "In Bearbeitung · eingereicht am 20.10.2026", "#step=6"]] }, a: ["Ja. Die Präqualifikation beim ÜNB für FCR gilt für 2 MW, deshalb rechnet der BESS-Simulator diese Erlöse ein.", "Am aFRR-Markt noch nicht: Der Antrag wurde am 20.10. eingereicht, eine Entscheidung gibt es noch nicht."] }
    ],    "Projekte": [
      { chip: "Projektstatus", ic: "s", q: "Was blockiert gerade PV + BESS 8,5 MW?", mem: 7, steps: ["Lese die Projektkarte", "Prüfe die Aufgaben"], tool: { k: "task.list", t: "Überfällige Aufgaben", e: [["EPC-Vertrag mit EnerhoMontazh", "Oleh Martyniuk · 6 Tage überfällig", "#step=3"], ["Transformator 7,2 MW bestellen", "Roman Boiko · 6 Tage überfällig", "#step=3"]], more: "Und 3 weitere: alle Aufgaben öffnen", href: "#step=3" }, a: ["Das Projekt ist in der Phase <b>Ready to build</b>, aber der Bau beginnt nicht ohne EPC-Vertrag. Verantwortlich ist <b>Oleh Martyniuk</b>.", "Die Bestellung des Transformators wartet auf denselben Vertrag, es ist also ein Engpass, nicht zwei."] },
      { chip: "Projektfinanzen", ic: "z", q: "Rechnet sich die Anlage?", mem: 4, steps: ["Lese das Finanzmodell"], a: ["Laut Finanzmodell IRR <b>18,6 %</b>, NPV <b>4,1 Mio. €</b>, CAPEX <b>8,4 Mio. €</b>. Amortisation in <b>4,6 Jahren</b>.", "Die Zahlen hat das Modell berechnet, von Hand hat sie niemand eingegeben."] },
      { chip: "Für Investor freigeben", ic: "c", q: "Gib das Projekt für den Investor Green Invest Fund zum Lesen frei", mem: 3, steps: ["Prüfe die Zugriffe", "Bereite die Einladung vor"], tool: { k: "access.grant", t: "Zugriff", e: [["Green Invest Fund", "Lesen · PV + BESS 8,5 MW", "#step=8"]] }, a: ["Der Investor sieht Übersicht, Finanzen und Unterlagen, kann aber nichts ändern. Bestätige, dann schicke ich die Einladung."] }
    ],    "Leads": [
      { chip: "Leads anzeigen", ic: "s", q: "Zeig alle aktiven Leads", mem: 12, steps: ["Suche Leads", "Lese die Phasen der Funnel"], tool: { k: "entity.list", t: "Lead-Liste", e: [["Andrii Melnyk", "PV-Vertrieb · Verhandlungen", P.leads], ["Kateryna Rudenko", "PV-Vertrieb · Demo", P.leads], ["Nataliia Melnyk", "PV-Vertrieb · Erstkontakt", P.leads]], more: "Und 4 weitere: vollständige Liste öffnen", href: P.leads },
        a: ["<b>Phase „Verhandlungen“</b><ul><li><b>Andrii Melnyk</b> (Termobud): Angebot mit zwei Varianten bis Freitag.</li></ul><b>Phase „Demo“</b><ul><li><b>Kateryna Rudenko</b> (Enerhobud Servis): heiß, Termin am 22.10. um 12:00.</li><li><b>Viktor Savchuk</b> (Dnipro Ahro): wartet auf die zweite Vorführung.</li></ul>", "<b>Hinweis:</b> Leads in der Phase „Neuer Lead“ sind noch nicht qualifiziert, deshalb zähle ich sie nicht zu den aktiven."] },
      { chip: "Lead-Übersicht", ic: "z", q: "Gib mir eine Übersicht über die letzten Leads", mem: 9, steps: ["Suche Leads", "Lese die letzten Anrufe"], a: ["Diese Woche kamen 3 Leads dazu, einer ist in die Phase „Verhandlungen“ gewechselt.<ul><li><b>Andrii Melnyk</b>: Angebot bis Freitag, der Geschäftsführer vergleicht noch 2 Angebote.</li><li><b>Nataliia Melnyk</b>: Der nächste Kontakt war gestern fällig, überfällig.</li><li><b>Ihor Petrenko</b>: neue Anfrage über die Website.</li></ul>", "<b>Was zu tun ist:</b> Nataliia anrufen und Termobud das Angebot schicken. Wenn du willst, lese ich die Notizen zu jedem dieser Leads."] },
      { chip: "Lead anlegen", ic: "c", q: "Leg einen Lead für Termobud in der Funnel Partner an", mem: 3, steps: ["Suche den Kontakt", "Lege den Lead an"], tool: { k: "entity.create", t: "Lead angelegt", e: [["Termobud: Partnerschaft", "Partner · Neuer Lead", P.leads]] }, a: ["Fertig. Der Kontakt <b>Andrii Melnyk</b> war schon in der Datenbank, deshalb ist der Lead mit ihm verknüpft und kein neuer Kontakt angelegt."] }
    ],
    "Aufgaben": [
      { chip: "Aufgaben anzeigen", ic: "s", q: "Zeig meine offenen Aufgaben", mem: 7, steps: ["Suche Aufgaben"], tool: { k: "task.list", t: "Aufgabenliste", e: [["Termobud: Angebot mit zwei Varianten", "In Progress · High · bis Freitag", P.tasks], ["Termobud: Besuch vor Ort und Dachvermessung", "To Do · Medium · 23.10", P.tasks], ["Alfa Merezhi: Spezifikation aktualisieren", "To Do · Low", P.tasks]], more: "Und 2 weitere: Board öffnen", href: P.tasks }, a: ["Du hast 5 offene Aufgaben, eine davon ist diese Woche fällig.", "<b>Am dringendsten:</b> das Angebot für Termobud, weil es den Termin vor Ort blockiert."] },
      { chip: "Was blockiert ist", ic: "z", q: "Was ist gerade blockiert?", mem: 5, steps: ["Suche Aufgaben", "Prüfe die Verknüpfungen"], tool: { k: "task.relations", t: "Aufgabenverknüpfungen", e: [["Preis der Ausrüstung abstimmen", "Blocked · Critical · 3 Tage überfällig", P.tasks]] }, a: ["<b>Die Kette:</b> Ohne Preis der Ausrüstung gibt es kein Angebot, und ohne Angebot keinen Termin vor Ort.", "Wenn du willst, schreibe ich Oleh im Aufgaben-Chat."] },
      { chip: "Aufgabe anlegen", ic: "c", q: "Gib Iryna die Aufgabe, bis Freitag das Angebot für Termobud zu machen", mem: 4, steps: ["Suche die Person", "Lege die Aufgabe an"], tool: { k: "task.create", t: "Aufgabe angelegt", e: [["Termobud: Angebot mit zwei Varianten", "Iryna Tkach · bis Freitag", P.tasks]] }, a: ["Die Aufgabe ist angelegt und mit dem Lead Termobud verknüpft. Iryna bekommt eine Benachrichtigung."] }
    ],
    "Kontakt": [
      { chip: "Kontakt finden", ic: "s", q: "Finde Andrii Melnyk", mem: 8, steps: ["Suche Kontakte"], tool: { k: "contact.list", t: "Kontakt", e: [["Andrii Melnyk", "Termobud · stellv. Geschäftsführer", P.cont]] }, a: ["<b>Andrii Melnyk</b> ist in zwei Funnels:<ul><li><b>PV-Vertrieb:</b> Phase „Verhandlungen“.</li><li><b>Partner:</b> Phase „Erstkontakt“.</li></ul>"] },
      { chip: "Worüber gesprochen wurde", ic: "z", q: "Worüber haben wir zuletzt mit Andrii gesprochen?", mem: 11, steps: ["Suche den Kontakt", "Lese die Meeting-Aufzeichnungen"], tool: { k: "meeting.list", t: "Meetings", e: [["Termobud - Aita", "20. Okt. · Aufzeichnung fertig · 42 Min.", P.cont]] }, a: ["Am 20. Oktober wurde Folgendes vereinbart:<ul><li>Angebot mit zwei Varianten bis Freitag.</li><li>Termin vor Ort am Donnerstag um 10:00.</li></ul>", "Der Geschäftsführer vergleicht noch zwei Angebote, deshalb zählt die Amortisation."] },
      { chip: "Kontakt anlegen", ic: "c", q: "Füg Pavlo Hnatiuk von Termobud hinzu, Ingenieur", mem: 2, steps: ["Suche die Organisation", "Lege den Kontakt an"], tool: { k: "contact.create", t: "Kontakt angelegt", e: [["Pavlo Hnatiuk", "Termobud · Ingenieur", P.cont]] }, a: ["Der Kontakt ist angelegt und mit der Organisation <b>Termobud</b> verknüpft."] }
    ],
    "Organisationen": [
      { chip: "Organisation finden", ic: "s", q: "Zeig alle Kunden", mem: 6, steps: ["Suche Organisationen"], tool: { k: "org.list", t: "Organisationen", e: [["Termobud", "Bau · 3 Kontakte", P.org], ["Enerhobud Servis", "Energie · 1 Kontakt", P.org], ["Ahro Zakhid", "Landwirtschaft · 1 Kontakt", P.org]] }, a: ["Du hast 3 Kunden. Die meisten Kontakte hat <b>Termobud</b>."] },
      { chip: "Wer entscheidet", ic: "z", q: "Wer entscheidet bei Termobud?", mem: 7, steps: ["Lese die Organisationskarte"], tool: { k: "contact.list", t: "Kontakte der Organisation", e: [["Olena Sydorenko", "Geschäftsführerin · entscheidet", P.cont], ["Andrii Melnyk", "Stellv. Geschäftsführer · entscheidet", P.cont]] }, a: ["Es entscheiden zwei Personen. Technisch betreut <b>Andrii Melnyk</b> das Projekt."] },
      { chip: "Organisation anlegen", ic: "c", q: "Füg die Organisation Lohist Plius hinzu, Kunde", mem: 1, steps: ["Prüfe auf Dubletten", "Lege die Organisation an"], tool: { k: "org.create", t: "Organisation angelegt", e: [["Lohist Plius", "Rolle: Kunde", P.org]] }, a: ["Fertig. Diese Organisation gab es in der Datenbank noch nicht."] }
    ],
    "Chat": [
      { chip: "Neuigkeiten", ic: "s", q: "Was habe ich heute in den Chats verpasst?", mem: 6, steps: ["Lese die Chats", "Suche Erwähnungen"], tool: { k: "chat.rooms", t: "Chats", e: [["Task · Angebot für Termobud", "3 neue Nachrichten", P.ch], ["Oleh Martyniuk", "Olehs Agent wartet auf eine Antwort", P.ch]] }, a: ["Zwei Chats warten auf dich. <b>Olehs Agent</b> bittet um zwei Zeilen zum Termin mit Termobud."] },
      { chip: "Entscheidungen", ic: "z", q: "Welche Entscheidungen warten auf Bestätigung?", mem: 4, steps: ["Lese die Vereinbarungen aus den Meetings"], tool: { k: "decision.list", t: "Vereinbarungen", e: [["Aufteilung 15/85 bis 400.000 €", "Aus dem Meeting · wartet auf Bestätigung", P.ch]] }, a: ["Eine Vereinbarung wartet auf Bestätigung. Das geht direkt im Chat."] },
      { chip: "Dem Team schreiben", ic: "c", q: "Schreib Iryna, dass das Angebot bis Freitag gebraucht wird", mem: 2, steps: ["Suche die Person", "Bereite die Nachricht vor"], tool: { k: "chat.send", t: "Entwurf", e: [["Iryna Tkach", "Das Angebot für Termobud wird bis Freitag gebraucht", P.ch]] }, a: ["Der Entwurf ist fertig. Senden?"] }
    ],
    "Entwürfe": [
      { chip: "Meine Dokumente", ic: "s", q: "Welche Dokumente warten auf meine Durchsicht?", mem: 3, steps: ["Suche Dokumente"], tool: { k: "draft.list", t: "Dokumente", e: [["Angebot Termobud: Text und Tabelle", "2 Kommentare · 1 Vorschlag", P.dr]] }, a: ["Ein Dokument wartet auf dich."] },
      { chip: "Offene Änderungen", ic: "z", q: "Was ist im Angebot für Termobud noch offen?", mem: 5, steps: ["Lese das Dokument"], tool: { k: "draft.get", t: "Dokument", e: [["Angebot Termobud: Text und Tabelle", "Kommentar von Oleh · Montagefristen", P.dr]] }, a: ["Offen ist noch eine Frage zu den Montagefristen."] },
      { chip: "Änderung vorschlagen", ic: "c", q: "Kürz den zweiten Absatz", mem: 2, steps: ["Lese das Dokument", "Bereite den Vorschlag vor"], tool: { k: "draft.suggest", t: "Vorschlag", e: [["Angebot Termobud: Text und Tabelle", "Wartet auf deine Zustimmung", P.dr]] }, a: ["Ich habe einen Vorschlag vorbereitet, den Text habe ich nicht geändert."] }
    ],
    "Meine Fragen": [
      { chip: "Wer nicht geantwortet hat", ic: "s", q: "Wer hat auf meine Fragen noch nicht geantwortet?", mem: 3, steps: ["Suche Fragen"], tool: { k: "ask.list", t: "Fragen", e: [["Ist der Kostenplan für Termobud fertig?", "Iryna Tkach · bis 7. Nov.", P.as], ["Sind Wechselrichter auf Lager?", "Roman Boiko · bis 8. Nov.", P.as]] }, a: ["Wir warten auf zwei Antworten."] },
      { chip: "Man fragt mich", ic: "z", q: "Was fragt man mich?", mem: 2, steps: ["Suche Fragen"], tool: { k: "ask.list", t: "Fragen", e: [["Fahren wir am Donnerstag zum Objekt?", "Olehs Agent · heute bis 20:15", P.as]] }, a: ["Eine Frage mit Frist heute."] },
      { chip: "Kollegen fragen", ic: "c", q: "Frag Iryna, ob der Kostenplan fertig ist, warte einen Tag", mem: 2, steps: ["Suche die Person", "Lege die Frage an"], tool: { k: "ask.create", t: "Frage gesendet", e: [["Ist der Kostenplan fertig?", "Iryna Tkach · 1 Tag", P.as]] }, a: ["Die Frage ist gesendet. Die Antwort siehst du in der Aufgabe."] }
    ],
    "Notizen": [
      { chip: "Notiz finden", ic: "s", q: "Wo ist die Notiz zum Lagerdach?", mem: 2, steps: ["Suche Notizen"], tool: { k: "note.list", t: "Notizen", e: [["Besichtigung des Lagerdachs", "Heute, 10:46", P.nt]] }, a: ["Ich habe die Notiz mit Checkliste und Fotos gefunden."] },
      { chip: "Was in den Notizen steht", ic: "z", q: "Was wollte ich vor Ort prüfen?", mem: 3, steps: ["Lese die Notiz"], a: ["In der Checkliste sind zwei Punkte offen:<ul><li>Zustand von Dach und Abdichtung.</li><li>Platz für die Wechselrichter.</li></ul>"] },
      { chip: "Notiz aufschreiben", ic: "c", q: "Schreib eine Notiz: Besuch vor Ort am Donnerstag um 10:00", mem: 1, steps: ["Lege die Notiz an"], tool: { k: "note.create", t: "Notiz angelegt", e: [["Besuch am Donnerstag", "Zur Warteschlange hinzugefügt", P.nt]] }, a: ["Fertig. Die Notiz ist schon in der Warteschlange."] }
    ],
    "Meeting-Notizen": [
      { chip: "Was beschlossen wurde", ic: "s", q: "Was wurde im gestrigen Meeting beschlossen?", mem: 9, steps: ["Suche das Meeting", "Lese die Zusammenfassung"], tool: { k: "meeting.get", t: "Meeting", e: [["Termobud - Aita", "42 Min. 18 Sek. · 4 Entscheidungen · 5 Aufgaben", P.mt]] }, a: ["Vereinbart wurde Folgendes:<ul><li>Angebot in zwei Varianten.</li><li>Besuch vor Ort am Donnerstag um 10:00.</li></ul>"] },
      { chip: "Meine Aufgaben", ic: "z", q: "Was muss ich nach dem Meeting tun?", mem: 5, steps: ["Lese die Aufgaben aus dem Meeting"], tool: { k: "meeting.get", t: "Aufgaben aus dem Meeting", e: [["Termin für den Besuch vor Ort abstimmen", "Kateryna Rudenko", P.mt]] }, a: ["Ein Punkt liegt bei dir. Aufgabe anlegen?"] },
      { chip: "Meeting aufzeichnen", ic: "c", q: "Zeichne dieses Meeting auf", mem: 1, steps: ["Prüfe den Link", "Starte die Aufzeichnung"], tool: { k: "meeting.start", t: "Aufzeichnung", e: [["Termobud - Aita", "Der Notetaker kommt in einer Minute dazu", P.mt]] }, a: ["Der Notetaker kommt in etwa einer Minute unter dem Namen Aita Notetaker dazu."] }
    ],
    "Entscheidungslog": [
      { chip: "Entscheidung finden", ic: "s", q: "Was wurde zur Anzahlung beschlossen?", mem: 7, steps: ["Suche im Log"], tool: { k: "decision.list", t: "Entscheidungen", e: [["Die Montage startet erst nach 50 % Anzahlung", "Gültig · Beleg A · Überprüfung am 29. Jan.", P.dc]] }, a: ["Die Entscheidung gilt. Grund: Ohne Anzahlung bucht der Auftragnehmer keinen Montagetrupp."] },
      { chip: "Was wartet", ic: "z", q: "Was wartet auf Bestätigung?", mem: 4, steps: ["Lese die Warteschlange"], tool: { k: "decision.list", t: "Warteschlange", e: [["Wir richten die Werbung auf Ingenieurbüros aus", "Ausstehend · Beleg C", P.dc], ["Die Variante mit Speicher zeigen wir als zweite", "Ausstehend · Beleg B", P.dc]] }, a: ["Zwei Einträge warten auf dich."] },
      { chip: "Entscheidung festhalten", ic: "c", q: "Halte die Entscheidung fest: 50 % Anzahlung, weil wir den Montagetrupp im Voraus buchen", mem: 3, steps: ["Prüfe auf Dubletten", "Lege den Eintrag an"], tool: { k: "decision.create", t: "Eintrag angelegt", e: [["Die Montage startet erst nach 50 % Anzahlung", "Überprüfung in 90 Tagen", P.dc]] }, a: ["Die Entscheidung ist mit Begründung festgehalten. Überprüft wird sie in 90 Tagen."] }
    ],
    "Ziele": [
      { chip: "Ziele anzeigen", ic: "s", q: "Zeig unsere Ziele", mem: 6, steps: ["Lese die Ziele"], tool: { k: "goal.list", t: "Ziele", e: [["20 PV-Projekte abschließen", "Zuversicht 70 % · im Plan", P.gl], ["Montage auf fünf Wochen verkürzen", "Zuversicht 30 % · gefährdet", P.gl]] }, a: ["7 aktive Ziele. Gefährdet ist eins: die Montagefristen."] },
      { chip: "Was gefährdet ist", ic: "z", q: "Welche Ziele sind gefährdet?", mem: 4, steps: ["Lese die Schlüsselergebnisse"], a: ["<b>Montage auf fünf Wochen verkürzen:</b> Aktuell sind es sechseinhalb, und bis Fristende bleibt ein Monat."] },
      { chip: "Ergebnis aktualisieren", ic: "c", q: "Aktualisiere das Ergebnis: 14 Anlagen in Betrieb genommen", mem: 2, steps: ["Suche das Ergebnis", "Trage den Wert ein"], tool: { k: "kr.checkin", t: "Aktualisierung", e: [["Anlagen in Betrieb", "13 → 14 von 20", P.gl]] }, a: ["Ergebnis aktualisiert."] }
    ],
    "Wissensdatenbank": [
      { chip: "Regelung finden", ic: "s", q: "Was nehme ich zum Besuch vor Ort mit?", mem: 5, steps: ["Suche in der Wissensdatenbank"], tool: { k: "kb.search", t: "Seiten", e: [["Besuch vor Ort", "Montage · Regelungen", P.kb]] }, a: ["Maßband, Entfernungsmesser und Drohne. Sag vor dem Besuch dem Wachdienst Bescheid."] },
      { chip: "Was veraltet ist", ic: "z", q: "Welche Seiten sollten geprüft werden?", mem: 3, steps: ["Prüfe die Prüftermine"], tool: { k: "kb.search", t: "Seiten", e: [["Sicherheit auf dem Dach", "Prüftermin vor 3 Tagen abgelaufen", P.kb]] }, a: ["Eine Seite wartet auf Prüfung. Roman hat schon eine Erinnerung."] },
      { chip: "Seite schreiben", ic: "c", q: "Erstell eine Checkliste für die Übergabe der Anlage", mem: 4, steps: ["Lese die Regelungen", "Lege die Seite an"], tool: { k: "kb.create", t: "Seite angelegt", e: [["Checkliste Übergabe der Anlage", "Montage · Checklisten", P.kb]] }, a: ["Die Seite ist angelegt. Prüf sie, bevor du sie fürs Team veröffentlichst."] }
    ],
    "Dashboard": [
      { chip: "Tagesüberblick", ic: "s", q: "Was ist heute dringend?", mem: 8, steps: ["Lese die Aufgaben"], tool: { k: "task.list", t: "Aufgaben", e: [["Termobud: Angebot mit zwei Varianten", "Überfällig: 2 T.", P.tasks]] }, a: ["Zwei kritische Aufgaben. Fang mit dem Angebot an, denn ohne es gibt es keinen Termin."] },
      { chip: "Portfoliostatus", ic: "z", q: "Wie sieht das Portfolio aus?", mem: 3, steps: ["Lese die Projekte"], a: ["17 Projekte, 5 in Betrieb, Portfolio-CAPEX $4.1M."] },
      { chip: "Wen anrufen", ic: "c", q: "Wen soll ich heute anrufen?", mem: 5, steps: ["Lese die Leads"], tool: { k: "entity.list", t: "Leads", e: [["Nataliia Melnyk", "Der nächste Kontakt war gestern fällig", P.leads]] }, a: ["Fang mit Nataliia an: Der Kontakt ist überfällig."] }
    ],
    "Kalender": [
      { chip: "Was heute ansteht", ic: "s", q: "Welche Meetings habe ich heute?", mem: 4, steps: ["Lese den Kalender"], tool: { k: "event.list", t: "Termine", e: [["Termobud - Aita", "15:00 · online · Notetaker kommt dazu", P.cl]] }, a: ["Heute ein Meeting mit einem Kunden um 15:00."] },
      { chip: "Freie Zeit", ic: "z", q: "Finde eine Stunde für mich, Oleh und Iryna", mem: 2, steps: ["Prüfe die Kalender"], a: ["Gemeinsame freie Zeit: Dienstag, 14:00–15:00."] },
      { chip: "Meeting ansetzen", ic: "c", q: "Setz ein Meeting mit Termobud am Donnerstag um 10:00 an", mem: 3, steps: ["Suche den Lead", "Lege den Termin an"], tool: { k: "event.create", t: "Termin angelegt", e: [["Besuch vor Ort", "Donnerstag, 10:00 · mit dem Lead verknüpft", P.cl]] }, a: ["Der Termin ist angelegt und mit dem Lead Termobud verknüpft."] }
    ],
    "Warteschlange": [
      { chip: "Was in der Warteschlange ist", ic: "s", q: "Was liegt in meiner Warteschlange?", mem: 5, steps: ["Lese die Warteschlange"], tool: { k: "inbox.queue", t: "Warteschlange", e: [["Termobud: Anfrage nach einer zweiten Angebotsvariante", "Braucht eine Entscheidung", P.ib], ["Bank Skhid: Unterlagen", "Braucht eine Entscheidung", P.ib]] }, a: ["Zwei E-Mails warten auf deine Entscheidung, eine weitere hat der Agent schon bearbeitet."] },
      { chip: "Übersicht der Nacht", ic: "z", q: "Was ist über Nacht passiert?", mem: 3, steps: ["Lese das Agenten-Log"], a: ["Der Agent hat 23 E-Mails aussortiert, 11 Aktionen ausgeführt, und 2 warten auf dich."] },
      { chip: "Aufgabe daraus machen", ic: "c", q: "Mach aus dieser E-Mail eine Aufgabe für Iryna", mem: 2, steps: ["Lese die E-Mail", "Lege die Aufgabe an"], tool: { k: "task.create", t: "Aufgabe angelegt", e: [["Termobud: zweite Angebotsvariante", "Iryna Tkach · bis Freitag", P.tasks]] }, a: ["Die Aufgabe ist angelegt. Rückgängig machen kannst du es innerhalb von 24 Stunden."] }
    ],
    "E-Mail": [
      { chip: "E-Mail finden", ic: "s", q: "Wo ist die E-Mail von der Bank?", mem: 3, steps: ["Suche in der E-Mail"], tool: { k: "inbox.search", t: "E-Mails", e: [["Bank Skhid: Unterlagen für den Kredit", "Heute, 8:40", P.ml]] }, a: ["E-Mail heute um 8:40, gebraucht werden die Berichte für drei Quartale."] },
      { chip: "Zusammenfassen", ic: "z", q: "Fass die Korrespondenz mit Termobud zusammen", mem: 6, steps: ["Lese die Korrespondenz"], a: ["Der Kunde bittet bis Freitag um eine zweite Angebotsvariante und hat einen Dachplan geschickt."] },
      { chip: "Antwort verfassen", ic: "c", q: "Verfass eine Antwort an Andrii", mem: 4, steps: ["Lese die Korrespondenz", "Bereite den Entwurf vor"], tool: { k: "inbox.draft", t: "Entwurf", e: [["Antwort an Andrii Melnyk", "Wartet auf Versand", P.ml]] }, a: ["Der Entwurf ist fertig. Senden musst du selbst."] }
    ],
    "Speicher": [
      { chip: "Datei finden", ic: "s", q: "Wo ist der Vertrag mit Termobud?", mem: 5, steps: ["Suche im Speicher"], tool: { k: "file.search", t: "Dateien", e: [["Vertrag_Termobud_v3.pdf", "02_Verträge / Termobud", "#doc=Vertrag_Termobud_v3.pdf"]] }, a: ["Die Datei liegt im Ordner <b>02_Verträge / Termobud</b>. Es ist die dritte Version vom 21. Oktober."] },
      { chip: "Was per Link offen ist", ic: "z", q: "Welche Ordner sind per Link freigegeben?", mem: 3, steps: ["Lese die Zugriffe"], tool: { k: "folder.list", t: "Ordner", e: [["02_Verträge", "Jeder mit dem Link · gültig 30 Tage", "#step=5"]] }, a: ["Per Link ist ein Ordner freigegeben. Er wurde 4-mal geöffnet."] },
      { chip: "Präsentation vorbereiten", ic: "c", q: "Bereite eine Präsentation über uns für Termobud vor", mem: 14, steps: ["Suche die Unternehmensdaten", "Lese die Dateien", "Stelle die Präsentation zusammen"], tool: { k: "file.create", t: "Datei angelegt", e: [["Präsentation_Termobud.pdf", "04_Vertrieb · 8 Folien", "#doc=Präsentation_Termobud.pdf"], ["Über_das_Unternehmen.pdf", "Quelle · 01_Unternehmen", "#doc=Über_das_Unternehmen.pdf"], ["Referenzen_PV.pdf", "Quelle · 01_Unternehmen", "#doc=Referenzen_PV.pdf"]] }, a: ["Die Daten stammen aus den Dateien <b>Über_das_Unternehmen.pdf</b>, <b>Referenzen_PV.pdf</b> und <b>Brandbook.pdf</b>.", "Prüf die Folie mit den Preisen: Sie sollte vor dem Versand abgestimmt werden."] }
    ],
    "Wettbewerber": [
      { chip: "Wettbewerber zeigen", ic: "s", q: "Wer ist die größte Bedrohung?", mem: 4, steps: ["Lese das Wettbewerberverzeichnis"], tool: { k: "competitor.list", t: "Wettbewerber", e: [["EnergyDesk", "Bedrohung: hoch · 12 Mio. €", P.cp], ["Volta Suite", "Bedrohung: hoch · 28 Mio. €", P.cp]] }, a: ["Zwei Wettbewerber sind eine hohe Bedrohung. <b>EnergyDesk</b> taucht öfter in deinen Leads auf."] },
      { chip: "Mit uns vergleichen", ic: "z", q: "Wo ist EnergyDesk stärker als wir?", mem: 6, steps: ["Lese die Vergleichstabelle"], a: ["EnergyDesk liegt in zwei Zeilen vorn:<ul><li><b>Lager und Ersatzteile.</b></li><li><b>App für Monteure.</b></li></ul>", "<b>Deine Stärken:</b> Finanzmodell und Gesprächstranskription."] },
      { chip: "Wettbewerber hinzufügen", ic: "c", q: "Füge den Wettbewerber energydesk.example hinzu", mem: 1, steps: ["Lese die Website", "Erstelle die Karte"], tool: { k: "competitor.create", t: "Karte erstellt", e: [["EnergyDesk", "Extern · Daten von der Website", P.cp]] }, a: ["Karte erstellt. Prüf die Daten: KI kann sich irren."] }
    ],
    "Netzwerk": [
      { chip: "Person finden", ic: "s", q: "Wen haben wir für Montage?", mem: 5, steps: ["Suche im Netzwerk"], tool: { k: "network.search", t: "Personen", e: [["Dmytro Tkach", "Tekhnopark · Projekt, Deal", P.net], ["Roman Boiko", "Soniachni Systemy · Team", P.net]] }, a: ["<b>Dmytro Tkach</b> hat schon an einem Projekt mit dir gearbeitet, also fang am besten mit ihm an."] },
      { chip: "Woher kenne ich", ic: "z", q: "Woher kenne ich Andrii Melnyk?", mem: 8, steps: ["Suche im Netzwerk"], tool: { k: "network.search", t: "Personen", e: [["Andrii Melnyk", "Termobud · CRM", P.cont]] }, a: ["Andrii ist in deinem CRM, er ist ein Kontakt von Termobud. Er ist noch nicht auf der Plattform registriert, deshalb kannst du ihm nicht im Chat schreiben."] },
      { chip: "Partner finden", ic: "c", q: "Finde eine Montagefirma in Lviv", mem: 2, steps: ["Suche unter den Personen auf der Plattform"], tool: { k: "profile.search", t: "Personen", e: [["Tetiana Shevchuk", "Montazh Sontse · Leiterin Montage", P.net]] }, a: ["In Lviv wurde eine Person gefunden. Ihr eine Nachricht schreiben?"] }
    ],
    "Unternehmen": [
      { chip: "Unternehmen finden", ic: "s", q: "Finde eine Montagefirma in der Ukraine", mem: 3, steps: ["Suche Unternehmen"], tool: { k: "company.search", t: "Unternehmen", e: [["Montazh Sontse", "UA · Lviv · verifiziert · 14 Projekte", P.co], ["Svitlo Pro", "UA · Vinnytsia · verifiziert", P.co]] }, a: ["Zwei Unternehmen passen. <b>Montazh Sontse</b> war vor 2 Tagen aktiv."] },
      { chip: "Wer ist aktiv", ic: "z", q: "Wer ist diese Woche aktiv?", mem: 2, steps: ["Suche Unternehmen"], tool: { k: "company.search", t: "Unternehmen", e: [["Montazh Sontse", "vor 2 Tagen", P.co], ["HrinBud", "vor 3 Tagen", P.co]] }, a: ["Diese Woche sind zwei Unternehmen aktiv."] },
      { chip: "Zu einem Treffen einladen", ic: "c", q: "Wie lade ich Montazh Sontse zu einem Treffen ein?", mem: 1, steps: ["Lese das Unternehmensprofil"], tool: { k: "company.get", t: "Unternehmen", e: [["Montazh Sontse", "Treffen anfragen", P.co]] }, a: ["Klick im Profil auf „Treffen anfragen“. Das Treffen findet statt, sobald das Unternehmen es bestätigt."] }
    ]
  };
  var desc = (typeof D !== "undefined" && D[mod]) || "";
  var general = [
    { chip: "Was das Modul kann", ic: "s", q: "Was kann dieses Modul?", mem: 3, steps: ["Lese die Wissensdatenbank"], a: [desc ? "<b>„" + mod + "“:</b> " + desc + "." : "Ich zeige dir das Modul in einer kostenlosen Demo."] },
    { chip: "Ist es im Paket enthalten", ic: "z", q: "Ist es im Paket enthalten?", mem: 1, steps: ["Lese die Wissensdatenbank"], a: ["Ja. Alle 48 Module sind in jedem Paket enthalten."] },
    { chip: "Bei mir zeigen", ic: "c", q: "Wie sehe ich das in meinem Unternehmen?", mem: 1, steps: ["Lese die Wissensdatenbank"], a: ["Buch eine kostenlose Demo, und wir zeigen dir, wie das Modul bei dir funktioniert.<br><a href=\"../demo\">Kostenlose Demo</a>"] }
  ];
  var items = QA[mod] || general;

  var I = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="' + p + '"/></svg>'; };
  var star = I("M11 4l1.9 5.6L18.5 11.5l-5.6 1.9L11 19l-1.9-5.6L3.5 11.5l5.6-1.9zM19 3v4M17 5h4");
  var wand = I("M4 20 15 9M14 5v3M12.5 6.5h3M19 11v3M17.5 12.5h3M8 4v2M7 5h2");
  var clip = I("M21 11l-9 9a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a1.800 1.800 0 0 1-2.500-2.500l8-8");
  var zone = I("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 1v4M12 19v4M1 12h4M19 12h4");
  var mic = I("M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3");
  var ext = I("M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5");
  var bot = I("M12 4v3M5 9h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM9 14v.5M15 14v.5");
  var chk = I("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12l3 3 5-6");
  var cpy = I("M9 9h11v11H9zM5 15H4V4h11v1");
  var newc = I("M21 12a8 8 0 0 1-12 7l-6 2 2-6a8 8 0 1 1 16-3zM12 9v6M9 12h6");
  var chipI = { s: I("M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.300-4.300"), z: I("M13 3 5 14h6l-1 7 8-11h-6z"), c: star };

  var css = `
#agB{position:fixed;right:24px;bottom:24px;z-index:90;width:56px;height:56px;border-radius:50%;border:0;background:#fff;color:#171717;cursor:pointer;display:grid;place-items:center;box-shadow:0 0 0 1.5px #39B54A,0 0 12px rgba(57,181,74,.75),0 0 32px rgba(57,181,74,.4);animation:agGlow 2.6s ease-in-out infinite}
#agB svg{width:26px;height:26px}#agB:focus-visible,#agP button:focus-visible{outline:2px solid #0086CC;outline-offset:2px}#agP form:focus-within{border-color:#39B54A}
@keyframes agGlow{50%{box-shadow:0 0 0 1.5px #39B54A,0 0 20px rgba(57,181,74,.95),0 0 50px rgba(57,181,74,.55)}}
#agP{position:fixed;right:24px;bottom:24px;z-index:91;width:430px;height:600px;max-height:calc(100vh - 48px);background:#fff;border:1px solid #E6E6E6;border-radius:18px;box-shadow:0 24px 70px -20px rgba(10,40,80,.35);display:none;flex-direction:column;overflow:hidden;font-family:"Golos Text",system-ui,sans-serif;color:#171717;font-size:14.5px;line-height:1.5}
#agP.on{display:flex}#agP svg{width:18px;height:18px;display:block}
#agP .hd{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #F0F0F0}
#agP .ic{width:34px;height:34px;border-radius:50%;background:#E9F7EC;color:#1E7A2E;display:grid;place-items:center;flex:none}
#agP .tt{min-width:0;flex:1}#agP .tt b{font-weight:600;display:block;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#agP .tt small{color:#737373;font-size:12px}
#agP .hb{border:0;background:none;color:#555;cursor:pointer;padding:5px;border-radius:6px;font-size:18px;line-height:1;display:grid;place-items:center}#agP .hb:hover{background:#F2F2F2}
#agP .bd{flex:1;min-height:0;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
#agP .hi{margin:auto;text-align:center;color:#666;max-width:300px}#agP .hi i{width:48px;height:48px;border-radius:14px;background:#E9F7EC;color:#1E7A2E;display:grid;place-items:center;margin:0 auto 14px}#agP .hi i svg{width:26px;height:26px}#agP .hi b{display:block;color:#171717;font-weight:600;font-size:17px;margin-bottom:6px}
#agP .me{align-self:flex-end;background:#F2F2F2;border-radius:14px 14px 4px 14px;padding:7px 12px;max-width:85%}
#agP .mem{align-self:flex-start;display:inline-flex;align-items:center;gap:5px;background:#F5F5F5;color:#737373;border-radius:12px;padding:1px 9px;font-size:12px}
#agP .rw{display:grid;grid-template-columns:28px minmax(0,1fr);gap:10px}#agP .bt{width:28px;height:28px;border-radius:8px;background:#F2F2F2;color:#444;display:grid;place-items:center}#agP .bt svg{width:16px;height:16px}#agP .col{display:flex;flex-direction:column;gap:8px;min-width:0}
#agP .st{display:flex;align-items:center;gap:8px;border:1px solid #E6E6E6;border-radius:9px;padding:6px 10px;font-size:13px;color:#555}#agP .st svg{width:15px;height:15px;color:#39B54A}#agP .st em{margin-left:auto;font-style:normal;color:#888}
#agP .tl{border:1px solid #E6E6E6;border-radius:10px;overflow:hidden}#agP .th{display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid #F0F0F0;font-size:13px;font-weight:600}#agP .th code{font:11px ui-monospace,Menlo,monospace;background:#F5F5F5;border:1px solid #E6E6E6;border-radius:5px;padding:0 5px;color:#555}
#agP .tb{padding:8px;display:flex;flex-direction:column;gap:6px}#agP .en{display:grid;grid-template-columns:minmax(0,1fr) 18px;gap:6px;align-items:center;border:1px solid #E6E6E6;border-radius:8px;padding:6px 10px;color:#171717;text-decoration:none}#agP .en:hover{background:#F7F7F7}#agP .en b{font-weight:500;font-size:13.5px;display:block}#agP .en small{display:block;color:#737373;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#agP .en svg{width:14px;height:14px;color:#555}
#agP .mo{font-size:12.5px;color:#555;text-decoration:none;padding:2px}#agP .mo:hover{color:#111}#agP .dt{font:11px ui-monospace,Menlo,monospace;color:#888;padding:0 2px}
#agP .an b{font-weight:600}#agP .an ul{margin:4px 0;padding-left:20px}#agP .an li{margin-bottom:3px}#agP .an a{color:#178A36}
#agP .ft2{display:flex;align-items:center;gap:6px;color:#888;font-size:12px}#agP .ft2 svg{width:13px;height:13px}
#agP .dots span{display:inline-block;width:6px;height:6px;margin-right:4px;border-radius:50%;background:#39B54A;animation:agDot 1s infinite}#agP .dots span:nth-child(2){animation-delay:.15s}#agP .dots span:nth-child(3){animation-delay:.3s}
@keyframes agDot{50%{opacity:.25}}
#agP .ch{display:flex;flex-wrap:wrap;gap:8px;padding:0 14px 10px}#agP .ch button{display:inline-flex;align-items:center;gap:6px;border:1px solid #E6E6E6;background:#fff;border-radius:16px;padding:5px 11px;font:inherit;font-size:13px;color:#444;cursor:pointer}#agP .ch button:hover{background:#F7F7F7}#agP .ch svg{width:14px;height:14px}
#agP form{display:flex;gap:4px;align-items:center;margin:0 12px;border:1px solid #E6E6E6;border-radius:12px;padding:6px 8px}#agP input{flex:1;min-width:0;border:0;outline:0;font:inherit;background:none;padding:0 6px}
#agP .tool{border:0;background:none;color:#555;cursor:pointer;padding:5px;border-radius:6px;display:grid;place-items:center}#agP .tool:hover{background:#F2F2F2}#agP .go{width:32px;height:32px;border-radius:9px;border:1px solid #9FDCAE;background:#EEF8EE;color:#1E7A2E;font-size:15px;cursor:pointer;flex:none}
#agP .fb{display:flex;align-items:center;gap:12px;padding:7px 16px 10px;color:#888;font-size:12px}#agP .fb span:last-child{margin-left:auto}
@media(max-width:560px){#agP{right:8px;left:8px;bottom:8px;width:auto;height:calc(100vh - 16px)}#agB{right:16px;bottom:16px}}
@media(prefers-reduced-motion:reduce){#agB,#agP .dots span{animation:none}}
`;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var btn = document.createElement("button");
  btn.id = "agB"; btn.type = "button"; btn.setAttribute("aria-label", "Aita Assistent"); btn.innerHTML = star;
  var box = document.createElement("div");
  box.id = "agP"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Aita Assistent");
  box.innerHTML = '<div class="hd"><span class="ic">' + wand + '</span><span class="tt"><b>Neues Gespräch ⌄</b><small>Aita · Demo auf der Website</small></span><button class="hb nw" type="button" aria-label="Neues Gespräch">' + newc + '</button><span class="hb" aria-hidden="true">⋯</span><button class="hb mn" type="button" aria-label="Minimieren">–</button><button class="hb x" type="button" aria-label="Schließen">×</button></div>'
    + '<div class="bd" aria-live="polite"></div><div class="ch"></div>'
    + '<form><button class="tool" type="button" aria-label="Datei anhängen">' + clip + '</button><button class="tool" type="button" aria-label="Bereich auswählen">' + zone + '</button><input type="text" placeholder="Nachricht eingeben..." aria-label="Nachricht"><button class="tool" type="button" aria-label="Ins Feld diktieren">' + mic + '</button><button class="go" type="submit" aria-label="Senden">↑</button></form>'
    + '<div class="fb"><span>Claude Haiku 5.5 ⌄</span><span>Vor Änderungen fragen</span><span>Ctrl+J</span></div>';
  document.body.appendChild(btn); document.body.appendChild(box);

  var bd = box.querySelector(".bd"), ch = box.querySelector(".ch"), inp = box.querySelector("input"), title = box.querySelector(".tt b"), busy = false;
  var hello = '<div class="hi"><i>' + star + '</i><b>Wie kann ich helfen?</b>Frag mich alles zu deinem Arbeitsbereich...</div>';
  var reset = function () { bd.innerHTML = hello; title.textContent = "Neues Gespräch ⌄"; ch.style.display = ""; busy = false; };
  var esc = function (x) { var d = document.createElement("div"); d.textContent = x; return d.innerHTML; };
  var down = function () { bd.scrollTop = bd.scrollHeight; };
  var fast = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms, f) { setTimeout(f, fast ? 0 : ms); };
  var stamp = function () { var d = new Date(), p = function (n) { return (n < 10 ? "0" : "") + n; }; return { full: p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()), t: p(d.getHours()) + ":" + p(d.getMinutes()) }; };
  var ask = function (q, it) {
    if (busy) return; busy = true;
    bd.innerHTML = ""; ch.style.display = "none"; title.textContent = q;
    var me = document.createElement("div"); me.className = "me"; me.textContent = q; bd.appendChild(me);
    if (it.mem) { var m = document.createElement("div"); m.className = "mem"; m.textContent = "Erinnerungen genutzt: " + it.mem; bd.appendChild(m); }
    var rw = document.createElement("div"); rw.className = "rw"; rw.innerHTML = '<span class="bt">' + bot + '</span><div class="col"></div>'; bd.appendChild(rw);
    var col = rw.querySelector(".col");
    var think = document.createElement("div"); think.className = "dots"; think.innerHTML = "<span></span><span></span><span></span>"; col.appendChild(think);
    var queue = [];
    (it.steps || []).forEach(function (s) { queue.push(function () { var e = document.createElement("div"); e.className = "st"; e.innerHTML = chk + esc(s) + "<em>›</em>"; col.insertBefore(e, think); }); });
    if (it.tool) queue.push(function () {
      var w = stamp(), t = it.tool, e = document.createElement("div"); e.className = "tl";
      e.innerHTML = '<div class="th"><code>' + t.k + '</code>' + esc(t.t) + '</div><div class="tb">' + t.e.map(function (x) { return '<a class="en" href="' + x[2] + '"><span><b>' + esc(x[0]) + '</b><small>' + esc(x[1]) + '</small></span>' + ext + '</a>'; }).join("") + (t.more ? '<a class="mo" href="' + t.href + '">' + esc(t.more) + '</a>' : "") + '<div class="dt">Daten vom ' + w.full + '</div></div>';
      col.insertBefore(e, think);
    });
    (it.a || []).forEach(function (html) { queue.push(function () { var e = document.createElement("div"); e.className = "an"; e.innerHTML = html; col.insertBefore(e, think); }); });
    var i = 0;
    (function next() {
      if (i < queue.length) { queue[i++](); down(); wait(i === 1 ? 600 : 520, next); return; }
      think.remove();
      var f = document.createElement("div"); f.className = "ft2"; f.innerHTML = cpy + "Kopieren &nbsp; " + stamp().t; col.appendChild(f); down(); busy = false; ch.style.display = "";
    })();
  };
  items.forEach(function (it) {
    var b = document.createElement("button"); b.type = "button"; b.innerHTML = (chipI[it.ic] || star) + esc(it.chip);
    b.onclick = function () { ask(it.q, it); }; ch.appendChild(b);
  });
  var note = { mem: 0, steps: [], a: ["Auf der Website gibt es nur fertige Beispiele. Auf der Plattform kannst du eine Datei anhängen, eine Anfrage diktieren und einen Bildschirmbereich auswählen.<br><a href=\"../demo\">Kostenlose Demo</a>"] };
  box.querySelectorAll(".tool").forEach(function (b) { b.onclick = function () { ask(b.getAttribute("aria-label"), note); }; });
  box.querySelector("form").onsubmit = function (e) {
    e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = "";
    ask(v, { mem: 0, steps: [], a: ["Auf der Website gibt es nur fertige Beispiele. Auf der Plattform antwortet der Agent mit den Daten deines Unternehmens.<br><a href=\"../demo\">Kostenlose Demo</a>"] });
  };
  var open = function (on) { box.classList.toggle("on", on); btn.style.display = on ? "none" : ""; (on ? inp : btn).focus(); };
  btn.onclick = function () { open(true); };
  box.querySelector(".x").onclick = function () { open(false); };
  box.querySelector(".mn").onclick = function () { open(false); };
  box.querySelector(".nw").onclick = reset;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("on")) open(false); if (e.ctrlKey && (e.key === "j" || e.key === "J")) { e.preventDefault(); open(!box.classList.contains("on")); } });
  reset();
})();
