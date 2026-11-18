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
  var steps = [["☎", "Llamada", "#DDF3DF", "#0A7D0A"], ["✎", "Resumen en la ficha", "#DCE8FF", "#0050D6"], ["✓", "Tareas", "#FFECC2", "#8A5C00"], ["€", "Sugerencia", "#FBDCDC", "#D62828"], ["▣", "Acuerdo", "#DDF3DF", "#0A7D0A"]];
  var flow = '<div class="flow">' + steps.map(function (t, i) {
    var n = steps[i + 1], box = '<div><i style="background:' + t[2] + ';color:' + t[3] + '">' + t[0] + '</i>' + t[1] + '</div>';
    if (!n) return box;
    return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fl' + i + '"><stop offset="0" stop-color="' + t[3] + '"/><stop offset="1" stop-color="' + n[3] + '"/></linearGradient></defs><rect y="6" width="96" height="2" rx="1" fill="url(#fl' + i + ')"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[3] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
  }).join("") + '</div>';

  var h = '<style>' + css + '</style><div class="l4">'
    + '<div class="crumb"><a href="../modules">Módulos</a> › Leads</div>'
    + '<h1 class="mname"><span class="tile" style="background:' + tint(name) + '">' + icon(name) + '</span>' + name + '</h1>'
    + '<p class="promise">' + c.h1 + '</p><p class="lead">' + c.sub + '</p>'
    + '<div class="film"><img src="/modules-assets/leads-film-poster.jpg?v=2" alt="Vídeo sobre el módulo «Leads»"></div>'
    + '<div id="hwBar"><div class="hw-in"><span class="hw-tx">«Leads» está incluido en cada paquete.</span><a class="btn" href="https://app.aita.world/auth/register" data-signup>Prueba gratis</a><a class="btn ghost" href="../demo">Demo gratuita</a></div></div><div id="hwBarS" style="height:1px;margin-top:-1px"></div>'
    + flow

    + '<section><h2>Tres diferencias</h2><div class="c3">'
    + '<div style="background:#DDF3DF"><i style="color:#0A7D0A">☎</i><h3>Sin notas</h3><p>Aita escribe el resumen de la llamada en la ficha del cliente.</p></div>'
    + '<div style="background:#FFECC2"><i style="color:#8A5C00">✎</i><h3>Tu estructura</h3><p>Cada embudo tiene su propia instrucción para la IA, así todo el equipo lleva a los clientes igual.</p></div>'
    + '<div style="background:#FBDCDC"><i style="color:#D62828">▣</i><h3>Todo el historial</h3><p>El proyecto se crea desde la ficha del lead, y los ejecutores ven todo lo que pasó con el cliente.</p></div>'
    + '</div></section>'

    + '<section><h2>Cómo funciona</h2><div class="how"><div class="hl">' + [
      ["Solicitud", "La solicitud entra en el embudo, y la ficha muestra su origen."],
      ["Llamada", "La conversación se transcribe y el resumen se escribe en la ficha."],
      ["Instrucción", "Tú defines qué anotar, y la IA rellena la descripción según tu estructura."],
      ["Siguiente paso", "El próximo contacto y las tareas se ven en la ficha."],
      ["Historial", "Los correos, llamadas y reuniones se guardan en la ficha, así un compañero sigue desde el mismo punto."],
      ["Proyecto", "Pulsas «Crear proyecto», y el proyecto recuerda de qué lead salió."]
    ].map(function (t, i) { return '<div class="hs' + (i ? "" : " on") + '" data-i="' + i + '"><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>'; }).join("") + '</div>'
    + `<div class="rc" data-s="0" aria-label="Ficha de lead con datos de demostración">
      <div class="rc-top"><span class="rc-chip">Negociación</span><span class="rc-warm">TEMPLADO</span></div>
      <div class="rc-body"><div class="rc-main">
        <h4>Andrii Melnyk</h4><div class="rc-mail">a.melnyk@termobud.com.ua</div>
        <div class="rc-sec h2"><b>Descripción</b><br>Termobud busca una FV para la cubierta de su almacén para reducir el gasto en electricidad.<br><b>Necesidad:</b> ~150 kW, cubierta ~1 200 m², Brovary.<br><b>Quién decide:</b> el director, que compara otras 2 propuestas.<br><b>Siguiente:</b> enviar una propuesta con dos variantes antes del viernes.</div>
        <div class="rc-tabs"><span class="t0">Chat</span><span class="t1">Correspondencia</span><span class="t2">Conversaciones</span><span class="t3">Historial</span></div>
        <div class="rc-sec h1 h4">
          <div class="rc-pn p0"><div class="rc-line"><i>＋</i>Lead creado desde el formulario web<time>20.10, 09:14</time></div><div class="rc-line"><i>◷</i>Etapa: Nuevo lead<time>20.10, 09:14</time></div></div>
          <div class="rc-pn p1"><div class="rc-line"><i>☎</i><span>Llamada entrante, 12 min 40 s</span><time>20.10, 12:48</time></div><div class="wave">` + wave + `</div>
            <p class="rc-say"><b>Oleh:</b> ¿Qué potencia necesitáis?</p><p class="rc-say"><b>Andrii:</b> Unos 150 kW. El director quiere dos variantes, con almacenamiento y sin él.</p>
            <p class="rc-say"><b>Oleh:</b> Os envío la propuesta antes del viernes, y el jueves vamos a la obra.</p></div>
          <div class="rc-pn p2"><b>Prompt de procesamiento de llamadas</b><div class="rc-say">Anota necesidades, potencia, quién decide, competidores y próximos pasos.</div><div style="margin-top:10px"><span class="rc-green">Probar el prompt</span></div></div>
          <div class="rc-pn p3"><b>Tareas vinculadas</b><div class="rc-line"><i>○</i>Preparar una propuesta con dos variantes<time>antes del viernes</time></div><b>Eventos del calendario</b><div class="rc-line"><i>▣</i>Reunión en la obra, Brovary<time>jueves, 10:00</time></div></div>
          <div class="rc-pn p4"><div class="rc-line"><i>✉</i>Correo «Propuesta comercial»<time>21.10</time></div><div class="rc-line"><i>☎</i>Llamada, resumen guardado<time>20.10</time></div><div class="rc-line"><i>▣</i>Reunión en la obra<time>23.10</time></div><div class="rc-line"><i>＋</i>Lead creado desde el formulario web<time>20.10</time></div></div>
        </div>
      </div><div class="rc-side">
        <b>Propiedades</b>
        <div class="rc-pr"><small>Embudo</small><span>Ventas FV</span></div>
        <div class="rc-pr"><small>Gestor</small><span>Oleh Martyniuk</span></div>
        <div class="rc-pr h0"><small>Origen</small><span>Sitio web</span></div>
        <div class="rc-pr"><small>Último contacto</small><span>20.10.2026</span></div>
        <div class="rc-pr h3"><small>Próximo contacto</small><span>Jueves, 10:00</span></div>
        <div class="rc-sec h5" style="margin-top:10px"><b>Proyecto</b><div style="margin:8px 0 6px"><span class="rc-green">Crear proyecto</span></div><small style="color:#737373">Potencia del lead: 150 kW</small></div>
        <div style="margin-top:8px"><b>Organización</b><br>Termobud</div>
        <div style="margin-top:8px"><b>Etiquetas</b><br><span class="rc-tag">Almacén</span><span class="rc-tag">Brovary</span></div>
      </div></div></div></div></section>`

    + '<section><h2>IA en el módulo</h2><div class="ai">'
    + '<div><h3>Resumen</h3><p>La IA anota el contenido de la conversación según tu instrucción.</p><div class="ui"><small>Aita, 20.10, 12:48</small><div class="msg"><b>Resumen de la llamada</b><br>Necesita una FV de ~150 kW en la cubierta del almacén. El director quiere dos variantes. Enviar la propuesta antes del viernes.</div></div></div>'
    + '<div><h3>Próximos pasos</h3><p>Tras la llamada, el agente IA propone qué hacer después.</p><div class="ui"><small>Propuesta del agente IA</small><div class="rc-line"><i>○</i>Preparar una propuesta con dos variantes</div><div class="rc-line"><i>▣</i>Reunión en la obra el jueves, 10:00</div><div class="acts"><span class="go">Aceptar</span><span>Rechazar</span></div></div></div>'
    + '<div><h3>Secretario IA</h3><p>La IA lee los correos nuevos y propone crear un lead, un contacto o una tarea.</p><div class="ui"><small>Correo nuevo</small><br><b>Solicitud de FV para almacén</b><br>info@termobud.com.ua<div class="msg">Parece un cliente nuevo. ¿Crear lead?</div><div class="acts"><span class="go">Crear lead</span><span>Omitir</span></div></div></div>'
    + '</div><p class="limit">' + c.aiLimit + '</p></section>'
    + '<section><h2>Más funciones</h2><div class="g6">'
    + '<div class="tall"><h3>Etiquetas y filtros</h3><div class="w"><div class="hd">Filtros<small>Borrar todo</small></div><div class="it on">Etiquetas<em>›</em></div><div class="it">Gestor<em>›</em></div><div class="it">Origen<em>›</em></div><div class="it">Región<em>›</em></div><div class="it">Última actividad<em>›</em></div><hr><div class="cb"><u class="y">✓</u>Vencidos</div><div class="cb"><u></u>Creados por IA</div><hr><span class="tg">Almacén</span><span class="tg">Brovary</span><span class="tg">EPC</span></div></div>'
    + '<div><h3>Varios embudos</h3><div class="w"><div class="sel">Ventas FV<span>⌄</span></div><div class="it on">Ventas FV<em>✓</em></div><div class="it">Socios</div><div class="it">Servicio</div></div></div>'
    + '<div><h3>Motivos de pérdida</h3><div class="w"><b>Dmytro Tkach</b><br><span class="lost">PERDIDO</span><br>Motivo: eligieron a otro proveedor</div></div>'
    + '<div class="tall"><h3>Formularios para la web</h3><div class="w"><div class="fld">Nombre</div><div class="fld">Teléfono</div><div class="fld big">¿Qué te interesa?</div><div class="send">Enviar</div><div class="new">Nuevo lead en el embudo</div></div></div>'
    + '<div><h3>Importación</h3><div class="w"><div class="drop"><b>↑</b>Arrastra un archivo CSV o Excel<br><a>Elegir archivo</a></div></div></div>'
    + '<div><h3>Exportación</h3><div class="w"><div class="it on">Exportar a CSV…</div><div class="it">Exportar a XLSX…</div></div></div>'
    + '</div></section>'

    + '<section><h2>Acceso y datos</h2><div class="acc">'
    + '<div><h3>Empresa</h3><p>Los miembros de tu empresa ven los embudos y los leads.</p></div>'
    + '<div><h3>Socios</h3><p>Puedes compartir un embudo con otra empresa.</p></div>'
    + '<div><h3>Lead concreto</h3><p>El acceso a un lead se configura en «Gestión de acceso».</p></div>'
    + '</div></section>'

    + '<section><h2>Por dónde empezar</h2><div class="go3">' + [
      ["Embudo", "Elige una configuración lista o crea tu propio embudo.", "#DDF3DF", "#0A7D0A"],
      ["Clientes", "Sube clientes desde CSV o Excel, hasta 5 000 filas cada vez.", "#DCE8FF", "#0050D6"],
      ["Comunicación", "Conecta el correo y la telefonía.", "#FFECC2", "#8A5C00"]
    ].map(function (t, i, all) {
      var n = all[i + 1], box = '<div><i style="background:' + t[2] + ';color:' + t[3] + '">' + (i + 1) + '</i><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>';
      if (!n) return box;
      return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="go' + i + '"><stop offset="0" stop-color="' + t[3] + '"/><stop offset="1" stop-color="' + n[3] + '"/></linearGradient></defs><rect y="6" width="96" height="2" rx="1" fill="url(#go' + i + ')"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[3] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
    }).join("") + '</div></section>'
    + '<section><a class="banner md-en" href="../energy"><div><h3>«Leads» en energía</h3><p>' + c.industry + '</p></div><span class="go">Aita para energía →</span></a></section>'
    + '<section><h2>Preguntas y respuestas</h2>' + c.faq.map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join("") + '</section>'
    + '<section class="md-next"><h2>Qué ver después</h2><div class="nb">' + nb.map(tile).join("") + '<a href="../modules" class="nb-all"><span class="tile" style="background:#F2F2F2">→</span><span><b>Todos los módulos</b><small>Ver la lista</small></span></a></div></section>'
    + '</div><div class="final"><h2>' + c.final + '</h2><p>Los 48 módulos en cada paquete desde 50 € al mes.</p><a class="btn" href="../demo">Demo gratuita</a></div>';

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
