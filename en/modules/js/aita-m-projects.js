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
    name: "Projects",
    promise: "Every plant in one card: from the land plot to operation",
    lead: "A project's stages, money, tasks and files are gathered in its card, so the team and the investor look at one place.",
    hero: list,
    flow: [["folder", "Project"], ["target", "Stages"], ["chart", "Money"], ["check", "Work"], ["lock", "Access"]],
    diff: [["folder", "One card", "Tasks, files, goal and chat live in the project, not in five different apps."], ["chart", "Money right away", "IRR, NPV and payback are calculated by the financial model, not entered by hand."], ["target", "The path is visible", "The work map shows what is done and who it is stuck with."]],
    steps: [["Portfolio", "All the company's plants with filters by type, stage and country. Total capacity at the top."], ["Stages", "The bar shows where the project is now and what comes next: from lead to operation."], ["Overview", "IRR, NPV, CAPEX and payback on the first screen, with what is overdue below."], ["Tasks", "Project tasks with assignee and due date; overdue ones are visible at once."], ["DataRoom", "Project files in folders: input data, grid connection terms, contracts, reports, 3D and documentation."], ["Goal", "Project goals with deadlines and status, next to the work."], ["Chat", "The project's conversation, from which Aita creates tasks."], ["Work map", "The plant recipe breaks the path from brief to operation into 52 steps."], ["Permissions", "The investor, contractor and team see exactly what was shared with them."]],
    dim: [],
    scene: list + sc(1, "ov", hl("stage", 1)) + sc(2, "ov", hl("kpi", 2)) + sc(3, "tasks", hl("tasks", 3)) + sc(4, "dr", hl("dr", 4)) + sc(5, "goal", hl("goal", 5)) + sc(6, "chat", hl("chat", 6)) + sc(7, "wm", hl("wm", 7)) + sc(8, "adm", hl("inv", 8)),
    css: css,
    ai: [["Project status", "The agent tells you what stage the plant is at and what is blocking it.", `<small>Request to the agent</small><br>What is blocking the project right now?<div class="msg">The EPC contract is not signed. Owner: Oleh Martyniuk.</div>`],
      ["Passport", "The agent suggests passport values with a source, and you accept them.", `<small>Request to the agent</small><br>Fill in the passport from the grid connection terms<div class="msg">Connection capacity 7.2 MW. Source: TC.pdf</div>`],
      ["Portfolio", "The agent compiles a snapshot across all the company's plants.", `<small>Request to the agent</small><br>How many MW do we have at RTB?<div class="msg">One project, 8.5 MW.</div>`]],
    more: `<div class="tall"><h3>Filters</h3><div class="w">${L.row("filter", "Type")}${L.row("compass", "Stage")}${L.row("globe", "Country")}${L.row("users", "Owner and manager")}${L.row("pin", "Tags: PPA, 2026, portfolio")}</div></div>
      <div><h3>Currency</h3><div class="w">${L.row("dollar", "Project currency or euro")}</div></div>
      <div><h3>Maturity flags</h3><div class="w">${L.row("ccheck", "Land, connection, offtake, EPC")}</div></div>
      <div class="tall"><h3>Live plant data</h3><div class="w">${L.row("cloud", "Deye")}${L.row("cloud", "Huawei FusionSolar")}${L.row("cloud", "Sungrow iSolarCloud")}${L.row("clock", "Updated every 5 minutes")}</div></div>
      <div><h3>Client view</h3><div class="w">${L.row("share", "3D plant and CAPEX via a link")}</div></div>
      <div><h3>Agent suggestions</h3><div class="w">${L.row("spark", "Passport values with a source")}</div></div>`,
    access: [["Company", "A project belongs to the company; access is granted to each project separately."], ["Roles", "Owner, admin, write and read."], ["SPV", "Project access carries over to the SPV, so the investor sees their plants."]],
    start: [["Project", "Create a project or convert a won lead."], ["Passport", "Fill in the passport yourself or hand it to the agent."], ["Team", "Give access to the team, contractor and investor."]],
    faq: [["What is the Projects module?", "It is a card for every plant: stages, passport, money, work and access."], ["Can I show a project to a client?", "Yes, via a link: the 3D plant, CAPEX and documents, without an account."], ["Where do IRR and NPV come from?", "They are calculated by the project's financial model, not entered by hand."], ["What is the work map?", "The plant's path from brief to commissioning. The project agent works from it."], ["Do I have to pay extra for the module?", "No. Projects is included in every package."]],
    final: "We'll show your project in an Aita card"
  });
  // Блок «Що входить у проєкт»: модулі, які відкриваються з картки, показуємо плитками-посиланнями
  var IN = ["Cost estimate", "Financial model", "Energy Design (3D design)", "Single-line diagram", "BESS simulator", "Project documentation", "Project builder", "Solution boxes", "SPV"];
  var addIn = function () {
    var how = [].slice.call(document.querySelectorAll(".l4 section")).filter(function (s) { var h = s.querySelector("h2"); return h && h.textContent.trim() === "How it works"; })[0];
    if (!how) return setTimeout(addIn, 60);
    if (document.querySelector(".l4 .pjin")) return;
    var s = document.createElement("section"); s.className = "pjin md-next";
    s.innerHTML = '<h2>What a project includes</h2><div class="nb">' + IN.filter(function (k) { return typeof IDX !== "undefined" && IDX[k]; }).map(function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + "</span><span><b>" + k + "</b><small>" + (D[k] || IDX[k].g) + "</small></span></a>"; }).join("") + "</div>";
    how.parentNode.insertBefore(s, how.nextSibling);
  };
  addIn();

})();
