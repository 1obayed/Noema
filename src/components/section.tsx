import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, eyebrow, title, intro, children, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="mb-12 grid gap-6 sm:mb-16 md:grid-cols-12" data-reveal>
          <p className="font-mono text-xs tracking-[0.18em] text-ink-subtle uppercase md:col-span-3 md:pt-3">
            <span className="text-accent">{index}</span> <span aria-hidden="true">/</span> {eyebrow}
          </p>
          <div className="md:col-span-9">
            <h2 id={`${id}-title`} className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
              {title}
            </h2>
            {intro ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">{intro}</p> : null}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
