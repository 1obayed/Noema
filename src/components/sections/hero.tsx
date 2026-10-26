import Image from "next/image";
import { ArrowDownRight, FileDown } from "lucide-react";
import { ButtonLink } from "../button";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "../icons";
import { profile } from "@/data/profile";

const contact = [
  { k: "E", v: profile.email, href: `mailto:${profile.email}` },
  ...(profile.showPhone && profile.phone
    ? [{ k: "P", v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }]
    : []),
  { k: "L", v: "linkedin.com/in/1obayed", href: profile.links.linkedin },
  { k: "G", v: "github.com/1obayed", href: profile.links.github },
  { k: "A", v: profile.location },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-24 sm:pt-28">
      {/* Name + contact, as on the printed résumé header. */}
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-12 sm:px-8 sm:pb-16 lg:grid-cols-12 lg:items-end">
        <h1 id="hero-title" className="flex flex-col lg:col-span-8">
          <span className="font-display text-[clamp(3.5rem,13vw,9rem)] leading-[0.92] font-normal tracking-[-0.02em]">
            {profile.nameParts.main.split(" ").map((w, i) => (
              <span key={w} className="relative block">
                {i === 0 ? (
                  // "Md" sits small and faded right before the "O", at every screen size.
                  <span className="mt-[0.1em] mr-[0.12em] inline-block align-top text-[clamp(1.5rem,4vw,2.5rem)] leading-none tracking-normal text-ink-subtle/70 italic">
                    {profile.nameParts.prefix}
                  </span>
                ) : null}
                {w}
              </span>
            ))}
          </span>
          <span className="mt-4 font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-none text-ink-subtle/70 italic">
            {profile.nameParts.suffix}
          </span>
        </h1>

        <div className="lg:col-span-4 lg:justify-self-end lg:pb-3">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase">Contact</p>
          <dl className="mt-4 space-y-1.5 text-[13px] text-ink-muted">
            {contact.map((row) => (
              <div key={row.k} className="flex gap-2">
                <dt className="w-4 shrink-0 font-medium text-ink">{row.k}</dt>
                <dd className="min-w-0 break-words">
                  <span aria-hidden="true">: </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="underline-offset-4 hover:text-ink hover:underline"
                    >
                      {row.v}
                    </a>
                  ) : (
                    row.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-4 -ml-2.5 flex items-center" aria-label="Profiles">
            {[
              { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
              { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
              { label: "Instagram", href: profile.links.instagram, Icon: InstagramIcon },
              { label: "Facebook", href: profile.links.facebook, Icon: FacebookIcon },
            ].map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center text-ink hover:opacity-70"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Grey band: headline and focus, with the portrait aligned to the content's right edge. */}
      <div className="bg-band">
        <div className="mx-auto grid w-full max-w-7xl gap-x-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="py-12 sm:py-16 lg:col-span-7 lg:self-center lg:py-24">
            <p className="font-display text-3xl leading-tight text-balance sm:text-[2.6rem]">{profile.headline}</p>
            <p className="mt-6 text-[13px] font-medium tracking-[0.06em] text-ink">{profile.identity.join("  ·  ")}</p>
            <p className="mt-2 text-[13px] tracking-[0.06em] text-ink-subtle">{profile.focusLine.join("  ·  ")}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#projects">
                View projects <ArrowDownRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact me
              </ButtonLink>
              <ButtonLink href={profile.resume} variant="secondary" download>
                <FileDown className="size-4" aria-hidden="true" /> Download résumé
              </ButtonLink>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-md self-end lg:col-span-5 lg:mx-0 lg:max-w-none lg:pt-16">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={profile.portrait.width}
              height={profile.portrait.height}
              priority
              sizes="(min-width: 1024px) 40vw, 448px"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
