import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

type FieldKind = "name" | "address" | "phone" | "email" | "message";

const fieldPresets: Record<
  FieldKind,
  { label: string; placeholder: string } & (
    | { multiline: true }
    | { multiline: false; type: "text" | "email" | "tel" }
  )
> = {
  name: { label: "Name", placeholder: "Jane Doe", multiline: false, type: "text" },
  address: { label: "Address", placeholder: "123 Main St, Amsterdam", multiline: false, type: "text" },
  phone: { label: "Phone number", placeholder: "+1 555 000 0000", multiline: false, type: "tel" },
  email: { label: "Email", placeholder: "you@example.com", multiline: false, type: "email" },
  message: { label: "Message", placeholder: "Write your message…", multiline: true },
};

type StoryArgs = {
  fieldKind: FieldKind;
  defaultValue: string;
  error: boolean;
  errorText: string;
  disabled: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Components/FormField",
  component: FormField as unknown as ComponentType<StoryArgs>,
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
| \`type\` | \`text\`, \`email\`, \`tel\` — ignored when \`multiline\` is on | \`text\` |
| \`multiline\` | \`boolean\` — renders a taller \`<textarea>\` for longer free text (e.g. a message) instead of a one-line \`<input>\` | \`false\` |
| \`placeholder\` | hint text shown in the empty field, in \`ink-muted\` | — |
| \`defaultValue\` | initial field value (filled state) | — |
| \`error\` | \`boolean\` | \`false\` |
| \`errorText\` | message shown under the field, linked via \`aria-describedby\` while \`error\` is true | — |
| \`disabled\` | \`boolean\` | \`false\` |

The \`fieldKind\` control below is a Storybook-only shortcut: it sets \`label\`, \`type\`/\`multiline\`, and \`placeholder\` together so you can see what the field is for at a glance. In code, set those props yourself (see below) — \`fieldKind\` isn't a real prop.

**States**

- Default — \`ink-muted\` border (contrast ~8:1 against \`surface\`, well above the 3:1 rule for non-text elements).
- Hover — border darkens to \`ink\`.
- Focus (keyboard) — a 2px \`ink\` outline, offset from the field, well above the 3:1 rule.
- Filled — the field holds a value; styling is the same as default, only the content differs.
- Error — border and the inline icon turn \`danger\`, and a message in \`danger\` appears under the field, linked to it with \`aria-describedby\` so screen readers announce it. The icon sits at the top of a \`multiline\` field instead of centered.
- Disabled — set with \`disabled\`, not the native \`disabled\` attribute: the field is marked \`aria-disabled\` and stays focusable, but rejects typing and pasting, so keyboard and screen-reader users can still reach and hear it.

**Tokens used:** \`surface\`, \`ink\`, \`ink-muted\`, \`danger\`, \`rounded-control\`, \`text-caption\`, \`text-body\`.

**When to use:** for a single line of text input with a visible caption — name, address, email, phone number (set \`type\` to match, e.g. \`email\` or \`tel\`, so the right keyboard shows on mobile). Use \`multiline\` for a longer message. Pair it with \`errorText\` to explain validation failures in place, right under the field.

**How to include in code:**

\`\`\`tsx
import { FormField } from "@/components/FormField";

<FormField label="Name" placeholder="Jane Doe" />

<FormField label="Address" placeholder="123 Main St, Amsterdam" />

<FormField label="Email" type="email" placeholder="you@example.com" />

<FormField label="Phone number" type="tel" placeholder="+1 555 000 0000" />

<FormField label="Message" multiline placeholder="Write your message…" />

<FormField
  label="Email"
  type="email"
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
    fieldKind: {
      control: "select",
      options: ["name", "address", "phone", "email", "message"],
      description: "Storybook-only: sets label, type/multiline, and placeholder together.",
    },
    defaultValue: { control: "text" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    fieldKind: "name",
    defaultValue: "",
    error: false,
    errorText: "This field is required.",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const preset = fieldPresets[args.fieldKind];
    const shared = {
      key: `${args.fieldKind}-${args.defaultValue}`,
      label: preset.label,
      placeholder: preset.placeholder,
      defaultValue: args.defaultValue,
      error: args.error,
      errorText: args.errorText,
      disabled: args.disabled,
    };
    return preset.multiline ? (
      <FormField {...shared} multiline />
    ) : (
      <FormField {...shared} type={preset.type} />
    );
  },
};
