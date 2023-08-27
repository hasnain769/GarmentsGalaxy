import Image from "next/image";
import React from "react";
import logo from "/public/GarmentGalaxy1.png";
import Link from "next/link";
import { Facebook ,Instagram ,Bird } from 'lucide-react';
//footer
export const Footer = () => {
  return (
    <footer className="pt-32 flex flex-col flex-wrap">
      <div className="flex flex-wrap justify-around lg:pl-48 ">
        <div className="flex flex-col flex-wrap justify-center lg:pr-16 ">
          <Image src={logo} alt="logo" className="lg:w-24 w-16 lg:pl-4" />

          
          <div className="flex gap-x-5 pt-3 ">
            <Instagram/><Bird/><Facebook/>
          </div>
        </div>
        <div className="flex flex-col w-[25%] justify-center  flex-wrap">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Company
          </h4>
          <Link href="#">
            <h1 className="pt-8">About Us</h1>
          </Link>
          <Link href="#">
            <h1 className="">Terms of Use</h1>
          </Link>
          <Link href="#">
            <h1 className="">Privacy Policy</h1>
          </Link>
        </div>
        <div className="flex flex-col w-[25%] justify-center  flex-wrap">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Support
          </h4>
          <Link href="#">
            <h1 className="pt-8">Support Carrer</h1>
          </Link>
          <Link href="#">
            <h1 className="">24h Service</h1>
          </Link>
          <Link href="#">
            <h1 className="">Quick Chat</h1>
          </Link>
            
        </div>
        <div className="flex flex-col w-[25%] justify-center flex-wrap ">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Contacts
          </h4>
          <Link href="#">
            <h1 className="pt-8">Whatsapp</h1>
          </Link>
          <Link href="#">
            <h1 className="">Support 24h</h1>
          </Link>
          

        </div>
      </div>
      <div className="flex justify-around border-t-2 border-black	0 font-bold  py-4 mt-4 flex-wrap-reverse" >
        <p>© Copyright 2023 by ICPA (GarmentGalaxy). All Rights Reserved.</p>
        <h1>Coded by Syed Hasnain</h1>
      </div>
    </footer>
  );
};
