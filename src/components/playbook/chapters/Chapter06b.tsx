import { SectionBlock } from "../ui/SectionBlock";
import { BulletList } from "../ui/BulletList";
import { ComparisonTable } from "../ui/ComparisonTable";
import { Callout } from "../ui/Callout";

export const Chapter06b = () => (
  <>
    <SectionBlock>
      <p>Most crypto marketers think the job is to get attention. In institutional marketing, the job is to build enough trust that the right person at the right company puts you on a shortlist you never knew existed.</p>
      <p>That is a completely different assignment. Here is how the process actually works, grounded in what the companies building for institutions are hiring for right now.</p>
    </SectionBlock>

    <SectionBlock title="Stage 1: The Problem Comes Before the Product">
      <p>Nobody at a bank wakes up and decides to evaluate custody providers. The process starts when a problem becomes too expensive to ignore.</p>
      <BulletList items={[
        "For a treasury team evaluating Trovata or Dakota, the problem is usually operational. Manual reconciliation is eating too much time. Cash visibility across multiple accounts is broken. The CFO wants a report that takes three days to produce to take three hours instead.",
        "For a compliance team evaluating Notabene or TaxBit, the problem is regulatory. A new Travel Rule requirement has landed. CARF reporting is now mandatory. The existing process cannot scale to meet it and the audit is in four months.",
        "For a digital assets team evaluating Fireblocks or Chainlink, the problem is infrastructure. They have approval to move into digital assets but no secure, auditable way to hold or move them.",
      ]} />
      <Callout variant="tip">
        The first job of institutional marketing is not to sell the product. It is to be present when the problem is being defined. The company whose research report a compliance officer reads three months before their audit is already trusted. The company who cold emails them the week before is not.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Stage 2: The Quiet Evaluation">
      <p>Before a single sales conversation happens, the buyer is already researching. They are reading your blog, watching your webinars, forwarding your white papers to colleagues, and checking whether analysts have cited your work.</p>
      <BulletList items={[
        "Allium's job description makes this explicit: they need someone who can produce content that gets forwarded to decision-makers and shapes how institutions think about on-chain data. Not content that gets liked — content that gets forwarded internally before anyone on your sales team knows the evaluation is happening.",
        "RWA.xyz is cited by Goldman Sachs, J.P. Morgan, the US Treasury, and the IMF — not because of advertising, but because their data is the most trusted source in the tokenization market. Trust at that level is built through years of consistent, high-quality, citation-worthy content.",
      ]} />
      <Callout variant="warning">
        This is the stage where most institutional marketing teams underinvest. They put budget into events and paid channels while the actual evaluation is happening in quiet Slack channels and internal email threads they will never see.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Stage 3: Multiple People Have to Say Yes">
      <p>This is where institutional sales gets complicated and where most product marketing falls apart.</p>
      <p>Inside a single bank evaluating Fireblocks, there are at least five people involved in the decision. The head of digital assets wants the solution. The risk and compliance officer has to approve it. The CFO controls the budget. Legal reviews the contract. Technology has to integrate it.</p>
      <p>Each of these people can kill the deal. Each of them has a different primary fear. A single pitch deck that tries to speak to all five of them speaks to none of them properly.</p>
      <BulletList items={[
        "Fireblocks' job descriptions ask for someone who can develop persona-specific content and value propositions that speak to organisations across the financial ecosystem.",
        "The compliance officer version leads with SOC 2 Type II certification, the Ernst and Young audit, and the NCC Group penetration testing.",
        "The CFO version leads with settlement efficiency and cost reduction.",
        "The technology lead version leads with API reliability and integration documentation.",
      ]} />
      <Callout variant="tip">
        This is why institutional marketing requires persona-specific content at every stage. The one-pager for the compliance officer leads with regulatory certifications and audit history. The one-pager for the CFO leads with cost reduction and settlement efficiency. Same product. Different first paragraph.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Stage 4: Trust Signals Do the Heavy Lifting">
      <p>At the validation stage, the buyer has decided they want your product. Now their organisation has to approve it. This is where most deals slow down and where the right content either accelerates or kills the timeline.</p>
      <p>Institutions do not buy from companies they do not trust. Trust in institutional markets is not built through advertising or social proof from retail users. It is built through a specific set of signals:</p>
      <BulletList items={[
        "Regulatory credentials and compliance certifications",
        "Named clients that include the buyer's peers",
        "Third-party audits from firms like Ernst & Young or NCC Group",
        "Analyst citations and industry recognition",
        "Quality of thought leadership published consistently over time",
      ]} />
      <p>A compliance officer who has read three well-researched pieces from your company over six months trusts you before your sales team ever calls them. A compliance officer who receives a cold LinkedIn message with no prior exposure does not trust you and will not respond.</p>
      <BulletList items={[
        "Chainlink's marketing team is specifically tasked with building content for capital markets audiences — the most risk-averse buyers in institutional finance.",
        "Blockstream's Director of Enterprise Marketing is specifically tasked with establishing Blockstream as a trusted partner for enterprise Bitcoin adoption. Not the most featured product. The most trusted one.",
      ]} />
      <Callout variant="quote">
        The content strategy for institutional marketing is not about reach. It is about depth of engagement with the right people.
      </Callout>
    </SectionBlock>

    <SectionBlock title="Stage 5: Post-Purchase Is Where the Next Deal Starts">
      <p>Most institutional marketing teams treat the signed contract as the finish line. The companies winning in this space treat it as the starting line for the next deal.</p>
      <BulletList items={[
        "Ondo Finance's growth marketing role is specifically focused on post-purchase adoption and retention — driving partner success and ecosystem expansion after the initial deployment.",
        "Institutional buyers talk to each other. A head of digital assets at one bank talks to their equivalent at three other banks. A risk officer who deployed Fireblocks successfully tells their counterpart at another institution.",
        "The case study from a successful deployment at one named client is worth more than any advertising budget because it reaches the next buyer through a channel you cannot buy: peer trust.",
        "LayerZero's institutional marketing hire is tasked with producing content that gets forwarded by friends still in traditional finance. That is the metric. Not impressions. Not engagement rate.",
      ]} />
    </SectionBlock>

    <SectionBlock title="What This Means for Your Content Strategy">
      <BulletList items={[
        "Most of the work happens before the sales team gets involved. Awareness content, research reports, thought leadership, and conference presence are not soft brand activities — they are pipeline activities.",
        "The sales cycle is 6–18 months from first content exposure to signed contract. Your metrics cannot be monthly. Track six-month content-to-meeting rates and how long after first content engagement deals are typically closing.",
        "The quality bar is higher than anything else in marketing. A white paper with a factual error about a regulatory framework does not just underperform — it actively damages the trust you have been building for months.",
        "A LinkedIn post that gets 50 impressions from five heads of digital assets at target accounts is worth more than a post that gets 5,000 impressions from retail crypto holders.",
      ]} />
      <Callout variant="insight">
        Marketing that does not connect to revenue is decoration. Track post-to-meeting. Track content-to-opportunity. Track which piece of content a prospect last engaged with before they booked a call.
      </Callout>
    </SectionBlock>

    <SectionBlock title="The Five Stages at a Glance">
      <ComparisonTable
        headers={["Stage", "What the Buyer Is Doing", "What Marketing Is Responsible For"]}
        rows={[
          ["Problem Recognition", "Identifying an internal pain point", "Thought leadership and research that names the problem before pitching the solution"],
          ["Quiet Evaluation", "Researching options without telling anyone", "Content that gets forwarded internally — white papers, analyst citations, peer references"],
          ["Multi-Stakeholder Review", "Five different people with five different fears", "Persona-specific content for each buyer — different first paragraph every time"],
          ["Validation & Approval", "Proving to the organisation that the risk is acceptable", "Security certifications, audit reports, named client lists, regulatory framework documents"],
          ["Post-Purchase", "Deploying and measuring outcomes", "Case studies, co-authored research, reference programmes that turn clients into the next deal"],
        ]}
      />
    </SectionBlock>
  </>
);
