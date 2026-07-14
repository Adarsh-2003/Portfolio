# Design System (Foundation)

This document describes the reusable design-system tokens and primitives used by the vanilla HTML/CSS/JS portfolio foundation.

## Color Tokens

- Dark background
  - `--bg-0`: `#000105`
  - `--bg-1`: `#000815`
- Text
  - `--text-0`: `rgba(245, 250, 255, 0.96)`
  - `--text-1`: `rgba(245, 250, 255, 0.78)`
  - `--text-2`: `rgba(245, 250, 255, 0.58)`
- Ice blue accent
  - `--accent-0`: `#27d5dc`
  - `--accent-1`: `#60D5FA`
  - `--accent-2`: `#21f4ee`
  - `--accent-3`: `rgba(33, 244, 238, 0.22)`
- Glassmorphism surfaces
  - `--glass-bg`: `rgba(10, 16, 28, 0.42)`
  - `--glass-border`: `rgba(39, 213, 220, 0.18)`
  - `--glass-border-2`: `rgba(255, 255, 255, 0.12)`

## Typography

- Font stack (base): `--font-sans`
  - `"Space Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif`
- Text scale:
  - `--fs-0` .. `--fs-8`: `12px` .. `68px`
- Line-height:
  - `--lh-1`: `1.2`, `--lh-2`: `1.35`, `--lh-3`: `1.55`

## Spacing Scale

- `--space-1` .. `--space-10`:
  - `4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px, 72px`

## Border Radius

- `--radius-1`: `8px`
- `--radius-2`: `12px`
- `--radius-3`: `18px`
- `--radius-4`: `26px`

## Containers

- `--container-max`: `1180px`
- `--container-gutter`: `24px`
- `.container`
  - Uses `min(var(--container-max), calc(100% - 2 * var(--container-gutter)))`

## Buttons (Primitives)

- Base: `.btn`
- Variants:
  - `.btn--primary`: accent gradient + stronger border
  - `.btn--ghost`: transparent background + border only

Hover/press behavior is handled via transitions and `:hover` / `:active`.

## Cards / Surfaces

- `.card`: simple dark card with border-radius + subtle border
- `.card--glass`: blurred glass background + stronger border
- `.glass-panel`: reusable blurred panel surface
- `.glass-panel--soft`: softer variant (reduced border + different shadow)

## Section Spacing

- `.section`: `padding-block: var(--space-10)`
- Page modules currently omit content, but define top padding to accommodate the fixed navbar:
  - `.page--home .site-main`, `.page--work .site-main`, etc.

## Responsive Breakpoints

- Base breakpoints:
  - `--bp-sm`: `640px`
  - `--bp-md`: `900px`
  - `--bp-lg`: `1200px`
- Responsive behavior:
  - `@media (max-width: 1020px)`: reduces container gutter
  - `@media (max-width: 720px)`: switches mobile visibility utilities and slightly adjusts button sizing

## Hover Animations

- `.hover-lift`
  - Hover: slight lift + glow-like border change + box-shadow
- `.link`
  - Hover: text brightens + underline gradient reveal

## Glassmorphism + Dark Background

- Global page background uses layered radial gradients + `--bg-0`/`--bg-1`.
- Glass blur uses `backdrop-filter` with `-webkit-backdrop-filter` fallback.

## Reveal Animations (JS Hook)

- Elements can opt into scroll reveal with `data-reveal`.
- JS adds `is-visible` when intersecting.
- CSS:
  - `.reveal`: starts hidden (opacity + translateY)
  - `.reveal.is-visible`: transitions in

