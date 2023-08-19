import { AllProducts } from "@/components/AllProducts"
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
 function productsbycatagory(catagory:string){
    return AllProducts.filter((product)=>product.catagory==catagory)

}
export default function Page({params}:{params:{slugs:string}}) {
  const result=productsbycatagory(params.slugs);
 

  return <div className='flex justify-around flex-wrap'>
  
      {
        result.map((item , key=item.id)=>(
          <ProductCard key={item.id}title={item.title} price={item.price} img={item.image} id={item.id} catagory={ item.catagory as string}/>

        ))
      }
        
        
    </div>
  
}

