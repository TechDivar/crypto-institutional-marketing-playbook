import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, RotateCcw, ArrowLeft } from "lucide-react";

const companyTypes = [
  { id: "custody", icon: "🔐", name: "Custody & Security", desc: "Fireblocks, Ledger, Blockstream, Anchorage, Twinstake" },
  { id: "trading", icon: "📊", name: "Trading & Liquidity", desc: "Keyrock, RWA.xyz, Robinhood Institutional" },
  { id: "data", icon: "🔍", name: "Data & Analytics", desc: "Dune, Allium, Artemis Analytics" },
  { id: "compliance", icon: "⚖️", name: "Compliance & Regulation", desc: "Notabene, TaxBit, Cryptio" },
  { id: "treasury", icon: "🏛️", name: "Treasury & Payments", desc: "Trovata, Dakota, Figure" },
  { id: "infra", icon: "⚙️", name: "Infrastructure & Protocol", desc: "Chainlink, LayerZero, Ondo Finance" },
  { id: "staking", icon: "🪙", name: "Staking & Yield", desc: "Sanctum, Kiln, Twinstake" },
];

const buyerTypes = [
  { id: "bank", icon: "🏦", name: "Banks & Brokers", desc: "CTOs, digital asset heads, compliance teams at regulated banks" },
  { id: "fund", icon: "📈", name: "Funds & Asset Managers", desc: "Fund managers, investment leads, hedge funds building allocations" },
  { id: "fintech", icon: "⚡", name: "Fintechs & PSPs", desc: "Treasury leads, CTOs managing stablecoin and payment rails" },
  { id: "family", icon: "🏡", name: "Family Offices", desc: "CFOs, principals evaluating custody and yield options" },
  { id: "crypto", icon: "🔗", name: "Crypto Projects", desc: "BD leads at exchanges, protocols, and projects needing infrastructure" },
  { id: "etf", icon: "📑", name: "ETF Issuers & Digital Treasury", desc: "ETF issuers, NASDAQ-listed digital asset treasury companies" },
  { id: "exchange", icon: "🏪", name: "Exchanges & Custodians", desc: "CEX and DEX operators, custodians building staking and yield products" },
];

interface CheckItem {
  text: string;
  sub: string;
  tag: string;
  tagColor: string;
  companies: string[];
  buyers: string[];
}

interface Phase {
  id: string;
  number: string;
  title: string;
  badge: string;
  badgeColor: string;
  callout: { label: string; text: string };
  items: CheckItem[];
}

