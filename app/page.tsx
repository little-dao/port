import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CommandPalette } from "@/components/command-palette"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <CommandPalette />
    </main>
  )
}
