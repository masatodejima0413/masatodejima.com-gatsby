import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const StyledIcon = styled.div`
  color: ${colors.pink};
  transition: all 0.3s ease;
  text-align: center;
`

export const StyledLinkIcon = styled.a`
  color: ${colors.pink};
  transition: all 0.3s ease;
  &:hover {
    /* opacity: 0.5; */
    color: ${colors.green};
    transform: translateY(-10px);
  }
  svg {
    width: 60px;
    height: 60px;
    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }
`
export const LinkIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 20px;
  }
`
export const StyledBagIcon = styled.div`
  color: ${colors.pink};
  text-align: center;
  margin-bottom: 60px;
  div {
    display: inline-block;
  }
`
