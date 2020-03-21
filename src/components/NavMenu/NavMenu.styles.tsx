import styled from 'styled-components'
import { animated } from 'react-spring'
import { colors } from '../../styles/variables'

export const Overlay = styled(animated.div)`
  z-index: 1;
  background-color: ${colors.offwhite};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`
