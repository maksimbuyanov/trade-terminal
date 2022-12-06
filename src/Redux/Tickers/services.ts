import { createAsyncThunk } from "@reduxjs/toolkit"
import { getSelectedTickers } from "./selectors"
import { RootState } from "../store"
import { costs } from "./types"

export const fetchTickersPrice = createAsyncThunk(
  "tickers/fetchTickersPrice",
  async (_, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI
    const tickersPair = getSelectedTickers(getState() as RootState)
    const multiplicator = tickersPair ? tickersPair.id : 1
    try {
      return await new Promise<costs>(resolve => {
        setTimeout(() => {
          resolve({
            sale: Math.random() * multiplicator + 1,
            buy: Math.random() * multiplicator + 1,
          })
        }, 500)
      })
    } catch (e) {
      const tickerId: number | string = tickersPair ? tickersPair.id : "unknown"
      return rejectWithValue(`no data for ${tickerId}`)
    }
  }
)
