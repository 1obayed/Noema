import { Section } from "../section";
import { StarRating } from "../star-rating";
import { languages, skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" index="04" eyebrow="Skills" title="Technical toolkit.">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:col-span-5" data-reveal>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-medium tracking-tight">Programming languages</h3>
            <p className="font-mono text-[11px] tracking-[0.12em] text-ink-subtle uppercase">Self-rated</p>
          </div>
          <ul className="mt-6 divide-y divide-line">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between gap-4 py-4">
                <span className="font-mono text-[15px]">{lang.name}</span>
                <span className="flex items-center gap-3">
                  <StarRating value={lang.rating} label={`${lang.name} proficiency`} />
                  <span className="w-7 text-right font-mono text-xs text-ink-subtle" aria-hidden="true">
                    {lang.rating}/5
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-line bg-surface p-6" data-reveal>
              <h3 className="text-lg font-medium tracking-tight">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s} className="rounded-full bg-bg-elevated px-3 py-1.5 text-sm text-ink-muted ring-1 ring-line">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
