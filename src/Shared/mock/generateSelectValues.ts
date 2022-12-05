import { TradeTwice } from "../types/TradeTwice"
import { Currency, Trade_action } from "../types/Currency"

export const generateSelectValues = (): TradeTwice[] => {
  return Object.values(Currency).reduce<TradeTwice[]>(
    (accum, currency, index, array) => {
      const item: TradeTwice = {
        prevCurrency: currency,
        tradeAction: index % 2 ? Trade_action.SPOT : Trade_action.TOM,
        nextCurrency: index + 1 === array.length ? array[0] : array[index + 1],
      }
      accum.push(item)
      return accum
    },
    []
  )
}
