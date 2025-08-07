import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaArrowRight } from 'react-icons/fa6'

export default function HappyCustomer() {
    return (
        <div className='w-[100%] lg:mb-[96px] mb-[45px]'>
            <div className='w-[100%] lg:pb-[96px] pb-[45px]'>
                <div className='max-w-[1170px] mx-auto '>
                    <div className=' lg:mb-[44px] mb-[24px] max-w-full '>
                        <h3 className='lg:text-[32px] text-[25px] lg:leading-[48px] leading-[38px] font-[500] text-center text-[var(--txt_color_5)] capitalize'>
                            happy Customer
                        </h3>
                    </div>
                </div>
                <div className='max-w-full lg:h-[56px] h-[46px]'>
                    <div className='flex items-center h-full'>
                        <Marquee behavior="smooth" direction="left" speed="40" pauseOnClick="true" pauseOnHover="true" autoFill="true" >
                            <div className='flex items-center'>
                                <div className='flex items-center lg:mr-[60px] sm:mr-[45px] mr-[40px] sm:min-h-[56px] min-h-[46px] bg-transparent'>
                                    <img src="/images/mangaldeep.jpeg" alt="" className='sm:h-[46px] h-[38px] rounded-[10px]' />
                                </div>
                                <div className='flex items-center lg:mr-[60px] sm:mr-[45px] mr-[40px] sm:min-h-[56px] min-h-[46px] bg-transparent'>
                                    <img src="/images/metro.jpeg" alt="" className='sm:h-[46px] h-[38px] rounded-[10px]' />
                                </div>
                                <div className='flex items-center lg:mr-[60px] sm:mr-[45px] mr-[40px] sm:min-h-[56px] min-h-[46px] bg-transparent'>
                                    <img src="/images/Utkarsh.jpeg" alt="" className='sm:h-[46px] h-[38px] rounded-[10px]' />
                                </div>
                                <div className='flex items-center lg:mr-[60px] sm:mr-[45px] mr-[40px] sm:min-h-[56px] min-h-[46px] bg-transparent'>
                                    <img src="/images/ola.jpeg" alt="" className='sm:h-[46px] h-[38px] rounded-[10px]' />
                                </div>
                                <div className='flex items-center lg:mr-[60px] sm:mr-[45px] mr-[40px] sm:min-h-[56px] min-h-[46px] bg-transparent'>
                                    <img src="/images/ashapurna.jpeg" alt="" className='sm:h-[46px] h-[38px] rounded-[10px]' />
                                </div>
                                <div className='flex items-center lg:mr-[60px] sm:mr-[45px] mr-[40px] sm:min-h-[56px] min-h-[46px] bg-transparent'>
                                    <img src="/images/Kalpa.jpeg" alt="" className='sm:h-[46px] h-[38px] rounded-[10px]' />
                                </div>
                                <div className='flex items-center lg:mr-[60px] sm:mr-[45px] mr-[40px] sm:min-h-[56px] min-h-[46px] bg-transparent'>
                                    <img src="/images/Darshan.jpeg" alt="" className='sm:h-[46px] h-[38px] rounded-[10px]' />
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>

            <div className='max-w-[1170px] mx-auto '>
                <div className=' lg:px-[32px] px-[18px] lg:py-[26px] pt-[0px] pb-5 max-w-full bg-[rgba(255,245,228,0.8)] lg:rounded-[16px] rounded-[12px] '>
                    <div className='flex lg:flex-row flex-col justify-between items-center'>
                        <div className='lg:mb-0 mb-[16px] flex lg:flex-row flex-col items-center '>
                            <div className='sm:mr-[24px] sm:mb-0 mb-[16px] bg-transparent '>
                                <img src="/images/house_illustration.png" alt="" className='bg-blend-multiply scale-90' />
                            </div>
                            <div className=''>
                                <h3 className='lg:text-[28px] text-[19px] lg:leading-[42px] leading-[32px] font-[500] sm:text-left text-center text-[var(--txt_color_5)] lg:mb-2 mb-1.5'>
                                    Let’s Get In Touch.
                                </h3>
                                <p className='lg:text-[16px] sm:text-[14px] text-[12px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_3)] tracking-[0.4px]'>
                                    Reach Out to Us for Collaboration & Support!
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='lg:flex items-center lg:mr-[38px] mr-[24px] hidden '>
                                <img src="/images/phone-call.svg" alt="" className='mr-3' />
                                <Link href={'tell:91-9876543210'} className='lg:text-[20px] text-[15px] font-[500] lg:leading-[30px] leading-[24px] text-[var(--txt_color_1)]  '>91-9876543210</Link>
                            </div>
                            <div className=''>
                                <Link href={'#'} className='lg:w-[138px] w-[108px] block'>
                                    <button className='w-full lg:max-w-full max-w-full bg-[var(--red_btn_bg)] lg:min-h-[48px] min-h-[38px] lg:rounded-[7px] rounded-[5px] text-white cursor-pointer flex items-center justify-center group'>
                                        <span className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] capitalize group-hover:mr-2 duration-150'>
                                            contact us
                                        </span>
                                        <span className='group-hover:opacity-100 absolute group-hover:relative opacity-0 duration-150'>
                                            <FaArrowRight className='lg:text-[14px] text-[13px]' />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
