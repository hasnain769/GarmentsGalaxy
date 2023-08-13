import { StaticImageData } from "next/image"

export  type Products=
    {
        id:number,
        title:string,
        price:number,
        catagory?:string
        image:StaticImageData
    }
