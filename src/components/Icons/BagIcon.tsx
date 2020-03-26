import * as React from 'react'
import { Work } from '@styled-icons/material-outlined/Work'
import { motion } from 'framer-motion'
import { StyledBagIcon } from './Icons'

const BagIcon = () => {
  return (
    <StyledBagIcon>
      <motion.div
        animate={{ scale: [1, 2, 2, 2, 2, 2, 2, 2, 1], rotate: [0, 0, 30, -30, 30, -30, 30, 0, 0] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.3, 0.4, 0.45, 0.5, 0.55, 0.6, 0.7, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
      >
        <Work size="80" />
      </motion.div>
    </StyledBagIcon>
  )
}

export default BagIcon
