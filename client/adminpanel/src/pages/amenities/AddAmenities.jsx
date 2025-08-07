import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddAmenities() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)

    let navigate = useNavigate()
    let { id } = useParams()

    let [title, setTitle] = useState('')

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let saveAmenities = (e) => {
        e.preventDefault()
        let formValue = new FormData(e.target)

        if (id) {
            axios.put(`${apiBaseUrl}amenities/update/${id}`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                         setPreview(defaultPreview)
                         setTitle('')
                        setTimeout(() => {
                            navigate('/amenities/view')
                        }, [2000])
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })

        }
        else {

            axios.post(`${apiBaseUrl}amenities/add`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setPreview(defaultPreview)
                        setTitle('')
                        setTimeout(() => {
                            navigate('/amenities/view')
                        }, [2000])
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }
    }
    useEffect(() => {
       setTitle('')
        setPreview(defaultPreview)

        if (id) {
            axios.get(`${apiBaseUrl}amenities/single-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        setTitle(finalRes.data.title)
                        setPreview(finalRes.staticPath + finalRes.data.image)
                    }
                })
        }
    }, [id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Amenities /</span>
                    <span className='text-gray-800'> {id ? "Edit" : "Add"}</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'>{id ? "Edit" : "Add"} Amenities</h2>
                    </div>

                    <form onSubmit={saveAmenities} className='py-[20px] px-[20px] grid grid-cols-[35%_65%] gap-5 rounded-[5px]'>
                        <div className='mb-[15px] h-[400px]'>
                            <label htmlFor="" className='pb-[6px] block font-medium'>Choose Image</label>
                            <div className='border-2 border-gray-200 rounded-[6px]'>
                                <img src={preview} alt="preview" className='w-[100%] h-[260px] rounded-[5px]' />
                                <input onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))} type="file" name='image' className="w-full p-5" />
                            </div>
                        </div>
                        <div className='pr-[20px]'>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Title</label>
                                <input onChange={(e) =>setTitle(e.target.value)} type="text" placeholder='Title' value={title} name="title" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                        </div>

                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>
                                {id ? "Update" : "Add"} Amenity</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

