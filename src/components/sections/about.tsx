import { Section } from "../section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title={<>Where circuits meet <em>computer vision</em>.</>}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-ink-muted lg:col-span-7 lg:col-start-4" data-reveal>
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="min-w-0 lg:col-span-2 lg:col-start-11" data-reveal>
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink-subtle uppercase">Areas of focus</p>
          <ul className="mt-4 grid gap-3 text-sm text-ink sm:grid-cols-2 lg:grid-cols-1">
            {profile.focus.map((f) => (
              <li key={f} className="border-l border-accent pl-3 leading-snug">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
