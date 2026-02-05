import {
  Project,
  BlogPost,
  Experience,
  Education,
  Certification,
  Skill,
} from "./types";

export const SKILLS: Skill[] = [
  {
    name: "React",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD62PD7tTq_skKYiJJYm2H55c1qGQGB8hDMUac0OI8Vpc9ar1yyjSkdaR37DvxKh3XfekGzEgH-97HxittFmNFu4-jjzdIJ3YqDT5eC4uoZsTklcnG3_hDqFweEvlKstSHFNvpBOQcQ1Dmo6BxsZKAv7l5aiR3Ll294RHEGLQEvDxb0aYgB2STp4zJK_dnYZGGfWtlww1oAuR5W0mRs-yIeFyDqrBN1sPGF4SlfdsgvwsEXiQqJnGgNkAuARPtwRXfNIHoZpSWIGlI",
  },
  {
    name: "Next.js",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ONbHN904KuVYx36rDJyONSM1-EKUg7ML3nurl0MQzItA0tdvZIiQ2T4cgQOYVKLeQj5FKc-gfbSEjaQrTI1OKIcovQhIZnqAFxDq4wTJ1yUaphmnyFMn_fAGVQUWJgjAD39LXMLC7cqsmx-gQIcFHZk2gBSNcpb3JTkwFnKrthmhOoUVHcX2za90vRfN2WfXYsGeT7kLo0jdRx_CKOUfrvKa26PfuakklSHK0XkPSDazzkGdXUENAo1LuKsekZWIMJx0JkAqDA8",
  },
  {
    name: "TypeScript",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWWj_wO-TuNjBzzZlnUdzF9yAtoHF3AJv91HB4P2QLJKjwayHzlOsv0p-Vgw3Xr_CJXgEWxkZPFix7W5JWNyHvZbARmVkQMG8Sbxedb1G21TwU5RSIGWUwvaUTZcHdBiYY873DSRNImC8mOjqysXkDcwdWb8OhbSHkFvtbUlQGBhX_RzVdamOoWOy9tRV51b4g6neEcwmB3jBkyfIIv_MIwYYTkYtNyfzASI8t7LqYryuWBRP8Ty1VybMv8HKcyBWfIY1FofJw9qw",
  },
  { name: "Better Auth", icon: "lock", isTextIcon: true },
  {
    name: "Node",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw0aqY7rHcHFA4d9cFQhmAxLc-DiIiW5umr8PwPSGpML4EFqHQWCafJVqmdX3dClBqNZBKgMYubVbtbeNSRPcQpYLLaark66fQLTEMRIy4wOePe_3DN-wF89ITt-MrbFrsgE3zT9F2ZjhKuR8_okPWwOpe-P_r7ma93jWZa3Gn9Af8T9cXUs56tU4PxGKtUodXZz7aPArYRdQYFMYGX-UpwNCv4pwbW4HX2xC10Rl7V2iAW82_3-HH7mLPl2wkX9WnpnxGRfDWX9s",
  },
  {
    name: "Postgres",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiJEK_lST5bd9pLBSIsvYp_aOevJb0vAKNUgkHoDoo9dLBKyKGm6BPIPZ4q7HkhmVi4XnYpKxflo4xtw6GQ5fmqIdQ3nw_yotKZuDtqZqfNKNoz6iGKcRtsTpoUoNwTzE5Hq557oGPuApLzCu-enMg_I3NVSFkEQsnsxjlY2FJqsMEKq85bac0GygtZVdipouXnRAG0Uhux4mTViF5v4AzlcYyiiiFKmlqdzGrMnYjmPdTnV9auPfEvoicoFlV0W5_8xOuI3iF3rk",
  },
  {
    name: "Prisma",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2mMT8sWy6tU9koGNpHNVN2kdYRMqg2AjUXUsTyyzK_hopxmeam-punLl0C8Dt0R_07PyxezM0JqsZSlo99yz-b7K-czul89p-ZIVaGdn5oJPIpWDO-GxwAUsYG_LsRtrLyc-nYBKn-XS7QS4otq4Juq4GcDBmzO29gikYe5cRmT1a0hlJ4L7s1e2ZjJJeJkxemPiofBl0K8tTKysv1DuRFmk7L6NAylOWgG34kD1xgiyndD4Kqij8gRDrY8MPxRmb82IOWrfNMbk",
  },
  {
    name: "Supabase",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFw4x_32Vv0d793EyzkB1rWS1NvHh-m8ZqWrqxzciuXyb9N913Yr8rOaSkNwd_WidZl_-2MAX3CmQw4E4NdAT45p6zvB_rsjlyKtpXF-GIBpZ5vjOEFctIq9JI5m4oxPfwoRwLUXBRUEMjv6jJPCiCscuL6SVO59hMgcm16tMf4j9Ds_ugMNq8FVi3kd5dJsjyuHLpm8VlkgNH3Up4yFevV22jvNpRz2H7RTnxLGEAncY_wGgevX3lcEihDOoD2DsY_AG9roAknmo",
  },
  {
    name: "Docker",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE-RgNFVokIDtRVpUBxMiGyiIlAQWRSE8mSnO8Q3p_83e-pSqrIr9z4N1C42DwWkQqSsrd9IO1b2ArEOXEzD3Vmk84hOe3zIqYqSiL2m35v-rupfSWw_x5_UlmwXGst85uJw1vlqPdKKz3uM5BXUBotCDtk-xCNBYuep5tQ-F-9TeFYCMZfjUj9WO2dXB8mlcTCQmYNtRNybfesiWPO-QLZHoyYaeDwsVlRESgMIqWVOUAhH3K20I597JvuAt95JlBkUBm-wzeoJs",
  },
  {
    name: "Tailwind",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD6M4oeGFL4RKXRPMsaKQUYVuu2gVs5CJbrHIo1nOF-AL_pmoVg2N6x4yVihaPM6tyjygEcs_uhgmzdxugVlajw0vvf98MZK47v-XRZDrTvf3-hC_GJ6ECQIqD8s6vIzaq6EOBSx4keA8iU8eOFf3xs1m195M5QHk9aS6EidmEPbBT5H_i7HZlSrSL_lB93kw5pIKZHIJ_SJqiSWTC7C02D1ZSlt3scUZS1MGuKRFxNEPQZJDTzssW3dB6wp_7w72hOikCCdJCEUE",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Software Architect",
    company: "TechCorp",
    period: "2022 - Present",
    icon: "corporate_fare",
  },
  {
    role: "Full Stack Engineer",
    company: "DataStream Systems",
    period: "2019 - 2022",
    icon: "database",
  },
  {
    role: "Backend Developer",
    company: "CloudNative Solutions",
    period: "2017 - 2019",
    icon: "layers",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Science",
    school: "Stanford University",
    period: "2020 - 2022",
    icon: "school",
  },
  {
    degree: "B.S. in Software Engineering",
    school: "MIT",
    period: "2016 - 2020",
    icon: "history_edu",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "AMAZON WEB SERVICES",
    year: "2023",
    icon: "verified",
  },
  {
    name: "Google Professional Cloud Architect",
    issuer: "GOOGLE CLOUD",
    year: "2022",
    icon: "workspace_premium",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CLOUD NATIVE COMPUTING FOUNDATION",
    year: "2022",
    icon: "shield",
  },
];
