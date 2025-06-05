import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  links?: {
    label: string
    url: string
  }[]
}

export function TeamMember({ name, role, image, bio, links }: TeamMemberProps) {
  return (
    <div className="border border-primary/20 p-6 hover:border-primary transition-colors bg-card text-card-foreground text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary mx-auto">
        <Image src={image || "/placeholder.svg"} alt={name} width={128} height={128} className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-primary mb-4">{role}</p>
      <p className="text-muted-foreground mb-4">{bio}</p>
      {links && links.length > 0 && (
        <div className="flex gap-3 mt-auto">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
