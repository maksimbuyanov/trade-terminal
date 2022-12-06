import { TradePair } from "../../Redux/Tickers/types"
import { Currency, Trade_action } from "../types/Currency"

const tradeActionsValues = Object.values(Trade_action)

export const generateSelectValues = (): TradePair[] => {
  return Object.values(Currency).reduce<TradePair[]>(
    (accum, currency, index, array) => {
      const actionsIndex = index % 3
      const item: TradePair = {
        prevCurrency: currency,
        tradeAction: tradeActionsValues[actionsIndex],
        nextCurrency: index + 1 === array.length ? array[0] : array[index + 1],
        id: index,
      }
      accum.push(item)
      return accum
    },
    []
  )
}
