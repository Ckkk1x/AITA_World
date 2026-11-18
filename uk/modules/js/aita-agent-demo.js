// AI-агент у правому нижньому куті сторінок модулів: кодова копія вікна з платформи.
// Запитання й відповіді готові, із сервером нічого не обмінюється. Демо-дані вигадані.
(function () {
  var mod = window.AITA_M || "";
  var P = { pg: "plugins", gp: "user-groups", pr: "products", od: "orders", sl: "contractor", mk: "work-market", fn: "finance", ct: "contracts", pl: "planning", st2: "weekly-summary", sb: "business-plans", sr: "progress-review", sv: "vision", so: "overview", ml: "mail", ib: "queue", cl: "calendar", db: "dashboard", kb: "knowledge-base", gl: "goals", dc: "decisions", ch: "chat", dr: "drafts", as: "my-questions", nt: "notes", mt: "meeting-notes", leads: "leads", tasks: "tasks", cont: "contacts", org: "organizations", st: "storage", cp: "competitors", net: "network", co: "companies" };

  // chip: підпис кнопки; q: повне запитання; mem: скільки спогадів; steps: дії агента; tool: картки-посилання; a: відповідь блоками
  var QA = {
    "SPV": [
      { chip: "Хто підписує", ic: "s", q: "Хто може підписати договір EPC за Термобуд Енерджі?", mem: 4, steps: ["Читаю картку SPV", "Перевіряю рішення ради"], tool: { k: "spv.signatories", t: "Підписанти", e: [["Олег Мартинюк", "Директор · одноосібно · з 01.02.2026", "#step=4"], ["Ірина Ткач", "Фінансова директорка · до € 50 000", "#step=4"]] }, a: ["Підписує <b>Олег Мартинюк</b>, директор, одноосібно. Рада ухвалила рішення про договір EPC 05.11.", "Ірина Ткач підписує документи лише до €50 000, тому договір EPC вона підписати не може."] },
      { chip: "Документи для покупця", ic: "z", q: "Збери документи SPV для перевірки покупцем", mem: 9, steps: ["Читаю установчі документи", "Перевіряю ліцензії", "Читаю кеп-таблицю"], tool: { k: "spv.documents", t: "Документи SPV", e: [["Статут", "Редакція № 2 · 30.09.2026", "#step=6"], ["Витяг з реєстру", "Станом на 01.11.2026", "#step=6"], ["Договір акціонерів", "Термобуд · Green Invest Fund", "#step=6"]] }, a: ["Зібрала статут, витяг з реєстру, договір акціонерів, склад власників (70 і 30%) і чотири ліцензії.", "<b>Бракує</b> актуальної оцінки вартості: останню зробили до раунду Series A."] },
      { chip: "Ринок FCR", ic: "c", q: "Чи може BESS 2 МВт працювати на ринку FCR?", mem: 3, steps: ["Читаю ліцензії SPV"], tool: { k: "spv.licenses", t: "Ліцензії", e: [["Передкваліфікація ОСП · FCR", "Активна · 2 МВт", "#step=6"], ["Передкваліфікація ОСП · aFRR", "В процесі · подано 20.10.2026", "#step=6"]] }, a: ["Так. Передкваліфікація в ОСП на FCR чинна на 2 МВт, тому симулятор BESS врахує цей дохід.", "На ринку aFRR поки ні: заявку подали 20.10, рішення ще немає."] }
    ],    "Проєкти": [
      { chip: "Стан проєкту", ic: "s", q: "Що зараз блокує СЕС + BESS 8,5 МВт?", mem: 7, steps: ["Читаю картку проєкту", "Перевіряю задачі"], tool: { k: "task.list", t: "Прострочені задачі", e: [["Договір EPC з ЕнергоМонтаж", "Олег Мартинюк · прострочено 6 днів", "#step=3"], ["Замовити трансформатор 7,2 МВт", "Роман Бойко · прострочено 6 днів", "#step=3"]], more: "І ще 3 — відкрити всі задачі", href: "#step=3" }, a: ["Проєкт на етапі <b>Ready to build</b>, але будівництво не почнеться без договору EPC. Відповідає <b>Олег Мартинюк</b>.", "Замовлення трансформатора чекає на той самий договір, тому це один вузол, а не два."] },
      { chip: "Гроші проєкту", ic: "z", q: "Чи окупиться станція?", mem: 4, steps: ["Читаю фінансову модель"], a: ["За фінмоделлю IRR <b>18,6%</b>, NPV <b>€4,1 млн</b>, CAPEX <b>€8,4 млн</b>. Окупність <b>4,6 року</b>.", "Цифри порахувала модель, вручну їх ніхто не вводив."] },
      { chip: "Відкрити інвестору", ic: "c", q: "Відкрий проєкт інвестору Green Invest Fund на читання", mem: 3, steps: ["Перевіряю доступи", "Готую запрошення"], tool: { k: "access.grant", t: "Доступ", e: [["Green Invest Fund", "Читання · СЕС + BESS 8,5 МВт", "#step=8"]] }, a: ["Інвестор бачитиме огляд, фінанси й документи, але нічого не змінить. Підтвердіть, і я надішлю запрошення."] }
    ],    "Ліди": [
      { chip: "Показати ліди", ic: "s", q: "Покажи всі активні ліди", mem: 12, steps: ["Шукаю ліди", "Читаю етапи воронки"], tool: { k: "entity.list", t: "Список лідів", e: [["Андрій Мельник", "Продажі СЕС · Переговори", P.leads], ["Катерина Руденко", "Продажі СЕС · Демо", P.leads], ["Наталія Мельник", "Продажі СЕС · Перший контакт", P.leads]], more: "І ще 4 — відкрити повний список", href: P.leads },
        a: ["<b>Етап «Переговори»</b><ul><li><b>Андрій Мельник</b> (Термобуд): Пропозицію з двома варіантами до п'ятниці.</li></ul><b>Етап «Демо»</b><ul><li><b>Катерина Руденко</b> (Енергобуд Сервіс): гарячий, зустріч 22.10 о 12:00.</li><li><b>Віктор Савчук</b> (Дніпро Агро): чекає на другий показ.</li></ul>", "<b>Примітка:</b> ліди на етапі «Новий лід» ще не кваліфіковані, тож я не рахую їх активними."] },
      { chip: "Зведення за лідами", ic: "z", q: "Дай зведення за останніми лідами", mem: 9, steps: ["Шукаю ліди", "Читаю останні дзвінки"], a: ["За тиждень додалося 3 ліди, один перейшов на етап «Переговори».<ul><li><b>Андрій Мельник</b>: пропозиція до п'ятниці, директор порівнює ще 2 пропозиції.</li><li><b>Наталія Мельник</b>: наступний контакт був учора, прострочено.</li><li><b>Ігор Петренко</b>: нова заявка з сайту.</li></ul>", "<b>Що зробити:</b> зателефонувати Наталії й надіслати пропозицію Термобуду. Якщо хочете, прочитаю нотатки по будь-якому з цих лідів."] },
      { chip: "Створити лід", ic: "c", q: "Створи лід на Термобуд у воронці Партнери", mem: 3, steps: ["Шукаю контакт", "Створюю лід"], tool: { k: "entity.create", t: "Створено лід", e: [["Термобуд: партнерство", "Партнери · Новий лід", P.leads]] }, a: ["Готово. Контакт <b>Андрій Мельник</b> уже був у базі, тож лід прив'язано до нього, а не створено нового контакту."] }
    ],
    "Завдання": [
      { chip: "Показати завдання", ic: "s", q: "Покажи мої відкриті завдання", mem: 7, steps: ["Шукаю завдання"], tool: { k: "task.list", t: "Список завдань", e: [["Термобуд: пропозиція з двома варіантами", "In Progress · High · до п'ятниці", P.tasks], ["Термобуд: виїзд на об'єкт і заміри даху", "To Do · Medium · 23.10", P.tasks], ["Альфа Мережі: оновити специфікацію", "To Do · Low", P.tasks]], more: "І ще 2 — відкрити дошку", href: P.tasks }, a: ["У вас 5 відкритих завдань, одне зі строком цього тижня.", "<b>Найтерміновіше:</b> пропозиція для Термобуду, бо воно блокує зустріч на об'єкті."] },
      { chip: "Що заблоковано", ic: "z", q: "Що зараз заблоковано?", mem: 5, steps: ["Шукаю завдання", "Перевіряю зв'язки"], tool: { k: "task.relations", t: "Зв'язки завдань", e: [["Погодити ціну обладнання", "Blocked · Critical · прострочено на 3 дні", P.tasks]] }, a: ["<b>Ланцюжок:</b> без ціни обладнання не буде пропозиції, а без пропозиції не буде зустрічі на об'єкті.", "Якщо хочете, напишу Олегу в чат завдання."] },
      { chip: "Створити завдання", ic: "c", q: "Постав Ірині завдання на пропозицію для Термобуду до п'ятниці", mem: 4, steps: ["Шукаю людину", "Створюю завдання"], tool: { k: "task.create", t: "Створено завдання", e: [["Термобуд: пропозиція з двома варіантами", "Ірина Ткач · до п'ятниці", P.tasks]] }, a: ["Завдання створено й прив'язано до ліда Термобуд. Ірина отримає сповіщення."] }
    ],
    "Контакти": [
      { chip: "Знайти контакт", ic: "s", q: "Знайди Андрія Мельника", mem: 8, steps: ["Шукаю контакти"], tool: { k: "contact.list", t: "Контакти", e: [["Андрій Мельник", "Термобуд · заступник директора", P.cont]] }, a: ["<b>Андрій Мельник</b> є у двох воронках:<ul><li><b>Продажі СЕС:</b> етап «Переговори».</li><li><b>Партнери:</b> етап «Перший контакт».</li></ul>"] },
      { chip: "Про що говорили", ic: "z", q: "Про що говорили з Андрієм останній раз?", mem: 11, steps: ["Шукаю контакт", "Читаю записи зустрічей"], tool: { k: "meeting.list", t: "Зустрічі", e: [["Термобуд - Aita", "20 жовт. · запис готовий · 42 хв", P.cont]] }, a: ["20 жовтня домовилися про таке:<ul><li>Пропозицію з двома варіантами до п'ятниці.</li><li>Зустріч на об'єкті в четвер о 10:00.</li></ul>", "Директор порівнює ще дві пропозиції, тому важлива окупність."] },
      { chip: "Створити контакт", ic: "c", q: "Додай Павла Гнатюка з Термобуду, інженер", mem: 2, steps: ["Шукаю організацію", "Створюю контакт"], tool: { k: "contact.create", t: "Створено контакт", e: [["Павло Гнатюк", "Термобуд · інженер", P.cont]] }, a: ["Контакт створено й прив'язано до організації <b>Термобуд</b>."] }
    ],
    "Організації": [
      { chip: "Знайти організацію", ic: "s", q: "Покажи всіх клієнтів", mem: 6, steps: ["Шукаю організації"], tool: { k: "org.list", t: "Організації", e: [["Термобуд", "Будівництво · 3 контакти", P.org], ["Енергобуд Сервіс", "Енергетика · 1 контакт", P.org], ["Агро Захід", "Сільське господарство · 1 контакт", P.org]] }, a: ["Клієнтів у вас 3. Найбільше контактів у <b>Термобуді</b>."] },
      { chip: "Хто вирішує", ic: "z", q: "Хто вирішує в Термобуді?", mem: 7, steps: ["Читаю картку організації"], tool: { k: "contact.list", t: "Контакти організації", e: [["Олена Сидоренко", "Директорка · ухвалює рішення", P.cont], ["Андрій Мельник", "Заступник директора · ухвалює рішення", P.cont]] }, a: ["Рішення ухвалюють двоє. Технічно проєкт веде <b>Андрій Мельник</b>."] },
      { chip: "Створити організацію", ic: "c", q: "Додай організацію Логіст Плюс, клієнт", mem: 1, steps: ["Перевіряю дублікати", "Створюю організацію"], tool: { k: "org.create", t: "Створено організацію", e: [["Логіст Плюс", "Роль: клієнт", P.org]] }, a: ["Готово. Такої організації в базі ще не було."] }
    ],
    "Чат": [
      { chip: "Що нового", ic: "s", q: "Що пропустив у чатах сьогодні?", mem: 6, steps: ["Читаю чати", "Шукаю згадки"], tool: { k: "chat.rooms", t: "Чати", e: [["Task · Пропозиція для Термобуду", "3 нових повідомлення", P.ch], ["Олег Мартинюк", "Агент Олега чекає на відповідь", P.ch]] }, a: ["Два чати чекають на вас. <b>Агент Олега</b> просить два рядки про зустріч із Термобудом."] },
      { chip: "Рішення", ic: "z", q: "Які рішення чекають на підтвердження?", mem: 4, steps: ["Читаю домовленості зі зустрічей"], tool: { k: "decision.list", t: "Домовленості", e: [["Розподіл 15/85 до 400 тис. євро", "Із зустрічі · чекає підтвердження", P.ch]] }, a: ["Одна домовленість чекає на підтвердження. Це можна зробити просто в чаті."] },
      { chip: "Написати команді", ic: "c", q: "Напиши Ірині, що пропозиція потрібна до п'ятниці", mem: 2, steps: ["Шукаю людину", "Готую повідомлення"], tool: { k: "chat.send", t: "Чернетка", e: [["Ірина Ткач", "Пропозиція для Термобуду потрібна до п'ятниці", P.ch]] }, a: ["Чернетка готова. Надіслати?"] }
    ],
    "Драфти": [
      { chip: "Мої документи", ic: "s", q: "Які документи чекають на мій перегляд?", mem: 3, steps: ["Шукаю документи"], tool: { k: "draft.list", t: "Документи", e: [["Пропозиція Термобуд: текст і таблиця", "2 коментарі · 1 пропозиція", P.dr]] }, a: ["Один документ чекає на вас."] },
      { chip: "Відкриті правки", ic: "z", q: "Що ще не закрито у пропозиції для Термобуду?", mem: 5, steps: ["Читаю документ"], tool: { k: "draft.get", t: "Документ", e: [["Пропозиція Термобуд: текст і таблиця", "Коментар Олега · строки монтажу", P.dr]] }, a: ["Лишилось одне питання про строки монтажу."] },
      { chip: "Запропонувати правку", ic: "c", q: "Скороти другий абзац", mem: 2, steps: ["Читаю документ", "Готую пропозицію"], tool: { k: "draft.suggest", t: "Пропозиція", e: [["Пропозиція Термобуд: текст і таблиця", "Чекає на вашу згоду", P.dr]] }, a: ["Підготував пропозицію, текст не змінював."] }
    ],
    "Мої питання": [
      { chip: "Хто не відповів", ic: "s", q: "Хто ще не відповів на мої питання?", mem: 3, steps: ["Шукаю питання"], tool: { k: "ask.list", t: "Питання", e: [["Чи готовий кошторис для Термобуду?", "Ірина Ткач · до 7 лист.", P.as], ["Чи є інвертори на складі?", "Роман Бойко · до 8 лист.", P.as]] }, a: ["Чекаємо на дві відповіді."] },
      { chip: "Мене питають", ic: "z", q: "Що питають мене?", mem: 2, steps: ["Шукаю питання"], tool: { k: "ask.list", t: "Питання", e: [["Їдемо на об'єкт у четвер?", "Агент Олега · сьогодні до 20:15", P.as]] }, a: ["Одне питання зі строком сьогодні."] },
      { chip: "Спитати колегу", ic: "c", q: "Спитай Ірину, чи готовий кошторис, чекай день", mem: 2, steps: ["Шукаю людину", "Створюю питання"], tool: { k: "ask.create", t: "Питання надіслано", e: [["Чи готовий кошторис?", "Ірина Ткач · 1 день", P.as]] }, a: ["Питання надіслано. Відповідь побачите в завданні."] }
    ],
    "Нотатки": [
      { chip: "Знайти нотатку", ic: "s", q: "Де нотатка про дах складу?", mem: 2, steps: ["Шукаю нотатки"], tool: { k: "note.list", t: "Нотатки", e: [["Огляд даху складу", "Сьогодні, 10:46", P.nt]] }, a: ["Знайшов нотатку з чек-листом і фото."] },
      { chip: "Що в нотатках", ic: "z", q: "Що я планував перевірити на об'єкті?", mem: 3, steps: ["Читаю нотатку"], a: ["У чек-листі два відкриті пункти:<ul><li>Стан покрівлі й гідроізоляції.</li><li>Місце під інвертори.</li></ul>"] },
      { chip: "Записати нотатку", ic: "c", q: "Запиши нотатку: виїзд у четвер о 10:00", mem: 1, steps: ["Створюю нотатку"], tool: { k: "note.create", t: "Створено нотатку", e: [["Виїзд у четвер", "Додано в чергу", P.nt]] }, a: ["Готово. Нотатка вже в черзі."] }
    ],
    "Нотатник зустрічей": [
      { chip: "Що вирішили", ic: "s", q: "Що вирішили на вчорашній зустрічі?", mem: 9, steps: ["Шукаю зустріч", "Читаю підсумок"], tool: { k: "meeting.get", t: "Зустріч", e: [["Термобуд - Aita", "42 хв 18 с · 4 рішення · 5 завдань", P.mt]] }, a: ["Домовилися про таке:<ul><li>Пропозицію у двох варіантах.</li><li>Виїзд на об'єкт у четвер о 10:00.</li></ul>"] },
      { chip: "Мої завдання", ic: "z", q: "Що мені робити після зустрічі?", mem: 5, steps: ["Читаю завдання зі зустрічі"], tool: { k: "meeting.get", t: "Завдання зі зустрічі", e: [["Узгодити дату виїзду на об'єкт", "Катерина Руденко", P.mt]] }, a: ["За вами один пункт. Створити завдання?"] },
      { chip: "Записати зустріч", ic: "c", q: "Запиши цю зустріч", mem: 1, steps: ["Перевіряю посилання", "Запускаю запис"], tool: { k: "meeting.start", t: "Запис", e: [["Термобуд - Aita", "Нотатник приєднається за хвилину", P.mt]] }, a: ["Нотатник приєднається приблизно за хвилину під іменем Aita Notetaker."] }
    ],
    "Журнал рішень": [
      { chip: "Знайти рішення", ic: "s", q: "Що вирішили щодо авансу?", mem: 7, steps: ["Шукаю в журналі"], tool: { k: "decision.list", t: "Рішення", e: [["Монтаж стартує лише після авансу 50%", "Чинне · доказ A · перегляд 29 січ.", P.dc]] }, a: ["Рішення чинне. Причина: без авансу підрядник не бронює бригаду."] },
      { chip: "Що чекає", ic: "z", q: "Що чекає на підтвердження?", mem: 4, steps: ["Читаю чергу"], tool: { k: "decision.list", t: "Черга", e: [["Рекламу налаштовуємо на інженерні компанії", "Очікує · доказ C", P.dc], ["Варіант із накопиченням показуємо другим", "Очікує · доказ B", P.dc]] }, a: ["Два записи чекають на вас."] },
      { chip: "Записати рішення", ic: "c", q: "Запиши рішення: аванс 50%, бо бригаду бронюємо заздалегідь", mem: 3, steps: ["Перевіряю дублікати", "Створюю запис"], tool: { k: "decision.create", t: "Створено запис", e: [["Монтаж стартує лише після авансу 50%", "Перегляд через 90 днів", P.dc]] }, a: ["Рішення записано з причиною. Перегляд настане через 90 днів."] }
    ],
    "Цілі": [
      { chip: "Показати цілі", ic: "s", q: "Покажи наші цілі", mem: 6, steps: ["Читаю цілі"], tool: { k: "goal.list", t: "Цілі", e: [["Закрити 20 проєктів СЕС", "Впевненість 70% · за планом", P.gl], ["Скоротити монтаж до п'яти тижнів", "Впевненість 30% · під загрозою", P.gl]] }, a: ["Активних цілей 7. Під загрозою одна: строки монтажу."] },
      { chip: "Що під загрозою", ic: "z", q: "Які цілі під загрозою?", mem: 4, steps: ["Читаю ключові результати"], a: ["<b>Скоротити монтаж до п'яти тижнів:</b> зараз шість із половиною, а до кінця строку місяць."] },
      { chip: "Оновити результат", ic: "c", q: "Онови результат: запущено 14 станцій", mem: 2, steps: ["Шукаю результат", "Вношу значення"], tool: { k: "kr.checkin", t: "Оновлення", e: [["Запущено станцій", "13 → 14 із 20", P.gl]] }, a: ["Результат оновлено."] }
    ],
    "База знань": [
      { chip: "Знайти регламент", ic: "s", q: "Що брати на виїзд на об'єкт?", mem: 5, steps: ["Шукаю в базі знань"], tool: { k: "kb.search", t: "Сторінки", e: [["Виїзд на об'єкт", "Монтаж · Регламенти", P.kb]] }, a: ["Рулетку, далекомір і дрон. Перед виїздом попередьте охорону."] },
      { chip: "Що застаріло", ic: "z", q: "Які сторінки час перевірити?", mem: 3, steps: ["Перевіряю дати перегляду"], tool: { k: "kb.search", t: "Сторінки", e: [["Безпека на даху", "Перегляд минув 3 дні тому", P.kb]] }, a: ["Одна сторінка чекає на перевірку. Нагадування вже в Романа."] },
      { chip: "Написати сторінку", ic: "c", q: "Склади чек-лист здачі станції", mem: 4, steps: ["Читаю регламенти", "Створюю сторінку"], tool: { k: "kb.create", t: "Створено сторінку", e: [["Чек-лист здачі станції", "Монтаж · Чек-листи", P.kb]] }, a: ["Сторінку створено. Перевірте її перед публікацією для команди."] }
    ],
    "Панель огляду": [
      { chip: "Огляд дня", ic: "s", q: "Що термінового сьогодні?", mem: 8, steps: ["Читаю завдання"], tool: { k: "task.list", t: "Завдання", e: [["Термобуд: пропозиція з двома варіантами", "Прострочено: 2д", P.tasks]] }, a: ["Два критичні завдання. Почніть із пропозиції, бо без неї не буде зустрічі."] },
      { chip: "Стан портфеля", ic: "z", q: "Як виглядає портфель?", mem: 3, steps: ["Читаю проєкти"], a: ["17 проєктів, 5 в експлуатації, CAPEX портфеля $4.1M."] },
      { chip: "Кому зателефонувати", ic: "c", q: "Кому зателефонувати сьогодні?", mem: 5, steps: ["Читаю ліди"], tool: { k: "entity.list", t: "Ліди", e: [["Наталія Мельник", "Наступний контакт був учора", P.leads]] }, a: ["Почніть із Наталії: контакт прострочено."] }
    ],
    "Календар": [
      { chip: "Що сьогодні", ic: "s", q: "Які в мене зустрічі сьогодні?", mem: 4, steps: ["Читаю календар"], tool: { k: "event.list", t: "Події", e: [["Термобуд - Aita", "15:00 · онлайн · нотетейкер прийде", P.cl]] }, a: ["Сьогодні одна зустріч із клієнтом о 15:00."] },
      { chip: "Вільний час", ic: "z", q: "Знайди годину для мене, Олега й Ірини", mem: 2, steps: ["Перевіряю календарі"], a: ["Спільний вільний час: вівторок, 14:00–15:00."] },
      { chip: "Призначити зустріч", ic: "c", q: "Признач зустріч із Термобудом у четвер о 10:00", mem: 3, steps: ["Шукаю лід", "Створюю подію"], tool: { k: "event.create", t: "Створено подію", e: [["Виїзд на об'єкт", "Четвер, 10:00 · прив'язано до ліда", P.cl]] }, a: ["Подію створено й прив'язано до ліда Термобуд."] }
    ],
    "Черга": [
      { chip: "Що в черзі", ic: "s", q: "Що в мене в черзі?", mem: 5, steps: ["Читаю чергу"], tool: { k: "inbox.queue", t: "Черга", e: [["Термобуд: запит на другий варіант пропозиції", "Потребує рішення", P.ib], ["Банк Схід: документи", "Потребує рішення", P.ib]] }, a: ["Два листи чекають на ваше рішення, ще один агент уже опрацював."] },
      { chip: "Зведення за ніч", ic: "z", q: "Що сталося за ніч?", mem: 3, steps: ["Читаю журнал агента"], a: ["Агент відсіяв 23 листи, зробив 11 дій, а 2 чекають на вас."] },
      { chip: "Зробити завдання", ic: "c", q: "Зроби з цього листа завдання для Ірини", mem: 2, steps: ["Читаю лист", "Створюю завдання"], tool: { k: "task.create", t: "Створено завдання", e: [["Термобуд: другий варіант пропозиції", "Ірина Ткач · до п'ятниці", P.tasks]] }, a: ["Завдання створено. Скасувати можна протягом 24 годин."] }
    ],
    "Пошта": [
      { chip: "Знайти лист", ic: "s", q: "Де лист від банку?", mem: 3, steps: ["Шукаю в пошті"], tool: { k: "inbox.search", t: "Листи", e: [["Банк Схід: документи для кредиту", "Сьогодні, 8:40", P.ml]] }, a: ["Лист сьогодні о 8:40, потрібні звіти за три квартали."] },
      { chip: "Підсумувати", ic: "z", q: "Підсумуй листування з Термобудом", mem: 6, steps: ["Читаю листування"], a: ["Клієнт просить другий варіант пропозиції до п'ятниці й надіслав схему даху."] },
      { chip: "Скласти відповідь", ic: "c", q: "Склади відповідь Андрію", mem: 4, steps: ["Читаю листування", "Готую чернетку"], tool: { k: "inbox.draft", t: "Чернетка", e: [["Відповідь Андрію Мельнику", "Чекає на надсилання", P.ml]] }, a: ["Чернетка готова. Надсилаєте ви."] }
    ],
    "Сховище": [
      { chip: "Знайти файл", ic: "s", q: "Де договір із Термобудом?", mem: 5, steps: ["Шукаю в сховищі"], tool: { k: "file.search", t: "Файли", e: [["Договір_Термобуд_v3.pdf", "02_Договори / Термобуд", "#doc=Договір_Термобуд_v3.pdf"]] }, a: ["Файл лежить у папці <b>02_Договори / Термобуд</b>. Це третя версія від 21 жовтня."] },
      { chip: "Що за посиланням", ic: "z", q: "Які папки відкриті за посиланням?", mem: 3, steps: ["Читаю доступи"], tool: { k: "folder.list", t: "Папки", e: [["02_Договори", "Будь-хто з посиланням · діє 30 днів", "#step=5"]] }, a: ["За посиланням відкрита одна папка. Її відкрили 4 рази."] },
      { chip: "Підготувати презентацію", ic: "c", q: "Підготуй презентацію про нас для Термобуду", mem: 14, steps: ["Шукаю дані компанії", "Читаю файли", "Збираю презентацію"], tool: { k: "file.create", t: "Створено файл", e: [["Презентація_Термобуд.pdf", "04_Комерція · 8 слайдів", "#doc=Презентація_Термобуд.pdf"], ["Про_компанію.pdf", "джерело · 01_Компанія", "#doc=Про_компанію.pdf"], ["Кейси_СЕС.pdf", "джерело · 01_Компанія", "#doc=Кейси_СЕС.pdf"]] }, a: ["Дані взято з файлів <b>Про_компанію.pdf</b>, <b>Кейси_СЕС.pdf</b> і <b>Брендбук.pdf</b>.", "Перевірте слайд із цінами: його варто погодити перед надсиланням."] }
    ],
    "Конкуренти": [
      { chip: "Показати конкурентів", ic: "s", q: "Хто найбільша загроза?", mem: 4, steps: ["Читаю реєстр конкурентів"], tool: { k: "competitor.list", t: "Конкуренти", e: [["EnergyDesk", "Загроза: висока · €12M", P.cp], ["Volta Suite", "Загроза: висока · €28M", P.cp]] }, a: ["Висока загроза у двох конкурентів. <b>EnergyDesk</b> частіше трапляється у ваших лідах."] },
      { chip: "Порівняти з нами", ic: "z", q: "Де EnergyDesk сильніший за нас?", mem: 6, steps: ["Читаю таблицю порівняння"], a: ["EnergyDesk попереду у двох рядках:<ul><li><b>Склад і запчастини.</b></li><li><b>Застосунок для монтажників.</b></li></ul>", "<b>Ваші сильні сторони:</b> фінмодель і розшифровка дзвінків."] },
      { chip: "Додати конкурента", ic: "c", q: "Додай конкурента energydesk.example", mem: 1, steps: ["Читаю сайт", "Створюю картку"], tool: { k: "competitor.create", t: "Створено картку", e: [["EnergyDesk", "Зовнішній · дані із сайту", P.cp]] }, a: ["Картку створено. Перевірте дані: AI може помилятися."] }
    ],
    "Мережа": [
      { chip: "Знайти людину", ic: "s", q: "Хто в нас є з монтажу?", mem: 5, steps: ["Шукаю в мережі"], tool: { k: "network.search", t: "Люди", e: [["Дмитро Ткач", "Технопарк · Проєкт, Угода", P.net], ["Роман Бойко", "Сонячні системи · Команда", P.net]] }, a: ["<b>Дмитро Ткач</b> уже працював із вами над проєктом, тож варто почати з нього."] },
      { chip: "Звідки знаю", ic: "z", q: "Звідки я знаю Андрія Мельника?", mem: 8, steps: ["Шукаю в мережі"], tool: { k: "network.search", t: "Люди", e: [["Андрій Мельник", "Термобуд · CRM", P.cont]] }, a: ["Андрій є у вашій CRM, це контакт Термобуду. Він ще не зареєстрований на платформі, тому написати в чат не можна."] },
      { chip: "Знайти партнера", ic: "c", q: "Знайди монтажну компанію у Львові", mem: 2, steps: ["Шукаю серед людей платформи"], tool: { k: "profile.search", t: "Люди", e: [["Тетяна Шевчук", "Монтаж Сонце · директорка з монтажу", P.net]] }, a: ["У Львові знайдено одну людину. Написати їй повідомлення?"] }
    ],
    "Компанії": [
      { chip: "Знайти компанію", ic: "s", q: "Знайди монтажну компанію в Україні", mem: 3, steps: ["Шукаю компанії"], tool: { k: "company.search", t: "Компанії", e: [["Монтаж Сонце", "UA · Львів · верифіковано · 14 проєктів", P.co], ["Світло Про", "UA · Вінниця · верифіковано", P.co]] }, a: ["Підходять дві компанії. <b>Монтаж Сонце</b> була активна 2 дні тому."] },
      { chip: "Хто активний", ic: "z", q: "Хто активний цього тижня?", mem: 2, steps: ["Шукаю компанії"], tool: { k: "company.search", t: "Компанії", e: [["Монтаж Сонце", "2 дні тому", P.co], ["ГрінБуд", "3 дні тому", P.co]] }, a: ["Цього тижня активні дві компанії."] },
      { chip: "Запросити на зустріч", ic: "c", q: "Як запросити Монтаж Сонце на зустріч?", mem: 1, steps: ["Читаю профіль компанії"], tool: { k: "company.get", t: "Компанія", e: [["Монтаж Сонце", "Запросити зустріч", P.co]] }, a: ["У профілі натисніть «Запросити зустріч». Зустріч відбудеться після підтвердження з боку компанії."] }
    ]
  };
  var desc = (typeof D !== "undefined" && D[mod]) || "";
  var general = [
    { chip: "Що вміє модуль", ic: "s", q: "Що вміє цей модуль?", mem: 3, steps: ["Читаю базу знань"], a: [desc ? "<b>«" + mod + "»:</b> " + desc + "." : "Розповім про модуль на безкоштовному демо."] },
    { chip: "Чи входить у пакет", ic: "z", q: "Чи входить він у пакет?", mem: 1, steps: ["Читаю базу знань"], a: ["Так. Усі 48 модулів входять у кожен пакет."] },
    { chip: "Показати у себе", ic: "c", q: "Як побачити це у своїй компанії?", mem: 1, steps: ["Читаю базу знань"], a: ["Запишіться на безкоштовне демо, і ми покажемо, як модуль працюватиме у вас.<br><a href=\"../demo\">Безкоштовне демо</a>"] }
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
  btn.id = "agB"; btn.type = "button"; btn.setAttribute("aria-label", "Aita Асистент"); btn.innerHTML = star;
  var box = document.createElement("div");
  box.id = "agP"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Aita Асистент");
  box.innerHTML = '<div class="hd"><span class="ic">' + wand + '</span><span class="tt"><b>Нова розмова ⌄</b><small>Aita · демо на сайті</small></span><button class="hb nw" type="button" aria-label="Нова розмова">' + newc + '</button><span class="hb" aria-hidden="true">⋯</span><button class="hb mn" type="button" aria-label="Згорнути">–</button><button class="hb x" type="button" aria-label="Закрити">×</button></div>'
    + '<div class="bd" aria-live="polite"></div><div class="ch"></div>'
    + '<form><button class="tool" type="button" aria-label="Прикріпити файл">' + clip + '</button><button class="tool" type="button" aria-label="Обрати зону">' + zone + '</button><input type="text" placeholder="Введіть повідомлення..." aria-label="Повідомлення"><button class="tool" type="button" aria-label="Надиктувати в поле">' + mic + '</button><button class="go" type="submit" aria-label="Надіслати">↑</button></form>'
    + '<div class="fb"><span>Claude Haiku 5.5 ⌄</span><span>Питати перед зміною</span><span>Ctrl+J</span></div>';
  document.body.appendChild(btn); document.body.appendChild(box);

  var bd = box.querySelector(".bd"), ch = box.querySelector(".ch"), inp = box.querySelector("input"), title = box.querySelector(".tt b"), busy = false;
  var hello = '<div class="hi"><i>' + star + '</i><b>Чим можу допомогти?</b>Запитайте мене про будь-що у вашому робочому просторі...</div>';
  var reset = function () { bd.innerHTML = hello; title.textContent = "Нова розмова ⌄"; ch.style.display = ""; busy = false; };
  var esc = function (x) { var d = document.createElement("div"); d.textContent = x; return d.innerHTML; };
  var down = function () { bd.scrollTop = bd.scrollHeight; };
  var fast = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms, f) { setTimeout(f, fast ? 0 : ms); };
  var stamp = function () { var d = new Date(), p = function (n) { return (n < 10 ? "0" : "") + n; }; return { full: p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()), t: p(d.getHours()) + ":" + p(d.getMinutes()) }; };
  var ask = function (q, it) {
    if (busy) return; busy = true;
    bd.innerHTML = ""; ch.style.display = "none"; title.textContent = q;
    var me = document.createElement("div"); me.className = "me"; me.textContent = q; bd.appendChild(me);
    if (it.mem) { var m = document.createElement("div"); m.className = "mem"; m.textContent = "Використано спогади: " + it.mem; bd.appendChild(m); }
    var rw = document.createElement("div"); rw.className = "rw"; rw.innerHTML = '<span class="bt">' + bot + '</span><div class="col"></div>'; bd.appendChild(rw);
    var col = rw.querySelector(".col");
    var think = document.createElement("div"); think.className = "dots"; think.innerHTML = "<span></span><span></span><span></span>"; col.appendChild(think);
    var queue = [];
    (it.steps || []).forEach(function (s) { queue.push(function () { var e = document.createElement("div"); e.className = "st"; e.innerHTML = chk + esc(s) + "<em>›</em>"; col.insertBefore(e, think); }); });
    if (it.tool) queue.push(function () {
      var w = stamp(), t = it.tool, e = document.createElement("div"); e.className = "tl";
      e.innerHTML = '<div class="th"><code>' + t.k + '</code>' + esc(t.t) + '</div><div class="tb">' + t.e.map(function (x) { return '<a class="en" href="' + x[2] + '"><span><b>' + esc(x[0]) + '</b><small>' + esc(x[1]) + '</small></span>' + ext + '</a>'; }).join("") + (t.more ? '<a class="mo" href="' + t.href + '">' + esc(t.more) + '</a>' : "") + '<div class="dt">дані від ' + w.full + '</div></div>';
      col.insertBefore(e, think);
    });
    (it.a || []).forEach(function (html) { queue.push(function () { var e = document.createElement("div"); e.className = "an"; e.innerHTML = html; col.insertBefore(e, think); }); });
    var i = 0;
    (function next() {
      if (i < queue.length) { queue[i++](); down(); wait(i === 1 ? 600 : 520, next); return; }
      think.remove();
      var f = document.createElement("div"); f.className = "ft2"; f.innerHTML = cpy + "Копіювати &nbsp; " + stamp().t; col.appendChild(f); down(); busy = false; ch.style.display = "";
    })();
  };
  items.forEach(function (it) {
    var b = document.createElement("button"); b.type = "button"; b.innerHTML = (chipI[it.ic] || star) + esc(it.chip);
    b.onclick = function () { ask(it.q, it); }; ch.appendChild(b);
  });
  var note = { mem: 0, steps: [], a: ["На сайті показані лише готові приклади. На платформі можна прикріпити файл, надиктувати запит і обрати зону екрана.<br><a href=\"../demo\">Безкоштовне демо</a>"] };
  box.querySelectorAll(".tool").forEach(function (b) { b.onclick = function () { ask(b.getAttribute("aria-label"), note); }; });
  box.querySelector("form").onsubmit = function (e) {
    e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = "";
    ask(v, { mem: 0, steps: [], a: ["На сайті показані лише готові приклади. На платформі агент відповідає за даними вашої компанії.<br><a href=\"../demo\">Безкоштовне демо</a>"] });
  };
  var open = function (on) { box.classList.toggle("on", on); btn.style.display = on ? "none" : ""; (on ? inp : btn).focus(); };
  btn.onclick = function () { open(true); };
  box.querySelector(".x").onclick = function () { open(false); };
  box.querySelector(".mn").onclick = function () { open(false); };
  box.querySelector(".nw").onclick = reset;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("on")) open(false); if (e.ctrlKey && (e.key === "j" || e.key === "J")) { e.preventDefault(); open(!box.classList.contains("on")); } });
  reset();
})();
