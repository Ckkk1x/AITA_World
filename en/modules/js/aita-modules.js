
const C={blue:{deep:'#0086CC',bright:'#0086CC',tag:'rgba(0,134,204,.12)'},green:{deep:'#166534',bright:'#39B54A',tag:'rgba(57,181,74,.15)'},
 yellow:{deep:'#854D0E',bright:'#FFD600',tag:'rgba(255,214,0,.25)'},red:{deep:'#D62828',bright:'#D62828',tag:'rgba(214,40,40,.12)'},
 purple:{deep:'#7C3AED',bright:'#7C3AED',tag:'rgba(124,58,237,.12)'}};
const DOC='M13 5h16l10 10v26a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z';
const FOLDER='M5 13a4 4 0 0 1 4-4h10l4 5h16a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z';
const CAL='r 6 9 36 33 7 m|r 6 9 36 10 7 m2|r 14 5 3 9 1.5 k|r 31 5 3 9 1.5 k';
// групи: [назва, колір, акцент, [[модуль, гліф]]]
const G=[
['Sales','blue','yellow',[
 ['Leads','p m M6 9h36L29 25v13l-10 5V25z|r 6 9 36 4 2 h|c 37 37 5 a'],
 ['Contacts','r 6 9 36 30 6 m|c 18 20 5 w|p w M10 33c1-5 5-7 8-7s7 2 8 7z|r 29 17 9 3 1.5 w|r 29 24 7 3 1.5 w'],
 ['Organizations','r 8 10 19 32 3 m|r 27 20 14 22 3 m2|r 12 15 4 4 1 w|r 19 15 4 4 1 w|r 12 22 4 4 1 w|r 19 22 4 4 1 w|r 12 29 4 4 1 w|r 19 29 4 4 1 w|r 31 26 6 3 1 w|r 31 32 6 3 1 w']]],
['Projects','green','yellow',[
 ['Projects','p m '+FOLDER+'|r 5 18 38 3 0 h|c 33 30 5 a'],
 ['Project builder','r 6 6 16 16 4 m|r 26 6 16 16 4 m2|r 6 26 16 16 4 m2|r 26 26 16 16 4 a'],
 ['Solution boxes','p m M24 5l18 9v20l-18 9-18-9V14z|p h M24 5l18 9-18 9-18-9z|l w 2.2 M24 23v20|c 24 14 3 a']]],
['Energy','yellow','blue',[
 ['Energy Design (3D design)','p m M9 20h27l5 18H4z|l w 1.4 M18 20l-2.3 18M27 20l1.6 18M6.4 29h32.4|p h M9 20h27l.9 3H8.1z|c 36 9 5 a|r 21 38 6 5 1.5 k'],
 ['Single-line diagram','l m 3 M24 4v10M24 34v10M10 24h28|r 16 14 16 20 4 m|l w 2.2 M20 21h8M20 27h8|c 10 24 4 a|c 38 24 4 a'],
 ['BESS simulator','r 5 12 33 24 7 m|r 38 19.5 5 9 2.5 m|r 9 14.5 25 4 2 h|p w M23.5 16.5L16 27h6.2l-2 8.5L29 24h-6.3z'],
 ['Cost estimate','p m M11 5h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3L11 43z|r 16 12 16 3 1.5 w|r 16 19 16 3 1.5 w|r 16 26 10 3 1.5 w|c 33 33 5 a'],
 ['Project documentation','r 15 5 24 31 4 m2|r 8 10 24 32 4 m|r 13 18 14 2.8 1.4 w|r 13 24 14 2.8 1.4 w|r 13 30 9 2.8 1.4 w|c 33 37 5 a'],
 ['Financial model','r 5 7 38 34 7 m2|p m M9 36l9-10 7 5 14-16v21H9z|l w 2.4 M9 36l9-10 7 5 14-16|c 39 15 3.5 a']]],
['Finance','green','yellow',[
 ['Finance','r 5 14 38 26 7 m|r 5 14 38 5 3 h|r 28 22 15 10 5 m2|c 34 27 2.6 w|c 15 11 7 a'],
 ['SPV','p m M24 5l16 6v11c0 10-7 17-16 21C15 39 8 32 8 22V11z|p h M24 5l16 6v4L24 9 8 15v-4z|l w 3 M17 24l5 5 9-10']]],
['Productivity','blue','yellow',[
 ['Tasks','r 7 6 34 36 8 m|l w 2.6 M13 17l3 3 5-6M13 30l3 3 5-6|r 25 16 11 3 1.5 w|r 25 29 11 3 1.5 w|c 37 39 4 a'],
 ['Chat','p m2 M38 17h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-1v5l-6-5h-8a4 4 0 0 1-4-4v-2|p m M6 11a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H18l-8 6v-6h0a5 5 0 0 1-4-5z|c 14 17 2.2 w|c 20 17 2.2 w|c 26 17 2.2 a'],
 ['Calendar',CAL+'|r 12 24 6 5 1.5 w|r 21 24 6 5 1.5 w|r 30 24 6 5 1.5 a|r 12 32 6 5 1.5 w|r 21 32 6 5 1.5 w'],
 ['Meeting notetaker','r 18 5 12 23 6 m|l m 3 M12 21a12 12 0 0 0 24 0M24 33v8M18 41h12|r 21 8 3 10 1.5 h|c 37 9 4 a'],
 ['Mail','r 5 10 38 28 7 m|l w 2.6 M8 14l16 12 16-12|c 37 34 5 a'],
 ['Queue','p m M6 26l6-16h24l6 16v10a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z|l w 2.4 M6 26h10l3 5h10l3-5h10|r 16 15 16 3 1.5 w|r 18 20 12 3 1.5 a'],
 ['Notes','p m M8 8h32v22L30 40H8z|p h M30 40V30h10z|r 13 15 22 3 1.5 w|r 13 22 16 3 1.5 w|c 37 11 3 a'],
 ['My questions','c 24 21 16 m|p m M13 32l-4 10 10-5z|l w 3 M19.5 17a4.5 4.5 0 1 1 6.5 4c-1.6.9-2 1.8-2 3.4|c 24 30 2 w|c 38 8 4 a'],
 ['Drafts','r 6 6 26 35 6 m2|r 11 14 15 3 1.5 w|r 11 21 11 3 1.5 w|p m M38 11l5 5-17 17-7 2 2-7z|p a M19 35l2-7 5 5z']]],
['Documents and knowledge','red','blue',[
 ['Dataroom','p m '+FOLDER+'|r 5 18 38 3 0 h|r 19 25 11 9 2.5 w|l w 2.4 M21 25v-3a3.5 3.5 0 0 1 7 0v3'],
 ['Contracts','p m '+DOC+'|p h M29 5v7a3 3 0 0 0 3 3h7z|r 15 19 17 3 1.5 w|l w 2.4 M15 33c3-5 5 2 8-1s4-3 8 0|c 35 38 5 a'],
 ['Knowledge base','p m M7 9a3 3 0 0 1 3-3h13v35H10a3 3 0 0 0-3 3z|p m2 M41 9a3 3 0 0 0-3-3H25v35h13a3 3 0 0 1 3 3z|r 11 13 8 2.6 1.3 w|r 11 19 8 2.6 1.3 w|r 29 13 8 2.6 1.3 w|c 33 30 4 a']]],
['Management','green','yellow',[
 ['Dashboard','r 6 6 17 20 5 m|r 25 6 17 12 5 m2|r 25 20 17 22 5 m|r 6 28 17 14 5 m2|c 33 31 4 a'],
 ['Overview','p m M4 24c5-9 12-14 20-14s15 5 20 14c-5 9-12 14-20 14S9 33 4 24z|c 24 24 8 w|c 24 24 4 a'],
 ['Vision and mission','p m M4 41l14-23 8 11 5-6 13 18z|p h M18 18l4 6.5-4-1.5-4 2z|l k 2.4 M31 23V7|p a M31 7h10l-3 3.5 3 3.5H31z'],
 ['Goals','c 24 24 19 m2|c 24 24 13 m|c 24 24 7 w|c 24 24 3 a'],
 ['Planning','r 5 7 38 34 7 m2|r 10 12 8 24 3 w|r 20 12 8 17 3 w|r 30 12 8 11 3 a'],
 ['Progress review','l m 7 M8 33a16 16 0 0 1 32 0|l k 3 M24 33l8-11|c 24 33 4 k|c 38 12 3.5 a'],
 ['Business Plans','p m '+DOC+'|p h M29 5v7a3 3 0 0 0 3 3h7z|r 15 29 4 8 1 w|r 21 24 4 13 1 w|r 27 19 4 18 1 a'],
 ['Competitors','c 15 15 6.5 m|p m M4 39c1-8 5-13 11-13s10 5 11 13z|c 33 15 6.5 m2|p m2 M22 39c1-8 5-13 11-13s10 5 11 13z|c 24 7 3 a'],
 ['Weekly summary',CAL+'|l w 3 M16 29l6 6 11-12'],
 ['Decision Log','p m M10 6h25a4 4 0 0 1 4 4v32H14a4 4 0 0 1-4-4z|r 10 35 29 4 2 h|l w 3 M17 20l5 5 9-10|c 38 8 3.5 a']]],
['AI','purple','yellow',[
 ['AI assistant','p m M23 4l4.5 12.5L40 21l-12.5 4.5L23 38l-4.5-12.5L6 21l12.5-4.5z|p a M38 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z'],
 ['Agent','r 8 13 32 25 9 m|r 11 15 26 4 2 h|c 18 26 3.2 w|c 30 26 3.2 w|r 18 32 12 2.6 1.3 w|l m 3 M24 13V8|c 24 6 3.5 a'],
 ["Platform Memory",'l m 3 M24 4v6M24 38v6M4 24h6M38 24h6M14 6v4M34 6v4M14 38v4M34 38v4|r 10 10 28 28 8 m|r 13 12 22 4 2 h|c 24 25 6 w|c 24 25 2.5 a']]],
['Community','blue','green',[
 ['Network','l m 3 M12 13L24 31M36 13L24 31M12 13h24|c 12 13 6 m|c 36 13 6 m2|c 24 32 9 m|c 24 32 3.5 a'],
 ['Companies','r 6 15 17 27 3 m|r 25 6 17 36 3 m2|r 10 20 4 4 1 w|r 16 20 4 4 1 w|r 10 27 4 4 1 w|r 16 27 4 4 1 w|r 29 11 4 4 1 w|r 35 11 4 4 1 w|r 29 18 4 4 1 w|r 35 18 4 4 1 w|r 31 34 6 8 1 a']]],
['Work and services','green','yellow',[
 ['Services market','p m M8 31a16 16 0 0 1 32 0z|r 5 30 38 7 3.5 m|p h M10 26a14 14 0 0 1 28 0z|r 21.5 9 5 12 2.5 a'],
 ['Contractor portal','l m 3 M17 15v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3|r 5 15 38 26 7 m|r 5 25 38 3 0 h|r 21 23 6 7 2 a']]],
['Equipment for sellers','yellow','blue',[
 ['Orders','l m 3 M18 18v-5a6 6 0 0 1 12 0v5|p m M9 16h30l-2 24a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z|l w 3 M19 30l4 4 7-8|c 38 12 3.5 a'],
 ['Manage Products','p m M6 7h17l20 20-15 15L6 22z|p h M6 7h17l3 3H6z|c 14 15 3.5 w|c 36 36 4 a'],
 ['User Groups','c 11 18 5 m2|c 37 18 5 m2|p m2 M2 37c.5-6 4-10 9-10 2.4 0 4.4.8 5.9 2.2M46 37c-.5-6-4-10-9-10-2.4 0-4.4.8-5.9 2.2|c 24 15 7 m|p m M12 40c1-8 5.5-12 12-12s11 4 12 12z|c 24 15 2.5 a']]],
['Integrations','blue','purple',[
 ['Connectors and MCP','r 18 6 3.5 10 1.75 m2|r 26.5 6 3.5 10 1.75 m2|r 12 15 24 17 6 m|r 14 17 20 4 2 h|l m 4 M24 32v11|c 24 24 3 a']]],
['More','purple','yellow',[
 ['Plugin Marketplace','p m M8 14h9a4.5 4.5 0 1 1 9 0h9v9a4.5 4.5 0 1 1 0 9v10H8z|p h M8 14h9a4.5 4.5 0 0 1 .3-1.5H8z|c 38 9 4 a']]]
];
const ST={w:'#fff',k:'#1b2a35'};
function glyph(spec,col,acc){
 let s='';
 for(const part of spec.split('|')){
  const t=part.trim().split(' ');const ty=t[0];
  const fill=f=>f==='m'?`url(#g-${col})`:f==='m2'?`url(#g-${col})" opacity=".5`:f==='w'?'#fff':f==='h'?'rgba(255,255,255,.35)':f==='a'?C[acc].bright:f==='k'?'#1b2a35':f;
  const stroke=f=>f==='m'?C[col].deep:f==='a'?C[acc].bright:ST[f]||f;
  if(ty==='r'){const [x,y,w,h,rx,f]=t.slice(1);s+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill(f)}"/>`}
  else if(ty==='c'){const [cx,cy,r,f]=t.slice(1);s+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill(f)}"/>`}
  else if(ty==='p'){s+=`<path d="${t.slice(2).join(' ')}" fill="${fill(t[1])}"/>`}
  else if(ty==='l'){s+=`<path d="${t.slice(3).join(' ')}" fill="none" stroke="${stroke(t[1])}" stroke-width="${t[2]}" stroke-linecap="round" stroke-linejoin="round"/>`}
 }
 return `<svg viewBox="0 0 48 48" aria-hidden="true">${s}</svg>`;
}
const D={'Leads':'The client\'s path from first request to deal','Contacts':'Everyone you work with in one database','Organizations':'Client companies, suppliers and partners',
'Projects':"Every site from idea to launch",'Project builder':'A project card for your process, without developers','Solution boxes':'Ready-made company setup in one step',
'Energy Design (3D design)':'The plant in 3D on a real land plot','Single-line diagram':'An electrical diagram with AI and code checks','BESS simulator':'Storage operation and revenue',
'Cost estimate':'Estimate and CAPEX straight from the project','Project documentation':'A document package for approvals','Financial model':"Payback, IRR and DSCR of every site",
'Finance':'Balances, payments, debts and plan on one screen','SPV':'Project companies and ownership','Tasks':'The work of the team and agents on one board','Chat':'Team conversations next to tasks and projects',
'Calendar':'Meetings, tasks and time booking','Meeting notetaker':'Meeting recording, transcript and summary','Mail':'Gmail or Outlook next to your clients','Queue':'Everything waiting for your response in one list',
'Notes':'Notes, photos and voice that become tasks','My questions':'A short question to a colleague or agent, with a deadline','Drafts':'Documents edited by people and agents',
'Dataroom':'Company documents with folders and access control','Contracts':'Contract approval in one room','Knowledge base':'Company policies and instructions',
'Dashboard':'Key metrics on one screen','Overview':'Company strategy on one page','Vision and mission':'Where the company is heading and why','Goals':'Goals whose progress is calculated automatically',
'Planning':'A plan on a canvas together with the agent','Progress review':'A weekly update of all goals','Business Plans':'Plans with versions and AI drafts','Competitors':'A registry of rivals and an “us vs them” matrix',
'Weekly summary':'The week\'s problems and a task for each','Decision Log':'Decisions with reasons and evidence','AI assistant':'Ask and assign where you work',
'Agent':'AI personas take on repetitive work',"Platform Memory":'Answers with a link to the source','Network':'Colleagues, contacts and partners in one list',
'Companies':'A catalog of partner companies on the platform','Services market':'Contractors for engineering and construction works','Contractor portal':'Your services on the storefront for clients',
'Orders':'Customer orders from confirmation to delivery','Manage Products':'Equipment catalog, prices and markups','User Groups':'Different terms for different buyers',
'Connectors and MCP':'Claude, ChatGPT and your systems','Plugin Marketplace':'Extensions for the platform'};

