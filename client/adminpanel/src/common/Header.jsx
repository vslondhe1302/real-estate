import React from 'react'
import { BsLayoutTextWindowReverse } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { HiMenu, HiOutlineUserCircle } from 'react-icons/hi'
import { TbLogout2 } from 'react-icons/tb'
import { Link } from 'react-router'

export default function Header() {
    return (
        <div>
            <div className='flex justify-between px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='flex items-center leading-[24px] text-[20px] font-medium text-gray-600 gap-5'>
                    <HiMenu className='text-[24px] text-gray-400 font-bold' />Dashboard
                </div>
                <div className='profile w-[50px] h-[50px] rounded-[50%] bg-gray-400 relative flex justify-center items-center'>
                    <HiOutlineUserCircle className='text-[30px]' />
                    <div className={`profilelist w-[160px] bg-white border-[0.1px] border-gray-200 rounded-[10px] shadow-lg absolute top-[100%] left-[-100px] hidden`}>
                        <ul>
                            <li className='border-b-[0.1px] border-b-gray-300 group hover:bg-gray-100 duration-100'>
                                <Link to={'/profile'} className='text-[14px] text-gray-700 font-medium flex gap-2 items-center px-3 py-2 group-hover:text-blue-600 duration-100'>
                                    <FaUserCircle className='text-[18px]' />Profile
                                </Link>
                            </li>
                            <li className='border-b-[0.1px] border-b-gray-300 group hover:bg-gray-100 duration-100'>
                                <Link to={'/company-profile/add'} className='text-[14px] text-gray-700 font-medium flex gap-2 items-center px-3 py-2 group-hover:text-blue-600 duration-100'>
                                    <BsLayoutTextWindowReverse className='text-[15px]' />Company Profile
                                </Link>
                            </li>
                            <li className='border-b-[0.1px] border-b-gray-300 group hover:bg-gray-100 duration-100'>
                                <Link to={'/company-profile/view'} className='text-[14px] text-gray-700 font-medium flex gap-2 items-center px-3 py-2 group-hover:text-blue-600 duration-100'>
                                    <BsLayoutTextWindowReverse className='text-[15px]' />View Profile
                                </Link>
                            </li>
                            <li className='border-b-[0.1px] border-b-gray-300 group hover:bg-gray-100 duration-100'>
                                <button className='text-[14px] text-gray-700 font-medium flex gap-2 items-center px-3 py-2 group-hover:text-blue-600 duration-100'>
                                    <TbLogout2 className='text-[18px]' />Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
