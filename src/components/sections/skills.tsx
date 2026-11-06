import { BarHeading, Section } from "../section";
import { Tag } from "../button";
import { SkillWaves } from "../skill-waves";
import { StarRating } from "../star-rating";
import { engineeringTools, languages, professional, proficiencyOverview, skillAreas, type RatedSkill } from "@/data/skills";

function RatedList({ skills }: { skills: RatedSkill[] }) {
  return (
    <ul>
      {skills.map((s) => (
        <li key={s.name} className="flex items-center justify-between gap-4 border-b border-line-strong/60 py-3">
          <span className="text-[15px]">{s.name}</span>
          <span className="flex shrink-0 items-center gap-3">
            <StarRating value={s.rating} label={`${s.name} proficiency`} />
            <span className="w-7 text-right text-xs text-ink-subtle" aria-hidden="true">
              {s.rating}/5
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills" title="Skills.">
      <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
        <div data-reveal>
          <BarHeading>Programming languages</BarHeading>
          <RatedList skills={languages} />
        </div>
        <div data-reveal>
          <BarHeading>{engineeringTools.title}</BarHeading>
          <RatedList skills={engineeringTools.skills} />
        </div>
        {skillAreas.map((area) => (
          <div key={area.title} data-reveal>
            <BarHeading>{area.title}</BarHeading>
            <RatedList skills={area.ratings} />
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${area.title} skills`}>
              {area.items.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div data-reveal>
          <BarHeading>{professional.title}</BarHeading>
          <RatedList skills={professional.skills} />
        </div>
      </div>

      <div className="mt-16 border-t border-line-strong/60 pt-12" data-reveal>
        <BarHeading>Proficiency overview</BarHeading>
        <div className="mx-auto max-w-3xl">
          <SkillWaves data={proficiencyOverview} />
        </div>
        <p className="mt-6 text-xs text-ink-subtle">
          All ratings are self-assessed out of 5. The overview shows each area out of 100; areas with several ratings are averaged.
        </p>
      </div>
    </Section>
  );
}
