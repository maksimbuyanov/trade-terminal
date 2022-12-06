import { FC, memo, useCallback, useEffect } from "react"
import cls from "./Actions.module.scss"
import { Button, Typography } from "antd"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import {
  fetchTickersPrice,
  getCosts,
  getCostsError,
  getIsCostsLoading,
} from "../../Redux/Tickers"

interface ActionsProps {
  className?: string
}

const REFRESH_COSTS_INTERVAL = 5000
const CHAR_AFTER_DOT = 5

export const Actions: FC<ActionsProps> = props => {
  const { className = "" } = props
  const isLoading = useAppSelector(getIsCostsLoading)
  const error = useAppSelector(getCostsError)
  const costs = useAppSelector(getCosts)
  const dispatch = useAppDispatch()
  useEffect(() => {
    let timer: NodeJS.Timer
    if (costs) {
      timer = setTimeout(() => {
        void dispatch(fetchTickersPrice())
      }, REFRESH_COSTS_INTERVAL)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [dispatch, costs])

  const onClickAction = useCallback(() => {
    alert("open modal")
  }, [])

  if (error) {
    return (
      <div className={cls.Actions}>
        <Typography.Text className={cls.title}> {error}</Typography.Text>
      </div>
    )
  }

  return (
    <div className={cls.Actions}>
      <Button className={cls.buy} onClick={onClickAction} disabled={isLoading}>
        <Typography.Text className={cls.title}>BUY</Typography.Text>
        <Typography.Text className={cls.price}>
          {costs?.buy.toFixed(CHAR_AFTER_DOT)}
        </Typography.Text>
      </Button>
      <Button className={cls.sale} onClick={onClickAction} disabled={isLoading}>
        <Typography.Text className={cls.title}>SALE</Typography.Text>
        <Typography.Text className={cls.price}>
          {costs?.sale.toFixed(CHAR_AFTER_DOT)}
        </Typography.Text>
      </Button>
    </div>
  )
}

export default memo(Actions)
