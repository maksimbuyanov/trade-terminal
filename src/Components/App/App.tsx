import { FC, memo } from "react"
import { Route, Routes } from "react-router-dom"
import cls from "./App.module.scss"
import { NotFoundPage } from "../NotFoundPage"
import { NavBar } from "../NavBar"
import { Card } from "antd"
import { Terminal } from "../Terminal"

const App: FC = () => {
  return (
    <main className={cls.App}>
      <Card className={cls.card} title={<NavBar />}>
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/archive" element={<div>2</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Card>
    </main>
  )
}

export default memo(App)
