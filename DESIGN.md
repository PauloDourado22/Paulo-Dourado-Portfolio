---
name: Paulo Dourado — Portfolio
description: An engineered spec-sheet portfolio for a career-changer proving full-stack range in amber and graphite.
colors:
  graphite-black: "#0C0E10"
  card-surface: "#12141670"
  ink: "#DEE3E8"
  slate-muted: "#8E97A0"
  slate-faint: "#7E8790"
  slate-footnote: "#767D84"
  tag-slate: "#AEB6BE"
  signal-amber: "#E8A63D"
  amber-hover: "#F2C275"
  amber-line: "rgba(232, 166, 61, 0.35)"
  hairline: "rgba(222, 227, 232, 0.12)"
  hairline-soft: "rgba(222, 227, 232, 0.09)"
  hairline-strong: "rgba(222, 227, 232, 0.22)"
  shadow-black: "#000000" # base color for the hover-lift/focus shadows, always used at partial alpha (e.g. rgba(0,0,0,0.55)) — never as a flat fill
typography:
  display:
    fontFamily: "'Space Grotesk', 'Archivo', -apple-system, sans-serif"
    fontSize: "clamp(3.2rem, 11vw, 11rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Space Grotesk', 'Archivo', -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Space Grotesk', 'Archivo', -apple-system, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
  # Real, in-use micro-variants of the five named roles above. The frontmatter
  # schema only supports one fontSize per named role, so every other
  # deliberate step in the actual type scale is enumerated here instead of
  # being left as unenumerated (and therefore flagged as drift) each time it
  # recurs. Values are grouped by which named role they're a variant of.
  scale:
    label-xs: "11px" # hero stats row, slideshow counter, skill-box labels, footer
    label-lg: "13px" # nav logo/links, typed tagline, buttons, section labels, timeline years, cert years, slideshow prev/next
    body-compact: "14.5px" # secondary project-card descriptions
    body-snug: "15px" # certification sub-line (bootcamp platform name)
    body-relaxed: "15.5px" # About section timeline rows
    body-lead: "19px" # hero subtext, the one place body copy needs more presence than the 16.5px default
    title-sm: "22px" # certification titles; also covers the About avatar's "PD" mark at 1.4rem (~22.4px)
    title-lg: "28px" # About section's lead paragraph — see Typography Hierarchy below
    headline-compact-min: "32px" # Contact headline's fluid floor (clamp(2rem, 5vw, 4.2rem)) — smaller than the shared Headline role's floor since this sentence is longer than a project title
    headline-compact-max: "67.2px" # Contact headline's fluid ceiling, same clamp
rounded:
  none: "0px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  xxl: "88px"
components:
  button-primary:
    backgroundColor: "{colors.signal-amber}"
    textColor: "{colors.graphite-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.amber-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 30px"
  project-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "36px 32px"
  theme-toggle:
    backgroundColor: "transparent"
    rounded: "{rounded.pill}"
    width: "52px"
    height: "26px"
---

# Design System: Paulo Dourado — Portfolio

## Overview

**Creative North Star: "The Field Instrument"**

This system reads like a well-calibrated piece of measurement equipment, not a marketing brochure. Two ideas run through everything: the *field* — a live particle constellation drifting behind the hero and contact sections, the only genuinely soft, organic element on the page — and the *instrument* — hairline borders, mono-spaced labels, catalog numbers ("P.01"), and section indices ("02 / FEATURED PROJECTS") that treat the page like an annotated spec sheet. The tension between the two is the point: a system precise enough to trust with a production job, animated just enough to prove it isn't a template.

Confirmed anti-references (explicit, from the original design brief): no default purple gradients, no stock "coding" photography, no floating 3D laptop mockups, nothing that reads as generic AI-generated portfolio. The tone throughout is confident but understated — closer to a reliable professional than a flashy startup founder, which matters because the person behind this site is a career-changer from 10+ years in accounting, not a bootcamp grad performing enthusiasm.

**Key Characteristics:**
- One saturated color in the entire system (signal amber); everything else is graphite/off-white neutrals.
- Zero border-radius anywhere except the literal light/dark toggle switch.
- Flat at rest; the only shadow in the system is a hover-triggered lift, never ambient.
- Every label, tag, nav item, and button is set in mono and often letter-spaced, separating "instrument readout" text from actual prose.
- The Featured Projects section is data-driven: any project can become the large "flagship" display, and its screenshots (when there are 2+) crossfade in a plain-CSS slideshow — the site's one interactive, non-hover-triggered mechanism.

## Colors

Graphite and off-white neutrals carry almost the entire page; amber is reserved and therefore meaningful every time it appears.

