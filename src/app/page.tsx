import Image from 'next/image'
import  Hero  from '@/views/Hero'
import Productlist from '@/views/Productlist'

export default function Home() {
  return (
    <div className='flex-col '>
      <Hero/>
      <div className='flex-col flex items-center py-16'>
        <p className='text-blue-700 font-semibold text-xl'>PRODUCTS</p>
        <h1 className='font-bold lg:text-3xl text-xl'>Checkout what we have</h1>
      </div>
      <Productlist/>
      
    </div>
  )
}
