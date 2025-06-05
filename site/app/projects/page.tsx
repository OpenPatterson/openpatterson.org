import Link from "next/link"
import Image from "next/image"
import { getAllProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata = {
  title: "Projects | Open Patterson",
  description: "Explore the civic technology projects developed by Open Patterson",
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="min-h-screen font-mono flex flex-col">

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🍑</span> Our Projects
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Explore the civic technology projects we've developed to address community needs and improve government
              services in Patterson. Each project is open source and built with community input.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
