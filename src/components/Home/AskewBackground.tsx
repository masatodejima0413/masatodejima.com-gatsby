import * as React from 'react'
import { useSpring, animated } from 'react-spring'
import { config } from 'react-spring/renderprops'
import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const StyledAskewBackground = styled(animated.div)`
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  div {
    position: relative;
    padding: 30% 0;
    &::before {
      content: '';
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 80%;
      margin: -50% 20% 0;
      background: ${colors.green};
      -webkit-transform-origin: left center;
      -ms-transform-origin: left center;
      transform-origin: left center;
      -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
      transform: rotate(30deg);
      z-index: -1;
    }
  }
`
const AskewBackground = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
    delay: 1000
  })
  return (
    <StyledAskewBackground style={props}>
      <div />
    </StyledAskewBackground>
  )
}

export default AskewBackground
