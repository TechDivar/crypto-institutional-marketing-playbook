import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionBlockProps {
  title?: string;
  children: ReactNode;
}

export const SectionBlock = ({ title, children }: SectionBlockProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      {title && (
        <h2 className="text-xl font-display font-semibold text-foreground mb-4">{title}</h2>
      )}
      <div className="text-sm leading-relaxed text-foreground/80 space-y-4">{children}</div>
    </motion.section>
  );
};
