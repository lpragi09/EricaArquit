"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ParallaxImage({ src, alt, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <div ref={ref} className={`relative h-full w-full overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 h-[125%] w-full scale-[1.02] object-cover transition duration-700"
      />
    </div>
  );
}
