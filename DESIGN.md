---
name: Paulo Dourado — Portfolio
description: An engineered spec-sheet portfolio for a career-changer proving full-stack range in amber and graphite.
colors:
  # Dark theme (default). Light-theme values are listed under Colors below.
  graphite-black: "#0C0E10"   # --bg
  plate: "#14171A"            # --plate — backing behind screenshots
  ink: "#DEE3E8"              # --text
  slate-muted: "#8E97A0"      # --text-muted
  slate-faint: "#7E8790"      # --text-faint
  slate-footnote: "#767D84"   # --text-footnote
  tag-slate: "#AEB6BE"        # --tag-text
  signal-amber: "#E8A63D"     # --accent
  amber-hover: "#F2C275"      # --accent-hover
  amber-press: "#C98A2A"      # --accent-press
  amber-line: "rgba(232, 166, 61, 0.35)"
  on-accent: "#0C0E10"        # label color on an amber fill
  hairline: "rgba(222, 227, 232, 0.12)"
  hairline-soft: "rgba(222, 227, 232, 0.09)"
  hairline-strong: "rgba(222, 227, 232, 0.22)"
typography:
  display:
    fontFamily: "'Space Grotesk', 'Archivo', -apple-system, sans-serif"
    fontSize: "min(max(3.2rem, 11vw), 16vw, 11rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Space Grotesk', 'Archivo', -apple-system, sans-serif"
    fontSize: "min(max(4rem, 9vw), 20vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: "-0.05em"
  title:
    fontFamily: "'Space Grotesk', 'Archivo', -apple-system, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
  # The whole type scale. CSS custom property in brackets. Every font-size in
  # style.css uses one of these — nothing else.
  scale:
    fs-2xs: "0.6875rem" # 11px [--fs-2xs] micro labels: hero stats, footer, skill-box labels, lightbox status
    fs-xs: "0.75rem"    # 12px [--fs-xs] nav links, tags, section meta, quiet links, notes
    fs-sm: "0.8125rem"  # 13px [--fs-sm] buttons, text links, section labels, years
    fs-md: "0.9375rem"  # 15px [--fs-md] compact prose: card descriptions, timeline, cert sub-line
    fs-base: "1.0625rem" # 17px [--fs-base] body, skill list, mobile flagship description
    fs-lead: "1.1875rem" # 19px [--fs-lead] hero subtext, flagship description
    fs-title-sm: "1.375rem" # 22px [--fs-title-sm] certification titles
    fs-title: "1.75rem" # 28px [--fs-title] About lead paragraph, mobile card titles
    fs-title-lg: "2rem" # 32px [--fs-title-lg] project card titles
    fs-headline: "clamp(2rem, 5vw, 4.2rem)" # [--fs-headline] contact line, 404 title
    fs-flagship: "min(max(4rem, 9vw), 20vw, 7rem)" # [--fs-flagship] Løfte title, 64–112px
    fs-display: "min(max(3.2rem, 11vw), 16vw, 11rem)" # [--fs-display] hero name
rounded:
  none: "0px"
  pill: "999px"
  circle: "50%"
spacing:
  sp-1: "4px"
  sp-2: "8px"
  sp-3: "12px"
  sp-4: "16px"
  sp-5: "24px"
  sp-6: "32px"
  sp-7: "48px"
  sp-8: "64px"
  sp-9: "88px"
  sp-10: "128px"
sizing:
  tap: "44px"      # minimum tap target, every link and button
  control: "48px"  # button height
  nav: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal-amber}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "{sizing.control}"
    padding: "0 32px"
  button-primary-hover:
    backgroundColor: "{colors.amber-hover}"
  button-primary-pressed:
    backgroundColor: "{colors.amber-press}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "{sizing.control}"
    padding: "0 32px"
  text-link:
    textColor: "{colors.signal-amber}"
    typography: "{typography.label}"
    height: "{sizing.tap}"
  project-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px 24px 12px"
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

Confirmed anti-references (explicit, from the original design brief): no default purple gradients, no stock "coding" photography, no floating 3D laptop mockups, nothing that reads as generic AI-generated portfolio. The tone throughout is confident but understated — a reliable professional, not a flashy startup founder.

