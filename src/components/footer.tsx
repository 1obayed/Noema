import { profile } from "@/data/profile";
import { navItems } from "@/lib/site";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons";

// Cached at build time; each deploy refreshes it.
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-tight">{profile.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-subtle">
            {profile.identity.join(" · ")}
          </p>
          <ul className="mt-6 flex gap-1" aria-label="Profiles">
            {[
              { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
              { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
              { label: "Instagram", href: profile.links.instagram, Icon: InstagramIcon },
              { label: "Facebook", href: profile.links.facebook, Icon: FacebookIcon },
            ].map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex size-11 items-center justify-center text-ink-muted hover:bg-surface hover:text-ink">
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer" className="md:col-span-4 md:col-start-7">
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink-subtle uppercase">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="inline-flex min-h-10 items-center text-sm text-ink-muted hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink-subtle uppercase">Elsewhere</p>
          <ul className="mt-4">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex min-h-10 items-center text-sm text-ink-muted hover:text-ink">Email</a>
            </li>
            <li>
              <a href={profile.resume} download className="inline-flex min-h-10 items-center text-sm text-ink-muted hover:text-ink">Résumé (PDF)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-ink-subtle sm:px-8">
          <p>© <CopyrightYear /> {profile.name}</p>
          <a href="#top" className="inline-flex min-h-10 items-center hover:text-ink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
