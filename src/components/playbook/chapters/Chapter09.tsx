import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";
import { ComparisonTable } from "../ui/ComparisonTable";

export const Chapter09 = () => (
  <>
    <SectionBlock>
      <p>Pulled from TaxBit, Chainlink, Fireblocks, and LayerZero. These are the companies that know how to bring an institutional product to market. This is what their job descriptions are actually asking you to execute.</p>
    </SectionBlock>

    <SectionBlock title="Phase 1: Positioning (6 to 8 Weeks Before Launch)">
      <p>Not every release deserves the same energy. Before you build anything, decide how big this launch actually is. A full campaign with press, events, and sales activation. A blog post and an email to your list. Or just release notes for people already using the product. Pick the level first. Everything else follows from that decision.</p>
      <BulletList items={[
        "Write the positioning statement. One sentence: who is it for, what does it do, and why does it matter more than the alternative? Test it with three people outside marketing before you lock it.",
        "Map buyer objections. For each persona, what is their primary fear and what is the one piece of evidence that moves them?",
        "Identify reference clients. If you have existing clients who match the target buyer, brief them now. Their willingness to be quoted is your most powerful launch asset.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 2: Asset Creation (4 to 6 Weeks Before Launch)">
      <BulletList items={[
        "Write the core narrative: the problem, why existing solutions fail, how this product solves it, and who has already validated it.",
        "Build the launch toolkit: core pitch deck, one-pager, product page, sales FAQ, and one case study. TaxBit calls this the toolkit required to win. They are right.",
        "Create persona-specific materials. The CFO deck leads with cost and compliance. The innovation lead deck leads with adoption trends. Same product, different first page.",
        "Prepare announcement content: press release, blog post, LinkedIn executive post, and pipeline nurture email.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 3: Internal Alignment (2 to 3 Weeks Before Launch)">
      <p>This is where most launches actually fall apart. Not on launch day. In the three weeks before it, when nobody has agreed on the message, the sales team has not seen the materials, and the CEO is still winging it in press interviews.</p>
      <BulletList items={[
        "Brief the sales team. Walk through every asset and every expected objection. They should not see launch materials for the first time on launch day.",
        "Brief the executive team. The CEO and senior leaders need one consistent message for every press interview, event appearance, and prospect conversation happening that week.",
        "Lock the launch date and coordinate across PR, sales, product, and events. A misaligned launch is worse than a delayed one.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 4: Launch Week">
      <BulletList items={[
        "Lead with the client story or the data, not the feature. Chainlink leads with client names. Fireblocks leads with bank use cases. None of them lead with technology.",
        "Activate the sales team on day one. Sales should have a personalised message ready for every prospect who engages, referencing something specific to their situation, not a copy-paste announcement.",
        "Brief key prospects privately before the public announcement. This makes them feel like insiders and builds trust faster than any press release.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Phase 5: Post-Launch Activation (Months 1 to 6)">
      <BulletList items={[
        "Enter evaluation mode. Every piece of content you publish from this point should help a buyer who is already considering the product say yes.",
        "Publish follow-on research 30 to 60 days after launch to keep the conversation alive. One strong research piece outlasts ten launch-week posts.",
        "Collect the first client testimonial as fast as possible. The fastest proof the product works is a customer who will say so publicly.",
        "Measure pipeline contribution. The launch worked if it generated qualified pipeline within 90 days. Not impressions. Not downloads. Pipeline.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Event Timing Strategy">
      <p>Trovata's job description says it directly: develop and manage a content calendar aligned to pipeline goals, product moments, and conferences. LayerZero says plan and support participation in key events, roundtables, and forums. Fireblocks says represent the company at industry events, webinars, and analyst briefings.</p>
      <p>Every one of these companies know that a launch timed to a conference lands harder than a launch timed to nothing.</p>
      <p>Here is how it works in practice. Your announcement drops 48 hours before a major conference your buyers are attending. Not during the conference when inboxes are ignored. Not after when the moment has passed. 48 hours before, when people are travelling, checking their phones, and paying attention to what is happening in the industry they are about to walk into.</p>
      <p>The conferences worth timing launches around are the ones already covered in Chapter 5. Sibos for banking and payments announcements. Consensus for broad crypto industry awareness. TOKEN2049 for crypto-native institutional buyers. Point Zero Forum for compliance-first products and regulatory positioning.</p>
      <p>If you cannot time a launch to a conference, time it to a regulatory moment. MiCA updates, GENIUS Act guidance, FATF Travel Rule enforcement deadlines. These are the moments when your buyers are already thinking about your product category. That is when your launch lands hardest.</p>
    </SectionBlock>

    <SectionBlock title="ABM Targeting: Make the Launch Mean Something to Specific Accounts">
      <p>Robinhood's job description mentions account-based marketing directly. TaxBit talks about targeted campaigns. Notabene talks about campaigns that lead to action with specific organisations. The pattern is the same across all 18 companies: institutional launches are not broadcasts, they are coordinated conversations with named accounts happening at the same time.</p>
      <p>Before launch week, your sales team should have a list of 20 to 30 named target accounts. Not segments. Named companies. For each one, marketing answers three questions before the launch goes public.</p>
      <BulletList items={[
        "Who inside this account is most likely to care about this launch? Not the company, the person. Their name, their title, their LinkedIn.",
        "What specific problem does this launch solve for them? A bank treasury team and an asset manager care about the same product for completely different reasons. Your launch message to each should reflect that.",
        "What is the one piece of content that will move this specific person forward? Sometimes it is the research report. Sometimes it is the compliance documentation. Sometimes it is knowing that another institution in their peer group has already deployed.",
      ]} />
      <p>When you have those three answers for each target account, the launch stops being a press release and starts being a series of very targeted conversations that happen to go public at the same time.</p>
    </SectionBlock>

    <SectionBlock title="Crisis Contingency: When the Launch Goes Sideways">
      <p>Nobody puts this in a job description. But every institutional marketer who has been in the role for more than six months has lived through it. Regulatory news drops the same week. A reference client pulls their quote at the last minute. A competitor announces something bigger the day before you do.</p>
      <p>Here is what to do in each case.</p>
      <BulletList items={[
        "If regulatory news drops that affects your product category, go first. Publish a short clear statement within 24 hours explaining what the news means for your product and your clients. The companies that go quiet look like they have something to hide. The companies that respond quickly and clearly look like category leaders.",
        "If a reference client pulls out before launch, delay the case study but not the launch. Ship what you have. A strong research report and a clear product narrative can carry a launch without a client quote. The client story comes 30 days later.",
        "If a competitor announces something bigger the day before, do not cancel. Change the angle. Your announcement becomes a response to market momentum. \"With the market moving this fast, here is what we are building and why it matters\" is a stronger frame than pretending the competitor announcement did not happen.",
        "If a journalist misframes your product, respond directly and on the record within the same news cycle. A factual correction sent to the journalist and published on your own channels is better than letting the misframing sit unchallenged.",
      ]} />
      <p>The one thing you should never do in a crisis is go dark. Silence reads as guilt in institutional markets where trust is everything.</p>
    </SectionBlock>

    <SectionBlock title="Budget and Resourcing: Who Actually Does What">
      <p>Chainlink, TaxBit, and LayerZero all list the launch marketer as someone who operates at both strategic and executional level. That means one person owning the thinking and the doing across multiple phases. Here is a realistic breakdown of what stays in-house and what can be outsourced.</p>
      <ComparisonTable
        headers={["Phase", "In-House", "Outsource"]}
        rows={[
          ["Positioning", "Always in-house. No agency understands your product well enough in the first six months to set your narrative.", "Do not outsource"],
          ["Asset Creation", "Core narrative and messaging", "Research report, design, case study writing — specialist writers and designers work faster at this stage"],
          ["Internal Alignment", "Always in-house. You cannot outsource briefing your CEO or walking the sales team through launch materials.", "Do not outsource"],
          ["Launch Week", "Real-time decisions, sales activation", "PR can go to an agency if you have no internal comms function"],
          ["Post-Launch", "Strategy and measurement", "Case study writing and follow-on research"],
        ]}
      />
      <p>The most common mistake is outsourcing positioning and messaging to an agency in the first six months. Agencies execute. They cannot tell you what your product means to a risk officer at a European bank. Only you can do that.</p>
    </SectionBlock>

    <SectionBlock title="At a Glance">
      <p>Every phase reduced to the one decision that matters most.</p>
      <ComparisonTable
        headers={["Phase", "Timing", "The One Thing"]}
        rows={[
          ["Positioning", "6 to 8 weeks before", "Decide how big this launch is before you build anything"],
          ["Asset Creation", "4 to 6 weeks before", "Build the toolkit: deck, one-pager, case study, FAQ"],
          ["Internal Alignment", "2 to 3 weeks before", "Sales and execs must know the message before launch day"],
          ["Launch Week", "Day of launch", "Lead with the client story, not the feature"],
          ["Post-Launch", "Months 1 to 6", "Measure pipeline, not impressions"],
        ]}
      />
    </SectionBlock>
  </>
);
