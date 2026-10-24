"use client";

import { useEffect } from "react";

/**
 * Opts [data-reveal] elements into a fade-up on first view. Content renders
 * visible without JS; the class is only added once the observer is ready.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const viewport = window.innerHeight;
    // Anything already on screen stays put so the first paint never flickers.
    nodes.forEach((el) => {
      if (el.getBoundingClientRect().top < viewport) el.classList.add("is-visible");
    });
    root.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    nodes.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
