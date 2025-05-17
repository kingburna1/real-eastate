import { ChevronRight, Globe, Facebook,Twitter,Instagram } from 'lucide-react';
import React from 'react';

const FooterComponent = () => {
  return (
    <div className="bg-gray-100/5 px-5">
      <div>
         <div className="px-11 py-5">
         <ul className="flex gap-1">
            <li className="flex gap-1 align-center">Airbnb  <ChevronRight strokeWidth={1.25} /></li>
            <li className="flex gap-1 align-center">France <ChevronRight strokeWidth={1.25} /></li>
            <li>Seine</li>
            
          </ul>


         </div>

         <hr className="text-gray-400"/>



         <div className="grid grid-cols-1 md:grid md:grid-col-3 lg:grid lg:grid-cols-3 py-20 ">
          <ul  className="flex flex-col gap-3">
            <li className="font-bold">Support</li>
            <li className="hover:underline cursor-pointer"> Help Center</li>
            <li className="hover:underline cursor-pointer"> AirCover</li>
            <li className="hover:underline cursor-pointer">Anti-discrimination</li>
            <li className="hover:underline cursor-pointer">Disability support</li>
            <li className="hover:underline cursor-pointer">Cancellation options</li>
            <li className="hover:underline cursor-pointer">Report neighborhood concern</li>
            
          </ul>

          <ul  className="flex flex-col gap-3">
            <li className="font-bold">Hosting</li>
            <li className="hover:underline cursor-pointer">Airbnb your home</li>
            <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
            <li className="hover:underline cursor-pointer">Hosting resources</li>
            <li className="hover:underline cursor-pointer">Community forum</li>
            <li className="hover:underline cursor-pointer">Hosting responsibly</li>
            <li className="hover:underline cursor-pointer"> Join a free Hosting class</li>
            <li className="hover:underline cursor-pointer">Find a co-host</li>
          
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="font-bold">Airbnb</li>
            <li className="hover:underline cursor-pointer">2025 Summer Release</li>
            <li className="hover:underline cursor-pointer">Newsroom</li>
            <li className="hover:underline cursor-pointer">New features</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Investors</li>
            <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
            
          </ul>
         </div>
         <hr className="text-gray-400"/>

         <div className="flex justify-between py-6">
          <ul className="flex gap-3 flex-wrap">
            <li>© 2025 Airbnb, Inc.</li>
            <li>· Terms</li>
            <li>· Sitemap</li>
            <li>· Privacy</li>
            <li>· Your Privacy Choices </li>
          </ul>


          <ul className="flex gap-3 flex-wrap"> 
            <li className="flex gap-1 flex-wrap font-bold"> <Globe /> ENGLISH (US)</li>
            <li className=" font-bold">$ USD</li>
            <li><Facebook /></li>
            <li><Twitter strokeWidth={1.25} /></li>
            <li><Instagram strokeWidth={1.25} /></li>
          </ul>
         </div>
      </div>
      
    </div>
  );
}

export default FooterComponent;
