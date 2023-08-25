import React, { useEffect } from 'react'
import styles from '../styles/hero.module.css'
import { easeIn,  useScroll, useTransform , motion,stagger  } from 'framer-motion'
import Image from 'next/image'



const Hero = () => {

// useEffect(()=>{
  
//   // const tl =  gsap.TweenMax()

//   TweenMax.from(".nike",2,{
//     opacity:1,
//     y:-100,
//     ease:easeInOut,
//     delay:2,
//     duration:1.8,
    
  
//   })
// })

const { scrollYProgress } = useScroll();
const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <div className={`w-full h-[70vh] md:h-screen bg-black  relative`}>

   <div className={`absolute top-[50%] translate-x-[50%]  right-[50%] w-1/3 h-1/2 ${styles.g1}`}>

   </div>

      <motion.div 
      initial={{
        y:-400,
        opacity:0
      }}
   
    animate={{
      y:0,
      opacity:1,
      transition:{
          delay:1,
          staggerChildren:0.8,
      }
     } }
      className='flex justify-center items-start pt-[5%] back'>
        <h1 style={{ x }} className='text-6xl lg:text-9xl sm:text-7xl md:text-8xl text-white font-Anadda font-extrabold'>Nike Air Shoe</h1>
      </motion.div>

      {/* image  */}

     

      <motion.div
      initial={{opacity:0,y:-600}}
      animate={{opacity:1,y:-20,transition:{delay:1.5,ease:easeIn}}}
       className='nike flex justify-center mt-[-20%] md:mt-[-7%] items-center'>
        <Image className='animate-presence' loading="lazy"  src="/nike.png" width={500} height={500} alt='nike1'/>
      </motion.div>


    </div>
  )
}

export default Hero