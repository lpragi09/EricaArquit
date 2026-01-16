"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleEnter = () => setIsActive(true);
    const handleLeave = () => setIsActive(false);

    const interactiveSelectors = "a, button, [data-cursor='interactive']";
    const bindInteractive = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    window.addEventListener("mousemove", handleMove);
    bindInteractive();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e0d6ca]/60 transition duration-200 md:block ${
        isActive ? "h-14 w-14 bg-[#e0d6ca]/10" : "h-8 w-8 bg-transparent"
      }`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
