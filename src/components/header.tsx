"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

type NavItem = { id: string; label: string };

export function Header({ items, name, initials }: { items: NavItem[]; name: string; initials: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    if (!open) return;
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
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="group flex min-h-11 items-center gap-3" aria-label={`${name}, back to top`}>
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink font-mono text-[11px] font-semibold tracking-wider text-bg transition-colors group-hover:bg-accent group-hover:text-accent-ink">
            {initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">{name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-3 text-[13px] transition-colors ${
                    active === item.id ? "text-ink" : "text-ink-subtle hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`ml-1.5 size-1 rounded-full bg-accent transition-opacity ${active === item.id ? "opacity-100" : "opacity-0"}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {items.map((item, i) => (
            <li key={item.id} className="border-b border-line last:border-0">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between font-display text-3xl tracking-tight"
              >
                {item.label}
                <span className="font-mono text-xs text-ink-subtle">{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
