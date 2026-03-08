import { SectionBlock } from "../ui/SectionBlock";
import { QuizSection } from "../ui/QuizSection";

export const Chapter12 = () => (
  <>
    <SectionBlock>
      <p>These are the questions you should be able to answer before walking into an institutional marketing interview or client meeting.</p>
    </SectionBlock>

    <QuizSection
      title="Understanding the Buyer"
      questions={[
        { question: "Name three reasons why a bank's compliance officer would reject a crypto infrastructure product. What content would you create to address each one?", hint: "Think AML/KYC gaps, regulatory uncertainty, and lack of audit trails. Match each with a specific content type: regulatory FAQ, compliance documentation pack, and third-party audit report." },
        { question: "A CFO at a fintech asks: 'Why should we use this instead of continuing to use SWIFT?' Write a one-paragraph response with no crypto jargon.", hint: "Focus on settlement speed, cost reduction, and audit trail improvements. Avoid words like 'blockchain,' 'decentralized,' or 'token.'" },
        { question: "An investment team wants to know if your data is reliable enough to cite in an LP report. What three things would you show them?", hint: "SOC 2 certification, named institutional clients already using the data, and auditable methodology documentation." },
        { question: "Using the DWF Ventures framework (privacy, compliance, composability), which gap does your product primarily solve? How would you make that the centre of your messaging?", hint: "Pick one gap and build your entire positioning statement around the outcome it delivers for the specific buyer persona." },
      ]}
    />

    <QuizSection
      title="Messaging"
      questions={[
        { question: "Rewrite this headline in institutional-grade language: 'The fastest decentralized staking protocol in DeFi.'", hint: "Think outcomes, not features. What does 'fast staking' actually mean for a treasury team or asset manager? Lead with the benefit." },
        { question: "A competitor just published a research report on tokenized assets that is getting traction with your target audience. What is your response strategy?", hint: "Consider publishing a counter-narrative, citing your own data, or creating a more specific piece aimed at a narrower buyer persona." },
        { question: "You are at Sibos with one minute to explain your company to a head of digital assets at a G-SIB bank. What do you say?", hint: "Lead with a named client, the specific problem you solve, and one measurable outcome. No technical architecture." },
        { question: "A prospect says 'we already have Bloomberg for data.' How do you position your on-chain data product against that objection?", hint: "Position as additive, not replacement. 'Everything Bloomberg does for TradFi data, plus the on-chain layer Bloomberg cannot cover.'" },
      ]}
    />

    <QuizSection
      title="Content and Metrics"
      questions={[
        { question: "You have budget for one piece of content that will be used for the next 12 months. What do you make and why?", hint: "A research report with original data, third-party citations, and a clear thesis. It can be cited, forwarded, and used by sales across every stage." },
        { question: "A sales rep says 'I keep losing deals at the compliance review stage.' What content do you build and how do you measure whether it works?", hint: "Build a compliance documentation pack and regulatory FAQ. Measure by tracking how often it is shared in deal threads and whether compliance-stage conversion improves." },
        { question: "A VP of Sales asks you to justify the marketing budget at the end of Q3. What four metrics do you present?", hint: "Marketing-sourced pipeline, marketing-influenced pipeline, content-to-meeting conversion rate, and target account engagement depth." },
      ]}
    />

    <QuizSection
      title="Sales Cycle"
      questions={[
        { question: "A prospect engaged with your white paper three months ago but has not booked a demo. What does your next 90-day nurture sequence look like?", hint: "Send a case study relevant to their role, invite to a webinar, share a regulatory explainer, and then offer a private briefing. Do not push for a demo until they signal readiness." },
        { question: "Deals are consistently stalling at the internal approval stage after the pilot. What marketing asset would you create to fix this?", hint: "A board-ready one-pager with pilot results, ROI model, named reference clients, and risk mitigation documentation." },
        { question: "A new head of digital assets just joined one of your target accounts. They do not know your company. Walk through the first 60 days of your marketing approach to that account.", hint: "LinkedIn connection and thought leadership exposure (days 1-14), share a relevant research report (days 15-30), invite to a private roundtable or webinar (days 30-45), offer a private briefing (days 45-60)." },
      ]}
    />
  </>
);
