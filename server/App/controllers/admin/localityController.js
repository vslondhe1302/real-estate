const { localityModel } = require("../../models/localityModel")

let addLocality = async (req, res) => {
    let { localityName, localityCity } = req.body
    let obj
    try {
        let insertObj = {
            localityName,
            localityCity,
            localityStatus: true
        }
        let data = await localityModel.insertOne(insertObj)
        obj = {
            status: 1,
            msg: "Locality Added Successfully !",
        }
        res.send(obj)
    }
    catch {
        if (localityName == '') {
            obj = {
                status: 0,
                msg: "Please provide locality name !"
            }
            res.send(obj)
        }
        if (localityCity == '') {
            obj = {
                status: 0,
                msg: "Please provide locality city !"
            }
            res.send(obj)
        }
    }
}

let viewLocality = async (req, res) => {

    let {localityName,currentPage} = req.query
    let limit = 4;
    let finalSkip = (currentPage-1)*limit
    let searchObj = {}

    if (localityName != '') {
        // searchObj['localityName'] = new RegExp(req.query.localityName, 'i')            // JS RegExp
        searchObj['localityName'] = { $regex: req.query.localityName, $options: 'i' }
    }

    let data = await localityModel.find(searchObj).skip(finalSkip).limit(limit)

    let totalRecords = await localityModel.find(searchObj)

    let obj = {
        status: 1,
        totalRecords:totalRecords.length,
        pages:Math.ceil((totalRecords.length)/limit),
        msg: "Locality List",
        data
    }
    res.send(obj)
}

let deleteLocality = async (req, res) => {
    let {ids} = req.body

    let deleteLocality = await localityModel.deleteMany({ _id: ids })
    let obj = {
        status: 1,
        msg: "Locality List Deleted Successfully !"
    }
    res.send(obj)
}

let changeStatus = async (req, res) => {
    let { ids } = req.body

    if (ids.length != 0) {
        let data = await localityModel.updateMany({ _id: ids }, [{ $set: { localityStatus: { $not: '$localityStatus' } } }])
        let obj = {
            status: 1,
            msg: "Status changed Successfully !"
        }
        res.send(obj)
    } else {
        let obj = {
            status: 0,
            msg: "Please select locality !"
        }
        res.send(obj)
    }
}

let singleData = async (req, res) => {
    let { id } = req.params
    if (id) {
        let data = await localityModel.findOne({ _id: id })
        let obj = {
            status: 1,
            msg: "Single Locality List",
            data
        }
        res.send(obj)
    } else {
        let obj = {
            status: 0,
            msg: "Id not found",
            data
        }
        res.send(obj)
    }

}

let updateLocality = async (req, res) => {
    let { id } = req.params
    let { localityName, localityCity } = req.body

    let obj
    try {
        let updateData = {
            localityName,
            localityCity,
            localityStatus: true
        }
        let data = await localityModel.updateOne({ _id: id }, {$set:updateData})

        obj = {
            status: 1,
            msg: "Locality List Updated Successfully !"
        }
        res.send(obj)
    }
    catch {
        if (localityName == '') {
            obj = {
                status: 0,
                msg: "Please provide locality name !"
            }
            res.send(obj)
        }
        if (localityCity == '') {
            obj = {
                status: 0,
                msg: "Please provide locality city !"
            }
            res.send(obj)
        }
    }
}

module.exports = { addLocality, viewLocality, deleteLocality, changeStatus, singleData, updateLocality }