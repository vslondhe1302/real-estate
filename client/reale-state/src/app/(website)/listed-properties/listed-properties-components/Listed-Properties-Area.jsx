"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { CgArrowsExpandRight } from 'react-icons/cg'
import { FaAngleDown, FaAngleRight, FaArrowRight, FaCheck, FaFilter } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'

export default function ListedPropertiesArea({ setShowResFilter, selectSorting, setSelectSorting, propertiesData, staticPath, amenityImgPath }) {
    let [sortBy, setSortBy] = useState(false)

    return (
        <div className='lg:pb-[96px] pb-[54px] sm:pt-4 pt-3 lg:px-0 px-4 bg-[rgb(248,248,252)]'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='w-full lg:mb-[44px] mb-[34px]'>
                    <div className='lg:mb-10 mb-7'>
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
                                    listed properties
                                </span>
                            </li>
                        </ol>
                    </div>
                    <div className='mb-4'>
                        <div className='flex sm:flex-row flex-col justify-between sm:items-center'>
                            <h2 className='lg:text-[20px] text-[16px] lg:leading-[30px] leading-[24px] font-[500] text-left text-[var(--txt_color_1)] lg:mb-[32px] mb-[24px] sm:order-0 order-1'>
                                {propertiesData.length} results as per applied filter
                            </h2>
                            <div className='sm:order-1 order-0 sm:mb-0 mb-2'>
                                <div className='lg:mr-0 mr-[10px] flex justify-end'>
                                    <div className='lg:mr-0 mr-[10px] relative'>
                                        <button onClick={() => setSortBy(!sortBy)} className='lg:h-[36px] h-[30px] px-[12px] py-[8px] rounded-r-full rounded-l-full border-1 border-gray-300 flex items-center cursor-pointer '>
                                            <img src="/images/sorted-by-icon.svg" alt="" className='w-[12px] h-[8px] mr-2 ' />
                                            <span className='lg:text-[14px] text-[12px] lg:leading-[24px] leading-[20x] font-[400]  text-[var(--txt_color_5)] lg:mr-4 mr-2'>
                                                {selectSorting != 0 ? `${selectSorting}` : "Sort By"}
                                            </span>
                                            <span>
                                                <FaAngleDown className='lg:text-[14px] text-[12px] text-[var(--txt_color_5)]' />
                                            </span>
                                        </button>

                                        <div className={`absolute z-[12] bg-white top-[0%] lg:mt-[3px] mt-2 right-0 py-2 border-1 border-gray-300 lg:min-w-[260px] min-w-[220px] rounded-[8px] ${sortBy == true ? 'lg:top-[100%] top-[80%] opacity-100 visible' : 'opacity-0 invisible'}`}>
                                            <ul className=''>
                                                <li onClick={(e) => {
                                                    setSelectSorting(e.target.innerText)
                                                    setSortBy(false)
                                                }} className='px-4 py-2 hover:bg-[var(--nav_active_bg)] lg:rounded-[4px] rounded-[3px] group'>
                                                    <Link href={'#'} className='flex justify-between items-center'>
                                                        <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] group-hover:text-gray-700 leading-[16px] ${selectSorting == 'Price -- Low to High' ? "text-[var(--txt_color_2)]" : "text-gray-700"}`}>
                                                            Price -- Low to High
                                                        </span>
                                                        <span className={`text-[var(--txt_color_2)] group-hover:text-gray-700 ${selectSorting == 'Price -- Low to High' ? "block" : "hidden"}`}>
                                                            <FaCheck />
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li onClick={(e) => {
                                                    setSelectSorting(e.target.innerText)
                                                    setSortBy(false)
                                                }} className='px-4 py-2 hover:bg-[var(--nav_active_bg)] lg:rounded-[4px] rounded-[3px] group'>
                                                    <Link href={'#'} className='flex justify-between items-center'>
                                                        <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] group-hover:text-gray-700 leading-[16px] ${selectSorting == 'Price -- High to Low' ? "text-[var(--txt_color_2)]" : "text-gray-700"}`}>
                                                            Price -- High to Low
                                                        </span>
                                                        <span className={`text-[var(--txt_color_2)] group-hover:text-gray-700 ${selectSorting == 'Price -- High to Low' ? "block" : "hidden"}`}>
                                                            <FaCheck />
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li onClick={(e) => {
                                                    setSelectSorting(e.target.innerText)
                                                    setSortBy(false)
                                                }} className='px-4 py-2 hover:bg-[var(--nav_active_bg)] lg:rounded-[4px] rounded-[3px] group'>
                                                    <Link href={'#'} className='flex justify-between items-center'>
                                                        <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] group-hover:text-gray-700 leading-[16px] ${selectSorting == 'Newest First' ? "text-[var(--txt_color_2)]" : "text-gray-700"}`}>
                                                            Newest First
                                                        </span>
                                                        <span className={`text-[var(--txt_color_2)] group-hover:text-gray-700 ${selectSorting == 'Newest First' ? "block" : "hidden"}`}>
                                                            <FaCheck />
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='lg:hidden block '>
                                        <button onClick={() => setShowResFilter(true)} className='h-[30px] px-[16px] py-[6px] rounded-r-full rounded-l-full border-1 border-gray-300 flex items-center cursor-pointer '>
                                            <span><FaFilter className='lg:text-[14px] text-[12px] text-[var(--txt_color_1)]' /></span>
                                            <span className='lg:text-[14px] text-[12px] lg:leading-[24px] leading-[20x] font-[400]  text-[var(--txt_color_5)] ml-2'>Filter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    {
                        propertiesData.length >= 1 ?
                            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]'>
                                {propertiesData.map((items, index) => {
                                    let bhiga = items.propertyArea / 3025
                                    let area = Number.isInteger(bhiga) ? `${bhiga} Bhiga` : `${items.propertyArea} sq.yards`

                                    let price
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

                                        <div key={index} className=''>
                                            <div className='border-1 border-gray-200 rounded-[10px] shadow-lg shadow-gray-300 overflow-hidden'>
                                                <div className='w-full relative group'>
                                                    <div className=''>
                                                        <img src={staticPath + items.propertyImage} alt="" className='w-full max-h-[227px] min-h-[227px] rounded-[10px_10px_0px_0px] object-cover' />
                                                    </div>
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

                                                <div className='lg:px-6 px-4 lg:py-6 py-4 lg:min-h-[240px] lg:max-h-[240px] sm:min-h-[200px] sm:max-h-[200px] min-h-[180px] max-h-[180px] flex flex-col justify-between '>
                                                    <div className='lg:mb-6 mb-4 '>
                                                        <div>
                                                            <Link href={'#'}>
                                                                <h3 className='lg:text-[18px] text-[15px] lg:leading-[27px] leading-[23px] font-[400] mb-2 text-[var(--txt_color_5)] '>
                                                                    {items.propertyName}
                                                                </h3>
                                                            </Link>
                                                        </div>
                                                        <div className='flex'>
                                                            <span className='mr-1 lg:mt-1 '><GrLocation className='lg:text-[16px] text-[14px]' /></span>
                                                            <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[400] text-[var(--txt_color_3)]'>
                                                                {items.propertyLocation}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="grid sm:grid-cols-2 grid-cols-3 grid-gap-1 mb-4">
                                                        <div className="bg-gray-300 py-2 lg:px-3 px-[10px] text-center text-[12px] lg:leading-[18px] leading-[15px] font-[400] text-[var(--txt_color_5)] rounded-[6px] border-1 border-gray-200">
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
                                                                        &#8377; {price}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <Link href={`/listed-properties/property-detail/${items.slug}`} className='w-full lg:max-w-[132px] max-w-[105px] block'>
                                                                <button className='w-full lg:max-w-[132px] max-w-[105px] bg-[var(--red_btn_bg)] lg:min-h-[40px] min-h-[32px] lg:rounded-[8px] rounded-[5px] text-white cursor-pointer flex items-center justify-center group'>
                                                                    <span className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] capitalize group-hover:mr-2 duration-150'>
                                                                        More Details
                                                                    </span>
                                                                    <span className='group-hover:opacity-100 opacity-0 duration-150'>
                                                                        <FaArrowRight className='lg:text-[14px] text-[13px]' />
                                                                    </span>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                                }
                            </div>
                            :
                            <div className='flex justify-center items-center text-center sm:min-h-[400px] min-h-[360px]'>
                                <div key={1}>
                                    <img src="/images/no-results.png" alt="" className='max-w-[120px] max-h-[138px] mx-auto sm:mb-[22px] mb-[18px] ' />
                                    <h3 className='lg:text-[28px] text-[18px] lg:leading-[38px] leading-[28px] font-[500] text-[var(--primary_text_color)] mb-[12px]'>
                                        No More Listing
                                    </h3>
                                    <p className='lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_3)] mb-3 tracking-[0.3px] max-w-[600px] w-full mx-auto '>
                                        This template allows you to add more text after the list of properties as well. You can add here a text or a banner of your choice.
                                    </p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

