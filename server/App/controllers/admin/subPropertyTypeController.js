const { propertyTypeModel } = require("../../models/propertyTypeModel")
const { subPropertyTypeModel } = require("../../models/subPropertyTypeModel")
const fs = require("fs")

let parentPropertyType = async (req, res) => {
    let data = await propertyTypeModel.find({ propertyTypeStatus: true })

    let obj = {
        status: 1,
        msg: "Parent Property Types",
        data
    }
    res.send(obj)
}


let insertSubPropertyType = async (req, res) => {
    let { parentPropertyType, subPropertyTypeName } = req.body

    let insertObj = {
        parentPropertyType,
        subPropertyTypeName,
        subPropertyTypeStatus: true
    }

    if (req.file) {
        insertObj["subPropertyTypeImage"] = req.file.filename
    }

    let data = await subPropertyTypeModel.insertOne(insertObj)

    let obj = {
        status: 1,
        msg: "Sub-Property-Type added successfilly !",
        data
    }
    res.send(obj)
}

let viewSubPropertyType = async (req, res) => {
    let {subPropertyTypeName,currentPage} = req.query
    let limit = 4;
    let finalSkip = (currentPage-1)*4

    let searchObj = {}

    if (subPropertyTypeName != '') {
        searchObj["subPropertyTypeName"] = { $regex: req.query.subPropertyTypeName, $options: 'i' }
    }

    let data = await subPropertyTypeModel.find(searchObj).populate('parentPropertyType', 'propertyTypeName').skip(finalSkip).limit(limit)

    let totalRecords = await subPropertyTypeModel.find(searchObj)

    let obj = {
        status: 1,
        msg: "Sub-Property-Types data !",
        totalRecords: totalRecords.length,
        pages: Math.ceil((totalRecords.length)/limit),
        staticPath: process.env.SUBPROPERTYTYPEIMAGEPATH,
        data
    }
    res.send(obj)
}

let deleteSubPropertyType = async (req, res) => {
    let { ids } = req.body
    let obj;

    if (ids != 0) {

        let subPropertyType = await subPropertyTypeModel.find({ _id: ids }).select("subPropertyTypeImage")
        for (let v of subPropertyType) {
            let deletePath = 'uploads/sub-property-type/' + v.subPropertyTypeImage
            try {
                fs.unlinkSync(deletePath)
            }
            catch (error) {
                if (error.code !== 'ENOENT') {
                    throw error
                }
                console.log("File was already deleted.")
            }
        }

        let deleteRes = await subPropertyTypeModel.deleteMany({ _id: ids })

        obj = {
            status: 1,
            msg: "Sub-Property-Type deleted Successfully !",
        }
        res.send(obj)
    } else {
        obj = {
            status: 0,
            msg: "Please select sub-property-type !",
        }
        res.send(obj)
    }
}

let changeStatus = async (req, res) => {
    let { ids } = req.body

    let obj;
    if (ids != 0) {
        let statusRes = await subPropertyTypeModel.updateMany({ _id: ids }, [{ $set: { subPropertyTypeStatus: { $not: '$subPropertyTypeStatus' } } }])

        obj = {
            status: 1,
            msg: "Sub-Property-Type Status changed Successfully !",
        }
        res.send(obj)
    } else {
        obj = {
            status: 0,
            msg: "Please select sub-property-type !",
        }
        res.send(obj)
    }
}

let getSingleData = async (req, res) => {
    let { id } = req.params

    let data = await subPropertyTypeModel.findOne({ _id: id }).populate("parentPropertyType", 'propertyTypeName')

    let obj = {
        status: 1,
        msg: "single Sub-Property-Type data",
        staticPath: process.env.SUBPROPERTYTYPEIMAGEPATH,
        data
    }
    res.send(obj)
}

let updateSubPropertyType = async (req, res) => {
    let { id } = req.params
    let { parentPropertyType, subPropertyTypeName } = req.body

    if (id != 0) {
        let subPropertyType = await subPropertyTypeModel.find({ _id: id }).select('subPropertyTypeImage')
        for (let v of subPropertyType) {
            let deletePath = 'uploads/sub-property-type/' + v.subPropertyTypeImage
            try {
                fs.unlinkSync(deletePath)
            }
            catch (error) {
                if (error.code !== 'ENOENT') {
                    throw error
                }
                console.log("File was already deleted.")
            }
        }

        let updateObj = {
            parentPropertyType,
            subPropertyTypeName,
            subPropertyTypeStatus: true
        }

        if (req.file) {
            updateObj["subPropertyTypeImage"] = req.file.filename
        }

        let data = await subPropertyTypeModel.updateOne({ _id: id }, { $set: updateObj })

        let obj = {
            status: 1,
            msg: "Sub-Property-Type data Updated Successfully !",
        }
        res.send(obj)
    }

}

module.exports = { parentPropertyType, insertSubPropertyType, viewSubPropertyType, deleteSubPropertyType, changeStatus, getSingleData, updateSubPropertyType }