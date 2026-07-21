import React from 'react'
import Footer from './footer'
import {LayoutPanelTop} from 'lucide-react';
import {BrowserRouter} from 'react-router-dom'
import Stairs from './stairs/page';

function landingPage() {
 
  return (
    <div className='min-h-screen relative'>
      {/* <div className='pointer-events-none'> */}
        <Stairs/>
      {/* </div> */}
 
      <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover' src='/videos/video.mp4'>
        
      </video>  
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <button
  className="
  hover:bg-green-400 
  transition-all
    duration-300
    ease-in-out
    hover:translate-y-2
    rounded-bl-2xl

  flex
  justify-end
    fixed
    top-0
    right-0
    z-50
    bg-black
    text-white
    px-27
    py-3
    
  "
>
  <LayoutPanelTop/>
</button>
      {/* <nav className='flex'>Home</nav> */}
    <main className='text-center leading-none'>
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
