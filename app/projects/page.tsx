import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      id: "momentum-trading",
      title: "Momentum-trading",
      description:
        "Trading algorithm based on several momentum indicators with support of Machine Learning, and live paper-testing on IBKR python API.",
      longDescription: `This project implements a sophisticated trading algorithm that leverages momentum indicators and machine learning to identify market trends and execute trades. The system is connected to Interactive Brokers' API for paper trading and performance evaluation.

Key features include:
- Implementation of multiple momentum indicators (RSI, MACD, Moving Averages)
- Machine learning models to predict price movements
- Backtesting framework with historical data
- Live paper-trading integration with IBKR
- Performance analytics dashboard`,
      technologies: ["Python", "Pandas", "Scikit-learn", "IBKR API", "NumPy", "Matplotlib"],
      link: "#",
      isPrivate: true,
    },
    {
      id: "quantify",
      title: "Quantify",
      description:
        "Enables auto trading strategies with easy interfaces, visualization with back-testing results. A DeFi trading strategy platform built for the DoraHacks hackathon.",
      longDescription: `Quantify is a DeFi trading strategy platform that allows users to create, backtest, and deploy automated trading strategies on decentralized exchanges. Built for the DoraHacks hackathon, this project aims to democratize algorithmic trading in the DeFi space.

The platform features:
- Intuitive strategy builder with visual programming interface
- Comprehensive backtesting engine with historical crypto data
- Strategy visualization and performance metrics
- One-click deployment to live trading
- Risk management tools and position sizing algorithms`,
      technologies: ["React", "Solidity", "Web3.js", "Node.js", "Express", "MongoDB", "TradingView Lightweight Charts"],
      link: "https://dorahacks.io/buidl/23040",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "team-snowflake",
      title: "Team-SnowFlake",
      description:
        "Winner of data prediction modeling for DNA sequence of a company (Cylica) using python with various machine learning / statistical analysis techniques",
      longDescription: `Team-SnowFlake is an award-winning project that developed predictive models for DNA sequence analysis. Working with Cylica, we implemented various machine learning and statistical techniques to analyze genetic data and predict outcomes.

Our approach included:
- Feature engineering from raw DNA sequence data
- Implementation of multiple ML models (Random Forest, SVM, Neural Networks)
- Ensemble methods to improve prediction accuracy
- Cross-validation and hyperparameter optimization
- Visualization of results and model interpretability`,
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "BioPython", "Matplotlib", "Seaborn"],
      link: "https://devpost.com/software/cyclia-submission",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "wlp4-compiler",
      title: "WLP4 Compiler",
      description:
        "Compiler written in C++ with detailed implementation of each component, including parser, assembler, etc. Utilizes both semantic and syntactic analysis.",
      longDescription: `This project is a complete compiler implementation for the WLP4 language, written in C++. It includes all phases of compilation: lexical analysis, parsing, semantic analysis, intermediate code generation, and code generation.

The compiler features:
- Hand-written lexer and parser
- Symbol table implementation for variable tracking
- Type checking and semantic analysis
- Intermediate representation generation
- Assembly code generation for a MIPS-like architecture
- Optimization passes for improved code efficiency`,
      technologies: ["C++", "MIPS Assembly", "Compiler Design", "Automata Theory", "Graph Algorithms"],
      link: "#",
      isPrivate: true,
    },
    {
      id: "non-gaap-reporting",
      title: "Non-GAAP Reporting Analysis",
      description:
        "Directed by Darren Henderson at Laurier, implemented a program to collect data and management's justification from company annual/quarterly reports",
      longDescription: `This research project analyzes Non-GAAP financial reporting practices across public companies. Under the direction of Professor Darren Henderson at Wilfrid Laurier University, I developed a system to extract, categorize, and analyze management's justifications for Non-GAAP metrics from annual and quarterly reports.

The project includes:
- Automated extraction of Non-GAAP metrics from financial reports
- Natural language processing to categorize justifications
- Statistical analysis of reporting patterns across industries and time periods
- Correlation analysis between Non-GAAP reporting and financial performance
- Interactive dashboard for exploring the dataset`,
      technologies: ["Python", "Natural Language Processing", "BeautifulSoup", "Pandas", "SQL", "Tableau"],
      link: "https://github.com/little-dao/NONGAAP-DEMO",
      github: true,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "sec-filings-database",
      title: "SEC Filings Database System",
      description:
        "Directed by Andrew Bauer at Waterloo, created a comprehensive database system similar to WRDS with better customization for researchers' needs. Deployed to serve entire UWaterloo staff/research/students",
      longDescription: `This project created a comprehensive SEC filings database system under the direction of Professor Andrew Bauer at the University of Waterloo. Similar to WRDS but with enhanced customization capabilities, this system serves the entire UWaterloo academic community.

Key features include:
- Automated scraping and processing of SEC EDGAR filings
- Structured database of financial statements and disclosures
- Advanced search functionality with filtering options
- Custom query builder for researchers
- Export capabilities in multiple formats
- User management system with role-based access control`,
      technologies: ["Python", "Django", "PostgreSQL", "AWS", "Docker", "Elasticsearch", "React"],
      link: "https://github.com/little-dao/SECIDX-DEMO",
      github: true,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Bloomberg-style header */}
      <div className="bloomberg-header sticky top-0 z-10">
        <div className="flex items-center">
          <span className="text-amber-500 font-bold mr-2">PROJECTS</span>
          <span className="text-xs text-gray-400">DETAILED VIEW</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 border-amber-500/30 hover:bg-amber-500/10 text-amber-500"
          >
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <MainNav />

      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-center gradient-heading">
            Project Showcase
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl text-center">
            A detailed look at my key projects across finance, software development, and data science.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bloomberg-section overflow-hidden">
              <div className="flex items-center border-b border-amber-500/30 p-4">
                <div className="text-xs text-amber-500 font-mono">PROJECT</div>
                <div className="ml-auto text-xs text-gray-400 font-mono">
                  HOWARD ZHU | {project.title.toUpperCase()}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-amber-500 flex items-center gap-2">
                    {project.title}
                    {project.isPrivate && <Lock className="h-4 w-4 text-amber-500" />}
                    {project.github && (
                      <Link href={project.link} className="inline-flex" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 text-amber-500" />
                      </Link>
                    )}
                    {project.link && project.link !== "#" && !project.isPrivate && !project.github && (
                      <Link href={project.link} className="inline-flex" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-amber-500" />
                      </Link>
                    )}
                  </h2>

                  <div className="border-l-2 border-amber-500/30 pl-4">
                    <p className="text-gray-300 whitespace-pre-line">{project.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-amber-500 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-amber-500/10 px-3 py-1 rounded-sm text-sm text-amber-500 border border-amber-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    {project.isPrivate ? (
                      <div className="text-sm text-amber-500/80 italic">Available upon request</div>
                    ) : (
                      <Button asChild className="bg-amber-500 hover:bg-amber-600 text-[#0D2544] font-medium">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          View Project <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="bg-[#0A1930] border border-amber-500/20 p-4 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="max-w-full h-auto"
                      style={{ maxHeight: "300px" }}
                    />
                  ) : (
                    <div className="text-center p-8 text-gray-500">
                      <Lock className="h-16 w-16 mx-auto mb-4 text-amber-500/30" />
                      <p className="text-amber-500/50">Project visuals available upon request</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
