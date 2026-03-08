import { SectionBlock } from "../ui/SectionBlock";
import { JobMarketCharts } from "../charts/JobMarketCharts";
import { Callout } from "../ui/Callout";

export const ChapterJobMarket = () => (
  <>
    <SectionBlock>
      <p>
        We analyzed 18 institutional marketing job descriptions from companies like Chainlink, 
        Fireblocks, Ondo Finance, Paxos, and more to understand what the market actually wants.
      </p>
    </SectionBlock>

    <SectionBlock title="The Data Behind the Jobs">
      <JobMarketCharts />
    </SectionBlock>

    <SectionBlock title="Key Takeaways">
      <Callout emoji="💡">
        <strong>GTM Strategy</strong> and <strong>Content Marketing</strong> are the most demanded skills. 
        B2B SaaS background is preferred over crypto-native experience. Salaries range from $130K to $203K 
        depending on company and seniority.
      </Callout>
    </SectionBlock>
  </>
);
