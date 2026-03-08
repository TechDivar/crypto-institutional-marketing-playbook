import { chapters } from "@/data/playbook-data";
import { cn } from "@/lib/utils";

interface PlaybookSidebarProps {
  activeChapter: number | null;
  onSelectChapter: (id: number) => void;
  onGoHome: () => void;
  isOpen: boolean;
}

export const PlaybookSidebar = ({ activeChapter, onSelectChapter, isOpen }: PlaybookSidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-screen w-72 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Brand */}
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="font-display text-lg font-bold gradient-text">Web3talez</h2>
        <p className="text-xs text-muted-foreground mt-1">Web3 marketing made simple 💜</p>
      </div>

      {/* Chapter list */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 mb-3 font-semibold">Chapters</p>
        {chapters.map((ch) => (
          <button
            key={ch.id}
            onClick={() => onSelectChapter(ch.id)}
            className={cn(
              "w-full text-left px-3 py-2.5 rounded-lg mb-1 transition-all duration-200 group",
              activeChapter === ch.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold mt-0.5 transition-colors",
                  activeChapter === ch.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                )}
              >
                {ch.id}
              </span>
              <span className="text-sm font-medium leading-snug">{ch.title}</span>
            </div>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-[10px] text-muted-foreground text-center">2026 Edition | By Ivy</p>
      </div>
    </aside>
  );
};
