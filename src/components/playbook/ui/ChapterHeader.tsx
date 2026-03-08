import { motion } from "framer-motion";
import { chapters } from "@/data/playbook-data";

interface ChapterHeaderProps {
  chapterId: number;
}

const chapterBadgeColors = [
  "bg-lavender/15 text-primary", "bg-butter/20 text-accent-foreground", "bg-peach/15 text-destructive",
  "bg-mint/15 text-success", "bg-lavender/15 text-primary", "bg-butter/20 text-accent-foreground",
  "bg-peach/15 text-destructive", "bg-mint/15 text-success", "bg-lavender/15 text-primary",
  "bg-butter/20 text-accent-foreground", "bg-peach/15 text-destructive", "bg-mint/15 text-success",
  "bg-lavender/15 text-primary",
];

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
      <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold mb-4 ${chapterBadgeColors[(chapterId - 1) % chapterBadgeColors.length]}`}>
        Chapter {String(chapter.id).padStart(2, "0")}
      </span>
      <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground mb-3 leading-tight">
        {chapter.title}
      </h1>
      {chapter.subtitle && (
        <p className="text-lg text-muted-foreground">{chapter.subtitle}</p>
      )}
      <div className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-lavender/40 via-butter/40 to-transparent" />
    </motion.div>
  );
};