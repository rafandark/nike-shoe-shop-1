import { useEffect, useState } from "react";
import Mobile_Menu from "./Mobile_menu";

const [show,setShow] = useState("translate-y-0")
const [lastScrollY , setLastScrollY] = useState(0)


const controlNavbar = ()=>{
 if(window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !Mobile_Menu){
            setShow("-translate-y-[80px]")
        }
        else {
          setShow("shadow-xl shadow-cyan-500/20")
        }
 } else {
       setShow('translate-y-0')
 }
 setLastScrollY(window.scrollY)

}

useEffect(()=>{
    window.addEventListener("scroll", NavbarScroll);
    return () =>{
       window.removeEventListener("scroll",NavbarScroll)
    }
},[lastScrollY])
