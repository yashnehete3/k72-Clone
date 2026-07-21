'use client'
import React from 'react'
import Footer from './footer'
import {LayoutPanelTop} from 'lucide-react';
import {BrowserRouter} from 'react-router-dom'
import Stairs from './stairs/page';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {useRef} from 'react'
function landingPage() {
  const navbar = useRef(null);

  useGSAP(function(){
    gsap.from('.navbar',{
      pin:true
    })
  })
 
  return (
    <div className='min-h-screen relative'>
      {/* <div className='pointer-events-none'> */}
        <Stairs/>
      {/* </div> */}
      <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover' src='/videos/video.mp4'>
        
      </video>  
      <div className="absolute bg-black/40 flex" />
      <div className="relative z-10 justify-between">
        <div ref = {navbar} className='fixed top-0 left-0 w-full flex justify-between'>
          <svg xmlns="http://www.w3.org/2000/svg" width="115" height="55" viewBox="0 0 103 44" color='white' >
                      <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
        <button
  className="
  hover:bg-green-400 
  transition-all
  duration-300
  ease-in-out
  hover:translate-y-2
  rounded-bl-2xl
  bg-black
  text-white
  px-27
  py-3
  
  "
>
  <LayoutPanelTop/>
</button>
  </div>
      {/* <nav className='flex'>Home</nav> */}
    <main className=' text-center leading-none'>
        <div className='text-[150px] leading-none'> THE SPARK FOR</div>
        <div className='justify-center flex text-[150px] leading-none'>ALL 
          <div className=' mt-5 h-27.5 overflow-hidden w-55 object-cover rounded-full'> 
            <video autoPlay loop muted playsInline className='w-full h-full object-cover ' src="/videos/video.mp4"></video>
            </div>
          THINGS</div>
        <div className='text-[150px] leading-none'>CREATIVE
        </div>
    </main>
    <div className='justify-self-stretch w-80 ml-auto mb-10 hover:text-green-300'>
      <p>
      K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in</p>
    </div>
    
    <Footer/>
      </div>
    </div>
  )
}

export default landingPage
