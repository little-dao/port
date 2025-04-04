import { BarChart4, Database, LineChart, TrendingUp } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Finance & Investment",
      icon: <TrendingUp className="h-10 w-10 mb-4 text-amber-500" />,
      skills: ["Equity Research", "Fund Analysis/Management", "Financial Modeling", "Financial Data"],
    },
    {
      title: "Data & Analytics",
      icon: <LineChart className="h-10 w-10 mb-4 text-amber-500" />,
      skills: ["Python", "SQL", "R", "SAS", "Excel (VBA)", "Power BI"],
    },
    {
      title: "Technology & Platforms",
      icon: <Database className="h-10 w-10 mb-4 text-amber-500" />,
      skills: ["Bloomberg Terminal", "Morningstar Direct", "Azure Cloud"],
    },
    {
      title: "Quantitative Skills",
      icon: <BarChart4 className="h-10 w-10 mb-4 text-amber-500" />,
      skills: ["Statistical Analysis", "Machine Learning", "Algorithmic Trading", "Backtesting"],
    },
  ]

  return (
    <section id="skills" className="section-container bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 gradient-heading">Skills</h2>
        </div>
        <div className="bloomberg-section p-4">
          <div className="flex items-center mb-4 border-b border-amber-500/30 pb-2">
            <div className="text-xs text-amber-500 font-mono">SKILLS</div>
            <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | CAPABILITIES</div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="border border-amber-500/20 bg-[#0D2544] p-6">
                <div className="flex flex-col items-center pb-4">
                  <div className="p-3 rounded-full bg-amber-500/10 mb-4 border border-amber-500/20">
                    {category.icon}
                  </div>
                  <h3 className="text-center text-amber-500 font-medium">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-amber-500/10 px-3 py-1 rounded-sm text-sm text-amber-500 border border-amber-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

