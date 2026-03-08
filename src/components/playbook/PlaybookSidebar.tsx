import { chapters } from "@/data/playbook-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/web3talez-logo.jpg";

interface PlaybookSidebarProps {
  activeChapter: number | null;
  onSelectChapter: (id: number) => void;
  onGoHome: () => void;
  isOpen: boolean;
}

export const PlaybookSidebar = ({ activeChapter, onSelectChapter, onGoHome, isOpen }: PlaybookSidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-screen w-72 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Brand */}
      <button onClick={onGoHome} className="p-5 border-b border-sidebar-border text-left hover:bg-accent/50 transition-colors w-full flex items-center gap-3">
        <img src={logo} alt="Web3talez" className="w-10 h-10 rounded-xl soft-shadow" />
        <div>
          <h2 className="font-display text-lg gradient-text">Web3talez</h2>
          <p className="text-[11px] text-muted-foreground mt-0.5 font-body">Web3 marketing made simple 💜</p>
        </div>
      </button>

      {/* Chapter list */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 mb-3 font-semibold font-body">Chapters</p>
        {chapters.map((ch) => (
          <button
            key={ch.id}
            onClick={() => onSelectChapter(ch.id)}
            className={cn(
              "w-full text-left px-3 py-2.5 rounded-xl mb-1 transition-all duration-200 group",
              activeChapter === ch.id
                ? "bg-accent text-accent-foreground soft-shadow"
                : "text-sidebar-foreground hover:bg-accent/50 hover:text-accent-foreground"
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 transition-colors font-body",
                  activeChapter === ch.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary"
                )}
              >
                {ch.id}
              </span>
              <span className="text-sm font-medium leading-snug font-body">{ch.title}</span>
            </div>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-3">
        <a
          href="https://web3talez.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-4 py-2.5 bg-foreground text-background font-body font-semibold text-sm rounded-xl hover:bg-foreground/90 transition-all soft-shadow"
        >
          Subscribe ✨
        </a>
        <p className="text-[10px] text-muted-foreground text-center font-body">2026 Edition | By Ivy</p>
      </div>
    </aside>
  );
};