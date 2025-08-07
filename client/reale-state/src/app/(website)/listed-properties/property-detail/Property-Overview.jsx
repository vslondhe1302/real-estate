"use client"
import React from 'react'

export default function PropertyOverview({overview}) {
    console.log(overview);
    
    return (
        <div className='w-full lg:px-7 px-6 lg:py-7 py-6 mb-5 bg-white rounded-[8px] border-1 border-gray-200'>
            <div className='mb-5'>
                <h3 className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-[500] text-left text-[var(--txt_color_8)] tracking-[0.3px] mb-2 capitalize'>
                    Property Overview
                </h3>
                <div className='grid grid-cols-2 gap-8'>
                    <div className={`${overview?.ownershipTitle!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Ownership title:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.ownershipTitle}
                        </p>
                    </div>
                    <div className={`${overview?.roadWidth!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Road width:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.roadWidth}
                        </p>
                    </div>
                    <div className={`${overview?.boundaryWall!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Boundary wall:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.boundaryWall==true ? 'Yes' : 'No'}
                        </p>
                    </div>
                    <div className={`${overview?.depth!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Depth:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.depth}
                        </p>
                    </div>
                    <div className={`${overview?.front!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Front:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.front}
                        </p>
                    </div>
                    <div className={`${overview?.furnished!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Furnished:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.furnished}
                        </p>
                    </div>
                    <div className={`${overview?.publishedOn!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Published On:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.publishedOn}
                        </p>
                    </div>
                    <div className={`${overview?.gatedColony!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Gated Colony:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.gatedColony==true ? 'Yes' : 'No'}
                        </p>
                    </div>
                    <div className={`${overview?.parking!='' ? "block" : "hidden"}`}>
                        <span className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[400] text-[var(--txt_color_3)] tracking-[0.3px] mb-1'>
                            Parking:
                        </span>
                        <p className='lg:text-[14px] text-[12px] lg:leading-[21px] leading-[17px] font-[500] text-[var(--txt_color_5)]'>
                            {overview?.parking}
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