**Key Characteristics:**
- One saturated color in the entire system (signal amber); everything else is graphite/off-white neutrals.
- Zero border-radius anywhere except the literal light/dark toggle switch.
- Flat at rest; interaction feedback is color, border and inset shadow — never an outer shadow, never movement.
- Every label, tag, nav item, and button is set in mono and letter-spaced, separating "instrument readout" text from actual prose.
- Every value lives in a token. `style.css` opens with the full token set in `:root`; components only reference tokens.

## How to use this file

1. Need a color, font size, spacing step or size? Use an existing token from the frontmatter (the CSS custom property has the same name with `--` in front).
2. If nothing fits, add the new token here first, then to `:root` in `style.css`. Don't hardcode values in components.
3. Font sizes are in `rem` so the visitor's browser text-size setting works. Spacing stays in `px`.

## Colors

Graphite and off-white neutrals carry almost the entire page; amber is reserved and therefore meaningful every time it appears.

| Token | Dark | Light | Used for | Contrast on page bg (dark / light) |
|---|---|---|---|---|
| `--bg` | `#0C0E10` | `#F2F1EC` | page background | — |
| `--plate` | `#14171A` | `#E3E1DA` | backing behind screenshots | — |
| `--text` | `#DEE3E8` | `#16181B` | headings, primary text | 14.97 / 15.73 |
| `--tag-text` | `#AEB6BE` | `#4E5257` | bracketed tags, timeline copy | 9.42 / 6.96 |
| `--text-muted` | `#8E97A0` | `#5E6368` | body copy, descriptions | 6.52 / 5.37 |
| `--text-faint` | `#7E8790` | `#5E6368` | secondary labels, meta | 5.30 / 5.37 |
| `--text-footnote` | `#767D84` | `#63686D` | dimmest tier: hero stats, footer | 4.64 / 4.98 |
| `--accent` | `#E8A63D` | `#8A5800` | the one accent | 9.17 / 5.34 |
| `--accent-hover` | `#F2C275` | `#6E4600` | hover on amber | 11.74 / 7.31 |
| `--accent-press` | `#C98A2A` | `#5C3B00` | pressed on amber | 6.59 / 8.92 (label on fill) |
| `--accent-line` | amber @ 35% | amber @ 40% | amber borders only, never text | — |
| `--on-accent` | `#0C0E10` | `#F2F1EC` | label on an amber fill | 9.17 / 5.34 |
| `--border` / `-soft` / `-strong` | ink @ 12/9/22% | near-black @ 14/12/28% | the whole border vocabulary | — |

Every text pair clears WCAG AA (4.5:1) in both themes, including on the screenshot plate and on the certificate-row hover tint (lowest: 4.62). The light-theme amber and muted grey were darkened in September 2026 — the old values (`#A66A00` at 3.97:1, `#6E7378` at 4.23:1) failed.

### The One Voice Rule
Amber is used on a small minority of any given screen. Never introduce a second saturated color; if a new state needs distinguishing, vary opacity or weight within the existing neutral/amber pair instead. Known, deliberate tension: the Featured Projects section has four solid amber LIVE DEMO buttons (one per project) — a conscious choice so non-technical visitors go straight to the demos.

## Typography

**Display Font:** Space Grotesk · **Body Font:** Archivo · **Label/Mono Font:** IBM Plex Mono

### Hierarchy
- **Display** (`--fs-display`, 700, line-height 0.92, -0.03em, uppercase): the hero name only. The second line is an outline (transparent fill, 1.5px stroke). The `min(..., 16vw, ...)` cap keeps "DOURADO" on screen when a visitor enlarges text.
- **Headline** (`--fs-flagship`, 700, line-height 0.85, -0.05em): the Løfte flagship title. `--fs-headline` (fluid 32–67px, line-height 1.1) is the sentence-length variant for the contact line and the 404 title.
- **Title** (`--fs-title-lg` 32px / `--fs-title` 28px on mobile, 700): project card titles. `--fs-title` at weight 500 is also the About lead paragraph; `--fs-title-sm` is certification titles.
- **Body** (`--fs-base` 17px, `--fs-lead` 19px for hero subtext and flagship description, `--fs-md` 15px for compact card copy; line-height 1.55–1.65; color `--text-muted`): all prose. Body copy never uses `--text` — headlines keep visual priority.
- **Label** (IBM Plex Mono, `--fs-2xs`–`--fs-sm`, letter-spacing 0.08–0.14em, usually uppercase): nav links, buttons, section labels, tags, counters, footer. Tracking widens as size shrinks.

