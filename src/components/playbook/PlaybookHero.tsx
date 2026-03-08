import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/web3talez-logo.jpg";

interface PlaybookHeroProps {
  onStart: () => void;
}

const companies = [
  "Chainlink", "Allium", "TaxBit", "Trovata", "Notabene",
  "Ledger", "Dakota", "LayerZero", "Ondo Finance", "Fireblocks",
  "Keyrock", "Dune", "RWA.xyz", "Blockstream", "Twinstake",
  "Figure", "Robinhood", "Artemis"
];

const stairs = [
  { step: 0, emoji: "🚶", label: "" },
  { step: 1, emoji: "🏃", label: "Community Manager" },
  { step: 2, emoji: "📝", label: "Content Lead" },
  { step: 3, emoji: "📊", label: "Growth Marketer" },
  { step: 4, emoji: "🎯", label: "Product Marketing" },
  { step: 5, emoji: "🏛️", label: "Institutional PMM" },
];

const StairAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= stairs.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1400);
      } else {
        setCurrentStep(step);
      }
    }, 650);
    return () => clearInterval(interval);
  }, [onComplete]);

  const isFinished = currentStep === stairs.length - 1;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden px-6"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[min(600px,90vw)] aspect-square rounded-full blur-[120px] sm:blur-[180px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(260 80% 65% / 0.18), transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            background: `hsl(${260 + Math.random() * 60} 70% 65%)`,
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
        />
      ))}

      {/* Title */}
      <motion.p
        className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6 sm:mb-8 font-bold"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Your career path
      </motion.p>

      {/* Vertical step tower — fully responsive */}
      <div className="flex flex-col-reverse items-center gap-2 sm:gap-3 relative">
        {stairs.map((s, i) => {
          const isActive = currentStep === i;
          const isPast = currentStep > i;
          const isReached = currentStep >= i;

          return (
            <motion.div
              key={i}
              className="relative flex items-center gap-3"
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* Step number */}
              {i > 0 && (
                <motion.div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-black shrink-0 transition-all duration-300 ${
                    isReached
                      ? "bg-primary/25 text-foreground border border-primary/50"
                      : "bg-card border border-border/30 text-muted-foreground/30"
                  }`}
                  animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {i}
                </motion.div>
              )}

              {/* Step block */}
              <motion.div
                className={`w-[180px] sm:w-[220px] h-[44px] sm:h-[50px] rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-400 ${
                  isReached
                    ? "border text-foreground"
                    : "bg-card/40 border border-border/40 text-muted-foreground/40"
                }`}
                style={isReached ? {
                  background: `linear-gradient(135deg, hsl(260 80% 65% / ${isActive ? 0.2 : 0.1}), hsl(330 80% 60% / ${isActive ? 0.1 : 0.04}))`,
                  borderColor: `hsl(260 80% 65% / ${isActive ? 0.8 : 0.3})`,
                  boxShadow: isActive
                    ? "0 0 25px hsl(260 80% 65% / 0.3), 0 0 50px hsl(260 80% 65% / 0.1)"
                    : isPast
                    ? "0 0 10px hsl(260 80% 65% / 0.08)"
                    : "none",
                } : {}}
                animate={isActive ? { scale: [1, 1.06, 1.02] } : {}}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {s.label ? (
                  <span className="truncate px-3">{s.label}</span>
                ) : (
                  <span className="text-muted-foreground/30 text-xs">Start</span>
                )}
              </motion.div>

              {/* Active emoji */}
              {isActive && (
                <motion.span
                  className="text-2xl sm:text-3xl shrink-0"
                  style={{
                    filter: "drop-shadow(0 0 12px hsl(260 80% 65% / 0.5))",
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -4, 0] }}
                  transition={{
                    opacity: { duration: 0.15 },
                    scale: { type: "spring", stiffness: 400, damping: 12 },
                    y: { duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                  }}
                  key={`emoji-${i}`}
                >
                  {s.emoji}
                </motion.span>
              )}

              {/* Glow line between steps */}
              {isPast && i < stairs.length - 1 && (
                <motion.div
                  className="absolute -top-2 sm:-top-3 left-[14px] sm:left-[16px] w-[2px] h-2 sm:h-3 rounded-full"
                  style={{ background: "linear-gradient(to top, hsl(260 80% 65% / 0.4), transparent)" }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          );
        })}

        {/* Celebration at top */}
        {isFinished && (
          <>
            {/* Ring burst */}
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2"
              style={{ borderColor: "hsl(260 80% 65% / 0.6)" }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 5, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Confetti */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const dist = 50 + Math.random() * 60;
              return (
                <motion.div
                  key={`c-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: 4 + Math.random() * 6,
                    height: 4 + Math.random() * 6,
                    top: 0,
                    left: "50%",
                    background: `hsl(${200 + i * 25} 80% ${55 + Math.random() * 15}%)`,
                  }}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{
                    opacity: [1, 1, 0],
                    scale: [0, 1.2, 0.4],
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    rotate: Math.random() * 540,
                  }}
                  transition={{ duration: 0.8, delay: i * 0.02, ease: "easeOut" }}
                />
              );
            })}

            {/* Crown */}
            <motion.span
              className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl"
              initial={{ opacity: 0, y: 15, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: [0, 1.3, 1] }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              👑
            </motion.span>
          </>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-36 sm:w-48 h-1 bg-border/30 rounded-full mt-8 sm:mt-10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(260 80% 65%), hsl(330 80% 60%))" }}
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / (stairs.length - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Status text */}
      <div className="mt-4 sm:mt-5 h-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentStep}
            className="text-sm text-muted-foreground font-semibold text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {currentStep === 0 && "Starting the grind..."}
            {currentStep === 1 && "Building the community 🔥"}
            {currentStep === 2 && "Sharpening the pen ✍️"}
            {currentStep === 3 && "Numbers don't lie 📈"}
            {currentStep === 4 && "Almost there..."}
            {currentStep === stairs.length - 1 && "You made it 💜"}
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
            className="w-20 h-20 rounded-2xl mx-auto mb-10"
          />

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
            What the job descriptions actually want, decoded for marketers who mean business.
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
              Subscribe to Newsletter
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
