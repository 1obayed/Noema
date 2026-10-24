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
    "Electrical & Electronic Engineering Undergraduate",
    "Researcher",
    "Technology Entrepreneur",
    "AI & Computer Vision Enthusiast",
  ],
  headline: "Engineering ideas into real-world impact.",
  intro:
    "I study Electrical and Electronic Engineering at BRAC University, research computer vision and deep learning at LaSSET, and co-found ventures that turn AI into tools people use every day.",
  location: "Dhaka, Bangladesh",
  email: "1obayedreza@gmail.com",
  /**
   * Phone stays hidden until the owner approves showing it publicly.
   * To show it: set showPhone to true and fill in phone.
   */
  showPhone: false as boolean,
  phone: "" as string,
  links: {
    linkedin: "https://www.linkedin.com/in/1obayed",
    github: "https://github.com/1obayed",
  },
  /** Public résumé (phone number removed). Replace the file to update it. */
  resume: "/resume/Md-Obayed-Reza-Hridoy-Resume.pdf",
  about: [
    "I'm an Electrical and Electronic Engineering undergraduate at BRAC University with a focus on where hardware meets intelligence. My research sits in computer vision: image-based detection using deep learning and CNN-based approaches, built and evaluated with Python, PyTorch, MATLAB and Simulink.",
    "Alongside research, I build. I co-founded Tornetec, where I lead research, strategy and team management for an IT startup focused on integrating AI into everyday life, and I co-founded GreenSync, a smart waste management system with a reward-based engagement model that has received grant support through the University Innovation Hub Program and the Hult Prize.",
    "What ties it together is a preference for engineering that leaves the lab: prototypes aligned with real needs, interdisciplinary teams, and plans that hold up when they meet the world.",
  ],
  focus: [
    "Computer vision & image-based detection",
    "Deep learning & CNNs",
    "Embedded vision for robotics",
    "Research planning & execution",
    "Technology entrepreneurship",
  ],
} as const;
