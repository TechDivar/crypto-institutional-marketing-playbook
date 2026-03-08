import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/web3talez-logo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to playbook
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="Web3talez" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">About</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Web3talez
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Web3 marketing made simple 💜</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[15px] leading-[1.8] text-foreground/85">
              Web3talez is the best newsletter in Web3 marketing that accommodates everyone — newbies and crypto natives alike.
            </p>

            <div className="mt-10 h-px bg-border" />

            <h2 className="text-xl font-bold text-foreground pt-4">Why an Institutional Marketing Playbook?</h2>
            <p className="text-[15px] leading-[1.8] text-foreground/85">
              In 2026, almost every marketing role in Web3 is asking for an institutional marketer. But nobody is actually telling you what that means or what it takes to do the job well.
            </p>
            <p className="text-[15px] leading-[1.8] text-foreground/85">
              So we dug into it. We pulled 18 real job descriptions from companies building the infrastructure that banks, asset managers, and treasury teams are starting to use. We read the DWF Ventures 2026 research report on what institutions are actually demanding from DeFi right now. And we turned all of it into this playbook.
            </p>
            <p className="text-[15px] leading-[1.8] text-foreground/85">
              Because at Web3talez, we believe practical marketing stories should be free, simple, and useful to anyone — whether you have been in crypto for five years or five days.
            </p>

            <div className="rounded-xl border border-border bg-card/80 p-6 mt-10">
              <p className="text-sm font-bold text-primary mb-2">Made with love from Web3talez 💜</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Web3 marketing stories are boring. But not here. Subscribe to the newsletter for case studies and tips twice a month at{" "}
                <a
                  href="https://web3talez.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  web3talez.substack.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
