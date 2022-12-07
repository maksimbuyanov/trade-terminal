import { RootState } from "../store"
import { createSelector } from "@reduxjs/toolkit"
import { Bargain, BargainType, costs, TradePair } from "./types"
import { createTickerLabel } from "Shared/lib/createTickerLabel"
import { CHAR_AFTER_DOT } from "Shared/constants"

export const getSelectedTickerId = (state: RootState): number | null =>
  state.tickers.selectedPair
export const getAllTickers = (state: RootState): TradePair[] =>
  state.tickers.pair
export const getBargainVolume = (state: RootState): number =>
  state.tickers.bargainVolume
export const getBargainType = (state: RootState): BargainType | null =>
  state.tickers.bargainType
export const getCosts = (state: RootState): costs | null => state.tickers.costs
export const getIsCostsLoading = (state: RootState): boolean =>
  state.tickers.isCostsLoading
export const getBargainList = (state: RootState): Bargain[] =>
  state.tickers.bargainList
export const getCostsError = (state: RootState): string | null =>
  state.tickers.error
export const getSelectedTickers = createSelector(
  getSelectedTickerId,
  getAllTickers,
  (id, allTickers) => {
    return allTickers.find(ticker => ticker.id === id) ?? null
  }
)
export const getBargainTable = createSelector(getBargainList, list => {
  return list.map(item => {
    return {
      ...item,
      selectedPair: createTickerLabel(item.selectedPair),
      cost: item.cost.toFixed(CHAR_AFTER_DOT),
    }
  })
})
