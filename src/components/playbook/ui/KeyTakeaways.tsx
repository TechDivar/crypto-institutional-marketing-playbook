import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";

interface KeyTakeawaysProps {
  items: string[];
}

export const KeyTakeaways = ({ items }: KeyTakeawaysProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4 }}
    className="mt-12 mb-8 rounded-xl border border-primary/20 bg-primary/5 overflow-hidden"
  >
    <div className="h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/60" />
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bookmark className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Key Takeaways</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[15px] text-foreground/85 leading-relaxed">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/50 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);
