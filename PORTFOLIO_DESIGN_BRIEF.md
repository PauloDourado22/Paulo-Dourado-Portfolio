# Portfolio Site — Design Brief

Context file for generating mockups. Content and structure are locked in (already built as a working site); what's needed here is premium visual design — layout polish, typography, spacing, imagery treatment — not new content or information architecture.

---

## 1. Project overview

- **Who:** Paulo Dourado, a self-taught full-stack developer transitioning from a 10+ year career in accounting.
- **What:** A single-page personal portfolio site — his primary credibility asset for both freelance clients and junior full-stack job applications.
- **Primary audience:** Recruiters/hiring managers screening junior full-stack candidates, and freelance clients evaluating whether to hire him for a web project.
- **Core message:** "I've actually shipped things." The site's job is to make his projects — especially Løfte, a real deployed SaaS product — feel credible and finished within the first five seconds of landing on the page.

## 2. Goals

- Read as premium and intentional, not a template-generated "junior dev portfolio."
- Make Løfte the clear hero of the page — everything else supports it.
- Feel trustworthy to non-technical freelance clients while still reading as technically credible to a recruiter.
- Fast, lightweight, fully responsive — it's a static site, no backend.

## 3. Brand and tone

- Tone: confident but not overstated — precise, calm, a little understated. He comes from accounting; the tone should feel closer to "reliable professional" than "flashy startup founder."
- Visual tone: developer-native but premium — think a well-designed SaaS landing page, not a Bootstrap template. Avoid anything that reads as generic AI-generated portfolio (no default purple gradients, no stock "coding" photos, no floating 3D laptop mockups).
- If available: Løfte has its own brand assets (logo, color palette) — worth reviewing for visual consistency between the portfolio and the flagship product it showcases, though the portfolio doesn't need to match Løfte's branding exactly.

## 4. Site map (single page, anchor-linked nav)

1. Hero
2. About
3. Featured Projects
4. Skills
5. Certifications
6. Contact

Sticky top nav with smooth-scroll links to each section, plus a light/dark mode toggle (dark is default).

---

## 5. Section-by-section content and intent

### Hero
**Intent:** Immediate identity + credibility signal, one clear next action.
**Content:**
- Name: Paulo Dourado
- Tagline: "Full-Stack Web Developer | Python & JavaScript"
- Subtext: "Self-taught developer with 10+ years of business experience, now building full-stack web applications."
- Two CTAs: "View Projects" (primary), "Get in Touch" (secondary)
- Photo: professional headshot (currently placeholder — real photo to be swapped in)

### About
**Intent:** The pivot story, told in a few sentences — this is what makes him memorable rather than generic.
**Content:**
> For over a decade I worked in accounting — precise, deadline-driven work that taught me discipline most self-taught developers don't pick up from a bootcamp alone. In 2023 I started teaching myself to code with Harvard's CS50, and haven't stopped building since. Today I design and ship full-stack web applications, from Stripe-powered eCommerce sites to a SaaS platform with real users.

Small timeline strip beneath it:
- 2023 — CS50x (Harvard/edX)
- 2024 — The Complete Web Development Bootcamp
- 2026 — 100 Days of Code: Python Pro Bootcamp & building Løfte

### Featured Projects
**Intent:** Proof of work. This is the section that actually gets scrutinized — needs the most design attention.

**Løfte** *(flagship — should be visually the largest, most prominent card on the page)*
> A fitness and personal-training SaaS platform designed and built solo — workout logging, nutrition and step tracking, gamified progress, a trainer/client management system, and Stripe subscriptions.
- Tags: Python, Flask, OAuth, Stripe, PWA
- CTA: "Live Demo" (external link)
- Small note: source is private ("exploring turning this into a product") — needs tasteful handling so it doesn't read as a red flag. Consider a screenshot/mockup of the actual app UI here if one becomes available, since there's no GitHub link to click into for this one.

**SF_Store** — "A Stripe-powered eCommerce app with product catalog, cart, and checkout." Tags: Flask, SQLAlchemy, Stripe API. CTA: View on GitHub.

**Cafe-Website** — "A café finder and manager with full CRUD — practicing clean database design and templating." Tags: Flask, SQLite, Jinja2. CTA: View on GitHub.

**football-dashboard** — "A live sports dashboard pulling real-time standings and fixtures from a third-party REST API." Tags: Flask, REST API, JSON. CTA: View on GitHub.

Secondary three should read as a matched set (equal visual weight, grid layout), clearly subordinate to the Løfte card.

### Skills
**Intent:** Quick-scan credibility check, grouped not flat.
- Languages: Python, JavaScript, HTML5, CSS3, SQL
- Frameworks & Libraries: Flask, Jinja2
- Tools: Git/GitHub, Stripe API, OAuth 2.0, SQLite, PWA/Service Workers
- Currently learning: TypeScript, Docker

### Certifications
**Intent:** Secondary trust signal, shouldn't compete visually with the Projects section.
- CS50x — HarvardX/edX, 2023
- The Complete 2024 Web Development Bootcamp — Udemy, Dec 2024
- 100 Days of Code: Python Pro Bootcamp — Udemy, Jul 2026

Each links out to its credential URL.

### Contact
**Intent:** Low-friction final CTA.
- "Open to junior full-stack roles and freelance projects. Feel free to reach out."
- Email (mailto), LinkedIn, GitHub

---

## 6. Technical constraints for the design

- Static site — HTML/CSS/JS, no backend, no CMS. Design should assume no dynamic content beyond the theme toggle.
- Must work fully responsive down to ~360px mobile width.
- Deployed on GitHub Pages — no server-side rendering, no build step required (though a build step is acceptable if the design calls for one).
- Current working version uses a dark-mode-first design with a blue accent (`#4f9eff` dark / `#2563eb` light) and monospace accents on tags/labels — a reasonable starting point, not a constraint the new design needs to preserve if a stronger direction emerges.

## 7. Assets available / needed

- **Have:** real project screenshots could be captured from the live Løfte demo and the GitHub repos (SF_Store, Cafe-Website, football-dashboard) if visual mockups of the actual apps are wanted instead of text-only cards.
- **Needed:** a professional headshot (not yet provided to this file — currently a placeholder in the working build).
- **Optional:** Løfte brand assets (logo, color palette) if visual consistency with the flagship product is desired.
