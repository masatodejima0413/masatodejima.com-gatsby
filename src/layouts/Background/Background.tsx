import * as React from 'react'
import { StyledBackground } from './Background.styles'
import '../../styles/globalstyle.css'
import Header from '../../components/Header/Header'

const Background = ({ children }: any) => {
  return (
    <StyledBackground>
      <Header />
      {children}
    </StyledBackground>
  )
}

export default Background
