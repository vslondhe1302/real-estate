"use client"
import Link from 'next/link'
import React from 'react'

export default function OurCoverageSection({propertyTypes}) {
    
    return (
        <div className='lg:mb-[80px] mb-[50px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='w-full lg:mb-[48px] mb-[34px] '>
                    <h2 className='lg:text-[32px] text-[22px] lg:leading-[48px] leading-[38px] font-[500]  text-center text-[var(--txt_color_5)] lg:mb-4 mb-3 capitalize'>
                        Our Coverage
                    </h2>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                        We deal in the sale, purchase, leasing, renting, joint development agreements, development agreements of all sorts of properties i.e.
                    </p>
                </div>
                <div className='lg:flex grid grid-cols-2 sm:gap-[14px] gap-3 justify-center '>
                    {propertyTypes.length>=1 &&
                    propertyTypes.map((items,index)=>(

                        <Link key={index} href={`/listed-properties/${items.slug}`}>
                            <div className='flex items-center lg:px-5 px-4 lg:py-4 py-3 lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-70% via-white via-77% to-[#eddedf] to-96%  '>
                                <div className='lg:mr-[20px] mr-[12px] '>
                                    <img src="/images/residentail-icon.svg" alt="" className='w-[48px] h-[48px] rounded-full ' />
                                </div>
                                <h3 className='lg:text-[18px] text-[15px] lg:leading-[27px] leading-[24px] font-[500] lg:text-left text-center text-[var(--txt_color_9)] capitalize tracking-[0.3px]'>
                                    {items.propertyTypeName}
                                </h3>
                            </div>
                        </Link>
                        ))}
                    </div>
            </div>
        </div>
    )
}
