import { Separator } from "@/components/ui/separator"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <Separator className="flex-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Hello! I&apos;m Shreema, a Software Engineer based in Dhaka, Bangladesh. I work on
          building web applications that are both functional and easy to use, with a focus on
          clean interfaces and smooth performance. I enjoy turning ideas into real products
          that people can interact with on the web, from simple websites to more complex
          applications. Currently, I&apos;m working at{" "}
          <span className="text-primary">Orange Business Development Limited</span>, where I
          contribute to both frontend and backend development, building and maintaining
          full-stack web applications using modern technologies. I started my journey in web
          development out of curiosity for how websites are built, and over time it grew into
          hands-on experience with real projects, practical problem-solving, and modern
          development practices.
        </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm mt-4">
              {[
                "HTML & CSS",
                "JavaScript",
                "React",
                "Next.js",
                "TypeScript",
                "Laravel",
                "Node.js",
                "MongoDB",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="text-primary">&#9655;</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">23</div>
              <div className="text-sm text-muted-foreground">Years Old</div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">B.Tech</div>
              <div className="text-sm text-muted-foreground">
                Computer Engineering
              </div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
