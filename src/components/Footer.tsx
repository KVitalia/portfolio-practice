const links = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Resume", href: "#" },
];

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-4 px-6 py-16 text-center sm:px-8">
      <div className="w-full max-w-field border-t border-line" />

      <h3 className="mt-8 text-heading text-ink">Let&apos;s Connect</h3>

      <a href="mailto:vitalia@gmail.com" className="text-lead text-ink">
        vitalia@gmail.com
      </a>

      <div className="mt-2 flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-body text-accent underline decoration-dotted underline-offset-4"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
