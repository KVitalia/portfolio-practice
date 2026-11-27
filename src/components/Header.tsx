import Link from "next/link";
import { Button } from "./Button";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export function Header() {
  return (
    <header className="flex w-full items-center gap-4 px-6 py-6 sm:px-8 sm:py-8">
      <Link href="/" className="font-istok text-lead font-bold text-accent-logo sm:text-heading lg:text-display">
        VITALIA KUMESKA
      </Link>

      <Navigation items={navItems} className="flex-1" />

      <Button variant="secondary" href="#get-in-touch" className="shrink-0 whitespace-nowrap">
        Write Me
      </Button>
    </header>
  );
}
