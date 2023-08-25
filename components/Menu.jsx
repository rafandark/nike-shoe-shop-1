import Link from 'next/link';
import React ,{useEffect} from 'react'
import {BsChevronDown} from "react-icons/bs"







const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories",url: "/category", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({showCatMenu ,setShowCatMenu,categories }) => {

  // const gsap = require('gsap');


  // gsap.registerPlugin(staggerFrom);


  // useEffect(()=>{
  //   // const tl =  gsap.TweenMax()
  
  //   TweenMax.from("ul li",1,{
  //     opacity:0,
  //     x:-20,
  //     ease:Power3.easeInOut
  //   },0.8)
  // })

  return (
    <ul className='hidden md:flex items-center gap-8 font-semibold text-white/90' >
     {data.map ((item)=>{
        return(
            <React.Fragment key={item.id}>
             {!!item.subMenu ? (
              <li 
              onMouseEnter={()=>setShowCatMenu(true)}
              onMouseLeave={()=>setShowCatMenu(false)}
              className='curs
              or-pointer flex items-center gap-2 font-semibold  relative'>
                {item.name}
                <BsChevronDown size={14}/>
                {showCatMenu && (
                <ul className='bg-white font-semibold absolute top-6 left-0 min-w-[180px] px-1 py-1 text-black/[0.8] shadow-lg'>
                  {categories?.map(({ attributes: c, id })=>{
                    return(
                      <Link className='font-semibold'
                    onClick={()=>setShowCatMenu(false)}
                    href={`/category/${c.slug}`}

                    key=  {id}>
                        <li className='h-12 cursor-pointer flex justify-between items-center gap-2 px-3 hover:bg-cyan-200 rounded-md font-medium'>

                          
                          {c.name}
                          <span className='opacity-50 text-sm'> {`(${c.products.data.length})`}</span>
                          </li>
                        </Link>
                    )
      
                  })}
                </ul>
                )}
              </li>
             )  : 
             
             (
                <li className='cursor-pointer relative hover:border-b-2 border-solid font-bold border-white'>
                 

                    <Link href={item?.url}>{item.name}</Link>
                </li>
             ) }
            </React.Fragment>
        )
     })}
    
    </ul>
  )
}

export default Menu