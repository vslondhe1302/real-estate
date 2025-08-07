'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiArrowRight } from "react-icons/hi";
import { FaAngleDown, FaXmark } from "react-icons/fa6";
import { RiMenu2Line } from "react-icons/ri";
import axios from 'axios';


export default function Header() {
    let [showResMenu, setShowResMenu] = useState(false)
    let [subMenu, setSubMenu] = useState(0)
    let [selectedMenu, setSelectedMenu] = useState(0)

    let [megaMenu, setMegaMenu] = useState([])

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

    let getMegaMenu = () => {
        axios.get(`${apiBaseUrl}home/mega-menu`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setMegaMenu(finalRes.data)

                }
            })
    }

    useEffect(() => {
        getMegaMenu()
    }, [])

    return (
        <>
            <header className=' bg-white w-[100%] lg:block hidden z-[999] relative'>
                <div className='max-w-[100%] lg:px-[24px] sm:px-[20px] px-[16px] mt-[4px] border-b-1 border-b-gray-100'>
                    <nav className='flex lg:justify-between items-center'>
                        <div className=''>
                            <Link href={'/'} className='h-[56px] w-[106px] inline-block'>
                                <img src="/images/sunrise_real_e_state.png" alt="company_logo" className='h-full w-full' />
                            </Link>
                        </div>
                        <div className='flex'>
                            <ul className='lg:flex h-full hidden items-center mr-8'>
                                <li onClick={() => setSelectedMenu(1)} className='py-[20px] lg:mr-3 mr-2 cursor-pointer group'>
                                    <Link href={'/'} className={`rounded-[4px] py-2 px-3 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:bg-[var(--nav_active_bg)] group-hover:text-[var(--nav_active_txt)] ${selectedMenu == 1 ? "bg-[var(--nav_active_bg)] text-[var(--nav_active_txt)]" : "text-[var(--primary_text_color)]"} block`}>
                                        Home
                                    </Link>
                                </li>
                                <li onClick={() => setSelectedMenu(2)} className='py-[20px] lg:mr-3 mr-2 cursor-pointer group'>
                                    <Link href={'/about-us'} className={`rounded-[4px] py-2 px-3 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:bg-[var(--nav_active_bg)] group-hover:text-[var(--nav_active_txt)] ${selectedMenu == 2 ? 'bg-[var(--nav_active_bg)] text-[var(--nav_active_txt)]' : 'text-[var(--primary_text_color)]'} block`}>
                                        About us
                                    </Link>
                                </li>
                                <li onClick={() => setSelectedMenu(3)} className='main-menu py-[20px] lg:mr-3 mr-2 cursor-pointer group'>
                                    <Link href={'/'} className={`rounded-[4px] py-2 px-3 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:bg-[var(--nav_active_bg)] group-hover:text-[var(--nav_active_txt)] ${selectedMenu == 3 ? 'bg-[var(--nav_active_bg)] text-[var(--nav_active_txt)]' : 'text-[var(--primary_text_color)]'} flex items-center`}>
                                        <span className='mr-2'>Our Services</span>
                                        <span><FaAngleDown className='text-[12px] group-hover:rotate-180 duration-300' /></span>
                                    </Link>

                                    <ul className='mega-menu p-3 w-[280px] bg-white border-1 border-gray-200 rounded-[6px] '>
                                        
                                                <li className='py-1 w-[100%] hover:bg-[var(--nav_active_bg)] cursor-pointer'>
                                                    <Link href={`/our-services/real-estate-property-listing-service`} className='text-[var(--primary_text_color)] rounded-[4px] py-2 px-2 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:text-[var(--nav_active_txt)]'>
                                                        Real Estate Property Listing Service
                                                    </Link>
                                                </li>
                                                <li className='py-1 w-[100%] hover:bg-[var(--nav_active_bg)] cursor-pointer'>
                                                    <Link href={`/our-services/real-estate-brokerage-service`} className='text-[var(--primary_text_color)] rounded-[4px] py-2 px-2 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:text-[var(--nav_active_txt)]'>
                                                        Real Estate Brokerage Service
                                                    </Link>
                                                </li>
                                            
                                    </ul>
                                </li>
                                <li onClick={() => setSelectedMenu(4)} className='main-menu py-[20px] lg:mr-3 mr-2 cursor-pointer group'>
                                    <Link href={'#'} className={`rounded-[4px] py-2 px-3 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:bg-[var(--nav_active_bg)] group-hover:text-[var(--nav_active_txt)] ${selectedMenu == 4 ? 'bg-[var(--nav_active_bg)] text-[var(--nav_active_txt)]' : 'text-[var(--primary_text_color)]'} flex items-center`}>
                                        <span className='mr-2'>Properties For</span>
                                        <span><FaAngleDown className='text-[12px] group-hover:rotate-180 duration-300' /></span>
                                    </Link>
                                    <ul className='mega-menu p-3 w-[220px] bg-white border-1 border-gray-200 rounded-[6px] '>
                                        {megaMenu.length >= 1 &&
                                            megaMenu.map((items, index) => {
                                                return (
                                                    <li key={index} className='py-1 cursor-pointer hover:bg-[var(--nav_active_bg)]'>
                                                        <Link href={`/listed-properties/${items.slug}-property-jodhpur`} className='text-[var(--primary_text_color)] rounded-[4px] py-2 px-2 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:text-[var(--nav_active_txt)]'>
                                                            {items.propertyTypeName}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </li>
                                <li onClick={() => setSelectedMenu(5)} className='py-[20px] lg:mr-3 mr-2 cursor-pointer group'>
                                    <Link href={'/listed-properties'} className={`rounded-[4px] py-2 px-3 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:bg-[var(--nav_active_bg)] group-hover:text-[var(--nav_active_txt)] ${selectedMenu == 5 ? 'bg-[var(--nav_active_bg)] text-[var(--nav_active_txt)]' : 'text-[var(--primary_text_color)]'} block`}>
                                        Listed Properties
                                    </Link>
                                </li>
                                <li onClick={() => setSelectedMenu(6)} className='py-[20px] lg:mr-3 mr-2 cursor-pointer group'>
                                    <Link href={'/contact-us'} className={`rounded-[4px] py-2 px-3 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:bg-[var(--nav_active_bg)] group-hover:text-[var(--nav_active_txt)] ${selectedMenu == 6 ? 'bg-[var(--nav_active_bg)] text-[var(--nav_active_txt)]' : 'text-[var(--primary_text_color)]'} block`}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                            <div className='flex items-center'>
                                <Link href={'#'}>
                                    <button className='relative min-w-[162px] min-h-[36px] sm:text-[14px] text-[12px] leading-[21px] font-[500] rounded-[8px] flex items-center justify-center bg-[var(--nav_btn_bg)] text-white group px-1.5 py-[1px] duration-200 ease-in-out'>
                                        <span className='capitalize group-hover:mr-2 mr-0 duration-200'>post property</span>
                                        <div className='relative flex items-center'>
                                            <span className=' group-hover:absolute group-hover:opacity-0 ml-2 duration-200'><HiArrowRight /></span>
                                            <span className=' absolute right-[-15px] text-[var(--nav_active_txt)] bg-white px-[8px] py-[4px] sm:text-[11px] text-[9px] leading-[13px] font-[400] rounded-[4px] duration-200 ease-in-out opacity-0 group-hover:opacity-100  group-hover:static '>
                                                Free
                                            </span>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Responsive Menu Start */}
            <header className=' bg-white lg:hidden block z-20 relative'>
                <div className='max-w-[100%] lg:px-[24px] sm:px-[20px] px-[16px] sm:py-[8px] py-[6px] border-b-1 border-b-gray-100'>
                    <nav className=''>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <span onClick={() => setShowResMenu(true)} className='sm:text-[24px] text-[22px]'>
                                    <RiMenu2Line />
                                </span>
                                <Link href={'/'} className='sm:h-[50px] h-[43px] sm:w-[90px] w-[80px] inline-block'>
                                    <img src="/images/sunrise_real_e_state.png" alt="company_logo" className='h-full w-full' />
                                </Link>
                            </div>
                            <div className='flex items-center'>
                                <Link href={'#'}>
                                    <button className='relative sm:min-w-[155px] sm:min-h-[34px] min-w-[148px] min-h-[32px] sm:text-[13px] text-[12px] leading-[21px] font-[500] rounded-[8px] flex items-center justify-center bg-[var(--nav_btn_bg)] text-white group px-1.5 py-[1px] duration-200 ease-in-out'>
                                        <span className='capitalize '>post property</span>
                                        <div className='relative flex items-center'>
                                            <span className=' group-hover:hidden ml-2 group-hover:ml-0 duration-200'><HiArrowRight /></span>
                                            <span className=' absolute right-[-15px] text-[var(--nav_active_txt)] bg-white px-[8px] py-[4px] sm:text-[11px] text-[9px] leading-[13px] font-[400] rounded-[4px] duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:ml-2 group-hover:static '>
                                                Free
                                            </span>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={`w-full h-full ${showResMenu === true ? 'bg-[var(--light_dark_bg)] fixed' : 'bg-none'} duration-500 ease-in-out left-0 top-0`}>
                            <div className={`fixed ${showResMenu === true ? 'left-0' : 'left-[-800px]'} left-0 top-0 duration-500 ease-in-out bg-white w-[60%] h-[100vh] p-5`}>
                                <div className='flex items-center justify-between mb-6'>
                                    <Link href={'/'} className='sm:h-[52px] h-[45px] sm:w-[100px] w-[90px]'>
                                        <img src="/images/sunrise_real_e_state.png" alt="company_logo" className='h-full w-full' />
                                    </Link>
                                    <span onClick={() => setShowResMenu(false)} className='border-1 border-gray-200 rounded-[3px] p-1'>
                                        <FaXmark className='sm:text-[18px] text-[17px]' />
                                    </span>
                                </div>
                                <ul className=''>
                                    <li className='mb-2.5 group'>
                                        <Link href={'/about-us'} className='text-[var(--primary_text_color)] sm:text-[14px] text-[13px] leading-[16px] font-[400] group-hover:text-[var(--nav_active_txt)]'>
                                            About us
                                        </Link>
                                    </li>
                                    <li onClick={() => setSubMenu(subMenu == 1 ? '0' : '1')} className=' mb-2.5 group'>
                                        <div className='text-[var(--primary_text_color)] sm:text-[14px] text-[13px] leading-[16px] font-[400] group-hover:text-[var(--nav_active_txt)] w-full py-1 flex justify-between items-center cursor-pointer'>
                                            Our Services
                                            <FaAngleDown className={`text-[12px] leading-[16px] duration-300 ease-in-out ${subMenu == 1 ? 'rotate-[360deg]' : 'rotate-270'}`} />
                                        </div>

                                        <ul className={`${subMenu == 1 ? 'max-h-100 opacity-100 visible' : 'max-h-0 invisible'} opacity-0 duration-300 ease-out w-full bg-white `}>
                                            <li className={`hover:bg-[var(--nav_active_bg)]`}>
                                                <Link href={'/real-estate-property-listing-service'} className='text-[var(--primary_text_color)] rounded-[4px] py-2 px-2 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:text-[var(--nav_active_txt)]'>
                                                    Real Estate Property Listing Service
                                                </Link>
                                            </li>
                                            <li className={`hover:bg-[var(--nav_active_bg)]`}>
                                                <Link href={'/real-estate-brokerage-service'} className='text-[var(--primary_text_color)] rounded-[4px] py-2 px-2 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:text-[var(--nav_active_txt)]'>
                                                    Real Estate Brokerage Service
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li onClick={() => setSubMenu(subMenu == 2 ? '0' : '2')} className=' mb-2.5 relative'>
                                        <div className='text-[var(--primary_text_color)] sm:text-[14px] text-[13px] leading-[16px] font-[400] py-1 flex justify-between items-center cursor-pointer hover:text-[var(--nav_active_txt)]'>
                                            Properties For
                                            <FaAngleDown className={`text-[12px] leading-[16px] duration-300 ease-in-out ${subMenu == 2 ? 'rotate-[360deg]' : 'rotate-270'}`} />
                                        </div>

                                        <ul className={` w-full ${subMenu ==2 ? "max-h-100 opacity-100 visible" : "max-h-0 opacity-0 invisible"} duration-300 ease-in-out `}>
                                        {megaMenu.length >= 1 &&
                                            megaMenu.map((items, index) => {
                                                return (
                                                    <li key={index} className='py-1 cursor-pointer hover:bg-[var(--nav_active_bg)] '>
                                                        <Link href={`/listed-properties/${items.slug}-property-jodhpur`} className='text-[var(--primary_text_color)] rounded-[4px] py-2 px-2 sm:text-[14px] text-[13px] leading-[16px] font-[400] hover:text-[var(--nav_active_txt)]'>
                                                            - {items.propertyTypeName}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                    </li>
                                    <li className=' mb-2.5 group'>
                                        <Link href={'/listed-properties'} className='text-[var(--primary_text_color)] sm:text-[14px] text-[13px] leading-[16px] font-[400] group-hover:text-[var(--nav_active_txt)]'>
                                            Listed Properties
                                        </Link>
                                    </li>
                                    <li className=' mb-2.5 group'>
                                        <Link href={'/contact-us'} className='text-[var(--primary_text_color)] sm:text-[14px] text-[13px] leading-[16px] font-[400] group-hover:text-[var(--nav_active_txt)]'>
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Responsive Menu End */}

        </>


    )
}
