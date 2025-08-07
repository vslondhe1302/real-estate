import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function HowItWorks() {
    return (
        <div className='lg:mb-[80px] mb-[50px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
                <div className='w-full lg:mb-[68px] mb-[38px] '>
                    <h2 className='lg:text-[32px] text-[22px] lg:leading-[48px] leading-[38px] font-[500]  text-center text-[var(--txt_color_5)] lg:mb-4 mb-3 capitalize'>
                        How It Works – Step by Step
                    </h2>
                    <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                        We deal in the sale, purchase, leasing, renting, joint development agreements, development agreements of all sorts of properties (i.e., commercial, residential, industrial, agricultural, warehousing etc.)
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-[24px] lg:mb-[60px] mb-[40px]  gap-5 '>
                    <div className='lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-60% via-white via-60% to-[#eddedf] to-96%  '>
                        <div className='flex items-center justify-between lg:p-[28px] p-[18px]'>
                            <div className='lg:w-fit w-full relative'>
                                <div className='lg:relative absolute left-[-10px] top-[-10px] lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] rounded-full lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] font-[500] lg:mb-[32px] mb-[0px] text-[var(--txt_color_2)] bg-[rgb(255,245,246)] border-1 border-[rgb(253,197,202)] flex items-center justify-center  '>
                                    1
                                </div>
                                <div className='lg:hidden mb-[18px] '>
                                    <img src="/images/how-its-work-5.png" alt="" className='w-[104px] h-[104px] mx-auto ' />
                                </div>
                                <h2 className='lg:text-[25px] text-[18px] lg:leading-[48px] leading-[38px] font-[500] lg:text-left  text-center text-[var(--txt_color_9)] mb-2 capitalize'>
                                    Transaction Assistance
                                </h2>
                                <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                                    Finally, assisting in agreement, registration, payment etc.
                                </p>
                            </div>
                            <div className='lg:block hidden min-w-[104px] '>
                                <img src="/images/how-its-work-5.png" alt="" className='w-[104px] h-[104px] mx-auto ' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-60% via-white via-60% to-[#eddedf] to-96%  '>
                        <div className='flex items-center justify-between lg:p-[28px] p-[18px]'>
                            <div className='lg:w-fit w-full relative'>
                                <div className='lg:relative absolute left-[-10px] top-[-10px] lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] rounded-full lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] font-[500] lg:mb-[32px] mb-[0px] text-[var(--txt_color_2)] bg-[rgb(255,245,246)] border-1 border-[rgb(253,197,202)] flex items-center justify-center  '>
                                    2
                                </div>
                                <div className='lg:hidden mb-[18px] '>
                                    <img src="/images/how-its-work-4.png" alt="" className='w-[104px] h-[104px] mx-auto ' />
                                </div>
                                <h2 className='lg:text-[25px] text-[18px] lg:leading-[48px] leading-[38px] font-[500] lg:text-left  text-center text-[var(--txt_color_9)] mb-2 capitalize'>
                                    Deal Facilitation
                                </h2>
                                <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                                    Helping to bring an agreement between buyer and seller
                                </p>
                            </div>
                            <div className='lg:block hidden min-w-[104px] '>
                                <img src="/images/how-its-work-4.png" alt="" className='w-[104px] h-[104px] mx-auto ' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-60% via-white via-60% to-[#eddedf] to-96%  '>
                        <div className='flex items-center justify-between lg:p-[28px] p-[18px]'>
                            <div className='lg:w-fit w-full relative'>
                                <div className='lg:relative absolute left-[-10px] top-[-10px] lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] rounded-full lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] font-[500] lg:mb-[32px] mb-[0px] text-[var(--txt_color_2)] bg-[rgb(255,245,246)] border-1 border-[rgb(253,197,202)] flex items-center justify-center  '>
                                    3
                                </div>
                                <div className='lg:hidden mb-[18px] '>
                                    <img src="/images/how-its-work-3.png" alt="" className='w-[104px] h-[104px] mx-auto ' />
                                </div>
                                <h2 className='lg:text-[25px] text-[18px] lg:leading-[48px] leading-[38px] font-[500] lg:text-left  text-center text-[var(--txt_color_9)] mb-2 capitalize'>
                                    Legal Verification
                                </h2>
                                <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                                    Checking the legality of all the documents, approvals, permissions of the property
                                </p>
                            </div>
                            <div className='lg:block hidden min-w-[104px] '>
                                <img src="/images/how-its-work-3.png" alt="" className='w-[104px] h-[104px] mx-auto ' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-60% via-white via-60% to-[#eddedf] to-96%  '>
                        <div className='flex items-center justify-between lg:p-[28px] p-[18px]'>
                            <div className='lg:w-fit w-full relative'>
                                <div className='lg:relative absolute left-[-10px] top-[-10px] lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] rounded-full lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] font-[500] lg:mb-[32px] mb-[0px] text-[var(--txt_color_2)] bg-[rgb(255,245,246)] border-1 border-[rgb(253,197,202)] flex items-center justify-center  '>
                                    4
                                </div>
                                <div className='lg:hidden mb-[18px] '>
                                    <img src="/images/insight-icon.svg" alt="" className='w-[104px] h-[104px] mx-auto ' />
                                </div>
                                <h2 className='lg:text-[25px] text-[18px] lg:leading-[48px] leading-[38px] font-[500] lg:text-left  text-center text-[var(--txt_color_9)] mb-2 capitalize'>
                                    Property Curation
                                </h2>
                                <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                                    Shortlisting the best properties that match the customer's objective
                                </p>
                            </div>
                            <div className='lg:block hidden min-w-[104px] '>
                                <img src="/images/insight-icon.svg" alt="" className='w-[104px] h-[104px] mx-auto ' />
                            </div>
                        </div>
                    </div>
                    <div className='sm:flex sm:justify-center sm:col-span-2'>
                        <div className='sm:max-w-[50%] lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-60% via-white via-60% to-[#eddedf] to-96%  '>
                            <div className='flex items-center justify-between lg:p-[28px] p-[18px]'>
                                <div className='lg:w-fit w-full relative'>
                                    <div className='lg:relative absolute left-[-10px] top-[-10px] lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] rounded-full lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] font-[500] lg:mb-[32px] mb-[0px] text-[var(--txt_color_2)] bg-[rgb(255,245,246)] border-1 border-[rgb(253,197,202)] flex items-center justify-center  '>
                                        5
                                    </div>
                                    <div className='lg:hidden mb-[18px] '>
                                        <img src="/images/hindi_to_chinese_icon.svg" alt="" className='w-[104px] h-[104px] mx-auto ' />
                                    </div>
                                    <h2 className='lg:text-[25px] text-[18px] lg:leading-[48px] leading-[38px] font-[500] lg:text-left  text-center text-[var(--txt_color_9)] mb-2 capitalize'>
                                        Customer Insight
                                    </h2>
                                    <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[18px] font-[400] lg:text-left text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                                        Understanding the requirement, purpose, utility of the customer
                                    </p>
                                </div>
                                <div className='lg:block hidden min-w-[104px] '>
                                    <img src="/images/hindi_to_chinese_icon.svg" alt="" className='w-[104px] h-[104px] mx-auto ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='lg:mb-[60px] mb-[40px] '>
                        <p className='lg:text-[16px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-center text-[var(--txt_color_3)] tracking-[0.3px]'>
                            We have been the most trusted realtor for the people of Jodhpur. Like family doctors, family solicitor, we have been family realtors for our client's families and generations.
                        </p>
                    </div>
                    <div className='w-full lg:max-w-[205px] max-w-[185] mx-auto '>
                        <Link href={'#'} className='w-full lg:h-[52px] h-[45px] max-w-full block'>
                            <button className='w-full h-full bg-[var(--red_btn_bg)] lg:rounded-[8px] rounded-[5px] text-white cursor-pointer flex items-center justify-center group relative'>
                                <span className='lg:text-[16px] text-[14px] font-[500] lg:leading-[28px] leading-[22px] capitalize  duration-200 group-hover:mr-2 '>
                                    Post property
                                </span>
                                <span className='group-hover:opacity-100  absolute right-[30px] group-hover:right-[30px] duration-200 z-10 opacity-0 '>
                                    <FaArrowRight className='lg:text-[16px] text-[14px]' />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
