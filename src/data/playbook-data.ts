export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  takeaways?: string[];
}

export const chapters: Chapter[] = [
  { id: 1, title: "What the Data Says", subtitle: "Skills, salaries, and backgrounds from 24 companies.",
    takeaways: [
      "Institutional crypto marketing roles demand a hybrid of TradFi credibility and crypto fluency.",
      "Research, compliance knowledge, and sales enablement are the most in-demand skills.",
      "Salary ranges are wide — seniority and institutional experience drive the premium.",
    ] },
  { id: 2, title: "What Is Crypto Institutional Marketing?", subtitle: "It's not about going viral on X or building a community. This one is different.",
    takeaways: [
      "Institutional marketing convinces risk-conscious organisations to trust your product with serious money.",
      "Consumer crypto logic (FOMO, memes, influencers) does not work here — committees decide over months.",
      "The three pillars are credibility, clarity, and continuity.",
    ] },
  { id: 3, title: "What Institutions Need From DeFi", subtitle: "Privacy, compliance, and risk — the 3 things that actually matters.",
    takeaways: [
      "Privacy is a prerequisite, not a feature — institutions cannot broadcast positions.",
      "Compliance must be built in at the protocol level, not bolted on after.",
      "Tokenized Treasuries are the gateway asset — once deployed, every subsequent asset class is incremental.",
      "$33 billion in real-world assets are now on-chain, and stablecoins exceed $310B market cap.",
    ] },
  { id: 4, title: "Who Are You Selling To?", subtitle: "Know your institutional buyers.",
    takeaways: [
      "There are 7 distinct buyer personas inside institutions — each needs different messaging.",
      "CFOs care about cost; compliance officers care about risk; innovation leads care about being early.",
      "LPs and allocators buy conviction, not products — give them data they can defend internally.",
    ] },
  { id: 5, title: "Where They Hang Out", subtitle: "Not Twitter. Not Discord.",
    takeaways: [
      "Institutional buyers are at Sibos, Consensus, and TOKEN2049 — not in your Discord.",
      "Private Telegram/Signal groups and research platforms like Messari are key channels.",
      "LinkedIn is your primary digital channel — but only with substance, not engagement bait.",
    ] },
  { id: 6, title: "What Content to Make", subtitle: "Content that helps them say yes.",
    takeaways: [
      "Every piece of content should answer: Is this proven? Is this safe? Is this worth evaluating?",
      "Research reports and case studies with named clients are your strongest assets.",
      "Executive thought leadership answers 'do I trust the people behind this?' before sales even starts.",
    ] },
  { id: 7, title: "Founder Content Is Your Cheapest Trust Signal", subtitle: "The compliance officer googles your CEO before the deal is approved.",
    takeaways: [
      "Your CEO's LinkedIn presence is evaluated by compliance teams during due diligence.",
      "One well-placed executive post can do more than an entire paid campaign.",
      "Founder content should demonstrate domain expertise, not promote product features.",
    ] },
  { id: 8, title: "The Sales Cycle", subtitle: "Stage by stage, month by month.",
    takeaways: [
      "Institutional sales cycles run 6-18 months with 12+ stakeholders involved.",
      "Marketing's job is to arm the internal champion with materials for every stage.",
      "Most deals are lost during the evaluation stage — sustained nurture content is critical.",
    ] },
  { id: 9, title: "How Institutions Buy Infrastructure", subtitle: "...and what that means for your marketing.",
    takeaways: [
      "Enterprise buyers evaluate vendors through the lens of integration risk, not feature superiority.",
      "Reference clients and named case studies are non-negotiable for procurement teams.",
      "The 'rip and replace' narrative kills deals — position as integration, not replacement.",
    ] },
  { id: 10, title: "How to Build a Pipeline Attribution Model", subtitle: "You need to be able to show the CEO that the content is working.",
    takeaways: [
      "Attribution in institutional marketing requires tracking account-level engagement, not individual clicks.",
      "First-touch and multi-touch models both have value — use them together.",
      "Pipeline attribution protects your budget when the CFO asks what marketing actually did.",
    ] },
  { id: 11, title: "Common Mistakes", subtitle: "Consumer crypto logic vs. institutional reality.",
    takeaways: [
      "Writing for Crypto Twitter instead of a risk committee is the most common mistake.",
      "Your real competition is the trusted incumbent (SWIFT, Bloomberg), not another crypto company.",
      "Never run the same pitch everywhere — two banks may look similar but have very different constraints.",
      "The 'rip and replace' narrative kills deals — design entry points that integrate into existing systems.",
    ] },
  { id: 12, title: "Messaging Rules", subtitle: "How to land in a boardroom and not get ghosted.",
    takeaways: [
      "Lead with the outcome, not the technology — CFOs want cost savings, not smart contracts.",
      "If your message does not map to cost reduction, risk mitigation, or access, it will not land.",
      "Anchor everything to a reference the buyer already trusts.",
    ] },
  { id: 13, title: "The Launch Playbook", subtitle: "From positioning to post-launch.",
    takeaways: [
      "Decide how big the launch is before building anything — not every release deserves a full campaign.",
      "Brief sales 2-3 weeks before launch — they should never see materials for the first time on launch day.",
      "Time launches 48 hours before major conferences when buyers are travelling and paying attention.",
      "Measure pipeline generated within 90 days, not impressions or downloads.",
    ] },
  { id: 14, title: "Onchain GTM Strategy for Fintechs", subtitle: "How to position as infrastructure, not a feature.",
    takeaways: [
      "Going onchain is a positioning decision, not a feature update.",
      "'We added crypto' sounds optional — 'We own more of the financial stack' sounds like strategy.",
      "Make the cost of legacy systems visible before pitching your solution.",
      "Institutions close on justification (faster settlement, lower cost, new access), not vision.",
    ] },
  { id: 15, title: "Metrics and KPIs", subtitle: "What actually matters and what does not.",
    takeaways: [
      "One right person reading the right content is worth more than 10,000 wrong impressions.",
      "Track marketing-sourced pipeline (10-20% year one, 25-40% at maturity) and marketing-influenced pipeline (50-70%).",
      "Twitter followers, Discord size, and generic downloads are vanity metrics in institutional marketing.",
    ] },
  { id: 16, title: "How to Get One of These Jobs", subtitle: "What the JDs actually want.",
    takeaways: [
      "Every JD asks for the same hybrid: institutional buyer understanding + crypto fluency + execution ability.",
      "Your portfolio needs a research report aimed at TradFi, a case study with named outcomes, and pipeline metrics.",
      "Talk about programs you built for risk officers and compliance teams, not community growth.",
    ] },
  { id: 17, title: "The Demand Generation Checklist", subtitle: "Pick your niche, pick your buyer, get your personalised checklist.",
    takeaways: [
      "Start with one vertical and one buyer persona — do not try to market to everyone at once.",
      "Your checklist should map directly to pipeline stages, not marketing activities.",
      "Every checklist item should be something you can measure within 90 days.",
    ] },
  { id: 18, title: "Test Yourself", subtitle: "What you should know before any interview." },
  { id: 19, title: "Glossary", subtitle: "Your crypto institutional marketing dictionary." },
];
