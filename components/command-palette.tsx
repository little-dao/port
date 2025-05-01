"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Command } from "lucide-react"

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [command, setCommand] = useState("")

  const handleKeyDown = (e: KeyboardEvent) => {
    // Open command palette with Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }

    // Close with Escape
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple command handling
    const cmd = command.toLowerCase().trim()

    if (cmd === "about" || cmd === "goto about") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    } else if (cmd === "skills" || cmd === "goto skills") {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
    } else if (cmd === "experience" || cmd === "goto experience") {
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
    } else if (cmd === "education" || cmd === "goto education") {
      document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })
    } else if (cmd === "projects" || cmd === "goto projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    } else if (cmd === "contact" || cmd === "goto contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    } else if (cmd === "resume" || cmd === "view resume") {
      window.open("/resume.pdf", "_blank")
    } else if (cmd === "help") {
      alert("Available commands: about, skills, experience, education, projects, contact, resume, help, clear")
    } else if (cmd === "clear") {
      setCommand("")
    }

    if (cmd !== "clear") {
      setIsOpen(false)
      setCommand("")
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-2 bg-[#0D2544] border border-amber-500/30 rounded-sm z-50 hover:bg-amber-500/10 transition-colors"
        title="Command Palette (Ctrl+K)"
      >
        <Command className="h-5 w-5 text-amber-500" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-[20vh]">
          <div className="w-full max-w-md bg-[#0D2544] border border-amber-500/30 shadow-lg">
            <div className="p-2 border-b border-amber-500/30 flex justify-between items-center">
              <span className="text-xs text-amber-500 font-mono">COMMAND</span>
              <span className="text-xs text-gray-400 font-mono">CTRL+K</span>
            </div>
            <form onSubmit={executeCommand} className="p-4">
              <div className="flex items-center">
                <span className="text-amber-500 mr-2 font-mono">{">"}</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  placeholder="Type a command (e.g., 'goto about', 'resume', 'help')"
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                  autoFocus
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
