import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { MailSend } from '@styled-icons/boxicons-regular/MailSend'
import { colors } from '../../styles/variables'

export const StyledProfileSentence = styled.div`
  font-size: 2rem;
  color: ${colors.semiblack};
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  padding: 30px;
  width: 30%;
  @media (max-width: 480px) {
    width: 80%;
    text-align: center;
    font-size: 3rem;
  }
`
export const HelloMasatodejima = styled.p`
  font-weight: 600;
  font-size: 3rem;
  color: ${colors.pink};
  @media (max-width: 480px) {
    font-size: 4rem;
  }
`

export const ToContactPage = styled.div`
  color: ${colors.pink};
  text-decoration: none;
  display: inline-block;
  svg {
    color: ${colors.pink};
    width: 4rem;
    height: 4rem;
    transition: all 0.3s ease;
    &:hover {
      color: ${colors.green};
      transform: translateY(-10px);
    }
  }
`

const ProfileSentence: React.FC = () => {
  return (
    <>
      <StyledProfileSentence>
        <HelloMasatodejima>Hello, I'm masatodejima.</HelloMasatodejima>
        <p>
          当サイトをご覧いただきありがとうございます。
          <br />
          東京都在住の22歳、出島賢人と申します。
          <br />
          HTML・CSS・React・WordPressが専門です。
          <br />
          大学在学中にweb制作を独学し案件を獲得、現在は都内システム開発会社で勤務している傍で何かお手伝いできることがあればと思っています。
          <br />
          <span style={{ color: colors.manutd }}>Manchester United</span>のファンです。
          <br />
          <br />
          <ToContactPage>
            <Link to="/contact">
              <MailSend style={{ marginRight: '1rem' }} />
            </Link>
            Please contact me!
            <Link to="/contact">
              <MailSend style={{ marginLeft: '1rem' }} />
            </Link>
          </ToContactPage>
        </p>
      </StyledProfileSentence>
    </>
  )
}

export default ProfileSentence
