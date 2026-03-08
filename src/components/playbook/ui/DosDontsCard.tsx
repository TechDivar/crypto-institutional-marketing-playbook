import { Check, X } from "lucide-react";

interface DosDontsCardProps {
  wrong: string;
  right: string;
}

export const DosDontsCard = ({ wrong, right }: DosDontsCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      <div className="rounded-2xl border border-destructive/15 bg-destructive/5 p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-destructive/10 flex items-center justify-center">
            <X className="w-3.5 h-3.5 text-destructive" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-destructive font-body">Wrong</span>
        </div>
        <p className="text-sm text-foreground/80 font-body">{wrong}</p>
      </div>
      <div className="rounded-2xl border border-success/15 bg-success/5 p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-success" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-success font-body">Right</span>
        </div>
        <p className="text-sm text-foreground/80 font-body">{right}</p>
      </div>
    </div>
  );
};