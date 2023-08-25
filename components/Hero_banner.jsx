import React, { useRef } from 'react'
import Image from 'next/image';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
import { useScroll,useTransform,motion } from 'framer-motion';



const Hero_banner = () => {


// const targetRef = useRef(null);
// const {scrollYProgress} = useScroll({
//   target:targetRef,
//   offset:["end end" ,"end start"]
// })

// const opacity = useTransform(scrollYProgress, [0,0.5] ,[1,0])


  return (
    <motion.div 
    // style={{opacity }}
    // ref={targetRef}
    
    className='relative w-full h-[50vh] md:h-screen'>
<Carousel className='w-full h-[50vh] md:h-screen'
autoPlay={true}
infiniteLoop={true}
showThumbs={false}
showIndicators={false}
showStatus={false}
stopOnHover	={true}
verticalSwipe='natural'
transitionTime={4000}
renderArrowPrev={(clickHandler,hasPrev)=>(
  <div onClick={clickHandler}
   className='absolute right-[30px] md:right-[50px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white z-10 shadow-sm flex justify-center items-center cursor-pointer hover:opacity-80'
   >
    <BiArrowBack className='text-sm md:text-lg'/>
    
  </div>
)}
renderArrowNext={(clickHandler,hasPrev)=>(
  <div onClick={clickHandler}
   className='absolute right-0 md:right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white z-10 shadow-sm flex justify-center items-center cursor-pointer hover:opacity-80'
   >
    <BiArrowBack className='rotate-180 text-sm md:text-lg'/>
    
  </div>
)}

>
                <div>
                    <img alt='slider-3' src="/nike-2.jpg" />
                    <div className='Text3d px-[10px] md:px-[40px] py-[8px] md:py-[25px] font-oswald bg-white absolute bottom-6 md:bottom-16 left-0 text-black/05 text-[15px] md:text-[30px] uppercase font-medium cursor-pointer '>Shop now</div>
                    
                </div>
                <div>
                    <Image alt='slider-1' fill src="/nike-3.jpg" />
                    <div className='Text3d px-[10px] md:px-[40px] py-[8px] md:py-[25px] font-oswald bg-white absolute bottom-6 md:bottom-16 left-0 text-black/05 text-[15px] md:text-[30px] uppercase font-medium cursor-pointer '>Shop now</div>
                </div>
                <div>
                    <Image alt='slider-2' fill src="/nike-1.jpg" />
                    <div className='Text3d px-[10px] md:px-[40px] py-[8px] md:py-[25px] font-oswald bg-white absolute bottom-6 md:bottom-16 left-0 text-black/05 text-[15px] md:text-[30px] uppercase font-medium cursor-pointer '>Shop now</div>
                </div>
            </Carousel>
    </motion.div>
  )
}

export default Hero_banner