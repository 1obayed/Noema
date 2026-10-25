import Image from "next/image";
import { ArrowDownRight, FileDown } from "lucide-react";
import { ButtonLink } from "../button";
import { FacebookIcon, InstagramIcon } from "../icons";
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
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-12 sm:px-8 sm:pb-16 lg:grid-cols-12 lg:items-end">
        <h1 id="hero-title" className="flex flex-col lg:col-span-8">
          <span className="mb-3 font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-none text-ink-subtle/70 italic">
            {profile.nameParts.prefix}
          </span>
          <span className="font-display text-[clamp(3.5rem,13vw,9rem)] leading-[0.92] font-normal tracking-[-0.02em]">
            {profile.nameParts.main.split(" ").map((w) => (
              <span key={w} className="block">
                {w}
              </span>
            ))}
          </span>
          <span className="mt-4 font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-none text-ink-subtle/70 italic">
            {profile.nameParts.suffix}
          </span>
        </h1>

        <div className="lg:col-span-4 lg:pb-3">
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
          <div className="mt-4 flex items-center gap-1">
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram @${profile.handle}`}
              className="-ml-2.5 inline-flex size-11 items-center justify-center text-ink hover:opacity-70"
            >
              <InstagramIcon className="size-[18px]" />
            </a>
            <a
              href={profile.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook @${profile.handle}`}
              className="inline-flex size-11 items-center justify-center text-ink hover:opacity-70"
            >
              <FacebookIcon className="size-[18px]" />
            </a>
            <span className="text-[13px] font-medium" aria-hidden="true">
              @{profile.handle}
            </span>
          </div>
        </div>
      </div>

      {/* Grey band: introduction with the portrait flush right. */}
      <div className="bg-band">
        <div className="mx-auto grid w-full max-w-6xl px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="order-2 py-12 sm:py-16 lg:order-1 lg:col-span-8 lg:pr-14">
            <p className="font-display text-3xl leading-tight text-balance sm:text-4xl">{profile.headline}</p>
            <p className="mt-5 text-xs font-medium tracking-[0.16em] text-ink-subtle uppercase leading-relaxed">
              {profile.identity.join("  ·  ")}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-ink-muted sm:text-[17px]">{profile.intro}</p>
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
          <figure className="order-1 flex items-center justify-center pt-12 sm:pt-16 lg:order-2 lg:col-span-4 lg:py-16 lg:pr-8">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={profile.portrait.width}
              height={profile.portrait.height}
              priority
              sizes="(min-width: 1024px) 340px, 320px"
              className="aspect-[4/5] h-auto w-full max-w-[20rem] object-cover lg:max-w-[21rem]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
