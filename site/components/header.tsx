import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileMenu } from "@/components/mobile-menu";

export function header() {
  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/#team", label: "Team" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="border-b py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Open Patterson Logo"
            width={40}
            height={40}
          />
          <Link href="/" className="text-xl font-bold tracking-tight">
            Open Patterson
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-6 mr-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:underline ${
                    item.href === "/blog" ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href="https://hcb.hackclub.com/donations/start/open-patterson?amount=10000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Donate
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
