"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function DiscoverProperties() {
    
    useEffect(()=>{

        gsap.fromTo(
            ".animate-img",{opacity:0,scale:0.8},{opacity:1,scale:1,duration:0.6,scrollTrigger:{trigger:".animate-img",start:"top 80%"}}
        )
        gsap.fromTo(
            ".animate1",{opacity:0,y:30},{opacity:1,y:0,duration:0.6,scrollTrigger:{trigger:".animate1",start:"top 80%"}}
        )
         gsap.fromTo(
            ".animate2",{opacity:0,y:30},{opacity:1,y:0,duration:0.6,stagger:0.3,scrollTrigger:{trigger:".animate2",start:"top 80%"}}
        )
        ScrollTrigger.refresh()
    })
    return (
        <div className='w-[100%] lg:pb-[96px] pb-[45px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto px-1'>
                <div className='w-[full lg:mb-[44px] mb-6'>
                    <h3 className='animate1 lg:text-[32px] text-[25px] lg:leading-[48px] leading-[38px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-[20px] mb-3'>
                        Discover Properties
                    </h3>
                    <p className='animate2 lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_3)] mb-3 tracking-[0.3px]'>
                        Surana Realtors, the best real estate broker in Jodhpur has established their name in this real estate game with classy and top-notch service and made themselves the finest real estate broker across the state.
                    </p>
                </div>
                <div className='grid sm:grid-cols-4 grid-cols-2 gap-[14px]'>
                    <div className='lg:h-full h-[200px] lg:rounded-[16px] rounded-[12px] overflow-hidden bg-[rgb(255,238,239)] border-1 border-gray-200'>
                        <Link href={'/listed-properties/residential'} className='bg-transparent'>
                            <div className='w-full lg:pt-[38px] pt-[22px] lg:px-[36px] px-[24px] lg:mb-[28px] mb-[18px] '>
                                <h2 className='lg:text-[28px] sm:text-[16px] text-[14px] lg:leading-[42px] leading-[32px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-2 mb-1 capitalize'>
                                    residential
                                </h2>
                            </div>
                            <div className='bg-transparent overflow-hidden lg:h-full h-[200px]'>
                                <img src="/images/residential-image.png" alt="" className='animate-img lg:rounded-[0px_0px_16px_16px] rounded-[0px_0px_12px_12px] hover:scale-105 duration-200 ease-in-out' />
                            </div>
                        </Link>
                    </div>
                    <div className='lg:h-full h-[200px] lg:rounded-[16px] rounded-[12px] overflow-hidden bg-[rgb(255,245,228)] border-1 border-gray-200'>
                        <Link href={'/listed-properties/commercial'} className='bg-transparent'>
                            <div className='w-full lg:pt-[38px] pt-[22px] lg:px-[36px] px-[24px] lg:mb-[28px] mb-[18px] '>
                                <h2 className='lg:text-[28px] sm:text-[16px] text-[14px] lg:leading-[42px] leading-[32px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-2 mb-1 capitalize'>
                                    commercial
                                </h2>
                            </div>
                            <div className='bg-transparent overflow-hidden lg:h-full h-[200px]'>
                                <img src="/images/commercial-img.png" alt="" className='animate-img lg:rounded-[0px_0px_16px_16px] rounded-[0px_0px_12px_12px] hover:scale-105 duration-200 ease-in-out' />
                            </div>
                        </Link>
                    </div>
                    <div className='lg:h-full h-[200px] lg:rounded-[16px] rounded-[12px] overflow-hidden bg-[rgb(240,249,255)] border-1 border-gray-200'>
                        <Link href={'/listed-properties/industrial'}  className='bg-transparent'>
                            <div className='w-full lg:pt-[38px] pt-[22px] lg:px-[36px] px-[24px] lg:mb-[28px] mb-[18px] '>
                                <h2 className='lg:text-[28px] sm:text-[16px] text-[14px] lg:leading-[42px] leading-[32px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-2 mb-1 capitalize'>
                                    industrial
                                </h2>
                            </div>
                            <div className='bg-transparent overflow-hidden lg:h-full h-[200px]'>
                                <img src="/images/industrial-img.png" alt="" className='animate-img lg:rounded-[0px_0px_16px_16px] rounded-[0px_0px_12px_12px] hover:scale-105 duration-200 ease-in-out' />
                            </div>
                        </Link>
                    </div>
                    <div className='lg:h-full h-[200px] lg:rounded-[16px] rounded-[12px] overflow-hidden bg-[rgb(235,242,232)] border-1 border-gray-200'>
                        <Link href={'/listed-properties/agricultural'} className='bg-transparent'>
                            <div className='w-full lg:pt-[38px] pt-[22px] lg:px-[36px] px-[24px] lg:mb-[28px] mb-[18px] '>
                                <h2 className='lg:text-[28px] sm:text-[16px] text-[14px] lg:leading-[42px] leading-[32px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-2 mb-1 capitalize'>
                                    agricultural
                                </h2>
                            </div>
                            <div className='bg-transparent overflow-hidden lg:h-full h-[200px] '>
                                <img src="/images/agricultural-img.png" alt="" className='animate-img scale-100 hover:scale-105 duration-200 ease-in-out lg:rounded-[0px_0px_16px_16px] rounded-[0px_0px_12px_12px]' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
