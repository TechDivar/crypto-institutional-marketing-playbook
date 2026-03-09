import { SectionBlock } from "../ui/SectionBlock";
import { ComparisonTable } from "../ui/ComparisonTable";
import { Callout } from "../ui/Callout";

export const Chapter06 = () => (
  <>
    <SectionBlock>
      <p>The most common mistake when moving from consumer crypto to institutional marketing is treating the sales process like a funnel. In institutional sales, there is no "done," there is only more stages.</p>
    </SectionBlock>

    <SectionBlock title="Stage 1: Awareness (Months 1–6)">
      <p>The buyer discovers you exist through an event, a research report a colleague forwarded, a LinkedIn post, or a trade publication mention. Publish research reports, secure speaking slots at conferences your buyers attend, build executive LinkedIn presence, and get into analyst reports.</p>
    </SectionBlock>

    <SectionBlock title="Stage 2: Active Research (Months 3–6)">
      <p>The buyer wants to understand what you do without committing to a conversation. They are doing due diligence without telling you. Make it easy to learn without requiring a demo booking. Create persona-specific content for the CFO version, the compliance version, and the data team version.</p>
    </SectionBlock>

    <SectionBlock title="Stage 3: Technical Validation (Months 1–3)">
      <p>The buyer is comparing you to alternatives. There is an internal champion who wants to move forward, but there are six other stakeholders who all have questions or veto power. This is where most institutional deals die. Marketing's job is to arm the champion with documentation, demo environments, and proof that the product works.</p>
    </SectionBlock>

    <SectionBlock title="Stage 4: Procurement (Months 1–2)">
      <p>Legal, compliance, and pricing teams are now involved. Every concern must be addressed in writing. Every risk must be documented. Provide a board-ready one-page summary, supply all third-party validation, and build an ROI model. Contracts, SOC reports, and SLAs become marketing materials at this stage.</p>
    </SectionBlock>

    <SectionBlock title="Stage 5: Post-Purchase (Ongoing)">
      <p>The deal is signed. But institutional marketing does not end here. Every deployed client is a reference and a potential expansion. Customer marketing, onboarding support, and advocacy programs are what turn one signed deal into three.</p>
      <p>Coinbase's JD makes this explicit: the product marketer must "be the voice of the customer and trusted advisor as to how current and future clients' needs inform product messaging, brand differentiation, marketing content, and collateral." Anchorage Digital says it directly too: "Listen to customers, sales, and market signals to surface insights that shape strategy, messaging, and roadmap input." Post-purchase is where you build the feedback loop that makes every future launch sharper and every renewal easier.</p>
    </SectionBlock>

    <SectionBlock title="Full Timeline at a Glance">
      <ComparisonTable
        headers={["Stage", "Duration", "Key Activities", "Marketing Support"]}
        rows={[
          ["Awareness", "6–12 months", "Research, peer conversations", "Thought leadership, events"],
          ["Active Research", "3–6 months", "Download content, attend webinars", "Gated content, nurture emails"],
          ["Technical Validation", "1–3 months", "POC, security review", "Documentation, demo environment"],
          ["Procurement", "1–2 months", "Legal, compliance, pricing", "Contracts, SOC reports, SLAs"],
          ["Post-Purchase", "Ongoing", "Onboarding, expansion", "Customer marketing, advocacy"],
        ]}
      />
      <Callout variant="quote">
        Every buyer inside an institution has a different version of the same fear: "If this goes wrong, is it my fault?" Your job is to make them feel that if they choose your product, they made a responsible, defensible, well-researched decision.
      </Callout>
    </SectionBlock>
  </>
);
