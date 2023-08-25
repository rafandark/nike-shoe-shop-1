import Layout from '../../components/Layout';
import ProductDetails from '../../components/ProductDetails'
import RelatedDeatilsCarousel from '../../components/RelatedDeatilsCarousel'
import {fetchDataFromApi} from '../../utilis/api'
import { getDiscountedPricePercentage } from '../../utilis/helper'
import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import NextNProgress from 'nextjs-progressbar'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { progress } from 'framer-motion'
import Image from 'next/image';



const Product = ({ product, products}) => {

  const [selectedSize , SetSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch()
  const p = product?.data?.[0]?.attributes

  
  const notify = () => 
  toast.success('🦄 Sucesss, Check your cart', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark", 
      });

  

  return (
    <div className=' w-full md:py-20'>
      <ToastContainer/>
        <Layout >
        <NextNProgress color="#f9b3f6" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <div className='flex flex-col lg:flex-row gap-[50px] md:gap-[100px]'>
                {/* left div */}
                <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>

                 <ProductDetails images={p?.image.data}/> 
                </div>
                {/* right div */}
                <div className='flex-[1] py-3'>
                    <div className='text-xl md:text-4xl md:mb-2 font-bold'>
                      {p.name}
                   </div>
                   
                    <div className='font-medium text-lg md:mb-8  md:text-xl '>
                    {p.subtitle}
                    </div>
                    <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{p.price}
                    </p>

                    {p.orginial_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.orginial_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.orginial_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
                <div className='text-black/[0.4]'>incl. of taxes
(Also includes all applicable duties)</div>

                    {/* size selection */}
              <div className='mb-10 '>
                <div className='flex mt-20 justify-between mb-2'>
         <div className='text-md font-medium text-black'>
           Select Size 
         </div>
         <div className='text-md font-medium text-black/[0.5]'>
           Select Guide 
         </div>
         </div>
              {/* size start */}

              <div  id="sizesGrid"
 className='mt-10 mb-5 grid grid-cols-3 gap-2'> 
              
              {p.size.data.map((item, i) => (
                 <div  key={i}
    className={`border rounded-md text-center gap-2 py-3 font-medium ${item.enabled ? 'hover:border-black cursor-pointer':'cursor-not-allowed opacity-40 bg-black/[0.5]'} ${selectedSize === item.size ?"border-black":""}`}
    
    onClick={()=>{
      SetSelectedSize(item.size)
      setShowError(false)
    }}

    >     {item.size}  </div>
     ))}

     </div>
              {/* size end */}

              {/* show error start */}
    { showError &&    <div className='text-red-400 mt-1 '>
            Size selection is required
          </div>}

              {/* button */}
             <button
             
             className='w-full flex flex-row justify-center items-center py-4 rounded-xl bg-black text-white font-bold transition-transform active:scale-95 mb-3 hover:bg-cyan-300 hover:text-black' 
             
             onClick={() => {
              if (!selectedSize) {
                  setShowError(true);
                  document
                      .getElementById("sizesGrid")
                      .scrollIntoView({
                          block: "center",
                          behavior: "smooth",
                      });
              } else {

            
                  dispatch(
                      addToCart({ ...product?.data?.[0],selectedSize,
                      oneQuantityPrice: p.price,
                      })
                  );
                             
              notify();
          
            
              }

          }}
             >
              Add to Cart <span className='pl-2'><Image width={40} height={60} alt="money" src="/money.png"/></span>

             </button>
             <button className='w-full flex justify-center items-center gap-2 py-4 rounded-xl bg-white border-black border-2 text-black font-bold transition-transform active:scale-95 mb-10 hover:bg-cyan-300 hover:text-black' >
              Whishlist  <IoMdHeartEmpty size={20}/>

             </button>
             {/* button enc */}
              {/* paragrapgh */}
              <div>
              <div className='text-lg font-bold mb-5 '>
                Product details
              </div>
              <div className='text-md mb-5'>
              Russell Westbrook's 6th signature shoe is—you guessed it—all about speed. To get you goin' as fast as possible, we've wrapped the rubber outsole nearly up to the midsole, so you're not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court. It's all held together by an outer shroud and fastened with a zip collar that spells out Russell's signature question: "Why Not?"s
              </div>
              </div>

             
              </div>
                    {/* select end  */}
                </div>

            </div>
            <RelatedDeatilsCarousel products={products}/>
        </Layout>

    </div>
  )
}

export default Product;




export async function getStaticPaths() {
  
  const products = await fetchDataFromApi("/api/products?populate=*")
  const paths = products?.data?.map((p)=>({
    params:{
      slug: p.attributes.slug
    }
  }))

  return{
    paths,
    fallback:false
  }

}





// get Static paths requires using getStaicPorps

export async function getStaticProps ({params :{slug}}){
  const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`)
  const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`
  )
return{
props:{
  
  product,
  products
 
}
}

}