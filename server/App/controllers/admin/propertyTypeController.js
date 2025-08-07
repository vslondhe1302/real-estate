const { propertyTypeModel } = require("../../models/propertyTypeModel")
const fs = require("fs");
const { subPropertyTypeModel } = require("../../models/subPropertyTypeModel");

let addPropertyType = async (req, res) => {
    let { propertyTypeName, propertyTypeOrder } = req.body
    let obj;
    try {
        let insertObj = {
            propertyTypeName,
            propertyTypeOrder,
            propertyTypeStatus: true
        }

        if (req.file) {
            insertObj['propertyTypeImage'] = req.file.filename
        }

        let data = await propertyTypeModel.insertOne(insertObj)

        obj = {
            status: 1,
            msg: "Property Type Added Successfully !"
        }

        res.send(obj)
    }
    catch {
        if (propertyTypeName == '') {
            obj = {
                status: 0,
                msg: "Please provide property-type name !"
            }
            res.send(obj)
        }
        if (propertyTypeOrder == '') {
            obj = {
                status: 0,
                msg: "Please provide property-type order !"
            }
            res.send(obj)
        }
        if (!req.file) {
            obj = {
                status: 0,
                msg: "Please provide property-type image !"
            }
            res.send(obj)
        }
    }
}

let viewPropertyTypes = async (req, res) => {
    let searchObj = {}

    if (req.query.propertyTypeName != '') {
        searchObj["propertyTypeName"] = { $regex: req.query.propertyTypeName, $options: 'i' }
    }
    let data = await propertyTypeModel.find(searchObj)

    let obj = {
        status: 1,
        msg: "Property-Types data",
        staticPath: process.env.PROPERTYTYPEIMAGEPATH,
        data
    }
    res.send(obj)
}

let deletePropertyType = async (req, res) => {
    let { ids } = req.body
    let obj
    if(ids.length>=1) {
        const subPropertyExists = await subPropertyTypeModel.findOne({ parentPropertyType: ids })
        if (subPropertyExists) {
            obj = {
                status: 0,
                msg: "Delete sub-property-type first !",
            }
            res.send(obj)
        }
        else {

            let proprtyTypes = await propertyTypeModel.find().select("propertyTypeImage")

            for (let v of proprtyTypes) {
                let deletePath = 'uploads/property-type/' + v.propertyTypeImage
                fs.unlinkSync(deletePath)
            }

            let deleteRes = await propertyTypeModel.deleteMany({ _id: ids })
            obj = {
                status: 1,
                msg: "Property-Types Deleted Successfully !",
            }
            res.send(obj)
        }
    }
    else {
        if (ids.length == 0) {
            obj = {
                status: 0,
                msg: "Please select property type !",
            }
            res.send(obj)
        }
    }
}

let changeStatus = async (req, res) => {
    let { ids } = req.body

    if (ids.length != 0) {
        let data = await propertyTypeModel.updateMany({ _id: ids }, [{ $set: { propertyTypeStatus: { $not: "$propertyTypeStatus" } } }])
        let obj = {
            status: 1,
            msg: "Status changed Successfully !",
        }
        res.send(obj)
    } else {
        let obj = {
            status: 0,
            msg: "Please select property type !",
        }
        res.send(obj)
    }
}

let singlePropertyType = async (req, res) => {
    let { id } = req.params

    let data = await propertyTypeModel.findOne({ _id: id })

    let obj = {
        status: 1,
        msg: "Single Property type data !",
        staticPath: process.env.PROPERTYTYPEIMAGEPATH,
        data
    }
    res.send(obj)
}

let updatePropertyType = async (req, res) => {
    let { id } = req.params
    let { propertyTypeName, propertyTypeOrder } = req.body

    let obj
    try {
        let propertyType = await propertyTypeModel.find({ _id: id }).select("propertyTypeImage")
        console.log(propertyType);

        for (let v of propertyType) {
            let deletePath = "uploads/property-type/" + v.propertyTypeImage
            fs.unlinkSync(deletePath)
        }

        let updateObj = {
            propertyTypeName,
            propertyTypeOrder,
            propertyTypeStatus: true
        }

        if (req.file) {
            updateObj["propertyTypeImage"] = req.file.filename
        }

        let data = await propertyTypeModel.updateOne({ _id: id }, { $set: updateObj })

        obj = {
            status: 1,
            msg: "Property Type Updated Successfully !"
        }
        res.send(obj)
    }
    catch {
        if (propertyTypeName == '') {
            obj = {
                status: 0,
                msg: "Please provide property Type name !"
            }
            res.send(obj)
        }
        if (propertyTypeOrder == '') {
            obj = {
                status: 0,
                msg: "Please provide property Type order !"
            }
            res.send(obj)
        }
        if (!req.file) {
            obj = {
                status: 0,
                msg: "Please provide property Type image !"
            }
            res.send(obj)
        }
    }
}

module.exports = { addPropertyType, viewPropertyTypes, deletePropertyType, changeStatus, singlePropertyType, updatePropertyType }