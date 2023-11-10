"use client"
import React from 'react'
import {motion} from 'framer-motion'
const SectionDivider = () => {
  return (
    <motion.div transition={{delay:0.125}} initial={{opacity:0,y:100}} animate={{opacity:1, y:0}} className='bg-gray-300 my-24 h-16 w-1 rounded-full hidden sm:block'/>
  )
}

export default SectionDivider