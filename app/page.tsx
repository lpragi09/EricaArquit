import { Instagram, MessageCircle } from "lucide-react";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { Services } from "./components/Services";
import { SmoothScroll } from "./components/SmoothScroll";
import { Studio } from "./components/Studio";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="cursor-none bg-[#0a0a0a] text-[#f6f2ed]">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main className="space-y-24">
        <Hero />
        <ProjectsGrid />
        <Services />
        <Studio />
        <Contact />
      </main>
      <footer className="border-t border-white/5 px-6 py-14 text-[#cfc5b8]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr_0.6fr]">
          <div className="space-y-5">
            <img
              src={`${basePath}/logo-erica-dias-moreno.png`}
              alt="Erica Dias Moreno Arquitetura"
              className="w-32 max-w-full opacity-90 sm:w-36 md:w-40"
            />
          </div>
          <div className="space-y-4 text-xs uppercase tracking-[0.3em]">
            <span className="text-[#f6f2ed]">Navegação</span>
            <div className="grid gap-2 text-[#cfc5b8]">
              <a href="#" className="transition hover:text-white">
                Início
              </a>
              <a href="#projetos" className="transition hover:text-white">
                Projetos
              </a>
              <a href="#servicos" className="transition hover:text-white">
                Serviços
              </a>
              <a href="#estudio" className="transition hover:text-white">
                Estúdio
              </a>
              <a href="#contato" className="transition hover:text-white">
                Contato
              </a>
            </div>
          </div>
          <div className="space-y-4 text-xs uppercase tracking-[0.3em]">
            <span className="text-[#f6f2ed]">Contate-nos</span>
            <div className="flex items-center gap-4 text-[#cfc5b8]">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="interactive"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-white/30 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                data-cursor="interactive"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-white/30 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-xs uppercase tracking-[0.3em] text-[#8f8579]">
          © 2026 Erica Dias Moreno · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
