import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart4, Database, LineChart, TrendingUp } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Finance & Investment",
      icon: <TrendingUp className="h-8 w-8 mb-4 text-gray-700" />,
      skills: ["Equity Research", "Fund Analysis/Management", "Financial Modeling", "Financial Data"],
    },
    {
      title: "Data & Analytics",
      icon: <LineChart className="h-8 w-8 mb-4 text-gray-700" />,
      skills: ["Python", "SQL", "R", "SAS", "Excel (VBA)", "Power BI"],
    },
    {
      title: "Technology & Platforms",
      icon: <Database className="h-8 w-8 mb-4 text-gray-700" />,
      skills: ["Bloomberg Terminal", "Morningstar Direct", "Azure Cloud"],
    },
    {
      title: "Quantitative Skills",
      icon: <BarChart4 className="h-8 w-8 mb-4 text-gray-700" />,
      skills: ["Statistical Analysis", "Machine Learning", "Algorithmic Trading", "Backtesting"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-gray-900">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader className="flex flex-col items-center pb-2">
                {category.icon}
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

