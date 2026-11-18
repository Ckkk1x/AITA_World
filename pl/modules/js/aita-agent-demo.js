// AI-агент у правому нижньому куті сторінок модулів: кодова копія вікна з платформи.
// Запитання й відповіді готові, із сервером нічого не обмінюється. Демо-дані вигадані.
(function () {
  var mod = window.AITA_M || "";
  var P = { pg: "plugins", gp: "user-groups", pr: "products", od: "orders", sl: "contractor", mk: "work-market", fn: "finance", ct: "contracts", pl: "planning", st2: "weekly-summary", sb: "business-plans", sr: "progress-review", sv: "vision", so: "overview", ml: "mail", ib: "queue", cl: "calendar", db: "dashboard", kb: "knowledge-base", gl: "goals", dc: "decisions", ch: "chat", dr: "drafts", as: "my-questions", nt: "notes", mt: "meeting-notes", leads: "leads", tasks: "tasks", cont: "contacts", org: "organizations", st: "storage", cp: "competitors", net: "network", co: "companies" };

  // chip: підпис кнопки; q: повне запитання; mem: скільки спогадів; steps: дії агента; tool: картки-посилання; a: відповідь блоками
  var QA = {
    "SPV": [
      { chip: "Kto podpisuje", ic: "s", q: "Kto może podpisać umowę EPC w imieniu Termobud Enerdzhi?", mem: 4, steps: ["Czytam kartę SPV", "Sprawdzam uchwały zarządu"], tool: { k: "spv.signatories", t: "Sygnatariusze", e: [["Oleh Martyniuk", "Dyrektor · jednoosobowo · od 01.02.2026", "#step=4"], ["Iryna Tkach", "Dyrektorka finansowa · do € 50 000", "#step=4"]] }, a: ["Podpisuje <b>Oleh Martyniuk</b>, dyrektor, jednoosobowo. Zarząd podjął uchwałę w sprawie umowy EPC 05.11.", "Iryna Tkach podpisuje dokumenty tylko do €50 000, więc nie może podpisać umowy EPC."] },
      { chip: "Dokumenty dla kupującego", ic: "z", q: "Zbierz dokumenty SPV do weryfikacji przez kupującego", mem: 9, steps: ["Czytam dokumenty założycielskie", "Sprawdzam licencje", "Czytam tabelę kapitalizacji"], tool: { k: "spv.documents", t: "Dokumenty SPV", e: [["Statut", "Wersja nr 2 · 30.09.2026", "#step=6"], ["Odpis z rejestru", "Stan na 01.11.2026", "#step=6"], ["Umowa wspólników", "Termobud · Green Invest Fund", "#step=6"]] }, a: ["Zebrałam statut, odpis z rejestru, umowę wspólników, skład właścicieli (70 i 30%) i cztery licencje.", "<b>Brakuje</b> aktualnej wyceny: ostatnią zrobiono przed rundą Series A."] },
      { chip: "Rynek FCR", ic: "c", q: "Czy BESS 2 MW może działać na rynku FCR?", mem: 3, steps: ["Czytam licencje SPV"], tool: { k: "spv.licenses", t: "Licencje", e: [["Prekwalifikacja OSP · FCR", "Aktywna · 2 MW", "#step=6"], ["Prekwalifikacja OSP · aFRR", "W toku · złożono 20.10.2026", "#step=6"]] }, a: ["Tak. Prekwalifikacja u OSP na FCR obowiązuje dla 2 MW, więc symulator BESS uwzględni ten przychód.", "Na rynku aFRR jeszcze nie: wniosek złożono 20.10, decyzji jeszcze nie ma."] }
    ],    "Projekty": [
      { chip: "Stan projektu", ic: "s", q: "Co teraz blokuje PV + BESS 8,5 MW?", mem: 7, steps: ["Czytam kartę projektu", "Sprawdzam zadania"], tool: { k: "task.list", t: "Zaległe zadania", e: [["Umowa EPC z EnerhoMontazh", "Oleh Martyniuk · po terminie 6 dni", "#step=3"], ["Zamówić transformator 7,2 MW", "Roman Boiko · po terminie 6 dni", "#step=3"]], more: "I jeszcze 3 — otwórz wszystkie zadania", href: "#step=3" }, a: ["Projekt jest na etapie <b>Ready to build</b>, ale budowa nie ruszy bez umowy EPC. Odpowiada <b>Oleh Martyniuk</b>.", "Zamówienie transformatora czeka na tę samą umowę, więc to jeden węzeł, a nie dwa."] },
      { chip: "Pieniądze projektu", ic: "z", q: "Czy stacja się zwróci?", mem: 4, steps: ["Czytam model finansowy"], a: ["Według modelu finansowego IRR <b>18,6%</b>, NPV <b>€4,1 mln</b>, CAPEX <b>€8,4 mln</b>. Zwrot w <b>4,6 roku</b>.", "Liczby policzył model, nikt nie wpisywał ich ręcznie."] },
      { chip: "Udostępnij inwestorowi", ic: "c", q: "Udostępnij projekt inwestorowi Green Invest Fund do odczytu", mem: 3, steps: ["Sprawdzam dostępy", "Przygotowuję zaproszenie"], tool: { k: "access.grant", t: "Dostęp", e: [["Green Invest Fund", "Odczyt · PV + BESS 8,5 MW", "#step=8"]] }, a: ["Inwestor zobaczy przegląd, finanse i dokumenty, ale niczego nie zmieni. Potwierdź, a wyślę zaproszenie."] }
    ],    "Leady": [
      { chip: "Pokaż leady", ic: "s", q: "Pokaż wszystkie aktywne leady", mem: 12, steps: ["Szukam leadów", "Czytam etapy lejka"], tool: { k: "entity.list", t: "Lista leadów", e: [["Andrii Melnyk", "Sprzedaż PV · Negocjacje", P.leads], ["Kateryna Rudenko", "Sprzedaż PV · Demo", P.leads], ["Nataliia Melnyk", "Sprzedaż PV · Pierwszy kontakt", P.leads]], more: "I jeszcze 4 — otwórz pełną listę", href: P.leads },
        a: ["<b>Etap „Negocjacje”</b><ul><li><b>Andrii Melnyk</b> (Termobud): oferta z dwoma wariantami do piątku.</li></ul><b>Etap „Demo”</b><ul><li><b>Kateryna Rudenko</b> (Enerhobud Servis): gorący, spotkanie 22.10 o 12:00.</li><li><b>Viktor Savchuk</b> (Dnipro Ahro): czeka na drugi pokaz.</li></ul>", "<b>Uwaga:</b> leady na etapie „Nowy lead” nie są jeszcze zakwalifikowane, więc nie liczę ich jako aktywnych."] },
      { chip: "Podsumowanie leadów", ic: "z", q: "Daj podsumowanie ostatnich leadów", mem: 9, steps: ["Szukam leadów", "Czytam ostatnie rozmowy"], a: ["W tym tygodniu doszły 3 leady, jeden przeszedł na etap „Negocjacje”.<ul><li><b>Andrii Melnyk</b>: oferta do piątku, dyrektor porównuje jeszcze 2 oferty.</li><li><b>Nataliia Melnyk</b>: następny kontakt był wczoraj, po terminie.</li><li><b>Ihor Petrenko</b>: nowe zgłoszenie ze strony.</li></ul>", "<b>Co zrobić:</b> zadzwonić do Nataliia i wysłać ofertę do Termobudu. Jeśli chcesz, przeczytam notatki do dowolnego z tych leadów."] },
      { chip: "Utwórz lead", ic: "c", q: "Utwórz lead na Termobud w lejku Partnerzy", mem: 3, steps: ["Szukam kontaktu", "Tworzę lead"], tool: { k: "entity.create", t: "Utworzono lead", e: [["Termobud: partnerstwo", "Partnerzy · Nowy lead", P.leads]] }, a: ["Gotowe. Kontakt <b>Andrii Melnyk</b> był już w bazie, więc lead powiązano z nim zamiast tworzyć nowy kontakt."] }
    ],
    "Zadania": [
      { chip: "Pokaż zadania", ic: "s", q: "Pokaż moje otwarte zadania", mem: 7, steps: ["Szukam zadań"], tool: { k: "task.list", t: "Lista zadań", e: [["Termobud: oferta z dwoma wariantami", "In Progress · High · do piątku", P.tasks], ["Termobud: wyjazd na obiekt i pomiary dachu", "To Do · Medium · 23.10", P.tasks], ["Alfa Merezhi: zaktualizować specyfikację", "To Do · Low", P.tasks]], more: "I jeszcze 2 — otwórz tablicę", href: P.tasks }, a: ["Masz 5 otwartych zadań, jedno z terminem w tym tygodniu.", "<b>Najpilniejsze:</b> oferta dla Termobudu, bo blokuje spotkanie na obiekcie."] },
      { chip: "Co jest zablokowane", ic: "z", q: "Co jest teraz zablokowane?", mem: 5, steps: ["Szukam zadań", "Sprawdzam powiązania"], tool: { k: "task.relations", t: "Powiązania zadań", e: [["Uzgodnić cenę sprzętu", "Blocked · Critical · po terminie 3 dni", P.tasks]] }, a: ["<b>Łańcuch:</b> bez ceny sprzętu nie będzie oferty, a bez oferty nie będzie spotkania na obiekcie.", "Jeśli chcesz, napiszę do Oleha na czacie zadania."] },
      { chip: "Utwórz zadanie", ic: "c", q: "Daj Irynie zadanie na ofertę dla Termobudu do piątku", mem: 4, steps: ["Szukam osoby", "Tworzę zadanie"], tool: { k: "task.create", t: "Utworzono zadanie", e: [["Termobud: oferta z dwoma wariantami", "Iryna Tkach · do piątku", P.tasks]] }, a: ["Zadanie utworzone i powiązane z leadem Termobud. Iryna dostanie powiadomienie."] }
    ],
    "Kontakty": [
      { chip: "Znajdź kontakt", ic: "s", q: "Znajdź Andrii Melnyk", mem: 8, steps: ["Szukam kontaktów"], tool: { k: "contact.list", t: "Kontakty", e: [["Andrii Melnyk", "Termobud · zastępca dyrektora", P.cont]] }, a: ["<b>Andrii Melnyk</b> jest w dwóch lejkach:<ul><li><b>Sprzedaż PV:</b> etap „Negocjacje”.</li><li><b>Partnerzy:</b> etap „Pierwszy kontakt”.</li></ul>"] },
      { chip: "O czym rozmawialiście", ic: "z", q: "O czym rozmawialiśmy z Andrii ostatnio?", mem: 11, steps: ["Szukam kontaktu", "Czytam zapisy spotkań"], tool: { k: "meeting.list", t: "Spotkania", e: [["Termobud - Aita", "20 paź. · zapis gotowy · 42 min", P.cont]] }, a: ["20 października ustaliliśmy:<ul><li>Oferta z dwoma wariantami do piątku.</li><li>Spotkanie na obiekcie w czwartek o 10:00.</li></ul>", "Dyrektor porównuje jeszcze dwie oferty, więc ważny jest okres zwrotu."] },
      { chip: "Utwórz kontakt", ic: "c", q: "Dodaj Pavlo Hnatiuk z Termobudu, inżynier", mem: 2, steps: ["Szukam organizacji", "Tworzę kontakt"], tool: { k: "contact.create", t: "Utworzono kontakt", e: [["Pavlo Hnatiuk", "Termobud · inżynier", P.cont]] }, a: ["Kontakt utworzony i powiązany z organizacją <b>Termobud</b>."] }
    ],
    "Organizacje": [
      { chip: "Znajdź organizację", ic: "s", q: "Pokaż wszystkich klientów", mem: 6, steps: ["Szukam organizacji"], tool: { k: "org.list", t: "Organizacje", e: [["Termobud", "Budownictwo · 3 kontakty", P.org], ["Enerhobud Servis", "Energetyka · 1 kontakt", P.org], ["Ahro Zakhid", "Rolnictwo · 1 kontakt", P.org]] }, a: ["Masz 3 klientów. Najwięcej kontaktów ma <b>Termobud</b>."] },
      { chip: "Kto decyduje", ic: "z", q: "Kto decyduje w Termobudzie?", mem: 7, steps: ["Czytam kartę organizacji"], tool: { k: "contact.list", t: "Kontakty organizacji", e: [["Olena Sydorenko", "Dyrektorka · podejmuje decyzje", P.cont], ["Andrii Melnyk", "Zastępca dyrektora · podejmuje decyzje", P.cont]] }, a: ["Decyzje podejmują dwie osoby. Technicznie projekt prowadzi <b>Andrii Melnyk</b>."] },
      { chip: "Utwórz organizację", ic: "c", q: "Dodaj organizację Lohist Plius, klient", mem: 1, steps: ["Sprawdzam duplikaty", "Tworzę organizację"], tool: { k: "org.create", t: "Utworzono organizację", e: [["Lohist Plius", "Rola: klient", P.org]] }, a: ["Gotowe. Takiej organizacji w bazie jeszcze nie było."] }
    ],
    "Czat": [
      { chip: "Co nowego", ic: "s", q: "Co mnie ominęło dziś na czatach?", mem: 6, steps: ["Czytam czaty", "Szukam wzmianek"], tool: { k: "chat.rooms", t: "Czaty", e: [["Task · Oferta dla Termobudu", "3 nowe wiadomości", P.ch], ["Oleh Martyniuk", "Agent Oleha czeka na odpowiedź", P.ch]] }, a: ["Dwa czaty czekają na Ciebie. <b>Agent Oleha</b> prosi o dwa zdania o spotkaniu z Termobudem."] },
      { chip: "Decyzje", ic: "z", q: "Jakie decyzje czekają na potwierdzenie?", mem: 4, steps: ["Czytam ustalenia ze spotkań"], tool: { k: "decision.list", t: "Ustalenia", e: [["Podział 15/85 do 400 tys. euro", "Ze spotkania · czeka na potwierdzenie", P.ch]] }, a: ["Jedno ustalenie czeka na potwierdzenie. Możesz to zrobić od razu na czacie."] },
      { chip: "Napisz do zespołu", ic: "c", q: "Napisz do Iryny, że oferta jest potrzebna do piątku", mem: 2, steps: ["Szukam osoby", "Przygotowuję wiadomość"], tool: { k: "chat.send", t: "Wersja robocza", e: [["Iryna Tkach", "Oferta dla Termobudu potrzebna do piątku", P.ch]] }, a: ["Wersja robocza gotowa. Wysłać?"] }
    ],
    "Szkice": [
      { chip: "Moje dokumenty", ic: "s", q: "Które dokumenty czekają na mój przegląd?", mem: 3, steps: ["Szukam dokumentów"], tool: { k: "draft.list", t: "Dokumenty", e: [["Oferta Termobud: tekst i tabela", "2 komentarze · 1 sugestia", P.dr]] }, a: ["Jeden dokument czeka na Ciebie."] },
      { chip: "Otwarte poprawki", ic: "z", q: "Co jeszcze nie jest zamknięte w ofercie dla Termobudu?", mem: 5, steps: ["Czytam dokument"], tool: { k: "draft.get", t: "Dokument", e: [["Oferta Termobud: tekst i tabela", "Komentarz Oleha · terminy montażu", P.dr]] }, a: ["Zostało jedno pytanie o terminy montażu."] },
      { chip: "Zaproponuj poprawkę", ic: "c", q: "Skróć drugi akapit", mem: 2, steps: ["Czytam dokument", "Przygotowuję sugestię"], tool: { k: "draft.suggest", t: "Sugestia", e: [["Oferta Termobud: tekst i tabela", "Czeka na Twoją zgodę", P.dr]] }, a: ["Przygotowałem sugestię, tekstu nie zmieniałem."] }
    ],
    "Moje pytania": [
      { chip: "Kto nie odpowiedział", ic: "s", q: "Kto jeszcze nie odpowiedział na moje pytania?", mem: 3, steps: ["Szukam pytań"], tool: { k: "ask.list", t: "Pytania", e: [["Czy kosztorys dla Termobudu jest gotowy?", "Iryna Tkach · do 7 lis.", P.as], ["Czy falowniki są na magazynie?", "Roman Boiko · do 8 lis.", P.as]] }, a: ["Czekamy na dwie odpowiedzi."] },
      { chip: "Pytają mnie", ic: "z", q: "O co mnie pytają?", mem: 2, steps: ["Szukam pytań"], tool: { k: "ask.list", t: "Pytania", e: [["Jedziemy na obiekt w czwartek?", "Agent Oleha · dziś do 20:15", P.as]] }, a: ["Jedno pytanie z terminem na dziś."] },
      { chip: "Zapytaj kolegę", ic: "c", q: "Zapytaj Irynę, czy kosztorys jest gotowy, czekaj dzień", mem: 2, steps: ["Szukam osoby", "Tworzę pytanie"], tool: { k: "ask.create", t: "Pytanie wysłane", e: [["Czy kosztorys jest gotowy?", "Iryna Tkach · 1 dzień", P.as]] }, a: ["Pytanie wysłane. Odpowiedź zobaczysz w zadaniu."] }
    ],
    "Notatki": [
      { chip: "Znajdź notatkę", ic: "s", q: "Gdzie jest notatka o dachu magazynu?", mem: 2, steps: ["Szukam notatek"], tool: { k: "note.list", t: "Notatki", e: [["Przegląd dachu magazynu", "Dziś, 10:46", P.nt]] }, a: ["Znalazłem notatkę z checklistą i zdjęciami."] },
      { chip: "Co jest w notatkach", ic: "z", q: "Co planowałem sprawdzić na obiekcie?", mem: 3, steps: ["Czytam notatkę"], a: ["Na checkliście są dwa otwarte punkty:<ul><li>Stan pokrycia dachu i hydroizolacji.</li><li>Miejsce na falowniki.</li></ul>"] },
      { chip: "Zapisz notatkę", ic: "c", q: "Zapisz notatkę: wyjazd w czwartek o 10:00", mem: 1, steps: ["Tworzę notatkę"], tool: { k: "note.create", t: "Utworzono notatkę", e: [["Wyjazd w czwartek", "Dodano do kolejki", P.nt]] }, a: ["Gotowe. Notatka jest już w kolejce."] }
    ],
    "Notatnik spotkań": [
      { chip: "Co ustalono", ic: "s", q: "Co ustalono na wczorajszym spotkaniu?", mem: 9, steps: ["Szukam spotkania", "Czytam podsumowanie"], tool: { k: "meeting.get", t: "Spotkanie", e: [["Termobud - Aita", "42 min 18 s · 4 decyzje · 5 zadań", P.mt]] }, a: ["Ustalono:<ul><li>Oferta w dwóch wariantach.</li><li>Wyjazd na obiekt w czwartek o 10:00.</li></ul>"] },
      { chip: "Moje zadania", ic: "z", q: "Co mam zrobić po spotkaniu?", mem: 5, steps: ["Czytam zadania ze spotkania"], tool: { k: "meeting.get", t: "Zadania ze spotkania", e: [["Uzgodnić datę wyjazdu na obiekt", "Kateryna Rudenko", P.mt]] }, a: ["Jeden punkt jest Twój. Utworzyć zadanie?"] },
      { chip: "Nagraj spotkanie", ic: "c", q: "Nagraj to spotkanie", mem: 1, steps: ["Sprawdzam link", "Uruchamiam nagrywanie"], tool: { k: "meeting.start", t: "Nagranie", e: [["Termobud - Aita", "Notatnik dołączy za minutę", P.mt]] }, a: ["Notatnik dołączy mniej więcej za minutę jako Aita Notetaker."] }
    ],
    "Dziennik decyzji": [
      { chip: "Znajdź decyzję", ic: "s", q: "Co postanowiono w sprawie zaliczki?", mem: 7, steps: ["Szukam w dzienniku"], tool: { k: "decision.list", t: "Decyzje", e: [["Montaż rusza dopiero po zaliczce 50%", "Obowiązuje · dowód A · przegląd 29 sty.", P.dc]] }, a: ["Decyzja obowiązuje. Powód: bez zaliczki wykonawca nie rezerwuje ekipy."] },
      { chip: "Co czeka", ic: "z", q: "Co czeka na potwierdzenie?", mem: 4, steps: ["Czytam kolejkę"], tool: { k: "decision.list", t: "Kolejka", e: [["Reklamę kierujemy do firm inżynieryjnych", "Oczekuje · dowód C", P.dc], ["Wariant z magazynem energii pokazujemy jako drugi", "Oczekuje · dowód B", P.dc]] }, a: ["Dwa wpisy czekają na Ciebie."] },
      { chip: "Zapisz decyzję", ic: "c", q: "Zapisz decyzję: zaliczka 50%, bo ekipę rezerwujemy z wyprzedzeniem", mem: 3, steps: ["Sprawdzam duplikaty", "Tworzę wpis"], tool: { k: "decision.create", t: "Utworzono wpis", e: [["Montaż rusza dopiero po zaliczce 50%", "Przegląd za 90 dni", P.dc]] }, a: ["Decyzja zapisana z powodem. Przegląd nastąpi za 90 dni."] }
    ],
    "Cele": [
      { chip: "Pokaż cele", ic: "s", q: "Pokaż nasze cele", mem: 6, steps: ["Czytam cele"], tool: { k: "goal.list", t: "Cele", e: [["Zamknąć 20 projektów PV", "Pewność 70% · zgodnie z planem", P.gl], ["Skrócić montaż do pięciu tygodni", "Pewność 30% · zagrożony", P.gl]] }, a: ["Aktywnych celów: 7. Zagrożony jest jeden: terminy montażu."] },
      { chip: "Co jest zagrożone", ic: "z", q: "Które cele są zagrożone?", mem: 4, steps: ["Czytam kluczowe rezultaty"], a: ["<b>Skrócić montaż do pięciu tygodni:</b> teraz sześć i pół, a do końca terminu został miesiąc."] },
      { chip: "Zaktualizuj rezultat", ic: "c", q: "Zaktualizuj rezultat: uruchomiono 14 stacji", mem: 2, steps: ["Szukam rezultatu", "Wpisuję wartość"], tool: { k: "kr.checkin", t: "Aktualizacja", e: [["Uruchomione stacje", "13 → 14 z 20", P.gl]] }, a: ["Rezultat zaktualizowany."] }
    ],
    "Baza wiedzy": [
      { chip: "Znajdź procedurę", ic: "s", q: "Co zabrać na wyjazd na obiekt?", mem: 5, steps: ["Szukam w bazie wiedzy"], tool: { k: "kb.search", t: "Strony", e: [["Wyjazd na obiekt", "Montaż · Procedury", P.kb]] }, a: ["Taśmę mierniczą, dalmierz i drona. Przed wyjazdem uprzedź ochronę."] },
      { chip: "Co jest nieaktualne", ic: "z", q: "Które strony trzeba sprawdzić?", mem: 3, steps: ["Sprawdzam daty przeglądu"], tool: { k: "kb.search", t: "Strony", e: [["Bezpieczeństwo na dachu", "Termin przeglądu minął 3 dni temu", P.kb]] }, a: ["Jedna strona czeka na sprawdzenie. Przypomnienie już ma Roman."] },
      { chip: "Napisz stronę", ic: "c", q: "Przygotuj checklistę odbioru stacji", mem: 4, steps: ["Czytam procedury", "Tworzę stronę"], tool: { k: "kb.create", t: "Utworzono stronę", e: [["Checklista odbioru stacji", "Montaż · Checklisty", P.kb]] }, a: ["Strona utworzona. Sprawdź ją przed publikacją dla zespołu."] }
    ],
    "Panel główny": [
      { chip: "Przegląd dnia", ic: "s", q: "Co jest dziś pilne?", mem: 8, steps: ["Czytam zadania"], tool: { k: "task.list", t: "Zadania", e: [["Termobud: oferta z dwoma wariantami", "Po terminie: 2 d", P.tasks]] }, a: ["Dwa krytyczne zadania. Zacznij od oferty, bo bez niej nie będzie spotkania."] },
      { chip: "Stan portfela", ic: "z", q: "Jak wygląda portfel?", mem: 3, steps: ["Czytam projekty"], a: ["17 projektów, 5 w eksploatacji, CAPEX portfela $4.1M."] },
      { chip: "Do kogo zadzwonić", ic: "c", q: "Do kogo zadzwonić dzisiaj?", mem: 5, steps: ["Czytam leady"], tool: { k: "entity.list", t: "Leady", e: [["Nataliia Melnyk", "Następny kontakt był wczoraj", P.leads]] }, a: ["Zacznij od Nataliia: kontakt jest po terminie."] }
    ],
    "Kalendarz": [
      { chip: "Co dzisiaj", ic: "s", q: "Jakie mam dziś spotkania?", mem: 4, steps: ["Czytam kalendarz"], tool: { k: "event.list", t: "Wydarzenia", e: [["Termobud - Aita", "15:00 · online · notetaker dołączy", P.cl]] }, a: ["Dziś jedno spotkanie z klientem o 15:00."] },
      { chip: "Wolny czas", ic: "z", q: "Znajdź godzinę dla mnie, Oleha i Iryny", mem: 2, steps: ["Sprawdzam kalendarze"], a: ["Wspólny wolny czas: wtorek, 14:00–15:00."] },
      { chip: "Umów spotkanie", ic: "c", q: "Umów spotkanie z Termobudem w czwartek o 10:00", mem: 3, steps: ["Szukam leada", "Tworzę wydarzenie"], tool: { k: "event.create", t: "Utworzono wydarzenie", e: [["Wyjazd na obiekt", "Czwartek, 10:00 · powiązane z leadem", P.cl]] }, a: ["Wydarzenie utworzone i powiązane z leadem Termobud."] }
    ],
    "Kolejka": [
      { chip: "Co jest w kolejce", ic: "s", q: "Co mam w kolejce?", mem: 5, steps: ["Czytam kolejkę"], tool: { k: "inbox.queue", t: "Kolejka", e: [["Termobud: prośba o drugi wariant oferty", "Wymaga decyzji", P.ib], ["Bank Skhid: dokumenty", "Wymaga decyzji", P.ib]] }, a: ["Dwa maile czekają na Twoją decyzję, jeden agent już obsłużył."] },
      { chip: "Podsumowanie nocy", ic: "z", q: "Co się stało w nocy?", mem: 3, steps: ["Czytam dziennik agenta"], a: ["Agent odsiał 23 maile, wykonał 11 działań, a 2 czekają na Ciebie."] },
      { chip: "Zrób zadanie", ic: "c", q: "Zrób z tego maila zadanie dla Iryny", mem: 2, steps: ["Czytam maila", "Tworzę zadanie"], tool: { k: "task.create", t: "Utworzono zadanie", e: [["Termobud: drugi wariant oferty", "Iryna Tkach · do piątku", P.tasks]] }, a: ["Zadanie utworzone. Możesz je cofnąć w ciągu 24 godzin."] }
    ],
    "Poczta": [
      { chip: "Znajdź maila", ic: "s", q: "Gdzie jest mail z banku?", mem: 3, steps: ["Szukam w poczcie"], tool: { k: "inbox.search", t: "Maile", e: [["Bank Skhid: dokumenty do kredytu", "Dziś, 8:40", P.ml]] }, a: ["Mail z dziś o 8:40, potrzebne są sprawozdania za trzy kwartały."] },
      { chip: "Podsumuj", ic: "z", q: "Podsumuj korespondencję z Termobudem", mem: 6, steps: ["Czytam korespondencję"], a: ["Klient prosi o drugi wariant oferty do piątku i przesłał schemat dachu."] },
      { chip: "Przygotuj odpowiedź", ic: "c", q: "Przygotuj odpowiedź dla Andrii", mem: 4, steps: ["Czytam korespondencję", "Przygotowuję wersję roboczą"], tool: { k: "inbox.draft", t: "Wersja robocza", e: [["Odpowiedź dla Andrii Melnyk", "Czeka na wysłanie", P.ml]] }, a: ["Wersja robocza gotowa. Wysyłasz Ty."] }
    ],
    "Magazyn": [
      { chip: "Znajdź plik", ic: "s", q: "Gdzie jest umowa z Termobudem?", mem: 5, steps: ["Szukam w magazynie"], tool: { k: "file.search", t: "Pliki", e: [["Umowa_Termobud_v3.pdf", "02_Umowy / Termobud", "#doc=Umowa_Termobud_v3.pdf"]] }, a: ["Plik jest w folderze <b>02_Umowy / Termobud</b>. To trzecia wersja z 21 października."] },
      { chip: "Co jest pod linkiem", ic: "z", q: "Które foldery są udostępnione przez link?", mem: 3, steps: ["Czytam dostępy"], tool: { k: "folder.list", t: "Foldery", e: [["02_Umowy", "Każdy z linkiem · ważny 30 dni", "#step=5"]] }, a: ["Przez link udostępniony jest jeden folder. Otwarto go 4 razy."] },
      { chip: "Przygotuj prezentację", ic: "c", q: "Przygotuj prezentację o nas dla Termobudu", mem: 14, steps: ["Szukam danych firmy", "Czytam pliki", "Składam prezentację"], tool: { k: "file.create", t: "Utworzono plik", e: [["Prezentacja_Termobud.pdf", "04_Handel · 8 slajdów", "#doc=Prezentacja_Termobud.pdf"], ["O_firmie.pdf", "źródło · 01_Firma", "#doc=O_firmie.pdf"], ["Case_studies_PV.pdf", "źródło · 01_Firma", "#doc=Case_studies_PV.pdf"]] }, a: ["Dane wzięto z plików <b>O_firmie.pdf</b>, <b>Case_studies_PV.pdf</b> i <b>Brandbook.pdf</b>.", "Sprawdź slajd z cenami: warto go uzgodnić przed wysłaniem."] }
    ],
    "Konkurenci": [
      { chip: "Pokaż konkurentów", ic: "s", q: "Kto jest największym zagrożeniem?", mem: 4, steps: ["Czytam rejestr konkurentów"], tool: { k: "competitor.list", t: "Konkurenci", e: [["EnergyDesk", "Zagrożenie: wysokie · €12M", P.cp], ["Volta Suite", "Zagrożenie: wysokie · €28M", P.cp]] }, a: ["Wysokie zagrożenie stwarza dwóch konkurentów. <b>EnergyDesk</b> częściej pojawia się w Twoich leadach."] },
      { chip: "Porównaj z nami", ic: "z", q: "W czym EnergyDesk jest od nas silniejszy?", mem: 6, steps: ["Czytam tabelę porównania"], a: ["EnergyDesk wygrywa w dwóch wierszach:<ul><li><b>Magazyn i części zamienne.</b></li><li><b>Aplikacja dla monterów.</b></li></ul>", "<b>Twoje mocne strony:</b> model finansowy i transkrypcja rozmów."] },
      { chip: "Dodaj konkurenta", ic: "c", q: "Dodaj konkurenta energydesk.example", mem: 1, steps: ["Czytam stronę", "Tworzę kartę"], tool: { k: "competitor.create", t: "Utworzono kartę", e: [["EnergyDesk", "Zewnętrzny · dane ze strony", P.cp]] }, a: ["Karta utworzona. Sprawdź dane: AI może się mylić."] }
    ],
    "Sieć": [
      { chip: "Znajdź osobę", ic: "s", q: "Kogo mamy od montażu?", mem: 5, steps: ["Szukam w sieci"], tool: { k: "network.search", t: "Ludzie", e: [["Dmytro Tkach", "Tekhnopark · Projekt, Umowa", P.net], ["Roman Boiko", "Soniachni Systemy · Zespół", P.net]] }, a: ["<b>Dmytro Tkach</b> pracował już z Tobą przy projekcie, więc warto zacząć od niego."] },
      { chip: "Skąd znam", ic: "z", q: "Skąd znam Andrii Melnyk?", mem: 8, steps: ["Szukam w sieci"], tool: { k: "network.search", t: "Ludzie", e: [["Andrii Melnyk", "Termobud · CRM", P.cont]] }, a: ["Andrii jest w Twoim CRM, to kontakt z Termobudu. Nie jest jeszcze zarejestrowany na platformie, więc nie można napisać do niego na czacie."] },
      { chip: "Znajdź partnera", ic: "c", q: "Znajdź firmę montażową we Lwowie", mem: 2, steps: ["Szukam wśród ludzi platformy"], tool: { k: "profile.search", t: "Ludzie", e: [["Tetiana Shevchuk", "Montazh Sontse · dyrektorka ds. montażu", P.net]] }, a: ["We Lwowie znaleziono jedną osobę. Napisać do niej wiadomość?"] }
    ],
    "Firmy": [
      { chip: "Znajdź firmę", ic: "s", q: "Znajdź firmę montażową w Ukrainie", mem: 3, steps: ["Szukam firm"], tool: { k: "company.search", t: "Firmy", e: [["Montazh Sontse", "UA · Lwów · zweryfikowana · 14 projektów", P.co], ["Svitlo Pro", "UA · Winnica · zweryfikowana", P.co]] }, a: ["Pasują dwie firmy. <b>Montazh Sontse</b> była aktywna 2 dni temu."] },
      { chip: "Kto jest aktywny", ic: "z", q: "Kto jest aktywny w tym tygodniu?", mem: 2, steps: ["Szukam firm"], tool: { k: "company.search", t: "Firmy", e: [["Montazh Sontse", "2 dni temu", P.co], ["HrinBud", "3 dni temu", P.co]] }, a: ["W tym tygodniu aktywne są dwie firmy."] },
      { chip: "Zaproś na spotkanie", ic: "c", q: "Jak zaprosić Montazh Sontse na spotkanie?", mem: 1, steps: ["Czytam profil firmy"], tool: { k: "company.get", t: "Firma", e: [["Montazh Sontse", "Zaproś na spotkanie", P.co]] }, a: ["W profilu kliknij „Zaproś na spotkanie”. Spotkanie odbędzie się po potwierdzeniu przez firmę."] }
    ]
  };
  var desc = (typeof D !== "undefined" && D[mod]) || "";
  var general = [
    { chip: "Co potrafi moduł", ic: "s", q: "Co potrafi ten moduł?", mem: 3, steps: ["Czytam bazę wiedzy"], a: [desc ? "<b>„" + mod + "”:</b> " + desc + "." : "Opowiem o module na bezpłatnym demo."] },
    { chip: "Czy jest w pakiecie", ic: "z", q: "Czy jest w pakiecie?", mem: 1, steps: ["Czytam bazę wiedzy"], a: ["Tak. Wszystkie 48 modułów jest w każdym pakiecie."] },
    { chip: "Pokaż u mnie", ic: "c", q: "Jak zobaczyć to w mojej firmie?", mem: 1, steps: ["Czytam bazę wiedzy"], a: ["Umów się na bezpłatne demo, a pokażemy, jak moduł będzie działał u Ciebie.<br><a href=\"../demo\">Bezpłatne demo</a>"] }
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
  btn.id = "agB"; btn.type = "button"; btn.setAttribute("aria-label", "Aita Asystent"); btn.innerHTML = star;
  var box = document.createElement("div");
  box.id = "agP"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Aita Asystent");
  box.innerHTML = '<div class="hd"><span class="ic">' + wand + '</span><span class="tt"><b>Nowa rozmowa ⌄</b><small>Aita · demo na stronie</small></span><button class="hb nw" type="button" aria-label="Nowa rozmowa">' + newc + '</button><span class="hb" aria-hidden="true">⋯</span><button class="hb mn" type="button" aria-label="Zwiń">–</button><button class="hb x" type="button" aria-label="Zamknij">×</button></div>'
    + '<div class="bd" aria-live="polite"></div><div class="ch"></div>'
    + '<form><button class="tool" type="button" aria-label="Załącz plik">' + clip + '</button><button class="tool" type="button" aria-label="Wybierz obszar">' + zone + '</button><input type="text" placeholder="Wpisz wiadomość..." aria-label="Wiadomość"><button class="tool" type="button" aria-label="Podyktuj do pola">' + mic + '</button><button class="go" type="submit" aria-label="Wyślij">↑</button></form>'
    + '<div class="fb"><span>Claude Haiku 5.5 ⌄</span><span>Pytaj przed zmianą</span><span>Ctrl+J</span></div>';
  document.body.appendChild(btn); document.body.appendChild(box);

  var bd = box.querySelector(".bd"), ch = box.querySelector(".ch"), inp = box.querySelector("input"), title = box.querySelector(".tt b"), busy = false;
  var hello = '<div class="hi"><i>' + star + '</i><b>W czym mogę pomóc?</b>Zapytaj mnie o cokolwiek w Twojej przestrzeni roboczej...</div>';
  var reset = function () { bd.innerHTML = hello; title.textContent = "Nowa rozmowa ⌄"; ch.style.display = ""; busy = false; };
  var esc = function (x) { var d = document.createElement("div"); d.textContent = x; return d.innerHTML; };
  var down = function () { bd.scrollTop = bd.scrollHeight; };
  var fast = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms, f) { setTimeout(f, fast ? 0 : ms); };
  var stamp = function () { var d = new Date(), p = function (n) { return (n < 10 ? "0" : "") + n; }; return { full: p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()), t: p(d.getHours()) + ":" + p(d.getMinutes()) }; };
  var ask = function (q, it) {
    if (busy) return; busy = true;
    bd.innerHTML = ""; ch.style.display = "none"; title.textContent = q;
    var me = document.createElement("div"); me.className = "me"; me.textContent = q; bd.appendChild(me);
    if (it.mem) { var m = document.createElement("div"); m.className = "mem"; m.textContent = "Użyto wspomnień: " + it.mem; bd.appendChild(m); }
    var rw = document.createElement("div"); rw.className = "rw"; rw.innerHTML = '<span class="bt">' + bot + '</span><div class="col"></div>'; bd.appendChild(rw);
    var col = rw.querySelector(".col");
    var think = document.createElement("div"); think.className = "dots"; think.innerHTML = "<span></span><span></span><span></span>"; col.appendChild(think);
    var queue = [];
    (it.steps || []).forEach(function (s) { queue.push(function () { var e = document.createElement("div"); e.className = "st"; e.innerHTML = chk + esc(s) + "<em>›</em>"; col.insertBefore(e, think); }); });
    if (it.tool) queue.push(function () {
      var w = stamp(), t = it.tool, e = document.createElement("div"); e.className = "tl";
      e.innerHTML = '<div class="th"><code>' + t.k + '</code>' + esc(t.t) + '</div><div class="tb">' + t.e.map(function (x) { return '<a class="en" href="' + x[2] + '"><span><b>' + esc(x[0]) + '</b><small>' + esc(x[1]) + '</small></span>' + ext + '</a>'; }).join("") + (t.more ? '<a class="mo" href="' + t.href + '">' + esc(t.more) + '</a>' : "") + '<div class="dt">dane z ' + w.full + '</div></div>';
      col.insertBefore(e, think);
    });
    (it.a || []).forEach(function (html) { queue.push(function () { var e = document.createElement("div"); e.className = "an"; e.innerHTML = html; col.insertBefore(e, think); }); });
    var i = 0;
    (function next() {
      if (i < queue.length) { queue[i++](); down(); wait(i === 1 ? 600 : 520, next); return; }
      think.remove();
      var f = document.createElement("div"); f.className = "ft2"; f.innerHTML = cpy + "Kopiuj &nbsp; " + stamp().t; col.appendChild(f); down(); busy = false; ch.style.display = "";
    })();
  };
  items.forEach(function (it) {
    var b = document.createElement("button"); b.type = "button"; b.innerHTML = (chipI[it.ic] || star) + esc(it.chip);
    b.onclick = function () { ask(it.q, it); }; ch.appendChild(b);
  });
  var note = { mem: 0, steps: [], a: ["Na stronie są pokazane tylko gotowe przykłady. Na platformie możesz załączyć plik, podyktować zapytanie i wybrać obszar ekranu.<br><a href=\"../demo\">Bezpłatne demo</a>"] };
  box.querySelectorAll(".tool").forEach(function (b) { b.onclick = function () { ask(b.getAttribute("aria-label"), note); }; });
  box.querySelector("form").onsubmit = function (e) {
    e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = "";
    ask(v, { mem: 0, steps: [], a: ["Na stronie są pokazane tylko gotowe przykłady. Na platformie agent odpowiada na podstawie danych Twojej firmy.<br><a href=\"../demo\">Bezpłatne demo</a>"] });
  };
  var open = function (on) { box.classList.toggle("on", on); btn.style.display = on ? "none" : ""; (on ? inp : btn).focus(); };
  btn.onclick = function () { open(true); };
  box.querySelector(".x").onclick = function () { open(false); };
  box.querySelector(".mn").onclick = function () { open(false); };
  box.querySelector(".nw").onclick = reset;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("on")) open(false); if (e.ctrlKey && (e.key === "j" || e.key === "J")) { e.preventDefault(); open(!box.classList.contains("on")); } });
  reset();
})();
