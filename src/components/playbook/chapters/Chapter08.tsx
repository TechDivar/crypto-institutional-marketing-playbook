import { SectionBlock } from "../ui/SectionBlock";
import { DosDontsCard } from "../ui/DosDontsCard";
import { ComparisonTable } from "../ui/ComparisonTable";
import { Callout } from "../ui/Callout";

export const Chapter08 = () => (
  <>
    <SectionBlock>
      <p>Every job description lists "messaging and positioning" as a core skill, because it is where most crypto companies fail when talking to institutions.</p>
    </SectionBlock>

    <SectionBlock title="Rule 1: Outcomes Before Technology">
      <DosDontsCard
        wrong="'We use decentralized oracle networks to bring off-chain data on-chain'"
        right="'We help financial institutions settle transactions in real time without the operational overhead of legacy infrastructure'"
      />
      <DosDontsCard
        wrong="'Our zero-knowledge proofs enable privacy-preserving computation'"
        right="'We allow regulated institutions to process sensitive financial data while maintaining full compliance and regulatory auditability'"
      />
    </SectionBlock>

    <SectionBlock title="Rule 2: Proof Replaces Claims">
      <DosDontsCard
        wrong="'The most trusted institutional platform'"
        right="'Trusted by BNY Mellon, BNP Paribas, and ANZ Bank, used in production, not pilot'"
      />
      <DosDontsCard
        wrong="'Industry-leading security'"
        right="'SOC 2 Type II certified. Audited by [firm name]. Zero incidents in [X] years of operation.'"
      />
    </SectionBlock>

    <SectionBlock title="Rule 3: Match the Reader's Language">
      <ComparisonTable
        headers={["Crypto Language", "TradFi Language"]}
        rows={[
          ["Liquidity pool", "Automated market making with verifiable, auditable depth"],
          ["Tokenization", "Digital representation of financial assets on programmable infrastructure"],
          ["On-chain settlement", "Real-time, immutable transaction recording with full audit trail"],
          ["Smart contract", "Programmable compliance rule with deterministic, verifiable execution"],
          ["Privacy layer (ZK / FHE)", "Selective disclosure mechanism: satisfies regulatory requirements while protecting proprietary information"],
          ["DeFi protocol", "Decentralized financial infrastructure with transparent, independently auditable logic"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="Rule 4: Respect the Fear">
      <p>Every institutional buyer is managing career risk as well as business risk. Inside large institutions, the cost of failure is asymmetric — missed opportunities are rarely punished, while visible mistakes are. Decision-makers almost never participate directly in the upside of the technology they recommend. The upside is diffuse and indirect. The downside is immediate and often personal.</p>
      <DosDontsCard
        wrong="'The future of finance is here, get ahead or get left behind'"
        right="'Hundreds of institutions have already adopted this infrastructure, with full regulatory documentation available for your review'"
      />
      <Callout variant="quote" source="a16z crypto (March 2026)">
        "Enterprise decision-making is less shaped by what could work and more by what's unlikely to fail. The bar for adoption isn't technical superiority — it's whether adopting the technology makes the decision maker's job safer or riskier."
      </Callout>
    </SectionBlock>

    <SectionBlock title="Rule 5: Position Against the Incumbent">
      <ComparisonTable
        headers={["Crypto Positioning", "Incumbent Positioning"]}
        rows={[
          ["More chains than our competitors", "Everything Bloomberg does for TradFi data, plus the on-chain layer Bloomberg cannot cover"],
          ["Faster than [other DeFi protocol]", "Settlement finality in minutes, not the two-day cycle of traditional correspondent banking"],
          ["More compliant than other crypto exchanges", "Built to the same audit and reporting standards your existing compliance infrastructure already expects"],
        ]}
      />
    </SectionBlock>
  </>
);
