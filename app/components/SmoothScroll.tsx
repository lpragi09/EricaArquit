"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenis: any;
    let rafId = 0;

    const init = async () => {
      const { default: Lenis } = await import("@studio-freight/lenis");
      lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.08,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      const handleAnchorClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement | null;
        const anchor = target?.closest("a[href^=\"#\"]") as HTMLAnchorElement | null;
        if (!anchor || !anchor.hash) return;
        const el = document.querySelector(anchor.hash);
        if (!el) return;
        event.preventDefault();
        lenis.scrollTo(el, { offset: -80, duration: 1.1 });
      };

      document.addEventListener("click", handleAnchorClick);

      return () => {
        document.removeEventListener("click", handleAnchorClick);
      };
    };

    let cleanup: (() => void) | undefined;
    init().then((result) => {
      cleanup = result as (() => void) | undefined;
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      if (cleanup) cleanup();
    };
  }, []);

  return null;
}
