import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Section } from "../section";
import { CopyEmail } from "../copy-email";
import { GitHubIcon, LinkedInIcon } from "../icons";
import { profile } from "@/data/profile";

export function ContactSection() {
  const channels = [
    { label: "LinkedIn", value: "in/1obayed", href: profile.links.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", value: "@1obayed", href: profile.links.github, Icon: GitHubIcon },
  ];
  return (
    <Section
      id="contact"
      label="Contact"
      band
      title={<>Let&apos;s build something <em>worth deploying</em>.</>}
      intro="Open to research collaborations, engineering projects, and conversations about AI, computer vision, and early-stage ventures."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="bg-ink p-6 text-bg sm:p-10 lg:col-span-7" data-reveal>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase opacity-60">Email</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block text-[clamp(1.3rem,4.6vw,2.5rem)] leading-tight font-medium tracking-tight break-all underline-offset-[6px] hover:underline sm:break-normal"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center gap-2 bg-bg px-5 text-sm font-medium text-ink transition-colors hover:opacity-80"
            >
              <Mail className="size-4" aria-hidden="true" /> Send an email
            </a>
            <CopyEmail email={profile.email} />
          </div>
        </div>
        <ul className="grid gap-6 lg:col-span-5">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={label} data-reveal>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-4 border border-line bg-surface p-6 transition-colors hover:border-ink"
              >
                <span className="flex items-center gap-4">
                  <Icon className="size-6" />
                  <span>
                    <span className="block font-medium">{label}</span>
                    <span className="block text-sm text-ink-subtle">{value}</span>
                  </span>
                </span>
                <ArrowUpRight className="size-5 text-ink-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
              </a>
            </li>
          ))}
          {profile.showPhone && profile.phone ? (
            <li data-reveal>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 border border-line bg-surface p-6 hover:border-ink"
              >
                <Phone className="size-6" aria-hidden="true" />
                <span>
                  <span className="block font-medium">Phone</span>
                  <span className="block text-sm text-ink-subtle">{profile.phone}</span>
                </span>
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </Section>
  );
}
