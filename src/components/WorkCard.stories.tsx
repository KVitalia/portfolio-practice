import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WorkCard } from "./WorkCard";
import cover from "@/assets/work-card-cover.png";

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
WorkCard is a clickable case card. Number, title, cover picture, summary, "Role:" line, and "What achieved:" line are all visible at once. On hover or keyboard focus, the whole card scales up slightly, as if it were lifting toward the viewer. It's capped at \`max-w-card\` (400px) — it won't stretch full-width, so several fit side by side in a row (place them in a \`flex flex-wrap\` or \`grid\` container with a \`gap-*\` token).

**Parameters**

| Prop | Values | Default |
| --- | --- | --- |
| \`number\` | text, e.g. "01" | — |
| \`title\` | text | — |
| \`summary\` | text | — |
| \`role\` | text, shown as "Role: …" | — |
| \`achieved\` | text, shown as "What achieved: …" | — |
| \`image\` | imported picture (from \`src/assets\`) | — |
| \`imageAlt\` | alt text for the picture | — |
| \`href\` | destination of the card | — |

**States**

- Default — all content visible: number/title at \`text-lead\`, cover picture (\`aspect-cover\`), summary and role/achieved lines in \`ink-muted\`. Card border is \`line\`.
- Hover — the whole card scales up slightly (\`scale-105\`) and its border darkens to \`ink-muted\`.
- Focus (keyboard) — the same scale-up, plus a 2px \`ink\` outline around the whole card (contrast well above 3:1 against \`canvas\` and \`surface\`).

**Tokens used:** \`line\`, \`ink-muted\`, \`ink\`, \`surface\`, \`rounded-card\`, \`aspect-cover\`, \`text-lead\`, \`text-body\`, \`max-w-card\`.

**Keeping a row of cards aligned:** \`title\` is set at \`text-lead\` (not the larger \`text-heading\`) specifically so longer titles — e.g. "APP for Students" — still fit on one line beside the number at the card's 400px width. A title that wraps to two lines makes that card taller than its neighbors in the same grid row. If a title in your content (including Dutch/Spanish/Ukrainian translations) is long enough to wrap even at \`text-lead\`, consider shortening it rather than sizing the text down further.

**When to use:** for a case/project in a list, where the whole card is clickable and the full summary should be visible without requiring a hover to reveal it.

**How to include in code:**

\`\`\`tsx
import { WorkCard } from "@/components/WorkCard";
import cover from "@/assets/some-cover.png";

<WorkCard
  href="/work/some-case"
  number="01"
  title="Case title"
  summary="One short sentence about the case."
  role="What you did on it."
  achieved="What it achieved."
  image={cover}
  imageAlt="Cover picture of the case"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    number: { control: "text" },
    title: { control: "text" },
    summary: { control: "text" },
    role: { control: "text" },
    achieved: { control: "text" },
    href: { control: "text" },
  },
  args: {
    number: "01",
    title: "NAME",
    summary: "Website redesign for a small business to simplify the booking journey.",
    role: "Mapped the customer decision flow, redesigned the booking steps, built the prototype.",
    achieved: "Shorter booking flow, clearer next steps, fewer drop-offs before checkout.",
    image: cover,
    imageAlt: "Cover picture of the case",
    href: "#",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
