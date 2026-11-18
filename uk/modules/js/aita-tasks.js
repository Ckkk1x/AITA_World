// Сторінка модуля «Завдання» за шаблоном «Ліди»: дошка, поверх якої висуваються картка, підзадачі, зв'язки й часова шкала.
(function () {
  if (name !== "Завдання") return;
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
  var steps = [["✎", "Завдання", C.g], ["☺", "Виконавець і строк", C.b], ["◷", "Робота", C.y], ["◉", "Перевірка", C.r], ["✓", "Готово", C.g]];
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
  var IT = av("ІТ"), OM = av("ОМ", "a2"), KR = av("КР", "a3"), AI = av("AI", "ai");
  var board = '<div class="bh"><b>Задачі</b><span class="sw"><span class="on">Усі</span><span>Мої задачі</span></span><small>Сортування: <b>Створено</b></small><em>Фільтр &nbsp; ⋯</em></div><div class="bd">'
    + col("TO DO", "#888", 14, tc("tsk_Zm4RpQ1a", "#888", M, "Термобуд: виїзд на об\'єкт і заміри даху", IT, "Термобуд") + tc("tsk_Ao2XsN8k", "#888", L, "Альфа Мережі: оновити специфікацію інверторів", IT, "Альфа Мережі") + tc("tsk_Lw5DeR2m", "#888", W, "Підготувати шаблон договору на обслуговування", OM, "Aita Demo"))
    + col("IN PROGRESS", "#0086CC", 9, tc("tsk_Vn6TbC4x", "#0086CC", H, "Термобуд: пропозиція з двома варіантами", IT, "Термобуд", '<span class="ov">Сьогодні</span>', 1, "1/3") + tc("tsk_Qe1HwY7p", "#0086CC", M, "Енергобуд Сервіс: підготувати договір", KR, "Енергобуд Сервіс") + tc("tsk_Fg9ZtK3s", "#0086CC", L, "Продажі СЕС: оновити презентацію", OM, "Aita Demo", "", 0, "0/4"))
    + col("IN REVIEW", "#7C3AED", 6, tc("tsk_Pf3UyJ6d", "#7C3AED", M, "Технопарк: презентація для власника", AI, "Технопарк", '<span class="en" style="color:#0068A0">AI</span>') + tc("tsk_Sb7JcM1v", "#7C3AED", H, "Агро Захід: розрахунок окупності", IT, "Агро Захід"))
    + col("BLOCKED", "#D62828", 2, tc("tsk_Kd8LqB5r", "#D62828", C0, "Погодити ціну обладнання з постачальником", OM, "Термобуд", '<span class="ov">Прострочено: 3д</span>') + tc("tsk_Mx2VhE9c", "#D62828", H, "Зустріч на об\'єкті: Бровари", IT, "Термобуд"))
    + '</div>';
  var filt = '<div class="fp"><div class="hd3">Фільтр<small>Очистити все</small></div><div class="fi">Статус<em>›</em></div><div class="fi">Пріоритет<em>›</em></div><div class="fi on">Виконавець<em>1</em></div><div class="who"><u class="y">✓</u>' + IT + ' Ірина Ткач</div><div class="who"><u></u>' + OM + ' Олег Мартинюк</div><div class="who"><u></u>' + KR + ' Катерина Руденко</div><div class="fi">Строк<em>›</em></div><div class="fi">Сутність<em>›</em></div><hr><div class="who" style="padding-left:0"><u></u>На моєму рев\'ю</div><div class="who" style="padding-left:0"><u></u>Заблоковано</div><div class="who" style="padding-left:0"><u></u>Створено AI</div></div>';
  var top = function (st, cls, pr) { return '<div class="ly-t"><span style="font-size:15px;color:#555">⤢</span><span class="st ' + cls + '">' + st + ' ⌄</span><span class="pr2">' + (pr || "High") + ' ⌄</span><em>⋯ &nbsp;ⓘ &nbsp;×</em></div>'; };
  var props = function (who, due, parent) {
    return '<div class="ph">Властивості</div>'
      + '<div class="g1" style="border-radius:9px"><div class="rw"><small>Виконавець</small><span>' + who + '</span></div><div class="rw"><small>Строк</small><span>▣ ' + due + '</span></div><div class="rw gs"><small>Підписники</small><span>' + IT + OM + KR + ' +1</span></div><div class="rw"><small>Рев\'юери</small><span>' + OM + ' Олег Мартинюк</span></div></div>'
      + '<div class="rw"><small>Створив</small><span>' + OM + ' <b>Олег Мартинюк</b></span></div>'
      + '<div class="rw g2"><small>Батьківська</small><span class="tr">' + parent + '</span></div>';
  };
  var subs = '<div class="sp"><b>Підписники (4)</b><div class="pe">' + IT + ' Ірина Ткач<small>виконавець</small></div><div class="pe">' + OM + ' Олег Мартинюк<small>автор, рев\'юер</small></div><div class="pe">' + KR + ' Катерина Руденко<small>згадана в чаті</small></div><div class="pe">' + av("ДТ", "a2") + ' Дмитро Ткач<small>підписаний</small></div></div><div class="nt"><small>Сповіщення всім підписникам</small>Ірина Ткач додала файл у «Термобуд: пропозиція з двома варіантами»</div>';
  var kid = '<div class="ly kid">' + top("In Progress", "") + subs + '<div class="ly-b"><div><div class="mc" data-k="main">'
    + '<h4>Термобуд: пропозиція з двома варіантами</h4>'
    + '<h5>Контекст</h5><p>Дзвінок 20.10: потрібна СЕС ~150 кВт на дах складу в Броварах, запуск до весни. Директор порівнює ще дві пропозиції.</p>'
    + '<h5>Що зробити</h5><div class="ckr"><u class="y">✓</u><span><b>Варіант без накопичення</b> — СЕС 150 кВт, окупність</span></div><div class="ckr"><u class="y">✓</u><span><b>Варіант із накопиченням</b> — додати BESS, порівняти витрати</span></div><div class="ckr"><u></u><span><b>Надіслати пропозицію директору</b> — лист із двома PDF</span></div>'
    + '<h5>Критерій готовності</h5><p>Пропозицію надіслано клієнту, директор підтвердив отримання, дата зустрічі в календарі.</p>'
    + '<div class="sub-h">Підзадачі <span class="pb"><s style="width:33%"></s></span><small>1/3</small></div><div class="sbr">' + '<u class="d"></u>' + IT + ' Розрахунок окупності</div><div class="sbr"><u></u>' + IT + ' Специфікація обладнання</div><div class="sbr"><u class="o"></u>' + OM + ' Текст пропозиції</div>'
    + '<div class="strat">◎ Стратегія <small>(1)</small></div><div class="gl">Продажі СЕС: 5 договорів до кінця року</div>'
    + '<div class="z-chat g5 hl2"><div class="tb"><span class="on">Чат</span><span>Історія</span></div>'
    + '<div class="cm">' + av("ОМ", "a2") + '<div><b>Олег Мартинюк</b><small>11:20</small><p>@Агент Ірини, що з ціною обладнання?</p></div></div>'
    + '<div class="cm">' + av("AI", "ai") + '<div><b>Агент Ірини</b><span class="aib">AI</span><small>агент Ірини Ткач, 11:21</small><p>Постачальник підтвердив ціну о 10:40. Лист у результатах, Ірині передано.</p></div></div>'
    + '<div class="cm">' + av("AI", "ai") + '<div><b>Агент Олега</b><span class="aib">AI</span><small>агент Олега Мартинюка, 11:22</small><p>Олегу передано: Пропозиція буде до п\'ятниці, блокування знято.</p></div></div>'
    + '<div class="cm">' + av("ІТ") + '<div><b>Ірина Ткач</b><small>11:32</small><p>Дякую, надсилаю пропозицію сьогодні.</p></div></div>'
    + '<div class="inp">Введіть повідомлення...</div></div>'
    + '</div></div><div class="sd"><div data-k="side">' + props(IT + " Ірина Ткач", "23 жовт. 2026 р.", "EPIC: СЕС на дах складу, Термобуд")
    + '<div class="sh">Мітки</div><span class="rc-tag">Склад</span><span class="rc-tag">Бровари</span>'
    + '<div class="sh">Оцінка часу</div><div class="pk"><div class="rw" style="min-height:30px"><small>Оцінка</small><span>8 год</span></div><div class="rw" style="min-height:30px"><small>Витрачено</small><span>5 год</span></div></div>'
    + '<div class="z-rel"><div class="sh">Зв\'язки</div><div class="rel g3"><div>Блокує</div><div class="rl a">Зустріч на об\'єкті: Бровари</div><div>Заблоковано</div><div class="rl">Погодити ціну обладнання з постачальником</div></div></div>'
    + '<div class="z-att"><div class="sh">Вкладення <small style="color:#737373;font-weight:400">(3)</small></div><div class="g4" style="border-radius:12px"><div class="zn"><b>ВИХІДНІ ДАНІ</b><div class="fl"><i>PDF</i><span>Рахунки_за_електроенергію.pdf<small>PDF • 1.2 MB</small></span><em>PDF</em></div></div><div class="zn"><b>РЕЗУЛЬТАТИ (2)</b><div class="fl"><i>XLSX</i><span>Окупність_СЕС_150кВт.xlsx<small>XLSX • 84 KB</small></span><em>XLSX</em></div><div class="fl"><i>PDF</i><span>Пропозиція_Термобуд_чернетка.pdf<small>PDF • 2.3 MB</small></span><em>PDF</em></div></div></div></div>'
    + '<div class="sh" style="margin-top:20px">Пов\'язана сутність</div><div class="ent"><span>Тип</span><span>Лід</span><span>Назва</span><a>Термобуд</a></div>'
    + '</div></div></div></div>';
  var par = '<div class="ly par">' + top("To Do", "o", "Medium") + '<div class="ly-b"><div><div class="mc">'
    + '<h4>EPIC: СЕС на дах складу, Термобуд</h4>'
    + '<h5>Мета</h5><p>Довести клієнта від пропозиції до договору на СЕС 150 кВт і запустити станцію до весни.</p>'
    + '<h5>Стан</h5><table><tr><th>Етап</th><th>Про що</th><th>Стан</th></tr><tr><td><b>Пропозиція</b></td><td>Два варіанти, з накопиченням і без</td><td>у роботі</td></tr><tr><td><b>Об\'єкт</b></td><td>Виїзд, заміри даху, щитова</td><td>заплановано</td></tr><tr><td><b>Договір</b></td><td>Погодження умов із директором</td><td>не почато</td></tr></table>'
    + '<div class="g2 hl2"><div class="sub-h" style="margin-top:6px">Підзадачі <span class="pb"><s style="width:25%"></s></span><small>1/4</small></div><div class="sbr sel"><u></u>' + IT + ' Термобуд: пропозиція з двома варіантами</div><div class="sbr"><u class="d"></u>' + IT + ' Агро-аудит споживання за 12 місяців</div><div class="sbr"><u class="o"></u>' + IT + ' Термобуд: виїзд на об\'єкт і заміри даху</div><div class="sbr"><u class="o"></u>' + OM + ' Договір і графік оплат</div></div>'
    + '<div class="strat">◎ Стратегія <small>(1)</small></div><div class="gl">Продажі СЕС: 5 договорів до кінця року</div>'
    + '</div></div><div class="sd"><div>' + props(OM + " Олег Мартинюк", "30 лист. 2026 р.", "<span style=\"font-weight:400;color:#555\">+ Додати батьківську</span>") + '</div></div></div></div>';
  // часова шкала як на платформі: 3 тижні, 19.10–08.11
  var DW = 940 / 21, RH = 32, TOP = 0;
  var rows = [
    { t: "EPIC: СЕС на дах складу, Термобуд", d: "10/19–11/6", a: 0, n: 19, c: "#737373", dot: "#737373", ep: 1 },
    { t: "Погодити ціну обладнання", d: "10/19–10/21", a: 0, n: 3, c: "#D62929", dot: "#D62929" },
    { t: "Розрахунок окупності", d: "10/20–10/21", a: 1, n: 2, c: "#DCEBDD", dot: "#1E7A2E", done: 1 },
    { t: "Термобуд: пропозиція з двома варіантами", d: "10/21–10/23", a: 2, n: 3, c: "#0086CC", dot: "#0086CC" },
    { t: "Зустріч на об\'єкті: Бровари", d: "10/22–10/22", a: 3, n: 1, c: "#888888", dot: "#888888" },
    { t: "Виїзд і заміри даху", d: "10/26–10/27", a: 7, n: 2, c: "#888888", dot: "#888888" },
    { t: "Договір і графік оплат", d: "10/28–11/6", a: 9, n: 10, c: "#888888", dot: "#888888", lab: 1 },
    { t: "Енергобуд Сервіс: підготувати договір", d: "10/20–10/28", a: 1, n: 9, c: "#7C3AED", dot: "#7C3AED", lab: 1, top: 1 },
    { t: "Технопарк: презентація для власника", d: "10/19–10/22", a: 0, n: 4, c: "#7C3AED", dot: "#7C3AED", top: 1 },
    { t: "Агро Захід: розрахунок окупності", d: "10/20–10/23", a: 1, n: 4, c: "#0086CC", dot: "#0086CC", top: 1 },
    { t: "Альфа Мережі: оновити специфікацію", d: "10/23–10/30", a: 4, n: 8, c: "#888888", dot: "#888888", lab: 1, top: 1 },
    { t: "Продажі СЕС: оновити презентацію", d: "10/19–10/20", a: 0, n: 2, c: "#DCEBDD", dot: "#1E7A2E", done: 1, top: 1 },
    { t: "Шаблон договору на обслуговування", d: "11/2–11/5", a: 14, n: 4, c: "#888888", dot: "#888888", top: 1 }
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
  var time = '<div class="ly tline" style="left:0;right:0;top:0;bottom:0;border:0;border-radius:0;box-shadow:none"><div class="bh"><b>Задачі</b><span class="sw"><span class="on">Усі</span><span>Мої задачі</span></span><small>Сортування: <b>Створено</b></small><em>Фільтр &nbsp; ⋯</em></div>'
    + '<div class="tbar"><span class="seg"><span>День</span><span class="on">Тиждень</span><span>Місяць</span></span><span class="tbn">≡</span><span class="tbn">◎ Сьогодні</span><span class="tbn"><small>Групувати:</small> Жодне ⌄</span><span class="tbn gr">Залежності</span><span class="tbn">Крит. шлях</span></div>'
    + '<div class="tg"><div class="tl1"><div class="thd"><span>ЗАДАЧА</span><span>ДАТИ</span></div>' + left + '</div>'
    + '<div class="tl2"><div class="tmo"><span style="width:' + 13 * DW + 'px">ЖОВТЕНЬ 2026 Р.</span><span style="width:' + 8 * DW + 'px">ЛИСТОПАД 2026 Р.</span></div><div class="twk">' + weeks.map(function (w) { return '<span>' + w[0] + ' · ' + w[1] + '</span>'; }).join("") + '</div><div class="tdy">' + days + '</div>'
    + '<div class="tbd">' + shade + '<div class="tnow" style="left:' + (2.5 * DW) + 'px"><b>СЬОГОДНІ</b></div><svg width="940" height="' + rows.length * RH + '">' + dep(1, 3) + dep(3, 4) + dep(5, 6) + '</svg>' + bars + '</div></div></div>'
    + '<div class="tft"><b>13</b> задач &nbsp;<span style="color:#0086CC"><b>2</b> in_progress</span> &nbsp;<span><b>6</b> open</span> &nbsp;<span style="color:#7C3AED"><b>2</b> review</span> &nbsp;<span><b>1</b> blocked</span> &nbsp;<span style="color:#1E7A2E"><b>2</b> done</span><em>3 залежності</em></div></div>';
  var scene = function (inner, k) { return '<div class="sc" data-s="' + k + '">' + inner + '</div>'; };

  var h = '<style>' + css + '</style><div class="l4">'
    + '<div class="crumb"><a href="../modules">Модулі</a> › Завдання</div>'
    + '<h1 class="mname"><span class="tile" style="background:' + tint(name) + '">' + icon(name) + '</span>' + name + '</h1>'
    + '<p class="promise">Керівник бачить стан робіт без нарад</p><p class="lead">Дошка показує виконавців, строки й затримки, а кожне завдання зберігає своє обговорення й файли.</p>'
    + '<div class="stage hero-s" aria-label="Дошка завдань із демо-даними">' + scene(board, "h") + '</div>'
    + '<div id="hwBar"><div class="hw-in"><span class="hw-tx">«Завдання» входять у кожен пакет.</span><a class="btn" href="https://app.aita.world/auth/register" data-signup>Почати безкоштовно</a><a class="btn ghost" href="../demo">Безкоштовне демо</a></div></div><div id="hwBarS" style="height:1px;margin-top:-1px"></div>'
    + flow

    + '<section><h2>Три відмінності</h2><div class="c3">'
    + '<div style="background:' + C.g[0] + '"><i style="color:' + C.g[1] + '">⛓</i><h3>Усе пов\'язано</h3><p>Завдання пов\'язане з проєктом чи клієнтом, тож виконавець знає, про що йдеться, без зайвих запитань.</p></div>'
    + '<div style="background:' + C.y[0] + '"><i style="color:' + C.y[1] + '">✦</i><h3>AI-виконавець</h3><p>Завдання можна призначити AI-агенту, як колезі, а працівник перевіряє результат.</p></div>'
    + '<div style="background:' + C.r[0] + '"><i style="color:' + C.r[1] + '">◷</i><h3>Видно затримки</h3><p>Видно, яке завдання не можна почати, доки не закінчене інше.</p></div>'
    + '</div></section>'

    + '<section><h2>Як це працює</h2><div class="how"><div class="hl0">' + [
      [0, "Дошка", "Колонки дошки називаються так, як заведено у вашій компанії. Завдання перетягують із колонки в колонку."],
      [1, "Фільтри", "Видно, хто чим зайнятий, що чекає на перевірку і що зупинилося."],
      [2, "Картка", "У завдання є виконавець, строк, пріоритет і людина, яка перевіряє результат."],
      [3, "Підписники", "Кожен, хто стежить за завданням, отримує сповіщення про зміни."],
      [7, "Обговорення", "У завданні пишуть люди та їхні AI-агенти. Агент збирає потрібне й передає людині, яка його доручила."],
      [4, "Батьківське", "Велику роботу ділять на менші завдання, а головне завдання показує, скільки вже зроблено."],
      [5, "Зв\'язки", "Видно, що заважає почати це завдання і яка робота чекає на його завершення."],
      [6, "Файли", "Вхідні файли й готовий результат лежать у завданні окремо."],
      [8, "Часова шкала", "На шкалі часу видно строки завдань і порядок їх виконання."]
    ].map(function (t, i) { return '<div class="hs' + (i ? "" : " on") + '" data-i="' + t[0] + '"><h3>' + t[1] + '</h3><p>' + t[2] + '</p></div>'; }).join("") + '</div>'
    + '<div class="stage rcs" aria-label="Дошка й картка завдання з демо-даними">' + scene(board + filt + '<div class="dim"></div>' + kid + par + time, 0) + '</div></div></section>'

    + '<section><h2>AI в модулі</h2><div class="ai">'
    + '<div><h3>Виконавець</h3><p>AI-агент бере завдання в роботу й показує хід роботи в чаті.</p><div class="ui"><small>Виконавець</small><div class="rc-line"><i>✦</i>AI-агент</div><div class="msg">Готую презентацію для власника. Перший варіант буде за годину.</div></div></div>'
    + '<div><h3>Асистент</h3><p>Агент відповідає на запитання, бо бачить завдання й усе, що з ним пов\'язано.</p><div class="ui"><small>Чат завдання</small><div class="msg"><b>Коли зустріч із клієнтом?</b><br>У четвер о 10:00, на об\'єкті в Броварах.</div></div></div>'
    + '<div><h3>З чату</h3><p>Напишіть агенту, що зробити, і завдання з\'явиться на дошці.</p><div class="ui"><small>Запит до агента</small><br>Постав Ірині завдання на пропозицію для Термобуду до п\'ятниці<div class="msg">Завдання створено, виконавець Ірина Ткач.</div></div></div>'
    + '</div><p class="limit">Готову роботу агент передає на перевірку людині.</p></section>'

    + '<section><h2>Ще можливості</h2><div class="g6">'
    + '<div class="tall"><h3>Фільтри</h3><div class="w"><div class="hd">Фільтр<small>Очистити все</small></div><div class="it on">Статус<span class="dt"><u style="background:#0086CC"></u><u style="background:#7C3AED"></u><u style="background:#D62828"></u></span></div><div class="it">Пріоритет<span class="dt"><span class="pp2 h">High</span></span></div><div class="it">Виконавець<em>›</em></div><div class="it">Строк<em>›</em></div><hr><div class="cb"><u class="y">✓</u>На моєму рев\'ю</div><div class="cb"><u></u>Заблоковано</div><div class="cb"><u></u>Має блокери</div><div class="cb"><u></u>Створено AI</div></div></div>'
    + '<div><h3>Свої колонки</h3><div class="w"><div class="it"><span class="dt"><u style="background:#888"></u>To Do</span><em>14</em></div><div class="it"><span class="dt"><u style="background:#0086CC"></u>In Progress</span><em>9</em></div><div class="it"><span class="dt"><u style="background:#7C3AED"></u>In Review</span><em>6</em></div><div class="it"><span class="dt"><u style="background:#D62828"></u>Blocked</span><em>2</em></div></div></div>'
    + '<div><h3>Оцінка часу</h3><div class="w"><div class="it">Оцінка<em>8 год</em></div><div class="it">Витрачено<em>5 год</em></div><div class="bar" style="margin-top:6px"><i style="width:62%;background:#0086CC"></i></div></div></div>'
    + '<div class="tall"><h3>Чек-листи</h3><div class="w ckl"><div class="clh"><b>Перед виїздом</b></div><div class="clp"><span>50%</span><div class="bar"><i style="width:50%"></i></div><span>2 з 4</span></div><button type="button" class="ci on"><u>✓</u>Заміри даху</button><button type="button" class="ci on"><u>✓</u>Фото щитової</button><button type="button" class="ci"><u>✓</u>Рахунки за електроенергію</button><button type="button" class="ci"><u>✓</u>Контакт директора</button><div class="cia">Додати пункт...</div></div></div>'
    + '<div><h3>Денний звіт</h3><div class="w"><div class="it"><span class="dt"><u style="background:#39B54A"></u>Закрито</span><em>6</em></div><div class="it"><span class="dt"><u style="background:#0086CC"></u>У роботі</span><em>11</em></div><div class="it"><span class="dt"><u style="background:#D62828"></u>Прострочено</span><em>2</em></div></div></div>'
    + '<div><h3>Експорт</h3><div class="w"><div class="fl"><i>CSV</i><span>Завдання.csv<small>CSV • 48 KB</small></span></div><div class="fl"><i style="background:#E7F6EA;color:#1E7A2E">XLSX</i><span>Завдання.xlsx<small>XLSX • 96 KB</small></span></div></div></div>'
    + '</div></section>'

    + '<section><h2>Доступ і дані</h2><div class="acc">'
    + '<div><h3>Компанія</h3><p>Завдання проєкту чи компанії бачать учасники цієї компанії.</p></div>'
    + '<div><h3>Особисте</h3><p>Завдання «Тільки я» бачать автор, виконавець, рев\'юери й ті, кому відкрили доступ.</p></div>'
    + '<div><h3>Підзадачі</h3><p>Їх бачать ті самі люди, що й батьківське завдання.</p></div>'
    + '</div></section>'

    + '<section><h2>З чого почати</h2><div class="go3">' + [
      ["Колонки", "Налаштуйте колонки під статуси вашої компанії.", C.g],
      ["Завдання", "Створіть перші завдання в проєктах.", C.b],
      ["Виконавці", "Призначте виконавців і строки.", C.y]
    ].map(function (t, i, all) {
      var n = all[i + 1], box = '<div><i style="background:' + t[2][0] + ';color:' + t[2][1] + '">' + (i + 1) + '</i><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>';
      if (!n) return box;
      return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><rect y="6" width="96" height="2" rx="1" fill="' + n[2][1] + '"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[2][1] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
    }).join("") + '</div></section>'

    + '<section><h2>Питання й відповіді</h2>' + [
      ["Що таке модуль «Завдання» і навіщо він компанії?", "Це дошка, на якій видно, хто що робить і до коли. Керівник бачить стан робіт без окремих нарад."],
      ["Чи можна подивитися завдання в датах?", "Так. Часова шкала показує завдання за днями, тижнями чи місяцями."],
      ["Куди зникають виконані завдання?", "Через 10 днів вони зникають із дошки, але не видаляються: їх знаходить пошук."],
      ["Чи можна вимагати причину скасування?", "Так. Адміністратор вмикає це в політиках компанії, і причина з\'являється в чаті завдання."],
      ["Чи потрібно доплачувати за модуль?", "Ні. «Завдання» входять у кожен пакет."]
    ].map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join("") + '</section>'
    + '<section class="md-next"><h2>Що подивитися далі</h2><div class="nb">' + nb.map(tile).join("") + '<a href="../modules" class="nb-all"><span class="tile" style="background:#eef0f2">→</span><span><b>Усі модулі</b><small>Переглянути список</small></span></a></div></section>'
    + '</div><div class="final"><h2>Покажемо стан робіт вашої команди на одній дошці</h2><p>Усі 48 модулів у кожному пакеті від €50 на місяць.</p><a class="btn" href="../demo">Безкоштовне демо</a></div>';

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
    sp[0].textContent = pc + "%"; sp[1].textContent = on + " з " + all; ckl.querySelector(".clp i").style.width = pc + "%";
  });
  var bar2 = document.getElementById("hwBar"), mark = document.getElementById("hwBarS");
  var sync = function () { var on = mark.getBoundingClientRect().top >= innerHeight; bar2.classList.toggle("stuck", on); document.documentElement.classList.toggle("ag-in", on); };
  addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync();
})();
