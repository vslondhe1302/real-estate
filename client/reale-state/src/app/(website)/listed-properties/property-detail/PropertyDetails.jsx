"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CgArrowsExpandRight } from 'react-icons/cg'
import { FaAngleRight, FaXmark } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import PropertyType from './PropertyType'
import PropertyOverview from './Property-Overview'
import PropertyAmenities from './PropertyAmenities'
import PropertyLocation from './PropertyLocation'
import EnquiryForm from './EnquiryForm'
import ShareProperty from './ShareProperty'

export default function PropertyDetails({ singlePropertyData, staticPath, amenityImgPath }) {
    let [showModal, setShowModal] = useState(false)
    let [showDetailNav, setShowDetailNav] = useState(false)
    let [activeField, setActiveField] = useState(1)

    let bhiga = singlePropertyData.propertyArea / 3025
    let area = Number.isInteger(bhiga) ? `${bhiga} Bhiga` : `${singlePropertyData.propertyArea} sq.yards`

    let price;
    if (singlePropertyData.propertyPrice >= 10000000) {
        const value = singlePropertyData.propertyPrice / 10000000
        price = (value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)) + ' ' + 'cr'
    } else if (singlePropertyData.propertyPrice >= 100000) {
        const value = singlePropertyData.propertyPrice / 100000
        price = (value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)) + ' ' + 'lakh'
    }
    else {
        price = (singlePropertyData.propertyPrice)
    }

    useEffect(() => {
        const handleScroll = () => {
            setShowDetailNav(false)
            if (window.innerWidth >= 1024) {
                if (window.scrollY < 713 && window.scrollY > 96) {
                    setShowDetailNav(true)
                    setActiveField(1)
                }
                if (window.scrollY >= 714) {
                    setActiveField(2)
                    setShowDetailNav(true)
                }
                if (window.scrollY >= 864) {
                    setActiveField(3)
                    setShowDetailNav(true)
                }
                if (window.scrollY >= 1115) {
                    setActiveField(4)
                    setShowDetailNav(true)
                }
                if (window.scrollY >= 1302) {
                    setActiveField(5)
                    setShowDetailNav(true)
                }
                if (window.scrollY >= 1903) {
                    setShowDetailNav(false)
                }
            }
            else
                if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
                    if (window.scrollY < 912 && window.scrollY > 206) {
                        setShowDetailNav(true)
                        setActiveField(1)
                    }
                    if (window.scrollY >= 913) {
                        setActiveField(3)
                        setShowDetailNav(true)
                    }
                    if (window.scrollY >= 1141) {
                        setActiveField(4)
                        setShowDetailNav(true)
                    }
                    if (window.scrollY >= 1312) {
                        setActiveField(5)
                        setShowDetailNav(true)
                    }
                    if (window.scrollY >= 1840) {
                        setShowDetailNav(false)
                    }
                }
                else {

                    if (window.scrollY < 864 && window.scrollY >= 160) {
                        setActiveField(1)
                        setShowDetailNav(true)
                    }
                    if (window.scrollY >= 865) {
                        setActiveField(3)
                        setShowDetailNav(true)
                    }
                    if (window.scrollY >= 1096) {
                        setActiveField(4)
                        setShowDetailNav(true)
                    }
                    if (window.scrollY >= 1264) {
                        setActiveField(5)
                        setShowDetailNav(true)
                    }
                    if (window.scrollY >= 1786) {
                        setShowDetailNav(false)
                    }
                }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='lg:pb-[94px] pb-[56px] sm:pt-4 pt-3 lg:px-0 px-4'>
            <section className={`pt-3 fixed w-full bg-white border-b-1 border-b-gray-200 ${showDetailNav ? 'top-0' : 'top-[-500px]'} duration-300 left-0 z-[99] px-3`}>
                <div className='max-w-[1170px] mx-auto'>
                    <div className='flex justify-between'>
                        <div className='lg:order-0 order-1'>
                            <h2 className="mb-2 lg:text-[20px] text-[18px] font-[400] lg:leading-[30px] leading-[24px] text-[var(--txt_color_8)]">
                                {singlePropertyData?.propertyName}
                            </h2>
                            <ul className='flex items-center sm:gap-2 gap-1'>
                                <li className={`lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_8)] px-3 pb-3 ${activeField == 1 ? 'border-b-2 border-b-[var(--red_border)]' : 'border-b-2 border-b-transparent'} tracking-[0.3px] `}>
                                    About this property
                                </li>
                                <li className={`lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_8)] px-3 pb-3 ${activeField == 2 ? 'border-b-2 border-b-[var(--red_border)]' : 'border-b-2 border-b-transparent'} tracking-[0.3px] lg:block hidden `}>
                                    Property type
                                </li>
                                <li className={`lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_8)] px-3 pb-3 ${activeField == 3 ? 'border-b-2 border-b-[var(--red_border)]' : 'border-b-2 border-b-transparent'} tracking-[0.3px] `}>
                                    Property overview
                                </li>
                                <li className={`lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_8)] px-3 pb-3 ${activeField == 4 ? 'border-b-2 border-b-[var(--red_border)]' : 'border-b-2 border-b-transparent'} tracking-[0.3px] `}>
                                    Amenities
                                </li>
                                <li className={`lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_8)] px-3 pb-3 ${activeField == 5 ? 'border-b-2 border-b-[var(--red_border)]' : 'border-b-2 border-b-transparent'} tracking-[0.3px] `}>
                                    Location
                                </li>
                            </ul>
                        </div>
                        <div className='sm:order-1 order-0 sm:mb-0 mb-3 sm:block hidden'>
                            <div className=''>
                                <p className='lg:text-[32px] text-[25px] lg:leading-[40px] leading-[30px] font-[500] text-left text-[var(--txt_color_2)] capitalize mb-4 flex items-end'>
                                    <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-left text-[var(--txt_color_3)] capitalize mr-2'>
                                        price
                                    </span>
                                    <span className='inline-block'>&#8377; {price}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div className={` ${showModal == true ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 fixed left-0 top-0 w-[100%] ease-in-out  h-[100vh] z-[9999] bg-[var(--md_dark_bg)]`} >
                <div className={`${showModal == true ? "top-0 opacity-100" : "top-[-1000px] opacity-0"} duration-500 ease-in-out relative left-0 max-w-[1140px] h-[92%] mx-auto my-auto lg:my-7 border rounded-[10px]`}>
                    <div className='h-full'>
                        <img src={staticPath + singlePropertyData?.propertyImage} alt="" className='w-full h-full object-fill rounded-[10px]' />
                    </div>
                    <div onClick={() => setShowModal(false)} className='absolute top-0 right-0 bg-white border-1 border-white rounded-[5px] w-[40px] h-[40px] flex justify-center items-center mt-3 mr-3 cursor-pointer '>
                        <FaXmark className='text-2xl' />
                    </div>
                </div>
            </div>
            {/* Modal */}

            {singlePropertyData ?

                <div className='max-w-[1170px] mx-auto'>
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
                                    {singlePropertyData?.propertyName}
                                </span>
                            </li>
                        </ol>
                    </div>
                    <div className='sm:mb-9 mb-3 max-w-full'>
                        <div className='flex justify-between'>
                            <div className='lg:max-w-[688px] sm:max-w-[460px] max-w-[260px] w-full'>
                                <h2 className='lg:text-[20px] text-[16px] lg:leading-[30px] leading-[24px] font-[400] text-left text-[rgb(23,19,46)] mb-2 capitalize'>
                                    {singlePropertyData?.propertyName}
                                </h2>
                                <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-left text-[var(--txt_color_3)] tracking-[0.3px] capitalize mb-4 flex items-center'>
                                    <span className='mr-1'><GrLocation /></span>
                                    {singlePropertyData?.propertyLocation}
                                </p>
                            </div>
                            <div className='sm:mb-0 mb-3 '>
                                <div className=''>
                                    <p className='lg:text-[32px] text-[25px] lg:leading-[40px] leading-[30px] font-[500] text-left text-[var(--txt_color_2)] capitalize mb-4 flex items-end'>
                                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-left text-[var(--txt_color_3)] capitalize mr-2'>
                                            price
                                        </span>
                                        <span className='inline-block'>&#8377; {price}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:gap-[40px] gap-5 '>
                        <div className='basis-[774px] lg:order-0 order-1 '>
                            <div className=' rounded-[8px] mb-8 border-1 border-gray-200 bg-white'>
                                <div className='relative group'>
                                    <figure className=''>
                                        <img src={staticPath + singlePropertyData?.propertyImage} alt="" className='w-full max-h-[445px] min-h-[445px] object-cover rounded-[8px_8px_0px_0px]' />
                                    </figure>
                                    <div onClick={() => setShowModal(true)} className='absolute left-[50%] top-[50%] translate-[-50%] group-hover:opacity-100 opacity-0 duration-150 cursor-pointer'>
                                        <div className='w-[36px] h-[36px] rounded-[6px] bg-[var(--md_dark_bg)] flex items-center justify-center'>
                                            <span className='px-2 py-1 lg:text-[24px] text-[13px] lg:leading-[24px] leading-[21px] font-[400] text-white' ><CgArrowsExpandRight /></span>
                                        </div>
                                    </div>

                                    <div className='absolute top-0 right-0 lg:mt-3 mt-[10px] lg:mr-3 mr-[10px]'>
                                        <div className='flex lg:rounded-[8px] rounded-[6px]'>
                                            <span className='lg:px-2 px-1.5 py-1 lg:text-[11px] text-[8px] lg:leading-[18px] leading-[16px] font-[700] text-white bg-[var(--red_btn_bg)] lg:rounded-[6px_0px_0px_6px] rounded-[4px_0px_0px_4px] uppercase'>
                                                {singlePropertyData?.parentPropertyType?.propertyTypeName}
                                            </span>
                                            <span className='lg:px-2 px-1.5 py-1 lg:text-[11px] text-[8px] lg:leading-[18px] leading-[16px] font-[700] text-white bg-[var(--dark_btn_bg)] lg:rounded-[0px_6px_6px_0px] rounded-[0px_4px_4px_0px] uppercase'>
                                                for {singlePropertyData?.propertyFor}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:py-4 py-3 sm:px-7 px-6'>
                                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-3'>
                                        <div className='py-2 text-center'>
                                            <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                                                Property ID:
                                            </span>
                                            <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                                                {singlePropertyData?.propertyId}
                                            </p>
                                        </div>
                                        <div className='py-2 text-center'>
                                            <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                                                Size:
                                            </span>
                                            <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                                                {area}
                                            </p>
                                        </div>
                                        <div className='py-2 text-center'>
                                            <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                                                Direction:
                                            </span>
                                            <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                                                {singlePropertyData?.propertyDirection}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <PropertyType subPropertyTypeName={singlePropertyData?.subPropertyType?.subPropertyTypeName} />
                            <PropertyOverview overview={singlePropertyData} />
                            <PropertyAmenities propertyAmenities={singlePropertyData?.propertyAmenities} imgPath={amenityImgPath} />
                            <PropertyLocation propertyLocation={singlePropertyData?.propertyLocation} />


                        </div>
                        <div className=' basis-[356px] max-w-full mb-[22px] lg:order-0 order-1 '>
                            <div className=' w-full sticky top-[100px]'>
                                <EnquiryForm property={singlePropertyData.propertyName} property_id={singlePropertyData._id} />
                                <ShareProperty />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='max-w-[1170px] mx-auto'>
                    <div className='flex justify-center items-center text-center sm:min-h-[400px] min-h-[360px]'>
                        <div>
                            <img src="/images/no-results.png" alt="" className='max-w-[120px] max-h-[138px] mx-auto sm:mb-[22px] mb-[18px] ' />
                            <h3 className='lg:text-[28px] text-[18px] lg:leading-[38px] leading-[28px] font-[500] text-[var(--primary_text_color)] mb-[12px]'>
                                No More Listing
                            </h3>
                            <p className='lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_3)] mb-3 tracking-[0.3px] max-w-[600px] w-full mx-auto '>
                                This template allows you to add more text after the list of properties as well. You can add here a text or a banner of your choice.
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
