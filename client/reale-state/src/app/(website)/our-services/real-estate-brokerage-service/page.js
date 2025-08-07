"use client"
import React, { useEffect, useState } from 'react'
import RealEStateBrokerageTop from './real-estate-brokerage-components/Real-Estate-Brokerage-Top'
import OurCoverageSection from './real-estate-brokerage-components/Our-Coverage-Section'
import HowItWorks from './real-estate-brokerage-components/How-it-Works'
import axios from 'axios'

export default function page() {
  let [propertyTypes, setPropertyTypes] = useState([])
  let [staticPath, setStaticPath] = useState('')
  
  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let getPropertyTypes = () => {
        axios.get(`${apiBaseUrl}home/property-types`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setPropertyTypes(finalRes.data)
                    setStaticPath(finalRes.staticPath)
                    console.log(finalRes);

                }
            })
    }

    useEffect(() => {
        getPropertyTypes()
    }, [])

  return (
    <div className=''>
      <RealEStateBrokerageTop/>
      <OurCoverageSection propertyTypes={propertyTypes} staticPath={staticPath} />
      <HowItWorks/>
    </div>
  )
}

