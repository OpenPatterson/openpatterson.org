export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  image?: string
  featured?: boolean
}
