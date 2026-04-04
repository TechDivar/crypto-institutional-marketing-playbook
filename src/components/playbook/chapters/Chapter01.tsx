import { SectionBlock } from "../ui/SectionBlock";
import { ComparisonTable } from "../ui/ComparisonTable";
import { Callout } from "../ui/Callout";
import { BulletList } from "../ui/BulletList";
import { PullQuote } from "../ui/PullQuote";

export const Chapter01 = () => (
  <>
    <SectionBlock>
      <p>
        Crypto institutional marketing is the act of convincing large, risk-conscious organisations (banks, asset managers, hedge funds, pension funds, regulators, and enterprises) to trust your crypto product with serious money or serious infrastructure decisions.
      </p>
      <p>
        These are not individuals making a quick decision on a Tuesday afternoon. These are organisations with committees, compliance departments, legal reviews, and procurement processes. A single deal can take six to eighteen months and involve twelve different people with veto power.
      </p>
    </SectionBlock>

    <PullQuote quote="A single deal can take six to eighteen months and involve twelve different people with veto power." />

    <SectionBlock title="Why It Is Different From Regular Crypto Marketing">
      <ComparisonTable
        headers={["Consumer Crypto Marketing", "Institutional Marketing"]}
        rows={[
          ["Speed is everything", "Patience is everything, wrong moves are expensive"],
          ["Emotional triggers: FOMO, excitement, community", "Rational triggers: risk, return, compliance, efficiency"],
          ["Twitter threads and Discord communities", "White papers, research reports, private briefings"],
          ["Influencers and KOLs amplify your message", "Your CEO's credibility amplifies your message"],
          ["One person decides in minutes", "A committee decides over months"],
          ["Memes work", "Memes are a red flag"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="What the Job Descriptions Are Actually Asking For">
      <p>
        Every company uses some version of the same phrase: "bridge the gap between traditional finance and digital assets." What they all mean is: can you take something that sounds complex, risky, and unfamiliar and make it sound inevitable, safe, and already proven?
      </p>
      <Callout variant="quote">
        Institutional marketing is the practice of making a new, unfamiliar, or technically complex product feel safe enough for large organisations to bet their reputation on it.
      </Callout>
    </SectionBlock>

    <SectionBlock title="The Three Pillars That Show Up in Every JD">
      <BulletList items={[
        "Credibility: Your product must feel like it has been stress-tested. Case studies, audit reports, regulatory compliance, and real enterprise clients are your evidence.",
        "Clarity: Complex technology must be translated into outcomes that a CFO, a risk manager, or a compliance officer can explain to their board without a crypto dictionary.",
        "Continuity: The sales process is long. Institutional marketing is not about one big launch. It is about staying visible, relevant, and trustworthy over months while a decision is being made.",
      ]} />
      <Callout variant="info" source="DWF Ventures, 'Building for Institutions: DeFi's Next Steps' (February 2026)">
        Regulatory changes made in 2025 have moved crypto from speculation-driven growth to institutional-led momentum, with a large number of institutional investors moving on-chain and increasing holdings.
      </Callout>
    </SectionBlock>
  </>
);
