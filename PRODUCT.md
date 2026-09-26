# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two co-equal primary audiences, evaluating the same evidence differently:

- **Recruiters / hiring managers** screening candidates for junior full-stack developer roles — checking technical depth and breadth.
- **Freelance clients** (small local businesses — cafés, barbershops, service businesses) evaluating whether to hire Paulo for a web project — checking "can this person solve my specific business problem, and can I trust them."

No shift toward one audience over the other has been made — both remain equally important, confirmed explicitly during this init.

## Product Purpose

A single-page personal portfolio site that is Paulo Dourado's primary credibility asset for both job applications and freelance work. Its job is to make his projects — especially Løfte — feel credible and finished within the first five seconds, and to prove he can deliver in the stack and format each audience actually needs.

## Positioning

The core differentiator is deliberate, not incidental: three of the four featured projects (Fade., ILDA, Fairweather) are purpose-built "service package" proofs, each mapped to a specific, commercially-requested freelance offering — a deposit-taking booking system, an owner-editable CMS brochure site, and a third-party API/dashboard integration — all rebuilt in React/Next.js + Node specifically because that is the stack freelance clients most commonly request, not the Python/Flask stack Paulo learned first. Løfte remains the flagship: proof of ambitious, large-scope, real-user SaaS work (subscriptions, OAuth, PWA) that a smaller scoped service-package demo can't demonstrate on its own.

Together, the pitch is: "I can both ship an ambitious personal product and deliver the specific, scoped service a client is actually asking for, in the stack they want."

## Operating Context

- Static single HTML/CSS/JS page, anchor-linked sections: Hero, About, Featured Projects, Skills, Certifications, Contact. Sticky nav, smooth scroll, light/dark theme toggle (dark default), floating English/Portuguese language switch (English default, bottom-right, UI design from a Claude Design handoff).
- Language switching is client-side only, matching the "no build step" constraint: a `TRANSLATIONS` dictionary in `script.js` covers reusable site copy, keyed by `data-i18n` attributes in the HTML; each project's description/link-label/note carries its own `{ en, pt }` pair since that copy is unique per project. Choice persists via `localStorage`, same pattern as the theme toggle. Proper nouns (project names, tech tags, cert institution names) are identical in both languages and aren't tagged.
- Featured Projects is data-driven and two-tiered: Løfte as the flagship (title, description, ledger of tags/note/LIVE DEMO, and all three screenshots in a contact sheet), then Fade., ILDA and Fairweather as three joined cards led by 4:3 detail crops of the UI that proves each one. Every project is always visible — the old click-to-promote swap was removed because on mobile it swapped content off-screen and looked broken. Design came from a Claude Design handoff (option 1b, square phone frames).
- Screenshots: every image opens a shared native `<dialog>` lightbox (swipe, pinch-zoom, keyboard, Esc). On ≤960px the cards become a scroll-snap swipe row; on ≤700px so do Løfte's screenshots. Images live in `assets/screenshots/<project-id>/` as WebP (full size + `-1600`) with plain lowercase filenames; the original PNG captures stay alongside as sources. Open gap: Løfte phone captures (390×844 viewport, 780×1688 files) don't exist yet — until they do, the mobile row shows the desktop shots in landscape frames.
- Deployed target: GitHub Pages. No backend, no CMS, no build step.
- Visual direction: dark-mode-first "Field" design (amber/graphite palette, mono/display/sans type stack, restrained particle-field motion on hero/contact), established via earlier Claude Design mockup exploration.

## Capabilities and Constraints

- No backend or CMS — content is static; the theme toggle and project-promotion click are the only dynamic behavior.
- Must remain fully responsive down to ~360px width.
- No build step required, though GSAP and Three.js load via CDN for hero/contact motion and text reveals.
- Both ILDA and Fade. are now complete at 3/3 real screenshots each.

## Brand Commitments

- Name: Paulo Dourado. Site wordmark: "PAULO DOURADO" (nav, mono, uppercase, tracked). Page title: "Paulo Dourado — Full-Stack Web Developer."
- Tone: confident but understated — "reliable professional," not "flashy startup founder." Paulo is a career-changer from 10+ years in accounting; the tone should read as precise and deadline-disciplined rather than hype-driven. On-page copy (as of the September 2026 rewrite) deliberately downplays this backstory — it gets one brief mention in About, not a repeated framing device — so the page leads with skills and shipped output rather than the career-change narrative.
- Featured products carry their own distinct branding, not meant to be matched by the portfolio's own amber/graphite palette:
  - Løfte: green accent, stylized "ø" (circle-slash), wordmark "løfte," tagline "Keep your løfte."
  - Fade.: neon yellow-green accent on near-black, bold condensed headline type ("GREAT HAIR, ZERO WAIT.").

## Evidence on Hand

- **Løfte** — real deployed live demo (`lofte-fopx-1dqj.onrender.com`). 3 real screenshots (landing, login, dashboard) in `assets/screenshots/lofte/`. Source is private; site copy notes this tastefully ("exploring turning this into a product") rather than staying silent about the missing GitHub link.
- **Fade.** — live demo (`fade-nu.vercel.app`) plus GitHub repo. 3 real screenshots (crew-menu, booking, confirmation) in `assets/screenshots/fade/`, complete — the crew-menu shot serves as both the crew/menu listing and the hero/landing image.
- **Fairweather** — live demo (`fairweather-pi.vercel.app`) plus GitHub repo. 2 real screenshots (dashboard, score-tuning) in `assets/screenshots/fairweather/`.
- **ILDA** — live demo (`ilda-ruby.vercel.app`) plus GitHub repo. 3 real screenshots (landing, menu-about, about-visit) in `assets/screenshots/ilda/`; the menu-about screenshot doubles as visual proof of the site's owner-editable mini-CMS, and about-visit shows the Hours/Visit section with its mock location map.
- Certifications with real, working credential URLs: CS50x (HarvardX/edX, 2023), The Complete 2024 Web Development Bootcamp (Udemy, Dec 2024), 100 Days of Code: Python Pro Bootcamp (Udemy, Jul 2026).
- Real headshot photo in place at `assets/photo.jpg` (About section).
- Nothing else exists — future work must not fabricate testimonials, client logos, case-study metrics, or a headshot.

## Product Principles

1. Løfte is always the credibility anchor — the largest, most real, most "actually shipped" proof point on the page.
2. Every secondary project must earn its slot by proving something distinct from the others; a project that overlaps another's domain or technical territory gets swapped out rather than left to dilute the set (e.g., Cafe-Website → ILDA, SF_Store → Fade., football-dashboard → Fairweather).
3. Recent project choices favor the stack freelance clients actually request (React/Next.js + Node) over the stack Paulo is personally most fluent in (Flask), because the site's job is to win work, not showcase comfort.
4. Prefer simple, maintainable mechanisms over impressive-looking ones. The GSAP-driven card-swap animation was deliberately removed in favor of an instant swap once it became a recurring source of bugs and the user asked for something simpler — this reflects a standing preference, not a one-off.
5. Never overstate what something is: static design mockups get labeled "Design Exploration," never "Live Demo"; a private-source project gets a tasteful explanatory note rather than an unexplained missing link.

## Accessibility & Inclusion

No product-specific accessibility requirement beyond standard responsive behavior down to ~360px width has been established.
