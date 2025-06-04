import Link from "next/link"
import Image from "next/image"
import { BlogPreview } from "@/components/blog-preview"
import { getAllPosts, getAllCategories } from "@/lib/blog"
import { BlogCategories } from "@/components/blog-categories"
import dynamic from "next/dynamic"

// Import client components with dynamic imports
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

  return (
    <div className="min-h-screen font-mono flex flex-col">
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
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Categories</h2>
                  <BlogCategories categories={categories} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
