"use client"
"use client"
import React, { useState , useEffect} from 'react';
import Image from 'next/image';
import logo from '/public/GarmentGalaxy1.png';
import Link from 'next/link';
import { ShoppingBag, AlignJustify, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Header = () => {
  const value :any =useSelector((state :RootState)=>state.cart)
  
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:px-8 lg:py-4 p-3 flex items-center justify-between flex-wrap border-b-2 lg:border-b-0 lg:mb-3 mb-10">
      <Link href="/">
        <Image src={logo} alt="GG" className="lg:w-[4.6rem] w-16" />
      </Link>
      <div className="lg:hidden ">
        <button
          onClick={toggleMenu}
          className="px-2 py-1 rounded-md bg-gray-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <AlignJustify className="w-6 h-6 " />}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? 'flex  gap-x-6 justify-center' : 'hidden'
        } lg:flex lg:flex-row lg:gap-x-10 text-xs lg:text-lg mt-4 lg:mt-0 ml-auto pr-3`}
      >
        <li>
          <Link href="/catagory/female">Female</Link>
        </li>
        <li>
          <Link href="/catagory/male">Male</Link>
        </li>
        <li>
          <Link href="/catagory/kids">Kids</Link>
        </li>
        <li>
          <Link href="/Allproducts">All Products</Link>
        </li>
        <li>
        <Link href="/cart">
          <div className="    rounded-full p-2 flex flex-col mt-[-4px]">
            <ShoppingBag className="w-10 h-9 " /> 
            <p className='ml-4 text-white font-bold mt-[-16px]   text-[1rem] lg:px-[0.6rem] lg:py-[0.01rem] p-[0.2rem] px-2 bg-emerald-400	 rounded-full'>{value.length}</p>
          </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
