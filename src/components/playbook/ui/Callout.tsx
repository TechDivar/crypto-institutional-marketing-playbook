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

export const Callout = ({ variant = "info", children, source }: CalloutProps) => {
  const Icon = icons[variant];
  return (
    <div
      className={cn(
        "my-6 rounded-xl p-5 border-l-4",
        variant === "info" && "bg-callout border-callout-border",
        variant === "warning" && "bg-warning/5 border-warning",
        variant === "tip" && "bg-success/5 border-success",
        variant === "quote" && "bg-card border-primary/40"
      )}
    >
      <div className="flex gap-3">
        <Icon
          className={cn(
            "w-5 h-5 shrink-0 mt-0.5",
            variant === "info" && "text-primary",
            variant === "warning" && "text-warning",
            variant === "tip" && "text-success",
            variant === "quote" && "text-primary"
          )}
        />
        <div className="text-sm leading-relaxed text-foreground/90">
          {children}
          {source && <p className="text-xs text-muted-foreground mt-2 italic">{source}</p>}
        </div>
      </div>
    </div>
  );
};
