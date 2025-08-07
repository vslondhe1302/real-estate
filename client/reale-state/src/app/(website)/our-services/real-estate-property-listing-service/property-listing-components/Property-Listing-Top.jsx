import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export default function PropertyListingTop() {
    return (
        <div className=' pt-4 lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='w-full lg:mb-[44px] mb-[36px]'>
                    <div className='mb-3'>
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
                                    Real Estate Property Listing Service
                                </span>
                            </li>
                        </ol>
                    </div>
                    <h2 className='lg:text-[28px] text-[18px] lg:leading-[42px] leading-[24px] font-[500]  text-left text-[rgb(23,19,46)] lg:mb-4 mb-3 capitalize'>
                        Real Estate Property Listing Service
                    </h2>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-left text-[var(--txt_color_3)] tracking-[0.3px] mb-4'>
                        We are the 1st Local property selling website, Every property listed with us is genuine and verified. All the desired information Required for buying property is provided here with one click you can get your dream property.
                    </p>
                </div>
            </div>
        </div>
    )
}
