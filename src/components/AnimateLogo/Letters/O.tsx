import { Keyframes, animated, config } from 'react-spring/renderprops'
import { colors } from '../../../styles/variables'

const O = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: {
        transform: 'translate(-1500px , -300px) rotateZ(0deg)',
        color: colors.semiblack
      },
      transform: 'translate(0, 0) rotateZ(360deg)',
      color: colors.green,
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      delay: 1000,
      config: config.slow
    })
    await next({
      from: {
        fontSize: '40px'
      },
      color: colors.green,
      fontSize: '60px',
      config: config.slow
    })
    await next({
      from: {
        opacity: 1
      },
      opacity: 0.3,
      fontSize: '30px',
      config: config.slow
    })
    await next({
      fontSize: '40px',
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      opacity: 1,
      config: config.slow
    })
    await next({
      fontSize: '60px',
      color: colors.green,
      config: config.slow
    })
    await next({
      from: {
        color: colors.pink
      },
      transform: 'translate(-1500px , -300px) rotateZ(0deg)',
      fontSize: '40px',
      color: colors.offwhite,
      config: config.slow
    })
  }
})

export default O
