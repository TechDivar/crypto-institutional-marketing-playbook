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
      <p>Retail speculation driving crypto growth is giving way to institutional capital. The Coinbase and EY-Parthenon 2025 Institutional Investor Digital Assets Survey shows regulatory clarity was the single biggest barrier holding institutions back, and those barriers started falling in 2025. EY reports that 77% of institutional investors are now actively exploring tokenized assets, with a target allocation of 5.6% of portfolios.</p>
      <p>The numbers are no longer theoretical. $33 billion in real-world assets are now on-chain, up from $8 billion two years ago. BlackRock's BUIDL fund holds $2.2 billion in tokenized U.S. Treasuries with 112 institutional holders. JPMorgan's Kinexys platform processes $2 billion per day in tokenized deposit settlements. The UK became the first G7 nation to issue sovereign debt on a distributed ledger. Meanwhile, stablecoins have exceeded $310 billion in market capitalization, and platforms like Remitly ($18.5 billion in quarterly send volume) and Thunes (7 billion connected mobile wallets across 130 countries) are integrating USDC settlement into production systems.</p>
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

    <SectionBlock title="Gap 3: Composability and Tokenization">
      <p>Institutional interest in tokenized assets has grown over five times in two years. $33 billion in real-world assets are now on-chain, with private credit dominating at $17–18 billion (58% of all tokenized RWAs). But holding a tokenized Treasury bond on-chain and being able to use it the way you use a Treasury bond in TradFi are very different things.</p>
      <p>BlackRock's BUIDL fund is accepted as off-exchange collateral on multiple venues. The CFTC's Global Markets Advisory Committee now recommends tokenized money market funds as eligible margin collateral. Lloyds Banking Group and Aberdeen completed the UK's first FX trades using tokenized collateral on an FCA-regulated platform. Once an institution holds tokenized Treasuries, the custody relationship, compliance framework, and wallet infrastructure are all in place — every subsequent asset class becomes an incremental deployment, not a new build.</p>
      <p><strong>Marketing implication:</strong> If your product solves any part of the composability or tokenization problem, your marketing needs to explain the outcome, not the mechanism. The outcome is: institutions can use their on-chain assets the same way they use their TradFi assets. Position tokenized Treasuries as the gateway, not the destination.</p>
    </SectionBlock>

    <SectionBlock title="Gap 4: Settlement and Stablecoin Infrastructure">
      <p>Global remittance flows reached $905 billion in 2024, yet sending $200 internationally still costs an average of 6.35%. On a $905 billion market, that translates to roughly $50 billion in annual intermediation costs — most of it hidden in FX spreads, prefunding requirements, and correspondent banking overhead. Stablecoins now exceed $310 billion in market capitalization and are being integrated into production settlement systems by publicly traded, regulated platforms.</p>
      <p>The structural change is not marginal fee reduction. It is the removal of prefunding and correspondent banking layers entirely. Instead of parking millions in nostro accounts waiting for Monday's clearing cycle, platforms can move USDC in minutes and free that capital for the next corridor. Remitly, Thunes, and Western Union are all integrating stablecoin settlement into their operations.</p>
      <p><strong>Marketing implication:</strong> If your product touches cross-border settlement, payment rails, or stablecoin infrastructure, your marketing must quantify the working capital advantage — not just the fee savings. The buyer cares about capital efficiency measured in millions freed per corridor, not theoretical percentage reductions. Position stablecoins as the infrastructure layer that replaces correspondent banking chains, not as a competitor to existing providers.</p>
      <Callout variant="quote" source="Settled Media, 'Who's Actually Using Stablecoins' (March 2026)">
        "Stablecoins are not replacing remittance companies. They are replacing the settlement layer beneath them."
      </Callout>
    </SectionBlock>

    <SectionBlock title="Gap 5: LP Due Diligence and Allocator Trust">
      <p>Family offices and institutional LPs entering crypto are discovering a painful pattern: traditional due diligence frameworks do not translate. Long investment thesis manuals create an illusion of confidence while overlooking the red flags unique to crypto VCs.</p>
      <p>LPs conducting real due diligence are asking: Who sourced the deals? Who led internally? What was the ownership at entry and exit? Is one GP carrying all the load, or does the investment committee contribute equally? They want to understand deal flow structure, not just allocation size.</p>
      <p><strong>Marketing implication:</strong> If your product serves allocators, fund administrators, or capital deployment workflows, your content must speak to portfolio construction discipline, GP alignment transparency, and repeatable judgment — not just returns. The buyer here is not impressed by past performance alone. They want proof of process.</p>
      <Callout variant="tip">
        Allocation dictates a VC's position today — access decides upside tomorrow. Marketing to LPs means proving your infrastructure helps them evaluate both.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Summary">
      <ComparisonTable
        headers={["The Gap", "What Institutions Need From You"]}
        rows={[
          ["Privacy", "Prove that their strategies, positions, and balances cannot be seen by competitors or exploited"],
          ["Compliance", "Show that your product is built around regulatory requirements, not just compatible with them"],
          ["Composability & Tokenization", "Demonstrate that tokenized assets in your ecosystem are active financial tools, not digital receipts — and position Treasuries as the gateway to broader on-chain adoption"],
          ["Settlement & Stablecoins", "Prove that your infrastructure collapses the multi-hop correspondent banking chain — show working capital advantages measured in real numbers, not theoretical savings"],
          ["LP Due Diligence", "Show that your platform enables rigorous, process-driven evaluation — not hope-based allocation"],
        ]}
      />
    </SectionBlock>
  </>
);
