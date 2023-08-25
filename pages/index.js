import { fetchDataFromApi } from "../utilis/api";
import { motion } from "framer-motion";
import NextNProgress from 'nextjs-progressbar'
import Hero_banner from "../components/Hero_banner";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import Transitioneffect from "../components/Transitioneffect";
import Hero from "../components/Hero";
import HeroBanner from "../components/Hero_Baner";



export default function Home( { products } ) {


  const container1 = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };
  
  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1
  //   }
  // };



    return <main>
      
          <Hero/>
          <HeroBanner/>
           {/* <Hero_banner/> */}
           <Layout>
          

           <NextNProgress color="#f9b3f6" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
           {/* <div className="blurColor">
            
           </div> */}
          {/* Heading part start */}
          <motion.div
          initial={{opacity:0,
            y:200,
        }}
        whileInView={{y:0,
            opacity:1
        }}
        viewport={{once:true}}
          className="text-center  max-w-[800px] mx-auto my-5 md:py-[40px]">
                <h1 className="text-3xl font-bold  sm:text-4xl md:text-5xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] md:py-10 py-5 Text3d"> Cushioning for Your Miles
</h1>
                <motion.p 
                  initial={{opacity:0,
                    y:100,
                }}
                whileInView={{y:0,
                  transition:{delay:0.5},
                    opacity:1
                }}
                viewport={{once:true}}
                className="my-2 font-medium text-lg py-10 md:py-10">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</motion.p>
            </motion.div>
            
            
            {/* heading part end */}
            {/* Peoduc card start*/}
            <motion.div
            
           variants={container1}
           initial="hidden"
           whileInView="visible"
           viewport={{once:true}}

            className={`container1  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-2 md:px-10 `}>
          {products?.data?.map((product) => {
            return(
            <ProductCard className="" 
            key={product?.id}
            data={product}
            />)
          })}

          
          
            </motion.div>
           </Layout>

           
          < Transitioneffect/>

        </main>;
}


   export async function getStaticProps() {

    const products = await fetchDataFromApi('/api/products?populate=*')

    return {
        props: {products} ,
    }
}
