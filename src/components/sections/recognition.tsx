import { ExternalLink, Trophy, HandCoins } from "lucide-react";
import { Section } from "../section";
import { achievements } from "@/data/achievements";

export function RecognitionSection() {
  return (
    <Section id="recognition" label="Recognition" band title="Achievements & recognition.">
      <ul className="grid gap-px border border-line-strong/70 bg-line-strong/70 sm:grid-cols-2">
        {achievements.map((a) => {
          const Icon = a.kind === "Grant" ? HandCoins : Trophy;
          return (
            <li key={`${a.distinction}-${a.title}`} className="flex flex-col bg-surface p-6 sm:p-8" data-reveal>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex size-10 items-center justify-center bg-ink text-bg">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-medium tracking-[0.18em] text-ink-subtle uppercase">
                  {a.kind}
                  {a.year ? ` · ${a.year}` : ""}
                </span>
              </div>
              <p className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl">{a.distinction}</p>
              <h3 className="mt-2 text-base font-semibold">{a.title}</h3>
              {a.organization !== a.title ? <p className="mt-1 text-sm text-ink-subtle">{a.organization}</p> : null}
              {a.description ? <p className="mt-3 text-sm leading-relaxed text-ink-muted">{a.description}</p> : null}
              {a.evidenceUrl ? (
                <a
                  href={a.evidenceUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline"
                >
                  View evidence <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
