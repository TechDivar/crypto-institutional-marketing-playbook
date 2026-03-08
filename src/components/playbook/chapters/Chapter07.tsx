import { SectionBlock } from "../ui/SectionBlock";
import { DosDontsCard } from "../ui/DosDontsCard";

export const Chapter07 = () => (
  <>
    <SectionBlock>
      <p>Most of these come from applying consumer crypto logic to an institutional audience.</p>
    </SectionBlock>

    <SectionBlock title="Mistake 1: Writing for Crypto Twitter Instead of a Risk Committee">
      <DosDontsCard
        wrong="Writing hype-driven, FOMO-inducing content aimed at retail audiences"
        right="Writing evidence-based, compliance-friendly content for committees that take months to decide"
      />
    </SectionBlock>

    <SectionBlock title="Mistake 2: Treating the Launch as the Peak">
      <DosDontsCard
        wrong="Pouring all resources into launch week and treating it as the main event"
        right="Treating launch as the beginning of a 6-18 month evaluation cycle that needs sustained support"
      />
    </SectionBlock>

    <SectionBlock title="Mistake 3: One Message for Everyone">
      <DosDontsCard
        wrong="Sending the same pitch deck to a risk officer and an investment analyst"
        right="Customising messaging per persona. Risk, returns, and compliance are different languages."
      />
    </SectionBlock>

    <SectionBlock title="Mistake 4: Skipping Social Proof">
      <DosDontsCard
        wrong="Leading with technology features and capabilities or using anonymous case studies"
        right="Leading with named client references. Chainlink listing Swift and Fidelity is deliberate."
      />
    </SectionBlock>

    <SectionBlock title="Mistake 5: Ignoring the Sales Team">
      <DosDontsCard
        wrong="Building marketing materials in isolation from sales conversations"
        right="Sitting in on sales calls and building materials based on real objections heard in the field"
      />
    </SectionBlock>

    <SectionBlock title="Mistake 6: Competing on Technology Instead of Trust">
      <DosDontsCard
        wrong="Positioning against other crypto companies: 'better than Competitor X'"
        right="'The Bloomberg for on-chain data' or 'settlement without the SWIFT overhead'"
      />
      <p>SWIFT is not the most technically advanced payment network. Bloomberg is not the most technically sophisticated data platform. They are the most trusted. Your real competition is the incumbent, not the crypto competitor.</p>
    </SectionBlock>
  </>
);
