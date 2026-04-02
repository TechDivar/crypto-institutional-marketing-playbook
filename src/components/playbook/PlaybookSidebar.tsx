import { chapters } from "@/data/playbook-data";
import { Link } from "react-router-dom";
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
      <button onClick={onGoHome} className="p-5 border-b border-sidebar-border text-left hover:bg-sidebar-accent/50 transition-colors w-full flex items-center gap-3">
        <img src={logo} alt="Web3talez" className="w-9 h-9 rounded-xl" />
        <div>
          <h2 className="text-sm font-extrabold gradient-text">Web3talez</h2>
          <p className="text-[10px] text-muted-foreground mt-0.5">Web3 marketing made simple 💜</p>
        </div>
      </button>

      {/* Chapter list */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <Link
          to="/about"
          className="w-full text-left px-3 py-2.5 rounded-lg mb-2 transition-all duration-200 flex items-center gap-3 text-sidebar-foreground hover:bg-sidebar-accent/40 hover:text-sidebar-accent-foreground"
        >
          <img src={logo} alt="Web3talez" className="shrink-0 w-6 h-6 rounded-md" />
          <span className="text-[13px] font-medium leading-snug">About Web3talez</span>
        </Link>
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground px-3 mb-3 font-bold">Chapters</p>
        {chapters.map((ch) => (
          <button
            key={ch.id}
            onClick={() => onSelectChapter(ch.id)}
            className={cn(
              "w-full text-left px-3 py-2.5 rounded-lg mb-0.5 transition-all duration-200 group",
              activeChapter === ch.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/40 hover:text-sidebar-accent-foreground"
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold mt-0.5 transition-colors",
                  activeChapter === ch.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                )}
              >
                {ch.id}
              </span>
              <span className="text-[13px] font-medium leading-snug">{ch.title}</span>
            </div>
          </button>
        ))}
        <button
          onClick={() => onSelectChapter(20)}
          className={cn(
            "w-full text-left px-3 py-2.5 rounded-lg mb-0.5 transition-all duration-200 group mt-3 border-t border-sidebar-border pt-3",
            activeChapter === 20
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent/40 hover:text-sidebar-accent-foreground"
          )}
        >
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold mt-0.5 transition-colors",
                activeChapter === 20
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
              )}
            >
              💜
            </span>
            <span className="text-[13px] font-medium leading-snug">Thanks for Reading</span>
          </div>
        </button>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-3">
        <a
          href="https://web3talez.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center pill-btn bg-primary text-primary-foreground hover:bg-primary/90 text-xs py-2"
        >
          Subscribe to Web3talez 💜
        </a>
        <p className="text-[10px] text-muted-foreground text-center">2026 Edition</p>
      </div>
    </aside>
  );
};
