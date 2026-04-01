import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface EmailCaptureFormProps {
  source?: string;
  variant?: "hero" | "sidebar" | "thankyou";
}

export const EmailCaptureForm = ({ source = "hero", variant = "hero" }: EmailCaptureFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase
      .from("playbook_subscribers")
      .insert({ email: email.trim().toLowerCase(), source });

    if (error) {
      if (error.code === "23505") {
        // Duplicate — still show success and allow download
        setStatus("success");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
      }
    } else {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={variant === "sidebar" ? "text-center" : "text-center max-w-md mx-auto"}
      >
        <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
        <p className={`font-bold text-foreground ${variant === "sidebar" ? "text-sm" : "text-lg"} mb-2`}>
          You're in! 💜
        </p>
        <a
          href="https://web3talez.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 pill-btn bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Download className="w-4 h-4" />
          Download the Playbook
        </a>
        <p className="text-xs text-muted-foreground mt-3">
          We'll also send you the link via email.
        </p>
      </motion.div>
    );
  }

  if (variant === "sidebar") {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <p className="text-xs font-bold text-foreground text-center">📥 Get the PDF</p>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          placeholder="Your email"
          className="w-full px-3 py-2 rounded-lg text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full pill-btn bg-foreground text-background hover:bg-foreground/90 text-xs py-2 flex items-center justify-center gap-1.5 disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <>
              <Download className="w-3 h-3" />
              Download PDF
            </>
          )}
        </button>
        {status === "error" && (
          <p className="text-[10px] text-destructive text-center">{errorMsg}</p>
        )}
      </form>
    );
  }

  return (
    <div className={variant === "thankyou" ? "max-w-sm mx-auto" : "max-w-md mx-auto"}>
      <div className="clay-card p-6 text-center">
        <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
        <p className="text-sm font-bold text-foreground mb-1">
          Get the playbook as a PDF
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          Enter your email and we'll send you the full playbook to keep.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
            placeholder="you@company.com"
            className="w-full px-4 py-2.5 rounded-lg text-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full pill-btn bg-foreground text-background hover:bg-foreground/90 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download the Playbook
              </>
            )}
          </button>
          {status === "error" && (
            <p className="text-xs text-destructive">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};
