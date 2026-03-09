import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/web3talez-logo.jpg";


interface PlaybookHeroProps {
  onStart: () => void;
  onSelectChapter: (id: number) => void;
}

const companies = [
  "Chainlink", "Coinbase", "Fireblocks", "Anchorage Digital", "Ondo Finance",
  "LayerZero", "Cryptio", "InMobi", "Allium", "TaxBit",
  "Trovata", "Notabene", "Ledger", "Dakota", "Keyrock",
  "Dune", "RWA.xyz", "Blockstream", "Twinstake", "Figure",
  "Robinhood", "Artemis"
];

const leftItems = [
  { emoji: "🚀", text: "Go viral on Crypto Twitter" },
  { emoji: "💬", text: "Build a Discord community" },
  { emoji: "🎉", text: "Host NFT giveaways" },
  { emoji: "📣", text: "Get KOL shoutouts" },
  { emoji: "🤝", text: "DM influencers" },
];

const rightItems = [
  { emoji: "📊", text: "Risk framework positioning" },
  { emoji: "🏛️", text: "Institutional buyer mapping" },
  { emoji: "📋", text: "Compliance-first messaging" },
  { emoji: "🎯", text: "Product marketing strategy" },
  { emoji: "🔐", text: "Enterprise sales enablement" },
];

const ExpectationRealityAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"split" | "strike" | "merge" | "title">("split");
  const [visibleLeft, setVisibleLeft] = useState(0);
  const [visibleRight, setVisibleRight] = useState(0);

  useEffect(() => {
    // Stagger left items
    const leftTimers = leftItems.map((_, i) =>
      setTimeout(() => setVisibleLeft(i + 1), 300 + i * 400)
    );
    // Stagger right items (slightly delayed)
    const rightTimers = rightItems.map((_, i) =>
      setTimeout(() => setVisibleRight(i + 1), 500 + i * 400)
    );

    // Strike through left side
    const strikeTimer = setTimeout(() => setPhase("strike"), 2800);
    // Merge
    const mergeTimer = setTimeout(() => setPhase("merge"), 4000);
    // Title
    const titleTimer = setTimeout(() => setPhase("title"), 5000);
    // Complete
    const completeTimer = setTimeout(() => onComplete(), 7200);

    return () => {
      [...leftTimers, ...rightTimers].forEach(clearTimeout);
      clearTimeout(strikeTimer);
      clearTimeout(mergeTimer);
      clearTimeout(titleTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const isMerged = phase === "merge" || phase === "title";

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden px-4"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[min(500px,90vw)] aspect-square rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 70%)" }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="w-full max-w-3xl">
        {/* Headers */}
        <motion.div
          className="flex items-center justify-between mb-6 sm:mb-8 px-2"
          animate={isMerged ? { opacity: 0, y: -20 } : {}}
          transition={{ duration: 0.4 }}
        >
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground/60 font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            What you think it is
          </motion.p>
          <motion.div
            className="w-px h-6 bg-border/30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.15em] text-primary font-bold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            What it actually is
          </motion.p>
        </motion.div>

        {/* Split panels */}
        <motion.div
          className="flex gap-3 sm:gap-4"
          animate={isMerged ? { opacity: 0, scale: 0.9, y: 30 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Left column — what people think */}
          <div className="flex-1 space-y-2 sm:space-y-3">
            {leftItems.map((item, i) => (
              <motion.div
                key={`l-${i}`}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={i < visibleLeft ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-500 ${
                    phase === "strike" || isMerged
                      ? "border-destructive/30 bg-destructive/5"
                      : "border-border/40 bg-card/60"
                  }`}
                >
                  <span className="text-base sm:text-lg shrink-0">{item.emoji}</span>
                  <span
                    className={`text-xs sm:text-sm font-medium transition-all duration-500 ${
                      phase === "strike" || isMerged
                        ? "line-through text-muted-foreground/30"
                        : "text-foreground/80"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>

                {/* Strike animation */}
                {(phase === "strike" || isMerged) && (
                  <motion.div
                    className="absolute inset-0 flex items-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <motion.span
                      className="text-lg sm:text-xl ml-auto mr-3"
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.08, type: "spring", stiffness: 400 }}
                    >
                      ❌
                    </motion.span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            className="w-px bg-border/20 self-stretch"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />

          {/* Right column — what it actually is */}
          <div className="flex-1 space-y-2 sm:space-y-3">
            {rightItems.map((item, i) => (
              <motion.div
                key={`r-${i}`}
                initial={{ opacity: 0, x: 30 }}
                animate={i < visibleRight ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-500 ${
                    phase === "strike" || isMerged
                      ? "border-primary/40 bg-primary/5 shadow-[0_0_15px_hsl(var(--primary)/0.08)]"
                      : "border-border/40 bg-card/60"
                  }`}
                >
                  <span className="text-base sm:text-lg shrink-0">{item.emoji}</span>
                  <span
                    className={`text-xs sm:text-sm font-medium transition-all duration-500 ${
                      phase === "strike" || isMerged
                        ? "text-primary font-bold"
                        : "text-foreground/80"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Title reveal after merge */}
        {phase === "title" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Now you know the difference
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-5xl font-black text-foreground text-center leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            >
              The Crypto
              <br />
              <span className="gradient-text">Institutional Marketing</span>
              <br />
              Playbook
            </motion.h1>
            <motion.p
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Let's get you ready →
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export const PlaybookHero = ({ onStart, onSelectChapter }: PlaybookHeroProps) => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <ExpectationRealityAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
          {/* Floating background shapes */}
          {[
            { size: "w-16 h-16", top: "10%", left: "8%", delay: 0, dur: 18, shape: "rounded-xl rotate-45", color: "bg-primary/30" },
            { size: "w-10 h-10", top: "20%", left: "85%", delay: 2, dur: 14, shape: "rounded-full", color: "bg-accent/35" },
            { size: "w-20 h-20", top: "65%", left: "5%", delay: 1, dur: 20, shape: "rounded-full", color: "bg-primary/25" },
            { size: "w-12 h-12", top: "75%", left: "90%", delay: 3, dur: 16, shape: "rounded-xl rotate-12", color: "bg-accent/30" },
            { size: "w-8 h-8", top: "40%", left: "92%", delay: 4, dur: 12, shape: "rounded-lg rotate-45", color: "bg-primary/35" },
            { size: "w-14 h-14", top: "85%", left: "45%", delay: 1.5, dur: 22, shape: "rounded-full", color: "bg-primary/20" },
            { size: "w-6 h-6", top: "15%", left: "55%", delay: 5, dur: 10, shape: "rounded-md rotate-45", color: "bg-accent/30" },
            { size: "w-24 h-24", top: "50%", left: "15%", delay: 0.5, dur: 25, shape: "rounded-full", color: "bg-primary/20" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.size} ${item.shape} ${item.color} pointer-events-none`}
              style={{ top: item.top, left: item.left }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0.4, 0.9, 0],
                y: [0, -40, 20, -30, 0],
                x: [0, 20, -15, 10, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [0.8, 1.1, 0.9, 1.2, 0.8],
              }}
              transition={{
                duration: item.dur,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Ambient glow blobs */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none"
            animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.9, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
            animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0], scale: [1, 0.85, 1.15, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-center max-w-3xl relative z-10"
          >
            <motion.img
              src={logo}
              alt="Web3talez"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 14 }}
              className="w-14 h-14 rounded-full mx-auto mb-3"
            />
            <Link
              to="/about"
              className="text-sm mb-2 font-bold hover:opacity-80 transition-opacity"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <span className="text-primary">Web3</span>
                <span className="text-primary-light">talez</span>
              </motion.span>
            </Link>
            <motion.p
              className="text-[10px] text-muted-foreground mb-10 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Web3 marketing made simple 💜
            </motion.p>


            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-foreground">The Crypto</span>
              <br />
              <span className="gradient-text">Institutional Marketing</span>
              <br />
              <span className="text-foreground">Playbook</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-foreground mb-12 max-w-2xl mx-auto text-pretty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              In 2026, almost every marketing role in Web3 is asking for an institutional marketer. But nobody is actually telling you what that means or what it takes to do the job well.
              <span className="block mt-2 text-primary font-semibold">That's what this playbook is&nbsp;for.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
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

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + i * 0.03 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors cursor-default"
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ y: -2 }}
              className="clay-card p-5 text-left max-w-sm mx-auto"
            >
              <p className="text-sm font-bold text-foreground mb-1">Product Marketing Manager is the new hot title</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Almost every company on this list is hiring a "Product Marketing Manager." Community manager era is over.</p>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[
                { value: "15", label: "Chapters" },
                { value: "18", label: "Companies" },
                { value: "5", label: "Personas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-10"
            >
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                About Web3talez →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};
