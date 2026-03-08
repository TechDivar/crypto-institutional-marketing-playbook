import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";
import { Callout } from "../ui/Callout";

export const Chapter05b = () => (
  <>
    <SectionBlock>
      <p className="text-lg font-medium italic text-foreground/90">
        The compliance officer googles your CEO before the deal is approved. What they find is a marketing asset.
      </p>
      <p>Most institutional marketing budgets go to events, agencies, and content teams. But the highest-trust content in any institutional sales cycle costs nothing except time: a founder who writes.</p>
      <p>Not posting for impressions. Writing with a point of view.</p>
      <p>There is a difference. Posting for impressions is "excited to announce our partnership with X." Writing with a point of view is "here is why every bank treasury team will face this problem in the next 18 months, and what the ones moving early are doing about it."</p>
      <Callout variant="tip">
        One gets liked by your colleagues. The other gets forwarded to a risk committee.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Why Founder Content Works Differently in Institutional Sales">
      <p>When a compliance officer is evaluating your product, they are not just evaluating the technology. They are evaluating whether the people behind it are credible enough to stake their reputation on. A 30-minute demo cannot answer that question. Eighteen months of consistent, clear writing can.</p>
      <p>This is what LayerZero understood when they hired specifically for the role of making their founder's thinking translatable to institutional audiences. That is not a social media job. That is a trust-building job.</p>
      <p>Chainlink's co-founders have been writing about oracle infrastructure and capital markets for years. By the time Swift and Fidelity signed on, the intellectual groundwork was already laid. The deal did not start with a sales call. It started with a point of view that the right people found credible and kept forwarding.</p>
    </SectionBlock>

    <SectionBlock title="What Founder Content Looks Like at Each Stage">
      <p><strong>Awareness:</strong> The founder is publishing research-backed observations about the market. Not product news. Market observations. "Why tokenized collateral is the next SWIFT moment" is an awareness piece. "We just launched v2 of our collateral engine" is not.</p>
      <p><strong>Active Research:</strong> The founder is responding to objections in public before buyers even raise them. When a compliance officer is quietly evaluating your product, they are also reading everything your founder has written. A LinkedIn post that addresses the exact concern they have in their head moves the deal forward without a single sales conversation.</p>
      <p><strong>Technical Validation & Procurement:</strong> The founder's content shifts. Now it is case-study-adjacent. "Here is what we learned from our first five institutional deployments" signals production experience. "Here is how we think about regulatory risk in our product architecture" is the kind of content that ends up in an internal approval deck without you ever knowing.</p>
    </SectionBlock>

    <SectionBlock title="The Platforms That Matter">
      <p><strong>LinkedIn</strong> is non-negotiable. It is the only platform where a CFO, a compliance officer, and a head of digital assets are all reachable in a professional context. Posts that perform well on LinkedIn in institutional circles are not viral posts. They are posts that get forwarded in WhatsApp groups and Slack channels you will never see.</p>
      <p><strong>X (formerly Twitter)</strong> depends entirely on the product. If your buyers are crypto-native institutional players, family offices, and digital asset fund managers, X still matters. If your buyers are bank operations heads and corporate treasury teams, they are not on X and your founder's time is better spent elsewhere.</p>
      <p><strong>Substack and long-form newsletters</strong> are underused in this space. A founder who publishes a monthly 800-word analysis of one specific institutional trend owns that topic in a way that no agency content can replicate.</p>
    </SectionBlock>

    <SectionBlock title="What Good Founder Content Is Not">
      <BulletList items={[
        "It is not announcing partnerships, funding rounds, or product launches. Those belong in press releases.",
        "It is not thought leadership that could have been written by anyone. 'Blockchain is transforming finance' is not a point of view. 'Here is why the two-day settlement cycle is the single biggest cost centre most bank CFOs are not tracking correctly' is a point of view.",
        "It is not high volume. One piece of genuinely useful, specific, non-obvious writing per week beats five generic posts every time in an institutional context.",
      ]} />
    </SectionBlock>

    <SectionBlock title="How to Measure Whether It Is Working">
      <p>The signals are indirect but real:</p>
      <BulletList items={[
        "Inbound demo requests that mention the founder by name",
        "Prospects who arrive at a sales call already familiar with your company's perspective",
        "Your content being cited in RFP documents or internal presentations",
        "Journalists and analysts reaching out to the founder for comment",
      ]} />
      <p>These are not vanity metrics. They are trust signals. And in a 12-month institutional sales cycle, trust is the only thing that actually moves a deal forward.</p>
      <Callout variant="quote">
        Reach is temporary. Reputation compounds.
      </Callout>
    </SectionBlock>
  </>
);
