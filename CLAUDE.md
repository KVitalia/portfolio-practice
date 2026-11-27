@AGENTS.md

## Project & Stack

Portfolio site. Next.js (App Router), TypeScript, Tailwind v4 (tokens via `@theme`), Storybook for component docs.

## Working with Git

- All work happens on the `main` branch; do not create new branches until I specifically ask you to.
- Pushing to `main` publishes the site (Vercel deploys every push to `main`), so always ask before pushing.

## Colors

All defined in `@theme` in [src/app/globals.css](src/app/globals.css). Use only these — no hex/rgb, no Tailwind palette classes.

- `canvas` (`bg-canvas`) — page background.
- `surface` (`bg-surface`, `text-surface`) — cards, fields, and text drawn on an accent fill.
- `line` (`border-line`) — decorative lines/card borders only; doesn't meet 3:1, never use for a functional border.
- `accent` (`bg-accent`, `text-accent`, `border-accent`) — fills, accent text/links, active-nav underline.
- `accent-logo` (`text-accent-logo`) — large/bold brand wordmark only; passes 3:1 for large text, not 4.5:1 for body text.
- `ink` (`text-ink`, `border-ink`, `outline-ink`) — body text, focus outline.
- `ink-muted` (`text-ink-muted`, `border-ink-muted`) — secondary text, outline-button/field border (≥3:1).
- `danger` (`text-danger`, `border-danger`) — error state (border, icon, error text).

## Typography

- Text scale: `text-caption`, `text-body`, `text-lead`, `text-heading`, `text-display` — each pairs size with its own line-height/letter-spacing/weight, defined in `@theme`.
- Fonts: `font-sans` (Wix Madefor Text, body/UI) and `font-istok` (Istok Web, used for the logo wordmark), both set up in [src/app/fonts.ts](src/app/fonts.ts).

## Spacing, Radii & Proportions

- Spacing inside components: only the steps that equal 8/12/16/24/32px — Tailwind `2`/`3`/`4`/`6`/`8` (e.g. `p-2`, `gap-4`, `px-6`). No arbitrary values.
- Page-level section spacing (e.g. `py-16` between `Hero`/`Cases`/`Footer` sections on [src/app/page.tsx](src/app/page.tsx)) may use other Tailwind scale steps for layout rhythm — there's no dedicated `@theme` token for it. This is page composition only; components themselves stay on the 8/12/16/24/32 steps.
- Radii: `rounded-control` (buttons, fields), `rounded-card` (cards). Currently `0px` — the layout uses right angles everywhere.
- Image proportions: `aspect-hero`, `aspect-band`, `aspect-portrait`, `aspect-cover`.
- Max widths: `max-w-field` (560px) caps a control's width on desktop while still shrinking to fill a narrower mobile container. `max-w-card` (400px) caps a card's width so several fit side by side in a row; shrinks the same way.
- See the "Foundations/Tokens" page in Storybook ([src/stories/Tokens.mdx](src/stories/Tokens.mdx)) for a visual reference.

## Components

Each has a Storybook story (Controls panel) and a docs page under **Components** in the Storybook sidebar.

