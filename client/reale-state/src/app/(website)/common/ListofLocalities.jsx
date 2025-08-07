import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function ListofLocalities() {
    let [localityList, setLocalityList] = useState([])
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

    let getLocality = () =>{
        axios.get(`${apiBaseUrl}home/locality-list`)
        .then((res)=>res.data)
        .then((finalRes)=>{
            if(finalRes.status){
                console.log(finalRes);
                setLocalityList(finalRes.data)
                
            }
        })
    }

    useEffect(()=>{
        getLocality()
    },[])
    return (
        <div className='w-[100%] lg:pb-[64px] lg:pt-[40px] pt-[30px] pb-[32px] bg-[rgb(255,245,246)] border-y-1 border-y-[rgb(253,197,202)] '>
            <div className='max-w-[1170px] mx-auto'>
                <div className='w-[full lg:mb-[40px] mb-[20px]'>
                    <h3 className='lg:text-[32px] text-[22px] lg:leading-[48px] leading-[38px] font-[500] text-center text-[var(--txt_color_5)] lg:mb-[20px]'>
                        List of Localities in Jodhpur
                    </h3>
                </div>

                {localityList.length>=1 ?
                <ul className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-3'>
                    {
                    localityList.map((items,index)=>(
                    <li key={index}>
                        <Link href={'#'} className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[22px] font-[400] text-[var(--txt_color_3)] hover:text-[var(--txt_color_2)] text-center block duration-200 capitalize' >
                            {items.localityName},{items.localityCity}
                        </Link>
                    </li>
                    ))
                    }
                </ul>
                :
                <ul className='w-full'>
                    <li className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[22px] font-[400] text-[var(--txt_color_3)]  text-center block' >
                        No any Locality list found !
                    </li>
                </ul>
                }
            </div>
        </div>
    )
}
