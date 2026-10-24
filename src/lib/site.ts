import { certifications } from "@/data/certifications";

/** Canonical URL. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain exists. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "recognition", label: "Recognition" },
  ...(certifications.length ? [{ id: "certifications", label: "Certifications" }] : []),
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
