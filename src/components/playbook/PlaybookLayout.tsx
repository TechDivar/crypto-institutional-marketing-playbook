import { useState } from "react";
import { chapters } from "@/data/playbook-data";
import { PlaybookSidebar } from "./PlaybookSidebar";
import { PlaybookHero } from "./PlaybookHero";
import { ChapterRenderer } from "./ChapterRenderer";
import { Menu, X } from "lucide-react";

export const PlaybookLayout = () => {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-card border border-border soft-shadow lg:hidden"
      >
        {sidebarOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      {/* Sidebar */}
      <PlaybookSidebar
        activeChapter={activeChapter}
        onSelectChapter={(id) => {
          setActiveChapter(id);
          setSidebarOpen(false);
        }}
        onGoHome={() => {
          setActiveChapter(null);
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
      />

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/10 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-72 min-h-screen">
        {activeChapter === null ? (
          <PlaybookHero onStart={() => setActiveChapter(1)} />
        ) : (
          <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
            <ChapterRenderer
              chapterId={activeChapter}
              onNavigate={setActiveChapter}
              totalChapters={chapters.length}
            />
          </div>
        )}
      </main>
    </div>
  );
};