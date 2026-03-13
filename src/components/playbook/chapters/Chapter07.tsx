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

    <SectionBlock title="Mistake 7: The 'Rip and Replace' Narrative">
      <DosDontsCard
        wrong="Pitching a clean-slate future where legacy systems are replaced entirely with decentralised technology"
        right="Designing entry points that integrate into existing systems, minimise disruption, and establish a credible wedge"
      />
      <p>Legacy infrastructure is embedded in workflows, compliance processes, vendor contracts, reporting systems, and many other touchpoints. The more sweeping the proposed change, the harder it is for someone inside the organisation to own the decision. Uniswap's collaboration with BlackRock is a good example — rather than framing DeFi as a replacement for traditional asset management, Uniswap enabled permissionless secondary market liquidity within BlackRock's existing regulatory and fund structures.</p>
    </SectionBlock>

    <SectionBlock title="Mistake 8: Running the Same Pitch Everywhere">
      <DosDontsCard
        wrong="Reusing the same enterprise deck, framing, and 'why now' across every lead"
        right="Tailoring your presentation to each institution's specific systems, constraints, and internal priorities"
      />
      <p>Two large banks may appear similar on paper, but their constraints and priorities often differ meaningfully. A generic pitch signals you have not taken the time to understand how this specific institution defines the problem. If your pitch is not tailored, from the institution's point of view, it is hard to believe your solution can fit cleanly inside.</p>
    </SectionBlock>
  </>
);
