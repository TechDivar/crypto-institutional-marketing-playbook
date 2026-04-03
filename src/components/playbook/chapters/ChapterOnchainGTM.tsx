import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";
import { Callout } from "../ui/Callout";
import { PullQuote } from "../ui/PullQuote";

export const ChapterOnchainGTM = () => (
  <>
    <SectionBlock title="First, the most important thing to understand">
      <p>
        Going onchain is not a feature update.
      </p>
      <p>
        It is a positioning decision.
      </p>
      <p>
        Most fintechs get this wrong. They frame it as product expansion. They say "we added crypto" and wonder why nobody is impressed.
      </p>
      <p>
        Here is what actually moves institutional buyers: <strong>you are no longer just an interface. You are owning part of the financial stack.</strong>
      </p>
      <p>
        Fintechs that already have users and a product can now own the rails too. That is the real story.
      </p>
      <Callout variant="tip">
        Nobody in treasury or compliance is excited that you "added crypto." They want to know if you reduced their dependency on slow, expensive legacy systems.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Three angles that actually land">
      <h3 className="text-lg font-bold text-foreground mb-3">1. Show them what legacy rails are costing them</h3>
      <p>
        Custody fees. Settlement delays. Limited asset access.
      </p>
      <p>
        Most institutions treat these as facts of life. Your job is to <strong>make the cost visible</strong> before you pitch anything.
      </p>
      <p>
        CFOs respond to numbers. If the problem is not clearly quantified, nobody will care about your solution.
      </p>
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">2. Owning the stack beats adding a feature</h3>
      <p>
        "We are adding crypto" sounds optional.
      </p>
      <p>
        "We are owning more of the financial stack" sounds like a strategy.
      </p>
      <p>
        Position the move as reducing reliance on custodians, clearinghouses, and legacy middlemen. That is a conversation about margins and control, not experimentation.
      </p>
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">3. Asset access is your simplest hook</h3>
      <p>
        What can they access now that they could not access before?
      </p>
      <BulletList items={[
        "Tokenized assets",
        "Onchain credit",
        "New liquidity venues",
      ]} />
      <p>
        New access means new revenue potential. That is much easier to justify internally than "we are innovating."
      </p>
    </SectionBlock>

    <SectionBlock title="The three stages of selling to institutions">
      <h3 className="text-lg font-bold text-foreground mb-3">Stage 1: Make the current system feel expensive</h3>
      <p>
        Do not pitch your product yet. Just show the cost of the status quo.
      </p>
      <BulletList items={[
        "Settlement delays",
        "Cost layers",
        "Access limitations",
      ]} />
      <p>
        Define the problem clearly first.
      </p>
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">Stage 2: Reframe your product as infrastructure</h3>
      <p>
        This is where most fintechs lose the deal.
      </p>
      <p>
        Case studies. Regulatory clarity. Technical credibility. You need all three.
      </p>
      <p>
        You are not selling a tool. You are becoming part of their stack.
      </p>
    </SectionBlock>

    <SectionBlock>
      <h3 className="text-lg font-bold text-foreground mb-3">Stage 3: Give them a number they can defend internally</h3>
      <BulletList items={[
        "Faster settlement",
        "Lower operational cost",
        "New asset exposure",
      ]} />
      <p>
        Institutions do not close on vision. They close on justification.
      </p>
    </SectionBlock>

    <SectionBlock title="The one messaging rule that covers everything">
      <p>
        Institutional buyers do not buy transformation.
      </p>
      <p>
        They buy cost reduction. They buy risk mitigation. They buy access.
      </p>
      <Callout variant="warning">
        If your message does not map to one of those three things, it will not land. Simple as that.
      </Callout>
    </SectionBlock>
  </>
);
