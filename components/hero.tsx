import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ChevronRight, Quote, BookOpen, FolderOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0D2544] overflow-hidden">
      {/* Bloomberg-style header */}
      <div className="bloomberg-header">
        <div className="flex items-center">
          <span className="text-amber-500 font-bold mr-2">PORTFOLIO</span>
          <span className="text-xs text-gray-400">v1.0.0</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/projects"
            className="text-xs text-amber-500 hover:text-amber-400 transition-colors flex items-center"
          >
            <FolderOpen className="h-3 w-3 mr-1" /> Projects
          </Link>
          <Link
            href="/blog"
            className="text-xs text-amber-500 hover:text-amber-400 transition-colors flex items-center"
          >
            <BookOpen className="h-3 w-3 mr-1" /> Blog
          </Link>
          <span className="text-xs text-gray-400">{new Date().toLocaleDateString()}</span>
          <span className="text-xs text-gray-400">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-[#0D2544] border-b border-amber-500/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-start">
            <Quote className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
            <div className="overflow-hidden">
              <p className="text-sm text-gray-300 font-mono leading-relaxed typing-animation">
                "It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't
                so."
              </p>
              <p className="text-xs text-amber-500 font-mono mt-1 typing-animation-delay">― Mark Twain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center bloomberg-grid">
        <div className="container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-block p-1.5 px-3 bg-amber-500/10 rounded-sm border border-amber-500/30 mb-4">
              <span className="text-sm font-medium text-amber-500 font-mono">
                FINANCE • DEVELOPMENT • QUANTITATIVE ANALYSIS
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Howard <span className="gradient-heading">Zhu</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-[700px] leading-relaxed font-light">
              Aspiring Quant / Developer / Finance Professional
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#0D2544] font-medium">
                <Link href="#contact" className="flex items-center">
                  Contact Me <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-500/30 hover:bg-amber-500/10 text-amber-500"
              >
                <Link href="/resume.pdf" target="_blank" className="flex items-center">
                  View Resume <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500"
              >
                <Link href="/projects" className="flex items-center">
                  <FolderOpen className="mr-2 h-5 w-5" /> Browse Projects
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500"
              >
                <Link href="/blog" className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" /> Read Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <div className="p-2 bg-amber-500/10 rounded-full border border-amber-500/30">
            <ArrowDownIcon className="h-6 w-6 text-amber-500" />
          </div>
        </Link>
      </div>
    </section>
  )
}
