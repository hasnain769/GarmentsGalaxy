import { StaticImageData } from "next/image"

export  type Products=
    {
        id:number,
        title:string,
        price:number,
        catagory?:string
        image:StaticImageData
    }

 export   type Cart = {
        cartValue: number;
        cartItems: Products[];
        addToCart: (id: number, title: string, price: number, image: StaticImageData) => void;
        removeFromCart: (id: number) => void;
      }    
