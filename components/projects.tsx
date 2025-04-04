import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Quantify",
      description: "Enables Auto trading strategies with easy interfaces, visualization with back-testing results",
      link: "#",
    },
    {
      title: "CIBC Exceptional Student Award",
      description: "Recognition of exceptional CO-OP work at CIBC",
      link: "#",
    },
    {
      title: "Team-SnowFlake",
      description:
        "Winner of data prediction modeling for DNA sequence of a company (Cylica) using python with various machine learning / statistical analysis techniques",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="section-container bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 gradient-heading">
            Projects & Achievements
          </h2>
        </div>
        <div className="bloomberg-section p-4">
          <div className="flex items-center mb-4 border-b border-amber-500/30 pb-2">
            <div className="text-xs text-amber-500 font-mono">PROJECTS</div>
            <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | PORTFOLIO</div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="border border-amber-500/20 bg-[#0D2544] h-full">
                <div className="border-b border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent p-4">
                  <h3 className="flex items-center gap-2 text-amber-500 font-medium">
                    {project.title}
                    {project.link && (
                      <Link href={project.link} className="inline-flex" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-amber-500" />
                      </Link>
                    )}
                  </h3>
                </div>
                <div className="p-4">
                  <div className="text-gray-300 text-sm">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

