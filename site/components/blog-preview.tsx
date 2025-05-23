import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/lib/blog"

interface BlogPreviewProps {
  post: BlogPost
}

export function BlogPreview({ post }: BlogPreviewProps) {
  return (
    <div className="border border-primary/20 p-6 hover:border-primary transition-colors bg-card text-card-foreground">
      <div className="flex gap-3 text-sm text-muted-foreground mb-2">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>•</span>
        <Link href={`/blog/category/${post.category}`} className="hover:underline text-primary">
          {post.category}
        </Link>
      </div>
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="mb-4">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary hover:underline">
        Read more <span className="ml-1">→</span>
      </Link>
    </div>
  )
}
