import React from 'react'

export default function OurConnectionSection({subServices,setSubServices, staticPath}){

    return (
        <div className='w-[100%] lg:mb-[88px] mb-[40px] lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='max-w-full lg:mb-[28px] mb-5'>
                    <h3 className='lg:text-[22px] text-[18px] lg:leading-[28px] leading-[24px] font-[500] lg:text-left text-center text-[var(--txt_color_5)] lg:mb-[28px] mb-5'>
                        How your property will be sold in weeks ?
                    </h3>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-5 '>
                    {subServices.length>=1 &&
                    subServices.map((items,index)=>(

                    <div key={index} className='lg:mb-5 bg-white lg:rounded-[12px] rounded-[10px] border-1 border-gray-200 '>
                        <div className='lg:p-6 p-4 group'>
                            <div className='lg:max-w-[523px] lg:max-h-[191px] lg:mb-[32px] mb-[24px] lg:rounded-[12px] rounded-[10px] overflow-hidden'>
                                <img src={staticPath+items.subServicesImage} alt="" className='max-w-full max-h-full lg:rounded-[12px] rounded-[10px] group-hover:scale-105 scale-100 transition-transform duration-300 ease-out ' />
                            </div>
                            <div className=''>
                                <h3 className='lg:text-[18px] text-[15px] font-[500] lg:leading-[22px] leading-[20px] text-left text-[var(--txt_color_8)] mb-2'>
                                    {items.subServicesTitle}
                                </h3>
                                <p className='line-clamp-6 tracking-[0.3px] overflow-hidden lg:text-[14px] text-[13px] font-[400] lg:leading-[21px] leading-[18px] text-left text-[var(--txt_color_3)] mb-2'>
                                   {items.subServicesDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                   
                </div>
            </div>
        </div>
    )
}
