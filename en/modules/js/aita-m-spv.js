// Сторінка модуля «SPV». Вигляд — копія справжньої картки SPV платформи (ui_spv/, збирає energy_mockup/build_ui_spv.py),
// дані вигадані: SPV «Термобуд Енерджі», власник станції СЕС + BESS 8,5 МВт з модуля «Проєкти». На платформі нічого не змінено.
(function () {
  var L = LU, B = window.SPVBOX || {};
  var fr = function (st) { return '<iframe class="pjfr" src="ui_spv/' + st + '.html?v=1611b" tabindex="-1" loading="eager"></iframe>'; };
  var hl = function (k, n) { var r = B[k]; return r ? '<div class="pjhl" data-hl="' + n + '" style="left:' + r[0] + 'px;top:' + r[1] + 'px;width:' + r[2] + 'px;height:' + r[3] + 'px"></div>' : ""; };
  var sc = function (n, st, h) { return '<div class="pop pg0" data-show="' + n + '"><div class="pjz">' + fr(st) + (h || "") + "</div></div>"; };
  var first = '<div class="pjz">' + fr("ov") + hl("stage", 0) + "</div>";
  var css = `
.l4 .pjfr{position:absolute;left:0;top:0;width:1240px;height:860px;border:0;background:#FAFAFA;pointer-events:none}
.l4 .pjhl{position:absolute;pointer-events:none;border-radius:12px}.l4 .pjhl.hon{background:rgba(0,80,214,.04)!important}
.l4 .pjz{position:absolute;left:0;top:0;width:1240px;height:860px;transform-origin:0 0;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.l4 .rcs .sc{overflow:hidden}.l4 .rcs .pop.pg0{overflow:hidden}
@media(prefers-reduced-motion:reduce){.l4 .pjz{transition:none}}
`;
  MP({
    name: "SPV",
    promise: "Owners, signatories, licenses and payouts of each SPV in one card",
    lead: "When a buyer or bank asks for documents, the company sends them from the card instead of spending weeks collecting them from lawyers and accountants.",
    hero: first,
    flow: [["folder", "Company"], ["chart", "Capital"], ["check", "Decisions"], ["shield", "Licenses"], ["lock", "Investor"]],
    diff: [["shield", "Licenses in the calculation", "The BESS simulator takes the SPV's licenses into account. Without TSO prequalification, the calculation excludes FCR market revenue."],
      ["check", "You know who signs", "The card shows signatories and their authority periods, so a counterparty learns this before the contract, not after."],
      ["lock", "Investor portfolio", "Access to linked projects carries over to the SPV, so the investor sees their plants, payouts and documents."]],
    steps: [["Phases", "The phase bar shows where the SPV is now: formation, fundraising, operation or liquidation."],
      ["Plants", "Plants owned by the SPV, with capacity and stage. Total capacity, CAPEX and IRR at the top."],
      ["Owners", "The platform calculates owners' shares from the investment rounds; they are not entered by hand. A share sale deal is shown here too."],
      ["Payouts", "Dividends, loan repayments and interest with dates and amounts."],
      ["Signatories", "Who has signing authority and up to what amount. When authority expires, the record stays in the history."],
      ["Decisions", "A log of board and general meeting decisions. Votes are split in proportion to shares, and major changes need 75%."],
      ["Licenses", "Licenses and TSO prequalifications with number and validity period. The charter and registry extract are kept alongside."],
      ["Access", "The investor and auditor view the SPV without the right to change data. A contractor gets edit access."]],
    dim: [],
    scene: first + sc(1, "pf", hl("pf", 1)) + sc(2, "fin", hl("own", 2)) + sc(3, "find", hl("dist", 3)) + sc(4, "gov", hl("sign", 4)) + sc(5, "gov", hl("dec", 5)) + sc(6, "cmp", hl("lic", 6)) + sc(7, "adm", hl("inv", 7)),
    css: css,
    ai: [["Who signs", "The agent tells you who has signing authority today and up to what amount.", `<small>Request to the agent</small><br>Who can sign the EPC contract?<div class="msg">Oleh Martyniuk, director, alone. Board decision of 05.11.</div>`],
      ["Documents for the buyer", "The agent collects the charter, extract, ownership structure and licenses so a buyer can review the SPV.", `<small>Request to the agent</small><br>Collect the SPV documents for buyer due diligence<div class="msg">Charter, registry extract, shareholders' agreement and four licenses. A current valuation is missing.</div>`],
      ["FCR market", "The agent checks the SPV's licenses before calculating storage revenue.", `<small>Request to the agent</small><br>Can a 2 MW BESS operate on the FCR market?<div class="msg">Yes, the TSO prequalification for FCR is valid, 2 MW.</div>`]],
    more: `<div class="tall"><h3>SPV type</h3><div class="w">${L.row("folder", "Project finance")}${L.row("users", "Joint venture")}${L.row("building", "Other purpose")}</div></div>
      <div><h3>Virtual SPV</h3><div class="w">${L.row("filepen", "A company draft before registration")}</div></div>
      <div><h3>Valuation</h3><div class="w">${L.row("trendup", "Each valuation is kept separately")}</div></div>
      <div class="tall"><h3>Licenses</h3><div class="w">${L.row("ccheck", "Generator, supplier, trader")}${L.row("ccheck", "Storage operator")}${L.row("shield", "TSO prequalification: FCR, aFRR, mFRR")}${L.row("ccheck", "Aggregator and guarantees of origin")}</div></div>
      <div><h3>Founding documents</h3><div class="w">${L.row("folder", "Charter and extract in the Dataroom")}</div></div>
      <div><h3>Via the agent</h3><div class="w">${L.row("spark", "The agent manages owners, rounds and signatories")}</div></div>`,
    access: [["Company", "An SPV belongs to the company that created it. It can be moved to another company along with its owners."], ["Roles", "Four access levels: from owner to view-only. View-only suits auditors and investors."], ["Projects", "When a project is linked to an SPV, its access carries over to the SPV."]],
    start: [["SPV", "Create an SPV or a virtual draft before the company is registered."], ["Plants", "Link the projects the SPV owns."], ["Owners", "Add owners, investment rounds and signatories."]],
    faq: [["What is the SPV module?", "It is the card of the special purpose vehicle that owns the plants. It holds everything the bank, investor and buyer ask about."],
      ["What is a virtual SPV?", "A draft of a company not yet registered. Rounds and signatories in it mark an intention, not a legal fact."],
      ["Can I show an SPV to an investor?", "Yes. With “Read” access the investor sees plants, payouts and documents but changes nothing."],
      ["Why are licenses in the card?", "The BESS simulator uses them in the calculation. Without TSO prequalification, FCR market revenue is not counted."],
      ["Do I have to pay extra for the module?", "No. SPV is included in every package."]],
    final: "We'll show you how to manage your company's SPVs in Aita"
  });
})();
