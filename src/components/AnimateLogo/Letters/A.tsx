import { Keyframes, config } from 'react-spring/renderprops'
import { colors } from '../../../styles/variables'

const A = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: {
        transform: 'translate(-700px, -300px) rotate3d(1, 1, 1, 0deg)',
        color: colors.semiblack
      },
      transform: 'translate(0, 0) rotate3d(1, 1, 1, 360deg)',
      color: colors.green,
      delay: 1000,
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      config: config.slow
    })
    await next({
      from: {
        fontSize: '4rem'
      },
      color: colors.green,
      fontSize: '6rem',
      config: config.slow
    })
    await next({
      from: {
        opacity: 1
      },
      opacity: 0.4,
      fontSize: '4rem',
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      opacity: 1,
      delay: 4300,
      config: config.slow
    })
    await next({
      fontSize: '6rem',
      color: colors.green,
      delay: 1000,
      config: config.slow
    })
    await next({
      transform: 'translate(0, 0) rotate3d(15, 15, 15, 0deg)',
      config: config.slow
    })
    await next({
      transform: 'translate(-700px, -300px) rotate3d(1, 1, 1, 0deg)',
      fontSize: '4rem',
      color: colors.offwhite,
      delay: 0,
      config: config.slow
    })
  }
})

export default A
