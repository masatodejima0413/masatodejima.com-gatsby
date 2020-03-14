import { Keyframes, config } from 'react-spring/renderprops'
import { colors } from '../../../styles/variables'

const M3 = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: {
        transform: 'translate(-3500px , -300px) rotate3d(1, 1, 1, 0deg)',
        color: colors.semiblack
      },
      transform: 'translate(0, 0) rotate3d(1, 1, 1, 360deg)',
      color: colors.pink,
      delay: 1000,
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      config: config.slow
    })
    await next({
      from: {
        opacity: 1,
        fontSize: '40px'
      },
      opacity: 0.3,
      fontSize: '30px',
      config: config.slow
    })
    await next({
      color: colors.pink,
      opacity: 1,
      fontSize: '60px',
      config: config.slow
    })
    await next({
      opacity: 0.3,
      fontSize: '40px',
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      opacity: 1,
      delay: 2000,
      config: config.slow
    })
    await next({
      fontSize: '60px',
      color: colors.pink,
      delay: 1000,
      config: config.slow
    })
    await next({
      transform: 'translate(0, 0) rotate3d(15, 15, 15, 0deg)',
      config: config.slow
    })
    await next({
      from: {
        color: colors.pink
      },
      transform: 'translate(-3500px , -300px) rotate3d(1, 1, 1, 0deg)',
      fontSize: '40px',
      color: colors.offwhite,
      delay: 0,
      config: config.slow
    })
  }
})

export default M3
