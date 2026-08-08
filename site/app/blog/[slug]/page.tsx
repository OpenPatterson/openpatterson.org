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
import { ShareButton } from "@/components/share-button"

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



  return (
    <div className="min-h-screen font-mono flex flex-col">

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
                <ShareButton />
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
