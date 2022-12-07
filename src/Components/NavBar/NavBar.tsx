import { CSSProperties, FC, memo } from "react"
import cls from "./NavBar.module.scss"
import { NavLink } from "react-router-dom"
import { Header } from "antd/es/layout/layout"

// const { Header, Content, Footer } = Layout
interface NavBarProps {
  className?: string
}

const activeLinkStyle: CSSProperties = {
  color: "blue",
  borderBottom: "1px solid blue",
  borderBottomWidth: "2px",
}

export const NavBar: FC<NavBarProps> = props => {
  const { className = "" } = props

  return (
    <Header className={className}>
      <NavLink
        className={cls.link}
        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        to={"/"}
      >
        Terminal
      </NavLink>
      <NavLink
        className={cls.link}
        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        to={"/archive"}
      >
        Archive
      </NavLink>
    </Header>
  )
}

export default memo(NavBar)
