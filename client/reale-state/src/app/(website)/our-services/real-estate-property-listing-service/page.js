"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropertyListingTop from './property-listing-components/Property-Listing-Top'
import OurConnectionSection from './property-listing-components/Our-Connection-Section'
import PostPropertySection from '../../home-page/home-page-components/PostPropertySection'

export default function page() {
  let [subServices, setSubServices] = useState([])
  let [staticPath, setStaticPath] = useState('')

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let getSubServices = () =>{
    axios.get(`${apiBaseUrl}home/sub-services`)
    .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setSubServices(finalRes.data)
          setStaticPath(finalRes.staticPath)

        }
      })
  }

  useEffect(()=>{
    getSubServices()
  },[])

  return (
    <div className=' w-full bg-[rgb(248,248,252)]'>
      <PropertyListingTop/>
      <OurConnectionSection subServices={subServices} setSubServices={setSubServices} staticPath={staticPath} />
      <PostPropertySection/>
      
    </div>
  )
}

