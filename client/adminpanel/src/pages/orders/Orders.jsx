import React from 'react'

export default function Orders() {
  return (
    <div>
               <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                   <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Orders </span>
                   </div>
               </div>
               <div className='px-[20px] py-[20px]'>
                   <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
                       <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 bg-gray-100'>
                           <h2 className='text-[26px] font-medium'>Order's List</h2>
                       </div>
                       <div className=' rounded-[10px]'>
                           <div className='w-[100%] grid grid-cols-10 justify-between items-center  p-[15px] rounded-[10px_10px_0px_0px] uppercase text-gray-800 font-bold text-[15px] text-center bg-gray-50'>
                               <button className=' col-span-1 w-[70px] h-[35px] text-white bg-blue-400 mx-auto rounded-[4px]'>Delete</button>
                               <h2 className=' col-span-1'>sr. no </h2>
                               <h2 className=' col-span-1'>order id </h2>
                               <h2 className=' col-span-2'>name </h2>
                               <h2 className=' col-span-1'>quantity</h2>
                               <h2 className=' col-span-1'>price</h2>
                               <h2 className=' col-span-1'>date</h2>
                               <h2 className=' col-span-1'>status</h2>
                               <h2 className=' col-span-1'>view</h2>
                           </div>
                           <div className='w-[100%] grid grid-cols-10 justify-between items-center p-[15px] rounded-[10px_10px_0px_0px] text-gray-500 font-medium text-[15px] text-center'>
                               <div className='col-span-1'>
                                   <input type="checkbox" className='scale-140' />
                               </div>
                               <h2 className=' col-span-1'>1</h2>
                               <h2 className=' col-span-1'>Frank01</h2>
                               <h2 className=' col-span-2'>Roshan Chaurasia</h2>
                               <h2 className=' col-span-1'>2</h2>
                               <h2 className=' col-span-1'>&#8377; 3500</h2>
                               <h2 className='col-span-1'>10/06/2024</h2>
                               <h2 className=' col-span-1'>Processing...</h2>
                               <div className='col-span-1 border-[0.1px] mx-auto border-gray-300 w-[70px] py-1.5 rounded-[24px]'>Active</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
  )
}
