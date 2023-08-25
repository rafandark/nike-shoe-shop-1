import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { useRouter } from "next/router";

export const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const handleStart = (url) =>(url !== router.asPath) && setLoading(true)
    const handleComplete = (url) =>(url !== router.asPath) && setTimeout(()=>{setLoading(false)})

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routerChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
   

    return()=>{
    
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routerChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
       
    }


  })

  return loading && (
   <Loading/>
  )

  
};