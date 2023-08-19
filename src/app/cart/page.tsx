"use client"
import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "@/store/cartSlice";
import { AppDispatch, RootState } from "@/store/store";

function Cart() {
  const cart :any= useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const total = cart.reduce((acc: number, product: any) => acc + product.price, 0);

  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight lg:my-6 lg:px-4">
        SHOPPING CART
      </h4>
      <div className="flex justify-evenly border-b-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Item</h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">size</h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">quantity</h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Price</h4>
      </div>
      {cart.length === 0 ? (
        <div className="flex justify-center item-center py-6 text-red-700 flex-wrap">
          <h4 className="scroll-m-20 lg:text-3xl text-2xl font-semibold tracking-tight lg:my-6 lg:px-4">
        Cart  is  Empty
      </h4></div>
      ) : (
        cart.map((product: any) => (
          <div className="flex justify-around pt-5" key={product.id}>
            <div className="flex flex-col lg:flex-row justify-start gap-x-4 lg:w-[300px]">
              <Image src={product.image} className="w-32" alt="img" />
              <p className="leading-7 [&:not(:first-child)]:mt-3">{product.title}</p>
            </div>
            <select className="flex justify-start h-[30px]">
              <option value="Small">Select</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X Large">X Large</option>
            </select>
            <div className="lg:flex-row flex flex-col">
              <button className="bg-slate-200 px-5 font-bold lg:h-[30px]">+</button>
              <span className="bg-slate-400 px-5 font-bold lg:h-[20px]">1</span>
              <button className="bg-slate-200 px-5 font-bold lg:h-[30px]">-</button>
            </div>
            <p className="font-bold">${product.price}</p>
            <button className="flex justify-stretch" onClick={() => handleRemove(product.id)}>
              <Trash2 />
            </button>
          </div>
        ))
      )}
      <div className="flex flex-col pt-2 border-t-2 items-end bg-slate-100 p-10 lg:pr-16 w-full mt-10">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Order Summary</h4>
        <p className="leading-7 mt-3 font-bold">Total Items: {cart.length}</p>
        <p className="leading-7 mt-3 font-bold">Sub Total: {total}</p>
        <Button className="text-[1.1rem] mt-5 px-6 h-12 gap-2">CheckOut</Button>
      </div>
    </div>
  );
}

export default Cart;
