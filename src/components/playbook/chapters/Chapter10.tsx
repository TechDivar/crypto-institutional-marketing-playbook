import { SectionBlock } from "../ui/SectionBlock";
import { ComparisonTable } from "../ui/ComparisonTable";
import { Callout } from "../ui/Callout";
import { BulletList } from "../ui/BulletList";

export const Chapter10 = () => (
  <>
    <SectionBlock>
      <p>In institutional marketing, who engages matters far more than how many. One right person reading the right piece of content at the right moment in a 12-month sales cycle is worth more than ten thousand impressions from the wrong audience.</p>
    </SectionBlock>

    <SectionBlock title="Bucket 1: Pipeline Impact">
      <ComparisonTable
        headers={["Metric", "What It Measures", "Target Benchmark"]}
        rows={[
          ["Marketing-sourced pipeline", "Deals where the buyer's first touchpoint was a marketing asset", "10-20% of total pipeline in year one. 25-40% at maturity."],
          ["Marketing-influenced pipeline", "Deals where a marketing asset appeared anywhere in the deal journey", "50-70% of total pipeline"],
          ["Event-sourced pipeline (90-day lag)", "Pipeline traced back to a specific event conversation within 90 days", "Cut any event where the ratio is worse than 3x spend"],
          ["Content-to-meeting conversion rate", "Percentage of content engagements that convert to a booked meeting within 60 days", "2-5% is realistic for institutional"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="Bucket 2: Content Performance">
      <ComparisonTable
        headers={["Metric", "What It Measures", "What Good Looks Like"]}
        rows={[
          ["Target account engagement rate", "% of ICP accounts engaging with at least one asset in 90 days", "30% or more of your named ICP list"],
          ["Account engagement depth", "Average number of people from same account engaging", "1 contact = noise. 3+ = deal forming. 5+ = buy signal."],
          ["Battle card usage rate", "How often sales uses the materials you built", "If fewer than 60% of reps use an asset regularly, it needs reworking"],
          ["White paper forward rate", "How often content gets forwarded to colleagues", "Even a 5% forward rate signals institutional resonance"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="Bucket 3: Trust Signals">
      <ComparisonTable
        headers={["Metric", "Why It Matters"]}
        rows={[
          ["Analyst and press citations", "One Bloomberg citation is worth more than 100 branded LinkedIn posts"],
          ["Inbound vs. outbound ratio", "A rising inbound rate is the clearest signal thought leadership is working. Target 20-30% at maturity."],
          ["Reference client conversion rate", "High conversion means your reference clients tell a compelling story"],
          ["Executive share of voice", "Track quarterly: are you getting the speaking slots at events that matter?"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="Metrics That Do Not Matter">
      <Callout variant="warning">
        These metrics feel important because they are easy to measure and produce big numbers. But they will not protect your budget, impress your sales team, or close deals with a bank's risk committee.
      </Callout>
      <ComparisonTable
        headers={["Metric", "Why It Does Not Matter"]}
        rows={[
          ["Twitter/X followers", "Institutional buyers are not evaluating vendors on Twitter"],
          ["Discord or Telegram size", "Institutional buyers are not in your Discord"],
          ["Total content downloads", "Downloads without conversion data are noise"],
          ["Email open rates in isolation", "An open without a click or meeting booked is not a signal of intent"],
          ["Generic website traffic", "Traffic only matters if you can identify which target accounts it came from"],
        ]}
      />
    </SectionBlock>

    <SectionBlock title="Setting Up Your KPI Framework (90 Days)">
      <p><strong>Days 1-30:</strong> Audit CRM data, define your ICP account list (50 to 200 accounts), tag all assets with UTM parameters, set up weekly sales/marketing sync.</p>
      <p><strong>Days 31-60:</strong> Track account-level website visits, build a pipeline attribution model, create a content engagement dashboard.</p>
      <p><strong>Days 61-90:</strong> Produce your first pipeline contribution report, identify highest-performing assets, cut any channel not producing results.</p>
    </SectionBlock>
  </>
);
