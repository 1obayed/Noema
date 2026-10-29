import { profile } from "@/data/profile";

/** Full-width black band with the owner's own line, between About and Education. */
export function QuoteBand() {
  return (
    <section aria-label="Personal quote" className="bg-ink text-bg">
      <figure className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24" data-reveal>
        <blockquote className="max-w-4xl font-display text-3xl leading-[1.2] tracking-tight text-balance italic sm:text-5xl">
          <span aria-hidden="true" className="mr-1 not-italic opacity-40">“</span>
          {profile.quote}
          <span aria-hidden="true" className="ml-1 not-italic opacity-40">”</span>
        </blockquote>
        <figcaption className="mt-8 text-[11px] font-medium tracking-[0.28em] uppercase opacity-60">
          — {profile.name}
        </figcaption>
      </figure>
    </section>
  );
}
