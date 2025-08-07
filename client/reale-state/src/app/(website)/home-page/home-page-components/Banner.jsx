"use client"
import React, { useState } from 'react'
import { PiCaretUpDownBold } from "react-icons/pi";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Link from 'next/link';

export default function Banner({localityList,localityname, setLocalityname, propertyTypes}) {
    let [selectType, setSelectType] = useState('all')
    let [showAreaList, setShowAreaList] = useState(false)
    let [showSelectArea, setShowSelectArea] = useState([])    

    let getInputValue = (e) =>{
        setLocalityname(e.target.value)        
    }

    let handleSelected = (e) => {
        if (e.target.innerText && !showSelectArea.includes(e.target.innerText.toLowerCase().replace(/ /g, "-"))) {
            setShowSelectArea([...showSelectArea, e.target.innerText.toLowerCase().replace(/ /g, "-")])
        }
        else {
            setShowSelectArea(showSelectArea.filter((v)=>!v.includes(e.target.innerText.toLowerCase().replace(/ /g, "-"))))
        }

    }
    

    return (
        <div className='w-[100%] relative lg:mb-[96px] lg:px-0 px-4'>
            <section className='max-w-full relative z-10 '>
                <div className='lg:absolute lg:right-[140px] lg:top-[-200px]'>
                    <figure className='relative lg:top-0 top-[-120px] lg:left-0 left-[50%] lg:translate-0 translate-x-[-50%]'>
                        <img src="/images/Heroimage.webp" className='block mx-auto lg:max-w-[629px] sm:max-w-[470px] max-w-[370px] lg:max-h-[629px] sm:max-h-[470px] max-h-[370px] rounded-full' alt="" />
                    </figure>
                </div>
            </section>

            <section className='relative left-0 lg:top-[17px] top-[-110px] max-w-[100%] lg:mb-[96px] mb-[0px] z-[11]'>
                <div className='max-w-[1170px] mx-auto '>
                    <div className='max-w-[561px] lg:mx-0 mx-auto lg:mt-[56px] mt-6 lg:mb-[50px] mb-6'>
                        <h1 className='lg:text-[32px] text-[22px] lg:leading-[48px] leading-[34px] font-[500] lg:text-left text-center text-[var(--txt_color_1)] lg:mb-6 mb-5'>
                            The Most Trusted Real Estate Agent & Property Dealer in Jodhpur
                        </h1>
                        <p className='lg:text-[14px] text-[12px] leading-4 font-[400] tracking-[0.4px] lg:text-left text-center text-[var(--txt_color_1)] mb-2'>
                            Rajasthan's 1st local online property listing website.
                        </p>
                        <p className='lg:text-[26px] text-[20px] lg:leading-[40px] leading-[30px] font-[400] lg:text-left text-center tracking-[0.4px] text-[var(--txt_color_2)] font-alkatra mb-2'>
                            Property chaiye ? Yahin aaiye !
                        </p>
                    </div>
                    <div className='lg:max-w-[935px] max-w-full lg:p-[26px] p-3 mb-4 bg-white border-1 border-gray-300 lg:rounded-[14px] rounded-[8px]'>
                        <div className='hide-scrollbar max-w-full flex lg:justify-start justify-between mb-4 overflow-x-auto'>
                            <div className={` mr-[2px] lg:px-3 px-2.5 lg:py-2 py-1.5 ${selectType == 'all' ? "bg-[var(--nav_btn_bg)]" : ""} lg:h-[37px] h-[32px] lg:rounded-[5px] rounded-[4px]`}>
                                <label onClick={() => setSelectType('all')} htmlFor="" className={`flex items-center lg:text-[14px] text-[12px] lg:leading-[21px] leading-[16px] font-[500] text-[var(--txt_color_3)] ${selectType == 'all' ? "text-white" : ""} `}>
                                    <input onChange={() => setSelectType('all')} checked={selectType == 'all'} type="radio" name='propertyName' className={`${selectType == 'all' ? "accent-white" : "accent-gray-300"} lg:inline-block cursor-pointer hidden h-[15px] w-[15px] mr-2`} />
                                    All
                                </label>
                            </div>
                            {propertyTypes.length>=1 &&
                            propertyTypes.map((items,index)=>(

                            
                            <div key={index} className={` mr-[2px] px-3 py-2 ${selectType == items.slug ? "bg-[var(--nav_btn_bg)]" : ""} lg:h-[37px] h-[32px] lg:rounded-[5px] rounded-[4px]`}>
                                <label onClick={() => setSelectType(items.slug)} htmlFor="" className={`flex items-center lg:text-[14px] text-[12px] lg:leading-[21px] leading-[16px] font-[500] text-[var(--txt_color_3)] ${selectType == items.slug ? "text-white" : ""} `}>
                                    <input onChange={() => setSelectType(items.slug)} checked={selectType == items.slug} type="radio" name='propertyName' className={`${selectType == items.slug ? "accent-white" : "accent-gray-300"} lg:inline-block cursor-pointer hidden h-[15px] w-[15px] mr-2`} />
                                    {items.propertyTypeName}
                                </label>
                            </div>
                            ))}
                        </div>
                        <div className='flex w-full'>
                            <div className='w-full grid lg:grid-cols-[80%_auto] grid-cols-1'>
                                <div className='relative'>
                                    <div onClick={() => setShowAreaList(!showAreaList)} className='max-w-full lg:h-[56px] h-[45px] py-2 pl-3 lg:pr-10 pr-4 flex items-center justify-between border-1 border-gray-200 lg:rounded-[8px] rounded-[5px] lg:mr-5 lg:mb-0 mb-3 cursor-pointer'>
                                        <span className={`${showSelectArea.length!=0 ? "text-[var(--primary_text_color)]" : "text-[var(--txt_color_4)]"} block lg:text-[14px] text-[12px] font-[400] lg:leading-[24px] leading-[16px] capitalize`}>
                                            {showSelectArea.length!=0 ? `${showSelectArea}` : 'Area'}
                                        </span>
                                        <div><PiCaretUpDownBold className='text-[16px] text-[var(--txt_color_4)]' /></div>
                                    </div>

                                    <div className={`absolute z-[12] bg-white top-[0%] mt-2 left-0 py-2 border-1 border-gray-300 lg:w-[calc(100%-20px)] w-full rounded-[4px] ${showAreaList ? 'lg:top-[100%] top-[80%] opacity-100 visible max-h-[320px] ' : 'opacity-0 invisible max-h-0'} overflow-y-scroll`}>
                                        <div className='px-2 mb-2'>
                                            <input onChange={getInputValue} type="text" value={localityname} placeholder='Search...' className='border-1 border-gray-300 w-full lg:rounded-[4px] rounded-[3px] px-3 py-1.5 text-[14px] outline-0' />
                                        </div>
                                        <ul className='px-2'>
                                            {localityList.length>=1 &&
                                            localityList.map((items,index)=>(

                                            <li key={index} onClick={handleSelected} className='px-3 py-2 hover:bg-[var(--nav_active_bg)] lg:rounded-[4px] rounded-[3px] flex justify-between items-center '>
                                                <span className={`lg:text-[14px] text-[12px] font-[400] lg:leading-[21px] leading-[16px] ${showSelectArea.includes(items.localityName.toLowerCase().replace(/ /g, "-")) ? 'text-[var(--txt_color_2)]' : 'text-gray-700 '}`}>
                                                    {items?.localityName}
                                                </span>
                                                <span className={`${showSelectArea.includes(items.localityName.toLowerCase().replace(/ /g, "-")) ? "block" : "hidden"} text-[var(--txt_color_2)]`}> 
                                                    <FaCheck />
                                                </span>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                                <Link href={`/listed-properties?property_type=${selectType!='all' ? selectType : ''}&localities=${showSelectArea}`} className='max-w-full'>
                                <button className='bg-[var(--red_btn_bg)] lg:h-[56px] h-[45px] lg:rounded-[8px] rounded-[5px] text-white cursor-pointer flex items-center justify-center group w-full'>
                                    <span className='lg:text-[16px] text-[14px] font-[500] lg:leading-[20px] leading-[18px] capitalize group-hover:mr-2 duration-150'>
                                        search
                                    </span>
                                    <span className='group-hover:opacity-100 opacity-0 group-hover:relative right-0 absolute duration-150 lg:text-[16px] text-[14px]'><FaArrowRight /></span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center'>
                        <p className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-[var(--txt_color_3)] mr-2 lg:mb-0 mb-3 '>
                            Popular Localities :
                        </p>
                        <ul className='flex flex-wrap justify-center items-center'>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Basni
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Basni Salawas
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Boranada
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Chopasni Road
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Kheme Ka Kua
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Pal By Pass
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Pal Road
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Paota
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Sardarpura
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Shastri Nagar
                                <span className='px-2'>|</span>
                            </li>
                            <li className='lg:text-[14px] text-[12px] font-[500] lg:leading-[21px] leading-[18px] tracking-[0.3px] text-center text-[var(--txt_color_1)]'>
                                Tanawada
                                <span className='px-2'>|</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
