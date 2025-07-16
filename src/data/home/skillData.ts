export type SkillData = {
  label: string;
  value: number;
  color: string;
  paragraphs: string[];
  list?: string[];
};

export const skillsData: SkillData[] = [
  {
    label: "Coding",
    value: 35,
    color: "rgba(76, 110, 145, 1)",
    paragraphs: [
      "I like writing code to simplify life by building applications that solve real problems. This site you’re exploring is built with React and Go — keeping things fast, clean, and purposeful.",
      "Tools I like:",
    ],
    list: ["React", "Go", "Docker", "Terraform", "Github Actions", "Postman"],
  },
  {
    label: "Kendo",
    value: 25,
    color: "rgba(44, 62, 80, 1)",
    paragraphs: [
      "Kendo shapes more than just physical skill—it builds presence, patience, and awareness. It’s a practice of clarity, both in movement and mindset. I started Kendo as a freshman in university, earned my shodan in early 2024, and have trained in dojos across the U.S. and around the world.",
      "My Go-to Waza:",
    ],
    list: ["Debana-Men", "Katate-Tsuki", "Gyaku-Do"],
  },
  {
    label: "Iaido",
    value: 10,
    color: "rgba(28, 28, 28, 1)",
    paragraphs: [
      "For me, Iaido is a calm practice that sharpens precision and control. I began learning Musō Jikiden Eishin-ryū in Salt Lake City, Utah, with a brief experience in Toyama Ryū in Orem. Though still early in my journey, it complements my path in Kendo and deepens my appreciation for disciplined movement.",
    ],
  },
  {
    label: "Fitness",
    value: 20,
    color: "rgba(185, 92, 56, 1)",
    paragraphs: [
      "My training centers on strength, explosiveness, and stability. Injury prevention comes before aesthetics, and athletic performance over appearance. Most of it happens with just a barbell.",
      "My Go-to lifts:",
    ],
    list: [
      "Power clean",
      "Jump squat",
      "Weighted pull-ups",
      "Standing press",
      "Turkish Get-Up",
    ],
  },
  {
    label: "Photography",
    value: 15,
    color: "rgba(110, 90, 140, 1)",
    paragraphs: [
      "Photography lets me chase light, frame feeling, and preserve moments that might quietly disappear.",
      "My usual captures:",
    ],
    list: ["Street", "Travel", "Portrait", "Everyday scenes"],
  },
];
