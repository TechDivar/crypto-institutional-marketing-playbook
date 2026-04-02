import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";
import { Callout } from "../ui/Callout";

export const ChapterOnchainGTM = () => (
  <>
    <SectionBlock title="The Core Strategic Insight: Infrastructure Arbitrage">
      <p>
        Going onchain is not a feature. It is a positioning decision.
      </p>
      <p>
        Most fintechs frame it as product expansion. That weakens the story.
      </p>
      <p>
        The stronger framing is this: <strong>you are moving from being an interface to owning part of the financial stack.</strong>
      </p>
      <p>
        Fintechs that already control distribution (users) and interface (app) can now control rails (infrastructure). That is the real shift.
      </p>
      <Callout variant="tip">
        Institutional buyers do not care that you "added crypto." They care that you reduced dependency on legacy systems and improved control over settlement, custody, and access.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Three GTM Angles That Actually Land">
      <h3 className="text-lg font-bold text-foreground mb-3">1. The Hidden Cost of Legacy Rails</h3>
      <p>
        Legacy infrastructure is expensive, but the cost is often invisible.
      </p>
      <BulletList items={[
        "Custody fees",
        "Delayed settlement cycles",
        "Restricted asset access",
      ]} />
      <p>
        Most institutions accept these as fixed constraints. Your job is to <strong>make the cost visible</strong> before you position your solution.
      </p>
      <p>
        CFOs and treasury teams respond to cost clarity. If the problem is not clearly quantified, the solution does not matter.
      </p>
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">2. Vertical Integration as a Moat</h3>
      <p>
        "We are adding crypto" sounds optional.<br />
        "We are owning more of the stack" sounds strategic.
      </p>
      <p>
        Position the move as reducing reliance on custodians, clearinghouses, and legacy intermediaries. This shifts the conversation from experimentation to defensibility.
      </p>
      <p className="font-medium text-foreground">For institutions, this reads as:</p>
      <BulletList items={[
        "Better margins",
        "More control",
        "Less counterparty dependency",
      ]} />
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">3. Asset Access as the Entry Point</h3>
      <p>
        Access is one of the most practical hooks in institutional marketing.
      </p>
      <BulletList items={[
        "Tokenized assets",
        "Onchain credit",
        "New liquidity venues",
      ]} />
      <p>
        The pitch is simple: <strong>what can they access now that they could not before?</strong>
      </p>
      <p>
        New access creates new revenue potential. That is easier to justify internally than abstract innovation.
      </p>
    </SectionBlock>

    <SectionBlock title="The Three-Stage Institutional GTM Motion">
      <h3 className="text-lg font-bold text-foreground mb-3">Stage 1 — Awareness</h3>
      <p className="font-medium text-foreground">Make the current system feel expensive.</p>
      <BulletList items={[
        "Show settlement delays",
        "Show cost layers",
        "Show access limitations",
      ]} />
      <p>
        Do not sell the product yet. Define the problem clearly.
      </p>
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">Stage 2 — Consideration</h3>
      <p className="font-medium text-foreground">Reframe your product as infrastructure.</p>
      <p>This is where the heavy lifting happens:</p>
      <BulletList items={[
        "Case studies",
        "Regulatory clarity",
        "Technical credibility",
      ]} />
      <p>
        You are no longer a tool. You are part of their stack.
      </p>
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">Stage 3 — Conversion</h3>
      <p className="font-medium text-foreground">Give them numbers they can defend internally.</p>
      <BulletList items={[
        "Faster settlement",
        "Lower operational cost",
        "New asset exposure",
      ]} />
      <p>
        Institutional buyers do not close on vision. They close on justification.
      </p>
    </SectionBlock>

    <SectionBlock title="Key Messaging Principle">
      <p>
        Institutional buyers do not buy transformation.
      </p>
      <p className="font-medium text-foreground">They buy:</p>
      <BulletList items={[
        "Cost reduction",
        "Risk mitigation",
        "Access",
      ]} />
      <Callout variant="warning">
        If your message does not map to one of these three — cost reduction, risk mitigation, or access — it will not land in an institutional setting.
      </Callout>
    </SectionBlock>
  </>
);
