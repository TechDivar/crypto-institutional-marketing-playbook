import { Check, X } from "lucide-react";

interface DosDontsCardProps {
  wrong: string;
  right: string;
}

export const DosDontsCard = ({ wrong, right }: DosDontsCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      <div className="rounded-xl border border-destructive/15 bg-destructive/5 p-4">
        <div className="flex items-center gap-2 mb-2">
          <X className="w-4 h-4 text-destructive" />
          <span className="text-xs font-bold uppercase tracking-wider text-destructive">Wrong</span>
        </div>
        <p className="text-sm text-foreground/85">{wrong}</p>
      </div>
      <div className="rounded-xl border border-success/15 bg-success/5 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-4 h-4 text-success" />
          <span className="text-xs font-bold uppercase tracking-wider text-success">Right</span>
        </div>
        <p className="text-sm text-foreground/75">{right}</p>
      </div>
    </div>
  );
};