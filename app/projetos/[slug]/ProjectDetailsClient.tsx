"use client";

import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

type ProjectDetailsClientProps = {
  project: Project;
};

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  return (
    <div className="bg-[#0a0a0a] text-[#f6f2ed]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-[#0a0a0a]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent" />
        </div>
        <div className="relative mx-auto grid min-h-[70vh] max-w-6xl gap-10 px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.a
            href="/"
            data-cursor="interactive"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-6 top-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d8cfc2] transition hover:text-white md:left-6 md:top-12"
          >
            ← Voltar ao início
          </motion.a>
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.35em] text-[#cfc5b8]"
            >
              {project.tag}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-playfair text-4xl md:text-6xl"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-xl text-base leading-relaxed text-[#d8cfc2] md:text-lg"
            >
              {project.intro}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-[#11100f]/80 p-6 backdrop-blur"
          >
            <div className="grid gap-4 text-xs uppercase tracking-[0.3em] text-[#cfc5b8]">
              <div className="flex items-center justify-between">
                <span>Local</span>
                <span className="text-[#f6f2ed]">{project.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Ano</span>
                <span className="text-[#f6f2ed]">{project.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Área</span>
                <span className="text-[#f6f2ed]">{project.area}</span>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-[#d8cfc2]">
              {project.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#d8cfc2]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#cfc5b8]">
              Galeria
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl">
              Imagens do projeto
            </h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-12">
          {project.gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`overflow-hidden rounded-3xl border border-white/10 ${
                index === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
