import Link from "next/link"
import Image from "next/image"
import { getAllProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata = {
  title: "Projects | Open Patterson",
  description: "Explore the civic technology projects developed by Open Patterson",
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#team", label: "Team" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
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
                  <Link href={item.href} className={`hover:underline ${item.href === "/#projects" ? "font-bold" : ""}`}>
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
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher isMobile />
            <MobileMenu items={navItems} donateLabel="Donate" />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🍑</span> Our Projects
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Explore the civic technology projects we've developed to address community needs and improve government
              services in Patterson. Each project is open source and built with community input.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
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
