"use client"
import React from 'react'
import   { Globe, Menu, User, Search, AlignCenterHorizontal, Filter, KeySquare } from 'lucide-react';
import  { useState, useEffect } from 'react';
import { categories } from '@/utils/constans';
import {  useRef } from 'react';
import Link from 'next/link'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import * as Icons from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"





import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from './ModeToggle';


export const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const carouselRef = useRef(null); // No type needed

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
  
    <>
    <div className='fixed z-50 w-full top-0  bg-background'>

        <div className='flex justify-center align-center p-4 md:hidden lg:hidden'>
        
    <div className=" w-full  border border-green-300 rounded-3xl flex justify-center items-center p-3 gap-3">
            <Search color="gray" size={20} />
            <input
                type="text"
                placeholder="start your search"
                name="where"
                id=""
              />
         </div>

         </div>

    <div className=" justify-between  items-center p-4 w-full h-fit  top-0  md:flex hidden border-b-1 border-gray-400">

      {/* top nav start */}

      <div className="flex justify-between   p-4 w-full h-fit ">
        <Link href="/" className="font-bold text-2xl "><img className="w-20 h-20" src="/logo22.png" alt="logo" /></Link>
        <div className="flex flex-col gap-5 items-center justify-center flex-1">
          {!isScrolled && (
            <ul className="flex items-center justify-center gap-5 cursor-pointer">
              <li className="font-bold">Homes</li>
              <li>Experiences</li>
            </ul>
          )}
          {/* searchbar */}

          <div

            className={`transition-all duration-300 ${
              isScrolled ? "w-[60%]" : "w-[95%]"
            } h-[70px]  ring ring-gray-400 shadow-lg rounded-full  flex p-2 items-center justify-between`}
          >  

              {!isScrolled ? (
            <div className="w-[20%] border-r-1 border-gray-400  ">
              <h3>Where</h3>
              <input
                type="text"
                placeholder="Search destinations"
                name="where"
                id=""
              />
            </div>
               ) : (
                <div className="w-[25%] border-r-1 border-gray-400 ">
                  <h3>Anywhere</h3>
                </div>
              )}

        {!isScrolled ? (
              <>
            <div className="w-[18%] border-r-1 border-gray-400">
              <h3>Check in</h3>
              <input
               className='w-fit'
                type="date"
                placeholder="Search destinations"
                name="where"
                id=""
              />
            </div>
            <div className="w-[19%] border-r-1 border-gray-400 ">
              <h3>Check Out</h3>
              <input
                type="date"
                placeholder="Search destinations"
                name="where"
                id=""
              />
            </div>
            </>
            ) : (
              <div className="w-[25%] border-r-1 border-gray-400 ">
                <h3>Any week</h3>
              </div>
            )}


            <div className="w-[15%] ">
            {!isScrolled && <h3>who</h3>}
              <input type="text" placeholder="Add guests" name="where" id="" />
            </div>
            <div className={` ${!isScrolled? 'w-[15%] h-[50px]': 'w-[50px] h-[50px] ml-5'}  bg-primary flex gap-2 items-center justify-center rounded-full cursor-pointer`}>
              <Search color="#fff" />
              {!isScrolled && <h1 className="text-white font-bold">Search</h1>}
             </div>
          </div>
          {/* searchbar end */}

        </div>
        <div className="flex gap-5    justify-between">
          <h2 className="text-xs">Airbnb your home</h2>
          <ModeToggle />
          <div className="flex justify-center transform translate-y-[-10px] items-center gap-4 rounded-2xl w-[200px] h-[50px] shadow-md cursor-pointer">
          <Menu />

           
            {/* user menu start */}
             <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <div className="rounded-full bg-gray-700 h-[40px] w-[40px] flex items-center justify-center">
      <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

            {/* user menu end */}

          </div>
        </div>
      </div>
      {/* top nav end */}
      
    </div>

    <div className=' w-[100%] px-5 flex h-25 justify-center items-center'>
      {/* carousel path */}
       <div className="w-[100%] p-4  md:w-[60%] ">
      <Carousel
      opts={{
        align: "start",
      }}
      className=" w-full "
    >
        
      <CarouselContent className="  gap-6 w-[100px] ">
      {categories.map(({ id, icon, name }) => {
        const Icon = Icons[icon.charAt(0).toUpperCase() + icon.slice(1)];
        return (
          <CarouselItem key={id} className="flex flex-col items-center min-w-[45px] text-center md:basis-1/2 lg:basis-1/3 ">
            {Icon && <Icon size={20} color="green" />}
            <span className="text-xs mt-1">{name}</span>
          </CarouselItem>
        );
      })}
    </CarouselContent>
    <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
            {/* carousel path */}
      <div className="w-[40%]  px-10  items-center hidden md:flex md:gap-5" >
        <div className=" h-10  gap-2 flex justify-center  items-center border hover:bg-gray-100 transition duration-300 ease-in-out p-2 rounded-2xl"> 
          <AlignCenterHorizontal/>
          
          <h4> fliters</h4>
        </div>
        <div className=" flex justify-center items-center  p-1"> 
          <img className="w-10 h-10" src="/ptag.png" alt="price tag" />
          
          <h4 className="font-bold">Price includes all fees </h4>
        </div>
      </div>
    </div>

    </div>
    </>
  );
};