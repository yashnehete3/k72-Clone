'use client'
import React from 'react'
import Stairs from '../stairs/page'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {useRef} from 'react'
function page() {
    const pageref = useRef(null);
     useGSAP(function(){
    const t1 = gsap.timeline();
    t1.to(pageref.current,{
      scale:1.2,
      duration:0.7,
      ease:'power3.inOut'
    });
    t1.to(pageref.current,{
      scale:1,
      duration:0.7,
      ease:'power4.out'
    })
  })


const projects = [{
        image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    }, {
        image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    }, {
        image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    }]



  return (
    <div ref={pageref} className= 'h-lvh bg-white text-black'>
        <Stairs/>
     <div className='flex absolute top-[15vw] z-10'>
      <h1 className='font-bold text-[8vw] '>WORK</h1>
         <div className='bold text-[2vw] mt-9 '>17</div>
     </div>
     <div className='absolute top-[25vw] bg-white'>
        {projects.map((elem:any,idx:any)=>(
            <div key={idx} >
                <div className='flex gap-4'>
                    <div className='relative group mb-4 w-11/12 object-cover  rounded-3xl hover:rounded-[70px]'><img  className ='hover:rounded-3xl duration-300 hover:scale-104 transition-all  hover:opacity-50' src={elem.image1} alt="" /> 
                    <button className='flex absolute
      top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/2
      opacity-0
      group-hover:opacity-100
      transition-all duration-300
      text-white text-6xl border-2
      px-50 py-3 rounded-full hover:text-green-400 hover:border-green-400'>View Project</button></div>
                    <div className='relative group mb-4 w-11/12 object-cover  rounded-3xl hover:rounded-[70px]'><img className ='hover:rounded-3xl duration-300 hover:scale-104 transition-all  hover:opacity-50' src={elem.image2} alt="" />
                     <button className='flex absolute
      top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/2
      opacity-0
      group-hover:opacity-100
      transition-all duration-300
      text-white text-6xl border-2
      px-50 py-3 rounded-full hover:text-green-400 hover:border-green-400'>View Project</button>
                    </div>
                    
                </div>

            </div>

        ))}
     </div>
    </div>
  )
}

export default page
