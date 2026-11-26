"use client";

import { useEffect, useId, useState } from "react";

export type NavigationItem = {
  label: string;
  href: string;
};

type NavigationProps = {
  /** Menu items, in order, each rendered as an `<a>`. */
  items: NavigationItem[];
  /** `href` of the current page; that item gets `aria-current="page"` and the active style. */
  activeHref?: string;
};

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/**
 * Site navigation menu.
 *
 * On a wide screen the items show as a plain horizontal row. On a narrow
 * screen they collapse into a toggle button; the opened menu floats above
 * the page (it doesn't push page content down) and closes on Escape, on
 * selecting an item, or by toggling the button again.
 */
export function Navigation({ items, activeHref }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function itemClasses(href: string) {
    const isActive = href === activeHref;
    return [
      "block px-4 py-2 text-body font-sans transition-colors",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
      isActive ? "text-accent underline underline-offset-4" : "text-ink-muted hover:text-ink",
    ].join(" ");
  }

  return (
    <nav className="relative bg-canvas" aria-label="Site">
      <div className="flex items-center justify-end gap-6 px-4 py-4">
        <ul className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.href === activeHref ? "page" : undefined}
                className={itemClasses(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex size-10 items-center justify-center text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open ? (
        <ul
          id={menuId}
          className="absolute inset-x-0 top-full z-10 flex flex-col items-end gap-2 border-t border-line bg-canvas p-4 md:hidden"
        >
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.href === activeHref ? "page" : undefined}
                className={itemClasses(item.href)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
