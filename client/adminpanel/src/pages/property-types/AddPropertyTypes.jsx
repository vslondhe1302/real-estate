import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddPropertyTypes() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)
    let { id } = useParams()

    let navigate = useNavigate()
    let [formData, setFormData] = useState({
        propertyTypeName: '',
        propertyTypeOrder: '',
        propertyTypeImage: ''

    })

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let savePropertyType = (e) => {
        e.preventDefault()
        let formValue = new FormData(e.target)

        if (id) {
            axios.put(`${apiBaseUrl}property-type/update/${id}`,formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log();
                        toast.success(finalRes.msg)
                        setFormData({ propertyTypeName: '', propertyTypeOrder: '' })
                        setPreview(defaultPreview)
                        setTimeout(() => {
                            navigate('/property-types/view')
                        }, [2000])

                    }
                    else{
                        toast.error(finalRes.msg)
                    }
                })
        } else {
            axios.post(`${apiBaseUrl}property-type/add`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        toast.success(finalRes.msg)
                        setFormData({ propertyTypeName: '', propertyTypeOrder: '' })
                        setPreview(defaultPreview)
                        setTimeout(() => {
                            navigate('/property-types/view')
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
            propertyTypeName: '',
            propertyTypeOrder: '',
        })
        setPreview(defaultPreview)
        if (id) {
            axios.get(`${apiBaseUrl}property-type/single-property-type/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        setFormData({
                            propertyTypeName: finalRes.data.propertyTypeName,
                            propertyTypeOrder: finalRes.data.propertyTypeOrder,
                        })
                        setPreview(finalRes.staticPath + finalRes.data.propertyTypeImage)
                    }

                })
        }
    }, [id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Property Type /</span>
                    <span className='text-gray-800'> {id ? "Edit" : "Add"}</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'>{id ? 'Edit' : "Add"} Property Type</h2>
                    </div>

                    <form onSubmit={savePropertyType} className='py-[20px] px-[20px] grid grid-cols-[35%_65%] gap-4 rounded-[5px]'>
                        <div className='mb-[20px]'>
                            <label htmlFor="" className='pb-[6px] block font-medium'>Property Type Image</label>
                            <div className='border-2 border-gray-200 rounded-[6px] overflow-hidden'>
                                <img src={preview} alt="preview" className='w-[100%] h-[300px] rounded-[5px]' />
                                <input onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))} type="file" name='propertyTypeImage' className="p-2" />
                            </div>
                        </div>
                        <div className='px-[10px]'>
                            <div className='mb-[20px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Property Type Name</label>
                                <input onChange={(e) => {
                                    let obj = { ...formData }
                                    obj["propertyTypeName"] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" placeholder='Enter Name' name='propertyTypeName' value={formData.propertyTypeName} className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[70px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Order</label>
                                <input onChange={(e) => {
                                    let obj = { ...formData }
                                    obj["propertyTypeOrder"] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" placeholder='Enter Order' name="propertyTypeOrder" value={formData.propertyTypeOrder} id="" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                        </div>

                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>{id ? "Update" : "Add"} Property Type</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
