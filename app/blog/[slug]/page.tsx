import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or CMS
  const post = {
    id: params.slug,
    title: "Introduction to Quantitative Finance",
    date: "May 15, 2024",
    readTime: "8 min read",
    tags: ["Finance", "Quant", "Algorithms"],
    content: `
## What is Quantitative Finance?

Quantitative finance is the use of mathematical models and extremely large datasets to analyze financial markets and securities. Quantitative analysts (or "quants") apply a blend of mathematics, finance, and computer skills to the investment process.

### Historical Context

The field of quantitative finance has evolved significantly over the past few decades. The introduction of computational methods in the 1970s and 1980s revolutionized how financial markets operate. Key milestones include:

- 1973: Black-Scholes model for options pricing
- 1980s: Rise of program trading
- 1990s: Growth of derivatives markets
- 2000s: Algorithmic trading becomes dominant
- 2010s: Machine learning applications in finance

### Core Components

Modern quantitative finance encompasses several key areas:

1. **Risk Management**: Using statistical models to quantify and manage financial risk
2. **Algorithmic Trading**: Developing automated systems to execute trades
3. **Derivatives Pricing**: Creating models to value complex financial instruments
4. **Portfolio Optimization**: Using mathematical techniques to construct optimal portfolios

## Why Quantitative Methods Matter

In today's financial markets, quantitative methods provide several advantages:

- **Objectivity**: Removing emotional biases from investment decisions
- **Scalability**: Analyzing vast amounts of data quickly
- **Precision**: Identifying small inefficiencies that can be exploited
- **Risk Control**: More sophisticated understanding of potential downsides

## Getting Started in Quantitative Finance

For those interested in pursuing quantitative finance, several skills are essential:

\`\`\`python
# Simple example of calculating Sharpe Ratio in Python
import numpy as np

def sharpe_ratio(returns, risk_free_rate=0):
    """
    Calculate the Sharpe ratio of a returns series.
    
    Parameters:
    returns (array-like): Daily returns of the strategy
    risk_free_rate (float): Risk-free rate of return
    
    Returns:
    float: Sharpe ratio
    """
    mean_return = np.mean(returns)
    return_stdev = np.std(returns)
    
    return (mean_return - risk_free_rate) / return_stdev * np.sqrt(252)  # Annualized
\`\`\`

### Essential Skills

1. **Mathematics**: Statistics, calculus, linear algebra
2. **Programming**: Python, R, C++
3. **Finance Knowledge**: Understanding of markets, instruments, and theories
4. **Data Analysis**: Working with large datasets and statistical analysis

## The Future of Quantitative Finance

The field continues to evolve with several emerging trends:

- **Machine Learning**: Deep learning models for market prediction
- **Alternative Data**: Using non-traditional data sources for insights
- **Quantum Computing**: Potential for solving complex optimization problems
- **Decentralized Finance**: Applying quantitative methods to blockchain-based financial systems

## Conclusion

Quantitative finance represents the intersection of mathematics, computer science, and finance. As markets become increasingly complex and data-driven, quantitative approaches will continue to play a crucial role in financial decision-making.
    `,
  }

  // Convert markdown-like content to HTML (very simplified)
  const formatContent = (content: string) => {
    let formatted = content
      .replace(/## (.*?)$/gm, '<h2 class="text-2xl font-bold text-amber-500 mt-8 mb-4">$1</h2>')
      .replace(/### (.*?)$/gm, '<h3 class="text-xl font-bold text-amber-500 mt-6 mb-3">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/- (.*?)$/gm, '<li class="ml-6 list-disc text-gray-300 mb-2">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4">')

    // Handle code blocks
    formatted = formatted.replace(
      /```(.*?)\n([\s\S]*?)```/g,
      '<div class="bg-[#0A1930] border border-amber-500/20 p-4 rounded-sm my-4 overflow-x-auto"><pre class="text-gray-300 font-mono text-sm">$2</pre></div>',
    )

    return `<p class="text-gray-300 mb-4">${formatted}</p>`
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Bloomberg-style header */}
      <div className="bloomberg-header sticky top-0 z-10">
        <div className="flex items-center">
          <span className="text-amber-500 font-bold mr-2">BLOG</span>
          <span className="text-xs text-gray-400">ARTICLE</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 border-amber-500/30 hover:bg-amber-500/10 text-amber-500"
          >
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      <MainNav />

      <div className="container px-4 md:px-6 mx-auto py-12">
        <article className="max-w-3xl mx-auto">
          <div className="bloomberg-section overflow-hidden">
            <div className="flex items-center border-b border-amber-500/30 p-4">
              <div className="text-xs text-amber-500 font-mono">ARTICLE</div>
              <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | INSIGHTS</div>
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold text-amber-500 mb-4">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm text-gray-400 border-b border-amber-500/20 pb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
                <div className="flex flex-wrap gap-2 ml-auto">
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

              <div
                className="prose prose-invert max-w-none prose-headings:text-amber-500"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button asChild variant="outline" className="border-amber-500/30 hover:bg-amber-500/10 text-amber-500">
              <Link href="/blog" className="flex items-center">
                <ChevronLeft className="mr-1 h-4 w-4" /> Previous Article
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-500/30 hover:bg-amber-500/10 text-amber-500">
              <Link href="/blog" className="flex items-center">
                Next Article <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
