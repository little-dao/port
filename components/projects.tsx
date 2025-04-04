import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section id="projects" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-gray-900">Projects & Achievements</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-md h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.title}
                  {project.link && (
                    <Link href={project.link} className="inline-flex" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 text-gray-500" />
                    </Link>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

