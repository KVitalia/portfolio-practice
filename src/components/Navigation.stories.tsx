import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Navigation is the site menu. It aligns to the right of its container, leaving room for a logo/wordmark on the left. On a wide screen it shows as a plain horizontal row of links. On a narrow screen it collapses into a toggle button, also right-aligned; the opened menu floats above the page content (it doesn't push the page down) and closes on Escape, on selecting an item, or by toggling the button again. Use Storybook's Viewport toolbar to check the narrow-screen behavior.

**Parameters**

| Prop | Values | Default |
| --- | --- | --- |
| \`items\` | \`{ label, href }[]\` | — |
| \`activeHref\` | \`href\` of the current page | — |
| \`className\` | extra classes for the root \`<nav>\` — pass \`flex-1\` (or similar) when it sits beside other flex siblings (a logo, a button) so it actually grows to fill the row | — |

**States**

- Default — \`ink-muted\` text.
- Hover — darkens to \`ink\`.
- Focus (keyboard) — a 2px \`ink\` outline, offset from the item (well above the 3:1 rule for non-text elements against \`canvas\`).
- Active item — set via \`activeHref\`; gets \`aria-current="page"\` plus \`accent\` text with an underline (\`accent\` text holds ~4.6:1 against \`canvas\`, passing the 4.5:1 rule for regular text).

**Narrow screen**

Below the \`md\` breakpoint the item row is replaced by a toggle button (hamburger/close icon). Opening it reveals the menu as an absolutely positioned panel anchored to the toggle button's right edge, sized to its own content (not stretched to the bar's width) — it floats over the page on a solid \`surface\` background (unlike the inline bar, which matches \`canvas\` since it doesn't overlap anything). The rest of the page dims and blurs behind it; closed by Escape, by picking an item, by the toggle button again, or by clicking the dimmed backdrop.

**Tokens used:** \`canvas\` (the inline bar, matches the page background), \`surface\` (the floating mobile-menu panel, needs to stand out from the page behind it), \`line\` (mobile-menu panel border, decorative only), \`ink\` (also the dimmed/blurred backdrop, at low opacity), \`ink-muted\`, \`accent\`, \`text-body\`, \`font-sans\`.

**When to use:** for the site's primary menu, once per page (header). Not for in-page jump links or breadcrumbs.

**How to include in code:**

\`\`\`tsx
import { Navigation } from "@/components/Navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

<Navigation items={items} activeHref="/works" />

// Beside a logo and a button in a header row, pass className="flex-1" so
// Navigation grows to fill the space between them:
<header className="flex items-center gap-4">
  <Logo />
  <Navigation items={items} activeHref="/works" className="flex-1" />
  <Button>Contact</Button>
</header>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    activeHref: {
      control: "select",
      options: items.map((item) => item.href),
    },
    items: { control: false },
  },
  args: {
    items,
    activeHref: "/",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
