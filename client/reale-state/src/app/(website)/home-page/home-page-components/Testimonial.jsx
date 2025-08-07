'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function Testimonial({ testimonialData, testimonialImgPath }) {
    let [activeIndex, setActiveIndex] = useState(1)

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        waitForAnimate: false,
        beforeChange: (current) => setActiveIndex(current),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true

                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true

                }
            }
        ]
    };

    return (
        <div className='w-[100%] lg:pb-[160px] pb-[84px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='w-full lg:mb-[44px] mb-8'>
                    <h3 className='lg:text-[32px] text-[25px] lg:leading-[48px] leading-[38px] font-[500] lg:text-left text-center text-[var(--txt_color_5)] lg:mb-[20px] mb-3'>
                        Our happy customers say about us
                    </h3>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] mb-3 tracking-[0.3px]'>
                        Their Words, Our Work — Surana Realstore Builds Trust.
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {testimonialData.length >= 1 &&
                            testimonialData.map((items, index) => {
                                return (
                                    <div key={index} className='relative'>
                                        <div className='grid lg:grid-cols-[30%_auto] lg:gap-[50px] gap-[10px] lg:relative'>

                                            <div className='rounded-[12px] lg:mb-0 mb-12 relative lg:order-1 order-2'>
                                                <div className='testimonial rounded-[12px] mx-auto lg:w-full lg:h-[319px] w-[120px] h-[120px]  lg:px-0 lg:py-0 px-1 py-1'>
                                                    <img src={testimonialImgPath + items.image} alt="" className='rounded-[12px] lg:w-full w-[115px] lg:h-full h-full mx-auto ' />
                                                </div>
                                                <div className='w-full h-full lg:block hidden rounded-[12px] shadow-inset absolute left-0 top-0'></div>
                                                <div className='absolute lg:bottom-0 bottom-[-50px] left-0 lg:py-[35px] px-[28px] w-full '>
                                                    <h3 className='lg:text-[18px] text-[15px] lg:leading-[24px] leading-[18px] font-[600] lg:text-left text-center lg:text-white text-[var(--txt_color_5)] mb-1'>
                                                        {items.title}
                                                    </h3>
                                                    <p className='lg:text-[14px] text-[12px] lg:leading-[22px] leading-[16px] font-[400] lg:text-left text-center lg:text-gray-400 text-gray-500 tracking-[0.3px]'>
                                                        {items.designation}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='w-full relative lg:order-2 order-1'>
                                                <div className='lg:relative lg:pb-[52px] pb-[22px] lg:block flex flex-col '>
                                                    <p className='lg:text-[25px] text-[14px] lg:leading-[38px] leading-[26px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] tracking-[0.3px] lg:order-1 order-2 lg:min-h-full min-h-[140px]'>
                                                        {items.message}                                        </p>
                                                    <div className='lg:absolute right-0 bottom-0 lg:mb-0 mb-5 lg:order-2 order-1'>
                                                        <img src="/images/double-cots-icon.svg" alt="" className='mx-auto' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute left-0 bottom-0 lg:block hidden lg:ml-[402px] '>
                                            <ul className='lg:flex'>
                                                <li className='lg:mr-10 mr-7 '>
                                                    <Link href={'#'} className={`${activeIndex == 1 ? 'testimonial' : ''} block lg:w-[115px] w-[90px] lg:h-[115px] h-[90px] px-0.5 pt-1 rounded-[12px] `}>
                                                        <img src="/images/1517346320764.jpeg" alt="" className='lg:w-[107px] w-[85px] lg:h-[107px] h-[85px] rounded-[12px] mx-auto  block' />
                                                    </Link>
                                                </li>
                                                <li className='lg:mr-10 mr-7 '>
                                                    <Link href={'#'} className={`${activeIndex == 2 ? 'testimonial' : ''} block lg:w-[115px] w-[90px] lg:h-[115px] h-[90px] px-0.5 pt-1 rounded-[12px] `}>
                                                        <img src="/images/Dinesh-Patwa.jpg" alt="" className='lg:w-[107px] w-[85px] lg:h-[107px] h-[85px] rounded-[12px] mx-auto  block' />
                                                    </Link>
                                                </li>
                                                <li className=' lg:mr-10 mr-7 '>
                                                    <Link href={'#'} className={`${activeIndex == 0 ? 'testimonial' : ''} block lg:w-[115px] w-[90px] lg:h-[115px] h-[90px] px-0.5 pt-1 rounded-[12px] `}>
                                                        <img src="/images/6e449cbb-2eb8-4888-b0d6-bd7d77d8f039-1669299130.jpg" alt="" className='lg:w-[107px] w-[85px] lg:h-[107px] h-[85px] rounded-[12px] mx-auto  block' />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                )
                            })}

                    </Slider>
                </div>
            </div>

        </div>
    )
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className=" absolute sm:right-[30%] right-[22%] sm:top-[70%] top-[70%] z-[21] "
            onClick={onClick}
        ><BsArrowRight className='text-[25px] text-gray-900' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className=" absolute sm:left-[30%] left-[22%] sm:top-[70%] top-[70%] z-[21] "
            onClick={onClick}
        ><BsArrowLeft className='text-[25px] text-gray-900' /></div>
    );
}