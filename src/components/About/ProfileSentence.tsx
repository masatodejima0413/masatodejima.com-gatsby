import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const ProfileSentence = styled.div`
  font-size: 2rem;
  color: ${colors.semiblack};
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  padding: 30px;
  width: 30%;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    width: 80%;
  }
`
