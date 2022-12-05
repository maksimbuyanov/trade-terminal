import { FC, memo, useMemo, useState } from "react"
import cls from "./Terminal.module.scss"
import { Select } from "antd"
import { generateSelectValues } from "../../../src/Shared/mock/generateSelectValues"
import { Clock } from "./Clock"

interface TerminalProps {
  className?: string
}

export const Terminal: FC<TerminalProps> = props => {
  const { className = "" } = props
  const [select, setSelect] = useState(generateSelectValues())
  const options = useMemo(() => {
    return select.map(item => {
      return {
        value: `${item.prevCurrency}/${item.nextCurrency}${item.tradeAction}`,
        label: `${item.prevCurrency}/${item.nextCurrency}${item.tradeAction}`,
      }
    })
  }, [select])

  return (
    <div className={`${cls.Terminal} ${className}`}>
      <Clock className={cls.time} />
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        // onChange={onChange}
        // onSearch={onSearch}
        // filterOption={filter}
        options={options}
      />
    </div>
  )
}
export default memo(Terminal)

function filter(input: string, option: Record<string, string>): boolean {
  return (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
}
