import * as React from 'react'
import { Link } from 'gatsby'
import { Overlay, NavList } from './NavMenu.styles'

interface NavMenuProps {
  style: any
}

const NavMenu = ({ style }: NavMenuProps) => {
  return (
    <Overlay style={style}>
      <NavList>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavList>
    </Overlay>
  )
}

export default NavMenu
