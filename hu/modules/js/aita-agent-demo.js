// AI-агент у правому нижньому куті сторінок модулів: кодова копія вікна з платформи.
// Запитання й відповіді готові, із сервером нічого не обмінюється. Демо-дані вигадані.
(function () {
  var mod = window.AITA_M || "";
  var P = { pg: "plugins", gp: "user-groups", pr: "products", od: "orders", sl: "contractor", mk: "work-market", fn: "finance", ct: "contracts", pl: "planning", st2: "weekly-summary", sb: "business-plans", sr: "progress-review", sv: "vision", so: "overview", ml: "mail", ib: "queue", cl: "calendar", db: "dashboard", kb: "knowledge-base", gl: "goals", dc: "decisions", ch: "chat", dr: "drafts", as: "my-questions", nt: "notes", mt: "meeting-notes", leads: "leads", tasks: "tasks", cont: "contacts", org: "organizations", st: "storage", cp: "competitors", net: "network", co: "companies" };

  // chip: підпис кнопки; q: повне запитання; mem: скільки спогадів; steps: дії агента; tool: картки-посилання; a: відповідь блоками
  var QA = {
    "SPV": [
      { chip: "Ki ír alá", ic: "s", q: "Ki írhatja alá az EPC-szerződést a Termobud Enerdzhi nevében?", mem: 4, steps: ["Olvasom az SPV adatlapját", "Ellenőrzöm az igazgatósági határozatokat"], tool: { k: "spv.signatories", t: "Aláírók", e: [["Oleh Martyniuk", "Igazgató · önállóan · 2026.02.01. óta", "#step=4"], ["Iryna Tkach", "Pénzügyi igazgató · € 50 000-ig", "#step=4"]] }, a: ["Aláíró: <b>Oleh Martyniuk</b>, igazgató, önállóan. Az igazgatóság 11.05-én döntött az EPC-szerződésről.", "Iryna Tkach csak €50 000-ig írhat alá dokumentumokat, ezért az EPC-szerződést nem írhatja alá."] },
      { chip: "Dokumentumok a vevőnek", ic: "z", q: "Gyűjtsd össze az SPV dokumentumait a vevő átvilágításához", mem: 9, steps: ["Olvasom az alapító dokumentumokat", "Ellenőrzöm az engedélyeket", "Olvasom a cap table-t"], tool: { k: "spv.documents", t: "SPV-dokumentumok", e: [["Alapító okirat", "2. változat · 2026.09.30.", "#step=6"], ["Cégkivonat", "2026.11.01-i állapot", "#step=6"], ["Részvényesi megállapodás", "Termobud · Green Invest Fund", "#step=6"]] }, a: ["Összegyűjtöttem az alapító okiratot, a cégkivonatot, a részvényesi megállapodást, a tulajdonosi szerkezetet (70 és 30%) és négy engedélyt.", "<b>Hiányzik</b> egy friss értékelés: az utolsó még a Series A kör előtt készült."] },
      { chip: "FCR-piac", ic: "c", q: "Működhet a 2 MW-os BESS az FCR-piacon?", mem: 3, steps: ["Olvasom az SPV engedélyeit"], tool: { k: "spv.licenses", t: "Engedélyek", e: [["TSO-előminősítés · FCR", "Aktív · 2 MW", "#step=6"], ["TSO-előminősítés · aFRR", "Folyamatban · beadva 2026.10.20.", "#step=6"]] }, a: ["Igen. Az FCR-re szóló TSO-előminősítés 2 MW-ra érvényes, így a BESS-szimulátor beszámítja ezt a bevételt.", "Az aFRR-piacon még nem: a kérelmet 10.20-án adták be, döntés még nincs."] }
    ],    "Projektek": [
      { chip: "Projekt állapota", ic: "s", q: "Mi blokkolja most a 8,5 MW-os napelempark + BESS projektet?", mem: 7, steps: ["Olvasom a projekt adatlapját", "Ellenőrzöm a feladatokat"], tool: { k: "task.list", t: "Lejárt feladatok", e: [["EPC-szerződés az EnerhoMontazhzsal", "Oleh Martyniuk · 6 napja lejárt", "#step=3"], ["7,2 MW-os transzformátor megrendelése", "Roman Boiko · 6 napja lejárt", "#step=3"]], more: "És még 3 – az összes feladat megnyitása", href: "#step=3" }, a: ["A projekt <b>Ready to build</b> szakaszban van, de az építés nem indul el EPC-szerződés nélkül. Felelős: <b>Oleh Martyniuk</b>.", "A transzformátor megrendelése ugyanerre a szerződésre vár, így ez egy csomópont, nem kettő."] },
      { chip: "A projekt pénzügyei", ic: "z", q: "Megtérül az erőmű?", mem: 4, steps: ["Olvasom a pénzügyi modellt"], a: ["A pénzügyi modell szerint IRR <b>18,6%</b>, NPV <b>4,1 millió €</b>, CAPEX <b>8,4 millió €</b>. Megtérülés: <b>4,6 év</b>.", "A számokat a modell számolta, kézzel senki nem vitte be őket."] },
      { chip: "Megnyitás a befektetőnek", ic: "c", q: "Nyisd meg a projektet olvasásra a Green Invest Fund befektetőnek", mem: 3, steps: ["Ellenőrzöm a hozzáféréseket", "Előkészítem a meghívót"], tool: { k: "access.grant", t: "Hozzáférés", e: [["Green Invest Fund", "Olvasás · Napelempark + BESS 8,5 MW", "#step=8"]] }, a: ["A befektető látni fogja az áttekintést, a pénzügyeket és a dokumentumokat, de semmit nem módosíthat. Erősítsd meg, és elküldöm a meghívót."] }
    ],    "Leadek": [
      { chip: "Leadek megjelenítése", ic: "s", q: "Mutasd az összes aktív leadet", mem: 12, steps: ["Leadeket keresek", "Olvasom a tölcsér szakaszait"], tool: { k: "entity.list", t: "Leadlista", e: [["Andrii Melnyk", "Napelem-értékesítés · Tárgyalás", P.leads], ["Kateryna Rudenko", "Napelem-értékesítés · Demó", P.leads], ["Nataliia Melnyk", "Napelem-értékesítés · Első kapcsolat", P.leads]], more: "És még 4 – a teljes lista megnyitása", href: P.leads },
        a: ["<b>„Tárgyalás” szakasz</b><ul><li><b>Andrii Melnyk</b> (Termobud): ajánlat két változatban péntekig.</li></ul><b>„Demó” szakasz</b><ul><li><b>Kateryna Rudenko</b> (Enerhobud Servis): forró, találkozó 10.22-én 12:00-kor.</li><li><b>Viktor Savchuk</b> (Dnipro Ahro): a második bemutatóra vár.</li></ul>", "<b>Megjegyzés:</b> az „Új lead” szakaszban lévő leadek még nincsenek minősítve, ezért nem számolom őket aktívnak."] },
      { chip: "Leadösszesítő", ic: "z", q: "Adj összesítést a legutóbbi leadekről", mem: 9, steps: ["Leadeket keresek", "Olvasom a legutóbbi hívásokat"], a: ["Egy hét alatt 3 új lead jött, egy átkerült a „Tárgyalás” szakaszba.<ul><li><b>Andrii Melnyk</b>: ajánlat péntekig, az igazgató még 2 ajánlatot hasonlít össze.</li><li><b>Nataliia Melnyk</b>: a következő kapcsolatfelvétel tegnap volt esedékes, lejárt.</li><li><b>Ihor Petrenko</b>: új jelentkezés a weboldalról.</li></ul>", "<b>Teendő:</b> hívd fel Nataliiát, és küldd el az ajánlatot a Termobudnak. Ha szeretnéd, felolvasom bármelyik lead jegyzeteit."] },
      { chip: "Lead létrehozása", ic: "c", q: "Hozz létre leadet a Termobudra a Partnerek tölcsérben", mem: 3, steps: ["Kapcsolatot keresek", "Létrehozom a leadet"], tool: { k: "entity.create", t: "Lead létrehozva", e: [["Termobud: partnerség", "Partnerek · Új lead", P.leads]] }, a: ["Kész. <b>Andrii Melnyk</b> már szerepelt az adatbázisban, ezért a leadet hozzá kapcsoltam, nem hoztam létre új kapcsolatot."] }
    ],
    "Feladatok": [
      { chip: "Feladatok megjelenítése", ic: "s", q: "Mutasd a nyitott feladataimat", mem: 7, steps: ["Feladatokat keresek"], tool: { k: "task.list", t: "Feladatlista", e: [["Termobud: ajánlat két változatban", "In Progress · High · péntekig", P.tasks], ["Termobud: helyszíni bejárás és tetőfelmérés", "To Do · Medium · 23.10", P.tasks], ["Alfa Merezhi: specifikáció frissítése", "To Do · Low", P.tasks]], more: "És még 2 – a tábla megnyitása", href: P.tasks }, a: ["5 nyitott feladatod van, egynek ezen a héten jár le a határideje.", "<b>A legsürgősebb:</b> a Termobud ajánlata, mert ez blokkolja a helyszíni találkozót."] },
      { chip: "Mi van blokkolva", ic: "z", q: "Mi van most blokkolva?", mem: 5, steps: ["Feladatokat keresek", "Ellenőrzöm a kapcsolódásokat"], tool: { k: "task.relations", t: "Feladatkapcsolatok", e: [["Berendezés árának jóváhagyása", "Blocked · Critical · 3 napja lejárt", P.tasks]] }, a: ["<b>A lánc:</b> a berendezés ára nélkül nincs ajánlat, ajánlat nélkül pedig nincs helyszíni találkozó.", "Ha szeretnéd, írok Olehnek a feladat chatjében."] },
      { chip: "Feladat létrehozása", ic: "c", q: "Adj Irynának feladatot: ajánlat a Termobudnak péntekig", mem: 4, steps: ["Személyt keresek", "Létrehozom a feladatot"], tool: { k: "task.create", t: "Feladat létrehozva", e: [["Termobud: ajánlat két változatban", "Iryna Tkach · péntekig", P.tasks]] }, a: ["A feladat létrejött, és a Termobud leadhez kapcsolódik. Iryna értesítést kap."] }
    ],
    "Kapcsolat": [
      { chip: "Kapcsolat keresése", ic: "s", q: "Keresd meg Andrii Melnykot", mem: 8, steps: ["Kapcsolatokat keresek"], tool: { k: "contact.list", t: "Kapcsolat", e: [["Andrii Melnyk", "Termobud · igazgatóhelyettes", P.cont]] }, a: ["<b>Andrii Melnyk</b> két tölcsérben szerepel:<ul><li><b>Napelem-értékesítés:</b> „Tárgyalás” szakasz.</li><li><b>Partnerek:</b> „Első kapcsolat” szakasz.</li></ul>"] },
      { chip: "Miről beszéltünk", ic: "z", q: "Miről beszéltünk Andriival legutóbb?", mem: 11, steps: ["Kapcsolatot keresek", "Olvasom a megbeszélések felvételeit"], tool: { k: "meeting.list", t: "Megbeszélések", e: [["Termobud - Aita", "okt. 20. · a felvétel kész · 42 perc", P.cont]] }, a: ["Október 20-án ezekben állapodtunk meg:<ul><li>Ajánlat két változatban péntekig.</li><li>Helyszíni találkozó csütörtökön 10:00-kor.</li></ul>", "Az igazgató még két ajánlatot hasonlít össze, ezért fontos a megtérülés."] },
      { chip: "Kapcsolat létrehozása", ic: "c", q: "Add hozzá Pavlo Hnatiukot a Termobudtól, mérnök", mem: 2, steps: ["Szervezetet keresek", "Létrehozom a kapcsolatot"], tool: { k: "contact.create", t: "Kapcsolat létrehozva", e: [["Pavlo Hnatiuk", "Termobud · mérnök", P.cont]] }, a: ["A kapcsolat létrejött, és a <b>Termobud</b> szervezethez kapcsolódik."] }
    ],
    "Szervezetek": [
      { chip: "Szervezet keresése", ic: "s", q: "Mutasd az összes ügyfelet", mem: 6, steps: ["Szervezeteket keresek"], tool: { k: "org.list", t: "Szervezetek", e: [["Termobud", "Építőipar · 3 kapcsolat", P.org], ["Enerhobud Servis", "Energetika · 1 kapcsolat", P.org], ["Ahro Zakhid", "Mezőgazdaság · 1 kapcsolat", P.org]] }, a: ["3 ügyfeled van. A legtöbb kapcsolat a <b>Termobudnál</b> van."] },
      { chip: "Ki dönt", ic: "z", q: "Ki dönt a Termobudnál?", mem: 7, steps: ["Olvasom a szervezet adatlapját"], tool: { k: "contact.list", t: "A szervezet kapcsolatai", e: [["Olena Sydorenko", "Igazgató · döntéshozó", P.cont], ["Andrii Melnyk", "Igazgatóhelyettes · döntéshozó", P.cont]] }, a: ["Ketten döntenek. Műszaki oldalon a projektet <b>Andrii Melnyk</b> viszi."] },
      { chip: "Szervezet létrehozása", ic: "c", q: "Add hozzá a Lohist Plius szervezetet, ügyfél", mem: 1, steps: ["Duplikátumokat ellenőrzök", "Létrehozom a szervezetet"], tool: { k: "org.create", t: "Szervezet létrehozva", e: [["Lohist Plius", "Szerep: ügyfél", P.org]] }, a: ["Kész. Ilyen szervezet még nem volt az adatbázisban."] }
    ],
    "Chat": [
      { chip: "Újdonságok", ic: "s", q: "Mit hagytam ki ma a chatekben?", mem: 6, steps: ["Olvasom a chateket", "Említéseket keresek"], tool: { k: "chat.rooms", t: "Chatek", e: [["Task · Ajánlat a Termobudnak", "3 új üzenet", P.ch], ["Oleh Martyniuk", "Oleh ügynöke válaszra vár", P.ch]] }, a: ["Két chat vár rád. <b>Oleh ügynöke</b> két sort kér a Termobuddal tartott találkozóról."] },
      { chip: "Döntések", ic: "z", q: "Mely döntések várnak megerősítésre?", mem: 4, steps: ["Olvasom a megbeszéléseken született megállapodásokat"], tool: { k: "decision.list", t: "Megállapodások", e: [["15/85-ös elosztás 400 ezer euróig", "Megbeszélésről · megerősítésre vár", P.ch]] }, a: ["Egy megállapodás vár megerősítésre. Ezt egyszerűen a chatben is megteheted."] },
      { chip: "Üzenet a csapatnak", ic: "c", q: "Írd meg Irynának, hogy az ajánlat péntekig kell", mem: 2, steps: ["Személyt keresek", "Előkészítem az üzenetet"], tool: { k: "chat.send", t: "Piszkozat", e: [["Iryna Tkach", "A Termobud ajánlata péntekig kell", P.ch]] }, a: ["A piszkozat kész. Elküldjem?"] }
    ],
    "Piszkozatok": [
      { chip: "Dokumentumaim", ic: "s", q: "Mely dokumentumok várják az átnézésemet?", mem: 3, steps: ["Dokumentumokat keresek"], tool: { k: "draft.list", t: "Dokumentumok", e: [["Termobud-ajánlat: szöveg és táblázat", "2 megjegyzés · 1 javaslat", P.dr]] }, a: ["Egy dokumentum vár rád."] },
      { chip: "Nyitott javítások", ic: "z", q: "Mi nincs még lezárva a Termobud ajánlatában?", mem: 5, steps: ["Olvasom a dokumentumot"], tool: { k: "draft.get", t: "Dokumentum", e: [["Termobud-ajánlat: szöveg és táblázat", "Oleh megjegyzése · szerelési határidők", P.dr]] }, a: ["Egy kérdés maradt a szerelési határidőkről."] },
      { chip: "Javítás javaslata", ic: "c", q: "Rövidítsd le a második bekezdést", mem: 2, steps: ["Olvasom a dokumentumot", "Előkészítem a javaslatot"], tool: { k: "draft.suggest", t: "Javaslat", e: [["Termobud-ajánlat: szöveg és táblázat", "A jóváhagyásodra vár", P.dr]] }, a: ["Előkészítettem a javaslatot, a szöveget nem módosítottam."] }
    ],
    "Kérdéseim": [
      { chip: "Ki nem válaszolt", ic: "s", q: "Ki nem válaszolt még a kérdéseimre?", mem: 3, steps: ["Kérdéseket keresek"], tool: { k: "ask.list", t: "Kérdések", e: [["Kész a Termobud költségvetése?", "Iryna Tkach · nov. 7-ig", P.as], ["Van inverter raktáron?", "Roman Boiko · nov. 8-ig", P.as]] }, a: ["Két válaszra várunk."] },
      { chip: "Engem kérdeznek", ic: "z", q: "Mit kérdeznek tőlem?", mem: 2, steps: ["Kérdéseket keresek"], tool: { k: "ask.list", t: "Kérdések", e: [["Megyünk csütörtökön a helyszínre?", "Oleh ügynöke · ma 20:15-ig", P.as]] }, a: ["Egy kérdés ma esedékes."] },
      { chip: "Kérdezz egy kollégát", ic: "c", q: "Kérdezd meg Irynát, kész-e a költségvetés, várj egy napot", mem: 2, steps: ["Személyt keresek", "Létrehozom a kérdést"], tool: { k: "ask.create", t: "Kérdés elküldve", e: [["Kész a költségvetés?", "Iryna Tkach · 1 nap", P.as]] }, a: ["A kérdést elküldtem. A választ a feladatban látod majd."] }
    ],
    "Jegyzetek": [
      { chip: "Jegyzet keresése", ic: "s", q: "Hol a raktártetőről szóló jegyzet?", mem: 2, steps: ["Jegyzeteket keresek"], tool: { k: "note.list", t: "Jegyzetek", e: [["A raktártető felmérése", "Ma, 10:46", P.nt]] }, a: ["Megtaláltam a jegyzetet ellenőrzőlistával és fotókkal."] },
      { chip: "Mi van a jegyzetekben", ic: "z", q: "Mit akartam ellenőrizni a helyszínen?", mem: 3, steps: ["Olvasom a jegyzetet"], a: ["Az ellenőrzőlistán két nyitott pont van:<ul><li>A tetőfedés és a vízszigetelés állapota.</li><li>Hely az invertereknek.</li></ul>"] },
      { chip: "Jegyzet rögzítése", ic: "c", q: "Jegyezd fel: helyszíni bejárás csütörtökön 10:00-kor", mem: 1, steps: ["Létrehozom a jegyzetet"], tool: { k: "note.create", t: "Jegyzet létrehozva", e: [["Bejárás csütörtökön", "Hozzáadva a várólistához", P.nt]] }, a: ["Kész. A jegyzet már a várólistán van."] }
    ],
    "Megbeszélésjegyzetek": [
      { chip: "Miben döntöttünk", ic: "s", q: "Miben döntöttünk a tegnapi megbeszélésen?", mem: 9, steps: ["Megbeszélést keresek", "Olvasom az összefoglalót"], tool: { k: "meeting.get", t: "Megbeszélés", e: [["Termobud - Aita", "42 perc 18 mp · 4 döntés · 5 feladat", P.mt]] }, a: ["Ezekben állapodtunk meg:<ul><li>Ajánlat két változatban.</li><li>Helyszíni bejárás csütörtökön 10:00-kor.</li></ul>"] },
      { chip: "Feladataim", ic: "z", q: "Mi a teendőm a megbeszélés után?", mem: 5, steps: ["Olvasom a megbeszélés feladatait"], tool: { k: "meeting.get", t: "A megbeszélés feladatai", e: [["A helyszíni bejárás időpontjának egyeztetése", "Kateryna Rudenko", P.mt]] }, a: ["Egy pont a tiéd. Létrehozzam a feladatot?"] },
      { chip: "Megbeszélés rögzítése", ic: "c", q: "Rögzítsd ezt a megbeszélést", mem: 1, steps: ["Ellenőrzöm a linket", "Elindítom a felvételt"], tool: { k: "meeting.start", t: "Felvétel", e: [["Termobud - Aita", "A jegyzetelő egy perc múlva csatlakozik", P.mt]] }, a: ["A jegyzetelő nagyjából egy perc múlva csatlakozik Aita Notetaker néven."] }
    ],
    "Döntésnapló": [
      { chip: "Döntés keresése", ic: "s", q: "Mit döntöttünk az előlegről?", mem: 7, steps: ["Keresek a naplóban"], tool: { k: "decision.list", t: "Döntések", e: [["A szerelés csak 50%-os előleg után indul", "Érvényes · A bizonyíték · felülvizsgálat jan. 29.", P.dc]] }, a: ["A döntés érvényes. Indok: előleg nélkül az alvállalkozó nem foglalja le a brigádot."] },
      { chip: "Mi vár", ic: "z", q: "Mi vár megerősítésre?", mem: 4, steps: ["Olvasom a várólistát"], tool: { k: "decision.list", t: "Várólista", e: [["A hirdetéseket mérnöki cégekre célozzuk", "Függőben · C bizonyíték", P.dc], ["A tárolós változatot másodikként mutatjuk", "Függőben · B bizonyíték", P.dc]] }, a: ["Két bejegyzés vár rád."] },
      { chip: "Döntés rögzítése", ic: "c", q: "Rögzítsd a döntést: 50% előleg, mert a brigádot előre lefoglaljuk", mem: 3, steps: ["Duplikátumokat ellenőrzök", "Létrehozom a bejegyzést"], tool: { k: "decision.create", t: "Bejegyzés létrehozva", e: [["A szerelés csak 50%-os előleg után indul", "Felülvizsgálat 90 nap múlva", P.dc]] }, a: ["A döntést indokkal együtt rögzítettem. A felülvizsgálat 90 nap múlva esedékes."] }
    ],
    "Célok": [
      { chip: "Célok megjelenítése", ic: "s", q: "Mutasd a céljainkat", mem: 6, steps: ["Olvasom a célokat"], tool: { k: "goal.list", t: "Célok", e: [["20 napelemes projekt lezárása", "Bizonyosság 70% · terv szerint", P.gl], ["A szerelés lerövidítése öt hétre", "Bizonyosság 30% · veszélyben", P.gl]] }, a: ["7 aktív cél van. Egy veszélyben: a szerelési határidők."] },
      { chip: "Mi van veszélyben", ic: "z", q: "Mely célok vannak veszélyben?", mem: 4, steps: ["Olvasom a kulcseredményeket"], a: ["<b>A szerelés lerövidítése öt hétre:</b> most hat és fél hét, a határidőig egy hónap van hátra."] },
      { chip: "Eredmény frissítése", ic: "c", q: "Frissítsd az eredményt: 14 erőmű elindítva", mem: 2, steps: ["Eredményt keresek", "Beírom az értéket"], tool: { k: "kr.checkin", t: "Frissítés", e: [["Elindított erőművek", "13 → 14 / 20", P.gl]] }, a: ["Az eredményt frissítettem."] }
    ],
    "Tudásbázis": [
      { chip: "Szabályzat keresése", ic: "s", q: "Mit vigyek a helyszíni bejárásra?", mem: 5, steps: ["Keresek a tudásbázisban"], tool: { k: "kb.search", t: "Oldalak", e: [["Helyszíni bejárás", "Szerelés · Szabályzatok", P.kb]] }, a: ["Mérőszalagot, lézeres távolságmérőt és drónt. Indulás előtt szólj a biztonsági szolgálatnak."] },
      { chip: "Mi avult el", ic: "z", q: "Mely oldalakat kell átnézni?", mem: 3, steps: ["Ellenőrzöm a felülvizsgálati dátumokat"], tool: { k: "kb.search", t: "Oldalak", e: [["Biztonság a tetőn", "A felülvizsgálat 3 napja lejárt", P.kb]] }, a: ["Egy oldal vár ellenőrzésre. Romannak már ment emlékeztető."] },
      { chip: "Oldal írása", ic: "c", q: "Állíts össze ellenőrzőlistát az erőmű átadásához", mem: 4, steps: ["Olvasom a szabályzatokat", "Létrehozom az oldalt"], tool: { k: "kb.create", t: "Oldal létrehozva", e: [["Az erőmű átadásának ellenőrzőlistája", "Szerelés · Ellenőrzőlisták", P.kb]] }, a: ["Az oldal elkészült. Nézd át, mielőtt közzéteszed a csapatnak."] }
    ],
    "Irányítópult": [
      { chip: "A nap áttekintése", ic: "s", q: "Mi sürgős ma?", mem: 8, steps: ["Olvasom a feladatokat"], tool: { k: "task.list", t: "Feladatok", e: [["Termobud: ajánlat két változatban", "Lejárt: 2 n", P.tasks]] }, a: ["Két kritikus feladat. Kezdd az ajánlattal, mert enélkül nem lesz találkozó."] },
      { chip: "A portfólió állapota", ic: "z", q: "Hogy áll a portfólió?", mem: 3, steps: ["Olvasom a projekteket"], a: ["17 projekt, 5 üzemel, a portfólió CAPEX-e $4.1M."] },
      { chip: "Kit hívj fel", ic: "c", q: "Kit hívjak fel ma?", mem: 5, steps: ["Olvasom a leadeket"], tool: { k: "entity.list", t: "Leadek", e: [["Nataliia Melnyk", "A következő kapcsolatfelvétel tegnap volt esedékes", P.leads]] }, a: ["Kezdd Nataliiával: a kapcsolatfelvétel lejárt."] }
    ],
    "Naptár": [
      { chip: "Mi van ma", ic: "s", q: "Milyen megbeszéléseim vannak ma?", mem: 4, steps: ["Olvasom a naptárt"], tool: { k: "event.list", t: "Események", e: [["Termobud - Aita", "15:00 · online · a jegyzetelő jön", P.cl]] }, a: ["Ma egy ügyfélmegbeszélés van 15:00-kor."] },
      { chip: "Szabad idő", ic: "z", q: "Keress egy órát nekem, Olehnek és Irynának", mem: 2, steps: ["Ellenőrzöm a naptárakat"], a: ["Közös szabad idő: kedd, 14:00–15:00."] },
      { chip: "Megbeszélés kitűzése", ic: "c", q: "Tűzz ki megbeszélést a Termobuddal csütörtök 10:00-ra", mem: 3, steps: ["Leadet keresek", "Létrehozom az eseményt"], tool: { k: "event.create", t: "Esemény létrehozva", e: [["Helyszíni bejárás", "Csütörtök, 10:00 · a leadhez kapcsolva", P.cl]] }, a: ["Az esemény létrejött, és a Termobud leadhez kapcsolódik."] }
    ],
    "Várólista": [
      { chip: "Mi van a várólistán", ic: "s", q: "Mi van a várólistámon?", mem: 5, steps: ["Olvasom a várólistát"], tool: { k: "inbox.queue", t: "Várólista", e: [["Termobud: kérés az ajánlat második változatára", "Döntést igényel", P.ib], ["Bank Skhid: dokumentumok", "Döntést igényel", P.ib]] }, a: ["Két levél vár a döntésedre, egyet pedig az ügynök már feldolgozott."] },
      { chip: "Éjszakai összefoglaló", ic: "z", q: "Mi történt éjjel?", mem: 3, steps: ["Olvasom az ügynök naplóját"], a: ["Az ügynök kiszűrt 23 levelet, 11 műveletet végzett, 2 pedig rád vár."] },
      { chip: "Feladat készítése", ic: "c", q: "Csinálj ebből a levélből feladatot Irynának", mem: 2, steps: ["Olvasom a levelet", "Létrehozom a feladatot"], tool: { k: "task.create", t: "Feladat létrehozva", e: [["Termobud: az ajánlat második változata", "Iryna Tkach · péntekig", P.tasks]] }, a: ["A feladat elkészült. 24 órán belül visszavonhatod."] }
    ],
    "Posta": [
      { chip: "Levél keresése", ic: "s", q: "Hol a bank levele?", mem: 3, steps: ["Keresek a postában"], tool: { k: "inbox.search", t: "Levelek", e: [["Bank Skhid: dokumentumok a hitelhez", "Ma, 8:40", P.ml]] }, a: ["A levél ma 8:40-kor jött, három negyedév beszámolóit kérik."] },
      { chip: "Összefoglalás", ic: "z", q: "Foglald össze a levelezést a Termobuddal", mem: 6, steps: ["Olvasom a levelezést"], a: ["Az ügyfél péntekig kéri az ajánlat második változatát, és elküldte a tető vázlatát."] },
      { chip: "Válasz megírása", ic: "c", q: "Írj választ Andriinak", mem: 4, steps: ["Olvasom a levelezést", "Előkészítem a piszkozatot"], tool: { k: "inbox.draft", t: "Piszkozat", e: [["Válasz Andrii Melnyknek", "Küldésre vár", P.ml]] }, a: ["A piszkozat kész. Te küldöd el."] }
    ],
    "Adattár": [
      { chip: "Fájl keresése", ic: "s", q: "Hol a szerződés a Termobuddal?", mem: 5, steps: ["Keresek az adattárban"], tool: { k: "file.search", t: "Fájlok", e: [["Szerződés_Termobud_v3.pdf", "02_Szerződések / Termobud", "#doc=Szerződés_Termobud_v3.pdf"]] }, a: ["A fájl a <b>02_Szerződések / Termobud</b> mappában van. Ez a harmadik változat, október 21-i."] },
      { chip: "Mi érhető el linkkel", ic: "z", q: "Mely mappák érhetők el linkkel?", mem: 3, steps: ["Olvasom a hozzáféréseket"], tool: { k: "folder.list", t: "Mappák", e: [["02_Szerződések", "Bárki, akinél a link van · 30 napig érvényes", "#step=5"]] }, a: ["Linkkel egy mappa érhető el. 4-szer nyitották meg."] },
      { chip: "Prezentáció készítése", ic: "c", q: "Készíts rólunk prezentációt a Termobudnak", mem: 14, steps: ["Keresem a cég adatait", "Olvasom a fájlokat", "Összeállítom a prezentációt"], tool: { k: "file.create", t: "Fájl létrehozva", e: [["Prezentáció_Termobud.pdf", "04_Kereskedelem · 8 dia", "#doc=Prezentáció_Termobud.pdf"], ["A_cégről.pdf", "forrás · 01_Cég", "#doc=A_cégről.pdf"], ["Napelemes_esettanulmányok.pdf", "forrás · 01_Cég", "#doc=Napelemes_esettanulmányok.pdf"]] }, a: ["Az adatok forrása: <b>A_cégről.pdf</b>, <b>Napelemes_esettanulmányok.pdf</b> és <b>Arculati_kézikönyv.pdf</b>.", "Nézd át az árakat tartalmazó diát: ezt küldés előtt érdemes jóváhagyatni."] }
    ],
    "Versenytársak": [
      { chip: "Versenytársak megjelenítése", ic: "s", q: "Ki a legnagyobb fenyegetés?", mem: 4, steps: ["Olvasom a versenytárs-nyilvántartást"], tool: { k: "competitor.list", t: "Versenytársak", e: [["EnergyDesk", "Fenyegetés: magas · €12M", P.cp], ["Volta Suite", "Fenyegetés: magas · €28M", P.cp]] }, a: ["Két versenytárs jelent magas fenyegetést. Az <b>EnergyDesk</b> gyakrabban bukkan fel a leadjeidnél."] },
      { chip: "Összevetés velünk", ic: "z", q: "Miben erősebb nálunk az EnergyDesk?", mem: 6, steps: ["Olvasom az összehasonlító táblázatot"], a: ["Az EnergyDesk két sorban vezet:<ul><li><b>Raktár és alkatrészek.</b></li><li><b>Alkalmazás szerelőknek.</b></li></ul>", "<b>Az erősségeid:</b> pénzügyi modell és hívásátirat."] },
      { chip: "Versenytárs hozzáadása", ic: "c", q: "Add hozzá versenytársként: energydesk.example", mem: 1, steps: ["Olvasom a weboldalt", "Létrehozom az adatlapot"], tool: { k: "competitor.create", t: "Adatlap létrehozva", e: [["EnergyDesk", "Külső · adatok a weboldalról", P.cp]] }, a: ["Az adatlap elkészült. Ellenőrizd az adatokat: az AI tévedhet."] }
    ],
    "Hálózat": [
      { chip: "Személy keresése", ic: "s", q: "Ki van nálunk a szerelésből?", mem: 5, steps: ["Keresek a hálózatban"], tool: { k: "network.search", t: "Emberek", e: [["Dmytro Tkach", "Tekhnopark · Projekt, Ügylet", P.net], ["Roman Boiko", "Soniachni Systemy · Csapat", P.net]] }, a: ["<b>Dmytro Tkach</b> már dolgozott veled egy projekten, érdemes vele kezdeni."] },
      { chip: "Honnan ismerem", ic: "z", q: "Honnan ismerem Andrii Melnykot?", mem: 8, steps: ["Keresek a hálózatban"], tool: { k: "network.search", t: "Emberek", e: [["Andrii Melnyk", "Termobud · CRM", P.cont]] }, a: ["Andrii szerepel a CRM-edben, a Termobud kapcsolata. Még nincs regisztrálva a platformon, ezért chatben nem írhatsz neki."] },
      { chip: "Partner keresése", ic: "c", q: "Keress szerelőcéget Lvivben", mem: 2, steps: ["Keresek a platform felhasználói között"], tool: { k: "profile.search", t: "Emberek", e: [["Tetiana Shevchuk", "Montazh Sontse · szerelési igazgató", P.net]] }, a: ["Lvivben egy embert találtam. Írjak neki üzenetet?"] }
    ],
    "Cégek": [
      { chip: "Cég keresése", ic: "s", q: "Keress szerelőcéget Ukrajnában", mem: 3, steps: ["Cégeket keresek"], tool: { k: "company.search", t: "Cégek", e: [["Montazh Sontse", "UA · Lviv · ellenőrzött · 14 projekt", P.co], ["Svitlo Pro", "UA · Vinnytsia · ellenőrzött", P.co]] }, a: ["Két cég felel meg. A <b>Montazh Sontse</b> 2 napja volt aktív."] },
      { chip: "Ki aktív", ic: "z", q: "Ki aktív ezen a héten?", mem: 2, steps: ["Cégeket keresek"], tool: { k: "company.search", t: "Cégek", e: [["Montazh Sontse", "2 napja", P.co], ["HrinBud", "3 napja", P.co]] }, a: ["Ezen a héten két cég aktív."] },
      { chip: "Meghívás megbeszélésre", ic: "c", q: "Hogyan hívjam meg a Montazh Sontsét megbeszélésre?", mem: 1, steps: ["Olvasom a cég profilját"], tool: { k: "company.get", t: "Cég", e: [["Montazh Sontse", "Megbeszélés kérése", P.co]] }, a: ["A profilban kattints a „Megbeszélés kérése” gombra. A megbeszélés akkor jön létre, ha a cég megerősíti."] }
    ]
  };
  var desc = (typeof D !== "undefined" && D[mod]) || "";
  var general = [
    { chip: "Mit tud a modul", ic: "s", q: "Mit tud ez a modul?", mem: 3, steps: ["Olvasom a tudásbázist"], a: [desc ? "<b>„" + mod + "”:</b> " + desc + "." : "Az ingyenes demón bemutatom a modult."] },
    { chip: "Benne van a csomagban?", ic: "z", q: "Benne van a csomagban?", mem: 1, steps: ["Olvasom a tudásbázist"], a: ["Igen. Minden csomag mind a 48 modult tartalmazza."] },
    { chip: "Megnézem nálunk", ic: "c", q: "Hogyan láthatom ezt a saját cégemben?", mem: 1, steps: ["Olvasom a tudásbázist"], a: ["Jelentkezz ingyenes demóra, és megmutatjuk, hogyan működne nálad a modul.<br><a href=\"../demo\">Ingyenes demó</a>"] }
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
  btn.id = "agB"; btn.type = "button"; btn.setAttribute("aria-label", "Aita Asszisztens"); btn.innerHTML = star;
  var box = document.createElement("div");
  box.id = "agP"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Aita Asszisztens");
  box.innerHTML = '<div class="hd"><span class="ic">' + wand + '</span><span class="tt"><b>Új beszélgetés ⌄</b><small>Aita · demó a weboldalon</small></span><button class="hb nw" type="button" aria-label="Új beszélgetés">' + newc + '</button><span class="hb" aria-hidden="true">⋯</span><button class="hb mn" type="button" aria-label="Kis méret">–</button><button class="hb x" type="button" aria-label="Bezárás">×</button></div>'
    + '<div class="bd" aria-live="polite"></div><div class="ch"></div>'
    + '<form><button class="tool" type="button" aria-label="Fájl csatolása">' + clip + '</button><button class="tool" type="button" aria-label="Képernyőterület kijelölése">' + zone + '</button><input type="text" placeholder="Írj üzenetet..." aria-label="Üzenet"><button class="tool" type="button" aria-label="Diktálás a mezőbe">' + mic + '</button><button class="go" type="submit" aria-label="Küldés">↑</button></form>'
    + '<div class="fb"><span>Claude Haiku 5.5 ⌄</span><span>Kérdezz módosítás előtt</span><span>Ctrl+J</span></div>';
  document.body.appendChild(btn); document.body.appendChild(box);

  var bd = box.querySelector(".bd"), ch = box.querySelector(".ch"), inp = box.querySelector("input"), title = box.querySelector(".tt b"), busy = false;
  var hello = '<div class="hi"><i>' + star + '</i><b>Miben segíthetek?</b>Kérdezz bármit a munkaterületedről...</div>';
  var reset = function () { bd.innerHTML = hello; title.textContent = "Új beszélgetés ⌄"; ch.style.display = ""; busy = false; };
  var esc = function (x) { var d = document.createElement("div"); d.textContent = x; return d.innerHTML; };
  var down = function () { bd.scrollTop = bd.scrollHeight; };
  var fast = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms, f) { setTimeout(f, fast ? 0 : ms); };
  var stamp = function () { var d = new Date(), p = function (n) { return (n < 10 ? "0" : "") + n; }; return { full: p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()), t: p(d.getHours()) + ":" + p(d.getMinutes()) }; };
  var ask = function (q, it) {
    if (busy) return; busy = true;
    bd.innerHTML = ""; ch.style.display = "none"; title.textContent = q;
    var me = document.createElement("div"); me.className = "me"; me.textContent = q; bd.appendChild(me);
    if (it.mem) { var m = document.createElement("div"); m.className = "mem"; m.textContent = "Felhasznált emlékek: " + it.mem; bd.appendChild(m); }
    var rw = document.createElement("div"); rw.className = "rw"; rw.innerHTML = '<span class="bt">' + bot + '</span><div class="col"></div>'; bd.appendChild(rw);
    var col = rw.querySelector(".col");
    var think = document.createElement("div"); think.className = "dots"; think.innerHTML = "<span></span><span></span><span></span>"; col.appendChild(think);
    var queue = [];
    (it.steps || []).forEach(function (s) { queue.push(function () { var e = document.createElement("div"); e.className = "st"; e.innerHTML = chk + esc(s) + "<em>›</em>"; col.insertBefore(e, think); }); });
    if (it.tool) queue.push(function () {
      var w = stamp(), t = it.tool, e = document.createElement("div"); e.className = "tl";
      e.innerHTML = '<div class="th"><code>' + t.k + '</code>' + esc(t.t) + '</div><div class="tb">' + t.e.map(function (x) { return '<a class="en" href="' + x[2] + '"><span><b>' + esc(x[0]) + '</b><small>' + esc(x[1]) + '</small></span>' + ext + '</a>'; }).join("") + (t.more ? '<a class="mo" href="' + t.href + '">' + esc(t.more) + '</a>' : "") + '<div class="dt">adatok: ' + w.full + '</div></div>';
      col.insertBefore(e, think);
    });
    (it.a || []).forEach(function (html) { queue.push(function () { var e = document.createElement("div"); e.className = "an"; e.innerHTML = html; col.insertBefore(e, think); }); });
    var i = 0;
    (function next() {
      if (i < queue.length) { queue[i++](); down(); wait(i === 1 ? 600 : 520, next); return; }
      think.remove();
      var f = document.createElement("div"); f.className = "ft2"; f.innerHTML = cpy + "Másolás &nbsp; " + stamp().t; col.appendChild(f); down(); busy = false; ch.style.display = "";
    })();
  };
  items.forEach(function (it) {
    var b = document.createElement("button"); b.type = "button"; b.innerHTML = (chipI[it.ic] || star) + esc(it.chip);
    b.onclick = function () { ask(it.q, it); }; ch.appendChild(b);
  });
  var note = { mem: 0, steps: [], a: ["A weboldalon csak előre elkészített példák vannak. A platformon fájlt csatolhatsz, lediktálhatod a kérést, és kijelölheted a képernyő egy részét.<br><a href=\"../demo\">Ingyenes demó</a>"] };
  box.querySelectorAll(".tool").forEach(function (b) { b.onclick = function () { ask(b.getAttribute("aria-label"), note); }; });
  box.querySelector("form").onsubmit = function (e) {
    e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = "";
    ask(v, { mem: 0, steps: [], a: ["A weboldalon csak előre elkészített példák vannak. A platformon az ügynök a céged adataiból válaszol.<br><a href=\"../demo\">Ingyenes demó</a>"] });
  };
  var open = function (on) { box.classList.toggle("on", on); btn.style.display = on ? "none" : ""; (on ? inp : btn).focus(); };
  btn.onclick = function () { open(true); };
  box.querySelector(".x").onclick = function () { open(false); };
  box.querySelector(".mn").onclick = function () { open(false); };
  box.querySelector(".nw").onclick = reset;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("on")) open(false); if (e.ctrlKey && (e.key === "j" || e.key === "J")) { e.preventDefault(); open(!box.classList.contains("on")); } });
  reset();
})();
