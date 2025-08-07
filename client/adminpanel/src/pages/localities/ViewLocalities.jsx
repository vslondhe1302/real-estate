import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSolidPencil } from 'react-icons/bi'
import { MdFilterAlt, MdFilterAltOff, MdSearch } from 'react-icons/md';
import { Link } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import ResponsivePagination from 'react-responsive-pagination';

export default function ViewLocalities() {
  let [search, setSearch] = useState(false)
  let [ids, setIds] = useState([])
  let [selectAll, setSelectAll] = useState(false)

  let [localityList, setLocalityList] = useState([])
  let [localityName, setLocalityName] = useState('')

  let [currentPage, setCurrentPage] = useState(1)
  let [totalPages, setTotalPages] = useState(null)

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let getLocalityList = () => {
    axios.get(`${apiBaseUrl}locality/view`,
      {
        params: {
          localityName,
          currentPage
        }
      }
    )
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          setLocalityList(finalRes.data)
          setTotalPages(finalRes.pages)
        }

      })
  }

  useEffect(() => {
    getLocalityList()
  }, [localityName, currentPage])

  let deleteLocalityList = () => {
    axios.post(`${apiBaseUrl}locality/delete`, { ids })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          getLocalityList()
          toast.success(finalRes.msg)
          setIds([])
        }

      })
  }

  let changeStatus = () => {
    axios.post(`${apiBaseUrl}locality/change-status`, { ids })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          console.log(finalRes);
          getLocalityList()
          toast.success(finalRes.msg)
          setIds([])
        }
        else {
          toast.error(finalRes.msg)
        }

      })
  }

  let handleChecked = (e) => {
    if (e.target.checked && !ids.includes(e.target.value)) {
      setIds([...ids, e.target.value])
    }
    else {
      setIds(ids.filter((v) => !v.includes(e.target.value)))
    }
  }

  let handleAll = (event) => {
    if (event.target.checked) {
      let allIds = localityList.map((items) => items._id)
      setIds(allIds);
    }
    else {
      setIds([])
    }
  }

  useEffect(() => {
    if (localityList.length >= 1) {
      if (localityList.length == ids.length) {
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
        <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Locality /</span>
          <span className='text-gray-800'> View</span>
        </div>
      </div>
      <div >
        <div className={`${search ? 'max-h-[200px]' : 'max-h-[0px]'} duration-120 ease-in-out m-[20px] overflow-hidden `}>
          <div className='flex items-center gap-4 p-[20px] border-[0.1px] border-gray-300 rounded-[10px]'>
            <input onChange={(e) => setLocalityName(e.target.value)} type="text" placeholder='Search Name' name="localityName" id="" className='px-[12px] w-[380px] h-[35px] rounded-[6px] bg-gray-700 text-gray-300 outline-[1px] outline-gray-800' />
            <button onClick={() => getLocalityList()} className='px-[10px] h-[35px] rounded-[6px] bg-blue-500 hover:bg-blue-700 cursor-pointer'><MdSearch className='text-[22px] text-white ' /></button>
          </div>
        </div>
        <div className='px-[20px] py-[20px]'>
          <div className=' border-[0.1px] border-gray-300 rounded-[8px] mb-7'>
            <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300'>
              <h2 className='text-[22px] font-medium'>View Locality</h2>
              <div className='flex gap-[10px]'>
                <button onClick={(e) => { setSearch(!search); e.preventDefault() }} className='h-[40px] px-[8px] flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-[24px] rounded-[8px] text-white cursor-pointer'>
                  {search ?
                    <MdFilterAltOff />
                    : <MdFilterAlt />}

                </button>
                <button onClick={changeStatus} className='h-[40px] px-[10px] flex justify-center items-center bg-green-600 hover:bg-green-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Change Status</button>

                <button onClick={deleteLocalityList} className='h-[40px] px-[10px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Delete</button>
              </div>
            </div>
            <table className='w-full rounded-[10px] bg-gray-800'>
              <thead className='w-full'>
                <tr className='grid grid-cols-5 text-left items-center p-[20px] bg-gray-700 rounded-[10px_10px_0px_0px]'>
                  <th className='flex items-center'>
                    <input onChange={handleAll} checked={selectAll} value={selectAll} type="checkbox" className='scale-140' />
                     <span className='text-gray-300 uppercase text-[13px] font-medium ml-5 '>sr. no.</span>
                  </th>
                 
                  <th className='text-gray-300 uppercase text-[13px] font-medium'>Locality Name</th>

                  <th className=' text-gray-300 uppercase text-[13px] font-medium '>city </th>
                  <th className=' text-gray-300 uppercase text-[13px] font-medium '>status </th>
                  <th className=' text-gray-300 uppercase text-[13px] font-medium '>action</th>
                </tr>
              </thead>
              <tbody className='w-full'>
                {localityList.length != 0 ?
                  localityList.map((items, index) => (

                    <tr key={index} className='w-full grid grid-cols-5 items-center p-[20px]'>
                      <td className='flex items-center'>
                        <input onChange={handleChecked} checked={ids.includes(items._id)} value={items._id} type="checkbox" className='scale-140' />
                        <span className='text-gray-300 uppercase text-[13px] font-medium ml-5'>
                          {(currentPage-1)*4+(index+1)}
                        </span>
                      </td>
                      <td className='text-gray-300 uppercase text-[13px] font-medium'>{items.localityName}</td>
                      <td className=' text-gray-300 uppercase text-[13px] font-medium'>{items.localityCity}</td>
                      <td className=' text-gray-300 uppercase text-[13px] font-medium'>
                        {items.localityStatus ?
                          <button className='bg-gradient-to-br from-green-400 to-green-600 hover:bg-gradient-to-tl text-white text-[14px] h-[30px] px-[20px] rounded-[8px]'>
                            Active
                          </button>
                          :
                          <button className='bg-gradient-to-br from-red-400 to-red-600 hover:bg-gradient-to-tl text-white text-[14px] h-[30px] px-[20px] rounded-[8px]'>
                            Deactive
                          </button>
                        }
                      </td>
                      <td className=''>
                        <Link to={`/localities/edit/${items._id}`}>
                          <button className='w-[35px] h-[35px] bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center text-[18px] rounded-[50%]'><BiSolidPencil /></button>
                        </Link>
                      </td>
                    </tr>
                  ))
                  :
                  <tr className='w-full grid grid-cols-1 items-center p-[20px]'>
                    <td className='text-[14px] text-white'>
                      No Locality List Found
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
