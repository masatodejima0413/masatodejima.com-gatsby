import * as React from 'react'
import { StyledBackground } from './Background.styles'
import '../../styles/globalstyle.css'
import Humberger from '../../components/Hamburger/Hamburger'
import NavMenu from '../../components/NavMenu/NavMenu'

const Background = ({ children }: any) => {
  const [isShowingNavMenu, setIsShowingNavMenu] = React.useState<boolean>(false)

  return (
    <StyledBackground>
      <Humberger isShowingNavMenu={isShowingNavMenu} setIsShowingNavMenu={setIsShowingNavMenu} />
      {isShowingNavMenu && <NavMenu />}
      {children}
    </StyledBackground>
  )
}

export default Background
