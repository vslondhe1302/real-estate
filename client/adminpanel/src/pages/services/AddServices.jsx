import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddServices() {
    // let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    // let [preview, setPreview] = useState(defaultPreview)
    let { id } = useParams()
    let navigate = useNavigate()

    let [formData, setFormData] = useState({
        servicesTitle: '',
        servicesDescription: ''
    })

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let saveServices = (e) => {
        e.preventDefault()

        if (id) {
            axios.put(`${apiBaseUrl}services/update/${id}`, formData)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        setFormData({ servicesTitle: '', servicesDescription: '' })
                        toast.success(finalRes.msg)
                        setTimeout(() => {
                            navigate('/services/view')
                        }, [2000])
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })

        }
        else {
            axios.post(`${apiBaseUrl}services/add`, formData)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        setFormData({ servicesTitle: '', servicesDescription: '' })
                        toast.success(finalRes.msg)
                        setTimeout(() => {
                            navigate('/services/view')
                        }, [2000])
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }
    }

    useEffect(() => {
        setFormData({
            servicesTitle: '',
            servicesDescription: ''
        })
        
        if (id) {
            axios.get(`${apiBaseUrl}services/single-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        setFormData({
                            servicesTitle: finalRes.data.servicesTitle,
                            servicesDescription: finalRes.data.servicesDescription
                        })

                    }
                })
        }
    }, [id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Services /</span>
                    <span className='text-gray-800'> {id ? 'Edit' : 'Add'}</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'>{id ? 'Edit' : 'Add'} Services</h2>
                    </div>

                    <form onSubmit={saveServices} className='py-[20px] px-[20px] rounded-[5px] grid grid-cols-1 gap-4'>
                        {/* <div className='mb-[20px]'>
                            <label htmlFor="" className='pb-[6px] block font-medium'>Services Image</label>
                            <div className='border-2 border-gray-200 rounded-[6px] overflow-hidden'>
                                <img src={preview} alt="preview" className='w-[100%] h-[300px] rounded-[5px]' />
                                <input type="file" name='servicesImage' className="p-2" />
                            </div>
                        </div> */}

                        <div className=''>
                            <div className='mb-[20px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Services Title</label>
                                <input onChange={(e) => {
                                    let obj = { ...formData }
                                    obj["servicesTitle"] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" name='servicesTitle' value={formData.servicesTitle} placeholder='Name' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[70px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Services Description</label>
                                <textarea onChange={(e) => {
                                    let obj = { ...formData }
                                    obj["servicesDescription"] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" value={formData.servicesDescription} placeholder='Description' name='servicesDescription' id="" className='px-[12px] py-1 w-[100%] h-[140px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                </textarea>
                            </div>
                        </div>
                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>
                                {id ? 'Update' : 'Add'} Services
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