const N={"Leads": ["Contacts", "Mail", "Meeting notetaker", "Projects"], "Contacts": ["Leads", "Organizations", "Network", "Mail"], "Organizations": ["Contacts", "Leads", "Contracts", "Companies"], "Projects": ["Leads", "Tasks", "Dataroom", "Financial model"], "Project builder": ["Projects", "Solution boxes", "Dataroom"], "Solution boxes": ["Project builder", "Leads", "Projects"], "Energy Design (3D design)": ["Single-line diagram", "Cost estimate", "Financial model", "Project documentation"], "Single-line diagram": ["Energy Design (3D design)", "Cost estimate", "Project documentation"], "BESS simulator": ["Energy Design (3D design)", "Financial model", "Cost estimate"], "Cost estimate": ["Energy Design (3D design)", "Manage Products", "Financial model", "Orders"], "Project documentation": ["Energy Design (3D design)", "Single-line diagram", "Dataroom", "Contracts"], "Financial model": ["Cost estimate", "BESS simulator", "Finance", "SPV"], "Finance": ["Projects", "Financial model", "Dashboard", "SPV"], "SPV": ["Projects", "Finance", "Contracts", "Dataroom"], "Tasks": ["Projects", "Chat", "Calendar", "Goals"], "Chat": ["Tasks", "Projects", "My questions", "Agent"], "Calendar": ["Meeting notetaker", "Tasks", "Mail", "Leads"], "Meeting notetaker": ["Calendar", "Platform Memory", "Tasks", "Decision Log"], "Mail": ["Queue", "Leads", "Dataroom", "Agent"], "Queue": ["Mail", "Notes", "Tasks", "Agent"], "Notes": ["Queue", "Tasks", "Drafts"], "My questions": ["Chat", "Tasks", "Agent"], "Drafts": ["AI assistant", "Dataroom", "Contracts", "Notes"], "Dataroom": ["Projects", "Contracts", "Knowledge base", "SPV"], "Contracts": ["Organizations", "Dataroom", "Projects", "SPV"], "Knowledge base": ["Platform Memory", "Dataroom", "AI assistant"], "Dashboard": ["Goals", "Finance", "Progress review", "Overview"], "Overview": ["Vision and mission", "Goals", "Dashboard", "Weekly summary"], "Vision and mission": ["Overview", "Goals", "Business Plans", "Agent"], "Goals": ["Progress review", "Tasks", "Dashboard", "Business Plans"], "Planning": ["Goals", "Tasks", "Agent"], "Progress review": ["Goals", "Dashboard", "Weekly summary"], "Business Plans": ["Goals", "Finance", "Competitors", "Vision and mission"], "Competitors": ["Business Plans", "Overview", "Leads"], "Weekly summary": ["Tasks", "Progress review", "Decision Log"], "Decision Log": ["Meeting notetaker", "Platform Memory", "Weekly summary"], "AI assistant": ["Agent", "Platform Memory", "Drafts", "Knowledge base"], "Agent": ["AI assistant", "Platform Memory", "Tasks", "Connectors and MCP"], "Platform Memory": ["AI assistant", "Meeting notetaker", "Knowledge base", "Decision Log"], "Network": ["Companies", "Contacts", "Services market", "Orders"], "Companies": ["Network", "Organizations", "Contracts"], "Services market": ["Contractor portal", "Network", "Projects"], "Contractor portal": ["Services market", "Companies", "Contracts"], "Orders": ["Manage Products", "Cost estimate", "Finance"], "Manage Products": ["Orders", "User Groups", "Cost estimate"], "User Groups": ["Manage Products", "Orders", "Companies"], "Connectors and MCP": ["Agent", "Mail", "Calendar", "Plugin Marketplace"], "Plugin Marketplace": ["Connectors and MCP", "Leads"]}, ENERGY=new Set(["Energy Design (3D design)", "Single-line diagram", "BESS simulator", "Cost estimate", "Project documentation", "Financial model", "Projects", "SPV", "Dataroom"]);
const PAL=['blue','purple','green','yellow','red'],TINT={blue:'rgba(0,134,204,.11)',purple:'rgba(124,58,237,.11)',green:'rgba(57,181,74,.13)',yellow:'rgba(255,190,0,.17)',red:'rgba(214,40,40,.10)'};
const IDX={};let ci=0;G.forEach(([g,gc,ga,mods])=>mods.forEach(([m,sp])=>{const col=PAL[ci%5],acc=PAL[(ci+2)%5];ci++;IDX[m]={g,gc,col,acc,sp}}));
function tint(m){return '#fff'}
const DEFS='<svg width="0" height="0" style="position:absolute"><defs>'+[['blue','#45B8F2','#0068A6'],['green','#6BD879','#1F7F31'],['yellow','#FFE45C','#F0A500'],['red','#F26A6A','#B51F1F'],['purple','#A880FF','#5B21B6']].map(([k,a,b])=>`<linearGradient id="g-${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`).join('')+'</defs></svg>';
document.body.insertAdjacentHTML('afterbegin',DEFS);
const LINE={blue:'#0086CC',purple:'#7C3AED',green:'#2E9B3F',yellow:'#E08A00',red:'#D62828'};
// стиль 28.10: суцільна лінія одного кольору + легка заливка замкнених фігур
function icon(m){const x=IDX[m],s=(typeof SVGMAP!=='undefined')&&SVGMAP[m];if(!x)return '';if(!s)return glyph(x.sp,x.col,x.acc);const c=LINE[x.col];const filled=s.replace(/<(rect|circle)(?![^>]*r="[01](\.\d+)?")/g,`<$1 fill="${c}" fill-opacity=".14"`).replace(/<path d="([^"]*[zZ])"/g,`<path fill="${c}" fill-opacity=".14" d="$1"`);return `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${filled}</svg>`}
function modUrl(m){return ({"Leads": "leads", "Contacts": "contacts", "Organizations": "organizations", "Orders": "orders", "Manage Products": "products", "User Groups": "user-groups", "Projects": "projects", "Services market": "work-market", "Contractor portal": "contractor", "Tasks": "tasks", "Chat": "chat", "Calendar": "calendar", "Meeting notetaker": "meeting-notes", "Mail": "mail", "Queue": "queue", "Dataroom": "storage", "Contracts": "contracts", "Knowledge base": "knowledge-base", "Notes": "notes", "Drafts": "drafts", "My questions": "my-questions", "Dashboard": "dashboard", "Overview": "overview", "Vision and mission": "vision", "Goals": "goals", "Planning": "planning", "Progress review": "progress-review", "Finance": "finance", "SPV": "spv", "Business Plans": "business-plans", "Competitors": "competitors", "Weekly summary": "weekly-summary", "Decision Log": "decisions", "Plugin Marketplace": "plugins", "Network": "network", "Companies": "companies"}[m]||'../modules')}
