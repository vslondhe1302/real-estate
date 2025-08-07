"use client"
import React, { useEffect, useState } from 'react'
import FilterProperties from '../listed-properties-components/Filter-Properties'
import ListedPropertiesArea from '../listed-properties-components/Listed-Properties-Area'
import PostPropertySection from '../../home-page/home-page-components/PostPropertySection'
import axios from 'axios'
import { useParams } from 'next/navigation'

export default function page() {

  let [showResFilter, setShowResFilter] = useState(false)
  let [selectSorting, setSelectSorting] = useState(0)

  let [propertiesData, setPropertiesData] = useState([])
  let [staticPath, setStaticPath] = useState('')
  let [amenityImgPath, setAmenityImgPath] = useState('')

  let [filters, setFilters] = useState({}) 

   let {slug} = useParams()
   let ptype = slug.split('-')[0]  

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let getAllProperties = (propertyType) =>{
    
    axios.get(`${apiBaseUrl}home/listed-properties/${ptype}`,{
      params:{propertyType}
    })
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        console.log(finalRes);
        setPropertiesData(finalRes.data)
        setStaticPath(finalRes.staticPath)
        setAmenityImgPath(finalRes.amenityImgPath)
      }
    })
  }

  useEffect(()=>{
    getAllProperties()
  },[])

  return (
    <div className=''>
      <FilterProperties showResFilter = {showResFilter} setShowResFilter = {setShowResFilter} setSelectSorting={setSelectSorting} type={ptype} setFilters={setFilters} filters={filters} getAllProperties={getAllProperties} />
      <ListedPropertiesArea 
      setShowResFilter = {setShowResFilter} 
      selectSorting={selectSorting} 
      setSelectSorting={setSelectSorting} 
      propertiesData = {propertiesData}
      staticPath = {staticPath}
      amenityImgPath = {amenityImgPath}
      />
      <PostPropertySection/>
    </div>
  )
}

