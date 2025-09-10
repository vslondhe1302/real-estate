"use client"
import Banner from './(website)/home-page/home-page-components/Banner'
import ImpactfulProperties from './(website)/home-page/home-page-components/ImpactfulProperties'
import PostPropertySection from './(website)/home-page/home-page-components/PostPropertySection'
import DiscoverProperties from './(website)/home-page/home-page-components/DiscoverProperties'
import PropertyDealer from './(website)/home-page/home-page-components/PropertyDealer'
import WhyChooseSection from './(website)/home-page/home-page-components/WhyChooseSection'
import HappyCustomer from './(website)/home-page/home-page-components/HappyCustomer'
import Testimonial from './(website)/home-page/home-page-components/Testimonial'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function page() {
  let [testimonialData, setTestimonialData] = useState([])
  let [testimonialImgPath, setTestimonialImgPath] = useState('')

  let [staticPath, setStaticPath] = useState('')
  let [impactfulProperties, setImpactfulProperties] = useState([])

  let [propertyTypes, setPropertyTypes] = useState([])

  let [localityList, setLocalityList] = useState([])
  let [localityname, setLocalityname] = useState('')

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let getImpactfulProperties = () => {
    axios.get(`${apiBaseUrl}home/impactful-properties`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          setImpactfulProperties(finalRes.data)
          setStaticPath(finalRes.staticPath)
        }
      })
  }

  let getTestimonialData = () => {
    axios.get(`${apiBaseUrl}home/testimonial`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setTestimonialData(finalRes.data)
          setTestimonialImgPath(finalRes.staticPath)

        }
      })
  }

  let getPropertyTypes = () => {
    axios.get(`${apiBaseUrl}home/property-types`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setPropertyTypes(finalRes.data)
        }
      })
  }

  let getLocality = () => {
    axios.get(`${apiBaseUrl}home/locality-list`, {
      params: { localityname }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setLocalityList(finalRes.data)
        }
      })
  }

  useEffect(() => {
    getLocality()
  }, [localityname])

  useEffect(() => {
    getTestimonialData()
    getImpactfulProperties()
    getPropertyTypes()
  }, [])

  return (
    <div className=''>
      <Banner localityList={localityList} localityname={localityname} setLocalityname={setLocalityname} propertyTypes={propertyTypes} />
      <ImpactfulProperties impactfulProperties={impactfulProperties} staticPath={staticPath} />
      <PostPropertySection />
      <DiscoverProperties />
      <PropertyDealer />
      <WhyChooseSection />
      <HappyCustomer />
      <Testimonial testimonialData={testimonialData} testimonialImgPath={testimonialImgPath} />
    </div>
  )
}

