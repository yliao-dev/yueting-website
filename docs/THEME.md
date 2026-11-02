# Website Theme

This document is the visual source of truth for future iterations of Yueting Liao's website. Changes should feel like small evolutions of this system rather than a new design language.

## Design idea

The site is a calm, crafted personal portfolio built around three parts of Yueting's life: software, Kendo, and photography. It should feel thoughtful and editorial rather than corporate, futuristic, or overly ornamental.

Use these principles when making decisions:

1. **Quiet confidence.** Prefer strong type, generous space, and a few deliberate details over dense layouts or decorative effects.
2. **Warm materiality.** The palette should recall paper, dark wood, ink, and worn print rather than pure white, bright gradients, or neon color.
3. **Clear hierarchy.** A visitor should understand the page from its headline, short supporting copy, and one obvious next action.
4. **Disciplined motion.** Animation may support arrival or orientation, but content should never depend on it.
5. **Photography and work lead.** Images, projects, and lived experience should carry the personality. Avoid generic feature-card sections.

## Color system

The live CSS tokens in `src/styles/variables.css` are authoritative.

| Role | Token | Current value | Use |
| --- | --- | --- | --- |
| Ink | `--primary` | `#171614` | Dark navigation, primary buttons, strong contrast |
| Warm paper | `--white` / `--surface` | `#fffaf4` | Light surfaces and text on dark backgrounds |
| Page background | `--bg` | `#f4efe8` | Main warm canvas |
| Soft paper | `--bg-soft` | `#ebe3d7` | Background depth and muted sections |
| Body text | `--text-primary` | `#302b28` | Headlines and primary copy |
| Muted text | `--text-secondary` | `#6f655d` | Paragraphs and supporting information |
| Oxide red | `--hover` | `#8a2432` | Main accent, selected states, lived locations |
| Oak | `--nav-hover` / `--light-oak` | `#a27a50` | Eyebrows, borders, subtle emphasis |
| Slate blue | `--light-blue` | `#46556c` | Secondary data accent, travelled locations |

Keep accent colors sparse. Oxide red should identify an important word, action, or state—not fill large areas of every section.

## Typography

- **Display:** Space Grotesk, used consistently for primary page titles and section titles. Primary titles and section titles use semibold weight, with size creating the hierarchy.
- **Body:** Manrope, used for paragraphs, navigation, metadata, and controls.
- Primary titles are slightly tight (`letter-spacing` near `-0.04em`) and restrained rather than dominant. Shared section titles use the `page__section-title` class and generally sit between 1.6rem and 2rem.
- Eyebrows and controls use small uppercase text with wide tracking.
- Body copy should stay comfortable: roughly 16px with a line height around 1.7–1.8 and a limited reading width.

## Layout and spacing

- Primary content is capped by `--content-width: 76rem`.
- Text-led pages and the landing page use `--page-measure: 68rem`.
- Prefer a single strong composition per section. Use an asymmetric two-column layout only when image and copy genuinely support each other.
- Use generous vertical space and thin borders. Avoid stacking several raised cards inside another raised card.
- Corners are restrained (`0.35rem` to `1rem`); this is not a pill-shaped interface.
- Shadows are soft and infrequent. Borders should usually provide structure first.

## Components

### Navigation

The navigation is dark, compact, and direct. Main destinations are Portfolio, Gallery, and Contact. Thoughts content remains in the codebase, but its navigation item and public routes are intentionally disabled for now.

### Buttons and links

- The primary action uses the dark ink surface and warm-white text.
- Secondary actions are transparent with a fine neutral border.
- Hover feedback may use oxide red and a subtle two-pixel lift.
- Labels are short, uppercase, and tracked; avoid multiple competing primary actions.

### Imagery

- Photography should retain its own natural character.
- Editorial portraits may use the landing page's vintage halftone language: warm cream, ochre, near-black, paper grain, geometric registration marks, and sparse muted-teal details.
- Do not add mascot imagery or symbolic animals to the portrait unless explicitly requested.
- Avoid glossy stock-photo treatment, saturated gradients, and text baked into hero images.

### Motion

- Standard interaction timing is `--transition-standard: 0.24s ease`.
- Entrance motion should be short, low-distance, and used once.
- Respect `prefers-reduced-motion`.
- Typing effects are acceptable on content pages where they add character, but the landing page should prioritize immediate clarity.

## Accessibility and responsive behavior

- Maintain readable contrast against warm backgrounds.
- Every meaningful image needs descriptive alt text; decorative imagery should be hidden from assistive technology.
- Keyboard focus and hover states must remain visible.
- Mobile layouts should stack naturally without shrinking type to preserve desktop compositions.
- Interactive targets should be comfortably tappable, around 44px high when possible.

## Future iteration checklist

Before merging a visual change, confirm:

- Does the page still feel warm, editorial, and quiet?
- Is the main message understandable without waiting for animation?
- Did the change reuse existing tokens before introducing a new color, radius, or shadow?
- Is there one clear visual focus rather than several equally loud elements?
- Does it work at narrow mobile and wide desktop sizes?
- Are any new theme decisions reflected in this document and in the CSS tokens?

## Source files

- Theme tokens: `src/styles/variables.css`
- Global typography and base styles: `src/styles/index.css`
- Navigation: `src/styles/shared/navbar.css`
- Landing page: `src/styles/home/home.css`
- Current landing portrait: `src/assets/images/landing-portrait-halftone-right.webp`
