import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Image from "next/image";
import Link from "next/link";
import Menu  from "./Menu";
import Mobile_Menu from "./Mobile_menu";
import {BsCart} from 'react-icons/bs'
import {BiMenuAltRight} from 'react-icons/bi'
import {VscChromeClose} from 'react-icons/vsc'
import { fetchDataFromApi } from "../utilis/api";
import { SignInButton , SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {useSelector} from 'react-redux'







const Header = () => {

const { cartItems } = useSelector((state) => state.cart); 
const [mobileMenu ,setMobileMenu] = useState(null)
const [showCatMenu ,setShowCatMenu] = useState(null)
const [show ,setShow] = useState("translate-y-0")
const [lastScrollY ,setLastScrollY] = useState(0)
const [categories , setCategories] = useState(null)


const controlNavbar= () => {
    if (window.scrollY > 200 ) {
        if (window.scrollY  > lastScrollY && !mobileMenu){
            setShow("-translate-y-[80px]")
        }
        else{
            setShow ("shadow-xl navbar shadow-cyan-500/30")}

    }
    else {
       setShow("translate-y-0")

    }
    setLastScrollY(window.scrollY)
}


 useEffect( () => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
},[lastScrollY]);


useEffect(()=>{
    fetchCategories()
},[])

const fetchCategories = async () =>{
    const {data} = await fetchDataFromApi('/api/categories?populate=*')
    setCategories(data)
}

    return  <header className={`w-full h-[50px] md:h-[60px] bg-black items-center justify-between z-20 sticky top-0 transition-transform duration-300  shadow ${show}`}>
        <Layout className='h-[60px] flex justify-between items-center  '>
             <Link href='/'> <Image alt="logo" src="/favicon.ico"  width={100} height={30} className="w-[40px] md:w-[60px] " /> </Link>

             <Menu 
             showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
              categories={categories}
              />
              { mobileMenu &&(

             <Mobile_Menu
             setMobileMenu={setMobileMenu}
              showCatMenu={showCatMenu} 
              setShowCatMenu={setShowCatMenu}
               categories={categories}

              /> )}

             <div className="flex items-center gap-4 md:gap-2 text-black ">
                 {/* cart icon start */}
              <div className="w-8 md:w-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <Link href='/cart'>
                    {/* <Image className="text-[15px] md:text-[20px]" src="/cart.png"
                    width={45} height={40}
                    alt="cart"/> */}
                    <BsCart className="text-white" width={50} height={50}/>
            
                </Link>
            {cartItems.length > 0 && (
                <div className="h-[10px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-teal-400 absolute -top-2 left-5 md:left-7 flex justify-center items-center py-2 px-[4px]">{cartItems.length}</div>
            )}
            </div>
            {/* icon end */}
                {/* icon start */}
           <div className="inline-block text-white text-sm font-bold">
            <SignedIn>
                <UserButton/>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    Sign in     
                </SignInButton>
            </SignedOut>
            {/* icon end */}
            </div>
             


        {/* Mobile icon Start */}
         <div className="w-8 md:hidden md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center text-white hover:bg-black/5 cursor-pointer relative -mr-2">
          
           { mobileMenu ?  <VscChromeClose
           onClick={()=>setMobileMenu(false)}
           className="text-[20px]"/> 
            
            : <BiMenuAltRight
            onClick={()=>setMobileMenu(true)}
           className="text-[22px]" /> }
         </div>

         {/* Mobile icon end */}

             </div>
        </Layout>
    </header> ;
};

export default Header;
