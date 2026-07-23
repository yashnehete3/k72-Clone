'use client'
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useRef} from 'react'
import Stairs from "../stairs/page";
function agency() {
  const imagedivRef = useRef<HTMLImageElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const text = useRef<HTMLImageElement>(null);
   const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
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
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from(imagedivRef.current,{
      x:-200,
      duration:3,
      ease:"power4.out",
    })
    gsap.from(text.current,{
      x:-200,
      duration:3,
      ease:"power4.out",
    })
    gsap.to(imagedivRef.current,{
      scrollTrigger:{
        trigger:imagedivRef.current,
        markers:false,
        start:'top 21.9%',
        end:'top -110%',
        scrub:true,
        pin:true,
        onUpdate:function(elem){
          // console.log(self.progress)
            const imageIndex  = Math.floor(elem.progress*(imageArray.length-1));
            if (image.current) {
              image.current.src = imageArray[imageIndex];
          }
           console.log(elem.progress,imageIndex);
        }
      }
    })
    })
  return (
    <>
    <Stairs/>
    <div ref={pageref} className="bg-white text-black min-h-screen overflow-hidden">
      
      <div ref = {imagedivRef} className="w-60 h-80  bg-black absolute top-40 left-112 rounded-3xl overflow-hidden ">
        <img ref = {image} className="h-full w-full object-cover transition:"  src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div ref = {text}>
        <h1  className="relative text-[20vw] text-center  leading-none font-bold mt-70">
        SEVEN7Y <br />
        TWO
      </h1>
      </div>
      <div ref = {text} className="relative w-[60vw] ml-auto mr-10 font-bold text-5xl gap-3">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"We’re inquisitive and <br />
          open-minded, and we make sure creativity crowds out ego from every
          corner. A brand is a living thing, with values, a personality and a
          story. If we ignore that, we can achieve short-term success, but not
          influence that goes the distance. We bring that perspective to every
          brand story we help tell."
        </p>
      </div>
      <div className="flex ml-50 mt-50 h-80">
        <div className="font-bold text-xl pr-60 ">Expertise</div>
        <div className="ml-30 font-bold text-xl">
          Strategy <br />
          Advertising
          <br /> Branding <br />
          Design <br />
          Content
        </div>
      </div>
      <div className="flex ml-50">
        <div className="w-100 font-serif text-xl mr-10">
          <p>
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </p>
        </div>
        <div className="w-100 font-serif  text-xl">
          <p>
            Our Creative_ Simmering in an environment where talent can come to a
            full boil. Encouraged to become the best versions of ourselves.
          </p>
        </div>
        <div className="w-70 font-medium text-xl ml-20">
          <p>
            Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default agency;
