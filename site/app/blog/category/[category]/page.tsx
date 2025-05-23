import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostsByCategory, getAllCategories } from "@/lib/blog"
import { BlogPreview } from "@/components/blog-preview"
import { MobileMenu } from "@/components/mobile-menu"
import dynamic from "next/dynamic"

// Import client components with dynamic imports
const LanguageSwitcher = dynamic(() => import("@/components/language-switcher").then((mod) => mod.LanguageSwitcher), {
  ssr: false,
})
const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle), { ssr: false })

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const posts = await getPostsByCategory(category)
  const categories = await getAllCategories()

  if (posts.length === 0) {
    notFound()
  }

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
                  <Link href={item.href} className={`hover:underline ${item.href === "/blog" ? "font-bold" : ""}`}>
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

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-3xl">📝</span> {category}
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogPreview key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/images/logo.png" alt="Open Patterson Logo" width={32} height={32} />
              <span className="text-sm">© 2024 Open Patterson. All rights reserved.</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/openpatterson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/openpatterson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://discord.gg/openpatterson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
