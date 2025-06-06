import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft, ExternalLink, Github } from "lucide-react"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { formatDate } from "@/lib/utils"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Markdown from "react-markdown"

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found | Open Patterson",
    }
  }

  return {
    title: `${project.title} | Open Patterson Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen font-mono flex flex-col">

      <main className="flex-1 py-12">
        <article className="container mx-auto px-4">
          <Link href="/projects" className="inline-flex items-center gap-2 mb-8 hover:underline text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={project.date}>{formatDate(project.date)}</time>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.demoUrl && (
                  <Button asChild variant="default">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {project.image && (
              <div className="mb-8 border border-primary/20 overflow-hidden">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-auto" />
              </div>
            )}

            <div className="prose prose-sm max-w-none dark:prose-invert">
              <Markdown>{project.content}</Markdown>
            </div>

            <div className="mt-12 pt-6 border-t">
              <div className="flex items-center justify-between">
                <Link href="/projects" className="inline-flex items-center gap-2 hover:underline text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  Back to all projects
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
