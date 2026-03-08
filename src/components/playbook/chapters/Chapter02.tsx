import { SectionBlock } from "../ui/SectionBlock";
import { ComparisonTable } from "../ui/ComparisonTable";
import { Callout } from "../ui/Callout";

export const Chapter02 = () => (
  <>
    <SectionBlock>
      <p>Before you write a single line of copy, you need to understand what is driving institutional interest in crypto in 2026. Not what your product does, but what the buyer actually needs.</p>
      <Callout variant="tip">
        The DWF Ventures report cites survey data showing institutional DeFi engagement is projected to triple to 75% in the next two years. That number belongs in your executive presentations, your white papers, and your sales decks.
      </Callout>
    </SectionBlock>

    <SectionBlock title="The Shift Has Already Happened">
      <p>Retail speculation driving crypto growth is giving way to institutional capital. The Coinbase and EY-Parthenon 2025 Institutional Investor Digital Assets Survey shows regulatory clarity was the single biggest barrier holding institutions back, and those barriers started falling in 2025.</p>
      <p>As a marketer, you are no longer selling "the future of finance." You are selling "the infrastructure that the institutions already moving on-chain are choosing right now."</p>
    </SectionBlock>

    <SectionBlock title="Gap 1: Privacy">
      <p>A bank does not broadcast its trading positions. A hedge fund does not publish its portfolio. An asset manager's strategy is proprietary. Blockchain's transparency is a threat to institutions, as competitors can front-run their trades.</p>
      <Callout variant="quote" source="DWF Ventures Report">
        "Privacy becomes a prerequisite for meaningful institutional capital inflows into any DeFi protocol."
      </Callout>
      <p><strong>Marketing implication:</strong> If your product includes any privacy-preserving mechanism, that is not a technical feature. It is the answer to an institution's most fundamental objection. Lead with what it protects, not how it works.</p>
    </SectionBlock>

    <SectionBlock title="Gap 2: Compliance Built In, Not Bolted On">
      <p>Institutions do not want to evaluate whether your product is compliant. They want you to have already done that work and be able to show them the documentation.</p>
      <p><strong>Marketing implication:</strong> "We are compliant" is not a differentiator. "Here is how compliance is embedded at the protocol level, with real-time audit trails and documentation your legal team can take to your board" is a differentiator.</p>
    </SectionBlock>

    <SectionBlock title="Gap 3: Composability">
      <p>Institutional interest in tokenized assets has grown over five times in two years. But holding a tokenized Treasury bond on-chain and being able to use it the way you use a Treasury bond in TradFi are very different things.</p>
      <p><strong>Marketing implication:</strong> If your product solves any part of the composability problem, your marketing needs to explain the outcome, not the mechanism. The outcome is: institutions can use their on-chain assets the same way they use their TradFi assets.</p>
    </SectionBlock>

    <SectionBlock title="Summary">
      <ComparisonTable
        headers={["The Gap", "What Institutions Need From You"]}
        rows={[
          ["Privacy", "Prove that their strategies, positions, and balances cannot be seen by competitors or exploited"],
          ["Compliance", "Show that your product is built around regulatory requirements, not just compatible with them"],
          ["Composability", "Demonstrate that tokenized assets in your ecosystem are active financial tools, not digital receipts"],
        ]}
      />
    </SectionBlock>
  </>
);
