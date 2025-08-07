"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilterProperties from './listed-properties-components/Filter-Properties'
import ListedPropertiesArea from './listed-properties-components/Listed-Properties-Area'
import PostPropertySection from '../home-page/home-page-components/PostPropertySection'
import { useSearchParams } from 'next/navigation'

export default function page() {
  let [showResFilter, setShowResFilter] = useState(false)
  let [selectSorting, setSelectSorting] = useState(0)

  let [propertiesData, setPropertiesData] = useState([])
  let [staticPath, setStaticPath] = useState('')
  let [amenityImgPath, setAmenityImgPath] = useState('')

  let [filters, setFilters] = useState({})
  let searchParams = useSearchParams()
  let propertyType = searchParams.get('property_type')
  let propertyArea = searchParams.get('localities')

  console.log(propertyType);


  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let getAllProperties = () => {
    axios.get(`${apiBaseUrl}home/properties`,
      {
        params: filters
      }
    )
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setPropertiesData(finalRes.data)
          setStaticPath(finalRes.staticPath)
          setAmenityImgPath(finalRes.amenityImgPath)
        }
      })
  }

  useEffect(() => {
    getAllProperties()
  }, [filters])

  return (
    <div className=''>
      <FilterProperties showResFilter={showResFilter} setShowResFilter={setShowResFilter} setSelectSorting={setSelectSorting} setFilters={setFilters} getAllProperties={getAllProperties} area={propertyArea} type={propertyType} />
      <ListedPropertiesArea
        setShowResFilter={setShowResFilter}
        selectSorting={selectSorting}
        setSelectSorting={setSelectSorting}
        propertiesData={propertiesData}
        staticPath={staticPath}
        amenityImgPath={amenityImgPath}
      />
      <PostPropertySection />
    </div>
  )
}

