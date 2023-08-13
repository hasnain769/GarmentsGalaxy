
import { StaticImageData } from 'next/image'
import  Image  from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function productCard(props:{title:string,price:number,img:StaticImageData,id:number,catagory:string}) {
  
  return (
    <div className=" w-[55vh] lg:hover:w-[60vh] py-5">
      <Link href={`/catagory/${props.catagory}/${props.id}`}>
        <Image src={props.img} alt="image" className=''/>
        <h3 className=' font-bold'>{props.title}</h3>
        <p className='flex text-lg'>${props.price}</p>
        </Link>
        
        
    </div>
    
  )
}
