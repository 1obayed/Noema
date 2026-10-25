import type { Achievement } from "./types";

/** Leave year / description / evidenceUrl out unless verified. */
export const achievements: Achievement[] = [
  {
    distinction: "Champion",
    title: "Ideation 5.0",
    organization: "Ideation 5.0",
    kind: "Competition",
  },
  {
    distinction: "Second Runner-Up",
    title: "Hult Prize — BRAC University",
    organization: "Hult Prize — BRAC University",
    year: "2025",
    kind: "Competition",
  },
  {
    distinction: "National Round Participant",
    title: "Hult Prize Bangladesh",
    organization: "Hult Prize Bangladesh",
    kind: "Competition",
  },
  {
    distinction: "Grant-Awarded Project",
    title: "GreenSync",
    organization: "University Innovation Hub Program (UIHP) & Hult Prize",
    description: "Grant support awarded to GreenSync, the smart waste management system I co-founded.",
    kind: "Grant",
  },
];
