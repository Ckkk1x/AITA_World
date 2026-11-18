// Тексти сторінок модулів за шаблоном (AITA_Site/Модулі_шаблон_сторінки_модуля.md).
// Модуль без запису тут показується старим шаблоном. video: шлях до ролика; якщо порожньо, показуємо img.
const MODC = {
  "Leads": {
    h1: "Jeder Anruf füllt die Kundenkarte",
    sub: "Anfragen von Website, E-Mail und Telefon landen automatisch im Vertriebsfunnel, und die Kundenkarte wird nach jeder E-Mail, jedem Meeting und jedem Anruf ergänzt.",
    hero: { img: "/modules-assets/leads-hero.jpg", video: "" },
    diff: [
      ["Der Manager notiert Absprachen nach dem Anruf von Hand", "Aita transkribiert den Anruf und schreibt die Zusammenfassung in die Kundenkarte", "Absprachen bleiben erhalten, auch wenn der Manager sie nicht notieren konnte"],
      ["Jeder Manager führt Notizen auf seine Art", "Für jeden Funnel gibst du eine Anweisung für die KI vor, und die Anrufzusammenfassungen folgen deiner Struktur", "Bedarf, Budget und nächste Schritte sind im ganzen Team gleich beschrieben"],
      ["Ein gewonnener Kunde wird in den Projekten neu angelegt", "Das Projekt wird direkt aus der Lead-Karte erstellt", "Wer den Auftrag ausführt, sieht die ganze Kundenhistorie"]
    ],
    tasks: [
      { tab: "Anfrage", h: "Die Anfrage landet ohne manuelle Eingabe im Funnel", p: "Die Plattform zeigt, woher der Kunde kam: von der Website, per E-Mail, Telegram oder Anruf. Weitere Quellen, etwa Werbung, lassen sich separat anbinden. Jede Telefonleitung kann in einen eigenen Funnel geleitet werden, so landet die Anfrage sofort beim richtigen Team.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Anruf", h: "Das Gespräch wird zum Eintrag in der Karte", p: "Ein- und ausgehende Anrufe werden automatisch transkribiert, und die Zusammenfassung wird nach jedem Gespräch aktualisiert. Eine Beschreibung, die ein Mensch eingetragen hat, bleibt unverändert. Anrufe ohne Inhalt, etwa ein Anrufbeantworter oder eine falsche Nummer, ändern die Karte nicht.", img: "/modules-assets/leads-call.jpg", video: "" },
      { tab: "Anweisung für die KI", h: "Du entscheidest, was nach dem Anruf festgehalten wird", p: "Beschreib den Funnel in einfachen Worten, und die Plattform erstellt eine Anweisung für die KI. Oder schreib eine eigene Anweisung mit deinem Berichtsformat. Vor dem Start kannst du sie mit dem Button „Prompt testen“ prüfen.", img: "/modules-assets/leads-prompt.jpg", video: "" },
      { tab: "Deal", h: "Sichtbar, was mit jedem Kunden als Nächstes zu tun ist", p: "Phase, Betrag, letzter und nächster Kontakt stehen in der Karte. Der Filter „Überfällig“ zeigt Kunden, die nicht rechtzeitig kontaktiert wurden.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Verlauf", h: "Die ganze Arbeit mit dem Kunden in einer Karte", p: "An die Karte werden E-Mails und Meetings geknüpft, und die Tabs „Chat“, „Korrespondenz“, „Gespräche“ und „Verlauf“ bewahren alles, was mit dem Kunden war. Wechselt der Manager, macht ein Kollege an derselben Stelle weiter.", img: "/modules-assets/leads-history.jpg", video: "", link: null },
      { tab: "Projekt", h: "Ein gewonnener Lead wird zum Projekt", p: "In der Karte klickst du auf „Projekt erstellen“, und das Projekt weiß, aus welchem Lead es entstanden ist.", img: "/modules-assets/blog-cover-project_stages.jpg", video: "", link: null }
    ],
    ai: [
      ["Anrufzusammenfassung", "KI hält den Inhalt des Gesprächs nach deiner Anweisung fest."],
      ["Nächste Schritte", "Der KI-Agent schlägt nach dem Anruf vor, was als Nächstes zu tun ist."],
      ["KI-Sekretär", "KI liest neue E-Mails und schlägt vor, einen Lead, Kontakt oder eine Aufgabe zu erstellen."]
    ],
    aiLimit: "Eine Beschreibung, die der Manager geschrieben hat, ändert die KI nicht. Die Anrufzusammenfassung landet in einem eigenen Feld.",
    more: ["Mehrere Funnels", "Labels und Filter", "Verlustgründe", "Import aus CSV und Excel", "Export als CSV und XLSX", "Formulare für die Website"],
    access: ["Funnels und Leads sehen die Mitglieder deines Unternehmens.", "Einen Funnel kannst du mit einem anderen Unternehmen teilen.", "Zugriff auf einen einzelnen Lead wird über „Zugriffsverwaltung“ eingestellt."],
    start: ["Wähle fertige Einstellungen oder erstelle deinen eigenen Funnel.", "Lade Kunden aus CSV oder Excel, bis zu 5.000 Zeilen auf einmal.", "Verbinde E-Mail und Telefonie."],
    industry: "Die Lead-Karte hat Felder für Leistung und Kapazität, sie gehen in das Anlagenprojekt über.",
    faq: [
      ["Was ist ein Lead, und wozu braucht ein Unternehmen dieses Modul?", "Ein Lead ist ein potenzieller Kunde. Das Modul begleitet ihn von der ersten Anfrage bis zum gewonnenen Deal, damit keine Anfrage verloren geht."],
      ["Kann ich selbst festlegen, was nach dem Anruf festgehalten wird?", "Ja. Für jeden Funnel gibt es eine eigene Anweisung für die KI, und die Sprache der Beschreibung wählt das Unternehmen."],
      ["Welche Telefonie lässt sich anbinden?", "Jede Telefonie mit offener API. Aktuell funktioniert Unitalk: Es liefert die Anrufaufzeichnung, Transkript und Zusammenfassung erstellt Aita."],
      ["Ist die Anruftranskription im Paket enthalten?", "Ja, du brauchst nur eine Telefonienummer. Die Transkription verbraucht wenige KI-Credits aus deinem Paket."],
      ["Kann ich Kunden aus einem anderen CRM übernehmen?", "Ja, aus einer CSV- oder Excel-Datei. Oder unser Team überträgt die Daten."],
      ["Kostet das Modul extra?", "Nein. „Leads“ ist in jedem Paket enthalten."]
    ],
    final: "Wir zeigen, wie Anrufe die Kundenkarten in deinem Unternehmen füllen"
  }
};
