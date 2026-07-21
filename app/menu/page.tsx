'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import {useRef} from 'react'  

function page() {
  const movingAnime = useRef(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  useGSAP(function(){
    tweenRef.current = gsap.to(movingAnime.current, {
          xPercent:-30,
          duration:10,
          repeat:-1,
          ease:'none',
          paused:true
    })
  })
  return (
    <div className='bg-black'>
        
         <div  className='flex group relative h-[20vw] overflow-hidden' onMouseEnter={()=>tweenRef.current?.play()} onMouseLeave={()=> tweenRef.current?.pause(0)}>
          <h1 className='w-full text-center text-white  absolute top-[8.5vw] text-9xl border-b-2 border-t-2 font-bold'>WORK</h1>
          <div ref = {movingAnime} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-green-400 top-33 whitespace-nowrap h-32 w-max
    ">
                   <div ref = {movingAnime} className='flex whitespace-nowrap items-center'>
                     <div  className='flex whitespace-nowrap h-30 top-34'>
            <h1 className='whitespace-nowrap font-bold text-9xl text-black'>SEE EVERYTHING</h1>
            <img className='rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            <h1 className=' whitespace-nowrap text-9xl font-bold text-black'>SEE EVERYTHING</h1>
            <img className='flex m rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          </div>
           <div className='flex whitespace-nowrap h-30 top-34'>
            <h1 className='whitespace-nowrap text-9xl font-bold text-black'>SEE EVERYTHING</h1>
            <img className='rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            <h1 className='whitespace-nowrap text-9xl ml-auto font-bold text-black'>SEE EVERYTHING</h1>
            <img className='rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          </div>
          <div className='flex whitespace-nowrap h-30 top-34'>
            <h1 className='whitespace-nowrap text-9xl font-bold text-black'>SEE EVERYTHING</h1>
            <img className='rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            <h1 className='whitespace-nowrap text-9xl ml-auto font-bold text-black'>SEE EVERYTHING</h1>
            <img className='rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          </div>
          <div className='flex whitespace-nowrap h-30 top-34'>
            <h1 className='whitespace-nowrap text-9xl font-bold text-black'>SEE EVERYTHING</h1>
            <img className='rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            <h1 className='whitespace-nowrap text-9xl ml-auto font-bold text-black'>SEE EVERYTHING</h1>
            <img className='rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          </div>
                   </div>
          </div>
         </div>
             <div className='flex'>
            <h1 className='w-full text-center text-white  absolute top-[16.5vw] text-9xl border-b-2 font-bold'>AGENCY</h1>
            {/* <div className='flex'>
                      <div>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
            <div>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
            </div> */}
         </div>
             <div className='flex'>
          <h1 className='w-full text-center text-white  absolute top-[24.5vw] text-9xl border-b-2 font-bold'>CONTACT</h1>
          {/* <div className='flex'>
                    <div>
            <h1>SEE EVERYTHING</h1>
            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            <h1>SEE EVERYTHING</h1>
            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          </div>
           <div>
            <h1>SEE EVERYTHING</h1>
            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            <h1>SEE EVERYTHING</h1>
            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          </div>
          </div> */}
         </div>

    </div>
  )
}

export default page

