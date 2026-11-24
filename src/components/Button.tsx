import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "main" | "secondary";
type ButtonSize = "normal" | "large";

type ButtonProps = {
  /** Fill style: `main` is the accent-filled button, `secondary` is the outline button. */
  variant?: ButtonVariant;
  /** Button height and padding. */
  size?: ButtonSize;
  /** Marks the button as disabled via `aria-disabled` (the button stays focusable). */
  disabled?: boolean;
  /**
   * Explanation shown under the button while it is disabled, and linked to the
   * button through `aria-describedby`. Required when `disabled` is true.
   */
  disabledReason?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "size">;

const sizeClasses: Record<ButtonSize, string> = {
  normal: "h-10 px-4 text-body",
  large: "h-12 px-6 text-lead",
};

const variantClasses: Record<ButtonVariant, string> = {
  main: "bg-accent text-surface border border-accent",
  secondary: "bg-transparent text-ink border border-ink-muted",
};

/**
 * Button for primary and secondary actions.
 *
 * Use `variant="main"` for the single most important action in a view and
 * `variant="secondary"` for actions beside it. Disabled buttons keep focus and
 * expose an `aria-describedby` explanation instead of using the native
 * `disabled` attribute, so screen reader and keyboard users still know the
 * button exists and why it can't be used.
 */
export function Button({
  variant = "main",
  size = "normal",
  disabled = false,
  disabledReason,
  id,
  children,
  className,
  onClick,
  onKeyDown,
  ...props
}: ButtonProps) {
  const describedById = disabled && disabledReason ? `${id ?? "button"}-disabled-reason` : undefined;

  return (
    <>
      <button
        id={id}
        type="button"
        aria-disabled={disabled || undefined}
        aria-describedby={describedById}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        onKeyDown={(event) => {
          if (disabled && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            return;
          }
          onKeyDown?.(event);
        }}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-control font-sans transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
          disabled
            ? "opacity-60 cursor-not-allowed"
            : variant === "main"
              ? "hover:brightness-95"
              : "hover:bg-surface",
          sizeClasses[size],
          variantClasses[variant],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </button>
      {describedById ? (
        <p id={describedById} className="text-caption text-ink-muted">
          {disabledReason}
        </p>
      ) : null}
    </>
  );
}
