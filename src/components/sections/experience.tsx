import { ExternalLink } from "lucide-react";
import { Section } from "../section";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience" title="Professional & research experience.">
      <ol className="divide-y divide-line-strong/60">
        {experience.map((job) => {
          return (
            <li key={job.organization} className="grid gap-5 py-10 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-10" data-reveal>
              <div className="sm:border-r sm:border-line-strong sm:pr-6">
                {job.duration ? (
                  <p className="text-5xl font-light tracking-tight sm:text-6xl" aria-hidden="true">
                    {job.duration}
                  </p>
                ) : null}
                <p className="mt-2 text-xs text-ink-subtle">
                  {job.duration ? (
                    <span className="sr-only">
                      {job.duration} years,{" "}
                    </span>
                  ) : null}
                  Years, {job.period}
                </p>
                <p className="mt-1 text-[11px] font-medium tracking-[0.18em] text-ink-subtle uppercase">{job.kind}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {job.link ? (
                    <a
                      href={job.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={job.link.label}
                      className="underline decoration-line-strong decoration-1 underline-offset-4 hover:decoration-ink"
                    >
                      {job.organization}
                      <ExternalLink className="ml-1.5 inline size-4 align-[-0.1em] text-ink-subtle" aria-hidden="true" />
                      <span className="sr-only"> (opens {job.link.label})</span>
                    </a>
                  ) : (
                    job.organization
                  )}
                </h3>
                <p className="mt-0.5 font-medium">{job.role}</p>
                {job.location ? <p className="mt-0.5 text-sm text-ink-subtle">{job.location}</p> : null}
                <ul className="mt-4 max-w-2xl space-y-2 text-[15px] leading-relaxed text-ink-muted">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-4 before:absolute before:top-[0.65em] before:left-0 before:size-1.5 before:bg-ink">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
