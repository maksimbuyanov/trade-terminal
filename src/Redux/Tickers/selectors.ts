import { RootState } from "../store"
import { createSelector } from "@reduxjs/toolkit"
import { BargainType, costs, TradePair } from "./types"

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
export const getCostsError = (state: RootState): string | null =>
  state.tickers.error
export const getSelectedTickers = createSelector(
  getSelectedTickerId,
  getAllTickers,
  (id, allTickers) => {
    return allTickers.find(ticker => ticker.id === id) ?? null
  }
)
