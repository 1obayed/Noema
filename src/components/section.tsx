import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  title?: ReactNode;
  intro?: ReactNode;
  /** Grey band background, alternating down the page like the printed résumé. */
  band?: boolean;
  children: ReactNode;
};

export function Section({ id, label, title, intro, band = false, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-20 sm:py-24 ${band ? "bg-band" : ""}`}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[2.25rem_1fr] md:gap-12">
        <div className="md:pt-1">
          <h2 id={`${id}-title`} className="md:sticky md:top-24">
            <span className="label-bar label-bar--vertical">{label}</span>
          </h2>
        </div>
        <div className="min-w-0">
          {title || intro ? (
            <header className="mb-12 max-w-3xl" data-reveal>
              {title ? (
                <p className="font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">{title}</p>
              ) : null}
              {intro ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">{intro}</p> : null}
            </header>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

/** Horizontal black bar heading for sub-groups (e.g. skill categories). */
export function BarHeading({ children, as: Tag = "h3" }: { children: ReactNode; as?: "h3" | "h4" }) {
  return (
    <Tag className="mb-5">
      <span className="label-bar">{children}</span>
    </Tag>
  );
}
