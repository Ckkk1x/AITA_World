// Спільний рушій сторінок модулів: шаблон «Ліди». Кожен модуль передає свій вміст через MP(cfg).
(function () {
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
.l4 .sc[data-s="1"] .dim,.l4 .sc[data-s="4"] .dim,.l4 .sc[data-s="8"] .dim,.l4 .sc[data-s="9"] .dim,.l4 .sc[data-s="10"] .dim{opacity:1}
.l4 .sc[data-s="1"] .kc,.l4 .sc[data-s="2"] .kc,.l4 .sc[data-s="3"] .kc,.l4 .sc[data-s="4"] .kc,.l4 .sc[data-s="7"] .kc,.l4 .sc[data-s="8"] .kc,.l4 .sc[data-s="9"] .kc,.l4 .sc[data-s="5"] .rec,.l4 .sc[data-s="6"] .ldc{transform:none}
.l4 .rec{left:0;right:0;top:0;bottom:0;border:0;border-radius:0;box-shadow:none;padding:24px 60px;overflow:hidden;display:block}
.l4 .evd{position:absolute;left:150px;right:150px;top:44px;background:#fff;border-radius:12px;box-shadow:0 24px 70px -10px rgba(0,0,0,.4);z-index:6;display:grid;grid-template-columns:minmax(0,1fr) 330px;opacity:0;pointer-events:none;transform:translateY(12px);transition:opacity .3s,transform .3s;font-size:14px}.l4 .sc[data-s="4"] .evd{opacity:1;transform:none}
.l4 .evd .e1{padding:20px 24px;border-right:1px solid #E6E6E6}.l4 .evd .e2{padding:20px 22px}.l4 .evd h5{font-size:17px;font-weight:600;margin:0 0 8px}.l4 .evd .el{color:#737373;font-size:13px;margin:12px 0 5px}.l4 .gbt{display:inline-block;background:#EEF8EE;border:1px solid #9FDCAE;color:#14532D;border-radius:8px;padding:5px 12px;font-size:13.5px;margin:6px 6px 0 0}.l4 .gbt.w{background:#fff;border-color:#E6E6E6;color:#171717}.l4 .pill2{display:inline-block;background:#FDEEEE;color:#C0271B;border:1px solid #F4C6C2;border-radius:12px;padding:1px 9px;font-size:12.5px}.l4 .rcd{border:1px solid #E6E6E6;border-radius:9px;padding:8px 12px;margin-bottom:6px}.l4 .rcd small{display:block;color:#737373;font-size:12px}.l4 .rcd.hi{box-shadow:0 0 0 2px #0050D6;background:#EAF2FF}.l4 .pr3{display:flex;align-items:center;gap:9px;padding:5px 0}.l4 .pr3 small{display:block;color:#737373;font-size:12px}
.l4 .rg{display:grid;grid-template-columns:minmax(0,1fr) 270px;gap:18px}.l4 .rb{border:1px solid #E6E6E6;border-radius:12px;padding:16px 18px;font-size:14.5px;line-height:1.5}.l4 .rt{font-size:23px;font-weight:600;margin:0 0 2px}.l4 .rs{color:#737373;font-size:13.5px;margin:0 0 14px}.l4 .rtb{display:flex;gap:6px;margin:10px 0 12px;font-size:13.5px}.l4 .rtb span{padding:4px 10px;border-radius:7px;color:#555}.l4 .rtb .on{border:1px solid #E6E6E6;color:#111;font-weight:500}.l4 .rd{background:#EEF4FF;border:1px solid #CFDDF7;border-radius:10px;padding:10px 14px;margin-top:12px;font-size:14px}.l4 .rd b{color:#0050D6}
.l4 .ldc .lh{font-size:22px;font-weight:700;margin:0 0 4px}.l4 .tkr{border:1px solid #E6E6E6;border-radius:9px;padding:8px 12px;margin-top:6px;font-size:14px}.l4 .tkr small{display:block;color:#737373;font-size:12.5px;margin-top:2px}
.l4 .nts p{margin:0 0 9px;font-size:14.5px;line-height:1.45}
.l4 .p8,.l4 .p9{display:none}.l4 .sc[data-s="8"] .p8,.l4 .sc[data-s="9"] .p9{display:block}.l4 .sc[data-s="8"] .p7,.l4 .sc[data-s="9"] .p7{display:none}
.l4 .sc[data-s="8"] .t7,.l4 .sc[data-s="9"] .t7{background:none;color:#737373;box-shadow:none;font-weight:400}.l4 .sc[data-s="8"] .t8,.l4 .sc[data-s="9"] .t9{background:#fff;color:#111;font-weight:500;box-shadow:0 0 0 1px #E6E6E6}
.l4 .hi1{display:flex;gap:10px;padding:6px 0;font-size:14px}.l4 .hi1 small{margin-left:auto;color:#737373;white-space:nowrap}
body .final{background:#EEF4FF!important}body .l4 .c3 p,body .l4 .hs.on p,body .l4 .ai p,body .l4 .acc p,body .l4 .go3 p,body .l4 details p{color:#737373}body .l4 .g6>div{background:#FAFAFA}body .l4 .nb a{background:#FAFAFA}
.l4 .ch{display:flex;align-items:center;gap:8px;height:52px;padding:0 18px;border-bottom:1px solid #E6E6E6;font-size:13px}.l4 .ch span{display:inline-flex;align-items:center;gap:6px;border:1px solid #E6E6E6;border-radius:18px;padding:4px 11px;white-space:nowrap}.l4 .ch u{width:9px;height:9px;border-radius:50%;text-decoration:none}.l4 .ch .on{background:#EEF8EE;border-color:#9FDCAE}.l4 .ch em{margin-left:auto;font-style:normal;color:#737373}
.l4 .cg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:14px}.l4 .cc{border:1px solid #E6E6E6;border-radius:10px;padding:12px 14px;font-size:13.5px;line-height:1.4;min-height:112px;position:relative;box-sizing:border-box}.l4 .cc.me{box-shadow:0 0 0 2px #0050D6}
.l4 .cc .h{display:flex;gap:10px;align-items:center;margin-bottom:8px}.l4 .cc .h .av{width:34px;height:34px;background:#F2F2F2;color:#555;font-size:11px}.l4 .cc b{font-weight:600;font-size:15px}.l4 .cc small{display:block;color:#737373;font-size:12.5px}.l4 .cc .ty{border:1px solid #E6E6E6;border-radius:5px;font-size:10.5px;padding:0 4px;margin-left:6px;font-weight:500;color:#555}.l4 .cc .ln{position:absolute;right:12px;top:12px;border:1px solid #E6E6E6;border-radius:6px;padding:0 6px;font-size:12px;color:#555}.l4 .rl2{display:inline-block;border:1px solid;border-radius:12px;padding:0 8px;font-size:11.5px;margin-bottom:6px}
.l4 .mt{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:14px;font-size:13.5px}.l4 .mt span{border:1px solid #E6E6E6;border-radius:16px;padding:3px 10px}
.l4 .ct{font-size:27px;font-weight:700;margin:6px 0 6px}.l4 .cs{color:#555;margin:0 0 18px;font-size:15px}
.l4 .nt2{border:1px solid #E6E6E6;border-radius:8px;margin-bottom:18px}.l4 .nt2 div{padding:8px 12px;border-bottom:1px solid #E6E6E6;color:#737373;font-size:13px;letter-spacing:.14em}.l4 .nt2 p{margin:0;padding:12px;font-size:15px}
.l4 .ci2{font-size:13px;color:#737373;margin:10px 0 3px}.l4 .cv{font-size:15px;padding:3px 0}.l4 .ad{border:1px dashed #E6E6E6;border-radius:6px;padding:3px 10px;color:#888;font-size:14px;margin-top:3px}
.l4 .ld{background:#F7F7F7;border-radius:10px;padding:10px 12px;margin-bottom:8px;font-size:14px;line-height:1.35}.l4 .ld .st2{display:inline-block;background:#EEF8EE;color:#0A7D0A;border:1px solid #CFE8CF;border-radius:6px;padding:0 7px;font-size:11.5px;margin-right:6px}.l4 .ld .st2.b{background:#EEF4FF;color:#0050D6;border-color:#CFDDF7}.l4 .ld small{color:#555;font-size:13px}
.l4 .hb{border-radius:12px;padding:6px 10px;margin:0 -10px;transition:box-shadow .25s,background .25s}
.l4 .sc[data-s="1"] .q1,.l4 .sc[data-s="2"] .q2,.l4 .sc[data-s="3"] .q3,.l4 .sc[data-s="4"] .q4,.l4 .sc[data-s="7"] .q5,.l4 .sc[data-s="8"] .q5,.l4 .sc[data-s="9"] .q5{background:#EAF2FF;box-shadow:0 0 0 2px #0050D6}
.l4 .og{border:1px solid #E6E6E6;border-radius:10px;padding:10px 12px;display:flex;gap:10px;align-items:center;font-size:14.5px}.l4 .og i{width:32px;height:32px;border-radius:8px;background:#F2F2F2;display:grid;place-items:center;font-style:normal;font-size:12px;font-weight:600;color:#555}.l4 .og small{display:block;color:#737373;font-size:12px}
.l4 .rw>.seg2{display:inline-flex;width:fit-content;gap:2px;background:#F5F5F5;border-radius:6px;padding:2px;font-size:12.5px}.l4 .rw>.seg2 span{padding:1px 7px;color:#737373}.l4 .rw>.seg2 .on{background:#fff;color:#111;font-weight:600;border-radius:5px}
.l4 .tkk{border:1px solid #E6E6E6;border-radius:10px;padding:10px 12px;margin-bottom:8px;font-size:14px;line-height:1.35}.l4 .tkk small{display:block;color:#737373;font-size:12.5px}.l4 .bdg{margin-left:8px;border:1px solid #E6E6E6;border-radius:6px;padding:0 7px;font-size:11.5px;color:#555}
.l4 .nl{left:300px;right:300px;top:90px;bottom:auto;border-radius:12px;padding:20px 22px;font-size:14.5px;opacity:0;pointer-events:none;transform:translateY(16px)!important;transition:opacity .3s,transform .3s}.l4 .sc[data-s="10"] .nl{opacity:1;transform:none!important}.l4 .nl h5{margin:0 0 14px;font-size:18px;font-weight:600}.l4 .in2{border:1.5px solid #39B54A;border-radius:8px;padding:9px 12px;margin-bottom:8px}.l4 .sg{border:1px solid #E6E6E6;border-radius:10px;padding:8px;margin-bottom:12px}.l4 .sg small{display:block;color:#737373;font-size:12px;padding:3px 6px}.l4 .sg div{display:flex;align-items:center;gap:9px;padding:7px 6px;border-radius:7px}.l4 .sg .on{background:#EAF2FF}.l4 .bt{display:flex;gap:8px;justify-content:flex-end}.l4 .bt span{border:1px solid #E6E6E6;border-radius:8px;padding:6px 12px;font-size:13.5px}.l4 .bt .go{background:#EEF8EE;border-color:#9FDCAE;color:#14532D}

.l4 .ly.in{transform:none}.l4 .sc.dimon .dim{opacity:1}
.l4 .pop{position:absolute;background:#fff;border-radius:12px;box-shadow:0 24px 70px -10px rgba(0,0,0,.38);opacity:0;pointer-events:none;transform:translateY(12px);transition:opacity .3s,transform .3s;z-index:6;font-size:14.5px}.l4 .pop.in{opacity:1;transform:none}
.l4 .hon{background:#EAF2FF!important;box-shadow:0 0 0 2px #0050D6!important}.l4 [data-hl]{border-radius:10px;transition:box-shadow .25s,background .25s}
.l4 [data-sc]{transition:transform .5s cubic-bezier(.3,.8,.3,1)}
.l4 .pg{padding:18px 22px}.l4 .pgt{display:flex;align-items:center;gap:12px;margin-bottom:12px}.l4 .pgt b{font-size:19px;font-weight:600}.l4 .pgt em{margin-left:auto;font-style:normal}
.l4 .b1{display:inline-block;border:1px solid #E6E6E6;border-radius:8px;padding:5px 11px;font-size:13.5px;background:#fff;white-space:nowrap}.l4 .b1.g{background:#EEF8EE;border-color:#9FDCAE;color:#14532D}.l4 .b1.r{background:#FDEEEE;border-color:#F0B7B3;color:#B3261E}.l4 .b1.k{background:#39B54A;border-color:#39B54A;color:#fff}
.l4 .fr{display:flex;align-items:center;gap:10px;height:44px;padding:0 8px;font-size:15px;border-radius:8px}.l4 .fr .ic2{width:18px;height:15px;border:1.6px solid #555;border-radius:3px;flex:none}.l4 .fr small{color:#737373;font-size:12.5px}.l4 .fr em{margin-left:auto;font-style:normal;color:#737373;letter-spacing:.2em;font-size:13px}
.l4 table.tb3{width:100%;border-collapse:collapse;font-size:14px}.l4 .tb3 th{font-size:12px;letter-spacing:.06em;color:#555;font-weight:600;text-align:left;padding:10px;border-bottom:1px solid #E6E6E6}.l4 .tb3 td{padding:11px 10px;border-bottom:1px solid #F0F0F0;vertical-align:middle}.l4 .lg{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:6px;color:#fff;font-weight:600;font-size:12px;margin-right:8px}
.l4 .th{display:inline-block;border-radius:10px;padding:1px 9px;font-size:12px}.l4 .th.m{background:#FFF1DC;color:#9A5B00}.l4 .th.h{background:#FDE3E1;color:#C0271B}.l4 .th.l{background:#DCEFFB;color:#006FA8}
.l4 .pc{border:1px solid #E6E6E6;border-radius:12px;padding:12px 14px;font-size:13.5px;line-height:1.4}.l4 .pc .pn{display:flex;gap:11px;background:none;padding:0;margin:0;border:0;box-shadow:none}.l4 .pc .pn .av{width:42px;height:42px;font-size:13px}.l4 .pc b{font-weight:600;font-size:15px}.l4 .pc .ps{color:#1E7A2E;font-size:13.5px;font-weight:500}.l4 .pc small{display:block;color:#555;font-size:12.5px}.l4 .tg2{display:inline-block;border-radius:6px;padding:0 7px;font-size:11.5px;margin:4px 4px 0 0;background:#E9F7EC;color:#1E7A2E}.l4 .tg2.b{background:#E1F0FB;color:#0068A0}.l4 .tg2.p{background:#EFE8FE;color:#5B2FC9}.l4 .tg2.y{background:#FFF1DC;color:#9A5B00}.l4 .msgb{display:inline-block;border:1px solid #E6E6E6;border-radius:8px;padding:3px 10px;font-size:12.5px;margin-top:8px}
.l4 .pgr{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.l4 .ptabs{display:flex;gap:6px;margin-bottom:14px;font-size:14px}.l4 .ptabs span{padding:5px 11px;border-radius:7px;color:#555}.l4 .ptabs .on{background:#39B54A;color:#fff;font-weight:500}
.l4 .mx{display:grid;grid-template-columns:minmax(0,1fr) 70px 70px;font-size:14px}.l4 .mx>span{padding:9px 12px;border-bottom:1px solid #F0F0F0}.l4 .mx .c{text-align:center}.l4 .mx .hd4{font-size:11.5px;letter-spacing:.06em;color:#555}.l4 .mx .ok{color:#1E7A2E;font-weight:600}.l4 .mx .pa{color:#9A5B00}.l4 .mx .no{color:#888}.l4 .mx .we{background:#EEF8EE}.l4 .mx .they{background:#FDEEEE}
.l4 .cmp{border:1px solid #E6E6E6;border-radius:12px;padding:14px 16px;font-size:13.5px}.l4 .cmp b{font-size:15px;font-weight:600}.l4 .cmp .lb{font-size:10.5px;letter-spacing:.06em;color:#737373}.l4 .cmp .vb{display:inline-block;font-size:10.5px;border-radius:5px;padding:0 6px;background:#F2F2F2;color:#555;margin:6px 4px 0 0;letter-spacing:.04em}.l4 .cmp .vb.ok{background:#E9F7EC;color:#1E7A2E}.l4 .cmp .g2{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px;margin-top:10px}
.l4 .lrow{height:68px}
`;
  window.MK = {
    av: function (t, k) { return '<span class="av ' + (k || "") + '">' + t + '</span>'; }
  };
  var C = { g: ["#DDF3DF", "#0A7D0A"], b: ["#DCE8FF", "#0050D6"], y: ["#FFECC2", "#8A5C00"], r: ["#FBDCDC", "#D62828"] };
  window.MK.C = C;
  var ICON = {
    person: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    org: "M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4",
    target: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    pen: "M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z",
    clock: "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
    folder: "M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    lock: "M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4",
    link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
    star: "M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z",
    search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3",
    chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    check: "M20 6 9 17l-5-5",
    chat: "M21 12a8 8 0 0 1-12 7l-6 2 2-6a8 8 0 1 1 16-3z",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"
  };
  var ic = function (n) { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + (ICON[n] || ICON.star) + '"/></svg>'; };
  var line = function (c1, c2, id) { return '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="' + id + '"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient></defs><rect y="6" width="96" height="2" rx="1" fill="url(#' + id + ')"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + c2 + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>'; };
  window.MP = function (c) {
    if (name !== c.name) return;
    var tile = function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + '</span><span><b>' + k + '</b><small>' + (D[k] || IDX[k].g) + '</small></span></a>'; };
    var cs = [C.g, C.b, C.y, C.r, C.g];
    var flow = '<div class="flow">' + c.flow.map(function (t, i) {
      var k = cs[i], n = cs[i + 1], box = '<div><i style="background:' + k[0] + ';color:' + k[1] + '">' + ic(t[0]) + '</i>' + t[1] + '</div>';
      return i < c.flow.length - 1 ? box + line(k[1], n[1], "fl" + i) : box;
    }).join("") + '</div>';
    var tri = [C.g, C.y, C.r];
    // Енергетичний ланцюжок: одна станція проходить модулі по черзі; сторінки ланцюжка показують смужку «Шлях станції»
    var CH = [["Energy Design (projekt 3D)", "Jak będzie wyglądać stacja na mojej działce?", "2,3 MW + 4 MWh"],
      ["Kosztorys", "Ile to będzie kosztować?", "2,59 mln €"], ["Symulator BESS", "Ile zarobi magazyn energii?", "357 tys. € rocznie"],
      ["Model finansowy", "Czy się zwróci i czy bank da kredyt?", "IRR 17,9 %, 6 lat"], ["Schemat jednokreskowy", "Czy przyłączą do sieci?", "2 stacje transformatorowe, 10 kV"],
      ["Dokumentacja projektowa", "Czy przejdzie uzgodnienia?", "8 tomów, podpis inżyniera"]];
    var ci = CH.map(function (x) { return x[0]; }).indexOf(name);
    var chainBar = function () {
      return '<div class="chainbar" aria-label="Jedna stacja we wszystkich modułach"><span class="cb-t">Pytania inwestora o jedną stację: PV 2 278 kWp + magazyn energii 4 064 kWh</span><div class="cb">' + CH.map(function (x, i) {
        var on = i === ci, tag = on ? "span" : "a", href = on ? "" : ' href="' + modUrl(x[0]) + '"';
        return '<' + tag + href + ' class="cb-s' + (on ? " on" : "") + '"><small>' + x[1] + '</small><b>' + x[2] + '</b></' + tag + '>';
      }).join("") + '</div></div>';
    };
    var chainNav = function () {
      var pv = CH[ci - 1], nx = CH[ci + 1];
      return '<div class="cnav">' + (pv ? '<a href="' + modUrl(pv[0]) + '"><small>← Poprzednie pytanie</small><b>' + pv[1] + '</b></a>' : '<span></span>')
        + (nx ? '<a class="nx" href="' + modUrl(nx[0]) + '"><small>Następne pytanie →</small><b>' + nx[1] + '</b></a>' : "") + '</div>';
    };
    var lk = function (t) {
      (c.links || []).forEach(function (l) { if (l[1] !== name) t = t.replace(new RegExp("(^|[^>\\wА-яІіЇїЄєҐґÀ-ɏ'])(" + l[0] + ")", "i"), '$1<a class="ilk" href="' + modUrl(l[1]) + '">$2</a>'); });
      return t;
    };
    var ioRow = function (r) { return r[1] ? '<a class="io-r" href="' + modUrl(r[1]) + '">' + r[0] + '<span>→</span></a>' : '<div class="io-r">' + r[0] + '</div>'; };
    css += '.l4 .chainbar{margin-top:44px;position:static!important;top:auto!important;z-index:auto!important;background:none!important;box-shadow:none!important;backdrop-filter:none!important}.l4 .cb-t{display:block;font-size:14px;color:#737373;margin-bottom:12px}'
      + '.l4 .cb{display:flex;align-items:stretch;gap:8px}.l4 .cb-s{flex:1;min-width:0;display:block;padding:14px 16px;border-radius:16px;background:#FAFAFA;border:1px solid #EDEDED;color:#111;text-decoration:none;transition:background .2s}'
      + '.l4 a.cb-s:hover{background:#F0F0F0}.l4 .cb-s.on{background:#EEF4FF;border-color:#B9D0FF}.l4 .cb-s b{display:block;font-size:17px;font-weight:600;line-height:1.25;margin-top:6px}'
      + '.l4 .cb-s small{display:block;font-size:14px;line-height:1.3;color:#555;min-height:2.6em}.l4 .cb-ar{align-self:center;font-style:normal;color:#B0B0B0}'
      + '.l4 .pn{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.l4 .pn>div{display:grid;grid-template-rows:auto 1fr;border-radius:28px;overflow:hidden;border:1px solid #E6E6E6}'
      + '.l4 .pn-was{background:#FAFAFA;padding:22px 28px}.l4 .pn-now{padding:22px 28px 28px;background:#fff}.l4 .pn small{display:block;font-size:13px;letter-spacing:.02em;text-transform:uppercase;color:#999;margin-bottom:8px}'
      + '.l4 .pn-was p{margin:0;font-size:17px;line-height:1.4;color:#737373}.l4 .pn-now small{color:#0A7D0A}.l4 .pn h3{font-size:28px;line-height:1.1;letter-spacing:-.02em;font-weight:500;margin:0 0 10px}'
      + '.l4 .pn-now p{margin:0;font-size:17px;line-height:1.42;color:#555}.l4 .slnk{display:inline-block;margin-top:14px;font-size:16px;font-weight:500;color:#0050D6;text-decoration:none}.l4 .slnk:hover{text-decoration:underline}'
      + '.l4 .ilk{color:inherit;text-decoration:underline;text-decoration-color:#9DBBF5;text-underline-offset:3px}.l4 .ilk:hover{color:#0050D6}'
      + '.l4 .io{display:grid;grid-template-columns:1fr auto 1fr;gap:32px;align-items:center}.l4 .io-c small{display:block;font-size:14px;color:#737373;margin-bottom:10px}'
      + '.l4 .io-r{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;margin-bottom:8px;border-radius:14px;background:#FAFAFA;border:1px solid #EDEDED;font-size:16px;color:#111;text-decoration:none}'
      + '.l4 a.io-r:hover{background:#F0F0F0}.l4 .io-r span{color:#0050D6}.l4 .io-m{display:grid;justify-items:center;gap:10px;text-align:center}.l4 .io-m .tile{width:72px;height:72px;border-radius:20px;display:grid;place-items:center}.l4 .io-m b{font-size:20px;font-weight:600}'
      + '.l4 .cnav{display:flex;justify-content:space-between;gap:16px;margin-top:96px}.l4 .cnav a{flex:1;max-width:48%;padding:22px 26px;border-radius:20px;background:#FAFAFA;border:1px solid #EDEDED;color:#111;text-decoration:none}'
      + '.l4 .cnav a:hover{background:#F0F0F0}.l4 .cnav .nx{text-align:right;margin-left:auto}.l4 .cnav small{display:block;font-size:14px;color:#737373;margin-bottom:6px}.l4 .cnav b{font-size:24px;font-weight:500}'
      + '@media(max-width:900px){.l4 .cb{flex-direction:column}.l4 .cb-ar{display:none}.l4 .pn,.l4 .io{grid-template-columns:1fr}}';
    var h = '<style>' + css + (c.css || "") + '</style><div class="l4">'
      + '<div class="crumb"><a href="../modules">Moduły</a> › ' + name + '</div>'
      + '<h1 class="mname"><span class="tile" style="background:' + tint(name) + '">' + icon(name) + '</span>' + (c.short || name) + '</h1>'
      + '<p class="promise">' + c.promise + '</p><p class="lead">' + c.lead + '</p>'
      + '<div class="stage hero-s" aria-label="Widok modułu z danymi demo"><div class="sc" data-s="h">' + c.hero + '</div></div>'
      + '<div id="hwBar"><div class="hw-in"><span class="hw-tx">„' + name + '” ' + (["Magazyn", "Czat", "Notatnik spotkań", "Panel główny", "Dziennik decyzji"].indexOf(name) >= 0 ? 'jest' : 'są') + ' w każdym pakiecie.</span><a class="btn" href="https://app.aita.world/auth/register" data-signup>Wypróbuj za darmo</a><a class="btn ghost" href="../demo">Bezpłatne demo</a></div></div><div id="hwBarS" style="height:1px;margin-top:-1px"></div>'
      + (c.chain ? chainBar() : flow)
      + (c.pains ? '<section><h2>' + (c.painsTitle || "Co to zmienia") + '</h2><div class="pn">' + c.pains.map(function (t) { return '<div><div class="pn-was"><small>Jak jest teraz</small><p>' + t[0] + '</p></div><div class="pn-now"><small>W Aita</small><h3>' + t[1] + '</h3><p>' + lk(t[2]) + '</p>' + (t[3] ? '<a class="slnk" href="' + modUrl(t[3]) + '">' + (t[4] || ("Otwórz „" + t[3] + "”")) + ' →</a>' : "") + '</div></div>'; }).join("") + '</div></section>' : "")
      + '<section><h2>Trzy różnice</h2><div class="c3">' + c.diff.map(function (t, i) { return '<div style="background:' + tri[i][0] + '"><i style="color:' + tri[i][1] + '">' + ic(t[0]) + '</i><h3>' + t[1] + '</h3><p>' + t[2] + '</p></div>'; }).join("") + '</div></section>'
      + '<section><h2>Jak to działa</h2><div class="how"><div class="hl0">' + c.steps.map(function (t, i) { return '<div class="hs' + (i ? "" : " on") + '" data-i="' + i + '"><h3>' + t[0] + '</h3><p>' + lk(t[1]) + '</p>' + (t[2] ? '<a class="slnk" href="' + modUrl(t[2]) + '">' + (t[3] || ("Szczegóły: " + t[2])) + ' →</a>' : "") + '</div>'; }).join("") + '</div>'
      + '<div class="stage rcs" aria-label="Widok modułu z danymi demo"><div class="sc" data-s="x">' + c.scene + '</div></div></div></section>'
      + (c.io ? '<section><h2>Skąd dane pochodzą i dokąd trafiają</h2><div class="io"><div class="io-c"><small>Pochodzą z</small>' + c.io.in.map(ioRow).join("") + '</div><div class="io-m"><span class="tile" style="background:' + tint(name) + '">' + icon(name) + '</span><b>' + (c.short || name) + '</b></div><div class="io-c"><small>Trafiają dalej do</small>' + c.io.out.map(ioRow).join("") + '</div></div></section>' : "")
      + '<section><h2>AI w module</h2><div class="ai">' + c.ai.map(function (a) { return '<div><h3>' + a[0] + '</h3><p>' + a[1] + '</p><div class="ui">' + a[2] + '</div></div>'; }).join("") + '</div>' + (c.aiLimit ? '<p class="limit">' + c.aiLimit + '</p>' : "") + '</section>'
      + '<section><h2>Więcej możliwości</h2><div class="g6">' + c.more + '</div></section>'
      + '<section><h2>Dostęp i dane</h2><div class="acc">' + c.access.map(function (a) { return '<div><h3>' + a[0] + '</h3><p>' + a[1] + '</p></div>'; }).join("") + '</div></section>'
      + '<section><h2>Od czego zacząć</h2><div class="go3">' + c.start.map(function (t, i, all) {
          var k = [C.g, C.b, C.y][i], n = [C.g, C.b, C.y][i + 1], box = '<div><i style="background:' + k[0] + ';color:' + k[1] + '">' + (i + 1) + '</i><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>';
          return i < all.length - 1 ? box + line(k[1], n[1], "go" + i) : box;
        }).join("") + '</div></section>'
      + '<section><h2>Pytania i odpowiedzi</h2>' + c.faq.map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join("") + '</section>'
      + '<section class="md-next"><h2>Co zobaczyć dalej</h2><div class="nb">' + nb.map(tile).join("") + '<a href="../modules" class="nb-all"><span class="tile" style="background:#eef0f2">→</span><span><b>Wszystkie moduły</b><small>Zobacz listę</small></span></a></div></section>'
      + (c.chain ? chainNav() : "")
      + '</div><div class="final"><h2>' + c.final + '</h2><p>Wszystkie 48 modułów w każdym pakiecie od €50 miesięcznie.</p><a class="btn" href="../demo">Bezpłatne demo</a></div>';
    var root = document.getElementById("mod");
    root.innerHTML = h;
    var sc = root.querySelector(".rcs .sc"), hs = [].slice.call(root.querySelectorAll(".hs"));
    var fit = function () { root.querySelectorAll(".stage").forEach(function (st) { var k = st.clientWidth / 1240, x = st.querySelector(".sc"); x.style.transform = "scale(" + k + ")"; if (st.classList.contains("rcs")) x.style.height = (st.clientHeight / k) + "px"; }); };
    var has = function (e, a, i) { return (e.getAttribute(a) || "").split(" ").indexOf("" + i) >= 0; };
    var show = function (i) {
      i = +i; hs.forEach(function (x) { x.classList.toggle("on", +x.dataset.i === i); });
      sc.classList.toggle("dimon", (c.dim || []).indexOf(i) >= 0);
      sc.querySelectorAll("[data-show]").forEach(function (e) { e.classList.toggle("in", has(e, "data-show", i)); });
      sc.querySelectorAll("[data-hl]").forEach(function (e) { e.classList.toggle("hon", has(e, "data-hl", i)); });
      sc.querySelectorAll("[data-only]").forEach(function (e) { e.style.display = has(e, "data-only", i) ? "" : "none"; });
      sc.querySelectorAll("[data-hide]").forEach(function (e) { e.style.display = has(e, "data-hide", i) ? "none" : ""; });
      sc.querySelectorAll("[data-sc]").forEach(function (box) {
        var old = box.style.transform; box.style.transition = "none"; box.style.transform = "";
        var k = sc.getBoundingClientRect().width / 1240 || 1, y = 0, t = null;
        box.querySelectorAll("[data-go]").forEach(function (e) { if (has(e, "data-go", i)) t = e; });
        if (t) y = (t.getBoundingClientRect().top - box.getBoundingClientRect().top) / k - 10;
        box.style.transform = old; void box.offsetHeight; box.style.transition = "";
        box.style.transform = t ? "translateY(" + (-y) + "px)" : "";
      });
    };
    fit(); show(0); addEventListener("resize", fit);
    hs.forEach(function (x) { x.onclick = function () { show(x.dataset.i); }; });
    if ("IntersectionObserver" in window) {
      var seen = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) show(e.target.dataset.i); }); }, { rootMargin: "-40% 0px -50% 0px" });
      hs.forEach(function (x) { seen.observe(x); });
    }
    var bar2 = document.getElementById("hwBar"), mark = document.getElementById("hwBarS");
    var sync = function () { var on = mark.getBoundingClientRect().top >= innerHeight; bar2.classList.toggle("stuck", on); document.documentElement.classList.toggle("ag-in", on); };
    addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync();
  };
})();
