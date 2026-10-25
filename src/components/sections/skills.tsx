import { BarHeading, Section } from "../section";
import { StarRating } from "../star-rating";
import { languages, skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills" title="Skills.">
      <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
        <div data-reveal>
          <BarHeading>Programming languages</BarHeading>
          <ul className="max-w-md">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between gap-4 border-b border-line-strong/60 py-3">
                <span className="text-[15px]">{lang.name}</span>
                <span className="flex items-center gap-3">
                  <StarRating value={lang.rating} label={`${lang.name} proficiency`} />
                  <span className="w-7 text-right text-xs text-ink-subtle" aria-hidden="true">
                    {lang.rating}/5
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-subtle">Self-assessed, out of 5.</p>
        </div>
        {skillGroups.map((group) => (
          <div key={group.title} data-reveal>
            <BarHeading>{group.title}</BarHeading>
            <ul className="max-w-md">
              {group.items.map((s) => (
                <li key={s} className="flex items-center gap-3 border-b border-line-strong/60 py-3 text-[15px]">
                  <span className="size-1.5 shrink-0 bg-ink" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
