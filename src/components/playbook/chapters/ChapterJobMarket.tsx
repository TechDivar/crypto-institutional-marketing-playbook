import { SectionBlock } from "../ui/SectionBlock";
import { JobMarketCharts } from "../charts/JobMarketCharts";
import { Callout } from "../ui/Callout";

export const ChapterJobMarket = () => (
  <>
    <SectionBlock>
      <p>
        We analyzed real institutional marketing job descriptions from 24 companies — including Chainlink, 
        Fireblocks, Coinbase, Anchorage Digital, Ondo Finance, LayerZero, Dune, Cryptio, Sanctum, SCRYPT, and more — to understand what the market actually wants.
      </p>
    </SectionBlock>

    <SectionBlock title="The Data Behind the Jobs">
      <JobMarketCharts />
    </SectionBlock>

    <SectionBlock title="Key Takeaways">
      <Callout variant="tip">
        <strong>GTM Strategy</strong>, <strong>Product Positioning</strong>, and <strong>Content Marketing</strong> are the most demanded skills. 
        B2B SaaS and Fintech backgrounds are preferred over crypto-native experience. Salaries range from $100K to $230K 
        depending on company and seniority. AI tools are now explicitly required in more roles.
      </Callout>
    </SectionBlock>
  </>
);
