import * as React from 'react'
import { useTransition } from 'react-spring'
import Hamburger from '../Hamburger/Hamburger'
import { StyledHamburger } from '../Hamburger/Hamburger.styles'
import NavMenu from '../NavMenu/NavMenu'

const Header = () => {
  const [isShowingNavMenu, setIsShowingNavMenu] = React.useState<boolean>(false)
  const NavMenuTransitions = useTransition(isShowingNavMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  return (
    <>
      <StyledHamburger onClick={(): void => setIsShowingNavMenu(!isShowingNavMenu)}>
        <Hamburger />
      </StyledHamburger>
      {NavMenuTransitions.map(({ item, key, props }) => item && <NavMenu style={props} key={key} />)}
    </>
  )
}

export default Header
