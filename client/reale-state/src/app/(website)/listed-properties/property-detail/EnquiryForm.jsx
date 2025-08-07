"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function EnquiryForm({property_id,property}) {
  let [selectCountry, setSelectCountry] = useState('+91')
  let [selectType, setSelectType] = useState('buyer')

   let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let saveEnquiryData = (e) => {
    e.preventDefault()

    let formValue = new FormData(e.target)
    formValue.append("property_id",property_id)
    formValue.append("property",property)

    axios.post(`${apiBaseUrl}home/enquiry-data`,formValue)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          e.target.reset()
        }
      })
  }

  return (
    <div className='max-h-[420px] rounded-[8px] bg-white border-1 border-gray-200 mb-[22px]'>
      <div className='p-5 w-full'>
        <h3 className='lg:text-[20px] text-[16px] lg:leading-[30px] leading-[24px] font-[400] text-left text-[rgb(23,19,46)] mb-6'>
          Are you interested?
        </h3>
        <form onSubmit={saveEnquiryData}>
          <div className='flex items-center mb-6'>
            <span className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[18px] font-[400] text-left text-[var(--txt_color_8)] mr-6'>I am</span>
            <div className='flex items-center'>
              <div className='mr-6'>
                <label htmlFor="Buy" className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_8)] flex items-center'>
                  <input onChange={()=>setSelectType('buyer')} value={selectType} checked={selectType=='buyer'} type="radio" name='type' className='w-[16px] h-[16px] mr-1.5 accent-[var(--txt_color_2)]' />
                  Buyer
                </label>
              </div>
              <div className='mr-6'>
                <label htmlFor="Seller" className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_8)] flex items-center'>
                  <input onChange={()=>setSelectType('seller')} value={selectType} checked={selectType=='seller'} type="radio" name='type' className='w-[16px] h-[16px] mr-1.5 accent-[var(--txt_color_2)]' />
                  Seller
                </label>
              </div>
            </div>
          </div>
          <div className='pb-[28px] '>
            <div>
              <input type="text" name="name" placeholder='Your Name' className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_3)] h-[46px] w-full py-1.5 px-3 rounded-[8px] border-b-1 border-b-gray-200 outline-0 focus:pl-1  ' />
            </div>
          </div>
          <div>
            <div className='pb-[28px]'>
              <div className='relative sm:h-[46px] h-[36px]'>
                <input type="text" name='phone' placeholder='' className='lg:text-[14px] text-[12px] pl-[90px] tracking-[1px] pr-4 py-1.5 rounded-[8px] w-full sm:h-[46px] h-[36px] border-b-1 border-b-gray-200 outline-none' />

                <div className='absolute top-[50%] mt-[-0.5px] translate-y-[-50%] left-[8px] flex items-center'>
                  <select onChange={(e) => setSelectCountry(e.target.value)} name="country_code" id="" className='h-full border-none outline-none lg:text-[14px] text-[12px] text-[var(--txt_color_3))]'>
                    <option value="+91">IN</option>
                    <option value="+44">UK</option>
                    <option value="+1">USA</option>
                    <option value="+7">RU</option>
                    <option value="+39">IT</option>
                    <option value="+27">SA</option>
                    <option value="+33">FR</option>
                    <option value="+1">CA</option>
                    <option value="+61">AU</option>
                  </select>
                  <div className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[500] block text-[var(--txt_color_3))] ml-1'>{selectCountry}</div>
                </div>
              </div>
            </div>
            <div className='pb-[28px] '>
              <div>
                <input type="email" name="email" placeholder='Your Email' className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-left text-[var(--txt_color_3)] h-[46px] w-full py-1.5 px-3 rounded-[8px] border-b-1 border-b-gray-200 outline-0 focus:pl-1  ' />
              </div>
            </div>
            <div className='w-full '>
              <div className='w-full lg:h-[52px] h-[42px] max-w-full block'>
                <button type='submit' className='w-full h-full bg-[var(--red_btn_bg)] lg:rounded-[8px] rounded-[6px] text-white cursor-pointer flex items-center justify-center group relative'>
                  <span className='lg:text-[16px] text-[14px] font-[500] lg:leading-[28px] leading-[22px] capitalize  duration-200 group-hover:mr-2.5 '>
                    submit
                  </span>
                  <span className='group-hover:opacity-100  absolute lg:right-[110px] sm:right-[290px] right-[135px] group-hover:lg:right-[110px] group-hover:sm:right-[290px]  group-hover:right-[135px] duration-200 z-10 opacity-0 '>
                    <FaArrowRight className='lg:text-[16px] text-[14px]' />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
