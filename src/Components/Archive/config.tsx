import cls from "Components/Archive/Archive.module.scss"
import { parseTimestampToFullDate } from "Shared/lib/parseTimestampToTime"

export const columns = [
  {
    title: "Side",
    dataIndex: "type",
    key: "type",
    render: (text: string) => {
      return <span className={cls[text]}>{text}</span>
    },
  },
  {
    title: "Price",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Instrument",
    dataIndex: "selectedPair",
    key: "selectedPair",
  },
  {
    dataIndex: "volume",
    title: "Volume",
    key: "volume",
  },
  {
    title: "Timestamp",
    dataIndex: "timestamp",
    key: "timestamp",
    render: (text: string) => {
      return <span>{parseTimestampToFullDate(Number(text))}</span>
    },
  },
]
