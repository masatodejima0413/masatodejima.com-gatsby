import * as React from 'react'
import { useSpring } from 'react-spring'
import { config } from 'react-spring/renderprops'
import { StyledBackground } from './Background.styles'
import '../../styles/globalstyle.css'
import Header from '../../components/Header/Header'

const Background = ({ children }: any) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow
  })
  return (
    <>
      <Header />
      <StyledBackground style={props}>{children}</StyledBackground>
    </>
  )
}

export default Background
