import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-accent hover:text-accent-ink border border-transparent",
  secondary: "border border-line-strong bg-surface text-ink hover:border-ink",
  ghost: "border border-transparent text-ink-muted hover:text-ink",
};

export const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200 whitespace-nowrap";

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={`${buttonBase} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs text-ink-muted">
      {children}
    </span>
  );
}
