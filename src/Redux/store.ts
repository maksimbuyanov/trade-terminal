import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { tickersReducer } from "./Tickers"

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
