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

const backgroundsData = [
  { background: "B2B SaaS", percentage: 35 },
  { background: "TradFi / Banking", percentage: 28 },
  { background: "Fintech", percentage: 20 },
  { background: "Crypto Native", percentage: 12 },
];

const experienceData = [
  { range: "2–4 years", percentage: 17 },
  { range: "5–6 years", percentage: 28 },
  { range: "7–8 years", percentage: 17 },
  { range: "10+ years", percentage: 17 },
  { range: "Not specified", percentage: 22 },
];

const workModelData = [
  { model: "Remote", percentage: 54 },
  { model: "Office / On-site", percentage: 31 },
  { model: "Hybrid", percentage: 15 },
];

const toolsData = [
  { tool: "SQL", count: 3 },
  { tool: "Snowflake", count: 3 },
  { tool: "AI Tools (ChatGPT/Claude)", count: 3 },
  { tool: "HubSpot", count: 2 },
  { tool: "Salesforce", count: 2 },
  { tool: "Google Analytics", count: 2 },
  { tool: "Amplitude / Mixpanel", count: 2 },
  { tool: "Ahrefs / SEO Tools", count: 1 },
  { tool: "BigQuery", count: 1 },
  { tool: "Databricks", count: 1 },
];

const PRIMARY_COLOR = "hsl(280, 100%, 70%)";
const SECONDARY_COLOR = "hsl(220, 90%, 65%)";
const TERTIARY_COLOR = "hsl(160, 70%, 50%)";

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
    <h3 className="text-lg font-semibold text-foreground mb-4">Compensation Estimate</h3>
    <p className="text-sm text-muted-foreground mb-6">Based on published salary data from institutional marketing job postings</p>
    <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
      <div className="text-center">
        <p className="text-3xl font-bold text-primary mb-2">$120K – $210K</p>
        <p className="text-sm text-muted-foreground">Annual base salary range</p>
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

export const ExperienceLevelChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Experience Level Required</h3>
    <p className="text-sm text-muted-foreground mb-6">Percentage of 18 job descriptions requiring each experience range</p>
    <div className="h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={experienceData} margin={{ left: 10, right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `${value}%`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value: number) => [`${value}%`, "Percentage"]}
          />
          <Bar dataKey="percentage" fill={SECONDARY_COLOR} radius={[4, 4, 0, 0]}
            label={{ position: 'top', fill: 'hsl(var(--muted-foreground))', fontSize: 12, formatter: (value: number) => `${value}%` }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const WorkModelChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Work Model Breakdown</h3>
    <p className="text-sm text-muted-foreground mb-6">Remote vs Hybrid vs Office across 13 job descriptions</p>
    <div className="h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={workModelData} layout="vertical" margin={{ left: 20, right: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis
            dataKey="model" type="category" width={120}
            stroke="hsl(var(--muted-foreground))" fontSize={12}
            tickLine={false} axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value: number) => [`${value} companies`, "Count"]}
          />
          <Bar dataKey="count" fill={TERTIARY_COLOR} radius={[0, 4, 4, 0]}
            label={{ position: 'right', fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const ToolsPlatformsChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Most Mentioned Tools & Platforms</h3>
    <p className="text-sm text-muted-foreground mb-6">Tools and platforms mentioned across job descriptions</p>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={toolsData} layout="vertical" margin={{ left: 20, right: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis
            dataKey="tool" type="category" width={170}
            stroke="hsl(var(--muted-foreground))" fontSize={12}
            tickLine={false} axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value: number) => [`${value} mentions`, "Frequency"]}
          />
          <Bar dataKey="count" fill={PRIMARY_COLOR} radius={[0, 4, 4, 0]}
            label={{ position: 'right', fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
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
      <ExperienceLevelChart />
    </div>
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <WorkModelChart />
    </div>
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <ToolsPlatformsChart />
    </div>
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <CompensationChart />
    </div>
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <BackgroundsChart />
    </div>
  </div>
);
