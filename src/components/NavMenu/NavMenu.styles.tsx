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
`
export const NavList = styled.li`
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  top: 120px;
  right: 60px;
  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 3rem;
    color: ${colors.semiblack};
    text-decoration: none;
    text-transform: uppercase;
    text-align: right;
    cursor: pointer;
    margin: 10px;
    transition: all 0.3s ease;
    &:visited {
      color: ${colors.semiblack};
    }
    &:hover {
      color: ${colors.green};
    }
    @media (max-width: 480px) {
      font-size: 6rem;
    }
  }
`
