import { Separator } from "@/components/ui/separator"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "jQuery", level: 70 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 60 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "MongoDB", level: 65 },
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "Figma", level: 60 },
      { name: "VS Code", level: 90 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">04.</span> Skills
          </h2>
          <Separator className="flex-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
