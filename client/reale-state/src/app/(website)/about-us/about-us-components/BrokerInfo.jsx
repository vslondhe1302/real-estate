import Link from 'next/link'
import React from 'react'

export default function BrokerInfo() {
    return (
        <div className='w-[100%] lg:pb-[96px] pb-[45px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto px-1'>
                <div className='w-[full lg:mb-[58px] mb-9'>
                    <h3 className='lg:text-[25px] text-[16px] lg:leading-[42px] leading-[28px] font-[500] text-left text-[var(--txt_color_9)] lg:mb-4 mb-3'>
                        Jodhpur's No.l Real Estate Broker
                    </h3>
                    <p className='lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-left text-[var(--txt_color_3)] mb-3 tracking-[0.3px]'>
                        Over the last three decades and three generations, our family is into the real estate brokerage business. Mn Dileep Surana is considered as a brand in the pool of realtors. In all these years, ahead of our business growth, revenues etc., we have focused on: -Customer Satisfaction, Creating prosperity, Legitimate deals. Our customers have got the best real estate company of Jodhpur and got tremendous rise in their real estate property in Jodhpur, purchased through us.
                    </p>
                </div>
                <div className='w-full'>
                    <div className='w-[full lg:mb-[44px] mb-[38px]'>
                        <h3 className='lg:text-[25px] text-[16px] lg:leading-[42px] leading-[28px] font-[500] text-left text-[var(--txt_color_9)] lg:mb-4 mb-3'>
                            Our Coverage
                        </h3>
                        <p className='lg:text-[16px] sm:text-[14px] text-[13px] lg:leading-[24px] leading-[18px] font-[400] text-left text-[var(--txt_color_3)] mb-3 tracking-[0.3px]'>
                            We deal in the sale, purchase, leasing, renting, joint development agreements, development agreements of all sorts of properties (i.e., commercial, residential, industrial, agricultural, warehousing etc).
                        </p>
                    </div>
                    <div className='grid lg:flex grid-cols-2 sm:gap-[14px] gap-3 justify-center '>
                        <Link href={'/listed-properties/residential-property-jodhpur'}>
                            <div className='flex items-center lg:px-5 px-4 lg:py-4 py-3 lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-70% via-white via-77% to-[#eddedf] to-96%  '>
                                <div className='lg:mr-[20px] mr-[12px] '>
                                    <img src="/images/residentail-icon.svg" alt="" className='w-[48px] h-[48px] rounded-full ' />
                                </div>
                                <h3 className='lg:text-[18px] text-[15px] lg:leading-[27px] leading-[24px] font-[500] lg:text-left text-center text-[var(--txt_color_9)] capitalize tracking-[0.3px]'>
                                    residential
                                </h3>
                            </div>
                        </Link>
                        <Link href={'/listed-properties/commercial-property-jodhpur'}>
                            <div className='flex items-center lg:px-5 px-4 lg:py-4 py-3 lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-70% via-white via-77% to-[#eddedf] to-96%  '>
                                <div className='lg:mr-[20px] mr-[12px] '>
                                    <img src="/images/residentail-icon.svg" alt="" className='w-[48px] h-[48px] rounded-full ' />
                                </div>
                                <h3 className='lg:text-[18px] text-[15px] lg:leading-[27px] leading-[24px] font-[500] lg:text-left text-center text-[var(--txt_color_9)] capitalize tracking-[0.3px]'>
                                    Commercial
                                </h3>
                            </div>
                        </Link>
                        <Link href={'/listed-properties/industrial-property-jodhpur'}>
                            <div className='flex items-center lg:px-5 px-4 lg:py-4 py-3 lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-70% via-white via-77% to-[#eddedf] to-96%  '>
                                <div className='lg:mr-[20px] mr-[12px] '>
                                    <img src="/images/residentail-icon.svg" alt="" className='w-[48px] h-[48px] rounded-full ' />
                                </div>
                                <h3 className='lg:text-[18px] text-[15px] lg:leading-[27px] leading-[24px] font-[500] lg:text-left text-center text-[var(--txt_color_9)] capitalize tracking-[0.3px]'>
                                    industrial
                                </h3>
                            </div>
                        </Link>
                        <Link href={'/listed-properties/agricultural-property-jodhpur'}>
                            <div className='flex items-center lg:px-5 px-4 lg:py-4 py-3 lg:rounded-[16px] rounded-[12px] border-1 border-gray-300 hover:border-[var(--red_border)] hover:shadow-xl hover:shadow-[0px 0px 10px 10px var(--red_bg)] duration-200 ease-in-out bg-gradient-to-br from-white from-70% via-white via-77% to-[#eddedf] to-96%  '>
                                <div className='lg:mr-[20px] mr-[12px] '>
                                    <img src="/images/residentail-icon.svg" alt="" className='w-[48px] h-[48px] rounded-full ' />
                                </div>
                                <h3 className='lg:text-[18px] text-[15px] lg:leading-[27px] leading-[24px] font-[500] lg:text-left text-center text-[var(--txt_color_9)] capitalize tracking-[0.3px]'>
                                    agricultural
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
