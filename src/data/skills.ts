export type Rating = 1 | 2 | 3 | 4 | 5;
export type RatedSkill = { name: string; rating: Rating };

/** A skill area rated as a whole, with the specific skills it covers shown as tags. */
export type SkillArea = { title: string; rating: Rating; items: string[] };

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
    rating: 3,
    items: ["Deep Learning", "CNNs", "Image / Object Detection", "Model Training & Fine-tuning", "PyTorch"],
  },
  {
    title: "Embedded AI",
    rating: 2,
    items: ["ONNX Model Conversion", "On-Device Model Deployment"],
  },
  {
    title: "Research",
    rating: 3,
    items: ["Research Planning & Execution", "Model Evaluation", "Data Analysis & Visualization", "Quantitative Methods"],
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

const avg = (g: RatedGroup) => g.skills.reduce((s, k) => s + k.rating, 0) / g.skills.length;

/** Overview shown as waves at the bottom of Skills: each area's rating out of 100. */
export const proficiencyOverview: { label: string; value: number }[] = [
  { label: "AI & CV", value: skillAreas[0].rating * 20 },
  { label: "Embedded AI", value: skillAreas[1].rating * 20 },
  { label: "Tools", value: Math.round(avg(engineeringTools) * 20) },
  { label: "Research", value: skillAreas[2].rating * 20 },
  { label: "Professional", value: Math.round(avg(professional) * 20) },
];
