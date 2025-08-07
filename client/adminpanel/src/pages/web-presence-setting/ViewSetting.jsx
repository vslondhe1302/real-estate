import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PiNotePencilFill } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function ViewSetting() {

  let [profileData, setProfileData] = useState([])
  let [staticPath, setStaticPath] = useState('')

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let getCompanyProfile = () =>{
    axios.get(`${apiBaseUrl}company-profile/view`)
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        console.log(finalRes);
        setProfileData(finalRes.data)
        setStaticPath(finalRes.staticPath)
        
      }
    })
  }

  useEffect(()=>{
    getCompanyProfile()
  },[])

  let deleteProfile = () =>{
  
    axios.delete(`${apiBaseUrl}company-profile/delete`)
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        toast.success(finalRes.msg)
        getCompanyProfile()
      }
      else{
        toast.error(finalRes.msg)
      }
    })
    
  }

  return (
    <div>
      <ToastContainer/>
      <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
        <div className='font-medium'>
          <Link to={'/'} className='text-gray-600'>Home /</Link>
          <Link to={'/company-profile/add'} className='text-gray-600'>
            Account Setting /
          </Link>
          <span className='text-gray-800'> Company Profile</span>
        </div>
      </div>
      <div className='px-[20px] py-[20px]'>
        <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
          <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 '>
            <h2 className='text-[26px] font-medium'>Company Profile</h2>
          </div>
          <div className=' rounded-[10px]'>
            <div className='w-[100%] grid grid-cols-12 gap-3 justify-between items-center  p-[15px] rounded-[10px_10px_0px_0px] uppercase text-gray-700 font-medium text-[16px] border-b-1 border-b-gray-200 bg-gray-100'>
              <h2 className=' col-span-2'> name </h2>
              <h2 className=' col-span-1 '> logo </h2>
              <h2 className=' col-span-2'> email </h2>
              <h2 className=' col-span-1'>phone</h2>
              <h2 className=' col-span-2'>address</h2>
              <h2 className=' col-span-2'>social links</h2>
              <h2 className=' col-span-1 text-center'>edit</h2>
              <h3 className=' col-span-1 text-center'>delete</h3>
            </div>

            {profileData.length==1 ?
            profileData.map((items,index)=>(
            <div key={index} className='w-[100%] grid grid-cols-12 gap-3 justify-between items-center  p-[20px] rounded-[10px_10px_0px_0px] text-gray-700 font-medium text-[14px]'>
              <span className=' col-span-2'>
                {items.companyName}
              </span>
              <div className='col-span-1'>
                <img src={staticPath+items.companyLogo} alt="preview" className='w-[55px] h-[55px] rounded-[4px] border-1 border-gray-200' />
              </div>
              <div className='company-profile col-span-2 overflow-x-scroll'>
                {items.companyEmail}
              </div>
              <div className=' col-span-1'>
                {items.companyPhone}
              </div>
              <div className=' col-span-2'>
                {items.companyAddress}
              </div>
              <div className='col-span-2 text-blue-500 cursor-pointer company-profile whitespace-nowrap overflow-x-scroll'>
                <div>
                  1. {items.facebookLink}
                </div>
                <div>
                  2. {items.instagramLink}
                </div>
                <div>
                  3. {items.linkedinLink}
                </div>
                <div>
                  4. {items.youtubeLink}
                </div>
              </div>
              <div className='col-span-1 flex justify-center'>
                <Link to={`/company-profile/edit/${items._id}`}>
                  <PiNotePencilFill className='text-[25px] text-yellow-300 text-center' />
                </Link>
              </div>
              <div onClick={()=>deleteProfile(items._id)} className='col-span-1 flex justify-center cursor-pointer'>
                <RiDeleteBin6Line className='text-[25px] text-red-500 text-center' />
              </div>
            </div>
            ))
            :
            <div className='text-gray-800 font-semibold p-4 '> No company profile saved ! </div>
}

          </div>
        </div>
      </div>
    </div>
  )
}
