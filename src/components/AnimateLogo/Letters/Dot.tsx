import { Keyframes, animated, config } from 'react-spring/renderprops'
import { colors } from '../../../styles/variables'

const Dot = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: {
        transform: 'translate(-2900px , -300px) rotateZ(0deg)',
        color: colors.offwhite
      },
      color: colors.semiblack,
      transform: 'translate(0, 0) rotateZ(360deg)',
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      delay: 1000,
      config: config.slow
    })
    await next({
      from: {
        opacity: 1,
        fontSize: '40px'
      },
      opacity: 0.4,
      fontSize: '30px',
      config: config.slow
    })
    await next({
      opacity: 0.3,
      fontSize: '40px',
      config: config.slow
    })
    await next({
      color: colors.semiblack,
      opacity: 1,
      fontSize: '80px',
      config: config.slow
    })
    await next({
      color: colors.offwhite,
      fontSize: '40px',
      opacity: 1,
      config: config.slow
    })
    await next({
      fontSize: '60px',
      color: colors.semiblack,
      config: config.slow
    })
    await next({
      transform: 'translate(-2900px , -300px) rotateZ(0deg)',
      fontSize: '40px',
      color: colors.offwhite,
      config: config.slow
    })
  }
})

export default Dot
