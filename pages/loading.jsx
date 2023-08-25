import React from "react";
import Lottie from 'lottie-react'
import Load from '../Load'

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center h-[400px]">
        <Lottie width={200} height={200} animationData={Load}>

        </Lottie>
    </div>
  )
}

export default Loading