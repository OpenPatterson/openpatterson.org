'use server'

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "@/lib/blog/types"
import type { Project } from "@/lib/projects/types"

const contentDirectory = path.join(process.cwd(), "content")

// Blog post functions
export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(contentDirectory, "blog")
  const filenames = fs.readdirSync(blogDir)
  const posts = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(blogDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        content: content,
        image: data.image,
        featured: data.featured || false,
      } as BlogPost
    })

  return posts
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug)
}

export async function getFeaturedBlogPosts(limit?: number): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  const featured = posts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return limit ? featured.slice(0, limit) : featured
}

export async function getBlogCategories(): Promise<string[]> {
  const posts = await getBlogPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories).sort()
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  if (!query || query.trim() === "") {
    return []
  }

  const posts = await getBlogPosts()
  const searchTerm = query.toLowerCase()

  return posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Project functions
export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDirectory, "projects")
  const filenames = fs.readdirSync(projectsDir)
  const projects = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(projectsDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug: data.slug,
        title: data.title,
        shortDescription: data.shortDescription,
        description: data.description,
        image: data.image,
        technologies: data.technologies || [],
        demoUrl: data.demoUrl,
        githubUrl: data.githubUrl,
        featured: data.featured || false,
        date: data.date,
        content: content,
      } as Project
    })

  return projects
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug)
}

export async function getFeaturedProjects(limit?: number): Promise<Project[]> {
  const projects = await getProjects()
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return limit ? featured.slice(0, limit) : featured
}
