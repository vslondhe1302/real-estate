import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)
export default function PostPropertySection() {
    let sectionRef = useRef()

    useEffect(()=>{
        const element = sectionRef.current

        gsap.fromTo(
            element,{opacity:0,x:-40},{opacity:1,x:0,duration:0.6,scrollTrigger:{trigger:element,start:"top 80%"}},
        )
        gsap.fromTo(
            ".animate",{opacity:0,y:30},{opacity:1,y:0,duration:0.6,scrollTrigger:{trigger:".animate",start:"top 80%"}}
        )
        ScrollTrigger.refresh()
    })
    return (
        <div className='lg:pb-[96px] pb-[60px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='post-property relative w-full lg:rounded-[16px] rounded-[12px] '>
                    <div className='w-full bg-gradient-to-r from-[rgba(42,35,89,0.9)] to-[rgba(221,56,70,0.9)] lg:rounded-[16px] rounded-[12px] flex lg:flex-row flex-col justify-between items-center lg:pt-[38px] pt-[30px] lg:pb-[22px] pb-[18px] lg:px-[60px] px-[40px] '>
                        <div className='flex justify-between items-center lg:mb-0 mb-[20px]'>
                            <div className='lg:mr-[10px] '>
                                <div ref={sectionRef} className='lg:mr-[28px] lg:block hidden w-[180px]'>
                                    <img src="/images/placeholder-images.svg" alt="" className='w-[180px]' />
                                </div>
                            </div>
                            <div >
                                <h2 className='animate lg:text-[32px] sm:text-[22px] text-[20px] lg:leading-[48px] leading-[26px] font-[500] text-center lg:text-left text-white lg:mb-2 mb-1.5'>
                                    Are you property owner?
                                </h2>
                                <p className='animate lg:text-[22px] sm:text-[14px] text-[12px] lg:leading-[34px] leading-[22px] font-[400] text-center lg:text-left text-white'>
                                    Driving Change Through Innovation and Excellence.
                                </p>
                            </div>
                        </div>
                        <div className='animate lg:w-[204px] w-[170px] lg:h-[52px] h-[40px]'>
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
                </div>
            </div>
        </div>
    )
}
