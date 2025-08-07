const { enquiryModel } = require("../../models/enquiryModel")

let viewEnquiries = async (req,res) =>{
    let data = await enquiryModel.find()
    let obj = {
        status: 1,
        msg: "Property enquiries",
        data
    }
    res.status(200).json(obj)
}

let deleteEnquiries = async (req,res) =>{
    let {ids} = req.body

    let data = await enquiryModel.deleteMany({_id:ids})

    let obj = {
        status: 1,
        msg: "Property enquiries deleted successfully!",
    }
    res.status(200).json(obj)
}


let changeStatus = async (req,res) =>{
    let {ids} = req.body

    let data = await enquiryModel.updateMany({_id:ids},[{$set: {status: {$not:"$status"}}}])

    let obj = {
        status: 1,
        msg: "Enquiries status changed successfully!",
    }
    res.status(200).json(obj)
}

module.exports = {viewEnquiries,deleteEnquiries, changeStatus}