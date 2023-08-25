import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar';
import ProductCard from '../../components/ProductCard'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Loading from '../Loading'
import Layout from '../../components/Layout';
import {fetchDataFromApi} from '../../utilis/api'

const maxResult = 3

const Category = ({category,products ,slug}) => {
  const [pageIndex, setPageIndex] = useState(1)
  const {query} = useRouter()
  const router = useRouter()

 useEffect(()=>{
  setPageIndex(1)

 },[query])

  const { data, error ,isLoading} = useSWR(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`, fetchDataFromApi,{
    fallback:products
  })


  return (
    <div className='w-full md:py-20 relative'>
     <Layout>
     <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />

        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
            <div className='text-2xl md:text-6xl border-b-2 py-2  mb-5 font-semibold
            leading-tight'>{category?.data?.[0].attributes.name}
            </div>
        </div>

        {/* Product grid start  */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-2 md:px-10 ">
        {data?.data?.map((product) => {
            return(

            <ProductCard 
            key={product?.id}
            data={product}
            />)
          })}
            </div>

            {/* PAGINATION BUTTONS START */}
{data?.meta?.pagination?.total > maxResult && (
    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
        <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
        >
            Previous
        </button>

        <span className="font-bold">{`${pageIndex} of ${
            data && data.meta.pagination.pageCount
        }`}</span>

        <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
            disabled={
                pageIndex ===
                (data && data.meta.pagination.pageCount)
            }
            onClick={() => setPageIndex(pageIndex + 1)}
        >
            Next
        </button>
    </div>
)}
{/* PAGINATION BUTTONS END */}
{isLoading && (
  <div className='w-full h-[300px]'><Loading/></div>
)}
     </Layout>
    </div>
  )
}

export default Category


export async function getStaticPaths() {
  
  const category = await fetchDataFromApi("/api/categories?populate=*")
  const paths = category?.data?.map((c)=>({
    params:{
      slug: c.attributes.slug
    }
  }))

  return{
    paths,
    fallback:false
  }

}

// get Static paths requires using getStaicPorps

export async function getStaticProps ({params :{slug}}){
  const category = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
  const products = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`)
return{
props:{
  category,
  products,
  slug
}
}

}