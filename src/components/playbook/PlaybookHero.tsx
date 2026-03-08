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
  const [shake, setShake] = useState(false);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= stairs.length) {
        clearInterval(interval);
        setShake(true);
        setTimeout(() => setShake(false), 400);
        setTimeout(onComplete, 1200);
      } else {
        setCurrentStep(step);
        // Mini shake on each landing
        setShake(true);
        setTimeout(() => setShake(false), 150);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Multiple ambient glows */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(260 80% 65% / 0.2), transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(330 80% 60% / 0.12), transparent 70%)" }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles in background */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bg-particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            background: `hsl(${260 + Math.random() * 60} 70% ${60 + Math.random() * 20}%)`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="flex flex-col items-center"
        animate={shake ? { x: [0, -3, 3, -2, 2, 0], y: [0, -2, 0] } : {}}
        transition={{ duration: 0.15 }}
      >
        {/* Title above stairs */}
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-6 sm:mb-10 font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your career path
        </motion.p>

        {/* Stairs with perspective — wrapper clips to scaled size */}
        <div className="relative overflow-visible" style={{ width: 'min(460px, 80vw)', height: 'min(400px, 55vh)' }}>
          <div className="absolute left-1/2 top-1/2 w-[460px] h-[400px] -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-75 md:scale-100" style={{ perspective: "800px" }}>
          <motion.div
            style={{ transformStyle: "preserve-3d", rotateX: "5deg", rotateY: "-5deg" }}
          >
            {stairs.map((s, i) => (
              <motion.div
                key={i}
                className="absolute flex items-end"
                style={{
                  bottom: i * 60,
                  left: i * 55,
                }}
                initial={{ opacity: 0, x: -50, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="relative">
                  {/* Step block with neon glow */}
                  <motion.div
                    className={`w-[170px] h-[52px] rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      currentStep >= i
                        ? "border text-foreground"
                        : "bg-card/50 border border-border/50 text-muted-foreground/50"
                    }`}
                    style={currentStep >= i ? {
                      background: `linear-gradient(135deg, hsl(260 80% 65% / 0.15), hsl(330 80% 60% / 0.08))`,
                      borderColor: `hsl(260 80% 65% / ${currentStep === i ? 0.7 : 0.3})`,
                      boxShadow: currentStep === i
                        ? "0 0 30px hsl(260 80% 65% / 0.3), 0 0 60px hsl(260 80% 65% / 0.1), inset 0 0 20px hsl(260 80% 65% / 0.05)"
                        : "0 0 15px hsl(260 80% 65% / 0.1)",
                    } : {}}
                    animate={currentStep === i ? {
                      scale: [1, 1.08, 1.03],
                      borderColor: [
                        "hsl(260 80% 65% / 0.5)",
                        "hsl(260 80% 65% / 0.9)",
                        "hsl(260 80% 65% / 0.7)",
                      ],
                    } : {}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {s.label && <span className="truncate px-3">{s.label}</span>}
                  </motion.div>

                  {/* Glowing connection line to next step */}
                  {currentStep > i && i < stairs.length - 1 && (
                    <motion.div
                      className="absolute -right-[14px] -top-[18px] w-[2px] h-[30px] rounded-full"
                      style={{
                        background: "linear-gradient(to top, hsl(260 80% 65% / 0.5), transparent)",
                      }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  )}

                  {/* Emoji with bounce + rotation */}
                  {currentStep === i && (
                    <motion.span
                      className="absolute -top-14 left-1/2 -translate-x-1/2 text-4xl"
                      style={{
                        filter: "drop-shadow(0 0 20px hsl(260 80% 65% / 0.6)) drop-shadow(0 0 40px hsl(260 80% 65% / 0.3))",
                      }}
                      initial={{ opacity: 0, y: 30, scale: 0, rotate: -20 }}
                      animate={{ opacity: 1, y: [0, -8, 0], scale: 1, rotate: 0 }}
                      transition={{
                        opacity: { duration: 0.2 },
                        y: { duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                        scale: { type: "spring", stiffness: 500, damping: 10 },
                        rotate: { type: "spring", stiffness: 200, damping: 8 },
                      }}
                      key={`emoji-${i}`}
                    >
                      {s.emoji}
                    </motion.span>
                  )}

                  {/* Step number badge */}
                  {i > 0 && (
                    <motion.div
                      className={`absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${
                        currentStep >= i
                          ? "bg-primary/30 text-foreground border border-primary/50"
                          : "bg-card border border-border/30 text-muted-foreground/30"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                    >
                      {i}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Epic celebration at top */}
          {currentStep === stairs.length - 1 && (
            <>
              {/* Ring burst */}
              <motion.div
                className="absolute rounded-full border-2"
                style={{
                  top: -10,
                  left: 250,
                  width: 40,
                  height: 40,
                  borderColor: "hsl(260 80% 65% / 0.6)",
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="absolute rounded-full border"
                style={{
                  top: -10,
                  left: 250,
                  width: 40,
                  height: 40,
                  borderColor: "hsl(330 80% 60% / 0.4)",
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 6, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              />

              {/* Confetti particles */}
              {[...Array(16)].map((_, i) => {
                const angle = (i / 16) * Math.PI * 2;
                const distance = 80 + Math.random() * 100;
                return (
                  <motion.div
                    key={`confetti-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: 4 + Math.random() * 8,
                      height: 4 + Math.random() * 8,
                      top: -5,
                      left: 265,
                      background: `hsl(${200 + i * 20} 80% ${50 + Math.random() * 20}%)`,
                      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                    }}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [1, 1, 0],
                      scale: [0, 1.5, 0.5],
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance - 30,
                      rotate: Math.random() * 720,
                    }}
                    transition={{ duration: 1, delay: i * 0.02, ease: "easeOut" }}
                  />
                );
              })}

              {/* Crown emoji */}
              <motion.span
                className="absolute text-3xl"
                style={{ top: -60, left: 255 }}
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: [0, 1.3, 1] }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              >
                👑
              </motion.span>
            </>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-32 sm:w-48 h-1 bg-border/30 rounded-full mt-4 sm:mt-10 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(260 80% 65%), hsl(330 80% 60%))",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / (stairs.length - 1)) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Status text */}
        <motion.p
          className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-5 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep === 0 && "Starting the grind..."}
              {currentStep === 1 && "Building the community 🔥"}
              {currentStep === 2 && "Sharpening the pen ✍️"}
              {currentStep === 3 && "Numbers don't lie 📈"}
              {currentStep === 4 && "Almost there..."}
              {currentStep === stairs.length - 1 && "You made it 💜"}
            </motion.span>
          </AnimatePresence>
        </motion.p>
      </motion.div>
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
