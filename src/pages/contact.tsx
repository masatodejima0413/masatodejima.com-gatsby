import * as React from 'react'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { MailSend } from '@styled-icons/boxicons-regular/MailSend'
import Background from '../layouts/Background/Background'
import PageTitle from '../components/PageTitle/PageTitle'
import { StyledIcon, StyledLinkIcon, LinkIconsWrapper } from '../components/Icons/Icons'
import { ContactContainer, ContactComment, MailAddress } from '../components/Contact/Contact.styled'
import BagIcon from '../components/Icons/BagIcon'

const Contact: React.FC = () => {
  return (
    <Background>
      <PageTitle pageName="contact" />
      <ContactContainer>
        <BagIcon />
        <ContactComment>please contact me by email</ContactComment>
        <StyledIcon>
          <MailSend size="60" />
        </StyledIcon>
        <MailAddress>masatodejima@gmail.com</MailAddress>
        <ContactComment>or by social media...</ContactComment>
        <LinkIconsWrapper>
          <StyledLinkIcon href="https://github.com/masatodejima0413" target="_black">
            <Github size="60" />
          </StyledLinkIcon>
          <StyledLinkIcon href="https://www.instagram.com/masatodejima/" target="_black">
            <Instagram size="60" />
          </StyledLinkIcon>
          <StyledLinkIcon href="https://www.facebook.com/mr.ukiuki.masato.happyturn" target="_black">
            <FacebookSquare size="60" />
          </StyledLinkIcon>
          <StyledLinkIcon href="https://www.linkedin.com/in/masato-dejima-7791161a5/" target="_black">
            <LinkedinSquare size="60" />
          </StyledLinkIcon>
          <StyledLinkIcon href="https://twitter.com/" target="_black">
            <Twitter size="60" />
          </StyledLinkIcon>
        </LinkIconsWrapper>
      </ContactContainer>
    </Background>
  )
}

export default Contact
