import { SectionBlock } from "../ui/SectionBlock";

const GlossaryTerm = ({ term, definition }: { term: string; definition: string }) => (
  <div className="py-3 border-b border-border/50 last:border-0">
    <dt className="text-sm font-display font-semibold text-primary">{term}</dt>
    <dd className="text-sm text-foreground/75 mt-1 leading-relaxed">{definition}</dd>
  </div>
);

export const Chapter13 = () => (
  <>
    <SectionBlock title="The Buyers">
      <dl>
        <GlossaryTerm term="G-SIB" definition="Global Systemically Important Bank. JP Morgan, Citi, BNP Paribas, HSBC. If they adopt your infrastructure, the rest follow." />
        <GlossaryTerm term="Asset Manager" definition="A company that invests money on behalf of clients. BlackRock, Fidelity, Vanguard. They manage trillions and move carefully." />
        <GlossaryTerm term="Family Office" definition="Private wealth management for ultra-high-net-worth individuals. Often early movers because they have less regulatory overhead than banks." />
        <GlossaryTerm term="Hedge Fund" definition="An investment fund using aggressive strategies. Many are early movers in crypto because they have high risk tolerance and sophisticated teams." />
        <GlossaryTerm term="Corporate Treasury" definition="The team inside a company managing cash, debt, and short-term investments. Stablecoin and payments products target this buyer." />
        <GlossaryTerm term="LP Allocator" definition="A limited partner responsible for deciding where capital gets deployed across funds. They evaluate GPs on deal sourcing, judgment, and process discipline — and increasingly want crypto exposure through regulated vehicles." />
      </dl>
    </SectionBlock>

    <SectionBlock title="The Compliance World">
      <dl>
        <GlossaryTerm term="AML" definition="Anti-Money Laundering. A set of laws designed to prevent money laundering. Any product touching financial transactions needs an AML story." />
        <GlossaryTerm term="KYC" definition="Know Your Customer. The process of verifying who a customer is. Required for most financial products." />
        <GlossaryTerm term="FATF" definition="Financial Action Task Force. The global body that sets AML and counter-terrorism financing standards. The international rulebook." />
        <GlossaryTerm term="Travel Rule" definition="A FATF requirement that financial institutions must collect and transmit originator and beneficiary information on transfers. Notabene is built specifically to solve this." />
        <GlossaryTerm term="CARF" definition="Crypto Asset Reporting Framework. A new tax reporting standard from the OECD. TaxBit's entire product is built around this." />
        <GlossaryTerm term="SOC 2" definition="A security audit standard certifying an organisation's data security practices. Table stakes for institutional data vendors." />
        <GlossaryTerm term="MiCA" definition="Markets in Crypto Assets. The EU's regulatory framework for crypto assets, fully in force from 2025." />
        <GlossaryTerm term="GENIUS Act" definition="The US stablecoin regulatory framework passed in 2025. Cited in the DWF Ventures report as a key driver of institutional momentum." />
      </dl>
    </SectionBlock>

    <SectionBlock title="The Technology">
      <dl>
        <GlossaryTerm term="Zero-Knowledge Proof (ZK Proof)" definition="A cryptographic method allowing one party to prove something is true without revealing the underlying information." />
        <GlossaryTerm term="FHE" definition="Fully Homomorphic Encryption. Allows computations on encrypted data without ever decrypting it. One of the most important privacy technologies for institutional DeFi." />
        <GlossaryTerm term="Selective Disclosure" definition="The ability to reveal specific verified information to a specific party (a regulator, an auditor) without making it public." />
        <GlossaryTerm term="Tokenization" definition="Taking a real-world asset and representing it as a digital token on a blockchain. The biggest institutional crypto trend of 2025-2026." />
        <GlossaryTerm term="RWA" definition="Real-World Asset. An asset from the traditional financial world represented on-chain. US Treasuries, corporate bonds, and real estate are examples." />
        <GlossaryTerm term="Stablecoin" definition="A cryptocurrency designed to maintain a stable value, usually pegged to the US dollar. Increasingly used in institutional payments." />
        <GlossaryTerm term="Composability" definition="The ability of on-chain assets to interact with other protocols. A composable tokenized Treasury bond can be pledged as collateral, stripped for yield, or structured into a product." />
        <GlossaryTerm term="Settlement" definition="The process of completing a financial transaction. Blockchain's core value proposition for institutions is faster, cheaper settlement." />
        <GlossaryTerm term="Custody" definition="The safekeeping of financial assets. Institutional-grade custody means storing digital assets securely enough that a bank's risk team will approve it." />
        <GlossaryTerm term="Oracle" definition="A system that brings real-world data onto a blockchain. Chainlink is the dominant oracle network." />
        <GlossaryTerm term="Layer 1 / Layer 2" definition="Layer 1 is the base blockchain (Ethereum, Solana, Bitcoin). Layer 2 is built on top to increase speed and reduce cost." />
        <GlossaryTerm term="BUIDL" definition="BlackRock USD Institutional Digital Liquidity Fund. A tokenized U.S. Treasury fund holding $2.2 billion with 112 institutional holders. The benchmark for institutional on-chain asset adoption." />
        <GlossaryTerm term="Kinexys" definition="JPMorgan's blockchain-based platform (formerly Onyx) for tokenized deposit settlements, processing roughly $2 billion per day in cross-border payments and intraday settlement." />
        <GlossaryTerm term="Nostro Account" definition="A bank account held in a foreign country in the local currency, used to facilitate cross-border transactions. Prefunding nostro accounts locks capital and adds cost to settlement." />
        <GlossaryTerm term="Correspondent Banking" definition="A network of intermediary banks that facilitate cross-border payments through multi-hop message chains. The legacy settlement architecture that stablecoins are replacing." />
        <GlossaryTerm term="LP (Limited Partner)" definition="An investor who commits capital to a fund but does not manage it. Family offices, endowments, and pension funds investing in crypto venture funds are LPs." />
        <GlossaryTerm term="GP (General Partner)" definition="The fund manager who makes investment decisions and manages portfolio companies. LPs evaluate GPs on deal sourcing, judgment, and process discipline." />
        <GlossaryTerm term="CFTC" definition="Commodity Futures Trading Commission. The U.S. regulator overseeing derivatives markets. Its advisory committee now recommends tokenized money market funds as eligible margin collateral." />
        <GlossaryTerm term="ERC-3643" definition="A compliance-embedded token standard that bakes KYC, AML, and investor accreditation directly into the token itself, enabling permissioned transfers on public blockchains." />
        <GlossaryTerm term="SWIFT" definition="Society for Worldwide Interbank Financial Telecommunication. The dominant messaging network for cross-border bank transfers. Persists despite being slow and expensive because it offers shared governance and regulatory comfort." />
        <GlossaryTerm term="CME Group" definition="Chicago Mercantile Exchange. One of the world's largest derivatives exchanges, offering regulated crypto futures and options. A key institutional trading venue signalling serious market participation." />
        <GlossaryTerm term="COBOL" definition="A legacy programming language still running critical banking systems. Persists because rewriting stable systems introduces existential risk — a reminder that enterprises value continuity over innovation." />
        <GlossaryTerm term="Clearinghouse" definition="An intermediary between buyers and sellers in financial markets that ensures trades settle correctly. One of the legacy middlemen that on-chain infrastructure can replace or streamline." />
        <GlossaryTerm term="Onchain Credit" definition="Lending and credit products built natively on blockchain infrastructure. A key hook for fintechs positioning on-chain capabilities to institutional buyers." />
        <GlossaryTerm term="DeFi" definition="Decentralised Finance. Financial services built on public blockchains without traditional intermediaries. Institutional DeFi adds compliance, permissioning, and custody layers on top." />
        <GlossaryTerm term="Infrastructure Arbitrage" definition="The strategic advantage of owning part of the financial stack rather than renting access from legacy providers. The core thesis behind fintechs moving on-chain." />
      </dl>
    </SectionBlock>

    <SectionBlock title="The Marketing Terms">
      <dl>
        <GlossaryTerm term="GTM" definition="Go-To-Market. The strategy for launching and selling a product, covering positioning, channels, sales approach, and pricing." />
        <GlossaryTerm term="ICP" definition="Ideal Customer Profile. A detailed description of the exact type of organisation most likely to buy your product." />
        <GlossaryTerm term="ABM" definition="Account-Based Marketing. Targeting specific named companies rather than broad audiences." />
        <GlossaryTerm term="Sales Enablement" definition="The content, tools, and training that help your sales team have better conversations and close more deals." />
        <GlossaryTerm term="Battle Card" definition="A one or two page document showing your product vs. the competition. Designed for sales reps, not external distribution." />
        <GlossaryTerm term="Thought Leadership" definition="Content that positions your executives or company as authoritative experts. Being the source your buyers trust and cite, not going viral." />
        <GlossaryTerm term="Pipeline" definition="The set of deals currently being worked by the sales team at various stages of the buying process." />
        <GlossaryTerm term="POC / Pilot" definition="Proof of Concept. A limited trial that allows an institution to test a product before full commitment." />
        <GlossaryTerm term="NDA" definition="Non-Disclosure Agreement. Institutional buyers often require an NDA before sharing detailed information about their needs." />
        <GlossaryTerm term="Multi-Touch Attribution" definition="A measurement model that assigns credit for a conversion across multiple marketing touchpoints rather than giving all credit to the first or last interaction." />
        <GlossaryTerm term="UTM Parameters" definition="Urchin Tracking Module. Tags added to URLs to track which campaigns, channels, and content pieces drive traffic and conversions." />
        <GlossaryTerm term="Systems Integrator" definition="A consulting or technology firm that helps enterprises connect new solutions with existing infrastructure. Often a gatekeeper in enterprise procurement decisions." />
        <GlossaryTerm term="Rip and Replace" definition="A go-to-market narrative that positions new technology as a full replacement for legacy systems. Almost always fails in enterprise sales — institutions prefer incremental integration." />
        <GlossaryTerm term="Consultant / Translation Layer" definition="The intermediary layer of consulting firms, auditors, and advisors that filter and validate new technologies before they reach enterprise buyers. Ignoring this layer is a common founder mistake." />
        <GlossaryTerm term="Messari" definition="A crypto research and data platform providing institutional-grade market intelligence, on-chain analytics, and governance research." />
        <GlossaryTerm term="Token2049" definition="One of the largest global crypto industry conferences, held in Dubai and Singapore. A key venue for institutional networking and deal origination." />
      </dl>
    </SectionBlock>
  </>
);
