const { companyProfileModel } = require("../../models/companyProfileModel")
const { enquiryModel } = require("../../models/enquiryModel")
const { localityModel } = require("../../models/localityModel")
const { propertiesModel } = require("../../models/propertiesModel")
const { propertyTypeModel } = require("../../models/propertyTypeModel")
const { servicesModel } = require("../../models/servicesModel")
const { subPropertyType, subPropertyTypeModel } = require("../../models/subPropertyTypeModel")
const { subServicesModel } = require("../../models/subServicesModel")
const { testimonialModel } = require("../../models/testimonialModel")


let megaMenu = async (req, res) => {
    let data = await propertyTypeModel.find().select(['propertyTypeName', 'slug'])
        .populate({
            path: 'subpropertytypes',
            select: ['subPropertyTypeName', 'slug'],
            // populate : {path : 'subsubcategories', select : ['subSubCategoryName', 'slug']}
        })
    let obj = {
        status: 1,
        msg: "mega-menu",
        data
    }

    res.send(obj)
}

let propertyTypes = async (req, res) => {
    let data = await propertyTypeModel.find({ propertyTypeStatus: true }).select(['propertyTypeName', 'slug'])

    let obj = {
        status: 1,
        msg: "property types data",
        staticPath: process.env.PROPERTYTYPEIMAGEPATH,
        data
    }

    res.send(obj)
}

let viewLocalitiesList = async (req, res) => {
    console.log(req.query);
    let searchObj = {}
    
    if(req.query.localityname){
        searchObj["localityName"] = {$regex: req.query.localityname, $options:"i"}
    }

    let data = await localityModel.find(searchObj)
    let obj = {
        status: 1,
        msg: "Locality List",
        data
    }
    res.status(200).json(obj)

}

let servicesList = async (req, res) => {
    let data = await servicesModel.find({ servicesStatus: true })

    let obj = {
        status: 1,
        msg: "Services List",
        data
    }
    res.status(200).json(obj)
}

let subServicesList = async (req, res) => {
    let data = await subServicesModel.find({ subServicesStatus: true })

    let obj = {
        status: 1,
        msg: "Sub-Services List",
        staticPath: process.env.SUBSERVICESIMAGEPATH,
        data
    }
    res.status(200).json(obj)
}

let viewTestimonial = async (req, res) => {
    let data = await testimonialModel.find({ status: true })

    let obj = {
        status: 1,
        msg: "Testimonial data",
        staticPath: process.env.TESTIMONIALSIMAGEPATH,
        data
    }
    res.status(200).json(obj)
}

let viewContactDetails = async (req, res) => {
    let data = await companyProfileModel.find()

    let obj = {
        status: 1,
        msg: "Contact details",
        staticPath: process.env.COMPANYPROFILEIMAGEPATH,
        data
    }
    res.status(200).json(obj)
}

let viewProperties = async (req, res) => {
    let filters = req.query
    console.log(req.query);

    let searchObj = {}

    if (filters.propertyFor) {
        searchObj['propertyFor'] = { $regex: filters.propertyFor, $options: "i" }
    }
    if (filters.propertyType) {
        let id = await subPropertyTypeModel.findOne({ subPropertyTypeName: filters.propertyType }).select("_id")
        searchObj['subPropertyType'] = id
    }
    if (filters.propertyArea) {
        searchObj['propertyLocation'] = { $regex: filters.propertyArea, $options: "i" }
    }
    if (filters.propertyPrice) {
        let price = parseFloat(filters.propertyPrice) * 10000000
        console.log(price);

        searchObj['propertyPrice'] = { $gte: price, $lte: price + 9999999 }
    }


    let data = await propertiesModel.find(searchObj)
        .populate("parentPropertyType", "propertyTypeName")
        .populate("subPropertyType", "subPropertyTypeName")
        .populate("propertyLocality", "localityName")
        .populate("propertyAmenities")

    let obj = {
        status: 1,
        msg: "Properties data",
        staticPath: process.env.PROPERTYIMAGEPATH,
        amenityImgPath: process.env.AMENITYIMAGEPATH,
        data
    }
    res.status(200).json(obj)
}

let viewPropertiesByType = async (req, res) => {
    let { ptype } = req.params
    console.log(req.query);
    

    if (ptype || req.query.propertyType) {
        let ptype_id = await propertyTypeModel.findOne({ slug: ptype }).select("_id")
        console.log(ptype_id);

         let sub_id = await subPropertyTypeModel.findOne({ subPropertyTypeName: req.query.propertyType }).select("_id")
        console.log(sub_id);


        let data = await propertiesModel.find({ $or:[ {parentPropertyType: ptype_id},{subPropertyType: sub_id}]})
            .populate("parentPropertyType", "propertyTypeName")
            .populate("subPropertyType", "subPropertyTypeName")
            .populate("propertyLocality", "localityName")
            .populate("propertyAmenities")

        let obj = {
            status: 1,
            msg: "Properties by type",
            staticPath: process.env.PROPERTYIMAGEPATH,
            amenityImgPath: process.env.AMENITYIMAGEPATH,
            data
        }
        res.status(200).json(obj)
    }
    let obj = {
        status: 0,
        msg: "provide property-type"
    }
    res.status(200).json(obj)
}

let viewSinglePropertyDetails = async (req, res) => {
    let { slug } = req.params

    let data = await propertiesModel.findOne({ slug: slug })
        .populate("parentPropertyType", "propertyTypeName")
        .populate("subPropertyType", "subPropertyTypeName")
        .populate("propertyLocality", "localityName")
        .populate("propertyAmenities")

    let obj = {
        status: 1,
        msg: "Single Property data",
        staticPath: process.env.PROPERTYIMAGEPATH,
        amenityImgPath: process.env.AMENITYIMAGEPATH,
        data
    }
    res.status(200).json(obj)
}

let viewImpactfulProperties = async (req, res) => {
    let data = await propertiesModel.find({ impactfulProperty: true })

        .populate("parentPropertyType", "propertyTypeName")
        .populate("subPropertyType", "subPropertyTypeName")
        .populate("propertyLocality", "localityName")
        .populate("propertyAmenities")

    let obj = {
        status: 1,
        msg: "Impactful Property data",
        staticPath: process.env.PROPERTYIMAGEPATH,
        amenityImgPath: process.env.AMENITYIMAGEPATH,
        data
    }
    res.status(200).json(obj)
}

let insertEnquiryData = async (req, res) => {
    let { name, email, phone,type, country_code, property_id, property } = req.body
    console.log(req.body);
    let obj
    let insertObj = {
        name,
        email,
        type,
        country_code,
        phone,
        property_id,
        property,
        status:true
    }

    if (req.body) {
        let data = await enquiryModel.insertOne(insertObj)
        obj = {
            status: 1,
            msg: " property enquiry saved Successfully!",
        }
        res.status(200).json(obj)
    }
    else {
        if (name == '') {
            obj = {
                status: 0,
                msg: "please enter name",
            }
            res.status(200).json(obj)
        }
        if (email == '') {
            obj = {
                status: 0,
                msg: "please enter email",
            }
            res.status(200).json(obj)
        }
        if (phone == '') {
            obj = {
                status: 0,
                msg: "please enter phone number",
            }
            res.status(200).json(obj)
        }
    }
}

module.exports = { megaMenu, propertyTypes, viewLocalitiesList, servicesList, subServicesList, viewTestimonial, viewContactDetails, viewProperties, viewPropertiesByType, viewSinglePropertyDetails, viewImpactfulProperties, insertEnquiryData }