### The Mono-For-Labels Rule
If it is a label, a tag, a button, a counter, or metadata, it is IBM Plex Mono. If it is a heading, it is Space Grotesk. If it is a sentence someone is meant to read for meaning, it is Archivo.

## Layout

Content sections cap at 1240px; nav and footer run to 1440px. Section padding is `--sp-9` (88px) vertical on desktop, `--sp-8` (64px) under 700px. The hero and contact sections get `--sp-10` (128px) on top.

Two breakpoints: **960px** (About, Skills and the flagship stack; project cards become a swipe row) and **700px** (nav collapses to a menu button, sections tighten, Løfte's screenshots become a phone-capture swipe row).

Layout safety rules:
- Grid columns that hold text use `minmax(0, 1fr)`, never a bare `1fr` — a bare `1fr` won't shrink below its longest word and pushes content off-screen at large text sizes.
- `body` sets `overflow-wrap: break-word`, so no word can widen the page.
- The nav wraps instead of overflowing when text is enlarged.
- `section[id]` has `scroll-margin-top` so anchor jumps land below the sticky nav.

## Elevation & Depth

Flat at rest. No outer shadows anywhere. Depth comes from layering the three hairline opacities.

- **Inset Ring** (`inset 0 0 0 1px var(--border-strong)`): project card hover.
- **Inset Press** (`inset 0 2px 0 rgba(0,0,0,.25)`): pressed primary button.
- **Focus Ring**: `outline: 2px solid var(--accent); outline-offset: 3px` on `:focus-visible`, set once globally for every element. Inside menus the offset is -2px so the ring stays inside the row.

### The Transform-Free Interaction Rule
Hover, pressed, focus and open/close transitions never animate `transform`. Use color, border-color, background-color, box-shadow, opacity, clip-path and visibility. (Historical reason: a transform-based hover once fought a transform-based card swap on the same element.) **One exception:** the theme-toggle dot slides with `translateX()`; it shares no element or class with anything else that animates. The language caret swaps glyphs (▾/▴) instead of rotating.

## Shapes

Every corner is square. `border-radius` is non-zero only on the theme toggle (pill track, circular dot). Borders are 1px hairlines. The About photo sits in a **bracket frame**: two amber L-shaped corners (top-left, bottom-right), like a crop mark.

## Components

Every component has the same five states: **rest, hover, pressed (`:active`), keyboard focus (`:focus-visible`), and disabled** (where disabling is possible).

### Buttons (`.btn`)
One component for every button on the site — hero, contact, Løfte's CTA, project cards, 404 page.
- 48px tall (`--ctl-h`), 32px side padding, mono 13px, weight 500, 0.08em tracking, uppercase, square corners.
- **Primary** (`.btn-primary`): amber fill, `--on-accent` label. Hover → `--accent-hover`. Pressed → `--accent-press` + inset press shadow.
- **Outline** (`.btn-outline`): transparent, `--border-strong` border, ink label. Hover → amber border and label. Pressed → adds a 14% amber tint.
- **Disabled** (`:disabled` / `aria-disabled="true"`): transparent, hairline border, faint label, 50% opacity, `not-allowed` cursor.
- **Block** (`.btn-block`): full width, label left and ↗ right — used for the cards' LIVE DEMO.
- Transitions: 0.15s on color, background-color, border-color, box-shadow.

### Text links (`.text-link`)
Amber mono 13px, 0.08em, weight 500, at least 44px tall. Hover → `--accent-hover`; pressed → underline. **Quiet** variant (`.text-link--quiet`): 12px in `--text-muted`, turning amber on hover — used for VIEW ON GITHUB under a LIVE DEMO button.

### Arrows (Hairline)
One arrow for the whole site, drawn as inline SVG (`<svg class="arr">`, or `arrow(dir)` in `script.js`) — never a font glyph like → ↗ ↓, which all render at different weights.
- **Shape:** a long shaft with an open 90° head, square line ends and mitred corner, like an engineering-drawing leader line. 1px line at 16px (20px in the lightbox's 48px buttons).
- **Direction:** points right by default; `.arr--ne` (external links: LIVE DEMO, GITHUB, VIEW CREDENTIAL), `.arr--up` (BACK TO TOP), `.arr--down` (VIEW CERTIFICATIONS), `.arr--left` (lightbox previous). Rotation is static.
- **Color:** `currentColor`, so it always matches its label.
- **Hover / focus:** the shaft extends from its short resting length to full length (`stroke-dashoffset`, 0.22s). Nothing moves. Disabled controls keep the short shaft.
- The language caret (▾/▴) and close (✕) are not arrows and stay as they are.

### Cards / Containers
Transparent, defined by hairline borders. Project cards: 24px padding (16px on mobile), inset ring on hover, joined into one bordered row on desktop.

### Navigation
- Sticky, 88%-opacity background with an 8px blur, one hairline bottom border.
- Logo and links are mono; links sit in `--text-faint` and turn amber on hover or when their section is in view. Every link is at least 44px tall.
- **Mobile (≤700px):** a 44×44 menu button (two bars that fade to ✕). The menu unrolls with opacity + clip-path, reports `aria-expanded`, moves focus to the first link, and closes on Esc (focus returns to the button), on an outside tap, or when a link is chosen. Without JavaScript the links show inline instead.
- Theme toggle: a 52×26 pill with an invisible 60×44 hit area.
- A **skip link** ("SKIP TO CONTENT") appears on the first Tab press.

### Language switch
A floating `[EN ▾]` button fixed bottom-right (16px inset on mobile, 32px on desktop). The menu opens above it with a fade, but comes after it in the DOM so Tab reaches the options next. Options use `aria-pressed`; choosing one or pressing Esc returns focus to the button; tabbing away closes it. Switching language also updates `<html lang>`, the page title, the meta description and every screen-reader label (`data-i18n-label`).

### Signature Component: Project Contact Sheet + Lightbox
Løfte's screenshots are laid out like a contact sheet: a 16:9 lead frame with amber bracket corners and a `01` chip over two 16:10 frames. Every screenshot is a `<button>` that opens one shared native `<dialog>` lightbox, which fades in and out. The lightbox has a mono title bar, a scroll-snap track (swipe, pinch-zoom, ← →, Esc), and 48px arrow buttons around a `01 / 03` counter. Arrows use `aria-disabled` at the ends so keyboard focus is never lost.

## States

- **Loading:** each lightbox slide shows a plate panel with "LOADING" and a thin amber indeterminate bar until its image arrives.
- **Error:** a lightbox image that fails shows "SCREENSHOT DIDN'T LOAD" with a RETRY outline button. A card or contact-sheet image that fails shows its plate with "IMAGE UNAVAILABLE" instead of a broken-image icon.
- **Empty / no JavaScript:** the projects section shows a `<noscript>` list of all four projects with LIVE DEMO links.
- **404:** `404.html` — mono amber "404 / PAGE NOT FOUND" label, headline, one line of copy, one primary button back home. Follows the visitor's saved theme and language.
- **Motion libraries missing:** if three.js or GSAP fails to load, the page works without them; the typed line appears as plain text after 1.5s.
- **Reduced motion:** with `prefers-reduced-motion`, there is no smooth scrolling, no blinking cursor, no typewriter or entrance animation, near-instant fades, and the particle field is drawn as one still frame.
- **Forms:** the site has none. Contact is a mailto button, with the address also shown as selectable text for visitors without a mail app.

## Do's and Don'ts

### Do:
- **Do** take every value from a token; add new tokens here first.
- **Do** give every new button or link all five states and a 44px tap area.
- **Do** use `minmax(0, 1fr)` for grid columns that hold text.
- **Do** build interactive feedback from color, border, background, box-shadow, opacity and clip-path only.
- **Do** keep amber to a small minority of any screen.

### Don't:
- **Don't** add `border-radius` to a button, card, input, or media container.
- **Don't** animate `transform` in an interactive transition.
- **Don't** give any surface a resting shadow or any outer shadow.
- **Don't** introduce a second saturated accent color.
- **Don't** hardcode a hex, px font size or spacing value in a component.
- **Don't** label a static mockup "Live Demo" — that label means deployed and working.
