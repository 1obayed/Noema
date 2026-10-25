import { Section } from "../section";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="education" label="Education" band title="Education.">
      <ol className="grid gap-12 md:grid-cols-2">
        {education.map((e) => (
          <li key={e.institution} data-reveal>
            <h3 className="text-lg font-semibold tracking-tight">{e.credential}</h3>
            <p className="mt-1.5 text-[15px] text-ink-muted">
              {e.institution}
              <span className="mx-2 text-line-strong" aria-hidden="true">|</span>
              <span className="font-medium text-ink">{e.period}</span>
            </p>
            {e.location ? <p className="mt-1 text-sm text-ink-subtle">{e.location}</p> : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
