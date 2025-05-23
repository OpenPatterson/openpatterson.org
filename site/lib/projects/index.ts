import type { Project } from "./types"
import {
  getProjects,
  getProjectBySlug as getProjectBySlugFromMdx,
  getFeaturedProjects as getFeaturedProjectsFromMdx,
} from "@/lib/mdx"

// Get all projects sorted by date (newest first)
export const getAllProjects = getProjects

// Get a specific project by slug
export const getProjectBySlug = getProjectBySlugFromMdx

// Get featured projects
export const getFeaturedProjects = getFeaturedProjectsFromMdx

export type { Project }
