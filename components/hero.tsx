import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">Howard Zhu</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-[700px]">
            Aspiring Quant / Developer / Finance Professional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild className="bg-gray-900 hover:bg-gray-800">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume.pdf" target="_blank">
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <ArrowDownIcon className="h-8 w-8 text-gray-400" />
        </Link>
      </div>
    </section>
  )
}

