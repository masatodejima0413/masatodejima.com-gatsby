import { graphql } from 'gatsby'
import * as React from 'react'
import { ProfilePhotoContainer } from '../About/ProfilePhotoContainer'
import Background from '../layouts/Background/Background'
import PageTitle from '../components/PageTitle/PageTitle'
import { AboutContentContainer } from '../About/AboutContentContainer'
import { ProfileSentence } from '../About/ProfileSentence'

const About = ({ data }: any) => {
  const profilePhoto = data.file.childImageSharp
  return (
    <Background>
      <PageTitle pageName="about" />
      <AboutContentContainer>
        <ProfilePhotoContainer sizes={{ ...profilePhoto.fluid, aspectRatio: 1 / 1 }} />
        <ProfileSentence>
          <p>
            Hello, I'm masatodejima.
            <br />
            this is profile message.this is profile message.
            <br />
            this is profile message.this is profile message.
            <br />
            this is profile message.this is profile message.this is profile message.this is profile message.
          </p>
        </ProfileSentence>
      </AboutContentContainer>
    </Background>
  )
}

export default About

export const query = graphql`
  query {
    file(relativePath: { eq: "ProfilePhoto.jpg" }) {
      id
      childImageSharp {
        fluid(cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
