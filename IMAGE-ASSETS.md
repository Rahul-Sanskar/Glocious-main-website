# Glocious — Image Asset Manifest

Single reference for every image used in the site, where it appears, and what is
known about its provenance. Update this file whenever an image is added or moved.

Images live in `public/images/` (flat, as the repository already structured them).
They are served through `next/image`, which downsizes and negotiates **WebP/AVIF**
per request — so no pre-converted variants are stored in the repository, and none
should be committed.

---

## 1. Assets integrated into the UI

| File | Section / component | Rendered as | Dimensions | Alt text |
| --- | --- | --- | --- | --- |
| `communication-ecosystem.jpg` | Homepage → Communication Ecosystem, split header (right) | `next/image`, natural aspect | 1376 × 768 | Abstract visual of connected business communication channels |
| `digital-growth.jpg` | Homepage → Digital Growth, sticky intro column (below CTA, `lg+` only) | `next/image`, natural aspect | 1376 × 768 | Abstract visual representing digital growth and campaign performance |
| `technology-infrastructure.jpg` | Homepage → Technology Solutions, split header (left) | `next/image`, natural aspect | 1376 × 768 | Abstract visual of modern cloud and application infrastructure |
| `industries.jpg` | Homepage → Industries, full-width banner (`object-cover`, 180/240/300px tall) | `next/image` `fill` | 1376 × 768 | Abstract visual representing the industries Glocious serves |
| `solution-communication.jpg` | `/solutions/[slug]` hero — category **Communication** (7 pages) | `next/image`, natural aspect | 1376 × 768 | Abstract illustration of multi-channel business messaging and voice infrastructure |
| `solution-digital-growth.jpg` | `/solutions/[slug]` hero — category **Digital Growth** (2 pages) | `next/image`, natural aspect | 1376 × 768 | Abstract illustration of digital marketing analytics and campaign performance |
| `solution-technology.jpg` | `/solutions/[slug]` hero — category **Technology** (1 page) | `next/image`, natural aspect | 1376 × 768 | Abstract illustration of modern web application and cloud infrastructure |
| `solution-ai-automation.jpg` | `/solutions/[slug]` hero — category **AI & Automation** (1 page) | `next/image`, natural aspect | 1376 × 768 | Abstract illustration of AI-assisted communication automation workflows |
| `hero-communication-network.jpg` | Social preview only — `openGraph.images` / `twitter.images` in `src/app/layout.tsx` | `<meta>` URL, not rendered in the page | 1200 × 896 | Glocious Infotech — Business Communication & Digital Growth |

The category → image mapping is data, not markup: see `SOLUTION_CATEGORY_IMAGES`
in `src/data/solutions.ts`.

**Not used as page imagery, by design**

- The homepage hero keeps its CSS/SVG channel-ring visual. It is the strongest
  asset on the page and a static photograph would be a downgrade.
- Communication, Technology, Digital Growth and Industries sections use icons,
  hairline grids and `SectionHeading` rhythm; one image per section is enough, so
  the icon grids were left alone rather than replaced with photo cards.

---

## 2. Provenance and licensing status — **action required**

All files below were already present in the repository before this task. The eight
section/solution images were added by the commit `d4d2eac` ("feat: add images").

Verified facts:

- The repository stores **no source URL, creator, licence or attribution** for any
  of these files.
- The image files themselves carry **no descriptive EXIF/IPTC metadata** (checked —
  the only tags present are the two the encoder writes by default).
- No attribution requirement is recorded anywhere in the repo.

Consequence: **the licence of the pre-existing assets could not be independently
verified from the repository.** No source URL has been invented here, and no
attribution claim has been asserted, because neither could be substantiated.

Before this goes to production, the owner should confirm for each asset either
(a) that it was generated in-house / by the team's own image pipeline, or
(b) the upstream source URL and its licence terms — and fill in the table below.

| File | Source URL | Creator | Licence | Attribution required |
| --- | --- | --- | --- | --- |
| `communication-ecosystem.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `digital-growth.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `technology-infrastructure.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `industries.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `solution-communication.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `solution-digital-growth.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `solution-technology.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `solution-ai-automation.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |
| `hero-communication-network.jpg` | _unverified_ | _unverified_ | _unverified_ | _unknown_ |

---

## 3. Assets in `public/images/` not referenced by any component

Left in place rather than deleted, because they predate this task and the owner may
still want them. They are **not** shipped to users — nothing links to them.

| File | Notes |
| --- | --- |
| `digital-growth-editorial.jpg` | Alternative Digital Growth visual, never wired up. |
| `web-development-composition.jpg` | Alternative Technology visual, never wired up. |
| `mobile_app.png` | Legacy Parv Infosoft asset — referenced only by the legacy `/services/[slug]` demo routes. |
| `services_tech.png` | Legacy Parv Infosoft asset — same. |
| `solutions_dashboard.png` | Legacy Parv Infosoft asset — same. |
| `training_class.png` | Legacy Parv Infosoft asset — same. |
| `about_ai.png`, `blog_1.png`, `cta_bg.png`, `dashboard_ui.png`, `founder.png`, `hero_bg.png`, `program_1.png`, `program_2.png`, `services_ai.png` (in `public/`) | Legacy Parv Infosoft assets, unreferenced. |

Recommendation: delete the legacy Parv assets and the two unused alternates once
the legacy `/services/[slug]` routes are retired, so `public/` reflects what the
site actually serves.

---

## 4. Custom illustrations (no image files)

These are built in-code, so they have no licensing surface and adapt to both themes
via design tokens:

- `src/components/Hero.tsx` — `HeroVisual` channel ring + `HeroGrid` architectural grid.
- `src/components/CinematicStoryScroll.tsx` — `NodeDot`, `FlowArrow`, `SignalBars`, `MessageIcon` inline SVGs.
- `public/glocious-icon.svg` — favicon / app icon.
