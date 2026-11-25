import Image, { type StaticImageData } from "next/image";
import type { AnchorHTMLAttributes } from "react";

type WorkCardProps = {
  /** Case number, e.g. "01". */
  number: string;
  /** Case title. */
  title: string;
  /** Short summary. */
  summary: string;
  /** "Role:" line. */
  role: string;
  /** "What achieved:" line. */
  achieved: string;
  /** Cover picture, imported from `src/assets` (not `public`). Shown at `aspect-cover`. */
  image: StaticImageData;
  /** Alt text for the cover picture. */
  imageAlt: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">;

/**
 * Clickable case card showing its number, title, picture, summary, "Role:"
 * and "What achieved:" lines — all visible at once. On hover or keyboard
 * focus the whole card scales up slightly, as if it were lifting toward
 * the viewer.
 *
 * Capped at `max-w-card` (400px) so several fit side by side in a row —
 * place a few inside a `flex flex-wrap` or `grid` container with a `gap-*`
 * token and each card keeps its own width instead of stretching full-width.
 */
export function WorkCard({
  number,
  title,
  summary,
  role,
  achieved,
  image,
  imageAlt,
  className,
  ...props
}: WorkCardProps) {
  return (
    <a
      className={[
        "block w-full max-w-card rounded-card border border-line bg-surface p-4 transition-transform duration-200 ease-out",
        "hover:scale-105 hover:border-ink-muted",
        "focus-visible:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="flex items-baseline gap-4">
        <span className="text-heading text-ink">{number}</span>
        <span className="text-heading text-ink">{title}</span>
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <div className="relative aspect-cover w-full overflow-hidden rounded-card">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>

        <p className="text-body text-ink-muted">{summary}</p>

        <p className="text-body">
          <span className="text-ink">Role: </span>
          <span className="text-ink-muted">{role}</span>
        </p>

        <p className="text-body">
          <span className="text-ink">What achieved: </span>
          <span className="text-ink-muted">{achieved}</span>
        </p>
      </div>
    </a>
  );
}
