import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

export default function ShareProperty() {
  return (
    <div className='w-full p-5 bg-white rounded-[8px] border-1 border-gray-200'>
            <div className=''>
                <h3 className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[500] text-center text-[var(--txt_color_8)] tracking-[0.3px] mb-3'>
                    Share this property
                </h3>
                <ul className="flex flex-wrap items-center justify-center gap-4">
                    <li className="h-[40px] w-[40px] border-1 border-gray-200 rounded-full flex justify-center items-center hover:bg-[var(--red_bg)] duration-200 cursor-pointer group">
                        <span className='text-[20px] group-hover:text-white duration-200 text-blue-700'>
                            <FaLinkedinIn />
                        </span>
                    </li>
                    <li className="h-[40px] w-[40px] border-1 border-gray-200 rounded-full flex justify-center items-center hover:bg-[var(--red_bg)] duration-200 cursor-pointer group">
                        <span className='text-[20px] group-hover:text-white duration-200 text-blue-600'>
                            <FaFacebookF />
                        </span>
                    </li>
                    <li className="h-[40px] w-[40px] border-1 border-gray-200 rounded-full flex justify-center items-center hover:bg-[var(--red_bg)] duration-200 cursor-pointer group">
                        <span className='text-[20px] group-hover:text-white duration-200 text-blue-500'>
                            <FaTwitter />
                        </span>
                    </li>
                    <li className="h-[40px] w-[40px] border-1 border-gray-200 rounded-full flex justify-center items-center hover:bg-[var(--red_bg)] duration-200 cursor-pointer group">
                        <span className='text-[20px] group-hover:text-white duration-200 text-green-400'>
                            <FaWhatsapp />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
  )
}
