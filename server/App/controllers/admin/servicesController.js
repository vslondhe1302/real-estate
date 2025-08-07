const { servicesModel } = require("../../models/servicesModel")
const { subServicesModel } = require("../../models/subServicesModel")

let insertServices = async (req, res) => {
    let { servicesTitle, servicesDescription } = req.body

    let obj
    try {
        let insertObj = {
            servicesTitle,
            servicesDescription,
            servicesStatus: true
        }

        await servicesModel.insertOne(insertObj)
        obj = {
            status: 1,
            msg: "Services Added Successfully !"
        }

        res.send(obj)
    }
    catch {
        if (servicesTitle == '') {
            obj = {
                status: 0,
                msg: "Please fill services title field !"
            }
            res.send(obj)
        }
        if (servicesDescription == '') {
            obj = {
                status: 0,
                msg: "Please fill services description field !"
            }
            res.send(obj)
        }
    }
}

let viewServices = async (req, res) => {
    let data = await servicesModel.find()

    let obj = {
        status: 1,
        msg: "Services List",
        data
    }

    res.send(obj)

}

let deleteServices = async (req, res) => {
    let { ids } = req.body

    let obj
    if (ids.length >= 1) {
        const subServiceExists = await subServicesModel.findOne({ parentServices: ids })
        if (subServiceExists) {
            obj = {
                status: 0,
                msg: "Delete sub-services first",
            }
            res.send(obj)
        }
        else {

            await servicesModel.deleteMany({ _id: ids })

            obj = {
                status: 1,
                msg: "Services list deleted Successfully !"
            }

            res.send(obj)
        }
    }
    else {
        obj = {
            status: 0,
            msg: "Please select Services list !"
        }

        res.send(obj)
    }
}

let changeStatus = async (req, res) => {
    let { ids } = req.body

    if (ids != 0) {
        await servicesModel.updateMany({ _id: ids }, [{ $set: { servicesStatus: { $not: "$servicesStatus" } } }])

        let obj = {
            status: 1,
            msg: "Status changed Successfully !"
        }

        res.send(obj)
    }
    else {
        let obj = {
            status: 0,
            msg: "Please select Services list !"
        }

        res.send(obj)
    }
}

let singleData = async (req, res) => {
    let { id } = req.params

    if (id != 0) {
        let data = await servicesModel.findOne({ _id: id })
        let obj = {
            status: 1,
            msg: "Single Data",
            data
        }

        res.send(obj)

    }
}

let updateService = async (req, res) => {
    let { id } = req.params
    let { servicesTitle, servicesDescription } = req.body

    let obj
    try {
        let updateObj = {
            servicesTitle,
            servicesDescription,
            servicesStatus: true
        }

        await servicesModel.updateOne(updateObj)
        obj = {
            status: 1,
            msg: "Services Updated Successfully !"
        }

        res.send(obj)
    }
    catch {
        if (servicesTitle == '') {
            obj = {
                status: 0,
                msg: "Please fill services title field !"
            }
            res.send(obj)
        }
        if (servicesDescription == '') {
            obj = {
                status: 0,
                msg: "Please fill services description field !"
            }
            res.send(obj)
        }
    }
}

module.exports = { insertServices, viewServices, deleteServices, changeStatus, singleData, updateService }