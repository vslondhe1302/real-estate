import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddLocalities() {
    let { id } = useParams()
    let navigate = useNavigate()

    let [formData, setFormData] = useState({
        localityName: '',
        localityCity: '',
    })

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let saveLocalities = (e) => {
        e.preventDefault()

        if (id) {

            axios.put(`${apiBaseUrl}locality/update/${id}`, formData)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log();
                        toast.success(finalRes.msg)
                        setFormData({ localityName: '', localityCity: ''})
                        setTimeout(() => {
                            navigate('/localities/view')
                        }, [2000])
                    }
                    else {
                        toast.error('Fill empty fields')
                    }

                })

        }
        else {

            axios.post(`${apiBaseUrl}locality/add`, formData)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setFormData({ localityName: '', localityCity: '' })
                        setTimeout(() => {
                            navigate('/localities/view')
                        }, [2000])

                    }
                })
        }
    }

    useEffect(() => {
        setFormData({
            localityName: '',
            localityCity: '',
        })

        if (id) {
            axios.get(`${apiBaseUrl}locality/single-list/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    console.log(finalRes);
                    setFormData({
                        localityName: finalRes.data.localityName,
                        localityCity: finalRes.data.localityCity,
                    })

                })
        }

    }, [id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Localities /</span>
                    <span className='text-gray-800'> {id ? 'Edit' : 'Add'}</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'>{id ? 'Edit' : 'Add'} Localities</h2>
                    </div>

                    <form onSubmit={saveLocalities} className='py-[20px] px-[20px] rounded-[5px]'>
                        <div className=''>
                            <div className='mb-[20px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Locality Name</label>
                                <input onChange={(e) => {
                                    let obj = { ...formData }
                                    obj['localityName'] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" name='localityName' value={formData.localityName} placeholder='Name' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[20px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Locality City</label>
                                <input onChange={(e) => {
                                    let obj = { ...formData }
                                    obj['localityCity'] = e.target.value
                                    setFormData(obj)
                                }}
                                    type="text" name='localityCity' value={formData.localityCity} placeholder='City' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                        </div>
                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>
                                {id ? 'Update' : 'Add'} Localities
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
