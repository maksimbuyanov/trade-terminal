import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { generateSelectValues } from "Shared/mock/generateSelectValues"
import { Bargain, BargainType, tickersSchema } from "./types"
import { fetchTickersPrice } from "./services/fetchTickersPrice"

const initialState: tickersSchema = {
  pair: generateSelectValues(),
  selectedPair: null,
  isCostsLoading: false,
  costs: null,
  error: null,
  bargainType: null,
  bargainVolume: 0,
  bargainList: [],
}

const tickers = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    selectPair: (state, action: PayloadAction<number>) => {
      state.selectedPair = action.payload
    },
    setBargainType: (state, action: PayloadAction<BargainType>) => {
      state.bargainType = action.payload
    },
    setBargainVolume: (state, action: PayloadAction<number>) => {
      state.bargainVolume = action.payload
    },
    saveBargain: (state, action: PayloadAction<Bargain>) => {
      state.bargainList.push(action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTickersPrice.pending, state => {
      state.isCostsLoading = true
    })
    builder.addCase(fetchTickersPrice.fulfilled, (state, action) => {
      state.isCostsLoading = false
      state.costs = action.payload
    })
    builder.addCase(fetchTickersPrice.rejected, (state, action) => {
      state.isCostsLoading = false
      // Есть более изящный способ, без as. Но для такого маленького приложения это будет слишком
      state.error = action.payload as string
    })
  },
})

export const { actions: tickersActions, reducer: tickersReducer } = tickers
