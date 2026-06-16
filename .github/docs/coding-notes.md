
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
- Timeline-specific styles live in `src/styles/_timeline.scss` and are imported through `src/styles/global.scss`.
- The timeline uses a muted rail plus a green progress rail driven by the `--timeline-progress` CSS custom property.
- Timeline polish should stay calm and healthcare-professional: restrained shadows, readable dates, visible text labels, and subtle accent colour only.

## File Organisation Notes

- Reusable UI components go in `src/components/`.
- Timeline UI components are grouped under `src/components/timeline/`.
- Small client-side enhancements live in `src/scripts/`; `src/scripts/timeline-progress.ts` owns the timeline scroll-progress calculation.
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
- Timeline entries use ordered-list semantics and keep milestone details server-rendered for static-first accessibility.
- The timeline remains readable if JavaScript fails because the muted rail, dots, dates, and content are server-rendered.

## Timeline Scroll Progress

- `ScrollTimeline.astro` adds `data-scroll-timeline`, a muted rail, and a green progress rail.
- `timeline-progress.ts` calculates progress from the timeline bounding rectangle and viewport height.
- The script batches scroll and resize work with `requestAnimationFrame`.
- Progress is clamped between `0` and `100` before writing `--timeline-progress` on the timeline wrapper.
- CSS uses `height: var(--timeline-progress)` for the green rail.
- `prefers-reduced-motion: reduce` disables the rail height transition while preserving the progress state.
- Desktop and mobile share the same script; CSS repositions the rail for the wider date/rail/content layout.
- Timeline hover lift is decorative only and is disabled under reduced-motion; no content depends on hover.
- Optional timeline schema fields currently include `dateLabel`, `highlight`, and `featured`.
- Use `dateLabel` only for broad or editorial date display where the underlying `startDate`/`endDate` still preserve sortability.
- Use `highlight` for short emphasis text derived from existing facts; do not invent new claims for visual polish.
- Desktop timeline rows use an explicit three-column grid: date column, narrow marker/rail column, and flexible content column.
- The rail position is calculated from the same timeline column variables used by `.timeline-item`, so the progress rail stays independent from card width.
- Timeline content cards must stay in the third grid column at `width: 100%` with a readable max width; do not place cards inside the marker/rail column.
- At large desktop widths, timeline entries use a more editorial treatment: large date text on the left, fixed centre rail, and broad content panels on the right rather than boxed narrow cards.
- The editorial three-column timeline layout starts at the `xl` breakpoint; tablet and narrower desktop widths keep the readable left-rail/content layout to avoid card squeeze when DevTools or split panes reduce viewport width.
- In the `xl` timeline layout, the content track uses `minmax(38rem, 1fr)` and the date track is kept compact so title/body text cannot collapse into a word-per-line column.
- Final QA expectation: validate timeline changes with `npm run build`, generated static HTML, timeline-specific SCSS/script review, and manual browser review when available because this repo does not include screenshot automation tooling.

## Sitewide Design Consistency Direction

- Reuse the timeline design language sitewide through shared primitives, not page-by-page decorative overrides.
- Candidate shared patterns: page intro blocks, section eyebrow labels, calmer card hierarchy, badge/tag treatment, status labels, and CTA row utilities.
- Prioritise replacing existing inline styles in listing pages and CTA blocks with reusable SCSS classes.
- Keep the timeline-specific rail/progress pattern scoped to timeline-like content; do not apply it as a general decoration.
- Apply visual upgrades in stages: first shared partials/components, then high-traffic pages, then detail pages.
- Next implementation priority is the homepage: hero, featured projects, expertise cards, case study preview, and calls to action should feel like the front door to the same premium system as the timeline.
- Projects should become a curated evidence wall grouped by themes such as healthcare interoperability, architecture/API prototypes, learning/teaching projects, and AI-assisted development.
- Case studies should become more editorial technical articles with challenge, approach, outcome, standards/technology strips, key decisions, and what the work demonstrates.
- About should be the narrative companion to the timeline, explaining motivation, standards/software/delivery bridging, prototype practice, documentation, governance, and stakeholder work.
- Consider renaming Blog to Notes, Technical Notes, Interoperability Notes, or Field Notes if the section remains practical and documentation-led rather than a conventional blog.

## Future Ideas

- Add GitHub API integration later.
- Add downloadable CV later.
- Add a small static FHIR/CDA educational demo.
- Add optional dark mode later.
- Add custom domain later.
