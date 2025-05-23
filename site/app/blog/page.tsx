import Link from "next/link"
import Image from "next/image"
import { BlogPreview } from "@/components/blog-preview"
import { getAllPosts, getAllCategories } from "@/lib/blog"
import { BlogCategories } from "@/components/blog-categories"
import dynamic from "next/dynamic"

// Import client components with dynamic imports
const BlogSearch = dynamic(() => import("@/components/blog-search").then((mod) => mod.BlogSearch), { ssr: false })
const MobileMenu = dynamic(() => import("@/components/mobile-menu").then((mod) => mod.MobileMenu), { ssr: false })
const LanguageSwitcher = dynamic(() => import("@/components/language-switcher").then((mod) => mod.LanguageSwitcher), {
  ssr: false,
})
const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle), { ssr: false })

export const metadata = {
  title: "Blog | Open Patterson",
  description: "Latest news, updates, and insights from the Open Patterson team",
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()

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
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher isMobile />
            <MobileMenu items={navItems} donateLabel="Donate" />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <span className="text-3xl">🍑</span> Blog
              </h1>

              <div className="grid gap-8">
                {posts.map((post) => (
                  <BlogPreview key={post.slug} post={post} />
                ))}
              </div>
            </div>

            <div className="md:w-1/4">
              <div className="sticky top-8">
                <BlogSearch />
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Categories</h2>
                  <BlogCategories categories={categories} />
                </div>
              </div>
            </div>
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
