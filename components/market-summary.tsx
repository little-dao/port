import { TrendingUp, TrendingDown, BarChart2 } from "lucide-react"

export function MarketSummary() {
  // Static market data that doesn't need to be updated
  const marketIndices = [
    { name: "S&P 500", value: "5,021.84", change: "+1.05%", positive: true },
    { name: "NASDAQ", value: "15,885.02", change: "+0.24%", positive: true },
    { name: "DOW JONES", value: "37,775.38", change: "-0.03%", positive: false },
    { name: "RUSSELL 2000", value: "1,993.75", change: "-0.18%", positive: false },
  ]

  return (
    <div className="bg-[#0D2544] border-b border-amber-500/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <BarChart2 className="h-4 w-4 text-amber-500 mr-2" />
            <span className="text-xs text-amber-500 font-mono">MARKET SUMMARY</span>
          </div>
          <div className="text-xs text-gray-400 font-mono">HISTORICAL DATA</div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-4 pb-3">
          {marketIndices.map((index, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-center">
                <span className="text-xs text-gray-400 font-mono">{index.name}</span>
                {index.positive ? (
                  <TrendingUp className="h-3 w-3 text-green-500 ml-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 ml-1" />
                )}
              </div>
              <div className="flex items-baseline">
                <span className="text-sm text-white font-mono">{index.value}</span>
                <span className={`text-xs ml-2 font-mono ${index.positive ? "text-green-500" : "text-red-500"}`}>
                  {index.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
