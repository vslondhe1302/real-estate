let mongoose = require("mongoose")

let amenitiesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    status: Boolean
})

let amenitiesModel = mongoose.model("amenity", amenitiesSchema)
module.exports = {amenitiesModel}