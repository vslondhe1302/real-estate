const { servicesModel } = require("../../models/servicesModel")
const { subServicesModel } = require("../../models/subServicesModel")
const fs = require("fs")

let getParentServices = async (req, res) => {
    let data = await servicesModel.find().select("servicesTitle")

    let obj = {
        status: 1,
        msg: "Parent Services List !",
        data
    }

    res.send(obj)

}

let insertSubServices = async (req, res) => {
    let { parentServices, subServicesTitle, subServicesDescription } = req.body

    let obj
    try {
        let insertObj = {
            parentServices,
            subServicesTitle,
            subServicesDescription,
            subServicesStatus: true
        }

        if (req.file) {
            insertObj["subServicesImage"] = req.file.filename
        }

        await subServicesModel.insertOne(insertObj)
        obj = {
            status: 1,
            msg: "Sub-Services Added Successfully !"
        }

        res.send(obj)
    }
    catch {
        if (parentServices == '') {
            obj = {
                status: 0,
                msg: "Please select parent-service !"
            }
            res.send(obj)
        }
        if (subServicesTitle == '') {
            obj = {
                status: 0,
                msg: "Please fill sub-services title field !"
            }
            res.send(obj)
        }
        if (subServicesDescription == '') {
            obj = {
                status: 0,
                msg: "Please fill sub-services description field !"
            }
            res.send(obj)
        }
        if (!req.file) {
            obj = {
                status: 0,
                msg: "Please provide sub-service image !"
            }
            res.send(obj)
        }
    }
}

let viewSubServices = async (req, res) => {
    let data = await subServicesModel.find().populate("parentServices", "servicesTitle")

    let obj = {
        status: 1,
        msg: "Sub-Services List !",
        staticPath: process.env.SUBSERVICESIMAGEPATH,
        data
    }

    res.send(obj)
}

let deleteSubServices = async (req, res) => {
    let { ids } = req.body
    let obj
    if (ids != 0) {
        let subServicesImg = await subServicesModel.find({ _id: ids }).select("subServicesImage")
        for (let v of subServicesImg) {
            let deletePath = 'uploads/sub-services/' + v.subServicesImage
            fs.unlinkSync(deletePath)
        }
        let deleteRes = await subServicesModel.deleteMany({ _id: ids })
        obj = {
            status: 1,
            msg: "Sub-Services deleted Successfully !",
        }
        res.send(obj)
    }
    else {
        obj = {
            status: 0,
            msg: "Please select Sub-Services List !",
        }
        res.send(obj)
    }
}

let changeStatus = async (req, res) => {
    let { ids } = req.body

    let obj
    if (ids != 0) {

        await subServicesModel.updateMany({ _id: ids }, [{ $set: { subServicesStatus: { $not: '$subServicesStatus' } } }])
        obj = {
            status: 1,
            msg: "Sub-Services status changed Successfully !",
        }
        res.send(obj)
    }
    else {
        obj = {
            status: 0,
            msg: "Please select Sub-Services List !",
        }
        res.send(obj)
    }
}

let getSingleData = async (req, res) => {
    let { id } = req.params
    if (id) {
        let data = await subServicesModel.findOne({ _id: id }).populate("parentServices", "servicesTitle")

        let obj = {
            status: 1,
            msg: "Single Sub-Services List !",
            staticPath: process.env.SUBSERVICESIMAGEPATH,
            data
        }

        res.send(obj)
    }
}

let updateSubServices = async (req, res) => {
    let { id } = req.params
    let { parentServices, subServicesTitle, subServicesDescription } = req.body

    if (id) {
        let subServicesImg = await subServicesModel.find({ _id: id }).select('subServicesImage')
        for (let v of subServicesImg) {
            let deletePath = 'uploads/sub-services/' + v.subServicesImage
            fs.unlinkSync(deletePath)
        }

        let updateObj = {
            parentServices,
            subServicesTitle,
            subServicesDescription,
            subServicesStatus: true
        }

        if (req.file) {
            updateObj["subServicesImage"] = req.file.filename
        }

        await subServicesModel.updateOne({ _id: id }, { $set: updateObj })
        obj = {
            status: 1,
            msg: "Sub-Services Updated Successfully !"
        }

        res.send(obj)
    }
    else {
        if (parentServices == '') {
            obj = {
                status: 0,
                msg: "Please select parent-service !"
            }
            res.send(obj)
        }
        if (subServicesTitle == '') {
            obj = {
                status: 0,
                msg: "Please fill sub-services title field !"
            }
            res.send(obj)
        }
        if (subServicesDescription == '') {
            obj = {
                status: 0,
                msg: "Please fill sub-services description field !"
            }
            res.send(obj)
        }
        if (!req.file) {
            obj = {
                status: 0,
                msg: "Please provide sub-service image !"
            }
            res.send(obj)
        }
    }
}

module.exports = { insertSubServices, getParentServices, viewSubServices, deleteSubServices, changeStatus, getSingleData, updateSubServices }