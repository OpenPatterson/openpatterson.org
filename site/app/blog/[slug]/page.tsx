import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, Tag, ArrowLeft, Share2 } from "lucide-react"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import Markdown from "react-markdown"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Open Patterson",
    }
  }

  return {
    title: `${post.title} | Open Patterson Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
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
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-8 hover:underline text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4 text-primary" />
              <Link href={`/blog/category/${post.category}`} className="hover:underline text-primary">
                {post.category}
              </Link>
            </div>
          </div>

          {post.image && (
            <div className="mb-8 border border-primary/20">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-sm max-w-none dark:prose-invert">
            <Markdown>{post.content}</Markdown>
          </div>

          <div className="mt-12 pt-6 border-t">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="inline-flex items-center gap-2 hover:underline text-primary">
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-sm">Share:</span>
                <button className="p-2 hover:bg-primary/10 rounded-full text-primary" aria-label="Share on Twitter">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </article>
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
