'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { FaPlay, FaXmark } from 'react-icons/fa6';
import Slider from "react-slick";

export default function WhyChooseSection() {
    let [showVideoModal, setShowVideoModal] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div className='w-[100%] lg:pb-[96px] pb-[45px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className=' lg:mb-[44px] mb-[24px] max-w-full '>
                    <h3 className='lg:text-[32px] text-[25px] lg:leading-[48px] leading-[38px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-[20px] mb-3'>
                        What Makes Us the Preferred Choice?
                    </h3>
                    <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_3)] tracking-[0.4px]'>
                        We being the top-rated property dealer and real estate broker in current times always determined to help you.
                    </p>
                </div>
                <div className='max-w-full'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6'>
                        <div className='grid grid-cols-2 lg:gap-6 gap-4'>
                            <div className='lg:p-6 p-4 rounded-[12px] bg-[rgb(255,245,246)]'>
                                <h3 className='lg:text-[36px] text-[26px] lg:leading-[46px] leading-[38px] font-[600] text-[var(--txt_color_2)] mb-3'>
                                    <span>
                                        <CountUp end={34} start={0} duration={2}/>
                                    </span>
                                    +
                                </h3>
                                <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_5)] tracking-[0.4px]'>
                                    Year of Experience
                                </p>
                            </div>
                            <div className='lg:p-6 p-4 rounded-[12px] bg-[rgb(255,245,246)]'>
                                <h3 className='lg:text-[36px] text-[26px] lg:leading-[46px] leading-[38px] font-[600] text-[var(--txt_color_2)] mb-3'>
                                    <span>
                                        <CountUp end={250} start={0} duration={2}/>
                                    </span>
                                    +
                                </h3>
                                <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_5)] tracking-[0.4px]'>
                                    Properties Listed
                                </p>
                            </div>
                            <div className='lg:p-6 p-4 rounded-[12px] bg-[rgb(255,245,246)]'>
                                <h3 className='lg:text-[36px] text-[26px] lg:leading-[46px] leading-[38px] font-[600] text-[var(--txt_color_2)] mb-3'>
                                    <span>
                                        <CountUp end={4100} start={0} duration={2}/>
                                    </span>
                                    +
                                </h3>
                                <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_5)] tracking-[0.4px]'>
                                    Successful Deals
                                </p>
                            </div>
                            <div className='lg:p-6 p-4 rounded-[12px] bg-[rgb(255,245,246)]'>
                                <h3 className='lg:text-[36px] text-[26px] lg:leading-[46px] leading-[38px] font-[600] text-[var(--txt_color_2)] mb-3'>
                                    <span>
                                        <CountUp end={2000} start={0} duration={2}/>
                                    </span>
                                    +
                                </h3>
                                <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_5)] tracking-[0.4px]'>
                                    Happy Customers
                                </p>
                            </div>
                        </div>

                        <div className='w-full'>

                            {/* Modal */}
                            <div className={` ${showVideoModal == true ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 fixed left-0 top-0 w-full h-[100vh] ease-in-out z-[20] bg-[var(--light_dark_bg)]`} >

                                <div className={`${showVideoModal == true ? "top-[50%] opacity-100" : "top-[-1000px] opacity-0"} bg-white duration-500 ease-in-out relative left-[50%] translate-[-50%] lg:w-[500px] w-[350px] lg:h-[480px] h-[355px] lg:px-5 px-3 lg:pb-5 pb-3 rounded-[10px]`}>
                                    <div onClick={() => setShowVideoModal(false)} className='absolute top-0 right-0 bg-white border-1 border-white rounded-[5px] lg:w-[40px] w-[35px] lg:h-[40px] h-[35px] flex justify-center items-center lg:mt-3 mt-2 lg:mr-3 mr-2 cursor-pointer '>
                                        <FaXmark className='lg:text-2xl text-xl' />
                                    </div>
                                    <div className=' min-h-full max-h-full h-full max-w-full lg:pt-[60px] pt-[45px]'>
                                        <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/LJM1yEpJInE?si=4bIdoPWUW2GBC3k0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                            {/* Modal */}

                            <div className="rounded-[12px] leading-0 relative">
                                <div className='w-full h-full flex justify-center items-center absolute left-0 top-0 bg-[rgba(0,0,0,0.15)] z-[12] rounded-[12px] '>
                                    <div onClick={()=>setShowVideoModal(true)} className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[rgba(0,0,0,0.7)] cursor-pointer '>
                                        <FaPlay className='text-white text-[20px]' />
                                    </div>
                                </div>


                                <div>
                                    <Slider {...settings} className=''>
                                        <div className=''>
                                            <img src="/images/freepik__please-expand-the-background-of-this-image__96839 (1).png" alt="" className='block rounded-[12px]' />
                                        </div>
                                        <div className=''>
                                            <img src="/images/freepik__please-expand-the-background-of-this-image__96839 (1).png" alt="" className='block rounded-[12px]' />
                                        </div>
                                    </Slider>
                                </div>
                                <div className='absolute bottom-[10px] max-w-full left-0 flex lg:gap-3 gap-2 lg:pl-[10px] pl-1 z-[15]'>
                                    <ul className='rounded-[8px] flex'>
                                        <li className='max-w-[109px] max-h-[64px] rounded-[8px] mx-[5px] lg:shadow-my-lg shadow-2xl'>
                                            <Link href={'#'}>
                                                <img src="/images/freepik__please-expand-the-background-of-this-image__96839 (1).png" alt="" className='rounded-[8px] block' />
                                            </Link>
                                        </li>
                                        <li className='max-w-[109px] max-h-[64px] rounded-[8px] mx-[5px] lg:shadow-my-lg shadow-2xl'>
                                            <Link href={'#'}>
                                                <img src="/images/freepik__please-expand-the-background-of-this-image__96839 (1).png" alt="" className='rounded-[8px] block' />
                                            </Link>
                                        </li>
                                        <li className='max-w-[109px] max-h-[64px] rounded-[8px] mx-[5px] lg:shadow-my-lg shadow-2xl'>
                                            <Link href={'#'}>
                                                <img src="/images/freepik__please-expand-the-background-of-this-image__96839 (1).png" alt="" className='rounded-[8px] block' />
                                            </Link>
                                        </li>
                                        <li className='max-w-[109px] max-h-[64px] rounded-[8px] mx-[5px] lg:shadow-my-lg shadow-2xl'>
                                            <Link href={'#'}>
                                                <img src="/images/freepik__please-expand-the-background-of-this-image__96839 (1).png" alt="" className='rounded-[8px] block' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
