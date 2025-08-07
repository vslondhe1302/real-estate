'use client'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight, } from 'react-icons/fa6'

import AboutUsSliders from './About-us-Sliders'

export default function AboutUsTop() {

    return (
        <div className='lg:pb-[88px] pb-[46px] sm:pt-4 pt-3 lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='w-full lg:mb-[44px] mb-[34px]'>
                    <div className='mb-5'>
                        <ol className='flex items-center'>
                            <li className=''>
                                <Link href={'/'} className='flex items-center'>
                                    <span className='lg:text-[12px] text-[11px] lg:leading-[20px] leading-[16px] font-[400] text-[var(--txt_color_3)] pr-1 capitalize'>
                                        home
                                    </span>
                                    <span className='lg:text-[11px] text-[10px] lg:leading-[20px] leading-[16px] font-[400] text-[var(--txt_color_3)] pr-1'>
                                        <FaAngleRight />
                                    </span>
                                </Link>
                            </li>
                            <li className='flex items-center'>
                                <span className='lg:text-[12px] text-[11px] lg:leading-[20px] leading-[16px] font-[400] text-[var(--txt_color_3)] pr-1 capitalize'>
                                    about us
                                </span>
                            </li>
                        </ol>
                    </div>
                    <h2 className='lg:text-[28px] text-[18px] lg:leading-[42px] leading-[24px] font-[500]  text-left text-[rgb(23,19,46)] lg:mb-[32px] mb-[24px] capitalize'>
                        about us
                    </h2>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-left text-[var(--txt_color_3)] tracking-[0.3px] mb-4'>
                        Welcome to Sunrise Home Real E-State, the leading real estate broker in Jodhpur. Here, we are always ready and conveniently motived to help you with any query and requirement about your real estate property urgency. Here at Sunrise Home Real E-State, you will get your one-step stop for your every consulting service about real estate. We deal with property selling, buying, and even helping you if you’re not investing, you could just simply rent a property. We can make a deal for you with any leading real estate developers.
                    </p>
                </div>
                <AboutUsSliders/>
            </div>
        </div>
    )
}
