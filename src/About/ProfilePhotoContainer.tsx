import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../styles/variables'

export const ProfilePhotoContainer = styled(Img)`
  border-radius: 50%;
  margin: 30px;
  width: 30%;
  display: inline-block;
  box-shadow: 0px 0px 20px -5px rgba(239, 71, 111, 0.8);
  @media (max-width: 480px) {
    width: 80%;
  }
`
