import { SectionBlock } from "../ui/SectionBlock";
import { ComparisonTable } from "../ui/ComparisonTable";
import { BulletList } from "../ui/BulletList";

export const Chapter04 = () => (
  <>
    <SectionBlock>
      <p>Institutional buyers do not discover new tools through Twitter threads or influencer partnerships. They discover them through trusted channels that signal legitimacy.</p>
    </SectionBlock>

    <SectionBlock title="Events and Conferences">
      <p>Every single job description mentions events. Events are where institutional buyers build trust before they build a commercial relationship. The deal often starts at a dinner or a private roundtable, not at an online sign-up form.</p>
      <ComparisonTable
        headers={["Event", "Who Attends", "Best For"]}
        rows={[
          ["Sibos (SWIFT Annual)", "Bank operations heads, payments executives, central bank reps", "Settlement, payments, stablecoin infrastructure"],
          ["Consensus (Austin)", "Broad crypto industry, press, investors", "Awareness, narrative-setting, press announcements"],
          ["Point Zero Forum (Zurich)", "Central bankers, financial regulators, BIS reps", "Compliance-first products, CBDC infrastructure"],
          ["TOKEN2049", "Crypto-native institutional buyers, digital asset funds", "DeFi infrastructure, RWA products"],
          ["Money 20/20", "Fintech executives, payments leaders, banks", "Stablecoin payments, treasury products"],
          ["FIA Expo (Chicago)", "Derivatives traders, clearing houses, futures exchanges", "Derivatives, structured products, tokenized assets"],
          ["SALT Conference", "Hedge funds, asset managers, alternative investment community", "Institutional DeFi, yield products, RWA opportunities"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="How to Actually Work an Institutional Event">
      <p><strong>Before the event (4 to 6 weeks out):</strong></p>
      <BulletList items={[
        "Identify 15 to 20 target people you need to meet using the attendee list or LinkedIn.",
        "Book side meetings before you arrive. The best conversations happen in private rooms.",
        "Prepare a physical leave-behind that a senior executive would keep rather than throw away.",
        "Brief your executives with one clear narrative for every buyer type.",
      ]} />
      <p><strong>At the event:</strong></p>
      <BulletList items={[
        "Lead every conversation with a question, not a pitch.",
        "Host a private dinner for 8 to 12 people from your target accounts.",
        "Get on a panel only if you can say something genuinely non-generic.",
        "Collect context, not just business cards. Write down what specific problem they mentioned.",
      ]} />
      <p><strong>After the event:</strong></p>
      <BulletList items={[
        "Send personalised follow-ups within 48 hours referencing the specific conversation.",
        "Share a post-event insight piece on LinkedIn within a week.",
        "Enter every meaningful contact into your CRM with tags for the problem mentioned.",
      ]} />
    </SectionBlock>

    <SectionBlock title="Key Channels Summary">
      <ComparisonTable
        headers={["Channel", "What It Does"]}
        rows={[
          ["Industry conferences", "First awareness, trust signals, deal starters"],
          ["LinkedIn (executive)", "Background checks, credibility validation"],
          ["Analyst reports and research citations", "Third-party validation, the most trusted signal"],
          ["Email / CRM nurture", "Long-cycle relationship building"],
          ["Webinars and virtual events", "Education and pipeline warming"],
          ["Private roundtables", "Highest-trust conversations, large deals"],
          ["Trade press", "Industry credibility and visibility"],
        ]}
      />
    </SectionBlock>
  </>
);
