// Проба вигляду сторінки «Ліди» (04.11.2026): фрагменти «дія → результат» замість цілих екранів.
(function () {
  if (name !== "Leads") return;
  var css = `
.l4{font-family:"Golos Text",system-ui,sans-serif;color:#111111}
.l4 .crumb{font-size:14px;color:#737373;padding-top:24px}.l4 .crumb a{color:inherit;text-decoration:none}
.l4 h1.mname{display:flex;align-items:center;gap:18px;margin:22px 0 14px;font-size:88px;line-height:1;font-weight:500;letter-spacing:-.03em}.l4 .mname .tile{width:76px;height:76px;border-radius:20px;display:grid;place-items:center;flex:none}.l4 .mname .tile svg{width:44px;height:44px}
.l4 .promise{font-size:32px;line-height:1.2;font-weight:500;letter-spacing:-.01em;margin:0 0 10px;max-width:860px}
.l4 h1{font-size:56px;line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:14px 0 14px;max-width:860px}
.l4 .lead{font-size:20px;line-height:1.45;color:#555555;max-width:680px;margin:0 0 24px}
.l4 h1.mname{justify-content:center;max-width:none;width:100%}.l4 .promise,.l4 .lead{text-align:center;margin-left:auto;margin-right:auto;text-wrap:balance}
#hwBar{position:sticky;bottom:0;z-index:60;width:100vw;margin-left:calc(50% - 50vw);background:#fff;border-top:1px solid transparent;transition:border-color .3s,box-shadow .3s}
#hwBar.stuck{border-top-color:#E6E6E6;box-shadow:0 -10px 30px rgba(0,0,0,.04)}
#hwBar .hw-in{max-width:1360px;margin:0 auto;padding:16px 40px;display:flex;align-items:center;justify-content:center;gap:16px}
#hwBar .hw-tx{font-size:16px;line-height:1.4;color:#737373;margin-right:12px;white-space:nowrap;overflow:hidden;max-width:640px;transition:opacity .3s,max-width .45s cubic-bezier(.4,0,.2,1),margin-right .45s}
#hwBar.stuck .hw-tx{opacity:0;max-width:0;margin-right:-16px}
#hwBar .btn{height:48px;padding:0 24px;font-size:16px;font-weight:500;border-radius:12px}
@media(max-width:760px){#hwBar{position:static;width:auto;margin:0}#hwBar .hw-in{flex-direction:column;align-items:stretch;gap:10px;padding:24px 0 0}#hwBar .hw-tx{display:none}#hwBar .btn{width:100%}}
.l4 .film{position:relative;margin-top:36px;border-radius:18px;overflow:hidden;border:1px solid #E6E6E6;background:#000}
.mx-page{background:#fff!important}
.final{background:#DCE8FF!important;color:#111}.final h2{color:#111!important}.final p{color:#555;font-size:18px}.final .btn{background:#111;color:#fff}
.l4 .banner{background:#F2F2F2!important;box-shadow:none}.l4 .banner p{color:#555555}
.l4 .nb small{color:#737373}
@media(min-width:761px){#agB{left:calc(100% - 80px);right:auto!important;transition:left .45s cubic-bezier(.4,0,.2,1),bottom .45s cubic-bezier(.4,0,.2,1)}html.ag-in #agB{left:calc(50% + 212px);bottom:12px}}
.l4 .film img{display:block;width:100%;height:min(645px,calc(100vh - 300px));min-height:320px;object-fit:cover}.l4 .film video{display:block;width:100%;height:auto}
.l4 .nb a{flex-direction:column;align-items:flex-start;gap:12px;padding:18px}.l4 .nb a>span:last-child{display:block;width:100%}.l4 .nb b{white-space:nowrap;margin-bottom:4px}.l4 .nb small{min-height:2.6em}
.l4 .nb b{font-size:16px}.l4 .nb small{font-size:14px;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.l4 .nb a{box-shadow:none;background:#F2F2F2}
.final h2{text-wrap:balance;max-width:820px;margin-left:auto;margin-right:auto}
.l4 i svg{width:54%;height:54%;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.l4 .play{display:grid;place-items:center;padding:0;position:absolute;inset:0;margin:auto;width:84px;height:84px;border-radius:50%;border:0;background:rgba(255,255,255,.5);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#111111;font-size:26px;cursor:pointer;box-shadow:0 0 0 1px rgba(255,255,255,.7),0 12px 30px -10px rgba(0,0,0,.35)}
.l4 .flow{display:flex;align-items:flex-start;margin-top:44px}
.l4 .flow div{flex:none;width:156px;text-align:center;font-size:15px;font-weight:500;line-height:1.25}
.l4 .flow i{display:grid;place-items:center;width:60px;height:60px;margin:0 auto 10px;border-radius:16px;font-style:normal;font-size:25px}
.l4 .flow>svg{flex:1;min-width:24px;height:14px;margin-top:23px;overflow:visible}
.l4 section{padding-top:112px}
.l4 h2{font-size:22px;line-height:1.2;letter-spacing:0;font-weight:500;color:#737373;margin:0 0 22px}
.l4 .c3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.l4 .c3>div{border-radius:28px;padding:28px 30px 32px;min-height:300px;display:flex;flex-direction:column}
.l4 .c3>div{border:1px solid #E6E6E6}.l4 .c3 i{display:grid;place-items:center;width:60px;height:60px;border-radius:16px;font-style:normal;font-size:25px;background:#fff;margin-bottom:auto}
.l4 .c3 h3{font-size:clamp(30px,3.4vw,40px);line-height:1.05;letter-spacing:-.025em;font-weight:500;margin:44px 0 12px;white-space:nowrap}
.l4 .c3 p{font-size:17px;line-height:1.4;color:#555555;margin:0;text-wrap:pretty;min-height:4.2em}
.l4 .lnk{color:inherit;font-size:16px;text-decoration:underline;text-underline-offset:3px}
.l4 .how{display:grid;grid-template-columns:320px minmax(0,1fr);gap:48px;align-items:start}
.l4 .hs{min-height:58vh;padding-top:8px;cursor:pointer;color:#888888;transition:color .25s}
.l4 .hs:last-child{min-height:0;padding-bottom:40px}
.l4 .hs.on{color:#111111}
.l4 .hs h3{font-size:52px;line-height:1.02;letter-spacing:-.025em;font-weight:500;margin:0 0 12px}
.l4 .hs p{font-size:18px;line-height:1.42;margin:0;color:inherit;text-wrap:pretty}
.l4 .rc{position:sticky;top:84px;height:560px;overflow:hidden;background:#fff;border:1px solid #E6E6E6;border-radius:16px;box-shadow:0 24px 60px -36px rgba(10,40,80,.4);display:flex;flex-direction:column;font-size:13.5px;line-height:1.45;color:#111111}
.l4 .rc-top{display:flex;align-items:center;gap:8px;padding:12px 18px;border-bottom:1px solid #E6E6E6}
.l4 .rc-chip{border:1px solid #E6E6E6;border-radius:8px;padding:4px 10px;font-weight:500;font-size:12.5px}.l4 .rc-chip::before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:#737373;margin-right:7px}
.l4 .rc-warm{background:#fff4e0;color:#b45309;border:1px solid #f6c77d;border-radius:7px;padding:3px 8px;font-size:11px;font-weight:600}
.l4 .rc-body{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 250px}
.l4 .rc-main{padding:18px 22px;overflow:hidden;display:flex;flex-direction:column;gap:12px}
.l4 .rc-side{border-left:1px solid #E6E6E6;padding:16px 18px;display:flex;flex-direction:column;gap:6px}
.l4 .rc h4{font-size:21px;font-weight:600;margin:0}.l4 .rc-mail{color:#737373;font-size:12.5px;margin-top:-10px}
.l4 .rc b{font-weight:600}
.l4 .rc-sec{border-radius:10px;padding:8px 10px;margin:0 -10px;transition:box-shadow .25s,background .25s}
.l4 .rc-pr{display:grid;grid-template-columns:96px 1fr;gap:8px;padding:6px 8px;margin:0 -8px;border-radius:9px;transition:box-shadow .25s,background .25s}.l4 .rc-pr small{color:#737373;font-size:12.5px}
.l4 .rc-tabs{display:flex;gap:3px;background:#F2F2F2;border-radius:9px;padding:3px;font-size:12.5px}.l4 .rc-tabs span{flex:1;text-align:center;padding:5px 0;border-radius:7px;color:#737373}
.l4 .rc-pn{display:none}
.l4 .rc-line{display:flex;gap:9px;padding:5px 0;align-items:center}.l4 .rc-line i{font-style:normal;width:24px;height:24px;flex:none;border-radius:7px;background:#F2F2F2;display:grid;place-items:center;font-size:12px}.l4 .rc-line time{margin-left:auto;color:#737373;font-size:12px;white-space:nowrap}
.l4 .rc-say{margin:6px 0 0;color:#555555}.l4 .rc-say b{font-weight:500;color:#111111}
.l4 .rc-green{display:inline-block;background:#DDF3DF;border:1px solid #CFE8CF;color:#0A7D0A;border-radius:8px;padding:4px 10px;font-weight:500;font-size:12.5px}
.l4 .rc-tag{display:inline-block;border-radius:6px;background:#DCE8FF;color:#0050D6;padding:1px 7px;font-size:11.5px;margin-right:4px}
.l4 .rc[data-s="0"] .h0,.l4 .rc[data-s="1"] .h1,.l4 .rc[data-s="2"] .h2,.l4 .rc[data-s="3"] .h3,.l4 .rc[data-s="4"] .h4,.l4 .rc[data-s="5"] .h5{background:#DCE8FF;box-shadow:0 0 0 2px #0050D6}
.l4 .rc[data-s="0"] .p0,.l4 .rc[data-s="1"] .p1,.l4 .rc[data-s="2"] .p2,.l4 .rc[data-s="3"] .p3,.l4 .rc[data-s="4"] .p4,.l4 .rc[data-s="5"] .p4{display:block}
.l4 .rc[data-s="0"] .t3,.l4 .rc[data-s="1"] .t2,.l4 .rc[data-s="4"] .t3,.l4 .rc[data-s="5"] .t3{background:#fff;color:#111111;font-weight:500}
.l4 .k{background:#fff;border:1px solid #E6E6E6;border-radius:14px;padding:14px 16px;font-size:14px;line-height:1.4;box-shadow:0 10px 24px -16px rgba(10,40,80,.3)}
.l4 .k small{display:block;color:#737373;font-size:12px}.l4 .k strong{font-weight:600}
.l4 .chips{display:flex;flex-direction:column;gap:8px}
.l4 .chip{background:#fff;border:1px solid #E6E6E6;border-radius:10px;padding:7px 12px;font-size:14px;white-space:nowrap}
.l4 .wave{display:flex;align-items:center;gap:2px;height:30px;margin:10px 0 6px}.l4 .wave span{width:3px;background:#39B54A;border-radius:2px}
.l4 .sec{margin-top:9px}.l4 .sec:first-of-type{margin-top:6px}
.l4 mark{background:linear-gradient(transparent 55%,rgba(255,214,0,.6) 55%);color:inherit}
.l4 .pill{display:inline-block;border-radius:7px;padding:2px 9px;font-size:12.5px;font-weight:500}
.l4 .red{background:#FBDCDC;color:#D62828}.l4 .blue{background:#DCE8FF;color:#0050D6}.l4 .green{background:#DDF3DF;color:#0A7D0A}
.l4 .kv{display:grid;grid-template-columns:auto auto;gap:7px 22px;align-items:center;font-size:14.5px}.l4 .kv small{color:#737373;font-size:13.5px}
.l4 .tl div{display:flex;gap:10px;align-items:center;padding:7px 0;font-size:14px}.l4 .tl i{font-style:normal;width:26px;height:26px;border-radius:8px;display:grid;place-items:center;font-size:13px}
.l4 .tabs4{display:flex;gap:4px;background:#F2F2F2;border-radius:9px;padding:3px;margin-bottom:8px;font-size:13px}.l4 .tabs4 span{padding:4px 10px;border-radius:7px;color:#555555}.l4 .tabs4 span.on{background:#fff;color:#111111;font-weight:500}
.l4 .btnk{display:inline-block;margin-top:8px;background:#DDF3DF;border:1px solid #DDF3DF;color:#0A7D0A;border-radius:9px;padding:6px 12px;font-weight:500;font-size:13.5px}
.l4 .ai{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start}
.l4 .ai h3{font-size:40px;line-height:1.04;letter-spacing:-.02em;font-weight:500;margin:0 0 10px}
.l4 .ai p{font-size:17px;line-height:1.4;color:#555555;margin:0 0 18px;min-height:48px;text-wrap:pretty}
.l4 .ui{background:#fff;border:1px solid #E6E6E6;border-radius:14px;padding:14px 16px;font-size:13.5px;line-height:1.45;color:#111111;min-height:190px;box-shadow:0 18px 44px -32px rgba(10,40,80,.4)}
.l4 .ui small{color:#737373;font-size:12px}.l4 .ui b{font-weight:600}
.l4 .ui .msg{border-left:3px solid #39B54A;padding-left:10px;margin-top:8px}
.l4 .ui .acts{display:flex;gap:8px;margin-top:12px}.l4 .ui .acts span{border:1px solid #E6E6E6;border-radius:8px;padding:4px 10px;font-size:12.5px}.l4 .ui .acts .go{background:#DDF3DF;border-color:#CFE8CF;color:#0A7D0A;font-weight:500}
.l4 .limit{margin:28px 0 8px;font-size:17px}
.l4 .g6{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:206px;gap:14px}
.l4 .g6>div{background:#F2F2F2;border-radius:20px;padding:20px 20px 0;overflow:hidden;display:flex;flex-direction:column;gap:14px}
.l4 .g6 .tall{grid-row:span 2}
.l4 .g6 h3{font-size:24px;line-height:1.12;letter-spacing:-.015em;font-weight:500;margin:0}
.l4 .w{background:#fff;border:1px solid #E6E6E6;border-radius:12px;padding:12px 14px;font-size:13px;line-height:1.4;color:#111111;box-shadow:0 14px 30px -22px rgba(10,40,80,.45)}
.l4 .g6 .w{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:0;flex:1;margin:0 2px}
.l4 .w .hd{display:flex;justify-content:space-between;align-items:center;font-weight:600;margin-bottom:6px}.l4 .w .hd small{color:#737373;font-weight:400;font-size:11.5px}
.l4 .w .it{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;margin:0 -8px;border-radius:7px;color:#555555}.l4 .w .it.on{background:#F2F2F2;color:#111111;font-weight:500}.l4 .w .it em{font-style:normal;color:#737373}
.l4 .w hr{border:0;border-top:1px solid #E6E6E6;margin:8px 0}
.l4 .w .cb{display:flex;align-items:center;gap:8px;padding:5px 0}.l4 .w .cb u{width:15px;height:15px;border:1.5px solid #39B54A;border-radius:4px;text-decoration:none;display:grid;place-items:center;font-size:10px;color:#fff}.l4 .w .cb u.y{background:#39B54A}
.l4 .w .sel{border:1px solid #E6E6E6;border-radius:8px;padding:6px 10px;display:flex;justify-content:space-between;font-weight:500;margin-bottom:6px}
.l4 .w .tg{display:inline-block;background:#DCE8FF;color:#0050D6;border-radius:6px;padding:1px 7px;font-size:11.5px;margin:2px 4px 0 0}
.l4 .w .lost{display:inline-block;background:#FBDCDC;color:#D62828;border-radius:7px;padding:2px 8px;font-size:11px;font-weight:600;margin:6px 0}
.l4 .w .drop{border:1.5px dashed #E6E6E6;border-radius:10px;text-align:center;padding:14px 8px;color:#555555}.l4 .w .drop b{font-size:20px;font-weight:400;display:block;line-height:1}.l4 .w .drop a{color:#0A7D0A;text-decoration:underline}
.l4 .w .fld{border:1px solid #E6E6E6;border-radius:8px;padding:8px 10px;color:#737373;margin-bottom:8px}.l4 .w .fld.big{height:64px}.l4 .w .send{background:#111111;color:#fff;border-radius:8px;text-align:center;padding:9px;font-weight:500}
.l4 .w .new{margin-top:12px;background:#DDF3DF;color:#0A7D0A;border-radius:8px;padding:8px 10px;font-weight:500}
.l4 .acc{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.l4 .acc h3{font-size:40px;line-height:1.04;letter-spacing:-.02em;font-weight:500;margin:0 0 10px}.l4 .acc p{font-size:17px;line-height:1.4;color:#555555;margin:0;text-wrap:pretty}
.l4 .go3{display:flex;align-items:flex-start}.l4 .go3 div{flex:none;width:280px}.l4 .go3 i{display:grid;place-items:center;width:60px;height:60px;border-radius:16px;font-style:normal;font-size:25px;font-weight:500;margin-bottom:14px}.l4 .go3 h3{font-size:40px;line-height:1.04;letter-spacing:-.02em;font-weight:500;margin:0 0 10px}.l4 .go3 p{font-size:17px;line-height:1.4;color:#555555;margin:0;text-wrap:pretty}.l4 .go3 svg{flex:1;min-width:24px;height:14px;margin:23px 20px 0 -190px;overflow:visible}
.l4 details{border-bottom:1px solid #E6E6E6;padding:18px 0;max-width:820px}.l4 summary{cursor:pointer;font-size:18px;font-weight:500;list-style:none;display:flex;justify-content:space-between;gap:16px}.l4 summary::-webkit-details-marker{display:none}.l4 summary::after{content:'+';color:#737373;font-weight:400}.l4 details[open] summary::after{content:'−'}.l4 details p{margin:10px 0 0;color:#555555;font-size:16px;line-height:1.55}
@media(max-width:900px){.l4 .flow{flex-direction:column;align-items:center;gap:6px}.l4 .flow>svg{flex:none;width:44px;margin:15px 0;transform:rotate(90deg)}.l4 h1.mname{font-size:52px}.l4 .mname .tile{width:52px;height:52px}.l4 .promise{font-size:24px}.l4 .c3 h3{font-size:38px}.l4 .c3>div{min-height:240px}.l4 .c3,.l4 .ai,.l4 .acc{grid-template-columns:1fr}.l4 .g6{grid-template-columns:1fr;grid-auto-rows:auto}.l4 .g6 .tall{grid-row:auto}.l4 .g6>div{min-height:220px}.l4 .go3{flex-direction:column;gap:22px}.l4 .go3 svg{display:none}.l4 .go3 div{width:auto}.l4 .how{grid-template-columns:1fr;gap:20px}.l4 .how .rc{order:-1;position:static;height:auto}.l4 .rc-body{grid-template-columns:1fr}.l4 .rc-side{border-left:0;border-top:1px solid #E6E6E6}.l4 .hs{min-height:0;color:#111111}.l4 .hs h3{font-size:38px}.l4 section{padding-top:72px}}
`;
  var wave = [8, 16, 24, 12, 28, 18, 10, 22, 30, 14, 20, 26, 9, 17, 25, 12, 21, 15, 27, 11, 19, 8].map(function (h) { return '<span style="height:' + h + 'px"></span>'; }).join("");
  var c = MODC["Leads"];
  var tile = function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + '</span><span><b>' + k + '</b><small>' + (D[k] || IDX[k].g) + '</small></span></a>'; };
  var steps = [["☎", "Call", "#DDF3DF", "#0A7D0A"], ["✎", "Summary in the card", "#DCE8FF", "#0050D6"], ["✓", "Tasks", "#FFECC2", "#8A5C00"], ["€", "Suggestion", "#FBDCDC", "#D62828"], ["▣", "Deal", "#DDF3DF", "#0A7D0A"]];
  var flow = '<div class="flow">' + steps.map(function (t, i) {
    var n = steps[i + 1], box = '<div><i style="background:' + t[2] + ';color:' + t[3] + '">' + t[0] + '</i>' + t[1] + '</div>';
    if (!n) return box;
    return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fl' + i + '"><stop offset="0" stop-color="' + t[3] + '"/><stop offset="1" stop-color="' + n[3] + '"/></linearGradient></defs><rect y="6" width="96" height="2" rx="1" fill="url(#fl' + i + ')"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[3] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
  }).join("") + '</div>';

  var h = '<style>' + css + '</style><div class="l4">'
    + '<div class="crumb"><a href="../modules">Modules</a> › Leads</div>'
    + '<h1 class="mname"><span class="tile" style="background:' + tint(name) + '">' + icon(name) + '</span>' + name + '</h1>'
    + '<p class="promise">' + c.h1 + '</p><p class="lead">' + c.sub + '</p>'
    + '<div class="film"><img src="/modules-assets/leads-film-poster.jpg?v=2" alt="Video about the Leads module"></div>'
    + '<div id="hwBar"><div class="hw-in"><span class="hw-tx">“Leads” are included in every package.</span><a class="btn" href="https://app.aita.world/auth/register" data-signup>Try for free</a><a class="btn ghost" href="../demo">Free demo</a></div></div><div id="hwBarS" style="height:1px;margin-top:-1px"></div>'
    + flow

    + '<section><h2>Three differences</h2><div class="c3">'
    + '<div style="background:#DDF3DF"><i style="color:#0A7D0A">☎</i><h3>No note-taking</h3><p>Aita writes the call summary into the client\'s card.</p></div>'
    + '<div style="background:#FFECC2"><i style="color:#8A5C00">✎</i><h3>Your structure</h3><p>Each pipeline has its own instruction for AI, so the whole team handles clients the same way.</p></div>'
    + '<div style="background:#FBDCDC"><i style="color:#D62828">▣</i><h3>The full history</h3><p>A project is created from the lead card, and the people doing the work see everything that happened with the client.</p></div>'
    + '</div></section>'

    + '<section><h2>How it works</h2><div class="how"><div class="hl">' + [
      ["Request", "A request lands in the pipeline, and the card shows where it came from."],
      ["Call", "The conversation is transcribed, and the summary goes into the card."],
      ["Instruction", "You decide what to record, and AI fills in the description in your structure."],
      ["Next step", "The next contact and tasks are visible in the card."],
      ["History", "Emails, calls and meetings are kept in the card, so a colleague picks up right where you left off."],
      ["Project", "You click “Create project”, and the project remembers which lead it started from."]
    ].map(function (t, i) { return '<div class="hs' + (i ? "" : " on") + '" data-i="' + i + '"><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>'; }).join("") + '</div>'
    + `<div class="rc" data-s="0" aria-label="Lead card with demo data">
      <div class="rc-top"><span class="rc-chip">Negotiation</span><span class="rc-warm">WARM</span></div>
      <div class="rc-body"><div class="rc-main">
        <h4>Andrii Melnyk</h4><div class="rc-mail">a.melnyk@termobud.com.ua</div>
        <div class="rc-sec h2"><b>Description</b><br>Termobud is looking for a solar plant on the warehouse roof to cut electricity costs.<br><b>Need:</b> ~150 kW, roof ~1,200 m², Brovary.<br><b>Who decides:</b> the director, comparing 2 other proposals.<br><b>Next:</b> send a proposal with two options by Friday.</div>
        <div class="rc-tabs"><span class="t0">Chat</span><span class="t1">Correspondence</span><span class="t2">Conversations</span><span class="t3">History</span></div>
        <div class="rc-sec h1 h4">
          <div class="rc-pn p0"><div class="rc-line"><i>＋</i>Lead created from the website form<time>Oct 20, 09:14</time></div><div class="rc-line"><i>◷</i>Stage: New lead<time>Oct 20, 09:14</time></div></div>
          <div class="rc-pn p1"><div class="rc-line"><i>☎</i><span>Incoming call, 12 min 40 s</span><time>Oct 20, 12:48</time></div><div class="wave">` + wave + `</div>
            <p class="rc-say"><b>Oleh:</b> What capacity do you need?</p><p class="rc-say"><b>Andrii:</b> About 150 kW. The director wants two options, with storage and without.</p>
            <p class="rc-say"><b>Oleh:</b> I'll send a proposal by Friday, and on Thursday we'll come to the site.</p></div>
          <div class="rc-pn p2"><b>Call processing prompt</b><div class="rc-say">Record needs, capacity, who decides, competitors and next steps.</div><div style="margin-top:10px"><span class="rc-green">Test the prompt</span></div></div>
          <div class="rc-pn p3"><b>Linked tasks</b><div class="rc-line"><i>○</i>Prepare a proposal with two options<time>by Friday</time></div><b>Calendar events</b><div class="rc-line"><i>▣</i>Site meeting, Brovary<time>Thursday, 10:00</time></div></div>
          <div class="rc-pn p4"><div class="rc-line"><i>✉</i>Email “Commercial proposal”<time>Oct 21</time></div><div class="rc-line"><i>☎</i>Call, summary recorded<time>Oct 20</time></div><div class="rc-line"><i>▣</i>Site meeting<time>Oct 23</time></div><div class="rc-line"><i>＋</i>Lead created from the website form<time>Oct 20</time></div></div>
        </div>
      </div><div class="rc-side">
        <b>Properties</b>
        <div class="rc-pr"><small>Pipeline</small><span>Solar sales</span></div>
        <div class="rc-pr"><small>Manager</small><span>Oleh Martyniuk</span></div>
        <div class="rc-pr h0"><small>Source</small><span>Website</span></div>
        <div class="rc-pr"><small>Last contact</small><span>Oct 20, 2026</span></div>
        <div class="rc-pr h3"><small>Next contact</small><span>Thursday, 10:00</span></div>
        <div class="rc-sec h5" style="margin-top:10px"><b>Project</b><div style="margin:8px 0 6px"><span class="rc-green">Create project</span></div><small style="color:#737373">Lead capacity: 150 kW</small></div>
        <div style="margin-top:8px"><b>Organization</b><br>Termobud</div>
        <div style="margin-top:8px"><b>Labels</b><br><span class="rc-tag">Warehouse</span><span class="rc-tag">Brovary</span></div>
      </div></div></div></div></section>`

    + '<section><h2>AI in the module</h2><div class="ai">'
    + '<div><h3>Summary</h3><p>AI records the content of the conversation following your instruction.</p><div class="ui"><small>Aita, Oct 20, 12:48</small><div class="msg"><b>Call summary</b><br>They need a ~150 kW solar plant on the warehouse roof. The director wants two options. Send a proposal by Friday.</div></div></div>'
    + '<div><h3>Next steps</h3><p>After the call, the AI agent suggests what to do next.</p><div class="ui"><small>AI agent suggestion</small><div class="rc-line"><i>○</i>Prepare a proposal with two options</div><div class="rc-line"><i>▣</i>Site meeting on Thursday, 10:00</div><div class="acts"><span class="go">Accept</span><span>Decline</span></div></div></div>'
    + '<div><h3>AI secretary</h3><p>AI reads new emails and suggests creating a lead, contact or task.</p><div class="ui"><small>New email</small><br><b>Request for a warehouse solar plant</b><br>info@termobud.com.ua<div class="msg">Looks like a new client. Create a lead?</div><div class="acts"><span class="go">Create lead</span><span>Skip</span></div></div></div>'
    + '</div><p class="limit">' + c.aiLimit + '</p></section>'
    + '<section><h2>More features</h2><div class="g6">'
    + '<div class="tall"><h3>Labels and filters</h3><div class="w"><div class="hd">Filters<small>Clear all</small></div><div class="it on">Labels<em>›</em></div><div class="it">Manager<em>›</em></div><div class="it">Source<em>›</em></div><div class="it">Region<em>›</em></div><div class="it">Last activity<em>›</em></div><hr><div class="cb"><u class="y">✓</u>Overdue</div><div class="cb"><u></u>Created by AI</div><hr><span class="tg">Warehouse</span><span class="tg">Brovary</span><span class="tg">EPC</span></div></div>'
    + '<div><h3>Several pipelines</h3><div class="w"><div class="sel">Solar sales<span>⌄</span></div><div class="it on">Solar sales<em>✓</em></div><div class="it">Partners</div><div class="it">Service</div></div></div>'
    + '<div><h3>Loss reasons</h3><div class="w"><b>Dmytro Tkach</b><br><span class="lost">LOST</span><br>Reason: chose another supplier</div></div>'
    + '<div class="tall"><h3>Website forms</h3><div class="w"><div class="fld">Name</div><div class="fld">Phone</div><div class="fld big">What are you interested in?</div><div class="send">Send</div><div class="new">New lead in the pipeline</div></div></div>'
    + '<div><h3>Import</h3><div class="w"><div class="drop"><b>↑</b>Drag a CSV or Excel file here<br><a>Choose file</a></div></div></div>'
    + '<div><h3>Export</h3><div class="w"><div class="it on">Export to CSV…</div><div class="it">Export to XLSX…</div></div></div>'
    + '</div></section>'

    + '<section><h2>Access and data</h2><div class="acc">'
    + '<div><h3>Company</h3><p>Pipelines and leads are visible to members of your company.</p></div>'
    + '<div><h3>Partners</h3><p>A pipeline can be shared with another company.</p></div>'
    + '<div><h3>Single lead</h3><p>Access to a lead is set up in “Access management”.</p></div>'
    + '</div></section>'

    + '<section><h2>Where to start</h2><div class="go3">' + [
      ["Pipeline", "Choose ready-made settings or create your own pipeline.", "#DDF3DF", "#0A7D0A"],
      ["Clients", "Upload clients from CSV or Excel, up to 5,000 rows at a time.", "#DCE8FF", "#0050D6"],
      ["Communication", "Connect mail and telephony.", "#FFECC2", "#8A5C00"]
    ].map(function (t, i, all) {
      var n = all[i + 1], box = '<div><i style="background:' + t[2] + ';color:' + t[3] + '">' + (i + 1) + '</i><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>';
      if (!n) return box;
      return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="go' + i + '"><stop offset="0" stop-color="' + t[3] + '"/><stop offset="1" stop-color="' + n[3] + '"/></linearGradient></defs><rect y="6" width="96" height="2" rx="1" fill="url(#go' + i + ')"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[3] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
    }).join("") + '</div></section>'
    + '<section><a class="banner md-en" href="../energy-solution"><div><h3>“Leads” in energy</h3><p>' + c.industry + '</p></div><span class="go">Aita for energy →</span></a></section>'
    + '<section><h2>Questions and answers</h2>' + c.faq.map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join("") + '</section>'
    + '<section class="md-next"><h2>What to see next</h2><div class="nb">' + nb.map(tile).join("") + '<a href="../modules" class="nb-all"><span class="tile" style="background:#F2F2F2">→</span><span><b>All modules</b><small>See the list</small></span></a></div></section>'
    + '</div><div class="final"><h2>' + c.final + '</h2><p>All 48 modules in every package from €50 a month.</p><a class="btn" href="../demo">Free demo</a></div>';

  var root = document.getElementById("mod");
  root.innerHTML = h;
  var ICON = {
    "☎": "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
    "✎": "M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z",
    "✓": "M20 6 9 17l-5-5",
    "€": "M4 10h12M4 14h9M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
    "▣": "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    "✉": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
    "＋": "M12 5v14M5 12h14",
    "◷": "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    "○": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
  };
  root.querySelectorAll("i").forEach(function (x) { var p = ICON[x.textContent.trim()]; if (p) x.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + p + '"/></svg>'; });
  // у плитках схеми й відмінностей останні кроки мають свій зміст
  var fi = root.querySelectorAll(".flow i"), ci = root.querySelectorAll(".c3 i");
  if (fi[4]) fi[4].innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15l2 2 4-4"/></svg>';
  if (ci[2]) ci[2].innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l4 2"/></svg>';
  var bar = document.getElementById("hwBar");
  var mark = document.getElementById("hwBarS");
  var sync = function () { var on = mark.getBoundingClientRect().top >= innerHeight; bar.classList.toggle("stuck", on); document.documentElement.classList.toggle("ag-in", on); };
  addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync();
  var rc = root.querySelector(".rc"), hs = [].slice.call(root.querySelectorAll(".hs"));
  var show = function (i) { rc.setAttribute("data-s", i); hs.forEach(function (x, k) { x.classList.toggle("on", k === +i); }); };
  hs.forEach(function (x) { x.onclick = function () { show(x.dataset.i); }; });
  if ("IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) show(e.target.dataset.i); }); }, { rootMargin: "-40% 0px -50% 0px" });
    hs.forEach(function (x) { seen.observe(x); });
  }
  var pb = root.querySelector(".play"); if (pb) pb.onclick = function () {
    var v = document.createElement("video");
    v.src = "/modules-assets/leads-film.mp4"; v.controls = true; v.autoplay = true;
    this.parentNode.replaceChildren(v);
  };
})();
