// Сторінка модуля «Контакти»: список, поверх якого висувається картка контакту, ліди й новий лід.
(function () {
  if (name !== "Kontakt") return;
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
`;
  var wave = [8, 16, 24, 12, 28, 18, 10, 22, 30, 14, 20, 26, 9, 17, 25, 12, 21, 15, 27, 11, 19, 8].map(function (h) { return '<span style="height:' + h + 'px"></span>'; }).join("");
  var tile = function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + '</span><span><b>' + k + '</b><small>' + (D[k] || IDX[k].g) + '</small></span></a>'; };
  var C = { g: ["#EEF8EE", "#0A7D0A"], b: ["#EEF4FF", "#0050D6"], y: ["#FFF6E2", "#8A5C00"], r: ["#FDEEEE", "#D62828"] };
  var steps = [["☺", "Kontakt", C.g], ["▣", "Organisation", C.b], ["◎", "Lead", C.y], ["✎", "Projekt", C.r], ["◷", "Verlauf", C.g]];
  var flow = '<div class="flow">' + steps.map(function (t, i) {
    var n = steps[i + 1], box = '<div><i style="background:' + t[2][0] + ';color:' + t[2][1] + '">' + t[0] + '</i>' + t[1] + '</div>';
    if (!n) return box;
    return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fl' + i + '"><stop offset="0" stop-color="' + t[2][1] + '"/><stop offset="1" stop-color="' + n[2][1] + '"/></linearGradient></defs><rect y="6" width="96" height="2" rx="1" fill="url(#fl' + i + ')"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[2][1] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
  }).join("") + '</div>';

  var av = function (t, k) { return '<span class="av ' + (k || "") + '">' + t + '</span>'; };
  var cc = function (ini, n, t, sub, role, rc, mail, mgr, ln, me) {
    return '<div class="cc' + (me ? " me" : "") + '">' + (ln ? '<span class="ln">' + ln + '</span>' : "") + '<div class="h">' + av(ini) + '<span><b>' + n + '</b><span class="ty">' + t + '</span><small>' + sub + '</small></span></div>' + (role ? '<span class="rl2" style="color:' + rc + ';border-color:' + rc + '">' + role + '</span><br>' : "") + mail + '<small style="margin-top:6px">Manager: ' + mgr + '</small></div>';
  };
  var list = '<div class="bh"><b>Kontakte</b><span class="sw"><span class="on">Personen</span><span>Organisationen</span></span><small style="border:1px solid #E6E6E6;border-radius:8px;padding:5px 12px;min-width:300px">Kontakte nach Name, Unternehmen, E-Mail suchen</small><em style="border:1px solid #F0B7B3;background:#FDEEEE;color:#B3261E;border-radius:8px;padding:6px 12px">+ Kontakt hinzufügen</em></div>'
    + '<div class="ch"><span class="on"><u style="background:#39B54A"></u>Kunde</span><span><u style="background:#F0A000"></u>Warenlieferant</span><span><u style="background:#E2691B"></u>Bauunternehmer</span><span><u style="background:#7C3AED"></u>Investor</span><span>Mehr 5</span><span>Manager</span><span>Labels</span><em>Sortierung: Erstellungsdatum</em></div>'
    + '<div class="cg">'
    + cc("AM", "Andrii Melnyk", "B2B", "Termobud · stellv. Geschäftsführer", "Kunde", "#1E7A2E", "a.melnyk@termobud.com.ua", "Oleh Martyniuk", "2", 1)
    + cc("NM", "Nataliia Melnyk", "B2B", "Alfa Merezhi · Mitgründerin", "Projektpartner", "#0086CC", "n.melnyk@alfamerezhi.ua", "Oleh Martyniuk", "1")
    + cc("KR", "Kateryna Rudenko", "B2B", "Enerhobud Servis · CEO", "Kunde", "#1E7A2E", "k.rudenko@energobud.ua", "Iryna Tkach", "1")
    + cc("IP", "Ihor Petrenko", "B2B", "Ahro Zakhid · Inhaber", "", "", "+380 44 000 12 34", "Iryna Tkach", "1")
    + cc("OL", "Oksana Lysenko", "B2B", "Metalprom · CEO", "Warenlieferant", "#B87400", "o.lysenko@metalprom.ua", "Oleh Martyniuk", "")
    + cc("VS", "Viktor Savchuk", "B2C", "Dnipro Ahro · Gründer", "", "", "v.savchuk@dniproagro.ua", "Iryna Tkach", "1")
    + cc("DT", "Dmytro Tkach", "B2B", "Tekhnopark · Geschäftsführer", "Bauunternehmer", "#C7591A", "d.tkach@technopark.ua", "Oleh Martyniuk", "")
    + cc("SK", "Svitlana Koval", "B2B", "Soniachni Systemy · Buchhalterin", "", "", "s.koval@sonyachni.ua", "Iryna Tkach", "")
    + cc("RB", "Roman Boiko", "B2B", "EnerParts · Vertriebsmanager", "Warenlieferant", "#B87400", "r.boiko@enerparts.ua", "Oleh Martyniuk", "")
    + '</div>';
  var card = '<div class="ly kc"><div class="ly-t"><em>◫ &nbsp;×</em></div><div class="ly-b"><div><div class="mc" data-k="main">'
    + '<div class="mt"><span>B2B</span><span>Termobud</span><span>+380 44 000 12 34</span><span>a.melnyk@termobud.com.ua</span></div>'
    + '<div class="hb q1"><div class="ct">Andrii Melnyk</div><p class="cs">Termobud · stellv. Geschäftsführer</p>'
    + '<b>Notizen</b><div class="nt2 nts" style="margin-top:8px"><div>B &nbsp;I &nbsp;S &nbsp;H1 &nbsp;H2 &nbsp;• &nbsp;1. &nbsp;☑ &nbsp;❝</div><p style="padding:12px 12px 0">👤 Andrii Melnyk, stellv. Geschäftsführer der Termobud GmbH.</p><p style="padding:0 12px">Rolle: entscheidet zusammen mit dem Geschäftsführer, zuständig für Lager und Energie.</p><p style="padding:0 12px">🏢 Unternehmen: Logistik und Lagerung von Baustoffen, 3 Lager, Brovary.</p><p style="padding:0 12px">🎯 Bedarf: PV-Anlage ~150 kW auf dem Lagerdach, Inbetriebnahme bis zum Frühjahr. Die Stromrechnungen steigen.</p><p style="padding:0 12px">🕰 Verlauf: Erstkontakt 09.10, Termin vor Ort 15.10, Angebot bis Freitag fällig.</p><p style="padding:0 12px 4px">⚠️ Risiken: vergleicht noch zwei Angebote, der Geschäftsführer achtet auf die Amortisation.</p></div></div>'
    + '<b>Kontaktdaten</b><div class="ci2">E-Mail</div><div class="cv">a.melnyk@termobud.com.ua</div><div class="ad">E-Mail hinzufügen</div><div class="ci2">Telefone</div><div class="cv">+380 44 000 12 34</div><div class="ad">Telefon hinzufügen</div>'
    + '<div class="z-ld hb q3" style="margin-top:16px"><b>Leads (2)</b><div class="ld" style="margin-top:8px"><span class="st2">Verhandlung</span><small>PV-Vertrieb</small><br>Termobud: PV-Anlage 150 kW auf dem Lagerdach, Angebot mit zwei Varianten</div><div class="ld"><span class="st2 b">Erstkontakt</span><small>Partner</small><br>Partnerschaft: Termobud als Montagepartner in der Oblast Kyiv</div></div>'
    + '<div class="z-ev hb q4" style="margin-top:14px"><div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;color:#555;letter-spacing:.04em"><span>KALENDERTERMINE</span><span style="font-weight:400;letter-spacing:0">Termin planen</span></div><div class="ci2">vergangene</div><div class="cv" style="color:#555">Termobud: erstes Gespräch<small style="display:block;color:#888">9. Okt., 16:00</small></div><div class="cv" style="color:#555">Objektbesichtigung, Brovary<small style="display:block;color:#888">15. Okt., 10:00</small></div><div class="cv" style="color:#555">Termobud - Aita<small style="display:block;color:#888">20. Okt., 12:00</small></div></div>'
    + '<div class="z-tk hb q5"><div class="tb"><span>Chat</span><span class="t8">Korrespondenz</span><span class="on t7">Gespräche</span><span class="t9">Verlauf</span></div>'
    + '<div class="p7"><b>Gespräche</b><div class="tkk" style="margin-top:8px"><b>Termobud - Aita</b><span class="bdg">Meeting</span><small>20. Okt. 2026, 12:00 · 42 Min. · Oleh Martyniuk, Andrii Melnyk</small>Zwei Angebotsvarianten und ein Termin vor Ort vereinbart.</div><div class="tkk"><b>Eingehender Anruf</b><span class="bdg">Anruf</span><small>20. Okt. 2026, 12:48 · 12 Min. 40 Sek.</small>Gebraucht wird eine PV-Anlage ~150 kW, zwei Varianten, Angebot bis Freitag.</div></div>'
    + '<div class="p8"><b>Korrespondenz</b> <small style="color:#737373">2 Verläufe · 5 E-Mails</small><div class="tkk" style="margin-top:8px"><b>Angebot, PV-Anlage für das Lager</b><small>Oleh Martyniuk · 21.10.2026</small></div><div class="tkk"><b>Angenommen: Termin vor Ort, Do 10:00</b><small>Andrii Melnyk · 19.10.2026</small></div></div>'
    + '<div class="p9"><b>Verlauf</b><div class="hi1">Lead in die Phase „Verhandlung“ verschoben<small>21.10, 09:14</small></div><div class="hi1">Label „Lager“ hinzugefügt<small>20.10, 13:02</small></div><div class="hi1">Kontakt mit der Organisation Termobud verknüpft<small>09.10, 16:30</small></div><div class="hi1">Kontakt erstellt<small>09.10, 16:12</small></div></div>'
    + '</div>'
    + '</div></div><div class="sd"><div><div class="ph">Eigenschaften</div>'
    + '<div class="rw"><small>Manager</small><span>' + av("OM", "a2") + ' Oleh Martyniuk</span></div><div class="rw"><small>Profil</small><span>Profil verknüpfen</span></div><div class="rw"><small>Position</small><span>Stellv. Geschäftsführer</span></div><div class="rw"><small>Vorgesetzter</small><span>Vorgesetzten hinzufügen</span></div><div class="rw"><small>Typ</small><span class="seg2"><span>B2C</span><span class="on">B2B</span></span></div>'
    + '<div class="hb q2" style="margin-top:14px"><b>Organisation</b><div class="og" style="margin-top:8px"><i>TB</i><span>Termobud<small>Bau</small></span></div><div class="rw"><small>Rolle für uns</small><span>Entscheider</span></div></div>'
    + '<div class="sh">Labels</div><span class="rc-tag">Lager</span><span class="rc-tag">Brovary</span>'
    + '<div class="sh">Social Media und Web</div><div class="rw" style="min-height:30px"><small>Website</small><span>termobud.ua</span></div><div class="rw" style="min-height:30px"><small>LinkedIn</small><span style="color:#737373">Link hinzufügen</span></div>'
    + '<div class="sh">Dokumente</div><span style="color:#737373;font-size:13px">Anhängen · Erstellen</span>'
    + '</div></div></div></div>';
  var ev = '<div class="evd"><div class="e1"><h5>Termobud - Aita</h5>▣ 20. Oktober 2026 · 12:00 – 12:45<br><span class="gbt">An Google Meet teilnehmen</span><span class="gbt w">Link kopieren</span><div class="el">Verknüpft mit</div><span class="pill2">Andrii Melnyk</span><div class="el">Notetaker</div><div class="rcd hi">Aufzeichnung öffnen<small>Fertig · 42 Min.</small></div><div class="el">Erinnerung</div>10 Min. vorher · Standard<div class="el">Follow-ups</div><div class="rcd">Termobud: Angebot mit zwei Varianten<small>Iryna Tkach · bis Freitag</small></div><div class="el">Dokumente</div><span style="color:#737373">Anhängen · Erstellen</span></div><div class="e2"><div class="el" style="margin-top:0">Teilnehmer (3)</div><b style="font-size:12px;color:#555">OHNE ORGANISATION · 1</b><div class="pr3">' + av("AM") + '<span>Andrii Melnyk<small>a.melnyk@termobud.com.ua</small></span></div><b style="font-size:12px;color:#555">UNSER TEAM · 2</b><div class="pr3">' + av("OM", "a2") + '<span>Oleh Martyniuk<small>Organisator</small></span></div><div class="pr3">' + av("IT") + '<span>Iryna Tkach<small>Soniachni Systemy</small></span></div></div></div>';
  var rec = '<div class="ly rec"><small style="color:#737373">← Meeting-Verlauf</small><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-top:8px"><div><div class="rt">Termobud - Aita</div><p class="rs">PV-Anlage auf dem Lagerdach: zwei Angebotsvarianten<br>Aufgezeichnet von Soniachni Systemy · 20. Okt. 2026, 12:00 · 42 Min.</p></div><span><span class="gbt w">Link</span><span class="gbt w">Aita Assistent fragen</span></span></div><div class="rg"><div class="rb"><span class="rc-tag" style="background:#EEF8EE;color:#0A7D0A">Abgeschlossen</span><div class="rtb"><span class="on">Zusammenfassung</span><span>Transkript</span><span>Kommentare</span><span>Neu verarbeiten</span></div><b>Meeting-Zusammenfassung</b><p style="margin:6px 0 0;color:#444">Der Kunde möchte eine PV-Anlage ~150 kW auf dem Lagerdach in Brovary. Der Geschäftsführer vergleicht drei Angebote, deshalb zählen Amortisation und Fristen. Vereinbart: zwei Varianten vorbereiten, mit und ohne Speicher.</p><div class="rd"><b>Entscheidungen</b><br>✓ Angebot mit zwei Varianten bis Freitag<br>✓ Termin vor Ort am Donnerstag um 10:00</div></div><div class="rb"><b>Wer Zugriff hat</b><div class="el" style="color:#737373;font-size:12px;margin-top:8px">AUFGEZEICHNET VON</div>Soniachni Systemy<div style="color:#737373;font-size:12px;margin-top:8px">PERSONEN</div><div class="pr3">' + av("OM", "a2") + 'Oleh Martyniuk</div><div class="pr3">' + av("IT") + 'Iryna Tkach</div></div></div></div>';
  var ldc = '<div class="ly ldc"><div class="ly-t"><span class="st o">Verhandlung ⌄</span><span class="rc-tag" style="background:#FFF4E0;color:#B45309">WARM</span><em>⋯ &nbsp;×</em></div><div class="ly-b"><div><div class="mc"><div class="lh">Andrii Melnyk</div><p style="color:#555;font-size:14px;margin:0 0 14px">a.melnyk@termobud.com.ua · +380 44 000 12 34</p><b>Beschreibung</b><p style="margin-top:6px">🎯 JETZT: Wir bereiten ein Angebot mit zwei Varianten vor, Termin vor Ort am Donnerstag.<br>📌 FAKTEN: PV-Anlage ~150 kW, Lagerdach ~1.200 m², Brovary, der Geschäftsführer vergleicht 3 Angebote.</p><div class="hb" style="background:#EAF2FF;box-shadow:0 0 0 2px #0050D6;margin-top:10px"><b>Verknüpfte Aufgaben</b><div class="tkr"><b>Termobud: Angebot mit zwei Varianten</b><small>Iryna Tkach · bis Freitag · In Progress</small></div><div class="tkr"><b>Termobud: Besuch vor Ort und Dachaufmaß</b><small>Iryna Tkach · To Do</small></div><div style="margin-top:8px;font-size:14px;color:#555">◎ Strategie: PV-Vertrieb, 5 Verträge bis Jahresende</div></div><div class="sh" style="margin-top:14px">Kalendertermine</div><div class="cv">Termobud - Aita <small style="color:#888">20. Okt., 12:00</small></div></div></div><div class="sd"><div><div class="ph">Eigenschaften</div><div class="rw"><small>Funnel</small><span>PV-Vertrieb</span></div><div class="rw"><small>Manager</small><span>' + av("OM", "a2") + ' Oleh Martyniuk</span></div><div class="rw"><small>Quelle</small><span>Website</span></div><div class="rw"><small>Nächster Kontakt</small><span>Donnerstag, 10:00</span></div><div class="sh">Kontakt</div><div class="cv">Andrii Melnyk<br><small style="color:#737373">In Contacts öffnen</small></div></div></div></div></div>';
  var nl = '<div class="ly nl"><h5>Lead hinzufügen</h5><div class="in2">Andrii Mel|</div><div class="sg"><small>Kontakte</small><div class="on">' + av("AM") + ' Andrii Melnyk, Termobud</div><small>Organisationen</small><div>' + av("TB", "a2") + ' Termobud</div></div><div style="color:#737373;margin-bottom:12px">+ Telefon &nbsp; + E-Mail</div><div class="bt"><span>Erstellen</span><span class="go">Erstellen und öffnen</span></div></div>';
  var scene = function (inner, k) { return '<div class="sc" data-s="' + k + '">' + inner + '</div>'; };

  var h = '<style>' + css + '</style><div class="l4">'
    + '<div class="crumb"><a href="../modules">Module</a> › Kontakt</div>'
    + '<h1 class="mname"><span class="tile" style="background:' + tint(name) + '">' + icon(name) + '</span>' + name + '</h1>'
    + '<p class="promise">Alle Personen des Unternehmens in einer Datenbank</p><p class="lead">Ein Kontakt wird einmal angelegt und dann mit Leads (potenziellen Kunden), Projekten und Organisationen verknüpft.</p>'
    + '<div class="stage hero-s" aria-label="Kontaktliste mit Demodaten">' + scene(list, "h") + '</div>'
    + '<div id="hwBar"><div class="hw-in"><span class="hw-tx">„Kontakt“ ist in jedem Paket enthalten.</span><a class="btn" href="https://app.aita.world/auth/register" data-signup>Kostenlos testen</a><a class="btn ghost" href="../demo">Kostenlose Demo</a></div></div><div id="hwBarS" style="height:1px;margin-top:-1px"></div>'
    + flow

    + '<section><h2>Drei Unterschiede</h2><div class="c3">'
    + '<div style="background:' + C.g[0] + '"><i style="color:' + C.g[1] + '">☺</i><h3>Eine Karte</h3><p>Eine Person kann in mehreren Funnels (Verkaufsphasen) sein, ihre Karte gibt es aber nur einmal.</p></div>'
    + '<div style="background:' + C.y[0] + '"><i style="color:' + C.y[1] + '">▣</i><h3>Datenbank des Unternehmens</h3><p>Kontakte bleiben im Unternehmen, wenn der Manager wechselt.</p></div>'
    + '<div style="background:' + C.r[0] + '"><i style="color:' + C.r[1] + '">◷</i><h3>Der ganze Verlauf</h3><p>Anrufe, Meetings und E-Mails stehen in der Karte der Person.</p></div>'
    + '</div></section>'

    + '<section><h2>So funktioniert es</h2><div class="how"><div class="hl0">' + [
      [0, "Liste", "Kontakte lassen sich nach Rolle, Manager und Labels suchen und filtern."],
      [1, "Karte", "Die Beschreibung zeigt, wer die Person ist, was sie macht und was sie braucht."],
      [2, "Organisation", "Der Kontakt ist mit dem Unternehmen verknüpft, in dem die Person arbeitet, und hat eine Rolle, zum Beispiel Entscheider."],
      [3, "Leads", "Eine Karte zeigt alle Funnels, in denen du diese Person führst."],
      [4, "Meetings", "Die Karte zeigt alle Meetings. Jedes lässt sich öffnen: Teilnehmer, Aufzeichnung, Aufgaben danach."],
      [5, "Aufzeichnung", "Die Meeting-Aufzeichnung enthält Zusammenfassung, Entscheidungen und Transkript."],
      [6, "Aufgaben", "Du siehst die Aufgaben zu diesem Kunden und welchem Unternehmensziel sie dienen."],
      [7, "Gespräche", "Anrufe und Meetings mit dieser Person liegen in einer Liste."],
      [8, "Korrespondenz", "Alle E-Mails mit der Person liegen in ihrer Karte."],
      [9, "Verlauf", "Du siehst, was sich in der Karte wann geändert hat."],
      [10, "Neuer Lead", "Beim Anlegen eines Leads schlägt die Plattform einen vorhandenen Kontakt statt eines neuen vor."]
    ].map(function (t, i) { return '<div class="hs' + (i ? "" : " on") + '" data-i="' + t[0] + '"><h3>' + t[1] + '</h3><p>' + t[2] + '</p></div>'; }).join("") + '</div>'
    + '<div class="stage rcs" aria-label="Liste und Kontaktkarte mit Demodaten">' + scene(list + '<div class="dim"></div>' + card + ev + rec + ldc + nl, 0) + '</div></div></section>'

    + '<section><h2>KI im Modul</h2><div class="ai">'
    + '<div><h3>Zusammenfassung</h3><p>Im Tab „Gespräche“ steht zu jedem Anruf eine kurze Zusammenfassung.</p><div class="ui"><small>Eingehender Anruf, 12 Min. 40 Sek.</small><div class="msg">Gebraucht wird eine PV-Anlage ~150 kW. Der Geschäftsführer will zwei Varianten. Angebot bis Freitag.</div></div></div>'
    + '<div><h3>KI-Sekretär</h3><p>Die KI liest neue E-Mails und schlägt vor, einen Kontakt anzulegen.</p><div class="ui"><small>Neue E-Mail</small><br><b>Anfrage zu einer PV-Anlage für das Lager</b><div class="msg">Neuer Absender. Kontakt anlegen?</div><div class="acts"><span class="go">Kontakt anlegen</span><span>Überspringen</span></div></div></div>'
    + '<div><h3>Agent</h3><p>Schreib dem Agenten, wen er hinzufügen soll, und der Kontakt erscheint in der Datenbank.</p><div class="ui"><small>Anfrage an den Agenten</small><br>Füge Andrii Melnyk von Termobud hinzu, Entscheider<div class="msg">Kontakt angelegt und mit der Organisation Termobud verknüpft.</div></div></div>'
    + '</div></section>'

    + '<section><h2>Weitere Funktionen</h2><div class="g6">'
    + '<div class="tall"><h3>Rollen</h3><div class="w"><div class="hd">Wer die Person für dich ist</div><div class="it"><span class="dt"><u style="background:#39B54A"></u>Kunde</span></div><div class="it"><span class="dt"><u style="background:#F0A000"></u>Warenlieferant</span></div><div class="it"><span class="dt"><u style="background:#E2691B"></u>Bauunternehmer</span></div><div class="it"><span class="dt"><u style="background:#F2C200"></u>Dienstleister</span></div><div class="it"><span class="dt"><u style="background:#7C3AED"></u>Investor</span></div><div class="it"><span class="dt"><u style="background:#0086CC"></u>Projektpartner</span></div></div></div>'
    + '<div><h3>Labels</h3><div class="w"><span class="tg">Lager</span><span class="tg">Brovary</span><span class="tg">EPC</span><div class="it" style="margin-top:8px">In der Leiste anheften<em>✓</em></div></div></div>'
    + '<div><h3>Mit Leads</h3><div class="w"><div class="it">Alle<em>128</em></div><div class="it on">Mit Leads<em>74</em></div><div class="it">Ohne Leads<em>54</em></div></div></div>'
    + '<div class="tall"><h3>Social Media</h3><div class="w"><div class="it">Website<em>termobud.ua</em></div><div class="it">LinkedIn<em>+</em></div><div class="it">Telegram<em>+</em></div><div class="it">Facebook<em>+</em></div><div class="it">Instagram<em>+</em></div><div class="it">X<em>+</em></div></div></div>'
    + '<div><h3>Import</h3><div class="w"><div class="drop"><b>↑</b>CSV- oder Excel-Datei hierher ziehen<br><a>Datei auswählen</a></div></div></div>'
    + '<div><h3>Übertragung</h3><div class="w"><div class="it on">In ein anderes Unternehmen übertragen</div><div class="it">Kontakt samt Leads</div></div></div>'
    + '</div></section>'

    + '<section><h2>Zugriff und Daten</h2><div class="acc">'
    + '<div><h3>Unternehmen</h3><p>Kontakte gehören dem Unternehmen, nicht einem einzelnen Manager.</p></div>'
    + '<div><h3>Organisation</h3><p>Wechselt eine Person in eine andere Organisation, wandern ihre Leads mit.</p></div>'
    + '<div><h3>Übertragung</h3><p>Ein Kontakt mit Leads lässt sich in ein anderes deiner Unternehmen übertragen.</p></div>'
    + '</div></section>'

    + '<section><h2>So fängst du an</h2><div class="go3">' + [
      ["Import", "Lade Kontakte aus CSV oder Excel hoch, bis zu 5.000 Zeilen auf einmal.", C.g],
      ["Organisationen", "Verknüpfe Personen mit Organisationen und gib die Rolle an.", C.b],
      ["Leads", "Leg Leads zu vorhandenen Kontakten an.", C.y]
    ].map(function (t, i, all) {
      var n = all[i + 1], box = '<div><i style="background:' + t[2][0] + ';color:' + t[2][1] + '">' + (i + 1) + '</i><h3>' + t[0] + '</h3><p>' + t[1] + '</p></div>';
      if (!n) return box;
      return box + '<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><rect y="6" width="96" height="2" rx="1" fill="' + n[2][1] + '"/><path d="M92 2l7 5-7 5" fill="none" stroke="' + n[2][1] + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
    }).join("") + '</div></section>'

    + '<section><h2>Fragen und Antworten</h2>' + [
      ["Was ist das Modul „Kontakt“ und wozu braucht es ein Unternehmen?", "Es ist die Datenbank der Personen, mit denen das Unternehmen arbeitet. Ein Kontakt lässt sich mit Leads, Projekten und Organisationen verknüpfen."],
      ["Kann ein Kontakt in mehreren Funnels sein?", "Ja. Die Kontaktkarte zeigt alle seine Leads und Funnels."],
      ["Was unterscheidet einen Kontakt von einer Organisation?", "Ein Kontakt ist eine Person, eine Organisation ist ein Unternehmen. Eine Organisation kann mehrere Kontakte haben."],
      ["Was passiert beim Import mit Duplikaten?", "Der Import führt Einträge mit derselben E-Mail-Adresse oder Telefonnummer zusammen."],
      ["Kostet das Modul extra?", "Nein. „Kontakt“ ist in jedem Paket enthalten."]
    ].map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join("") + '</section>'
    + '<section class="md-next"><h2>Was du dir als Nächstes ansehen kannst</h2><div class="nb">' + nb.map(tile).join("") + '<a href="../modules" class="nb-all"><span class="tile" style="background:#eef0f2">→</span><span><b>Alle Module</b><small>Liste ansehen</small></span></a></div></section>'
    + '</div><div class="final"><h2>Wir zeigen dir, wie du die Kontakte deines Unternehmens in einer Datenbank sammelst</h2><p>Alle 48 Module in jedem Paket ab 50 € im Monat.</p><a class="btn" href="../demo">Kostenlose Demo</a></div>';

  var root = document.getElementById("mod");
  root.innerHTML = h;
  var ICON = {
    "✎": "M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z",
    "☺": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    "◷": "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    "▣": "M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4",
    "◎": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
  };
  root.querySelectorAll(".flow i,.c3 i").forEach(function (x) { var p = ICON[x.textContent.trim()]; if (p) x.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + p + '"/></svg>'; });
  var sc = root.querySelector(".rcs .sc"), hs = [].slice.call(root.querySelectorAll(".hs")), main = sc.querySelector('[data-k="main"]');
  var fit = function () { root.querySelectorAll(".stage").forEach(function (st) { var k = st.clientWidth / 1240, x = st.querySelector(".sc"); x.style.transform = "scale(" + k + ")"; if (st.classList.contains("rcs")) x.style.height = (st.clientHeight / k) + "px"; }); };
  var at = function (q, pad) {
    var old = main.style.transform; main.style.transition = "none"; main.style.transform = "";
    var k = sc.getBoundingClientRect().width / 1240 || 1, y = (main.querySelector(q).getBoundingClientRect().top - main.getBoundingClientRect().top) / k;
    main.style.transform = old; void main.offsetHeight; main.style.transition = "";
    return -(y - pad);
  };
  var show = function (i) {
    i = +i; sc.setAttribute("data-s", i); hs.forEach(function (x) { x.classList.toggle("on", +x.dataset.i === i); });
    main.style.transform = i === 3 ? "translateY(" + at(".z-ld", 10) + "px)" : i === 4 ? "translateY(" + at(".z-ev", 10) + "px)" : i >= 7 && i <= 9 ? "translateY(" + at(".z-tk", 10) + "px)" : "";
  };
  fit(); addEventListener("resize", fit);
  hs.forEach(function (x) { x.onclick = function () { show(x.dataset.i); }; });
  if ("IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) show(e.target.dataset.i); }); }, { rootMargin: "-40% 0px -50% 0px" });
    hs.forEach(function (x) { seen.observe(x); });
  }
  var bar2 = document.getElementById("hwBar"), mark = document.getElementById("hwBarS");
  var sync = function () { var on = mark.getBoundingClientRect().top >= innerHeight; bar2.classList.toggle("stuck", on); document.documentElement.classList.toggle("ag-in", on); };
  addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync();
})();