const phases: Phase[] = [
  {
    id: "phase1", number: "01", title: "Foundation — Build Before You Post",
    badge: "Weeks 1–2", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    callout: { label: "Why this phase matters", text: "Most teams skip straight to posting content. Without the infrastructure underneath it, the content generates attention with nowhere to go. Build the pipeline first, then fill it." },
    items: [
      { text: "Rewrite the founder's LinkedIn About section", sub: "Opens with what you do for clients, not a career timeline. A bank CTO should know in 10 seconds whether this person is relevant.", tag: "LinkedIn", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Set up HubSpot contact properties", sub: "Persona Type, Institution Type, Lead Score, First Touch Channel, First Content Asset Downloaded, MQL Date.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Build the lead scoring rules in HubSpot", sub: "Fit score up to 40pts based on institution type. Engagement score auto-tracked. MQL threshold: 60 points combined.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Define your ICP in Clay", sub: "\"Compliance officer at a European bank with $10B+ AUM\" is a target. \"Finance professional\" is not.", tag: "Clay", tagColor: "bg-primary/10 text-primary border-primary/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Set up UTM parameters on every content link", sub: "Every LinkedIn post, white paper, email, and webinar link needs a UTM tag. Without this you cannot attribute anything.", tag: "Measure", tagColor: "bg-red-500/10 text-red-400 border-red-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Create the content calendar in Notion", sub: "Columns: Date / Format / Topic / Target persona / Status / Scheduled / Posted. Every post maps to a buyer persona before you write it.", tag: "Notion", tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
    ],
  },
  {
    id: "phase2", number: "02", title: "Content Assets — Build What Captures Leads",
    badge: "Weeks 2–4", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    callout: { label: "The rule for gated content", text: "Every asset should be something your target buyer would genuinely want to read — not a product brochure. If it solves a specific problem they have right now, it will convert." },
    items: [
      { text: "Write the OTC vs Exchange Execution one-pager", sub: "1–2 pages, factual and specific. Targets fund managers, trading desks, and crypto projects evaluating liquidity partners.", tag: "AI Draft", tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20", companies: ["trading","custody"], buyers: ["fund","bank","crypto"] },
      { text: "Write the Institutional Crypto Onboarding Checklist", sub: "For compliance officers at banks, fintechs, and crypto projects evaluating a digital asset partner. Very high intent signal.", tag: "AI Draft", tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20", companies: ["compliance","custody"], buyers: ["bank","fintech","crypto"] },
      { text: "Write the Stablecoin Operations Guide", sub: "For treasury teams at fintechs and PSPs. How stablecoin flows work operationally end-to-end. 2–3 pages.", tag: "AI Draft", tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20", companies: ["treasury","infra"], buyers: ["fintech","bank"] },
      { text: "Write the On-chain Data Methodology Brief", sub: "Covers SOC 1 and SOC 2 compliance, auditable methodology, and data quality standards for enterprise clients.", tag: "Content", tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", companies: ["data"], buyers: ["bank","fund","fintech","crypto"] },
      { text: "Write one client case study", sub: "Problem → approach → result. 1 page. No fluff. Anonymised if needed. A named client story is worth more than any product brochure.", tag: "Content", tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", companies: ["custody","trading","compliance","infra","treasury"], buyers: ["bank","fund","family","fintech","crypto"] },
      { text: "Write the Institutional SOL Yield Guide", sub: "For banks, funds, ETF issuers, and exchanges holding SOL. Covers liquid staking, yield rates, risk framework, and integration options.", tag: "AI Draft", tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20", companies: ["staking"], buyers: ["bank","fund","etf","exchange","crypto"] },
      { text: "Write the ETF and Treasury Staking Brief", sub: "For ETF issuers and NASDAQ-listed digital asset treasury companies accumulating SOL. Explains how staking generates yield without selling.", tag: "Content", tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", companies: ["staking"], buyers: ["etf","exchange","bank"] },
      { text: "Write the Regulatory Framework Brief", sub: "What your regulatory credentials mean in practice. Targets compliance officers and legal teams. A factual error here destroys months of trust.", tag: "Content", tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", companies: ["custody","compliance"], buyers: ["bank","family","fintech"] },
      { text: "Build a landing page for each asset with a HubSpot form", sub: "Capture: First Name, Last Name, Work Email, Company Name, Job Title, Country. No phone number at this stage.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
    ],
  },
  {
    id: "phase3", number: "03", title: "LinkedIn — The Primary Demand Gen Channel",
    badge: "3–5x per week", badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    callout: { label: "The rule for founder content", text: "Founder content is not about your company. It is about the market and the problems your buyers face. Your company gets mentioned only when it earns it." },
    items: [
      { text: "Post Format 1: The Sharp Take (2x per week)", sub: "A direct point of view on something happening in the market. 3–5 short paragraphs. Ends with a statement, not a question.", tag: "LinkedIn", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Post Format 2: The Proof Point (1x per week)", sub: "A brief, specific insight from what you see in the market. Never reveals client details. Ends with a principle, not a pitch.", tag: "LinkedIn", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Post Format 3: The Framework (1x per week)", sub: "A structured breakdown a CIO or fund manager would save. Example: \"5 questions every compliance officer should ask before onboarding a digital asset partner.\"", tag: "LinkedIn", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Post Format 4: The Story (bi-weekly)", sub: "A short narrative about a client situation (anonymised). First person. Personal but not casual. The kind of post a CIO would forward.", tag: "LinkedIn", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", companies: ["custody","trading","compliance","treasury","infra"], buyers: ["bank","fund","family","fintech","crypto"] },
      { text: "Put every external link in the first comment", sub: "LinkedIn suppresses posts with external links in the body. Write the post without the link, then add the first comment with the URL.", tag: "LinkedIn", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Use HeyReach to distribute content to Clay-built target lists", sub: "Clay identifies the target accounts. HeyReach sends a personalised message referencing specific content relevant to each contact's role.", tag: "HeyReach", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
    ],
  },
  {
    id: "phase4", number: "04", title: "Pipeline Infrastructure — Build the Engine",
    badge: "Weeks 3–5", badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    callout: { label: "The email rule", text: "Every nurture email goes from a founder's personal address — not info@ or marketing@. A compliance officer at a bank who receives an email from a named person will open it." },
    items: [
      { text: "Build Workflow 1: Content Download → Nurture Enrollment", sub: "Trigger: form submitted. Actions: tag persona from job title, enroll in matching email sequence, notify SDR internally.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Build the 3-email nurture sequence for each buyer persona", sub: "Day 0: confirm download + insight. Day 4: persona-specific insight, soft CTA. Day 10: 3 sentences, direct ask. Under 150 words per email.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Build Workflow 2: Lead Score Hits 60 → MQL Alert", sub: "Set MQL Date, create deal at \"MQL - Needs Contact\", assign to AE by geography, send Slack alert with full contact details.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","crypto"] },
      { text: "Build Workflow 3: High Intent Website Visit", sub: "Trigger: contact visits product pages twice within 5 days. Actions: add 8 engagement points, notify if total score ≥ 50.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Build Workflow 4: Non-Responder Re-engagement", sub: "Tag \"No Response\", pause 30 days, send one re-engagement email with a new content piece relevant to their persona.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Build a Fintech and Crypto-native nurture sequence", sub: "Email 1 references stablecoin or protocol-specific pain. Email 2 addresses compliance challenges. Email 3 references a regulatory development.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["treasury","infra","compliance"], buyers: ["fintech","crypto"] },
      { text: "Build the staking yield nurture sequence", sub: "Email 1: what yield on SOL means for holders. Email 2: how integration works for exchanges. Email 3: direct ask referencing their asset size.", tag: "HubSpot", tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20", companies: ["staking"], buyers: ["bank","fund","etf","exchange","crypto"] },
    ],
  },
  {
    id: "phase5", number: "05", title: "Measure — Own the Dashboard",
    badge: "Weekly", badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    callout: { label: "The only number that matters", text: "Marketing sourced pipeline in currency. How many meetings came from marketing content. How many converted to opportunities. That is the report a CEO and head of sales care about." },
    items: [
      { text: "Build the Marketing → Pipeline HubSpot dashboard", sub: "Reports: contacts by first touch channel, MQLs by persona, content downloads by asset, email performance, time from first touch to MQL.", tag: "Measure", tagColor: "bg-red-500/10 text-red-400 border-red-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Track post → meeting attribution every week", sub: "Which LinkedIn post brought this prospect in. Which content asset tipped them into booking a call. 50 impressions from five heads of digital assets beats 5,000 from retail.", tag: "Measure", tagColor: "bg-red-500/10 text-red-400 border-red-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Use multi-touch attribution, not last click", sub: "A deal can have 15 content touchpoints over 12 months. Multi-touch shows the full chain. Last click misrepresents the whole story.", tag: "Measure", tagColor: "bg-red-500/10 text-red-400 border-red-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Track cost per qualified institutional lead monthly", sub: "Total marketing spend ÷ MQLs. In institutional marketing $500–$2,000 per qualified lead is often reasonable given average deal sizes.", tag: "Measure", tagColor: "bg-red-500/10 text-red-400 border-red-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Present the dashboard to sales every Friday", sub: "A dashboard a sales leader uses to make decisions is proof that marketing drives pipeline. Present the summary version to the CEO monthly.", tag: "Measure", tagColor: "bg-red-500/10 text-red-400 border-red-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
      { text: "Run a Week 7–8 performance review", sub: "Which content drove downloads. Which sequences converted. Which personas engaged most. Double down on what worked. Cut what did not.", tag: "Measure", tagColor: "bg-red-500/10 text-red-400 border-red-500/20", companies: ["custody","trading","data","compliance","treasury","infra","staking"], buyers: ["bank","fund","fintech","family","crypto","etf","exchange"] },
    ],
  },
];

const toolStack = [
  { name: "HubSpot", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "Clay", color: "bg-primary/10 text-primary border-primary/20" },
  { name: "HeyReach", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Claude", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { name: "Notion", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
];

export const ChapterChecklist = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selectedBuyer, setSelectedBuyer] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [collapsedPhases, setCollapsedPhases] = useState<Set<string>>(new Set());

  const showChecklist = step === 3;

  const isRelevant = (item: CheckItem) =>
    selectedCompany && selectedBuyer &&
    item.companies.includes(selectedCompany) &&
    item.buyers.includes(selectedBuyer);

  const relevantItems = useMemo(() => {
    if (!showChecklist) return [];
    return phases.flatMap((p) => p.items.filter(isRelevant));
  }, [selectedCompany, selectedBuyer, showChecklist]);

  const checkedCount = useMemo(() => {
    return relevantItems.filter((item) => checkedItems.has(item.text)).length;
  }, [relevantItems, checkedItems]);

  const progress = relevantItems.length > 0 ? Math.round((checkedCount / relevantItems.length) * 100) : 0;

  const handleSelectCompany = (id: string) => {
    setSelectedCompany(id);
    setStep(2);
  };

  const handleSelectBuyer = (id: string) => {
    setSelectedBuyer(id);
    setStep(3);
  };

  const toggleCheck = (text: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(text)) next.delete(text);
      else next.add(text);
      return next;
    });
  };

  const togglePhase = (id: string) => {
    setCollapsedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetSelections = () => {
    setSelectedCompany(null);
    setSelectedBuyer(null);
    setStep(1);
    setCheckedItems(new Set());
  };

  const resetChecklist = () => setCheckedItems(new Set());

  const companyLabel = companyTypes.find((c) => c.id === selectedCompany)?.name;
  const buyerLabel = buyerTypes.find((b) => b.id === selectedBuyer)?.name;

  return (
    <div className="space-y-6">
      <p className="text-[15px] leading-[1.8] text-foreground/85">
        Two steps before you start. Pick your company's niche and target buyer, then the checklist adjusts to what is actually relevant for you.
      </p>

      {/* Step Indicator */}
      <div className="flex items-center gap-3 flex-wrap">
        {[
          { num: 1, label: "Your company type" },
          { num: 2, label: "Your target buyer" },
          { num: 3, label: "Your checklist" },
        ].map((s, i) => (
          <div key={s.num} className="flex items-center gap-3">
            {i > 0 && <span className="text-muted-foreground/30 text-sm">→</span>}
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  s.num < step
                    ? "bg-emerald-500 text-white"
                    : s.num === step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s.num < step ? <Check className="w-3 h-3" /> : s.num}
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  s.num <= step ? "text-foreground" : "text-muted-foreground/40"
                }`}
              >
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Step 1: Company Type */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
              Step 1 — What kind of company do you work at?
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {companyTypes.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCompany(c.id)}
                  className="text-left p-4 rounded-xl border border-border bg-card/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <span className="text-xl mb-2 block">{c.icon}</span>
                  <span className="text-[13px] font-semibold text-foreground block mb-1">{c.name}</span>
                  <span className="text-[11px] text-muted-foreground leading-snug block">{c.desc}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Buyer Persona */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
              Step 2 — Who are you selling to?
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {buyerTypes.map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleSelectBuyer(b.id)}
                  className="text-left p-4 rounded-xl border border-border bg-card/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <span className="text-xl mb-2 block">{b.icon}</span>
                  <span className="text-[13px] font-semibold text-foreground block mb-1">{b.name}</span>
                  <span className="text-[11px] text-muted-foreground leading-snug block">{b.desc}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-4 flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3 h-3" /> Change company type
            </button>
          </motion.div>
        )}

        {/* Step 3: Checklist */}
        {showChecklist && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Selection Summary */}
            <div className="flex items-center gap-2.5 flex-wrap mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {companyLabel}
              </span>
              <span className="text-muted-foreground/30 text-sm">→</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {buyerLabel}
              </span>
              <button
                onClick={resetSelections}
                className="text-[11px] text-muted-foreground underline hover:text-foreground ml-2"
              >
                change
              </button>
            </div>

            {/* Tool Stack */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-1">Stack</span>
              {toolStack.map((t) => (
                <span key={t.name} className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${t.color}`}>
                  {t.name}
                </span>
              ))}
              <button
                onClick={resetChecklist}
                className="ml-auto flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-red-400 border border-border rounded-lg px-3 py-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Your progress</span>
                <span className="text-sm font-bold text-primary">{checkedCount} / {relevantItems.length} complete</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-8">
              {phases.map((phase) => {
                const phaseRelevantItems = phase.items.filter(isRelevant);
                const isCollapsed = collapsedPhases.has(phase.id);

                return (
                  <div key={phase.id}>
                    <button
                      onClick={() => togglePhase(phase.id)}
                      className="flex items-center gap-3 w-full text-left mb-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[13px] font-bold text-primary shrink-0">
                        {phase.number}
                      </div>
                      <span className="text-base font-bold text-foreground flex-1">{phase.title}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${phase.badgeColor}`}>
                        {phase.badge}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isCollapsed ? "-rotate-90" : ""}`} />
                    </button>

                    {!isCollapsed && (
                      <div className="space-y-2">
                        {/* Callout */}
                        <div className="rounded-lg bg-primary/5 border border-primary/15 border-l-[3px] border-l-primary p-4 mb-3">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">{phase.callout.label}</p>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">{phase.callout.text}</p>
                        </div>

                        {phase.items.map((item) => {
                          const relevant = isRelevant(item);
                          const checked = checkedItems.has(item.text);

                          return (
                            <button
                              key={item.text}
                              onClick={() => relevant && toggleCheck(item.text)}
                              disabled={!relevant}
                              className={`flex items-start gap-3 w-full text-left p-3.5 rounded-xl border transition-all ${
                                !relevant
                                  ? "opacity-20 cursor-not-allowed border-border/30 bg-card/20"
                                  : checked
                                  ? "border-emerald-500/20 bg-emerald-500/5"
                                  : "border-primary/20 bg-primary/[0.03] hover:bg-primary/[0.06] hover:border-primary/30"
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                  checked
                                    ? "bg-emerald-500 border-emerald-500"
                                    : "border-border"
                                }`}
                              >
                                {checked && <Check className="w-3 h-3 text-white" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium transition-all ${checked ? "line-through text-muted-foreground/40" : "text-foreground"}`}>
                                  {item.text}
                                </p>
                                <p className={`text-[12px] mt-1 leading-relaxed ${checked ? "text-muted-foreground/25" : "text-muted-foreground/60"}`}>
                                  {item.sub}
                                </p>
                              </div>
                              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 mt-0.5 ${item.tagColor}`}>
                                {item.tag}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Completion Banner */}
            {checkedCount === relevantItems.length && relevantItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-primary/10 border border-emerald-500/20 p-6 text-center"
              >
                <p className="text-3xl mb-3">🎉</p>
                <p className="text-lg font-bold text-foreground mb-1">Full pipeline built.</p>
                <p className="text-sm text-muted-foreground">You have the infrastructure, the content, and the attribution model. Now ship it.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
