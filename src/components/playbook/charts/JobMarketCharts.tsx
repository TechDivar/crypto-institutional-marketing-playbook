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
  { skill: "GTM Strategy", count: 18 },
  { skill: "Product Positioning", count: 16 },
  { skill: "Content Marketing", count: 16 },
  { skill: "Sales Enablement", count: 14 },
  { skill: "Demand Generation", count: 10 },
  { skill: "Event Marketing", count: 10 },
  { skill: "Research & Reports", count: 9 },
  { skill: "ABM", count: 6 },
  { skill: "PR & Comms", count: 6 },
  { skill: "Partnership Marketing", count: 4 },
];

const backgroundsData = [
  { background: "B2B SaaS", percentage: 33 },
  { background: "TradFi / Banking", percentage: 26 },
  { background: "Fintech", percentage: 24 },
  { background: "Crypto Native", percentage: 13 },
];

const experienceData = [
  { range: "2–4 years", percentage: 26 },
  { range: "5–6 years", percentage: 22 },
  { range: "7–8 years", percentage: 17 },
  { range: "10+ years", percentage: 13 },
];

const workModelData = [
  { model: "Remote", percentage: 57 },
  { model: "Hybrid", percentage: 22 },
  { model: "Office / On-site", percentage: 21 },
];

const toolsData = [
  { tool: "AI Tools (ChatGPT/Claude)", percentage: 22 },
  { tool: "SQL", percentage: 17 },
  { tool: "Snowflake", percentage: 17 },
  { tool: "HubSpot", percentage: 13 },
  { tool: "Salesforce", percentage: 13 },
  { tool: "Google Analytics", percentage: 11 },
  { tool: "Amplitude / Mixpanel", percentage: 11 },
  { tool: "Ahrefs / SEO Tools", percentage: 9 },
  { tool: "BigQuery", percentage: 6 },
  { tool: "Databricks", percentage: 6 },
];

const PRIMARY_COLOR = "hsl(280, 100%, 70%)";
const SECONDARY_COLOR = "hsl(220, 90%, 65%)";
const TERTIARY_COLOR = "hsl(160, 70%, 50%)";

export const SkillsDemandChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Most In-Demand Skills</h3>
    <p className="text-sm text-muted-foreground mb-6">Based on analysis of job descriptions from 22 institutional companies</p>
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
        <p className="text-3xl font-bold text-primary mb-2">$100K – $230K</p>
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
    <p className="text-sm text-muted-foreground mb-6">Percentage of job descriptions from 22 companies requiring each experience range</p>
    <div className="h-[320px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={experienceData} margin={{ left: 10, right: 30, bottom: 20, top: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-30} textAnchor="end" interval={0} height={50} />
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
    <p className="text-sm text-muted-foreground mb-6">Remote vs Hybrid vs Office across 22 companies</p>
    <div className="h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={workModelData} layout="vertical" margin={{ left: 20, right: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `${value}%`} domain={[0, 60]} />
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
            formatter={(value: number) => [`${value}%`, "Percentage"]}
          />
          <Bar dataKey="percentage" fill={TERTIARY_COLOR} radius={[0, 4, 4, 0]}
            label={{ position: 'right', fill: 'hsl(var(--muted-foreground))', fontSize: 12, formatter: (value: number) => `${value}%` }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const ToolsPlatformsChart = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold text-foreground mb-4">Most Mentioned Tools & Platforms</h3>
    <p className="text-sm text-muted-foreground mb-6">Percentage of job descriptions from 22 companies mentioning each tool</p>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={toolsData} layout="vertical" margin={{ left: 20, right: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `${value}%`} />
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
            formatter={(value: number) => [`${value}%`, "Percentage"]}
          />
          <Bar dataKey="percentage" fill={PRIMARY_COLOR} radius={[0, 4, 4, 0]}
            label={{ position: 'right', fill: 'hsl(var(--muted-foreground))', fontSize: 12, formatter: (value: number) => `${value}%` }}
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
