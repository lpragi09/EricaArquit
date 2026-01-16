"use client";

import { motion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const letters = Array.from(text);

  return (
    <span className={className} aria-label={text} role="text">
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + index * 0.02 }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
