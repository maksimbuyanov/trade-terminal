import { FC, memo, useCallback, useEffect, useState } from "react"
import cls from "./Actions.module.scss"
import { Button, Modal, Typography } from "antd"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import {
  fetchTickersPrice,
  getCosts,
  getCostsError,
  getIsCostsLoading,
  tickersActions,
} from "../../Redux/Tickers"
import { BargainParam } from "../BargainParam"
import { BargainType } from "../../Redux/Tickers/types"
import { CHAR_AFTER_DOT, REFRESH_COSTS_INTERVAL } from "../../Shared/constants"

interface ActionsProps {
  className?: string
}

export const Actions: FC<ActionsProps> = props => {
  const { className = "" } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isLoading = useAppSelector(getIsCostsLoading)
  const error = useAppSelector(getCostsError)
  const costs = useAppSelector(getCosts)
  const dispatch = useAppDispatch()
  const isButtonDisabled = costs == null || isLoading
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

  const onClickAction = useCallback(
    (type: BargainType) => {
      return () => {
        dispatch(tickersActions.setBargainType(type))
        setIsModalOpen(true)
      }
    },
    [dispatch]
  )

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  if (error) {
    return (
      <div className={cls.Actions}>
        <Typography.Text className={cls.title}>{error}</Typography.Text>
      </div>
    )
  }

  return (
    <div className={`${cls.Actions} ${className}`}>
      <Button
        className={cls.buy}
        onClick={onClickAction("buy")}
        disabled={isButtonDisabled}
      >
        <Typography.Text className={cls.title}>BUY</Typography.Text>
        <Typography.Text className={cls.price}>
          {costs?.buy.toFixed(CHAR_AFTER_DOT)}
        </Typography.Text>
      </Button>
      <Button
        className={cls.sell}
        onClick={onClickAction("sell")}
        disabled={isButtonDisabled}
      >
        <Typography.Text className={cls.title}>SELL</Typography.Text>
        <Typography.Text className={cls.price}>
          {costs?.sell.toFixed(CHAR_AFTER_DOT)}
        </Typography.Text>
      </Button>
      <BargainParam isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default memo(Actions)
