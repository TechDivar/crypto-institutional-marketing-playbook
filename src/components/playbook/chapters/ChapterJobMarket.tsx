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

  </>
);
