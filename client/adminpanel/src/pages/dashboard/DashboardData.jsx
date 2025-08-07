import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'

export default function DashboardData() {
  return (
     <div>
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-700'>/ Dashboard</span></div>
            </div>
            <div className='px-[20px] py-[22px] grid grid-cols-3 gap-5'>
                <div className='h-[200px] w-[100%] rounded-[8px] p-5 bg-[rgb(89,86,211)]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[25px] text-white font-bold'>
                            250+
                            <span className='text-[18px] pl-[3px]'> (12.4% &uarr;)</span>
                        </h3>
                        <span className='text-white text-[22px]'><HiDotsVertical /></span>
                    </div>
                    <h3 className='text-[22px] font-semibold text-white'>Total Properties</h3>
                </div>

                <div className='h-[200px] w-[100%] rounded-[8px] p-5 bg-[rgb(41,152,254)]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[25px] text-white font-bold'>
                            1.2K+
                            <span className='text-[18px] pl-[3px]'> (40.9% &uarr;)</span>
                        </h3>
                        <span className='text-white text-[22px]'><HiDotsVertical /></span>
                    </div>
                    <h3 className='text-[22px] font-semibold text-white'>Total Localities</h3>
                </div>

                <div className='h-[200px] w-[100%] rounded-[8px] p-5 bg-[rgb(252,176,30)]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[25px] text-white font-bold'>
                            5+
                        </h3>
                        <span className='text-white text-[22px]'><HiDotsVertical /></span>
                    </div>
                    <h3 className='text-[22px] font-semibold text-white'>Property Types</h3>
                </div>
                <div className='h-[200px] w-[100%] rounded-[8px] p-5 bg-[rgb(233,83,83)]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[25px] text-white font-bold'>
                            2.2K+
                            <span className='text-[18px] pl-[3px]'> (23.6% &uarr;)</span>
                        </h3>
                        <span className='text-white text-[22px]'><HiDotsVertical /></span>
                    </div>
                    <h3 className='text-[22px] font-semibold text-white'>Happy Customers</h3>
                </div>
                <div className='h-[200px] w-[100%] rounded-[8px] p-5 bg-[rgb(173,233,83)]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[25px] text-white font-bold'>
                            4.7K+
                            <span className='text-[18px] pl-[3px]'> (20.6% &uarr;)</span>
                        </h3>
                        <span className='text-white text-[22px]'><HiDotsVertical /></span>
                    </div>
                    <h3 className='text-[22px] font-semibold text-white'>Website Visitors</h3>
                </div>
            </div>
        </div>
  )
}
