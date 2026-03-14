import { motion } from "framer-motion";
import { SectionBlock } from "../ui/SectionBlock";
import { Callout } from "../ui/Callout";

const layers = [
  {
    label: "01",
    title: "Credibility",
    description: "Case studies, audit reports, regulatory compliance, enterprise clients. The foundation everything else sits on.",
    icon: "🏛️",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    label: "02",
    title: "Research",
    description: "White papers, market analysis, data briefs. Content that makes a compliance officer say \"send me more.\"",
    icon: "📊",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30",
  },
  {
    label: "03",
    title: "Founder Voice",
    description: "CEO LinkedIn presence, speaking engagements, bylines. Your cheapest trust signal and most powerful distribution channel.",
    icon: "🎙️",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/30",
  },
  {
    label: "04",
    title: "Institutional Distribution",
    description: "Private briefings, industry events, consultant relationships. Where the real decisions get influenced.",
    icon: "🔗",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
  },
  {
    label: "05",
    title: "Relationship Building",
    description: "Nurture sequences, ABM campaigns, 9-18 month sales cycles. Patience is the strategy.",
    icon: "🤝",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
  },
  {
    label: "06",
    title: "Market Structure Proof",
    description: "Pipeline attribution, multi-touch data, cost per qualified lead. Prove to the CEO that marketing drives revenue.",
    icon: "📈",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/30",
  },
];

const chapterMap = [
  { layer: "Credibility", chapters: "Ch 2–3: Institutional Marketing + What Institutions Need" },
  { layer: "Research", chapters: "Ch 6–7: Content Strategy + Founder Content" },
  { layer: "Founder Voice", chapters: "Ch 7: Founder Content Is Your Cheapest Trust Signal" },
  { layer: "Institutional Distribution", chapters: "Ch 5: Where They Hang Out + Ch 8: The Sales Cycle" },
  { layer: "Relationship Building", chapters: "Ch 4: Who You're Selling To + Ch 9: How Institutions Buy" },
  { layer: "Market Structure Proof", chapters: "Ch 10: Pipeline Attribution + Ch 14: Metrics and KPIs" },
];

export const ChapterFramework = () => (
  <>
    <SectionBlock>
      <p>
        This is the entire playbook distilled into one visual framework. Six layers that stack on top of each other — 
        skip one and the whole thing becomes unstable. Save it, share it, pin it on your wall.
      </p>
    </SectionBlock>

    <SectionBlock title="The Institutional Marketing Stack">
      <div className="space-y-3">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`relative rounded-xl border ${layer.borderColor} bg-gradient-to-r ${layer.color} p-4 sm:p-5`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-card/80 border border-border flex items-center justify-center text-lg shrink-0">
                {layer.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{layer.label}</span>
                  <span className="text-sm font-bold text-foreground">{layer.title}</span>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{layer.description}</p>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-3 bg-border/50" />
            )}
          </motion.div>
        ))}
      </div>
    </SectionBlock>

    <SectionBlock title="How Each Layer Maps to the Playbook">
      <div className="space-y-2">
        {chapterMap.map((item, i) => (
          <motion.div
            key={item.layer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.08 }}
            className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/50"
          >
            <span className="text-xs font-bold text-primary shrink-0 mt-0.5">{item.layer}</span>
            <span className="text-xs text-muted-foreground">→</span>
            <span className="text-xs text-foreground/80">{item.chapters}</span>
          </motion.div>
        ))}
      </div>
    </SectionBlock>

    <Callout variant="tip">
      <strong>How to use this framework:</strong> Screenshot it. Share it on LinkedIn. Use it in your interview prep. 
      Every chapter in this playbook builds one of these six layers. If you can explain what each layer does and why it matters, 
      you understand institutional marketing better than most people already doing the job.
    </Callout>
  </>
);
