import * as React from 'react'
import Background from '../layouts/Background/Background'
import AnimateLogo from '../components/AnimateLogo/AnimateLogo'
import AskewBackground from '../components/Home/AskewBackground'

const IndexPage = () => (
  <Background>
    <AskewBackground />
    <AnimateLogo />
  </Background>
)

export default IndexPage
