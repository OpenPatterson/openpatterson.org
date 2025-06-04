import type { BlogPost } from "./types"
import {
  getBlogPosts,
  getBlogPostBySlug,
  getFeaturedBlogPosts,
  getBlogCategories,
  getBlogPostsByCategory,
} from "@/lib/mdx"

// Get all blog posts sorted by date (newest first)
export const getAllPosts = getBlogPosts

// Get a specific post by slug
export const getPostBySlug = getBlogPostBySlug

// Get featured posts
export const getFeaturedPosts = getFeaturedBlogPosts

// Get all unique categories
export const getAllCategories = getBlogCategories

// Get posts by category
export const getPostsByCategory = getBlogPostsByCategory

export type { BlogPost }
