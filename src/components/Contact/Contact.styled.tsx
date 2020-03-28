import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const ContactComment = styled.p`
  font-size: 3rem;
  color: ${colors.semiblack};
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`
export const ContactContainer = styled.div`
  margin-top: 100px;
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`
export const MailAddress = styled.p`
  font-size: 2rem;
  color: ${colors.pink};
  /* text-shadow: 2px 2px 2px ${colors.pink}, -2px 2px 2px ${colors.pink}, 2px -2px 2px ${colors.pink}, -2px -2px 2px ${colors.pink}; */
  /* -webkit-text-stroke: 0.2rem ${colors.pink}; */
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin-top: 0;
  margin-bottom: 70px;
`
