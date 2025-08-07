import { useState } from "react"
import { AiFillPieChart } from "react-icons/ai"
import { CgViewComfortable } from "react-icons/cg"
import { FaChevronDown, FaChevronUp, FaCommentAlt, FaHome, FaRegDotCircle, FaUser } from "react-icons/fa"
import { FaFileLines, FaLocationDot, FaUserPen } from "react-icons/fa6"
import { RiFileEditFill } from "react-icons/ri"
import { Link, Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import { MdMapsHomeWork, MdMiscellaneousServices } from "react-icons/md"

export default function Rootlayout() {

  let [menu, setmenu] = useState(-1)

  return (
    <div className='w-full'>
      <section className='w-[100%] h-screen grid grid-cols-[16%_84%]'>
        <div className=' bg-[rgb(31,41,55)] h-screen border-r-1 border-r-gray-700'>
          <figure className='border-b-[0.1px] border-b-[rgba(128,128,128,0.8)] py-0'>
            <img src="/images/logo.jpg" alt="" className='mx-auto' />
          </figure>
          <ul className='text-white w-[100%] px-3 font-medium'>
            <Link to={'/'} className='my-4 flex items-center gap-3 px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><AiFillPieChart className='text-[22px] text-gray-400 group-hover:text-white' />Dashboard</Link>

            <li  onClick={() => setmenu(menu== 1 ? '-1' : '1')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaUser className='text-[20px] group-hover:text-white' />Users</h3>
              {menu == 1 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 1 ? '' : 'hidden'} `}>
              <Link to={'/users/view'} className='flex items-center justify-between'>
                <h3 className='flex items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] w-[100%] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Users</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu == 2 ? '-1' : '2')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaCommentAlt className='text-[18px] group-hover:text-white' />Enquiries</h3>
              {menu == 2 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 2 ? '' : 'hidden'} `}>
              <Link to={'/property/enquiries'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Property Enquiries</h3>
              </Link>
              <Link to={'/property/newsletters'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Newsletters</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu== 3 ? '-1' : '3')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaHome className='text-[22px] text-gray-400 group-hover:text-white' />Property Types</h3>
              {menu == 3 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 3 ? '' : 'hidden'} `}>
              <Link to={'/property-types/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Property Types</h3>
              </Link>
              <Link to={'/property-types/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Property Types</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu== 4 ? '-1' : '4')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaHome className='text-[22px] text-gray-400 group-hover:text-white' />Sub Property Types</h3>
              {menu == 4 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 4 ? '' : 'hidden'} `}>
              <Link to={'/sub-property-type/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Sub Property Types</h3>
              </Link>
              <Link to={'/sub-property-type/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Sub Property Types</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu== 5 ? '-1' : '5')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaLocationDot className='text-[22px] text-gray-400 group-hover:text-white' />Localities</h3>
              {menu == 5 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 5 ? '' : 'hidden'} `}>
              <Link to={'/localities/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Localities</h3>
              </Link>
              <Link to={'/localities/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Localities</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu== 6 ? '-1' : '6')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><MdMapsHomeWork className='text-[22px] text-gray-400 group-hover:text-white' />Properties</h3>
              {menu == 6 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 6 ? '' : 'hidden'} `}>
              <Link to={'/properties/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Properties</h3>
              </Link>
              <Link to={'/properties/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Properties</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu== 7 ? '-1' : '7')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><MdMiscellaneousServices className='text-[22px] text-gray-400 group-hover:text-white' />Services</h3>
              {menu == 7 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 7 ? '' : 'hidden'} `}>
              <Link to={'/services/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Services</h3>
              </Link>
              <Link to={'/services/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Services</h3>
              </Link>
            </div>

             <li onClick={() => setmenu(menu== 8 ? '-1' : '8')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><MdMiscellaneousServices className='text-[22px] text-gray-400 group-hover:text-white' />Sub Services</h3>
              {menu == 8 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 8 ? '' : 'hidden'} `}>
              <Link to={'/sub-services/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Sub Services</h3>
              </Link>
              <Link to={'/sub-services/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Sub Services</h3>
              </Link>
            </div>

            <li  onClick={() => setmenu(menu== 9 ? '-1' : '9')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><CgViewComfortable className='text-[22px] group-hover:text-white' />Amenities</h3>
              {menu == 9 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 9 ? '' : 'hidden'} `}>
              <Link to={'/amenities/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Amenities</h3>
              </Link>
              <Link to={'/amenities/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Amenities</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu== 10 ? '-1' : '10')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><RiFileEditFill className='text-[22px] text-gray-400 group-hover:text-white' />Orders</h3>
              {menu == 10 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 10 ? '' : 'hidden'} `}>
              <Link to={'/orders/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Orders</h3>
              </Link>
            </div>

            {/* <li  onClick={() => setmenu(menu== 11 ? '-1' : '11')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaUserPen className='text-[22px] group-hover:text-white' />Why Choose Us</h3>
              {menu == 11 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 11 ? '' : 'hidden'} `}>
              <Link to={'/why-choose-us/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Why Choose Us</h3>
              </Link>
              <Link to={'/why-choose-us/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Why Choose Us</h3>
              </Link>
            </div> */}

            <li  onClick={() => setmenu(menu== 12 ? '-1' : '12')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaUserPen className='text-[22px] group-hover:text-white' />Testimonials</h3>
              {menu == 12 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
            <div className={` ${menu == 12 ? '' : 'hidden'} `}>
              <Link to={'/testimonial/add'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />Add Testimonials</h3>
              </Link>
              <Link to={'/testimonial/view'} className='flex items-center justify-between'>
                <h3 className='flex w-[100%] items-center gap-4 text-[13px] px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'><FaRegDotCircle className='text-[14px] text-gray-400 group-hover:text-white' />View Testimonials</h3>
              </Link>
            </div>

            <li onClick={() => setmenu(menu== 13 ? '-1' : '13')} className='flex items-center justify-between px-[8px] py-2 rounded-[8px] group hover:bg-[rgb(64,76,94)] cursor-pointer'>
              <h3 className='flex items-center gap-4 text-[15px]'><FaFileLines className='text-[22px] text-gray-400 group-hover:text-white' />Terms & Conditions</h3>
              {menu == 13 ? <FaChevronUp className='text-[14px] text-[gray]' /> : <FaChevronDown className='text-[14px] text-[gray]' />}
            </li>
          </ul>
        </div>
        <div className='overflow-y-scroll relative'>

          <Header/>
          <Outlet />
          <Footer/>

        </div>
      </section>

    </div>
  )
}
