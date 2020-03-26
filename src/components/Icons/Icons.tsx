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
    color: ${colors.pink};
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
export const BagIcon = styled.div`
  color: ${colors.pink};
  text-align: center;
  margin-bottom: 60px;
`
