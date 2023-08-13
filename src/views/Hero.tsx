import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {  ShoppingCart } from "lucide-react";
import Image from "next/image";
import HeroPoster from "/public/pic2.png"
import Link from "next/link";
import Logo1 from "public/Featured2.webp"
import Logo2 from "public/Featured1.webp"
import Logo3 from "public/Featured3.webp"
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-10">
      <div className="flex-1  lg:pt-36">
        <Badge className= "text-[1.2rem] bg-blue-200 rounded-lg px-6 text-blue-800">Sale 50% </Badge>
        <h1 className="mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to Garments Galaxy, where fashion meets limitless
          possibilities.
        </h1>{" "}
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Step into a world of boundless fashion choices, where quality
          craftsmanship and exceptional style converge. Discover the perfect
          pieces that resonate with your spirit and reflect your distinct charm
        </p>
        <Link href="/Allproducts">
        <Button className="text-[1.1rem] mt-5 px-6 h-12 gap-2"> 
          <ShoppingCart /> Start Shopping
        </Button>
        </Link>
        <div className="flex lg:pl-48 lg:pt-48 pt-16 gap-10 flex-wrap">
        <Image src={Logo2} alt="B"></Image>
        <Image src={Logo1} alt="B"></Image>
        <Image src={Logo3} alt="B"></Image>
        </div>
      </div>
      <div className="flex-1">
        
        <Image src={HeroPoster} alt="hero"></Image>
      </div>
    </div>
  );
};

export default Hero;
