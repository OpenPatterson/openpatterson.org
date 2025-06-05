export interface Project {
  slug: string
  title: string
  description: string
  shortDescription: string
  image?: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
  date: string
  content: string
}
