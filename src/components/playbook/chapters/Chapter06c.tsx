import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";
import { Callout } from "../ui/Callout";

export const Chapter06c = () => (
  <>
    <SectionBlock>
      <p>Knowing that content generates pipeline is one thing. Being able to prove it to a CEO or a head of sales is another. That requires a pipeline attribution model, and most institutional marketing teams either do not have one or have one that only tracks the last thing a prospect clicked before booking a call.</p>
      <p>Here is how to build one that actually works.</p>
    </SectionBlock>

    <SectionBlock title="What You Are Tracking">
      <p>The goal is to map the full journey from first content touch to closed deal. Every interaction a prospect has with your content before they become a qualified meeting, and every interaction between that meeting and a signed contract.</p>
      <p>This means you need to know three things for every deal in your pipeline:</p>
      <BulletList ordered items={[
        "What content first brought this person into your world.",
        "What content they engaged with during the quiet evaluation phase.",
        "What content tipped them into booking a meeting or responding to a sales outreach.",
      ]} />
      <Callout variant="warning">
        Without all three, you are only telling part of the story.
      </Callout>
    </SectionBlock>

    <SectionBlock title="How to Set It Up">
      <BulletList items={[
        "Start with UTM parameters on every piece of content you publish. Every LinkedIn post, every white paper download, every webinar registration, every email link needs a UTM tag that tells your CRM where the traffic came from. This sounds basic but most marketing teams skip it and then cannot attribute anything six months later when a deal closes.",
        "In HubSpot, turn on contact timelines so every content interaction is logged against the prospect record. When a compliance officer at a target bank downloads your regulatory framework document, reads your white paper two weeks later, and then books a demo — all three touchpoints should be visible in their contact record before the sales conversation happens.",
        "Set your deal source field to capture marketing-sourced versus sales-sourced versus inbound versus event-sourced. This single field is what lets you report pipeline contribution in real numbers, not percentages.",
        "Use a multi-touch attribution model rather than first-touch or last-touch alone. First touch tells you what content is best at creating awareness. Last touch tells you what content is best at converting. Multi-touch tells you the full story of what is actually moving deals forward across a 6–18 month institutional sales cycle.",
      ]} />
    </SectionBlock>

    <SectionBlock title="The Three Things That Matter">
      <BulletList items={[
        "First-touch attribution: which content piece first brought this prospect into your world. This tells you which awareness content is working and where to invest more.",
        "Last-touch attribution: which content piece tipped them into booking a meeting or responding to outreach. This tells you which content is doing the conversion work at the bottom of the funnel.",
        "Time to conversion: how many days between first content interaction and qualified meeting. In institutional marketing this number is long — often 3–6 months. Knowing it tells you how patient your content strategy needs to be and helps you set realistic expectations with leadership about when content investment will show up in pipeline.",
      ]} />
    </SectionBlock>

    <SectionBlock title="The Report Leadership Actually Wants">
      <Callout variant="quote">
        "This quarter, marketing content generated X meetings. Of those meetings, Y converted to qualified opportunities. The average deal size of those opportunities is Z."
      </Callout>
      <p>That is the number the CEO and head of sales care about. If you can also show that marketing-sourced deals close faster or at a higher rate than cold outbound deals, you have made the case for increasing the marketing budget. That is the point of building the model.</p>
    </SectionBlock>

    <SectionBlock title="The Institutional Marketing Reality">
      <p>In institutional sales, a single deal might have fifteen content touchpoints over twelve months before it converts:</p>
      <BulletList ordered items={[
        "A prospect reads your research report in January.",
        "Attends your webinar in March.",
        "Downloads your compliance framework in June.",
        "Sees your CEO speak at a conference in August.",
        "Books a meeting in September.",
      ]} />
      <p>Last-touch attribution would credit the conference. First-touch attribution would credit the research report. Multi-touch attribution shows you that all five touchpoints contributed and that removing any one of them might have broken the chain.</p>
      <Callout variant="tip">
        Attribution matters more in institutional marketing than in almost any other context. The buying cycle is long enough that without a proper model, marketing looks like it is doing nothing for months at a time. With a proper model, you can show that content published in January is closing deals in September.
      </Callout>
    </SectionBlock>

    <SectionBlock title="The Tools to Use">
      <p>For institutional marketing specifically, three tools do most of the heavy lifting:</p>
    </SectionBlock>

    <SectionBlock title="Clay: Build the List Before You Write the Content">
      <p>Most content strategies start with the content. The institutional marketing version starts with the account list.</p>
      <p>Clay is a data enrichment platform that lets you define exactly who your content needs to reach and then builds and enriches that list automatically. You set the parameters:</p>
      <BulletList items={[
        "Compliance officers at European banks with assets under management above a certain threshold",
        "Heads of digital assets at fintechs operating in regulated markets",
        "CFOs at asset managers currently evaluating custody solutions",
      ]} />
      <p>Clay pulls the contacts, enriches them with firmographic data, recent company news, job changes, LinkedIn activity, and technology stack, and delivers a list of named people at named accounts who match your exact target profile.</p>
      <Callout variant="tip">
        This matters for attribution because you are no longer publishing content and hoping the right people find it. You know who you are trying to reach before you hit publish. Every piece of content can be mapped to a specific set of target accounts and the attribution model tracks whether those accounts engaged.
      </Callout>
    </SectionBlock>

    <SectionBlock title="HeyReach: Distribute Content to the Right People on LinkedIn">
      <p>Publishing a white paper on your website and waiting for a compliance officer at a Swiss bank to find it is not a distribution strategy. HeyReach is.</p>
      <p>HeyReach is a LinkedIn outreach tool built for teams running personalised multi-sender campaigns at scale. Once Clay has built and enriched your target account list, HeyReach delivers a personalised message to each contact on LinkedIn referencing the specific piece of content most relevant to their role and their company's current situation.</p>
      <Callout variant="quote">
        "I noticed your firm recently expanded into tokenized assets. We published a piece on how compliance teams are approaching the Travel Rule in that context. Thought it might be useful given where you are building."
      </Callout>
      <BulletList items={[
        "The message is not a sales pitch. It is a content delivery mechanism.",
        "That message lands in a context the recipient understands. It does not ask for a meeting. It builds the first content touchpoint that your attribution model will track six months later when the deal closes.",
        "HeyReach lets multiple team members send from their own LinkedIn accounts simultaneously, meaning your outreach reaches a larger portion of your target list without triggering LinkedIn's spam detection.",
        "Every reply, every connection acceptance, every profile visit generated by the campaign feeds back into HubSpot as a trackable touchpoint.",
      ]} />
    </SectionBlock>

    <SectionBlock title="HubSpot: Track Everything from First Touch to Closed Deal">
      <p>HubSpot is where the attribution model lives. Every content interaction, every LinkedIn message reply, every email open, every demo booking, every deal stage change gets logged against the contact record and the associated company.</p>
      <BulletList items={[
        "Set up your contact timelines to capture every touchpoint automatically.",
        "Use UTM parameters on every piece of content so HubSpot knows exactly which post, white paper, or email drove each visit.",
        "Build a multi-touch attribution report that shows the full journey from first content interaction to closed deal — not just the last click before the meeting was booked.",
        "The deal source field is the most important field in your HubSpot setup. Every deal should be tagged as marketing-sourced, sales-sourced, inbound, event-sourced, or partner-sourced.",
      ]} />
      <Callout variant="insight">
        This single field is what lets you stand in front of a CEO or head of sales and say: this quarter, marketing content generated this many qualified meetings, which converted to this much pipeline, at this average deal size.
      </Callout>
    </SectionBlock>

    <SectionBlock title="The Full Stack in Practice">
      <BulletList ordered items={[
        "Clay builds and enriches a list of 200 target accounts matching your ICP.",
        "HeyReach delivers a personalised LinkedIn message to the compliance officer at each account referencing your latest regulatory framework content.",
        "Forty of them accept the connection. Twelve engage with the content. Four book a meeting.",
        "HubSpot has tracked every step of that journey and can show you exactly which content piece opened each door.",
        "Six months later when two of those four meetings close into deals, your attribution model shows the full chain: Clay identified the account, HeyReach delivered the first content touch, the white paper download in month two was the second touch, the conference interaction in month four was the third touch, and the case study in month five was what tipped them into signing.",
      ]} />
      <Callout variant="warning">
        Most crypto marketing teams are still running attribution on gut feel and last click. The teams hired by Chainlink, Fireblocks, Ondo Finance, and Blockstream are not. Their job descriptions ask for pipeline attribution, CAC tracking, and content-to-meeting measurement because their leadership teams expect marketing to prove its contribution to revenue in the same way sales does.
      </Callout>
      <p>Clay, HeyReach, and HubSpot are not the only tools that can do this job. But together they cover the three layers every institutional marketing attribution model needs: who to reach, how to reach them, and how to prove what happened next.</p>
    </SectionBlock>
  </>
);
