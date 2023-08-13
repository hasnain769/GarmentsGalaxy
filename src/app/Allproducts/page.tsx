"use client"
import React from 'react'
import ProductCard from '@/components/ProductCard'
import { AllProducts } from '@/components/AllProducts'
export  default function page  () {
   const p=AllProducts;
    return ( 
        <div className='flex justify-around flex-wrap'>
          
          {
            
            p.map((item)=>(
              <ProductCard key={item.id}title={item.title} price={item.price} img={item.image} id={item.id} catagory={item.catagory as string}/>
    
            ))
          }
            
            
        </div>
      )
  
}
