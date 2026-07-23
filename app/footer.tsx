'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
function footer() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const pageref = useRef(null);
    const handleNavigation = () => {
  setIsTransitioning(true);
  setTimeout(() => {
    router.push('/work');
  }, 1500); // same as stairs duration
};


  const router = useRouter();
  return (
    <div ref={pageref} className='flex flex-wrap gap-5 justify-center mb-10  '>
      <button className='font-bold px-10 text-[110px] leading-none  border-white border-2 rounded-[80px]
      hover:text-yellow-300 hover:border-yellow-300 ' onClick ={()=>handleNavigation()} >WORK</button>
      <button className='font-bold relative px-10 text-[110px] leading-none border-white border-2 rounded-[80px]      
        hover:text-yellow-300 hover:border-yellow-300' onClick ={()=>router.push('/agency') }>AGENCY</button>
    </div>
  )
}

export default footer
