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

const decodeLines = [
  { text: "> SCANNING JOB DESCRIPTIONS...", delay: 0 },
  { text: "> 18 companies detected", delay: 800 },
  { text: "> ROLE_PATTERN: Product Marketing Manager", delay: 1600 },
  { text: "> 13 chapters compiled", delay: 2400 },
  { text: "> 5 buyer personas mapped", delay: 3000 },
  { text: "", delay: 3600 },
  { text: "> DECODING COMPLETE.", delay: 3800 },
  { text: "> The Crypto Institutional Marketing Playbook", delay: 4400 },
];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>/";

const ScrambleText = ({ text, startDelay }: { text: string; startDelay: number }) => {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started || !text) {
      if (started && !text) setDisplay("");
      return;
    }

    let iteration = 0;
    const maxIterations = text.length * 3;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration / 3) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration > maxIterations) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;

  const isHighlight = text.startsWith("> ROLE_PATTERN") || text.startsWith("> The Crypto");
  const isComplete = text.startsWith("> DECODING");

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.15 }}
      className={`font-mono text-xs sm:text-sm leading-relaxed ${
        isHighlight
          ? "text-primary font-bold"
          : isComplete
          ? "text-green-400"
          : "text-foreground/70"
      }`}
    >
      {display}
      {display.length < text.length && (
        <motion.span
          className="inline-block w-[2px] h-[14px] bg-primary ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

const TypewriterAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const lastDelay = decodeLines[decodeLines.length - 1].delay;
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 700);
    }, lastDelay + 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden px-6"
      animate={isExiting ? { opacity: 0, scale: 1.05 } : {}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute w-[min(400px,80vw)] aspect-square rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)" }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Terminal window */}
      <motion.div
        className="w-full max-w-md sm:max-w-lg rounded-xl border border-border/50 overflow-hidden"
        style={{
          background: "hsl(var(--card) / 0.8)",
          boxShadow: "0 20px 60px -15px hsl(var(--primary) / 0.1)",
        }}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
          <span className="ml-2 text-[10px] text-muted-foreground/50 font-mono">playbook_decoder.sh</span>
        </div>

        {/* Terminal content */}
        <div className="p-5 sm:p-6 space-y-2 min-h-[280px] sm:min-h-[320px]">
          {decodeLines.map((line, i) => (
            <ScrambleText key={i} text={line.text} startDelay={line.delay} />
          ))}

          {/* Blinking cursor at bottom */}
          <motion.div
            className="flex items-center gap-1 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-muted-foreground/40 font-mono text-xs">$</span>
            <motion.span
              className="w-[7px] h-[14px] bg-primary/60"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
};

export const PlaybookHero = ({ onStart }: PlaybookHeroProps) => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <TypewriterAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
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
