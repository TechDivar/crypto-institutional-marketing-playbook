import { useState } from "react";
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

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        {/* Stairs */}
        <div className="relative w-[320px] h-[280px]">
          {stairs.map((s, i) => (
            <motion.div
              key={i}
              className="absolute flex items-end"
              style={{
                bottom: i * 44,
                left: i * 40,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
            >
              {/* Step block */}
              <div className="relative">
                <div className={`w-[120px] h-[40px] rounded-md flex items-center justify-center text-xs font-semibold transition-colors duration-300 ${
                  currentStep >= i ? "bg-primary/20 border border-primary/40 text-foreground" : "bg-card border border-border text-muted-foreground"
                }`}>
                  {s.label && <span className="truncate px-2">{s.label}</span>}
                </div>

                {/* Emoji on current step */}
                {currentStep === i && (
                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl"
                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    key={`emoji-${i}`}
                  >
                    {s.emoji}
                  </motion.span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress text */}
        <motion.p
          className="text-sm text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {currentStep < stairs.length - 1 ? "Leveling up..." : "You made it 💜"}
        </motion.p>
      </div>

      {/* Auto-advance steps */}
      <StepAdvancer
        totalSteps={stairs.length}
        currentStep={currentStep}
        onStep={setCurrentStep}
        onComplete={onComplete}
      />
    </motion.div>
  );
};

const StepAdvancer = ({
  totalSteps,
  currentStep,
  onStep,
  onComplete,
}: {
  totalSteps: number;
  currentStep: number;
  onStep: (s: number) => void;
  onComplete: () => void;
}) => {
  useState(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= totalSteps) {
        clearInterval(interval);
        setTimeout(onComplete, 600);
      } else {
        onStep(step);
      }
    }, 500);
    return () => clearInterval(interval);
  });
  return null;
};

export const PlaybookHero = ({ onStart }: PlaybookHeroProps) => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <StairAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
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
      </div>
    </>
  );
};