### Primary
- **Signal Amber** (`#E8A63D`): the system's only accent. Marks the active nav link, the typed-tagline cursor color, bracket-frame corner accents, timeline year labels, the flagship border and media-bar borders, hover states on links/buttons/cards, and focus rings. In light mode it deepens to **Amber Deep** (`#A66A00`) to hold contrast against the paler background.
- **Amber Hover** (`#F2C275`): lightened amber used only as the `:hover` state of amber-background buttons (light mode: `#8A5800`).
- **Amber Line** (`rgba(232, 166, 61, 0.35)`): translucent amber used exclusively for borders — the flagship card outline, the media caption bar's divider, and focus-ring glows. Never used as a fill.

### Neutral
- **Graphite Black** (`#0C0E10`): the default (dark-theme) page background. In light mode this role is filled by **Parchment** (`#F2F1EC`), a warm off-white rather than a stark white.
- **Ink** (`#DEE3E8`): primary text on dark backgrounds (light mode: **Near-Black** `#16181B`).
- **Slate Muted** (`#8E97A0`): body copy and descriptions — subtext, project descriptions, card paragraphs (light mode: `#6E7378`).
- **Slate Faint** (`#7E8790`): secondary labels — section meta, project index numbers, placeholder captions (light mode: `#6E7378`, same as Slate Muted since light mode collapses the two).
- **Slate Footnote** (`#767D84`): the dimmest text — hero stats row, footer copy (light mode: `#63686D`). Deliberately close to Slate Muted in value; a dedicated "dimmest" gray and WCAG AA's 4.5:1 floor leave almost no headroom against this system's near-black background, so the two tiers sit closer together than the original palette intended (was `#5C646C` / `#9A9C96` at ~3.2:1 / ~2.45:1, both failing AA — corrected during a July 2026 accessibility pass).
- **Tag Slate** (`#AEB6BE`): the color for bracketed tag lists (`[Next.js]`) and timeline row copy (light mode: `#4E5257`).
- **Hairline / Hairline Soft / Hairline Strong** (`rgba(222,227,232,0.12/0.09/0.22)`, light: `rgba(22,24,27,0.14/0.12/0.28)`): the system's entire border vocabulary. Depth and separation come from layering these three opacities, not from color variation or shadow.
- **Shadow Black** (`#000000`): the base color behind the system's only shadow (see Elevation & Depth's Hover Lift) — always used at partial alpha (`rgba(0, 0, 0, 0.55)`), never as a flat fill or text color.

### The One Voice Rule
Amber is used on a small minority of any given screen. Its rarity is what makes the active nav link, a hovering card border, or a bracket corner read as *meaningful* rather than decorative. Never introduce a second saturated color; if a new state needs distinguishing, vary opacity or weight within the existing neutral/amber pair instead.

## Typography

**Display Font:** Space Grotesk (with Archivo, system sans fallback)
**Body Font:** Archivo (with system sans fallback)
**Label/Mono Font:** IBM Plex Mono (with SFMono-Regular, Consolas fallback)

**Character:** Space Grotesk carries every headline at heavy weight and tight, negative letter-spacing — confident and a little industrial. Archivo stays quiet in the background for anything meant to be read at length. IBM Plex Mono is never used for prose; it exists purely to mark something as label, metadata, or instrumentation.

### Hierarchy
- **Display** (700, `clamp(3.2rem, 11vw, 11rem)`, line-height 0.92, letter-spacing -0.03em, uppercase): the hero name only. The second line is rendered as an outline — transparent fill, 1.5px stroke in the ink color — rather than a second solid weight, so the two lines read as one gesture rather than a repeated pattern.
- **Headline** (700, `clamp(2.5rem, 5vw, 4.5rem)`, line-height 1, letter-spacing -0.03em): the flagship project title. The contact section's closing line shares the same role and weight but runs a smaller compact clamp (`clamp(2rem, 5vw, 4.2rem)`, documented as `headline-compact-min`/`-max` in the type scale) since it carries a full sentence rather than a short project name.
- **Title** (600, 24px, line-height ~1.2): secondary project card titles. Two related variants: a weight-500/28px step (`title-lg`) for the About section's lead paragraph, where the larger size needs to carry prose rather than a short label; and a 22px step (`title-sm`) for certification titles and the About avatar's "PD" mark.
- **Body** (400, 16.5–19px, line-height 1.65–1.7, color Slate Muted, max-width ~640px): all descriptive prose — hero subtext, flagship description, card copy. Never set body text in the ink/primary text color; it stays in the muted role so headlines keep the visual priority.
- **Label** (500, 11–13px, letter-spacing 0.04–0.14em, IBM Plex Mono, often uppercase): nav links, the typed tagline, section labels ("02 / FEATURED PROJECTS"), buttons, bracketed tags, the slideshow counter, timeline years, and the footer. Letter-spacing widens as size shrinks — 11px labels get the widest tracking (0.14em), the 13px nav logo gets the tightest (0.04em).

