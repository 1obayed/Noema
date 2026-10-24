import { Section } from "../section";
import { Tag } from "../button";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Professional & research experience."
      intro="Research in the lab, and ventures outside it."
    >
      <ol className="relative md:ml-[25%]">
        {experience.map((job, i) => (
          <li key={job.organization} className="relative grid gap-4 pb-12 pl-8 last:pb-0 sm:pl-10" data-reveal>
            {i === experience.length - 1 ? null : (
              <span aria-hidden="true" className="absolute top-3 bottom-[-0.5rem] left-[5px] w-px bg-line" />
            )}
            <span aria-hidden="true" className="absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-accent bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="font-mono text-xs tracking-[0.1em] text-accent">{job.period}</p>
              <p className="font-mono text-[11px] tracking-[0.14em] text-ink-subtle uppercase">{job.kind}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{job.role}</h3>
              <p className="mt-1 text-ink-muted">
                {job.organization}
                {job.location ? <span className="text-ink-subtle"> · {job.location}</span> : null}
              </p>
            </div>
            <ul className="max-w-2xl space-y-2 text-[15px] leading-relaxed text-ink-muted">
              {job.points.map((p) => (
                <li key={p} className="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-line-strong">
                  {p}
                </li>
              ))}
            </ul>
            {job.tools ? (
              <ul className="flex flex-wrap gap-2" aria-label="Tools">
                {job.tools.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
