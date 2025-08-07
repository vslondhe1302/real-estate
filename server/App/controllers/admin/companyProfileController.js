const { companyProfileModel } = require("../../models/companyProfileModel")
const fs = require("fs")

let addCompanyProfile = async (req, res) => {
    let { companyName,
        companyEmail,
        companyPhone,
        companyAddress,
        companyLocation,
        facebookLink,
        linkedinLink,
        instagramLink,
        youtubeLink } = req.body

        let insertObj
    try {
        insertObj = {
            companyName,
            companyEmail,
            companyPhone,
            companyAddress,
            companyLocation,
            facebookLink,
            linkedinLink,
            instagramLink,
            youtubeLink
        }

        let existing = await companyProfileModel.find()
        if(existing!=0){
            let obj = {
            status: 0,
            msg: "company profile already saved, you can edit !",
        }
        res.send(obj)
        }

        if (req.file) {
            insertObj["companyLogo"] = req.file.filename
        }

        let data = await companyProfileModel.insertOne(insertObj)

        let obj = {
            status: 1,
            msg: "Company Profile Saved Successfully !",
        }
        res.send(obj)
    }
    catch{
        if(companyName==''){
        let obj = {
            status: 0,
            msg: "please fill empty fields"
        }
        res.send(obj)
    }
    }
}

let viewCompanyProfile = async(req,res) =>{
    let data = await companyProfileModel.find()

    let obj = {
            status: 1,
            msg: "Company Profile data !",
            staticPath: process.env.COMPANYPROFILEIMAGEPATH,
            data
        }
        res.send(obj)
}

let deleteCompanyProfile = async (req,res) =>{

    let logo = await companyProfileModel.findOne().select("companyLogo")
    
    try{
    fs.unlinkSync('uploads/web-setting/'+logo.companyLogo)
    }
    catch(error){
        if (error.code !== 'ENOENT') {
                throw error
            }
            console.log("File was already deleted.")
    }

    let deleteRes = await companyProfileModel.deleteOne()
    let obj = {
            status: 1,
            msg: "Company Profile deleted Successfully !",
        }
        res.send(obj)
}

let updateCompanyProfile = async (req, res) => {
    let {id} = req.params
    let { companyName,
        companyEmail,
        companyPhone,
        companyAddress,
        companyLocation,
        facebookLink,
        linkedinLink,
        instagramLink,
        youtubeLink } = req.body

        let updateObj
    try {
        updateObj = {
            companyName,
            companyEmail,
            companyPhone,
            companyAddress,
            companyLocation,
            facebookLink,
            linkedinLink,
            instagramLink,
            youtubeLink
        }

        let logo = await companyProfileModel.findOne({_id:id}).select("companyLogo")
        fs.unlinkSync('uploads/web-setting/'+logo.companyLogo)

        if (req.file) {
            updateObj["companyLogo"] = req.file.filename
        }

        let data = await companyProfileModel.updateOne({_id:id},{$set: updateObj})

        let obj = {
            status: 1,
            msg: "Company Profile Updated Successfully !",
        }
        res.send(obj)
    }
    catch{
        if(companyName==''){
        let obj = {
            status: 0,
            msg: "please fill empty fields"
        }
        res.send(obj)
    }
    }
}

module.exports = {addCompanyProfile, viewCompanyProfile, deleteCompanyProfile, updateCompanyProfile}


// companyName
// "Sunrise Home Real E-State"
// companyEmail
// "sunrisehome@realestate.com"
// companyPhone
// "9876543210"
// companyAddress
// "at. Shirwal, Pune-Bangalore Highway,
// Satara, MH"
// companyLogo
// "1753641166339-sunrise_real_e_state.png"
// facebookLink
// "www.facebook.com/sunrisehome"
// linkedinLink
// "www.linkedin.com/company/sunrisehome"
// instagramLink
// "www.instagram.com/sunrisehome"
// youtubeLink
// "www.youtube.com/@sunrisehome"