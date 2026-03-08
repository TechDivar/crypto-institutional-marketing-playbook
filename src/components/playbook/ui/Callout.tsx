import { cn } from "@/lib/utils";
import { Info, AlertTriangle, Lightbulb, Quote } from "lucide-react";
import { type ReactNode } from "react";

type CalloutVariant = "info" | "warning" | "tip" | "quote";

interface CalloutProps {
  variant?: CalloutVariant;
  children: ReactNode;
  source?: string;
}

const icons: Record<CalloutVariant, typeof Info> = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  quote: Quote,
};

const styles: Record<CalloutVariant, string> = {
  info: "bg-primary/5 border-primary/20",
  warning: "bg-warning/5 border-warning/20",
  tip: "bg-success/5 border-success/20",
  quote: "bg-card border-border",
};

const iconStyles: Record<CalloutVariant, string> = {
  info: "text-primary",
  warning: "text-warning",
  tip: "text-success",
  quote: "text-primary",
};

export const Callout = ({ variant = "info", children, source }: CalloutProps) => {
  const Icon = icons[variant];
  return (
    <div className={cn("my-6 rounded-xl p-5 border", styles[variant])}>
      <div className="flex gap-3">
        <Icon className={cn("w-5 h-5 shrink-0 mt-0.5", iconStyles[variant])} />
        <div className="text-sm leading-relaxed text-foreground/80">
          {children}
          {source && <p className="text-xs text-muted-foreground mt-2 italic">{source}</p>}
        </div>
      </div>
    </div>
  );
};