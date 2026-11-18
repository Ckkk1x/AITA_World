// Випадне меню «Модулі» в шапці сайту, розстановка як в Odoo: 4 колонки × 2 ряди, внизу посилання.
(function () {
  var SOON = "згодом";
  var DATA = [["Продажі", "#0086CC", ["Ліди", "Контакти", "Організації", "Замовлення", "Керування продуктами", "Групи користувачів"]], ["Проєкти", "#1E7A2E", ["Проєкти", "Конструктор проєктів", "Коробки рішень", "Ринок робіт", "Кабінет виконавця"]], ["Енергетика", "#8A5C00", ["Energy Design (3D-дизайн)", "Однолінійна схема", "BESS-симулятор", "Кошторис", "Проєктна документація", "Фінансова модель"]], ["Робота команди", "#7C3AED", ["Завдання", "Чат", "Календар", "Нотатник зустрічей", "Пошта", "Черга"]], ["Документи", "#0E7490", ["Сховище", "Договори", "База знань", "Нотатки", "Драфти", "Мої питання"]], ["Управління", "#D62828", ["Панель огляду", "Огляд", "Візія і місія", "Цілі", "Планування", "Огляд прогресу"]], ["Фінанси і стратегія", "#0050D6", ["Фінанси", "SPV", "Бізнес-плани", "Конкуренти", "Підсумки тижня", "Журнал рішень"]], ["AI та спільнота", "#5B2FC9", ["AI-асистент", "Агент", "Пам'ять платформи", "Конектори й MCP", "Маркетплейс плагінів", "Мережа", "Компанії"]]];
  var PAGE = {"Ліди": "leads", "Контакти": "contacts", "Організації": "organizations", "Замовлення": "orders", "Керування продуктами": "products", "Групи користувачів": "user-groups", "Проєкти": "projects", "Ринок робіт": "work-market", "Кабінет виконавця": "contractor", "Завдання": "tasks", "Чат": "chat", "Календар": "calendar", "Нотатник зустрічей": "meeting-notes", "Пошта": "mail", "Черга": "queue", "Сховище": "storage", "Договори": "contracts", "База знань": "knowledge-base", "Нотатки": "notes", "Драфти": "drafts", "Мої питання": "my-questions", "Панель огляду": "dashboard", "Огляд": "overview", "Візія і місія": "vision", "Цілі": "goals", "Планування": "planning", "Огляд прогресу": "progress-review", "Фінанси": "finance", "SPV": "spv", "Бізнес-плани": "business-plans", "Конкуренти": "competitors", "Підсумки тижня": "weekly-summary", "Журнал рішень": "decisions", "Маркетплейс плагінів": "plugins", "Мережа": "network", "Компанії": "companies"};
  var B = "/uk/";
  var link = document.querySelector('body>nav .links a[href="modules"],body>nav .links a[href="../modules"]');
  if (!link) return;
  var btn = link.parentElement; btn.id = "mdBtn";
  var chev = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") center/contain no-repeat";
  var st = document.createElement("style");
  st.textContent = 'body>nav{z-index:72}.links>#mdBtn{position:relative;cursor:pointer}.links>#mdBtn:after{content:""!important;display:inline-block;width:14px;height:14px;margin-left:4px;vertical-align:-3px;background:currentColor;-webkit-mask:' + chev + ';mask:' + chev + ';transition:transform .2s}.links>#mdBtn.on:after{transform:rotate(180deg)}.links>#mdBtn.on{color:#111}'
    + '#mdPop{position:fixed;left:50%;width:min(1000px,calc(100vw - 32px));z-index:70;background:#fff;border-radius:16px;box-shadow:0 18px 50px rgba(0,0,0,.12),0 0 0 1px rgba(0,0,0,.05);opacity:0;transform:translate(-50%,6px);pointer-events:none;transition:opacity .15s,transform .15s;max-height:calc(100vh - 90px);overflow-y:auto;font-family:"Golos Text",system-ui,sans-serif}#mdPop.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}#mdPop:before{content:"";position:fixed;left:0;right:0;height:20px;margin-top:-20px}'
    + '#mdPop .in{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px 36px;padding:22px 26px 16px}'
    + '#mdPop h6{margin:0 0 8px;padding-bottom:6px;font-size:14px;line-height:1.3;font-weight:600;letter-spacing:.02em;text-transform:uppercase;color:#111;border-bottom:1px solid #E6E6E6}'
    + '#mdPop .gr a{display:block;padding:4px 0;font-size:14px;line-height:1.3;color:#444;text-decoration:none}#mdPop .gr a:hover{color:#111}#mdPop .gr .soon{display:block;padding:4px 0;font-size:14px;line-height:1.3;color:#b0b0b0;cursor:default}#mdPop .gr .soon i{font-style:normal;margin-left:6px;font-size:11px;font-weight:500;padding:1px 7px;border-radius:999px;background:#f2f2f2;color:#8a8a8a}'
    + '#mdPop .ft{display:flex;justify-content:center;gap:40px;padding:11px 16px;border-top:1px solid #F0F0F0}#mdPop .ft a{font-size:14px;color:#444;text-decoration:none}#mdPop .ft a:hover{color:#111}'
    + '@media(max-width:900px){#mdPop .in{grid-template-columns:repeat(2,minmax(0,1fr))}}';
  document.head.appendChild(st);
  var url = function (m) { return B + "modules/" + PAGE[m]; };
  var pop = document.createElement("div"); pop.id = "mdPop";
  pop.innerHTML = '<div class="in">' + DATA.map(function (g) {
    return '<div class="gr"><h6>' + g[0] + '</h6>' + g[2].map(function (m) { return PAGE[m] ? '<a href="' + url(m) + '">' + m + '</a>' : '<span class="soon">' + m + '<i>' + SOON + '</i></span>'; }).join("") + '</div>';
  }).join("") + '</div><div class="ft"><a href="' + B + 'modules">Усі модулі</a><a href="' + B + 'energy">Aita для енергетики</a><a href="' + B + 'pricing">Ціни</a></div>';
  document.body.appendChild(pop);
  var t = null;
  var place = function () { var n = document.querySelector("nav"), y = n ? Math.max(0, n.getBoundingClientRect().bottom) : 60; pop.style.top = (y + 8) + "px"; };
  var open = function () { clearTimeout(t); place(); pop.classList.add("on"); btn.classList.add("on"); };
  var close = function () { pop.classList.remove("on"); btn.classList.remove("on"); };
  var later = function () { clearTimeout(t); t = setTimeout(close, 220); };
  btn.addEventListener("mouseenter", open); btn.addEventListener("mouseleave", later);
  pop.addEventListener("mouseenter", function () { clearTimeout(t); }); pop.addEventListener("mouseleave", later);
  // клік по слову веде на сторінку «Усі модулі», меню відкривається наведенням; інші пункти шапки закривають його одразу
  document.querySelectorAll("nav .links>*").forEach(function (x) { if (x !== btn && x.tagName !== "STYLE") x.addEventListener("mouseenter", function () { clearTimeout(t); close(); }); });
  document.addEventListener("click", function (e) { if (!pop.contains(e.target) && !btn.contains(e.target)) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  addEventListener("scroll", function () { if (pop.classList.contains("on")) place(); }, { passive: true });
})();
