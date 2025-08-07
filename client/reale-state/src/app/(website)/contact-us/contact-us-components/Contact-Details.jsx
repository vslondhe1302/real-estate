'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function ContactDetails() {
    let [selectCountry, setSelectCountry] = useState(+91)

    return (
        <div className='w-full bg-white'>
            <div className='lg:px-[32px] lg:py-[52px] px-[16px] py-[42px] '>
                <div className='lg:mb-[44px] mb-[28px] '>
                    <h2 className='lg:text-[28px] text-[18px] lg:leading-[42px] leading-[24px] font-[500]  text-center text-[rgb(23,19,46)] lg:mb-[12px] mb-[8px] capitalize'>
                        Get in touch with us & let’s talk
                    </h2>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_10)] tracking-[0.3px]'>
                        You can reach us anytime via
                        <Link href={'#'} className='text-blue-600 ml-1'>
                            info@sunrisehomerealestate.com
                        </Link>
                    </p>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-[40px] '>
                    <div className='lg:order-0 order-1'>
                        <div className='lg:mb-[28px] mb-[22px] '>
                            <div>
                                <h2 className='lg:text-[20px] text-[16px] lg:leading-[38px] leading-[28px] font-[500]  text-[var(--txt_color_1))] sm:mb-3 mb-2.5 capitalize'>
                                    Address
                                </h2>
                                <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_5)] tracking-[0.3px]'>
                                    2nd floor, D S Tower, 4th, Chopasani Rd, opposite old Kohinoor, Jodhpur, Rajasthan 342001
                                </p>
                            </div>
                        </div>
                        <div className='lg:mb-[28px] mb-[22px] '>
                            <div>
                                <h2 className='lg:text-[20px] text-[16px] lg:leading-[38px] leading-[28px] font-[500]  text-[var(--txt_color_1))] sm:mb-3 mb-2.5 capitalize'>
                                    contact no :
                                </h2>
                                <div>
                                    <Link href={'tel:+91-75970-53111'}>
                                        <span className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_5)] tracking-[0.3px]'>
                                            +91-75970-53111
                                        </span>
                                    </Link>
                                    <span>,</span>
                                    <Link href={'tel:+91-94141-87100'}>
                                        <span className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-[var(--txt_color_5)] tracking-[0.3px]'>
                                            +91-94141-87100
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="map-direction">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4005.934195213845!2d73.0067382!3d26.281376399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c33a55dc80b%3A0x25180cf6b4cdadde!2sSurana%20Realtors%20Private%20limited!5e1!3m2!1sen!2sin!4v1745823248883!5m2!1sen!2sin" width="100%" height="384" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-[12px] lg:h-[384px] h-[300px]" >
                            </iframe>
                        </div>
                    </div>
                    <div className='lg:order-1 order-0 '>
                        <form action="">
                            <h3 className='lg:text-[20px] text-[16px] lg:leading-[38px] leading-[28px] font-[500]  text-[var(--txt_color_1))] mb-5 capitalize'>
                                Inquiry Now
                            </h3>
                            <div className='lg:pb-6 pb-[20px]'>
                                <div>
                                    <label htmlFor="" className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[500] block text-[var(--txt_color_1))] sm:mb-3 mb-2 capitalize'>
                                        name
                                    </label>
                                    <input type="text" placeholder='Your Name' className='lg:text-[14px] text-[12px] px-4 py-1.5 rounded-[8px] w-full sm:h-[46px] h-[36px] border-1 border-gray-200 outline-none' />
                                </div>
                            </div>
                            <div className='lg:pb-6 pb-[20px]'>
                                <div>
                                    <label htmlFor="" className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[500] block text-[var(--txt_color_1))] sm:mb-3 mb-2 capitalize'>
                                        email
                                    </label>
                                    <input type="email" placeholder='Your Email' className='lg:text-[14px] text-[12px] px-4 py-1.5 rounded-[8px] w-full sm:h-[46px] h-[36px] border-1 border-gray-200 outline-none' />
                                </div>
                            </div>
                            <div className='lg:pb-6 pb-[20px]'>
                                <div>
                                    <label htmlFor="" className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[500] block text-[var(--txt_color_1))] sm:mb-3 mb-2 capitalize'>
                                        phone number
                                    </label>
                                    <div className='relative sm:h-[46px] h-[36px]'>
                                        <input type="text" placeholder='' className='lg:text-[14px] text-[12px] pl-[90px] tracking-[1px] pr-4 py-1.5 rounded-[8px] w-full sm:h-[46px] h-[36px] border-1 border-gray-200 outline-none' />

                                        <div className='absolute top-[50%] mt-[-0.5px] translate-y-[-50%] left-[8px] flex items-center'>
                                            <select onChange={(e) => setSelectCountry(e.target.value)} name="country" id="" className='h-full border-none outline-none lg:text-[14px] text-[12px] text-[var(--txt_color_3))]'>
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
                            </div>
                            <div className='lg:pb-6 pb-[20px] lg:mb-6 mb-4'>
                                <div>
                                    <label htmlFor="" className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[500] block text-[var(--txt_color_1))] sm:mb-3 mb-2 capitalize'>
                                        How can we help?
                                    </label>
                                    <textarea type="email" placeholder='Your Message' className='lg:text-[14px] text-[12px] px-4 py-1.5 rounded-[8px] w-full sm:h-[94px] h-[60px] transition-all duration-300 placeholder:pl-0 focus:placeholder:pl-1 resize-none border-1 border-gray-200 outline-none'></textarea>
                                </div>
                            </div>
                            <div className='w-full '>
                                <Link href={'#'} className='w-full lg:h-[52px] h-[42px] max-w-full block'>
                                    <button className='w-full h-full bg-[var(--red_btn_bg)] lg:rounded-[8px] rounded-[6px] text-white cursor-pointer flex items-center justify-center group relative'>
                                        <span className='lg:text-[16px] text-[14px] font-[500] lg:leading-[28px] leading-[22px] capitalize  duration-200 group-hover:mr-2 '>
                                            send message
                                        </span>
                                        <span className='group-hover:opacity-100  absolute right-[180px] group-hover:right-[180px] duration-200 z-10 opacity-0 '>
                                            <FaArrowRight className='lg:text-[16px] text-[14px]' />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
