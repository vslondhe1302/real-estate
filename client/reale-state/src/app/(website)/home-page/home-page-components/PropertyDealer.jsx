"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { HiArrowRight } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

export default function PropertyDealer() {
    useEffect(()=>{

        gsap.fromTo(
            ".animate-img",{opacity:0,scale:0.8},{opacity:1,scale:1,duration:0.6,scrollTrigger:{trigger:".animate-img",start:"top 95%" }}
        )
        gsap.fromTo(
            ".animate1",{opacity:0,y:30},{opacity:1,y:0,duration:0.6,scrollTrigger:{trigger:".animate1",start:"top 95%"}}
        )
         gsap.fromTo(
            ".animate2",{opacity:0,y:30},{opacity:1,y:0,duration:0.6,stagger:0.3,scrollTrigger:{trigger:".animate2",start:"top 95%"}}
        )
        ScrollTrigger.refresh()
    })
    return (
        <div className='w-[100%] lg:pb-[96px] pb-[45px] lg:px-0 px-4'>
            <div className='property-dealer max-w-[1170px] mx-auto lg:px-[73px] px-4 border-1 border-gray-300 lg:rounded-[40px] rounded-[24px] lg:flex justify-between'>
                <div className=' lg:my-[62px] my-[26px] lg:max-w-[606px] max-w-full '>
                    <h3 className='animate1 lg:text-[40px] text-[25px] lg:leading-[48px] leading-[38px] font-[500] lg:text-left text-center text-[var(--txt_color_5)] lg:mb-[20px] mb-3'>
                        Property Dealer's in Jodhpur
                    </h3>
                    <p className='animate2 lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] lg:mb-[32px] mb-6 tracking-[0.4px]'>
                        Welcome to Surana Realtors, the leading real estate broker in Jodhpur. Here, we are always ready and conveniently motived to help you with any query and requirement about your real estate property urgency. Here at Surana Realtors, you will get your one-step stop for your every consulting service about real estate. We deal with property selling, buying, and even helping you if you’re not investing, you could just simply rent a property. We can make a deal for you with any leading real estate developers.
                    </p>
                    <div className='animate2 lg:w-[204px] w-[170px] lg:h-[52px] h-[40px] lg:mx-0 mx-auto'>
                        <Link href={'#'}>
                            <button className='relative w-full h-full lg:text-[16px] sm:text-[14px] text-[13px] leading-[24px] font-[400] rounded-[8px] flex items-center justify-center bg-white group px-1.5 py-[1px] text-[var(--txt_color_6)] duration-200'>
                                <span className='capitalize '>post property</span>
                                <div className='relative flex items-center'>
                                    <span className=' group-hover:hidden ml-2 duration-200'><HiArrowRight /></span>
                                    <span className=' absolute right-[-15px] text-white bg-[var(--nav_btn_bg)] px-[8px] py-[4px] sm:text-[11px] text-[9px] leading-[13px] font-[400] rounded-[4px] duration-150 ease-in-out scale-0 group-hover:scale-100 group-hover:ml-2 group-hover:static '>
                                        Free
                                    </span>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='lg:block relative hidden w-full mt-[60px] '>
                    <div className=''>
                        <img src="/images/frame-01.png" alt="" className='w-[381px] h-[409px]' />
                    </div>
                    <div className='absolute px-[14px] py-3 rounded-[13px] bg-white shadow-lg top-[10px] left-[60px]  rotate-[7deg] '>
                        <span className='text-[16px] font-[500] leading-[24px] text-[var(--primary_text_color)] after:absolute after:right-[20px] after:bottom-[-12px] after:inline-block after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-white after:border-[13px]'>
                            I’m Dheeraj Surana
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
