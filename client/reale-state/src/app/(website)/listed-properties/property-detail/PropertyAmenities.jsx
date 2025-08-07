import React from 'react'

export default function PropertyAmenities({propertyAmenities,imgPath}) {
    return (
        <div className='w-full lg:px-7 px-6 lg:py-7 py-6 mb-5 bg-white rounded-[8px] border-1 border-gray-200'>
            <div className='mb-5'>
                <h3 className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[500] text-left text-[var(--txt_color_8)] tracking-[0.3px] mb-2 capitalize'>
                    Amenities
                </h3>
                <ul className="flex flex-wrap items-center gap-[30px]">
                    {propertyAmenities?.length>=1 ?
                    propertyAmenities.map((items,index)=>(
                    <li key={index} className="min-w-[54px] text-center">
                        <div className='max-h-[24px] min-h-[24px] mb-1 '>
                            <img src={imgPath+items.image} alt={`Icon ${index+1}`} className='w-[24px] h-[24px] mx-auto ' />
                        </div>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]  tracking-[0.3px]'>
                            {items.title}
                        </span>
                    </li>
                    ))

                    :
                    <li className="min-w-[54px] text-center">
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_3)]  tracking-[0.3px]'>
                            No amenities available
                        </span>
                    </li>

                    }
                </ul>
            </div>
        </div>
    )
}
