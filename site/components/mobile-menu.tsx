"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

interface MobileMenuProps {
  items: {
    href: string
    label: string
  }[]
  donateLabel?: string
}

export function MobileMenu({ items, donateLabel = "Donate" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when path changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)

    // If it's a hash link on the current page, scroll to the section after a short delay
    // to allow the menu to close
    if (href.startsWith("#") && pathname === "/") {
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="p-2 focus:outline-none" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center">
              <ul className="space-y-6 text-center mb-8">
                {items.map((item) => (
                  <li key={item.href} className="text-xl">
                    <Link
                      href={item.href}
                      className="block py-2 hover:text-primary"
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mb-8">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>

              <a
                href="https://hcb.hackclub.com/donations/start/open-patterson?amount=10000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors w-full text-center"
              >
                {donateLabel}
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
