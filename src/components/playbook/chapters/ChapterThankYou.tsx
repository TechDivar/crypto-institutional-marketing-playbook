import { motion } from "framer-motion";
import logo from "@/assets/web3talez-logo.jpg";
import { EmailCaptureForm } from "../ui/EmailCaptureForm";

export const ChapterThankYou = () => (
  <div className="flex flex-col items-center justify-center text-center py-12">
    <motion.img
      src={logo}
      alt="Web3talez"
      className="w-16 h-16 rounded-full mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 14 }}
    />

    <motion.h2
      className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Thanks for reading 💜
    </motion.h2>

    <motion.p
      className="text-muted-foreground text-lg max-w-md mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Web3 marketing is boring. But not here. Get the full playbook as a PDF and subscribe for more.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mb-10 w-full"
    >
      <EmailCaptureForm source="thankyou" variant="thankyou" />
    </motion.div>

    <motion.a
      href="https://web3talez.substack.com"
      target="_blank"
      rel="noopener noreferrer"
      className="pill-btn bg-primary text-primary-foreground hover:bg-primary/90"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      Get practical web3 growth hacks 2x a month💜
    </motion.a>

    <motion.p
      className="text-xs text-muted-foreground mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0 }}
    >
      Made with love from{" "}
      <span className="text-primary font-bold">Web3</span>
      <span className="text-primary-light font-bold">talez</span>
    </motion.p>
  </div>
);
