import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export default function ContactusTop() {
    return (
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
                            contact us
                        </span>
                    </li>
                </ol>
            </div>
            <h2 className='lg:text-[28px] text-[18px] lg:leading-[42px] leading-[24px] font-[500]  text-left text-[rgb(23,19,46)] lg:mb-[32px] mb-[24px] capitalize'>
                contact us
            </h2>
        </div>
    )
}
