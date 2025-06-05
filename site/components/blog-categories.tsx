import Link from "next/link"
import { cn } from "@/lib/utils"

interface BlogCategoriesProps {
  categories: string[]
  currentCategory?: string
}

export function BlogCategories({ categories, currentCategory }: BlogCategoriesProps) {
  return (
    <ul className="space-y-2">
      {categories.map((category) => (
        <li key={category}>
          <Link
            href={`/blog/category/${category}`}
            className={cn(
              "inline-block hover:underline",
              currentCategory === category ? "font-bold text-primary" : "text-gray-700 dark:text-gray-300",
            )}
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}
