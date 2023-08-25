import Image from 'next/image'
import React from 'react'


const about = () => {
  return (
       <>
    <div className=' w-full flex flex-row h-screen bg-amber-400'>
     <div className='w-1/2 p-20'>
     <h1 className='md:text-6xl  text-4xl pt-20 font-medium'>About us</h1>
     <h3>Who we are</h3>
     <p className='pt-10 '>Welcome to the official Nike Shoes website, your ultimate destination for premium athletic footwear that combines innovation, style, and performance. At Nike, we believe in the power of sports to transform lives and inspire greatness. Our journey began with a vision to create groundbreaking sneakers that empower athletes and enthusiasts alike to reach their full potential.</p>
     </div>
     <div className='w-1/2 p-20 flex justify-end items-center'>
      <Image className=' rounded-full' src="/side-poster1.jpg" width={500} height={500}/>
     </div>
    </div>

    <div className="mt-16 p-20 flex items-center">
      <div className="space-y-6 md:w-3/4">
        <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm">
            Join Us →
          </p>
        </div>
        <p className="text-3xl font-bold text-gray-900 md:text-4xl">
          Meet our team
        </p>
        <p className="max-w-4xl text-base text-gray-700 md:text-xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <div></div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 p-20 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          alt="Gabrielle Fernandez"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Gabrielle Fernandez
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Marketing Lead
        </p>
      </div>
      <div className="rounded-md border">
        <img
          src="https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg"
          alt="Victória Silva"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Victória Silva
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Back-end developer
        </p>
      </div>
      <div className="rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
          alt="Gabrielle Fernandez"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Gabrielle Fernandez
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Sales
        </p>
      </div>
      <div className="rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
          alt="Sadie Lewis"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Sadie Lewis
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Sales
        </p>
      </div>
      <div className="rounded-md border">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
          alt="Thilde Olaisen"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Thilde Olaisen
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Marketing Lead
        </p>
      </div>
      <div className="rounded-md border">
        <img
          src="https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg"
          alt="Deepika Ramesh"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Deepika Ramesh
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Front-end developer
        </p>
      </div>
      <div className="rounded-md border">
        <img
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
          alt="Jordi Santiago"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Jordi Santiago
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Front-end developer
        </p>
      </div>
      <div className="rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
          alt="Kerim Fahri"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Kerim Fahri
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Back-end developer
        </p>
      </div>
    </div>
    </>
  )
}

export default about