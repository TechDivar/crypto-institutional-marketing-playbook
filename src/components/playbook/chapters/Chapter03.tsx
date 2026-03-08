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
  </>
);
