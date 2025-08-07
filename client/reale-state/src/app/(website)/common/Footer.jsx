"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  let [propertyTypes, setPropertyTypes] = useState([])

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let getPropertyTypes = () => {
    axios.get(`${apiBaseUrl}home/property-types`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          setPropertyTypes(finalRes.data)
        }
      })
  }

  useEffect(() => {
    getPropertyTypes()
  }, [])
  return (
    <div className='w-[100%] lg:pt-[100px] sm:pt-[60px] pt-[45px] lg:pb-[36px] sm:pb-[30px] pb-6 lg:px-0 px-4 bg-[var(--red_bg)]'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='lg:mb-[96px] sm:mb-[38px] mb-[30px] grid lg:grid-cols-[23%_auto] grid-cols-1 lg:gap-[50px] gap-[36px] '>
          <div className='lg:mb-0 sm:mb-[45px] mb-[38px'>
            <ul className=' '>
              <li className='text-[16px] lg:leading-[24px] leading-[22px] font-[500] text-left text-white lg:mb-[24px] mb-4'>
                About Sunrise Home Real E-State
              </li>
              <li>
                <p className='lg:text-[16px] text-[15px] lg:leading-[24px] leading-[22px] font-[400] text-left text-white mb-3 pr-4'>
                  Proudly radiating the power of undaunted success since 1987, Sunrise Home has established its stature as one of Rajasthan’s finest real e-state.
                </p>
              </li>
              <li>
                <ul className='flex'>
                  <li className='mr-[10px]'>
                    <Link href={'#'} className='w-[28px] h-[28px] rounded-full border-1 border-white flex justify-center items-center duration-200 ease-in-out group hover:bg-white'>
                      <FaFacebookF className='text-[14px] text-white group-hover:text-[var(--txt_color_2)] duration-200 ease-in-out ' />
                    </Link>
                  </li>
                  <li className='mr-[10px]'>
                    <Link href={'#'} className='w-[28px] h-[28px] rounded-full border-1 border-white flex justify-center items-center duration-200 ease-in-out group hover:bg-white'>
                      <FaInstagram className='text-[14px] text-white group-hover:text-[var(--txt_color_2)] duration-200 ease-in-out ' />
                    </Link>
                  </li>
                  <li className='mr-[10px]'>
                    <Link href={'#'} className='w-[28px] h-[28px] rounded-full border-1 border-white flex justify-center items-center duration-200 ease-in-out group hover:bg-white'>
                      <FaLinkedinIn className='text-[14px] text-white group-hover:text-[var(--txt_color_2)] duration-200 ease-in-out ' />
                    </Link>
                  </li>
                  <li className='mr-[10px]'>
                    <Link href={'#'} className='w-[28px] h-[28px] rounded-full border-1 border-white flex justify-center items-center duration-200 ease-in-out group hover:bg-white'>
                      <FaYoutube className='text-[14px] text-white group-hover:text-[var(--txt_color_2)] duration-200 ease-in-out ' />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='grid lg:grid-cols-[65%_auto] grid-cols-1 mb-2'>
            <div className='grid grid-cols-2 mb-10'>
              <div className=''>
                <h3 className='text-[16px] lg:leading-[24px] leading-[22px] font-[500] text-left text-white lg:mb-[24px] sm:mb-5 mb-4'>
                  Property For
                </h3>
                <ul className='mb-4'>
                  {propertyTypes.length >= 1 &&
                    propertyTypes.map((items, index) => (
                      <li key={index} className='sm:mb-3 mb-2'>
                        <Link href={`/listed-properties/${items.slug}-property-jodhpur`} className='text-[14px] lg:leading-[21px] leading-[18px] font-[400] text-left text-white relative pb-[3px]  group '>
                          {items.propertyTypeName}
                          <div className='absolute bottom-0 group-hover:left-0 h-[1px] right-0 w-0 group-hover:w-full duration-300 bg-white'></div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className=''>
                <h3 className='text-[16px] lg:leading-[24px] leading-[22px] font-[500] text-left text-white lg:mb-[24px] sm:mb-5 mb-4'>
                  Quick Link
                </h3>
                <ul className='mb-4'>
                  <li className='sm:mb-3 mb-2'>
                    <Link href={'#'} className='text-[14px] lg:leading-[21px] leading-[18px] font-[400] text-left text-white relative pb-[3px]  group'>
                      Rent A Property
                      <div className='absolute bottom-0 group-hover:left-0 h-[1px] right-0 w-0 group-hover:w-full duration-300 bg-white'></div>
                    </Link>
                  </li>
                  <li className='sm:mb-3 mb-2'>
                    <Link href={'#'} className='text-[14px] lg:leading-[21px] leading-[18px] font-[400] text-left text-white relative pb-[3px]  group'>
                      Blog
                      <div className='absolute bottom-0 group-hover:left-0 h-[1px] right-0 w-0 group-hover:w-full duration-300 bg-white'></div>
                    </Link>
                  </li>
                  <li className='sm:mb-3 mb-2'>
                    <Link href={'#'} className='text-[14px] lg:leading-[21px] leading-[18px] font-[400] text-left text-white relative pb-[3px]  group'>
                      Terms & Conditions
                      <div className='absolute bottom-0 group-hover:left-0 h-[1px] right-0 w-0 group-hover:w-full duration-300 bg-white'></div>
                    </Link>
                  </li>
                  <li className='sm:mb-3 mb-2'>
                    <Link href={'#'} className='text-[14px] lg:leading-[21px] leading-[18px] font-[400] text-left text-white relative pb-[3px]  group'>
                      Privacy Policy
                      <div className='absolute bottom-0 group-hover:left-0 h-[1px] right-0 w-0 group-hover:w-full duration-300 bg-white'></div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=''>
              <h3 className='text-[16px] lg:leading-[24px] leading-[22px] font-[500] text-left capitalize text-white lg:mb-[24px] mb-5'>
                newsletter
              </h3>
              <div className='mb-3'>
                <div>
                  <input type="email" placeholder='Enter your email address' className='lg:px-4 p-3 py-1.5 bg-white w-full lg:h-[56px] h-[46px] rounded-[6px] outline-none lg:text-[16px] text-[14px]' />
                </div>
              </div>
              <button className='lg:text-[16px] text-[14px] lg:leading-[20px] leading-[18px] font-[500] text-center capitalize text-white bg-[var(--nav_btn_bg)] lg:h-[56px] h-[46px] w-full rounded-[6px] cursor-pointer '>
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className='lg:pt-[36px] pt-[30px] border-t-1 border-t-[rgb(233,80,93)]'>
          <div className='lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[22px] font-[400] text-center text-white mb-3 pr-4'>
            © Sunrise Home Real E-State - All rights reserved | Design and Developed by:
            <Link href={'#'} className='ml-[4px]'>WsCubTech</Link >
          </div>
        </div>
      </div>
    </div>
  )
}
