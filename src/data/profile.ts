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
  identity: ["Electrical & Electronic Engineering Student", "Undergraduate Researcher", "Tech Entrepreneur"],
  focusLine: ["Embedded Systems & Firmware", "Embedded AI & TinyML", "Deep Learning & Computer Vision"],
  headline: "Building intelligent systems, from circuits to code.",
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
    "I'm an Electrical and Electronic Engineering undergraduate at BRAC University, also pursuing an associate degree in Computer Science at the University of the People.",
    "My main interests lie in embedded systems, firmware development, embedded AI, and TinyML. I'm particularly interested in bringing deep learning and computer vision to resource-constrained hardware, where making a model work efficiently is just as important as making it accurate.",
    "Previously, I worked as an undergraduate researcher at LaSSET, focusing on computer vision and image-based detection using deep learning and CNN-based approaches. At BRACU Alter, I co-lead the AI & Vision sub-team, working on detection models for a rover's embedded vision system.",
    "I'm also a co-founder of Tornetec, a tech company focused on human-centric AI research and product development. Through Tornetec, I aim to develop practical AI-powered products that can make a meaningful difference in everyday life. I also co-founded GreenSync, a smart waste management initiative that received grant support through the University Innovation Hub Program and the Hult Prize.",
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
