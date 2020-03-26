import * as React from 'react'
import { Link } from 'gatsby'
import { Overlay, NavList } from './NavMenu.styles'

interface NavMenuProps {
  style: any
  setIsShowingNavMenu: () => void
}

const NavMenu = ({ style, setIsShowingNavMenu }: NavMenuProps) => {
  return (
    <Overlay style={style} onClick={() => setIsShowingNavMenu(false)}>
      <NavList>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavList>
    </Overlay>
  )
}

export default NavMenu
