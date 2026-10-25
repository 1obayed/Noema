"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

type NavItem = { id: string; label: string };

export function Header({ items, name, initials }: { items: NavItem[]; name: string; initials: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled && !open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="relative z-10 mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          aria-label={`${name}, home`}
          className="inline-flex size-10 items-center justify-center bg-ink font-display text-[17px] leading-none tracking-[-0.04em] text-bg transition-opacity hover:opacity-80"
        >
          {initials}
        </a>

        <button
          ref={menuButton}
          type="button"
          className="inline-flex size-11 items-center justify-center text-ink"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      <div id="site-menu" hidden={!open} className="fixed inset-0 overflow-y-auto bg-bg pt-16">
        <nav aria-label="Primary" className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          <ul className="grid gap-x-16 md:grid-cols-2">
            {items.map((item, i) => (
              <li key={item.id} className="border-b border-line">
                <a
                  ref={i === 0 ? firstLink : undefined}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="group flex min-h-16 items-center justify-between font-display text-3xl tracking-tight transition-opacity hover:opacity-60 sm:text-4xl"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-base text-ink-subtle transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-3">
            <ThemeToggle />
            <span className="text-sm text-ink-subtle">Light / dark</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
