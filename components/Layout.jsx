"use client"
import { motion } from 'framer-motion'
import React from 'react'


const Layout = ({children ,className}) => {
  return (
    <motion.div 
     initial={{opacity:0 ,x:20}}
     animate={{opacity:1 ,x:0}}
     transition={{duration:0.5}}
     exit={{opacity:0 ,x:20}}
    
    className={`w-full max-w-[1280px] px-5 md:px-14 mx-auto ${className || ""}`}>
       {children}
    </motion.div >
  )
}

export default Layout