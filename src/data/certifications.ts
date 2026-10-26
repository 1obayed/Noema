import type { Certification } from "./types";

/**
 * Every field here is taken from the certificate PDFs themselves.
 * To add one: put the PDF in /public/certifications, a first-page image in
 * /public/certifications/thumbs (see README), then append an entry.
 * An empty list hides the section and its nav link automatically.
 */
export const certifications: Certification[] = [
  {
    title: "Hult Prize 2026 Bangladesh National Competition",
    issuer: "Hult Prize Foundation",
    issued: "2026",
    issuedISO: "2026",
    description: "Recognized as a member of a competing startup at the national competition.",
    pdf: "/certifications/hult-prize-2026-bangladesh-national-competition.pdf",
    thumbnail: { src: "/certifications/thumbs/hult-prize-2026-bangladesh-national-competition.webp", width: 900, height: 634 },
    pages: 1,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issued: "July 6, 2024",
    issuedISO: "2024-07-06",
    description: "Certificate of Course Completion — student-level credential.",
    pdf: "/certifications/cisco-introduction-to-cybersecurity.pdf",
    thumbnail: { src: "/certifications/thumbs/cisco-introduction-to-cybersecurity.webp", width: 900, height: 695 },
    pages: 1,
  },
  {
    title: "Advancing Sustainable Development in Practice",
    issuer: "UNITAR",
    via: "United Nations Institute for Training and Research, with UNDP–UNEP Poverty-Environment Action",
    issued: "March 15, 2024",
    issuedISO: "2024-03-15",
    description: "Certificate of Completion — e-learning course.",
    pdf: "/certifications/unitar-advancing-sustainable-development.pdf",
    thumbnail: { src: "/certifications/thumbs/unitar-advancing-sustainable-development.webp", width: 900, height: 636 },
    pages: 1,
  },
  {
    title: "Equity in Informal STEM Learning: Using the Equity Compass",
    issuer: "UCL (University College London)",
    via: "FutureLearn",
    issued: "January 31, 2024",
    issuedISO: "2024-01-31",
    description: "Certificate of Achievement with transcript. 3 weeks, 2 hours per week.",
    pdf: "/certifications/ucl-equity-in-informal-stem-learning.pdf",
    thumbnail: { src: "/certifications/thumbs/ucl-equity-in-informal-stem-learning.webp", width: 900, height: 1273 },
    pages: 2,
    verifyUrl: "https://futurelearn.com/certificates/can66qo",
  },
  {
    title: "Introduction to Physical Computing",
    issuer: "Lancaster University & Institute of Coding",
    via: "FutureLearn",
    issued: "January 10, 2024",
    issuedISO: "2024-01-10",
    description: "Certificate of Achievement with transcript. 2 weeks, 2 hours per week.",
    pdf: "/certifications/lancaster-introduction-to-physical-computing.pdf",
    thumbnail: { src: "/certifications/thumbs/lancaster-introduction-to-physical-computing.webp", width: 900, height: 1273 },
    pages: 2,
    verifyUrl: "https://futurelearn.com/certificates/evmh7td",
  },
];
