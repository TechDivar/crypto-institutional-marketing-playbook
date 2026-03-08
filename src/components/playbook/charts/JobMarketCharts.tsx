import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
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

const compensationData = [
  { company: "Chainlink", min: 154, max: 203 },
  { company: "Fireblocks", min: 155, max: 185 },
  { company: "Ondo Finance", min: 165, max: 200 },
  { company: "Paxos", min: 170, max: 195 },
  { company: "Figure", min: 150, max: 175 },
  { company: "Blockstream", min: 140, max: 170 },
  { company: "TaxBit", min: 145, max: 180 },
  { company: "Allium", min: 130, max: 160 },
];

const backgroundsData = [
  { background: "B2B SaaS", percentage: 35 },
  { background: "TradFi / Banking", percentage: 28 },
  { background: "Fintech", percentage: 20 },
  { background: "Crypto Native", percentage: 12 },
  { background: "Enterprise Tech", percentage: 5 },
];

const CHART_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--secondary))",
];

export const SkillsDemandChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Most In-Demand Skills</h3>
    <p className="text-sm text-muted-foreground mb-6">Based on analysis of 18 institutional marketing job descriptions</p>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={skillsData} layout="vertical" margin={{ left: 20, right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis 
            dataKey="skill" 
            type="category" 
            width={120} 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickLine={false}
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
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {skillsData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const CompensationChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Compensation Ranges by Company</h3>
    <p className="text-sm text-muted-foreground mb-6">Annual base salary ranges in thousands (USD)</p>
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={compensationData} margin={{ left: 10, right: 30, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="company" 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={11}
            angle={-45}
            textAnchor="end"
            interval={0}
            height={80}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickFormatter={(value) => `$${value}K`}
            domain={[100, 220]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value: number, name: string) => [
              `$${value}K`,
              name === "min" ? "Minimum" : "Maximum",
            ]}
          />
          <Bar dataKey="min" fill="hsl(var(--secondary))" name="min" radius={[4, 4, 0, 0]} />
          <Bar dataKey="max" fill="hsl(var(--primary))" name="max" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="flex justify-center gap-6 mt-4 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-secondary" />
        <span className="text-muted-foreground">Minimum</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-primary" />
        <span className="text-muted-foreground">Maximum</span>
      </div>
    </div>
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
            fill="hsl(var(--primary))" 
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
