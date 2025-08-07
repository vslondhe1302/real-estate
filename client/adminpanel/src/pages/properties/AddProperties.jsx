import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import slugify from 'slugify'

export default function AddProperties() {
    let defaultPreview = '/images/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'
    let [preview, setPreview] = useState(defaultPreview)
    let [preview2, setPreview2] = useState([defaultPreview, defaultPreview])

    let [parentPropertyType, setParentPropertyType] = useState([])
    let [subPropertyType, setSubPropertyType] = useState([])
    let [localities, setLocalities] = useState([])
    let [amenities, setAmenities] = useState([])

    let [staticPath, setStaticPath] = useState('')

    let navigate = useNavigate()

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let getParentPropertyTypes = () => {
        axios.get(`${apiBaseUrl}properties/parent-property-types`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setParentPropertyType(finalRes.data)
                }
            })
    }
    let getSubPropertyTypes = (id) => {
        axios.get(`${apiBaseUrl}properties/sub-property-types/${id}`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setSubPropertyType(finalRes.data)
                }
            })
    }
    let getLocalities = () => {
        axios.get(`${apiBaseUrl}properties/localities`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setLocalities(finalRes.data)
                }
            })
    }
    let getAmenities = () => {
        axios.get(`${apiBaseUrl}properties/amenities`)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setAmenities(finalRes.data)
                }
            })
    }
    useEffect(() => {
        getParentPropertyTypes()
        getLocalities()
        getAmenities()
    }, [])

    let { id } = useParams()

    let [formData, setFormData] = useState({
        propertyName: '',
        parentPropertyType: '',
        parentPropertyTypeId: '',
        subPropertyType: '',
        subPropertyTypeId: '',
        propertyLocality: '',
        propertyLocalityId: '',
        propertyImage: '',
        propertyGalleryImages: '',
        propertyLocation: '',
        propertyId: '',
        propertyArea: '',
        propertyFor: '',
        propertyDirection: '',
        ownershipTitle: '',
        roadWidth: '',
        furnished: '',
        gatedColony: '',
        front: '',
        depth: '',
        bedrooms: '',
        parking: '',
        boundaryWall: '',
        publishedOn: '',
        propertyPrice: '',
        propertyAmenities: '',
        propertyAmenitiesId: '',
    })

    let saveProperties = (e) => {
        e.preventDefault()

        let propertyname = slugify(e.target.propertyName.value, {lower:true})
        let formValue = new FormData(e.target)
        formValue.append("propertyStatus", true)
        console.log(e.target.propertyImage.files[0].name);
        

        if (id) {
            axios.put(`${apiBaseUrl}properties/update/${id}`, formValue,{
                params:{
                    propertyname
                }
            })
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setPreview(defaultPreview)
                        setPreview2(defaultPreview)
                        setFormData({
                            propertyName: '',
                            parentPropertyType: '',
                            parentPropertyTypeId: '',
                            subPropertyType: '',
                            subPropertyTypeId: '',
                            propertyLocality: '',
                            propertyLocalityId: '',
                            propertyImage: '',
                            propertyGalleryImages: '',
                            propertyLocation: '',
                            propertyId: '',
                            propertyArea: '',
                            propertyFor: '',
                            propertyDirection: '',
                            ownershipTitle: '',
                            roadWidth: '',
                            furnished: '',
                            gatedColony: '',
                            front: '',
                            depth: '',
                            bedrooms: '',
                            parking: '',
                            boundaryWall: '',
                            publishedOn: '',
                            propertyPrice: '',
                            propertyAmenities: '',
                            propertyAmenitiesId: '',
                
                        })
                        setTimeout(() => {
                            navigate('/properties/view')
                        }, [2000])
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })

        }
        else {
            axios.post(`${apiBaseUrl}properties/add/`, formValue,{
                params:{
                    propertyname
                }
            })
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setPreview(defaultPreview)
                        setPreview2(defaultPreview)
                        setFormData({
                            propertyName: '',
                            parentPropertyType: '',
                            parentPropertyTypeId: '',
                            subPropertyType: '',
                            subPropertyTypeId: '',
                            propertyLocality: '',
                            propertyLocalityId: '',
                            propertyImage: '',
                            propertyGalleryImages: '',
                            propertyLocation: '',
                            propertyId: '',
                            propertyArea: '',
                            propertyFor: '',
                            propertyDirection: '',
                            ownershipTitle: '',
                            roadWidth: '',
                            furnished: '',
                            gatedColony: '',
                            front: '',
                            depth: '',
                            bedrooms: '',
                            parking: '',
                            boundaryWall: '',
                            publishedOn: '',
                            propertyPrice: '',
                            propertyAmenities: '',
                            propertyAmenitiesId: '',
                
                        })
                        setTimeout(() => {
                            navigate('/properties/view')
                        }, [2000])
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }
    }


    useEffect(() => {
        setFormData({
            propertyName: '',
            parentPropertyType: '',
            parentPropertyTypeId: '',
            subPropertyType: '',
            subPropertyTypeId: '',
            propertyLocality: '',
            propertyLocalityId: '',
            propertyImage: '',
            propertyGalleryImages: '',
            propertyLocation: '',
            propertyId: '',
            propertyArea: '',
            propertyFor: '',
            propertyDirection: '',
            ownershipTitle: '',
            roadWidth: '',
            furnished: '',
            gatedColony: '',
            front: '',
            depth: '',
            bedrooms: '',
            parking: '',
            boundaryWall: '',
            publishedOn: '',
            propertyPrice: '',
            propertyAmenities: '',
            propertyAmenitiesId: '',

        })
        setPreview(defaultPreview)
        setPreview2(defaultPreview)

        if (id) {
            axios.get(`${apiBaseUrl}properties/single-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        console.log(finalRes);
                        getSubPropertyTypes(finalRes.data.parentPropertyType._id)
                        setFormData({
                            propertyName: finalRes.data.propertyName,
                            parentPropertyType: finalRes.data.parentPropertyType.propertyTypeName,
                            parentPropertyTypeId: finalRes.data.parentPropertyType._id,
                            subPropertyType: finalRes.data.subPropertyType.subPropertyTypeName,
                            subPropertyTypeId: finalRes.data.subPropertyType._id,
                            propertyLocality: finalRes.data.propertyLocality,
                            propertyLocalityId: finalRes.data.propertyLocality._id,
                            propertyLocation: finalRes.data.propertyLocation,
                            propertyId: finalRes.data.propertyId,
                            propertyArea: finalRes.data.propertyArea,
                            propertyFor: finalRes.data.propertyFor,
                            propertyDirection: finalRes.data.propertyDirection,
                            ownershipTitle: finalRes.data.ownershipTitle,
                            roadWidth: finalRes.data.roadWidth,
                            furnished: finalRes.data.furnished,
                            gatedColony: finalRes.data.gatedColony,
                            front: finalRes.data.front,
                            depth: finalRes.data.depth,
                            bedrooms: finalRes.data.bedrooms,
                            parking: finalRes.data.parking,
                            boundaryWall: finalRes.data.boundaryWall,
                            publishedOn: finalRes.data.publishedOn,
                            propertyPrice: finalRes.data.propertyPrice,
                            propertyAmenities: finalRes.data.propertyAmenities.title,
                            propertyAmenitiesId: finalRes.data.propertyAmenities._id,
                        })
                        setPreview(finalRes.staticPath + finalRes.data.propertyImage,)
                        setPreview2(finalRes.data.propertyGalleryImages)
                        setStaticPath(finalRes.staticPath)
                        console.log(preview2);

                    }
                })
        }
    }, [id])
    return (
        <div>
            <ToastContainer />
            <div className='flex px-[20px] py-[12px] border-b-[2.2px] border-b-gray-200'>
                <div className='font-medium text-gray-600'>Home <span className='text-gray-600'>/ Property /</span>
                    <span className='text-gray-800'>{id ? "Edit" : "Add"} Property Detail</span>
                </div>
            </div>
            <div className='px-[20px] py-[20px]'>

                <form onSubmit={saveProperties} className=''>
                    <div className='grid grid-cols-[35%_auto] gap-4 rounded-[5px]'>
                        <div className='mb-[20px]'>
                            <div className='mb-3'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Property Image</label>
                                <div className='border-2 border-gray-200 rounded-[6px]'>
                                    <img src={preview} alt="preview" className='w-[100%] h-[250px] rounded-[5px]' />
                                    <input
                                        onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))} type="file" name='propertyImage' className="w-[100%] p-5 " />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="" className='pb-[6px] block font-medium'>Property Multiple Images</label>
                                <div className='border-2 border-gray-200 rounded-[6px]'>
                                    <div className='grid grid-cols-2 gap-3'>
                                        {Array.isArray(preview2) &&
                                            preview2.map((img, index) => {
                                                return (
                                                    <div key={index} className=''>
                                                        <img src={staticPath + img} alt={`Gallery ${index + 1}`} className='w-[140px] h-[120px] mx-auto mb-1' />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <input
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files)
                                            const previewFiles = files.map(file => URL.createObjectURL(file))
                                            setPreview2([...previewFiles])

                                        }}
                                        type="file" multiple name='propertyGalleryImages' className="w-[100%] p-5 " />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Property Name</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyName'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='propertyName' value={formData.propertyName} placeholder='Property Name' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Select Property Type </label>
                                    <select onChange={(e) => getSubPropertyTypes(e.target.value)} name="parentPropertyType" id="" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Select Property Type</option>

                                        {parentPropertyType.length >= 1 &&
                                            parentPropertyType.map((items, idx) => <option key={idx} value={items._id}>{items.propertyTypeName}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Select Sub Property Type</label>
                                    <select onChange={(e)=>{
                                        let obj = {...formData}
                                        obj['subPropertyType'] = e.target.value
                                        setFormData(obj)
                                    }} name="subPropertyType" value={[formData.subPropertyType]} multiple id="" className='px-[12px] w-[100%] h-[45px] min-h-[45px] max-h-[100px] resize-y rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value=" ">Nothing Selected</option>
                                        {subPropertyType.length >= 1 &&
                                            subPropertyType.map((items, idx) => <option key={idx} value={items._id}>{items.subPropertyTypeName}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Select Locality </label>
                                    <select onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyLocality'] = e.target.value
                                        setFormData(obj)
                                    }} name="propertyLocality" value={formData.propertyLocality} id="" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Nothing Selected</option>
                                        {localities.length >= 1 &&
                                            localities.map((items, idx) => <option key={idx} value={items._id}>{items.localityName}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Property Id</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyId'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='propertyId' value={formData.property} placeholder='Property Id' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Area</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyArea'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='propertyArea' value={formData.propertyArea} placeholder='Area' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Property For </label>
                                    <select onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyFor'] = e.target.value
                                        setFormData(obj)
                                    }} name="propertyFor" id="" value={formData.propertyFor} className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Nothing Selected</option>
                                        <option value="Sale">For Sale</option>
                                        <option value="Rent">For Rent</option>
                                    </select>
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Direction</label>
                                    <select onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyDirection'] = e.target.value
                                        setFormData(obj)
                                    }} name="propertyDirection" value={formData.propertyDirection} id="" className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Nothing Selected</option>
                                        <option value="East">East</option>
                                        <option value="West">West</option>
                                        <option value="South">South</option>
                                        <option value="North">North</option>
                                        <option value="South-East">South-East</option>
                                        <option value="South-West">South-West</option>
                                        <option value="North-East">North-East</option>
                                        <option value="North-West">North-West</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Ownership Title</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['ownershipTitle'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='ownershipTitle' value={formData.ownershipTitle} placeholder='Ownership Title' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Road Width</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['roadWidth'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='roadWidth' value={formData.roadWidth} placeholder='Road Width' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Furnished</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['furnished'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='furnished' value={formData.furnished} placeholder='Furnished' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Gated Colony</label>
                                    <select onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['gatedColony'] = e.target.value
                                        setFormData(obj)
                                    }} name="gatedColony" id="" value={formData.gatedColony} className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Nothing Selected</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Front</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['front'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='front' value={formData.front} placeholder='Front' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Depth</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['depth'] = e.target.value
                                        setFormData(obj)
                                    }} type="text" name='depth' value={formData.depth} placeholder='Depth' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Bedrooms</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['bedrooms'] = e.target.value
                                        setFormData(obj)
                                    }} type="number" min={0} value={formData.bedrooms} name='bedrooms' placeholder='Bedrooms' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Parking</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['parking'] = e.target.value
                                        setFormData(obj)
                                    }} type="number" name='parking' value={formData.parking} min={0} placeholder='Parking' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Boundary Wall</label>
                                    <select onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['boundaryWall'] = e.target.value
                                        setFormData(obj)
                                    }} name="boundaryWall" id="" value={formData.boundaryWall} className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Nothing Selected</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Published On</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['publishedOn'] = e.target.value
                                        setFormData(obj)
                                    }} type="date" name='publishedOn' value={formData.publishedOn} placeholder='Published On' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Amenities</label>
                                    <select onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyAmenities'] = e.target.value
                                        setFormData(obj)
                                    }} name="propertyAmenities" value={[formData.propertyAmenities]} multiple id="" className='px-[12px] w-[100%] h-[45px] min-h-[45px] max-h-[100px] resize-y rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Nothing Selected</option>
                                        {amenities.length >= 1 &&
                                            amenities.map((items, idx) => <option key={idx} value={items._id}>{items.title}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Price</label>
                                    <input onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['propertyPrice'] = e.target.value
                                        setFormData(obj)
                                    }} type="number" name='propertyPrice' value={formData.propertyPrice} placeholder='Price' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 border-2 border-gray-300' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4 '>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Property Location</label>
                                    <div className='border-2 border-gray-200 rounded-[6px]'>
                                        <input onChange={(e) => {
                                            let obj = { ...formData }
                                            obj['propertyLocation'] = e.target.value
                                            setFormData(obj)
                                        }} type="text" name='propertyLocation' value={formData.propertyLocation} placeholder='Property Location' className='px-[12px] w-[100%] h-[45px] rounded-[6px] text-gray-800 outline-none' />
                                    </div>
                                </div>
                                <div className='mb-[20px]'>
                                    <label htmlFor="" className='pb-[6px] block font-medium'>Impactful</label>
                                    <select onChange={(e) => {
                                        let obj = { ...formData }
                                        obj['impactfulProperty'] = e.target.value
                                        setFormData(obj)
                                    }} name="impactfulProperty" value={formData.impactfulProperty} id="" className='px-[12px] w-[100%] h-[45px] min-h-[45px] max-h-[100px] rounded-[6px] text-gray-800 border-2 border-gray-300'>
                                        <option value="Select Category">Nothing Selected</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-[20px]'>
                        <button type='submit' className='bg-linear-to-tl from-violet-500 from-80% to-fuchsia-500 text-white font-medium h-[40px] px-[12px] rounded-[10px]'>{id ? "Update" : "Add"} Property</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
