import { Currency, Trade_action } from "../../Shared/types/Currency"

export interface costs {
  buy: number
  sale: number
}

export interface tickersSchema {
  pair: TradePair[]
  selectedPair: number | null
  isCostsLoading: boolean
  error: string | null
  costs: costs | null
}

export interface TradePair {
  prevCurrency: Currency
  nextCurrency: Currency
  tradeAction: Trade_action
  id: number
}
