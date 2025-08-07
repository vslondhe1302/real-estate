import React, { useEffect, useState } from 'react'
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { MdSearch } from "react-icons/md";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function PropertyEnquiries() {
    let [search, setSearch] = useState(false)
    let [propertyEnquiry, setPropertyEnquiry] = useState([])
    let [ids, setIds] = useState([])
    let [selectAll, setSelectAll] = useState(false)

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let getPropertyEnquiries = () => {
        axios.get(`${apiBaseUrl}enquiries/property-enquiries`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    console.log(finalRes);
                    setPropertyEnquiry(finalRes.data)
                }
            })
    }

    useEffect(() => {
        getPropertyEnquiries()
    }, [])

    let deleteEnquiries = () => {
        axios.post(`${apiBaseUrl}enquiries/delete-enquiries`, { ids })
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    toast.success(finalRes.msg)
                    getPropertyEnquiries()
                    setIds([])
                }
            })
    }

    let changeStatus = () => {
        axios.post(`${apiBaseUrl}enquiries/change-status`, { ids })
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    toast.success(finalRes.msg)
                    getPropertyEnquiries()
                    setIds([])
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
            let allIds = propertyEnquiry.map((items) => items._id)
            setIds(allIds);
        }
        else {
            setIds([])
        }
    }

    useEffect(() => {
        if (propertyEnquiry.length >= 1) {
            if (propertyEnquiry.length == ids.length) {
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
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Enquiry /</span>
                    <span className='text-gray-800'> View</span>
                </div>
            </div>

            <div >
                <div className={`${search ? 'max-h-[200px]' : 'max-h-[0px]'} duration-120 ease-in-out m-[20px] overflow-hidden `}>
                    <div className='flex items-center gap-4 p-[20px] border-[0.1px] border-gray-300 rounded-[10px]'>
                        <input type="text" placeholder='Search Name' name="" id="" className='px-[12px] w-[380px] h-[35px] rounded-[6px] bg-gray-700 text-gray-300 outline-[1px] outline-gray-800' />
                        <button className='px-[10px] h-[35px] rounded-[6px] bg-blue-500 hover:bg-blue-700 cursor-pointer'><MdSearch className='text-[22px] text-white ' /></button>
                    </div>
                </div>
                <div className='px-[20px] py-[20px]'>
                    <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                        <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300'>
                            <h2 className='text-[22px] font-medium'>Contact Enquiry Management</h2>
                            <div className='flex gap-[10px]'>
                                <button onClick={(e) => { setSearch(!search); e.preventDefault() }} className='h-[40px] px-[8px] flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-[24px] rounded-[8px] text-white cursor-pointer'>
                                    {search ?
                                        <MdFilterAltOff />
                                        : <MdFilterAlt />}

                                </button>
                                <button onClick={changeStatus} className='h-[40px] px-[10px] flex justify-center items-center bg-green-600 hover:bg-green-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Change Status</button>
                                <button onClick={deleteEnquiries} className='h-[40px] px-[10px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-[18px] rounded-[8px] text-white cursor-pointer'>Delete</button>
                            </div>
                        </div>
                        <div className=' rounded-[10px] bg-gray-800'>
                            <div className='flex gap-3 justify-between items-center bg-gray-700 p-[20px] rounded-[10px_10px_0px_0px]'>
                                <input type="checkbox" onChange={handleAll} checked={selectAll} value={selectAll} className='scale-140 text-left basis-[5%]' />
                                <div className='text-gray-300 uppercase text-[13px] font-medium text-left basis-[15%]'>user type</div>
                                <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[15%]'>name </div>
                                <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[25%]'>email </div>
                                <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[15%]'>phone</div>
                                <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[10%]'>status</div>
                                <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[10%]'>action</div>
                            </div>

                            {propertyEnquiry.length >= 1 ?
                                propertyEnquiry.map((items, index) => {
                                    return (
                                        <div key={index} className='flex gap-3 justify-between items-center p-[20px]'>
                                            <input type="checkbox" onChange={getCheckedValue} checked={ids.includes(items._id)} value={items._id} className='scale-140 basis-[5%]' />
                                            <div className='text-gray-300 uppercase text-[13px] font-medium text-left basis-[15%]'>
                                                {items.type}
                                            </div>
                                            <div className='text-gray-300 uppercase text-[13px] font-medium text-left basis-[15%]'>
                                                {items.name}
                                            </div>
                                            <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[25%] '>
                                                {items.email}
                                            </div>
                                            <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[15%]'>
                                                {items.phone}
                                            </div>
                                            {items.status ?
                                                <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[10%]'>
                                                    <button className='bg-green-400 text-white text-[14px] inset-shadow-[-10px_0px_40px_0px_rgb(0,0,0,0.5)] h-[30px] px-[20px] rounded-[8px]'>Active</button>
                                                </div>
                                                :
                                                <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[10%]'>
                                                    <button className='bg-red-400 text-white text-[14px] inset-shadow-[-10px_0px_40px_0px_rgb(0,0,0,0.5)] h-[30px] px-[20px] rounded-[8px]'>Deactive</button>
                                                </div>
                                            }
                                            <div className='text-left text-gray-300 uppercase text-[13px] font-medium basis-[10%]'>
                                                <button className='w-[40px] h-[40px] bg-blue-500 flex justify-center items-center text-[18px] rounded-[50%]'><BiSolidPencil /></button>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className='grid grid-cols-1 items-center p-[20px] text-white'>
                                    No Property enquiries available
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
