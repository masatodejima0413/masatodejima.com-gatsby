import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const StyledHamburger = styled.div`
  /* background-size: 80px 80px; */
  z-index: 2;
  position: absolute;
  top: 30px;
  right: 30px;
  fill: ${colors.semiblack};
  stroke: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`
