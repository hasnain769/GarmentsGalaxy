import React from 'react'
import ProductCard from '@/components/ProductCard'

import { AllProducts } from '@/components/AllProducts'

export default function Productlist() {
  const heroproducts=AllProducts.slice(0,3)
  return (
    <div className='flex justify-around flex-wrap'>
      {
        heroproducts.map((item)=>(
          <ProductCard key={item.id}title={item.title} price={item.price} img={item.image} id={item.id} catagory={item.catagory as string}/>

        ))
      }
        
        
    </div>
  )
}
