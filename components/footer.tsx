import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 bg-[#0D2544] border-t border-amber-500/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 text-amber-500">Howard Zhu</h2>
            <p className="text-gray-400">Quant • Developer • Finance Professional</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link href="/" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm text-gray-500 mb-2">© {new Date().getFullYear()} Howard Zhu. All rights reserved.</p>
            <div className="flex space-x-4 mb-2">
              <Link href="#" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-xs text-amber-500/70 font-mono">
              LAST UPDATED: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
