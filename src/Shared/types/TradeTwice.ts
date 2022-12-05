import { Currency, Trade_action } from "./Currency"

export interface TradeTwice {
  prevCurrency: Currency
  nextCurrency: Currency
  tradeAction: Trade_action
}
