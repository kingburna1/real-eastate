"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import CardComponent from "@/components/card/CardComponent";
import { Properties } from './../data/properties';
import SkeletonCardComponent from "@/components/skeletonCard/SkeletonCardComponent";


export default function Home() {
  const [isCardPresent, setIsCardPresent] = useState(false);
  
  useEffect(() =>{
    setTimeout(() => setIsCardPresent(true),3000 )
  },[] )


  return (
    <div className="flex flex-wrap gap-4 justify-center h-fit w-full px-4 pt-[19rem] bg-background">
      {Properties ?.map((item, index) => isCardPresent ? <CardComponent key={item.id} property={item} /> : <SkeletonCardComponent key={index} />)}
      {/* {Properties ?.map((item, index) => <CardComponent key={item.id} property={item} />)} */}
    </div>
  );
}