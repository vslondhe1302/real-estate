import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaLocationArrow } from 'react-icons/fa6'

export default function PropertyLocation({propertyLocation}) {
    useEffect(()=>{

window.onload = () => {
    let iframe = document.querySelector('#location-map')
     if(iframe){
    iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(propertyLocation)},+jodhpur&output=embed&maptypeid=satellite`;
    }
    else{
        console.warn("iframe element not found")
    }
}

 },[propertyLocation])
    return (
        <div className='w-full lg:px-7 px-6 lg:py-7 py-6 mb-5 bg-white rounded-[8px] border-1 border-gray-200'>
            <div className='mb-5'>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[500] text-left text-[var(--txt_color_8)] tracking-[0.3px] mb-2 capitalize'>
                        Property Location
                    </h3>
                    <Link href={'/www.google-map.com'} >
                        <button className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-center text-blue-600 min-h-[36px] px-3 tracking-[0.3px] border-1 border-gray-200 rounded-[8px] flex items-center cursor-pointer'>
                            View on map 
                            <span className='ml-3'><FaLocationArrow /></span>
                        </button>
                    </Link>
                </div>
                <p className='lg:text-[16px] text-[14px] lg:leading-[21px] leading-[17px] font-[400] text-left text-[var(--primary_txt_color)] tracking-[0.3px] capitalize mb-4 flex items-center'>
                    {propertyLocation}
                </p>
                <div id='location' className='mb-4'>
                    <iframe id='location-map' src={null} width="100%" height="299px" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
            </div>
        </div>
    )
}
