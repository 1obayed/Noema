import { profile } from "@/data/profile";
import { navItems } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

// Cached at build time; each deploy refreshes it.
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-tight">{profile.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-subtle">
            Electrical & Electronic Engineering · Research · AI & Computer Vision. {profile.location}.
          </p>
          <div className="mt-6 flex gap-1">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex size-11 items-center justify-center rounded-full text-ink-muted hover:bg-surface hover:text-ink">
              <GitHubIcon className="size-5" />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex size-11 items-center justify-center rounded-full text-ink-muted hover:bg-surface hover:text-ink">
              <LinkedInIcon className="size-5" />
            </a>
          </div>
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
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-ink-subtle sm:px-8">
          <p>© <CopyrightYear /> {profile.name}</p>
          <a href="#top" className="inline-flex min-h-10 items-center hover:text-ink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
