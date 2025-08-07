const path = require("path");
const { amenitiesModel } = require("../../models/amenitiesModel");
const { localityModel } = require("../../models/localityModel");
const { propertiesModel } = require("../../models/propertiesModel");
const { propertyTypeModel } = require("../../models/propertyTypeModel");
const { subPropertyTypeModel } = require("../../models/subPropertyTypeModel");
const fs = require("fs");

let parentPropertyType = async (req, res) => {
    let data = await propertyTypeModel.find({ propertyTypeStatus: true }).select("propertyTypeName")

    let obj = {
        status: 1,
        msg: "Parent Property-Types !",
        data
    }
    res.send(obj)
}

let subPropertyTypes = async (req, res) => {
    let { parentId } = req.params
    console.log(parentId);
    if (parentId != 0) {
        let data = await subPropertyTypeModel.find({ parentPropertyType: parentId }, { subPropertyTypeStatus: true }).select("subPropertyTypeName")

        let obj = {
            status: 1,
            msg: "Sub Property-Types !",
            data
        }
        res.send(obj)
    }
}

let localityList = async (req, res) => {
    let data = await localityModel.find({ localityStatus: true }).select("localityName")

    let obj = {
        status: 1,
        msg: "Locality list !",
        data
    }
    res.send(obj)
}

let amenitiesList = async (req, res) => {
    let data = await amenitiesModel.find({ status: true })

    let obj = {
        status: 1,
        msg: "Amenities list !",
        data
    }
    res.send(obj)
}

let insertProperty = async (req, res) => {
    let insertObj = { ...req.body }
    
    let { propertyname } = req.query

    let obj;
    try {
        if (propertyname != '') {
            if (req.files) {
                if (req.files.propertyImage) {
                    insertObj['propertyImage'] = path.join(propertyname, req.files.propertyImage[0].filename).replace(/\\/g, '/')
                }
                if (req.files.propertyGalleryImages) {
                    insertObj['propertyGalleryImages'] = path.join(propertyname, req.files.propertyGalleryImages.map((items) => items.filename)).replace(/\\/g, '/')
                }
            }
        }
        let data = await propertiesModel.insertOne(insertObj)

        obj = {
            status: 1,
            msg: "Property Saved Successfully !"
        }

        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Please fill required fields !",
            error: error
        }
        res.send(obj)
    }
}

let viewProperties = async (req, res) => {
    let { currentPage } = req.query
    let limit = 4;
    let finalSkip = (currentPage - 1) * limit

    let data = await propertiesModel.find().skip(finalSkip).limit(limit)

    let totalRecords = await propertiesModel.find()

    let obj = {
        status: 1,
        msg: "Properties data !",
        totalRecords: totalRecords.length,
        pages: Math.ceil((totalRecords.length) / limit),
        staticPath: process.env.PROPERTYIMAGEPATH,
        data
    }
    res.send(obj)
}

let getSingleData = async (req, res) => {
    let { id } = req.params

    if (id != 0) {
        let data = await propertiesModel.findOne({ _id: id })
            .populate("parentPropertyType", "propertyTypeName")
            .populate("subPropertyType", "subPropertyTypeName")
            .populate("propertyLocality", "localityName")
            .populate("propertyAmenities", "title")

        let obj = {
            status: 1,
            msg: "Properties single data !",
            staticPath: process.env.PROPERTYIMAGEPATH,
            data
        }
        res.send(obj)
    }
    else {
        let obj = {
            status: 0,
            msg: "Id not found !"
        }
        res.send(obj)
    }
}

let deleteProperty = async (req, res) => {
    let { id } = req.params

    if (id != 0) {
        // let propertyImg = await propertiesModel.find({ _id: id }).select(["propertyImage", "propertyGalleryImages"])
        let slug = await propertiesModel.find({ _id: id }).select("slug")

        for (let v of slug) {
            let deleteFolder = path.join('uploads/properties', v.slug).replace(/\\/g, '/')

            if (fs.existsSync(deleteFolder)) {
                fs.rmSync(deleteFolder, { recursive: true, force: true })
            }
        }
        // for (let v of propertyImg) {
        //     let deletePath = 'uploads/properties/' + v.propertyImage
        //     try {
        //         fs.unlinkSync(deletePath)
        //     }
        //     catch (error) {
        //         if (error.code !== 'ENOENT') {
        //             throw error
        //         }
        //         console.log("File was already deleted.")
        //     }
        //     for (let gallery of v.propertyGalleryImages) {
        //         try {
        //             fs.unlinkSync('uploads/properties/' + gallery)
        //         }
        //         catch (error) {
        //             if (error.code !== 'ENOENT') {
        //                 throw error
        //             }
        //             console.log("File was already deleted.")
        //         }
        //     }
        // }

        let deleteRes = await propertiesModel.deleteOne({ _id: id })
        let obj = {
            status: 1,
            msg: "Property Deleted Successfully !"
        }
        res.send(obj)
    }
    else {
        let obj = {
            status: 0,
            msg: "Select Property !"
        }
        res.send(obj)
    }
}

let updateProperty = async (req, res) => {
    let updateObj = { ...req.body }
    let { id } = req.params

    let propertyname = req.query
    console.log(req.query);
    console.log(req.files);
    
    

    let obj
    if (id != 0) {

        let slug = await propertiesModel.find({ _id: id }).select("slug")

        for (let v of slug) {
            let deleteFolder = path.join('uploads/properties', v.slug).replace(/\\/g, '/')
            
            if (fs.existsSync(deleteFolder)) {
                fs.rmSync(deleteFolder, { recursive: true, force: true })
            }
        }

        if (req.files) {
            if (req.files.propertyImage) {
                updateObj['propertyImage'] = path.join(propertyname,req.files.propertyImage[0].filename).replace(/\\/g, '/')
            }
            if (req.files.propertyGalleryImages) {
                updateObj['propertyGalleryImages'] = path.join(propertyname, req.files?.propertyGalleryImages.map((items) => items.filename)).replace(/\\/g, '/')
            }
        }
        let data = await propertiesModel.updateOne({ _id: id }, { $set: updateObj })

        obj = {
            status: 1,
            msg: "Property Updated Successfully !"
        }
        res.send(obj)
    }
    else {
        obj = {
            status: 0,
            msg: "Please fill required fields !",
        }
        res.send(obj)
    }
}
module.exports = { parentPropertyType, subPropertyTypes, localityList, amenitiesList, insertProperty, viewProperties, getSingleData, deleteProperty, updateProperty }