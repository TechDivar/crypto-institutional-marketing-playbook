import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/web3talez-logo.jpg";

interface PlaybookHeroProps {
  onStart: () => void;
}

const companies = [
  "Chainlink", "Allium", "TaxBit", "Trovada", "Notabene",
  "Ledger", "Dakota", "LayerZero", "Ondo Finance", "Fireblocks",
  "Keyrock", "Dune", "RWA.xyz", "Blockstream", "Twinstake",
  "Figure", "Robinhood", "Artemis"
];

const flipCards = [
  { emoji: "🏢", big: "18", label: "Companies Analyzed" },
  { emoji: "📖", big: "13", label: "Chapters Deep" },
  { emoji: "🎭", big: "5", label: "Buyer Personas" },
  { emoji: "🎯", big: "PMM", label: "The Role Everyone Wants" },
  { emoji: "💜", big: "Ready?", label: "Let's go." },
];

const CardFlipAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentCard < flipCards.length - 1) {
        setCurrentCard((c) => c + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 700);
        }, 1200);
      }
    }, 1100);
    return () => clearInterval(timer);
  }, [currentCard, onComplete]);

  const card = flipCards[currentCard];

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden px-6"
      animate={isExiting ? { opacity: 0, scale: 1.08 } : {}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[min(500px,85vw)] aspect-square rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)" }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtitle */}
      <motion.p
        className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        The Institutional Marketing Playbook
      </motion.p>

      {/* Flip Card */}
      <div className="relative w-[260px] sm:w-[300px] h-[320px] sm:h-[360px] perspective-[1000px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard}
            className="absolute inset-0 rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-4 p-8"
            style={{
              background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--card) / 0.6))",
              boxShadow: "0 20px 60px -15px hsl(var(--primary) / 0.15), 0 0 40px hsl(var(--primary) / 0.05)",
            }}
            initial={{ rotateY: 90, opacity: 0, scale: 0.85 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: -90, opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Emoji */}
            <motion.span
              className="text-5xl sm:text-6xl"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            >
              {card.emoji}
            </motion.span>

            {/* Big number/text */}
            <motion.p
              className="text-5xl sm:text-6xl font-black text-foreground tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
            >
              {card.big}
            </motion.p>

            {/* Label */}
            <motion.p
              className="text-sm sm:text-base text-muted-foreground font-semibold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              {card.label}
            </motion.p>

            {/* Corner accent */}
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/40" />
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-primary/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 mt-8">
        {flipCards.map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i <= currentCard
                ? "hsl(var(--primary))"
                : "hsl(var(--border))",
            }}
            animate={i === currentCard ? { scale: [1, 1.4, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Status text */}
      <div className="mt-5 h-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentCard}
            className="text-xs text-muted-foreground/60 font-medium"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {currentCard + 1} / {flipCards.length}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
export const PlaybookHero = ({ onStart }: PlaybookHeroProps) => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <StairAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none"
          animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[hsl(330_80%_65%/0.06)] rounded-full blur-[100px] pointer-events-none"
          animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0], scale: [1, 0.85, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 30 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-3xl relative z-10"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Web3talez"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: showIntro ? 0 : 1, scale: showIntro ? 0.8 : 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 14 }}
            className="w-14 h-14 rounded-full mx-auto mb-3"
          />
          <motion.p
            className="text-sm text-muted-foreground mb-10 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: showIntro ? 0 : 1 }}
            transition={{ delay: 0.35 }}
          >
            Web3 marketing made simple 💜
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-foreground">The Crypto</span>
            <br />
            <span className="gradient-text">Institutional Marketing</span>
            <br />
            <span className="text-foreground">Playbook</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: showIntro ? 0 : 1 }}
            transition={{ delay: 0.55 }}
          >
            What the job descriptions actually want — decoded for marketers who mean business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 10 : 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onStart}
              className="pill-btn bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2"
            >
              Start Reading
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://web3talez.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn border border-border text-foreground hover:bg-card"
            >
              Subscribe to Web3talez
            </motion.a>
          </motion.div>

          {/* Companies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showIntro ? 0 : 1 }}
            transition={{ delay: 0.85 }}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 font-semibold">
              Real roles analyzed from 18 companies
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {companies.map((company, i) => (
                <motion.span
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showIntro ? 0 : 1 }}
                  transition={{ delay: 0.9 + i * 0.03 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors cursor-default"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Insight card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 15 : 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ y: -2 }}
            className="clay-card p-5 text-left max-w-sm mx-auto"
          >
            <p className="text-sm font-bold text-foreground mb-1">📊 PMM is the new hot title</p>
            <p className="text-xs text-muted-foreground leading-relaxed">Almost every company on this list is hiring a "Product Marketing Manager." Community manager era is over.</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: showIntro ? 0 : 1 }}
            transition={{ delay: 1.4 }}
          >
            {[
              { value: "13", label: "Chapters" },
              { value: "18", label: "Companies" },
              { value: "5", label: "Personas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>}
    </>
  );
};
