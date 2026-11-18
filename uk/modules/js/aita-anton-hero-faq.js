// Шапка й блок «Часті питання» з драфту Антона (drd_nwfQxnPMJcAphECi, варіант B «з правками»).
// Шапка: напис «входять у кожен пакет» і кнопки стоять у лівій колонці під описом, без прилипання.
// Питання: ліворуч мітка й великий заголовок, праворуч акордеон, відкрите одне питання за раз.
// Підключати після aita-hero-h6.js. Послідовність під шапкою лишається наша.
(function () {
  var r = document.querySelector(".l4"); if (!r) return;
  var st = document.createElement("style");
  st.textContent =
    // шапка
    '.l4.l4 .h3row{align-items:center;margin-bottom:128px!important}.l4.l4 .h3row>div:first-child{padding-top:0}'
    + '.l4.l4 .h3row .flow,.l4.l4 .flow{margin-top:0!important;margin-bottom:0!important}'
    + '.l4 .h3row #hwBar{position:static;width:auto;margin:28px 0 0;background:none;border:0;box-shadow:none;z-index:auto}'
    + '.l4 .h3row #hwBar .hw-in{max-width:none;margin:0;padding:0;justify-content:flex-start;flex-wrap:wrap;gap:12px}'
    + '.l4 .h3row #hwBar .hw-tx,.l4 .h3row #hwBar.stuck .hw-tx{flex-basis:100%;margin:0;max-width:none;white-space:normal;opacity:1;font-size:16px;line-height:24px;color:#737373}'
    + '.l4.l4 #hwBarS+section{padding-top:128px}'
    // питання
    + '.afaq{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:64px;align-items:start}'
    + '.afaq-h{position:sticky;top:96px}'
    + '.afaq-l{display:inline-block;font-size:13px;font-weight:500;padding:4px 10px;border:1px solid #E6E6E6;border-radius:8px;color:#4D4D4D;background:#fff}'
    + '.l4.l4 .afaq-h h2{margin:20px 0 0;text-wrap:balance;font-size:56px;line-height:1.05;letter-spacing:-.03em;font-weight:500;color:#111;text-align:left}'
    + '.l4.l4 .afaq-h h2 span{color:#8A8A8A}'
    + '.afaq-list{border-top:1px solid #E6E6E6}.afaq-i{border-bottom:1px solid #E6E6E6}'
    + '.afaq-q{all:unset;box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px 0;font-size:20px;line-height:1.35;font-weight:500;color:#111;cursor:pointer}'
    + '.afaq-q:focus-visible{outline:2px solid #111;outline-offset:4px;border-radius:4px}'
    + '.afaq-b{flex:none;width:32px;height:32px;border-radius:50%;background:#F2F2F2;position:relative;transition:background .25s,transform .35s cubic-bezier(.2,.7,.2,1)}'
    + '.afaq-b:before,.afaq-b:after{content:"";position:absolute;left:50%;top:50%;width:12px;height:1.6px;margin:-.8px 0 0 -6px;background:#111;border-radius:2px;transition:background .25s}'
    + '.afaq-b:after{transform:rotate(90deg)}.afaq-q:hover .afaq-b{background:#E8E8E8}'
    + '.afaq-i.on .afaq-b{background:#111;transform:rotate(135deg)}.afaq-i.on .afaq-b:before,.afaq-i.on .afaq-b:after{background:#fff}'
    + '.afaq-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s cubic-bezier(.2,.7,.2,1)}.afaq-a>div{overflow:hidden}'
    + '.l4 .afaq-a p{margin:0;padding:0 56px 24px 0;color:#4D4D4D;font-size:16px;line-height:1.6;opacity:0;transform:translateY(-6px);transition:opacity .25s,transform .35s}'
    + '.afaq-i.on .afaq-a{grid-template-rows:1fr}.l4 .afaq-i.on .afaq-a p{opacity:1;transform:none;transition-delay:.08s}'
    + '@media(prefers-reduced-motion:reduce){.afaq-a,.l4 .afaq-a p,.afaq-b{transition:none}}'
    + '@media(max-width:900px){.l4.l4 .h3row{margin-bottom:32px!important}}'
    + '@media(max-width:760px){.l4 .h3row #hwBar .hw-in{flex-direction:column;align-items:stretch}.l4 .h3row #hwBar .hw-tx{display:block}'
    + '.afaq{grid-template-columns:1fr;gap:32px}.afaq-h{position:static}.l4.l4 .afaq-h h2{font-size:32px}.afaq-q{font-size:17px;padding:20px 0}.l4 .afaq-a p{padding-right:0}}';
  document.body.appendChild(st);

  // шапка: напис і кнопки переїжджають під опис
  var bar = document.getElementById("hwBar"), col = r.querySelector(".h3row>div:first-child");
  if (bar && col) { col.appendChild(bar); bar.classList.remove("stuck"); }
  // напис над кнопками: наголос на кількості модулів, а не на одному модулі (Ліна 13.11)
  var tx = bar && bar.querySelector(".hw-tx");
  if (tx) tx.innerHTML = '<b style="font-weight:500;color:#111">48 модулів</b> у кожному пакеті.';

  // питання: перебудовуємо наш список <details> у блок Антона
  [].slice.call(r.querySelectorAll("section")).forEach(function (s) {
    var h = s.querySelector("h2"), ds = s.querySelectorAll("details");
    if (!h || !ds.length || !h.textContent.indexOf("Питання й відповіді") >= 0) return;
    var items = [].map.call(ds, function (d, i) {
      var q = d.querySelector("summary").innerHTML, a = d.querySelector("p") ? d.querySelector("p").innerHTML : "";
      return '<div class="afaq-i' + (i ? "" : " on") + '"><button class="afaq-q" type="button" aria-expanded="' + (i ? "false" : "true") + '">' + q
        + '<span class="afaq-b" aria-hidden="true"></span></button><div class="afaq-a"><div><p>' + a + "</p></div></div></div>";
    }).join("");
    s.innerHTML = '<div class="afaq"><div class="afaq-h"><span class="afaq-l">Питання</span><h2>Часті питання, <span>короткі відповіді</span></h2></div><div class="afaq-list">' + items + "</div></div>";
    var it = s.querySelectorAll(".afaq-i");
    it.forEach(function (i) {
      i.querySelector(".afaq-q").addEventListener("click", function () {
        var o = !i.classList.contains("on");
        it.forEach(function (x) { x.classList.remove("on"); x.querySelector(".afaq-q").setAttribute("aria-expanded", "false"); });
        if (o) { i.classList.add("on"); this.setAttribute("aria-expanded", "true"); }
      });
    });
  });
  dispatchEvent(new Event("resize"));
})();
