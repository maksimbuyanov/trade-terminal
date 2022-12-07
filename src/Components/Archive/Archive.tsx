import { FC, memo } from "react"
import { useAppSelector } from "Redux/hooks"
import cls from "./Archive.module.scss"
import { Table } from "antd"
import { getBargainTable } from "Redux/Tickers/selectors"
import { columns } from "./config"

interface ArchiveProps {
  className?: string
}

export const Archive: FC<ArchiveProps> = () => {
  const list = useAppSelector(getBargainTable)
  return (
    <section className={cls.Archive}>
      <Table dataSource={list} columns={columns} pagination={false} />
    </section>
  )
}

export default memo(Archive)
