export function Experience() {
  const experiences = [
    {
      title: "External Fund Management - Investment",
      company: "Equitable Life",
      location: "Waterloo, ON",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Worked directly with AVP overseeing 50+ external funds (total AUM over 3 Billion)",
        "Conducted 20+ attribution analysis on various types of funds using Bloomberg, assessed mandate alignment & PM's investment rationale with trade tracing",
        "Participated in PM interviews, due diligence and investment committee meetings",
        "Co-Designed & automated formal fund management process using Morningstar's Python API and Power BI",
        "Assisted in the preparation of Funds/ETF reports and recommendations to senior management",
        "Researched market trends, macroeconomic factors, and competitor strategies",
      ],
    },
    {
      title: "Research Assistant - Capital Market",
      company: "Lazaridis School Of Business, University of Waterloo School of Accounting and Finance",
      location: "Waterloo, ON",
      period: "May 2023 – Present",
      description: [
        "Directed by Darren Henderson on analysis of Non-GAAP reporting from company's annual/quarter reports",
        "Directed by Andrew Bauer to create a comprehensive database system to better facilitate research needs on SEC filings",
      ],
    },
    {
      title: "Business System Analyst - Data Governance",
      company: "CIBC",
      location: "Toronto, ON",
      period: "Jan 2023 – Apr 2023",
      description: [
        "Led automation initiatives aligning data governance with OSFI compliance",
        "Designed and implemented automated processes to streamline data reporting and vendor management",
      ],
    },
    {
      title: "Account Executive",
      company: "ShiZhuang Fertilizer Corporation",
      location: "LiaoNing, China",
      period: "May 2021 – Sep 2021",
      description: [
        "Conducted market research to identify trends and inform business strategies",
        "Expanded the customer base through targeted outreach and industry networking",
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 gradient-heading">
            Work Experience
          </h2>
        </div>
        <div className="bloomberg-section p-4">
          <div className="flex items-center mb-4 border-b border-amber-500/30 pb-2">
            <div className="text-xs text-amber-500 font-mono">EXPERIENCE</div>
            <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | CAREER HISTORY</div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border border-amber-500/20 bg-[#0D2544]">
                <div className="border-b border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent p-4">
                  <h3 className="text-amber-500 font-medium">{exp.title}</h3>
                  <div className="text-gray-300 font-medium mt-1">{exp.company}</div>
                  <div className="text-gray-400 text-sm font-mono">
                    {exp.location} | {exp.period}
                  </div>
                </div>
                <div className="p-4">
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

