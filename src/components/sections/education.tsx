import { GraduationCap } from "lucide-react";
import { Section } from "../section";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

export function EducationSection() {
  return (
    <Section id="education" index={certifications.length ? "07" : "06"} eyebrow="Education" title="Education.">
      <ol className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <li key={e.institution} className="rounded-3xl border border-line bg-surface p-6 sm:p-8" data-reveal>
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink-muted">
                <GraduationCap className="size-[18px]" aria-hidden="true" />
              </span>
              <p className="font-mono text-xs tracking-[0.1em] text-accent">{e.period}</p>
            </div>
            <h3 className="mt-8 font-display text-3xl leading-tight tracking-tight">{e.institution}</h3>
            <p className="mt-2 text-ink-muted">{e.credential}</p>
            {e.location ? <p className="mt-1 text-sm text-ink-subtle">{e.location}</p> : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
