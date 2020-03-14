import { Keyframes, animated, config } from 'react-spring/renderprops'
import { colors } from '../../../styles/variables'

const Dot = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: {
        transform: 'translate(-2900px , -300px) rotate3d(1, 1, 1, 0deg)',
        color: colors.offwhite,
        fontSize: '0px'
      },
      color: colors.semiblack,
      transform: 'translate(0, -3000px) rotate3d(1, 1, 1, 360deg)',
      delay: 1000,
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      config: config.slow
    })
    await next({
      from: {
        opacity: 1
      },
      opacity: 0.3,
      config: config.slow
    })
    await next({
      opacity: 0.1,
      transform: 'translate(0, -2000px) rotate3d(1, 1, 1, 360deg)',
      config: config.slow
    })
    await next({
      color: colors.semiblack,
      opacity: 1,
      transform: 'translate(0, -32%) rotate3d(1, 1, 1, 360deg)',
      fontSize: '150px',
      delay: 2630,
      config: {
        mass: 1,
        tension: 400,
        friction: 20
      }
    })
    await next({
      color: colors.offwhite,
      fontSize: '40px',
      opacity: 1,
      transform: 'translate(0, 0) rotate3d(1, 1, 1, 360deg)',
      delay: 1000,
      config: config.slow
    })
    await next({
      fontSize: '60px',
      color: colors.semiblack,
      config: config.slow
    })
    await next({
      transform: 'translate(0, 0) rotate3d(15, 15, 15, 0deg)',
      config: config.slow
    })
    await next({
      transform: 'translate(-2900px , -3000px) rotate3d(1, 1, 1, 0deg)',
      fontSize: '0px',
      color: colors.offwhite,
      delay: 0,
      config: config.slow
    })
  }
})

export default Dot
