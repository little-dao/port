"use client"

import { useState } from "react"

type TickerItem = {
  symbol: string
  price: number
  change: number
  changePercent: number
}

export function TickerTape() {
  // Latest closing prices as of April 15, 2024
  const [tickerData] = useState<TickerItem[]>([
    // Major Indices - April 15, 2024 closing
    { symbol: "SPX", price: 5061.82, change: -61.59, changePercent: -1.2 },
    { symbol: "NASDAQ", price: 15885.02, change: -290.08, changePercent: -1.79 },
    { symbol: "DOW", price: 37735.11, change: -248.13, changePercent: -0.65 },

    // Forex - April 15, 2024 closing
    { symbol: "USD/CAD", price: 1.3779, change: 0.0031, changePercent: 0.23 },

    // Crypto - April 15, 2024 (as of 8:00 PM ET)
    { symbol: "BTC/USD", price: 62481.0, change: -1842.0, changePercent: -2.86 },
    { symbol: "ETH/USD", price: 3048.12, change: -89.33, changePercent: -2.85 },

    // Commodities - April 15, 2024 closing
    { symbol: "GOLD", price: 2383.5, change: 22.1, changePercent: 0.94 },
    { symbol: "OIL", price: 85.41, change: 1.58, changePercent: 1.88 },
  ])

  // Format price based on symbol
  const formatPrice = (item: TickerItem) => {
    if (item.symbol === "USD/CAD") {
      return item.price.toFixed(4)
    } else if (["BTC/USD", "ETH/USD"].includes(item.symbol)) {
      return item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    } else {
      return item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
  }

  // Format change based on symbol
  const formatChange = (item: TickerItem) => {
    const precision = item.symbol === "USD/CAD" ? 4 : 2
    return Math.abs(item.change).toFixed(precision)
  }

  return (
    <div className="ticker-container bg-[#0D2544] border-y border-amber-500/30 py-2 overflow-hidden">
      <div className="ticker-track flex whitespace-nowrap">
        {[...tickerData, ...tickerData].map((item, index) => (
          <div key={index} className="ticker-item px-4 inline-block">
            <span className="text-amber-500 font-mono">{item.symbol}</span>{" "}
            <span className="font-mono">{formatPrice(item)}</span>{" "}
            <span className={`font-mono ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {item.change >= 0 ? "+" : ""}
              {formatChange(item)} ({item.change >= 0 ? "+" : ""}
              {item.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
