import React from "react";
import Lottie from 'lottie-react'
import Load from '../Load'

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center h-[400px]">
        <Lottie width={150} height={150} animationData={Load}>

        </Lottie>
    </div>
  )
}

export default Loading