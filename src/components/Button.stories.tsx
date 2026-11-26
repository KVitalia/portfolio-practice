import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Button triggers a single action, in-page, on submit, or a lower-emphasis navigation-style action (\`link\` variant). For a real hyperlink to another page, use an \`<a>\` instead — \`link\` only looks like one. Pass \`href\` when the action is really a same-page anchor jump that should look like a button (e.g. "Write Me" scrolling to \`#contact\`) — it then renders an \`<a>\` with identical styling instead of a \`<button>\`.

**Parameters**

| Prop | Values | Default |
| --- | --- | --- |
| \`variant\` | \`main\`, \`secondary\`, \`link\` | \`main\` |
| \`size\` | \`normal\`, \`large\` | \`normal\` |
| \`disabled\` | \`boolean\` | \`false\` |
| \`disabledReason\` | text shown under the button, linked via \`aria-describedby\` while disabled | — |
| \`href\` | renders an \`<a>\` instead of a \`<button>\`, same styling | — |

**Variants**

- \`main\` — filled with \`accent\`, text in \`surface\`. For the one most important action in a view. Text-on-fill contrast is ~5.1:1 against \`accent\` (passes the 4.5:1 rule for regular text).
- \`secondary\` — no fill, \`accent\` border, text in \`ink\`. For actions beside a main button. The \`accent\` border holds ~4.6:1 against \`canvas\` (passes the 3:1 rule for a border/non-text element).
- \`link\` — no fill, no border, underlined \`accent\` text with a trailing chevron. For a lower-emphasis action, e.g. "See all work". \`accent\` text holds ~4.6:1 against \`canvas\` and ~5.1:1 against \`surface\` (passes the 4.5:1 rule for regular text); the chevron inherits the same color via \`currentColor\`.

**States**

- Default — as above.
- Hover — \`main\` and \`link\` dim slightly (\`brightness-95\`, keeps text contrast above 4.5:1); \`secondary\` fills with \`surface\`.
- Focus (keyboard) — a 2px \`ink\` outline, offset from the button, visible on all variants (contrast well above 3:1 against \`canvas\` and \`surface\`).
- Disabled — set with \`disabled\`, not the native \`disabled\` attribute: the button is marked \`aria-disabled\` and stays focusable, so keyboard and screen-reader users can still reach it. Pass \`disabledReason\`; it renders under the button and is linked to it with \`aria-describedby\` so screen readers announce why the action is unavailable.

**Tokens used:** \`accent\`, \`surface\`, \`ink\`, \`ink-muted\` (disabled explanation text), \`rounded-control\`, \`text-body\`, \`text-lead\`, \`text-caption\`.

**When to use:** for an action the user triggers directly (submit, confirm, add). Use \`main\` once per view for the primary action; \`secondary\` for the actions next to it; \`link\` for a lower-emphasis action such as "see more" that doesn't deserve a boxed button. Not for a real link to another page — use an \`<a>\` there instead.

**How to include in code:**

\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="main" size="normal" onClick={handleSubmit}>
  Submit
</Button>

<Button variant="secondary" disabled disabledReason="Finish your profile to continue.">
  Continue
</Button>

<Button variant="link" onClick={showMore}>
  See all work
</Button>

<Button variant="secondary" href="#contact">
  Write Me
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["main", "secondary", "link"] },
    size: { control: "select", options: ["normal", "large"] },
    disabled: { control: "boolean" },
    href: { control: "text" },
  },
  args: {
    children: "Submit",
    variant: "main",
    size: "normal",
    disabled: false,
    disabledReason: "This action needs completed profile details.",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
