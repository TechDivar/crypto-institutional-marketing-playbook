import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";

export const Chapter03 = () => (
  <>
    <SectionBlock>
      <p>You're not selling to "institutions" but specific people inside institutions who have specific fears and specific goals. Inside a single bank there can be five different buyers, all with different priorities, and you need different messages for each one.</p>
    </SectionBlock>

    <SectionBlock title="Buyer Type 1: The CFO and Treasury Team">
      <p><strong>Found in:</strong> Dakota, Trovata, Figure, TaxBit</p>
      <p><strong>What they care about:</strong> Cash flow efficiency, settlement speed, cost reduction, and regulatory compliance. They are asking: "Can this save us money or reduce the risk of a fine?"</p>
      <p><strong>What terrifies them:</strong> Reputational damage, regulatory non-compliance, a technology failure that appears in an audit.</p>
    </SectionBlock>

    <SectionBlock title="Buyer Type 2: The Risk and Compliance Officer">
      <p><strong>Found in:</strong> Chainlink, Notabene, TaxBit, Fireblocks</p>
      <p><strong>What they care about:</strong> AML/KYC compliance, audit trails, regulatory frameworks, and whether this technology creates new legal exposure.</p>
      <p><strong>What terrifies them:</strong> Regulatory penalties, being associated with a product scrutinised by the SEC, the FCA, or FATF.</p>
    </SectionBlock>

    <SectionBlock title="Buyer Type 3: The Head of Digital Assets / Innovation Lead">
      <p><strong>Found in:</strong> Chainlink, Fireblocks, Ledger, Blockstream</p>
      <p><strong>What they care about:</strong> Being ahead of the curve. Showing their board they are building for the future.</p>
      <p><strong>What terrifies them:</strong> Backing the wrong infrastructure early and having to explain it later.</p>
    </SectionBlock>

    <SectionBlock title="Buyer Type 4: The Data and Analytics Team">
      <p><strong>Found in:</strong> Allium, Artemis, Dune, RWA.xyz</p>
      <p><strong>What they care about:</strong> Data quality, methodology, auditability, and whether the data can survive scrutiny from an auditor or regulator.</p>
      <BulletList items={[
        "Allium's JD talks about 'SOC 1 and SOC 2 compliance' and 'auditable methodology.'",
        "RWA.xyz mentions being trusted by Goldman Sachs, J.P. Morgan, the US Treasury, the IMF.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Buyer Type 5: The Investment Team">
      <p><strong>Found in:</strong> Artemis, Ondo Finance, RWA.xyz, Figure</p>
      <p><strong>What they care about:</strong> Returns, risk-adjusted performance, and access to new asset classes their competitors do not have.</p>
      <p><strong>What terrifies them:</strong> Missing a major market shift and explaining to LPs why they were too late.</p>
    </SectionBlock>

    <SectionBlock title="Buyer Type 6: The Payments and Stablecoin Infrastructure Team">
      <p><strong>Found in:</strong> Anchorage Digital, Coinbase, Figure</p>
      <p><strong>What they care about:</strong> Cross-border settlement efficiency, correspondent banking infrastructure, stablecoin issuance and redemption workflows, and regulatory clarity around payment rails. They are asking: "Can this replace or improve an existing payment corridor and will our regulators accept it?"</p>
      <p><strong>What terrifies them:</strong> Deploying new payment infrastructure that fails under volume, gets flagged by a correspondent banking partner, or creates compliance exposure in a jurisdiction they have not fully mapped.</p>
      <p><strong>Why this matters now:</strong> Global remittance flows reached $905 billion in 2024, with average cross-border costs exceeding 6% — roughly $50 billion in annual intermediation fees. Stablecoins are replacing the settlement layer beneath remittance providers: Remitly integrated USDC through Circle for treasury operations and launched stablecoin payouts in late 2025. Thunes, connecting 7 billion mobile wallets across 130 countries, saw USDC funding volumes grow by nearly a third month over month after going live. Settlement that previously required 3–5 business days of prefunding now completes in minutes.</p>
      <BulletList items={[
        "Anchorage Digital's JD explicitly focuses on 'stablecoin infrastructure and cross-border payment offerings' with a role dedicated to positioning these products for institutional adoption.",
        "Coinbase's institutional marketing role covers 'prime brokerage products spanning trading, financing, custody' — the full stack that payments teams evaluate when choosing infrastructure.",
        "The critical marketing angle: stablecoins are not replacing remittance companies — they are replacing the multi-hop correspondent banking settlement chain underneath them. Position your product as the infrastructure that collapses cost, not the competitor that displaces incumbents.",
      ]} />
    </SectionBlock>

    <SectionBlock title="The LP / Allocator">
      <p><strong>Found in:</strong> Family offices, endowments, pension funds, fund-of-funds evaluating crypto VC managers</p>
      <p><strong>What they care about:</strong> Portfolio construction discipline, deal attribution, GP alignment, and repeatable judgment across management — not just headline returns. They are asking: "Is this fund's track record the result of process or luck?"</p>
      <p><strong>What terrifies them:</strong> Deploying capital into a fund where one GP is carrying all the load, where deal flow is not proprietary, or where portfolio construction relies on hope instead of discipline. They fear discovering after commitment that the investment committee does not contribute equally or that allocation wins were not repeatable.</p>
      <BulletList items={[
        "Institutional LPs conduct due diligence on deal sourcing, internal leadership, ownership at entry and exit, and whether the fund has genuine access to competitive rounds.",
        "They evaluate reserve strategy for follow-on rounds, expected loss ratios, target ownership at entry, and agreed deviation thresholds — the math behind the thesis, not just the thesis itself.",
        "GP alignment is a dealbreaker: how economics are split, decision-making structure, and historical partner turnover all signal whether the fund will perform consistently.",
      ]} />
    </SectionBlock>
  </>
);
