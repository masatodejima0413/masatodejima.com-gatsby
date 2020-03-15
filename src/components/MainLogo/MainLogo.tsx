import React, { useState, useRef } from 'react'
import { useSpring, useSprings, useTrail, animated, useChain } from 'react-spring'
import { StyledMainLogo } from './MainLogo.styles'
import { colors } from '../../styles/variables'

export const MainLogo = () => {
  const letters = [
    {
      character: 'm',
      color: colors.semiblack,
      delayMS: 100
    },
    {
      character: 'a',
      color: colors.semiblack,
      delayMS: 200
    },
    {
      character: 's',
      color: colors.semiblack,
      delayMS: 300
    },
    {
      character: 'a',
      color: colors.semiblack,
      delayMS: 400
    },
    {
      character: 't',
      color: colors.semiblack,
      delayMS: 500
    },
    {
      character: 'o',
      color: colors.semiblack,
      delayMS: 600
    },
    {
      character: 'd',
      color: colors.semiblack,
      delayMS: 700
    },
    {
      character: 'e',
      color: colors.semiblack,
      delayMS: 800
    },
    {
      character: 'j',
      color: colors.semiblack,
      delayMS: 900
    },
    {
      character: 'i',
      color: colors.semiblack,
      delayMS: 1000
    },
    {
      character: 'm',
      color: colors.semiblack,
      delayMS: 1100
    },
    {
      character: 'a',
      color: colors.semiblack,
      delayMS: 1200
    },
    {
      character: '.',
      color: colors.green,
      delayMS: 1300
    },
    {
      character: 'c',
      color: colors.green,
      delayMS: 1400
    },
    {
      character: 'o',
      color: colors.green,
      delayMS: 1500
    },
    {
      character: 'm',
      color: colors.green,
      delayMS: 1600
    }
  ]
  const trailSpringsRef = useRef()
  const trailSprings = useTrail(letters.length, {
    ref: trailSpringsRef,
    from: { fontSize: '0px' },
    to: { fontSize: '6rem' },
    config: { tension: 250 }
  })

  const springsRef = useRef()
  const springs = useSprings(
    letters.length,
    letters.map(letter => ({
      ref: springsRef,
      from: { color: colors.semiblack, fontSize: '20px' },
      to: {
        color: letter.color,
        fontSize: '6rem'
      },
      config: { trail: 250 },
      delay: letter.delayMS
    }))
  )

  const springs2Ref = useRef()
  const springs2 = useSprings(
    letters.length,
    letters.map(letter => ({
      ref: springs2Ref,
      from: { color: colors.pink },
      to: {
        color: colors.warning
      },
      delay: letter.delayMS
    }))
  )

  const springRef = useRef()
  const spring = useSpring({
    ref: springRef,
    from: { opacity: 0.2 },
    to: { opacity: 1 }
  })

  const spring2Ref = useRef()
  const spring2 = useSpring({
    ref: spring2Ref,
    from: { color: colors.semiblack },
    to: { color: colors.green }
  })
  // useChain([trailSpringsRef, springsRef])
  useChain([springsRef, springRef, spring2Ref])
  // ・三つ以上もつなげられた
  // usetrailとusesprings　配列を生成するやつ二つはusechainに共存できないっぽい
  return (
    <div>
      {springs.map((animation, index) => (
        <StyledMainLogo style={{ ...animation, ...spring, ...spring2 }} key={index}>
          {letters[index].character}
        </StyledMainLogo>
      ))}
    </div>
  )
}
