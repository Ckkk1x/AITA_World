// Сторінка модуля «Проєкти». Вигляд скопійовано зі справжньої платформи (проєкт marketing),
// дані — псевдопроєкт «СЕС + BESS, 8,5 МВт» (див. AITA_Site/Проєкти_псевдопроєкт_дані.md), решта демо.
(function () {
  var L = LU;
  var av = function (i, c) { return '<span class="av" style="width:22px;height:22px;font-size:9px;background:' + (c || "#E8F0F7") + '">' + i + "</span>"; };
  // Справжній інтерфейс платформи: копії сторінок у ui_pj/ (збирає energy_mockup/build_ui_pj.py),
  // дані псевдопроєкту підставлено у відкритій сторінці платформи, на платформі нічого не змінено.
  var B = window.PJBOX || {};
  var fr = function (st) { return '<iframe class="pjfr" src="ui_pj/' + st + '.html?v=1611" tabindex="-1" loading="eager"></iframe>'; };
  var hl = function (k, n) { var r = B[k]; return r ? '<div class="pjhl" data-hl="' + n + '" style="left:' + r[0] + 'px;top:' + r[1] + 'px;width:' + r[2] + 'px;height:' + r[3] + 'px"></div>' : ""; };
  // .pjz — обгортка екрана (наближення прибрано на прохання Ліни 16.11, як на інших модулях)
  var sc = function (n, st, h) { return '<div class="pop pg0" data-show="' + n + '"><div class="pjz">' + fr(st) + (h || "") + "</div></div>"; };
  var list = '<div class="pjz">' + fr("list") + hl("list", 0) + "</div>";
  var css = `
.l4 .pjfr{position:absolute;left:0;top:0;width:1240px;height:860px;border:0;background:#FAFAFA;pointer-events:none}
.l4 .pjhl{position:absolute;pointer-events:none;border-radius:12px}.l4 .pjhl.hon{background:rgba(0,80,214,.04)!important}
.l4 .pjz{position:absolute;left:0;top:0;width:1240px;height:860px;transform-origin:0 0;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.l4 .rcs .sc{overflow:hidden}.l4 .rcs .pop.pg0{overflow:hidden}
@media(prefers-reduced-motion:reduce){.l4 .pjz{transition:none}}
.l4 .pjin .nb{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
`;
  MP({
    name: "Проєкти",
    promise: "Кожна станція в одній картці: від ділянки до експлуатації",
    lead: "Етапи, гроші, задачі й файли проєкту зібрані в картці, тому команда й інвестор дивляться в одне місце.",
    hero: list,
    flow: [["folder", "Проєкт"], ["target", "Етапи"], ["chart", "Гроші"], ["check", "Робота"], ["lock", "Доступ"]],
    diff: [["folder", "Одна картка", "Задачі, файли, ціль і чат лежать у проєкті, а не в п'яти програмах."], ["chart", "Гроші одразу", "IRR, NPV і окупність рахує фінмодель, вручну їх не вводять."], ["target", "Видно шлях", "Карта робіт показує, що готово й на кому зупинилось."]],
    steps: [["Портфель", "Усі станції компанії з фільтрами за типом, етапом і країною. Угорі сумарна потужність."], ["Етапи", "Смуга показує, де проєкт зараз і що далі: від ліда до експлуатації."], ["Огляд", "IRR, NPV, CAPEX і окупність на першому екрані, а під ними те, що прострочено."], ["Задачі", "Задачі проєкту з виконавцем і строком, прострочені видно одразу."], ["DataRoom", "Файли проєкту в папках: вихідні дані, ТУ, договори, протоколи, 3D і документація."], ["Ціль", "Цілі проєкту зі строками й статусом поруч із роботою."], ["Чат", "Переписка проєкту, а Aita з неї ставить задачі."], ["Карта робіт", "Рецепт станції розкладає шлях від брифу до експлуатації на 52 кроки."], ["Доступи", "Інвестор, підрядник і команда бачать рівно те, що їм відкрили."]],
    dim: [],
    scene: list + sc(1, "ov", hl("stage", 1)) + sc(2, "ov", hl("kpi", 2)) + sc(3, "tasks", hl("tasks", 3)) + sc(4, "dr", hl("dr", 4)) + sc(5, "goal", hl("goal", 5)) + sc(6, "chat", hl("chat", 6)) + sc(7, "wm", hl("wm", 7)) + sc(8, "adm", hl("inv", 8)),
    css: css,
    ai: [["Стан проєкту", "Агент розповідає, на якому етапі станція і що її блокує.", `<small>Запит до агента</small><br>Що зараз блокує проєкт?<div class="msg">Не підписано договір EPC. Відповідальний Олег Мартинюк.</div>`],
      ["Паспорт", "Агент пропонує значення паспорта з джерелом, а ви приймаєте.", `<small>Запит до агента</small><br>Заповни паспорт із ТУ<div class="msg">Потужність приєднання 7,2 МВт. Джерело: ТУ.pdf</div>`],
      ["Портфель", "Агент збирає зріз по всіх станціях компанії.", `<small>Запит до агента</small><br>Скільки МВт у нас на RTB?<div class="msg">Один проєкт, 8,5 МВт.</div>`]],
    more: `<div class="tall"><h3>Фільтри</h3><div class="w">${L.row("filter", "Тип")}${L.row("compass", "Етап")}${L.row("globe", "Країна")}${L.row("users", "Власник і менеджер")}${L.row("pin", "Теги: PPA, 2026, портфель")}</div></div>
      <div><h3>Валюта</h3><div class="w">${L.row("dollar", "Валюта проєкту або євро")}</div></div>
      <div><h3>Прапорці зрілості</h3><div class="w">${L.row("ccheck", "Земля, приєднання, збут, EPC")}</div></div>
      <div class="tall"><h3>Живі дані станції</h3><div class="w">${L.row("cloud", "Deye")}${L.row("cloud", "Huawei FusionSolar")}${L.row("cloud", "Sungrow iSolarCloud")}${L.row("clock", "Оновлення кожні 5 хвилин")}</div></div>
      <div><h3>Показ клієнту</h3><div class="w">${L.row("share", "3D-станція й CAPEX за посиланням")}</div></div>
      <div><h3>Пропозиції агента</h3><div class="w">${L.row("spark", "Значення паспорта з джерелом")}</div></div>`,
    access: [["Компанія", "Проєкт належить компанії, доступ видають до кожного проєкту окремо."], ["Ролі", "Власник, адмін, запис і читання."], ["SPV", "Доступи проєкту переходять у SPV, тож інвестор бачить свої станції."]],
    start: [["Проєкт", "Створіть проєкт або переведіть виграного ліда."], ["Паспорт", "Заповніть паспорт самі або доручіть агенту."], ["Команда", "Відкрийте доступ команді, підряднику й інвестору."]],
    faq: [["Що таке модуль «Проєкти»?", "Це картка кожної станції: етапи, паспорт, гроші, робота й доступи."], ["Чи можна показати проєкт клієнту?", "Так, за посиланням: 3D-станція, CAPEX і документи без облікового запису."], ["Звідки беруться IRR і NPV?", "Їх рахує фінансова модель проєкту, вручну вони не вводяться."], ["Що таке карта робіт?", "Шлях станції від брифу до введення в експлуатацію. За нею працює агент проєкту."], ["Чи потрібно доплачувати за модуль?", "Ні. «Проєкти» входять у кожен пакет."]],
    final: "Покажемо ваш проєкт у картці Aita"
  });
  // Блок «Що входить у проєкт»: модулі, які відкриваються з картки, показуємо плитками-посиланнями
  var IN = ["Кошторис", "Фінансова модель", "Energy Design (3D-дизайн)", "Однолінійна схема", "BESS-симулятор", "Проєктна документація", "Конструктор проєктів", "Коробки рішень", "SPV"];
  var addIn = function () {
    var how = [].slice.call(document.querySelectorAll(".l4 section")).filter(function (s) { var h = s.querySelector("h2"); return h && h.textContent.trim() === "Як це працює"; })[0];
    if (!how) return setTimeout(addIn, 60);
    if (document.querySelector(".l4 .pjin")) return;
    var s = document.createElement("section"); s.className = "pjin md-next";
    s.innerHTML = '<h2>Що входить у проєкт</h2><div class="nb">' + IN.filter(function (k) { return typeof IDX !== "undefined" && IDX[k]; }).map(function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + "</span><span><b>" + k + "</b><small>" + (D[k] || IDX[k].g) + "</small></span></a>"; }).join("") + "</div>";
    how.parentNode.insertBefore(s, how.nextSibling);
  };
  addIn();

})();
