import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";

export const Chapter09 = () => (
  <>
    <SectionBlock>
      <p>Pulled from TaxBit, Chainlink, Fireblocks, and LayerZero. This is what the JDs are actually asking you to execute.</p>
    </SectionBlock>

    <SectionBlock title="Phase 1: Positioning (6-8 Weeks Before Launch)">
      <BulletList ordered items={[
        "Define the phase. Not every release deserves the same energy. Before you build anything, decide how big this launch actually is. A full campaign with press, events, and sales activation. A blog post and an email to your list. Or just release notes for people already using the product. Pick the level first. Everything else follows from that decision.",
        "Write the positioning statement. One sentence: who is it for, what does it do, and why does it matter more than the alternative?",
        "Map buyer objections. For each persona, what is their primary fear and what is the one piece of evidence that moves them?",
        "Identify reference clients. If you have existing clients who match the target buyer, brief them now.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 2: Asset Creation (4-6 Weeks Before Launch)">
      <BulletList items={[
        "Write the core narrative: problem, why existing solutions fail, how this product solves it, who has validated it.",
        "Build the launch toolkit: core pitch deck, one-pager, product page, sales FAQ, and one case study.",
        "Create persona-specific materials. The CFO deck leads with cost and compliance. The innovation lead deck leads with adoption trends.",
        "Prepare announcement content: press release, blog post, LinkedIn executive post, and pipeline nurture email.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 3: Internal Alignment (2-3 Weeks Before Launch)">
      <BulletList items={[
        "Brief the sales team. Walk through every asset and every expected objection.",
        "Brief the executive team. The CEO and senior team need consistent messaging for events and press.",
        "Lock the launch date and coordinate across PR, sales, product, and events.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 4: Launch Week">
      <BulletList ordered items={[
        "Lead with the client story or the data, not the feature.",
        "Activate the sales team on day one. The announcement is a warm outreach opportunity.",
        "Brief key prospects privately before the public announcement. This makes them feel like insiders.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 5: Post-Launch Activation (Months 1-6)">
      <BulletList items={[
        "Enter evaluation mode. Every piece of content should help a buyer say yes.",
        "Publish follow-on research 30-60 days after launch to keep momentum alive.",
        "Collect the first client testimonial as fast as possible.",
        "Measure pipeline contribution. The launch worked if it generated qualified pipeline within 90 days.",
      ]} />
    </SectionBlock>
  </>
);
