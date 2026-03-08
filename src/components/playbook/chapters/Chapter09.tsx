import { SectionBlock } from "../ui/SectionBlock";
import { ComparisonTable } from "../ui/ComparisonTable";

export const Chapter09 = () => (
  <>
    <SectionBlock>
      <p>Pulled from TaxBit, Chainlink, Fireblocks, and LayerZero. These are the companies that know how to bring an institutional product to market. This is what their job descriptions are actually asking you to execute.</p>
    </SectionBlock>

    <SectionBlock title="Phase 1: Positioning (6 to 8 Weeks Before Launch)">
      <p>Not every release deserves the same energy. Before you build anything, decide how big this launch actually is. A full campaign with press, events, and sales activation. A blog post and an email to your list. Or just release notes for people already using the product. Pick the level first. Everything else follows from that decision.</p>
      <p>Write the positioning statement. One sentence: who is it for, what does it do, and why does it matter more than the alternative? Test it with three people outside marketing before you lock it.</p>
      <p>Map buyer objections. For each persona, what is their primary fear and what is the one piece of evidence that moves them?</p>
      <p>Identify reference clients. If you have existing clients who match the target buyer, brief them now. Their willingness to be quoted is your most powerful launch asset.</p>
    </SectionBlock>

    <SectionBlock title="Phase 2: Asset Creation (4 to 6 Weeks Before Launch)">
      <p>Write the core narrative: the problem, why existing solutions fail, how this product solves it, and who has already validated it.</p>
      <p>Build the launch toolkit: core pitch deck, one-pager, product page, sales FAQ, and one case study. TaxBit calls this the toolkit required to win. They are right.</p>
      <p>Create persona-specific materials. The CFO deck leads with cost and compliance. The innovation lead deck leads with adoption trends. Same product, different first page.</p>
      <p>Prepare announcement content: press release, blog post, LinkedIn executive post, and pipeline nurture email.</p>
    </SectionBlock>

    <SectionBlock title="Phase 3: Internal Alignment (2 to 3 Weeks Before Launch)">
      <p>This is where most launches actually fall apart. Not on launch day. In the three weeks before it, when nobody has agreed on the message, the sales team has not seen the materials, and the CEO is still winging it in press interviews.</p>
      <p>Brief the sales team. Walk through every asset and every expected objection. They should not see launch materials for the first time on launch day.</p>
      <p>Brief the executive team. The CEO and senior leaders need one consistent message for every press interview, event appearance, and prospect conversation happening that week.</p>
      <p>Lock the launch date and coordinate across PR, sales, product, and events. A misaligned launch is worse than a delayed one.</p>
    </SectionBlock>

    <SectionBlock title="Phase 4: Launch Week">
      <p>Lead with the client story or the data, not the feature. Chainlink leads with client names. Fireblocks leads with bank use cases. None of them lead with technology.</p>
      <p>Activate the sales team on day one. Sales should have a personalised message ready for every prospect who engages, referencing something specific to their situation, not a copy-paste announcement.</p>
      <p>Brief key prospects privately before the public announcement. This makes them feel like insiders and builds trust faster than any press release.</p>
    </SectionBlock>

    <SectionBlock title="Phase 5: Post-Launch Activation (Months 1 to 6)">
      <p>Enter evaluation mode. Every piece of content you publish from this point should help a buyer who is already considering the product say yes.</p>
      <p>Publish follow-on research 30 to 60 days after launch to keep the conversation alive. One strong research piece outlasts ten launch-week posts.</p>
      <p>Collect the first client testimonial as fast as possible. The fastest proof the product works is a customer who will say so publicly.</p>
      <p>Measure pipeline contribution. The launch worked if it generated qualified pipeline within 90 days. Not impressions. Not downloads. Pipeline.</p>
    </SectionBlock>

    <SectionBlock title="At a Glance">
      <p>Every phase reduced to the one decision that matters most.</p>
      <ComparisonTable
        headers={["Phase", "Timing", "The One Thing"]}
        rows={[
          ["**Positioning**", "6 to 8 weeks before", "Decide how big this launch is before you build anything"],
          ["**Asset Creation**", "4 to 6 weeks before", "Build the toolkit: deck, one-pager, case study, FAQ"],
          ["**Internal Alignment**", "2 to 3 weeks before", "Sales and execs must know the message before launch day"],
          ["**Launch Week**", "Day of launch", "Lead with the client story, not the feature"],
          ["**Post-Launch**", "Months 1 to 6", "Measure pipeline, not impressions"],
        ]}
      />
    </SectionBlock>
  </>
);
