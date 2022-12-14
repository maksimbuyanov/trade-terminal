import { Currency, Trade_action } from "Shared/types/Currency"

export interface costs {
  buy: number
  sell: number
}

export type BargainType = "buy" | "sell"

export interface tickersSchema {
  pair: TradePair[]
  selectedPair: number | null
  isCostsLoading: boolean
  error: string | null
  costs: costs | null
  bargainType: BargainType | null
  bargainVolume: number
  bargainList: Bargain[]
}

export interface TradePair {
  prevCurrency: Currency
  nextCurrency: Currency
  tradeAction: Trade_action
  id: number
}

export interface Bargain {
  cost: number
  volume: number
  type: BargainType
  selectedPair: TradePair
  timestamp: number
}
