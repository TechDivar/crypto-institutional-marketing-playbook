import { motion } from "framer-motion";
import { chapters } from "@/data/playbook-data";

interface ChapterHeaderProps {
  chapterId: number;
}

export const ChapterHeader = ({ chapterId }: ChapterHeaderProps) => {
  const chapter = chapters.find((c) => c.id === chapterId);
  if (!chapter) return null;

  return (
    <motion.div
      key={chapterId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold font-body mb-4">
        Chapter {String(chapter.id).padStart(2, "0")}
      </span>
      <h1 className="text-3xl sm:text-4xl font-display text-foreground mb-3">
        {chapter.title}
      </h1>
      {chapter.subtitle && (
        <p className="text-lg text-muted-foreground font-body">{chapter.subtitle}</p>
      )}
      <div className="mt-6 h-px bg-border" />
    </motion.div>
  );
};