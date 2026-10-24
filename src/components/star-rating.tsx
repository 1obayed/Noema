export function StarRating({ value, max = 5, label }: { value: number; max?: number; label: string }) {
  return (
    <span role="img" aria-label={`${label}: ${value} out of ${max}`} className="inline-flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`size-4 ${i < value ? "fill-accent text-accent" : "fill-transparent text-line-strong"}`}
        >
          <path
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            d="M10 1.8l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.42 5.06 17l.94-5.5-4-3.9 5.53-.8L10 1.8z"
          />
        </svg>
      ))}
    </span>
  );
}
