import { Hero } from "@/components/hero"
import { MainNav } from "@/components/main-nav"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { FeaturedPosts } from "@/components/featured-posts"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CommandPalette } from "@/components/command-palette"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <MainNav />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <FeaturedPosts />
      <Contact />
      <Footer />
      <CommandPalette />
    </main>
  )
}
