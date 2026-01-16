"use client";

import { motion } from "framer-motion";
import { Crown, Sparkles, Waves } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Arquitetura Residencial",
    description:
      "Concepção completa de residências de alto padrão com assinatura exclusiva.",
    icon: Crown,
  },
  {
    title: "Interiores Boutique",
    description:
      "Curadoria de mobiliário, materiais nobres e iluminação cenográfica.",
    icon: Sparkles,
  },
  {
    title: "Paisagismo Sensorial",
    description:
      "Jardins escultóricos que ampliam o diálogo entre arquitetura e natureza.",
    icon: Waves,
  },
];

export function Services() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section
      id="servicos"
      className="mx-auto max-w-6xl space-y-12 px-6 py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="flex h-full flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cfc5b8]">
              Serviços sob medida
            </p>
            <h2 className="font-playfair text-3xl text-[#f6f2ed] md:text-4xl">
              Experiências completas, do conceito à entrega.
            </h2>
            <p className="text-sm leading-relaxed text-[#bfb6aa]">
              Cada projeto nasce de uma escuta profunda e evolui com direção
              criativa precisa, garantindo uma entrega sofisticada e sem ruído.
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#d8cfc2]">
              <span>Briefing</span>
              <span>•</span>
              <span>Conceito</span>
              <span>•</span>
              <span>Entrega</span>
            </div>
            <img
              src={`${basePath}/logo-erica-dias-moreno.png`}
              alt="Erica Dias Moreno Arquitetura"
              className="mt-auto w-full max-w-[260px] pb-14 opacity-90 sm:max-w-[320px] md:max-w-[380px] lg:pb-24"
            />
          </div>
        </Reveal>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="group flex items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#11100f] p-6 transition hover:border-white/20 hover:bg-[#141210]">
                <div className="space-y-3">
                  <span className="mt-3 text-xs uppercase tracking-[0.35em] text-[#cfc5b8]">
                    0{index + 1}
                  </span>
                  <h3 className="font-playfair text-2xl text-[#f6f2ed]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#bfb6aa]">
                    {service.description}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[#f6f2ed] transition group-hover:border-white/30">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
