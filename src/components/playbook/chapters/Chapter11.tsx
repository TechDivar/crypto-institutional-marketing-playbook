import { SectionBlock } from "../ui/SectionBlock";
import { ComparisonTable } from "../ui/ComparisonTable";
import { BulletList } from "../ui/BulletList";
import { DosDontsCard } from "../ui/DosDontsCard";

export const Chapter11 = () => (
  <>
    <SectionBlock>
      <p>Every job description is asking for some combination of three things: someone who understands institutional buyers deeply, someone who can translate complex technology into clear outcomes, and someone who can execute across content, events, and sales enablement simultaneously.</p>
    </SectionBlock>

    <SectionBlock title="What Each Background Gives You">
      <ComparisonTable
        headers={["Your Background", "What You Already Have", "What You Need to Build"]}
        rows={[
          ["Consumer crypto marketing", "Crypto fluency, community instincts, social expertise", "Enterprise sales cycle experience, TradFi language, regulatory knowledge"],
          ["B2B SaaS marketing", "Sales cycle understanding, pipeline thinking, content strategy", "Crypto/blockchain knowledge, regulatory fluency, institutional buyer understanding"],
          ["Traditional finance (TradFi)", "Deep buyer understanding, regulatory knowledge, institutional credibility", "Crypto technical literacy, DeFi product understanding, Web3 content skills"],
          ["Journalism / content", "Writing quality, research skills, narrative thinking", "Product marketing instincts, sales enablement experience, metrics orientation"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="What Your Portfolio Needs to Show">
      <BulletList items={[
        "One research report or long-form piece aimed at a TradFi audience, not a crypto-native one.",
        "A case study that includes named outcomes, even a small project counts.",
        "Evidence that you understand the sales cycle: a content map, an email sequence, or a launch plan.",
        "Metrics: what happened after the content? Did it generate pipeline, attendees, or press coverage?",
      ]} />
    </SectionBlock>

    <SectionBlock title="How to Talk About Yourself in the Interview">
      <DosDontsCard
        wrong="'I have been in crypto since 2019 and understand the ecosystem deeply'"
        right="'I have built marketing programs for products sold to risk officers and compliance teams at financial institutions'"
      />
      <DosDontsCard
        wrong="'I grew a Discord community to 50,000 members'"
        right="'I built a content program that generated 40% of qualified pipeline for a B2B product with a 9-month sales cycle'"
      />
    </SectionBlock>
  </>
);
