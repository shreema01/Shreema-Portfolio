import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "Present",
    title: "Software Engineer",
    company: "Orange Business Development Limited",
    description:
      "Contributing to modern web application development by implementing dynamic features, improving UI/UX, integrating APIs, and optimizing frontend functionality for scalable client solutions.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "React", "Figma", "Responsive Design"],
  },

  {
    period: "2021 - 2025",
    title: "B.Tech Computer Engineering",
    company: "RK University",
    description:
      "Gained a strong foundation in computer engineering principles, software development, problem-solving, and modern web technologies through academic projects and practical learning.",
    skills: [
      "Web Development",
      "Software Engineering",
      "Data Structures",
      "Algorithms",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">02.</span>{" "}
            Experience
          </h2>
          <Separator className="flex-1" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid md:grid-cols-4 gap-4 md:gap-8 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {exp.title}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
