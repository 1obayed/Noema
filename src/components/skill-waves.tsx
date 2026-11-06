/** Overlapping bell curves, one per skill area, height = value out of 100. */
export function SkillWaves({ data }: { data: { label: string; value: number }[] }) {
  const W = 600;
  const base = 200;
  const maxH = 170;
  const half = 95; // half-width of each wave; neighbours overlap
  const step = (W - 2 * half) / Math.max(data.length - 1, 1);
  const centre = (i: number) => half + step * i;
  const styles = ["outline", "solid", "outline", "muted"] as const;

  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${base + 2}`} className="h-auto w-full" role="img" aria-label="Skill proficiency overview">
        <title>{data.map((d) => `${d.label}: ${d.value} out of 100`).join(", ")}</title>
        {data.map((d, i) => {
          const c = centre(i);
          const h = (d.value / 100) * maxH;
          const top = base - h;
          const path = `M${c - half},${base} C${c - half * 0.45},${base} ${c - half * 0.4},${top} ${c},${top} C${c + half * 0.4},${top} ${c + half * 0.45},${base} ${c + half},${base} Z`;
          const style = styles[i % styles.length];
          const fill = style === "solid" ? "fill-ink" : style === "muted" ? "fill-ink-subtle" : "fill-bg";
          const text = style === "outline" ? "fill-ink" : "fill-bg";
          return (
            <g key={d.label}>
              <path d={path} className={`${fill} stroke-ink`} strokeWidth={style === "outline" ? 1.5 : 0} />
              <text x={c} y={top + Math.max(h * 0.45, 26)} textAnchor="middle" className={`${text} font-sans text-[18px]`}>
                {d.value}
              </text>
            </g>
          );
        })}
        <line x1="0" x2={W} y1={base} y2={base} className="stroke-ink" strokeWidth="1.5" />
      </svg>
      <figcaption>
        <ul className="relative mt-3 h-8 text-[10px] font-medium text-ink-muted sm:text-[11px] sm:tracking-[0.1em] sm:uppercase">
          {data.map((d, i) => (
            <li
              key={d.label}
              className="absolute top-0 -translate-x-1/2 text-center leading-tight"
              style={{ left: `${(centre(i) / W) * 100}%`, width: `${(step / W) * 100}%` }}
            >
              {d.label}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
