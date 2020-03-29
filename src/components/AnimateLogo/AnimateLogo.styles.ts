import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const AnimateLogoWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  /* font-size: 40px; */
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 31.36%;
  bottom: 20%;
  transform: translate(-50%, -50%);
  @media (max-width: 480px) {
    left: 50%;
  }
  div {
    cursor: default;
    display: inline-block;
    vertical-align: text-bottom;
    line-height: 60px;
  }
`
export const AnimateLogoContainer = styled.div`
  /* position: absolute;
  left: 10%; */
`
