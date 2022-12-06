import { TradePair } from "../../Redux/Tickers/types"

export const createTickerLabel = (pair: TradePair): string => {
  return `${pair.prevCurrency}/${pair.nextCurrency}${pair.tradeAction}`
}
