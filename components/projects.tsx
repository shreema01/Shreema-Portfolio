import Link from "next/link"
import { ArrowUpRight, Folder } from "lucide-react"
import { FiGithub } from "react-icons/fi"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    title: "Sally-Loose",
    description:
      "Developed a dynamic e-commerce website with advanced product search, filtering, user-friendly navigation, and real-time inventory management for fashion products",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/shreema01/Sally-Loose",
    live: "https://sally-loose.vercel.app/",
  },

]

const otherProjects = [
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website showcasing my skills, projects, and experience as a software engineer.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "TypeScript"],
  },
  {
    title: "Figma to Responsive Web Conversion",
    description:
      "Converted Figma designs into fully responsive and pixel-perfect websites using HTML, CSS, and JavaScript, ensuring cross-device compatibility and clean user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "UI/UX Design Projects",
    description:
      "Designed modern and user-centric web interfaces, UI mockups, and visual assets using Figma and Canva with a focus on usability, consistency, and clean design aesthetics.",
    tech: ["Figma", "Canva", "UI/UX"],
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">03.</span> Projects
          </h2>
          <Separator className="flex-1" />
        </div>

        {/* Featured Project */}
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="mb-16 p-8 rounded-2xl bg-card border border-border"
          >
            <p className="text-primary font-mono text-sm mb-2">
              Featured Project
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={project.github}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View GitHub Repository"
              >
                <FiGithub className="size-5" />
              </Link>
              <Link
                href={project.live}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View Live Site"
              >
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </div>
        ))}

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-foreground text-center mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="size-10 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
