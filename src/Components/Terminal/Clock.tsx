import { FC, useEffect, useState } from "react"
import cls from "./Clock.module.scss"
import { parseTimestampToTime } from "../../Shared/lib/parseTimestampToTime"

interface ClockProps {
  className?: string
}

export const Clock: FC<ClockProps> = props => {
  const { className = "" } = props

  const [time, setTime] = useState<number>(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <div className={className}>{parseTimestampToTime(time)}</div>
}
