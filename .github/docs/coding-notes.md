
## Suggested `docs/coding-notes.md`

I’d also create this file from the beginning:

```markdown
# Coding Notes

## Purpose

This file records technical decisions, implementation notes, patterns, and reminders for the Astro portfolio project.

It is not a progress journal. Progress updates belong in `docs/journal.md`.

## Current Technical Direction

- Static-first Astro site.
- Markdown/MDX for content-heavy pages.
- Astro content collections for projects, case studies, and timeline entries.
- Sass/SCSS for styling.
- GitHub Pages as the preferred deployment target.
- Minimal JavaScript.
- No backend unless explicitly required later.

## Styling Notes

- Use mobile-first CSS.
- Use Sass partials.
- Avoid inline CSS.
- Keep components reusable.
- Prefer semantic layout sections.
- Use calm, professional colours.
- Ensure visible keyboard focus states.

## File Organisation Notes

- Reusable UI components go in `src/components/`.
- Route pages go in `src/pages/`.
- Shared layouts go in `src/layouts/`.
- Content collections go in `src/content/`.
- Sass files go in `src/styles/`.
- Public static assets go in `public/`.
- Documentation goes in `docs/`.
- Scripts, if needed, go in `scripts/`.

## Security Notes

- Do not commit secrets.
- Do not hardcode tokens, API keys, or credentials.
- Do not invent or expose private contact details.
- Use public GitHub and LinkedIn links only unless an email address is explicitly provided.

## Accessibility Notes

- Use semantic headings.
- Maintain good colour contrast.
- Add alt text for meaningful images.
- Ensure keyboard focus is visible.
- Use descriptive link text.
- Test mobile navigation.

## Future Ideas

- Add GitHub API integration later.
- Add downloadable CV later.
- Add a small static FHIR/CDA educational demo.
- Add optional dark mode later.
- Add custom domain later.