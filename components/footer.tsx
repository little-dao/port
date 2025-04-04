import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Howard Zhu. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

