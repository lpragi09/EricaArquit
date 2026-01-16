"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Estúdio", href: "#estudio" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          data-cursor="interactive"
          className="text-sm uppercase tracking-[0.25em] text-[#f6f2ed]"
        >
          Erica Dias Moreno
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.25em] text-[#d8cfc2] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="interactive"
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          data-cursor="interactive"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute left-0 top-full h-[50vh] w-full bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 text-sm uppercase tracking-[0.25em] text-[#f6f2ed]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-cursor="interactive"
                  className="transition hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
