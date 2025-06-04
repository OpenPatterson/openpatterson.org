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

  return (
    <div className="min-h-screen font-mono flex flex-col">

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

    </div>
  )
}
