
import { NavbarComponent } from '@/components/navbar/NavbarComponent';
import { Properties } from '@/data/properties';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Share, Heart, LoaderPinwheel, Layers2, PictureInPicture, ServerOff, ClipboardCheck, BriefcaseBusiness, ShipWheel, LightbulbOff, Clock3, ChevronRight  } from 'lucide-react'
// import { Share, Heart, LoaderPinwheel, Layers2, PictureInPicture, ServerOff,   } from 'lucide-react'
import React from 'react';


export async function generateMetadata({ params }) {
  const {slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  let  property = Properties?.find((item) => item.name.toLowerCase().split(' ').join('-') === decodedSlug)

  if (!property) {
    return {
      title: "property Not Found",
    };
  }

  return {
    title: `${property.name} - burna-made`,
    description: `Discover information about ${property.name}, including stats, types, and more.`,
    icons: {
      icon: property?.xl_picture_url,
      apple:property?.xl_picture_url,
      shortcut:property?.xl_picture_url,
    },
    openGraph: {
      title: `${property?.name} - burna-made`,
      description: `Explore detailed information about ${property?.name} in our modern PropertiesDex.`,
      url: `${property?.xl_picture_url}`,
      siteName: "burna-made",
      images: [
        {
          url: property?.xl_picture_url,
          width: 1200,
          height: 630,
          alt: `${property?.name} burna-made`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${property?.name} -burna-made`,
      description: `Explore ${property?.name} on burna-made powered by PropertiesAPI.`,
      images: [property?.xl_picture_url],
    },
  };
}









const page = async({params}) => {
    const {slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    let  property = Properties?.find((item) => item.name.toLowerCase().split(' ').join('-') === decodedSlug)
 
    
    
  return (

    






    <>
      <NavbarComponent/>
     <div className="px-10"> 
     <div>
     {/* intro path */}
       <div className='mt-[20rem] flex justify-between align-center  mx-11 mb-5'>

        <div>
        <h1 className="font-bold text-xl md:text-3xl  "> {property?.name}</h1>
        </div>
         

        <div className="flex flex-wrap justify-between gap-3 ">
          <div  className='flex gap-4 rounded-xl hover:bg-gray-200 p-2'>
          <Share strokeWidth={1} />
          <h3 className="font-bold underline underline-offset-5">Share</h3>
         </div>
          
        

         <div className='flex gap-4 rounded-xl hover:bg-gray-200 p-2'>
         <Heart strokeWidth={1} />
         <h3 className="font-bold underline underline-offset-5">Save</h3>
        
        </div>
    </div>
      



       </div>
      {/* picture path */}
      
       
       <div>


       <div className=' grid grid-cols-1 md:grid md:grid-cols-2 gap-2 h-[100vh] px-10'>
            {/* property: {decodedSlug} */}

           <div>
             <img src={property?.xl_picture_url} alt="photo" className='rounded-l-3xl w-full h-full object-cover'/>
          </div>

          <div className="grid grid-cols-1 mb-20  md:grid md:grid-cols-2 gap-2 md:mb-0 h-full">
          <img src={property?.xl_picture_url} alt="photo" className="h-full object-cover" />
           <img className="rounded-tr-3xl h-full object-cover" src={property?.xl_picture_url} alt="photo" />
          <img src={property?.xl_picture_url} alt="photo" className="h-full object-cover"/>
           <img className="rounded-br-3xl h-full object-cover" src={property?.xl_picture_url} alt="photo" />
          </div>

       </div>
        
       </div>
      


     </div>
     {/* end path */}
    

    <div className="grid  grid-cols-1 md:grid md:grid-cols-2 mt-190 md:mt-6 px-11 gap-5" >
     {/* left  path */}

      <div className="w-full  mb-11">
        <div>
          <h3 className="font-bold text-lg md:text-xl">{property?.host_location}</h3>
            <p>Daytime experience</p>
           
        </div>
            <hr className="text-gray-200 my-10"/>
          
          <div className="flex flex-wrap gap-5 w-full mb-11">
          <div> <img className="w-10 h-10 rounded-full" src={property?.xl_picture_url}/></div>
          <div>
          <h3 className="font-bold text-xl md:text-2xl"> Hosted by {property?.host_name}</h3>
            <p>Daytime experience</p>
        </div>
          </div>
          <hr className="text-gray-200  my-10"/>

          <div className=" mt-15"> 

            <div className="flex flex-wrap gap-5 w-full mb-6">
                <div> <LoaderPinwheel strokeWidth={1} /></div>
               <div>
                  <h3 className="font-bold text-lg md:text-xl">Look cute in your Otaku Hottie OOTD</h3>
                  <p>Channel your prep and plaid in school fits inspired by my anime faves.</p>
             </div>
           </div>

             <div className="flex  flex-wrap gap-5 w-full mb-6">
                <div><Layers2 strokeWidth={1} /></div>
               <div>
                  <h3 className="font-bold text-lg md:text-xl">Take the heat in my floor-is-lava course</h3>
                  <p>Real hotties can, can you? Find hidden treasure without hitting the ground.</p>
             </div>
           </div>

             <div className="flex flex-wrap gap-5 w-full mb-6">
                <div><PictureInPicture strokeWidth={1} /></div>
               <div>
                  <h3 className="font-bold text-lg md:text-xl">Battle in a video game competition</h3>
                  <p>Win, and you get to face me, because you KNOW I’m the final boss.</p>
             </div>
           </div>

             <div className="flex flex-wrap gap-5 w-full mb-6">
                <div><ServerOff size={28} strokeWidth={1} /></div>
               <div>
                  <h3 className="font-bold text-lg md:text-xl">Lock in and get that bag</h3>
                  <p>Everyone leaves with a gift bag, okay? But some are heavier than others…</p>
             </div>
           </div>


           <div>
            <p className=" py-5  text-xs md:text-xl"> •You know I love a good cosplay moment. My passion for anime has always been front and center, even in my music. It’s more than entertainment, it’s a way to express different sides of myself, shape-shifting into whoever I want to be—and I want that for you, too! But to activate your inner Otaku, you gotta earn it. Complete my Otaku Hottie quest to unlock a whole new persona.</p>
            <p className=" py-5 text-xs md:text-xl"> •What you'll do
            Welcome to the Otakuverse, a dimension I created where your Otaku Hottie journey officially begins. Everyone starts with an empty quest bracelet. If you bring the right energy and serve the best looks, you’ll collect charms along the way.</p>
            <p  className=" py-5 text-xs md:text-xl">•I’ll be your senpai and official hype-hottie, awarding special charms needed to level up your Otaku Hottie-status—like a stallion charm awarded for strength or a booty charm earned for dancing. My trusty butler, a.k.a. my right-hand woman, will be running the show behind the scenes, ensuring everything is up to THEE highest standards.</p>
            <p className=" py-5 text-xs md:text-xl">• When you arrive, the butler will greet you with a letter from me to set the tone and keep you company before the official Otaku Hottie Quest kicks off.</p>
            <p className=" py-5 text-xs md:text-xl">• Head over to the locker room, where you’ll find everything needed to create a classic preppy anime school kid fit—blazers, pleated skirts, face gems, you name it. The harder you serve, the more prizes you earn.</p>
            <p className=" py-5 text-xs md:text-xl">• Hope you stretched, ‘cause the Hottie Lava Lounge is bringing the heat. I created my own floor-is-lava course where you’ll split into teams to snatch as many hidden treasure chests as possible. But it’s not just about speed. Extra charms will be given for style.</p>
            <p className=" py-5 text-xs md:text-xl">• Your next challenge is a 1-on-1 Mortal Kombat 1 competition on Xbox against the other Otaku Hotties-to-be. Don’t worry, your fate won’t play out like in my BOA music video. Fuel up with peach gummies, spicy snacks, and other Japanese treats, because you’ll have to beat me for a special charm. Good luck (you’ll need it).</p>
            <p className=" py-5 text-xs md:text-xl">• I’m a full-time Otaku Hottie and part-time foodie. Lucky for you, I’m sharing my highly-sought after ramen recipe. You’re welcome! Hit the toppings bar to load up on all my favorite ingredients and spices. Go big with the heat for an extra charm if you think you can handle it.</p>
            <p className=" py-5 text-xs md:text-xl">• Meet me at the bar for a premium pour of Chicas Divertidas, a smooth and sultry tequila by yours truly. We’re doing this mamushi style—with a chaser of snake venom. If tequila’s not your style, don’t worry, I’ve got a Meg-approved mocktail you’ll love.</p>
            <p className=" py-5 text-xs md:text-xl">• Before you leave, I’ve got one last surprise. The butler will guide you back to the locker room, where you’ll find a secret loot box in your locker. Oh, and from one cosplayer to another, your costumes are yours to keep.</p>
            </div>
            <hr className="text-gray-200 my-10"/>

              <div>
                <h2 className=" text0-lg md:text-2xl font-bold">Meet your host</h2>
                <div className="">
          <div className=" relative w-[310px] h-[300px] md:w-[500px] md:h-[300px] shadow-[0_0_50px_rgba(0,0,0,0.2)] rounded-2xl border border-gray-100 flex flex-col justify-center align-center p-5">
            <div className="flex justify-center align-center">
           <img className="w-25 h-25 rounded-full flex items-center" src={property?.xl_picture_url} />
           </div>
           <div className='bg-red-400 h-8 w-8 flex items-center justify-center rounded-full text-white absolute left-45 md:absolute md:left-65'><IoShieldCheckmarkSharp size={18}/></div>
           <p className="flex justify-center align-center  text-4xl mb-2">{property?.host_name}</p>
           <p className='text-center text-gray-400'> started hosting in {property?.host_since}</p>
           </div>

            </div>
             {/* order icons */}

            <div className="mt-6">
               
            <div className="flex gap-5 w-full mb-6">
                <div><BriefcaseBusiness size={28} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-lg md:text-xl">My work: Music maven & mogul</h3>
                 </div>
           </div>

           <div className="flex gap-5 w-full mb-6">
                <div><Clock3 size={28} strokeWidth={1} /></div>
               <div>
                  <h3 className=" text-xl">I spend too much time: Watching anime fight scenes</h3>
                 </div>
           </div>

           <div className="flex gap-5 w-full mb-6">
                <div><LightbulbOff size={28} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-lg md:text-xl">Fun fact: I prefer dubbed over subbed (sorry)</h3>
                 </div>
           </div>

           <div className="flex gap-5 w-full mb-6">
                <div><Heart size={28} strokeWidth={1} /></div>
               <div>
                  <h3 className="text-lg md:text-xl">I'm obsessed with: Traveling! I love new adventures</h3>
                 </div>
           </div>

           <div className="flex gap-5 w-full mb-6">
                <div><ShipWheel size={28} strokeWidth={1} /></div>
               <div>
                  <h3 className=" text-xl">Pets: 4oe, Dos, Oneita, 5ive, Six, X</h3>
                 </div>
           </div>

           <p>
           What’s up, Hotties! It’s ya girl Megan Thee Stallion, a.k.a. Thee Hot Girl Coach, a.k.a. Thee Otaku Hot Girl. My pen and looks are unmatched, but so are my Hotties! Though I stay busy making moves in the studio, on set, and behind the scenes, encouraging the Hotties to be who they wanna be is what matters most to me!
           </p>


            </div>
                  

            </div>

            
         </div>



      </div>
      {/* right path */}
      <div className="flex justify-center align-center ">
          <div className=" w-[400px] h-[200px] shadow-[0_0_50px_rgba(0,0,0,0.2)] rounded-2xl border border-gray-100 flex flex-col justify-center align-center p-5">
           <p className="flex justify-center align-center  font-bold text-xl mb-5"> $0 per guest</p>
           <p className="flex justify-center align-center  text-2xl mb-2"> close june 2025</p>
           <button className="w-full bg-red-400 rounded-2xl p-3 text-white font-bold  ">Request</button>

            </div>

            </div>




    </div>
    <hr className="text-gray-400 my-10"/>

       <div className="mt-11 ">
        <h3  className=" text-lg md:text-2xl py-5 font-bold" >Where you’ll be</h3>
        <p className="mb-5">{property?.host_location}</p>

        <div class="w-full h-96 ">
      <iframe
       className="w-full h-full rounded-xl shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18539.959396730537!2d13.356682713038028!3d52.51723614355185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2scm!4v1747424742129!5m2!1sen!2scm"
       loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
       </iframe>
    </div>
        <h2 className="text-lg md:text-2xl font-bold mt-5">Neighborhood highlights</h2>
        <p>The Otakuverse is my domain—a dimension I’ve created for those brave enough to dive in. It’s a neon-lit plaza of storefronts, each revealing an aspect of my Otaku Hottie personality. That’s why everything is fire! Each room—from the Hottie Lava Lounge to the BOA Battlestation—will help you achieve Otaku Hottie greatness.</p>

       </div>
       <hr className="text-gray-400 my-10"/>
       
       <div>
        <h3 className="font-bold text-lg md:text-2xl mb-3 ">Things to know</h3>

        <div className='grid grid-cols-1   md:grid md:grid-cols-3 gap-5'>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">House rules</li>
            <li>Check-in after 3:00 PM</li>
            <li>Checkout before 12:00 PM</li>
            <li>2 guests maximum</li>
            <li className="font-bold underline underline-offset-5 flex gap-1 ">Show more <ChevronRight strokeWidth={1.25} /></li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li className="font-bold">Safety & property</li>
            <li>Exterior security cameras on property</li>
            <li>Carbon monoxide alarm</li>
            <li>Smoke alarm</li>
            <li  className="font-bold underline underline-offset-5 flex gap-1  ">Show more <span><ChevronRight strokeWidth={1.25} /></span></li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li className="font-bold">Cancellation policy</li>
            <li>Free cancellation before Nov 2. Cancel before check-in on Nov 7 for a partial refund.</li>
            <li>Review this Host's full policy for details.</li>
            <li>Review this Host's full policy for details.</li>
            
          </ul>
        </div>


       </div>


    
      </div>
    </>
  );
}

export default page;
