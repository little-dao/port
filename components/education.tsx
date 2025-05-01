import { GraduationCap } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "Wilfrid Laurier University",
      location: "Waterloo, ON",
      degree: "Bachelor of Business Administration",
      details: "Co-op, Major in Accounting (CPA route)",
      period: "Sep. 2021 - Apr 2026",
    },
    {
      institution: "University Of Waterloo",
      location: "Waterloo, ON",
      degree: "Bachelor of Computer Science",
      details: "Software Engineer Specialization, Optimization Minor",
      period: "Sep. 2021 - Apr 2026",
    },
  ]

  return (
    <section id="education" className="section-container bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 gradient-heading">
            Education
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bloomberg-section p-4">
          <div className="flex items-center mb-4 border-b border-amber-500/30 pb-2">
            <div className="text-xs text-amber-500 font-mono">EDUCATION</div>
            <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | ACADEMIC CREDENTIALS</div>
          </div>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <div key={index} className="border border-amber-500/20 bg-[#0D2544] p-4">
                <div className="flex flex-row items-start gap-6">
                  <div className="mt-1 p-3 bg-amber-500/10 rounded-full border border-amber-500/20">
                    <GraduationCap className="h-8 w-8 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-amber-500 text-xl font-medium">{edu.institution}</h3>
                    <div className="text-gray-300 font-mono text-sm mt-1">
                      {edu.location} | {edu.period}
                    </div>
                    <div className="mt-4">
                      <div className="font-medium text-lg text-white">{edu.degree}</div>
                      <div className="text-gray-400 mt-1">{edu.details}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
