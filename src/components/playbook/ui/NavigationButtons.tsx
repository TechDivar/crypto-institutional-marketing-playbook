import { ArrowLeft, ArrowRight } from "lucide-react";
import { chapters } from "@/data/playbook-data";

interface NavigationButtonsProps {
  chapterId: number;
  onNavigate: (id: number) => void;
  totalChapters: number;
}

export const NavigationButtons = ({ chapterId, onNavigate, totalChapters }: NavigationButtonsProps) => {
  const prevChapter = chapterId > 1 ? chapters.find((c) => c.id === chapterId - 1) : null;
  const nextChapter = chapterId < totalChapters ? chapters.find((c) => c.id === chapterId + 1) : null;
  const isLastChapter = chapterId === totalChapters;

  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
      {prevChapter ? (
        <button
          onClick={() => { onNavigate(prevChapter.id); window.scrollTo(0, 0); }}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline font-medium">{prevChapter.title}</span>
          <span className="sm:hidden font-medium">Previous</span>
        </button>
      ) : (
        <div />
      )}
      {nextChapter ? (
        <button
          onClick={() => { onNavigate(nextChapter.id); window.scrollTo(0, 0); }}
          className="pill-btn bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2 text-sm"
        >
          <span className="hidden sm:inline">{nextChapter.title}</span>
          <span className="sm:hidden">Next</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};