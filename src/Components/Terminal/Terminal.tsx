import { FC, memo, useCallback, useMemo } from "react"
import cls from "./Terminal.module.scss"
import { Select } from "antd"
import { Clock } from "../Clock"
import { Actions } from "../Actions"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import {
  getAllTickers,
  getSelectedTickerId,
} from "../../Redux/Tickers/selectors"
import { fetchTickersPrice, tickersActions } from "../../Redux/Tickers"

interface TerminalProps {
  className?: string
}

export const Terminal: FC<TerminalProps> = props => {
  const { className = "" } = props
  const pairs = useAppSelector(getAllTickers)
  const selectedPair = useAppSelector(getSelectedTickerId)
  const dispatch = useAppDispatch()
  const onChangeSelect = useCallback(
    (id: number) => {
      dispatch(tickersActions.selectPair(id))
      void dispatch(fetchTickersPrice())
    },
    [dispatch]
  )
  const options = useMemo(() => {
    return pairs.map(item => {
      return {
        value: item.id,
        label: `${item.prevCurrency}/${item.nextCurrency}${item.tradeAction}`,
      }
    })
  }, [pairs])

  return (
    <section className={`${cls.Terminal} ${className}`}>
      <Clock className={cls.time} />
      <Select
        className={cls.select}
        showSearch
        placeholder="Select a pair"
        optionFilterProp="children"
        value={selectedPair}
        onChange={onChangeSelect}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
      />
      <Actions />
    </section>
  )
}
export default memo(Terminal)
