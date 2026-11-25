"use client";

import { useId, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";

type FormFieldBaseProps = {
  /** Caption shown above the field. */
  label: string;
  /** Marks the field as invalid: border, icon, and `errorText` turn `danger`. */
  error?: boolean;
  /** Message shown under the field while `error` is true. Required when `error` is true. */
  errorText?: string;
  /** Marks the field as disabled via `aria-disabled` (the field stays focusable but rejects input). */
  disabled?: boolean;
};

type SingleLineProps = FormFieldBaseProps & {
  /** Renders a one-line `<input>`. This is the default — omit `multiline`. */
  multiline?: false;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "disabled" | "id">;

type MultilineProps = FormFieldBaseProps & {
  /** Renders a multi-line `<textarea>`, taller than the standard field. Use for longer free text (e.g. a message). */
  multiline: true;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "disabled" | "id">;

type FormFieldProps = SingleLineProps | MultilineProps;

const fieldClasses = (error: boolean, disabled: boolean, className?: string) =>
  [
    "w-full rounded-control border bg-surface px-4 text-body text-ink transition-colors",
    "placeholder:text-ink-muted",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
    error ? "border-danger pr-8" : "border-ink-muted",
    disabled ? "cursor-not-allowed opacity-60" : !error ? "hover:border-ink" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

const errorIconClasses = (multiline: boolean) =>
  [
    "pointer-events-none absolute right-3 h-4 w-4 text-danger",
    multiline ? "top-3" : "top-1/2 -translate-y-1/2",
  ].join(" ");

const errorIcon = (multiline: boolean) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className={errorIconClasses(multiline)} fill="currentColor">
    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 3.5c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75Zm0 7.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
  </svg>
);

/**
 * Text field with a caption above it.
 *
 * The caption always sits above the field, never as placeholder-only text.
 * Use `type` (`text`, `email`, `tel`, …) for one-line input such as name,
 * address, or phone number. Use `multiline` for longer free text such as a
 * message — it renders a taller `<textarea>` instead of an `<input>`.
 * Disabled uses `aria-disabled` (not the native `disabled` attribute) so the
 * field stays reachable by keyboard, and rejects edits instead of blocking focus.
 */
export function FormField(formFieldProps: FormFieldProps) {
  const { label, error = false, errorText, disabled = false } = formFieldProps;
  const generatedId = useId();
  const fieldId = formFieldProps.name ?? generatedId;
  const errorId = error && errorText ? `${fieldId}-error` : undefined;

  let field: ReactNode;

  if (formFieldProps.multiline) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped so `rest` excludes FormField-only props
    const { multiline, label: _label, error: _error, errorText: _errorText, disabled: _disabled, className, onChange, onKeyDown, onPaste, ...rest } = formFieldProps;
    field = (
      <textarea
        id={fieldId}
        rows={4}
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
        className={[fieldClasses(error, disabled, className), "resize-none py-2"].join(" ")}
        {...rest}
      />
    );
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped so `rest` excludes FormField-only props
    const { multiline, label: _label, error: _error, errorText: _errorText, disabled: _disabled, className, onChange, onKeyDown, onPaste, ...rest } = formFieldProps;
    field = (
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
        className={[fieldClasses(error, disabled, className), "h-10"].join(" ")}
        {...rest}
      />
    );
  }

  return (
    <div className="flex w-full max-w-field flex-col gap-2">
      <label htmlFor={fieldId} className="text-caption text-ink">
        {label}
      </label>
      <div className="relative">
        {field}
        {error ? errorIcon(Boolean(formFieldProps.multiline)) : null}
      </div>
      {errorId ? (
        <p id={errorId} className="text-caption text-danger">
          {errorText}
        </p>
      ) : null}
    </div>
  );
}
