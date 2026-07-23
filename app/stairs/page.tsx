'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
  type stairprops = {
    onComplete:()=>void;
  }
function stairs() {
    
    const tl = gsap.timeline()
    const openingAnime = useRef(null);
    useGSAP(function(){
        tl.from('.stair',{
            height:0,
            stagger:{
                amount:-0.25

            }
            

        })
        tl.to('.stair',{
            y:'100%',
            stagger:{
                amount:-0.25
            }

        })
        tl.to(openingAnime.current,{
            display:'none'
        })
    })
  return (
       <div ref={openingAnime} className='z-9999 h-screen w-full flex fixed top-0'>
        <div className='stair h-full w-1/7 flex bg-black'></div>
        <div className='stair h-full w-1/7 flex bg-white'></div>
        <div className='stair h-full w-1/7 flex bg-black'></div>
        <div className='stair h-full w-1/7 flex bg-white'></div>
        <div className='stair h-full w-1/7 flex bg-black'></div>
        <div className='stair h-full w-1/7 flex bg-white'></div>
        <div className='stair h-full w-1/7 flex bg-black'></div>
        <div className='stair h-full w-1/7 flex bg-white'></div>
        <div className='stair h-full w-1/7 flex bg-black'></div>
        <div className='stair h-full w-1/7 flex bg-white'></div>
        <div className='stair h-full w-1/7 flex bg-black'></div>
        <div className='stair h-full w-1/7 flex bg-white'></div>
        <div className='stair h-full w-1/7 flex bg-black'></div>
        <div className='stair h-full w-1/7 flex bg-white'></div>
        <div className='stair h-full w-1/7 flex bg-black'></div>    
      </div>
  )
}

export default stairs
