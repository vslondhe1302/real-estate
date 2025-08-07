import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddTestimonial() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)

    let navigate = useNavigate()
    let { id } = useParams()
    console.log(id);

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let [formData, setFormData] = useState({
        title: '',
        designation: '',
        message: ''
    })

    let saveTestimonial = (e) => {
        e.preventDefault()

        let formValue = new FormData(e.target)

        if(id){
            axios.put(`${apiBaseUrl}testimonial/update/${id}`, formValue)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    toast.success(finalRes.msg)
                    setFormData({
                        title:'',
                        designation: '',
                        message:''
                    })
                    setPreview(defaultPreview)
                    setTimeout(() => {
                        navigate('/testimonial/view')
                    }, [2000])
                }
                else {
                    toast.error(finalRes.msg)
                }
            })
        }
        else{
        axios.post(`${apiBaseUrl}testimonial/add`, formValue)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    toast.success(finalRes.msg)
                    setFormData({
                        title:'',
                        designation: '',
                        message:''
                    })
                    setPreview(defaultPreview)
                    setTimeout(() => {
                        navigate('/testimonial/view')
                    }, [2000])
                }
                else {
                    toast.error(finalRes.msg)
                }
            })
        }
    }

    useEffect(()=>{
        setFormData({
            title: '',
            designation: '',
            message: ''
        })
        setPreview(defaultPreview)

        if(id){
            axios.get(`${apiBaseUrl}testimonial/single-data/${id}`)
            .then((res)=>res.data)
            .then((finalRes)=>{
                if(finalRes.status){
                    setFormData({
                        title: finalRes.data.title,
                        designation: finalRes.data.designation,
                        message: finalRes.data.message
                    })
                    setPreview(finalRes.staticPath+finalRes.data.image)
                    
                }
            })
        }
    },[id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Testimonial /</span>
                    <span className='text-gray-800'> {id ? "Edit" : "Add"}</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'> {id ? "Edit" : "Add"} Testimonial</h2>
                    </div>

                    <form onSubmit={saveTestimonial} className='py-[20px] px-[20px] grid grid-cols-[30%_68%] justify-between rounded-[5px]'>
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
                                <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj["title"] = e.target.value
                                        setFormData(obj)
                                    }} type="text" placeholder='Title' name="title" value={formData.title} className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Designation</label>
                                <input
                                    onChange={(e) => {
                                        let obj = { ...formData }
                                        obj["designation"] = e.target.value
                                        setFormData(obj)
                                    }} type="text" placeholder='Designation' value={formData.designation} name="designation" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Message</label>
                                <textarea
                                    onChange={(e) => {
                                        let obj = { ...formData }
                                        obj["message"] = e.target.value
                                        setFormData(obj)
                                    }} type="text" placeholder='Message' value={formData.message} name="message" id="" className='px-[12px] py-1 w-[100%] h-[148px] resize-none rounded-[6px] text-gray-800 border-2 border-gray-300' >
                                </textarea>
                            </div>
                        </div>

                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>Add Testimonial</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

