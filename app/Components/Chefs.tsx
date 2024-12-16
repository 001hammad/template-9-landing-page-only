import { Great_Vibes } from "next/font/google";
import React from "react";
import Image from "next/image";
import { Inter } from 'next/font/google';

const InterFont = Inter({subsets:['latin']})
// Importing the Great_Vibes font from Google Fonts
const VibeFont = Great_Vibes({subsets:['latin'], weight:['400']})

function Chefs() {
    const chefs = [
        { name: "Tahmina Rumi", role: "Chef", image: "/chef1.png" },
        { name: "Jorina Begum", role: "Chef", image: "/chef2.png" },
        { name: "M. Mohammad", role: "Chef", image: "/chef3.png" },
        { name: "Munna Kathy", role: "Chef", image: "/chef4.png" },
      ];
  return (
    // Section for the chefs with background image and padding
    <div>
    <section className='w-full md:mt-[700px] bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        {/* Container for the content, flex centered */}
        <div className='flex flex-col items-center'>
          {/* Title with VibeFont styling */}
          <h1 className={` ${VibeFont.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#FF9F0D] font-bold text-center mb-4 sm:mb-6`}>
            Chefs
          </h1>
          {/* Subheading with styling for the 'Meet our Chef' section */}
          <div className='text-base font-bold  text-white sm:text-lg md:text-[48px] flex gap-2 text-center justify-center'>
           <p><span className='text-[#FF9F0D]'>Me</span>et our Chef</p>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="md:mt-[5px] md:px-32">
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-purple-600"
          >
            {/* Chef Image */}
            <div className="relative flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-t-lg"
              />
              {/* Name and Role Overlay */}
              <div className="absolute bottom-0 left-0 w-[200px] bg-white p-4 text-black">
                <h3 className="text-sm font-bold">{chef.name}</h3>
                <p className="text-xs">{chef.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Single "See More" Button */}
      <div className="flex justify-center mt-6">
        <button className={` ${InterFont.className} px-[30px] py-3  rounded-[25px] border-[1px] border-[#FF9F0D] text-white text-lg   focus:outline-none`}>
          See More
        </button>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Chefs;
