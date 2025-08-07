import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddSubServices() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)

    let [parentSevices, setParentServices] = useState([])
    let { id } = useParams()
    let navigate = useNavigate()

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let getParentServices = () => {
        axios.get(`${apiBaseUrl}sub-services/parent-services`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    console.log(finalRes);
                    setParentServices(finalRes.data)
                }
            })
    }
    useEffect(() => {
        getParentServices()
    }, [])

    let [formData, setFormData] = useState({
        parentServices: '',
        parentServicesId: '',
        subServicesTitle: '',
        subServicesDescription: ''
    })

    let saveSubServices = (e) => {
        e.preventDefault()
        let formValue = new FormData(e.target)

        if (id) {
            axios.put(`${apiBaseUrl}sub-services/update/${id}`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        toast.success(finalRes.msg)
                        setPreview(defaultPreview)
                        setFormData({ parentSevices: '', parentSevicesId: '', subServicesTitle: '', subServicesDescription: '' })
                        setTimeout(() => {
                            navigate('/sub-services/view')
                        }, [2000])
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }
        else {
            axios.post(`${apiBaseUrl}sub-services/add`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        toast.success(finalRes.msg)
                        setPreview(defaultPreview)
                        setFormData({ parentSevices: '', parentSevicesId: '', subServicesTitle: '', subServicesDescription: '' })
                        setTimeout(() => {
                            navigate('/sub-services/view')
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
            parentServices: '',
            parentServicesId: '',
            subServicesTitle: '',
            subServicesDescription: ''
        })
        setPreview(defaultPreview)

        if (id) {
            axios.get(`${apiBaseUrl}sub-services/single-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        setFormData({
                            parentServices: finalRes.data.parentServices.servicesTitle,
                            parentServicesId: finalRes.data.parentServices._id,
                            subServicesTitle: finalRes.data.subServicesTitle,
                            subServicesDescription: finalRes.data.subServicesDescription,
                        })
                        setPreview(finalRes.staticPath + finalRes.data.subServicesImage)

                    }
                })
        }
    }, [id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Sub Services /</span>
                    <span className='text-gray-800'> {id ? 'Edit' : 'Add'}</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'>{id ? 'Edit' : 'Add'} Sub Services</h2>
                    </div>

                    <form onSubmit={saveSubServices} className='py-[20px] px-[20px] rounded-[5px] grid grid-cols-[35%_65%] items-stretch gap-4'>
                        <div className='mb-[20px]'>
                            <label htmlFor="" className='pb-[6px] block font-medium'>Sub Services Image</label>
                            <div className='border-2 border-gray-200 rounded-[6px] overflow-hidden'>
                                <img src={preview} alt="preview" className='w-[100%] h-[300px] rounded-[5px]' />
                                <input onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))} type="file" name='subServicesImage' className="p-2" />
                            </div>
                        </div>

                        <div className=''>
                            <div className='mb-[20px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Parent Services</label>
                                <select onChange={(e) => {
                                    let obj = { ...formData }
                                    obj['parentServices'] = e.target.value
                                    setFormData(obj)
                                }} name="parentServices" id="" value={formData.parentServices} className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                    <option value="Select Category">Nothing Selected</option>

                                    {parentSevices.length >= 1 &&
                                        parentSevices.map((items, idx) => (
                                            <option key={idx} value={items._id}>
                                                {items.servicesTitle}
                                            </option>
                                        ))}

                                </select>
                            </div>
                            <div className='mb-[20px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Sub Services Name</label>
                                <input onChange={(e) => {
                                    let obj = { ...formData }
                                    obj['subServicesTitle'] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" name='subServicesTitle' value={formData.subServicesTitle} placeholder='Name' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[70px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Sub Services Description</label>
                                <textarea onChange={(e) => {
                                    let obj = { ...formData }
                                    obj['subServicesDescription'] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" placeholder='Description' value={formData.subServicesDescription} name='subServicesDescription' id="" className='px-[12px] py-1 w-[100%] h-[152px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                </textarea>
                            </div>
                        </div>
                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>
                                {id ? 'Update' : 'Add'} Sub Services
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
