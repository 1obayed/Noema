import { BarHeading, Section } from "../section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" label="About" title="About me.">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-base leading-[1.85] text-ink-muted sm:text-[17px] lg:col-span-8" data-reveal>
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="lg:col-span-4" data-reveal>
          <BarHeading>Areas of focus</BarHeading>
          <ul className="text-[15px]">
            {profile.focus.map((f) => (
              <li key={f} className="flex items-center gap-3 border-b border-line-strong/60 py-3">
                <span className="size-1.5 shrink-0 bg-ink" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
