import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PiNotePencilFill } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import ResponsivePagination from 'react-responsive-pagination';

export default function ViewProperties() {
  let [showFull, setShowFull] = useState(false)
  let [modal, setModal] = useState(false)

  let [propertyData, setPropertyData] = useState([])
  let [staticPath, setStaticPath] = useState('')

  let [singleData, setSingleData] = useState({})
  let [loader, setLoader] = useState(true)

  let [id, setId] = useState('')

  let [currentPage, setCurrentPage] = useState(1)
  let [totalPages, setTotalPages] = useState(null)

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let getPropertyData = () => {
    axios.get(`${apiBaseUrl}properties/view`,{
      params: {
        currentPage
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        try {
          setPropertyData(finalRes.data)
          setStaticPath(finalRes.staticPath)
          setTotalPages(finalRes.pages)
        }
        catch (error) {
          toast.error("error")
        }
        finally {
          setLoader(false)
        }
      })
  }

  useEffect(() => {
    getPropertyData()
  }, [currentPage])

  let getSingleData = (id) => {
    axios.get(`${apiBaseUrl}properties/single-data/${id}`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setSingleData(finalRes.data)
          setStaticPath(finalRes.staticPath)
          setModal(true)
        }
      })
  }

  let getCheckValue = (e) => {
    if (e.target.checked) {
      setId(e.target.value)
    }
    else {
      setId('')
    }
  }

  let deleteProperty = (id) => {
    if (id) {
      axios.post(`${apiBaseUrl}properties/delete/${id}`, {})
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            getPropertyData()
            toast.success(finalRes.msg)
          }
          else {
            toast.error(finalRes.msg)
          }
        })
    }
  }

  let bhigaYard = 3025;
  const bhiga = singleData.propertyArea/bhigaYard;


  return (
    <div>
      <ToastContainer />
      {/* Modal */}
      {modal &&
        <section className={`w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)] fixed left-0 top-0 z-[9999] ${modal ? "block" : "hidden"}`}>
          <div className='w-[1100px] bg-white rounded-[5px] absolute top-[50%] left-[50%] translate-[-50%] py-2'>
            <div className='w-[100%] flex justify-between items-center border-b-[1px] border-b-gray-400 px-[20px] pb-[15px] mb-[10px]'>
              <div className='text-[23px] font-medium text-gray-800'>
                Property Detail Page
              </div>
              <div onClick={() => setModal(false)} className='text-[34px] h-[45px] w-[45px] bg-gray-200 flex justify-center items-center cursor-pointer'>&times;</div>
            </div>
            <div className='w-[100%] grid grid-cols-[62%_auto] items-start gap-4 px-[10px]'>
              <div className=''>
                <h2 className='pb-2 text-[18px] font-medium'>Property Images</h2>
                <div className='grid grid-cols-2 gap-4 mb-4 '>
                  <div className='w-full rounded-[6px] border-[0.1px] border-gray-300 p-2 shadow-lg'>
                    <h3 className='pb-2'>Property Image</h3>
                    <div className='h-[270px]'>
                      <img src={staticPath + singleData.propertyImage} alt="preview" className='w-full h-[100%] border-[0.1px] border-gray-300 rounded-[6px]' />
                    </div>
                  </div>
                  <div className='w-full rounded-[6px] border-[0.1px] border-gray-300 p-2 shadow-lg'>
                    <h3 className='pb-2'>Property Map</h3>
                    <div className='border-2 border-gray-200 rounded-[6px]'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6803.352192093099!2d72.954698!3d26.237323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418f784760448d%3A0xdef7962ead4fa537!2sThar%20Meadows!5e1!3m2!1sen!2sus!4v1752428034421!5m2!1sen!2sus" width='100%' className='rounded-[6px]' name='propertyMap' height="230" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h2 className='pb-2 font-medium'>Gallery Images</h2>
                  <div className='grid grid-cols-4 gap-3'>
                    {singleData.propertyGalleryImages &&
                      singleData.propertyGalleryImages.map((img, idx) => {
                        return (
                          <div key={idx} className='border-1 border-gray-300 shadow-lg h-[100px] rounded-[4px]'>
                            <img src={staticPath + `${encodeURIComponent(img)}`} alt='' className='w-full h-full rounded-[4px]' />
                          </div>
                        )
                      }
                      )
                    }
                  </div>
                </div>
              </div>
              <div className=' '>
                <h3 className='pb-2 font-medium text-[18px]'>Property Details</h3>
                <div className='p-2 border-[0.1px] border-gray-300 shadow-xl rounded-[5px] px-3 py-2'>
                  <div className='grid grid-cols-[40%_auto] gap-4 mb-2'>
                    <h3>Property Name :</h3>
                    <span>{singleData.propertyName}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4 mb-2'>
                    <h3>Property Location :</h3>

                    <span> {singleData.propertyLocation}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4 mb-2'>
                    <h3>Property For :</h3>
                    <span>{singleData.propertyFor}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4 mb-2'>
                    <h3>Property Type :</h3>
                    <span>{singleData.parentPropertyType.propertyTypeName}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4 mb-2'>
                    <h3>Sub Property Type :</h3>
                    <span>{singleData.subPropertyType.subPropertyTypeName}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4 mb-2'>
                    <h3>Locality :</h3>
                    <span>{singleData.propertyLocality.localityName}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4  mb-2'>
                    <h3>Area :</h3>
                    <span>{
                            Number.isInteger(bhiga) ? `${bhiga} Bhiga` : `${singleData.propertyArea} sq.yards`
                          }
                    </span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4 items-center mb-2'>
                    <h3>Published On :</h3>
                    <span>{singleData.publishedOn}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4  mb-2'>
                    <h3>Price :</h3>
                    <span>&#8377; {singleData.propertyPrice}</span>
                  </div>
                  <div className='grid grid-cols-[40%_auto] gap-4  mb-2'>
                    <h3>Amenities :</h3>
                    <span>
                      {singleData.propertyAmenities.map((items) => items.title)}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      }
      {/* Modal */}

      <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
        <div className='font-medium'>
          <Link to={'/'} className='text-gray-600'>Home /</Link>
          <Link to={'/Property/add'} className='text-gray-600'>
            Property /
          </Link>
          <span className='text-gray-800'> Property Items</span>
        </div>
      </div>
      <div className='px-[20px] py-[20px]'>
        <div className=' border-[0.1px] border-gray-300 rounded-[8px]'>
          <div className='flex justify-between border-b-[0.1px] py-[12px] px-[20px] border-b-gray-300 '>
            <h2 className='text-[26px] font-medium'>Property Items</h2>
          </div>
          <div className=' rounded-[10px]'>
            <div className='w-[100%] grid grid-cols-12 justify-between items-center  p-[15px] rounded-[10px_10px_0px_0px] uppercase text-gray-700 font-medium text-[16px] text-left border-b-1 border-b-gray-200 bg-gray-100'>
              <h2 className=' col-span-1'>sr. no </h2>
              <h2 className=' col-span-2'>Property name </h2>
              <h2 className=' col-span-2 pl-4'>description </h2>
              <h2 className=' col-span-2'>Property detail </h2>
              <h2 className=' col-span-2'>thumbnails</h2>
              <h2 className=' col-span-1'>action</h2>
              <h3 className=' col-span-1'>impactfull</h3>
              <h2 className=' col-span-1 text-center'>status</h2>
            </div>

            {loader ?
              <button type="button" className="bg-indigo-500 p-2 flex">
                <div className='mr-3 w-[50px] h-[50px] rounded-full animate-spin border-2 border-gray-300 '>
                  <div className=''></div>
                </div>
                Loading…
              </button>
              :
              propertyData.length >= 1 ?
                propertyData.map((items, index) => (
                  <div key={index} className='w-[100%] grid grid-cols-12 justify-between items-center  p-[20px] rounded-[10px_10px_0px_0px] text-gray-700 font-medium text-[14px] text-left'>
                    <span className=' col-span-1'>{index + 1}</span>
                    <h2 className=' col-span-2'>{items.propertyName}</h2>
                    <div className=' col-span-2 pr-10 pl-4'>
                      <p className={`${showFull ? showFull : "truncate"}`}>{items.propertyDescription}</p>
                      <span onClick={() => setShowFull(!showFull)} className='text-blue-500 text-[13px] cursor-pointer'>
                        {showFull ? "Show Less" : "Show More"}
                      </span>
                    </div>
                    <div onClick={() => 
                      getSingleData(items._id)
                    } className='col-span-2 text-blue-500 cursor-pointer'>View</div>
                    <div className='col-span-2'>
                      <img src={staticPath + items.propertyImage} alt="preview" className='w-[55px] h-[55px] rounded-[4px] border-1 border-gray-200' />
                    </div>
                    <div className='col-span-1 flex items-center gap-2'>
                      <div>
                        <RiDeleteBin6Line onClick={()=>deleteProperty(items._id)} className='text-[20px] text-red-500' />
                      </div>
                      <span>|</span>
                      <Link to={`/properties/edit/${items._id}`}>
                        <PiNotePencilFill className='text-[20px] text-yellow-300' />
                      </Link>
                    </div>
                    <div className='col-span-1 text-gray-600 font-medium text-center'>
                      {items.impactfulProperty ? 'Yes' : 'No'} 
                    </div>
                    <div className='col-span-1 text-gray-600 font-medium text-center'>
                      {items.propertyStatus ? 'Active' : 'Deactive'} 
                    </div>
                  </div>
                ))
                :
                <div className='text-gray-800 px-5 py-4'> No Property List Found</div>
            }

          </div>
        </div>
      </div>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
