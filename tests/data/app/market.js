export const sides = ["buy", "sell"];

export const marketsType1 = [
  { market: 9, pair: "USDT/RUBR",  buyPrice: 75, sellPrice: 85, sources: ["rapira"] },
  // { market: 34, pair: "USDT/EUR", buyPrice: 0.8, sellPrice: 0.9, sources: ["bybit", "binance"] },
  // { market: 28, pair: "USDC/USDT", buyPrice: 0.99, sellPrice: 1.01, sources: ["bybit", "binance", "rapira"] },
  { market: 29, pair: "TRX/USDT", buyPrice: 0.3, sellPrice: 0.4, sources: ["bybit", "binance", "rapira"] },
  // { market: 30, pair: "AVAX/USDT",  buyPrice: 25, sellPrice: 32, sources: ["bybit", "binance"] },
  // { market: 32, pair: "ATOM/USDT", buyPrice: 4, sellPrice: 5, sources: ["bybit", "binance"] },
  { market: 54, pair: "TON/USDT", buyPrice: 3, sellPrice: 3.5, sources: ["bybit", "binance", "rapira"] }
];

export const marketsType2 = [
  { market: 2, pair: "BTC/RUBR",  buyPrice: 6700000, sellPrice: 7000000, sources: ["abcex"] },
  { market: 8, pair: "ETH/USDT", sources: ["bybit", "binance", "rapira"] },
  { market: 7, pair: "BTC/USDT", sources: ["bybit", "binance", "abcex"] }
];

export const marketsType3 = [
  { market: 43, pair: "GLD.PD/USDT", sources: ["goldapi"] },
  { market: 41, pair: "GLD.PD/AED.PD", sources: ["goldapi"] },
];