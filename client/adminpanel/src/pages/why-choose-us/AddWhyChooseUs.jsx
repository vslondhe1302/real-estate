import React, { useState } from 'react'

export default function AddTestimonial() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)
    return (
        <div>
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Why Choose Us /</span>
                    <span className='text-gray-800'> Add</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>
                <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                    <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-50'>
                        <h2 className='text-[22px] font-medium'>Add Why Choose Us</h2>
                    </div>

                    <form className='py-[20px] px-[20px] grid grid-cols-[35%_65%] gap-4 rounded-[5px]'>
                        <div className='mb-[15px]'>
                            <label htmlFor="" className='pb-[6px] block font-medium'>Happy Customer Logo's</label>
                            <div className='border-2 border-gray-200 rounded-[6px]'>
                                <div className='grid grid-cols-4 gap-2'>
                                    <img src={preview} alt="preview" className='w-[100%] rounded-[6px]' />
                                    <img src={preview} alt="preview" className='w-[100%] rounded-[6px]' />
                                    <img src={preview} alt="preview" className='w-[100%] rounded-[6px]' />
                                    <img src={preview} alt="preview" className='w-[100%] rounded-[6px]' />
                                </div>
                            <input type="file" multiple name='customerLogos' className="w-full p-5" />
                            </div>
                        </div>
                        <div className='pr-[20px]'>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Years Of Experience</label>
                                <input type="text" placeholder='Years Of Experience' name="experience" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Property Listed</label>
                                <input type="text" placeholder='Property Listed' name="propertyListed" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Successful Deals</label>
                                <input type="number" placeholder='Successful Deals' name="successfulDeals" id="" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Happy Customers</label>
                                <input type="number" placeholder='Happy Customers' name="happyCustomers" id="" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                            </div>
                            <div className='mb-[15px]'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Description</label>
                                <textarea type="text" placeholder='Description'  name="whyChooseDesc" id="" className='px-[12px] w-[100%] h-[80px] resize-none rounded-[6px] text-gray-800 border-2 border-gray-300' >
                                </textarea>
                            </div>
                        </div>

                        <div className='mb-[20px]'>
                            <button type='submit' className='bg-violet-600 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>Add Why Choose Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

