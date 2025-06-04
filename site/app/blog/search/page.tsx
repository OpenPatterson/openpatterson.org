import Link from "next/link"
import Image from "next/image"
import { BlogPreview } from "@/components/blog-preview"
import { BlogSearch } from "@/components/blog-search"
import { BlogCategories } from "@/components/blog-categories"
import { searchPosts, getAllCategories } from "@/lib/blog"
import { ArrowLeft, Search } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata = {
  title: "Search Results | Open Patterson Blog",
  description: "Search results from the Open Patterson blog",
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""
  const posts = searchPosts(query)
  const categories = getAllCategories()


  return (
    <div className="min-h-screen font-mono flex flex-col">

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-8 hover:underline text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <Search className="h-6 w-6 text-primary" />
                Search Results
              </h1>

              <p className="mb-8 text-gray-600 dark:text-gray-400">
                {posts.length} {posts.length === 1 ? "result" : "results"} for "{query}"
              </p>

              {posts.length > 0 ? (
                <div className="grid gap-8">
                  {posts.map((post) => (
                    <BlogPreview key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="border border-primary/20 p-8 text-center">
                  <p className="mb-4">No posts found matching your search.</p>
                  <p>Try using different keywords or browse our categories.</p>
                </div>
              )}
            </div>

            <div className="md:w-1/4">
              <div className="sticky top-8">
                <BlogSearch initialQuery={query} />
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
