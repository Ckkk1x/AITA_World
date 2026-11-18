// Тексти сторінок модулів за шаблоном (AITA_Site/Модулі_шаблон_сторінки_модуля.md).
// Модуль без запису тут показується старим шаблоном. video: шлях до ролика; якщо порожньо, показуємо img.
const MODC = {
  "Leads": {
    h1: "Every call fills in the client card",
    sub: "Requests from the website, email and phone land in the sales funnel automatically, and the client card is updated after every email, meeting and call.",
    hero: { img: "/modules-assets/leads-hero.jpg", video: "" },
    diff: [
      ["After a call, the manager writes down the agreements by hand", "Aita transcribes the call and writes a summary into the client card", "Agreements are kept even if the manager didn't have time to write them down"],
      ["Every manager keeps notes their own way", "For each funnel you set an instruction for AI, and call summaries follow your structure", "Needs, budget and next steps are described the same way across the team"],
      ["A won client is entered into projects all over again", "A project is created right from the lead card", "The people who will fulfil the order see the client's whole history"]
    ],
    tasks: [
      { tab: "Request", h: "A request lands in the funnel without manual entry", p: "The platform shows where a client came from: the website, email, Telegram or a call. Other sources, such as ads, can be connected separately. Each phone line can be routed to its own funnel, so a request goes straight to the right team.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Call", h: "A conversation becomes a record in the card", p: "Incoming and outgoing calls are transcribed automatically, and the summary is updated after every conversation. A description entered by a person stays unchanged. Calls with no content, such as an answering machine or a wrong number, do not change the card.", img: "/modules-assets/leads-call.jpg", video: "" },
      { tab: "Instruction for AI", h: "You decide what gets recorded after a call", p: "Describe the funnel in plain words, and the platform writes an instruction for AI. Or write your own instruction with your own report format. Before launch you can check it with the “Test prompt” button.", img: "/modules-assets/leads-prompt.jpg", video: "" },
      { tab: "Deal", h: "You can see what to do next with each client", p: "The stage, amount, last and next contact are shown in the card. The “Overdue” filter shows clients who were not contacted on time.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "History", h: "All work with a client in one card", p: "Emails and meetings are linked to the card, and the “Chat”, “Correspondence”, “Conversations” and “History” tabs keep everything that happened with the client. When the manager changes, a colleague picks up from the same place.", img: "/modules-assets/leads-history.jpg", video: "", link: null },
      { tab: "Project", h: "A won lead becomes a project", p: "In the card you click “Create project”, and the project remembers which lead it started from.", img: "/modules-assets/blog-cover-project_stages.jpg", video: "", link: null }
    ],
    ai: [
      ["Call summary", "AI writes down the content of the conversation following your instruction."],
      ["Next steps", "After a call, the AI agent suggests what to do next."],
      ["AI secretary", "AI reads new emails and suggests creating a lead, contact or task."]
    ],
    aiLimit: "AI does not change the description the manager wrote. The call summary goes into a separate field.",
    more: ["Multiple funnels", "Labels and filters", "Loss reasons", "Import from CSV and Excel", "Export to CSV and XLSX", "Website forms"],
    access: ["Members of your company see funnels and leads.", "A funnel can be shared with another company.", "Access to a single lead is set up via “Access management”."],
    start: ["Choose ready-made settings or create your own pipeline.", "Upload clients from CSV or Excel, up to 5,000 rows at a time.", "Connect mail and telephony."],
    industry: "The lead card has capacity and storage fields, and they carry over to the plant project.",
    faq: [
      ["What is a lead and why does a company need this module?", "A lead is a potential client. The module takes it from the first request to a won deal so that no request gets lost."],
      ["Can I decide myself what gets recorded after a call?", "Yes. Each funnel has its own instruction for AI, and the company chooses the language of the description."],
      ["Which telephony can be connected?", "Any telephony with an open API. Unitalk works today: it passes the call recording, and Aita does the transcript and summary."],
      ["Is call transcription included in the package?", "Yes, you only need a telephony number. Transcription uses a small amount of AI credits from your package."],
      ["Can I move clients from another CRM?", "Yes, from a CSV or Excel file. Or our team will move the data."],
      ["Do I have to pay extra for the module?", "No. Leads is included in every package."]
    ],
    final: "We'll show you how calls will fill in client cards in your company"
  }
};