### The Mono-For-Labels Rule
If it is a label, a tag, a button, a counter, or metadata, it is IBM Plex Mono. If it is a heading, it is Space Grotesk. If it is a sentence someone is meant to read for meaning, it is Archivo. No component mixes these roles.

## Layout

Content sections cap at 1240px; the nav and footer run slightly wider at 1440px, keeping chrome from feeling as boxed-in as the reading content. Section padding is generous and consistent: 88px top/bottom on desktop, collapsing to 56px under 700px. The hero gets more room again (110px top / 96px bottom, down to 64/56px on mobile) since it carries the display type.

Two breakpoints govern the whole site: **960px** (About and Skills grids collapse from multi-column to single/paired columns; the project grid drops from 3 columns to 1) and **700px** (nav collapses to a hamburger + slide-down menu, section padding tightens, cert rows and skill boxes stack).

The Featured Projects grid is the one place layout is data-driven rather than fixed: a full-width flagship slot sits above a `repeat(3, 1fr)` grid of secondary cards (1 column under 960px). Clicking any secondary card swaps it into the flagship slot and demotes the previous flagship back into the grid — instantly, with no transition (see Elevation & Depth's motion note).

Recurring spacing rhythm: 8px for tight internal list gaps (skill list items), 24px for card/grid gaps and timeline columns, 32px for card internal padding, 48px for section-head margins, 88px for section-level rhythm.

## Elevation & Depth

The system is flat at rest. There is exactly one shadow in the entire codebase: a soft, diffuse lift (`box-shadow: 0 14px 28px -18px rgba(0,0,0,0.55)`) that appears only on `.project-card:hover`. Depth everywhere else is conveyed by layering three hairline border opacities (soft/default/strong), not by shadow or color shift.

### Shadow Vocabulary
- **Hover Lift** (`box-shadow: 0 14px 28px -18px rgba(0, 0, 0, 0.55)`): the only elevation event in the system. Applies on hover to secondary project cards, paired with a border-color shift to Amber Line.
- **Focus Ring** (`box-shadow: 0 0 0 2px var(--accent-line)`): not true elevation, but the same mechanism — used on `:focus-visible` in place of a default outline.

### The Flat-By-Default Rule
Surfaces have no resting shadow. Shadow is a response to interaction state (hover, focus), never an ambient property of a card or container. If a new component seems to need a shadow at rest, that's a signal to add a border instead.

### The Transform-Free Interaction Rule
Hover and interactive-state transitions never animate `transform`. This is a hard-won rule, not a stylistic preference: the site's click-to-promote flagship swap and a `transform`-based hover-lift once fought for control of the same CSS property and silently desynced mid-animation. Box-shadow, border-color, and opacity are the only properties used for interactive feedback; if motion on position is ever needed again, it must be scoped so it can never coexist with a `transition: transform` on the same element.

**One explicit exception:** the theme-toggle dot (`.theme-switch-dot`) slides via `transform: translateX()`. It was originally built on `margin-left` instead specifically to honor this rule, but `margin-left` is a layout-triggering property (a detector flagged it during a July 2026 accessibility/performance pass), and the toggle shares no DOM, no shared class, and no interaction path with the project-card/flagship-swap elements that caused the original bug — there is nothing for it to desync with. Any future component considered for a similar exception must clear the same bar: fully isolated from swap/promote logic, with no other `transition: transform` anywhere nearby.

## Shapes

Every corner in the system is square. `border-radius` is never set to a non-zero value anywhere except the theme toggle (a 999px pill track with a circular sliding dot) — the one place a rounded form is functionally required to read as a switch. Borders are uniformly 1px hairlines; there is no border-width scale. The bracket-frame around the About section's avatar placeholder is the system's signature form gesture: not a full border, but two accent-colored L-shaped corners (top-left and bottom-right only), evoking a technical crop-mark or registration frame rather than a picture frame.

### The Square Corner Rule
`border-radius: 0` is the invariant, without exception, for every button, card, input, media container, and section. The only rounded elements are the theme toggle's track (pill) and dot (circle) — both required to read as a physical switch, not a stylistic choice. Any new component should default to zero radius; introducing a rounded card or button breaks the "instrument panel" identity.

## Components

### Buttons
- **Shape:** hard rectangular corners (`{rounded.none}`), 1px border only on the outline variant.
- **Primary:** Signal Amber background, Graphite Black text, IBM Plex Mono label typography, `16px 30px` padding (`13px 24px` in the `.btn-sm` variant used on the flagship's CTA).
- **Outline:** transparent background, Hairline Strong border, Ink text; hover swaps both border and text to Signal Amber.
- **Hover:** primary swaps background to Amber Hover; outline swaps border/text to Signal Amber. Both transition over 0.2s ease. Neither variant moves or scales on hover.
- **Text Link:** used for secondary-card CTAs ("VIEW ON GITHUB ↗") — no border or background at all, just Signal Amber mono text that lightens to Amber Hover.

### Cards / Containers
- **Corner Style:** square (`{rounded.none}`), always.
- **Background:** transparent — cards are defined entirely by their border, not a fill color.
- **Shadow Strategy:** none at rest; Hover Lift on secondary project cards only (see Elevation & Depth). The flagship card and skill boxes never lift.
- **Border:** secondary cards use Hairline (default); the flagship card and its media caption bar use Amber Line, marking it as the featured item at a glance even before reading any text.
- **Internal Padding:** 36px 32px for secondary cards; the flagship body uses a slightly larger, asymmetric 40px 56px 56px.

### Navigation
- Sticky, blurred translucent background (`backdrop-filter: blur(8px)` over 88%-opacity page background), single hairline bottom border, no shadow.
- Logo and links are IBM Plex Mono, uppercase-tracked; inactive links sit in Slate Faint and shift to Signal Amber on hover or when active.
- Theme toggle is a pill switch with a sliding circular dot — the system's only rounded shape, functioning exactly like a physical light switch (dot travels left-to-right between dark/light).
- Mobile (≤700px): links collapse behind a hamburger into a full-width dropdown sharing the page background and a hairline border.

### Language Switch
A floating `[EN ▾]` bracket readout, fixed bottom-right (16px inset on mobile, 32px on desktop), independent of the nav — a deliberately different placement/idiom from the nav's own theme toggle, since this is a page-level utility rather than a nav item. Clicking it opens a square-cornered dropdown listing ENGLISH/PORTUGUÊS with their two-letter codes, Hairline Strong border, no shadow, selected option in Signal Amber. Translates the page's reusable copy via a `TRANSLATIONS` dictionary keyed by `data-i18n` attributes, plus per-project `{ en, pt }` fields for descriptions/link labels/notes; proper nouns (project names, tech tags, cert institutions) are identical in both languages and aren't tagged. Choice persists via `localStorage`, same pattern as the theme toggle.

### Signature Component: Screenshot Slideshow
The flagship project's media area stacks each screenshot as an absolutely-positioned `.slide`, crossfaded purely via `opacity` (0.35s ease) — deliberately not a library-driven carousel. A caption bar sits below the image (never overlaid on it, to avoid needing a text-legibility scrim over unpredictable screenshot content): a mono `01 / 03`-style counter on the left, two small square bordered prev/next buttons on the right, styled identically to the theme toggle's line weight and hover behavior. The bar and image box both take Amber Line borders. Below 2 images, the whole bar is omitted rather than shown disabled.

### Signature Component: Bracket Frame
A corner-only accent frame (two 16px L-shaped corners, top-left and bottom-right, 1px Signal Amber lines) around the About section's avatar. Reads as a measurement/crop annotation rather than a decorative border — reinforces the "instrument" half of the North Star even in the one section with the least literal instrumentation.

## Do's and Don'ts

### Do:
- **Do** keep `border-radius: 0` on every new component; the only exception is a toggle-style control that must read as a physical switch.
- **Do** use IBM Plex Mono for anything that is a label, tag, button, counter, or piece of metadata — never for prose.
- **Do** keep Signal Amber to a small minority of any screen; treat every additional use of a saturated color as a violation of the One Voice Rule.
- **Do** build hover/interactive feedback from `box-shadow`, `border-color`, and `opacity` only.
- **Do** default new cards and containers to a transparent background defined by a hairline border, not a filled surface.

### Don't:
- **Don't** add `border-radius` to a button, card, input, or media container.
- **Don't** animate `transform` on anything that is also styled with a CSS `transition` on `transform` elsewhere — this exact conflict already caused a real, hard-to-diagnose bug once.
- **Don't** give any surface a resting/ambient shadow; shadow only exists as a hover or focus response.
- **Don't** introduce a second saturated accent color alongside Signal Amber.
- **Don't** label a static mockup or design exploration "Live Demo" — that label is reserved for something actually deployed and functional; use "Design Exploration" or equivalent instead.
