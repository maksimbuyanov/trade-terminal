import { FC, memo, useCallback } from "react"
import cls from "./BargainParam.module.scss"
import { Divider, InputNumber, Modal } from "antd"
import { useAppDispatch, useAppSelector } from "Redux/hooks"
import {
  getBargainType,
  getBargainVolume,
  getCosts,
  getIsCostsLoading,
  getSelectedTickers,
  tickersActions,
} from "Redux/Tickers"
import { createTickerLabel } from "Shared/lib/createTickerLabel"
import { CHAR_AFTER_DOT } from "Shared/constants"
import { saveBargain } from "Redux/Tickers/services/saveBargain"

interface BargainParamProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const BargainParam: FC<BargainParamProps> = props => {
  const { onClose, isOpen } = props
  const dispatch = useAppDispatch()
  const costs = useAppSelector(getCosts)
  const volume = useAppSelector(getBargainVolume)
  const isLoading = useAppSelector(getIsCostsLoading)
  const type = useAppSelector(getBargainType)
  const selectedPair = useAppSelector(getSelectedTickers)
  const handleOk = useCallback(() => {
    if (volume) {
      dispatch(saveBargain())
      dispatch(tickersActions.setBargainVolume(0))
      onClose()
    }
  }, [dispatch, onClose, volume])

  const handleCancel = useCallback(() => {
    onClose()
  }, [onClose])
  const onChangeVolume = useCallback(
    (value: number | null) => {
      if (value != null) {
        dispatch(tickersActions.setBargainVolume(value))
      }
    },
    [dispatch]
  )

  if (!costs || !type || !selectedPair) {
    return (
      <div className={cls.BargainParam}>
        <Modal
          title="Basic Modal"
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Reload your terminal</p>
        </Modal>
      </div>
    )
  }

  return (
    <div className={cls.BargainParam}>
      <Modal
        title={createTickerLabel(selectedPair)}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <Divider />
        <div className={cls.wrapper}>
          <span className={cls[type]}>{type}</span>
          <span className={cls.cost}>
            {costs[type].toFixed(CHAR_AFTER_DOT)}
          </span>
        </div>
        <InputNumber
          className={cls.input}
          value={volume}
          onChange={onChangeVolume}
          placeholder={"Volume"}
        />
      </Modal>
    </div>
  )
}
export default memo(BargainParam)
