import { defineCollection, z } from 'astro:content';

// Projects collection schema
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()),
    repository: z.string().url(),
    demo: z.string().url().optional(),
    status: z.enum(['active', 'completed', 'in-progress', 'archived']),
    featured: z.boolean().default(false),
    caseStudy: z.string().optional(),
    publishDate: z.date(),
    order: z.number().optional()
  })
});

// Case studies collection schema
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    problem: z.string(),
    context: z.string(),
    technologies: z.array(z.string()),
    standards: z.array(z.string()).optional(),
    repository: z.string().url(),
    demo: z.string().url().optional(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
    order: z.number().optional()
  })
});

// Timeline collection schema
const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    role: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    description: z.string(),
    responsibilities: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    type: z.enum(['work', 'education', 'certification', 'project']).default('work'),
    order: z.number().optional()
  })
});

export const collections = {
  projects,
  'case-studies': caseStudies,
  timeline
};
