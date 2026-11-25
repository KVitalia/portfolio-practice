"use client";

import { useId, type InputHTMLAttributes } from "react";

type FormFieldProps = {
  /** Caption shown above the field. */
  label: string;
  /** Marks the field as invalid: border, icon, and `errorText` turn `danger`. */
  error?: boolean;
  /** Message shown under the field while `error` is true. Required when `error` is true. */
  errorText?: string;
  /** Marks the field as disabled via `aria-disabled` (the field stays focusable but rejects input). */
  disabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "disabled" | "id">;

/**
 * Text field with a caption above it.
 *
 * The caption always sits above the field, never as placeholder-only text.
 * Disabled uses `aria-disabled` (not the native `disabled` attribute) so the
 * field stays reachable by keyboard, and rejects edits instead of blocking focus.
 */
export function FormField({
  label,
  error = false,
  errorText,
  disabled = false,
  className,
  onChange,
  onKeyDown,
  onPaste,
  ...props
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = props.name ?? generatedId;
  const errorId = error && errorText ? `${fieldId}-error` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-caption text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          id={fieldId}
          type="text"
          aria-disabled={disabled || undefined}
          aria-invalid={error || undefined}
          aria-describedby={errorId}
          onChange={(event) => {
            if (disabled) {
              event.preventDefault();
              return;
            }
            onChange?.(event);
          }}
          onKeyDown={(event) => {
            if (disabled && event.key !== "Tab") {
              event.preventDefault();
              return;
            }
            onKeyDown?.(event);
          }}
          onPaste={(event) => {
            if (disabled) {
              event.preventDefault();
              return;
            }
            onPaste?.(event);
          }}
          className={[
            "h-10 w-full rounded-control border bg-surface px-4 text-body text-ink transition-colors",
            "placeholder:text-ink-muted",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
            error ? "border-danger pr-8" : "border-ink-muted",
            disabled
              ? "cursor-not-allowed opacity-60"
              : !error
                ? "hover:border-ink"
                : "",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />
        {error ? (
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-danger"
            fill="currentColor"
          >
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 3.5c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75Zm0 7.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
          </svg>
        ) : null}
      </div>
      {errorId ? (
        <p id={errorId} className="text-caption text-danger">
          {errorText}
        </p>
      ) : null}
    </div>
  );
}
