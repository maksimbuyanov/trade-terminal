import {
  getBargainType,
  getBargainVolume,
  getCosts,
  getSelectedTickers,
} from "Redux/Tickers/selectors"
import { tickersActions } from "Redux/Tickers/slice"
import { Bargain } from "Redux/Tickers/types"
import { AppThunk } from "Redux/store"

export const saveBargain = (): AppThunk => (dispatch, getState) => {
  const costs = getCosts(getState())
  const volume = getBargainVolume(getState())
  const type = getBargainType(getState())
  const selectedPair = getSelectedTickers(getState())
  if (!costs || !selectedPair || !type || !volume) {
    return
  }
  const bargain: Bargain = {
    cost: costs[type],
    volume,
    selectedPair,
    type,
    timestamp: Date.now(),
  }
  dispatch(tickersActions.saveBargain(bargain))
}
