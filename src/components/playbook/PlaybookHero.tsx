import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/web3talez-logo.jpg";

interface PlaybookHeroProps {
  onStart: () => void;
}

export const PlaybookHero = ({ onStart }: PlaybookHeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated decorative blobs */}
      <div className="absolute top-16 left-10 w-40 h-40 bg-butter/30 animate-blob blur-[40px] pointer-events-none" />
      <div className="absolute top-32 right-16 w-52 h-52 bg-lavender/20 animate-blob blur-[50px] pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-1/4 w-44 h-44 bg-peach/20 animate-blob blur-[45px] pointer-events-none" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-mint/20 animate-blob blur-[35px] pointer-events-none" style={{ animationDelay: "6s" }} />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-28 right-24 w-12 h-12 rounded-2xl bg-butter/40 rotate-12 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-48 left-20 w-8 h-8 rounded-full bg-peach/40 hidden lg:block"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-10 h-10 rounded-xl bg-mint/30 -rotate-6 hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [-6, -12, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-56 left-32 w-6 h-6 rounded-lg bg-lavender/40 rotate-45 hidden lg:block"
        animate={{ y: [0, -8, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center max-w-2xl relative z-10"
      >
        {/* Logo with bounce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 12 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="Web3talez"
            className="w-24 h-24 rounded-3xl shadow-xl ring-4 ring-butter/30 mx-auto"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border soft-shadow mb-8"
        >
          <Sparkles className="w-4 h-4 text-butter" />
          <span className="text-sm font-semibold text-muted-foreground">2026 Edition</span>
        </motion.div>

        {/* Headline with stagger */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="gradient-text">The Crypto Institutional</span>
          <br />
          <span className="text-foreground">Marketing Playbook</span>
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground mb-4 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          What the job descriptions actually want, decoded for marketers who mean business.
        </motion.p>

        <motion.p
          className="text-sm text-muted-foreground/60 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          By Ivy | <span className="gradient-text font-bold">Web3talez</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStart}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold rounded-2xl hover:bg-foreground/90 transition-colors soft-shadow text-base"
          >
            Start Reading
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://web3talez.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-butter text-foreground font-bold rounded-2xl hover:bg-butter/80 transition-colors soft-shadow text-base"
          >
            Subscribe 💜
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { label: "Chapters", value: "13", bg: "bg-lavender/15", color: "text-primary" },
            { label: "Companies", value: "18", bg: "bg-mint/15", color: "text-success" },
            { label: "Personas", value: "5", bg: "bg-butter/20", color: "text-accent-foreground" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3, scale: 1.02 }}
              className={`clay-card p-5 ${stat.bg}`}
            >
              <p className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};