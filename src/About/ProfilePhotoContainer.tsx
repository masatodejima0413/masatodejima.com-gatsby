import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../styles/variables'

export const ProfilePhotoContainer = styled(Img)`
  width: 40%;
  border-radius: 50%;
  background-color: ${colors}.pink;
`
