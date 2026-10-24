import Image from "next/image";
import { ArrowDownRight, ArrowRight, FileDown } from "lucide-react";
import { ButtonLink } from "../button";
import { GitHubIcon, LinkedInIcon } from "../icons";
import { profile } from "@/data/profile";

const spec = [
  { k: "Studying", v: "BSc EEE, BRAC University" },
  { k: "Research", v: "Computer vision · LaSSET" },
  { k: "Building", v: "Tornetec · GreenSync" },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <h1 id="hero-title" className="flex flex-col leading-none">
            <span className="font-mono text-sm tracking-[0.3em] text-ink-subtle/70 uppercase sm:text-base">
              {profile.nameParts.prefix}
            </span>
            <span className="mt-2 font-display text-[clamp(3.25rem,11vw,7.5rem)] leading-[0.92] tracking-[-0.025em]">
              {profile.nameParts.main}
            </span>
            <span className="mt-3 font-display text-[clamp(1.6rem,4.5vw,2.75rem)] leading-none text-ink-subtle/60 italic">
              {profile.nameParts.suffix}
            </span>
          </h1>
          <p className="mt-8 font-display text-2xl leading-snug text-balance sm:text-3xl">
            Engineering ideas into <em className="text-accent">real-world</em> impact.
          </p>
          <p className="mt-4 max-w-[38rem] text-sm leading-relaxed text-ink-subtle sm:text-[15px]">
            {profile.identity.join(" · ")}
          </p>
          <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-ink-muted sm:text-xl">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              View projects <ArrowDownRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact me <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={profile.resume} variant="secondary" download>
              <FileDown className="size-4" aria-hidden="true" /> Download résumé
            </ButtonLink>
          </div>

          <ul className="mt-8 flex items-center gap-1" aria-label="Profiles">
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                <GitHubIcon className="size-[18px]" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                <LinkedInIcon className="size-[18px]" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <aside aria-label="At a glance" className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none lg:pt-4">
          <figure className="relative overflow-hidden rounded-3xl border border-line bg-bg-elevated">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={profile.portrait.width}
              height={profile.portrait.height}
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-surface/90 px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.location}
            </figcaption>
          </figure>
          <div className="mt-4 rounded-2xl border border-line bg-surface/80 p-6 shadow-[0_1px_0_rgb(0_0_0/0.02),0_24px_48px_-32px_rgb(0_0_0/0.25)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-dashed border-line pb-4">
              <span className="font-mono text-[11px] tracking-[0.16em] text-ink-subtle uppercase">Spec sheet</span>
              <span className="font-mono text-[11px] text-ink-subtle">REV. 2026</span>
            </div>
            <dl className="divide-y divide-line">
              {spec.map((row) => (
                <div key={row.k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3.5 text-sm">
                  <dt className="font-mono text-[11px] tracking-[0.12em] text-ink-subtle uppercase pt-0.5">{row.k}</dt>
                  <dd className="text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-2 border-t border-dashed border-line pt-4">
              <p className="font-mono text-[11px] tracking-[0.16em] text-ink-subtle uppercase">Focus</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {profile.focus.slice(0, 3).map((f) => (
                  <li key={f} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-ink">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
