import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
FormField is a text field with its caption shown above it. The caption is never replaced by placeholder-only text, so the field's purpose stays visible while the person types.

**Parameters**

| Prop | Values | Default |
| --- | --- | --- |
| \`label\` | caption text shown above the field | — |
| \`defaultValue\` | initial field value (filled state) | — |
| \`error\` | \`boolean\` | \`false\` |
| \`errorText\` | message shown under the field, linked via \`aria-describedby\` while \`error\` is true | — |
| \`disabled\` | \`boolean\` | \`false\` |

**States**

- Default — \`ink-muted\` border (contrast ~8:1 against \`surface\`, well above the 3:1 rule for non-text elements).
- Hover — border darkens to \`ink\`.
- Focus (keyboard) — a 2px \`ink\` outline, offset from the field, well above the 3:1 rule.
- Filled — the field holds a value; styling is the same as default, only the content differs.
- Error — border and the inline icon turn \`danger\`, and a message in \`danger\` appears under the field, linked to it with \`aria-describedby\` so screen readers announce it.
- Disabled — set with \`disabled\`, not the native \`disabled\` attribute: the field is marked \`aria-disabled\` and stays focusable, but rejects typing and pasting, so keyboard and screen-reader users can still reach and hear it.

**Tokens used:** \`surface\`, \`ink\`, \`ink-muted\`, \`danger\`, \`rounded-control\`, \`text-caption\`, \`text-body\`.

**When to use:** for a single line of text input with a visible caption (name, email, search term). Pair it with \`errorText\` to explain validation failures in place, right under the field.

**How to include in code:**

\`\`\`tsx
import { FormField } from "@/components/FormField";

<FormField label="Email" placeholder="you@example.com" />

<FormField
  label="Email"
  defaultValue="not-an-email"
  error
  errorText="Enter a valid email address."
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    defaultValue: { control: "text" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Email",
    defaultValue: "",
    error: false,
    errorText: "Enter a valid email address.",
    disabled: false,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <FormField key={String(args.defaultValue)} {...args} />,
};
