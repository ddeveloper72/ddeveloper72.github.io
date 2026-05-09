# Copilot Instructions

## Project Context

This project is Duncan Falconer's personal professional portfolio website.

The site should position Duncan as a Technical Architect and Healthcare Interoperability specialist, with experience in:

- HL7 FHIR
- CDA, XML, JSON
- MyHealth@EU and cross-border healthcare
- Patient Summary and medical imaging interoperability
- Python, Flask, Django, Django REST Framework
- Angular and TypeScript
- APIs, documentation, governance, and practical delivery

The site is built as a static-first Astro portfolio using Markdown/MDX content and Sass/SCSS styling.

## Working Style

Work in small, safe, reviewable changes.

Before making significant changes:

- Briefly explain what will be changed.
- Prefer simple, maintainable solutions over clever ones.
- Avoid large rewrites unless explicitly requested.
- Preserve existing structure and naming conventions where possible.
- Do not remove working code unless there is a clear reason.

After each major section:

- Update `docs/journal.md`.
- Add a short note explaining what changed.
- Record any important technical decisions.
- Suggest a suitable git commit message.

## Coding Notes

Use `docs/coding-notes.md` to record:

- Technical decisions
- Reusable patterns
- Styling conventions
- Known limitations
- Deployment notes
- Future improvement ideas

Keep coding notes factual and concise.

## Design Principles

Use a mobile-first design approach.

The site should be:

- Clean
- Professional
- Accessible
- Responsive
- Fast
- Easy to maintain
- Clear for both technical and non-technical readers

Avoid overly flashy effects. Animation should be subtle and purposeful.

Use semantic HTML wherever possible.

Prioritise readability and structure over visual complexity.

## Styling Rules

Use Sass/SCSS.

Do not use inline CSS.

Do not use hardcoded style attributes in components unless there is a very strong reason.

Prefer reusable Sass partials, for example:

- `src/styles/_variables.scss`
- `src/styles/_typography.scss`
- `src/styles/_layout.scss`
- `src/styles/_cards.scss`
- `src/styles/_buttons.scss`
- `src/styles/global.scss`

Use CSS custom properties where helpful for theme values.

Keep styling modular and predictable.

## Mobile-First Requirements

Design for small screens first, then enhance for larger screens.

Use responsive layout patterns such as:

- Single-column layout on mobile
- Two-column or card grid layouts on tablet and desktop
- Flexible spacing
- Fluid typography where appropriate

Check that navigation, cards, timelines, and code snippets work well on mobile.

Avoid fixed-width layouts that break on small screens.

## Accessibility Requirements

Follow accessibility best practices.

Ensure:

- Semantic heading order
- Descriptive link text
- Visible keyboard focus states
- Good colour contrast
- Alt text for meaningful images
- No reliance on colour alone to communicate meaning
- Buttons and links are easy to identify
- Code snippets remain readable on mobile

## Astro Requirements

Use Astro idiomatically.

Prefer:

- Astro components for layout and reusable UI
- Markdown or MDX for content-heavy pages
- Content collections for projects, case studies, and timeline entries
- Static generation by default

Keep client-side JavaScript minimal.

Do not add a backend unless explicitly requested.

Do not add unnecessary frameworks or libraries.

## Content Collections

Use Astro content collections for structured content.

Recommended collections:

- `projects`
- `case-studies`
- `timeline`

Project entries should include:

- Title
- Description
- Tags
- Technologies
- GitHub repository URL
- Optional live demo URL
- Status
- Optional case study reference

Case studies should follow this structure:

- Problem
- Context
- What I built or explored
- Technologies used
- Standards involved
- What I learned
- Repository link
- Future improvements

## File Organisation

Keep source files organised and predictable.

Recommended structure:

```text
src/
  components/
  content/
  layouts/
  pages/
  styles/
  assets/
docs/
  journal.md
  coding-notes.md
  project-brief.md