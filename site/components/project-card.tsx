import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects"
import { formatDate } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-primary/20 p-6 hover:border-primary transition-colors bg-card text-card-foreground">
      <div className="mb-4 overflow-hidden border border-primary/10">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{formatDate(project.date)}</p>
      <p className="mb-4">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-primary hover:underline">
          View Project <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  )
}
