"use client"
import Link from 'next/link';
import React, { use, useEffect, useRef, useState } from 'react'
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { RiExpandUpDownLine } from "react-icons/ri";
import { BsDash } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import axios from 'axios';

export default function FilterProperties({ showResFilter, setShowResFilter, setSelectSorting, setFilters,getAllProperties,type,area }) {
  let [propertyFor, setPropertyFor] = useState('')
  let [propertyType, setPropertyType] = useState(type || '')
  let [propertyArea, setPropertyArea] = useState(area || '')
  let [propertyPrice, setPropertyPrice] = useState('')

  let [localityname, setLocalityName] = useState('')

  let handleFilters = () => {
    const filters = {}
    if (propertyFor) setFilters(filters.propertyFor = propertyFor)
    if (propertyType) setFilters(filters.propertyType = propertyType)
    if (propertyArea) setFilters(filters.propertyArea = propertyArea)
    if (propertyPrice) setFilters(filters.propertyPrice = propertyPrice)

    setFilters(filters)
    getAllProperties(propertyType)

  }


  let [showDropDown, setShowDropDown] = useState(0)
  let [showSelectArea, setShowSelectArea] = useState('')

  let [showFilter, setShowFilter] = useState(false)

  let handleResetFilter = () => {
    setPropertyFor('')
    setPropertyType('')
    setPropertyArea('')
    setPropertyPrice('')
    setSelectSorting('')
  }

  let [megaMenu, setMegaMenu] = useState([])
  let [localities, setLocalities] = useState([])

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

  let getLocalitiesList = () => {
    axios.get(`${apiBaseUrl}home/locality-list`,{
      params : {localityname}
    })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);

          setLocalities(finalRes.data)
        }
      })
  }

  useEffect(()=>{
    getLocalitiesList()
  },[localityname])

  useEffect(() => {
    getMegaMenu()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 72) {
        setShowFilter(true)
      }
      else {
        setShowFilter(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div>
      <div className={`lg:hidden ${showResFilter == true ? "bg-[rgba(0,0,0,0.5)] block" : "hidden"} absolute top-0 left-0 w-full h-[100vh] z-[28] `}></div>

      <div className={` ${showFilter ? 'lg:top-0 lg:fixed' : 'lg:sticky'} fixed lg:left-0 top-0 ${showResFilter == true ? "right-[0px]" : "lg:left-0 right-[-1000px]"} duration-400 transition-all ease-in-out z-[30] lg:w-full w-[65%]  min-h-[100vh] lg:min-h-[72px] justify-between bg-[var(--red_bg)]`}>
        <div className=' flex lg:flex-row flex-col lg:justify-normal justify-between lg:py-[15px] lg:px-[24px] py-3 lg:items-center min-h-[100vh] lg:min-h-[72px]'>
          <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 lg:mr-5 w-full lg:max-w-[992px] '>

            <div className='lg:hidden block lg:mb-0 mb-[18px] border-b-1 border-b-gray-300'>
              <div className='py-2 px-[20px] w-full flex justify-between items-center'>
                <div className='text-[16px] font-[500] text-white leading-[38px]'>
                  Filter
                </div>
                <span onClick={() => setShowResFilter(false)} className='text-[16px] font-[500] text-white leading-[38px]'>
                  <FaXmark />
                </span>
              </div>
            </div>
            {/* Property For */}
            {/* <div className='lg:mb-0 mb-[14px] lg:px-0 px-[20px] '>
              <div className='relative'>
                <button type='button' onClick={() => setShowDropDown(showDropDown == 1 ? '0' : '1')} className='w-full h-[42px] rounded-[8px] bg-white py-2 px-4 flex items-center justify-between '>
                  <span className={`${showSelectArea.length != 0 ? "text-[var(--primary_text_color)]" : "text-[var(--txt_color_4)]"}lg:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_1)] pr-4 text-left capitalize overflow-hidden`}>
                    {propertyFor != 0 ? `${propertyFor}` : 'Property For'}
                  </span>
                  <div className='inline-block'>
                    <RiExpandUpDownLine className='text-gray-500 text-[18px]' />
                  </div>

                  <div className={`absolute z-[12] bg-white top-[0%] lg:mt-[3px] mt-3 left-0 py-2 border-1 border-gray-300 w-full rounded-[8px] ${showDropDown == 1 ? 'lg:top-[100%] top-[80%] opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <ul className='px-2'>
                      <li onClick={(e) => setPropertyFor(e.target.innerText)} className='px-4 py-2 hover:bg-[var(--nav_active_bg)] lg:rounded-[4px] rounded-[3px] '>
                        <Link href={'#'} className='flex justify-between items-center'>
                          <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] leading-[16px] ${propertyFor === 'Buy' ? 'text-[var(--txt_color_2)]' : 'text-gray-700'}`}>
                            Buy
                          </span>
                          <span className={`text-[var(--txt_color_2)] ${propertyFor === 'Buy' ? 'block' : 'hidden'} `}>
                            <FaCheck />
                          </span>
                        </Link>
                      </li>
                      <li onClick={(e) => setPropertyFor(e.target.innerText)} className='px-4 py-2 hover:bg-[var(--nav_active_bg)] lg:rounded-[4px] rounded-[3px] '>
                        <Link href={'#'} className='flex justify-between items-center'>
                          <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] leading-[16px] ${propertyFor === 'Rent' ? 'text-[var(--txt_color_2)]' : 'text-gray-700'}`}>
                            Rent
                          </span>
                          <span className={`text-[var(--txt_color_2)] ${propertyFor === 'Rent' ? 'block' : 'hidden'} `}>
                            <FaCheck />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
            </div> */}
            {/* Property Type */}
            <div className='lg:mb-0 mb-[14px] lg:px-0 px-[20px] '>
              <div className='relative'>
                <button type='button' className='w-full h-[42px] rounded-[8px] bg-white py-2 px-4 flex items-center justify-between '>
                  <span className={`${showSelectArea.length != 0 ? "text-[var(--primary_text_color)]" : "text-[var(--txt_color_4)]"}lg:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_1)] pr-4 text-left capitalize overflow-hidden`}>
                    {propertyType != 0 ? `${propertyType}` : 'Property Type'}
                  </span>
                  <div className='inline-block'>
                    <RiExpandUpDownLine onClick={() => setShowDropDown(showDropDown == 1 ? '0' : '1')} className='text-gray-500 text-[18px]' />
                  </div>

                  <div className={`absolute z-[12] bg-white top-[0%] lg:mt-[3px] mt-3 left-0 py-2 border-1 border-gray-300 w-full max-h-[320px] overflow-y-scroll rounded-[8px] ${showDropDown == 1 ? 'lg:top-[100%] top-[80%] opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <ul className='px-2'>
                      {megaMenu.length >= 1 &&
                        megaMenu.map((items, index) => (

                          <li key={index} onClick={(e) => setPropertyType(e.target.innerText)} className='lg:rounded-[4px] rounded-[3px] '>
                            <Link href={'#'} className='flex justify-between items-center px-4 py-2 hover:bg-[var(--nav_active_bg)]'>
                              <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] leading-[16px] ${propertyType == items.propertyTypeName ? 'text-[var(--txt_color_2)]' : 'text-gray-700'}`}>
                                {items.propertyTypeName}
                              </span>
                              <span className={`text-[var(--txt_color_2)] ${propertyType == items.propertyTypeName ? 'block' : 'hidden'} `}>
                                <FaCheck />
                              </span>
                            </Link>
                            <ul>
                              {items.subpropertytypes.map((value, idx) => (
                                < li key={idx} onClick={(e) => setPropertyType(e.target.innerText)} className=' lg:rounded-[4px] rounded-[3px] '>
                                  <Link href={'#'} className='flex justify-between items-center px-4 py-2 hover:bg-[var(--nav_active_bg)]'>
                                    <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] leading-[16px] ml-4 flex items-center ${propertyType == value.subPropertyTypeName ? 'text-[var(--txt_color_2)]' : 'text-gray-700'}`}>
                                      <BsDash /> {value.subPropertyTypeName}
                                    </span>
                                    <span className={`text-[var(--txt_color_2)] ${propertyType == value.subPropertyTypeName ? 'block' : 'hidden'} `}>
                                      <FaCheck />
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}

                    </ul>
                  </div>
                </button>
              </div>
            </div>
            {/* Property Area */}
            <div className='lg:mb-0 mb-[14px] lg:px-0 px-[20px] '>
              <div className='relative'>
                <button type='button'  className='w-full h-[42px] rounded-[8px] bg-white py-2 px-4 flex items-center justify-between '>
                  <span className={`${showSelectArea.length != 0 ? "text-[var(--primary_text_color)]" : "text-[var(--txt_color_4)]"}lg:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_1)] pr-4 text-left capitalize overflow-hidden`}>
                    {propertyArea != 0 ? `${propertyArea}` : 'Area'}
                  </span>
                  <div className='inline-block'>
                    <RiExpandUpDownLine onClick={()=>setShowDropDown(showDropDown==2 ? '0' : '2')} className='text-gray-500 text-[18px]' />
                  </div>

                  <div className={`absolute z-[12] bg-white top-[0%] lg:mt-[3px] mt-3 left-0 py-2 border-1 border-gray-300 w-full rounded-[8px] ${showDropDown == 2 ? 'lg:top-[100%] top-[80%] opacity-100 visible' : 'opacity-0 invisible'} overflow-y-scroll max-h-[320px]`}>
                    <div className='px-2 mb-2'>
                      <input onChange={(e)=>setLocalityName(e.target.value)} type="text" placeholder='Search...' className='border-1 border-gray-300 w-full lg:rounded-[4px] rounded-[3px] px-3 py-1.5 text-[14px] outline-0' />
                    </div>
                    <ul className='px-2'>
                      {localities.length >= 1 &&
                        localities.map((items, index) => (

                          <li key={index} onClick={(e) => {
                            setPropertyArea(e.target.innerText)
                            setShowDropDown(showDropDown==2 ? '0' : '2')

                          }} className='px-4 py-2 hover:bg-[var(--nav_active_bg)] lg:rounded-[4px] rounded-[3px] text-left capitalize '>
                            <Link href={'#'} className='flex justify-between items-center'>
                              <span className={`lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] leading-[16px] ${propertyArea == items.localityName ? 'text-[var(--txt_color_2)]' : 'text-gray-700'}`}>
                                {items.localityName}
                              </span>
                              <span className={`text-[var(--txt_color_2)] ${propertyArea == items.localityName ? 'block' : 'hidden'} `}>
                                <FaCheck />
                              </span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </button>
              </div>
            </div>
            {/* Property Price */}
            <div className='lg:mb-0 mb-[14px] lg:px-0 px-[20px] '>
              <div className='relative'>
                <button type='button' className='w-full h-[42px] rounded-[8px] bg-white py-2 px-4 flex items-center justify-between '>
                  <span className={`${showSelectArea.length != 0 ? "text-[var(--primary_text_color)]" : "text-[var(--txt_color_4)]"}lg:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_1)] pr-4 text-left capitalize overflow-hidden`}>
                    {propertyPrice != 0 ? `\u20B90 Cr - \u20B9${propertyPrice} Cr` : 'Price'}
                  </span>
                  <div className='inline-block'>
                    <RiExpandUpDownLine onClick={() => setShowDropDown(showDropDown == 3 ? '0' : '3')} className='text-gray-500 text-[18px]' />
                  </div>

                  <div className={`absolute z-[12] bg-white top-[0%] lg:mt-[3px] mt-3 left-0 py-2 border-1 border-gray-300 w-full rounded-[8px] ${showDropDown == 3 ? 'lg:top-[100%] top-[80%] opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className='px-2 mb-2'>
                      <input onChange={(e) => setPropertyPrice((e.target.value))} type="range" min={0.0} step={0.01} max={10.0} value={propertyPrice} className='border-1 border-gray-300 w-full lg:rounded-[4px] rounded-[3px] py-1.5 text-[14px] outline-0 cursor-grabbing' />
                      <div className='lg:text-[14px] text-[13px] lg:leading-[21px] leading-[18px] font-[400] text-[var(--txt_color_1)] flex justify-between items-center'>
                        <span>&#8377;0</span>
                        <BsDash />
                        <span>&#8377;{propertyPrice != 0 ? `${propertyPrice}` : '10'} Cr</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className='flex items-center lg:px-0 px-[20px]'>
            <button onClick={handleFilters} className='min-h-[42px] min-w-[132px] bg-[var(--nav_btn_bg)] lg:rounded-[8px] rounded-[6px] text-white cursor-pointer flex items-center justify-center group relative'>
              <span className='lg:text-[14px] text-[12px] font-[500] lg:leading-[28px] leading-[22px] capitalize  duration-200 group-hover:mr-2 '>
                search
              </span>
              <span className='group-hover:opacity-100 absolute right-[25px] group-hover:right-[25px] duration-200 z-10 opacity-0 '>
                <IoSearchSharp className='lg:text-[16px] text-[14px] text-white' />
              </span>
            </button>

            <button onClick={()=>{
              handleResetFilter()
              getAllProperties()
              setFilters({})
            }} className='min-h-[42px] min-w-[132px] text-white cursor-pointer flex items-center justify-center'>
              <span className=''>
                <FaCircleXmark className='lg:text-[14px] text-[13px] lg:leading-[20px] leading-[16px] text-white' />
              </span>
              <span className='lg:text-[14px] text-[12px] font-[400] lg:leading-[20px] leading-[16px] ml-1 capitalize'>
                Reset Filters
              </span>
            </button>
          </div>
        </div>
      </div >


    </div >
  )
}

