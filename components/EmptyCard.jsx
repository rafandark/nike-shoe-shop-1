import React from "react";
import Lottie from 'lottie-react'
import emptyCart from './emptyCart.json'


const EmptyCard = () => {
    return (
      <div className="w-full h-[400px] flex  items-center">
          <Lottie className="w-[300px]" width={200} height={200} animationData={emptyCart}>
  
          </Lottie>
      </div>
    )
  }
  
  export default EmptyCard