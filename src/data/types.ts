export type Link = { label: string; href: string };

export type Experience = {
  organization: string;
  role: string;
  period: string;
  /** Years in the role, shown large (e.g. "3+"). Counted from the years in period. */
  duration?: string;
  location?: string;
  /** Organization's website or official page; the name links to it. */
  link?: Link;
  kind: "Industry" | "Research" | "Venture";
  points: string[];
  tools?: string[];
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags?: string[];
  /** Short line shown as a badge, e.g. a grant or award tied to the project. */
  recognition?: string;
  /** Optional cover image in /public/images. Leave empty to use the generated cover. */
  image?: { src: string; alt: string; width: number; height: number };
  repoUrl?: string;
  liveUrl?: string;
  /** Official website or page, shown as a labelled button. */
  link?: Link;
};

export type Achievement = {
  title: string;
  /** Rank or type of recognition, e.g. "Champion". */
  distinction: string;
  organization: string;
  year?: string;
  description?: string;
  evidenceUrl?: string;
  kind: "Competition" | "Grant";
};

export type Certification = {
  title: string;
  issuer: string;
  /** Platform or partner shown under the issuer, if any. */
  via?: string;
  issued?: string;
  /** ISO date used for sorting. */
  issuedISO?: string;
  description?: string;
  pdf: string;
  thumbnail: { src: string; width: number; height: number };
  pages: number;
  verifyUrl?: string;
};

export type Education = {
  institution: string;
  credential: string;
  period: string;
  location?: string;
};
