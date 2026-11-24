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
Button triggers a single action, in-page or on submit. It never carries a link to another page (use a text link for that).

**Parameters**

| Prop | Values | Default |
| --- | --- | --- |
| \`variant\` | \`main\`, \`secondary\` | \`main\` |
| \`size\` | \`normal\`, \`large\` | \`normal\` |
| \`disabled\` | \`boolean\` | \`false\` |
| \`disabledReason\` | text shown under the button, linked via \`aria-describedby\` while disabled | — |

**Variants**

- \`main\` — filled with \`accent\`, text in \`surface\`. For the one most important action in a view. Text-on-fill contrast is ~5.1:1 against \`accent\` (passes the 4.5:1 rule for regular text).
- \`secondary\` — no fill, \`ink-muted\` border, text in \`ink\`. For actions beside a main button. The \`ink-muted\` border holds ~7.6:1 against \`canvas\` (passes the 3:1 rule for a border/non-text element).

**States**

- Default — as above.
- Hover — \`main\` dims slightly (\`brightness-95\`, keeps text contrast above 4.5:1); \`secondary\` fills with \`surface\`.
- Focus (keyboard) — a 2px \`ink\` outline, offset from the button, visible on both variants (contrast well above 3:1 against \`canvas\` and \`surface\`).
- Disabled — set with \`disabled\`, not the native \`disabled\` attribute: the button is marked \`aria-disabled\` and stays focusable, so keyboard and screen-reader users can still reach it. Pass \`disabledReason\`; it renders under the button and is linked to it with \`aria-describedby\` so screen readers announce why the action is unavailable.

**Tokens used:** \`accent\`, \`surface\`, \`ink\`, \`ink-muted\`, \`rounded-control\`, \`text-body\`, \`text-lead\`, \`text-caption\`.

**When to use:** for an action the user triggers directly (submit, confirm, add). Use \`main\` once per view for the primary action; use \`secondary\` for the actions next to it. Not for navigation to another page — use a text link there instead.

**How to include in code:**

\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="main" size="normal" onClick={handleSubmit}>
  Submit
</Button>

<Button variant="secondary" disabled disabledReason="Finish your profile to continue.">
  Continue
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["main", "secondary"] },
    size: { control: "select", options: ["normal", "large"] },
    disabled: { control: "boolean" },
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
