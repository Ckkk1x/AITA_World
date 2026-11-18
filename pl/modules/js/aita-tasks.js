// Сторінка модуля «Завдання» за шаблоном «Ліди»: дошка, поверх якої висуваються картка, підзадачі, зв'язки й часова шкала.
(function () {
  if (name !== "Zadania") return;
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
.l4 .how{grid-template-columns:250px minmax(0,1fr);gap:36px}
.l4 .hs h3{font-size:38px}.l4 .hs{min-height:58vh}
.l4 .stage{position:sticky;top:84px;height:600px;overflow:hidden;background:#fff;border:1px solid #E6E6E6;border-radius:16px;color:#171717}
.l4 .sc{position:absolute;left:0;top:0;width:1240px;height:860px;transform-origin:0 0;font-size:15px;line-height:1.5}
.l4 .bh{display:flex;align-items:center;gap:14px;height:62px;padding:0 22px;border-bottom:1px solid #E6E6E6}.l4 .bh b{font-size:19px;font-weight:600}.l4 .bh .sw{background:#F5F5F5;border-radius:9px;padding:4px;font-size:13.5px;color:#737373}.l4 .bh .sw span{padding:4px 10px;border-radius:6px}.l4 .bh .sw .on{background:#fff;color:#111;font-weight:500}.l4 .bh small{font-size:13.5px;color:#737373}.l4 .bh small b{font-size:13.5px;color:#111}.l4 .bh em{margin-left:auto;font-style:normal;font-size:13.5px;color:#555}
.l4 .bd{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:14px 14px 0;background:#fff}
.l4 .col{border:1px solid #E6E6E6;border-radius:12px 12px 0 0;border-bottom:0;padding:0 10px;min-height:780px}.l4 .col>header{display:flex;align-items:center;gap:8px;height:50px;font-size:14px;font-weight:600;letter-spacing:.06em;border-bottom:1px solid #E6E6E6;margin:0 -10px 10px;padding:0 12px}.l4 .col>header u{width:10px;height:10px;border-radius:50%;text-decoration:none}.l4 .col>header small{margin-left:auto;background:#F2F2F2;color:#737373;border-radius:6px;padding:1px 8px;font-size:12px;font-weight:400;letter-spacing:0;font-family:ui-monospace,monospace}
.l4 .tc{border:1px solid #E6E6E6;border-radius:10px;padding:10px 12px;margin-bottom:10px;background:#fff}.l4 .tc .r1{display:flex;align-items:center;gap:7px;font:12.5px ui-monospace,Menlo,monospace;color:#555}.l4 .tc .r1 u{width:7px;height:7px;border-radius:50%;text-decoration:none}.l4 .tc .pp{margin-left:auto;font:500 11.5px "Golos Text",sans-serif;border-radius:6px;padding:1px 7px}.l4 .pp.h{background:#FDEFD8;color:#9A5B00}.l4 .pp.m{background:#DCEFFB;color:#006FA8}.l4 .pp.l{background:#F0F0F0;color:#555}.l4 .pp.c{background:#FBE3E3;color:#C0271B}.l4 .pp.w{background:#fff;color:#737373;box-shadow:inset 0 0 0 1px #E6E6E6}.l4 .tc .pg{margin-left:auto;color:#737373;font-size:11.5px}.l4 .tc .pg+.pp{margin-left:6px}
.l4 .tc p{margin:7px 0 9px;font-size:14.5px;line-height:1.3;font-weight:600;color:#171717}
.l4 .tc .r3{display:flex;align-items:center;gap:7px;flex-wrap:wrap;font-size:12px;color:#555}.l4 .av{width:24px;height:24px;border-radius:50%;background:#3F4A56;color:#fff;font-size:10px;font-weight:600;display:inline-grid;place-items:center;flex:none}.l4 .av.a2{background:#7A8A99}.l4 .av.a3{background:#0086CC}.l4 .av.ai{background:#39B54A}.l4 .en{border:1px solid #E6E6E6;border-radius:6px;padding:1px 7px}.l4 .ov{color:#D62828;border:0;margin-left:auto}.l4 .tc.me{box-shadow:0 0 0 2px #0050D6}
.l4 .ly{position:absolute;left:34px;right:34px;top:26px;bottom:-30px;background:#fff;border:1px solid #E6E6E6;border-radius:12px;box-shadow:0 20px 60px -10px rgba(0,0,0,.28);transform:translateY(112%);transition:transform .55s cubic-bezier(.3,.8,.3,1);display:flex;flex-direction:column;overflow:hidden}
.l4 .dim{position:absolute;inset:0;background:rgba(0,0,0,.34);opacity:0;transition:opacity .3s;pointer-events:none}
.l4 .sc[data-s="2"] .dim,.l4 .sc[data-s="3"] .dim,.l4 .sc[data-s="4"] .dim,.l4 .sc[data-s="5"] .dim,.l4 .sc[data-s="6"] .dim,.l4 .sc[data-s="7"] .dim{opacity:1}
.l4 .sc[data-s="2"] .kid,.l4 .sc[data-s="3"] .kid,.l4 .sc[data-s="5"] .kid,.l4 .sc[data-s="6"] .kid,.l4 .sc[data-s="7"] .kid,.l4 .sc[data-s="4"] .par,.l4 .sc[data-s="8"] .tline{transform:none}
.l4 .sc[data-s="4"] .kid{transform:translateX(-4%) scale(.96)}
.l4 .tc{transition:opacity .3s}.l4 .sc[data-s="1"] .tc:not(.ir){opacity:.28}
.l4 .fp{position:absolute;right:22px;top:58px;width:330px;background:#fff;border:1px solid #E6E6E6;border-radius:12px;box-shadow:0 20px 50px -14px rgba(0,0,0,.3);padding:14px 16px;font-size:14.5px;opacity:0;transform:translateY(-8px);transition:opacity .3s,transform .3s;pointer-events:none}.l4 .sc[data-s="1"] .fp{opacity:1;transform:none}
.l4 .fp .hd3{display:flex;justify-content:space-between;font-weight:600;margin-bottom:8px}.l4 .fp .hd3 small{color:#737373;font-weight:400}.l4 .fp .fi{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;margin:0 -8px;border-radius:7px}.l4 .fp .fi.on{background:#EAF2FF;font-weight:500}.l4 .fp .fi em{font-style:normal;color:#737373}.l4 .fp .who{display:flex;align-items:center;gap:8px;padding:5px 0 5px 10px;font-size:14px}.l4 .fp .who u{width:15px;height:15px;border:1.5px solid #39B54A;border-radius:4px;text-decoration:none;display:grid;place-items:center;font-size:10px;color:#fff;flex:none}.l4 .fp .who u.y{background:#39B54A}.l4 .fp hr{border:0;border-top:1px solid #E6E6E6;margin:8px 0}
.l4 .sp{position:absolute;right:366px;top:96px;width:340px;background:#fff;border:1px solid #E6E6E6;border-radius:12px;box-shadow:0 20px 50px -14px rgba(0,0,0,.3);padding:14px 16px;font-size:14.5px;opacity:0;transition:opacity .3s;pointer-events:none}.l4 .sc[data-s="3"] .sp{opacity:1}
.l4 .sp b{font-weight:600}.l4 .sp .pe{display:flex;align-items:center;gap:9px;padding:5px 0}.l4 .sp .pe small{color:#737373;margin-left:auto;font-size:12.5px}
.l4 .nt{position:absolute;right:366px;top:330px;width:340px;background:#111;color:#fff;border-radius:12px;padding:12px 14px;font-size:14px;line-height:1.35;opacity:0;transition:opacity .3s;pointer-events:none}.l4 .nt small{display:block;color:#bbb;font-size:12.5px;margin-bottom:3px}.l4 .sc[data-s="3"] .nt{opacity:1}
.l4 .ly-t{display:flex;align-items:center;gap:10px;height:58px;padding:0 20px;border-bottom:1px solid #E6E6E6;flex:none}.l4 .st{border:1px solid #9CCBE6;color:#006FA8;border-radius:8px;padding:3px 10px;font-size:14px}.l4 .st.o{border-color:#BDBDBD;color:#555}.l4 .pr2{border:1px solid #D9A45C;color:#8A5C00;border-radius:8px;padding:3px 10px;font-size:14px}.l4 .ly-t em{margin-left:auto;font-style:normal;color:#555;font-size:17px;letter-spacing:.14em}
.l4 .ly-b{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 350px;overflow:hidden}
.l4 .mc{padding:22px 34px 0 50px;transition:transform .5s cubic-bezier(.3,.8,.3,1)}.l4 .sd{border-left:1px solid #E6E6E6;overflow:hidden}.l4 .sd>div{padding:20px 24px;transition:transform .5s cubic-bezier(.3,.8,.3,1)}
.l4 .mc h4{font-size:23px;line-height:1.25;font-weight:700;margin:0 0 22px}.l4 .mc h5{font-size:18px;font-weight:700;margin:22px 0 10px}.l4 .mc p{font-size:15.5px;line-height:1.55;color:#171717;margin:0 0 12px}
.l4 .mc table{width:100%;border-collapse:collapse;font-size:14.5px;margin-bottom:14px}.l4 .mc th{background:#F5F5F5;font-weight:500;text-align:left}.l4 .mc th,.l4 .mc td{border:1px solid #E6E6E6;padding:8px 10px}
.l4 .ckr{display:flex;gap:12px;align-items:flex-start;font-size:15.5px;padding:4px 0}.l4 .ckr u{width:17px;height:17px;border:1.6px solid #333;border-radius:3px;flex:none;margin-top:3px;text-decoration:none;display:grid;place-items:center;font-size:11px;color:#fff}.l4 .ckr u.y{background:#39B54A;border-color:#39B54A}
.l4 .sub-h{display:flex;align-items:center;gap:10px;font-weight:600;font-size:15px;margin-top:20px}.l4 .sub-h i{font-style:normal}.l4 .sub-h .pb{width:60px;height:4px;background:#E6E6E6;border-radius:2px;overflow:hidden}.l4 .sub-h .pb s{display:block;height:100%;background:#39B54A}.l4 .sub-h small{color:#737373;font-weight:400;font-family:ui-monospace,monospace}
.l4 .sbr{display:flex;align-items:center;gap:9px;padding:6px 0 6px 16px;font-size:14.5px;border-left:1px solid #E6E6E6}.l4 .sbr u{width:8px;height:8px;border-radius:50%;background:#0086CC;text-decoration:none;flex:none}.l4 .sbr u.d{background:#39B54A}.l4 .sbr u.o{background:#888}.l4 .sbr.sel{font-weight:600}
.l4 .strat{display:flex;align-items:center;gap:8px;color:#555;font-size:14.5px;margin-top:18px}.l4 .gl{display:flex;align-items:center;gap:9px;font-size:14.5px;padding:6px 0}.l4 .gl::before{content:"";width:8px;height:8px;border-radius:50%;background:#1E7A2E}
.l4 .tb{display:flex;gap:4px;background:#F5F5F5;border-radius:9px;padding:4px;margin:16px 0;font-size:14.5px}.l4 .tb span{flex:1;text-align:center;padding:6px;border-radius:7px;color:#737373}.l4 .tb .on{background:#fff;color:#111;font-weight:500;box-shadow:0 0 0 1px #E6E6E6}
.l4 .cm{display:flex;gap:12px;margin-bottom:14px;font-size:15px}.l4 .cm .av{width:36px;height:36px;border-radius:9px;font-size:12px}.l4 .cm b{font-weight:600}.l4 .cm small{color:#737373;margin-left:6px}.l4 .cm p{margin:2px 0 0}
.l4 .dt{display:inline-flex;align-items:center;gap:7px}.l4 .dt u{width:9px;height:9px;border-radius:50%;text-decoration:none;flex:none}.l4 .pp2{font-size:11.5px;font-weight:500;border-radius:6px;padding:1px 7px}.l4 .pp2.h{background:#FDEFD8;color:#9A5B00}.l4 .bar{flex:1;height:5px;border-radius:3px;background:#E6E6E6;overflow:hidden}.l4 .bar i{display:block;height:100%;background:#39B54A;transition:width .25s}
.l4 .clh{margin-bottom:8px}.l4 .clh b{font-weight:600}.l4 .clp{display:flex;align-items:center;gap:8px;font-size:12px;color:#737373;margin-bottom:10px}
.l4 .ci{display:flex;align-items:center;gap:10px;width:100%;border:0;background:none;padding:6px 0;font:inherit;font-size:13.5px;color:#171717;text-align:left;cursor:pointer}.l4 .ci u{width:18px;height:18px;border:1.5px solid #BDBDBD;border-radius:4px;text-decoration:none;display:grid;place-items:center;font-size:12px;color:transparent;flex:none;transition:background .15s,border-color .15s}.l4 .ci.on u{background:#39B54A;border-color:#39B54A;color:#fff}.l4 .ci.on{color:#737373}.l4 .ci:focus-visible{outline:2px solid #0050D6;outline-offset:2px}
.l4 .cia{border:1px solid #E6E6E6;border-radius:8px;padding:6px 10px;color:#737373;font-size:13px;margin-top:8px}
.l4 .aib{margin-left:6px;border:1px solid #9CCBE6;color:#006FA8;border-radius:5px;padding:0 5px;font-size:11px;font-weight:500}.l4 .inp{border:1px solid #E6E6E6;background:#FAFAFA;border-radius:9px;padding:10px 14px;color:#737373;font-size:14.5px}
.l4 .ph{font-size:15px;font-weight:500;margin:0 0 26px}.l4 .rw{display:grid;grid-template-columns:115px 1fr;align-items:center;gap:10px;min-height:48px;font-size:14.5px;padding:0 6px;margin:0 -6px;border-radius:9px;transition:box-shadow .25s,background .25s}.l4 .rw small{font-size:14px;color:#171717}.l4 .rw>span{display:flex;align-items:center;gap:8px;min-width:0}.l4 .rw .tr{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;display:block}
.l4 .sh{display:flex;align-items:center;gap:9px;font-size:15px;font-weight:600;margin:24px 0 10px}.l4 .sh::before{content:"⌄";color:#555;font-weight:400;margin-top:-6px}
.l4 .pk small{color:#737373}.l4 .rel{padding:6px 8px;margin:0 -8px;border-radius:9px;transition:box-shadow .25s,background .25s}.l4 .rel>div{font-size:15px;margin:8px 0 3px}.l4 .rl{display:flex;gap:9px;font-size:14px;line-height:1.3;padding:4px 0}.l4 .rl::before{content:"";width:8px;height:8px;border-radius:50%;background:#888;margin-top:5px;flex:none}.l4 .rl.a::before{background:#0086CC}
.l4 .zn{border:1px solid #E6E6E6;border-radius:12px;padding:12px 14px;margin-bottom:10px}.l4 .zn>b{display:block;font-size:12.5px;font-weight:500;letter-spacing:.06em;margin-bottom:8px;color:#333}.l4 .zn>span{color:#737373;font-size:13px}
.l4 .fl{display:grid;grid-template-columns:32px minmax(0,1fr) auto;gap:10px;align-items:center;padding:6px 0;font-size:14px;line-height:1.25}.l4 .fl i{width:32px;height:36px;border-radius:6px;background:#EEF3FB;color:#2F6FD0;display:grid;place-items:center;font:600 9px "Golos Text",sans-serif;font-style:normal}.l4 .fl>span{min-width:0;overflow-wrap:anywhere}.l4 .fl small{display:block;color:#737373;font-size:12px}.l4 .fl em{font-style:normal;font-size:10.5px;font-weight:600;background:#F2F2F2;border-radius:5px;padding:1px 5px}
.l4 .ent{display:grid;grid-template-columns:100px 1fr;font-size:14.5px;row-gap:12px}.l4 .ent a{color:#178A36}
.l4 .sc[data-s="2"] .g1,.l4 .sc[data-s="3"] .gs,.l4 .sc[data-s="4"] .g2,.l4 .sc[data-s="5"] .g3,.l4 .sc[data-s="6"] .g4,.l4 .sc[data-s="7"] .g5{background:#EAF2FF;box-shadow:0 0 0 2px #0050D6}
.l4 .g2.hl2,.l4 .g5.hl2,.l4 .gs{border-radius:10px;padding:4px 10px;margin:0 -10px;transition:box-shadow .25s,background .25s}
.l4 .tbar{display:flex;align-items:center;gap:8px;height:50px;padding:0 16px;background:#FAFAFA;border-bottom:1px solid #E6E6E6;flex:none;font-size:13px}.l4 .seg{display:flex;gap:3px;background:#fff;border:1px solid #E6E6E6;border-radius:8px;padding:3px}.l4 .seg span{padding:3px 11px;border-radius:5px;color:#737373}.l4 .seg .on{background:#F5F5F5;color:#171717;font-weight:500}.l4 .tbn{background:#fff;border:1px solid #E6E6E6;border-radius:8px;padding:5px 11px;color:#171717}.l4 .tbn small{color:#737373;font-size:13px}.l4 .tbn.gr{margin-left:auto;border-color:#9FDCAE;background:#EEF8EE;color:#14532D}
.l4 .tg{flex:1;min-height:0;display:grid;grid-template-columns:300px 940px;overflow:hidden}
.l4 .tl1{border-right:1.5px solid #333;overflow:hidden}.l4 .thd{display:flex;justify-content:space-between;align-items:center;height:78px;padding:0 14px;font-size:13px;font-weight:600;letter-spacing:.08em;color:#555;border-bottom:1px solid #E6E6E6;box-sizing:border-box}
.l4 .tr1{display:grid;grid-template-columns:16px 10px minmax(0,1fr) 76px;gap:6px;align-items:center;height:32px;padding:0 12px 0 10px;font-size:13px;border-bottom:1px solid #F2F2F2;box-sizing:border-box}.l4 .tr1 .tw{color:#888;font-size:12px}.l4 .tr1 u{width:7px;height:7px;border-radius:50%;text-decoration:none}.l4 .tr1 .tt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.l4 .tr1 time{font:11.5px ui-monospace,Menlo,monospace;color:#555;text-align:right}.l4 .tr1.ep .tt{font-weight:600}.l4 .tr1.dn .tt{text-decoration:line-through;color:#888}
.l4 .tl2{position:relative;overflow:hidden}.l4 .tmo{display:flex;height:26px;background:#FAFAFA;border-bottom:1px solid #E6E6E6}.l4 .tmo span{display:grid;place-items:center;font:11px ui-monospace,Menlo,monospace;letter-spacing:.08em;color:#555;border-right:1px solid #E6E6E6;box-sizing:border-box}
.l4 .twk{display:grid;grid-template-columns:repeat(3,1fr);height:30px;border-bottom:1px solid #E6E6E6}.l4 .twk span{display:flex;align-items:center;padding-left:8px;font:11px ui-monospace,Menlo,monospace;color:#555;border-right:1px solid #E6E6E6}
.l4 .tdy{display:grid;grid-template-columns:repeat(21,1fr);height:22px;border-bottom:1px solid #E6E6E6}.l4 .tdy span{display:grid;place-items:center;font:9.5px ui-monospace,Menlo,monospace;color:#888}.l4 .tdy .we{background:#F7F7F7}
.l4 .tbd{position:relative;height:100%}.l4 .tbd>i{position:absolute;top:0;bottom:0;background:#FAFAFA}.l4 .tbd svg{position:absolute;left:0;top:0;overflow:visible}
.l4 .br{position:absolute;height:20px;border-radius:4px;display:flex;align-items:center;justify-content:space-between;padding:0 4px;box-sizing:border-box;color:#fff;font-size:11.5px;min-width:16px;overflow:hidden}.l4 .br s{width:2px;height:10px;border-left:1px solid rgba(255,255,255,.75);border-right:1px solid rgba(255,255,255,.75);box-sizing:content-box;flex:none;text-decoration:none}.l4 .br b{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;padding:0 6px}
.l4 .tnow{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed #D62929;z-index:3}.l4 .tnow b{position:absolute;top:2px;left:-34px;background:#D62929;color:#fff;font-size:10.5px;font-weight:700;border-radius:4px;padding:2px 7px}
.l4 .tft{display:flex;align-items:center;gap:6px;height:32px;padding:0 16px;font-size:12px;color:#555;border-top:1px solid #E6E6E6;background:#FAFAFA;flex:none}.l4 .tft b{font-weight:600}.l4 .tft em{margin-left:auto;font-style:normal;color:#888;font-size:11.5px}
.l4 .hero-s{position:relative;top:auto;height:auto;aspect-ratio:1240/560;margin-top:34px}
.l4 .ai .rc-line i svg,.l4 .rc-line i svg{width:60%;height:60%}
@media(max-width:900px){.l4 .how{grid-template-columns:1fr}.l4 .how .stage{order:-1;position:relative;top:auto;height:auto;aspect-ratio:1240/860}.l4 .hs{min-height:0;color:#171717}}
`;
  var wave = [8, 16, 24, 12, 28, 18, 10, 22, 30, 14, 20, 26, 9, 17, 25, 12, 21, 15, 27, 11, 19, 8].map(function (h) { return '<span style="height:' + h + 'px"></span>'; }).join("");
  var tile = function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + '</span><span><b>' + k + '</b><small>' + (D[k] || IDX[k].g) + '</small></span></a>'; };
  var C = { g: ["#DDF3DF", "#0A7D0A"], b: ["#DCE8FF", "#0050D6"], y: ["#FFECC2", "#8A5C00"], r: ["#FBDCDC", "#D62828"] };
  var steps = [["✎", "Zadania", C.g], ["☺", "Wykonawca i termin", C.b], ["◷", "Praca", C.y], ["◉", "Weryfikacja", C.r], ["✓", "Gotowe", C.g]];
  var flow = '<div class="flow">' + steps.map(function (t, i) {
    var n = steps[i + 1], box = '<div><i style="background:' + t[2][0] + ';color:' + t[2][1] + '">' + t[0] + '</i>' + t[1] + '</div>';
    if (!n) return box;
    return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fl' + i + '"><stop offset="0" stop-color="' + t[2][1] + '"/><stop offset="1" stop-color="' + n[2][1] + '"/></linearGradient></defs><rect y="6" width="96" height="2" rx="1" fill="url(#fl' + i + ')"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[2][1] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
  }).join("") + '</div>';

  var av = function (t, k) { return '<span class="av ' + (k || "") + '">' + t + '</span>'; };
  var tc = function (code, dot, pr, t, who, ent, extra, me, prog) {
    return '<div class="tc' + (me ? " me" : "") + (who === IT ? " ir" : "") + '"><div class="r1"><u style="background:' + dot + '"></u>' + code + (prog ? '<span class="pg">' + prog + '</span>' : "") + '<span class="pp ' + pr[0] + '">' + pr[1] + '</span></div><p>' + t + '</p><div class="r3">' + who + '<span class="en">' + ent + '</span>' + (extra || "") + '</div></div>';
  };
  var C0 = ["c", "Critical"], H = ["h", "High"], M = ["m", "Medium"], L = ["l", "Low"], W = ["w", "Lowest"];
  var col = function (name, dot, n, cards) { return '<div class="col"><header><u style="background:' + dot + '"></u>' + name + '<small>' + n + '</small></header>' + cards + '</div>'; };
  var IT = av("IT"), OM = av("OM", "a2"), KR = av("KR", "a3"), AI = av("AI", "ai");
  var board = '<div class="bh"><b>Zadania</b><span class="sw"><span class="on">Wszystkie</span><span>Moje zadania</span></span><small>Sortowanie: <b>Utworzono</b></small><em>Filtr &nbsp; ⋯</em></div><div class="bd">'
    + col("TO DO", "#888", 14, tc("tsk_Zm4RpQ1a", "#888", M, "Termobud: wyjazd na obiekt i pomiary dachu", IT, "Termobud") + tc("tsk_Ao2XsN8k", "#888", L, "Alfa Merezhi: zaktualizować specyfikację falowników", IT, "Alfa Merezhi") + tc("tsk_Lw5DeR2m", "#888", W, "Przygotować szablon umowy serwisowej", OM, "Aita Demo"))
    + col("IN PROGRESS", "#0086CC", 9, tc("tsk_Vn6TbC4x", "#0086CC", H, "Termobud: oferta z dwoma wariantami", IT, "Termobud", '<span class="ov">Dziś</span>', 1, "1/3") + tc("tsk_Qe1HwY7p", "#0086CC", M, "Enerhobud Servis: przygotować umowę", KR, "Enerhobud Servis") + tc("tsk_Fg9ZtK3s", "#0086CC", L, "Sprzedaż PV: zaktualizować prezentację", OM, "Aita Demo", "", 0, "0/4"))
    + col("IN REVIEW", "#7C3AED", 6, tc("tsk_Pf3UyJ6d", "#7C3AED", M, "Tekhnopark: prezentacja dla właściciela", AI, "Tekhnopark", '<span class="en" style="color:#0068A0">AI</span>') + tc("tsk_Sb7JcM1v", "#7C3AED", H, "Ahro Zakhid: obliczenie zwrotu", IT, "Ahro Zakhid"))
    + col("BLOCKED", "#D62828", 2, tc("tsk_Kd8LqB5r", "#D62828", C0, "Uzgodnić cenę sprzętu z dostawcą", OM, "Termobud", '<span class="ov">Po terminie: 3 dni</span>') + tc("tsk_Mx2VhE9c", "#D62828", H, "Spotkanie na obiekcie: Browary", IT, "Termobud"))
    + '</div>';
  var filt = '<div class="fp"><div class="hd3">Filtr<small>Wyczyść wszystko</small></div><div class="fi">Status<em>›</em></div><div class="fi">Priorytet<em>›</em></div><div class="fi on">Wykonawca<em>1</em></div><div class="who"><u class="y">✓</u>' + IT + ' Iryna Tkach</div><div class="who"><u></u>' + OM + ' Oleh Martyniuk</div><div class="who"><u></u>' + KR + ' Kateryna Rudenko</div><div class="fi">Termin<em>›</em></div><div class="fi">Obiekt<em>›</em></div><hr><div class="who" style="padding-left:0"><u></u>Do mojego review</div><div class="who" style="padding-left:0"><u></u>Zablokowane</div><div class="who" style="padding-left:0"><u></u>Utworzone przez AI</div></div>';
  var top = function (st, cls, pr) { return '<div class="ly-t"><span style="font-size:15px;color:#555">⤢</span><span class="st ' + cls + '">' + st + ' ⌄</span><span class="pr2">' + (pr || "High") + ' ⌄</span><em>⋯ &nbsp;ⓘ &nbsp;×</em></div>'; };
  var props = function (who, due, parent) {
    return '<div class="ph">Właściwości</div>'
      + '<div class="g1" style="border-radius:9px"><div class="rw"><small>Wykonawca</small><span>' + who + '</span></div><div class="rw"><small>Termin</small><span>▣ ' + due + '</span></div><div class="rw gs"><small>Subskrybenci</small><span>' + IT + OM + KR + ' +1</span></div><div class="rw"><small>Recenzenci</small><span>' + OM + ' Oleh Martyniuk</span></div></div>'
      + '<div class="rw"><small>Utworzył</small><span>' + OM + ' <b>Oleh Martyniuk</b></span></div>'
      + '<div class="rw g2"><small>Nadrzędne</small><span class="tr">' + parent + '</span></div>';
  };
  var subs = '<div class="sp"><b>Subskrybenci (4)</b><div class="pe">' + IT + ' Iryna Tkach<small>wykonawca</small></div><div class="pe">' + OM + ' Oleh Martyniuk<small>autor, recenzent</small></div><div class="pe">' + KR + ' Kateryna Rudenko<small>wspomniana na czacie</small></div><div class="pe">' + av("DT", "a2") + ' Dmytro Tkach<small>subskrybent</small></div></div><div class="nt"><small>Powiadomienie dla wszystkich subskrybentów</small>Iryna Tkach dodała plik do „Termobud: oferta w dwóch wariantach”</div>';
  var kid = '<div class="ly kid">' + top("In Progress", "") + subs + '<div class="ly-b"><div><div class="mc" data-k="main">'
    + '<h4>Termobud: oferta w dwóch wariantach</h4>'
    + '<h5>Kontekst</h5><p>Rozmowa 20.10: potrzebna PV ~150 kW na dach magazynu w Browarach, uruchomienie do wiosny. Dyrektor porównuje jeszcze dwie oferty.</p>'
    + '<h5>Co zrobić</h5><div class="ckr"><u class="y">✓</u><span><b>Wariant bez magazynu energii</b> — PV 150 kW, zwrot</span></div><div class="ckr"><u class="y">✓</u><span><b>Wariant z magazynem energii</b> — dodać BESS, porównać koszty</span></div><div class="ckr"><u></u><span><b>Wysłać ofertę dyrektorowi</b> — e-mail z dwoma PDF</span></div>'
    + '<h5>Kryterium gotowości</h5><p>Oferta wysłana klientowi, dyrektor potwierdził otrzymanie, data spotkania w kalendarzu.</p>'
    + '<div class="sub-h">Podzadania <span class="pb"><s style="width:33%"></s></span><small>1/3</small></div><div class="sbr">' + '<u class="d"></u>' + IT + ' Obliczenie zwrotu</div><div class="sbr"><u></u>' + IT + ' Specyfikacja sprzętu</div><div class="sbr"><u class="o"></u>' + OM + ' Tekst oferty</div>'
    + '<div class="strat">◎ Strategia <small>(1)</small></div><div class="gl">Sprzedaż PV: 5 umów do końca roku</div>'
    + '<div class="z-chat g5 hl2"><div class="tb"><span class="on">Czat</span><span>Historia</span></div>'
    + '<div class="cm">' + av("OM", "a2") + '<div><b>Oleh Martyniuk</b><small>11:20</small><p>@Agent Iryny, co z ceną sprzętu?</p></div></div>'
    + '<div class="cm">' + av("AI", "ai") + '<div><b>Agent Iryny</b><span class="aib">AI</span><small>agent: Iryna Tkach, 11:21</small><p>Dostawca potwierdził cenę o 10:40. E-mail jest w wynikach, przekazano Irynie.</p></div></div>'
    + '<div class="cm">' + av("AI", "ai") + '<div><b>Agent Oleha</b><span class="aib">AI</span><small>agent: Oleh Martyniuk, 11:22</small><p>Przekazano Olehowi: oferta będzie do piątku, blokada zdjęta.</p></div></div>'
    + '<div class="cm">' + av("IT") + '<div><b>Iryna Tkach</b><small>11:32</small><p>Dzięki, wysyłam ofertę dziś.</p></div></div>'
    + '<div class="inp">Wpisz wiadomość...</div></div>'
    + '</div></div><div class="sd"><div data-k="side">' + props(IT + " Iryna Tkach", "23 paź 2026", "EPIC: PV na dach magazynu, Termobud")
    + '<div class="sh">Etykiety</div><span class="rc-tag">Magazyn</span><span class="rc-tag">Browary</span>'
    + '<div class="sh">Szacowanie czasu</div><div class="pk"><div class="rw" style="min-height:30px"><small>Szacunek</small><span>8 godz.</span></div><div class="rw" style="min-height:30px"><small>Wykorzystano</small><span>5 godz.</span></div></div>'
    + '<div class="z-rel"><div class="sh">Powiązania</div><div class="rel g3"><div>Blokuje</div><div class="rl a">Spotkanie na obiekcie: Browary</div><div>Zablokowane przez</div><div class="rl">Uzgodnić cenę sprzętu z dostawcą</div></div></div>'
    + '<div class="z-att"><div class="sh">Załączniki <small style="color:#737373;font-weight:400">(3)</small></div><div class="g4" style="border-radius:12px"><div class="zn"><b>DANE WEJŚCIOWE</b><div class="fl"><i>PDF</i><span>Rachunki_za_energie.pdf<small>PDF • 1.2 MB</small></span><em>PDF</em></div></div><div class="zn"><b>WYNIKI (2)</b><div class="fl"><i>XLSX</i><span>Zwrot_PV_150kW.xlsx<small>XLSX • 84 KB</small></span><em>XLSX</em></div><div class="fl"><i>PDF</i><span>Oferta_Termobud_szkic.pdf<small>PDF • 2.3 MB</small></span><em>PDF</em></div></div></div></div>'
    + '<div class="sh" style="margin-top:20px">Powiązany obiekt</div><div class="ent"><span>Typ</span><span>Lead</span><span>Nazwa</span><a>Termobud</a></div>'
    + '</div></div></div></div>';
  var par = '<div class="ly par">' + top("To Do", "o", "Medium") + '<div class="ly-b"><div><div class="mc">'
    + '<h4>EPIC: PV na dach magazynu, Termobud</h4>'
    + '<h5>Cel</h5><p>Doprowadzić klienta od oferty do umowy na PV 150 kW i uruchomić stację do wiosny.</p>'
    + '<h5>Stan</h5><table><tr><th>Etap</th><th>O czym</th><th>Stan</th></tr><tr><td><b>Oferta</b></td><td>Dwa warianty, z magazynem energii i bez</td><td>w toku</td></tr><tr><td><b>Obiekt</b></td><td>Wizyta, pomiary dachu, rozdzielnia</td><td>zaplanowano</td></tr><tr><td><b>Umowa</b></td><td>Uzgodnienie warunków z dyrektorem</td><td>nie rozpoczęto</td></tr></table>'
    + '<div class="g2 hl2"><div class="sub-h" style="margin-top:6px">Podzadania <span class="pb"><s style="width:25%"></s></span><small>1/4</small></div><div class="sbr sel"><u></u>' + IT + ' Termobud: oferta w dwóch wariantach</div><div class="sbr"><u class="d"></u>' + IT + ' Agroaudyt zużycia za 12 miesięcy</div><div class="sbr"><u class="o"></u>' + IT + ' Termobud: wizyta na obiekcie i pomiary dachu</div><div class="sbr"><u class="o"></u>' + OM + ' Umowa i harmonogram płatności</div></div>'
    + '<div class="strat">◎ Strategia <small>(1)</small></div><div class="gl">Sprzedaż PV: 5 umów do końca roku</div>'
    + '</div></div><div class="sd"><div>' + props(OM + " Oleh Martyniuk", "30 lis 2026", "<span style=\"font-weight:400;color:#555\">+ Dodaj nadrzędne</span>") + '</div></div></div></div>';
  // часова шкала як на платформі: 3 тижні, 19.10–08.11
  var DW = 940 / 21, RH = 32, TOP = 0;
  var rows = [
    { t: "EPIC: PV na dach magazynu, Termobud", d: "10/19–11/6", a: 0, n: 19, c: "#737373", dot: "#737373", ep: 1 },
    { t: "Uzgodnić cenę sprzętu", d: "10/19–10/21", a: 0, n: 3, c: "#D62929", dot: "#D62929" },
    { t: "Obliczenie zwrotu", d: "10/20–10/21", a: 1, n: 2, c: "#DCEBDD", dot: "#1E7A2E", done: 1 },
    { t: "Termobud: oferta z dwoma wariantami", d: "10/21–10/23", a: 2, n: 3, c: "#0086CC", dot: "#0086CC" },
    { t: "Spotkanie na obiekcie: Browary", d: "10/22–10/22", a: 3, n: 1, c: "#888888", dot: "#888888" },
    { t: "Wizyta i pomiary dachu", d: "10/26–10/27", a: 7, n: 2, c: "#888888", dot: "#888888" },
    { t: "Umowa i harmonogram płatności", d: "10/28–11/6", a: 9, n: 10, c: "#888888", dot: "#888888", lab: 1 },
    { t: "Enerhobud Servis: przygotować umowę", d: "10/20–10/28", a: 1, n: 9, c: "#7C3AED", dot: "#7C3AED", lab: 1, top: 1 },
    { t: "Tekhnopark: prezentacja dla właściciela", d: "10/19–10/22", a: 0, n: 4, c: "#7C3AED", dot: "#7C3AED", top: 1 },
    { t: "Ahro Zakhid: obliczenie zwrotu", d: "10/20–10/23", a: 1, n: 4, c: "#0086CC", dot: "#0086CC", top: 1 },
    { t: "Alfa Merezhi: zaktualizować specyfikację", d: "10/23–10/30", a: 4, n: 8, c: "#888888", dot: "#888888", lab: 1, top: 1 },
    { t: "Sprzedaż PV: zaktualizować prezentację", d: "10/19–10/20", a: 0, n: 2, c: "#DCEBDD", dot: "#1E7A2E", done: 1, top: 1 },
    { t: "Szablon umowy serwisowej", d: "11/2–11/5", a: 14, n: 4, c: "#888888", dot: "#888888", top: 1 }
  ];
  var left = rows.map(function (r) {
    return '<div class="tr1' + (r.ep ? " ep" : "") + (r.done ? " dn" : "") + '"><span class="tw">' + (r.ep ? "›" : r.top ? "" : "└") + '</span><u style="background:' + r.dot + '"></u><span class="tt">' + r.t + '</span><time>' + r.d + '</time></div>';
  }).join("");
  var bars = rows.map(function (r, i) {
    return '<div class="br" style="left:' + (r.a * DW + 2) + 'px;width:' + (r.n * DW - 4) + 'px;top:' + (i * RH + 6) + 'px;background:' + r.c + (r.done ? ';color:transparent' : "") + '"><s></s>' + (r.lab ? '<b>' + r.t + '</b>' : "") + '<s></s></div>';
  }).join("");
  var dep = function (i, j) {
    var x1 = (rows[i].a + rows[i].n) * DW - 2, y1 = i * RH + 16, x2 = rows[j].a * DW + 2, y2 = j * RH + 16, m = Math.max(x1, x2 - 8) + 6;
    return '<path d="M' + x1 + ' ' + y1 + 'H' + m + 'V' + y2 + 'H' + (x2 + (x2 < m ? 0 : 0)) + '" fill="none" stroke="#9A9A9A" stroke-width="1.3"/><path d="M' + (x2 - 1) + ' ' + y2 + 'l6 -3.5v7z" transform="rotate(180 ' + (x2 + 2) + ' ' + y2 + ')" fill="#9A9A9A"/>';
  };
  var weeks = [["W43", "10/19"], ["W44", "10/26"], ["W45", "11/2"]];
  var days = "";
  for (var di = 0; di < 21; di++) days += '<span' + (di % 7 > 4 ? ' class="we"' : "") + '>' + "MTWTFSS"[di % 7] + '</span>';
  var shade = "";
  [5, 12, 19].forEach(function (x) { shade += '<i style="left:' + x * DW + 'px;width:' + 2 * DW + 'px"></i>'; });
  var time = '<div class="ly tline" style="left:0;right:0;top:0;bottom:0;border:0;border-radius:0;box-shadow:none"><div class="bh"><b>Zadania</b><span class="sw"><span class="on">Wszystkie</span><span>Moje zadania</span></span><small>Sortowanie: <b>Utworzono</b></small><em>Filtr &nbsp; ⋯</em></div>'
    + '<div class="tbar"><span class="seg"><span>Dzień</span><span class="on">Tydzień</span><span>Miesiąc</span></span><span class="tbn">≡</span><span class="tbn">◎ Dziś</span><span class="tbn"><small>Grupuj:</small> Brak ⌄</span><span class="tbn gr">Zależności</span><span class="tbn">Ścieżka kryt.</span></div>'
    + '<div class="tg"><div class="tl1"><div class="thd"><span>ZADANIE</span><span>DATY</span></div>' + left + '</div>'
    + '<div class="tl2"><div class="tmo"><span style="width:' + 13 * DW + 'px">PAŹDZIERNIK 2026</span><span style="width:' + 8 * DW + 'px">LISTOPAD 2026</span></div><div class="twk">' + weeks.map(function (w) { return '<span>' + w[0] + ' · ' + w[1] + '</span>'; }).join("") + '</div><div class="tdy">' + days + '</div>'
    + '<div class="tbd">' + shade + '<div class="tnow" style="left:' + (2.5 * DW) + 'px"><b>DZIŚ</b></div><svg width="940" height="' + rows.length * RH + '">' + dep(1, 3) + dep(3, 4) + dep(5, 6) + '</svg>' + bars + '</div></div></div>'
    + '<div class="tft"><b>13</b> zadań &nbsp;<span style="color:#0086CC"><b>2</b> in_progress</span> &nbsp;<span><b>6</b> open</span> &nbsp;<span style="color:#7C3AED"><b>2</b> review</span> &nbsp;<span><b>1</b> blocked</span> &nbsp;<span style="color:#1E7A2E"><b>2</b> done</span><em>3 zależności</em></div></div>';
  var scene = function (inner, k) { return '<div class="sc" data-s="' + k + '">' + inner + '</div>'; };

  var h = '<style>' + css + '</style><div class="l4">'
    + '<div class="crumb"><a href="../modules">Moduły</a> › Zadania</div>'
    + '<h1 class="mname"><span class="tile" style="background:' + tint(name) + '">' + icon(name) + '</span>' + name + '</h1>'
    + '<p class="promise">Kierownik widzi stan prac bez narad</p><p class="lead">Tablica pokazuje wykonawców, terminy i opóźnienia, a każde zadanie przechowuje swoją dyskusję i pliki.</p>'
    + '<div class="stage hero-s" aria-label="Tablica zadań z danymi demo">' + scene(board, "h") + '</div>'
    + '<div id="hwBar"><div class="hw-in"><span class="hw-tx">„Zadania” są w każdym pakiecie.</span><a class="btn" href="https://app.aita.world/auth/register" data-signup>Wypróbuj za darmo</a><a class="btn ghost" href="../demo">Bezpłatne demo</a></div></div><div id="hwBarS" style="height:1px;margin-top:-1px"></div>'
    + flow

    + '<section><h2>Trzy różnice</h2><div class="c3">'
    + '<div style="background:' + C.g[0] + '"><i style="color:' + C.g[1] + '">⛓</i><h3>Wszystko jest powiązane</h3><p>Zadanie jest powiązane z projektem lub klientem, więc wykonawca wie, o co chodzi, bez zbędnych pytań.</p></div>'
    + '<div style="background:' + C.y[0] + '"><i style="color:' + C.y[1] + '">✦</i><h3>Wykonawca AI</h3><p>Zadanie można przydzielić agentowi AI jak współpracownikowi, a pracownik sprawdza wynik.</p></div>'
    + '<div style="background:' + C.r[0] + '"><i style="color:' + C.r[1] + '">◷</i><h3>Widać opóźnienia</h3><p>Widać, którego zadania nie można zacząć, dopóki nie skończy się inne.</p></div>'
    + '</div></section>'

    + '<section><h2>Jak to działa</h2><div class="how"><div class="hl0">' + [
      [0, "Tablica", "Kolumny tablicy nazywają się tak, jak przyjęło się w Twojej firmie. Zadania przeciąga się z kolumny do kolumny."],
      [1, "Filtry", "Widać, kto czym się zajmuje, co czeka na sprawdzenie, a co stanęło."],
      [2, "Karta", "Zadanie ma wykonawcę, termin, priorytet i osobę, która sprawdza wynik."],
      [3, "Subskrybenci", "Każdy, kto obserwuje zadanie, dostaje powiadomienia o zmianach."],
      [7, "Dyskusja", "W zadaniu piszą ludzie i ich agenci AI. Agent zbiera, co trzeba, i przekazuje osobie, która go zleciła."],
      [4, "Nadrzędne", "Dużą pracę dzieli się na mniejsze zadania, a zadanie główne pokazuje, ile już zrobiono."],
      [5, "Powiązania", "Widać, co blokuje start tego zadania i jaka praca czeka na jego zakończenie."],
      [6, "Pliki", "Pliki wejściowe i gotowy wynik leżą w zadaniu osobno."],
      [8, "Oś czasu", "Na osi czasu widać terminy zadań i kolejność ich wykonania."]
    ].map(function (t, i) { return '<div class="hs' + (i ? "" : " on") + '" data-i="' + t[0] + '"><h3>' + t[1] + '</h3><p>' + t[2] + '</p></div>'; }).join("") + '</div>'
    + '<div class="stage rcs" aria-label="Tablica i karta zadania z danymi demo">' + scene(board + filt + '<div class="dim"></div>' + kid + par + time, 0) + '</div></div></section>'

    + '<section><h2>AI w module</h2><div class="ai">'
    + '<div><h3>Wykonawca</h3><p>Agent AI bierze zadanie do pracy i pokazuje postęp na czacie.</p><div class="ui"><small>Wykonawca</small><div class="rc-line"><i>✦</i>Agent AI</div><div class="msg">Przygotowuję prezentację dla właściciela. Pierwsza wersja będzie za godzinę.</div></div></div>'
    + '<div><h3>Asystent</h3><p>Agent odpowiada na pytania, bo widzi zadanie i wszystko, co jest z nim powiązane.</p><div class="ui"><small>Czat zadania</small><div class="msg"><b>Kiedy spotkanie z klientem?</b><br>W czwartek o 10:00, na obiekcie w Browarach.</div></div></div>'
    + '<div><h3>Z czatu</h3><p>Napisz agentowi, co zrobić, a zadanie pojawi się na tablicy.</p><div class="ui"><small>Zapytanie do agenta</small><br>Daj Irynie zadanie: oferta dla Termobudu do piątku<div class="msg">Zadanie utworzone, wykonawca: Iryna Tkach.</div></div></div>'
    + '</div><p class="limit">Gotową pracę agent przekazuje człowiekowi do sprawdzenia.</p></section>'

    + '<section><h2>Więcej możliwości</h2><div class="g6">'
    + '<div class="tall"><h3>Filtry</h3><div class="w"><div class="hd">Filtr<small>Wyczyść wszystko</small></div><div class="it on">Status<span class="dt"><u style="background:#0086CC"></u><u style="background:#7C3AED"></u><u style="background:#D62828"></u></span></div><div class="it">Priorytet<span class="dt"><span class="pp2 h">High</span></span></div><div class="it">Wykonawca<em>›</em></div><div class="it">Termin<em>›</em></div><hr><div class="cb"><u class="y">✓</u>Do mojego review</div><div class="cb"><u></u>Zablokowane</div><div class="cb"><u></u>Ma blokery</div><div class="cb"><u></u>Utworzone przez AI</div></div></div>'
    + '<div><h3>Własne kolumny</h3><div class="w"><div class="it"><span class="dt"><u style="background:#888"></u>To Do</span><em>14</em></div><div class="it"><span class="dt"><u style="background:#0086CC"></u>In Progress</span><em>9</em></div><div class="it"><span class="dt"><u style="background:#7C3AED"></u>In Review</span><em>6</em></div><div class="it"><span class="dt"><u style="background:#D62828"></u>Blocked</span><em>2</em></div></div></div>'
    + '<div><h3>Szacowanie czasu</h3><div class="w"><div class="it">Szacunek<em>8 godz.</em></div><div class="it">Wykorzystano<em>5 godz.</em></div><div class="bar" style="margin-top:6px"><i style="width:62%;background:#0086CC"></i></div></div></div>'
    + '<div class="tall"><h3>Checklisty</h3><div class="w ckl"><div class="clh"><b>Przed wizytą</b></div><div class="clp"><span>50%</span><div class="bar"><i style="width:50%"></i></div><span>2 z 4</span></div><button type="button" class="ci on"><u>✓</u>Pomiary dachu</button><button type="button" class="ci on"><u>✓</u>Zdjęcia rozdzielni</button><button type="button" class="ci"><u>✓</u>Rachunki za energię</button><button type="button" class="ci"><u>✓</u>Kontakt do dyrektora</button><div class="cia">Dodaj punkt...</div></div></div>'
    + '<div><h3>Raport dzienny</h3><div class="w"><div class="it"><span class="dt"><u style="background:#39B54A"></u>Zamknięte</span><em>6</em></div><div class="it"><span class="dt"><u style="background:#0086CC"></u>W toku</span><em>11</em></div><div class="it"><span class="dt"><u style="background:#D62828"></u>Po terminie</span><em>2</em></div></div></div>'
    + '<div><h3>Eksport</h3><div class="w"><div class="fl"><i>CSV</i><span>Zadania.csv<small>CSV • 48 KB</small></span></div><div class="fl"><i style="background:#E7F6EA;color:#1E7A2E">XLSX</i><span>Zadania.xlsx<small>XLSX • 96 KB</small></span></div></div></div>'
    + '</div></section>'

    + '<section><h2>Dostęp i dane</h2><div class="acc">'
    + '<div><h3>Firma</h3><p>Zadania projektu lub firmy widzą członkowie tej firmy.</p></div>'
    + '<div><h3>Prywatne</h3><p>Zadania „Tylko ja” widzą autor, wykonawca, recenzenci i osoby, którym udostępniono dostęp.</p></div>'
    + '<div><h3>Podzadania</h3><p>Widzą je te same osoby, co zadanie nadrzędne.</p></div>'
    + '</div></section>'

    + '<section><h2>Od czego zacząć</h2><div class="go3">' + [
      ["Kolumny", "Dopasuj kolumny do statusów Twojej firmy.", C.g],
      ["Zadania", "Utwórz pierwsze zadania w projektach.", C.b],
      ["Wykonawcy", "Przypisz wykonawców i terminy.", C.y]
    ].map(function (t, i, all) {
      var n = all[i + 1], box = '<div><i style="background:' + t[2][0] + ';color:' + t[2][1] + '">' + (i + 1) + '</i><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>';
      if (!n) return box;
      return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><rect y="6" width="96" height="2" rx="1" fill="' + n[2][1] + '"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[2][1] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
    }).join("") + '</div></section>'

    + '<section><h2>Pytania i odpowiedzi</h2>' + [
      ["Czym jest moduł „Zadania” i po co firmie?", "To tablica, na której widać, kto co robi i do kiedy. Kierownik widzi stan prac bez osobnych narad."],
      ["Czy można zobaczyć zadania według dat?", "Tak. Oś czasu pokazuje zadania według dni, tygodni lub miesięcy."],
      ["Gdzie znikają wykonane zadania?", "Po 10 dniach znikają z tablicy, ale nie są usuwane: znajdzie je wyszukiwarka."],
      ["Czy można wymagać podania przyczyny anulowania?", "Tak. Administrator włącza to w zasadach firmy, a przyczyna pojawia się na czacie zadania."],
      ["Czy za moduł trzeba dopłacać?", "Nie. „Zadania” są w każdym pakiecie."]
    ].map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join("") + '</section>'
    + '<section class="md-next"><h2>Co zobaczyć dalej</h2><div class="nb">' + nb.map(tile).join("") + '<a href="../modules" class="nb-all"><span class="tile" style="background:#eef0f2">→</span><span><b>Wszystkie moduły</b><small>Zobacz listę</small></span></a></div></section>'
    + '</div><div class="final"><h2>Pokażemy stan prac Twojego zespołu na jednej tablicy</h2><p>Wszystkie 48 modułów w każdym pakiecie od 50 € miesięcznie.</p><a class="btn" href="../demo">Bezpłatne demo</a></div>';

  var root = document.getElementById("mod");
  root.innerHTML = h;
  var ICON = {
    "✎": "M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z",
    "✓": "M20 6 9 17l-5-5",
    "☺": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    "◷": "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    "◉": "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    "⛓": "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
    "✦": "M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z"
  };
  root.querySelectorAll("i").forEach(function (x) { var p = ICON[x.textContent.trim()]; if (p) x.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + p + '"/></svg>'; });
  var sc = root.querySelector(".rcs .sc"), hs = [].slice.call(root.querySelectorAll(".hs"));
  var main = sc.querySelector('[data-k="main"]'), side = sc.querySelector('[data-k="side"]');
  var fit = function () { root.querySelectorAll(".stage").forEach(function (st) { var k = st.clientWidth / 1240, x = st.querySelector(".sc"); x.style.transform = "scale(" + k + ")"; if (st.classList.contains("rcs")) x.style.height = (st.clientHeight / k) + "px"; }); };
  var at = function (box, q, pad) {
    var old = box.style.transform; box.style.transition = "none"; box.style.transform = "";
    var k = sc.getBoundingClientRect().width / 1240 || 1, y = (box.querySelector(q).getBoundingClientRect().top - box.getBoundingClientRect().top) / k;
    box.style.transform = old; void box.offsetHeight; box.style.transition = "";
    return -(y - pad);
  };
  var show = function (i) {
    i = +i; sc.setAttribute("data-s", i); hs.forEach(function (x) { x.classList.toggle("on", +x.dataset.i === i); });
    main.style.transform = i === 7 ? "translateY(" + at(main, ".z-chat", 10) + "px)" : "";
    side.style.transform = i === 5 ? "translateY(" + at(side, ".z-rel", 10) + "px)" : i === 6 ? "translateY(" + at(side, ".z-att", 10) + "px)" : "";
  };
  fit(); addEventListener("resize", fit);
  hs.forEach(function (x) { x.onclick = function () { show(x.dataset.i); }; });
  if ("IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) show(e.target.dataset.i); }); }, { rootMargin: "-40% 0px -50% 0px" });
    hs.forEach(function (x) { seen.observe(x); });
  }
  var ckl = root.querySelector(".ckl");
  ckl.addEventListener("click", function (e) {
    var b = e.target.closest(".ci"); if (!b) return;
    b.classList.toggle("on");
    var all = ckl.querySelectorAll(".ci").length, on = ckl.querySelectorAll(".ci.on").length, pc = Math.round(on / all * 100), sp = ckl.querySelectorAll(".clp span");
    sp[0].textContent = pc + "%"; sp[1].textContent = on + " z " + all; ckl.querySelector(".clp i").style.width = pc + "%";
  });
  var bar2 = document.getElementById("hwBar"), mark = document.getElementById("hwBarS");
  var sync = function () { var on = mark.getBoundingClientRect().top >= innerHeight; bar2.classList.toggle("stuck", on); document.documentElement.classList.toggle("ag-in", on); };
  addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync();
})();
