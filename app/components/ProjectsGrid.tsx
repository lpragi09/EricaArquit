"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";

export function ProjectsGrid() {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-6xl space-y-10 px-6 py-24"
    >
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#cfc5b8]">
              Projetos selecionados
            </p>
            <h2 className="font-playfair text-3xl text-[#f6f2ed] md:text-4xl">
              Um portfólio desenhado para provocar desejo.
            </h2>
          </div>
          <a
            href="#contato"
            data-cursor="interactive"
            className="text-xs uppercase tracking-[0.3em] text-[#d8cfc2] transition hover:text-white"
          >
            Solicitar apresentação completa
          </a>
        </div>
      </Reveal>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-12"
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
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 ${
              project.size === "xl"
                ? "md:col-span-2 lg:col-span-12"
                : project.size === "lg"
                ? "md:col-span-2 lg:col-span-7 lg:row-span-2"
                : "md:col-span-1 lg:col-span-5"
            }`}
            data-cursor="interactive"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div
              className={`relative h-full ${
                project.size === "xl"
                  ? "min-h-[300px] md:min-h-[380px]"
                  : project.size === "lg"
                  ? "min-h-[360px] md:min-h-[520px]"
                  : "min-h-[260px] md:min-h-[320px]"
              }`}
            >
              <ParallaxImage
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/65 via-[#0a0a0a]/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-70" />
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#0a0a0a]/70 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-[#f6f2ed] backdrop-blur">
                {project.tag}
              </div>
              <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-[#0a0a0a]/70 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-[#e0d6ca] backdrop-blur">
                0{index + 1} · {project.year}
              </div>
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
                <div className="space-y-3">
                  <h3 className="font-playfair text-2xl text-[#f6f2ed]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#d4c9bc]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-[#e0d6ca]">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.area}</span>
                  </div>
                  <Link
                    href={`/projetos/${project.slug}`}
                    data-cursor="interactive"
                    className="text-xs uppercase tracking-[0.3em] text-[#f6f2ed] transition group-hover:text-white"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
