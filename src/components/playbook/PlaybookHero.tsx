import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

interface PlaybookHeroProps {
  onStart: () => void;
}

export const PlaybookHero = ({ onStart }: PlaybookHeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8"
        >
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">2026 Edition</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
          <span className="gradient-text">The Crypto Institutional</span>
          <br />
          <span className="text-foreground">Marketing Playbook</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-4 max-w-lg mx-auto leading-relaxed">
          What the job descriptions actually want, decoded for marketers who mean business.
        </p>

        <p className="text-sm text-muted-foreground/70 mb-10">
          By Ivy | <span className="gradient-text font-semibold">Web3talez</span>
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-xl hover:brightness-110 transition-all glow-border"
        >
          Start Reading
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            { label: "Chapters", value: "13" },
            { label: "Companies Analyzed", value: "18" },
            { label: "Buyer Personas", value: "5" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
