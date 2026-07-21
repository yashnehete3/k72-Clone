'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function footer() {
  const router = useRouter();
  return (
    <div className='flex flex-wrap gap-5 justify-center bottom-0  '>
      <button className='font-bold px-10 text-[100px] leading-none  border-white border-2 rounded-[80px]
      hover:text-green-400 hover:border-green-400 ' onClick ={()=>router.push('/work')} >WORK</button>
      <button className='font-bold relative px-10 text-[100px] leading-none border-white border-2 rounded-[80px]      
        hover:text-green-400 hover:border-green-400' onClick ={()=>router.push('/agency')}>AGENCY</button>
    </div>
  )
}

export default footer
