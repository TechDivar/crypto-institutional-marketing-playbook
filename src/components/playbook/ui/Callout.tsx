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
  info: "bg-lavender/10 border-lavender/30",
  warning: "bg-butter/15 border-butter/40",
  tip: "bg-mint/10 border-mint/30",
  quote: "bg-peach/10 border-peach/30",
};

const iconBg: Record<CalloutVariant, string> = {
  info: "bg-lavender/20 text-primary",
  warning: "bg-butter/25 text-warning",
  tip: "bg-mint/20 text-success",
  quote: "bg-peach/20 text-primary",
};

export const Callout = ({ variant = "info", children, source }: CalloutProps) => {
  const Icon = icons[variant];
  return (
    <div className={cn("my-6 rounded-2xl p-5 border", styles[variant])}>
      <div className="flex gap-3">
        <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", iconBg[variant])}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="text-sm leading-relaxed text-foreground/80 pt-1.5">
          {children}
          {source && <p className="text-xs text-muted-foreground mt-2 italic">{source}</p>}
        </div>
      </div>
    </div>
  );
};