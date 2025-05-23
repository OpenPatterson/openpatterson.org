import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "@/components/mobile-menu"

export default function NotFound() {
  const navItems = [
    { href: "/", label: "About" },
    { href: "/", label: "Projects" },
    { href: "/", label: "Team" },
    { href: "/blog", label: "Blog" },
    { href: "/", label: "Contact" },
  ]

  return (
    <div className="min-h-screen font-mono flex flex-col">
      <header className="border-b py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Open Patterson Logo" width={40} height={40} />
            <Link href="/" className="text-xl font-bold tracking-tight">
              Open Patterson
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex gap-6 mr-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://hcb.hackclub.com/donations/start/open-patterson?amount=10000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Donate
            </a>
          </nav>

          {/* Mobile Navigation */}
          <MobileMenu items={navItems} />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page not found</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>

      <footer className="py-8 border-t text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Image src="/images/logo.png" alt="Open Patterson Logo" width={50} height={50} />
          </div>
          <p className="mb-4">Made with 🍑 in Patterson</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Open Patterson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
