"use client";
import React, { useEffect, useState } from "react";
import UseCart from "../store/page";
import Image from "next/image";
import { Products } from "@/Types";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";


function Cart() {
  const cartItems = UseCart((state) => state.cartItems);
  const remove = UseCart((state) => state.removeFromCart);
  const [cart, setCart] = useState<Products[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(cartItems);
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight lg:my-6 lg:px-4">
        SHOPPING CART
      </h4>
      <div className="flex justify-evenly border-b-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Item
        </h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          size
        </h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          quantity
        </h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Price
        </h4>
      </div>
      {cart.map((product) => (
        <div className="flex  justify-around pt-5 ">
          <div className="flex flex-col lg:flex-row justify-start gap-x-4 lg:w-[300px] ">
            <Image src={product.image} className="w-32" alt="img"></Image>
            <p className="leading-7 [&:not(:first-child)]:mt-3 ">
              {product.title}
            </p>
          </div>
          <select className="flex justify-start h-[30px]">
          <option value="Small">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X Large">X Large</option>
          </select>
          <div className=" lg:flex-row flex flex-col">
            <button className="  bg-slate-200  px-5 font-bold lg:h-[30px]" >+</button>
            <span className="    bg-slate-400 px-5 font-bold lg:h-[20px]">1</span>
            <button className="  bg-slate-200  px-5 font-bold lg:h-[30px]">-</button>
          </div>
          <p className="font-bold">${product.price}</p>
          <button onClick={() => remove(product.id)} className="flex justify-stretch">
            <Trash2></Trash2>
          </button>
         
        </div>
      ))}
      <div className="flex flex-col pt-2 border-t-2 items-end bg-slate-100 p-10 lg:pr-16 w-full mt-10">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Order Summary
        </h4>
        <p className="leading-7 mt-3 font-bold">Total Items: ${cart.length}</p>
        <p className="leading-7 mt-3 font-bold">Sub Total : ${total}</p>
        <Button className="text-[1.1rem] mt-5 px-6 h-12 gap-2" >
          
          CheckOut
        </Button>
      </div>
    </div>
  );
}

export default Cart;
