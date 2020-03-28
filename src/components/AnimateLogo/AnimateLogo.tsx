import React from 'react'
import { animated } from 'react-spring/renderprops'
import { AnimateLogoContainer, AnimateLogoWrapper } from './AnimateLogo.styles'
import A from './Letters/A'
import C from './Letters/C'
import D from './Letters/D'
import Dot from './Letters/Dot'
import E from './Letters/E'
import I from './Letters/I'
import J from './Letters/J'
import M from './Letters/M'
import O from './Letters/O'
import S from './Letters/S'
import T from './Letters/T'
import A2 from './Letters/A2'
import A3 from './Letters/A3'
import M2 from './Letters/M2'
import M3 from './Letters/M3'
import O2 from './Letters/O2'

const AnimateLogo: React.FC = () => {
  return (
    <AnimateLogoContainer>
      <AnimateLogoWrapper>
        <M native>{(props: any) => <animated.div style={{ ...props }}>m</animated.div>}</M>
        <A native>{(props: any) => <animated.div style={{ ...props }}>a</animated.div>}</A>
        <S native>{(props: any) => <animated.div style={{ ...props }}>s</animated.div>}</S>
        <A2 native>{(props: any) => <animated.div style={{ ...props }}>a</animated.div>}</A2>
        <T native>{(props: any) => <animated.div style={{ ...props }}>t</animated.div>}</T>
        <O native>{(props: any) => <animated.div style={{ ...props }}>o</animated.div>}</O>
        <D native>{(props: any) => <animated.div style={{ ...props }}>d</animated.div>}</D>
        <E native>{(props: any) => <animated.div style={{ ...props }}>e</animated.div>}</E>
        <J native>{(props: any) => <animated.div style={{ ...props }}>j</animated.div>}</J>
        <I native>{(props: any) => <animated.div style={{ ...props }}>i</animated.div>}</I>
        <M2 native>{(props: any) => <animated.div style={{ ...props }}>m</animated.div>}</M2>
        <A3 native>{(props: any) => <animated.div style={{ ...props }}>a</animated.div>}</A3>
        <Dot native>{(props: any) => <animated.div style={{ ...props }}>.</animated.div>}</Dot>
        <C native>{(props: any) => <animated.div style={{ ...props }}>c</animated.div>}</C>
        <O2 native>{(props: any) => <animated.div style={{ ...props }}>o</animated.div>}</O2>
        <M3 native>{(props: any) => <animated.div style={{ ...props }}>m</animated.div>}</M3>
      </AnimateLogoWrapper>
    </AnimateLogoContainer>
  )
}

export default AnimateLogo
