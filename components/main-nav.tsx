"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FolderOpen, BookOpen, Home, User, Briefcase, GraduationCap, Code, Mail } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Projects", path: "/projects", icon: <FolderOpen className="h-4 w-4 mr-2" /> },
    { name: "Blog", path: "/blog", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "About", path: "/#about", icon: <User className="h-4 w-4 mr-2" /> },
    { name: "Experience", path: "/#experience", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { name: "Education", path: "/#education", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
    { name: "Skills", path: "/#skills", icon: <Code className="h-4 w-4 mr-2" /> },
    { name: "Contact", path: "/#contact", icon: <Mail className="h-4 w-4 mr-2" /> },
  ]

  return (
    <div className="sticky top-0 z-30 bg-[#0D2544] border-b border-amber-500/30 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center overflow-x-auto py-2 hide-scrollbar">
          <ul className="flex space-x-1 md:space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center px-3 py-2 text-sm rounded-sm transition-colors ${
                    isActive(item.path)
                      ? "bg-amber-500/20 text-amber-500 border border-amber-500/30"
                      : "text-gray-400 hover:text-amber-500 hover:bg-amber-500/10"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
