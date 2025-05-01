"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-[#0D2544]">
      <div className="h-full bg-amber-500" style={{ width: `${scrollProgress}%` }} />
      <div className="absolute right-0 top-1 text-[10px] font-mono text-amber-500 px-2 bg-[#0D2544] border-x border-b border-amber-500/30">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  )
}
