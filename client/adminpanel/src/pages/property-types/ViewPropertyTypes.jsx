import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSolidPencil } from 'react-icons/bi';
import { MdFilterAlt, MdFilterAltOff, MdSearch } from 'react-icons/md';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

export default function ViewPropertyTypes() {
  let [search, setSearch] = useState(false)

  let [selectAll, setSelectAll] = useState(false)
  let [ids, setIds] = useState([])

  let [propertyTypesData, setPropertyTypesData] = useState([])
  let [propertyTypeName, setPropertyTypeName] = useState('')
  let [staticPath, setStaticPath] = useState('')

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let getPropertTypes = () => {
    axios.get(`${apiBaseUrl}property-type/view`,{
      params :{
        propertyTypeName
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          setPropertyTypesData(finalRes.data)
          setStaticPath(finalRes.staticPath)
        }
      })
  }

  useEffect(() => {
    getPropertTypes()
  }, [propertyTypeName])

  let getCheckedValue = (event) => {
    if (event.target.checked && !ids.includes(event.target.value)) {
      setIds([...ids, event.target.value])
    }
    else {
      setIds(ids.filter((v) => v != event.target.value))
    }
  }

  let handleAll = (event) => {
    if (event.target.checked) {
      let allIds = propertyTypesData.map((items) => items._id)
      setIds(allIds);
    }
    else {
      setIds([])
    }
  }

  useEffect(() => {
    if (propertyTypesData.length >= 1) {
      if (propertyTypesData.length == ids.length) {
        setSelectAll(true)
      }
      else {
        setSelectAll(false)
      }
    }
  }, [ids])

  let deletePropertyTypes = () =>{
    axios.post(`${apiBaseUrl}property-type/delete`,{ids})
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        console.log();
        toast.success(finalRes.msg)
        getPropertTypes()
        setIds([])
      }
      else{
        toast.error(finalRes.msg)
      }
    })
  }

  let changeStatus = () =>{
    axios.post(`${apiBaseUrl}property-type/change-status`,{ids})
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        console.log();
        toast.success(finalRes.msg)
        getPropertTypes()
        setIds([])
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
        <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Property Types /</span>
          <span className='text-gray-800'> View</span>
        </div>
      </div>
      <div className={`${search ? 'max-h-[200px]' : 'max-h-[0px]'} duration-120 ease-in-out m-[20px] overflow-hidden `}>
        <div className='flex items-center gap-4 p-[20px] border-[0.1px] border-gray-300 rounded-[10px]'>
          <input onChange={(e)=>setPropertyTypeName(e.target.value)} value={propertyTypeName} type="text" placeholder='Search Name' name="" id="" className='px-[12px] w-[380px] h-[35px] rounded-[6px] bg-gray-700 text-gray-300 outline-[1px] outline-gray-800' />
          <button onClick={()=>getPropertTypes()} className='px-[10px] h-[35px] rounded-[6px] bg-blue-500 hover:bg-blue-700 cursor-pointer'><MdSearch className='text-[22px] text-white ' /></button>
        </div>
      </div>
      <div className='px-[20px] py-[20px]'>
        <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
          <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300'>
            <h2 className='text-[22px] font-medium'>View Property Types</h2>
            <div className='flex gap-[10px]'>
              <button onClick={(e) => { setSearch(!search); e.preventDefault() }} className='h-[40px] px-[8px] flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-[24px] rounded-[8px] text-white cursor-pointer'>
                {search ?
                  <MdFilterAltOff />
                  : <MdFilterAlt />}

              </button>
              <button onClick={changeStatus} className='h-[40px] px-[10px] flex justify-center items-center bg-green-600 hover:bg-green-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Change Status</button>
              <button onClick={deletePropertyTypes} className='h-[40px] px-[10px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Delete</button>
            </div>
          </div>
          <div className=' rounded-[10px] bg-gray-800'>
            <div className='flex justify-between items-center bg-gray-700 p-[20px] rounded-[10px_10px_0px_0px]'>
              <div className='flex basis-[50%] gap-6 items-center'>
                <input onChange={handleAll} checked={selectAll} value={selectAll} type="checkbox" className='scale-140' />
                <h3 className='text-gray-300 w-[10%] uppercase text-[13px] font-medium'>Sr.No</h3>
                <h3 className='text-gray-300 w-[35%] uppercase text-[13px] font-medium'>Name</h3>
              </div>
              <div className='flex basis-[50%] justify-between items-center uppercase text-gray-300 font-medium text-[13px]'>
                <h2 className='text-left basis-[10%]  '>Image </h2>
                <h2 className='text-left basis-[10%]  '>Order </h2>
                <h2 className='text-left basis-[10%]  '>status</h2>
                <h2 className='text-left basis-[10%]  '>action</h2>
              </div>
            </div>

            {propertyTypesData.length!=0 ?
             propertyTypesData.map((items,index)=>{
              return(

            <div key={index} className='flex justify-between items-center px-[20px] py-[15px]'>
              <div className='flex basis-[50%] gap-6 items-center '>
                <input onChange={getCheckedValue} checked={ids.includes(items._id)} value={items._id} type="checkbox" className='scale-140' />
                <h3 className='text-gray-300 w-[10%] uppercase text-[13px] font-medium'>
                  {/* {(currentPage - 1) * 4 + index + 1} */}{index+1}
                </h3>
                <h3 className='text-gray-300 w-[35%] uppercase text-[13px] font-medium'>{items.propertyTypeName}</h3>
              </div>
              <div className='flex basis-[50%] justify-between  items-center text-gray-300 font-medium text-[13px]'>
                <div className='text-left basis-[12%]'>
                  <img src={staticPath+items.propertyTypeImage} alt="preview" className='w-[50px] h-[45px] ' />
                </div>
                <h2 className='text-center basis-[10%] '>{items.propertyTypeOrder}</h2>
                <div className='text-left basis-[10%] '>
                {items.propertyTypeStatus ?
                  <button className='bg-green-400 text-white text-[14px] inset-shadow-[-10px_0px_40px_0px_rgb(0,0,0,0.5)] h-[30px] px-[20px] rounded-[8px]'>Active</button>
                :
                  <button className='bg-red-400 text-white text-[14px] inset-shadow-[-10px_0px_40px_0px_rgb(0,0,0,0.5)] h-[30px] px-[20px] rounded-[8px]'>Deactive</button>
                }

                </div>
                <div className='text-left basis-[10%]'>
                  <Link to={`/property-types/edit/${items._id}`}>
                    <button className='w-[40px] h-[40px] bg-blue-500 flex justify-center items-center text-[18px] rounded-[50%]'><BiSolidPencil /></button>
                  </Link>
                </div>
              </div>
            </div>
            )
            })
            :
              <div className='px-[20px] py-[15px] text-white'> No Property-Types data Found</div> 
            }

          </div>
        </div>
      </div>
    </div>
  )
}
