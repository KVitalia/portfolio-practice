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

**States**

- Default — \`ink-muted\` text.
- Hover — darkens to \`ink\`.
- Focus (keyboard) — a 2px \`ink\` outline, offset from the item (well above the 3:1 rule for non-text elements against \`surface\`).
- Active item — set via \`activeHref\`; gets \`aria-current="page"\` plus \`accent\` text with an underline (\`accent\` text holds ~5.1:1 against \`surface\`, passing the 4.5:1 rule for regular text).

**Narrow screen**

Below the \`md\` breakpoint the item row is replaced by a toggle button (hamburger/close icon). Opening it reveals the menu as an absolutely positioned panel over the page, closed by Escape, by picking an item, or by the toggle button.

**Tokens used:** \`surface\`, \`line\` (mobile-menu divider, decorative only), \`ink\`, \`ink-muted\`, \`accent\`, \`text-body\`, \`font-sans\`.

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
