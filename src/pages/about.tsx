import { graphql } from 'gatsby'
import * as React from 'react'
import { ProfilePhotoContainer } from '../components/About/ProfilePhotoContainer'
import Background from '../layouts/Background/Background'
import PageTitle from '../components/PageTitle/PageTitle'
import { AboutContentContainer } from '../components/About/AboutContentContainer'
import ProfileSentence from '../components/About/ProfileSentence'

interface AboutProps {
  data: any
}

const About: React.FC<AboutProps> = ({ data }) => {
  const profilePhoto = data.file.childImageSharp
  return (
    <Background>
      <PageTitle pageName="about" />
      <AboutContentContainer>
        <ProfilePhotoContainer sizes={{ ...profilePhoto.fluid, aspectRatio: 1 / 1 }} />
        <ProfileSentence />
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
