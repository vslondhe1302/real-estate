let mongoose = require("mongoose")

let subServicesSchema = new mongoose.Schema({
    parentServices : {type : mongoose.Types.ObjectId, ref:"service", required: true},
    subServicesTitle : {type: String, required: true},
    subServicesDescription : {type: String, required: true},
    subServicesImage : {type: String, required: true},
    subServicesStatus : Boolean
})

let subServicesModel = mongoose.model("subservice", subServicesSchema)
module.exports = {subServicesModel}