- **Button** — [src/components/Button.tsx](src/components/Button.tsx), story: [src/components/Button.stories.tsx](src/components/Button.stories.tsx). Props: `variant` (`main` | `secondary` | `link`), `size` (`normal` | `large`), `disabled`, `disabledReason`. `main` is accent-filled for the one primary action in a view; `secondary` is an outline button (`accent` border) for actions beside it; `link` is a lower-emphasis, underlined `accent`-text button with a trailing chevron, for an action like "see more" — not for a real link to another page (use `<a>` for that). States: default, `hover:brightness-95`/`hover:bg-surface`, `focus-visible` with an `ink` outline, and disabled via `aria-disabled` (stays focusable) with `disabledReason` shown under it via `aria-describedby`.
- **FormField** — [src/components/FormField.tsx](src/components/FormField.tsx), story: [src/components/FormField.stories.tsx](src/components/FormField.stories.tsx). Props: `label` (caption, always above the field), `type` (`text` | `email` | `tel`, ignored when `multiline`), `multiline` (taller `<textarea>` instead of `<input>`, for name/address/phone vs. a longer message), `placeholder`, `defaultValue`, `error`, `errorText`, `disabled`. Capped at `max-w-field` (560px), still fills a narrower mobile container. States: default (`ink-muted` border, not `line`), `hover:border-ink`, `focus-visible` with an `ink` outline, `error` (border/icon/`errorText` turn `danger`, shown via `aria-describedby`), and disabled via `aria-disabled` (stays focusable, rejects typing/paste).
- **WorkCard** — [src/components/WorkCard.tsx](src/components/WorkCard.tsx), story: [src/components/WorkCard.stories.tsx](src/components/WorkCard.stories.tsx). Props: `number`, `title`, `summary`, `role`, `achieved`, `image` (imported from `src/assets`, not `public`), `imageAlt`, plus `href`/anchor props — the whole card is one `<a>`. All content is always visible (number/title at `text-lead`, cover picture at `aspect-cover`, summary, "Role:" and "What achieved:" lines). States: default (`line` border) and combined hover/focus (`scale-105`, border darkens to `ink-muted`, `focus-visible` adds an `ink` outline). Capped at `max-w-card` (400px) — wrap several in a `flex flex-wrap` or `grid` container with a `gap-*` token. Title stays at `text-lead` (not larger) so rows stay the same height.
- **Navigation** — [src/components/Navigation.tsx](src/components/Navigation.tsx), story: [src/components/Navigation.stories.tsx](src/components/Navigation.stories.tsx). Props: `items` (`{ label, href }[]`), `activeHref` (marks the current page: `aria-current="page"` plus `accent`-underlined text). Items align to the right, leaving room for a logo on the left. On a wide screen it's a plain horizontal row — states: default `ink-muted`, `hover:text-ink`, `focus-visible` with an `ink` outline. Below `md` it collapses into a toggle button; the opened menu is an absolutely positioned, right-aligned panel over a dimmed/blurred page background, closed via Escape, picking an item, or the toggle button again.
- Page sections ([Header](src/components/Header.tsx), [Hero](src/components/Hero.tsx), [Cases](src/components/Cases.tsx), [Footer](src/components/Footer.tsx)) compose the above components on [src/app/page.tsx](src/app/page.tsx); they are page layout, not reusable design-system components, so they don't get their own Storybook story.

## Rules

- Colors, text sizes, radii, and image proportions only from `@theme` tokens — no hex/rgb, no Tailwind standard-palette classes (`bg-blue-600`, `text-white`, `text-sm`).
- Arbitrary bracket values are prohibited (`p-[13px]`, `h-[150px]`, `text-[#...]`) — if a token doesn't fit, that's a sign a token is missing, not a reason to reach for brackets.
- Spacing inside components only at 8/12/16/24/32px (Tailwind `2`/`3`/`4`/`6`/`8`); page-level layout spacing (between sections) is the only place other steps may appear — see Spacing above.
- Don't add new colors to `@theme`; use the existing set above. Don't build a new one-off component when an existing Button/FormField/WorkCard/Navigation covers the need — extend the existing component's props instead.
- Contrast: regular text in working states ≥4.5:1; non-text elements (borders, focus outlines) ≥3:1. Check actual token pairs, not assumptions — e.g. `accent-logo` passes 3:1 but not 4.5:1, so it's large/bold text only.
- Unfilled borders (outline buttons, fields) use `ink-muted`, not `line` — `line` is decorative only and doesn't meet 3:1.
- Every interactive element implements default, hover, and focus states, plus disabled where applicable; a form field also implements an error state.
- Disabled interactive elements use `aria-disabled` (stay focusable, with an `aria-describedby` explanation), not the native `disabled` attribute.
- Images are imported from `src/assets` (not placed in `public`) and passed as props, as `WorkCard`/`Hero` do.
- Every component gets one Storybook story (Controls panel covering its variants/states) and a docs page — no separate stories per state. After changing a component, update its story and docs page in the same change.
- Copy and layout must accommodate English, Dutch, Spanish, and Ukrainian (see the site plan).

## Links

- Site plan: [Portfolio Site — Draft Plan.md](Portfolio%20Site%20—%20Draft%20Plan.md)
- Storybook tokens reference: [src/stories/Tokens.mdx](src/stories/Tokens.mdx)
