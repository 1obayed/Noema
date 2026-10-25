import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Section } from "../section";
import { Tag } from "../button";
import { GitHubIcon } from "../icons";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";

/** Abstract cover used until real project media is supplied. Not a screenshot. */
function GeneratedCover({ project, index }: { project: Project; index: number }) {
  const seed = project.name.length + index * 7;
  return (
    <div aria-hidden="true" className="bg-grid relative h-full w-full overflow-hidden bg-bg-elevated">
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 5 }, (_, i) => (
          <circle
            key={i}
            cx={index % 2 ? 300 : 100}
            cy={120}
            r={30 + i * 34 + (seed % 9)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={i === 2 ? "text-ink" : "text-line-strong"}
            strokeDasharray={i % 2 ? "2 6" : undefined}
          />
        ))}
      </svg>
      <span className="absolute bottom-5 left-6 font-display text-5xl tracking-tight text-ink sm:text-6xl">
        {project.name}
      </span>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      label="Projects"
      band
      title="Featured projects."
      intro="Systems I'm building and researching, from smart waste infrastructure to vision for disaster-response rovers."
    >
      <ul className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug} data-reveal>
            <article
              aria-labelledby={`project-${project.slug}`}
              className="group flex h-full flex-col overflow-hidden border border-line-strong/70 bg-surface transition-colors hover:border-line-strong"
            >
              <div className="aspect-[5/3] border-b border-line">
                {project.image ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 1024px) 560px, 95vw"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <GeneratedCover project={project} index={i} />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <p className="text-xs font-medium tracking-[0.14em] text-ink-subtle uppercase">{project.period}</p>
                  {project.recognition ? (
                    <p className="inline-flex items-center gap-1.5 bg-ink px-3 py-1.5 text-xs text-bg">
                      <Award className="size-3.5" aria-hidden="true" />
                      {project.recognition}
                    </p>
                  ) : null}
                </div>
                <h3 id={`project-${project.slug}`} className="mt-4 font-display text-3xl tracking-tight break-words">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-ink-subtle">{project.role}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{project.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                  {project.highlights.map((h) => (
                    <li key={h} className="relative pl-5 before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:bg-ink">
                      {h}
                    </li>
                  ))}
                </ul>
                {project.tags?.length ? (
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
                    {project.tags.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {project.repoUrl || project.liveUrl ? (
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 border border-line-strong px-4 text-xs font-medium hover:border-ink"
                      >
                        <GitHubIcon className="size-4" /> Source
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 bg-ink px-4 text-xs font-medium text-bg hover:opacity-80"
                      >
                        <ExternalLink className="size-4" aria-hidden="true" /> Live
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
