export const profile = {
  name: "Md Obayed Reza Hridoy",
  /** Hero treatment: small faded prefix/suffix around the emphasized middle names. */
  nameParts: { prefix: "Md", main: "Obayed Reza", suffix: "Hridoy" },
  portrait: {
    src: "/images/portrait.webp",
    alt: "Portrait of Md Obayed Reza Hridoy",
    width: 960,
    height: 1199,
  },
  shortName: "Obayed",
  initials: "OR",
  identity: [
    "Electrical & Electronic Engineering Student",
    "Researcher",
    "Technology Entrepreneur",
    "AI & Computer Vision",
  ],
  headline: "Learning to build intelligent systems, from circuits to code.",
  intro:
    "I'm studying Electrical and Electronic Engineering at BRAC University. My research interests are embedded systems and embedded AI: TinyML, computer vision and CNN-based detection running on small, low-power hardware.",
  location: "Dhaka, Bangladesh",
  email: "1obayedreza@gmail.com",
  /** Set showPhone to false to hide the number everywhere on the site. */
  showPhone: true as boolean,
  phone: "+880 1924 043072" as string,
  links: {
    linkedin: "https://www.linkedin.com/in/1obayed",
    github: "https://github.com/1obayed",
    instagram: "https://www.instagram.com/1obayed",
    facebook: "https://www.facebook.com/1obayed",
  },
  /** Same username on every platform. */
  handle: "1obayed",
  /** Downloadable résumé. Replace the file to update it. */
  resume: "/resume/Md-Obayed-Reza-Hridoy-Resume.pdf",
  about: [
    "I'm an Electrical and Electronic Engineering student at BRAC University. I'm most interested in what happens when intelligence moves onto the device itself: embedded systems, embedded AI and TinyML, where models have to fit into small, low-power hardware.",
    "As an undergraduate researcher at LaSSET, I work on computer vision and image-based detection using deep learning and CNN-based approaches. With BRACU Alter, I co-lead the AI & Vision sub team, training detection models for a rover that runs on embedded vision hardware.",
    "Outside the lab, I co-founded Tornetec, where I lead research, strategy and team management, and GreenSync, a smart waste management system that received grant support through the University Innovation Hub Program and the Hult Prize.",
  ],
  focus: [
    "Embedded AI",
    "Embedded systems & firmware engineering",
    "TinyML (tiny machine learning)",
    "Computer vision & image-based detection",
    "Deep learning & CNNs",
    "Technology entrepreneurship",
  ],
} as const;
