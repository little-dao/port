import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "quantitative-finance-intro",
      title: "Introduction to Quantitative Finance",
      excerpt:
        "An overview of quantitative finance, its history, and how it's transforming the financial industry today.",
      date: "May 15, 2024",
      readTime: "8 min read",
      tags: ["Finance", "Quant", "Algorithms"],
    },
    {
      id: "machine-learning-trading",
      title: "Machine Learning in Trading Strategies",
      excerpt:
        "How machine learning algorithms are being used to develop and optimize trading strategies in modern markets.",
      date: "April 28, 2024",
      readTime: "12 min read",
      tags: ["Machine Learning", "Trading", "Python"],
    },
    {
      id: "bloomberg-terminal-guide",
      title: "A Developer's Guide to Bloomberg Terminal APIs",
      excerpt:
        "Exploring the Bloomberg Terminal API ecosystem and how developers can leverage it for financial applications.",
      date: "April 10, 2024",
      readTime: "10 min read",
      tags: ["Bloomberg", "API", "Development"],
    },
    {
      id: "non-gaap-metrics",
      title: "Understanding Non-GAAP Metrics in Financial Reporting",
      excerpt:
        "A deep dive into Non-GAAP metrics, why companies use them, and how to interpret them alongside traditional GAAP measures.",
      date: "March 22, 2024",
      readTime: "15 min read",
      tags: ["Accounting", "Financial Reporting", "Research"],
    },
    {
      id: "compiler-design",
      title: "Compiler Design: From Theory to Implementation",
      excerpt: "My journey building a compiler from scratch and the lessons learned along the way.",
      date: "March 5, 2024",
      readTime: "18 min read",
      tags: ["Programming", "Compilers", "C++"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Bloomberg-style header */}
      <div className="bloomberg-header sticky top-0 z-10">
        <div className="flex items-center">
          <span className="text-amber-500 font-bold mr-2">BLOG</span>
          <span className="text-xs text-gray-400">INSIGHTS & ANALYSIS</span>
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
            Blog & Insights
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl text-center">
            Thoughts, analyses, and deep dives into finance, technology, and quantitative methods.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block">
              <div className="bloomberg-section h-full card-hover">
                <div className="border-b border-amber-500/30 bg-gradient-to-r from-amber-500/5 to-transparent p-4">
                  <h2 className="text-xl font-bold text-amber-500">{post.title}</h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="flex items-center bg-amber-500/10 px-2 py-0.5 rounded-sm text-xs text-amber-500 border border-amber-500/20"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
