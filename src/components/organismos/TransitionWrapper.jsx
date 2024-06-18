import React from 'react'
import { motion } from 'framer-motion'

export default function TransitionWrapper({ children }) {
  return (
    <>
      <motion.div
        className='fixed top-0 left-0 w-full h-screen bg-[#101010] origin-bottom z-50'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
      />
      <motion.div
        className='fixed top-0 left-0 w-full h-screen bg-[#101010] origin-top z-50'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.4 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </>
  )
}
