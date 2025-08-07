'use client'
import React, { useState } from 'react'
import { FaAngleRight, FaChevronLeft, FaChevronRight, } from 'react-icons/fa6'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FounderJourney() {
    let [selectQuater, setSelectQuater] = useState(1)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots : false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows : false,
          dots : true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false,
          dots : true
        }
      }
    ]

    };
    return (
        <div className='lg:mb-[88px] mb-[46px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='w-full'>
                    <div className='lg:mb-[28px] mb-[20px] '>
                        <ul className='hide-scrollbar w-full flex overflow-x-scroll'>
                            <li onClick={() => setSelectQuater(1)} className={` lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[20px] font-[500] text-[var(--txt_color_7)] lg:py-[12px] py-[8px] lg:px-[16px] sm:px-[12px] px-2.5 lg:mr-6 mr-5 lg:rounded-[8px] rounded-[6px] ${selectQuater == 1 ? "bg-[var(--red_bg)] text-white" : ""} duration-200 cursor-pointer`}>
                                1987-1999
                            </li>
                            <li onClick={() => setSelectQuater(2)} className={`lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[20px] font-[500] text-[var(--txt_color_7)] lg:py-[12px] py-[8px] lg:px-[16px] sm:px-[12px] px-2.5 lg:mr-6 mr-5 lg:rounded-[8px] rounded-[6px] ${selectQuater == 2 ? "bg-[var(--red_bg)] text-white" : ""} duration-200 cursor-pointer`}>
                                2000-2010
                            </li>
                            <li onClick={() => setSelectQuater(3)} className={`lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[20px] font-[500] text-[var(--txt_color_7)] lg:py-[12px] py-[8px] lg:px-[16px] sm:px-[12px] px-2.5 lg:mr-6 mr-5 lg:rounded-[8px] rounded-[6px] ${selectQuater == 3 ? "bg-[var(--red_bg)] text-white" : ""} duration-200 cursor-pointer`}>
                                2011-2019
                            </li>
                            <li onClick={() => setSelectQuater(4)} className={`lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[20px] font-[500] text-[var(--txt_color_7)] lg:py-[12px] py-[8px] lg:px-[16px] sm:px-[12px] px-2.5 lg:mr-6 mr-5 lg:rounded-[8px] rounded-[6px] ${selectQuater == 4 ? "bg-[var(--red_bg)] text-white" : ""} duration-200 cursor-pointer`}>
                                2020-2021
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <div className='border-1 border-gray-300 lg:rounded-[12px] rounded-[10px] '>
                            {selectQuater == 1 ?
                                <div id='founder-journey' className=''>
                                    <Slider {...settings}>
                                        <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                            <div className='flex flex-col group'>
                                                <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                    1987
                                                </h3>
                                                <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                    Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                </p>
                                            </div>
                                            <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                            </div>
                                        </div>
                                        <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                            <div className='flex flex-col group'>
                                                <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                    1987
                                                </h3>
                                                <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                    Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                </p>
                                                <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                    <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                    <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                            <div className='flex flex-col group'>
                                                <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                    1987
                                                </h3>
                                                <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                    Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                </p>
                                                <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                    <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                    <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                :
                                selectQuater == 2 ?
                                    <div id='founder-journey' className=''>
                                        <Slider {...settings}>
                                            <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                <div className='flex flex-col group'>
                                                    <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                        2000
                                                    </h3>
                                                    <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                        Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                    </p>
                                                </div>
                                                <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                    <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                    <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                </div>
                                            </div>
                                            <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                <div className='flex flex-col group'>
                                                    <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                        2000
                                                    </h3>
                                                    <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                        Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                    </p>
                                                    <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                        <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                        <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                <div className='flex flex-col group'>
                                                    <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                        2000
                                                    </h3>
                                                    <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                        Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                    </p>
                                                    <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                        <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                        <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                <div className='flex flex-col group'>
                                                    <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                        2000
                                                    </h3>
                                                    <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                        Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                    </p>
                                                    <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                        <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                        <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    :
                                    selectQuater == 3 ?
                                        <div id='founder-journey' className=''>
                                            <Slider {...settings}>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2011
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                    </div>
                                                    <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                        <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                        <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                    </div>
                                                </div>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2011
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                        <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                            <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                            <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2011
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                        <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                            <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                            <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2011
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                        <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                            <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                            <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                        :
                                        <div id='founder-journey' className=''>
                                            <Slider {...settings}>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2020
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                    </div>
                                                    <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                        <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                        <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                    </div>
                                                </div>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2020
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                        <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                            <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                            <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2020
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                        <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                            <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                            <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' lg:px-[56px] px-[46px] lg:py-[54px] py-[44px] relative'>
                                                    <div className='flex flex-col group'>
                                                        <h3 className='lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] font-[600] text-center text-[var(--txt_color_8)] lg:mb-[20px] mb-4 group-hover:text-[var(--txt_color_2)] duration-200'>
                                                            2020
                                                        </h3>
                                                        <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[400] text-center text-[var(--txt_color_5)] '>
                                                            Our founder Mr. Dileep Surana started his journey in the year along with his beloved father Mr. Lalchand Surana
                                                        </p>
                                                        <div className='absolute top-[20px] right-[0px] hidden lg:flex items-center'>
                                                            <span className='w-[27px] inline-flex relative right-[-9px] h-[2px] bg-gray-400 '></span>
                                                            <span className='text-[var(--txt_color_2)] '><FaAngleRight /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="lg:w-[45px] w-[36px] lg:h-[45px] h-[36px] rounded-full bg-white shadow-xl absolute right-[-20px] top-[50%] translate-y-[-50%] flex justify-center items-center z-[21]"
            onClick={onClick}
        ><FaChevronRight className='lg:text-[14px] text-gray-900' /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="lg:w-[45px] w-[36px] lg:h-[45px] h-[36px] rounded-full bg-white shadow-xl absolute left-[-20px] top-[50%] translate-y-[-50%] flex justify-center items-center z-[21] "
            onClick={onClick}
        ><FaChevronLeft className='lg:text-[14px] text-gray-900' /></div>
    );
}

