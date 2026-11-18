
const C={blue:{deep:'#0086CC',bright:'#0086CC',tag:'rgba(0,134,204,.12)'},green:{deep:'#166534',bright:'#39B54A',tag:'rgba(57,181,74,.15)'},
 yellow:{deep:'#854D0E',bright:'#FFD600',tag:'rgba(255,214,0,.25)'},red:{deep:'#D62828',bright:'#D62828',tag:'rgba(214,40,40,.12)'},
 purple:{deep:'#7C3AED',bright:'#7C3AED',tag:'rgba(124,58,237,.12)'}};
const DOC='M13 5h16l10 10v26a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z';
const FOLDER='M5 13a4 4 0 0 1 4-4h10l4 5h16a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z';
const CAL='r 6 9 36 33 7 m|r 6 9 36 10 7 m2|r 14 5 3 9 1.5 k|r 31 5 3 9 1.5 k';
// групи: [назва, колір, акцент, [[модуль, гліф]]]
const G=[
['Vertrieb','blue','yellow',[
 ['Leads','p m M6 9h36L29 25v13l-10 5V25z|r 6 9 36 4 2 h|c 37 37 5 a'],
 ['Kontakt','r 6 9 36 30 6 m|c 18 20 5 w|p w M10 33c1-5 5-7 8-7s7 2 8 7z|r 29 17 9 3 1.5 w|r 29 24 7 3 1.5 w'],
 ['Organisationen','r 8 10 19 32 3 m|r 27 20 14 22 3 m2|r 12 15 4 4 1 w|r 19 15 4 4 1 w|r 12 22 4 4 1 w|r 19 22 4 4 1 w|r 12 29 4 4 1 w|r 19 29 4 4 1 w|r 31 26 6 3 1 w|r 31 32 6 3 1 w']]],
['Projekte','green','yellow',[
 ['Projekte','p m '+FOLDER+'|r 5 18 38 3 0 h|c 33 30 5 a'],
 ['Projektbaukasten','r 6 6 16 16 4 m|r 26 6 16 16 4 m2|r 6 26 16 16 4 m2|r 26 26 16 16 4 a'],
 ['Lösungsboxen','p m M24 5l18 9v20l-18 9-18-9V14z|p h M24 5l18 9-18 9-18-9z|l w 2.2 M24 23v20|c 24 14 3 a']]],
['Energie','yellow','blue',[
 ['Energy Design (3D-Design)','p m M9 20h27l5 18H4z|l w 1.4 M18 20l-2.3 18M27 20l1.6 18M6.4 29h32.4|p h M9 20h27l.9 3H8.1z|c 36 9 5 a|r 21 38 6 5 1.5 k'],
 ['Einliniendiagramm','l m 3 M24 4v10M24 34v10M10 24h28|r 16 14 16 20 4 m|l w 2.2 M20 21h8M20 27h8|c 10 24 4 a|c 38 24 4 a'],
 ['BESS-Simulator','r 5 12 33 24 7 m|r 38 19.5 5 9 2.5 m|r 9 14.5 25 4 2 h|p w M23.5 16.5L16 27h6.2l-2 8.5L29 24h-6.3z'],
 ['Kostenplan','p m M11 5h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3L11 43z|r 16 12 16 3 1.5 w|r 16 19 16 3 1.5 w|r 16 26 10 3 1.5 w|c 33 33 5 a'],
 ['Projektunterlagen','r 15 5 24 31 4 m2|r 8 10 24 32 4 m|r 13 18 14 2.8 1.4 w|r 13 24 14 2.8 1.4 w|r 13 30 9 2.8 1.4 w|c 33 37 5 a'],
 ['Finanzmodell','r 5 7 38 34 7 m2|p m M9 36l9-10 7 5 14-16v21H9z|l w 2.4 M9 36l9-10 7 5 14-16|c 39 15 3.5 a']]],
['Finanzen','green','yellow',[
 ['Finanzen','r 5 14 38 26 7 m|r 5 14 38 5 3 h|r 28 22 15 10 5 m2|c 34 27 2.6 w|c 15 11 7 a'],
 ['SPV','p m M24 5l16 6v11c0 10-7 17-16 21C15 39 8 32 8 22V11z|p h M24 5l16 6v4L24 9 8 15v-4z|l w 3 M17 24l5 5 9-10']]],
['Produktivität','blue','yellow',[
 ['Aufgaben','r 7 6 34 36 8 m|l w 2.6 M13 17l3 3 5-6M13 30l3 3 5-6|r 25 16 11 3 1.5 w|r 25 29 11 3 1.5 w|c 37 39 4 a'],
 ['Chat','p m2 M38 17h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-1v5l-6-5h-8a4 4 0 0 1-4-4v-2|p m M6 11a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H18l-8 6v-6h0a5 5 0 0 1-4-5z|c 14 17 2.2 w|c 20 17 2.2 w|c 26 17 2.2 a'],
 ['Kalender',CAL+'|r 12 24 6 5 1.5 w|r 21 24 6 5 1.5 w|r 30 24 6 5 1.5 a|r 12 32 6 5 1.5 w|r 21 32 6 5 1.5 w'],
 ['Meeting-Notizen','r 18 5 12 23 6 m|l m 3 M12 21a12 12 0 0 0 24 0M24 33v8M18 41h12|r 21 8 3 10 1.5 h|c 37 9 4 a'],
 ['E-Mail','r 5 10 38 28 7 m|l w 2.6 M8 14l16 12 16-12|c 37 34 5 a'],
 ['Warteschlange','p m M6 26l6-16h24l6 16v10a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z|l w 2.4 M6 26h10l3 5h10l3-5h10|r 16 15 16 3 1.5 w|r 18 20 12 3 1.5 a'],
 ['Notizen','p m M8 8h32v22L30 40H8z|p h M30 40V30h10z|r 13 15 22 3 1.5 w|r 13 22 16 3 1.5 w|c 37 11 3 a'],
 ['Meine Fragen','c 24 21 16 m|p m M13 32l-4 10 10-5z|l w 3 M19.5 17a4.5 4.5 0 1 1 6.5 4c-1.6.9-2 1.8-2 3.4|c 24 30 2 w|c 38 8 4 a'],
 ['Entwürfe','r 6 6 26 35 6 m2|r 11 14 15 3 1.5 w|r 11 21 11 3 1.5 w|p m M38 11l5 5-17 17-7 2 2-7z|p a M19 35l2-7 5 5z']]],
['Dokumente und Wissen','red','blue',[
 ['Speicher','p m '+FOLDER+'|r 5 18 38 3 0 h|r 19 25 11 9 2.5 w|l w 2.4 M21 25v-3a3.5 3.5 0 0 1 7 0v3'],
 ['Verträge','p m '+DOC+'|p h M29 5v7a3 3 0 0 0 3 3h7z|r 15 19 17 3 1.5 w|l w 2.4 M15 33c3-5 5 2 8-1s4-3 8 0|c 35 38 5 a'],
 ['Wissensdatenbank','p m M7 9a3 3 0 0 1 3-3h13v35H10a3 3 0 0 0-3 3z|p m2 M41 9a3 3 0 0 0-3-3H25v35h13a3 3 0 0 1 3 3z|r 11 13 8 2.6 1.3 w|r 11 19 8 2.6 1.3 w|r 29 13 8 2.6 1.3 w|c 33 30 4 a']]],
['Steuerung','green','yellow',[
 ['Dashboard','r 6 6 17 20 5 m|r 25 6 17 12 5 m2|r 25 20 17 22 5 m|r 6 28 17 14 5 m2|c 33 31 4 a'],
 ['Übersicht','p m M4 24c5-9 12-14 20-14s15 5 20 14c-5 9-12 14-20 14S9 33 4 24z|c 24 24 8 w|c 24 24 4 a'],
 ['Vision und Mission','p m M4 41l14-23 8 11 5-6 13 18z|p h M18 18l4 6.5-4-1.5-4 2z|l k 2.4 M31 23V7|p a M31 7h10l-3 3.5 3 3.5H31z'],
 ['Ziele','c 24 24 19 m2|c 24 24 13 m|c 24 24 7 w|c 24 24 3 a'],
 ['Planung','r 5 7 38 34 7 m2|r 10 12 8 24 3 w|r 20 12 8 17 3 w|r 30 12 8 11 3 a'],
 ['Fortschritt','l m 7 M8 33a16 16 0 0 1 32 0|l k 3 M24 33l8-11|c 24 33 4 k|c 38 12 3.5 a'],
 ['Businesspläne','p m '+DOC+'|p h M29 5v7a3 3 0 0 0 3 3h7z|r 15 29 4 8 1 w|r 21 24 4 13 1 w|r 27 19 4 18 1 a'],
 ['Wettbewerber','c 15 15 6.5 m|p m M4 39c1-8 5-13 11-13s10 5 11 13z|c 33 15 6.5 m2|p m2 M22 39c1-8 5-13 11-13s10 5 11 13z|c 24 7 3 a'],
 ['Wochenbilanz',CAL+'|l w 3 M16 29l6 6 11-12'],
 ['Entscheidungslog','p m M10 6h25a4 4 0 0 1 4 4v32H14a4 4 0 0 1-4-4z|r 10 35 29 4 2 h|l w 3 M17 20l5 5 9-10|c 38 8 3.5 a']]],
['AI','purple','yellow',[
 ['KI-Assistent','p m M23 4l4.5 12.5L40 21l-12.5 4.5L23 38l-4.5-12.5L6 21l12.5-4.5z|p a M38 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z'],
 ['Agent','r 8 13 32 25 9 m|r 11 15 26 4 2 h|c 18 26 3.2 w|c 30 26 3.2 w|r 18 32 12 2.6 1.3 w|l m 3 M24 13V8|c 24 6 3.5 a'],
 ["Plattformgedächtnis",'l m 3 M24 4v6M24 38v6M4 24h6M38 24h6M14 6v4M34 6v4M14 38v4M34 38v4|r 10 10 28 28 8 m|r 13 12 22 4 2 h|c 24 25 6 w|c 24 25 2.5 a']]],
['Community','blue','green',[
 ['Netzwerk','l m 3 M12 13L24 31M36 13L24 31M12 13h24|c 12 13 6 m|c 36 13 6 m2|c 24 32 9 m|c 24 32 3.5 a'],
 ['Unternehmen','r 6 15 17 27 3 m|r 25 6 17 36 3 m2|r 10 20 4 4 1 w|r 16 20 4 4 1 w|r 10 27 4 4 1 w|r 16 27 4 4 1 w|r 29 11 4 4 1 w|r 35 11 4 4 1 w|r 29 18 4 4 1 w|r 35 18 4 4 1 w|r 31 34 6 8 1 a']]],
['Arbeiten und Leistungen','green','yellow',[
 ['Leistungsmarkt','p m M8 31a16 16 0 0 1 32 0z|r 5 30 38 7 3.5 m|p h M10 26a14 14 0 0 1 28 0z|r 21.5 9 5 12 2.5 a'],
 ['Auftragnehmer-Bereich','l m 3 M17 15v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3|r 5 15 38 26 7 m|r 5 25 38 3 0 h|r 21 23 6 7 2 a']]],
['Ausrüstung für Verkäufer','yellow','blue',[
 ['Bestellungen','l m 3 M18 18v-5a6 6 0 0 1 12 0v5|p m M9 16h30l-2 24a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z|l w 3 M19 30l4 4 7-8|c 38 12 3.5 a'],
 ['Produkte verwalten','p m M6 7h17l20 20-15 15L6 22z|p h M6 7h17l3 3H6z|c 14 15 3.5 w|c 36 36 4 a'],
 ['Benutzergruppen','c 11 18 5 m2|c 37 18 5 m2|p m2 M2 37c.5-6 4-10 9-10 2.4 0 4.4.8 5.9 2.2M46 37c-.5-6-4-10-9-10-2.4 0-4.4.8-5.9 2.2|c 24 15 7 m|p m M12 40c1-8 5.5-12 12-12s11 4 12 12z|c 24 15 2.5 a']]],
['Integrationen','blue','purple',[
 ['Konnektoren und MCP','r 18 6 3.5 10 1.75 m2|r 26.5 6 3.5 10 1.75 m2|r 12 15 24 17 6 m|r 14 17 20 4 2 h|l m 4 M24 32v11|c 24 24 3 a']]],
['Weiteres','purple','yellow',[
 ['Plugin-Marktplatz','p m M8 14h9a4.5 4.5 0 1 1 9 0h9v9a4.5 4.5 0 1 1 0 9v10H8z|p h M8 14h9a4.5 4.5 0 0 1 .3-1.5H8z|c 38 9 4 a']]]
];
const ST={w:'#fff',k:'#1b2a35'};
function glyph(spec,col,acc){
 let s='';
 for(const part of spec.split('|')){
  const t=part.trim().split(' ');const ty=t[0];
  const fill=f=>f==='m'?`url(#g-${col})`:f==='m2'?`url(#g-${col})" opacity=".5`:f==='w'?'#fff':f==='h'?'rgba(255,255,255,.35)':f==='a'?C[acc].bright:f==='k'?'#1b2a35':f;
  const stroke=f=>f==='m'?C[col].deep:f==='a'?C[acc].bright:ST[f]||f;
  if(ty==='r'){const [x,y,w,h,rx,f]=t.slice(1);s+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill(f)}"/>`}
  else if(ty==='c'){const [cx,cy,r,f]=t.slice(1);s+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill(f)}"/>`}
  else if(ty==='p'){s+=`<path d="${t.slice(2).join(' ')}" fill="${fill(t[1])}"/>`}
  else if(ty==='l'){s+=`<path d="${t.slice(3).join(' ')}" fill="none" stroke="${stroke(t[1])}" stroke-width="${t[2]}" stroke-linecap="round" stroke-linejoin="round"/>`}
 }
 return `<svg viewBox="0 0 48 48" aria-hidden="true">${s}</svg>`;
}
const D={'Leads':'Der Weg des Kunden von der ersten Anfrage bis zum Deal','Kontakt':'Alle Personen, mit denen du arbeitest, in einer Datenbank','Organisationen':'Kundenunternehmen, Lieferanten und Partner',
'Projekte':"Jedes Objekt von der Idee bis zum Start",'Projektbaukasten':'Projektkarte für deinen Prozess, ohne Entwickler','Lösungsboxen':'Fertige Unternehmenseinrichtung in einem Schritt',
'Energy Design (3D-Design)':'Die Anlage in 3D auf dem echten Grundstück','Einliniendiagramm':'Elektroschema mit KI und Normprüfung','BESS-Simulator':'Betrieb und Erlöse des Speichers',
'Kostenplan':'Kostenplan und CAPEX direkt aus dem Projekt','Projektunterlagen':'Unterlagenpaket für Genehmigungen','Finanzmodell':"Amortisation, IRR und DSCR jedes Objekts",
'Finanzen':'Salden, Zahlungen, Schulden und Plan auf einem Bildschirm','SPV':'Projektgesellschaften und Eigentum','Aufgaben':'Die Arbeit von Team und Agenten auf einem Board','Chat':'Teamgespräche direkt neben Aufgaben und Projekten',
'Kalender':'Meetings, Aufgaben und Terminbuchung','Meeting-Notizen':'Aufzeichnung, Transkript und Zusammenfassung des Meetings','E-Mail':'Gmail oder Outlook direkt neben den Kunden','Warteschlange':'Alles, was auf deine Reaktion wartet, in einer Liste',
'Notizen':'Notizen, Fotos und Sprache, die zu Aufgaben werden','Meine Fragen':'Eine kurze Frage an Kollegen oder Agenten mit Frist','Entwürfe':'Dokumente, die Menschen und Agenten bearbeiten',
'Speicher':'Unternehmensdokumente mit Ordnern und Zugriffen','Verträge':'Vertragsabstimmung in einem Raum','Wissensdatenbank':'Richtlinien und Anleitungen des Unternehmens',
'Dashboard':'Schlüsselkennzahlen auf einem Bildschirm','Übersicht':'Die Unternehmensstrategie auf einer Seite','Vision und Mission':'Wohin das Unternehmen geht und wozu','Ziele':'Ziele, deren Fortschritt automatisch berechnet wird',
'Planung':'Ein Plan auf dem Canvas, gemeinsam mit dem Agenten','Fortschritt':'Wöchentliches Update aller Ziele','Businesspläne':'Pläne mit Versionen und Entwürfen von der KI','Wettbewerber':'Register der Wettbewerber und Matrix „wir gegen sie“',
'Wochenbilanz':'Probleme der Woche und eine Aufgabe zu jedem','Entscheidungslog':'Entscheidungen mit Gründen und Belegen','KI-Assistent':'Frag und delegiere dort, wo du arbeitest',
'Agent':'KI-Personas übernehmen wiederkehrende Arbeit',"Plattformgedächtnis":'Antworten mit Verweis auf die Quelle','Netzwerk':'Kollegen, Kontakte und Partner in einer Liste',
'Unternehmen':'Katalog von Partnerunternehmen auf der Plattform','Leistungsmarkt':'Auftragnehmer für Ingenieur- und Bauarbeiten','Auftragnehmer-Bereich':'Deine Leistungen im Schaufenster für Auftraggeber',
'Bestellungen':'Kundenbestellungen von der Bestätigung bis zur Lieferung','Produkte verwalten':'Ausrüstungskatalog, Preise und Aufschläge','Benutzergruppen':'Unterschiedliche Konditionen für unterschiedliche Käufer',
'Konnektoren und MCP':'Claude, ChatGPT und deine Systeme','Plugin-Marktplatz':'Erweiterungen für die Plattform'};

