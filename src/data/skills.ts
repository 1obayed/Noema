export type Rating = 1 | 2 | 3 | 4 | 5;
export type RatedSkill = { name: string; rating: Rating };

/** A skill area with one or more rated lines, and the specific skills it covers shown as tags. */
export type SkillArea = { title: string; ratings: RatedSkill[]; items: string[] };

/** A group where each skill carries its own rating. */
export type RatedGroup = { title: string; skills: RatedSkill[] };

// All ratings are self-assessed by the owner, out of 5.

export const languages: RatedSkill[] = [
  { name: "C/C++", rating: 3 },
  { name: "Python", rating: 2 },
  { name: "Java", rating: 2 },
];

export const engineeringTools: RatedGroup = {
  title: "Engineering Tools",
  skills: [
    { name: "MATLAB", rating: 3 },
    { name: "Simulink", rating: 2 },
    { name: "PSpice", rating: 3 },
  ],
};

export const skillAreas: SkillArea[] = [
  {
    title: "AI & Computer Vision",
    ratings: [{ name: "Overall", rating: 3 }],
    items: ["Deep Learning", "CNNs", "Image / Object Detection", "Model Training & Fine-tuning", "PyTorch"],
  },
  {
    title: "Embedded Systems & AI",
    ratings: [
      { name: "Embedded AI", rating: 2 },
      { name: "Embedded Systems & Firmware", rating: 2 },
    ],
    items: ["ONNX Model Conversion", "On-Device Model Deployment"],
  },
  {
    title: "Research",
    ratings: [{ name: "Overall", rating: 3 }],
    items: ["Literature Review", "Research Planning & Execution", "Model Evaluation", "Data Analysis & Visualization", "Quantitative Methods"],
  },
];

export const professional: RatedGroup = {
  title: "Professional",
  skills: [
    { name: "Project Management", rating: 4 },
    { name: "Interdisciplinary Collaboration", rating: 4 },
    { name: "Strategic Planning", rating: 4 },
  ],
};

const avg = (skills: RatedSkill[]) => skills.reduce((s, k) => s + k.rating, 0) / skills.length;
const score = (skills: RatedSkill[]) => Math.round(avg(skills) * 20);

/** Overview shown as waves at the bottom of Skills: each area's rating out of 100. */
export const proficiencyOverview: { label: string; value: number }[] = [
  { label: "AI & CV", value: score(skillAreas[0].ratings) },
  { label: "Embedded", value: score(skillAreas[1].ratings) },
  { label: "Tools", value: score(engineeringTools.skills) },
  { label: "Research", value: score(skillAreas[2].ratings) },
  { label: "Professional", value: score(professional.skills) },
];
