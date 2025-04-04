import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section id="education" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-gray-900">Education</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="mt-1">
                  <GraduationCap className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <CardTitle>{edu.institution}</CardTitle>
                  <CardDescription>
                    {edu.location} | {edu.period}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-gray-600">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

