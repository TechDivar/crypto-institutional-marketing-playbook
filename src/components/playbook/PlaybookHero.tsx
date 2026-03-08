import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import logo from "@/assets/web3talez-logo.jpg";

interface PlaybookHeroProps {
  onStart: () => void;
}

export const PlaybookHero = ({ onStart }: PlaybookHeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/60 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.img
          src={logo}
          alt="Web3talez"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-24 h-24 rounded-3xl shadow-lg ring-4 ring-primary/10 mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card soft-shadow mb-8"
        >
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">2026 Edition</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal leading-tight mb-6">
          <span className="gradient-text">The Crypto Institutional</span>
          <br />
          <span className="text-foreground">Marketing Playbook</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-4 max-w-lg mx-auto leading-relaxed font-body">
          What the job descriptions actually want, decoded for marketers who mean business.
        </p>

        <p className="text-sm text-muted-foreground/70 mb-10 font-body">
          By Ivy | <span className="gradient-text font-semibold">Web3talez</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-body font-semibold rounded-2xl hover:bg-foreground/90 transition-all soft-shadow"
          >
            Start Reading
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://web3talez.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary font-body font-semibold rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Subscribe to Newsletter
          </motion.a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            { label: "Chapters", value: "13", color: "text-primary" },
            { label: "Companies Analyzed", value: "18", color: "text-success" },
            { label: "Buyer Personas", value: "5", color: "text-warning" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="clay-card p-4"
            >
              <p className={`text-3xl font-display ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-body font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};