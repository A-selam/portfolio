import { Experience, Education, Certification, Skill, CONTACT } from "./types";

export const CONTACTS: CONTACT[] = [
  {
    name: "Email",
    icon: "mdi:gmail",
    url: "mailto:abduselamsultanzakir@gmail.com",
  },
  {
    name: "GitHub",
    icon: "fa6-brands:github",
    url: "https://github.com/A-selam",
  },
  {
    name: "X",
    icon: "fa6-brands:x-twitter",
    url: "https://x.com/a_selam1",
  },
  {
    name: "LinkedIn",
    icon: "fa6-brands:linkedin-in",
    url: "https://linkedin.com/in/abduselam-s-05126b330/",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Python",
    icon: "devicon:python",
  },
  {
    name: "Go",
    icon: "devicon:go",
  },
  {
    name: "JavaScript",
    icon: "devicon:javascript",
  },
  {
    name: "Express",
    icon: "devicon:express",
  },
  // {
  //   name: "TypeScript",
  //   icon: "devicon:typescript",
  // },
  // {
  //   name: "React",
  //   icon: "devicon:react",
  // },
  // {
  //   name: "Next.js",
  //   icon: "devicon:nextjs",
  // },
  {
    name: "Node",
    icon: "devicon:nodejs",
  },
  {
    name: "Postgres",
    icon: "devicon:postgresql",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "Prisma",
    icon: "devicon:prisma",
  },
  // {
  //   name: "Supabase",
  //   icon: "devicon:supabase",
  // },
  // {
  //   name: "Docker",
  //   icon: "devicon:docker",
  // },
  // {
  //   name: "Tailwind",
  //   icon: "devicon:tailwindcss",
  // },
];

export const EXPERIENCE: Experience[] = [
  {
    type: "experience",
    role: "Software Engineer Intern",
    organization: "Eskalate",
    period: "07/2025 – 09/2025",
    logo: "/eskalate.png",
  },
];

export const EDUCATION: Education[] = [
  {
    type: "education",
    degree: "BSc. in Software Engineering",
    organization: "AASTU",
    period: "2022 - Present",
    logo: "/AASTU.png",
  },
];

export const CERTIFICATIONS: Certification[] = [
  // {
  //   type: "certification",
  //   title: "Google Data Analytics Professional Certificate",
  //   organization: "Google",
  //   date: "2024",
  //   logo: "/AASTU.png",
  //   url: "www.google.com",
  // },
  // {
  //   type: "certification",
  //   title: "Google Data Analytics Professional Certificate",
  //   organization: "Google",
  //   date: "2024",
  //   logo: "/AASTU.png",
  //   url: "www.google.com",
  // },
];
