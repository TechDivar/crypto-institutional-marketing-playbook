import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";
import { Callout } from "../ui/Callout";
import { PullQuote } from "../ui/PullQuote";

export const Chapter05 = () => (
  <>
    <SectionBlock>
      <p>Institutional buyers do not want content that excites them. They want content that helps them say yes. Every piece of content you make should answer one of three questions: Is this proven? Is this safe? Is this worth the effort to evaluate?</p>
      <PullQuote quote="Institutional buyers do not want content that excites them. They want content that helps them say yes." />
    </SectionBlock>

    <SectionBlock title="Tier 1: Research Reports and White Papers">
      <p><strong>Used by:</strong> Allium, Chainlink, LayerZero, Trovata, Notabene</p>
      <p>A research report signals that you have studied the market deeply enough to have a point of view. It is not a product brochure. It is a document that a compliance officer, a CFO, or an investment analyst will cite in their own internal presentations.</p>
      <BulletList items={[
        "A clear, non-obvious thesis something the reader did not already know",
        "Data from credible third-party sources: surveys, on-chain data, public filings",
        "A methodology the reader can audit and defend",
        "Named case studies, not anonymous examples",
        "A conclusion that tells the reader what to do next",
        "Under 15 pages: institutional buyers are busy, not curious",
      ]} />
    </SectionBlock>

    <SectionBlock title="Tier 2: Case Studies">
      <p><strong>Used by:</strong> Chainlink, Fireblocks, TaxBit, Keyrock, Dune</p>
      <p>An institutional buyer needs to know that someone like them has already taken this risk and it worked.</p>
      <BulletList items={[
        "A recognisable client name the buyer's colleagues will know",
        "A specific business problem, not 'wanted to explore blockchain'",
        "Measurable outcomes: cost saved, time reduced, compliance achieved",
        "A named executive quote, not 'a spokesperson said'",
      ]} />
    </SectionBlock>

    <SectionBlock title="Tier 3: Sales Enablement Materials">
      <p><strong>Used by:</strong> Every company in this ebook without exception</p>
      <BulletList items={[
        "One-pager: What the product does, who it is for, and what the outcome is",
        "Pitch deck: 10-12 slides maximum. Problem, solution, proof, next step.",
        "Battle card: How you compare to alternatives including TradFi incumbents",
        "Demo script: A narrative walkthrough that tells a story, not a feature tour",
        "Regulatory FAQ: Every hard question the compliance team will ask",
      ]} />
    </SectionBlock>

    <SectionBlock title="Tier 4: Regulatory and Educational Explainers">
      <p><strong>Used by:</strong> Notabene, TaxBit, Chainlink, Fireblocks</p>
      <p>Institutions are navigating a regulatory environment that changed substantially in 2025 (MiCA, the GENIUS Act, FATF Travel Rule updates) and is still changing. If you can help them understand what these frameworks mean before they even ask, you become a trusted advisor, not just a vendor.</p>
    </SectionBlock>

    <SectionBlock title="Tier 5: Thought Leadership and Executive Content">
      <p><strong>Used by:</strong> Trovata, Twinstake, Ledger, Blockstream, Artemis</p>
      <Callout variant="quote">
        When a risk committee evaluates a vendor, the question "do I trust the people behind this?" matters as much as the technical capability. Executive thought leadership answers that question before the sales conversation even starts.
      </Callout>
    </SectionBlock>
  </>
);
