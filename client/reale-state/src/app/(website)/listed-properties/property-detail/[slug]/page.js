"use client"
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'next/navigation'
import PropertyDetails from '../PropertyDetails'
import PostPropertySection from '@/app/(website)/home-page/home-page-components/PostPropertySection'

export default function page() {
  let {slug} = useParams()

  let [singlePropertyData, setSinglePropertyData] = useState({})
  let [staticPath, setStaticPath] = useState('')
  let [amenityImgPath, setAmenityImgPath] = useState('')

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let getSinglePropertyData = () =>{
    axios.get(`${apiBaseUrl}home/single-property-detail/${slug}`)
    .then((res)=>res.data)
        .then((finalRes)=>{
          if(finalRes.status){
            console.log(finalRes);
            setSinglePropertyData(finalRes.data)
            setStaticPath(finalRes.staticPath)
            setAmenityImgPath(finalRes.amenityImgPath)
          }
        })
      }
    
      useEffect(()=>{
        getSinglePropertyData()
      },[slug])

  return (
    <div className='bg-[rgb(248,248,252)]'>
        <PropertyDetails
        singlePropertyData = {singlePropertyData}
        staticPath = {staticPath} 
        amenityImgPath = {amenityImgPath}
        />
        <PostPropertySection/>
    </div>
  )
}
