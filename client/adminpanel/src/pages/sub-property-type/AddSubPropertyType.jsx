import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddSubPropertyType() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)

    let [propertTypes, setPropertTypes] = useState([])
    let navigate = useNavigate()

    let [formData, setFormData] = useState({
        subPropertyTypeName: '',
        parentPropertyType: '',
        parentPropertyTypeId: ''
    })
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let getPropertyTypes = () => {
        axios.get(`${apiBaseUrl}sub-property-type/parent-property-type`)
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                setPropertTypes(finalRes.data)
            })
    }
    useEffect(() => {
        getPropertyTypes()
    }, [])

    let { id } = useParams()

    let saveSubpropertyType = (e) => {
        e.preventDefault()
        let formValue = new FormData(e.target)

        if (id) {
            axios.put(`${apiBaseUrl}sub-property-type/update/${id}`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setPreview(defaultPreview)
                        setFormData({ parentPropertyType: '', subPropertyTypeName: '', parentPropertyTypeId: '' })
                        setTimeout(() => {
                            navigate('/sub-property-type/view')
                        }, [2000])

                    }
                })
        }
        else {
            axios.post(`${apiBaseUrl}sub-property-type/add`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setPreview(defaultPreview)
                        setFormData({ parentPropertyType: '', subPropertyTypeName: '', parentPropertyTypeId: '' })
                        setTimeout(() => {
                            navigate('/sub-property-type/view')
                        }, [2000])

                    }
                })
        }
    }

    useEffect(() => {
        setFormData({
            subPropertyTypeName: '',
            parentPropertyType: '',
            parentPropertyTypeId: ''
        })
        setPreview(defaultPreview)
        if (id) {
            axios.get(`${apiBaseUrl}sub-property-type/single-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        setFormData({
                            subPropertyTypeName: finalRes.data.subPropertyTypeName,
                            parentPropertyType: finalRes.data.parentPropertyType.propertyTypeName,
                            parentPropertyTypeId: finalRes.data.parentPropertyType._id
                        })
                        setPreview(finalRes.staticPath + finalRes.data.subPropertyTypeImage)

                    }
                })
        }
    }, [id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Sub Property Type /</span>
                    <span className='text-gray-800'> {id ? "Edit" : "Add"}</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'>{id ? "Edit" : "Add"} Sub Property Type</h2>
                    </div>

                    <form onSubmit={saveSubpropertyType} className='py-[20px] px-[20px] grid grid-cols-[35%_65%] gap-5 rounded-[5px]'>
                        <div className='mb-[15px] h-[400px]'>
                            <label htmlFor="" className='pb-[6px] block font-medium'>Choose Image</label>
                            <div className='border-2 border-gray-200 rounded-[6px]'>
                                <img src={preview} alt="preview" className='w-[100%] h-[260px] rounded-[5px]' />
                                <input onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))} type="file" name='subPropertyTypeImage' className="w-full p-5" />
                            </div>
                        </div>
                        <div className='pr-[20px]'>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Parent Property Type</label>

                                <select onChange={(e) => {
                                    let obj = { ...formData }
                                    obj['parentPropertyType'] = e.target.value
                                    setFormData(obj)
                                }} name="parentPropertyType" value={formData.parentPropertyType.propertyTypeName} id="" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                    <option value="Select Category">Nothing Selected</option>

                                    {propertTypes.length >= 1 &&
                                        propertTypes.map((items, idx) => <option selected={formData.parentPropertyTypeId == items._id} key={idx} value={items._id}>{items.propertyTypeName}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Sub Property Name</label>
                                <input onChange={(e) => {
                                    let obj = { ...formData }
                                    obj['subPropertyTypeName'] = e.target.value
                                    setFormData(obj)
                                }} type="text" placeholder='Name' value={formData.subPropertyTypeName} name="subPropertyTypeName" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                        </div>

                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>
                                {id ? "Update" : "Add"} Sub Property Type
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

