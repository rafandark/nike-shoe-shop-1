import React from 'react'
import Layout from './Layout'
import Lottie from 'lottie-react'
import paper from '../components/paper.json'
import { motion } from 'framer-motion'
import Image from 'next/image';





const Landing = () => {
  return (
<section className='w-full h-screen bg-black'>
  <Layout>
<div className='flex  w-full px-5  h-screen'>
    <motion.div
     initial={{ opacity: 0, scale: 0.5 ,y:200}}
     animate={{ opacity: 1, scale: 1 ,y:0}}
     transition={{ duration: 0.5 }}
     className='w-1/2 relative  text-white flex  justify-center items-center bg-black'>

     <h1 className='text-5xl  md:text-6xl lg:text-7xl font-semibold'> <span className='s1'>Discover </span>The Perfect Shoes</h1>
     <div className='w-[200px] absolute bottom-0 right-0 h-[250px]'>
     <Lottie width={50} height={50} animationData={paper}>

</Lottie>
     </div>
    </motion.div>
    <div className='w-1/2 flex justify-center items-center'>
       <Image src='/shoe1.jpg' width={500} height={500} alt="heroImage"/>
    </div>

</div>
</Layout>
</section>  )
}

export default Landing