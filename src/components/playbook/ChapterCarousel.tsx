import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { chapters } from "@/data/playbook-data";
import { ArrowRight } from "lucide-react";

interface ChapterCarouselProps {
  onSelectChapter: (id: number) => void;
}

const chapterEmojis: Record<number, string> = {
  1: "🏛️", 2: "🔐", 3: "🎯", 4: "📍", 5: "📝", 6: "🧠", 7: "🔄",
  8: "⚠️", 9: "💬", 10: "🚀", 11: "📊", 12: "💼", 13: "✅", 14: "📖",
};

export const ChapterCarousel = ({ onSelectChapter }: ChapterCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let speed = 0.5;

    const scroll = () => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += speed;
      }
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);

    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(scroll); };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Double the items for seamless loop
  const items = [...chapters, ...chapters];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-semibold text-center">
        What's inside
      </p>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-hidden py-2 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((ch, i) => (
          <button
            key={`${ch.id}-${i}`}
            onClick={() => onSelectChapter(ch.id)}
            className="shrink-0 w-56 group"
          >
            <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 h-full text-left transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{chapterEmojis[ch.id] || "📄"}</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  Ch. {String(ch.id).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm font-bold text-foreground leading-snug mb-1 line-clamp-2">
                {ch.title}
              </p>
              {ch.subtitle && (
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                  {ch.subtitle}
                </p>
              )}
              <div className="flex items-center gap-1 mt-3 text-[10px] text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Read chapter <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
