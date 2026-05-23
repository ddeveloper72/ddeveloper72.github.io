---

# 📄 GitHub Copilot Instructions — Add a Blog to This Astro Project

These instructions tell GitHub Copilot how to generate blog‑related files, layouts, and content inside this repository.

---

## 1. 📁 Blog Content Collection Setup

When creating or modifying blog functionality, Copilot must:

- Use **Astro Content Collections**
- Create or update the following structure:

```
src/
  content/
    blog/
      <post>.md
    config.ts
```

### `src/content/config.ts`

Copilot must ensure this file contains:

```ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    layout: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
```

---

## 2. 📝 Blog Post Format (Markdown)

When Copilot generates a new blog post, it must follow this pattern:

```md
---
title: "Post Title"
description: "Short summary of the post"
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD
tags: ["tag1", "tag2"]
layout: "../../layouts/BlogPost.astro"
---

Your Markdown content goes here.
```

Rules:

- Use ISO dates (`YYYY-MM-DD`)
- Use lowercase tags
- Use relative layout path exactly as shown

---

## 3. 📄 Blog Index Page

Copilot must create or update:

```
src/pages/blog.astro
```

Using this pattern:

```astro
---
import { getCollection } from "astro:content";
const posts = await getCollection("blog");
---

<h1>Blog</h1>

<ul>
  {posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => (
      <li>
        <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
        <p>{post.data.description}</p>
      </li>
    ))}
</ul>
```

Copilot must not change the sorting logic unless asked.

---

## 4. 🎨 Blog Post Layout

Copilot must create or update:

```
src/layouts/BlogPost.astro
```

With:

```astro
---
const { title, pubDate, updatedDate } = Astro.props;
---

<article>
  <h1>{title}</h1>
  <time>{pubDate.toDateString()}</time>
  {updatedDate && <p>Updated: {updatedDate.toDateString()}</p>}
  <slot />
</article>
```

---

## 5. 🧭 Routing Rules

Copilot must follow these rules:

- Blog index lives at `/blog`
- Each post lives at `/blog/<slug>/`
- Slugs are generated automatically from filenames
- Filenames must be lowercase with hyphens:

```
my-first-post.md
interoperability-in-europe.md
```

---

## 6. 🧩 Styling & Components

When Copilot adds styling:

- Use existing project conventions
- Prefer utility classes already in the repo
- Do not introduce CSS frameworks unless requested
- Keep layouts minimal and readable

---

## 7. ✍️ Writing New Blog Posts

When Copilot generates a new post:

- Place it in `src/content/blog/`
- Use the required frontmatter
- Suggest tags based on content
- Keep paragraphs short and readable
- Use Markdown headings (`##`, `###`) for structure

Example command to Copilot inside the repo:

> “Create a new blog post about my work with openEHR and FHIR in Ireland.”

Copilot should then generate a valid Markdown file following the rules above.

---

## 8. 🚫 What Copilot Must NOT Do

- Do not create routes outside `/blog/`
- Do not use React/JSX components unless explicitly asked
- Do not generate posts without frontmatter
- Do not modify unrelated site pages unless instructed
- Do not introduce new build tools or dependencies

---

## 9. ✔️ Optional Enhancements Copilot May Suggest (Only When Asked)

- RSS feed (`@astrojs/rss`)
- Pagination
- Tag filtering pages
- Author metadata
- Syntax highlighting for code blocks

---
