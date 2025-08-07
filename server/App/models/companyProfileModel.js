let mongoose = require("mongoose")

let companyProfileSchema = new mongoose.Schema({
    companyName: {type:String, required:true},
    companyEmail:{type:String, required:true},
    companyPhone: {type:String, required:true},
    companyAddress: {type:String, required:true},
    companyLogo: {type:String, required:true},
    companyLocation: {type:String},
    facebookLink: {type:String, required:true},
    linkedinLink: {type:String, required:true},
    instagramLink: {type:String, required:true},
    youtubeLink: {type:String, required:true}
})

let companyProfileModel = mongoose.model("companyProfile", companyProfileSchema)

module.exports = {companyProfileModel}