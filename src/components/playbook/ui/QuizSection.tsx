import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  question: string;
  hint?: string;
}

interface QuizSectionProps {
  title: string;
  questions: QuizQuestion[];
}

export const QuizSection = ({ title, questions }: QuizSectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="my-6">
      <h3 className="font-bold text-lg text-foreground mb-4">{title}</h3>
      <div className="space-y-2">
        {questions.map((q, i) => (
          <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
            <button
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="w-full text-left px-4 py-3 flex items-start justify-between gap-3 hover:bg-muted/30 transition-colors"
            >
              <span className="text-sm text-foreground/85 leading-relaxed">
                <span className="text-primary font-bold mr-2">{i + 1}.</span>
                {q.question}
              </span>
              {q.hint && (
                expandedIndex === i
                  ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
              )}
            </button>
            {q.hint && expandedIndex === i && (
              <div className={cn("px-4 pb-3 text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-3 mx-4 mb-2")}>
                {q.hint}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};