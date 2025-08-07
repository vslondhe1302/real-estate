"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6';
import { GrLocation } from "react-icons/gr";
import { CgArrowsExpandRight } from "react-icons/cg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function ImpactfulProperties({ impactfulProperties, staticPath }) {
    let [showModal, setShowModal] = useState(false)

    var settings = {
        dots: false,
        infinite: impactfulProperties.length > 1 ? true : false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: impactfulProperties.length > 1 ? true : false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    className: "center",
                    centerMode: true,
                    centerPadding: "55px",
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    useEffect(()=>{
        gsap.fromTo(
            ".animate",{opacity:0,y:30},{opacity:1,y:0,duration:0.5,scrollTrigger:{trigger:".animate",start:"top 80%"}}
        )
        ScrollTrigger.refresh()
    })
    return (
        <div className='w-[100%] lg:pb-[96px] pb-[84px] lg:px-0 px-4 relative lg:static top-[-40px] '>
            {/* Modal */}
            <div className={` ${showModal == true ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 fixed left-0 top-0 w-[100%] ease-in-out  h-[100vh] z-[25] bg-[var(--md_dark_bg)]`} >
                <div className={`${showModal == true ? "top-0 opacity-100" : "top-[-1000px] opacity-0"} duration-500 ease-in-out relative left-0 max-w-[1140px] h-[92%] mx-auto my-auto lg:my-7 border rounded-[10px]`}>
                    <div className='h-full'>
                        <img src="/images/screenshot-01.png" alt="" className='w-full h-full object-fill rounded-[10px]' />
                    </div>
                    <div onClick={() => setShowModal(false)} className='absolute top-0 right-0 bg-white border-1 border-white rounded-[5px] w-[40px] h-[40px] flex justify-center items-center mt-3 mr-3 cursor-pointer '>
                        <FaXmark className='text-2xl' />
                    </div>
                </div>
            </div>
            {/* Modal */}

            <div className='max-w-[1170px] mx-auto px-1'>
                <div className='lg:mb-[30px] mb-5'>
                    <h2 className='lg:text-[32px] text-[25px] lg:leading-[48px] leading-[38px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-3 mb-2'>
                        Our Most Impactful Properties
                    </h2>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_3)] mb-3'>
                        Driving Change Through Innovation and Excellence.
                    </p>
                </div>

                <div id='impact-property' className='max-w-full'>
                    <Slider {...settings}>

                        {impactfulProperties.length >= 1 &&
                            impactfulProperties.map((items, index) => {
                                let bhiga = items.propertyArea / 3025
                                let area = Number.isInteger(bhiga) ? `${bhiga} Bhiga` : `${items.propertyArea} sq.yards`

                                let price;
                                if (items.propertyPrice >= 10000000) {
                                    const value = items.propertyPrice / 10000000
                                    price = (value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)) + ' ' + 'cr'
                                } else if (items.propertyPrice >= 100000) {
                                    const value = items.propertyPrice / 100000
                                    price = (value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)) + ' ' + 'lakh'
                                }
                                else {
                                    price = (items.propertyPrice).toString()
                                }
                                return (
                                    <div key={index} className='animate'>
                                        <div className='lg:px-[17px] px-6 '>
                                            <div className='border-1 border-gray-200 rounded-[10px] shadow-lg shadow-gray-300'>
                                                <div className='w-full relative group'>
                                                    <figure className='w-full'>
                                                        <img src={staticPath + items.propertyImage} alt="" className='w-full max-h-[227px] min-h-[227px] rounded-[10px_10px_0px_0px]' />
                                                    </figure>

                                                    <div className='absolute left-[50%] top-[50%] translate-[-50%] group-hover:opacity-100 opacity-0 duration-150 cursor-pointer'>
                                                        <div onClick={() => setShowModal(true)} className='w-[36px] h-[36px] rounded-[6px] bg-[var(--md_dark_bg)] flex items-center justify-center'>
                                                            <span className='px-2 py-1 lg:text-[24px] text-[13px] lg:leading-[24px] leading-[21px] font-[400] text-white' ><CgArrowsExpandRight /></span>
                                                        </div>
                                                    </div>


                                                    <div className='absolute top-0 right-0 lg:mt-3 mt-[10px] lg:mr-3 mr-[10px]'>
                                                        <div className='flex lg:rounded-[8px] rounded-[6px]'>
                                                            <span className='lg:px-2 px-1.5 py-1 lg:text-[11px] text-[8px] lg:leading-[18px] leading-[16px] font-[700] text-white bg-[var(--red_btn_bg)] lg:rounded-[6px_0px_0px_6px] rounded-[4px_0px_0px_4px] uppercase'>
                                                                {items.parentPropertyType.propertyTypeName}
                                                            </span>
                                                            <span className='lg:px-2 px-1.5 py-1 lg:text-[11px] text-[8px] lg:leading-[18px] leading-[16px] font-[700] text-white bg-[var(--dark_btn_bg)] lg:rounded-[0px_6px_6px_0px] rounded-[0px_4px_4px_0px] uppercase'>
                                                                for {items.propertyFor}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='lg:px-6 px-4 lg:py-6 py-4 '>
                                                    <div className='lg:mb-6 mb-5 '>
                                                        <div>
                                                            <Link href={'#'}>
                                                                <h3 className='lg:text-[18px] text-[15px] lg:leading-[27px] leading-[23px] font-[400] mb-2 text-[var(--txt_color_5)] '>
                                                                    {items.propertyName}
                                                                </h3>
                                                            </Link>
                                                        </div>
                                                        <div className='flex'>
                                                            <span className='mr-1 lg:mt-1 '><GrLocation className='lg:text-[16px] text-[14px] text-[var(--txt_color_3)]' /></span>
                                                            <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[400] text-[var(--txt_color_3)]'>
                                                                {items.propertyLocation}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="grid lg:grid-cols-2 grid-cols-3 mb-4">
                                                        <div className="bg-gray-300 py-2 lg:px-3 px-[10px] text-center text-[12px] lg:leading-[18px] leading-[16px] font-[400] text-[var(--txt_color_5)] rounded-[6px] border-1 border-gray-200">
                                                            Area : <span>{area}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex justify-between items-center'>
                                                            <div className=''>
                                                                <p>
                                                                    <span className='lg:text-[14px] text-[11px] lg:leading-[21px] leading-[18px] font-[400] text-gray-600 mr-2'>
                                                                        Price
                                                                    </span>
                                                                    <span className='lg:text-[25px] text-[18px] lg:leading-[30px] leading-[24px] font-[400] text-[var(--txt_color_2)]'>
                                                                        &#8377;{price}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <Link href={`/listed-properties/property-detail/${items.slug}`} className='w-full lg:max-w-[132px] max-w-[105px] block'>
                                                                <button className='w-full lg:max-w-[132px] sm:max-w-[105px] max-w-[100px] bg-[var(--red_btn_bg)] lg:min-h-[40px] sm:min-h-[32px] min-h-[30px] lg:rounded-[8px] rounded-[5px] text-white cursor-pointer flex items-center justify-center group'>
                                                                    <span className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] capitalize group-hover:mr-2 duration-150'>
                                                                        More Details
                                                                    </span>
                                                                    <span className='group-hover:opacity-100 group-hover:relative absolute opacity-0 duration-150'>
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
                                )}
                            )
                        }

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
            className="lg:w-[45px] w-[36px] lg:h-[45px] h-[36px] rounded-full bg-white shadow-2xl absolute right-[-10px] top-[50%] border-1 border-gray-100 flex justify-center items-center z-[21]"
            onClick={onClick}
        ><FaChevronRight className='lg:text-[16px] text-[14px] text-gray-900' /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="lg:w-[45px] w-[36px] lg:h-[45px] h-[36px] rounded-full bg-white shadow-2xl absolute left-[-10px] top-[50%] border-1 border-gray-100 flex justify-center items-center z-[21] "
            onClick={onClick}
        ><FaChevronLeft className='lg:text-[16px] text-[14px] text-gray-900' /></div>
    );
}
