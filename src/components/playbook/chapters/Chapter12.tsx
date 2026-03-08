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
        { question: "Name three reasons why a bank's compliance officer would reject a crypto infrastructure product. What content would you create to address each one?", hint: "Compliance officers kill deals over three things: messy AML/KYC coverage, unclear regulatory positioning, and no audit trail. For each one, you need a different weapon — a regulatory FAQ that preempts their questions, a compliance pack they can hand to legal, and a third-party audit they didn't have to ask for." },
        { question: "A CFO at a fintech asks: 'Why should we use this instead of continuing to use SWIFT?' Write a one-paragraph response with no crypto jargon.", hint: "Here's the trick: don't say 'blockchain' once. Talk about what they actually care about — settling faster, paying less per transaction, and having a cleaner audit trail. If your answer sounds like a white paper, you've already lost them." },
        { question: "An investment team wants to know if your data is reliable enough to cite in an LP report. What three things would you show them?", hint: "They're not asking 'is your data good?' — they're asking 'will I look stupid if I cite this?' Show them a SOC 2 cert, name-drop the institutions already using it, and hand them the methodology doc so their analyst can tear it apart and find nothing wrong." },
        { question: "Using the DWF Ventures framework (privacy, compliance, composability), which gap does your product primarily solve? How would you make that the centre of your messaging?", hint: "Pick one. Just one. If you try to solve all three in your messaging, you solve none. Build your entire pitch around the single outcome that matters most to the person across the table." },
      ]}
    />

    <QuizSection
      title="Messaging"
      questions={[
        { question: "Rewrite this headline in institutional-grade language: 'The fastest decentralized staking protocol in DeFi.'", hint: "Nobody in a boardroom cares that you're 'the fastest.' They care what fast means for them. Does it reduce settlement time? Lower operational overhead? Start with the outcome a treasury team actually loses sleep over." },
        { question: "A competitor just published a research report on tokenized assets that is getting traction with your target audience. What is your response strategy?", hint: "Don't panic-publish a 'me too' report. Go narrower. If they went broad on tokenized assets, you go deep on one vertical — tokenized treasuries for regional banks, or whatever your data actually supports. The one who owns the niche wins the deal." },
        { question: "You are at Sibos with one minute to explain your company to a head of digital assets at a G-SIB bank. What do you say?", hint: "You have 60 seconds, so don't waste 45 of them on architecture. Lead with a name they recognise ('We work with [client]'), the problem you solve in one sentence, and one number that proves it. Then shut up and let them ask questions." },
        { question: "A prospect says 'we already have Bloomberg for data.' How do you position your on-chain data product against that objection?", hint: "Never compete with Bloomberg — you'll lose that fight every time. Instead, position yourself as the layer Bloomberg literally cannot provide. 'Bloomberg covers TradFi. We cover the on-chain activity they can't see. Together, you have the full picture.'" },
      ]}
    />

    <QuizSection
      title="Content and Metrics"
      questions={[
        { question: "You have budget for one piece of content that will be used for the next 12 months. What do you make and why?", hint: "A research report with original data. Not a blog post, not an infographic. Something a sales rep can attach to every email, a prospect can forward to their boss, and a journalist can cite. One great report outlasts 50 LinkedIn posts." },
        { question: "A sales rep says 'I keep losing deals at the compliance review stage.' What content do you build and how do you measure whether it works?", hint: "Build the thing compliance officers wish they had: a documentation pack that answers their questions before they ask. Then track it — is it showing up in deal threads? Are compliance-stage deals converting faster? If not, your pack isn't good enough yet." },
        { question: "A VP of Sales asks you to justify the marketing budget at the end of Q3. What four metrics do you present?", hint: "Don't show them impressions. Show them: pipeline marketing created, pipeline marketing influenced, how many content touches turned into meetings, and how deeply your target accounts are engaging. That's the language a VP of Sales actually speaks." },
      ]}
    />

    <QuizSection
      title="Sales Cycle"
      questions={[
        { question: "A prospect engaged with your white paper three months ago but has not booked a demo. What does your next 90-day nurture sequence look like?", hint: "They're interested but not ready — don't push them. Send something useful to their specific role (a case study, not a product update). Invite them to something low-commitment like a webinar. Share a regulatory piece that makes them look smart internally. Only then offer a private briefing. Patience wins these deals." },
        { question: "Deals are consistently stalling at the internal approval stage after the pilot. What marketing asset would you create to fix this?", hint: "The person who ran the pilot believes in you. The problem is their boss doesn't have enough to say yes. Build a board-ready one-pager: pilot results, ROI model, reference clients, and risk mitigation. Make it so clean their CFO can approve it in one meeting." },
        { question: "A new head of digital assets just joined one of your target accounts. They do not know your company. Walk through the first 60 days of your marketing approach to that account.", hint: "Week one, connect on LinkedIn and make sure your thought leadership shows up in their feed. By week three, share a research report that's relevant to their new role — not a sales pitch. Around day 30-45, invite them to a private roundtable where they'll meet peers. Only after they've seen your thinking do you offer a one-on-one briefing. Earn attention before you ask for time." },
      ]}
    />
  </>
);
