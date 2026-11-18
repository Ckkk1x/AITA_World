// AI-агент у правому нижньому куті сторінок модулів: кодова копія вікна з платформи.
// Запитання й відповіді готові, із сервером нічого не обмінюється. Демо-дані вигадані.
(function () {
  var mod = window.AITA_M || "";
  var P = { pg: "plugins", gp: "user-groups", pr: "products", od: "orders", sl: "contractor", mk: "work-market", fn: "finance", ct: "contracts", pl: "planning", st2: "weekly-summary", sb: "business-plans", sr: "progress-review", sv: "vision", so: "overview", ml: "mail", ib: "queue", cl: "calendar", db: "dashboard", kb: "knowledge-base", gl: "goals", dc: "decisions", ch: "chat", dr: "drafts", as: "my-questions", nt: "notes", mt: "meeting-notes", leads: "leads", tasks: "tasks", cont: "contacts", org: "organizations", st: "storage", cp: "competitors", net: "network", co: "companies" };

  // chip: підпис кнопки; q: повне запитання; mem: скільки спогадів; steps: дії агента; tool: картки-посилання; a: відповідь блоками
  var QA = {
    "SPV": [
      { chip: "Who signs", ic: "s", q: "Who can sign the EPC contract for Termobud Energy?", mem: 4, steps: ["Reading the SPV card", "Checking board resolutions"], tool: { k: "spv.signatories", t: "Signatories", e: [["Oleh Martyniuk", "Director · sole signatory · since Feb 1, 2026", "#step=4"], ["Iryna Tkach", "CFO · up to €50,000", "#step=4"]] }, a: ["<b>Oleh Martyniuk</b>, director, signs alone. The board approved the EPC contract on Nov 5.", "Iryna Tkach signs documents only up to €50,000, so she cannot sign the EPC contract."] },
      { chip: "Documents for the buyer", ic: "z", q: "Collect the SPV documents for the buyer's due diligence", mem: 9, steps: ["Reading the founding documents", "Checking licenses", "Reading the cap table"], tool: { k: "spv.documents", t: "SPV documents", e: [["Articles of association", "Version No. 2 · Sep 30, 2026", "#step=6"], ["Registry extract", "As of Nov 1, 2026", "#step=6"], ["Shareholders' agreement", "Termobud · Green Invest Fund", "#step=6"]] }, a: ["I collected the articles, the registry extract, the shareholders' agreement, the ownership (70% and 30%) and four licenses.", "<b>Missing:</b> a current valuation. The last one was done before the Series A round."] },
      { chip: "FCR market", ic: "c", q: "Can a 2 MW BESS work on the FCR market?", mem: 3, steps: ["Reading the SPV licenses"], tool: { k: "spv.licenses", t: "Licenses", e: [["TSO prequalification · FCR", "Active · 2 MW", "#step=6"], ["TSO prequalification · aFRR", "In progress · filed Oct 20, 2026", "#step=6"]] }, a: ["Yes. The TSO prequalification for FCR is valid for 2 MW, so the BESS simulator will count this revenue.", "Not on the aFRR market yet: the application was filed on Oct 20, and there is no decision yet."] }
    ],    "Projects": [
      { chip: "Project status", ic: "s", q: "What is blocking Solar + BESS 8.5 MW right now?", mem: 7, steps: ["Reading the project card", "Checking tasks"], tool: { k: "task.list", t: "Overdue tasks", e: [["EPC contract with EnerhoMontazh", "Oleh Martyniuk · 6 days overdue", "#step=3"], ["Order the 7.2 MW transformer", "Roman Boiko · 6 days overdue", "#step=3"]], more: "And 3 more — open all tasks", href: "#step=3" }, a: ["The project is at the <b>Ready to build</b> stage, but construction won't start without the EPC contract. <b>Oleh Martyniuk</b> is responsible.", "The transformer order waits for the same contract, so this is one bottleneck, not two."] },
      { chip: "Project money", ic: "z", q: "Will the plant pay off?", mem: 4, steps: ["Reading the financial model"], a: ["The financial model gives IRR <b>18.6%</b>, NPV <b>€4.1M</b>, CAPEX <b>€8.4M</b>. Payback is <b>4.6 years</b>.", "The model calculated these numbers; nobody entered them by hand."] },
      { chip: "Share with an investor", ic: "c", q: "Give the investor Green Invest Fund read access to the project", mem: 3, steps: ["Checking access", "Preparing the invitation"], tool: { k: "access.grant", t: "Access", e: [["Green Invest Fund", "Read · Solar + BESS 8.5 MW", "#step=8"]] }, a: ["The investor will see the overview, finances and documents, but won't change anything. Confirm, and I'll send the invitation."] }
    ],    "Leads": [
      { chip: "Show leads", ic: "s", q: "Show all active leads", mem: 12, steps: ["Searching leads", "Reading the pipeline stages"], tool: { k: "entity.list", t: "Lead list", e: [["Andrii Melnyk", "Solar sales · Negotiation", P.leads], ["Kateryna Rudenko", "Solar sales · Demo", P.leads], ["Nataliia Melnyk", "Solar sales · First contact", P.leads]], more: "And 4 more — open the full list", href: P.leads },
        a: ["<b>“Negotiation” stage</b><ul><li><b>Andrii Melnyk</b> (Termobud): a proposal with two options by Friday.</li></ul><b>“Demo” stage</b><ul><li><b>Kateryna Rudenko</b> (Enerhobud Servis): hot, meeting on Oct 22 at 12:00.</li><li><b>Viktor Savchuk</b> (Dnipro Agro): waiting for the second demo.</li></ul>", "<b>Note:</b> leads at the “New lead” stage aren't qualified yet, so I don't count them as active."] },
      { chip: "Lead summary", ic: "z", q: "Give me a summary of the latest leads", mem: 9, steps: ["Searching leads", "Reading recent calls"], a: ["3 leads were added this week, and one moved to the “Negotiation” stage.<ul><li><b>Andrii Melnyk</b>: proposal by Friday, the director is comparing 2 other proposals.</li><li><b>Nataliia Melnyk</b>: the next contact was due yesterday, overdue.</li><li><b>Ihor Petrenko</b>: a new request from the website.</li></ul>", "<b>What to do:</b> call Nataliia and send the proposal to Termobud. If you like, I'll read the notes on any of these leads."] },
      { chip: "Create a lead", ic: "c", q: "Create a lead for Termobud in the Partners pipeline", mem: 3, steps: ["Searching for the contact", "Creating the lead"], tool: { k: "entity.create", t: "Lead created", e: [["Termobud: partnership", "Partners · New lead", P.leads]] }, a: ["Done. The contact <b>Andrii Melnyk</b> was already in the database, so the lead is linked to him instead of a new contact."] }
    ],
    "Tasks": [
      { chip: "Show tasks", ic: "s", q: "Show my open tasks", mem: 7, steps: ["Searching tasks"], tool: { k: "task.list", t: "Task list", e: [["Termobud: proposal with two options", "In Progress · High · by Friday", P.tasks], ["Termobud: site visit and roof measurements", "To Do · Medium · 23.10", P.tasks], ["Alfa Merezhi: update the specification", "To Do · Low", P.tasks]], more: "And 2 more — open the board", href: P.tasks }, a: ["You have 5 open tasks, one is due this week.", "<b>Most urgent:</b> the proposal for Termobud, because it blocks the site meeting."] },
      { chip: "What's blocked", ic: "z", q: "What is blocked right now?", mem: 5, steps: ["Searching tasks", "Checking links"], tool: { k: "task.relations", t: "Task links", e: [["Agree on the equipment price", "Blocked · Critical · 3 days overdue", P.tasks]] }, a: ["<b>The chain:</b> no equipment price means no proposal, and no proposal means no site meeting.", "If you like, I'll message Oleh in the task chat."] },
      { chip: "Create a task", ic: "c", q: "Give Iryna a task to prepare the Termobud proposal by Friday", mem: 4, steps: ["Searching for the person", "Creating the task"], tool: { k: "task.create", t: "Task created", e: [["Termobud: proposal with two options", "Iryna Tkach · by Friday", P.tasks]] }, a: ["The task is created and linked to the Termobud lead. Iryna will get a notification."] }
    ],
    "Contacts": [
      { chip: "Find a contact", ic: "s", q: "Find Andrii Melnyk", mem: 8, steps: ["Searching contacts"], tool: { k: "contact.list", t: "Contacts", e: [["Andrii Melnyk", "Termobud · deputy director", P.cont]] }, a: ["<b>Andrii Melnyk</b> is in two pipelines:<ul><li><b>Solar sales:</b> “Negotiation” stage.</li><li><b>Partners:</b> “First contact” stage.</li></ul>"] },
      { chip: "What we discussed", ic: "z", q: "What did we discuss with Andrii last time?", mem: 11, steps: ["Searching for the contact", "Reading meeting records"], tool: { k: "meeting.list", t: "Meetings", e: [["Termobud - Aita", "Oct 20 · recording ready · 42 min", P.cont]] }, a: ["On October 20 we agreed on the following:<ul><li>A proposal with two options by Friday.</li><li>A site meeting on Thursday at 10:00.</li></ul>", "The director is comparing two other proposals, so payback matters."] },
      { chip: "Create a contact", ic: "c", q: "Add Pavlo Hnatiuk from Termobud, engineer", mem: 2, steps: ["Searching for the organization", "Creating the contact"], tool: { k: "contact.create", t: "Contact created", e: [["Pavlo Hnatiuk", "Termobud · engineer", P.cont]] }, a: ["The contact is created and linked to the organization <b>Termobud</b>."] }
    ],
    "Organizations": [
      { chip: "Find an organization", ic: "s", q: "Show all clients", mem: 6, steps: ["Searching organizations"], tool: { k: "org.list", t: "Organizations", e: [["Termobud", "Construction · 3 contacts", P.org], ["Enerhobud Servis", "Energy · 1 contact", P.org], ["Agro Zakhid", "Agriculture · 1 contact", P.org]] }, a: ["You have 3 clients. <b>Termobud</b> has the most contacts."] },
      { chip: "Who decides", ic: "z", q: "Who makes the decisions at Termobud?", mem: 7, steps: ["Reading the organization card"], tool: { k: "contact.list", t: "Organization contacts", e: [["Olena Sydorenko", "Director · decision maker", P.cont], ["Andrii Melnyk", "Deputy director · decision maker", P.cont]] }, a: ["Two people make the decisions. <b>Andrii Melnyk</b> leads the project on the technical side."] },
      { chip: "Create an organization", ic: "c", q: "Add the organization Logist Plus as a client", mem: 1, steps: ["Checking for duplicates", "Creating the organization"], tool: { k: "org.create", t: "Organization created", e: [["Logist Plus", "Role: client", P.org]] }, a: ["Done. This organization wasn't in the database yet."] }
    ],
    "Chat": [
      { chip: "What's new", ic: "s", q: "What did I miss in the chats today?", mem: 6, steps: ["Reading chats", "Searching for mentions"], tool: { k: "chat.rooms", t: "Chats", e: [["Task · Proposal for Termobud", "3 new messages", P.ch], ["Oleh Martyniuk", "Oleh's agent is waiting for a reply", P.ch]] }, a: ["Two chats are waiting for you. <b>Oleh's agent</b> asks for two lines about the meeting with Termobud."] },
      { chip: "Decisions", ic: "z", q: "Which decisions are waiting for confirmation?", mem: 4, steps: ["Reading agreements from meetings"], tool: { k: "decision.list", t: "Agreements", e: [["15/85 split up to €400k", "From a meeting · awaiting confirmation", P.ch]] }, a: ["One agreement is waiting for confirmation. You can do it right in the chat."] },
      { chip: "Message the team", ic: "c", q: "Tell Iryna the proposal is needed by Friday", mem: 2, steps: ["Searching for the person", "Preparing the message"], tool: { k: "chat.send", t: "Draft", e: [["Iryna Tkach", "The proposal for Termobud is needed by Friday", P.ch]] }, a: ["The draft is ready. Send it?"] }
    ],
    "Drafts": [
      { chip: "My documents", ic: "s", q: "Which documents are waiting for my review?", mem: 3, steps: ["Searching documents"], tool: { k: "draft.list", t: "Documents", e: [["Termobud proposal: text and table", "2 comments · 1 suggestion", P.dr]] }, a: ["One document is waiting for you."] },
      { chip: "Open edits", ic: "z", q: "What is still open in the Termobud proposal?", mem: 5, steps: ["Reading the document"], tool: { k: "draft.get", t: "Document", e: [["Termobud proposal: text and table", "Oleh's comment · installation timeline", P.dr]] }, a: ["One question about the installation timeline is left."] },
      { chip: "Suggest an edit", ic: "c", q: "Shorten the second paragraph", mem: 2, steps: ["Reading the document", "Preparing a suggestion"], tool: { k: "draft.suggest", t: "Suggestion", e: [["Termobud proposal: text and table", "Awaiting your approval", P.dr]] }, a: ["I prepared a suggestion and didn't change the text."] }
    ],
    "My questions": [
      { chip: "Who hasn't answered", ic: "s", q: "Who hasn't answered my questions yet?", mem: 3, steps: ["Searching questions"], tool: { k: "ask.list", t: "Questions", e: [["Is the cost estimate for Termobud ready?", "Iryna Tkach · by Nov 7", P.as], ["Are the inverters in stock?", "Roman Boiko · by Nov 8", P.as]] }, a: ["Waiting for two answers."] },
      { chip: "Asked of me", ic: "z", q: "What are people asking me?", mem: 2, steps: ["Searching questions"], tool: { k: "ask.list", t: "Questions", e: [["Are we going to the site on Thursday?", "Oleh's agent · today by 20:15", P.as]] }, a: ["One question is due today."] },
      { chip: "Ask a colleague", ic: "c", q: "Ask Iryna if the cost estimate is ready, wait one day", mem: 2, steps: ["Searching for the person", "Creating the question"], tool: { k: "ask.create", t: "Question sent", e: [["Is the cost estimate ready?", "Iryna Tkach · 1 day", P.as]] }, a: ["The question is sent. You'll see the answer in the task."] }
    ],
    "Notes": [
      { chip: "Find a note", ic: "s", q: "Where is the note about the warehouse roof?", mem: 2, steps: ["Searching notes"], tool: { k: "note.list", t: "Notes", e: [["Warehouse roof inspection", "Today, 10:46", P.nt]] }, a: ["Found the note with a checklist and photos."] },
      { chip: "What's in the notes", ic: "z", q: "What did I plan to check on site?", mem: 3, steps: ["Reading the note"], a: ["Two checklist items are open:<ul><li>Condition of the roof and waterproofing.</li><li>Space for the inverters.</li></ul>"] },
      { chip: "Write a note", ic: "c", q: "Write a note: site visit on Thursday at 10:00", mem: 1, steps: ["Creating the note"], tool: { k: "note.create", t: "Note created", e: [["Site visit on Thursday", "Added to the queue", P.nt]] }, a: ["Done. The note is already in the queue."] }
    ],
    "Meeting notetaker": [
      { chip: "What was decided", ic: "s", q: "What was decided at yesterday's meeting?", mem: 9, steps: ["Searching for the meeting", "Reading the summary"], tool: { k: "meeting.get", t: "Meeting", e: [["Termobud - Aita", "42 min 18 s · 4 decisions · 5 tasks", P.mt]] }, a: ["We agreed on the following:<ul><li>A proposal in two options.</li><li>A site visit on Thursday at 10:00.</li></ul>"] },
      { chip: "My tasks", ic: "z", q: "What should I do after the meeting?", mem: 5, steps: ["Reading tasks from the meeting"], tool: { k: "meeting.get", t: "Tasks from the meeting", e: [["Agree on the date of the site visit", "Kateryna Rudenko", P.mt]] }, a: ["One item is on you. Create a task?"] },
      { chip: "Record a meeting", ic: "c", q: "Record this meeting", mem: 1, steps: ["Checking the link", "Starting the recording"], tool: { k: "meeting.start", t: "Recording", e: [["Termobud - Aita", "The notetaker will join in a minute", P.mt]] }, a: ["The notetaker will join in about a minute as Aita Notetaker."] }
    ],
    "Decision Log": [
      { chip: "Find a decision", ic: "s", q: "What did we decide about the advance payment?", mem: 7, steps: ["Searching the log"], tool: { k: "decision.list", t: "Decisions", e: [["Installation starts only after a 50% advance payment", "In force · evidence A · review Jan 29", P.dc]] }, a: ["The decision is in force. Reason: without an advance payment the contractor doesn't book a crew."] },
      { chip: "What's waiting", ic: "z", q: "What is waiting for confirmation?", mem: 4, steps: ["Reading the queue"], tool: { k: "decision.list", t: "Queue", e: [["We target ads at engineering companies", "Pending · evidence C", P.dc], ["We show the storage option second", "Pending · evidence B", P.dc]] }, a: ["Two records are waiting for you."] },
      { chip: "Record a decision", ic: "c", q: "Record a decision: 50% advance payment, because we book the crew in advance", mem: 3, steps: ["Checking for duplicates", "Creating the record"], tool: { k: "decision.create", t: "Record created", e: [["Installation starts only after a 50% advance payment", "Review in 90 days", P.dc]] }, a: ["The decision is recorded with its reason. The review comes in 90 days."] }
    ],
    "Goals": [
      { chip: "Show goals", ic: "s", q: "Show our goals", mem: 6, steps: ["Reading goals"], tool: { k: "goal.list", t: "Goals", e: [["Close 20 solar projects", "Confidence 70% · on track", P.gl], ["Cut installation to five weeks", "Confidence 30% · at risk", P.gl]] }, a: ["7 active goals. One is at risk: installation time."] },
      { chip: "What's at risk", ic: "z", q: "Which goals are at risk?", mem: 4, steps: ["Reading key results"], a: ["<b>Cut installation to five weeks:</b> it's six and a half now, with a month left until the deadline."] },
      { chip: "Update a result", ic: "c", q: "Update the result: 14 plants commissioned", mem: 2, steps: ["Searching for the result", "Entering the value"], tool: { k: "kr.checkin", t: "Update", e: [["Plants commissioned", "13 → 14 of 20", P.gl]] }, a: ["The result is updated."] }
    ],
    "Knowledge base": [
      { chip: "Find a procedure", ic: "s", q: "What should I take on a site visit?", mem: 5, steps: ["Searching the knowledge base"], tool: { k: "kb.search", t: "Pages", e: [["Site visit", "Installation · Procedures", P.kb]] }, a: ["A tape measure, a rangefinder and a drone. Let security know before you go."] },
      { chip: "What's outdated", ic: "z", q: "Which pages are due for review?", mem: 3, steps: ["Checking review dates"], tool: { k: "kb.search", t: "Pages", e: [["Roof safety", "Review was due 3 days ago", P.kb]] }, a: ["One page is waiting for review. Roman already has a reminder."] },
      { chip: "Write a page", ic: "c", q: "Make a plant handover checklist", mem: 4, steps: ["Reading procedures", "Creating the page"], tool: { k: "kb.create", t: "Page created", e: [["Plant handover checklist", "Installation · Checklists", P.kb]] }, a: ["The page is created. Check it before publishing it for the team."] }
    ],
    "Dashboard": [
      { chip: "Day overview", ic: "s", q: "What's urgent today?", mem: 8, steps: ["Reading tasks"], tool: { k: "task.list", t: "Tasks", e: [["Termobud: proposal with two options", "Overdue: 2d", P.tasks]] }, a: ["Two critical tasks. Start with the proposal, because without it there will be no meeting."] },
      { chip: "Portfolio status", ic: "z", q: "What does the portfolio look like?", mem: 3, steps: ["Reading projects"], a: ["17 projects, 5 in operation, portfolio CAPEX $4.1M."] },
      { chip: "Who to call", ic: "c", q: "Who should I call today?", mem: 5, steps: ["Reading leads"], tool: { k: "entity.list", t: "Leads", e: [["Nataliia Melnyk", "The next contact was due yesterday", P.leads]] }, a: ["Start with Nataliia: the contact is overdue."] }
    ],
    "Calendar": [
      { chip: "What's today", ic: "s", q: "What meetings do I have today?", mem: 4, steps: ["Reading the calendar"], tool: { k: "event.list", t: "Events", e: [["Termobud - Aita", "15:00 · online · notetaker will join", P.cl]] }, a: ["One client meeting today at 15:00."] },
      { chip: "Free time", ic: "z", q: "Find an hour for me, Oleh and Iryna", mem: 2, steps: ["Checking calendars"], a: ["Shared free time: Tuesday, 14:00–15:00."] },
      { chip: "Schedule a meeting", ic: "c", q: "Schedule a meeting with Termobud on Thursday at 10:00", mem: 3, steps: ["Searching for the lead", "Creating the event"], tool: { k: "event.create", t: "Event created", e: [["Site visit", "Thursday, 10:00 · linked to the lead", P.cl]] }, a: ["The event is created and linked to the Termobud lead."] }
    ],
    "Queue": [
      { chip: "What's in the queue", ic: "s", q: "What's in my queue?", mem: 5, steps: ["Reading the queue"], tool: { k: "inbox.queue", t: "Queue", e: [["Termobud: request for a second proposal option", "Needs a decision", P.ib], ["Bank Skhid: documents", "Needs a decision", P.ib]] }, a: ["Two emails are waiting for your decision; the agent has already handled another one."] },
      { chip: "Overnight summary", ic: "z", q: "What happened overnight?", mem: 3, steps: ["Reading the agent log"], a: ["The agent filtered out 23 emails and took 11 actions; 2 are waiting for you."] },
      { chip: "Make a task", ic: "c", q: "Turn this email into a task for Iryna", mem: 2, steps: ["Reading the email", "Creating the task"], tool: { k: "task.create", t: "Task created", e: [["Termobud: second proposal option", "Iryna Tkach · by Friday", P.tasks]] }, a: ["The task is created. You can undo it within 24 hours."] }
    ],
    "Mail": [
      { chip: "Find an email", ic: "s", q: "Where is the email from the bank?", mem: 3, steps: ["Searching mail"], tool: { k: "inbox.search", t: "Emails", e: [["Bank Skhid: loan documents", "Today, 8:40", P.ml]] }, a: ["The email came today at 8:40; they need reports for three quarters."] },
      { chip: "Summarize", ic: "z", q: "Summarize the correspondence with Termobud", mem: 6, steps: ["Reading the correspondence"], a: ["The client asks for a second proposal option by Friday and sent a roof plan."] },
      { chip: "Write a reply", ic: "c", q: "Write a reply to Andrii", mem: 4, steps: ["Reading the correspondence", "Preparing a draft"], tool: { k: "inbox.draft", t: "Draft", e: [["Reply to Andrii Melnyk", "Waiting to be sent", P.ml]] }, a: ["The draft is ready. You send it."] }
    ],
    "Dataroom": [
      { chip: "Find a file", ic: "s", q: "Where is the contract with Termobud?", mem: 5, steps: ["Searching the dataroom"], tool: { k: "file.search", t: "Files", e: [["Contract_Termobud_v3.pdf", "02_Contracts / Termobud", "#doc=Contract_Termobud_v3.pdf"]] }, a: ["The file is in the <b>02_Contracts / Termobud</b> folder. It's the third version, from October 21."] },
      { chip: "What's shared by link", ic: "z", q: "Which folders are shared by link?", mem: 3, steps: ["Reading access settings"], tool: { k: "folder.list", t: "Folders", e: [["02_Contracts", "Anyone with the link · valid for 30 days", "#step=5"]] }, a: ["One folder is shared by link. It was opened 4 times."] },
      { chip: "Prepare a presentation", ic: "c", q: "Prepare a presentation about us for Termobud", mem: 14, steps: ["Searching company data", "Reading files", "Putting the presentation together"], tool: { k: "file.create", t: "File created", e: [["Presentation_Termobud.pdf", "04_Sales · 8 slides", "#doc=Presentation_Termobud.pdf"], ["About_the_company.pdf", "source · 01_Company", "#doc=About_the_company.pdf"], ["Solar_case_studies.pdf", "source · 01_Company", "#doc=Solar_case_studies.pdf"]] }, a: ["The data comes from <b>About_the_company.pdf</b>, <b>Solar_case_studies.pdf</b> and <b>Brand_book.pdf</b>.", "Check the pricing slide: it's worth approving before you send it."] }
    ],
    "Competitors": [
      { chip: "Show competitors", ic: "s", q: "Who is the biggest threat?", mem: 4, steps: ["Reading the competitor register"], tool: { k: "competitor.list", t: "Competitors", e: [["EnergyDesk", "Threat: high · €12M", P.cp], ["Volta Suite", "Threat: high · €28M", P.cp]] }, a: ["Two competitors are a high threat. <b>EnergyDesk</b> shows up more often in your leads."] },
      { chip: "Compare with us", ic: "z", q: "Where is EnergyDesk stronger than us?", mem: 6, steps: ["Reading the comparison table"], a: ["EnergyDesk is ahead in two rows:<ul><li><b>Warehouse and spare parts.</b></li><li><b>App for installers.</b></li></ul>", "<b>Your strengths:</b> the financial model and call transcription."] },
      { chip: "Add a competitor", ic: "c", q: "Add the competitor energydesk.example", mem: 1, steps: ["Reading the website", "Creating the card"], tool: { k: "competitor.create", t: "Card created", e: [["EnergyDesk", "External · data from the website", P.cp]] }, a: ["The card is created. Check the data: AI can make mistakes."] }
    ],
    "Network": [
      { chip: "Find a person", ic: "s", q: "Who do we have for installation?", mem: 5, steps: ["Searching the network"], tool: { k: "network.search", t: "People", e: [["Dmytro Tkach", "Tekhnopark · Project, Deal", P.net], ["Roman Boiko", "Soniachni Systemy · Team", P.net]] }, a: ["<b>Dmytro Tkach</b> has already worked with you on a project, so it's worth starting with him."] },
      { chip: "How I know them", ic: "z", q: "How do I know Andrii Melnyk?", mem: 8, steps: ["Searching the network"], tool: { k: "network.search", t: "People", e: [["Andrii Melnyk", "Termobud · CRM", P.cont]] }, a: ["Andrii is in your CRM; he's a Termobud contact. He isn't registered on the platform yet, so you can't message him in chat."] },
      { chip: "Find a partner", ic: "c", q: "Find an installation company in Lviv", mem: 2, steps: ["Searching people on the platform"], tool: { k: "profile.search", t: "People", e: [["Tetiana Shevchuk", "Montazh Sontse · head of installation", P.net]] }, a: ["One person found in Lviv. Send her a message?"] }
    ],
    "Companies": [
      { chip: "Find a company", ic: "s", q: "Find an installation company in Ukraine", mem: 3, steps: ["Searching companies"], tool: { k: "company.search", t: "Companies", e: [["Montazh Sontse", "UA · Lviv · verified · 14 projects", P.co], ["Svitlo Pro", "UA · Vinnytsia · verified", P.co]] }, a: ["Two companies match. <b>Montazh Sontse</b> was active 2 days ago."] },
      { chip: "Who is active", ic: "z", q: "Who is active this week?", mem: 2, steps: ["Searching companies"], tool: { k: "company.search", t: "Companies", e: [["Montazh Sontse", "2 days ago", P.co], ["GreenBud", "3 days ago", P.co]] }, a: ["Two companies are active this week."] },
      { chip: "Invite to a meeting", ic: "c", q: "How do I invite Montazh Sontse to a meeting?", mem: 1, steps: ["Reading the company profile"], tool: { k: "company.get", t: "Company", e: [["Montazh Sontse", "Request a meeting", P.co]] }, a: ["In the profile, click “Request a meeting”. The meeting takes place once the company confirms."] }
    ]
  };
  var desc = (typeof D !== "undefined" && D[mod]) || "";
  var general = [
    { chip: "What the module does", ic: "s", q: "What does this module do?", mem: 3, steps: ["Reading the knowledge base"], a: [desc ? "<b>“" + mod + "”:</b> " + desc + "." : "I'll tell you about the module in a free demo."] },
    { chip: "Is it in the package", ic: "z", q: "Is it included in the package?", mem: 1, steps: ["Reading the knowledge base"], a: ["Yes. All 48 modules are included in every package."] },
    { chip: "See it in my company", ic: "c", q: "How can I see this in my company?", mem: 1, steps: ["Reading the knowledge base"], a: ["Book a free demo, and we'll show you how the module will work for you.<br><a href=\"../demo\">Free demo</a>"] }
  ];
  var items = QA[mod] || general;

  var I = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="' + p + '"/></svg>'; };
  var star = I("M11 4l1.9 5.6L18.5 11.5l-5.6 1.9L11 19l-1.9-5.6L3.5 11.5l5.6-1.9zM19 3v4M17 5h4");
  var wand = I("M4 20 15 9M14 5v3M12.5 6.5h3M19 11v3M17.5 12.5h3M8 4v2M7 5h2");
  var clip = I("M21 11l-9 9a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a1.800 1.800 0 0 1-2.500-2.500l8-8");
  var zone = I("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 1v4M12 19v4M1 12h4M19 12h4");
  var mic = I("M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3");
  var ext = I("M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5");
  var bot = I("M12 4v3M5 9h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM9 14v.5M15 14v.5");
  var chk = I("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12l3 3 5-6");
  var cpy = I("M9 9h11v11H9zM5 15H4V4h11v1");
  var newc = I("M21 12a8 8 0 0 1-12 7l-6 2 2-6a8 8 0 1 1 16-3zM12 9v6M9 12h6");
  var chipI = { s: I("M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.300-4.300"), z: I("M13 3 5 14h6l-1 7 8-11h-6z"), c: star };

  var css = `
#agB{position:fixed;right:24px;bottom:24px;z-index:90;width:56px;height:56px;border-radius:50%;border:0;background:#fff;color:#171717;cursor:pointer;display:grid;place-items:center;box-shadow:0 0 0 1.5px #39B54A,0 0 12px rgba(57,181,74,.75),0 0 32px rgba(57,181,74,.4);animation:agGlow 2.6s ease-in-out infinite}
#agB svg{width:26px;height:26px}#agB:focus-visible,#agP button:focus-visible{outline:2px solid #0086CC;outline-offset:2px}#agP form:focus-within{border-color:#39B54A}
@keyframes agGlow{50%{box-shadow:0 0 0 1.5px #39B54A,0 0 20px rgba(57,181,74,.95),0 0 50px rgba(57,181,74,.55)}}
#agP{position:fixed;right:24px;bottom:24px;z-index:91;width:430px;height:600px;max-height:calc(100vh - 48px);background:#fff;border:1px solid #E6E6E6;border-radius:18px;box-shadow:0 24px 70px -20px rgba(10,40,80,.35);display:none;flex-direction:column;overflow:hidden;font-family:"Golos Text",system-ui,sans-serif;color:#171717;font-size:14.5px;line-height:1.5}
#agP.on{display:flex}#agP svg{width:18px;height:18px;display:block}
#agP .hd{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #F0F0F0}
#agP .ic{width:34px;height:34px;border-radius:50%;background:#E9F7EC;color:#1E7A2E;display:grid;place-items:center;flex:none}
#agP .tt{min-width:0;flex:1}#agP .tt b{font-weight:600;display:block;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#agP .tt small{color:#737373;font-size:12px}
#agP .hb{border:0;background:none;color:#555;cursor:pointer;padding:5px;border-radius:6px;font-size:18px;line-height:1;display:grid;place-items:center}#agP .hb:hover{background:#F2F2F2}
#agP .bd{flex:1;min-height:0;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
#agP .hi{margin:auto;text-align:center;color:#666;max-width:300px}#agP .hi i{width:48px;height:48px;border-radius:14px;background:#E9F7EC;color:#1E7A2E;display:grid;place-items:center;margin:0 auto 14px}#agP .hi i svg{width:26px;height:26px}#agP .hi b{display:block;color:#171717;font-weight:600;font-size:17px;margin-bottom:6px}
#agP .me{align-self:flex-end;background:#F2F2F2;border-radius:14px 14px 4px 14px;padding:7px 12px;max-width:85%}
#agP .mem{align-self:flex-start;display:inline-flex;align-items:center;gap:5px;background:#F5F5F5;color:#737373;border-radius:12px;padding:1px 9px;font-size:12px}
#agP .rw{display:grid;grid-template-columns:28px minmax(0,1fr);gap:10px}#agP .bt{width:28px;height:28px;border-radius:8px;background:#F2F2F2;color:#444;display:grid;place-items:center}#agP .bt svg{width:16px;height:16px}#agP .col{display:flex;flex-direction:column;gap:8px;min-width:0}
#agP .st{display:flex;align-items:center;gap:8px;border:1px solid #E6E6E6;border-radius:9px;padding:6px 10px;font-size:13px;color:#555}#agP .st svg{width:15px;height:15px;color:#39B54A}#agP .st em{margin-left:auto;font-style:normal;color:#888}
#agP .tl{border:1px solid #E6E6E6;border-radius:10px;overflow:hidden}#agP .th{display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid #F0F0F0;font-size:13px;font-weight:600}#agP .th code{font:11px ui-monospace,Menlo,monospace;background:#F5F5F5;border:1px solid #E6E6E6;border-radius:5px;padding:0 5px;color:#555}
#agP .tb{padding:8px;display:flex;flex-direction:column;gap:6px}#agP .en{display:grid;grid-template-columns:minmax(0,1fr) 18px;gap:6px;align-items:center;border:1px solid #E6E6E6;border-radius:8px;padding:6px 10px;color:#171717;text-decoration:none}#agP .en:hover{background:#F7F7F7}#agP .en b{font-weight:500;font-size:13.5px;display:block}#agP .en small{display:block;color:#737373;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#agP .en svg{width:14px;height:14px;color:#555}
#agP .mo{font-size:12.5px;color:#555;text-decoration:none;padding:2px}#agP .mo:hover{color:#111}#agP .dt{font:11px ui-monospace,Menlo,monospace;color:#888;padding:0 2px}
#agP .an b{font-weight:600}#agP .an ul{margin:4px 0;padding-left:20px}#agP .an li{margin-bottom:3px}#agP .an a{color:#178A36}
#agP .ft2{display:flex;align-items:center;gap:6px;color:#888;font-size:12px}#agP .ft2 svg{width:13px;height:13px}
#agP .dots span{display:inline-block;width:6px;height:6px;margin-right:4px;border-radius:50%;background:#39B54A;animation:agDot 1s infinite}#agP .dots span:nth-child(2){animation-delay:.15s}#agP .dots span:nth-child(3){animation-delay:.3s}
@keyframes agDot{50%{opacity:.25}}
#agP .ch{display:flex;flex-wrap:wrap;gap:8px;padding:0 14px 10px}#agP .ch button{display:inline-flex;align-items:center;gap:6px;border:1px solid #E6E6E6;background:#fff;border-radius:16px;padding:5px 11px;font:inherit;font-size:13px;color:#444;cursor:pointer}#agP .ch button:hover{background:#F7F7F7}#agP .ch svg{width:14px;height:14px}
#agP form{display:flex;gap:4px;align-items:center;margin:0 12px;border:1px solid #E6E6E6;border-radius:12px;padding:6px 8px}#agP input{flex:1;min-width:0;border:0;outline:0;font:inherit;background:none;padding:0 6px}
#agP .tool{border:0;background:none;color:#555;cursor:pointer;padding:5px;border-radius:6px;display:grid;place-items:center}#agP .tool:hover{background:#F2F2F2}#agP .go{width:32px;height:32px;border-radius:9px;border:1px solid #9FDCAE;background:#EEF8EE;color:#1E7A2E;font-size:15px;cursor:pointer;flex:none}
#agP .fb{display:flex;align-items:center;gap:12px;padding:7px 16px 10px;color:#888;font-size:12px}#agP .fb span:last-child{margin-left:auto}
@media(max-width:560px){#agP{right:8px;left:8px;bottom:8px;width:auto;height:calc(100vh - 16px)}#agB{right:16px;bottom:16px}}
@media(prefers-reduced-motion:reduce){#agB,#agP .dots span{animation:none}}
`;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var btn = document.createElement("button");
  btn.id = "agB"; btn.type = "button"; btn.setAttribute("aria-label", "Aita Assistant"); btn.innerHTML = star;
  var box = document.createElement("div");
  box.id = "agP"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Aita Assistant");
  box.innerHTML = '<div class="hd"><span class="ic">' + wand + '</span><span class="tt"><b>New conversation ⌄</b><small>Aita · website demo</small></span><button class="hb nw" type="button" aria-label="New conversation">' + newc + '</button><span class="hb" aria-hidden="true">⋯</span><button class="hb mn" type="button" aria-label="Minimize">–</button><button class="hb x" type="button" aria-label="Close">×</button></div>'
    + '<div class="bd" aria-live="polite"></div><div class="ch"></div>'
    + '<form><button class="tool" type="button" aria-label="Attach a file">' + clip + '</button><button class="tool" type="button" aria-label="Select an area">' + zone + '</button><input type="text" placeholder="Type a message..." aria-label="Message"><button class="tool" type="button" aria-label="Dictate into the field">' + mic + '</button><button class="go" type="submit" aria-label="Send">↑</button></form>'
    + '<div class="fb"><span>Claude Haiku 5.5 ⌄</span><span>Ask before changes</span><span>Ctrl+J</span></div>';
  document.body.appendChild(btn); document.body.appendChild(box);

  var bd = box.querySelector(".bd"), ch = box.querySelector(".ch"), inp = box.querySelector("input"), title = box.querySelector(".tt b"), busy = false;
  var hello = '<div class="hi"><i>' + star + '</i><b>How can I help?</b>Ask me anything about your workspace...</div>';
  var reset = function () { bd.innerHTML = hello; title.textContent = "New conversation ⌄"; ch.style.display = ""; busy = false; };
  var esc = function (x) { var d = document.createElement("div"); d.textContent = x; return d.innerHTML; };
  var down = function () { bd.scrollTop = bd.scrollHeight; };
  var fast = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms, f) { setTimeout(f, fast ? 0 : ms); };
  var stamp = function () { var d = new Date(), p = function (n) { return (n < 10 ? "0" : "") + n; }; return { full: p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()), t: p(d.getHours()) + ":" + p(d.getMinutes()) }; };
  var ask = function (q, it) {
    if (busy) return; busy = true;
    bd.innerHTML = ""; ch.style.display = "none"; title.textContent = q;
    var me = document.createElement("div"); me.className = "me"; me.textContent = q; bd.appendChild(me);
    if (it.mem) { var m = document.createElement("div"); m.className = "mem"; m.textContent = "Memories used: " + it.mem; bd.appendChild(m); }
    var rw = document.createElement("div"); rw.className = "rw"; rw.innerHTML = '<span class="bt">' + bot + '</span><div class="col"></div>'; bd.appendChild(rw);
    var col = rw.querySelector(".col");
    var think = document.createElement("div"); think.className = "dots"; think.innerHTML = "<span></span><span></span><span></span>"; col.appendChild(think);
    var queue = [];
    (it.steps || []).forEach(function (s) { queue.push(function () { var e = document.createElement("div"); e.className = "st"; e.innerHTML = chk + esc(s) + "<em>›</em>"; col.insertBefore(e, think); }); });
    if (it.tool) queue.push(function () {
      var w = stamp(), t = it.tool, e = document.createElement("div"); e.className = "tl";
      e.innerHTML = '<div class="th"><code>' + t.k + '</code>' + esc(t.t) + '</div><div class="tb">' + t.e.map(function (x) { return '<a class="en" href="' + x[2] + '"><span><b>' + esc(x[0]) + '</b><small>' + esc(x[1]) + '</small></span>' + ext + '</a>'; }).join("") + (t.more ? '<a class="mo" href="' + t.href + '">' + esc(t.more) + '</a>' : "") + '<div class="dt">data from ' + w.full + '</div></div>';
      col.insertBefore(e, think);
    });
    (it.a || []).forEach(function (html) { queue.push(function () { var e = document.createElement("div"); e.className = "an"; e.innerHTML = html; col.insertBefore(e, think); }); });
    var i = 0;
    (function next() {
      if (i < queue.length) { queue[i++](); down(); wait(i === 1 ? 600 : 520, next); return; }
      think.remove();
      var f = document.createElement("div"); f.className = "ft2"; f.innerHTML = cpy + "Copy &nbsp; " + stamp().t; col.appendChild(f); down(); busy = false; ch.style.display = "";
    })();
  };
  items.forEach(function (it) {
    var b = document.createElement("button"); b.type = "button"; b.innerHTML = (chipI[it.ic] || star) + esc(it.chip);
    b.onclick = function () { ask(it.q, it); }; ch.appendChild(b);
  });
  var note = { mem: 0, steps: [], a: ["The website shows only ready-made examples. On the platform you can attach a file, dictate a request and select an area of the screen.<br><a href=\"../demo\">Free demo</a>"] };
  box.querySelectorAll(".tool").forEach(function (b) { b.onclick = function () { ask(b.getAttribute("aria-label"), note); }; });
  box.querySelector("form").onsubmit = function (e) {
    e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = "";
    ask(v, { mem: 0, steps: [], a: ["The website shows only ready-made examples. On the platform the agent answers using your company's data.<br><a href=\"../demo\">Free demo</a>"] });
  };
  var open = function (on) { box.classList.toggle("on", on); btn.style.display = on ? "none" : ""; (on ? inp : btn).focus(); };
  btn.onclick = function () { open(true); };
  box.querySelector(".x").onclick = function () { open(false); };
  box.querySelector(".mn").onclick = function () { open(false); };
  box.querySelector(".nw").onclick = reset;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("on")) open(false); if (e.ctrlKey && (e.key === "j" || e.key === "J")) { e.preventDefault(); open(!box.classList.contains("on")); } });
  reset();
})();
