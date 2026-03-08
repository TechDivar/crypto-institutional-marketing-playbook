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
  info: "bg-accent border-primary/30",
  warning: "bg-warning/8 border-warning/40",
  tip: "bg-success/8 border-success/40",
  quote: "bg-muted border-primary/20",
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
    <div className={cn("my-6 rounded-2xl p-5 border", styles[variant])}>
      <div className="flex gap-3">
        <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0", variant === "info" ? "bg-primary/10" : variant === "warning" ? "bg-warning/10" : variant === "tip" ? "bg-success/10" : "bg-primary/10")}>
          <Icon className={cn("w-4 h-4", iconStyles[variant])} />
        </div>
        <div className="text-sm leading-relaxed text-foreground/85 font-body pt-1">
          {children}
          {source && <p className="text-xs text-muted-foreground mt-2 italic">{source}</p>}
        </div>
      </div>
    </div>
  );
};