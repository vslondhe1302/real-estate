import React from 'react'

export default function PropertyType({subPropertyTypeName}) {
    return (
        <div className='w-full lg:px-7 px-6 lg:py-7 py-6 mb-5 bg-white rounded-[8px] border-1 border-gray-200'>
            <div className='mb-5'>
                <h3 className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[500] text-left text-[var(--txt_color_8)] tracking-[0.3px] mb-2 capitalize'>
                    Property type
                </h3>
                <ul className="flex flex-wrap items-center gap-2">
                    <li className="rounded-l-full rounded-r-full px-3 py-1 bg-gray-200 sm:text-[12px] text-[11px] font-[400] leading-[18px] tracking-[0.2px] text-[var(--primary_text_color)]">
                        {subPropertyTypeName}
                    </li>
                </ul>
            </div>
        </div>
    )
}