const N={"Leads": ["Kontakt", "E-Mail", "Meeting-Notizen", "Projekte"], "Kontakt": ["Leads", "Organisationen", "Netzwerk", "E-Mail"], "Organisationen": ["Kontakt", "Leads", "Verträge", "Unternehmen"], "Projekte": ["Leads", "Aufgaben", "Speicher", "Finanzmodell"], "Projektbaukasten": ["Projekte", "Lösungsboxen", "Speicher"], "Lösungsboxen": ["Projektbaukasten", "Leads", "Projekte"], "Energy Design (3D-Design)": ["Einliniendiagramm", "Kostenplan", "Finanzmodell", "Projektunterlagen"], "Einliniendiagramm": ["Energy Design (3D-Design)", "Kostenplan", "Projektunterlagen"], "BESS-Simulator": ["Energy Design (3D-Design)", "Finanzmodell", "Kostenplan"], "Kostenplan": ["Energy Design (3D-Design)", "Produkte verwalten", "Finanzmodell", "Bestellungen"], "Projektunterlagen": ["Energy Design (3D-Design)", "Einliniendiagramm", "Speicher", "Verträge"], "Finanzmodell": ["Kostenplan", "BESS-Simulator", "Finanzen", "SPV"], "Finanzen": ["Projekte", "Finanzmodell", "Dashboard", "SPV"], "SPV": ["Projekte", "Finanzen", "Verträge", "Speicher"], "Aufgaben": ["Projekte", "Chat", "Kalender", "Ziele"], "Chat": ["Aufgaben", "Projekte", "Meine Fragen", "Agent"], "Kalender": ["Meeting-Notizen", "Aufgaben", "E-Mail", "Leads"], "Meeting-Notizen": ["Kalender", "Plattformgedächtnis", "Aufgaben", "Entscheidungslog"], "E-Mail": ["Warteschlange", "Leads", "Speicher", "Agent"], "Warteschlange": ["E-Mail", "Notizen", "Aufgaben", "Agent"], "Notizen": ["Warteschlange", "Aufgaben", "Entwürfe"], "Meine Fragen": ["Chat", "Aufgaben", "Agent"], "Entwürfe": ["KI-Assistent", "Speicher", "Verträge", "Notizen"], "Speicher": ["Projekte", "Verträge", "Wissensdatenbank", "SPV"], "Verträge": ["Organisationen", "Speicher", "Projekte", "SPV"], "Wissensdatenbank": ["Plattformgedächtnis", "Speicher", "KI-Assistent"], "Dashboard": ["Ziele", "Finanzen", "Fortschritt", "Übersicht"], "Übersicht": ["Vision und Mission", "Ziele", "Dashboard", "Wochenbilanz"], "Vision und Mission": ["Übersicht", "Ziele", "Businesspläne", "Agent"], "Ziele": ["Fortschritt", "Aufgaben", "Dashboard", "Businesspläne"], "Planung": ["Ziele", "Aufgaben", "Agent"], "Fortschritt": ["Ziele", "Dashboard", "Wochenbilanz"], "Businesspläne": ["Ziele", "Finanzen", "Wettbewerber", "Vision und Mission"], "Wettbewerber": ["Businesspläne", "Übersicht", "Leads"], "Wochenbilanz": ["Aufgaben", "Fortschritt", "Entscheidungslog"], "Entscheidungslog": ["Meeting-Notizen", "Plattformgedächtnis", "Wochenbilanz"], "KI-Assistent": ["Agent", "Plattformgedächtnis", "Entwürfe", "Wissensdatenbank"], "Agent": ["KI-Assistent", "Plattformgedächtnis", "Aufgaben", "Konnektoren und MCP"], "Plattformgedächtnis": ["KI-Assistent", "Meeting-Notizen", "Wissensdatenbank", "Entscheidungslog"], "Netzwerk": ["Unternehmen", "Kontakt", "Leistungsmarkt", "Bestellungen"], "Unternehmen": ["Netzwerk", "Organisationen", "Verträge"], "Leistungsmarkt": ["Auftragnehmer-Bereich", "Netzwerk", "Projekte"], "Auftragnehmer-Bereich": ["Leistungsmarkt", "Unternehmen", "Verträge"], "Bestellungen": ["Produkte verwalten", "Kostenplan", "Finanzen"], "Produkte verwalten": ["Bestellungen", "Benutzergruppen", "Kostenplan"], "Benutzergruppen": ["Produkte verwalten", "Bestellungen", "Unternehmen"], "Konnektoren und MCP": ["Agent", "E-Mail", "Kalender", "Plugin-Marktplatz"], "Plugin-Marktplatz": ["Konnektoren und MCP", "Leads"]}, ENERGY=new Set(["Energy Design (3D-Design)", "Einliniendiagramm", "BESS-Simulator", "Kostenplan", "Projektunterlagen", "Finanzmodell", "Projekte", "SPV", "Speicher"]);
const PAL=['blue','purple','green','yellow','red'],TINT={blue:'rgba(0,134,204,.11)',purple:'rgba(124,58,237,.11)',green:'rgba(57,181,74,.13)',yellow:'rgba(255,190,0,.17)',red:'rgba(214,40,40,.10)'};
const IDX={};let ci=0;G.forEach(([g,gc,ga,mods])=>mods.forEach(([m,sp])=>{const col=PAL[ci%5],acc=PAL[(ci+2)%5];ci++;IDX[m]={g,gc,col,acc,sp}}));
function tint(m){return '#fff'}
const DEFS='<svg width="0" height="0" style="position:absolute"><defs>'+[['blue','#45B8F2','#0068A6'],['green','#6BD879','#1F7F31'],['yellow','#FFE45C','#F0A500'],['red','#F26A6A','#B51F1F'],['purple','#A880FF','#5B21B6']].map(([k,a,b])=>`<linearGradient id="g-${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`).join('')+'</defs></svg>';
document.body.insertAdjacentHTML('afterbegin',DEFS);
const LINE={blue:'#0086CC',purple:'#7C3AED',green:'#2E9B3F',yellow:'#E08A00',red:'#D62828'};
// стиль 28.10: суцільна лінія одного кольору + легка заливка замкнених фігур
function icon(m){const x=IDX[m],s=(typeof SVGMAP!=='undefined')&&SVGMAP[m];if(!x)return '';if(!s)return glyph(x.sp,x.col,x.acc);const c=LINE[x.col];const filled=s.replace(/<(rect|circle)(?![^>]*r="[01](\.\d+)?")/g,`<$1 fill="${c}" fill-opacity=".14"`).replace(/<path d="([^"]*[zZ])"/g,`<path fill="${c}" fill-opacity=".14" d="$1"`);return `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${filled}</svg>`}
function modUrl(m){return ({"Leads": "leads", "Kontakt": "contacts", "Organisationen": "organizations", "Bestellungen": "orders", "Produkte verwalten": "products", "Benutzergruppen": "user-groups", "Projekte": "projects", "Leistungsmarkt": "work-market", "Auftragnehmer-Bereich": "contractor", "Aufgaben": "tasks", "Chat": "chat", "Kalender": "calendar", "Meeting-Notizen": "meeting-notes", "E-Mail": "mail", "Warteschlange": "queue", "Speicher": "storage", "Verträge": "contracts", "Wissensdatenbank": "knowledge-base", "Notizen": "notes", "Entwürfe": "drafts", "Meine Fragen": "my-questions", "Dashboard": "dashboard", "Übersicht": "overview", "Vision und Mission": "vision", "Ziele": "goals", "Planung": "planning", "Fortschritt": "progress-review", "Finanzen": "finance", "SPV": "spv", "Businesspläne": "business-plans", "Wettbewerber": "competitors", "Wochenbilanz": "weekly-summary", "Entscheidungslog": "decisions", "Plugin-Marktplatz": "plugins", "Netzwerk": "network", "Unternehmen": "companies"}[m]||'../modules')}
