import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    readTime: z.string().optional(),
  }),
});

export const collections = {
  projects: projects,
  blog: blog,
};
