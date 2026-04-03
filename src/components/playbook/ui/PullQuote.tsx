import { motion } from "framer-motion";

interface PullQuoteProps {
  quote: string;
  author?: string;
}

export const PullQuote = ({ quote, author }: PullQuoteProps) => (
  <motion.blockquote
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5 }}
    className="my-10 pl-6 border-l-4 border-primary/60 py-4"
  >
    <p className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed">
      "{quote}"
    </p>
    {author && (
      <cite className="block mt-3 text-sm text-muted-foreground not-italic">
        — {author}
      </cite>
    )}
  </motion.blockquote>
);
