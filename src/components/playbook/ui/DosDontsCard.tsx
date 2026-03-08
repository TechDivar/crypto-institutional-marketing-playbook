import { Check, X } from "lucide-react";

interface DosDontsCardProps {
  wrong: string;
  right: string;
}

export const DosDontsCard = ({ wrong, right }: DosDontsCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      <div className="rounded-2xl border border-peach/30 bg-peach/8 p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center">
            <X className="w-3.5 h-3.5 text-destructive" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-destructive">Wrong</span>
        </div>
        <p className="text-sm text-foreground/80">{wrong}</p>
      </div>
      <div className="rounded-2xl border border-mint/30 bg-mint/8 p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-success/10 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-success" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-success">Right</span>
        </div>
        <p className="text-sm text-foreground/80">{right}</p>
      </div>
    </div>
  );
};