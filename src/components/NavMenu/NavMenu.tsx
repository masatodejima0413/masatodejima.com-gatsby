import * as React from 'react'
import { Overlay } from './NavMenu.styles'

interface NavMenuProps {
  style: any
}

const NavMenu = ({ style }: NavMenuProps) => {
  return (
    <Overlay style={style}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </Overlay>
  )
}

export default NavMenu
