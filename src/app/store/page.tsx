import { create } from 'zustand';
import { Products } from '@/Types';
import { StaticImageData } from 'next/image';
import { persist } from 'zustand/middleware';

type Cart = {
  cartValue: number;
  cartItems: Products[];
  addToCart: (id: number, title: string, price: number, image: StaticImageData) => void;
  removeFromCart: (id: number) => void;
}

const UseCart = create<Cart>()(
  persist(
    (set) => ({
      cartValue: 0,
      cartItems: [],
      addToCart: (id: number, title: string, price: number, image: StaticImageData) => {
        set((state) => ({
          cartItems: [
            ...state.cartItems,
            {
              id,
              title,
              price,
              image,
            },
          ],
          cartValue: state.cartItems.length + 1, // Assigning the index (length + 1) of cartItems to cartValue
        }));
      },
      removeFromCart: (id: number) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
          cartValue: state.cartItems.length - 1, // Updating cartValue after removing an item
        }));
      },
    }),
    { name: 'global' ,   
    getStorage:()=>localStorage } // Optional identifier for the persisted state
  )
);

export default UseCart;
