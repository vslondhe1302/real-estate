let mongoose = require("mongoose")

let enquirySchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    phone: {type:Number, required:true},
    country_code:Number,
    type: {type:String, required:true},
    property:String,
    property_id:String,
    status:Boolean
})

let enquiryModel = mongoose.model("enquiry", enquirySchema)

module.exports = {enquiryModel}