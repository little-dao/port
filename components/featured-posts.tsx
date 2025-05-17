import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturedPosts() {
  const featuredPosts = [
    {
      id: "quantitative-finance-intro",
      title: "Introduction to Quantitative Finance",
      excerpt:
        "An overview of quantitative finance, its history, and how it's transforming the financial industry today.",
      date: "May 15, 2024",
      readTime: "8 min read",
    },
    {
      id: "machine-learning-trading",
      title: "Machine Learning in Trading Strategies",
      excerpt:
        "How machine learning algorithms are being used to develop and optimize trading strategies in modern markets.",
      date: "April 28, 2024",
      readTime: "12 min read",
    },
  ]

  return (
    <section className="section-container bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-4 gradient-heading">
            Latest Insights
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mb-12">
            Thoughts and analyses on finance, technology, and quantitative methods
          </p>
        </div>
        <div className="bloomberg-section p-4">
          <div className="flex items-center mb-4 border-b border-amber-500/30 pb-2">
            <div className="text-xs text-amber-500 font-mono">BLOG</div>
            <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | FEATURED POSTS</div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <div className="border border-amber-500/20 bg-[#0D2544] h-full card-hover">
                  <div className="border-b border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent p-4">
                    <h3 className="text-xl font-bold text-amber-500">{post.title}</h3>
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
                    <p className="text-gray-300 text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-[#0D2544] font-medium">
              <Link href="/blog" className="flex items-center">
                View All Posts <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
