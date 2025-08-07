import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export default function RealEStateBrokerageTop() {
  return (
    <div className=' pt-4 lg:pb-[80px] pb-[40px] lg:mb-[64px] mb-[40px] bg-[rgb(248,248,252)] border-b-1 border-b-gray-200 lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='w-full'>
                    <div className='mb-6'>
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
                                    Jodhpur's No.1 Real Estate Broker
                                </span>
                            </li>
                        </ol>
                    </div>
                    <h2 className='lg:text-[28px] text-[18px] lg:leading-[42px] leading-[24px] font-[500]  text-left text-[rgb(23,19,46)] lg:mb-4 mb-3 capitalize'>
                        Jodhpur's No.1 Real Estate Broker
                    </h2>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-left text-[var(--txt_color_3)] tracking-[0.3px] mb-4'>
                        Over the last three decades and three generations, our family is into the real estate brokerage business. Mn Dileep Surana is considered as a brand in the pool of realtors. In all these years, ahead of our business growth, revenues etc., we have focused on: -Customer Satisfaction, Creating prosperity, Legitimate deals. Our customers have got the best real estate company of Jodhpur and got tremendous rise in their real estate property in Jodhpur, purchased through us.
                    </p>
                </div>
            </div>
        </div>
  )
}
