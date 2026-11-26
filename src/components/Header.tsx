import Link from "next/link";
import { Button } from "./Button";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contacts", href: "#contact" },
];

export function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-4 px-6 py-6 sm:px-8 sm:py-8">
      <Link href="/" className="font-istok text-heading font-bold text-accent-logo lg:text-display">
        VITALIA KUMESKA
      </Link>

      <div className="flex items-center gap-4">
        <Navigation items={navItems} />
        <Button variant="secondary" href="#contact" className="shrink-0 whitespace-nowrap">
          Write Me
        </Button>
      </div>
    </header>
  );
}
