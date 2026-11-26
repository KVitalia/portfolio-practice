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
- Max widths: `max-w-field` (560px) — caps a control's width on wide/desktop screens; the control still shrinks to fill a narrower (mobile) container. `max-w-card` (400px) — caps a card's width so several fit side by side in a row; shrinks on narrower containers the same way.
- See the "Foundations/Tokens" page in Storybook for a visual reference.

## Components

Each has a Storybook story (Controls panel) and a docs page under **Components** in the Storybook sidebar.

- **Button** — [src/components/Button.tsx](src/components/Button.tsx), story: [src/components/Button.stories.tsx](src/components/Button.stories.tsx). Props: `variant` (`main` | `secondary` | `link`), `size` (`normal` | `large`), `disabled`, `disabledReason`. `main` is accent-filled for the one primary action in a view; `secondary` is an outline button (`accent` border) for actions beside it; `link` is a lower-emphasis, underlined `accent`-text button with a trailing chevron, for an action like "see more" — not for a real link to another page (use `<a>` for that). Disabled state uses `aria-disabled` (not the native `disabled` attribute) so the button stays focusable, with `disabledReason` shown under it via `aria-describedby`.
- **FormField** — [src/components/FormField.tsx](src/components/FormField.tsx), story: [src/components/FormField.stories.tsx](src/components/FormField.stories.tsx). Props: `label` (caption, always above the field), `type` (`text` | `email` | `tel`, ignored when `multiline`), `multiline` (renders a taller `<textarea>` instead of `<input>`, for name/address/phone vs. a longer message), `placeholder`, `defaultValue`, `error`, `errorText`, `disabled`. Capped at `max-w-field` (560px) so it doesn't stretch full-width on desktop, while still filling a narrower (mobile) container. Border is `ink-muted` (not `line`), darkens to `ink` on hover, `ink` focus outline. `error` turns the border and an inline icon `danger` and shows `errorText` under the field via `aria-describedby`. Disabled state uses `aria-disabled` (not the native `disabled` attribute) so the field stays focusable, rejecting typing/paste instead of blocking focus.
- **WorkCard** — [src/components/WorkCard.tsx](src/components/WorkCard.tsx), story: [src/components/WorkCard.stories.tsx](src/components/WorkCard.stories.tsx). Props: `number`, `title`, `summary`, `role`, `achieved`, `image` (imported from `src/assets`, not `public`), `imageAlt`, plus `href`/anchor props — the whole card is one `<a>`. All content is always visible (number/title at `text-lead`, cover picture at `aspect-cover`, summary, "Role:" and "What achieved:" lines); on hover/focus the whole card scales up slightly (`scale-105`) and the border darkens from `line` to `ink-muted`. Capped at `max-w-card` (400px) so several fit side by side in a row — wrap them in a `flex flex-wrap` or `grid` container with a `gap-*` token. Title is kept at `text-lead` (not a larger size) so longer titles still fit on one line and cards in the same row stay the same height.
- **Navigation** — [src/components/Navigation.tsx](src/components/Navigation.tsx), story: [src/components/Navigation.stories.tsx](src/components/Navigation.stories.tsx). Props: `items` (`{ label, href }[]`), `activeHref` (marks the current page: `aria-current="page"` plus `accent`-underlined text). Items align to the right of the nav bar, leaving room for a logo on the left. On a wide screen it's a plain horizontal row (`ink-muted`, darkens to `ink` on hover, `ink` focus outline); below the `md` breakpoint it collapses into a right-aligned toggle button, and the opened menu is an absolutely positioned, right-aligned panel floating over the page (doesn't push content down), closed via Escape, picking an item, or the toggle button again.

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
