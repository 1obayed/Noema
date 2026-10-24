export type RatedSkill = { name: string; rating: 1 | 2 | 3 | 4 | 5 };
export type SkillGroup = { title: string; items: string[] };

/** Self-assessed ratings out of 5. Only programming languages carry a rating. */
export const languages: RatedSkill[] = [
  { name: "C", rating: 3 },
  { name: "Python", rating: 2 },
  { name: "C++", rating: 2 },
  { name: "Java", rating: 1 },
];

export const skillGroups: SkillGroup[] = [
  { title: "AI & Computer Vision", items: ["Computer Vision", "PyTorch", "Deep Learning", "Convolutional Neural Networks", "Image/Object Detection"] },
  { title: "Engineering Tools", items: ["MATLAB", "Simulink"] },
  { title: "Research", items: ["Data Analysis and Visualization", "Quantitative Research Methods", "Research Planning and Execution"] },
  { title: "Professional", items: ["Project Management", "Interdisciplinary Collaboration", "Strategic Planning"] },
];
