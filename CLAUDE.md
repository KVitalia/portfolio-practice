@AGENTS.md

## Stack

Next.js (App Router), TypeScript, Tailwind.

## Working with Git

- All work happens on the `main` branch; do not create new branches until I specifically ask you to.
- Pushing to `main` publishes the site (Vercel deploys every push to `main`), so always ask before pushing.

## Tokens

Defined in `@theme` in [src/app/globals.css](src/app/globals.css). This is the only source of values — no hex, no arbitrary bracket values, no classes outside this list.

- Colors: `canvas` (page background), `surface` (cards, fields, and text-on-accent), `line` (decorative lines/card borders), `accent` (fills), `accent-logo` (large/bold brand wordmark only — passes 3:1 for large text, not 4.5:1), `ink` (body text, focus outline), `ink-muted` (secondary text, outline-button border, ≥3:1), `danger`.
- Radii: `rounded-control` (buttons, fields), `rounded-card` (cards). Currently `0px` — the layout uses right angles everywhere.
- Text scale: `text-caption`, `text-body`, `text-lead`, `text-heading`, `text-display` (each pairs size with its own line-height/letter-spacing/weight).
- Image proportions: `aspect-hero`, `aspect-band`, `aspect-portrait`, `aspect-cover`.
- Spacing: use only the steps that equal 8/12/16/24/32px — Tailwind's `2`/`3`/`4`/`6`/`8` (e.g. `p-2`, `gap-4`, `px-6`).
- See the "Foundations/Tokens" page in Storybook for a visual reference.

## Components

Each has a Storybook story (Controls panel) and a docs page under **Components** in the Storybook sidebar.

- **Button** — [src/components/Button.tsx](src/components/Button.tsx), story: [src/components/Button.stories.tsx](src/components/Button.stories.tsx). Props: `variant` (`main` | `secondary`), `size` (`normal` | `large`), `disabled`, `disabledReason`. `main` is accent-filled for the one primary action in a view; `secondary` is an outline button (`accent` border) for actions beside it. Disabled state uses `aria-disabled` (not the native `disabled` attribute) so the button stays focusable, with `disabledReason` shown under it via `aria-describedby`.
- **FormField** — [src/components/FormField.tsx](src/components/FormField.tsx), story: [src/components/FormField.stories.tsx](src/components/FormField.stories.tsx). Props: `label` (caption, always above the field), `defaultValue`, `error`, `errorText`, `disabled`. Border is `ink-muted` (not `line`), darkens to `ink` on hover, `ink` focus outline. `error` turns the border and an inline icon `danger` and shows `errorText` under the field via `aria-describedby`. Disabled state uses `aria-disabled` (not the native `disabled` attribute) so the field stays focusable, rejecting typing/paste instead of blocking focus.

## Rules

- Values only from `@theme` tokens — no hex/rgb, no Tailwind standard-palette classes (`bg-blue-600`, `text-white`, `text-sm`), no arbitrary bracket values (`p-[13px]`).
- Spacing only at 8/12/16/24/32px (Tailwind `2`/`3`/`4`/`6`/`8`).
- Contrast: regular text in working states ≥4.5:1; non-text elements (borders, focus outlines) ≥3:1. Check actual token pairs, not assumptions — e.g. `accent-logo` passes 3:1 but not 4.5:1, so it's large/bold text only.
- Unfilled borders (outline buttons, fields) use `ink-muted`, not `line` — `line` is decorative only and doesn't meet 3:1.
- Disabled interactive elements use `aria-disabled` (stay focusable, with an `aria-describedby` explanation), not the native `disabled` attribute.
- Every component gets one Storybook story (Controls panel covering its variants/states) and a docs page — no separate stories per state.
- Copy and layout must accommodate English, Dutch, Spanish, and Ukrainian (see the site plan).

## Links

- Site plan: [Portfolio Site — Draft Plan.md](Portfolio%20Site%20—%20Draft%20Plan.md)
