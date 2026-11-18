// Тексти сторінок модулів за шаблоном (AITA_Site/Модулі_шаблон_сторінки_модуля.md).
// Модуль без запису тут показується старим шаблоном. video: шлях до ролика; якщо порожньо, показуємо img.
const MODC = {
  "Leady": {
    h1: "Każda rozmowa uzupełnia kartę klienta",
    sub: "Zgłoszenia ze strony, poczty i telefonu automatycznie trafiają do lejka sprzedaży, a karta klienta uzupełnia się po każdym e-mailu, spotkaniu i rozmowie.",
    hero: { img: "/modules-assets/leads-hero.jpg", video: "" },
    diff: [
      ["Menedżer po rozmowie ręcznie zapisuje ustalenia", "Aita transkrybuje rozmowę i zapisuje podsumowanie w karcie klienta", "Ustalenia zostają zapisane, nawet jeśli menedżer nie zdążył ich zanotować"],
      ["Każdy menedżer prowadzi notatki po swojemu", "Dla każdego lejka ustawiasz instrukcję dla AI, a podsumowania rozmów powstają według Twojej struktury", "Potrzeby, budżet i kolejne kroki są opisane jednakowo w całym zespole"],
      ["Wygranego klienta wprowadza się do projektów od nowa", "Projekt tworzy się prosto z karty leada", "Pracownicy, którzy będą realizować zamówienie, widzą całą historię klienta"]
    ],
    tasks: [
      { tab: "Zgłoszenie", h: "Zgłoszenie trafia do lejka bez ręcznego wprowadzania", p: "Platforma pokazuje, skąd przyszedł klient: ze strony, poczty, Telegrama czy rozmowy telefonicznej. Inne źródła, na przykład reklamy, można podłączyć osobno. Każdą linię telefoniczną można skierować do osobnego lejka, więc zgłoszenie od razu trafia do właściwego zespołu.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Rozmowa", h: "Rozmowa staje się wpisem w karcie", p: "Rozmowy przychodzące i wychodzące są transkrybowane automatycznie, a podsumowanie aktualizuje się po każdej rozmowie. Opis wprowadzony przez człowieka zostaje bez zmian. Rozmowy bez treści, takie jak automatyczna sekretarka czy pomyłka, nie zmieniają karty.", img: "/modules-assets/leads-call.jpg", video: "" },
      { tab: "Instrukcja dla AI", h: "Ty decydujesz, co zapisywać po rozmowie", p: "Opisz lejek zwykłymi słowami, a platforma ułoży instrukcję dla AI. Albo napisz własną instrukcję z własnym formatem raportu. Przed uruchomieniem możesz ją sprawdzić przyciskiem „Przetestuj prompt”.", img: "/modules-assets/leads-prompt.jpg", video: "" },
      { tab: "Umowa", h: "Widać, co dalej robić z każdym klientem", p: "Etap, kwota, ostatni i następny kontakt widać na karcie. Filtr „Przeterminowane” pokazuje klientów, z którymi nie skontaktowano się na czas.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Historia", h: "Cała praca z klientem na jednej karcie", p: "Do karty przypisują się e-maile i spotkania, a zakładki „Czat”, „Korespondencja”, „Rozmowy” i „Historia” przechowują wszystko, co działo się z klientem. Gdy zmienia się menedżer, współpracownik kontynuuje od tego samego miejsca.", img: "/modules-assets/leads-history.jpg", video: "", link: null },
      { tab: "Projekt", h: "Wygrany lead staje się projektem", p: "Na karcie klikasz „Utwórz projekt”, a projekt pamięta, z którego leada się zaczął.", img: "/modules-assets/blog-cover-project_stages.jpg", video: "", link: null }
    ],
    ai: [
      ["Podsumowanie rozmowy", "AI zapisuje treść rozmowy według Twojej instrukcji."],
      ["Kolejne kroki", "Agent AI po rozmowie proponuje, co zrobić dalej."],
      ["Sekretarz AI", "AI czyta nowe e-maile i proponuje utworzenie leada, kontaktu lub zadania."]
    ],
    aiLimit: "Opisu, który napisał menedżer, AI nie zmienia. Podsumowanie rozmowy zapisuje się w osobnym polu.",
    more: ["Kilka lejków", "Etykiety i filtry", "Przyczyny utraty", "Import z CSV i Excel", "Eksport do CSV i XLSX", "Formularze na stronę"],
    access: ["Lejki i leady widzą członkowie Twojej firmy.", "Lejek można udostępnić innej firmie.", "Dostęp do pojedynczego leada ustawia się przez „Zarządzanie dostępem”."],
    start: ["Wybierz gotowe ustawienia lub utwórz własny lejek.", "Zaimportuj klientów z CSV lub Excela, do 5 000 wierszy naraz.", "Podłącz pocztę i telefonię."],
    industry: "Na karcie leada są pola mocy i pojemności, przechodzą one do projektu stacji.",
    faq: [
      ["Czym jest lead i po co firmie ten moduł?", "Lead to potencjalny klient. Moduł prowadzi go od pierwszego kontaktu do wygranej transakcji, żeby żadne zgłoszenie nie zginęło."],
      ["Czy można samemu określić, co zapisywać po rozmowie?", "Tak. Dla każdego lejka ustawia się osobną instrukcję dla AI, a język opisu wybiera firma."],
      ["Jaką telefonię można podłączyć?", "Dowolną telefonię z otwartym API. Teraz działa Unitalk: przekazuje nagranie rozmowy, a transkrypcję i podsumowanie robi Aita."],
      ["Czy transkrypcja rozmów jest w pakiecie?", "Tak, potrzebny jest tylko numer w telefonii. Transkrypcja zużywa niewiele kredytów AI z Twojego pakietu."],
      ["Czy można przenieść klientów z innego CRM?", "Tak, z pliku CSV lub Excel. Albo dane przeniesie nasz zespół."],
      ["Czy za moduł trzeba dopłacać?", "Nie. „Leady” są w każdym pakiecie."]
    ],
    final: "Pokażemy, jak rozmowy będą uzupełniać karty klientów w Twojej firmie"
  }
};
