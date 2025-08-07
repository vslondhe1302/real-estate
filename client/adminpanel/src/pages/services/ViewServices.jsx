import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSolidPencil } from 'react-icons/bi';
import { MdFilterAlt, MdFilterAltOff, MdSearch } from 'react-icons/md';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

export default function ViewServices() {
  let [search, setSearch] = useState(false)

  let [selectAll, setSelectAll] = useState(false)
  let [ids, setIds] = useState([])

  let [servicesList, setServicesList] = useState([])

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let getServices = () => {
    axios.get(`${apiBaseUrl}services/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          setServicesList(finalRes.data)

        }
      })
  }

  useEffect(() => {
    getServices()
  }, [])

  let deleteServices = () => {
    axios.post(`${apiBaseUrl}services/delete`, { ids })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          toast.success(finalRes.msg)
          setIds([])
          getServices()
        }
        else {
          toast.error(finalRes.msg)
        }
      })
  }

  let statusChange = () => {
    axios.post(`${apiBaseUrl}services/change-status`, { ids })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          toast.success(finalRes.msg)
          setIds([])
          getServices()
        }
        else {
          toast.error(finalRes.msg)
        }
      })
  }

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
      let allIds = servicesList.map((items) => items._id)
      setIds(allIds);
    }
    else {
      setIds([])
    }
  }

  useEffect(() => {
    if (servicesList.length >= 1) {
      if (servicesList.length == ids.length) {
        setSelectAll(true)
      }
      else {
        setSelectAll(false)
      }
    }
  }, [ids])

  return (
    <div>
      <ToastContainer />
      <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
        <div className='font-medium text-gray-600'>Home / <span className='text-gray-600'>
          <Link to={'/services/add'}>Services /</Link></span>
          <span className='text-gray-800'> View</span>
        </div>
      </div>
      <div className={`${search ? 'max-h-[200px]' : 'max-h-[0px]'} duration-120 ease-in-out m-[20px] overflow-hidden `}>
        <div className='flex items-center gap-4 p-[20px] border-[0.1px] border-gray-300 rounded-[10px]'>
          <input type="text" placeholder='Search Name' name="" id="" className='px-[12px] w-[380px] h-[35px] rounded-[6px] bg-gray-700 text-gray-300 outline-[1px] outline-gray-800' />
          <button className='px-[10px] h-[35px] rounded-[6px] bg-blue-500 hover:bg-blue-700 cursor-pointer'><MdSearch className='text-[22px] text-white ' /></button>
        </div>
      </div>
      <div className='px-[20px] py-[20px]'>
        <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
          <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300'>
            <h2 className='text-[22px] font-medium'>View Services</h2>
            <div className='flex gap-[10px]'>
              <button onClick={(e) => { setSearch(!search); e.preventDefault() }} className='h-[40px] px-[8px] flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-[24px] rounded-[8px] text-white cursor-pointer'>
                {search ?
                  <MdFilterAltOff />
                  : <MdFilterAlt />}

              </button>
              <button onClick={statusChange} className='h-[40px] px-[10px] flex justify-center items-center bg-green-600 hover:bg-green-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Change Status</button>
              <button onClick={deleteServices} className='h-[40px] px-[10px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Delete</button>
            </div>
          </div>
          <div className=' rounded-[10px] bg-gray-800'>
            <div className='flex justify-between items-center bg-gray-700 p-[20px] rounded-[10px_10px_0px_0px]'>
              <div className='flex basis-[40%] justify-between items-center'>
                <input onChange={handleAll} checked={selectAll} value={selectAll} type="checkbox" className='scale-140 mr-4' />
                <h3 className='text-gray-300 basis-[15%] uppercase text-[13px] font-medium mr-4'>Sr.No</h3>
                <h3 className='text-gray-300 basis-[80%] uppercase text-[13px] font-medium'>Services Name</h3>
              </div>
              <div className='flex basis-[60%] justify-between items-center uppercase text-gray-300 font-medium text-[13px]'>
                <h2 className='text-left basis-[45%]  '>description </h2>
                <h2 className='text-left basis-[7%]  '>status</h2>
                <h2 className='text-left basis-[5%]  '>action</h2>
              </div>
            </div>
            {servicesList.length != 0 ?
              servicesList.map((items, index) => (

                <div key={index} className='flex justify-between items-center px-[20px] py-[15px]'>
                  <div className='flex basis-[40%] justify-between items-center '>
                    <input onChange={getCheckedValue} checked={ids.includes(items._id)} type="checkbox" value={items._id} className='scale-140 mr-4' />
                    <div className='text-gray-300  basis-[15%] uppercase text-[13px] font-medium mr-4'>
                      {/* {(currentPage - 1) * 4 + index + 1} */}{index + 1}
                    </div>
                    <h3 className='text-gray-300 basis-[80%] uppercase text-[13px] font-medium'>
                      {items.servicesTitle}
                    </h3>
                  </div>

                  <div className='flex basis-[60%] justify-between  items-center text-gray-300 font-medium text-[13px]'>
                    <p className='text-left basis-[45%] line-clamp-6 '>
                      {items.servicesDescription}
                    </p>
                    <div className='text-left basis-[7%] '>

                      {items.servicesStatus ?
                        <button className='bg-green-400 text-white text-[14px] inset-shadow-[-10px_0px_40px_0px_rgb(0,0,0,0.5)] h-[30px] px-[20px] rounded-[8px]'>Active</button>
                        :
                        <button className='bg-red-400 text-white text-[14px] inset-shadow-[-10px_0px_40px_0px_rgb(0,0,0,0.5)] h-[30px] px-[20px] rounded-[8px]'>Deactive</button>
                      }

                    </div>
                    <div className='text-left basis-[5%]'>
                      <Link to={`/services/edit/${items._id}`}>
                        <button className='w-[40px] h-[40px] bg-blue-500 flex justify-center items-center text-[18px] rounded-[50%]'>
                          <BiSolidPencil />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              :

              <div className='px-[20px] py-[15px] text-white'> No Services List Found</div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
