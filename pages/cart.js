import React, { useMemo, useState } from 'react'
import Layout  from "../components/Layout"
import Image from 'next/image'
import CardItem from '../components/CardItem'
import {useSelector} from 'react-redux'
import EmptyCard from '../components/EmptyCard'
import Link from 'next/link'
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from '../utilis/api'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLICSHABLE_KEY);

const Cart = () => {

  const [loading , setLoading] = useState(false)
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
        (total, val) => total + val.attributes.price,
        0
    );
}, [cartItems]);


const handlePayment = async () => {
  try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
          products: cartItems,
      });
      await stripe.redirectToCheckout({
          sessionId: res.stripeSession.id,
      });
  } catch (error) {
      setLoading(false);
      console.log(error);
  }
};


  return (
    <div className='w-full py-20'>
        <Layout>
        
         {cartItems.length > 0 && (
           <>
             {/* Heading paragrapgh */}
             <div className='text-center max-w-[800px] mx-auto mt-4 md:mt-0'>
            <div className='text-3xl md:text-5xl mb-5 font-semibold leading-tight'>
                Shopping Cart
            </div>
           </div>
           {/* Heading paragraph end */}
           {/* Cart content start */}
           <div className='flex flex-col lg:flex-row gap-12 py-10'>
               {/* items start */}
               <div className='flex-[2]'>
                <div className='font-medium text-lg'>Cart Items</div>
                {
                  cartItems.map((item)=>(
                    <CardItem key={item.id} data={item} />
                  ))
                }
                
               </div>
               {/* items end */}
               {/* summary start */}
               <div className='flex-[1]'>
               <div className='font-bold text-lg'>Summary</div>


              <div className='mt-5 bg-gradient-to-r from-red-400 via-fuchsia-500 to-indigo-500 bg-gray-800 text-white rounded-xl  shadow-2xl'>
                <div className='flex justify-between p-4'>
                  <div className='text-md '>
                        < h4 className='font-meduim'> SUBTOTAL</h4>
                         <div className='mt-4'>
                          <p>The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.</p>
                         </div>
                  </div>
                       
                  <div className='font-medium'>
                  &#8377;{subTotal}

                
                  </div>
                </div>


               </div>
                
               {/* button start */}
               <button onClick={handlePayment} 
               className='w-full py-4 rounded-full bg-black text-white font-bold transition-transform active:scale-95 my-3 md:my-7 hover:bg-cyan-300 hover:text-black' >
             Checkout  
             
             </button>
           {/* button end */}
               </div>
              

               {/* summary end */}
           </div>
           {/* cart content end */}
           </>
         )}

         {/* this is empty screen */}
            {/* This is empty screen */}
            {cartItems.length < 1 && (
                   <div className='flex-[2] flex flex-col items-center'>
                    <div className='my-1'>
                      <EmptyCard/>
                      
                    </div>
                    <div className="text-xl font-bold">
                    Your cart is empty

                    </div>
                    <div 
                     className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                       

                    </div>

                    <div className='my-8'>
                    <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                            {loading && <Image src="/spinner.svg" width={20} height={20} alt="spinner" />}
                        </Link>
                    </div>

                   </div>
                )}
       
        </Layout> 
    </div>
  )
}

export default Cart