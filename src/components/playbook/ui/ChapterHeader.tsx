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
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3 font-display">
        Chapter {String(chapter.id).padStart(2, "0")}
      </p>
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
        {chapter.title}
      </h1>
      {chapter.subtitle && (
        <p className="text-lg text-muted-foreground">{chapter.subtitle}</p>
      )}
      <div className="mt-6 h-px bg-gradient-to-r from-primary/40 via-border to-transparent" />
    </motion.div>
  );
};
