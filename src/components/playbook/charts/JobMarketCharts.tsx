import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const skillsData = [
  { skill: "GTM Strategy", count: 14 },
  { skill: "Content Marketing", count: 12 },
  { skill: "Product Positioning", count: 11 },
  { skill: "Sales Enablement", count: 10 },
  { skill: "Event Marketing", count: 9 },
  { skill: "Demand Generation", count: 8 },
  { skill: "Research & Reports", count: 7 },
  { skill: "ABM", count: 6 },
  { skill: "PR & Comms", count: 5 },
  { skill: "Partnership Marketing", count: 4 },
];

// Estimated salary ranges based on role seniority and market data
const compensationData = [
  { role: "Fireblocks – PMM Director", range: "$180K – $240K", min: 180, max: 240 },
  { role: "Ledger – Enterprise Marketing Dir", range: "$175K – $230K", min: 175, max: 230 },
  { role: "Dakota – Head of Marketing", range: "$170K – $220K", min: 170, max: 220 },
  { role: "TaxBit – Principal PMM", range: "$180K – $210K", min: 180, max: 210 },
  { role: "Chainlink – Sr PMM, Web3", range: "$150K – $200K", min: 150, max: 200 },
  { role: "Ondo – Growth Marketing Lead", range: "$140K – $180K", min: 140, max: 180 },
  { role: "LayerZero – Vertical MM", range: "$130K – $170K", min: 130, max: 170 },
  { role: "Dune – PMM Enterprise Data", range: "$130K – $165K", min: 130, max: 165 },
  { role: "Trovata – Sr Content Marketing", range: "$120K – $160K", min: 120, max: 160 },
  { role: "Artemis – GTM Associate", range: "$90K – $130K", min: 90, max: 130 },
];

const backgroundsData = [
  { background: "B2B SaaS", percentage: 35 },
  { background: "TradFi / Banking", percentage: 28 },
  { background: "Fintech", percentage: 20 },
  { background: "Crypto Native", percentage: 12 },
  { background: "Enterprise Tech", percentage: 5 },
];

const PRIMARY_COLOR = "hsl(280, 100%, 70%)";

export const SkillsDemandChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Most In-Demand Skills</h3>
    <p className="text-sm text-muted-foreground mb-6">Based on analysis of 18 institutional marketing job descriptions</p>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={skillsData} layout="vertical" margin={{ left: 20, right: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis 
            dataKey="skill" 
            type="category" 
            width={130} 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value: number) => [`${value} job listings`, "Frequency"]}
          />
          <Bar 
            dataKey="count" 
            fill={PRIMARY_COLOR} 
            radius={[0, 4, 4, 0]}
            label={{ 
              position: 'right', 
              fill: 'hsl(var(--muted-foreground))', 
              fontSize: 12 
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const CompensationChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Compensation Ranges</h3>
    <p className="text-sm text-muted-foreground mb-4">Crypto/institutional roles with published salary ranges (USD)</p>
    <div className="space-y-4">
      {compensationData.map((item) => (
        <div key={item.role} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-foreground">{item.role}</span>
            <span className="text-primary font-medium">{item.range}</span>
          </div>
          <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full"
              style={{
                marginLeft: `${((item.min - 100) / 120) * 100}%`,
                width: `${((item.max - item.min) / 120) * 100}%`,
                backgroundColor: PRIMARY_COLOR,
              }}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-between text-xs text-muted-foreground pt-2">
        <span>$100K</span>
        <span>$150K</span>
        <span>$200K</span>
        <span>$220K</span>
      </div>
    </div>
    <p className="text-xs text-muted-foreground mt-6 italic">
      Note: Most institutional crypto roles (Chainlink, Fireblocks, Ondo, Ledger, Allium, Artemis, LayerZero, Dakota, Dune) list "competitive salary" without publishing specific ranges.
    </p>
  </div>
);

export const BackgroundsChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Preferred Industry Backgrounds</h3>
    <p className="text-sm text-muted-foreground mb-6">Percentage of job listings mentioning each background as preferred</p>
    <div className="h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={backgroundsData} layout="vertical" margin={{ left: 20, right: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
          <XAxis 
            type="number"
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 40]}
          />
          <YAxis 
            dataKey="background" 
            type="category"
            width={110}
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value: number) => [`${value}%`, "Preference"]}
          />
          <Bar 
            dataKey="percentage" 
            fill={PRIMARY_COLOR}
            radius={[0, 4, 4, 0]}
            label={{ 
              position: 'right', 
              fill: 'hsl(var(--muted-foreground))', 
              fontSize: 12,
              formatter: (value: number) => `${value}%`
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const JobMarketCharts = () => (
  <div className="space-y-12">
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <SkillsDemandChart />
    </div>
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <CompensationChart />
    </div>
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <BackgroundsChart />
    </div>
  </div>
);
