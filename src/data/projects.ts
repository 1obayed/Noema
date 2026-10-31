import type { Project } from "./types";

/**
 * Add a project by appending an object. Only fill repoUrl / liveUrl / image
 * when they exist; empty fields are simply not rendered.
 */
export const projects: Project[] = [
  {
    slug: "greensync",
    name: "GreenSync",
    role: "Co-Founder, Systems Architect & Lead Researcher",
    period: "2025 – Present",
    summary:
      "A technology-driven smart waste management system with a reward-based user engagement model.",
    highlights: [
      "Leads project planning, research coordination, and development of the system.",
      "Shapes the systems architecture and development roadmap.",
      "Serves as founding Project Manager and Co-Founder while contributing to ongoing research.",
    ],
    tags: ["Systems Architecture", "Research", "Project Management"],
    recognition: "UIHP & Hult Prize — Grant-Awarded Project",
    link: { label: "greensync.bd", href: "https://greensync.bd" },
  },
  {
    slug: "bracu-alter",
    name: "BRACU Alter",
    role: "Co-Lead, AI & Vision Sub Team",
    period: "2025 – 2026",
    summary:
      "Computer vision and deep learning for image-based detection in disaster environments, supporting rover navigation.",
    highlights: [
      "Works on real-time multi-class object detection for rover navigation.",
      "Trains and fine-tunes detection models.",
      "Targets deployment on embedded vision hardware.",
    ],
    tags: ["Computer Vision", "Deep Learning", "Object Detection", "Embedded Vision"],
    recognition: "Ideation 5.0",
    link: { label: "BRACU Alter on Facebook", href: "https://www.facebook.com/p/BRACU-ALTER-61557795005542/" },
  },
];
