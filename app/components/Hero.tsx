"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { ThreeHero } from "./ThreeHero";

const heroImages = [
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2000&auto=format&fit=crop",
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        {mounted ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImages[activeImage]}
              src={heroImages[activeImage]}
              alt="Ambiente arquitetônico sofisticado"
              className="h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </AnimatePresence>
        ) : (
          <img
            src={heroImages[0]}
            alt="Ambiente arquitetônico sofisticado"
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[72vh] max-w-6xl gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[#cfc5b8]">
              Arquitetura de luxo para espaços memoráveis
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-playfair text-4xl font-semibold leading-tight text-[#f6f2ed] md:text-6xl text-balance">
              Projetamos residências que se tornam legado.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-base leading-relaxed text-[#d8cfc2] md:text-lg">
              Um estúdio boutique que traduz sofisticação, equilíbrio e presença.
              Curadoria de materiais nobres, iluminação escultórica e narrativa
              espacial pensada para clientes de alto padrão.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                data-cursor="interactive"
                className="rounded-full border border-[#f6f2ed] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f6f2ed] transition hover:bg-[#f6f2ed] hover:text-[#0a0a0a]"
              >
                Agendar conversa
              </a>
              <a
                href="#projetos"
                data-cursor="interactive"
                className="text-xs uppercase tracking-[0.3em] text-[#d8cfc2] transition hover:text-white"
              >
                Ver portfólio
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="flex justify-center">
          <ThreeHero />
        </Reveal>
      </div>
    </section>
  );
}
