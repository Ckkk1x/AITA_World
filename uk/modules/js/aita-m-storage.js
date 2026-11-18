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
  var hero = function (a, b) { return '<div class="dvlogo">Сонячні системи</div><h3>' + a + '</h3><p class="dvs">' + b + '</p>'; };
  var tb = function (rows) { return '<table>' + rows.map(function (r, i) { var c = i ? "td" : "th"; return "<tr>" + r.map(function (x) { return "<" + c + ">" + x + "</" + c + ">"; }).join("") + "</tr>"; }).join("") + "</table>"; };
  var DOCS = {
    "Про_компанію.pdf": { d: "14 жовт. 2026", s: "2.1 MB", p: [
      hero("Про компанію", "Проєктуємо й будуємо сонячні станції для бізнесу.") + '<div class="dvband"></div>' + h1("Хто ми") + "<p>12 років на ринку, понад 40 реалізованих об'єктів і власна монтажна бригада.</p>" + h1("Що робимо") + tb([["Послуга", "Що входить"], ["Аудит споживання", "Графік навантаження, тариф, потенціал економії"], ["Проєктування", "Розкладка, схема, специфікація"], ["Монтаж", "Власна бригада, пусконалагодження"], ["Сервіс", "Моніторинг і планове обслуговування"]]),
      h1("Наша команда") + "<p>Інженери, проєктувальники й монтажники працюють в одному офісі, тому від заміру до запуску проєкт веде одна команда.</p>" + h1("Де працюємо") + "<p>Київ, Бровари, Вінниця, Львів та область.</p>",
      h1("Контакти") + "<p>Київ, вул. Сонячна, 12<br>hello@sonyachni.example</p>"
    ] },
    "Кейси_СЕС.pdf": { d: "09 жовт. 2026", s: "3.2 MB", p: [
      hero("Кейси СЕС", "Три об'єкти, які ми здали цього року.") + '<div class="dvband"></div>' + tb([["Об'єкт", "Потужність", "Окупність"], ["Склад у Броварах", "150 кВт", "4,2 року"], ["Агрокомплекс", "320 кВт", "4,8 року"], ["Бізнес-центр", "90 кВт", "5,1 року"]]) + h1("Склад у Броварах") + "<p>Станцію поставили на дах складу за шість тижнів, робота складу не зупинялася.</p>",
      h1("Агрокомплекс") + "<p>Станція покриває денне навантаження холодильників у сезон.</p>"
    ] },
    "Брендбук.pdf": { d: "20 вер. 2026", s: "6.4 MB", p: [
      hero("Брендбук", "Логотип, кольори й шрифти компанії.") + '<div class="dvband"></div>' + h1("Кольори") + '<div class="dvsw"><i style="background:#0086CC"></i><i style="background:#39B54A"></i><i style="background:#FFB800"></i><i style="background:#D62828"></i></div>' + h1("Шрифт") + "<p>Один шрифт на всі документи: заголовки жирні, основний текст звичайний.</p>"
    ] },
    "Прайс_послуг_2026.pdf": { d: "11 жовт. 2026", s: "96 KB", p: [
      hero("Прайс послуг 2026", "Ціни без ПДВ, діють до кінця року.") + '<div class="dvband"></div>' + tb([["Послуга", "Ціна"], ["Аудит споживання", "12 000 грн"], ["Проєкт СЕС до 100 кВт", "45 000 грн"], ["Проєкт СЕС понад 100 кВт", "за розрахунком"], ["Сервіс, рік", "від 30 000 грн"]])
    ] },
    "Реквізити.pdf": { d: "02 жовт. 2026", s: "48 KB", p: [
      hero("Реквізити", "Для договорів і рахунків.") + '<div class="dvband"></div>' + tb([["Поле", "Значення"], ["Назва", "ТОВ «Сонячні системи»"], ["Адреса", "Київ, вул. Сонячна, 12"], ["Директор", "Катерина Руденко"]])
    ] },
    "Договір_Термобуд_v3.pdf": { d: "21 жовт. 2026", s: "1.4 MB", p: [
      hero("Договір підряду", "Будівництво сонячної станції 150 кВт на складі в Броварах.") + '<div class="dvband"></div>' + h1("1. Предмет договору") + "<p>Підрядник проєктує й будує станцію, замовник приймає роботи й оплачує їх.</p>" + h1("2. Строки") + "<p>Монтаж триває шість тижнів від дати авансу.</p>" + h1("3. Оплата") + tb([["Етап", "Частка"], ["Аванс", "50%"], ["Постачання обладнання", "30%"], ["Запуск", "20%"]]),
      h1("4. Гарантія") + "<p>Гарантія на роботи: 5 років. На обладнання: за умовами виробника.</p>" + h1("5. Сторони") + "<p>Сонячні системи, Термобуд.</p>"
    ] },
    "Презентація_Термобуд.pdf": { d: "сьогодні", s: "4.8 MB", p: [
      hero("Сонячна станція для Термобуду", "Два варіанти для складу в Броварах.") + '<div class="dvband"></div>' + tb([["", "Варіант А", "Варіант Б"], ["Потужність", "150 кВт", "150 кВт + накопичувач"], ["Окупність", "4,2 року", "5,0 року"]]) + h1("Чому ми") + "<p>Понад 40 об'єктів, власна бригада і сервіс після запуску.</p>",
      h1("Наступний крок") + "<p>Зустріч на об'єкті в четвер о 10:00.</p>"
    ] },
    "Окупність_СЕС_150кВт.pdf": { d: "18 жовт. 2026", s: "210 KB", p: [
      hero("Окупність СЕС 150 кВт", "Розрахунок для складу в Броварах.") + '<div class="dvband"></div>' + tb([["Показник", "Значення"], ["Виробіток на рік", "172 000 кВт·год"], ["Економія на рік", "1,1 млн грн"], ["Окупність", "4,2 року"]])
    ] }
  };

  // Вікно перегляду: те саме в карусельці й на екрані після кліку
  var viewer = function (n, pageNo) {
    var d = DOCS[n], k = pageNo || 0, total = d.p.length;
    var thumbs = d.p.map(function (p, i) { return '<div class="dvt' + (i === k ? " on" : "") + '" data-pg="' + i + '"><div class="dvth"><div class="dvmini dvpage">' + p + '</div></div><span>' + (i + 1) + '</span></div>'; }).join("");
    return '<div class="dvm" role="dialog" aria-label="' + n + '"><div class="dvh"><div class="dvn"><b>' + n + '</b><small>Попередній перегляд завантаженого файлу</small></div>'
      + '<span class="dvix"><i></i>Не проіндексовано</span><span class="dvd">' + L("filetext", 15) + 'Документи</span><span class="dvo" data-newtab>Відкрити в новій вкладці' + L("ext", 15) + '</span><span class="dvx" data-close title="Закрити">' + L("x", 18) + '</span></div>'
      + '<div class="dvv"><div class="dvbar">' + L("menu", 17) + '<b>' + n.replace(/\.pdf$/, "").replace(/_/g, " ") + '</b><span class="dvpn"><u>' + (k + 1) + '</u> / ' + total + '</span><s></s>' + L("minus", 16) + '<span class="dvz"><u>66%</u></span>' + L("plus", 16) + '<s></s>' + L("fit", 16) + L("rotate", 16) + '<em>' + L("down", 16) + L("print", 16) + L("dots", 16) + '</em></div>'
      + '<div class="dvb"><div class="dvside">' + thumbs + '</div><div class="dvmain"><div class="dvpage">' + d.p[k] + '</div></div></div></div></div>';
  };

  // Рядки списку
  var acts = '<em class="ac">' + L("share") + L("down") + L("pen") + L("dots") + "</em>";
  var folder = function (n, tag) { return '<div class="fr2">' + L("folder") + "<span>" + n + "</span>" + (tag ? '<small class="ln">за посиланням</small>' : "") + acts + "</div>"; };
  var file = function (n) { var d = DOCS[n]; return '<div class="fr2" data-doc="' + n + '">' + L("file") + "<span>" + n + '</span><i class="ix" title="Не проіндексовано"></i><small>' + d.d + " (" + d.s + ")</small>" + acts + "</div>"; };
  var bar = function (crumb) { return '<div class="bh"><b>Сховище</b><span class="cmp">Сонячні системи</span></div><div class="pg st"><div class="tbr"><span class="cr">' + crumb + '</span><span class="so">' + L("sort", 14) + 'Сортування: <b>Останнє оновлення</b></span>' + L("aup", 15) + '<span class="b2">' + L("up", 15) + 'Завантажити файли</span><span class="b2">' + L("fup", 15) + 'Завантажити папку</span><span class="b2">' + L("fplus", 15) + "Нова папка</span></div>"; };
  var sep = L("chev", 14, "margin:0 6px;vertical-align:-2px;color:#737373");

  var root = bar("Коренева папка") + folder("01_Компанія") + folder("02_Договори", 1) + folder("03_Фінанси") + folder("04_Комерція") + folder("05_Проєкти") + folder("06_Шаблони") + folder("07_Зустрічі") + folder("08_Команда") + folder("Контрагенти") + "</div>";
  var files = '<div class="ly" data-show="1 2 3 4" style="left:0;right:0;top:0;bottom:0;border:0;border-radius:0;box-shadow:none;display:block;background:#FAFAFA">' + bar("Коренева папка" + sep + "01_Компанія")
    + '<div data-hl="1">' + file("Про_компанію.pdf") + file("Кейси_СЕС.pdf") + file("Брендбук.pdf") + file("Прайс_послуг_2026.pdf") + file("Реквізити.pdf") + "</div></div></div>";
  var prev = '<div class="pop full" data-show="2"><div class="dvwrap" data-doc="Про_компанію.pdf">' + viewer("Про_компанію.pdf") + "</div></div>";
  var mi = function (ic, t, x) { return '<div class="mi' + (x || "") + '">' + L(ic, 15) + "<span>" + t + "</span></div>"; };
  var menu = '<div class="pop" data-show="3" style="right:22px;top:176px;width:230px;padding:6px;box-shadow:0 12px 34px -10px rgba(0,0,0,.3);border:1px solid #E6E6E6"><div data-hl="3">' + mi("down", "Завантажити") + mi("pen", "Перейменувати") + mi("share", "Поділитися") + '<hr class="mh">' + mi("finput", "Перемістити") + '<div class="mi">' + L("tag", 15) + "<span>Позначити для пам'яті</span>" + L("chev", 14, "margin-left:auto") + '</div><hr class="mh">' + mi("trash", "Видалити", " rd") + "</div></div>";
  var shHead = function (n) { return '<div class="shh"><b>Поділитися «' + n + '»</b>' + L("x", 17) + '</div><div class="shs">Хто бачить папку і як надіслати її людині без акаунта в Aita.</div>'; };
  var share = '<div class="pop full" data-show="4"><div class="shd">' + shHead("01_Компанія") + '<b class="sht">Люди з доступом</b><div class="shv" data-hl="4">' + L("lock", 16) + '<span><b>Видимість</b><small>Відкрита: папку бачать усі, хто має доступ до цієї компанії, проєкту чи SPV.</small></span><span class="b2">Обмежити</span></div><p class="shn">Папка відкрита, тож доступ успадковується від компанії, проєкту чи SPV, якому вона належить. Обмежте її, щоб надати доступ конкретним командам або людям.</p><hr class="mh"><b class="sht">Загальний доступ</b><div class="seg"><span class="on">Лише люди з доступом</span><span>Будь-хто з посиланням</span></div><p class="shn">Відкрити можуть лише люди, яким надано доступ в Aita.</p><div class="shf"><span class="b2 g">Готово</span></div></div></div>';
  var link = '<div class="pop full" data-show="5"><div class="shd">' + shHead("02_Договори") + '<b class="sht">Загальний доступ</b><div class="seg"><span>Лише люди з доступом</span><span class="on">Будь-хто з посиланням</span></div><div class="shg"><label>Що може отримувач<span>Переглядати й завантажувати</span></label><label>Діє<span>30 днів</span></label></div><div class="shl" data-hl="5"><span>Посилання відкрили 4 рази</span><span class="b2 g">Копіювати посилання</span></div><div class="shf"><span class="b2 g">Готово</span></div></div></div>';
  var hit = function (n, w) { return '<div class="kr" data-doc="' + n + '">' + L("aright", 15) + "<b>" + n + "</b><small>" + w + "</small></div>"; };
  var find = '<div class="pop full" data-show="6"><div class="kd"><div class="kt"><span class="kc">' + L("folder", 13) + 'Сховище</span><small>Ctrl+K шукає і тут, і на платформі</small>' + L("x", 16, "margin-left:auto") + '</div><div class="ki">' + L("search", 17) + 'окупність</div><div class="kl"><small>Знайдено: 3</small><div class="kg">Файли</div><div data-hl="6">' + hit("Окупність_СЕС_150кВт.pdf", "у «Термобуд»") + hit("Кейси_СЕС.pdf", "у «01_Компанія»") + '</div><div class="kg">Теки</div><div class="kr">' + L("aright", 15) + '<b>Окупність</b></div><div class="kg">Агент</div><div class="kr ag">' + L("spark", 15, "color:#7C3AED") + "<b>Запитати агента: окупність</b></div></div></div></div>";
  var en = function (n, w) { return '<div class="en2" data-doc="' + n + '"><span><b>' + n + "</b><small>" + w + "</small></span>" + L("ext", 14) + "</div>"; };
  var ai = '<div class="pop" data-show="7" style="right:24px;top:24px;bottom:24px;width:470px;display:flex;flex-direction:column;overflow:hidden;border:1px solid #E6E6E6"><div class="agh"><i>' + L("spark", 16) + '</i><span><b>Підготуй презентацію про нас…</b><small>Aita</small></span></div><div class="agb"><div class="agq">Підготуй презентацію про нас для Термобуду</div><div class="ags">' + L("check", 15) + "Шукаю дані компанії</div><div class=\"ags\">" + L("check", 15) + 'Читаю файли</div><div class="agc" data-hl="7"><div class="agt"><code>file.create</code>Створено файл</div>' + en("Презентація_Термобуд.pdf", "04_Комерція · 8 слайдів") + en("Про_компанію.pdf", "джерело · 01_Компанія") + en("Кейси_СЕС.pdf", "джерело · 01_Компанія") + '</div><p>Презентацію зібрано з файлів компанії. Натисніть на файл, і він відкриється.</p></div></div>';

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
    name: "Сховище",
    promise: "Усі документи компанії в одному місці",
    lead: "Файли лежать там, де їх шукатиме команда, а AI-агент бере звідси дані для документів і презентацій.",
    hero: root,
    flow: [["file", "Файл"], ["folder", "Папка"], ["lock", "Доступ"], ["link", "Посилання"], ["star", "AI"]],
    diff: [["star", "Дані для AI", "Агент бере зі сховища дані компанії, коли готує документи."], ["link", "Без акаунта", "Папкою можна поділитися за посиланням із підрядником чи банком."], ["lock", "Доступ до папки", "Обмеження діє на всю папку, а посилання не відкриває фінансові документи."]],
    steps: [["Папки", "Свої папки є в компанії, у кожному проєкті й проєктній компанії (SPV)."], ["Файли", "Поруч із назвою видно дату й розмір. Натисніть на файл, і він відкриється."], ["Перегляд", "Файл відкривається у вікні платформи, зі сторінками й масштабом."], ["Дії", "Завантажити, перейменувати, перемістити чи позначити для пам'яті платформи."], ["Доступ", "Папку можна обмежити для окремих команд і людей."], ["Посилання", "Людина відкриває папку за посиланням без реєстрації, а ви вирішуєте, скільки воно діє."], ["Пошук", "Ctrl+K шукає в назвах файлів і в їхньому тексті."], ["AI-агент", "Агент бере дані зі сховища й готує презентацію чи документ."]],
    dim: [],
    scene: root + files + menu + prev + share + link + find + ai,
    ai: [["Пам'ять", "Файли, позначені для пам'яті, асистент враховує у відповідях.", `<small>Прайс_послуг_2026.pdf</small><div class="msg">Проіндексовано для пам'яті платформи.</div>`],
      ["Документи", "Агент готує презентацію чи комерційну пропозицію з даних компанії.", `<small>Запит до агента</small><br>Склади пропозицію для Термобуду<div class="msg">Беру дані з папки 01_Компанія.</div>`],
      ["Пошук", "Запитайте, де лежить файл, і асистент покаже папку.", `<small>Запит</small><br>Де договір із Термобудом?<div class="msg">02_Договори / Термобуд.</div>`]],
    more: `<div class="tall"><h3>Завантаження</h3><div class="w">${row("up", "Перетягніть файли й папки у вікно")}<hr>${row("file", "Замінити (нова версія)")}${row("file", "Залишити обидва")}${row("file", "Пропустити їх")}</div></div>
      <div><h3>Версії</h3><div class="w">${row("file", "Договір_Термобуд_v3.pdf", "нова версія", "Договір_Термобуд_v3.pdf")}</div></div>
      <div><h3>ZIP-архів</h3><div class="w">${row("zip", "Завантажити папку одним архівом")}</div></div>
      <div class="tall"><h3>Телефон</h3><div class="w">${row("phone", "Кейси_СЕС.pdf", "3 з 12", "Кейси_СЕС.pdf")}<hr>${row("down", "Завантажити")}${row("share", "Поділитися")}${row("ext", "Відкрити")}</div></div>
      <div><h3>Файли з чату</h3><div class="w">${row("chat", "Папка Chat", "12")}${row("folder", "Складаються автоматично")}</div></div>
      <div><h3>Проєкти й SPV</h3><div class="w">${row("folder", "Термобуд", "24")}${row("folder", "SPV Схід", "9")}</div></div>`,
    access: [["Відкрита папка", "За замовчуванням її бачать усі, хто має доступ до компанії чи проєкту."], ["Обмежена папка", "Обмеження діє на папку й увесь її вміст."], ["Посилання", "Обмежені підпапки й фінансові документи лишаються закритими."]],
    start: [["Папки", "Створіть папки для вашої компанії."], ["Файли", "Завантажте документи й дані про компанію."], ["Доступ", "Обмежте папки, які бачать не всі."]],
    faq: [["Що таке модуль «Сховище» і навіщо він компанії?", "Це місце для всіх файлів компанії, проєктів і SPV з папками, доступами й пошуком за вмістом."], ["Як AI-агент використовує сховище?", "Агент читає файли, до яких має доступ, і бере звідти дані для документів і презентацій."], ["Чи можна поділитися папкою з людиною без акаунта?", "Так. Посилання працює без входу, строк дії задаєте ви."], ["Що станеться, якщо прикріпити файл до завдання?", "Копія не створюється: завдання посилається на файл у сховищі."], ["Чи потрібно доплачувати за модуль?", "Ні. «Сховище» входить у кожен пакет."]],
    final: "Покажемо, як зібрати документи компанії в одному місці"
  });
})();
