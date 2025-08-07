import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AccountSetting() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)
    let { id } = useParams()
    let navigate = useNavigate()

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let iframeRef = useRef(null)
    

    let saveCompanyProfile = (e) =>{
        e.preventDefault() 

        let formValue = new FormData(e.target)

        let companyLocation = iframeRef.current.src
        formValue.append("companyLocation", companyLocation)
        

        if(id){
        axios.put(`${apiBaseUrl}company-profile/update/${id}`,formValue)
        .then((res)=>res.data)
        .then((finalRes)=>{
            if(finalRes.status){
                toast.success(finalRes.msg)
                e.target.reset()
                setPreview(defaultPreview)
                setTimeout(()=>{
                    navigate('/company-profile/view')
                },[2000])
            }
            else{
                toast.error(finalRes.msg)
            }
        })
        }
        else{
        axios.post(`${apiBaseUrl}company-profile/add`,formValue)
        .then((res)=>res.data)
        .then((finalRes)=>{
            if(finalRes.status){
                toast.success(finalRes.msg)
                e.target.reset()
                setPreview(defaultPreview)
                setTimeout(()=>{
                    navigate('/company-profile/view')
                },[2000])
            }
            else{
                toast.error(finalRes.msg)
            }
        })
    }
    }
    return (
        <div>
            <ToastContainer/>
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Account /</span>
                    <span className='text-gray-800'>{id ? "Edit" : "Add"} Account Setting</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>

                <form onSubmit={saveCompanyProfile} className=''>
                    <div className='grid grid-cols-[35%_auto] gap-4 rounded-[5px]'>
                        <div className='mb-[20px]'>
                            <div className='mb-3'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Company Logo</label>
                                <div className='border-2 border-gray-200 rounded-[6px]'>
                                    <img src={preview} alt="preview" className='w-[100%] h-[220px] rounded-[5px]' />
                                    <input onChange={(e)=>setPreview(URL.createObjectURL(e.target.files[0]))} type="file" name='companyLogo' className="w-[100%] p-5 " />
                                </div>
                            </div>
                            <div className=''>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Company Location Map</label>
                                    <div className='border-2 border-gray-200 rounded-[6px]'>
                                        <iframe ref={iframeRef} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1494.403688514513!2d73.00634434001014!3d26.28098656100155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c33a55dc80b%3A0x25180cf6b4cdadde!2sSurana%20Realtors%20Private%20limited!5e1!3m2!1sen!2sus!4v1753723679363!5m2!1sen!2sus" width='100%' className='rounded-[6px]' name='companyLocation' height="230" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <div className=''>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Company Name</label>
                                    <input type="text" name='companyName' placeholder='Company Name' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Company Email</label>
                                    <input type="text" name='companyEmail' placeholder='Company Email' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>

                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Company Phone</label>
                                    <input type="text" name='companyPhone' placeholder='Company Phone' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <div className=''>
                                        <label htmlFor="" className='pb-[6px] block font-medium'>Company Address</label>
                                        <textarea name="companyAddress" placeholder='Company Address' id="" className='px-[12px] w-[100%] h-[90px] rounded-[6px] text-gray-800 border-2 border-gray-300'></textarea>
                                    </div>
                                </div>
                                <div className='mb-[20px]'>
                                <label htmlFor="" className='pb-[6px] mb-3 block font-medium'>Social Links :</label>
                                <div className='grid grid-cols-2 gap-3'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Facebook</label>
                                    <input type="link" name='facebookLink' placeholder='Facebook' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Instagram</label>
                                    <input type="link" name='instagramLink' placeholder='Instagram' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>LinkedIn</label>
                                    <input type="link" name='linkedinLink' placeholder='LinkedIn' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>YouTube</label>
                                    <input type="link" name='youtubeLink' placeholder='YouTube' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-[20px]'>
                            <button type='submit' className='bg-linear-to-tl from-violet-500 from-80% to-fuchsia-500 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>Submit</button>
                        </div>

                </form>
            </div>
        </div>
    )
}
