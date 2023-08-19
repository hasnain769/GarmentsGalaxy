"use client"
import { AllProducts } from "@/components/AllProducts";
import Image, { StaticImageData } from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { add } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
function productsbycatagory(id: number) {
  return AllProducts.filter((product) => product.id == id);

}



export default function Page({ params }: { params: { id: number } }) {
  const result = productsbycatagory(params.id);
  const dispatch=useDispatch<AppDispatch>()
  const handleadd=(product:any)=>{
       dispatch(add(product)) 
  }

  return (
    <div className="flex items-center mt-16 justify-evenly h-[100%] ">
      {}
      {result.map((product) => (
        <div className="flex flex-col lg:flex-row items-center justify-between py-6" key={product.id}>
          <div className="lg:w-[45vh] w-auto">
            <Image src={product.image as StaticImageData} alt={product.title as string} />
          </div>
          <div className="flex flex-col flex-wrap px-7">
            <h1 className="font-bold">Name : {product.title}</h1>
            <h2 className="font-bold">Price :${product.price}</h2>
            
            <p className="text-xl">Description :Actual Fabric Style & Color May Be Slightly Differ </p>
            <Button className="text-[1.1rem] mt-5 px-6 h-12 gap-2" onClick={()=>handleadd(product)}>
          
          <ShoppingCart /> Add to Cart
        </Button>

          </div>
        </div>
      ))}
    </div>
  );
}

 

 

 



