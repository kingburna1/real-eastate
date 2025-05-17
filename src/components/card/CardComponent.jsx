   "use client"
import { Properties } from '@/data/properties';
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';



export default function CardComponent({property}) {
   
    
    const [imageError, setImageError] = useState(false);
    const rate = (property ?.review_scores_rating *5) /100;
    if (!property?. xl_picture_url || imageError) return null;

    const customSlug = property.name.toLowerCase().split(" ").join("-") 
    
    return (
        <div className='relative flex flex-col w-[290px] h-[400px] rounded-4xl'>
            {/* image area */}
                <Link href={`/properties/${customSlug}`} className='w-full h-[70%] rounded-3xl bg-white'>
                    <img src={property?.xl_picture_url}
                     alt='image' 
                     className='rounded-3xl w-full h-full object-cover'
                     onError={()=> setImageError(true)}
                     
                     />
                </Link>
            {/* image end area */}

             <div className="flex-col px-2 mt-3">
            <div className='flex justify-between w-full '>
                <h3>{property?.name.slice(0,25)}...</h3>
                <h3 className="text-primary font-bold flex gap-1 items-center"> <Star size={20}/>{rate}</h3>



            </div>

            <div className=' flex-col'>
                <h3 className="text-gray-500 text-sm">{property?.smart_location}</h3>
                <h3 className="text-primary font-bold">${property?.price} for a night</h3>

            </div>

            </div>

            <div className="absolute top-4 left-60  transition-transform duration-300 ease-in-out hover:scale-120">
                <Heart fill='gray' fillOpacity={0.5} color='white'/>
            </div>


        </div>
    )
}