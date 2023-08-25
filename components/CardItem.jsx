import React from 'react'
import {RiDeleteBinGLine} from 'react-icons/ri'
import { easeInOut, motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'

const CardItem = ({data}) => {

  
  const p = data?.attributes 

  return (
    <motion.div
    initial={{y:200}}
    whileInView={{y:0 , transition:{duration:0.5 , ease:easeInOut}}}
    
 
    
    className='flex my-5 gap-3 md:gap-5 border-b border-cyan-300'>
        {/* Image  start*/}
        <div className='shirnk-0 aspect-square w-[50px]  md:w-[100px]'>
           <Image width={120}
           height={120} className='rounded-lg' src={p?.thumbnail?.data?.attributes?.url} alt={p?.name}/>

          
        </div>
        {/* iamge end */}
        <div className='w-full flex flex-col'>
    <div className='flex flex-col md:flex-row justify-between '>
          {/* title  start*/}
          <div className='text-lg md:text-xl font-semibold text-black/[0.9]'
          > {p?.name}</div>
            {/* title end*/}

            {/* sub title start*/}
            <div className='md:hidden text-sm font-medium text-black/[0.5]'>
               {p?.subtitle}
            </div>

            {/* sub title start*/}
              {/*price start  */}
            <div className='text-sm md:text-md font-bold text-black/[0.5]'>
          MRP :&#8377;{p?.price }
            </div>
                          {/*price end  */}
                 

         </div>
         <div className=' text-sm font-medium text-black/[0.5]'>
          {p?.subtitle}

            </div>

            {/* seletor s*/}
           <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-2 md:gap-10 text-black-[0.5]'>
         <div className='flex items-center gap-1'>
         <div className='font-semibold opacity-70'>size</div>
          <select className='hover:bg-black/[0.5]' name="" id="">
            <option value="1">UK 6</option>
            <option value="1">UK 6.5</option>
            <option value="1">UK 7</option>
            <option value="1">UK 7.5</option>
            <option value="1">UK 8</option>
            <option value="1">UK 8.5</option>
            <option value="1">UK 9</option>
            <option value="1">UK 9.5</option>
            <option value="1">UK 10</option>
          </select>
            </div>
  {/* option value s*/}
  <div className='flex items-center gap-1'>
            Quantity
            <div>
            <select className='hover:bg-black/[0.5]' name="" id="">
            <option value="1">UK 6</option>
            <option value="1">UK 6.5</option>
            <option value="1">UK 7</option>
            <option value="1">UK 7.5</option>
            <option value="1">UK 8</option>
            <option value="1">UK 8.5</option>
            <option value="1">UK 9</option>
            <option value="1">UK 9.5</option>
            <option value="1">UK 10</option>
          </select>
            </div>
           </div>
           {/* option value s*/}
         </div>

          


           </div>

           
          {/* seletor s*/}


        </div>
        
    </motion.div>
  )
}

export default CardItem