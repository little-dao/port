export function Experience() {
  const experiences = [
    {
      title: "External Fund Management - Investment",
      company: "Equitable Life",
      location: "Waterloo, ON",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Work directly with AVP overseeing 50+ external funds (total AUM over 3 Billion)",
        "Conducted 20+ attribution analysis on various types of funds (balanced, equity, fixed income), assessing fund performance and mandate alignment",
        "Co-Designed & automated formal fund management process using Morningstar API and Power BI to streamline performance tracking, reducing departmental labor by 80%",
        "Research market trends, macroeconomic factors, and competitor strategies to provide insights on fund selection and optimization",
      ],
    },
    {
      title: "Research Assistant - Capital Market",
      company: "Lazaridis School Of Business, University of Waterloo School of Accounting and Finance",
      location: "Waterloo, ON",
      period: "May 2023 – Present",
      description: [
        "Laurier: Directed by Darren Henderson on analysis of Non-GAAP reporting from company's annual/quarter reports, implemented a program to collect data and management's justification",
        "Waterloo: Directed by Andrew Bauer to create a comprehensive database system to better facilitate research needs on SEC filings. The project has a similar use to WRDS, with better customization of researcher's needs, deployed to serve entire UWaterloo staff/research/students",
      ],
    },
    {
      title: "Business System Analyst - Data Governance",
      company: "CIBC",
      location: "Toronto, ON",
      period: "Jan 2023 – Apr 2023",
      description: [
        "Led automation initiatives aligning data governance with OSFI compliance. Designed process from scratch with great exposures to other teams, final product used by entire CIBC Tech Operation, serves approximately 120 Data Domain Admins and achieved 70% improvement",
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
