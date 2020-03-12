import * as React from 'react'
import { StyledBackground } from './Background.styles'
import '../../styles/globalstyle.css'

const Background = ({ children }: any) => {
  return <StyledBackground>{children}</StyledBackground>
}

export default Background
