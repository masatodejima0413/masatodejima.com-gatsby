import * as React from 'react'
import { StyledBackground } from './Background.styles'
import '../../styles/globalstyle.css'
import Humberger from '../../components/Hamburger/Hamburger'

const Background = ({ children }: any) => {
  return (
    <StyledBackground>
      <Humberger />
      {children}
    </StyledBackground>
  )
}

export default Background
